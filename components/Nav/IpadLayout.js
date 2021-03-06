import React from 'react';
import {
  NavContainer,
  LogoContainer,
  Logo,
  LogoText,
  Links
} from './styles.js';
import { DefaultLink, AppText, LinkText } from './../styled';

export default function IpadLayout({ logo }) {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo source={logo} alt="solar system logo" />
        <LogoText>Akin's Pocket</LogoText>
      </LogoContainer>
      <Links>
        <DefaultLink margin to="/">
          <LinkText dark>Reddit</LinkText>
        </DefaultLink>
        <DefaultLink margin to="/hackernoon">
          <LinkText dark>Hackernoon</LinkText>
        </DefaultLink>
        <DefaultLink margin to="/hackernews">
          <LinkText dark>Hackernews</LinkText>
        </DefaultLink>
      </Links>
    </NavContainer>
  );
}
