import { useParams } from 'react-router-dom';

export const UserDetails = () => {

  const { usr } = useParams();

  return (
    <>
      Soy el details del usuario {usr}
    </>
  );
};