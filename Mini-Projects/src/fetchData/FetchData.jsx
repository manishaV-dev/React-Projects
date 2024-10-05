import React, { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function datafech() {
    try {
      const apiUrl = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!apiUrl.ok) {
        throw new Error("Network response is not ok");
      }

      const result = await apiUrl.json();

      if (result && result.length > 0) {
        setData(result);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    datafech();
  }, []);

  return (
    <>
      <h3 style={{ marginBottom: "30px" }}>
        Create a component that fetches data from an API and displays it.
      </h3>

      {loading && <p>Loading...</p>}
      {error && <p>Error : {error}</p>}

      {!loading && !error && (
        <div className="card-container">
          {data.map((user) => (
            <div className="card" key={user.id}>
              <p>Name: {user.name} </p>
              <p>Username : {user.username} </p>
              <p>email : {user.email} </p>
              <p>
                Address : {user.address.street}, {user.address.suite},{" "}
                {user.address.city}, ({user.address.zipcode})
              </p>

              <p>Contact : {user.phone}</p>

              <p>Company Name : {user.company.name} </p>

              <a href={user.webiste} target="_blank">
               Website :  {user.website}
              </a>
              
            </div>
          ))}
        </div>
      )}
    </>
  );
}
