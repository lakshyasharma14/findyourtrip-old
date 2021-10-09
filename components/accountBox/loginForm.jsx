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

export function LoginForm({ providers, csrfToken }) {
  const { switchToSignup } = useContext(AccountContext);
  console.log(providers);
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
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Signin</SubmitButton>
      </form>

      <Marginer direction="vertical" margin="1em" />
      <div>hello</div>
      <MutedLink href="#">
        Don&apos;t have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

LoginForm.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }
  console.log(providers);
  return {
    session: undefined,
    providers: await providers(context),
    csrfToken: await csrfToken(context),
  };
};
