import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </motion.div>
    </Link>
  );
}

export default PostCard;
