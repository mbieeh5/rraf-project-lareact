import React from "react";
import NavLink from "./NavLink";

const NavItems = [
    {
        title: 'Portofolio',
        slug: '/portofolio'
    },
    {
        title: 'About',
        slug: '/about'
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
        title: 'News',
        slug: '/news'
    },
    {
        title: 'Sign-Up',
        slug: '/sign-up'
    },
]

export default function NavBar() {

    return(
        NavItems.map((a,i) => {
            return(
                <>
                    <NavLink href={a.slug} key={i}>
                        {a.title}
                    </NavLink>
                </>
            )
        })
    );
};