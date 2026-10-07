import { useState, useEffect } from "react";

function App() {
  const projectName = "ForgeHub";
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Server not reachable"));
  }, []);

  return (
    <div>
      <h1>{projectName}</h1>
      <p>Discover. Match. Form Teams. Build.</p>
      <p>API status: {status}</p>
    </div>
  );
}

export default App;