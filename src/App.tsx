import { useState } from 'react'
import { useSection } from './hooks/useSection'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import SobreMi from './sections/SobreMi'
import Experiencia from './sections/Experiencia'
import styles from './styles/App.module.css'
import Stack from './sections/Stack'
import type { SectionId } from './types'

export default function App() {
  const { active, setActive } = useSection('sobre-mi')
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (id: SectionId) => {
    setActive(id)
    setMobileMenuOpen(false)
  }

  return (
    <div className={styles.shell}>
      <Topbar
        active={active}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(current => !current)}
      />
      <Sidebar active={active} onNavigate={handleNavigate} isMobileOpen={isMobileMenuOpen} />
      {isMobileMenuOpen ? (
        <button
          type="button"
          className={styles.mobileOverlay}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close side menu"
        />
      ) : null}
      <main className={styles.main}>
        {active === 'sobre-mi'    && <SobreMi />}
        {active === 'experiencia' && <Experiencia />}
        {active === 'stack' && <Stack />}
      </main>
    </div>
  )
}
