import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.jsx';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer
                position='bottom-right'
                autoClose={1000}
                draggable={false}
                theme='colored'
                transition={Bounce}
            />
        </>
    );
};

export default App;
