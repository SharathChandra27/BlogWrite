import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className='w-full py-8 bg-gray-100'>
            <Container>
                <div className='flex flex-wrap gap-6'>
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className='p-4 bg-white shadow-md rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105'
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
