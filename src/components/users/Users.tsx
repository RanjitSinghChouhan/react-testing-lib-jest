import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState<string[]>([]);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch((err) => {
        setErr('Error fetching users');
      });
  });

  return (
    <div>
      <ul>
        {users &&
          users.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
      {err && <div>{err}</div>}
    </div>
  );
}

export default Users;
