// ============================================
// VERB-KONJUGATION - Geschäft Teil 1 (A2/B1)
// Claudia Toth · verbe din magazin · PONS-verified
// Präteritum = IMPERFECT. Perfekt = timp vorbit.
// ============================================

const verbsData = [
    {
        infinitiv: 'helfen', ro: 'a ajuta (+ Dativ)', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'helfe', ro: 'ajut' },
            { p: 'du', f: 'hilfst', ro: 'ajuți' },
            { p: 'er/sie/es', f: 'hilft', ro: 'ajută' },
            { p: 'wir', f: 'helfen', ro: 'ajutăm' },
            { p: 'ihr', f: 'helft', ro: 'ajutați' },
            { p: 'sie/Sie', f: 'helfen', ro: 'ajută / ajutați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'half', ro: 'ajutam' },
            { p: 'du', f: 'halfst', ro: 'ajutai' },
            { p: 'er/sie/es', f: 'half', ro: 'ajuta' },
            { p: 'wir', f: 'halfen', ro: 'ajutam (noi)' },
            { p: 'ihr', f: 'halft', ro: 'ajutați' },
            { p: 'sie/Sie', f: 'halfen', ro: 'ajutau' }
        ],
        perfekt: 'ich habe Ihnen geholfen', perfektRo: 'v-am ajutat',
        notes: 'Verb tare (neregulat): e→i (du hilfst, er hilft). 🚨 Cere DATIV: „Kann ich Ihnen helfen?" (NU „Sie helfen"). Perfekt cu HABEN.'
    },
    {
        infinitiv: 'verkaufen', ro: 'a vinde', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'verkaufe', ro: 'vând' },
            { p: 'du', f: 'verkaufst', ro: 'vinzi' },
            { p: 'er/sie/es', f: 'verkauft', ro: 'vinde' },
            { p: 'wir', f: 'verkaufen', ro: 'vindem' },
            { p: 'ihr', f: 'verkauft', ro: 'vindeți' },
            { p: 'sie/Sie', f: 'verkaufen', ro: 'vând / vindeți' }
        ],
        praeteritum: [
            { p: 'ich', f: 'verkaufte', ro: 'vindeam' },
            { p: 'du', f: 'verkauftest', ro: 'vindeai' },
            { p: 'er/sie/es', f: 'verkaufte', ro: 'vindea' },
            { p: 'wir', f: 'verkauften', ro: 'vindeam (noi)' },
            { p: 'ihr', f: 'verkauftet', ro: 'vindeați' },
            { p: 'sie/Sie', f: 'verkauften', ro: 'vindeau' }
        ],
        perfekt: 'wir haben Obst verkauft', perfektRo: 'am vândut fructe',
        notes: 'Verb regulat cu prefix NEseparabil ver- → Perfekt FĂRĂ „ge-": verkauft. Opusul: kaufen (a cumpăra).'
    },
    {
        infinitiv: 'beraten', ro: 'a consilia / a sfătui', type: 'strong', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'berate', ro: 'consiliez' },
            { p: 'du', f: 'berätst', ro: 'consiliezi' },
            { p: 'er/sie/es', f: 'berät', ro: 'consiliază' },
            { p: 'wir', f: 'beraten', ro: 'consiliem' },
            { p: 'ihr', f: 'beratet', ro: 'consiliați' },
            { p: 'sie/Sie', f: 'beraten', ro: 'consiliază / consiliați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'beriet', ro: 'consiliam' },
            { p: 'du', f: 'berietst', ro: 'consiliai' },
            { p: 'er/sie/es', f: 'beriet', ro: 'consilia' },
            { p: 'wir', f: 'berieten', ro: 'consiliam (noi)' },
            { p: 'ihr', f: 'berietet', ro: 'consiliați' },
            { p: 'sie/Sie', f: 'berieten', ro: 'consiliau' }
        ],
        perfekt: 'ich habe den Kunden beraten', perfektRo: 'am consiliat clientul',
        notes: 'Verb tare (neregulat): e→ä (du berätst, er berät). Prefix NEseparabil be- → Perfekt FĂRĂ „ge-": beraten.'
    },
    {
        infinitiv: 'umtauschen', ro: 'a schimba (un produs)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'tausche ... um', ro: 'schimb' },
            { p: 'du', f: 'tauschst ... um', ro: 'schimbi' },
            { p: 'er/sie/es', f: 'tauscht ... um', ro: 'schimbă' },
            { p: 'wir', f: 'tauschen ... um', ro: 'schimbăm' },
            { p: 'ihr', f: 'tauscht ... um', ro: 'schimbați' },
            { p: 'sie/Sie', f: 'tauschen ... um', ro: 'schimbă / schimbați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'tauschte ... um', ro: 'schimbam' },
            { p: 'du', f: 'tauschtest ... um', ro: 'schimbai' },
            { p: 'er/sie/es', f: 'tauschte ... um', ro: 'schimba' },
            { p: 'wir', f: 'tauschten ... um', ro: 'schimbam (noi)' },
            { p: 'ihr', f: 'tauschtet ... um', ro: 'schimbați' },
            { p: 'sie/Sie', f: 'tauschten ... um', ro: 'schimbau' }
        ],
        perfekt: 'ich habe das Gerät umgetauscht', perfektRo: 'am schimbat aparatul',
        notes: 'Verb regulat SEPARABIL (um-): prefixul pleacă la sfârșit (Ich tausche das Gerät um). Perfekt cu „-ge-": um-ge-tauscht. Pentru retur/schimbarea unui produs.'
    },
    {
        infinitiv: 'anprobieren', ro: 'a proba (haine)', type: 'weak', aux: 'haben',
        praesens: [
            { p: 'ich', f: 'probiere ... an', ro: 'probez' },
            { p: 'du', f: 'probierst ... an', ro: 'probezi' },
            { p: 'er/sie/es', f: 'probiert ... an', ro: 'probează' },
            { p: 'wir', f: 'probieren ... an', ro: 'probăm' },
            { p: 'ihr', f: 'probiert ... an', ro: 'probați' },
            { p: 'sie/Sie', f: 'probieren ... an', ro: 'probează / probați' }
        ],
        praeteritum: [
            { p: 'ich', f: 'probierte ... an', ro: 'probam' },
            { p: 'du', f: 'probiertest ... an', ro: 'probai' },
            { p: 'er/sie/es', f: 'probierte ... an', ro: 'proba' },
            { p: 'wir', f: 'probierten ... an', ro: 'probam (noi)' },
            { p: 'ihr', f: 'probiertet ... an', ro: 'probați' },
            { p: 'sie/Sie', f: 'probierten ... an', ro: 'probau' }
        ],
        perfekt: 'ich habe die Bluse anprobiert', perfektRo: 'am probat bluza',
        notes: 'Verb regulat SEPARABIL (an-) cu rădăcină -ieren. 🚨 Verbele în -ieren NU iau „ge-": an-probiert (NU angeprobiert). „in der Umkleidekabine anprobieren".'
    }
];

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = `
        <div class="theory-box" style="background:#F5F0E8;border-left:4px solid #D4A574">
            <h4>📌 Verbe din magazin</h4>
            <p>Atenție: <strong>helfen</strong> e tare și cere <strong>Dativ</strong> (Ihnen). Verbele cu prefix neseparabil (ver-, be-) → Perfekt FĂRĂ „ge-". Verbele în -ieren (anprobieren) → tot fără „ge-".</p>
            <p style="margin-top:8px"><strong>Reamintire:</strong> Präteritum = IMPERFECT (vindea, ajuta). Perfekt = perfect compus (a vândut).</p>
        </div>
    `;
    verbsData.forEach((v, idx) => {
        const auxColor = v.aux === 'sein' ? '#3b82f6' : '#10b981';
        const typeColor = v.type === 'strong' ? '#dc2626' : '#10b981';
        const typeLabel = v.type === 'strong' ? 'TARE (neregulat)' : 'REGULAT';
        let praesensRows = ''; v.praesens.forEach(r => { praesensRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        let praeteritumRows = ''; v.praeteritum.forEach(r => { praeteritumRows += `<tr><td><strong>${r.p}</strong></td><td class="verb">${r.f}</td><td class="ro-text">${r.ro}</td></tr>`; });
        html += `
            <div class="sub-section">
                <div class="sub-section-header" onclick="toggleSubSection(${idx + 100})">
                    <span><strong>${idx + 1}. ${v.infinitiv}</strong> — <em>${v.ro}</em>
                        <span style="background:${typeColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:8px">${typeLabel}</span>
                        <span style="background:${auxColor};color:white;padding:2px 8px;border-radius:4px;font-size:0.8rem;margin-left:4px">Perfekt + ${v.aux}</span>
                    </span>
                    <span class="sub-arrow">▼</span>
                </div>
                <div class="sub-section-content" id="sub-section-${idx + 100}">
                    <h4 style="color:#065f46;margin-bottom:8px">📘 Präsens</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praesensRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📗 Präteritum (imperfect / timp scris)</h4>
                    <table class="grammar-table"><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>${praeteritumRows}</tbody></table>
                    <h4 style="color:#065f46;margin:14px 0 8px">📕 Perfekt (timp vorbit)</h4>
                    <div class="example-box"><div class="de">${v.perfekt}</div><div class="ro">${v.perfektRo}</div></div>
                    <div class="theory-box" style="margin-top:12px;background:#FBF7EF"><p><strong>📌 Notă:</strong> ${v.notes}</p></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

buildVerbs();
