// ============================================
// EXERCIȚII - Geschäft Teil 1: Im Geschäft (A2/B1)
// Claudia Toth · 5 exerciții (sursă: fișa proprie © 2026)
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}

// ============================================
// EX1: Lückentext
// ============================================
const ex1Items = [
    { id: 'a', before: 'Ich arbeite in einem kleinen', after: '. (magazin)', answer: 'Geschäft', accept: ['Laden'] },
    { id: 'b', before: 'Der', after: 'möchte Brot kaufen.', answer: 'Kunde' },
    { id: 'c', before: 'Die', after: 'ist kaputt, ich kann nicht kassieren.', answer: 'Kasse' },
    { id: 'd', before: 'Haben Sie eine', after: '? (pungă)', answer: 'Tüte' },
    { id: 'e', before: 'Der Preis im', after: 'ist falsch.', answer: 'Regal' },
    { id: 'f', before: 'Ich', after: 'das Geld an der Kasse. (a încasa)', answer: 'kassiere' },
    { id: 'g', before: 'Die', after: 'ist sehr nett und freundlich.', answer: 'Verkäuferin' },
    { id: 'h', before: 'Wir', after: 'heute Obst und Gemüse im Angebot. (a avea)', answer: 'haben' },
    { id: 'i', before: 'Der Zucker ist leider', after: '.', answer: 'ausverkauft' },
    { id: 'j', before: 'Bitte legen Sie die', after: 'aufs Band.', answer: 'Ware' }
];
function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>✍️ Completează cu cuvântul potrivit.</strong><br>Cuvinte: <em>Geschäft · Kunde · Kasse · Tüte · Regal · kassiere · Verkäuferin · haben · ausverkauft · Ware</em></div>`;
    ex1Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.before} <input type="text" id="ex1-${item.id}" placeholder="..." style="width:150px;display:inline-block;"> ${item.after}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx1() { return checkTextItems(ex1Items, 'ex1'); }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: Multiple Choice
// ============================================
const ex2Items = [
    { id: 'a', q: 'Was sagt der Verkäufer (la început)?', options: ['Guten Morgen, was suchen Sie?', 'Ich esse Brot.', 'Ich fahre nach Hause.'], correct: 0, explanation: 'Vânzătorul întâmpină clientul: „was suchen Sie?".' },
    { id: 'b', q: 'Wo ist die Milch?', options: ['Im Regal', 'Im Kühlschrank', 'In der Tasche'], correct: 1, explanation: 'Laptele e la rece → im Kühlschrank (în frigider).' },
    { id: 'c', q: '„Der Preis stimmt nicht" bedeutet:', options: ['Prețul este corect.', 'Prețul nu este corect.', 'Produsul este epuizat.'], correct: 1, explanation: 'stimmt nicht = nu e corect.' },
    { id: 'd', q: 'Wenn ein Produkt kaputt ist, sagt man:', options: ['Ich möchte es umtauschen.', 'Ich möchte es kaufen.', 'Ich möchte es essen.'], correct: 0, explanation: 'Produs stricat → umtauschen (a-l schimba).' },
    { id: 'e', q: 'Was sagt der Verkäufer am Ende?', options: ['Bitte zahlen Sie hier.', 'Einen schönen Tag noch!', 'Ich bin müde.'], correct: 1, explanation: 'Formula de la final: „Einen schönen Tag noch!".' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🎯 Alegere multiplă.</strong>'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Match vocabular DE ↔ RO
// ============================================
const ex3Pairs = [
    { de: 'das Geschäft', ro: 'magazinul' },
    { de: 'die Kasse', ro: 'casa de marcat' },
    { de: 'der Kunde', ro: 'clientul' },
    { de: 'die Ware', ro: 'marfa' },
    { de: 'das Regal', ro: 'raftul' },
    { de: 'die Tüte', ro: 'punga' },
    { de: 'ausverkauft', ro: 'epuizat' },
    { de: 'der Rabatt', ro: 'reducerea' },
    { de: 'die Umkleidekabine', ro: 'cabina de probă' },
    { de: 'die Öffnungszeiten', ro: 'programul de lucru' }
];
function buildEx3() { buildClickMatch('ex3', ex3Pairs, '<strong>🔗 Potrivește cuvântul cu traducerea.</strong><br>Click pe cuvântul german, apoi pe traducerea corectă.', '🇩🇪 Wort', '🇷🇴 Traducere'); }
function checkEx3() { const s = dmState['ex3']; return { correct: Object.keys(s.matched).length, total: ex3Pairs.length }; }
function resetEx3() { buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Traduceri RO → DE
// ============================================
const ex4Items = [
    { id: 'a', q: 'Pot să vă ajut?', answer: 'Kann ich Ihnen helfen?', accept: ['Kann ich dir helfen?'] },
    { id: 'b', q: 'Doriți să plătiți cu cardul?', answer: 'Möchten Sie mit Karte bezahlen?', accept: ['Möchten Sie mit Karte zahlen?'] },
    { id: 'c', q: 'Bonul dumneavoastră, vă rog.', answer: 'Ihre Quittung, bitte.', accept: ['Ihren Kassenbon, bitte.'] },
    { id: 'd', q: 'Cât costă un kilogram de mere?', answer: 'Wie viel kostet ein Kilo Äpfel?', accept: ['Wie viel kosten ein Kilo Äpfel?'] },
    { id: 'e', q: 'Acest produs este la reducere.', answer: 'Dieses Produkt ist im Angebot.', accept: ['Das Produkt ist im Angebot.'] },
    { id: 'f', q: 'O zi frumoasă în continuare!', answer: 'Einen schönen Tag noch!' },
    { id: 'g', q: 'Aș dori să returnez acest produs.', answer: 'Ich möchte dieses Produkt zurückgeben.', accept: ['Ich möchte das Produkt zurückgeben.'] },
    { id: 'h', q: 'Pâinea este în spate, lângă lapte.', answer: 'Das Brot ist hinten, neben der Milch.' }
];
function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `<div class="exercise-instruction"><strong>🇷🇴→🇩🇪 Tradu în germană.</strong><br>Scrie propoziția în germană. (Diferențele mici de topică/articol sunt acceptate; compară cu varianta-model.)</div>`;
    ex4Items.forEach((item, idx) => { html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>🇷🇴 ${item.q}</label><input type="text" id="ex4-${item.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex4-f${item.id}"></div></div>`; });
    container.innerHTML = html;
}
function checkEx4() { return checkTextItems(ex4Items, 'ex4'); }
function resetEx4() { buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

// ============================================
// EX5: Potrivește situația cu expresia-cheie
// ============================================
const ex5Pairs = [
    { de: 'Ich möchte es umtauschen.', ro: 'Produsul e stricat (reclamație)' },
    { de: 'Der Zucker ist ausverkauft.', ro: 'Lipsește un produs' },
    { de: 'Können Sie mir helfen?', ro: 'Ceri ajutor' },
    { de: 'Der Preis stimmt nicht.', ro: 'Prețul e greșit' },
    { de: 'Sind die Äpfel heute im Angebot?', ro: 'Întrebi de oferte' }
];
function buildEx5() { buildClickMatch('ex5', ex5Pairs, '<strong>🎭 Potrivește expresia cu situația.</strong><br>Click pe expresia germană, apoi pe situația potrivită.', '🇩🇪 Expresie', '🛒 Situație'); }
function checkEx5() { const s = dmState['ex5']; return { correct: Object.keys(s.matched).length, total: ex5Pairs.length }; }
function resetEx5() { buildEx5(); const s = document.getElementById('score-5'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); });
