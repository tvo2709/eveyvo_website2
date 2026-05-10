/* =====================================================================
   EVEY VO — Portfolio Game Menu
   Controller + modal + keyboard nav.
   ---------------------------------------------------------------------
   ▼▼▼  QUICK CONFIG — change colors / fonts / sizes / timing here  ▼▼▼
   ===================================================================== */

const THEME = {
  /* ------- COLORS (override the CSS palette) ------- */
  primary:      "#0004ff",   // brand blue (used for strips, accents, shadows)
  primaryDeep:  "#0000c7",   // darker blue (gradient ends, deep shadows)
  primaryLight: "#7a8aff",   // light blue (hovers / highlights)
  black:        "#0a0a0a",   // page background, dark strip
  cream:        "#f5ecdf",   // text on dark, on-blue text
  accent:       "#ffd400",   // yellow focus indicator on the active strip

  /* ------- TYPOGRAPHY ------- */
  fontDisplay:  "'Archivo Black', sans-serif",   // big italic titles
  fontBody:     "'Oswald', sans-serif",          // body text & metadata

  /* ------- SIZES (use any CSS length; clamp() makes it responsive) ------- */
  sizes: {
    eveyName:     "clamp(40px, 6vw, 90px)",  // "HI! I'M EVEY VO"
    sectionLabel: "clamp(34px, 3.5vw, 92px)",// "INSTALLATIONS" / "STAGE DESIGN" / "3D ARTS"
    sectionNum:   "clamp(28px, 4vw, 56px)",  // "01" / "02" / "03"
  },
  card: {
    width:  "clamp(220px, 22vw, 380px)",
    height: "clamp(200px, 25vh, 320px)",
  },

  /* ------- ANIMATION TIMING ------- */
  zoomHoldMs:    2500,    // how long an image lingers, zoomed-in, at center (ms)
  unzoomDelayMs:  450,    // pause after zoom-out before sliding to next
  slideDuration: "1.6s",  // CSS duration for the slide between cards

  /* ------- DEFAULT VIDEO IN MODAL (used when an item has no `video`) ------- */
  placeholderVideo:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
};

/* Push THEME into CSS custom properties so the stylesheet picks it up. */
(function applyTheme() {
  const r = document.documentElement.style;
  r.setProperty('--orange',          THEME.primary);
  r.setProperty('--orange-deep',     THEME.primaryDeep);
  r.setProperty('--orange-light',    THEME.primaryLight);
  r.setProperty('--black',           THEME.black);
  r.setProperty('--cream',           THEME.cream);
  r.setProperty('--accent',          THEME.accent);

  r.setProperty('--font-display',    THEME.fontDisplay);
  r.setProperty('--font-body',       THEME.fontBody);

  r.setProperty('--evey-size',       THEME.sizes.eveyName);
  r.setProperty('--label-size',      THEME.sizes.sectionLabel);
  r.setProperty('--label-num-size',  THEME.sizes.sectionNum);

  r.setProperty('--item-w-desktop',  THEME.card.width);
  r.setProperty('--item-h-desktop',  THEME.card.height);

  r.setProperty('--slide-duration',  THEME.slideDuration);
})();

/* =====================================================================
   ▼▼▼  CONTENT — edit each item to populate the cards and the
   click-to-open detail modal. Every field except `title`, `subtitle`,
   `tag`, and `src` is OPTIONAL. Anything you skip gets a sensible default.
   ---------------------------------------------------------------------
   FIELDS each item supports:
     title       (string)  Shown big in the card and the modal heading.
     subtitle    (string)  Small line under the title (e.g., "Light installation · 2024").
     tag         (string)  Tiny yellow ribbon on the card ("INST" / "STAGE" / "3D").
     src         (string)  Image file, e.g. "img/I1.webp".
     description (string[]) Paragraphs of long-form text in the modal.
     type        (string)  Modal: TYPE field (e.g., "Light installation").
     location    (string)  Modal: LOCATION field.
     role        (string)  Modal: ROLE field.
     status      (string)  Modal: STATUS field (e.g., "LIVE", "ON TOUR").
     credits     (string[]) Lines under CREDITS in the modal.
     video       (string)  URL/path to the modal hero video (mp4 or YouTube embed).
     poster      (string)  Image shown before the video plays. Defaults to `src`.
     gallery     (string[]) Image URLs in the modal's DOCUMENTATION grid. Defaults to [src].
   ===================================================================== */

