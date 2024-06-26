import React from "react";
import User from './profile/Profile';
import user from  './data/user.json';
import Statistic from "./statistic/Statistic";
import data from './data/data.json';
import Friends from './friends/Friends';
import friends from './data/friends.json';
import Transaction from './transaction/Transaction';
import transactions from './data/transactions.json';





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
    <Friends friends = {friends} />
    <Transaction items = {transactions} />
    </>
  );
};

export default App;