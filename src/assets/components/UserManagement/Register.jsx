import React, { useState } from "react";
import { use } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { user, setRegisterLoading, signInWithGoogle } = use(AuthContext);
  const [showPass, setShowPass]= useState(false)

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const newUser = {
          name: result.user?.displayName,
          email: result.user?.email,
          image: result.user?.photoURL,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .catch(() => setRegisterLoading(false));
      })
      .catch(() => setRegisterLoading(false));
  };

  const handleEmailRegister = (e) => {
    const email = e.targer.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
  };

  if (user) return <Navigate to="/" replace />;

  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('createbooks.png')",
      }}>
      <div className="hero-overlay "></div>
      <div className="hero-content w-full max-w-5xl mx-auto flex-col lg:flex-row-reverse gap-10 px-6 py-12">
        <div className="card w-full max-w-md bg-blue-400/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/40">
          <div className="card-body p-8">
            <h2 className="text-xl md:text-3xl font-bold text-secondary mb-2">
              Register now!
            </h2>

            <form onSubmit={handleEmailRegister} className="grid gap-4">
              <div>
                <label className="label text-sm text-white">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full placeholder-gray-400"
                  placeholder="Your full name"
                />

              </div>

              <div>
                <label className="label text-sm  text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full placeholder-gray-400"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="label text-sm  text-white">Password</label>
                <div className="flex relative justify-center items-center">
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  className="input input-bordered w-full placeholder-gray-400"
                  placeholder="Password"
                />
                { showPass ? <FaRegEyeSlash
                onClick={()=>setShowPass(!showPass)}
                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-950 text-lg cursor-pointe"/> :
                <FaEye
                onClick={()=>setShowPass(!showPass)}
                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-950 text-lg cursor-pointe"/>
                }
                </div>
              </div>

              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow hover:scale-[1.01] transition">
                Create Account
              </button>

              <div className="text-center text-sm text-gray-500">OR</div>
            </form>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-200 flex items-center justify-center gap-3 hover:shadow-md transition">
              <svg
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Continue with Google
            </button>
            <Link
              to="/login"
              className="mx-auto text-red-400 hover:text-blue-400">
              Already Have An Account? Login
            </Link>
          </div>
        </div>

        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Join the <span className="text-pink-300">Book Haven</span>
          </h1>
          <p className="mt-4 text-md md:text-lg text-white/90 max-w-xl">
            Discover curated collections, share your favorite reads, and manage
            your personal library. Sign up with your email or continue with
            Google for instant access to recommendations and community features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
