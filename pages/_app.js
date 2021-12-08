import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import {useEffect} from "react";

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
}, []);

export default MyApp