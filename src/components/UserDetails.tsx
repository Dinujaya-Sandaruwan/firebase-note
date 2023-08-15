import { auth } from "../config/firebase";

const UserDetails = () => {
  return (
    <div className="card">
      {auth.currentUser ? (
        <>
          <p className="userDetails">
            <b>User Name :</b> {auth.currentUser.displayName}
          </p>
          <p className="userDetails">
            <b>User Email :</b> {auth.currentUser.email}
          </p>
          {auth.currentUser.photoURL && (
            <img
              src={auth.currentUser.photoURL}
              alt="User Avater"
              className="avater"
            />
          )}
        </>
      ) : (
        <h3 className="red">You are not logged in</h3>
      )}
    </div>
  );
};

export default UserDetails;
