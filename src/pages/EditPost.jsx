import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
        setLoading(false);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading post...
        </span>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-slate-100 min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Edit Your Post ✏️
          </h1>
          <PostForm post={post} />
        </motion.div>
      </Container>
    </section>
  );
}

export default EditPost;
