"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

import styles from '@/styles/ArticlesSyntax.module.css'


const mdxComponents = {
  Image,
  code: (props) => <code className={`${styles.codeStyle} ${styles.customScrollbar}`} {...props} />,
  a: (props) => {
    const { href, children, ...rest } = props;
    if (href.startsWith('#')) {
      return <a className={`${styles.hLink} hover:underline`} href={href} {...rest}>{children}</a>;
    }
    return <a className={`${styles.hLink} hover:underline text-blue-500 dark:hover:text-yellow-500 hover:text-purple-500 font-semibold`}  {...props} />;
  },
  details: (props) => (
    <details
      className={`border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto ${styles.articlesContent}`}
      {...props}
    />
  ),
  summary: (props) => (
    <summary className="text-lg font-semibold capitalize cursor-pointer" {...props} />
  ),
  ul: (props) => (
    <ul className="mt-4 font-in text-base" {...props} />
  ),
  li: (props) => (
    <li className="py-1" {...props} />
  ),
  h1: (props) => (
    <h1 className='border-b-2 dark:border-light border-dark inline-block border-dashed uppercase pt-2 font-extrabold' {...props} />
  ),
  h2: (props) => (
    <h2 className='border-b-2 dark:border-light border-dark inline-block border-dashed uppercase pt-2 font-extrabold' {...props} />
  ),
  h3: (props) => (
    <h3 className='border-b-2 dark:border-light border-dark inline-block border-dashed uppercase pt-2 font-extrabold' {...props} />
  ),
  h4: (props) => (
    <h4 className='uppercase pt-2 font-extrabold' {...props} />
  ),
  h5: (props) => (
    <h5 className='uppercase pt-2 font-extrabold' {...props} />
  ),
  h6: (props) => (
    <h6 className='uppercase pt-2 font-extrabold' {...props} />
  ),
};

const RenderMdx = ({ blog, className }) => {

  const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className={`${className} ${styles.articlesContent} col-span-8  lg:col-span-12 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl

  `}>
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx