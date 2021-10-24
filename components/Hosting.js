import styled from "styled-components";
import Link from "next/dist/client/link";
import { useSession } from "next-auth/client";
export default function Hosting() {
  const [session, loading] = useSession();

  return (
    <HostingSection className="light">
      <span>
        <h2>Trip Organizer</h2>
        <p>Share your trips with the amazing FindYourTrip community.</p>
        {session ? (
          <Link href="/org">
            <a className="btn btn-light">Register Here</a>
          </Link>
        ) : (
          <Link href="/auth/signin">
            <a className="btn btn-light">Register Here</a>
          </Link>
        )}
      </span>
    </HostingSection>
  );
}

const HostingSection = styled.section`
  padding: 6rem var(--sidePadding);
  background: url(images/host.jpg);
  background-size: cover;
  background-position: 33% center;
  border-radius: 1rem;
  color: var(--light);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }
  span {
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 36rem) {
    aspect-ratio: 0.75;
    background: url(images/host-sm.jpg);
    background-size: cover;
    background-position: center;
    position: relative;

    h2 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0.5rem;
    }
    span {
      position: absolute;
      padding: 0 var(--sidePadding);
      height: 50%;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }
  }
`;
