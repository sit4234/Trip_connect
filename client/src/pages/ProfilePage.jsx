import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import { useContext, useState } from "react";
import axios from "axios";
import PlacesPage from "./PlacesPage.jsx";
import AccountNav from "../AccountNav.jsx";

export default function ProfilePage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setredirect] = useState(null);
   
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setredirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading........";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

 
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav/>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary m-auto max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}

      {subpage === "places" &&(

         <PlacesPage />

      )}
    </div>
  );
}
