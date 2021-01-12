import { Post } from 'api';
import { Container } from 'components/Post/styles';
import renderers from 'helpers/renderers';
import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SubTitle } from 'styles/shared';

const CustomHead = (props: {
  title: string;
  excerpt: string;
  coverImage: string;
}) => {
  const { title, excerpt, coverImage } = props;

  return (
    <Head>
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={excerpt} />
      <meta key="og:image" property="og:image" content={coverImage} />

      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={excerpt}
      />
      <meta key="twitter:card" name="twitter:card" content={coverImage} />
    </Head>
  );
};

const Item = (props: Partial<Post>) => {
  const { title, content, excerpt, coverImage } = props;

  return (
    <Container>
      <CustomHead excerpt={excerpt} title={title} coverImage={coverImage} />
      <SubTitle>{title}</SubTitle>
      <ReactMarkdown source={content} renderers={renderers} />
    </Container>
  );
};

export default Item;
