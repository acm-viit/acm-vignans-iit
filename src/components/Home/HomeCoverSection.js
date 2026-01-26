import { sortBlogs } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const HomeCoverSection = ({ blogs }) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    
    const imageUrl = `/asset/img${blog.url}/featured.png`;
    const defaultImageUrl = '/asset/img${blogs.url}/featured.png';
    const [imgSrc, setImgSrc] = React.useState(imageUrl);

    const handleError = () => {
        setImgSrc(defaultImageUrl);
    };

    return (
        <div className='w-full inline-block'>
            <article className='flex flex-col items-start justify-end mx-5 sm:mx-4 relative h-[60vh] sm:h-[60vh]'>
                <Image
                    src={imgSrc}
                    onError={handleError}
                    placeholder='blur'
                    blurDataURL={imgSrc}
                    alt={blog.title}
                    fill
                    className='w-full h-screeen object-bottom object-cover rounded-3xl z-0'
                    sizes='100vw'
                    priority
                />
                <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10' />

                <div className='w-full p-4 flex flex-col items-start justify-center z-20 text-light'>
                    <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
                    <Link href={blog.url} className='mt-6'>
                        <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
                            <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                        dark:to-accentDark/50 bg-[length:0px_3px]
                        hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                                {blog.title}
                            </span>
                        </h1>
                    </Link>
                    <p className='flex lg:hidden line-clamp-1 mt-4 md:text-lg lg:text-xl font-in'>
                        {blog.description}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default HomeCoverSection;
