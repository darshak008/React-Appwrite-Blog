import React from "react";
import { Container, PostForm } from "../components";
import { motion } from "framer-motion";

function AddPost() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-slate-100 py-12 px-4">
      <Container>
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create a New Post 📝
          </h1>
          <PostForm />
        </motion.div>
      </Container>
    </section>
  );
}

export default AddPost;
