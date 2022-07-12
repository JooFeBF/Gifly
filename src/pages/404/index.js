import { Link } from "wouter";

const error404 = () => {
    return (
        <div>
        <Link to='/' className='home-link'>Gifly</Link>
        <h1>404</h1>
        <p>Page not found</p>
        </div>
    );
}
export default error404;