import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const handleValidateLogin = () => {
    navigate("/dashboard", { replace: true, state: { name: "Pepito" } });


  };

  return (<>
    <div>
      <span>Login</span>
    </div>
    <button onClick={() => handleValidateLogin()}>Iniciar sesion</button>

  </>);
};