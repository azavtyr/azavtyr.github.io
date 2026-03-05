import { BentoGrid } from './components/BentoGrid'

function App() {
  return (
    <div className="min-h-screen bg-gruvbox-bg text-gruvbox-text py-8 md:py-16">
      <BentoGrid />
      <footer className="text-center text-gruvbox-text-secondary text-sm mt-8 pb-4">
        &copy; {new Date().getFullYear()} Dmytro. CC0 1.0 Universal.
      </footer>
    </div>
  )
}

export default App
