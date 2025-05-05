import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Nav from "../components/Nav";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen overflow-x-hidden bg-gray-50">
        <Nav />
        <main className="h-full ">
          <Outlet />
        </main>
      </div>

      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
