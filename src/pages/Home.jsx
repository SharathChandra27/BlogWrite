import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../components/Logo'; // Adjust import path as needed

function Home() {
    const [posts, setPosts] = useState([]);
    const userAuth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (userAuth.status === true) {
            appwriteService.getPosts([]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
        } else {
            navigate('/');
        }

        return () => {
            // Cleanup if needed
        };
    }, [userAuth.status, navigate]);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 bg-gray-100 min-h-[calc(100vh-6rem)] flex items-center justify-center">
                <Container className="bg-gray-200 p-4 rounded-lg shadow-lg max-w-md text-center">
                    <div className="mb-4">
                        <Logo width="80px" /> {/* Adjust size as needed */}
                    </div>
                    <h1 className="text-2xl font-bold mb-4 text-gray-700">
                        Welcome! Please log in to get started.
                    </h1>
                    <p className="text-lg text-gray-600">
                        It seems like you don't have any posts yet. Log in to explore more and start creating!
                    </p>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-gray-100 min-h-[calc(100vh-6rem)] flex items-center justify-center">
            <Container className="bg-gray-200 p-4 rounded-lg shadow-lg max-w-4xl">
                <div className="mb-4 text-center">
                    <Logo width="120px" /> {/* Adjust size as needed */}
                </div>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
