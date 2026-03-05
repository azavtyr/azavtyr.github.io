import { HeroCard } from './cards/HeroCard'
import { TechStackCard } from './cards/TechStackCard'
import { AboutCard } from './cards/AboutCard'
import { GitHubCard } from './cards/GitHubCard'
import { LocationCard } from './cards/LocationCard'
import { ProjectCard } from './cards/ProjectCard'
import { ContactCard } from './cards/ContactCard'
import { ExperienceCard } from './cards/ExperienceCard'
import { EducationCard } from './cards/EducationCard'
import { portfolio } from '../data/portfolio'

export function BentoGrid() {
  const [homelab, dotfiles, thisPortfolio, selfHosted] = portfolio.projects
  let i = 0
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-7 gap-4 max-w-[1200px] mx-auto p-4">
      {/* R1-R2: Hero (2x2) + GitHub (1x1) + Location (1x1) + About (2x1) */}
      <div className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3">
        <HeroCard index={i++} />
      </div>
      <div className="lg:col-start-3 lg:row-start-1">
        <GitHubCard index={i++} />
      </div>
      <div className="lg:col-start-4 lg:row-start-1">
        <LocationCard index={i++} />
      </div>
      <div className="lg:col-start-3 lg:col-end-5 lg:row-start-2">
        <AboutCard index={i++} />
      </div>

      {/* R3-R4: TechStack (2x2) + Experience (2x2) */}
      <div className="lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-5">
        <TechStackCard index={i++} />
      </div>
      <div className="lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-5">
        <ExperienceCard index={i++} />
      </div>

      {/* R5: Education (2x1) + Homelab project (2x1) */}
      <div className="lg:col-start-1 lg:col-end-3 lg:row-start-5">
        <EducationCard index={i++} />
      </div>
      <div className="lg:col-start-3 lg:col-end-5 lg:row-start-5">
        <ProjectCard project={homelab} index={i++} />
      </div>

      {/* R6: Dotfiles (1x1) + Portfolio (1x1) + Self-Hosted (2x1) */}
      <div className="lg:col-start-1 lg:row-start-6">
        <ProjectCard project={dotfiles} index={i++} />
      </div>
      <div className="lg:col-start-2 lg:row-start-6">
        <ProjectCard project={thisPortfolio} index={i++} />
      </div>
      <div className="lg:col-start-3 lg:col-end-5 lg:row-start-6">
        <ProjectCard project={selfHosted} index={i++} />
      </div>

      {/* R7: Contact (4x1) */}
      <div className="lg:col-start-1 lg:col-end-5 lg:row-start-7">
        <ContactCard index={i++} />
      </div>
    </div>
  )
}
