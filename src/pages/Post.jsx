import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

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
        <div className="py-10 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
            <Container>
                <div className="w-full max-w-4xl mx-auto">
                    <div className="relative mb-8">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg shadow-lg object-cover w-full h-[400px] max-h-[400px]"
                        />

                        {isAuthor && (
                            <div className="absolute right-6 top-6 flex space-x-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
                                    onClick={deletePost}
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="w-full mb-6 text-center">
                        <h1 className="text-4xl font-extrabold text-gray-800">
                            {post.title}
                        </h1>
                    </div>

                    <div className="browser-css bg-white rounded-lg shadow-md p-6 leading-7 text-gray-700">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
