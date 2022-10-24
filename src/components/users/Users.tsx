import { Link } from 'react-router-dom';

export const Users = () => {

  const users = ['saul', 'alondra', 'carlos', 'abraham'];

  return (<>
    <ul>
      {users.map((usr) => (
        <li><Link to={`/user/${usr}`}>{usr}</Link></li>
      ))}
    </ul>
  </>);

};