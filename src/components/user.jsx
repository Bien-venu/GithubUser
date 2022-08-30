import React, { useEffect, useState } from "react";
// import style from './user.component.css'
import './use.css'

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const datas = async () => {
      const data = await (await fetch("https://api.github.com/users")).json();
      setUser(data);
    };
    datas();
  }, []);
  console.log(user);

  return (
    <>
      {user.map((use) => (
        <div className="all">
          <div className="container" key={use.id}>
            <div className="head">
              <img src={use.avatar_url} alt="" />
            </div>
            <div className="middle">
              <h1>{use.login}</h1>
              <p>
                Our Equilibrium collection <br />
                promotes balance and calm
              </p>
              <span>{use.id}</span>
            </div>
            <div className="footer">
              <img src={use.avatar_url} alt="" />
              <h3>{use.login}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
