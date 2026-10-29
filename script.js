function genereazaProgram() {
    let zileAlese = document.getElementById("alegereZile").value;
    let genAles = document.getElementById("alegereGen").value;
    let nivelAles = document.getElementById("alegereNivel").value;
    let zonaRezultat = document.getElementById("cutieRezultat");
    let container = document.querySelector(".container");
    let programText = "";

    if (genAles === "barbat") {
        container.classList.add("tema-barbat");
        container.classList.remove("tema-femeie");
    } else {
        container.classList.add("tema-femeie");
        container.classList.remove("tema-barbat");
    }

    // --- LOGICA PENTRU 3 ZILE ---
    if (zileAlese === "3") {
        if (genAles === "barbat") {
            if (nivelAles === "incepator") {
                programText = `<h3>🌱 3 Zile - Bărbat (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Full Body (Bază) 🔽</summary><div class="lista-exercitii"><p>1. Presă picioare: 3x12</p><p>2. Împins piept aparat: 3x12</p><p>3. Ramat aparat: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Full Body (Bază) 🔽</summary><div class="lista-exercitii"><p>1. Flexii picioare: 3x15</p><p>2. Presă umeri aparat: 3x12</p><p>3. Helcometru: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body (Bază) 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni goblet: 3x12</p><p>2. Hyperextensii: 3x12</p><p>3. Plank: 3x30 sec</p></div></details>`;
            } else if (nivelAles === "intermediar") {
                programText = `<h3>💪 3 Zile - Bărbat (Intermediar)</h3>
                <details class="zi-antrenament"><summary>Luni: Full Body (Forță) 🔽</summary><div class="lista-exercitii"><p>1. Bench Press: 4x8</p><p>2. Genuflexiuni: 4x8</p><p>3. Ramat cu bara: 3x10</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Full Body (Picioare/Umeri) 🔽</summary><div class="lista-exercitii"><p>1. Presă militară: 3x10</p><p>2. Îndreptări românești: 3x10</p><p>3. Tracțiuni: 3xMax</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body (Volum) 🔽</summary><div class="lista-exercitii"><p>1. Împins înclinat gantere: 3x12</p><p>2. Presă picioare: 4x12</p><p>3. Flexii biceps Z-bar: 3x12</p></div></details>`;
            } else {
                programText = `<h3>🔥 3 Zile - Bărbat (Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Upper Body Superset 🔽</summary><div class="lista-exercitii"><p>1. Bench Press + Ramat (Superset): 4x8</p><p>2. Fluturări + Facepulls: 3x15</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Lower Body Intensity 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni (Dropset): 4x6,8,10</p><p>2. Fandări bulgărești: 3x10</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body Pump 🔽</summary><div class="lista-exercitii"><p>1. Presă umeri: 4x8</p><p>2. Dips cu greutate: 3x10</p><p>3. Skullcrushers: 3x12</p></div></details>`;
            }
        } else { // FEMEI 3 ZILE
            if (nivelAles === "incepator") {
                programText = `<h3>🍑 3 Zile - Femeie (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Lower Body 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni libere: 3x15</p><p>2. Podul fundului: 3x20</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Upper Body 🔽</summary><div class="lista-exercitii"><p>1. Ramat la aparat: 3x12</p><p>2. Plank: 3x30 sec</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Tone 🔽</summary><div class="lista-exercitii"><p>1. Fandări: 3x12</p><p>2. Step-ups: 3x15</p></div></details>`;
            } else if (nivelAles === "intermediar") {
                programText = `<h3>👑 3 Zile - Femeie (Intermediar)</h3>
                <details class="zi-antrenament"><summary>Luni: Heavy Glutes 🔽</summary><div class="lista-exercitii"><p>1. Hip Thrust: 4x10</p><p>2. RDL: 4x10</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Upper Sculpt 🔽</summary><div class="lista-exercitii"><p>1. Ramat ganteră: 3x12</p><p>2. Ridicări laterale: 3x15</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Glute Pump 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni Sumo: 4x12</p><p>2. Kickbacks: 3x15</p></div></details>`;
            } else {
                programText = `<h3>💎 3 Zile - Femeie (Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Glute Power 🔽</summary><div class="lista-exercitii"><p>1. Hip Thrust (Pauză 2s): 4x8</p><p>2. Îndreptări sumo: 4x8</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Upper Intensity 🔽</summary><div class="lista-exercitii"><p>1. Tracțiuni: 4xMax</p><p>2. Burpees: 3x15</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Circuit 🔽</summary><div class="lista-exercitii"><p>1. Goblet Squat + Jump Squat: 3x12</p><p>2. Kettlebell Swings: 3x20</p></div></details>`;
            }
        }
    }

    // --- LOGICA PENTRU 4 ZILE ---
    else if (zileAlese === "4") {
        if (genAles === "barbat") {
            if (nivelAles === "incepator") {
                programText = `<h3>🌱 4 Zile - Bărbat (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Upper Body A 🔽</summary><div class="lista-exercitii"><p>1. Împins aparat: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Lower Body A 🔽</summary><div class="lista-exercitii"><p>1. Presă picioare: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Upper Body B 🔽</summary><div class="lista-exercitii"><p>1. Helcometru: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Lower Body B 🔽</summary><div class="lista-exercitii"><p>1. Flexii picioare: 3x15</p></div></details>`;
            } else if (nivelAles === "intermediar") {
                programText = `<h3>💪 4 Zile - Bărbat (Intermediar)</h3>
                <details class="zi-antrenament"><summary>Luni: Upper Power 🔽</summary><div class="lista-exercitii"><p>1. Bench Press: 4x8</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Lower Power 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni: 4x8</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Upper Hypertrophy 🔽</summary><div class="lista-exercitii"><p>1. Împins gantere: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Lower Hypertrophy 🔽</summary><div class="lista-exercitii"><p>1. Fandări: 3x10</p></div></details>`;
            } else {
                programText = `<h3>🔥 4 Zile - Bărbat (Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Upper Body (Heavy) 🔽</summary><div class="lista-exercitii"><p>1. Weighted Dips: 4x8</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Lower Body (Heavy) 🔽</summary><div class="lista-exercitii"><p>1. Îndreptări: 5x5</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Upper (Supersets) 🔽</summary><div class="lista-exercitii"><p>1. Tracțiuni + Fluturări: 4x10</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Lower (Pump) 🔽</summary><div class="lista-exercitii"><p>1. Hack Squat (Dropset): 3x10,10,10</p></div></details>`;
            }
        } else { // FEMEI 4 ZILE
            if (nivelAles === "incepator") {
                programText = `<h3>🌸 4 Zile - Femeie (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Picioare 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni: 3x15</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Brațe/Umeri 🔽</summary><div class="lista-exercitii"><p>1. Ridicări laterale: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Fesieri 🔽</summary><div class="lista-exercitii"><p>1. Kickbacks: 3x15</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Core 🔽</summary><div class="lista-exercitii"><p>1. Plank: 3x45 sec</p></div></details>`;
            } else { // INTERMEDIAR + AVANSAT
                programText = `<h3>👑 4 Zile - Femeie (Intermediar/Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Glute Power 🔽</summary><div class="lista-exercitii"><p>1. Hip Thrust: 4x10</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Upper Sculpt 🔽</summary><div class="lista-exercitii"><p>1. Ramat ganteră: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Hamstrings 🔽</summary><div class="lista-exercitii"><p>1. RDL: 4x10</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body 🔽</summary><div class="lista-exercitii"><p>1. Kettlebell Swings: 3x20</p></div></details>`;
            }
        }
    }

    // --- LOGICA PENTRU 5 ZILE ---
    else if (zileAlese === "5") {
        if (genAles === "barbat") {
            if (nivelAles === "incepator") {
                programText = `<h3>🌱 5 Zile - Bărbat (Începător) - Bro Split Soft</h3>
                <details class="zi-antrenament"><summary>Luni: Piept (Aparate) 🔽</summary><div class="lista-exercitii"><p>1. Împins aparat: 4x12</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Spate (Helcometru) 🔽</summary><div class="lista-exercitii"><p>1. Helcometru: 4x12</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Picioare (Presă) 🔽</summary><div class="lista-exercitii"><p>1. Presă: 4x12</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Umeri 🔽</summary><div class="lista-exercitii"><p>1. Ridicări laterale: 3x15</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Brațe 🔽</summary><div class="lista-exercitii"><p>1. Flexii biceps aparat: 3x15</p></div></details>`;
            } else if (nivelAles === "intermediar") {
                programText = `<h3>💪 5 Zile - Bărbat (Intermediar) - Classic Bro Split</h3>
                <details class="zi-antrenament"><summary>Luni: Piept (Halte) 🔽</summary><div class="lista-exercitii"><p>1. Bench Press: 4x8</p><p>2. Împins înclinat: 3x10</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Spate (Ramat) 🔽</summary><div class="lista-exercitii"><p>1. Ramat bara: 4x10</p><p>2. Tracțiuni: 3xMax</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Picioare (Genuflexiuni) 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni: 4x8</p><p>2. Flexii picioare: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Umeri 🔽</summary><div class="lista-exercitii"><p>1. Presă militară: 4x10</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Brațe 🔽</summary><div class="lista-exercitii"><p>1. Biceps Z-bar: 3x12</p><p>2. Skullcrushers: 3x12</p></div></details>`;
            } else {
                programText = `<h3>🔥 5 Zile - Bărbat (Avansat) - PPL + Arnold Split</h3>
                <details class="zi-antrenament"><summary>Luni: Piept & Spate (Superset) 🔽</summary><div class="lista-exercitii"><p>1. Bench Press + Ramat Pendlay: 4x8</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Picioare (Intensitate) 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni: 5x5</p><p>2. Hack Squat (Dropset): 3x10</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Umeri & Brațe 🔽</summary><div class="lista-exercitii"><p>1. Presă umeri: 4x8</p><p>2. Flexii + Extensii superset: 4x12</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Piept & Spate (Volum) 🔽</summary><div class="lista-exercitii"><p>1. Împins gantere înclinat: 4x12</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Picioare (Izolare) 🔽</summary><div class="lista-exercitii"><p>1. RDL: 4x12</p><p>2. Gambe la presă: 5x20</p></div></details>`;
            }
        } else { // FEMEI 5 ZILE
            if (nivelAles === "incepator") {
                programText = `<h3>🌸 5 Zile - Femeie (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Fesieri 🔽</summary><div class="lista-exercitii"><p>1. Podul fundului: 4x20</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Upper 🔽</summary><div class="lista-exercitii"><p>1. Ramat aparat: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Cardio 🔽</summary><div class="lista-exercitii"><p>1. Mers înclinat: 30 min</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Picioare 🔽</summary><div class="lista-exercitii"><p>1. Genuflexiuni goblet: 3x15</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Core 🔽</summary><div class="lista-exercitii"><p>1. Plank: 3x45 sec</p></div></details>`;
            } else { // INTERMEDIAR / AVANSAT
                programText = `<h3>💎 5 Zile - Femeie (Intermediar/Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Hip Thrust focus 🔽</summary><div class="lista-exercitii"><p>1. Hip Thrust (Heavy): 4x8</p></div></details>
                <details class="zi-antrenament"><summary>Marți: Upper Sculpt 🔽</summary><div class="lista-exercitii"><p>1. Tracțiuni helcometru: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Miercuri: Quad & Glute 🔽</summary><div class="lista-exercitii"><p>1. Fandări bulgărești: 3x12</p></div></details>
                <details class="zi-antrenament"><summary>Joi: Posterior Chain 🔽</summary><div class="lista-exercitii"><p>1. RDL: 4x10</p></div></details>
                <details class="zi-antrenament"><summary>Vineri: Glute Finisher 🔽</summary><div class="lista-exercitii"><p>1. Kickbacks + Abducții: 4x15</p></div></details>`;
            }
        }
    }

    zonaRezultat.innerHTML = programText;
    document.getElementById("butonPrint").style.display = "block";
}

