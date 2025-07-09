import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status); // ✅ get login status

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <section className="w-full py-20 bg-gradient-to-b from-white to-slate-100 text-center min-h-[60vh]">
        <Container>
          {!authStatus ? (
            <h1 className="text-3xl font-semibold text-gray-700 mb-4 animate-pulse">
              Login to read awesome posts ✨
            </h1>
          ) : null}
          <p className="text-gray-500">
            Posts will appear here once available.
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-slate-100 min-h-screen">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Latest Posts 📚
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.$id}
              className="w-full sm:w-[48%] lg:w-[23%] transition-transform"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <PostCard {...post} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Home;
