import { Project } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `https://portfolio-nine-beta-96.vercel.app/api/getProjects`
  );
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
