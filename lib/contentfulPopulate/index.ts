import contentful, { EntryProps } from 'contentful-management';
import fs from 'fs';

const client = contentful.createClient({
  accessToken: 'CFPAT-0jxcuEx0RFwaxuXsZTiIfvxeoAoD5bRbcuVi6aLMOJY',
});

const DEFAULT_LOCALE = 'en-US';

const generateContent = async (
  item: contentful.ContentFields<contentful.KeyValueMap>,
  environment: contentful.Environment,
  contentType: string,
) => {
  switch (item.type) {
    case 'Symbol':
      return `${contentType} - (${item.type} ${item.id})`;
    case 'Text':
      return `${contentType} -  (${item.type} ${item.id})`;
    case 'RichText':
      return [
        {
          nodeType: 'paragraph', // Can be paragraphs, images, lists, embedded entries
          data: {},
          content: [
            {
              nodeType: 'text',
              value: `${contentType} - (${item.type} ${item.id})`,
              data: {},
              marks: [],
            },
          ],
        },
      ];
    case 'Integer':
      return Math.floor(Math.random() * 10);
    case 'Number':
      return Math.random();
    case 'Date':
      return new Date();
    case 'Location':
      return { lat: 51.5125839, lon: -0.2190781 };
    case 'Boolean':
      return true;
    case 'Link':
      {
        const isAsset = item.linkType === 'Asset';

        const typeId = item.validations?.[0]?.linkContentType?.[0];
        console.log('Link', item);
        if (typeId) {
          const contentModel = await environment.getContentType(typeId);
          const contentModelFields = contentModel.fields;
          const randomFieldData = {} as EntryProps['fields'];

          for (const contentModelField of contentModelFields) {
            const contentTypeRelations = `${contentType}  ${typeId}`;
            const value = await generateContent(
              contentModelField,
              environment,
              contentTypeRelations,
            );
            randomFieldData[contentModelField.id] = {
              [DEFAULT_LOCALE]: value,
            };
          }

          const newEntry = await environment.createEntry(typeId, { fields: randomFieldData });

          return {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: newEntry.sys.id,
            },
          };
        }
        if (isAsset) {
          const data = {
            fields: {
              title: {
                [DEFAULT_LOCALE]: `${contentType} - (${item.type} ${item.id})`,
              },
              description: {
                [DEFAULT_LOCALE]: 'this is a test tile',
              },
              file: {
                [DEFAULT_LOCALE]: {
                  contentType: 'image/png',
                  fileName: `${contentType}-(${item.type}-${item.id}).png`,
                  file: fs.createReadStream(
                    '/Users/lukasz/Documents/GitHub/storefront/lib/contentfulPopulate/test.png',
                  ),
                },
              },
            },
          };
          const asset = await environment.createAssetFromFiles(data);
          return {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: asset.sys.id,
            },
          };
        }
      }
      break;
    case 'Array':
      {
        const typeId = item.items?.validations?.[0]?.linkContentType?.[0];
        console.log('Array', typeId);
        if (typeId) {
          const contentModel = await environment.getContentType(typeId);
          const contentModelFields = contentModel.fields;

          const randomFieldData = {} as EntryProps['fields'];

          for (const contentModelField of contentModelFields) {
            const value = await generateContent(contentModelField, environment, contentType);
            randomFieldData[contentModelField.id] = {
              [DEFAULT_LOCALE]: value,
            };
          }
          const newEntry = await environment.createEntry(typeId, { fields: randomFieldData });

          return [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: newEntry.sys.id,
              },
            },
          ];
        }
      }
      break;
    case 'Object':
      return { name: 'John', age: 30, car: null };
    default:
      return '';
  }
};

// This API call will request a space with the specified ID
client.getSpace('tsre65mxrq21').then((space) => {
  space.getEnvironment('master').then((environment) => {
    environment.getContentTypes().then(async (contentTypes) => {
      // tutaj loop po contentTypes zamiast contentTypes.items[0]\
      for (const contentType of contentTypes.items) {
        const contentModelFields = contentType.fields;
        const contentTypeId = contentType.sys.id;
        const randomFieldData = {} as EntryProps['fields'];

        //gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971
        https: for (const contentModelField of contentModelFields) {
          const value = await generateContent(contentModelField, environment, contentTypeId);
          randomFieldData[contentModelField.id] = {
            [DEFAULT_LOCALE]: value,
          };
        }

        await environment.createEntry(contentTypeId, { fields: randomFieldData });
      }
    });
  });
});
