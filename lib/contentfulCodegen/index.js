import { loadFilesSync } from '@graphql-tools/load-files';

// const json = await readFile('./contentful-export.json');
// const packageLine = JSON.parse(json);

// const parsedFile = packageLine.contentTypes.map(contentType => {

//   const fileds = contentType.fields.map(field => {
//     return {
//       field: field.name,
//       isRequired: field.required
//     }
//   })

//   return {
//     name: contentType.name,
//     fields: fileds
//   }
// })

// await writeFile('./contentful-export-parsed.json', JSON.stringify(parsedFile));
const schema = loadFilesSync('./schema.graphql');
console.log(schema[0].definitions[0]);
