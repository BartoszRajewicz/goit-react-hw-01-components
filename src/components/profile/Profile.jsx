import PropTypes from 'prop-types';
import css from './Profile-module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes} =  stats;
}


Profile.PropTypes ={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,

};

export default Profile;