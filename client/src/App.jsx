import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import PublicPlacePage from "./pages/PublicPlacePage";
import UserBookingsPage from "./pages/UserBookingsPage";
import SingleBookingPage from "./pages/SingleBookingPage";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PublicPlacePage />} />
          <Route path="/account/bookings" element={<UserBookingsPage />} />
          <Route path="/account/bookings/:id" element={<SingleBookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
