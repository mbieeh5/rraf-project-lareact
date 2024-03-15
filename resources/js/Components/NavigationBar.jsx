import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { media } from "./Media-Utils";
import styled from "styled-components";
import NavLink from "./NavLink";
import RrafLogo from "./RrafLogo";

const NavItems = [
    {
        title: 'About',
        slug: '/about'
    },
    {
        title: 'News',
        slug: '/news'
    },
    {
        title: 'Tools/App',
        slug: '/tools'
    },
    {
        title: 'Shopping',
        slug: '/shopping'
    },
    {
        title: 'SignUp',
        slug: '/sign-up'
    },
];

const NavBar = () => {
    return (
        <div className="md p-10 px-6 min-w-max justify-items-center flex gap-6 navbarBackground">
            <div className="container flex">
                <Link href='/'>
                    <RrafLogo />
                </Link>
            </div>
            {NavItems.map((item, index) => (
                <div className="flex p-1" key={index}>
                    <NavLink href={item.slug} active={true} className='focus:border-indigo-700'>
                        <p className="md:text-3xl px-1 font-bold font-mono text-white">{item.title}</p>
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default NavBar;