/* ---------- INSTALLATIONS — top blue strip --------------------------- */
const ORANGE_ITEMS = [
  /* Item 1 is fully filled in as a template. Copy this shape for any
     piece you want richly described in the modal. */
  {
    title:    "Virtual Blooming",
    subtitle: "Interactive Projections · 2023",
    tag:      "INST",
    src:      "img/I1.webp",
    type:     "Interactive Projections",
    location: "University of Maryland, College Park",
    role:     "Artist",
    status: "archived",
    credits: [
      "Evey Vo",
    ],
    description: [
      "Virtual Blooming  is an immersive and interactive projection that showcases the splendor of human interaction within virtual spaces. As visitors enter the room, they will encounter a projection of matrices, which symbolize the virtual spaces that encompassed our lives during the quarantine period. To emphasize the contrast between these digital environments and our organic existence, vibrant flowers will be projected onto their bodies, serving as a visual representation of our living forms. Furthermore, as multiple individuals enter the room, green cables resembling plant roots will gradually emerge beneath their feet, symbolizing the interconnectedness between human beings. These connections, although facilitated by mechanical means, remain vibrant and alive, underscoring the organic nature of human relationships.",
      "Made with Azure Kinect DK, Unity 3D, Blender",
    ],
    // video:   "videos/genesis-hall.mp4",  // (optional) drop in your own
    // gallery: ["img/I1.webp", "img/I1-detail-a.png", "img/I1-detail-b.png"],
  },

  // Items 2-6 use auto-generated placeholder text in the modal.
  // Add any of the optional fields above to override per-item.
  { title: "Me Linh's Drumbeats",
    subtitle: "Projections / Mechanism · 2025",
    tag: "INST",
    src: "img/I0.webp",
    type:     "Projections, Mechanism",
    location: "University of Maryland, College Park",
    role:     "Artist",
    status: "archived",
    credits: [
      "Evey Vo",
    ],
    description: [
      "A theatrical performance utilizing projection, and a marionette puppet automated system which controlling the stage props, making them react and interact with the projected figures.",
      "The performance will incorporate two forms of traditional Vietnamese arts, cải lương (traditional opera) and water puppetry. The story in the performance is “Tiếng Trống Mê Linh” is a classic opera that made its debut in 1977",
    ],
  },


  { title: "Rewind, Fast Forward",
    subtitle: "Projections Mapping · 2024",
    tag: "INST",
    src: "img/I2.webp",
    type:     "Projections Mapping",
    location: "University of Maryland, College Park",
    role:     "Artist",
    status: "archived",
    credits: [
      "Evey Vo",
      "Alexis Maokhamphiou",
    ],
    description: [
      "Rewind, Fast Forward is a piece that revolves around the idea of wanting to grow up fast but then wanting to take it all back once it is too late. At different ages, we all have different reasons to hide underneath the table, whether as a child finding this hideout as a place of comfort, or as an adult who wants to hide from the harsh world and responsibilities. Through the sunroofs looking up two different skies, we explored how time affect our mindset and perspective, and invited audience to reminisce on the childhood days as they push a toy car running through the pole connecting between two ends of the table.",
    ],
  },
  { title: "Newborns", subtitle: "Installation · 2024",  tag: "INST", src: "img/I3.webp",
    type:     "Installation",
    location: "University of Maryland, College Park",
    role:     "Artist",
    status: "archived",
    credits: [
      "Evey Vo",
    ],
    description: [
      "The new “creatures” born within the net, nurtured by your data, and are growing increasingly intelligent by every second. Through the screen, they are looking directly at you, as you are looking right at them. You are facing them, perhaps questioning, being entertained, or judging, but how long would it take for them to learn how to do the same? Yes, as they learn the way we speak, write, draw, and think, they can as well learn how to express emotions. Being presented in this piece, you are invited to sit down, facing the screen, and the newborn creature will show you its learning progress of being a “proper” human. In this installation, using a camera to detect facial figure, the newborns only show themselves when there is audience sitting in front of it, watching them repeatedly practice awkward expressions as a process of learning and adapting. ",
      "Made with Unreal Engine 5 (Metahuman), Adobe 3D Substance Painter, TouchDesigner",
    ],
   },
  { title: "Silent Fantasy",     subtitle: "Projections · 2023",        tag: "INST", src: "img/I4.webp",
    type:     "Installation",
    location: "University of Maryland, College Park",
    role:     "Artist",
    status: "archived",
    credits: [
      "Evey Vo",
    ],
    description: [
      "Silent Fantasy explores coping mechanisms and the concept of escapism in a world that is harsh and cold place, devoid of colors, and the stars can’t be seen through solid high-rises. It serves as a reminder that even in the midst of chaos, there exists the potential for serenity and wonder, waiting to be discovered within the depths of our own imagination. Through a “window” looking out the labyrinth of steel and white lights, we face the reality of being trapped in a dystopian monochromatic cityscape, where the all the colors and nature has gone, leaving behind a dark, suffocating, and gloomy world dominated by high-rises. As we clear out the noises surrounding us, we can escape to our own imaginary world, which is filled by a kaleidoscope of shifting hues and vibrant shades. Using sound sensor and visualized projection that constantly changing according to the sound level, this project is a filter that cover up the whole hard truth of the world we’re in, giving us a little bit of a lively and stress-free moment.  ",
      "Made with Blender, TouchDesign and sound sensor",
    ],
   },
  { title: "Through the Heart",       subtitle: "Installation · 2024",            tag: "INST", src: "img/I5.webp",
    type:     "Installation",
    location: "University of Maryland, College Park",
    role:     "Artist",
    status: "archived",
    credits: [
      "Evey Vo",
    ],
    description: [
    "Through the Heart explores the concept of time through the lens of our heart, specifically our emotions, our memories, and how they influence our perception of time. As our emotions change, our feelings of time are also significantly affected, and heart rate is a reliable source of revealing our emotions. Each and everyone of us has an unique heartbeat, implying we all have our own pace and perception of time. In this installation, time does not have a solid definition. Its own shape and meaning relies on persons’ emotions at the moment. In this installation, the heartbeat recorded from the audience will be presented on computer’s screen, visualized and projected onto the resin heart sculptures, creating unique experience for each of the audience.",
      "Made with Arduino heartbeat sensor, resin printed heart and TouchDesigner projection",
    ],
   },
  { title: "Yen - Interactive short film",    subtitle: "Interactive Film · 2024",           tag: "INST", src: "img/I6.webp",
    type:     "Installation",
    location: "University of Maryland, College Park",
    role:     "Artist",
    status: "archived",
    credits: [
      "Evey Vo",
       "Marilyn Ortega",
       "Ollivia Stotler",
       "Jasmine Voon",
    ],
    description: [
    "Yen is a horror short film inspired by Southeast Asian folklore and urban legends. The story unfolds from the perspective of a mysterious figure observing Cali, a college student searching for her missing friend, who had attempted to reach out through cryptic means. As Cali is transfered into an alternate dimension, she finds herself relentlessly pursued by an unknown beast while uncovering the clues her friend left behind. Throughout the film, the audience must adapt to the eerie, ever-changing environment, where objects react dynamically to the unfolding narrative. Viewers are not mere spectators but active participants—using light sensors and sound recorders, their actions directly influence the course of the story, making every experience unique and immersive.",
    "Made with Arduino sensors, Epsynth, After Affects, Unity, and physical installation with 40 inches monitor, stereo speakers and interactive props",
    ],
   },
];

