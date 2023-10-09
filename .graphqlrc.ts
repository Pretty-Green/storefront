import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'lib/saleor/generated/': {
      documents: 'lib/saleor/**/*.graphql',
      schema: process.env.SALEOR_INSTANCE_URL,
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
        dedupeFragments: true,
      },
      config: {
        useTypeImports: true,
        defaultScalarType: 'unknown',
        documentMode: 'string',
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        scalars: {
          Date: 'string',
          DateTime: 'string',
          bDecimal: 'numer',
          JSONString: 'string',
          Metadata: 'Record<string, string>',
          PositiveDecimal: 'number',
          UUID: 'string',
          WeightScalar: 'number',
        },
      },
    },
    'lib/contentful/generated/': {
      documents: 'lib/contentful/**/*.graphql',
      schema: [
        {
          [process.env.CONTENTFUL_INSTANCE_URL || '']: {
            headers: {
              Authorization: process.env.CONTENTFUL_INSTANCE_TOKEN || '',
            },
          },
        },
      ],
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
        dedupeFragments: true,
      },
      config: {
        avoidOptionals: true,
        useTypeImports: true,
        defaultScalarType: 'unknown',
        skipTypename: true,
        documentMode: 'string',
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        scalars: {
          Date: 'string',
          DateTime: 'string',
          Decimal: 'number',
          JSONString: 'string',
          Metadata: 'Record<string, string>',
          PositiveDecimal: 'number',
          UUID: 'string',
          WeightScalar: 'number',
        },
      },
    },
  },
};

export default config;
