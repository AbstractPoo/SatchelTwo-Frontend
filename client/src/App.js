import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import { Protected, LevelProtected } from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import { UserContextProvider } from "./context/UserContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Teacher from "./pages/Teacher";
import Subscriptions from "./pages/Subscriptions";
import Homeworks from "./pages/Homeworks";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <UserContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/signout"
              element={
                <Protected>
                  <SignOut />
                </Protected>
              }
            />
            <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
            <Route
              path="/teacher"
              element={
                <LevelProtected routeLevel={1}>
                  <Teacher />
                </LevelProtected>
              }
            />
            <Route
              path="/subscriptions"
              element={
                <Protected>
                  <Subscriptions />
                </Protected>
              }
            />
            <Route
              path="/homeworks"
              element={
                <Protected>
                  <Homeworks />
                </Protected>
              }
            />
          </Routes>
        </UserContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
