import ProfileTrips from "./ProfileTrips";
import styled from "styled-components";
import { signOut } from "next-auth/client";

import Link from "next/link";

const ProfileContainer = ({ trips }) => {
  return (
    <ProfileContainerSection>
      <div className="options">
        <Link href="/auth/signin">
          <a className="btn btn-light">Add New Trip</a>
        </Link>
        <a className="btn btn-light" onClick={() => signOut({ url: "/" })}>
          SignOut
        </a>
      </div>
      <ProfileTrips results={trips} />
    </ProfileContainerSection>
  );
};

export default ProfileContainer;
const ProfileContainerSection = styled.header`
  height: fit-content;
  padding: 6rem var(--sidePadding);
  z-index: 1;
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 -1rem 2rem -1rem #0003;
  background: var(--light);
  max-width: calc(var(--containerWidth) + 2 * var(--sidePadding));
  margin: 0 auto;
  .trips-container {
    display: flex;
    justify-content: center;
  }
  .options {
    display: flex;
    gap: 1rem;
  }
`;
