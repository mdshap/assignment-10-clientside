import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { user, signInUser, signInWithGoogle, setLoading } =
    useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();

  const toastShownRef = useRef(false);

  /* LOGIN HANDLER */
  const handleLogin = (email, password) => {
    setErrorLogin("");
    setLoading(true);

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully logged in!");
        navigate("/", { replace: true });
      })
      .catch(() => {
        setErrorLogin("Invalid email or password");
        toast.error("Invalid email or password");
        setLoading(false);
      });
  };

  /* FORM SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      setErrorLogin("All fields are required");
      return;
    }

    handleLogin(email, password);
  };

  /* GOOGLE LOGIN */
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google");
        navigate("/", { replace: true });
      })
      .catch(() => toast.error("Google login failed"));
  };

  /* AUTO REDIRECT */
  useEffect(() => {
    if (user && !toastShownRef.current) {
      toastShownRef.current = true;
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div
      className="hero min-h-screen bg-cover bg-bottom"
      style={{ backgroundImage: "url('createbooks.png')" }}
    >
      <div className="hero-overlay bg-black/50"></div>

      <div className="hero-content w-full max-w-5xl mx-auto flex-col lg:flex-row-reverse gap-10 px-6 py-12">

        {/* LOGIN CARD */}
        <div className="card w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30">
          <div className="card-body p-8">

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
              Login
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="grid gap-4">

              {/* EMAIL */}
              <div>
                <label className="label text-sm text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="input input-bordered w-full bg-white/10 text-white placeholder-gray-300"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="label text-sm text-white">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Password"
                    className="input input-bordered w-full bg-white/10 text-white placeholder-gray-300"
                  />
                  {showPass ? (
                    <FaRegEyeSlash
                      onClick={() => setShowPass(false)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPass(true)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                    />
                  )}
                </div>
              </div>

              {errorLogin && (
                <p className="text-red-400 text-sm text-center">
                  {errorLogin}
                </p>
              )}

              <button className="btn bg-secondary text-white hover:bg-primary">
                Login
              </button>
            </form>

            {/* DEMO BUTTONS */}
            <div className="w-full text-center mt-4">
              <button
                onClick={() => handleLogin("user@google.com", "USER009@ds")}
                className="btn btn-outline border-secondary w-full text-secondary hover:bg-secondary hover:text-white"
              >
                One Click Login (Demo User)
              </button>
            </div>

            {/* SOCIAL LOGIN */}
            <div className="mt-6">
              <div className="text-center text-sm text-gray-300 mb-2">
                OR
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 border flex items-center justify-center gap-3 hover:shadow-md transition"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </div>

            <Link
              to="/register"
              className="mt-4 text-center text-green-400 hover:text-blue-400"
            >
              Don’t have an account? Create one
            </Link>
          </div>
        </div>

        {/* SIDE CONTENT */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Welcome to <span className="text-pink-300">Books Haven</span>
          </h1>
          <p className="text-white/90 max-w-xl">
            Discover curated collections, share reviews, and manage your personal
            library. Log in to explore, review, and contribute to the Book Haven
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
