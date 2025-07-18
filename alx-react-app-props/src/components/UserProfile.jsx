import { useContext } from 'react';          
import UserContext from './UserContext';     
import UserInfo from './UserInfo';

function ProfilePage() {
  const userData = useContext(UserContext);  

  return (
    <div>
      <h2>Welcome, {userData.name}</h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;
