import React from "react";

function handleLogout(user, setUser) {
  fetch("/logout", {
    method: "DELETE",
  })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}


export default handleLogout