// Run after editing src/study-content.js. Outputs readable, indexable HTML;
// the browser only enhances language selection and the workflow walkthrough.
import { readFile, writeFile } from 'node:fs/promises';
import { studies } from '../src/study-content.js';
import { projectDates } from '../src/project-dates.js';

const template = await readFile('show-up.html', 'utf8');
const header = template.match(/    <header class="editorial-nav">[\s\S]*?<\/header>/)[0];
const loader = template.match(/    <div class="page-loader"[\s\S]*?<\/div>/)[0];
const footer = template.match(/    <footer id="contact"[\s\S]*?<\/footer>/)[0];
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

for (const study of studies) {
  const project = study.project || study.id;
  const period = projectDates[project];
  const text = (field, tag = 'p', attrs = '') => `<${tag} data-i18n="study.${study.id}.${field}"${attrs ? ` ${attrs}` : ''}>${escape(study[field].en)}</${tag}>`;
  const steps = study.steps.map((step, index) => `
              <button type="button" data-workflow-step="${index}" aria-controls="workflow-panel-${index}" aria-pressed="${index === 0}"><span aria-hidden="true" class="workflow-indicator"></span><span data-i18n="study.${study.id}.step${index}.name">${escape(step.name.en)}</span><span aria-hidden="true">↗</span></button>`).join('');
  const panels = study.steps.map((step, index) => `
              <section id="workflow-panel-${index}" class="workflow-panel" data-workflow-panel="${index}" aria-labelledby="workflow-title-${index}">
                <p class="workflow-artifact" data-i18n="study.${study.id}.step${index}.artifact">${escape(step.artifact.en)}</p>
                <h3 id="workflow-title-${index}" data-i18n="study.${study.id}.step${index}.title">${escape(step.title.en)}</h3>
                <p data-i18n="study.${study.id}.step${index}.body">${escape(step.body.en)}</p>
              </section>`).join('');
  const contributions = study.contributions.map((item, index) => `
            <article>
              <h3 data-i18n="study.${study.id}.contribution${index}.title">${escape(item.title.en)}</h3>
              <p data-i18n="study.${study.id}.contribution${index}.body">${escape(item.body.en)}</p>
            </article>`).join('');
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${study.name} case study | Kenvara Solivo</title>
    <meta name="description" content="${escape(study.description)}" />
    <meta property="og:title" content="${study.name} case study | Kenvara Solivo" />
    <meta property="og:description" content="${escape(study.description)}" />
    <meta property="og:type" content="article" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="stylesheet" href="/src/editorial.css" />
    <link rel="stylesheet" href="/src/case-study.css" />
    <link rel="stylesheet" href="/src/study-details.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <script src="/page-ready.js"></script>
  </head>
  <body data-project="${study.project || study.id}" class="case-page study-page">
${loader}
    <a href="#main" class="case-skip" data-i18n="skip">Skip to content</a>
${header}
    <main id="main">
      <section class="study-hero case-container">
        <a href="projects.html" class="case-back" data-i18n="study.back">← Back to projects</a>
        <div class="study-intro">
          <div><h1>${study.name}</h1>${text('role', 'p', 'class="case-role"')}<p class="case-date"><time datetime="${period.datetime}" data-i18n="date.${project}">${escape(period.en)}</time></p></div>
          <div>${text('lede', 'p', 'class="case-lede"')}${text('summary', 'p', 'class="case-summary"')}<a class="case-button case-button-primary" href="#story" data-i18n="study.read">Explore the case study</a></div>
        </div>
        <figure class="study-cover">
          <img src="images/project/${study.image}.webp" width="1600" height="786" alt="${study.name} project overview" fetchpriority="high" decoding="async" />
          ${text('caption', 'figcaption')}
        </figure>
      </section>
      <section class="case-facts" aria-label="Project facts">
        <div class="case-container case-facts-grid">
          <div><span data-i18n="study.team">Context</span>${text('team', 'strong')}</div>
          <div><span data-i18n="case.scope">Scope</span>${text('scope', 'strong')}</div>
          <div><span data-i18n="case.stack">Built with</span><strong>${escape(study.stack)}</strong></div>
        </div>
      </section>
      <section class="case-story" id="story">
        <div class="case-container case-story-grid">
          <div>${text('problemTitle', 'h2')}</div>
          <div class="case-story-copy">${text('problem')}</div>
        </div>
      </section>
      <section class="study-workflow" aria-labelledby="workflow-heading">
        <div class="case-container">
          ${text('workflowTitle', 'h2', 'id="workflow-heading"')}
          ${text('workflowIntro', 'p', 'class="study-section-intro"')}
          <div class="workflow" data-workflow>
            <div class="workflow-controls" role="group" aria-label="Explore workflow">${steps}
            </div>
            <div class="workflow-stage">
              <ol class="workflow-map" aria-label="Workflow illustration">${study.steps.map((step, index) => `<li data-workflow-node="${index}"${index === 0 ? ' class="is-current"' : ''}><span data-i18n="study.${study.id}.step${index}.name">${escape(step.name.en)}</span></li>`).join('')}</ol>${panels}
            </div>
          </div>
        </div>
      </section>
      <section class="study-contributions">
        <div class="case-container">
          ${text('contributionTitle', 'h2')}
          <div class="study-contribution-list">${contributions}
          </div>
        </div>
      </section>
      <section class="case-story study-engineering">
        <div class="case-container">
          <div class="case-story-grid"><div>${text('engineeringTitle', 'h2')}</div><div class="case-story-copy">${text('engineering')}</div></div>
          <ol class="study-architecture" aria-label="Architecture overview">${study.architecture.map((node, index) => `<li data-i18n="study.${study.id}.architecture${index}">${escape(node.en)}</li>`).join('')}</ol>
        </div>
      </section>
      <section class="case-close">
        <div class="case-container case-close-grid">
          <div>${text('statusTitle', 'h2')}${text('status')}</div>
          <aside class="case-next"><span data-i18n="study.next">Next case study</span><a href="${study.next}">${study.nextName} ↗</a></aside>
        </div>
      </section>
    </main>
${footer}
    <script type="module" src="/src/case-study.js"></script>
  </body>
</html>
`;
  await writeFile(study.file, html);
  console.log(`Generated ${study.file}`);
}