/* ---------- STAGE DESIGN — middle black strip ------------------------ */
const BLACK_ITEMS = [
  { title: "She Lights The Way",     subtitle: "Faculty Dance · 2025",           tag: "STAGE", src: "img/S1.webp",
    type:     "Dance",
    location: "University of Maryland, College Park",
    role:     "Media Designer",
    status: "archived",
    credits: [
      "Choreographer · Alvin Mayes",
      "Media Design · Evey Vo",
      "Lighting Design · Alex Russell",
      "Costume Design · Christina Toth",
      "Sound Design · Emil Mendoza",
    ],
    description: [""],
    gallery: ["img/S1.webp", "img/S1/S11.webp", "img/S1/S12.webp", "img/S1/S13.webp", "img/S1/S14.webp", "img/S1/S15.webp", "img/S1/S16.webp"], 
   },
  { title: "Planet GenZ",        subtitle: "Faculty Dance · 2025",    tag: "STAGE", src: "img/S2.webp",
    type:     "Dance",
    location: "University of Maryland, College Park",
    role:     "Media Designer",
    status: "archived",
    credits: [
      "Choreographer · Adriane Fang",
      "Media Design · Evey Vo",
      "Lighting Design · Yichen Lu",
      "Costume Design · Anna Sorrentino",
      "Sound Design · Roni Lancaster",
    ],
    description: [""],
    gallery: ["img/S2.webp", "img/S2/S21.webp", "img/S2/S22.webp", "img/S2/S23.webp", "img/S2/S24.webp", "img/S2/S25.webp", "img/S2/S26.webp"],
    
   },
  { title: "Freedom's Cadence",   subtitle: "Spring MFA Dance · 2025",             tag: "STAGE", src: "img/S3.webp",
    type:     "Dance",
    location: "University of Maryland, College Park",
    role:     "Media Designer",
    status: "archived",
    credits: [
      "Choreographer · Jalen Rose",
      "Media Design · Evey Vo",
      "Lighting Design · Mariah Faulkner",
      "Costume Design · Angeli Novio",
      "Sound Design · Kiefer Cure",
    ],
    description: [""],
    gallery: ["img/S3.webp", "img/S3/S31.webp", "img/S3/S32.webp", "img/S3/S33.webp"],
   },
  { title: "3 (is a magic number)", subtitle: "Fearless New Works Festival · 2026",          tag: "STAGE", src: "img/S4.webp",
    type:     "Dance",
    location: "University of Maryland, College Park",
    role:     "Media Designer",
    status: "archived",
    credits: [
      "Choreographer · Julianne Garnett",
      "Media Design · Evey Vo",
      "Lighting Design · Gabriella Loshin",
      "Costume Design · Emily Davis",
      "Sound Design · Kiefer Cure",
    ],
    description: [""],
    gallery: ["img/S4.webp", "img/S4/S41.webp", "img/S4/S42.webp", "img/S4/S43.webp", "img/S4/S44.webp"],
   },
  { title: "Split Skies",         subtitle: "Fearless New Works Festival · 2026",             tag: "STAGE", src: "img/S5.webp",
    type:     "Dance",
    location: "University of Maryland, College Park",
    role:     "Media Designer",
    status: "archived",
    credits: [
      "Choreographer · Emma Young",
      "Media Design · Evey Vo",
      "Lighting Design · Yichen Lu",
      "Costume Design · Eliana Harper",
      "Sound Design · Kiefer Cure",
    ],
    description: [""],
    gallery: ["img/S5.webp", "img/S5/S51.webp"],
   },
];

