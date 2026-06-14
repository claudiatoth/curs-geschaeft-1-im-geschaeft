// ============================================
// TEORIE - Geschäft Teil 1: Im Geschäft (A2/B1)
// Claudia Toth · germană în magazin / comerț
// Sursă: materialul propriu Claudia Toth (© 2026)
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Bun venit în magazin (Im Geschäft)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Prima lecție din seria <strong>Deutsch im Geschäft</strong>! Înveți vocabularul și frazele de care ai nevoie în orice magazin german — fie că ești client, fie că <strong>lucrezi</strong> ca vânzător. La final ascultăm un dialog real: eu fac cumpărături și plătesc la casă.</div>
                </div>
            </div>
            <div class="theory-box" style="background:#F5F0E8;border-color:#D4A574;">
                <h4>✍️ Notă despre diacritice (ä, ö, ü, ß)</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>Verkäuferin, Tüte</em>) sau cu varianta de înlocuire (<em>Verkaeuferin, Tuete</em>). Ambele sunt acceptate.</p>
            </div>
        </div>
    </div>

    <!-- 1: Vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🛒 2. Vocabular de bază (Grundwortschatz)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-vocabular.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box" style="background:#F5F0E8;border-color:#D4A574;">
                <h4>🚨 Substantivele se învață ÎNTOTDEAUNA cu pluralul</h4>
                <p>În germană pluralul e imprevizibil (-e, -en, -er, Umlaut sau identic). De aceea fiecare substantiv apare aici la <strong>singular · plural</strong>. Învață-le împreună, ca pe o pereche.</p>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">der Laden / das Geschäft</td><td class="verb">die Läden / die Geschäfte</td><td>magazinul · magazinele</td><td><em>Ich arbeite in einem kleinen Geschäft.</em></td></tr>
                    <tr><td class="verb">der Kunde / die Kundin</td><td class="verb">die Kunden / die Kundinnen</td><td>clientul · clienta / clienții · clientele</td><td><em>Der Kunde möchte Brot kaufen.</em></td></tr>
                    <tr><td class="verb">der Verkäufer / die Verkäuferin</td><td class="verb">die Verkäufer / die Verkäuferinnen</td><td>vânzătorul · vânzătoarea / vânzătorii · vânzătoarele</td><td><em>Die Verkäuferin ist sehr nett.</em></td></tr>
                    <tr><td class="verb">die Kasse</td><td class="verb">die Kassen</td><td>casa de marcat · casele de marcat</td><td><em>Ich stehe an der Kasse.</em></td></tr>
                    <tr><td class="verb">die Ware</td><td class="verb">die Waren</td><td>marfa · mărfurile</td><td><em>Die Ware ist neu und frisch.</em></td></tr>
                    <tr><td class="verb">das Regal</td><td class="verb">die Regale</td><td>raftul · rafturile</td><td><em>Ich räume die Ware ins Regal ein.</em></td></tr>
                    <tr><td class="verb">der Preis</td><td class="verb">die Preise</td><td>prețul · prețurile</td><td><em>Der Preis ist zu hoch.</em></td></tr>
                    <tr><td class="verb">der Rabatt</td><td class="verb">die Rabatte</td><td>reducerea · reducerile</td><td><em>Heute gibt es 10 % Rabatt.</em></td></tr>
                    <tr><td class="verb">der Einkaufskorb</td><td class="verb">die Einkaufskörbe</td><td>coșul · coșurile de cumpărături</td><td><em>Der Einkaufskorb ist voll.</em></td></tr>
                    <tr><td class="verb">die Tüte</td><td class="verb">die Tüten</td><td>punga · pungile</td><td><em>Möchten Sie eine Tüte?</em></td></tr>
                    <tr><td class="verb">der Kassenzettel / der Kassenbon</td><td class="verb">die Kassenzettel / die Kassenbons</td><td>bonul fiscal · bonurile fiscale</td><td><em>Hier ist Ihre Quittung.</em></td></tr>
                    <tr><td class="verb">geöffnet / geschlossen <em>(Adj.)</em></td><td>—</td><td>deschis / închis</td><td><em>Der Laden ist bis 20 Uhr geöffnet.</em></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: Verbe -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔧 3. Verbe în magazin</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-verbe.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Verb</th><th>Traducere RO</th><th>Exemplu (DE)</th></tr></thead>
                <tbody>
                    <tr><td class="verb">verkaufen</td><td>a vinde</td><td><em>Wir verkaufen Obst und Gemüse.</em></td></tr>
                    <tr><td class="verb">kassieren</td><td>a încasa</td><td><em>Die Verkäuferin kassiert das Geld.</em></td></tr>
                    <tr><td class="verb">einräumen</td><td>a pune pe raft</td><td><em>Ich räume die neuen Produkte ein.</em></td></tr>
                    <tr><td class="verb">beraten</td><td>a consilia</td><td><em>Ich berate die Kunden freundlich.</em></td></tr>
                    <tr><td class="verb">helfen</td><td>a ajuta</td><td><em>Kann ich Ihnen helfen?</em></td></tr>
                    <tr><td class="verb">zeigen</td><td>a arăta</td><td><em>Ich zeige dem Kunden die Milch.</em></td></tr>
                    <tr><td class="verb">fragen</td><td>a întreba</td><td><em>Der Kunde fragt nach dem Preis.</em></td></tr>
                    <tr><td class="verb">wechseln (Geld)</td><td>a schimba (bani)</td><td><em>Können Sie mir Geld wechseln?</em></td></tr>
                    <tr><td class="verb">umtauschen</td><td>a schimba (un produs)</td><td><em>Ich möchte das Gerät umtauschen.</em></td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Atenție la <strong>wechseln</strong> (a schimba BANI — mărunt) vs <strong>umtauschen</strong> (a schimba un PRODUS — la retur). Iar <strong>helfen</strong> cere Dativ: „Kann ich <u>Ihnen</u> helfen?" — vezi conjugarea în secțiunea 🔁 Verbe.</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Situații tipice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎭 4. Situații practice în magazin</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-situatii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box"><h4>🧾 Reclamație — Das Produkt ist kaputt</h4>
                <p class="de"><em>„Ich habe dieses Gerät gestern gekauft, aber es funktioniert nicht." — „Möchten Sie es umtauschen oder das Geld zurück?"</em></p>
                <p class="ro">Expresii: <strong>umtauschen</strong> (a schimba produsul) · <strong>das Geld zurückbekommen</strong> (a primi banii înapoi) · <em>Das tut mir leid!</em> (Îmi pare rău!)</p>
            </div>
            <div class="theory-box"><h4>🧺 Lipsă produs — Ein Artikel fehlt</h4>
                <p class="de"><em>„Entschuldigung, ich finde den Zucker nicht." — „Leider ist der Zucker ausverkauft, aber morgen bekommen wir neue Ware."</em></p>
                <p class="ro">Expresii: <strong>ausverkauft sein</strong> (a fi epuizat) · <strong>neue Ware bekommen</strong> (a primi marfă nouă) · <em>Ich finde ... nicht.</em> (Nu găsesc ...)</p>
            </div>
            <div class="theory-box"><h4>🗣️ Cerere de ajutor — Hilfe erbitten</h4>
                <p class="de"><em>„Können Sie mir bitte helfen? Ich suche Mehl." — „Das Mehl ist im zweiten Gang, rechts."</em></p>
                <p class="ro">Expresii: <strong>Können Sie mir helfen?</strong> · <strong>Was suchen Sie?</strong> (Ce căutați?) · <strong>im Gang</strong> (pe culoar)</p>
            </div>
            <div class="theory-box"><h4>💶 Preț greșit — Falscher Preis</h4>
                <p class="de"><em>„Auf dem Regal steht 1,50 €, aber an der Kasse kostet es 2 €." — „Sie haben recht, Sie bekommen es für 1,50 €."</em></p>
                <p class="ro">Expresii: <strong>Der Preis stimmt nicht.</strong> (Prețul nu e corect) · <strong>Sie haben recht.</strong> (Aveți dreptate) · <em>im Regal / an der Kasse</em></p>
            </div>
            <div class="theory-box"><h4>🏷️ Oferte — Sonderangebote</h4>
                <p class="de"><em>„Haben Sie heute Angebote?" — „Ja, Obst und Gemüse sind heute im Angebot. 1,99 € pro Kilo."</em></p>
                <p class="ro">Expresii: <strong>im Angebot sein</strong> (a fi la reducere) · <strong>Wie viel kostet ...?</strong> · <strong>Ich nehme ...</strong> (Iau ...)</p>
            </div>
        </div>
    </div>

    <!-- 4: Expresii vânzător -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💬 5. Expresii utile pentru vânzător</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-expresii.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <table class="grammar-table">
                <thead><tr><th>Expresie (DE)</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Kann ich Ihnen helfen?</td><td>Pot să vă ajut?</td></tr>
                    <tr><td class="verb">Einen Moment bitte. / Ich komme gleich.</td><td>Un moment, vă rog. / Vin imediat.</td></tr>
                    <tr><td class="verb">Das finden Sie dort hinten.</td><td>Găsiți acolo în spate.</td></tr>
                    <tr><td class="verb">Leider haben wir das nicht mehr.</td><td>Din păcate nu mai avem acest produs.</td></tr>
                    <tr><td class="verb">Möchten Sie mit Karte zahlen?</td><td>Doriți să plătiți cu cardul?</td></tr>
                    <tr><td class="verb">Bitte legen Sie die Ware aufs Band.</td><td>Vă rog, puneți produsele pe bandă.</td></tr>
                    <tr><td class="verb">Möchten Sie eine Tüte?</td><td>Doriți o pungă?</td></tr>
                    <tr><td class="verb">Einen schönen Tag noch!</td><td>O zi frumoasă în continuare!</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/annette.png" alt="Annette">
                <div class="andreea-note-content">
                    <div class="speaker">Annette</div>
                    <div class="text">Aceste fraze sunt aur dacă <strong>lucrezi</strong> într-un magazin german. „Kann ich Ihnen helfen?" și „Einen schönen Tag noch!" le auzi și le spui de zeci de ori pe zi. Acum ascultă dialogul cu Frau Wagner! 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
