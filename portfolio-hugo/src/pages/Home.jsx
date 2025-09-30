import { motion } from 'framer-motion'
export default function Home(){
  return (
    <section className="min-h-screen flex items-center">
      <div className="section grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
          <p className="uppercase tracking-wider text-sm text-gray-600">Étudiant BTS SIO SISR</p>
          <h1 className="text-5xl font-extrabold mt-2">Hugo Dehay</h1>
          <p className="mt-6 text-lg text-gray-700">
            Étudiant en BTS SIO option SISR, passionné par les systèmes et réseaux. 
            Automatisation PowerShell, administration Active Directory/GPO, documentation claire.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/cv/CV_Hugo_Dehay.pdf" className="px-5 py-3 rounded-xl bg-primary text-white shadow-soft">Télécharger mon CV</a>
            <a href="https://www.linkedin.com/in/hugo-dehay/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-white shadow-soft">LinkedIn</a>
            <a href="https://github.com/HugoD16" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-white shadow-soft">GitHub</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.1}} className="hidden md:block">
          <div className="card">
            <div className="badge mb-2">Focus</div>
            <h3 className="text-xl font-semibold mb-2">Systèmes & Réseaux</h3>
            <p className="text-gray-600">Active Directory, GPO, Windows Server, virtualisation, scripts PowerShell.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
