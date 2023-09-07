import { parseChunked } from '@discoveryjs/json-ext';
import Listr from 'listr';
import { payloadSchema } from './schema';
const validateContentfulExportData = async (data) => {
  const result = payloadSchema.validate(data, { allowUnknown: true, abortEarly: false });
  if (result.error) {
    throw result.error;
  }
};
const readContentfulExportFile = async (contentFile) => {
  const fileStream = fs.createReadStream(contentFile, { encoding: 'utf8' });
  options.content = await parseChunked(fileStream);
};

const createReactComponents = async (contentFile) => {
  const fileStream = fs.createReadStream(contentFile, { encoding: 'utf8' });
  options.content = await parseChunked(fileStream);
};

const runContentfulImport = async (params) => {
  const content = await readContentfulExportFile(params.contentFile);

  const tasks = new Listr([
    {
      title: 'Validating contentful file',
      task: () => validateContentfulExportData(content),
    },
    {
      title: 'Create react components',
      task: () => createReactComponents(content),
    },
  ]);
};
