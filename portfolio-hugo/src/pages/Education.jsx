const steps = [
  { year: "2024-2026", title: "BTS SIO SISR", school: "Lycée André Malraux Béthune", details: "Solutions d’Infrastructure, Systèmes et Réseaux." },
  { year: "2022-2023", title: "Baccalauréat", school: "Lycée André Malraux Béthune", details: "STI2D option SIN" }
]
export default function Education(){
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-12 text-center">Parcours scolaire</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>
        {steps.map((s, i)=>(
          <div key={i} className={`mb-10 flex ${i%2 ? 'justify-start' : 'justify-end'}`}>
            <div className="w-1/2">
              <div className="relative card">
                <div className="absolute -left-4 top-5 w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
                <div className="badge mb-2">{s.year}</div>
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.school}</p>
                <p className="text-gray-700 mt-2">{s.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
