// Ingredientes base con familia y subfamilia
const ingredientes = [
  { nombre: "Bergamota", tipo: "Salida", familia: "Cítrico", subfamilia: "Bergamota", color: "#f7c24d" },
  { nombre: "Naranja", tipo: "Salida", familia: "Cítrico", subfamilia: "Naranja", color: "#f5a623" },
  { nombre: "Rosa", tipo: "Corazón", familia: "Floral", subfamilia: "Blanco", color: "#e07ba3" },
  { nombre: "Jazmín", tipo: "Corazón", familia: "Floral", subfamilia: "Blanco", color: "#d46ea2" },
  { nombre: "Sándalo", tipo: "Fondo", familia: "Amaderado", subfamilia: "Sándalo", color: "#b08a5b" },
  { nombre: "Cedro", tipo: "Fondo", familia: "Amaderado", subfamilia: "Cedro", color: "#8b5e3c" }
];

// Render frascos en estantería
const estanteria = document.getElementById("estanteria");
ingredientes.forEach((ing, i) => {
  const img = document.createElement("img");
  img.src = `assets/frasco${i+1}.png`; // imágenes ilustradas
  img.alt = ing.nombre;
  img.dataset.familia = ing.familia;
  img.dataset.subfamilia = ing.subfamilia;
  estanteria.appendChild(img);
});

// Render ingredientes
const contenedor = document.getElementById("ingredientes");
ingredientes.forEach(ing => {
  const div = document.createElement("div");
  div.className = "ingrediente";
  div.innerHTML = `
    <h4>${ing.nombre} (${ing.tipo})</h4>
    <select>
      <option value="gramos">Gramos</option>
      <option value="gotas">Gotas</option>
      <option value="partes">Partes</option>
    </select>
    <input type="number" step="0.001" min="0" placeholder="Cantidad"/>
  `;
  contenedor.appendChild(div);
});

// Familias y subfamilias con barras
const familias = {
  "Cítrico": { total:0, sub: { "Bergamota":0, "Naranja":0 } },
  "Floral": { total:0, sub: { "Blanco":0 } },
  "Amaderado": { total:0, sub: { "Sándalo":0, "Cedro":0 } }
};

const barrasCont = document.getElementById("barras");
Object.keys(familias).forEach(fam => {
  Object.keys(familias[fam].sub).forEach(sub => {
    const barra = document.createElement("div");
    barra.className = "barra";
    barra.innerHTML = `<span style="background:${ingredientes.find(i=>i.subfamilia===sub)?.color || '#ccc'}"></span>`;
    barra.dataset.familia = fam;
    barra.dataset.subfamilia = sub;
    barrasCont.appendChild(barra);
  });
});

// Zona de modulación
const efectos = [
  "Brillo Cítrico", "Profundidad Amaderada", "Dulzor Gourmand",
  "Transparencia Acuática", "Aire Floral", "Persistencia",
  "Difusión", "Calidez Especiada", "Limpieza Jabón", "Exotismo Oriental"
];

const efectosCont = document.getElementById("efectos");
efectos.forEach(ef => {
  const div = document.createElement("div");
  div.innerHTML = `<label>${ef}:</label> <input type="range" min="0" max="10" value="0"/>`;
  efectosCont.appendChild(div);
});