/* ---------- 3D ARTS — bottom blue strip ------------------------------ */
/* Note: 3D Arts items show a LARGE IMAGE in the modal (no video). */
const THREED_ITEMS = [
  { title: "The Last Sun",  subtitle: "Blender · 2023",          tag: "3D", src: "img/D1.webp",
    type: "3D Arts", location: "", role: "Artist", status: "archived",
    credits: ["Evey Vo"], description: [""] },
  { title: "Sophie's Hat Shop",    subtitle: "Blender · 2024",            tag: "3D", src: "img/D2.webp",
    type: "3D Arts", location: "", role: "Artist", status: "archived",
    credits: ["Evey Vo"],
    description: ["Made and Rendered in Blender, inspired by Howl's Moving Castle"] },
  { title: "Rusty Rudder", subtitle: "Blender· 2022",       tag: "3D", src: "img/D3.webp",
    type: "3D Arts", location: "", role: "Artist", status: "archived",
    credits: ["Evey Vo"],
    description: ["Made and Rendered in Blender. recreated a scene from Genshin Impact"] },
  { title: "Buried Playground",    subtitle: "Blender · 2021", tag: "3D", src: "img/D4.webp",
    type: "3D Arts", location: "", role: "Artist", status: "archived",
    credits: ["Evey Vo"], description: [""] },
  { title: "Vietnamese Childhood Living",  subtitle: "Blender · 2024",         tag: "3D", src: "img/D5.webp",
    type: "3D Arts", location: "", role: "Artist", status: "archived",
    credits: ["Evey Vo"], description: [""] },
  { title: "Night at Church",      subtitle: "Blender · 2022",          tag: "3D", src: "img/D6.webp",
    type: "3D Arts", location: "", role: "Artist", status: "archived",
    credits: ["Evey Vo"], description: [""] },
];

