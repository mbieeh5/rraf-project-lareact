import { Head } from '@inertiajs/react';
import Login from './Auth/Login';

export default function SignUp(props) {
    return (
        <>
            <Head title={props.title} />

            <div className="py-12">
                <Login />
            </div>
        </>
    );
}
