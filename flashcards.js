// ============================================
// FLASHCARDS - Geschäft Teil 1: Im Geschäft (A2/B1)
// Claudia Toth · 32 carduri (vocabular magazin) cu TTS
// ============================================

const flashcardsData = [
    { de: "das Geschäft · die Geschäfte", ro: "magazinul · magazinele (= der Laden, die Läden)" },
    { de: "der Kunde · die Kunden", ro: "clientul · clienții (f: die Kundin, die Kundinnen)" },
    { de: "der Verkäufer · die Verkäufer", ro: "vânzătorul · vânzătorii (f: die Verkäuferin, -nen)" },
    { de: "die Kasse · die Kassen", ro: "casa de marcat · casele de marcat" },
    { de: "die Ware · die Waren", ro: "marfa · mărfurile" },
    { de: "das Regal · die Regale", ro: "raftul · rafturile" },
    { de: "der Preis · die Preise", ro: "prețul · prețurile" },
    { de: "der Rabatt · die Rabatte", ro: "reducerea · reducerile" },
    { de: "das Sonderangebot · die Sonderangebote", ro: "oferta specială · ofertele speciale" },
    { de: "der Einkaufskorb · die Einkaufskörbe", ro: "coșul · coșurile de cumpărături (Umlaut o→ö)" },
    { de: "der Einkaufswagen · die Einkaufswagen", ro: "căruciorul · cărucioarele (plural identic)" },
    { de: "die Tüte · die Tüten", ro: "punga · pungile" },
    { de: "der Kassenbon · die Kassenbons", ro: "bonul fiscal · bonurile (= der Kassenzettel, -zettel)" },
    { de: "die Quittung · die Quittungen", ro: "chitanța · chitanțele" },
    { de: "die Umkleidekabine · die Umkleidekabinen", ro: "cabina · cabinele de probă" },
    { de: "die Öffnungszeiten (nur Plural)", ro: "programul de lucru (substantiv numai la plural)" },
    { de: "der Gang · die Gänge", ro: "culoarul · culoarele (Umlaut a→ä)" },
    { de: "die Größe · die Größen", ro: "mărimea · mărimile" },
    { de: "geöffnet / geschlossen", ro: "deschis / închis" },
    { de: "ausverkauft", ro: "epuizat / nu mai e pe stoc" },
    { de: "im Angebot", ro: "la reducere / la ofertă" },
    { de: "verkaufen", ro: "a vinde" },
    { de: "kassieren", ro: "a încasa" },
    { de: "einräumen", ro: "a pune pe raft" },
    { de: "beraten", ro: "a consilia" },
    { de: "helfen", ro: "a ajuta (+ Dativ)" },
    { de: "zeigen", ro: "a arăta" },
    { de: "fragen", ro: "a întreba" },
    { de: "umtauschen", ro: "a schimba (un produs)" },
    { de: "anprobieren", ro: "a proba (haine)" },
    { de: "bezahlen", ro: "a plăti" },
    { de: "Kann ich Ihnen helfen?", ro: "Pot să vă ajut?" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: vocabularul de bază pentru magazin.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
