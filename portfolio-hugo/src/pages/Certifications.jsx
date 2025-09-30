const items = [
  { title: "CCNA : Présentation des réseaux", desc: "Certification Cisco Networking Academy.", img: "/images/certifications/ccna.png", file: "/certifications/CCNA.pdf" },
  { title: "Linux : L’administration avancée", desc: "Certification LinkedIn Learning.", img: "/images/certifications/linux.png", file: "/certifications/Linux_Admin_Avancee.pdf" },
  { title: "Prompt engineering pour la génération de contenu avec l’IA", desc: "LinkedIn Learning.", img: "/images/certifications/ia.png", file: "/certifications/Prompt_Engineering.pdf" },
  { title: "Les prompts engineering avancés", desc: "LinkedIn Learning.", img: "/images/certifications/prompt.png", file: "/certifications/Prompt_Engineering_Avance.pdf" }
]
const Card = ({img, title, desc, file}) => (
  <div className="card flex items-center gap-6 hover:shadow-xl transition">
    <img src={img} alt={title} className="w-24 h-24 object-contain rounded" />
    <div className="flex-1">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{desc}</p>
      <a href={file} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 rounded-full bg-indigo-900 text-white">Voir l’attestation</a>
    </div>
  </div>
)
export default function Certifications(){
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">{items.map((it,i)=>(<Card key={i} {...it} />))}</div>
    </section>
  )
}
