import { AccountBox } from "../components/accountBox";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

function Signin({ providers, csrfToken }) {
  const router = useRouter();
  const placeholder = router.query.location;

  return (
    <>
      <Header placeholder={placeholder} />
      <main>
        <SigninDiv>
          <AccountBox providers={providers} csrfToken={csrfToken} />
        </SigninDiv>
      </main>
      <Footer />
    </>
  );
}

export default Signin;
const SigninDiv = styled.section`
  height: fit-content;
  padding: 3rem var(--sidePadding);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const getStaticProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: null,
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
};
