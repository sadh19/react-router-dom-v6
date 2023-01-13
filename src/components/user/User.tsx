import { Outlet, useParams } from 'react-router-dom';
import { CustomLink } from '../customLink/CustomLink';

const User = () => {

  const { usr } = useParams();

  return (<>
    <span>Soy el usuario {usr}</span>
    <div>
      <CustomLink
        to='details'
        label='Ver detalles'
      />
    </div>
    <div>
      <Outlet />
    </div>
  </>);
};

export default User;