import { NavLink } from 'react-router-dom';
import { CustomLink } from '../customLink/CustomLink';

export const Sidebar = () => {

  let activeClassName = 'is-active';

  //Al home se le agrega el prop end que indica que no haga match con alguna subruta, para calcular el isActive
  //If the end prop is used, it will ensure this component isn't matched as "active" when its descendant paths are matched.

  return (<>
    <div>

      <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to={'/'} end>Home</NavLink>
      <CustomLink to='/dashboard' label='Dashboard' />
      <CustomLink to='/users' label='Users' />
    </div>
  </>);
};