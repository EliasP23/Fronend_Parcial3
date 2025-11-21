// src/App.tsx (o tu archivo raíz de aplicación)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/organisms/Navbar';
import { Homelayout } from './components/templates/Homelayout';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    {/* Ruta para el index.html / Inicio */}
                    <Route path="/" element={<Homelayout />} />

                    {/* Rutas futuras (para que el Navbar funcione) */}
                    <Route path="/catalogo" element={<div>Catálogo (Pronto)</div>} />
                    <Route path="/carrito" element={<div>Carrito (Pronto)</div>} />
                    <Route path="/perfil" element={<div>Perfil (Pronto)</div>} />
                    <Route path="/login" element={<div>Login (Pronto)</div>} />
                    <Route path="/registro" element={<div>Registro (Pronto)</div>} />
                </Routes>
            </main>
            {/* Puedes agregar un Footer aquí */}
        </BrowserRouter>
    );
}
// export default App;