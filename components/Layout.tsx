import React, { ReactElement, ReactNode } from 'react';
import styles from '../styles/Layout.module.css';
import Nav from '../components/Nav';

interface LayoutProps {
  children: ReactNode;
}

// 모든 페이지에 적용되므로 styles 등등 원하는대로 적용해서 _app.tsx 감싸기
function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

export default Layout;
