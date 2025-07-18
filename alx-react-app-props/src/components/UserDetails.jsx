import { useContext } from 'react';
import UserContext from './UserContext'; // Import the shared context

function UserDetails() {
  const userData = useContext(UserContext); // Grab data from context directly

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
