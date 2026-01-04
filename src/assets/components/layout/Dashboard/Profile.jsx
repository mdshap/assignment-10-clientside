import { use, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { FaUser, FaEnvelope, FaCamera } from "react-icons/fa";

const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);

  const [editModal, setEditModal] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(user?.photoURL || "");
  const [saving, setSaving] = useState(false);

  const IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSaveProfile = async () => {
    try {
      setSaving(true);
      let photoURL = user?.photoURL || "";

      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`,
          formData
        );

        photoURL = imgRes.data.data.display_url;
      }

      await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully");
      setEditModal(false);
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-3 sm:px-6">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gradient-to-br from-pink-500 to-pink-400 flex items-center justify-center text-white">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUser className="text-4xl opacity-80" />
              )}
            </div>
          </div>

          <div className="text-center sm:text-left flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              {user?.displayName || "User"}
            </h2>

            <p className="mt-2 inline-block bg-pink-100 dark:bg-pink-900/40 text-pink-600 px-3 py-1 rounded-full text-sm">
              Books Haven Member
            </p>

            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
              Manage your profile information and avatar
            </p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaEnvelope />
              Email
            </div>
            <p className="mt-1 font-medium break-all text-gray-800 dark:text-gray-200">
              {user?.email}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaUser />
              Display Name
            </div>
            <p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
              {user?.displayName || "Not set"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setEditModal(true)}
          className="mt-6 w-full bg-secondary hover:bg-primary text-white py-2 rounded-lg transition"
        >
          Edit Profile
        </button>
      </div>

      {editModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setEditModal(false)}
          />

          <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Edit Profile
            </h3>

            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="relative">
                <img
                  src={preview || "https://i.ibb.co/5FZJkMZ/avatar.png"}
                  className="w-24 h-24 rounded-full object-cover border-4 border-secondary"
                />

                <label className="absolute bottom-1 right-1 bg-secondary text-white p-2 rounded-full cursor-pointer hover:bg-primary transition">
                  <FaCamera size={14} />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditModal(false)}
                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveProfile}
                disabled={saving}
                className="px-4 py-2 rounded bg-secondary text-white"
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
