import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Status from "../components/Profile/Status";

interface Props {}

function Profile(props: Props) {
  const {} = props;

  return (
    <div>
      <div>
        <ProfileHeader />
      </div>
      <div className="mt-10">
        <Status />
      </div>
    </div>
  );
}

export default Profile;
