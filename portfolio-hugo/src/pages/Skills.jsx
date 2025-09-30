const hard = [
  "PowerShell","Active Directory","Windows Server","GPO","Virtualisation",
  "Office 365 (Exchange/Teams/OneDrive)","GLPI","Git/GitHub"
]
const soft = ["Rigueur","Curiosité","Esprit d'équipe","Autonomie","Pédagogie"]
export default function Skills(){
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-8">Compétences</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-3">Hard skills</h3>
          <ul className="grid grid-cols-1 gap-2 list-disc list-inside">{hard.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-3">Soft skills</h3>
          <ul className="grid grid-cols-1 gap-2 list-disc list-inside">{soft.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
        </div>
      </div>
    </section>
  )
}
