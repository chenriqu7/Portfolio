import './styles/global.css';
import './styles/sections.css';

import Navbar    from './components/navbar/Navbar';
import Footer    from './components/footer/Footer';

import Intro        from './components/intro/Intro';
import Competences  from './components/competences/Competences';
import Parcours     from './components/parcours/Parcours';
import Projets      from './components/projets/Projets';
import Documents    from './components/documents/Documents';
import Veille       from './components/veille/Veille';

import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = [
  'intro',
  'competences',
  'parcours',
  'projets',
  'documents',
  'veille',
];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS, 100);

  return (
    <>
      <Navbar active={activeSection} />

      <main>
        <Intro />
        <Competences />
        <Parcours />
        <Projets />
        <Documents />
        <Veille />
      </main>

      <Footer />
    </>
  );
}
