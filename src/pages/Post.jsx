import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <motion.div
      className="py-12 bg-gradient-to-b from-white to-slate-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <div className="relative border shadow rounded-xl overflow-hidden mb-8">
          <motion.img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full max-h-[400px] object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {isAuthor && (
            <div className="absolute top-4 right-4 flex gap-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="hover:scale-105 duration-200"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                className="hover:scale-105 duration-200"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-6 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </motion.h1>

        <motion.div
          className="prose prose-lg max-w-none prose-p:text-gray-700 prose-img:rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {parse(post.content)}
        </motion.div>
      </Container>
    </motion.div>
  ) : null;
}
