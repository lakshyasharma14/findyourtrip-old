import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { GitHub } from "react-feather";
import Image from "next/image";
import styled from "styled-components";

export function LoginForm({ providers, csrfToken }) {
  const { switchToSignup } = useContext(AccountContext);
  return (
    <BoxContainer>
      <form method="post" action="/api/auth/signin/email">
        <FormContainer>
          <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <SignInSection>
          {Object.values(providers).map((provider) => {
            if (provider.name === "Email") {
              return;
            }
            if (provider.name === "GitHub") {
              return (
                <div
                  key={provider.name}
                  className="signInItem"
                  onClick={() => signIn(provider.id)}
                >
                  <GitHub />
                </div>
              );
            }
            if (provider.name === "Google") {
              return (
                <div
                  key={provider.name}
                  className="signInItem"
                  onClick={() => signIn(provider.id)}
                >
                  <Image
                    src="/images/btn_google_light_normal_ios.svg"
                    width={40}
                    height={40}
                    alt="Sign in with Google"
                  />
                </div>
              );
            }

            return (
              <div key={provider.name}>
                <button variant="outline" onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              </div>
            );
          })}
        </SignInSection>
        <Marginer direction="vertical" margin=".5em" />

        <SubmitButton type="submit">Signin</SubmitButton>
      </form>

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don&apos;t have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
const SignInSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  .signInItem {
    cursor: pointer;
    z-index: 0;
  }
`;
