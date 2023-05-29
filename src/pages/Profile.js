import { useEffect, useState } from "react";
import './Profile.css';
import List from "../components/List";
import Link from "../components/Link";

function Profile({userName}) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const items = [
    {
      field: 'html_url',
      value: <Link url={profile.html_url} title={profile.html_url}/>
    },
    {
      field: 'repos_url',
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
    { field: 'name', value: profile.name },
    { field: 'company', value: profile.company },
    { field: 'location', value: profile.location },
    { field: 'email', value: profile.email },
    { field: 'bio', value: profile.bio }
  ]

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('http://localhost:3001/user/583231');
      const result = await data.json();
      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  });
  return (
    loading 
    ? <p>Loading...</p>
    : 
    <div>
      <img className="Profile-avatar"
      src={profile.avatar_url}
      alt={profile.name} />
      <List items={items}/>
    </div>
    
  )
}

export default Profile;
