const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Chemin vers le dossier des actualités en markdown
const contentDir = path.join(process.cwd(), "content/actualites");
// Dossier où sera enregistré le JSON
const dataDir = path.join(process.cwd(), "public/data");

// Créer le dossier s'il n'existe pas
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Lire tous les fichiers markdown
const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));

// Transformer les fichiers en objets
const actualites = files.map((file) => {
  const filePath = path.join(contentDir, file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    ...data,
    body: content.trim(),
  };
});

// Trier par date (du plus récent au plus ancien)
const sortedActualites = actualites.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// Écrire le fichier JSON
fs.writeFileSync(
  path.join(dataDir, "actualites.json"),
  JSON.stringify(sortedActualites, null, 2)
);

console.log(
  `✅ ${actualites.length} actualités générées dans public/data/actualites.json`
);
