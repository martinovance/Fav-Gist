import React, { useContext } from 'react';

import Link from 'next/link';

const categories = [{name: 'React', slug: 'react' }, { name: 'Web Development', slug: 'web-dev'}]

export const Header = () => {
  return
    <div className="container nx-auto px-10 mb-8">
        <div className="border-b w-full inline-block-400 py-8">
            <div className="md:float-left block">
                <link href="/">
                    <span className="cuesor-pointer font-bold text-4xl text-white">
                        FavGist
                    </span>
                </link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}></Link>
                ))}
            </div>
        </div>
    </div>;
};
