const articles = [
  { title: "Mistral AI : incarnation de l’intelligence artificielle à la française", summary: "Mistral AI s’impose avec une stratégie de modèles ouverts et des ambitions européennes face aux géants américains.", date: "26 septembre 2025", source: "Le Monde", link: "https://www.lemonde.fr/economie/article/2025/09/26/mistral-ai-incarnation-de-l-intelligence-artificielle-a-la-francaise_6643087_3234.html", image: "/images/veille/mistral.png" },
  { title: "Un chatbot déguisé en doudou : l’IA pénètre l’univers des enfants", summary: "L’IA se diffuse dans les jouets éducatifs, posant des questions de vie privée et d’impact sur le développement.", date: "25 septembre 2025", source: "Le Monde", link: "https://www.lemonde.fr/idees/article/2025/09/25/un-chatbot-deguise-en-doudou-apres-avoir-colonise-le-monde-des-adultes-l-ia-penetre-celui-des-enfants_6642899_3232.html", image: "/images/veille/chatbot.png" },
  { title: "La quête de pouvoir de Sam Altman, patron de ChatGPT", summary: "Sam Altman poursuit l’ambition de faire de l’IA une infrastructure centrale, soulevant des débats de gouvernance.", date: "27 septembre 2025", source: "Le Monde", link: "https://www.lemonde.fr/idees/article/2025/09/27/la-quete-de-pouvoir-de-sam-altman-patron-de-chatgpt_6643157_3232.html", image: "/images/veille/samaltman.png" }
]
export default function Veille(){
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-8 text-center">Veille IA</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a,i)=>(
          <article key={i} className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-xl transition">
            <img src={a.image} alt={a.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="text-gray-700 mt-2">{a.summary}</p>
              <p className="text-sm text-gray-500 mt-2">{a.date} — {a.source}</p>
              <a href={a.link} target="_blank" rel="noreferrer" className="inline-block mt-3 text-indigo-700 hover:underline">Lire l’article</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
