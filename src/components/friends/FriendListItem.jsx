import  css from './Friends.module.css';

const FriendListItem = ({ id, avatar, name, isOnline}) => {
    return (
<li className={css.listItem} key={id} id={id}>
    <span className={isOnline ? css.isOnline : css.isOffline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48"></img>
    <p className={css.name}>{name}</p>
</li>
    );
};

export default FriendListItem;
