import React, { useState, useEffect } from "react";

function User() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div className="User">
      <h2>User Profile</h2>
      {profile && (
        <div className="user__profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
      {!profile && <div>Loading...</div>}
    </div>
  );
}

export default User;