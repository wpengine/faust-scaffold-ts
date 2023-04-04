import { WordPressTemplate } from '@faustwp/core';
import { WordPressTemplateProps } from '../types';

export default function Preview(props: WordPressTemplateProps) {
  return <WordPressTemplate {...props} />;
}