const PLACEHOLDER_VIDEO = THEME.placeholderVideo;

const SECTION_META = {
  orange: { num: "01", label: "INSTALLATIONS",
    locations: ["Tokyo, JP","San Francisco, CA","Berlin, DE","Seoul, KR","Lisbon, PT","CDMX, MX"],
    types:     ["Light installation","Mixed media","Spatial","AV piece","Kinetic sculpture","Generative"] },
  black:  { num: "02", label: "STAGE DESIGN",
    locations: ["The Wiltern, LA","Tokyo Dome, JP","Sadler's Wells, UK","Park Avenue Armory, NY","Teatro Municipal, BR","Fuji Rock, JP"],
    types:     ["Concert","Theatre","Opera","Festival","Dance","Immersive theatre"] },
  threed: { num: "03", label: "3D ARTS",
    locations: ["Solo · digital release","Group show · ArtStation","Commission · private","Exhibit · Beyond Human","Self-published","Showcase · Dimensions"],
    types:     ["3D sculpt","Lowpoly","Hard surface","Substance + ZBrush","Procedural","Character"] },
};


/* ---------- helpers ------------------------------------------------- */
const onceTransitionEnd = (el, prop = 'transform') =>
  new Promise((resolve) => {
    let done = false;
    const handler = (e) => {
      if (e.target !== el) return;
      if (prop && e.propertyName !== prop) return;
      done = true;
      el.removeEventListener('transitionend', handler);
      resolve();
    };
    el.addEventListener('transitionend', handler);
    setTimeout(() => { if (!done) { el.removeEventListener('transitionend', handler); resolve(); } }, 2400);
  });

const $ = (id) => document.getElementById(id);

function cardHTML(item, displayIdx, sectionKey) {
  const num = String(displayIdx + 1).padStart(2, '0');
  const src = item.src;
  const fallback = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 440">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0004ff"/><stop offset="100%" stop-color="#0a0a0a"/>
      </linearGradient></defs>
      <rect width="640" height="440" fill="url(#g)"/>
      <text x="50%" y="55%" text-anchor="middle" fill="#f5ecdf"
        font-family="Archivo Black, sans-serif" font-size="64"
        font-style="italic">${item.title.replace(/[<>&]/g,'')}</text>
    </svg>`
  )}`;
  return `
    <article class="strip-item" data-display-idx="${displayIdx}" data-section="${sectionKey}" tabindex="0">
      <div class="card-frame">
        <span class="card-tag">${item.tag}</span>
        <img src="${src}" alt="${item.title}" loading="lazy" decoding="async"
             onerror="this.onerror=null;this.src='${fallback}';" />
        <div class="card-info">
          <span class="card-num">${num}</span>
          <div class="card-info-text">
            <h3>${item.title}</h3>
            <p>${item.subtitle}</p>
          </div>
        </div>
      </div>
    </article>`;
}

