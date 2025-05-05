import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectID")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      pageData: params.projectID,
    };
  },
});

function RouteComponent() {
  const { pageData } = Route.useLoaderData();
  console.log(pageData);
  return (
    <div className="bg-red-500">
      project {pageData}
    </div>
  );
}
