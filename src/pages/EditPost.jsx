import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteServices from "../appwrite/config";
import { Container, PostForm } from "../components";

function EditPost() {
  const [posts, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteServices.getPost(slug).then((post) => {
        setPost(post);
      });
    } else {
      navigate("/");
    }
  }, [slug]);

  return posts ? (
    <div className="py-8">
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
