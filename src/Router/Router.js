import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Clientlayout from "../pages/Clientlayout";
import Landingpage from "../pages/Userpages/Landingpage";
import DevLayout from "../components/Admin/DevLayout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Clientlayout />}>
        <Route path="" element={<Landingpage />} />
      </Route>
      <Route path="/admin" element={<DevLayout />}></Route>
      <Route path="*" element={useNavigate("/")} />
    </Routes>
  );
}
{
  /* <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ClientHeader />}>
        <Route path="" element={<HomePage />} />
        <Route path="friend" element={<FriendPage />} />
        <Route path="profile" element={<ProfilePage />} /> */
}

export default Router;
