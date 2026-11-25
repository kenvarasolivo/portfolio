// Shared by the static page generator and the existing EN/DE language switch.
// Project facts come from the sibling repositories; ownership comes from Ken's brief and CV.
const pair = (en, de) => ({ en, de });

export const studies = [
  {
    id: 'chatbot', file: 'fh-chatbot.html', name: 'FH Aachen Chatbot', image: 'chatbot',
    next: 'automated-grading.html', nextName: 'Automated Grading',
    description: 'A course-grounded AI tutor, with a modular Vue frontend and streaming answers. Frontend case study by Kenvara Solivo.',
    role: pair('University team project · Frontend engineering', 'Hochschulprojekt im Team · Frontend-Entwicklung'),
    lede: pair('A clearer way to learn with AI.', 'Mit KI verständlicher lernen.'),
    summary: pair('An AI tutor for students at FH Aachen. I worked on the frontend: breaking up the chat interface, connecting authenticated APIs, and making responses stream into the conversation.', 'Ein KI-Tutor für Studierende der FH Aachen. Mein Beitrag lag im Frontend: die Chat-Oberfläche modularisieren, authentifizierte APIs anbinden und Antworten direkt im Gespräch streamen.'),
    team: pair('10-person university team', 'Hochschulteam mit 10 Personen'),
    scope: pair('Frontend architecture · API integration · Chat UX', 'Frontend-Architektur · API-Anbindung · Chat-UX'),
    stack: 'Vue.js · JavaScript · Laravel · REST APIs',
    caption: pair('The university chatbot interface.', 'Die Oberfläche des Hochschul-Chatbots.'),
    problemTitle: pair('Help within the course.', 'Hilfe im Kurskontext.'),
    problem: pair('The chatbot helps students ask questions about their coursework. It uses selected course documents and retrieves relevant material as context for an AI-generated answer. The interface needs to make that conversation easy to follow, including the time spent waiting for a response.', 'Der Chatbot unterstützt Studierende bei Fragen zu ihren Lehrveranstaltungen. Ausgewählte Kursdokumente und passende abgerufene Inhalte dienen als Kontext für die KI-Antwort. Die Oberfläche muss das Gespräch verständlich machen, auch während eine Antwort entsteht.'),
    workflowTitle: pair('From question to answer.', 'Von der Frage zur Antwort.'),
    workflowIntro: pair('Explore how the conversation works. My contribution focused on the frontend around this flow.', 'So funktioniert das Gespräch. Mein Beitrag konzentrierte sich auf das Frontend rund um diesen Ablauf.'),
    steps: [
      { name: pair('Choose context', 'Kontext wählen'), title: pair('Start with the course.', 'Beim Kurs beginnen.'), body: pair('Students choose the documents relevant to their question. The selected document IDs travel with the message, keeping the conversation tied to the intended material.', 'Studierende wählen die für ihre Frage relevanten Dokumente. Deren IDs werden mit der Nachricht gesendet und ordnen das Gespräch dem gewünschten Material zu.'), artifact: pair('Selected documents + student question', 'Ausgewählte Dokumente + Frage') },
      { name: pair('Send a question', 'Frage senden'), title: pair('Connect the conversation.', 'Das Gespräch anbinden.'), body: pair('The frontend creates a conversation and sends the message through the authenticated API. Reusable chat actions keep request handling separate from the visual components.', 'Das Frontend erstellt ein Gespräch und sendet die Nachricht über die authentifizierte API. Wiederverwendbare Chat-Aktionen trennen die Anfrageverarbeitung von den UI-Komponenten.'), artifact: pair('Vue composable → Laravel API', 'Vue-Composable → Laravel-API') },
      { name: pair('Stream the answer', 'Antwort streamen'), title: pair('Read as the answer arrives.', 'Lesen, während die Antwort entsteht.'), body: pair('The application retrieves course context and generates a response. On the frontend, incoming chunks update the answer progressively, so students can start reading while generation continues.', 'Die Anwendung ruft Kurskontext ab und generiert eine Antwort. Im Frontend ergänzen eingehende Textabschnitte die Antwort schrittweise. So lässt sie sich bereits während der Generierung lesen.'), artifact: pair('Response stream → incremental message updates', 'Antwort-Stream → schrittweise Nachrichten-Updates') },
      { name: pair('Continue learning', 'Weiterlernen'), title: pair('Keep the state understandable.', 'Den Zustand verständlich halten.'), body: pair('Loading indicators, request state, and error handling support the conversation from sending to completion. The student can follow up in the same chat.', 'Ladeanzeigen, Anfragezustände und Fehlerbehandlung begleiten das Gespräch vom Absenden bis zum Abschluss. Im selben Chat können Studierende weiterfragen.'), artifact: pair('Loading → streaming → complete or error', 'Laden → Streaming → Abschluss oder Fehler') },
    ],
    contributionTitle: pair('My part of the build.', 'Mein Beitrag.'),
    contributions: [
      { title: pair('Break up the monolith', 'Den Monolithen aufteilen'), body: pair('Refactored the monolithic chat component into reusable modules, giving the interface clearer responsibilities and making changes easier to isolate.', 'Die monolithische Chat-Komponente in wiederverwendbare Module zerlegt. Dadurch bekamen die Teile klarere Aufgaben und Änderungen ließen sich gezielter umsetzen.') },
      { title: pair('Separate logic from UI', 'Logik von der UI trennen'), body: pair('Developed Vue composables for business logic and API communication, so chat components could focus on the experience instead of managing every request themselves.', 'Vue-Composables für Geschäftslogik und API-Kommunikation entwickelt. So konnten sich Chat-Komponenten auf die Oberfläche konzentrieren, statt jede Anfrage selbst zu verwalten.') },
      { title: pair('Make the wait readable', 'Wartezeit verständlich machen'), body: pair('Integrated authenticated REST APIs and improved token streaming, loading states, and status feedback within the existing team project.', 'Authentifizierte REST-APIs angebunden und Token-Streaming, Ladezustände und Statusanzeigen im bestehenden Teamprojekt verbessert.') },
    ],
    engineeringTitle: pair('A focused frontend boundary.', 'Ein klarer Frontend-Fokus.'),
    engineering: pair('The wider application includes a Laravel backend, course-document retrieval, and language-model integration. My case study focuses on the Vue frontend and its API boundary. The retrieval system is part of the team application, rather than a system I claim to have built alone.', 'Die Gesamtanwendung umfasst ein Laravel-Backend, die Suche in Kursdokumenten und die Anbindung von Sprachmodellen. Diese Fallstudie beschreibt mein Vue-Frontend und dessen API-Schnittstelle. Das Retrieval gehört zur Teamanwendung und wird hier nicht als meine alleinige Arbeit dargestellt.'),
    architecture: [pair('Vue components', 'Vue-Komponenten'), pair('Chat composables', 'Chat-Composables'), pair('Laravel API', 'Laravel-API'), pair('Course context + LLM', 'Kurskontext + LLM')],
    statusTitle: pair('An existing product, improved.', 'Ein bestehendes Produkt verbessern.'),
    status: pair('This was a collaborative university project. My work demonstrates how I approach an existing codebase: clarify component boundaries, reuse logic, and improve a visible interaction without rebuilding the whole system.', 'Ein gemeinsames Hochschulprojekt. Meine Arbeit zeigt meinen Umgang mit einer bestehenden Codebasis: Komponentengrenzen klären, Logik wiederverwenden und eine zentrale Interaktion verbessern, ohne das gesamte System neu zu bauen.'),
  },
  {
    id: 'grading', file: 'automated-grading.html', name: 'Automated Grading', image: 'robustabgabe', project: 'robustabgabe',
    next: 'alur-sekolah.html', nextName: 'Alur Sekolah',
    description: 'A solo-built grading MVP combining isolated code tests, rubric-based AI assessment, and lecturer review. Case study by Kenvara Solivo.',
    role: pair('Solo university project · Full-stack & Applied AI', 'Eigenständiges Hochschulprojekt · Full-Stack & Applied AI'),
    lede: pair('From submission to a reviewable grade.', 'Von der Abgabe zum prüfbaren Ergebnis.'),
    summary: pair('I designed and built an assessment workflow for programming assignments from end to end. It turns assignment sheets into rubrics, runs code in Docker, and drafts feedback for a lecturer to review.', 'Ich habe einen Bewertungsablauf für Programmieraufgaben vollständig selbst konzipiert und entwickelt. Er erstellt Bewertungsraster aus Aufgabenblättern, führt Code in Docker aus und entwirft Feedback zur Prüfung durch Lehrende.'),
    team: pair('Built independently · FH Aachen practice project', 'Allein entwickelt · Praxisprojekt an der FH Aachen'),
    scope: pair('Product · UX · Frontend · Backend · AI pipeline', 'Produkt · UX · Frontend · Backend · KI-Pipeline'),
    stack: 'Python · FastAPI · LangGraph · Docker · JavaScript',
    caption: pair('Project workflow overview. The walkthrough below focuses on the working parse, execute, grade, and review path.', 'Übersicht des Projektablaufs. Der folgende Einblick zeigt den funktionierenden Pfad aus Parsing, Ausführung, Bewertung und Prüfung.'),
    problemTitle: pair('Make grading inspectable.', 'Bewertungen nachvollziehen.'),
    problem: pair('A programming submission can contain working code, failing tests, and written explanations. These need different kinds of assessment. I built a workflow that keeps test evidence, rubric criteria, and feedback together, with a lecturer making the final decision.', 'Eine Programmierabgabe kann funktionierenden Code, fehlschlagende Tests und schriftliche Erklärungen enthalten. Dafür sind unterschiedliche Bewertungsverfahren nötig. Mein Ablauf verbindet Testergebnisse, Bewertungskriterien und Feedback. Die endgültige Entscheidung treffen Lehrende.'),
    workflowTitle: pair('Evidence before a grade.', 'Erst Belege, dann Bewertung.'),
    workflowIntro: pair('Explore the core assessment path. Every automated result remains a draft until lecturer approval.', 'Der zentrale Bewertungsablauf im Überblick. Jedes automatische Ergebnis bleibt bis zur Freigabe durch Lehrende ein Entwurf.'),
    steps: [
      { name: pair('Define the rubric', 'Raster festlegen'), title: pair('Make the criteria explicit.', 'Kriterien explizit machen.'), body: pair('The parser turns the assignment PDF into a structured rubric. A lecturer reviews the criteria and points, or imports an existing rubric, before submissions are assessed.', 'Der Parser erstellt aus dem Aufgaben-PDF ein strukturiertes Bewertungsraster. Lehrende prüfen Kriterien und Punkte oder importieren ein vorhandenes Raster, bevor Abgaben bewertet werden.'), artifact: pair('Assignment PDF + lecturer tests → reviewed rubric', 'Aufgaben-PDF + Tests der Lehrenden → geprüftes Raster') },
      { name: pair('Run the tests', 'Tests ausführen'), title: pair('Let tests determine code scores.', 'Codepunkte aus Tests ableiten.'), body: pair('Python or Java submissions run against the lecturer’s tests in an isolated Docker container. Deterministic points come from passed versus runnable tests; the language model cannot change that score.', 'Python- oder Java-Abgaben laufen gegen die Tests der Lehrenden in einem isolierten Docker-Container. Deterministische Punkte ergeben sich aus bestandenen und ausführbaren Tests. Das Sprachmodell kann diesen Wert nicht verändern.'), artifact: pair('Passed tests / runnable tests × criterion points', 'Bestandene Tests / ausführbare Tests × Kriterienpunkte') },
      { name: pair('Draft assessment', 'Bewertung entwerfen'), title: pair('Use AI where interpretation helps.', 'KI gezielt zur Einordnung nutzen.'), body: pair('The model assesses written answers against the rubric and explains failing traces. Awards are bounded by criterion limits. A verifier checks the draft against the evidence and flags uncertainty for review.', 'Das Modell beurteilt schriftliche Antworten anhand des Rasters und erklärt fehlschlagende Testläufe. Punkte sind durch die Kriterien begrenzt. Ein Verifier prüft den Entwurf anhand der Belege und markiert Unsicherheit zur Nachprüfung.'), artifact: pair('Rubric + evidence → bounded awards + feedback', 'Raster + Belege → begrenzte Punkte + Feedback') },
      { name: pair('Lecturer review', 'Lehrende prüfen'), title: pair('Keep the final decision human.', 'Die letzte Entscheidung bleibt menschlich.'), body: pair('The lecturer inspects evidence, reviews flagged criteria, edits the draft when needed, and approves the result. A generated assessment is not an official grade on its own.', 'Lehrende sehen Belege ein, prüfen markierte Kriterien, bearbeiten bei Bedarf den Entwurf und geben das Ergebnis frei. Eine generierte Bewertung ist für sich noch keine offizielle Note.'), artifact: pair('Automated draft → review → approved result', 'Automatischer Entwurf → Prüfung → freigegebenes Ergebnis') },
    ],
    contributionTitle: pair('Built from end to end.', 'Vollständig selbst entwickelt.'),
    contributions: [
      { title: pair('Design both sides', 'Beide Seiten gestalten'), body: pair('Designed and implemented student submission flows and the lecturer workspace: module selection, assignment setup, rubric editing, review queues, and result history.', 'Abgabeabläufe für Studierende und den Arbeitsbereich für Lehrende gestaltet und umgesetzt: Modulauswahl, Aufgabenanlage, Rasterbearbeitung, Prüfwarteschlangen und Ergebnisverlauf.') },
      { title: pair('Build the assessment pipeline', 'Die Bewertungspipeline bauen'), body: pair('Implemented the LangGraph pipeline, structured rubric parsing, Python and Java test execution, selective model assessment, and evidence verification behind a FastAPI backend.', 'Die LangGraph-Pipeline, strukturiertes Raster-Parsing, Python- und Java-Testausführung, gezielte Modellbewertung und Belegprüfung hinter einem FastAPI-Backend implementiert.') },
      { title: pair('Make results reviewable', 'Ergebnisse prüfbar machen'), body: pair('Connected test evidence and criterion-level feedback to the review interface. Preserved deterministic scoring and made uncertain or disputed criteria visible for lecturer review.', 'Testbelege und Feedback pro Kriterium mit der Prüfoberfläche verbunden. Deterministische Punkte erhalten und unsichere oder strittige Kriterien für Lehrende sichtbar gemacht.') },
    ],
    engineeringTitle: pair('Two kinds of assessment.', 'Zwei Arten der Bewertung.'),
    engineering: pair('Test-based criteria use deterministic scoring. Written answers and failure explanations use the model selectively. LangGraph coordinates the stages; FastAPI serves the API and web interface. Keeping these responsibilities separate makes it possible to inspect how a draft was produced.', 'Testbasierte Kriterien werden deterministisch bewertet. Für schriftliche Antworten und Fehlererklärungen wird das Modell gezielt eingesetzt. LangGraph koordiniert die Schritte, FastAPI liefert API und Weboberfläche. Die getrennten Aufgaben machen nachvollziehbar, wie ein Entwurf entstanden ist.'),
    architecture: [pair('Web workspace', 'Web-Arbeitsbereich'), pair('FastAPI', 'FastAPI'), pair('LangGraph', 'LangGraph'), pair('Docker tests / LLM', 'Docker-Tests / LLM'), pair('Lecturer approval', 'Freigabe durch Lehrende')],
    statusTitle: pair('A working assessment MVP.', 'Ein funktionierendes MVP.'),
    status: pair('The core parse, execute, and grade flow works end to end for Python, Java, and written answers. This remains a university MVP with lecturer review. Production authentication and infrastructure self-healing are outside the implemented core described here.', 'Parsing, Ausführung und Bewertung funktionieren durchgängig für Python, Java und schriftliche Antworten. Das Projekt bleibt ein Hochschul-MVP mit Prüfung durch Lehrende. Produktionsauthentifizierung und Infrastruktur-Selbstheilung gehören nicht zum hier beschriebenen implementierten Kern.'),
  },
  {
    id: 'alur', file: 'alur-sekolah.html', name: 'Alur Sekolah', image: 'alurssekolah',
    next: 'fh-chatbot.html', nextName: 'FH Aachen Chatbot',
    description: 'A school platform connecting teachers, families, and school administration. Product direction and full-stack web case study by Kenvara Solivo.',
    role: pair('Four-person team · Product direction & full-stack web', 'Vierköpfiges Team · Produktrichtung & Full-Stack-Web'),
    lede: pair('School and home, connected.', 'Schule und Zuhause verbinden.'),
    summary: pair('A platform for Indonesian schools to bring classroom updates, learning, and family communication together. In our four-person team, I lead product and design direction and built the full-stack website.', 'Eine Plattform für indonesische Schulen, die Klassenalltag, Lernen und Familienkommunikation zusammenführt. In unserem vierköpfigen Team verantworte ich die Produkt- und Designrichtung und habe die Full-Stack-Website entwickelt.'),
    team: pair('Four-person team', 'Vierköpfiges Team'),
    scope: pair('Product direction · UX/UI · Full-stack website', 'Produktrichtung · UX/UI · Full-Stack-Website'),
    stack: 'React · TypeScript · FastAPI · PostgreSQL · Keycloak',
    caption: pair('Alur’s public-facing web experience for Indonesian schools and families.', 'Alurs Webauftritt für indonesische Schulen und Familien.'),
    problemTitle: pair('One school, different needs.', 'Eine Schule, verschiedene Bedürfnisse.'),
    problem: pair('Teachers manage a class, families follow a child’s school day, and administrators keep the school organised. Alur brings attendance, assignments, grades, announcements, classroom documentation, and messaging into one platform with views shaped around those roles.', 'Lehrkräfte führen eine Klasse, Familien begleiten den Schulalltag ihres Kindes und die Verwaltung organisiert die Schule. Alur vereint Anwesenheit, Aufgaben, Noten, Mitteilungen, Klassendokumentation und Nachrichten auf einer Plattform mit rollenbezogenen Ansichten.'),
    workflowTitle: pair('A shared school day.', 'Ein gemeinsamer Schulalltag.'),
    workflowIntro: pair('Explore the different roles. Each sees the part of school life relevant to them.', 'Die Rollen im Überblick. Jede sieht den für sie relevanten Teil des Schulalltags.'),
    steps: [
      { name: pair('Teachers', 'Lehrkräfte'), title: pair('Run the classroom.', 'Die Klasse begleiten.'), body: pair('Teachers work with class rosters, record attendance, manage assignments and grades, and share announcements or classroom documentation from the web workspace.', 'Lehrkräfte arbeiten mit Klassenlisten, erfassen Anwesenheit, verwalten Aufgaben und Noten und teilen Mitteilungen oder Klassendokumentation im Web-Arbeitsbereich.'), artifact: pair('Class → attendance, assignments, updates', 'Klasse → Anwesenheit, Aufgaben, Neuigkeiten') },
      { name: pair('Families', 'Familien'), title: pair('Stay close to the school day.', 'Am Schulalltag teilhaben.'), body: pair('Parents can follow their child’s class feed and communicate with the school. Classroom updates and messages sit together instead of becoming disconnected pieces of information.', 'Eltern können den Klassenfeed ihres Kindes verfolgen und mit der Schule kommunizieren. Klassenneuigkeiten und Nachrichten stehen gemeinsam bereit, statt voneinander getrennt zu sein.'), artifact: pair('Child’s class → updates + school messages', 'Klasse des Kindes → Neuigkeiten + Schulnachrichten') },
      { name: pair('School admins', 'Schulverwaltung'), title: pair('Keep the school organised.', 'Die Schule organisieren.'), body: pair('Administrators manage the school workspace and its classroom structure. The backend separates school data by tenant and applies role-based access to the shared API.', 'Die Verwaltung organisiert den Schul-Arbeitsbereich und seine Klassenstruktur. Das Backend trennt Schuldaten nach Mandanten und steuert den Zugriff auf die gemeinsame API rollenbasiert.'), artifact: pair('School workspace → classes + people + permissions', 'Schul-Arbeitsbereich → Klassen + Personen + Berechtigungen') },
      { name: pair('Students', 'Schülerinnen & Schüler'), title: pair('Know what comes next.', 'Wissen, was als Nächstes ansteht.'), body: pair('Assignments and grades connect the classroom’s learning activities to a student’s own work. These use the same backend as the teacher and family experiences.', 'Aufgaben und Noten verbinden die Lernaktivitäten der Klasse mit der eigenen Arbeit. Dahinter steht dasselbe Backend wie für die Ansichten von Lehrkräften und Familien.'), artifact: pair('Assigned work → submission → feedback', 'Aufgabe → Abgabe → Feedback') },
    ],
    contributionTitle: pair('Direction through implementation.', 'Von der Richtung zur Umsetzung.'),
    contributions: [
      { title: pair('Shape the product', 'Das Produkt ausrichten'), body: pair('Lead product and design direction: define how the different school roles fit together, structure the experience, and turn the platform’s scope into understandable web flows.', 'Die Produkt- und Designrichtung verantworten: das Zusammenspiel der Schulrollen definieren, die Nutzererfahrung strukturieren und den Plattformumfang in verständliche Web-Abläufe übersetzen.') },
      { title: pair('Design the experience', 'Die Erfahrung gestalten'), body: pair('Designed the web experience from the public landing page to the signed-in workspace, with a consistent visual direction and role-specific navigation for school staff and families.', 'Die Web-Erfahrung von der Landingpage bis zum angemeldeten Arbeitsbereich gestaltet, mit konsistenter visueller Richtung und rollenbezogener Navigation für Schulpersonal und Familien.') },
      { title: pair('Build the full-stack web app', 'Die Full-Stack-Web-App bauen'), body: pair('Built the React and TypeScript website and its backend integration, connecting the interface to FastAPI, PostgreSQL data, and Keycloak sign-in. My ownership here is the web product within our team.', 'Die Website mit React und TypeScript samt Backend-Anbindung entwickelt: FastAPI, PostgreSQL-Daten und Keycloak-Anmeldung mit der Oberfläche verbunden. Meine Verantwortung liegt beim Webprodukt innerhalb unseres Teams.') },
    ],
    engineeringTitle: pair('One backend, distinct experiences.', 'Ein Backend, eigene Ansichten.'),
    engineering: pair('The platform has a shared FastAPI backend for the React web client and a separate Expo mobile client. PostgreSQL stores school data with a schema per tenant, and Keycloak handles sign-in. I built the full-stack website; the mobile client is part of the wider team project.', 'Die Plattform nutzt ein gemeinsames FastAPI-Backend für den React-Webclient und einen separaten Expo-Mobilclient. PostgreSQL speichert Schuldaten mit einem Schema pro Mandant, Keycloak übernimmt die Anmeldung. Ich habe die Full-Stack-Website entwickelt; der Mobilclient gehört zum Gesamtprojekt des Teams.'),
    architecture: [pair('React web / Expo mobile', 'React-Web / Expo-Mobile'), pair('FastAPI + Keycloak', 'FastAPI + Keycloak'), pair('PostgreSQL per school', 'PostgreSQL pro Schule')],
    statusTitle: pair('A product in development.', 'Ein Produkt in Entwicklung.'),
    status: pair('The web workspace is connected to the API for core school workflows, from class information to communication. We are continuing development as a four-person team. My focus is carrying the web product from product and design decisions into a working full-stack experience.', 'Der Web-Arbeitsbereich ist für zentrale Schulabläufe mit der API verbunden, von Klasseninformationen bis zur Kommunikation. Wir entwickeln das Produkt als vierköpfiges Team weiter. Mein Fokus liegt darauf, Produkt- und Designentscheidungen in eine funktionierende Full-Stack-Web-Erfahrung zu übersetzen.'),
  },
];

