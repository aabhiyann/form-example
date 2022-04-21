import { useEffect, useState } from "react";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(users);
  return (
    <div className="App">
      <h3>Create Table</h3>
      {users.map((user) => {
        return <User key={user.id} props={user} />;
      })}
    </div>
  );
}

export default App;
