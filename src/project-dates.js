// Display periods are supported by Ken's CV (Show Up, FH Chatbot, StackPilot)
// or dated repository history (year-only labels for the other projects).
// Latest-first ordering for the first four projects is explicitly supplied by Ken.
export const projectDates = {
  robustabgabe: { datetime: '2026', en: '2026', de: '2026' },
  alur: { datetime: '2026', en: '2026', de: '2026' },
  meridian: { datetime: '2026', en: '2026', de: '2026' },
  showup: { datetime: '2026-07', en: 'Jul 2026 – Present', de: 'Juli 2026 – heute' },
  questime: { datetime: '2026', en: '2026', de: '2026' },
  chattrolley: { datetime: '2026', en: '2026', de: '2026' },
  chatbot: { datetime: '2025-10', en: 'Oct 2025 – Feb 2026', de: 'Okt. 2025 – Feb. 2026' },
  stackpilot: { datetime: '2026-06', en: 'Jun – Jul 2026', de: 'Juni – Juli 2026' },
  align: { datetime: '2026', en: '2026', de: '2026' },
  fluen: { datetime: '2026', en: '2026', de: '2026' },
  liftide: { datetime: '2026', en: '2026', de: '2026' },
  watchflow: { datetime: '2026', en: '2026', de: '2026' },
  dataco: { datetime: '2026', en: '2026', de: '2026' },
  vocmel: { datetime: '2026', en: '2026', de: '2026' },
  fujinohana: { datetime: '2026', en: '2026', de: '2026' },
  igta: { datetime: '2026', en: '2026', de: '2026' },
  elsewhere: { datetime: '2026', en: '2026', de: '2026' },
  cinescope: { datetime: '2026', en: '2026', de: '2026' },
  laferrari: { datetime: '2026', en: '2026', de: '2026' },
  kanagawa: { datetime: '2026', en: '2026', de: '2026' },
};

export const projectDateTranslations = Object.fromEntries(
  Object.entries(projectDates).map(([id, { en, de }]) => [`date.${id}`, { en, de }]),
);

// First four explicitly ordered by Ken; the remainder by latest repository work.
export const projectLatestOrder = [
  'robustabgabe', 'alur', 'meridian', 'showup', 'align', 'fluen', 'liftide',
  'stackpilot', 'vocmel', 'questime', 'chattrolley', 'elsewhere', 'watchflow',
  'cinescope', 'laferrari', 'fujinohana', 'igta', 'dataco', 'kanagawa', 'chatbot',
];
