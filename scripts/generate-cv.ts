import puppeteer from "puppeteer";
import Handlebars from "handlebars";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { cvData } from "../src/data/cv.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = resolve(__dirname, "templates/cv.hbs");
const templateSource = readFileSync(templatePath, "utf-8");
const template = Handlebars.compile(templateSource);

const labels = {
  es: {
    summary: "Resumen Profesional",
    experience: "Experiencia Laboral",
    education: "Educación",
    skills: "Habilidades Técnicas",
    projects: "Proyectos Destacados",
    languages: "Idiomas",
    tech: "Tecnologías",
  },
  en: {
    summary: "Professional Summary",
    experience: "Work Experience",
    education: "Education",
    skills: "Technical Skills",
    projects: "Featured Projects",
    languages: "Languages",
    tech: "Tech",
  },
};

async function generateCV(lang: "es" | "en") {
  const data = cvData[lang];
  const html = template({
    ...data,
    lang,
    labels: labels[lang],
  });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const outputPath = resolve(__dirname, `../public/${lang}_cv.pdf`);
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log(`✅ CV generado: ${outputPath}`);
}

async function main() {
  console.log("Generando CVs...");
  await generateCV("es");
  await generateCV("en");
  console.log("✅ Todos los CVs generados correctamente");
}

main().catch((err) => {
  console.error("Error generando CVs:", err);
  process.exit(1);
});
