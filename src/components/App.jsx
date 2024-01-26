import React from "react";
import User from './profile/Profile';
import Statistic from './statistic/Statistic';
import Friends from  './friends/Friends';
import Transaction from './transaction/Transaction';
import user from  './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transaction from './data/transactions.json';




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