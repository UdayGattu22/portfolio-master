import { SkillType } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(`https://portfolio-nine-beta-96.vercel.app/api/getSkills`);
  const data = await res.json();
  const skills: SkillType[] = data.skills;

  return skills;
};