function printeaza() { 
    window.print(); 
}

// --- 1. CALCULATORUL DE MACRONUTRIENȚI ---
function calculeazaMacro() {
    let gen = document.getElementById("alegereGen").value;
    let varsta = parseFloat(document.getElementById("macroVarsta").value);
    let greutate = parseFloat(document.getElementById("macroGreutate").value);
    let inaltime = parseFloat(document.getElementById("macroInaltime").value);
    let obiectiv = document.getElementById("macroObiectiv").value;
    let cutie = document.getElementById("rezultatMacro");

    if (!varsta || !greutate || !inaltime) {
        alert("Te rugăm să completezi vârsta, greutatea și înălțimea!");
        return;
    }

    // Formula Mifflin-St Jeor pentru Rata Metabolică Bazală (BMR)
    let bmr = 0;
    if (gen === "barbat") {
        bmr = (10 * greutate) + (6.25 * inaltime) - (5 * varsta) + 5;
    } else {
        bmr = (10 * greutate) + (6.25 * inaltime) - (5 * varsta) - 161;
    }

    // Nivel activitate mediu pentru sală (~3-4 zile/săptămână) = factor 1.45
    let caloriiMentinere = Math.round(bmr * 1.45);
    let caloriiTinta = caloriiMentinere;

    if (obiectiv === "slabire") {
        caloriiTinta -= 400;
    } else if (obiectiv === "masa") {
        caloriiTinta += 300;
    }

    // Distribuție standard macro: Proteine 2g/kg, Grăsimi 0.9g/kg
    let proteine = Math.round(greutate * 2.0);
    let grasimi = Math.round(greutate * 0.9);
    let caloriiDinProtSiGrasimi = (proteine * 4) + (grasimi * 9);
    let carbohidrati = Math.max(0, Math.round((caloriiTinta - caloriiDinProtSiGrasimi) / 4));

    cutie.innerHTML = `
        <h4 style="margin: 0 0 8px 0; color: #2196F3;">Ținta ta zilnică (${obiectiv.toUpperCase()}):</h4>
        <p>🔥 <strong>Calorii totale:</strong> ${caloriiTinta} kcal/zi</p>
        <p>🥩 <strong>Proteine:</strong> ${proteine}g (${proteine * 4} kcal)</p>
        <p>🥑 <strong>Grăsimi:</strong> ${grasimi}g (${grasimi * 9} kcal)</p>
        <p>🍚 <strong>Carbohidrați:</strong> ${carbohidrati}g (${carbohidrati * 4} kcal)</p>
    `;
    cutie.style.display = "block";
}

