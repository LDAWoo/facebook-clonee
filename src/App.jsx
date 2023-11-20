import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppFriendProvider from "./components/Contexts/AppFriendProvider";
import AppProvider from "./components/Contexts/AppProvider";
import AppThemeProvider from "./components/Contexts/AppThemeProvider";
import LayoutComponent from "./components/layouts/LayoutComponent/LayoutComponent";
import { publicRoutesPathComponent } from "./routes/routes";

import AppMessageProvider from "./components/Contexts/AppMessageProvider";
import Login from "./components/Login/Login";
import CreatePostModals from "./components/Modals/CreatePostModals";
import ModalsCreateAccount from "./components/Modals/ModalsLogin/ModalsCreateAccount";

function App() {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <AppProvider>
          <AppFriendProvider>
            <AppMessageProvider>
              <Routes>
                {publicRoutesPathComponent.map((route, index) => {
                  let Layout = LayoutComponent;
                  if (route.layout) {
                    Layout = route.layout;
                  } else {
                    Layout = Fragment;
                  }

                  const Page = route.component;
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout Sidebar={route.sidebar}>
                          <Page />
                        </Layout>
                      }
                    />
                  );
                })}
                <Route path="/Login" Component={Login} />
              </Routes>
              <CreatePostModals />
              <ModalsCreateAccount />
            </AppMessageProvider>
          </AppFriendProvider>
        </AppProvider>
      </AppThemeProvider>
    </BrowserRouter>
  );
}

export default App;