function detailsFor(item, sectionKey, idx) {
  const meta = SECTION_META[sectionKey];
  const year = (item.subtitle.match(/(20\d{2})/) || [, "2024"])[1];
  const status = item.status || ["LIVE","ARCHIVED","ON TOUR","IN DEVELOPMENT","PERMANENT","TRAVELING","RETIRED"][idx % 7];
  const muses = ["Persona 5","Metaphor: ReFantazio","Yayoi Kusama","Ryoji Ikeda"];
  return {
    num: meta.num, sectionLabel: meta.label,
    title: item.title, subtitle: item.subtitle, year,
    type: item.type || meta.types[idx % meta.types.length],
    location: item.location || meta.locations[idx % meta.locations.length],
    role: item.role || ["Lead designer","Creative director","Co-creator","Production designer","Concept artist","Director of design","Lead artist"][idx % 7],
    status,
    video: item.video || PLACEHOLDER_VIDEO,
    poster: item.poster || item.src,
    credits: item.credits || [
      "Direction · Evey Vo",
      "Production · Atelier Halcyon",
      "Photography · " + ["Mariko Lee","Otto Reins","S. Quintero","Jules Bachand"][idx % 4],
      "Sound design · Kira Mendoza",
      "Fabrication · Studio Twelve",
    ],
    paragraphs: item.description || [
      `${item.title.toUpperCase()} began as a question — what does memory feel like when you can stand inside it? Built across an eleven-week residency at the partner venue in ${meta.locations[idx % meta.locations.length]}, the piece pulls from cinematic lighting, tactile sculpture, and procedural sound to create a space that responds to the rhythm of the people inside it.`,
      `The work is structured in three movements. Visitors enter through a low-lit threshold, drift through a central chamber where projected light pools and breaks against hand-poured resin forms, and exit along a narrow corridor that gradually returns the room to silence. Each movement uses a custom DMX rig synced to a generative score; nothing in the piece is the same twice.`,
      `Documentation captures stills, audio, and visitor traces from the original run. The accompanying essay — co-written with curator Adriana Yoon — examines the influence of ${muses[idx % muses.length]} on the spatial grammar of the work, and how game-menu language can reshape contemporary installation design without becoming nostalgic about it.`,
      `Technical credits are listed at left. Press inquiries and tour booking can be directed to studio@eveyvo.work — happy to share the production deck on request.`,
    ],
    gallery: item.gallery || [item.src],
  };
}

/* ---------- modal --------------------------------------------------- */
const modalEl        = document.getElementById('modal');
const modalVideoEl   = document.getElementById('modal-video');
const modalImageEl   = document.getElementById('modal-image');     // big image hero (3D Arts)
const modalGalleryEl = document.getElementById('modal-gallery');
const modalCreditsEl = document.getElementById('modal-credits');
const modalTextEl    = document.getElementById('modal-text');

let modalOpen = false;
let modalReturnFocusEl = null;

function openModal(item, sectionKey, idx) {
  const d = detailsFor(item, sectionKey, idx);

  $('modal-num').textContent      = d.num;
  $('modal-section').textContent  = d.sectionLabel;
  $('modal-year').textContent     = d.year;
  $('modal-title').textContent    = d.title;
  $('modal-subtitle').textContent = d.subtitle;
  $('modal-type').textContent     = d.type;
  $('modal-location').textContent = d.location;
  $('modal-role').textContent     = d.role;

  // Hero rules:
  //   - 3D Arts (or `heroImage: true`)        -> show big image as hero
  //   - Has a `video` field                    -> show video player as hero
  //   - Otherwise (Installations / Stage Design without video)
  //                                            -> NO hero at all; the only
  //                                               images come from the
  //                                               DOCUMENTATION gallery.
  const isThreeD     = sectionKey === 'threed' || item.heroImage === true;
  const useVideoHero = !!item.video && !isThreeD;
  const useImageHero = isThreeD;
  const showHero     = useImageHero || useVideoHero;

  // Simplified layout (no meta sidebar, no gallery, 1 paragraph) is for
  // 3D Arts only.
  const modalWindowEl = modalEl.querySelector('.modal-window');
  if (modalWindowEl) {
    modalWindowEl.classList.toggle('is-threed', isThreeD);
    modalWindowEl.classList.toggle('no-hero', !showHero);
  }

  // Find the hero container so we can hide it entirely when neither a
  // video nor a hero image is appropriate.
  const heroContainerEl = modalEl.querySelector('.modal-hero');
  if (heroContainerEl) heroContainerEl.style.display = showHero ? '' : 'none';

  if (useImageHero) {
    if (modalVideoEl) {
      modalVideoEl.pause();
      modalVideoEl.removeAttribute('src');
      modalVideoEl.load();
      modalVideoEl.style.display = 'none';
    }
    if (modalImageEl) {
      modalImageEl.src = item.src;
      modalImageEl.alt = item.title;
      modalImageEl.style.display = 'block';
    }
  } else if (useVideoHero) {
    if (modalImageEl) {
      modalImageEl.style.display = 'none';
      modalImageEl.removeAttribute('src');
    }
    if (modalVideoEl) {
      modalVideoEl.style.display = '';
      modalVideoEl.poster = d.poster;
      modalVideoEl.src = d.video;
      modalVideoEl.load();
    }
  } else {
    // No hero — unload both media elements so nothing keeps playing.
    if (modalImageEl) {
      modalImageEl.style.display = 'none';
      modalImageEl.removeAttribute('src');
    }
    if (modalVideoEl) {
      modalVideoEl.pause();
      modalVideoEl.removeAttribute('src');
      modalVideoEl.load();
      modalVideoEl.style.display = 'none';
    }
  }

  modalCreditsEl.innerHTML = d.credits.map((c) => `<li>${c}</li>`).join('');
  modalTextEl.innerHTML    = d.paragraphs.map((p) => `<p>${p}</p>`).join('');
  modalGalleryEl.innerHTML = d.gallery
    .map((url, i) => `<img src="${url}" alt="${d.title} frame ${i + 1}" loading="lazy">`)
    .join('');

  modalReturnFocusEl = document.activeElement;
  modalEl.hidden = false;
  modalEl.classList.remove('is-closing');
  modalOpen = true;

  pauseAllStrips(true);
  setTimeout(() => modalEl.querySelector('.modal-close')?.focus(), 30);
}

