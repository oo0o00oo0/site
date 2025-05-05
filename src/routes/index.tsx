import { createFileRoute } from "@tanstack/react-router";
import Section from "../components/Section";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    title: "Fleet Street Quarter",
    description: "Description 1",
    technologies: ["Helicopter Aerial Photography"],
    link: "https://www.google.com",
    image: "https://via.placeholder.com/150",
    id: "fsq",
  },
];

function Index() {
  return (
    <div className="grid grid-cols-12 gap-6 text-gray-900">
      {projects.map((project, index) => (
        <Section key={index} projectData={project} />
      ))}
    </div>
  );
}
