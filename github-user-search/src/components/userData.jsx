import Githubstore from '../stores/Githubstore'


const userData = () => {
	const user = Githubstore(state => state.user);
	return (
		<div>
		<img src={user.img}, alt="prifile image"/>
		<h2>{user.name}</h2>
		<a href={user.profile}>github link</a>
		</div>
	);
};

export default userData;
