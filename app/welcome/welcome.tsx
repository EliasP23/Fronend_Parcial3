// app/routes/home.tsx

// Importamos la Navbar y el Layout del Home, ambos deben usar export const
import { Navbar } from '~/components/organisms/Navbar';
import { Homelayout } from '~/components/templates/Homelayout';

export function meta() {
    return [
        { title: "Level-Up Gamer - Inicio" },
        { name: "description", content: "Tu destino definitivo para todo lo gaming." },
    ];
}

export default function HomeRoute() {
    return (
        <>
            <Navbar />
            <Homelayout />
        </>
    );
}