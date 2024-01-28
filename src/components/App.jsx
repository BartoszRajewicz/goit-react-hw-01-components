import React from "react";
import User from './profile/Profile';
import user from  './data/user.json';
import Statistic from "./statistic/Statistic";
import data from './data/data.json';





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
    <Statistic title ="Upload stats" stats={data} />
    </>
  );
};

export default App;