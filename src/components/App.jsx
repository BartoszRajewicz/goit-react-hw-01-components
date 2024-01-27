import React from "react";
import User from './profile/Profile';
import user from  './data/user.json';






export const App = () => {
  return (
    <>
    <User
    avatar={user.avatar}
    username={user.username}
    tag={user.tag}
    location={user.location}
    stats={user.stats}
    />
    
    
    </>
  );
};

export default App;