import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Contato } from './pages/Contato';
import { Home } from './pages/Home';
import { QuemSomos } from './pages/QuemSomos';
import { Servicos } from './pages/Servicos';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>


                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/quemsomos'
                    element={<QuemSomos />}
                />
                <Route
                    path='/servicos'
                    element={<Servicos />}
                />

                <Route
                    path='/contato'
                    element={<Contato />}
                />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Rotas;