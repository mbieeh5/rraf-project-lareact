import RrafLogo from '@/Components/RrafLogo';
import { Link } from '@inertiajs/react';
import styled from 'styled-components';

export default function Guest({ children }) {
    return (
        <Container className="flex flex-col items-center pt-5">
            <div>
                <Link href="/">
                    <p className='text-4xl font-bold text-white'>Login ?</p>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </Container>
    );
}

const Container = styled.div`
padding-bottom: 12rem;
`