import { useEffect, useState } from "react";
import List from "../components/List";
import Link from "../components/Link";

function Project({username}) {
  // Note: username will not be used
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3001/repos");
      const response = await data.json();
      if (response) {
        setProjects(response);
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);
  console.log(projects)
  return (
    <div>
      <h2>Projects</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <List items={projects.map((project) => ({
            field: project.name,
            value: <Link url={project.html_url}
            title={project.html_url} />,
  }))} />
        </div>
      )}
    </div>
  );
}

export default Project;