// --- AGENT AI REAL (GEMINI API) ---
// --- AGENT AI REAL (GEMINI API) ---
async function trimiteMesajChat() {
    let input = document.getElementById("mesajChat");
    let text = input.value.trim();
    let istoric = document.getElementById("istoricChat");

    if (!text) return;

    // 1. Afișează mesajul tău în chat
    istoric.innerHTML += `<p class="mesaj-user"><strong>Tu:</strong> ${text}</p>`;
    input.value = "";

    // 2. Afișează loader-ul
    let loaderId = "loadingAI_" + Date.now();
    istoric.innerHTML += `<p class="mesaj-coach" id="${loaderId}"><strong>Coach AI:</strong> ⏳ Se gândește...</p>`;
    istoric.scrollTop = istoric.scrollHeight;

    // 3. Cheia ta API validă
    const API_KEY = "AQ.Ab8RN6LSCKPdoCRE2rd1aqk68fGeDnwAibkItX7UqngLVbC44A";

    const promptSistem = `Ești un antrenor personal certificat de fitness. Răspunde strict în limba română, scurt și aplicat (maxim 3 fraze), oferind alternative concrete pentru următoarea cerință: "${text}"`;

    try {
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": API_KEY
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: promptSistem }]
                }]
            })
        });

        const data = await response.json();

        // Elimină loader-ul
        const loaderElem = document.getElementById(loaderId);
        if (loaderElem) loaderElem.remove();

        if (data.error) {
            istoric.innerHTML += `<p class="mesaj-coach" style="color: #ff5252;"><strong>Eroare:</strong> ${data.error.message}</p>`;
            return;
        }

        if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0].text) {
            let raspunsAI = data.candidates[0].content.parts[0].text;
            istoric.innerHTML += `<p class="mesaj-coach"><strong>Coach AI:</strong> ${raspunsAI}</p>`;
        } else {
            istoric.innerHTML += `<p class="mesaj-coach" style="color: #ff5252;"><strong>Coach AI:</strong> Nu am primit un răspuns valid.</p>`;
        }

    } catch (eroare) {
        const loaderElem = document.getElementById(loaderId);
        if (loaderElem) loaderElem.remove();
        istoric.innerHTML += `<p class="mesaj-coach" style="color: #ff5252;"><strong>Coach AI:</strong> Eroare de rețea: ${eroare.message}</p>`;
        console.error("Eroare API:", eroare);
    }

    istoric.scrollTop = istoric.scrollHeight;
}