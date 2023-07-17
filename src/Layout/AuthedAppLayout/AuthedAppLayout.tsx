import React from "react";
import type { ReactNode } from "react";
import {
  ContentWrapper,
  ContentContainer,
  AuthedAppLayoutContainer,
} from "./AuthedAppLayout.style";
export type AuthorizedAppLayout = {
  children: ReactNode | JSX.Element | JSX.Element[];
  hasCustomSpacing?: boolean;
  className?: string;
};

export default function AuthorizedAppLayout({
  children,
  hasCustomSpacing,
}: AuthorizedAppLayout) {
  return (
    <AuthedAppLayoutContainer>
      <ContentWrapper $hasCustomSpacing={hasCustomSpacing}>
        <ContentContainer>{children}</ContentContainer>
      </ContentWrapper>
    </AuthedAppLayoutContainer>
  );
}
