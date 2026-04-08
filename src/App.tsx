import { useSection } from './hooks/useSection'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import SobreMi from './sections/SobreMi'
import Experiencia from './sections/Experiencia'
import styles from './styles/App.module.css'
import Stack from './sections/Stack'

export default function App() {
  const { active, setActive } = useSection('sobre-mi')

  return (
    <div className={styles.shell}>
      <Topbar active={active} />
      <Sidebar active={active} onNavigate={setActive} />
      <main className={styles.main}>
        {active === 'sobre-mi'    && <SobreMi />}
        {active === 'experiencia' && <Experiencia />}
        {active === 'stack' && <Stack />}
      </main>
    </div>
  )
}
