import './styles/global.css';
import './styles/sections.css';

import Navbar    from './components/Navbar';
import Footer    from './components/Footer';

import Intro        from './sections/Intro';
import Competences  from './sections/Competences';
import Parcours     from './sections/Parcours';
import Projets      from './sections/Projets';
import Documents    from './sections/Documents';
import Veille       from './sections/Veille';

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