export const studyTranslations = {
  'study.read': pair('Explore the case study', 'Fallstudie entdecken'),
  'study.back': pair('← Back to projects', '← Zurück zu den Projekten'),
  'study.team': pair('Context', 'Kontext'),
  'study.next': pair('Next case study', 'Nächste Fallstudie'),
  'study.map': pair('Workflow illustration', 'Illustration des Ablaufs'),
  'study.case': pair('Case study ↗', 'Fallstudie ↗'),
  'study.selected': pair('Selected case study', 'Ausgewählte Fallstudie'),
  'groups.team': pair('Team projects', 'Teamprojekte'),
  'groups.team.body': pair('Shared products. My role spans product decisions, design, and full-stack development.', 'Gemeinsame Produkte. Mein Beitrag umfasst Produktentscheidungen, Design und Full-Stack-Entwicklung.'),
  'groups.school': pair('University projects', 'Hochschulprojekte'),
  'groups.school.body': pair('Applied AI and engineering work at FH Aachen, with my contribution explained in depth.', 'Applied AI und Softwareentwicklung an der FH Aachen, mit ausführlichem Einblick in meinen Beitrag.'),
  'groups.client': pair('Client & community work', 'Auftrags- & Community-Projekte'),
  'groups.client.body': pair('Websites and tools built around the needs of a business or organisation.', 'Websites und Tools für die konkreten Bedürfnisse von Unternehmen und Organisationen.'),
  'groups.solo': pair('Independent projects', 'Eigenständige Projekte'),
  'groups.solo.body': pair('Self-directed products and prototypes, exploring ideas through working software.', 'Eigene Produkte und Prototypen, mit denen ich Ideen als funktionierende Software erprobe.'),
  'groups.fun': pair('For fun', 'Zum Spaß'),
  'groups.fun.body': pair('Smaller experiments in interaction, visuals, and the browser.', 'Kleinere Experimente mit Interaktion, Gestaltung und dem Browser.'),
  'groups.all': pair('All projects', 'Alle Projekte'),
  'sort.label': pair('Sort by', 'Sortieren nach'),
  'sort.category': pair('Category', 'Kategorie'),
  'sort.date': pair('Latest first', 'Neueste zuerst'),
  'groups.intro': pair('Start with the selected case studies, or explore by context: team, university, client and community, independent projects, and experiments.', 'Starte mit den ausgewählten Fallstudien oder entdecke die Projekte nach Kontext: Team, Hochschule, Auftrag und Community, eigene Projekte und Experimente.'),
  'work.alur.body': pair('A school platform connecting teachers and families. I lead product and design direction and built the full-stack website in a four-person team.', 'Eine Schulplattform für Lehrkräfte und Familien. Im vierköpfigen Team verantworte ich Produkt- und Designrichtung und habe die Full-Stack-Website entwickelt.'),
  'work.grading.updated': pair('A solo-built grading workflow: isolated code tests, rubric-based AI assessment, and feedback for lecturers to review and approve.', 'Ein selbst entwickelter Bewertungsablauf: isolierte Codetests, KI-Bewertung nach Kriterien und Feedback zur Prüfung und Freigabe durch Lehrende.'),
  'work.chatbot.updated': pair('A course-grounded AI tutor. In the university team, I modularised the Vue frontend, integrated APIs, and improved streaming and chat states.', 'Ein KI-Tutor mit Kurskontext. Im Hochschulteam habe ich das Vue-Frontend modularisiert, APIs angebunden und Streaming sowie Chat-Zustände verbessert.'),
};

for (const study of studies) {
  for (const [key, value] of Object.entries(study)) {
    if (value?.en && value?.de) studyTranslations[`study.${study.id}.${key}`] = value;
  }
  for (const [index, step] of study.steps.entries()) {
    for (const [key, value] of Object.entries(step)) studyTranslations[`study.${study.id}.step${index}.${key}`] = value;
  }
  for (const [index, contribution] of study.contributions.entries()) {
    for (const [key, value] of Object.entries(contribution)) studyTranslations[`study.${study.id}.contribution${index}.${key}`] = value;
  }
  for (const [index, node] of study.architecture.entries()) studyTranslations[`study.${study.id}.architecture${index}`] = node;
}
