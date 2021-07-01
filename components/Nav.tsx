import React, { ReactElement } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function Nav(): ReactElement {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div``;
