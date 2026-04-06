function genereazaProgram() {
    // 1. Luăm informațiile din ambele meniuri
    let zileAlese = document.getElementById("alegereZile").value;
    let genAles = document.getElementById("alegereGen").value; 
    
    let zonaRezultat = document.getElementById("cutieRezultat");
    let programText = ""; 


    // PENTRU 3 ZILE
    if (zileAlese === "3") {
        if (genAles === "barbat") {
            programText = `
                <h3>💪 Split 3 Zile (Bărbați - Focus Piept)</h3>
                <p><strong>Luni:</strong> Full Body (Accent pe Piept - Împins culcat)</p>
                <p><strong>Marți:</strong> Pauză</p>
                <p><strong>Miercuri:</strong> Picioare și Abdomen</p>
                <p><strong>Joi:</strong> Pauză</p>
                <p><strong>Vineri:</strong> Upper Body (Accent pe Piept și Brațe)</p>
                <p><strong>Sâmbătă /Duminică:</strong> Pauză</p>
            `;
        } else if (genAles === "femeie") {
            programText = `
                <h3>🍑 Split 3 Zile (Femei - Focus Fesieri)</h3>
                <p><strong>Luni:</strong> Lower Body (Accent pe Fesieri - Hip Thrust)</p>
                <p><strong>Marți:</strong> Pauză</p>
                <p><strong>Miercuri:</strong> Upper Body și Core</p>
                <p><strong>Joi:</strong> Pauză</p>
                <p><strong>Vineri:</strong> Full Body (Accent pe Fesieri - Genuflexiuni/Fandări)</p>
                <p><strong>Sâmbătă /Duminică:</strong> Pauză</p>
            `;
        }
    } 
    
    // PENTRU 4 ZILE
    else if (zileAlese === "4") {
        if (genAles === "barbat") {
            programText = `
                <h3>🔥 Split 4 Zile (Bărbați - Upper/Lower)</h3>
                <p><strong>Luni:</strong> Piept & Triceps (Ziua grea)</p>
                <p><strong>Marți:</strong> Picioare</p>
                <p><strong>Miercuri:</strong> Pauză</p>
                <p><strong>Joi:</strong> Spate & Biceps</p>
                <p><strong>Vineri:</strong> Piept & Umeri (Volum ridicat)</p>
                <p><strong>Sâmbătă /Duminică:</strong> Pauză</p>
            `;
        } else if (genAles === "femeie") {
            programText = `
                <h3>🔥 Split 4 Zile (Femei - Upper/Lower)</h3>
                <p><strong>Luni:</strong> Fesieri și Ischiogambieri</p>
                <p><strong>Marți:</strong> Upper Body</p>
                <p><strong>Miercuri:</strong> Pauză</p>
                <p><strong>Joi:</strong> Fesieri și Cvadriceps</p>
                <p><strong>Vineri:</strong> Full Body sau Cardio & Abdomen</p>
                <p><strong>Sâmbătă /Duminică:</strong> Pauză</p>
            `;
        }
    }

    //  PENTRU 5 ZILE
    else if (zileAlese === "5") {
        if (genAles === "barbat") {
            programText = `
                <h3>🦍 Split 5 Zile (Bărbați - Focus Piept)</h3>
                <p><strong>Luni:</strong> Piept (Mecanică grea)</p>
                <p><strong>Marți:</strong> Spate</p>
                <p><strong>Miercuri:</strong> Picioare</p>
                <p><strong>Joi:</strong> Piept & Umeri</p>
                <p><strong>Vineri:</strong> Brațe</p>
                <p><strong>Sâmbătă /Duminică:</strong> Pauză</p>
            `;
        } else if (genAles === "femeie") {
            programText = `
                <h3>👑 Split 5 Zile (Femei - Focus Fesieri)</h3>
                <p><strong>Luni:</strong> Fesieri (Heavy)</p>
                <p><strong>Marți:</strong> Spate & Umeri</p>
                <p><strong>Miercuri:</strong> Picioare</p>
                <p><strong>Joi:</strong> Piept & Brațe</p>
                <p><strong>Vineri:</strong> Fesieri (Hipertrofie) & Abdomen</p>
                <p><strong>Sâmbătă /Duminică:</strong> Pauză</p>
            `;
        }
    }

    // 3. Afișăm pe ecran ce am construit mai sus
    zonaRezultat.innerHTML = programText;
    document.getElementById("butonPrint").style.display = "block";
}
function printeaza() {
    window.print(); }