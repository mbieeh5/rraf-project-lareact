import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { GlobalStyle } from './Components/GlobalStyled';
import NavBar from './Components/NavigationBar';
import Footer from './Components/Footer';

const appName = import.meta.env.VITE_APP_NAME || 'Rraf-Project';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <GlobalStyle />
                <NavBar />
                <App {...props} />
                <Footer />
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
