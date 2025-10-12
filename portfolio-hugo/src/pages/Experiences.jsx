function ExperienceCard({ dotColor = "bg-indigo-600", title, subtitle, children, cta }) {
  return (
    <div className="mb-8 relative">
      <div className={`w-4 h-4 ${dotColor} rounded-full absolute -left-3 top-2`}></div>
      <div className="card">
        <h3 className="font-bold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        <div className="text-gray-700 mt-2">{children}</div>
        {cta}
      </div>
    </div>
  );
}

export default function Experiences() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-8">Expériences professionnelles</h2>

      <div className="relative pl-8">
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>

        {/* 1) Serveur — L’Onagre */}
        <ExperienceCard
          dotColor="bg-purple-600"
          title="Serveur — L’Onagre"
          subtitle="Fort-Mahon-Plage • juillet 2025 – août 2025"
        >
          <p>Accueil, service et relation client.</p>
        </ExperienceCard>

        {/* 2) Stage — Feron-Vrau (avec bouton Rapport) */}
        <ExperienceCard
          dotColor="bg-indigo-600"
          title="Stage — Feron-Vrau"
          subtitle="Lille • mai 2025 – juin 2025"
          cta={
            <a
              href="/docs/Hugo-DEHAY_Rapport-de-stage_Feron-Vrau.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
              aria-label="Télécharger le rapport de stage Feron-Vrau (DOCX)"
            >
              📎 Télécharger le rapport de stage
            </a>
          }
        >
          <ul className="list-disc list-inside space-y-1">
            <li>Scripts <b>PowerShell</b> pour comptes <b>AD</b> et automatisations <b>Microsoft 365</b>.</li>
            <li>GPO : suppression de profils inactifs, redémarrages planifiés.</li>
            <li>Déploiement Office 365 automatisé, cohérence UPN/identifiants.</li>
            <li>Migration <b>Windows 10 → 11</b> via USB, inventaire des postes AD.</li>
            <li>Migration <b>GLPI</b> (MariaDB → MySQL), rédaction de procédures.</li>
          </ul>
        </ExperienceCard>

        {/* 3) Cariste — LIOT */}
        <ExperienceCard
          dotColor="bg-indigo-600"
          title="Cariste — LIOT"
          subtitle="Annezin • juillet 2024"
        >
          <p>Chargement / Déchargement, mise en stock.</p>
        </ExperienceCard>

        {/* 4) Magasinier — Bosal Distribution */}
        <ExperienceCard
          dotColor="bg-indigo-600"
          title="Magasinier — Bosal Distribution"
          subtitle="Annezin • juin 2024 – juillet 2024"
        >
          <p>Préparation de commande, mise en stock, validation de bons de préparation et de livraison.</p>
        </ExperienceCard>

        {/* 5) Cariste et Préparateur de commande — Bosal Distribution */}
        <ExperienceCard
          dotColor="bg-indigo-600"
          title="Cariste et Préparateur de commande — Bosal Distribution"
          subtitle="Annezin • mars 2024 – avril 2024"
        >
          <p>Réception / préparation de commande / chargement / déchargement.</p>
        </ExperienceCard>
      </div>
    </section>
  );
}
