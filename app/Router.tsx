import { useMemo } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Error } from "./pages/Error";

export function Router() {
  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/error" element={<Error />} />{" "}
            {/* <Route
              element={
                <PusherProvider {...config.pusher}>
                  <Root>
                    <DiscoverRoot>
                      <Outlet />
                    </DiscoverRoot>
                  </Root>
                </PusherProvider>
              }
              errorElement={<RootErrorBoundary />}
            >
              <Route
                path="discover"
                lazy={() =>
                  import("./modules/discover/pages/discover").then((m) => ({
                    Component: m.DiscoverRoute,
                  }))
                }
                loader={discoverPageLoader(queryClient)}
              />
              {legacyRoutes.map((path) => (
                <Route
                  key={path}
                  path={`:workspaceSlug/${path}/*`}
                  element={<LegacyRoute />}
                />
              ))}
            </Route> */}
          </>
        )
      ),
    []
  );
  return <RouterProvider router={router} />;
}
