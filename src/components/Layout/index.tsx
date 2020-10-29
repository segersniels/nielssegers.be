import Head from 'components/Head';
import React from 'react';
import { Fragment, ReactNode } from 'react';

import Header from './Header';
import Navigation from './Navigation';
import { Container } from './styles';

interface Props {
  children: ReactNode;
  className?: string;
}

const Layout = (props: Props) => {
  const { children, className = 'Layout' } = props;

  return (
    <Fragment>
      <Head />
      <Header />
      <Navigation />
      <Container className={className}>{children}</Container>
    </Fragment>
  );
};

export default Layout;