function closeModal() {
  if (!modalOpen) return;
  modalEl.classList.add('is-closing');
  if (modalVideoEl) modalVideoEl.pause();
  setTimeout(() => {
    modalEl.hidden = true;
    modalEl.classList.remove('is-closing');
    if (modalVideoEl) {
      modalVideoEl.removeAttribute('src');
      modalVideoEl.load();
    }
    modalOpen = false;
    pauseAllStrips(false);
    if (modalReturnFocusEl && modalReturnFocusEl.focus) modalReturnFocusEl.focus();
  }, 250);
}

modalEl.addEventListener('click', (e) => {
  if (e.target.matches('[data-modal-close], [data-modal-close] *')) closeModal();
});

/* ---------- strip controller (state machine) ----------------------- */
function buildStrip(stripEl, items, sectionKey) {
  const all = [...items, ...items];
  stripEl.innerHTML = all.map((it, i) => cardHTML(it, i % items.length, sectionKey)).join('');
  return Array.from(stripEl.children);
}

function getCenterTx(stripEl, viewportEl, itemEl) {
  const vw = viewportEl.clientWidth;
  const itemCenter = itemEl.offsetLeft + itemEl.offsetWidth / 2;
  return vw / 2 - itemCenter;
}

function setTx(stripEl, tx, withTransition) {
  stripEl.style.transition = withTransition
    ? `transform var(--slide-duration) var(--slide-ease)`
    : 'none';
  stripEl.style.transform = `translate3d(${tx}px, 0, 0)`;
}

function makeStrip(stripId, direction, items, sectionEl, sectionKey, onCenter) {
  const stripEl = document.getElementById(stripId);
  const viewportEl = stripEl.parentElement;
  const itemEls = buildStrip(stripEl, items, sectionKey);
  const N = items.length;

  let idx = N;
  let mode = 'idle';
  let timer = null;
  let pending = false;

  function clearTimer() { if (timer) { clearTimeout(timer); timer = null; } }
  function center(i) { return getCenterTx(stripEl, viewportEl, itemEls[i]); }
  function applyZoom(on) {
    itemEls[idx].classList.toggle('zoomed', on);
    sectionEl.classList.toggle('is-locked', on);
  }
  function handleWrap() {
    if (direction === 'rtl' && idx >= 2 * N - 1) {
      const j = idx - N;
      setTx(stripEl, center(j), false);
      idx = j;
    } else if (direction === 'ltr' && idx <= 0) {
      const j = idx + N;
      setTx(stripEl, center(j), false);
      idx = j;
    }
  }

  function step() {
    if (pending) return;
    if (mode === 'idle') {
      mode = 'zooming';
      applyZoom(true);
      onCenter && onCenter(idx % N);
      timer = setTimeout(() => { mode = 'unzooming'; step(); }, THEME.zoomHoldMs);
    } else if (mode === 'unzooming') {
      applyZoom(false);
      timer = setTimeout(() => { mode = 'sliding'; step(); }, THEME.unzoomDelayMs);
    } else if (mode === 'sliding') {
      const next = direction === 'rtl' ? idx + 1 : idx - 1;
      setTx(stripEl, center(next), true);
      onceTransitionEnd(stripEl, 'transform').then(() => {
        idx = next;
        handleWrap();
        mode = 'idle';
        if (!pending) step();
      });
    }
  }

  function pause(on) {
    pending = on;
    if (on) clearTimer();
    else if (mode === 'zooming') timer = setTimeout(() => { mode = 'unzooming'; step(); }, 1500);
    else step();
  }

  function skip(dir) {
    if (pending) return;
    clearTimer();
    applyZoom(false);
    const next = idx + (dir > 0 ? 1 : -1);
    setTx(stripEl, center(next), true);
    onceTransitionEnd(stripEl, 'transform').then(() => {
      idx = next;
      handleWrap();
      mode = 'idle';
      step();
    });
  }

  function selectCurrent() { openModal(items[idx % N], sectionKey, idx % N); }

  stripEl.addEventListener('click', (e) => {
    const card = e.target.closest('.strip-item');
    if (!card) return;
    const i = parseInt(card.dataset.displayIdx, 10);
    openModal(items[i], sectionKey, i);
  });

  requestAnimationFrame(() => {
    setTx(stripEl, center(idx), false);
    setTimeout(step, 60);
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { setTx(stripEl, center(idx), false); }, 60);
  });

  return { skip, selectCurrent, pause, getCurrentIdx: () => idx % N };
}

