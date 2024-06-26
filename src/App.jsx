import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";


const StepOne = lazy(() => import("./pages/steps/StepOne"));
const StepTwo = lazy(() => import("./pages/steps/StepTwo"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Recoverpassword = lazy(() =>
  import("./pages/Recoverpassword/Recoverpassword")
);
const PhoneNumberVerification = lazy(() => import("./pages/Auth/phonenumber"));
const SuccessPage = lazy(() => import("./pages/Recoverpassword/successPage"));
const Createpassword = lazy(() =>
  import("./pages/Recoverpassword/Createpassword")
);
const Verifyaccount = lazy(() => import("./pages/Auth/Verifyacount"));
const Dashbord = lazy(() => import("./pages/Dashbord/Dashbord"));
const Transactions = lazy(() => import("./pages/Transactions/Transactions"));
const Reports = lazy(() => import("./pages/Reports/Reports"));
const Statements = lazy(() => import("./pages/Statements/statements"));
const Setting = lazy(() => import("./pages/Settings/Setting"));
const Generalinfo = lazy(() =>
  import("./pages/Settings/SettingPages/Generalinfo")
);

const CreateRole= lazy(()=> import ("./pages/Settings/CreateRole"));
const Roles= lazy(()=> import ("./pages/Settings/SettingPages/Roles"))
const router = createBrowserRouter([
  { path: "/", element: <StepOne /> },
  { path: "/step2", element: <StepTwo /> },
  { path: "/login", element: <Login /> },
  { path: "/recoverpassword", element: <Recoverpassword /> },
  { path: "/phone-number", element: <PhoneNumberVerification /> },
  { path: "/success", element: <SuccessPage /> },
  { path: "/createpassword", element: <Createpassword /> },
  { path: "/verify-account", element: <Verifyaccount /> },
  { path: "/dashboard", element: <Dashbord /> },
  { path: "/transaction", element: <Transactions /> },
  { path: "/reports", element: <Reports /> },
  { path: "/statements", element: <Statements /> },
  { path: "/settings", element: <Setting /> },
  { path: "/info", element: <Generalinfo/> },
  { path: "/roles", element: <Roles/>},
  { path: "/Createrole", element: <CreateRole/>},
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
