import { Post as PostType } from 'api';
import Layout from 'components/Layout';
import Post from 'components/Post';
import usePagination from 'hooks/usePagination';
import React from 'react';
import { ViewportAwareContainer } from 'styles/shared';

import { Button } from './styles';

interface Props {
  posts: PostType[];
}

const Blog = (props: Props) => {
  const { posts } = props;
  const { next, isLast, index } = usePagination(posts);

  return (
    <Layout>
      <ViewportAwareContainer>
        {posts
          .map(
            ({ title, slug, author, content, publishedAt, excerpt }, index) =>
              slug && (
                <Post.Short
                  slug={slug}
                  title={title}
                  content={content}
                  author={author}
                  publishedAt={publishedAt}
                  excerpt={excerpt}
                  key={index}
                />
              ),
          )
          .slice(0, index)}

        {!isLast && <Button onClick={next}>View More</Button>}
      </ViewportAwareContainer>
    </Layout>
  );
};

export default Blog;