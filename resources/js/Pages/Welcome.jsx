import NavBar from '@/Components/NavigationBar';
import NavLink from '@/Components/NavLink';
import { Link, Head } from '@inertiajs/react';
import React, { Component } from 'react';


export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
                <p className='text-center text-slate-950 text-2xl font-mono'>{props.title}</p>  
            <div className="md:container md:mx-auto flex flex-row">
                <NavBar />
            </div>
        </>
    );
}
