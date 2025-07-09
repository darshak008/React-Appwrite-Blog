import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from ".";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-white shadow-xl border border-gray-200 rounded-2xl p-8"
      >
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign in to your account
        </h2>
        <p className="text-center text-sm text-gray-500 mt-2">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>

        {error && (
          <p className="text-red-500 text-sm mt-6 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit(login)} className="mt-6 space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            animate={true}
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Invalid email address",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            animate={true}
            {...register("password", {
              required: true,
            })}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Sign in
          </Button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
