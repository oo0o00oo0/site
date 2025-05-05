import SectionTitle from "./SectionTitle";
import { useNavigate } from "@tanstack/react-router";

const Section = ({ projectData }: { projectData: any }) => {
  const navigate = useNavigate();
  console.log("hello");

  return (
    <section
      onClick={() => navigate({ to: `/projects/${projectData.id}` })}
      // onClick={() => navigate({ to: "/projects" })}
      className="col-span-12 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-12 grid-rows-[auto_1fr]">
        <div className="h-auto col-span-12 py-1">
          <div className="grid items-center h-full grid-cols-12 gap-0.5">
            <SectionTitle
              title="Project"
              start={0}
              content={projectData.title}
            />
            <SectionTitle
              title="Technologies"
              start={6}
              content={projectData.technologies}
            />
            <SectionTitle title="Link" start={9} content={projectData.link} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 col-span-12 gap-0.5">
          <div className="col-span-12 aspect-w-3 aspect-h-2 md:col-span-8">
            <video
              muted
              autoPlay
              loop
              src="https://pub-2d00e45bf62b4f30b076ffe96111f7b8.r2.dev/fsq.webm"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="col-span-12 aspect-w-2 aspect-h-3 md:col-span-4">
            <img
              src="https://placehold.co/400x600"
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
