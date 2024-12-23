const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

async function compressImages() {
  // Dossier contenant vos images originales
  const inputFolder = "./public/images";
  // Dossier où seront sauvegardées les images compressées
  const outputFolder = "./public/images-compressed";

  try {
    // Créer le dossier de sortie s'il n'existe pas
    await fs.mkdir(outputFolder, { recursive: true });

    // Lire tous les fichiers du dossier d'entrée
    const files = await fs.readdir(inputFolder);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(inputFolder, file);
        const outputPath = path.join(outputFolder, file);

        await sharp(inputPath)
          .resize(1920, undefined, {
            // Redimensionne à max 1920px de large
            withoutEnlargement: true,
            fit: "inside",
          })
          .jpeg({ quality: 35 }) // Compresse avec une qualité de 75%
          .toFile(outputPath);

        console.log(`Compressed ${file}`);
      }
    }

    console.log("Compression completed!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

compressImages();
