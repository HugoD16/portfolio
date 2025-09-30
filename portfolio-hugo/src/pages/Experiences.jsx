export default function Experiences(){
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-8">Expériences professionnelles</h2>
      <div className="relative pl-8">
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
        <div className="mb-8 relative">
          <div className="w-4 h-4 bg-indigo-600 rounded-full absolute -left-3 top-2"></div>
          <div className="card">
            <h3 className="font-bold">Stage — Feron‑Vrau (mai–juin 2025)</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Scripts <b>PowerShell</b> pour comptes <b>Active Directory</b> et automatisations <b>Microsoft 365</b>.</li>
              <li>GPO (nettoyage profils, redémarrages planifiés), migration <b>Windows 10 → 11</b>.</li>
              <li>Inventaire des postes AD, migration <b>GLPI</b> (MariaDB → MySQL), rédaction de procédures.</li>
            </ul>
          </div>
        </div>
        <div className="mb-8 relative">
          <div className="w-4 h-4 bg-purple-600 rounded-full absolute -left-3 top-2"></div>
          <div className="card">
            <h3 className="font-bold">Serveur — L’Onagre (été 2025)</h3>
            <p className="text-gray-700 mt-2">Accueil, service et relation client.</p>
          </div>
        </div>
        <div className="mb-2 relative">
          <div className="w-4 h-4 bg-indigo-600 rounded-full absolute -left-3 top-2"></div>
          <div className="card">
            <h3 className="font-bold">Cariste/Magasinier — LIOT & Bosal (2024)</h3>
            <p className="text-gray-700 mt-2">Gestion de stock, préparation de commandes, manutention.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
