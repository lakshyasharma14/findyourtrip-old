import { AccountBox } from "../components/accountBox";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function Signin() {
  const router = useRouter();
  const placeholder = router.query.location;

  return (
    <>
      <Header placeholder={placeholder} />
      <main>
        <SigninDiv>
          <AccountBox />
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