/* ---------- HUD counter -------------------------------------------- */
const counterEl = document.getElementById('hud-counter');
const state = {
  orange: 1, black: 1, threed: 1,
  oN: ORANGE_ITEMS.length, bN: BLACK_ITEMS.length, tN: THREED_ITEMS.length,
};
function updateCounter() {
  if (!counterEl) return;
  const pad = (n) => String(n).padStart(2, '0');
  counterEl.textContent =
    `01·${pad(state.orange)}/${pad(state.oN)}  ` +
    `02·${pad(state.black)}/${pad(state.bN)}  ` +
    `03·${pad(state.threed)}/${pad(state.tN)}`;
}
updateCounter();

/* ---------- bootstrap + keyboard nav ------------------------------- */
const strips = [];
const sectionElements = [];

function pauseAllStrips(on) { strips.forEach((s) => s.pause(on)); }

let focusedIdx = 0;
function setFocused(i) {
  focusedIdx = ((i % sectionElements.length) + sectionElements.length) % sectionElements.length;
  sectionElements.forEach((el, n) => el.classList.toggle('is-focused', n === focusedIdx));
  const labelEls = document.querySelectorAll('.menu-labels .section-label');
  labelEls.forEach((el, n) => el.classList.toggle('is-focused', n === focusedIdx));
}

window.addEventListener('load', () => {
  const orangeSection = document.querySelector('.orange-section[data-pos="top"]');
  const blackSection  = document.querySelector('.black-section[data-pos="mid"]');
  const threedSection = document.querySelector('.orange-section[data-pos="bot"]');
  sectionElements.push(orangeSection, blackSection, threedSection);

  strips.push(
    makeStrip('strip-orange', 'ltr', ORANGE_ITEMS, orangeSection, 'orange', (i) => { state.orange = i + 1; updateCounter(); }),
    makeStrip('strip-black',  'rtl', BLACK_ITEMS,  blackSection,  'black',  (i) => { state.black  = i + 1; updateCounter(); }),
    makeStrip('strip-3d',     'ltr', THREED_ITEMS, threedSection, 'threed', (i) => { state.threed = i + 1; updateCounter(); }),
  );

  setFocused(0);
});

document.addEventListener('keydown', (e) => {
  if (modalOpen) {
    if (e.key === 'Escape') { closeModal(); e.preventDefault(); }
    return;
  }
  switch (e.key) {
    case 'ArrowDown':  setFocused(focusedIdx + 1); e.preventDefault(); break;
    case 'ArrowUp':    setFocused(focusedIdx - 1); e.preventDefault(); break;
    case 'ArrowRight': strips[focusedIdx]?.skip(+1); e.preventDefault(); break;
    case 'ArrowLeft':  strips[focusedIdx]?.skip(-1); e.preventDefault(); break;
    case 'Enter':      strips[focusedIdx]?.selectCurrent(); e.preventDefault(); break;
  }
});

document.addEventListener('visibilitychange', () => {
  document.querySelectorAll('.strip').forEach((s) => {
    s.style.willChange = document.hidden ? 'auto' : 'transform';
  });
});
