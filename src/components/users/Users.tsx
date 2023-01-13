import { Link } from 'react-router-dom';

const Users = () => {

  const users = ['saul', 'alondra', 'carlos', 'abraham'];

  return (<>
    <ul>
      {users.map((usr) => (
        <li><Link to={`/user/${usr}`}>{usr}</Link></li>
      ))}
    </ul>
  </>);

};

export default Users;