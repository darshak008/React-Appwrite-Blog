import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { motion } from "framer-motion";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((res) => {
      if (res) {
        setPosts(res.documents);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full py-10 min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Container>
        {loading ? (
          <div className="text-center text-xl font-medium text-gray-600 animate-pulse">
            Loading posts...
          </div>
        ) : posts.length > 0 ? (
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {posts.map((post) => (
              <motion.div
                key={post.$id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <PostCard {...post} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-gray-500">No posts found.</p>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
