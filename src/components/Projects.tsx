import { useTranslations } from "next-intl";
import ProjectCard, { type Project } from "./ProjectCard";

export default function Projects() {
  const t = useTranslations("ProjectsComponent");

  const projectsData = t.raw("items") as Project[];

  return (
    <div>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.link}
          project={project}
          index={index}
          viewLabel={t("viewProject")}
          opensInNewTab={t("ariaLabels.opensInNewTab")}
          technologiesLabel={t("ariaLabels.technologies")}
        />
      ))}
    </div>
  );
}
