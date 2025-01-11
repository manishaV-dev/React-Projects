const Users = ({ userData }) => {
  return (
    <>
      <div className="text-white bg-black">
        <p>Username: {userData.username} </p>
        <p>Email: {userData.email} </p>
        <p>Password: {userData.password} </p>
      </div>
    </>
  );
};

export default Users;
