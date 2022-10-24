import { Link, useParams, Outlet } from 'react-router-dom';
import { CustomLink } from '../customLink/CustomLink';
import { UserDetails } from '../userDetails/UserDetails';

export const User = () => {

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