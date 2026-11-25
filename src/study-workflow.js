// All explanations remain readable without JavaScript. Enhance into a stepper
// only once the controls exist; native buttons provide keyboard interaction.
document.querySelectorAll('[data-workflow]').forEach((workflow) => {
  const buttons = [...workflow.querySelectorAll('[data-workflow-step]')];
  const panels = [...workflow.querySelectorAll('[data-workflow-panel]')];
  const nodes = [...workflow.querySelectorAll('[data-workflow-node]')];
  if (!buttons.length || buttons.length !== panels.length) return;

  function selectStep(index, animate = true) {
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    nodes.forEach((node, i) => node.classList.toggle('is-current', i === index));
    panels.forEach((panel, i) => {
      panel.hidden = i !== index;
      panel.classList.remove('is-entering');
      if (i === index && animate) panel.classList.add('is-entering');
    });
  }

  buttons.forEach((button, index) => button.addEventListener('click', () => selectStep(index)));
  workflow.classList.add('workflow-ready');
  selectStep(0, false);
});
