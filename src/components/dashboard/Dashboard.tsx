import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Dashboard() {

  const location = useLocation();

  useEffect(() => {
    console.log(location);

  }, []);

  return <>Soy el dashboard</>;
}