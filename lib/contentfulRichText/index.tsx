import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types';
import Link from 'next/link';

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span>{text}</span>,
    [MARKS.ITALIC]: (text) => <span>{text}</span>,
    [MARKS.UNDERLINE]: (text) => <span>{text}</span>,
    [MARKS.CODE]: (text) => <span>{text}</span>,
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, children) => <span>{children}</span>,
    [BLOCKS.PARAGRAPH]: (node, children) => <span>{children}</span>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.HR]: (node, children) => <hr />,
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <span>{'EMBEDDED_ENTRY'}</span>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => <span>{'EMBEDDED_ASSET'}</span>,
    [BLOCKS.EMBEDDED_RESOURCE]: (node, children) => <span>{'EMBEDDED_RESOURCE'}</span>,
    [INLINES.EMBEDDED_ENTRY]: (node, children) => <span>{'EMBEDDED_ENTRY'}</span>,
    [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri}>{children}</Link>,
    [INLINES.ENTRY_HYPERLINK]: (node, children) => <span>{'ENTRY_HYPERLINK'}</span>,
    [INLINES.ASSET_HYPERLINK]: (node, children) => <span>{'ASSET_HYPERLINK'}</span>,
  },
  renderText: (text) => {
    return text;
  },
  preserveWhitespace: true,
};

export const documentToReactComponent = (richTextDocument: Document) =>
  documentToReactComponents(richTextDocument, options);

export default documentToReactComponent;
