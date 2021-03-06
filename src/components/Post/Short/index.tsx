import { Post } from 'api';
import renderers from 'helpers/renderers';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import sharedStyles from '../Post.module.css';
import styles from './Short.module.css';

const Item = (props: Partial<Post>) => {
  const { slug, title, excerpt } = props;

  return (
    <div className={sharedStyles.container}>
      <Link href={'/blog/[slug]'} as={`/blog/${slug}`} passHref>
        <div className={styles.redirect}>
          <h2 className={sharedStyles.subtitle}>{title}</h2>
          <ReactMarkdown source={excerpt} renderers={renderers} />
        </div>
      </Link>
    </div>
  );
};

export default Item;
