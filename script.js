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

    // LOGICA PENTRU 3 ZILE (4 - 6 exerciții / antrenament) 
    if (zileAlese === "3") {
        if (genAles === "barbat") {
            if (nivelAles === "incepator") {
                programText = `<h3>🌱 3 Zile - Bărbat (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Full Body A 🔽</summary><div class="lista-exercitii">
                    <p>1. Presă picioare: 3x12</p>
                    <p>2. Împins la aparat piept: 3x12</p>
                    <p>3. Ramat la cablu / aparat: 3x12</p>
                    <p>4. Presă militară cu gantere din șezut: 3x12</p>
                    <p>5. Plank: 3x30 sec</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Full Body B 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni goblet cu ganteră: 3x12</p>
                    <p>2. Tracțiuni la helcometru priză largă: 3x12</p>
                    <p>3. Flotări clasice / pe genunchi: 3x10-12</p>
                    <p>4. Flexii picioare la aparat (femurali): 3x15</p>
                    <p>5. Flexii biceps cu gantere: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body C 🔽</summary><div class="lista-exercitii">
                    <p>1. Împins înclinat la aparat: 3x12</p>
                    <p>2. Ramat cu gantera rezemat pe bancă: 3x12</p>
                    <p>3. Extensii picioare la aparat: 3x15</p>
                    <p>4. Hiperextensii lombari: 3x12</p>
                    <p>5. Extensii triceps la scripete: 3x12</p>
                </div></details>`;
            } else if (nivelAles === "intermediar") {
                programText = `<h3>💪 3 Zile - Bărbat (Intermediar)</h3>
                <details class="zi-antrenament"><summary>Luni: Full Body (Forță) 🔽</summary><div class="lista-exercitii">
                    <p>1. Bench Press (Împins culcat): 4x8</p>
                    <p>2. Genuflexiuni cu bara: 4x8</p>
                    <p>3. Ramat cu bara din aplecat: 3x10</p>
                    <p>4. Presă umeri cu gantere: 3x10</p>
                    <p>5. Ridicări de picioare din atârnat: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Full Body (Picioare/Tracțiuni) 🔽</summary><div class="lista-exercitii">
                    <p>1. Îndreptări românești cu bara (RDL): 4x10</p>
                    <p>2. Tracțiuni priză pronație: 4xMax</p>
                    <p>3. Dips (Flotări paralele): 3x10</p>
                    <p>4. Fandări din mers cu gantere: 3x12/picior</p>
                    <p>5. Facepulls la scripete: 3x15</p>
                    <p>6. Flexii biceps bara Z: 3x10</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body (Hipertrofie & Volum) 🔽</summary><div class="lista-exercitii">
                    <p>1. Împins înclinat cu gantere: 4x10</p>
                    <p>2. Presă picioare 45 grade: 4x12</p>
                    <p>3. Ramat la cablu așezat: 4x10</p>
                    <p>4. Ridicări laterale gantere: 4x12</p>
                    <p>5. Skullcrushers (triceps): 3x12</p>
                </div></details>`;
            } else {
                programText = `<h3>🔥 3 Zile - Bărbat (Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Upper Heavy + Supersets 🔽</summary><div class="lista-exercitii">
                    <p>1. Bench Press: 4x6</p>
                    <p>2. Ramat pendlay cu bara: 4x6</p>
                    <p>3. Împins militar din picioare: 4x8</p>
                    <p>4. Tracțiuni cu greutate adăugată: 3x8</p>
                    <p>5. Superset: Fluturări cablu + Facepulls: 3x12-15</p>
                    <p>6. Superset: Dips + Flexii ciocan: 3x10</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Lower Intensity & Chains 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni: 5x5 (greutate progresivă)</p>
                    <p>2. Îndreptări convenționale: 4x6</p>
                    <p>3. Fandări bulgărești cu gantere: 3x10/picior</p>
                    <p>4. Hack Squat (Dropset la ultima): 3x10, 8, 6</p>
                    <p>5. Gambe din picioare la aparat: 4x15</p>
                    <p>6. Roată abdomene (Ab-wheel): 4x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body Metabolic Pump 🔽</summary><div class="lista-exercitii">
                    <p>1. Împins gantere pe plan înclinat: 4x8-10</p>
                    <p>2. Ramat pe bancă cu suport piept: 4x10</p>
                    <p>3. Presă picioare unică (unilateral): 3x12/picior</p>
                    <p>4. Ridicări laterale cablu: 4x15</p>
                    <p>5. Extensii triceps deasupra capului: 3x12</p>
                    <p>6. Flexii biceps la banca Scott: 3x10</p>
                </div></details>`;
            }
        } else { // FEMEI 3 ZILE
            if (nivelAles === "incepator") {
                programText = `<h3>🍑 3 Zile - Femeie (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Lower Body Focus 🔽</summary><div class="lista-exercitii">
                    <p>1. Podul fundului (Glute bridge) cu disc: 3x15</p>
                    <p>2. Genuflexiuni goblet cu ganteră: 3x12</p>
                    <p>3. Presă picioare (picioarele sus și depărtate): 3x12</p>
                    <p>4. Abducții la aparat: 3x15</p>
                    <p>5. Plank clasic: 3x30 sec</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Upper Body & Core 🔽</summary><div class="lista-exercitii">
                    <p>1. Helcometru priză neutră: 3x12</p>
                    <p>2. Împins la aparat piept: 3x12</p>
                    <p>3. Presă umeri cu gantere mici: 3x12</p>
                    <p>4. Ridicări laterale gantere: 3x15</p>
                    <p>5. Crunches la sol: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body Toning 🔽</summary><div class="lista-exercitii">
                    <p>1. Îndreptări românești cu gantere: 3x12</p>
                    <p>2. Step-ups pe bancă: 3x12/picior</p>
                    <p>3. Ramat la scripete din așezat: 3x12</p>
                    <p>4. Flotări înclinate la smith/bancă: 3x10</p>
                    <p>5. Ridicări de picioare întinsă pe spate: 3x15</p>
                </div></details>`;
            } else if (nivelAles === "intermediar") {
                programText = `<h3>👑 3 Zile - Femeie (Intermediar)</h3>
                <details class="zi-antrenament"><summary>Luni: Heavy Glutes & Hamstrings 🔽</summary><div class="lista-exercitii">
                    <p>1. Hip Thrust cu bara: 4x10</p>
                    <p>2. Îndreptări românești cu gantere (RDL): 4x10</p>
                    <p>3. Fandări bulgărești: 3x10/picior</p>
                    <p>4. Flexii femurali la aparat: 3x12</p>
                    <p>5. Abducții la cablu / aparat: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Upper Sculpt & Arms 🔽</summary><div class="lista-exercitii">
                    <p>1. Tracțiuni asistate / Helcometru: 4x10</p>
                    <p>2. Împins cu gantere pe plan înclinat: 3x10</p>
                    <p>3. Ramat cu gantera sprijinit pe bancă: 3x12</p>
                    <p>4. Ridicări laterale din picioare: 3x15</p>
                    <p>5. Extensii triceps frânghie + Flexii biceps: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Glute Pump & Quads 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni Sumo cu ganteră grea: 4x12</p>
                    <p>2. Presă picioare poziție înaltă: 4x12</p>
                    <p>3. Kickbacks la cablu pentru fesier: 3x15/picior</p>
                    <p>4. Hiperextensii la 45° cu rotunjirea spatelui: 3x12</p>
                    <p>5. Plank lateral: 3x30 sec/parte</p>
                </div></details>`;
            } else {
                programText = `<h3>💎 3 Zile - Femeie (Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Glute Power & Volume 🔽</summary><div class="lista-exercitii">
                    <p>1. Hip Thrust cu bara (2 secunde pauză sus): 4x8</p>
                    <p>2. Îndreptări Sumo cu bara: 4x8</p>
                    <p>3. Fandări deficite cu piciorul din față ridicat: 3x10/picior</p>
                    <p>4. Hiperextensii cu disc la piept: 3x12</p>
                    <p>5. Abducții la aparat (dropset): 3x15, 12, 10</p>
                    <p>6. Kickbacks cablu: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Upper Body Density & Conditioning 🔽</summary><div class="lista-exercitii">
                    <p>1. Tracțiuni priză neutră (libere sau elastice): 4x8</p>
                    <p>2. Presă militară cu gantere din picioare: 4x8</p>
                    <p>3. Ramat cu bara din aplecat: 3x10</p>
                    <p>4. Împins plan orizontal cu gantere: 3x10</p>
                    <p>5. Facepulls la scripete: 3x15</p>
                    <p>6. Burpees / Kettlebell swings: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Hybrid Legs & Glute Focus 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni cu bara la ceafă: 4x8</p>
                    <p>2. Romanian Deadlifts (RDL) la cablu sau bară: 4x10</p>
                    <p>3. Presă picioare dropset: 3x12</p>
                    <p>4. Mers fandat cu gantere: 3x20 pași</p>
                    <p>5. Ridicări de bazin pe un picior (Single leg glute bridge): 3x12</p>
                </div></details>`;
            }
        }
    }

    // =========================================================================
    // --- LOGICA PENTRU 4 ZILE (3 - 5 exerciții / antrenament) ---
    // =========================================================================
    else if (zileAlese === "4") {
        if (genAles === "barbat") {
            if (nivelAles === "incepator") {
                programText = `<h3>🌱 4 Zile - Bărbat (Începător) - Upper / Lower</h3>
                <details class="zi-antrenament"><summary>Luni: Upper Body A 🔽</summary><div class="lista-exercitii">
                    <p>1. Împins la aparat pentru piept: 3x12</p>
                    <p>2. Helcometru la piept: 3x12</p>
                    <p>3. Presă de umeri la aparat: 3x12</p>
                    <p>4. Flexii biceps la scripete: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Lower Body A 🔽</summary><div class="lista-exercitii">
                    <p>1. Presă picioare: 4x12</p>
                    <p>2. Flexii picioare aparat (femurali): 3x12</p>
                    <p>3. Extensii picioare aparat: 3x12</p>
                    <p>4. Plank: 3x40 sec</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Upper Body B 🔽</summary><div class="lista-exercitii">
                    <p>1. Împins gantere pe plan înclinat: 3x10</p>
                    <p>2. Ramat așezat la cablu: 3x12</p>
                    <p>3. Ridicări laterale cu gantere: 3x12</p>
                    <p>4. Extensii triceps la frânghie: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Lower Body B 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni goblet: 3x12</p>
                    <p>2. Îndreptări românești cu gantere: 3x10</p>
                    <p>3. Gambe la aparat: 4x15</p>
                    <p>4. Crunches abdomene: 3x15</p>
                </div></details>`;
            } else if (nivelAles === "intermediar") {
                programText = `<h3>💪 4 Zile - Bărbat (Intermediar) - Upper / Lower Power & Size</h3>
                <details class="zi-antrenament"><summary>Luni: Upper Power 🔽</summary><div class="lista-exercitii">
                    <p>1. Bench Press: 4x6-8</p>
                    <p>2. Ramat cu bara: 4x8</p>
                    <p>3. Presă militară din picioare: 3x8</p>
                    <p>4. Tracțiuni priză largă: 3xMax</p>
                    <p>5. Flexii biceps cu bara dreaptă: 3x10</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Lower Power 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni cu bara: 4x6-8</p>
                    <p>2. Îndreptări românești (RDL): 4x8</p>
                    <p>3. Presă picioare: 3x10</p>
                    <p>4. Flexii femurali aparat: 3x12</p>
                    <p>5. Gambe din picioare: 4x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Upper Hypertrophy 🔽</summary><div class="lista-exercitii">
                    <p>1. Împins înclinat gantere: 4x10</p>
                    <p>2. Ramat la scripete pe suport piept: 4x10</p>
                    <p>3. Fluturări gantere/cablu: 3x12</p>
                    <p>4. Ridicări laterale: 4x15</p>
                    <p>5. Skullcrushers triceps: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Lower Hypertrophy 🔽</summary><div class="lista-exercitii">
                    <p>1. Hack Squat sau Genuflexiuni frontale: 4x10</p>
                    <p>2. Fandări din mers cu gantere: 3x12/picior</p>
                    <p>3. Extensii picioare: 3x15</p>
                    <p>4. Ridicări picioare din atârnat (abdomene): 4x12</p>
                </div></details>`;
            } else {
                programText = `<h3>🔥 4 Zile - Bărbat (Avansat) - Heavy & Compound</h3>
                <details class="zi-antrenament"><summary>Luni: Upper Heavy 🔽</summary><div class="lista-exercitii">
                    <p>1. Dips cu centură/greutate: 4x6</p>
                    <p>2. Ramat cu bara T (T-Bar row): 4x8</p>
                    <p>3. Împins gantere pe plan orizontal: 3x8</p>
                    <p>4. Presă militară cu bara: 3x6</p>
                    <p>5. Facepulls la scripete: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Lower Heavy 🔽</summary><div class="lista-exercitii">
                    <p>1. Îndreptări convenționale: 5x5</p>
                    <p>2. Genuflexiuni pauză 2 secunde: 4x6</p>
                    <p>3. Fandări bulgărești: 3x8/picior</p>
                    <p>4. Gambe la presă: 4x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Upper Volume & Arms 🔽</summary><div class="lista-exercitii">
                    <p>1. Tracțiuni priză supinată (chin-ups): 4x8</p>
                    <p>2. Împins înclinat la Smith Machine: 4x10</p>
                    <p>3. Fluturări cabluri la piept: 3x12</p>
                    <p>4. Ridicări laterale cablu: 4x12</p>
                    <p>5. Flexii biceps ciocan + Extensii triceps: 3x10 (superset)</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Lower Pump & Quad Focus 🔽</summary><div class="lista-exercitii">
                    <p>1. Hack Squat (dropset final): 4x10, 8, 8, 6</p>
                    <p>2. Îndreptări picioare drepte (Stiff leg deadlift): 4x10</p>
                    <p>3. Extensii picioare dropset: 3x15</p>
                    <p>4. Flexii femurali culcat: 3x12</p>
                    <p>5. Roată abdomene: 3x15</p>
                </div></details>`;
            }
        } else { // FEMEI 4 ZILE
            if (nivelAles === "incepator") {
                programText = `<h3>🌸 4 Zile - Femeie (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Lower Body A (Fesieri & Picioare) 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni libere / cu disc: 3x12</p>
                    <p>2. Podul fundului pe sol: 3x15</p>
                    <p>3. Presă picioare: 3x12</p>
                    <p>4. Abducții aparat: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Upper Body & Core 🔽</summary><div class="lista-exercitii">
                    <p>1. Tracțiuni helcometru: 3x12</p>
                    <p>2. Împins la aparat piept: 3x12</p>
                    <p>3. Ridicări laterale gantere: 3x12</p>
                    <p>4. Plank: 3x35 sec</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Lower Body B (Femurali Focus) 🔽</summary><div class="lista-exercitii">
                    <p>1. Îndreptări românești cu gantere: 3x12</p>
                    <p>2. Fandări statice: 3x10/picior</p>
                    <p>3. Flexii femurali aparat: 3x12</p>
                    <p>4. Kickbacks cu greutate pe gleznă: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Full Body Tone 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni goblet: 3x12</p>
                    <p>2. Ramat cu ganteră sprijinit: 3x12</p>
                    <p>3. Presă umeri: 3x12</p>
                    <p>4. Crunches: 3x15</p>
                </div></details>`;
            } else { // INTERMEDIAR + AVANSAT
                programText = `<h3>👑 4 Zile - Femeie (Intermediar/Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Glute Power & Thrusts 🔽</summary><div class="lista-exercitii">
                    <p>1. Hip Thrust cu bara: 4x10</p>
                    <p>2. Fandări bulgărești cu gantere: 3x10/picior</p>
                    <p>3. Genuflexiuni Sumo: 4x10</p>
                    <p>4. Abducții la cablu: 3x15</p>
                    <p>5. Hiperextensii la 45°: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Upper Body Sculpt 🔽</summary><div class="lista-exercitii">
                    <p>1. Helcometru / Tracțiuni asistate: 4x10</p>
                    <p>2. Ramat cu gantera: 3x12</p>
                    <p>3. Împins gantere înclinat: 3x10</p>
                    <p>4. Ridicări laterale: 4x15</p>
                    <p>5. Facepulls: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Posterior Chain (Hamstrings & Glutes) 🔽</summary><div class="lista-exercitii">
                    <p>1. Îndreptări românești cu bara (RDL): 4x8</p>
                    <p>2. Hip Thrust cu bandă deasupra genunchilor: 3x12</p>
                    <p>3. Flexii femurali la aparat: 4x10</p>
                    <p>4. Step-ups explozive pe cutie: 3x12/picior</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Quads, Delts & Core 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni cu bara: 4x8</p>
                    <p>2. Presă picioare: 3x12</p>
                    <p>3. Presă militară cu gantere: 3x10</p>
                    <p>4. Kettlebell Swings: 3x20</p>
                    <p>5. Ridicări de picioare pe plan înclinat: 3x15</p>
                </div></details>`;
            }
        }
    }

    // =========================================================================
    // --- LOGICA PENTRU 5 ZILE (3 - 4 exerciții / antrenament) ---
    // =========================================================================
    else if (zileAlese === "5") {
        if (genAles === "barbat") {
            if (nivelAles === "incepator") {
                programText = `<h3>🌱 5 Zile - Bărbat (Începător) - Bro Split Soft</h3>
                <details class="zi-antrenament"><summary>Luni: Piept 🔽</summary><div class="lista-exercitii">
                    <p>1. Împins piept la aparat: 4x12</p>
                    <p>2. Împins înclinat cu gantere: 3x12</p>
                    <p>3. Fluturări la aparat (Pec-Deck): 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Spate 🔽</summary><div class="lista-exercitii">
                    <p>1. Helcometru la piept: 4x12</p>
                    <p>2. Ramat la scripete din șezut: 3x12</p>
                    <p>3. Hiperextensii lombari: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Picioare 🔽</summary><div class="lista-exercitii">
                    <p>1. Presă picioare: 4x12</p>
                    <p>2. Extensii picioare aparat: 3x12</p>
                    <p>3. Flexii femurali aparat: 3x12</p>
                    <p>4. Gambe la aparat: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Umeri 🔽</summary><div class="lista-exercitii">
                    <p>1. Presă militară la aparat/gantere: 4x10</p>
                    <p>2. Ridicări laterale cu gantere: 4x12</p>
                    <p>3. Ridicări posterioare aparat: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Brațe & Core 🔽</summary><div class="lista-exercitii">
                    <p>1. Flexii biceps la aparat/scripete: 3x12</p>
                    <p>2. Extensii triceps la scripete: 3x12</p>
                    <p>3. Flexii biceps ciocan cu gantere: 3x12</p>
                    <p>4. Plank: 3x45 sec</p>
                </div></details>`;
            } else if (nivelAles === "intermediar") {
                programText = `<h3>💪 5 Zile - Bărbat (Intermediar) - Classic Bro Split</h3>
                <details class="zi-antrenament"><summary>Luni: Piept 🔽</summary><div class="lista-exercitii">
                    <p>1. Bench Press cu bara: 4x8</p>
                    <p>2. Împins gantere pe plan înclinat: 3x10</p>
                    <p>3. Fluturări cablu: 3x12</p>
                    <p>4. Flotări paralele (Dips): 3xMax</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Spate 🔽</summary><div class="lista-exercitii">
                    <p>1. Ramat cu bara din aplecat: 4x8</p>
                    <p>2. Tracțiuni priză largă: 3xMax</p>
                    <p>3. Ramat cu gantera pe un braț: 3x10</p>
                    <p>4. Helcometru priză strânsă: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Picioare 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni cu bara: 4x8</p>
                    <p>2. Îndreptări românești cu bara: 4x10</p>
                    <p>3. Presă picioare 45°: 3x12</p>
                    <p>4. Gambe din picioare: 4x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Umeri & Trapez 🔽</summary><div class="lista-exercitii">
                    <p>1. Presă militară cu gantere: 4x8</p>
                    <p>2. Ridicări laterale gantere: 4x12</p>
                    <p>3. Facepulls la scripete: 3x15</p>
                    <p>4. Ridicări umeri cu bara (Shrugs): 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Brațe (Biceps & Triceps) 🔽</summary><div class="lista-exercitii">
                    <p>1. Flexii biceps cu bara Z: 4x10</p>
                    <p>2. Skullcrushers cu bara Z: 4x10</p>
                    <p>3. Flexii ciocan pe bancă înclinată: 3x12</p>
                    <p>4. Extensii triceps frânghie: 3x12</p>
                </div></details>`;
            } else {
                programText = `<h3>🔥 5 Zile - Bărbat (Avansat) - PPL + Arnold Split</h3>
                <details class="zi-antrenament"><summary>Luni: Piept & Spate (Supersets) 🔽</summary><div class="lista-exercitii">
                    <p>1. Bench Press + Ramat Pendlay: 4x8</p>
                    <p>2. Împins înclinat gantere + Tracțiuni: 4x8-10</p>
                    <p>3. Fluturări cablu + Ramat la scripete: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Picioare (Heavy Quads) 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni cu bara: 5x5</p>
                    <p>2. Hack Squat (Dropset final): 3x8, 8, 12</p>
                    <p>3. Fandări din mers cu haltera: 3x10/picior</p>
                    <p>4. Extensii picioare: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Umeri & Brațe 🔽</summary><div class="lista-exercitii">
                    <p>1. Presă umeri cu bara: 4x6-8</p>
                    <p>2. Ridicări laterale cablu înclinat: 4x12</p>
                    <p>3. Superset: Flexii Scott + Dips cu greutate: 3x10</p>
                    <p>4. Superset: Flexii ciocan + Extensii triceps: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Piept & Spate (Volume & Detail) 🔽</summary><div class="lista-exercitii">
                    <p>1. Împins la Smith machine înclinat: 4x10</p>
                    <p>2. Ramat cu sprijin pe piept (Seal Row): 4x10</p>
                    <p>3. Fluturări Pec-Deck + Helcometru: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Picioare (Posterior & Glutes) 🔽</summary><div class="lista-exercitii">
                    <p>1. Îndreptări convenționale: 4x6</p>
                    <p>2. Îndreptări românești cu gantere: 4x8</p>
                    <p>3. Flexii femurali culcat: 4x10</p>
                    <p>4. Gambe la presă: 4x15</p>
                </div></details>`;
            }
        } else { // FEMEI 5 ZILE
            if (nivelAles === "incepator") {
                programText = `<h3>🌸 5 Zile - Femeie (Începător)</h3>
                <details class="zi-antrenament"><summary>Luni: Fesieri 🔽</summary><div class="lista-exercitii">
                    <p>1. Podul fundului cu disc: 4x15</p>
                    <p>2. Fandări pe loc: 3x12/picior</p>
                    <p>3. Abducții la aparat: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Spate & Brațe 🔽</summary><div class="lista-exercitii">
                    <p>1. Helcometru priză neutră: 3x12</p>
                    <p>2. Ramat așezat la scripete: 3x12</p>
                    <p>3. Flexii biceps gantere mici: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Cardio & Abdomen 🔽</summary><div class="lista-exercitii">
                    <p>1. Mers înclinat pe bandă: 30 min</p>
                    <p>2. Plank pe antebrațe: 3x40 sec</p>
                    <p>3. Crunches: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Picioare & Tonifiere 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni goblet cu ganteră: 3x12</p>
                    <p>2. Presă picioare: 3x12</p>
                    <p>3. Extensii picioare la aparat: 3x15</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Umeri & Piept 🔽</summary><div class="lista-exercitii">
                    <p>1. Presă umeri cu gantere: 3x12</p>
                    <p>2. Ridicări laterale: 3x15</p>
                    <p>3. Împins la aparat piept: 3x12</p>
                    <p>4. Flotări pe genunchi: 3x10</p>
                </div></details>`;
            } else { // INTERMEDIAR / AVANSAT
                programText = `<h3>💎 5 Zile - Femeie (Intermediar/Avansat)</h3>
                <details class="zi-antrenament"><summary>Luni: Heavy Hip Thrust & Glutes 🔽</summary><div class="lista-exercitii">
                    <p>1. Hip Thrust cu bara: 4x8</p>
                    <p>2. Fandări bulgărești cu gantere: 3x10/picior</p>
                    <p>3. Abducții la aparat (dropset): 3x15</p>
                    <p>4. Kickbacks la cablu: 3x12/picior</p>
                </div></details>
                <details class="zi-antrenament"><summary>Marți: Upper Sculpt (Spate & Umeri) 🔽</summary><div class="lista-exercitii">
                    <p>1. Tracțiuni helcometru: 4x10</p>
                    <p>2. Ramat cu gantera din aplecat: 3x10</p>
                    <p>3. Ridicări laterale la scripete: 4x12</p>
                    <p>4. Presă militară cu gantere: 3x10</p>
                </div></details>
                <details class="zi-antrenament"><summary>Miercuri: Quads & Glute Pump 🔽</summary><div class="lista-exercitii">
                    <p>1. Genuflexiuni Sumo cu ganteră grea: 4x10</p>
                    <p>2. Presă picioare (picioare la mijloc): 3x12</p>
                    <p>3. Step-ups controlate pe cutie: 3x12/picior</p>
                </div></details>
                <details class="zi-antrenament"><summary>Joi: Posterior Chain (Femurali & Spate jos) 🔽</summary><div class="lista-exercitii">
                    <p>1. Îndreptări românești cu bara (RDL): 4x8</p>
                    <p>2. Flexii femurali culcat la aparat: 4x10</p>
                    <p>3. Hiperextensii la 45° cu disc: 3x12</p>
                    <p>4. Glute bridge pe un picior: 3x12</p>
                </div></details>
                <details class="zi-antrenament"><summary>Vineri: Glute Finisher & Arms/Core 🔽</summary><div class="lista-exercitii">
                    <p>1. Kickbacks la cablu (cu pauză 1s sus): 4x15</p>
                    <p>2. Abducții cu bandă din așezat: 4x20</p>
                    <p>3. Extensii triceps frânghie: 3x12</p>
                    <p>4. Ridicări de picioare din atârnat: 3x12</p>
                </div></details>`;
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
    let gen = document.getElementById("macroGen").value; // <- citește direct din calculator
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
// --- APEL CĂTRE PROPRIUL BACKEND ---
async function trimiteMesajChat() {
    let input = document.getElementById("mesajChat");
    let text = input.value.trim();
    let istoric = document.getElementById("istoricChat");

    if (!text) return;

    // 1. Afișează întrebarea în chat
    istoric.innerHTML += `<p class="mesaj-user"><strong>Tu:</strong> ${text}</p>`;
    input.value = "";

    // 2. Afișează loader-ul
    let loaderId = "loadingAI_" + Date.now();
    istoric.innerHTML += `<p class="mesaj-coach" id="${loaderId}"><strong>Coach AI:</strong> ⏳ Se gândește...</p>`;
    istoric.scrollTop = istoric.scrollHeight;

    try {
        // Cererea merge către backend-ul local
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ mesaj: text })
        });

        const data = await response.json();

        const loaderElem = document.getElementById(loaderId);
        if (loaderElem) loaderElem.remove();

        if (data.error) {
            istoric.innerHTML += `<p class="mesaj-coach" style="color: #ff5252;"><strong>Eroare:</strong> ${data.error}</p>`;
        } else {
            istoric.innerHTML += `<p class="mesaj-coach"><strong>Coach AI:</strong> ${data.raspuns}</p>`;
        }

    } catch (eroare) {
        const loaderElem = document.getElementById(loaderId);
        if (loaderElem) loaderElem.remove();
        istoric.innerHTML += `<p class="mesaj-coach" style="color: #ff5252;"><strong>Coach AI:</strong> Asigură-te că serverul backend este pornit! (${eroare.message})</p>`;
    }

    istoric.scrollTop = istoric.scrollHeight;
}