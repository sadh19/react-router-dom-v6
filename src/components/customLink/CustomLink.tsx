import { NavLink } from "react-router-dom";

export const CustomLink = ({ to, label }: { to: string; label: string; }) => {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = 'is-active';

  //Usando inline stlye
  // return (<NavLink style={({ isActive }) =>
  //   isActive ? activeStyle : undefined
  // } to={to}>{label}</NavLink>);

  //Usando classname
  return (<NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to={to}>{label}</NavLink>);
};