import React, { useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { updateProfile, signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Profile() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    displayName: "",
    photoURL: "",
  });

  // Populate form whenever user changes
  useEffect(() => {
    if (user) {
      setForm({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Update profile
  const handleUpdate = async (e) => {
    e.preventDefault();

    const currentUser = auth.currentUser;
    if (!currentUser) return toast.error("No authenticated user");

    try {
      // Update Firebase user
      await updateProfile(currentUser, {
        displayName: form.displayName,
        photoURL: form.photoURL,
      });

      // Update context so Navbar & profile react immediately
      setUser({
        displayName: form.displayName,
        email: currentUser.email,
        photoURL: form.photoURL,
        uid: currentUser.uid,
      });

      toast.success("Profile updated successfully!");
      setEditing(false); // close modal
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <button
          onClick={() => navigate("/login")}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          Login First
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0] py-12">
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto px-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center">
          <img
            src={user.photoURL || "https://i.pravatar.cc/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-orange-300"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">{user.displayName || "No Name"}</h2>
            <p className="text-gray-600">{user.email}</p>

            <div className="mt-4 flex gap-3 justify-center md:justify-start">
              <button
                onClick={() => setEditing(true)}
                className="px-4 py-2 bg-orange-500 text-white rounded"
              >
                Update Profile
              </button>
              <button onClick={handleLogout} className="px-4 py-2 border rounded">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Update Profile Modal */}
        {editing && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Update Profile</h3>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    value={form.displayName}
                    onChange={(e) =>
                      setForm({ ...form, displayName: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Photo URL</label>
                  <input
                    type="text"
                    value={form.photoURL}
                    onChange={(e) =>
                      setForm({ ...form, photoURL: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
