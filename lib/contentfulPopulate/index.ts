import contentful, { EntryProps } from 'contentful-management';

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const DEFAULT_LOCALE = 'en-US';

const generateContent = () => {};

// ENTRY EXAMPLE
// {
//   metadata: { tags: [] },
//   sys: {
//     space: { sys: { type: 'Link', linkType: 'Space', id: 'tsre65mxrq21' } },
//     id: '3mwQ9PrdCBy9O1FPxpkGqD',
//     type: 'Entry',
//     createdAt: '2023-09-05T14:29:02.640Z',
//     updatedAt: '2023-09-05T14:29:13.742Z',
//     environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
//     publishedVersion: 2,
//     publishedAt: '2023-09-05T14:29:13.742Z',
//     firstPublishedAt: '2023-09-05T14:29:13.742Z',
//     createdBy: {
//       sys: { type: 'Link', linkType: 'User', id: '24FYtS1aSLleKvTSI8ugOJ' }
//     },
//     updatedBy: {
//       sys: { type: 'Link', linkType: 'User', id: '24FYtS1aSLleKvTSI8ugOJ' }
//     },
//     publishedCounter: 1,
//     version: 3,
//     publishedBy: {
//       sys: { type: 'Link', linkType: 'User', id: '24FYtS1aSLleKvTSI8ugOJ' }
//     },
//     automationTags: [],
//     contentType: {
//       sys: { type: 'Link', linkType: 'ContentType', id: 'navigation' }
//     }
//   },
//   fields: {
//     internalName: { 'en-US': 'test1' },
//     externalName: { 'en-US': 'test1' },
//     navigationItems: {
//       'en-US': [
//         {
//           sys: {
//             type: 'Link',
//             linkType: 'Entry',
//             id: '4Bn07DVW7piGOLwm94TBn0'
//           }
//         }
//       ]
//     }
//   }
// }

// This API call will request a space with the specified ID
client.getSpace('tsre65mxrq21').then((space) => {
  space.getEnvironment('master').then((environment) => {
    // LOG ENTRIES
    // environment.getEntries().then((entries) => entries.items.map((entry) => {
    //   console.log(util.inspect(entry, { showHidden: false, depth: null, colors: true }))
    // }))

    environment.getContentTypes().then((contentTypes) => {
      if (contentTypes.items[0]?.fields) {
        const contentModelFields = contentTypes.items[0]?.fields;

        const randomFieldData = {} as EntryProps['fields'];
        contentModelFields.forEach((item) => {
          let value: any;

          switch (item.type) {
            case 'Symbol':
              value = `test (${item.type} ${item.id})`;
              break;
            case 'Text':
              value = `test (${item.type} ${item.id})`;
              break;
            case 'RichText':
              value = `test (${item.type} ${item.id})`;
              break;
            case 'Integer':
              value = Math.floor(Math.random() * 10);
              break;
            case 'Number':
              value = Math.random();
              break;
            case 'Date':
              value = new Date();
              break;
            case 'Location':
              value = { lat: 51.5125839, lon: -0.2190781 };
              break;
            case 'Boolean':
              value = true;
              break;
            case 'Link':
              const typeId = item.validations?.[0]?.linkContentType?.[0];
              if (typeId) {
                environment.getContentType(typeId).then((contentType) => {
                  console.log(contentType);
                });
              }

              // environment.createEntry(item.type, {

              // })
              break;
            case 'Array':
              break;
            case 'Object':
              value = '{"name":"John", "age":30, "car":null}';
              break;
            default:
              throw new Error(`unsupported model type: ${item.type}`);
          }

          randomFieldData[item.id] = {
            [DEFAULT_LOCALE]: value,
          };
        });
      }
    });
  });
});
