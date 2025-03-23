import { Routes, Route } from "react-router-dom"; // Correct import
import HomePage from "../pages/HomePage";
import PostDetail from "../components/PostDetail";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import Admin from "../pages/AdminPage";
import Login from "../components/login";

    function AppRoutes() {
        console.log("AppRoutes rendered");
      
        return (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:postId" element={<PostDetail />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                  <Admin />
              }
            />
            <Route
              path="/create"
              element={
                  <CreatePostPage />
              }
            />
            <Route
              path="/edit/:id"
              element={
                  <EditPostPage />
              }
            />
          </Routes>
        );
      }
    

export default AppRoutes;