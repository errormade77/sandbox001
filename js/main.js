const EDGE_MARGIN = 10;
const DEFAULT_MODULE_COUNT = 100;
const PRESETS_KEY = 'grid-stand-presets';
const DEFAULT_PRESET_KEY = 'grid-stand-default-preset';
const PRESETS_SEED_KEY = 'grid-stand-presets-seed';
const MODULES_SEED_KEY = 'grid-stand-modules-seed';
const BUNDLED_MODULES_URL = 'data/site-modules.json';
const PANEL_GROUPS_KEY = 'grid-stand-panel-groups';
const MODULES_CONTENT_KEY = 'grid-stand-modules';
const MODULES_DB_NAME = 'grid-stand';
const MODULES_DB_VERSION = 1;
const MODULES_STORE = 'modules-content';
const PANEL_TAB_KEY = 'grid-stand-panel-tab';
const MAX_MODULE_IMAGE_BYTES = 10 * 1024 * 1024;
const MODULE_IMAGE_MAX_PX = 1280;
const MODULE_IMAGE_JPEG_QUALITY = 0.9;

const defaults = {
  columns: 7,
  responsiveColumns: true,
  responsiveColGap: 6,
  moduleSize: 140,
  captionSize: 11,
  rowGap: 32,
  showGuides: false,
  moduleHover: false,
  moduleHoverScale: 110,
  moduleHoverZone: 180,
  moduleHoverZoneEnabled: true,
  moduleHoverZoneSmoothness: 50,
  moduleHoverAnimate: true,
  moduleHoverDuration: 180,
  moduleHoverCurve: [0.33, 0, 0.2, 1],
  moduleHoverDimOthers: false,
  moduleHoverDimScale: 85,
  moduleHoverBlurOthers: false,
  moduleHoverBlurModule: false,
  moduleHoverBlurAmount: 8,
  moduleHoverCascade: false,
  moduleHoverCascadeMin: 60,
  moduleHoverCascadeRadius: 3,
  moduleHoverCascadeSharpness: 50,
  moduleHoverParallax: false,
  moduleHoverParallaxAmount: 6,
  scrollEffect: true,
  scrollStagger: 50,
  scrollIntensity: 30,
  scrollReverseUp: true,
  scrollScaleEffect: false,
  scrollScaleCascade: true,
  scrollScaleAmount: 25,
  scrollScaleSpeed: 50,
  scrollScaleRatio: 65,
  scrollScaleHoldAtRest: true,
  scrollBlurEffect: false,
  scrollBlurCell: false,
  scrollBlurModule: true,
  scrollBlurCascade: true,
  scrollBlurAmount: 6,
  scrollBlurSpeed: 50,
  scrollBlurRatio: 65,
  scrollBlurHoldAtRest: true,
  inertiaEnabled: true,
  inertiaSensitivity: 100,
  inertiaDuration: 1200,
  inertiaCurve: [0, 0, 0.25, 1],
  infiniteScroll: true,
  backgroundColor: '#ffffff',
  textColor: '#111111',
};

const paramDefs = [
  { key: 'columns', slider: 'columns', input: 'columns-input', min: 1, max: 12 },
  { key: 'responsiveColGap', slider: 'responsive-col-gap', input: 'responsive-col-gap-input', min: 0, max: 500 },
  { key: 'moduleSize', slider: 'module-size', input: 'module-size-input', min: 60, max: 240 },
  { key: 'captionSize', slider: 'caption-size', input: 'caption-size-input', min: 8, max: 24 },
  { key: 'rowGap', slider: 'row-gap', input: 'row-gap-input', min: 0, max: 120 },
  { key: 'moduleHoverScale', slider: 'module-hover-scale', input: 'module-hover-scale-input', min: 100, max: 1000 },
  { key: 'moduleHoverZone', slider: 'module-hover-zone', input: 'module-hover-zone-input', min: 40, max: 600 },
  { key: 'moduleHoverZoneSmoothness', slider: 'module-hover-zone-smoothness', input: 'module-hover-zone-smoothness-input', min: 0, max: 100 },
  { key: 'moduleHoverDuration', slider: 'module-hover-duration', input: 'module-hover-duration-input', min: 0, max: 800 },
  { key: 'moduleHoverDimScale', slider: 'module-hover-dim-scale', input: 'module-hover-dim-scale-input', min: 50, max: 100 },
  { key: 'moduleHoverBlurAmount', slider: 'module-hover-blur-amount', input: 'module-hover-blur-amount-input', min: 0, max: 24 },
  { key: 'moduleHoverCascadeMin', slider: 'module-hover-cascade-min', input: 'module-hover-cascade-min-input', min: 40, max: 100 },
  { key: 'moduleHoverCascadeRadius', slider: 'module-hover-cascade-radius', input: 'module-hover-cascade-radius-input', min: 1, max: 8 },
  { key: 'moduleHoverCascadeSharpness', slider: 'module-hover-cascade-sharpness', input: 'module-hover-cascade-sharpness-input', min: 0, max: 100 },
  { key: 'moduleHoverParallaxAmount', slider: 'module-hover-parallax-amount', input: 'module-hover-parallax-amount-input', min: 2, max: 20 },
  { key: 'scrollStagger', slider: 'scroll-stagger', input: 'scroll-stagger-input', min: 0, max: 200 },
  { key: 'scrollIntensity', slider: 'scroll-intensity', input: 'scroll-intensity-input', min: 0, max: 100 },
  { key: 'scrollScaleAmount', slider: 'scroll-scale-amount', input: 'scroll-scale-amount-input', min: 0, max: 80 },
  { key: 'scrollScaleSpeed', slider: 'scroll-scale-speed', input: 'scroll-scale-speed-input', min: 0, max: 200 },
  { key: 'scrollScaleRatio', slider: 'scroll-scale-ratio', input: 'scroll-scale-ratio-input', min: 20, max: 100 },
  { key: 'scrollBlurAmount', slider: 'scroll-blur-amount', input: 'scroll-blur-amount-input', min: 0, max: 24 },
  { key: 'scrollBlurSpeed', slider: 'scroll-blur-speed', input: 'scroll-blur-speed-input', min: 0, max: 200 },
  { key: 'scrollBlurRatio', slider: 'scroll-blur-ratio', input: 'scroll-blur-ratio-input', min: 20, max: 100 },
  { key: 'inertiaSensitivity', slider: 'inertia-sensitivity', input: 'inertia-sensitivity-input', min: 10, max: 300 },
  { key: 'inertiaDuration', slider: 'inertia-duration', input: 'inertia-duration-input', min: 200, max: 4000 },
];

const state = {
  ...defaults,
  inertiaCurve: [...defaults.inertiaCurve],
  moduleHoverCurve: [...defaults.moduleHoverCurve],
};

const scroll = {
  y: 0,
  vel: 0,
};

let cycleHeight = 0;
let layoutColumns = -1;

let dragState = null;
let lastFrameTime = performance.now();
let lastWheelTime = 0;
let decelStartTime = 0;
let smoothScrollVel = 0;
let cascadeBlend = 0;
let introActive = false;
let introStartTime = 0;
let introStartDistance = 0;
const INTRO_DURATION_MS = 1500;
const introEase = createCubicBezier(0.22, 1, 0.36, 1);
const HEADER_SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:–-.·/ ';
const HEADER_SCRAMBLE_TICK_MS = 22;
const HEADER_SCRAMBLE_STAGGER_MS = 7;
const HEADER_SCRAMBLE_JITTER_MS = 40;
const HEADER_SCRAMBLE_ELEMENT_GAP_MS = 30;
let headerScrambleActive = false;
const headerScrambleItems = [];
let headerMeasureEl = null;
let headerIntroActive = false;
let headerIntroStartTime = 0;
const headerIntroBlocks = [];
const HEADER_INTRO_DURATION_MS = 820;
const HEADER_INTRO_STAGGER_MS = 150;
const HEADER_INTRO_BLUR_PX = 12;
const HEADER_INTRO_OFFSET_Y = 10;
let lastHoverPointer = null;

const MODULE_HOVER_REST = Object.freeze({
  factor: 1,
  blur: 0,
  moduleBlur: 0,
  shiftX: 0,
  shiftY: 0,
  zIndex: '',
  cellZIndex: '',
  isPrimary: false,
  isHoverCell: false,
  aboveCaption: false,
  onModule: false,
  isFocused: false,
  useOriginal: false,
});

const moduleHoverTargetByModule = new WeakMap();
const moduleHoverAnimByModule = new WeakMap();

let dragModuleId = null;
const colScrollLag = new Array(12).fill(0);
const colScaleLag = new Array(12).fill(0);
const colBlurLag = new Array(12).fill(0);

function resetColScrollLag() {
  colScrollLag.fill(scroll.y);
  colScaleLag.fill(scroll.y);
  colBlurLag.fill(scroll.y);
  smoothScrollVel = 0;
  cascadeBlend = 0;
}

const gridCycle = document.getElementById('grid-cycle');
const grid = gridCycle.querySelector('.grid');
const canvas = document.getElementById('canvas');
const guides = document.getElementById('guides');
const stand = document.querySelector('.stand');
const devPanel = document.getElementById('dev-panel');
const dragHandle = document.getElementById('panel-drag-handle');
const panelOpen = document.getElementById('panel-open');
const panelClose = document.getElementById('panel-close');
const colGapStat = document.getElementById('col-gap-stat');
const modulesStat = document.getElementById('modules-stat');
const presetNameInput = document.getElementById('preset-name');
const presetSaveBtn = document.getElementById('preset-save');
const presetList = document.getElementById('preset-list');
const presetEmpty = document.getElementById('preset-empty');
const devPanelTabs = document.querySelectorAll('.dev-tools__tab');
const panelViewParams = document.getElementById('panel-view-params');
const panelViewModules = document.getElementById('panel-view-modules');
const moduleList = document.getElementById('module-list');
const moduleAddBtn = document.getElementById('module-add');
const moduleImageFitCover = document.getElementById('module-image-fit-cover');
const moduleImageFitWidth = document.getElementById('module-image-fit-width');

const curveEls = {
  svg: document.getElementById('curve-svg'),
  path: document.getElementById('curve-path'),
  p1: document.getElementById('curve-p1'),
  p2: document.getElementById('curve-p2'),
  lineA: document.getElementById('curve-handle-a'),
  lineB: document.getElementById('curve-handle-b'),
  x1: document.getElementById('curve-x1'),
  y1: document.getElementById('curve-y1'),
  x2: document.getElementById('curve-x2'),
  y2: document.getElementById('curve-y2'),
};

const hoverCurveEls = {
  svg: document.getElementById('hover-curve-svg'),
  path: document.getElementById('hover-curve-path'),
  p1: document.getElementById('hover-curve-p1'),
  p2: document.getElementById('hover-curve-p2'),
  lineA: document.getElementById('hover-curve-handle-a'),
  lineB: document.getElementById('hover-curve-handle-b'),
  x1: document.getElementById('hover-curve-x1'),
  y1: document.getElementById('hover-curve-y1'),
  x2: document.getElementById('hover-curve-x2'),
  y2: document.getElementById('hover-curve-y2'),
};

const inertiaCurveEditor = { stateKey: 'inertiaCurve', els: curveEls };
const hoverCurveEditor = { stateKey: 'moduleHoverCurve', els: hoverCurveEls, onChange: () => applyVariables() };

const controls = {
  showGuides: document.getElementById('show-guides'),
  moduleHover: document.getElementById('module-hover'),
  moduleHoverZoneEnabled: document.getElementById('module-hover-zone-enabled'),
  moduleHoverAnimate: document.getElementById('module-hover-animate'),
  moduleHoverDimOthers: document.getElementById('module-hover-dim-others'),
  moduleHoverBlurOthers: document.getElementById('module-hover-blur-others'),
  moduleHoverBlurModule: document.getElementById('module-hover-blur-module'),
  moduleHoverCascade: document.getElementById('module-hover-cascade'),
  moduleHoverParallax: document.getElementById('module-hover-parallax'),
  scrollEffect: document.getElementById('scroll-effect'),
  scrollReverseUp: document.getElementById('scroll-reverse-up'),
  scrollScaleEffect: document.getElementById('scroll-scale-effect'),
  scrollScaleCascade: document.getElementById('scroll-scale-cascade'),
  scrollScaleHoldAtRest: document.getElementById('scroll-scale-hold-at-rest'),
  scrollBlurEffect: document.getElementById('scroll-blur-effect'),
  scrollBlurCell: document.getElementById('scroll-blur-cell'),
  scrollBlurModule: document.getElementById('scroll-blur-module'),
  scrollBlurCascade: document.getElementById('scroll-blur-cascade'),
  scrollBlurHoldAtRest: document.getElementById('scroll-blur-hold-at-rest'),
  inertiaEnabled: document.getElementById('inertia-enabled'),
  infiniteScroll: document.getElementById('infinite-scroll'),
  responsiveColumns: document.getElementById('responsive-columns'),
  backgroundColor: document.getElementById('background-color'),
  backgroundColorInput: document.getElementById('background-color-input'),
  textColor: document.getElementById('text-color'),
  textColorInput: document.getElementById('text-color-input'),
};

paramDefs.forEach(({ slider, input }) => {
  controls[slider] = document.getElementById(slider);
  controls[input] = document.getElementById(input);
});

function normalizeHexColor(raw, fallback) {
  if (typeof raw !== 'string') return fallback;

  let hex = raw.trim();
  if (!hex.startsWith('#')) hex = `#${hex}`;

  if (/^#[0-9a-fA-F]{3}$/.test(hex)) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }

  if (/^#[0-9a-fA-F]{6}$/.test(hex)) return hex.toLowerCase();
  return fallback;
}

function syncThemeColorControls() {
  controls.backgroundColor.value = state.backgroundColor;
  controls.backgroundColorInput.value = state.backgroundColor;
  controls.textColor.value = state.textColor;
  controls.textColorInput.value = state.textColor;
}

function setThemeColor(key, rawValue) {
  const normalized = normalizeHexColor(rawValue, state[key]);
  state[key] = normalized;
  syncThemeColorControls();
  applyVariables();
}

function bindThemeColorControl(colorInput, hexInput, key) {
  colorInput.addEventListener('input', () => {
    setThemeColor(key, colorInput.value);
  });

  hexInput.addEventListener('change', () => {
    setThemeColor(key, hexInput.value);
  });

  hexInput.addEventListener('blur', () => {
    syncThemeColorControls();
  });
}

function generateModuleId() {
  return `mod-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function createDefaultModuleItem(title = 'Placeholder') {
  return {
    id: generateModuleId(),
    title,
    image: null,
    imageOriginal: null,
    imageWidth: 0,
    imageHeight: 0,
  };
}

function createDefaultModuleItems(count = DEFAULT_MODULE_COUNT) {
  return Array.from({ length: count }, () => createDefaultModuleItem());
}

const moduleContent = {
  imageFit: 'cover',
  items: createDefaultModuleItems(),
};

function getModuleCount() {
  return Math.max(1, moduleContent.items.length);
}

function getModuleItem(index) {
  const count = getModuleCount();
  const normalized = ((index % count) + count) % count;
  return moduleContent.items[normalized];
}

function openModulesDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(MODULES_DB_NAME, MODULES_DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(MODULES_STORE)) {
        db.createObjectStore(MODULES_STORE);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function readModulesContentRecord(db) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MODULES_STORE, 'readonly');
    const req = tx.objectStore(MODULES_STORE).get(MODULES_CONTENT_KEY);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error);
  });
}

function writeModulesContentRecord(db, data) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(MODULES_STORE, 'readwrite');
    tx.objectStore(MODULES_STORE).put(data, MODULES_CONTENT_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

function applyStoredModuleContent(stored) {
  if (!stored || !Array.isArray(stored.items) || stored.items.length === 0) return;

  moduleContent.imageFit = stored.imageFit === 'width' ? 'width' : 'cover';
  moduleContent.items = stored.items.map((item) => ({
    id: item.id || generateModuleId(),
    title: typeof item.title === 'string' ? item.title : 'Placeholder',
    image: typeof item.image === 'string' ? item.image : null,
    imageOriginal: typeof item.imageOriginal === 'string' ? item.imageOriginal : null,
    imageWidth: Number(item.imageWidth) || 0,
    imageHeight: Number(item.imageHeight) || 0,
  }));
}

async function loadModuleContent() {
  try {
    const db = await openModulesDb();
    let stored = await readModulesContentRecord(db);

    if (!stored) {
      try {
        stored = JSON.parse(localStorage.getItem(MODULES_CONTENT_KEY) || 'null');
        if (stored) {
          await writeModulesContentRecord(db, stored);
          localStorage.removeItem(MODULES_CONTENT_KEY);
        }
      } catch {
        // ignore legacy migration errors
      }
    }

    applyStoredModuleContent(stored);
  } catch {
    try {
      applyStoredModuleContent(JSON.parse(localStorage.getItem(MODULES_CONTENT_KEY) || 'null'));
    } catch {
      // keep defaults
    }
  }
}

let saveModuleContentChain = Promise.resolve();

function saveModuleContent() {
  saveModuleContentChain = saveModuleContentChain.then(async () => {
    const payload = {
      imageFit: moduleContent.imageFit,
      items: moduleContent.items,
    };

    try {
      const db = await openModulesDb();
      await writeModulesContentRecord(db, payload);
      localStorage.removeItem(MODULES_CONTENT_KEY);
    } catch (error) {
      window.alert('Не удалось сохранить модули. Проверьте свободное место в браузере.');
      throw error;
    }
  });

  return saveModuleContentChain;
}

function applyModuleImageFit() {
  grid.classList.toggle('grid--module-fit-cover', moduleContent.imageFit === 'cover');
  grid.classList.toggle('grid--module-fit-width', moduleContent.imageFit === 'width');
}

function ensureModuleBody(module) {
  let body = module.querySelector('.cell__module-body');
  if (!body) {
    body = document.createElement('div');
    body.className = 'cell__module-body';
    const legacyImg = module.querySelector(':scope > img');
    if (legacyImg) body.appendChild(legacyImg);
    module.appendChild(body);
  }
  return body;
}

function setModuleImageSrc(module, item, useOriginal = false) {
  const body = ensureModuleBody(module);
  const img = body.querySelector('img');
  if (!img || !item.image) return;

  const wantOriginal = useOriginal;
  const quality = wantOriginal ? 'original' : 'thumb';
  if (module.dataset.imageQuality === quality) return;

  const src = wantOriginal ? (item.imageOriginal || item.image) : item.image;
  module.dataset.imageQuality = quality;

  if (wantOriginal && item.imageOriginal && img.src !== src) {
    const loader = new Image();
    loader.decoding = 'async';
    loader.onload = () => {
      if (module.dataset.imageQuality !== 'original') return;
      img.src = src;
      if (typeof loader.decode === 'function') loader.decode().catch(() => {});
    };
    loader.src = src;
    return;
  }

  img.src = src;
}

function clearFocusedModuleBlur(cell, module) {
  cell.style.setProperty('--module-hover-blur', '0px');
  module.style.setProperty('--module-hover-module-blur', '0px');
  cell.style.removeProperty('--module-scroll-blur');
  module.style.removeProperty('--module-scroll-module-blur');
}

function applyModuleContentToCell(cell, contentIndex) {
  const item = getModuleItem(contentIndex);
  const number = contentIndex + 1;
  const descriptor = cell.querySelector('.cell__descriptor');
  const numberEl = cell.querySelector('.cell__number');
  const module = cell.querySelector('.cell__module');
  if (!descriptor || !numberEl || !module) return;

  const body = ensureModuleBody(module);

  const title = item.title.trim() || 'Placeholder';
  descriptor.textContent = title;
  numberEl.textContent = padNumber(number);
  module.setAttribute('aria-label', `${title} ${padNumber(number)}`);

  let img = body.querySelector('img');
  if (item.image) {
    if (!img) {
      img = document.createElement('img');
      img.alt = '';
      img.decoding = 'async';
      body.appendChild(img);
    }
    if (img.src !== item.image) img.src = item.image;
    module.dataset.imageQuality = 'thumb';
    module.dataset.contentIndex = String(contentIndex);
    if (item.imageWidth > 0) module.dataset.imageWidth = String(item.imageWidth);
    else module.removeAttribute('data-image-width');
    if (item.imageHeight > 0) module.dataset.imageHeight = String(item.imageHeight);
    else module.removeAttribute('data-image-height');
    clearModuleHoverRestSize(module);
    module.classList.add('cell__module--has-image');
    const syncRestSize = () => {
      clearModuleHoverRestSize(module);
      if (module.classList.contains('cell__module--hover-scale')) {
        captureModuleHoverRestSize(module);
      }
    };
    const syncLayout = () => {
      syncRestSize();
      measureCycleHeight({ preserveScroll: true });
      applyScrollBounds();
      if (state.showGuides) drawGuides();
    };
    img.addEventListener('load', syncLayout, { once: true });
    if (img.complete) syncRestSize();
  } else {
    img?.remove();
    module.removeAttribute('data-content-index');
    module.removeAttribute('data-image-quality');
    module.removeAttribute('data-image-width');
    module.removeAttribute('data-image-height');
    clearModuleHoverRestSize(module);
    module.classList.remove('cell__module--has-image');
  }
}

function syncGridModuleContent() {
  grid.querySelectorAll('.cell').forEach((cell, index) => {
    applyModuleContentToCell(cell, index);
  });
  measureCycleHeight({ preserveScroll: true });
  drawGuides();
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      const maxSide = Math.max(img.width, img.height);
      const scale = maxSide > MODULE_IMAGE_MAX_PX ? MODULE_IMAGE_MAX_PX / maxSide : 1;
      const width = Math.max(1, Math.round(img.width * scale));
      const height = Math.max(1, Math.round(img.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const dataUrl = canvas.toDataURL('image/jpeg', MODULE_IMAGE_JPEG_QUALITY);
      resolve({
        src: dataUrl,
        width: img.width,
        height: img.height,
        thumbWidth: width,
        thumbHeight: height,
      });
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('read-failed'));
    };

    img.src = objectUrl;
  });
}

async function readImageFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    throw new Error('unsupported');
  }

  if (file.size > MAX_MODULE_IMAGE_BYTES) {
    throw new Error('too-large');
  }

  const [imageOriginal, thumbnail] = await Promise.all([
    readFileAsDataURL(file),
    compressImageFile(file),
  ]);

  return {
    image: thumbnail.src,
    imageOriginal,
    imageWidth: thumbnail.width,
    imageHeight: thumbnail.height,
  };
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('read-failed'));
    reader.readAsDataURL(file);
  });
}

function isModuleEmpty(item) {
  if (item.image) return false;
  const title = (item.title || '').trim();
  return !title || title.toLowerCase() === 'placeholder';
}

function deleteModuleItem(id) {
  if (moduleContent.items.length <= 1) return;

  const index = moduleContent.items.findIndex((item) => item.id === id);
  if (index < 0 || !isModuleEmpty(moduleContent.items[index])) return;

  moduleContent.items.splice(index, 1);
  saveModuleContent();
  renderModuleList();
  buildGrid();
  updateModuleStat();
  render();
}


function renderModuleList() {
  moduleList.innerHTML = '';

  moduleContent.items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'module-list__item';
    li.draggable = true;
    li.dataset.id = item.id;

    const drag = document.createElement('span');
    drag.className = 'module-list__drag';
    drag.textContent = '⋮⋮';
    drag.setAttribute('aria-hidden', 'true');

    const num = document.createElement('span');
    num.className = 'module-list__num';
    num.textContent = padNumber(index + 1);

    const title = document.createElement('input');
    title.type = 'text';
    title.className = 'module-list__title';
    title.value = item.title;
    title.maxLength = 80;
    title.setAttribute('aria-label', panelT('module.titleNamed', { n: padNumber(index + 1) }));
    title.addEventListener('change', () => {
      item.title = title.value.trim() || 'Placeholder';
      title.value = item.title;
      saveModuleContent();
      syncGridModuleContent();
      renderModuleList();
    });

    const upload = document.createElement('label');
    upload.className = 'module-list__upload';
    upload.title = panelT('module.upload');

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.hidden = true;
    fileInput.addEventListener('change', async () => {
      const file = fileInput.files?.[0];
      fileInput.value = '';
      if (!file) return;

      const prevImage = item.image;
      const prevOriginal = item.imageOriginal;

      try {
        const imageData = await readImageFile(file);
        item.image = imageData.image;
        item.imageOriginal = imageData.imageOriginal;
        item.imageWidth = imageData.imageWidth;
        item.imageHeight = imageData.imageHeight;
        await saveModuleContent();
        renderModuleList();
        syncGridModuleContent();
      } catch (error) {
        item.image = prevImage;
        item.imageOriginal = prevOriginal;
        if (error.message === 'too-large') {
          window.alert(panelT('module.imageTooLarge'));
        }
      }
    });

    if (item.image) {
      const thumb = document.createElement('img');
      thumb.src = item.image;
      thumb.alt = '';
      upload.appendChild(thumb);
    } else {
      const placeholder = document.createElement('span');
      placeholder.className = 'module-list__upload-placeholder';
      placeholder.textContent = 'IMG';
      upload.appendChild(placeholder);
    }

    upload.appendChild(fileInput);

    const clearBtn = document.createElement('button');
    clearBtn.type = 'button';
    clearBtn.className = 'module-list__clear';
    clearBtn.textContent = '×';
    clearBtn.title = panelT('module.clearImage');
    clearBtn.disabled = !item.image;
    clearBtn.addEventListener('click', () => {
      item.image = null;
      item.imageOriginal = null;
      item.imageWidth = 0;
      item.imageHeight = 0;
      saveModuleContent();
      renderModuleList();
      syncGridModuleContent();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'module-list__delete';
    deleteBtn.textContent = '−';
    deleteBtn.title = panelT('module.deleteEmpty');
    deleteBtn.disabled = !isModuleEmpty(item) || moduleContent.items.length <= 1;
    deleteBtn.addEventListener('click', () => {
      deleteModuleItem(item.id);
    });

    li.append(drag, num, title, upload, clearBtn, deleteBtn);
    moduleList.appendChild(li);
  });
}

function reorderModuleItems(fromId, toId) {
  if (fromId === toId) return;

  const fromIndex = moduleContent.items.findIndex((item) => item.id === fromId);
  const toIndex = moduleContent.items.findIndex((item) => item.id === toId);
  if (fromIndex < 0 || toIndex < 0) return;

  const [moved] = moduleContent.items.splice(fromIndex, 1);
  moduleContent.items.splice(toIndex, 0, moved);
  saveModuleContent();
  renderModuleList();
  syncGridModuleContent();
  updateModuleStat();
}

function setPanelTab(tabName) {
  const isModules = tabName === 'modules';

  devPanelTabs.forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  panelViewParams.hidden = isModules;
  panelViewModules.hidden = !isModules;
  sessionStorage.setItem(PANEL_TAB_KEY, tabName);
}

function bindModuleContentPanel() {
  devPanelTabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      event.stopPropagation();
      setPanelTab(tab.dataset.tab);
    });
  });

  moduleImageFitCover.addEventListener('change', () => {
    if (!moduleImageFitCover.checked) return;
    moduleContent.imageFit = 'cover';
    saveModuleContent();
    applyModuleImageFit();
    syncGridModuleContent();
  });

  moduleImageFitWidth.addEventListener('change', () => {
    if (!moduleImageFitWidth.checked) return;
    moduleContent.imageFit = 'width';
    saveModuleContent();
    applyModuleImageFit();
    syncGridModuleContent();
  });

  moduleAddBtn.addEventListener('click', () => {
    moduleContent.items.push(createDefaultModuleItem());
    saveModuleContent();
    renderModuleList();
    buildGrid();
    updateModuleStat();
    render();
  });

  moduleList.addEventListener('dragstart', (event) => {
    const item = event.target.closest('.module-list__item');
    if (!item || event.target.closest('input, button, label')) {
      event.preventDefault();
      return;
    }

    dragModuleId = item.dataset.id;
    item.classList.add('is-dragging');
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', dragModuleId);
  });

  moduleList.addEventListener('dragend', () => {
    dragModuleId = null;
    moduleList.querySelectorAll('.module-list__item').forEach((item) => {
      item.classList.remove('is-dragging', 'is-drag-over');
    });
  });

  moduleList.addEventListener('dragover', (event) => {
    event.preventDefault();
    const item = event.target.closest('.module-list__item');
    moduleList.querySelectorAll('.module-list__item').forEach((entry) => {
      entry.classList.toggle('is-drag-over', entry === item);
    });
  });

  moduleList.addEventListener('drop', (event) => {
    event.preventDefault();
    const item = event.target.closest('.module-list__item');
    if (!item || !dragModuleId) return;
    reorderModuleItems(dragModuleId, item.dataset.id);
  });

  moduleImageFitCover.checked = moduleContent.imageFit === 'cover';
  moduleImageFitWidth.checked = moduleContent.imageFit === 'width';
  renderModuleList();
  setPanelTab(sessionStorage.getItem(PANEL_TAB_KEY) === 'modules' ? 'modules' : 'params');
}

function padNumber(n) {
  return String(n).padStart(3, '0');
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function calcColGap(innerWidth, columns, moduleSize) {
  if (columns <= 1) return 0;
  const modulesWidth = columns * moduleSize;
  const gap = (innerWidth - modulesWidth) / (columns - 1);
  return Math.max(0, gap);
}

function getLayoutInnerWidth() {
  const canvasStyle = getComputedStyle(canvas);
  const paddingLeft = parseFloat(canvasStyle.paddingLeft) || 0;
  const paddingRight = parseFloat(canvasStyle.paddingRight) || 0;
  const fromCanvas = Math.max(0, canvas.clientWidth - paddingLeft - paddingRight);
  const fromGrid = grid?.clientWidth > 0 ? grid.clientWidth : 0;
  const fromWindow = Math.max(0, window.innerWidth - paddingLeft - paddingRight);

  return fromGrid || fromCanvas || fromWindow;
}

function getMaxColumnsForWidth(innerWidth, moduleSize, minGap = 0) {
  if (moduleSize <= 0 || innerWidth <= 0) return 1;
  return Math.max(1, Math.floor((innerWidth + minGap) / (moduleSize + minGap)));
}

function getActiveColumns() {
  if (!state.responsiveColumns) return state.columns;

  const minGap = state.responsiveColGap;
  const innerWidth = getLayoutInnerWidth();
  let columns = Math.min(state.columns, getMaxColumnsForWidth(innerWidth, state.moduleSize, minGap));

  while (columns > 1 && calcColGap(innerWidth, columns, state.moduleSize) < minGap) {
    columns -= 1;
  }

  return Math.max(1, columns);
}

function syncLayoutColumns() {
  const nextColumns = getActiveColumns();
  if (nextColumns === layoutColumns) return false;

  layoutColumns = nextColumns;
  buildGrid();
  resetColScrollLag();
  return true;
}

function createCubicBezier(x1, y1, x2, y2) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;

  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;
  const sampleDerivX = (t) => (3 * ax * t + 2 * bx) * t + cx;

  const getTForX = (x) => {
    let t = x;
    for (let i = 0; i < 8; i += 1) {
      const slope = sampleDerivX(t);
      if (Math.abs(slope) < 1e-6) break;
      t -= (sampleX(t) - x) / slope;
    }
    return clamp(t, 0, 1);
  };

  return (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return sampleY(getTForX(t));
  };
}

function measureCycleHeight(options = {}) {
  const { preserveScroll = false } = options;

  if (!grid) {
    cycleHeight = 0;
    return false;
  }

  const moduleCount = getModuleCount();
  let nextHeight = 0;

  if (state.infiniteScroll && moduleCount > 0) {
    const seamCell = grid.children[moduleCount];
    if (seamCell) {
      nextHeight = seamCell.offsetTop;
    }
  }

  if (nextHeight <= 0) {
    const cells = grid.querySelectorAll('.cell');
    let maxBottom = 0;
    for (let i = 0; i < cells.length; i += 1) {
      const cell = cells[i];
      maxBottom = Math.max(maxBottom, cell.offsetTop + cell.offsetHeight);
    }
    nextHeight = maxBottom;
  }

  nextHeight = Math.max(0, Math.round(nextHeight));
  const prevHeight = cycleHeight;

  if (
    preserveScroll
    && state.infiniteScroll
    && prevHeight > 0
    && nextHeight > 0
    && prevHeight !== nextHeight
  ) {
    wrapScrollPosition();
    const ratio = nextHeight / prevHeight;
    scroll.y *= ratio;

    for (let i = 0; i < colScrollLag.length; i += 1) {
      colScrollLag[i] *= ratio;
      colScaleLag[i] *= ratio;
      colBlurLag[i] *= ratio;
    }

    cycleHeight = nextHeight;
    wrapScrollPosition();
    return true;
  }

  cycleHeight = nextHeight;
  return prevHeight !== nextHeight;
}

function shiftScrollLag(delta) {
  for (let i = 0; i < colScrollLag.length; i += 1) {
    colScrollLag[i] += delta;
    colScaleLag[i] += delta;
    colBlurLag[i] += delta;
  }
}

function wrapScrollPosition() {
  if (!state.infiniteScroll || cycleHeight <= 0) return;

  let totalDelta = 0;

  while (scroll.y >= cycleHeight) {
    scroll.y -= cycleHeight;
    totalDelta -= cycleHeight;
  }

  while (scroll.y < 0) {
    scroll.y += cycleHeight;
    totalDelta += cycleHeight;
  }

  if (totalDelta !== 0) {
    shiftScrollLag(totalDelta);
  }
}

function getCanvasViewportHeight() {
  const style = getComputedStyle(canvas);
  const paddingTop = parseFloat(style.paddingTop) || 0;
  const paddingBottom = parseFloat(style.paddingBottom) || 0;
  return Math.max(0, canvas.clientHeight - paddingTop - paddingBottom);
}

function getScrollMax() {
  return Math.max(0, cycleHeight - getCanvasViewportHeight());
}

function clampScrollPosition() {
  const max = getScrollMax();
  scroll.y = clamp(scroll.y, 0, max);

  if (scroll.y <= 0 || scroll.y >= max) {
    scroll.vel = 0;
  }
}

function applyScrollBounds() {
  if (state.infiniteScroll) {
    wrapScrollPosition();
    return;
  }

  clampScrollPosition();
}

function getActiveModuleCount() {
  return state.infiniteScroll ? getModuleCount() * 2 : getModuleCount();
}

function updateModuleStat() {
  const count = getModuleCount();
  modulesStat.textContent = state.infiniteScroll ? `${count} × 2` : String(count);
}

function measureScrollLimits() {
  applyScrollBounds();
}

function applyScrollTransform() {
  const y = scroll.y;
  const translateY = introActive ? y : -y;
  const transform = Math.abs(translateY) < 0.001
    ? ''
    : `translate3d(0, ${translateY}px, 0)`;
  gridCycle.style.transform = transform;
  guides.style.transform = transform;
}

function createCell(slotIndex) {
  const contentIndex = (slotIndex - 1) % getModuleCount();
  const cell = document.createElement('article');
  cell.className = 'cell';
  cell.dataset.col = (slotIndex - 1) % getActiveColumns();

  cell.innerHTML = `
    <div class="cell__caption">
      <div class="cell__descriptor">Placeholder</div>
      <div class="cell__number">${padNumber(contentIndex + 1)}</div>
    </div>
    <div class="cell__module" role="img" aria-label="Placeholder">
      <div class="cell__module-body"></div>
    </div>
  `;

  applyModuleContentToCell(cell, contentIndex);
  return cell;
}

function buildGrid() {
  grid.innerHTML = '';

  for (let i = 1; i <= getActiveModuleCount(); i += 1) {
    grid.appendChild(createCell(i));
  }

  applyModuleImageFit();
  clearModuleHover(true);
  measureCycleHeight();
}

function getCanvasInnerWidth() {
  return getLayoutInnerWidth();
}

function setModuleScrollScale(module, scale) {
  if (scale < 0.999) {
    module.style.setProperty('--module-scroll-scale', String(scale));
  } else {
    module.style.removeProperty('--module-scroll-scale');
  }
}

function setCellScrollBlur(cell, module, blurPx) {
  const blurValue = `${blurPx.toFixed(2)}px`;

  if (state.scrollBlurCell && blurPx > 0.05) {
    cell.style.setProperty('--module-scroll-blur', blurValue);
  } else {
    cell.style.removeProperty('--module-scroll-blur');
  }

  if (module) {
    if (state.scrollBlurModule && blurPx > 0.05) {
      module.style.setProperty('--module-scroll-module-blur', blurValue);
    } else {
      module.style.removeProperty('--module-scroll-module-blur');
    }
  }
}

function clearCellScrollBlur(cell, module) {
  cell.style.removeProperty('--module-scroll-blur');
  if (module) module.style.removeProperty('--module-scroll-module-blur');
}

function getModuleHoverEase() {
  const [x1, y1, x2, y2] = state.moduleHoverCurve;
  return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
}

function applyVariables() {
  document.documentElement.style.setProperty('--site-bg', state.backgroundColor);
  document.documentElement.style.setProperty('--text', state.textColor);

  const columns = getActiveColumns();
  const colGap = calcColGap(getLayoutInnerWidth(), columns, state.moduleSize);

  document.documentElement.style.setProperty('--columns', String(columns));
  grid.style.gridTemplateColumns = `repeat(${columns}, var(--module-size))`;
  document.documentElement.style.setProperty('--module-size', `${state.moduleSize}px`);
  document.documentElement.style.setProperty('--col-gap', `${colGap}px`);
  document.documentElement.style.setProperty('--row-gap', `${state.rowGap}px`);
  document.documentElement.style.setProperty('--caption-size', `${state.captionSize}px`);
  document.documentElement.style.setProperty('--module-hover-scale', state.moduleHoverScale / 100);
  const hoverDuration = state.moduleHoverAnimate ? state.moduleHoverDuration : 0;
  document.documentElement.style.setProperty('--module-hover-duration', `${hoverDuration}ms`);
  document.documentElement.style.setProperty('--module-hover-ease', getModuleHoverEase());
  document.documentElement.style.setProperty('--module-hover-dim-scale', state.moduleHoverDimScale / 100);
  grid.classList.toggle('grid--module-hover', state.moduleHover);
  grid.classList.toggle('grid--module-hover-parallax', state.moduleHover && state.moduleHoverParallax);

  const colLabel = state.responsiveColumns && columns < state.columns
    ? `${columns}/${state.columns}`
    : String(columns);
  colGapStat.textContent = `${colGap.toFixed(1)} px · ${colLabel} ${panelT('stats.colSuffix')}`;
}

function getCellChebyshevDistance(indexA, indexB) {
  const columns = getActiveColumns();
  const colA = indexA % columns;
  const rowA = Math.floor(indexA / columns);
  const colB = indexB % columns;
  const rowB = Math.floor(indexB / columns);
  return Math.max(Math.abs(rowA - rowB), Math.abs(colA - colB));
}

function getCascadeHoverFactor(distance) {
  const maxScale = state.moduleHoverScale / 100;
  const minScale = state.moduleHoverCascadeMin / 100;

  if (distance <= 0) return maxScale;

  const radius = Math.max(1, state.moduleHoverCascadeRadius);
  const sharpness = state.moduleHoverCascadeSharpness / 100;
  const t = Math.min(1, distance / radius);
  const eased = t ** (0.45 + sharpness * 1.55);

  return maxScale + (minScale - maxScale) * eased;
}

function distanceToRect(px, py, rect) {
  const cx = Math.min(Math.max(px, rect.left), rect.right);
  const cy = Math.min(Math.max(py, rect.top), rect.bottom);
  return Math.hypot(px - cx, py - cy);
}

function easeProximityStrength(t, smoothness) {
  const s = clamp(smoothness, 0, 100) / 100;
  const linear = t;
  const smoothstep = t * t * (3 - 2 * t);
  const soft = t * t * t * t;

  if (s <= 0) return linear;
  if (s >= 1) return soft;
  if (s <= 0.5) return linear + (smoothstep - linear) * (s / 0.5);
  return smoothstep + (soft - smoothstep) * ((s - 0.5) / 0.5);
}

function isPointInsideRect(x, y, rect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function getModuleParallaxShift(clientX, clientY, module) {
  const rect = module.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const nx = clamp((clientX - cx) / Math.max(rect.width / 2, 1), -1, 1);
  const ny = clamp((clientY - cy) / Math.max(rect.height / 2, 1), -1, 1);
  const amount = state.moduleHoverParallaxAmount;

  return {
    x: nx * amount,
    y: ny * amount,
    onModule: isPointInsideRect(clientX, clientY, rect),
  };
}

function getModuleHoverAnim(module) {
  let anim = moduleHoverAnimByModule.get(module);
  if (!anim) {
    anim = { factor: 1, blur: 0, moduleBlur: 0, shiftX: 0, shiftY: 0 };
    moduleHoverAnimByModule.set(module, anim);
  }
  return anim;
}

function getModuleHoverTarget(module) {
  return moduleHoverTargetByModule.get(module) ?? MODULE_HOVER_REST;
}

function getHoverAnimationAlpha(dt) {
  if (!state.moduleHoverAnimate || state.moduleHoverDuration <= 0) return 1;

  const tau = Math.max(16, state.moduleHoverDuration / 3.5);
  return 1 - Math.exp(-dt / tau);
}

function lerpHoverValue(current, target, alpha) {
  return current + (target - current) * alpha;
}

function getModuleImageAspect(module, body) {
  const img = body?.querySelector('img');
  const imageWidth = Number(module.dataset.imageWidth) || img?.naturalWidth || 0;
  const imageHeight = Number(module.dataset.imageHeight) || img?.naturalHeight || 0;
  if (imageWidth <= 0 || imageHeight <= 0) return null;
  return { width: imageWidth, height: imageHeight };
}

function captureModuleHoverRestSize(module) {
  const body = module.querySelector('.cell__module-body');
  if (!body || module.dataset.restBodyMeasured === '1') return;

  const moduleWidth = module.offsetWidth
    || parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--module-size'))
    || state.moduleSize;

  const aspect = getModuleImageAspect(module, body);
  let width;
  let height;

  if (aspect) {
    width = moduleWidth;
    height = (moduleWidth * aspect.height) / aspect.width;
  } else {
    width = body.offsetWidth;
    height = body.offsetHeight;
  }

  if (width <= 0 || height <= 0) return;

  module.style.setProperty('--module-hover-rest-w', `${width}px`);
  module.style.setProperty('--module-hover-rest-h', `${height}px`);
  module.dataset.restBodyMeasured = '1';
}

function clearModuleHoverRestSize(module) {
  module.dataset.restBodyMeasured = '';
  module.style.removeProperty('--module-hover-rest-w');
  module.style.removeProperty('--module-hover-rest-h');
}

function getEdgeMarginPx() {
  return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--edge-margin')) || 10;
}

function getModuleEdgeAnchor(module, scaleFactor) {
  const edge = getEdgeMarginPx();
  const rect = module.getBoundingClientRect();
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;
  const scale = Math.max(1, scaleFactor);

  captureModuleHoverRestSize(module);

  const moduleStyle = getComputedStyle(module);
  const restW = parseFloat(moduleStyle.getPropertyValue('--module-hover-rest-w')) || rect.width;
  const restH = parseFloat(moduleStyle.getPropertyValue('--module-hover-rest-h')) || rect.height;
  const scaledW = restW * scale;
  const scaledH = restH * scale;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const scaledLeft = centerX - scaledW / 2;
  const scaledRight = centerX + scaledW / 2;
  const scaledTop = centerY - scaledH / 2;
  const scaledBottom = centerY + scaledH / 2;

  const overflowLeft = edge - scaledLeft;
  const overflowRight = scaledRight - (viewportW - edge);
  const overflowTop = edge - scaledTop;
  const overflowBottom = scaledBottom - (viewportH - edge);

  let anchorX = 'center';
  let anchorY = 'center';
  let offsetX = 0;
  let offsetY = 0;

  if (overflowLeft > 0 && overflowLeft >= overflowRight) {
    anchorX = 'left';
    offsetX = edge - rect.left;
  } else if (overflowRight > 0) {
    anchorX = 'right';
    offsetX = viewportW - edge - rect.right;
  }

  if (overflowTop > 0 && overflowTop >= overflowBottom) {
    anchorY = 'top';
    offsetY = edge - rect.top;
  } else if (overflowBottom > 0) {
    anchorY = 'bottom';
    offsetY = viewportH - edge - rect.bottom;
  }

  return { anchorX, anchorY, offsetX, offsetY };
}

function applyModuleBodyInset(body, anchorX, anchorY, offsetX, offsetY) {
  body.style.left = '';
  body.style.right = '';
  body.style.top = '';
  body.style.bottom = '';

  if (anchorX === 'left') {
    body.style.left = '0';
  } else if (anchorX === 'right') {
    body.style.right = '0';
  } else {
    body.style.left = '50%';
  }

  if (anchorY === 'top') {
    body.style.top = '0';
  } else if (anchorY === 'bottom') {
    body.style.bottom = '0';
  } else {
    body.style.top = '50%';
  }

  const translateX = anchorX === 'center'
    ? `calc(-50% + ${offsetX}px)`
    : `${offsetX}px`;
  const translateY = anchorY === 'center'
    ? `calc(-50% + ${offsetY}px)`
    : `${offsetY}px`;

  body.style.setProperty('--module-body-translate-x', translateX);
  body.style.setProperty('--module-body-translate-y', translateY);
}

function clearModuleBodyInset(body) {
  body.style.left = '';
  body.style.right = '';
  body.style.top = '';
  body.style.bottom = '';
  body.style.removeProperty('--module-body-translate-x');
  body.style.removeProperty('--module-body-translate-y');
}

function applyModuleBodyAnchor(module, cellIndex, factor) {
  const body = module.querySelector('.cell__module-body');
  if (!body) return;

  const isScaled = factor > 1.001;

  if (isScaled) {
    captureModuleHoverRestSize(module);
    module.classList.add('cell__module--hover-scale');

    const { anchorX, anchorY, offsetX, offsetY } = getModuleEdgeAnchor(module, factor);
    applyModuleBodyInset(body, anchorX, anchorY, offsetX, offsetY);
    return;
  }

  module.classList.remove('cell__module--hover-scale');
  clearModuleHoverRestSize(module);
  clearModuleBodyInset(body);
}

function applyModuleHoverVisuals(module, cell, cellIndex, anim, target) {
  if (target.isFocused) {
    anim.blur = 0;
    anim.moduleBlur = 0;
    clearFocusedModuleBlur(cell, module);
    cell.classList.add('cell--hover-sharp');
  } else {
    cell.classList.remove('cell--hover-sharp');
    cell.style.setProperty('--module-hover-blur', `${anim.blur.toFixed(2)}px`);
    module.style.setProperty('--module-hover-module-blur', `${anim.moduleBlur.toFixed(2)}px`);
  }

  module.style.setProperty('--module-hover-factor', anim.factor.toFixed(4));
  module.style.setProperty('--module-hover-shift-x', `${anim.shiftX.toFixed(2)}px`);
  module.style.setProperty('--module-hover-shift-y', `${anim.shiftY.toFixed(2)}px`);
  applyModuleBodyAnchor(module, cellIndex, anim.factor);

  const raised = target.isPrimary && anim.factor > 1.001;

  if (target.cellZIndex) {
    cell.style.zIndex = target.cellZIndex;
  } else {
    cell.style.removeProperty('z-index');
  }

  if (target.isPrimary && anim.factor > 1.001) {
    module.style.zIndex = '1001';
  } else if (raised) {
    module.style.zIndex = '30';
  } else if (target.zIndex) {
    module.style.zIndex = target.zIndex;
  } else {
    module.style.removeProperty('z-index');
  }

  cell.classList.toggle('cell--hover-focus', target.isHoverCell);
  cell.classList.toggle('cell--hover-above-caption', raised && target.aboveCaption);

  const contentIndex = Number(module.dataset.contentIndex);
  if (Number.isFinite(contentIndex)) {
    const item = getModuleItem(contentIndex);
    setModuleImageSrc(module, item, target.useOriginal || anim.factor > 1.001);
  }
}

function updateModuleHoverCursorState() {
  if (!state.moduleHover || !state.moduleHoverParallax) {
    stand.classList.remove('stand--hide-cursor');
    return;
  }

  let hideCursor = false;
  grid.querySelectorAll('.cell__module').forEach((module) => {
    if (getModuleHoverTarget(module).onModule) hideCursor = true;
  });
  stand.classList.toggle('stand--hide-cursor', hideCursor);
}

function updateModuleHoverAnimation(dt) {
  if (!state.moduleHover) return;

  const alpha = getHoverAnimationAlpha(dt);

  grid.querySelectorAll('.cell').forEach((cell, index) => {
    const module = cell.querySelector('.cell__module');
    if (!module) return;

    const target = getModuleHoverTarget(module);
    const anim = getModuleHoverAnim(module);

    anim.factor = lerpHoverValue(anim.factor, target.factor, alpha);
    if (target.isFocused) {
      anim.blur = 0;
      anim.moduleBlur = 0;
    } else {
      anim.blur = lerpHoverValue(anim.blur, target.blur, alpha);
      anim.moduleBlur = lerpHoverValue(anim.moduleBlur, target.moduleBlur, alpha);
    }
    anim.shiftX = lerpHoverValue(anim.shiftX, target.shiftX, alpha);
    anim.shiftY = lerpHoverValue(anim.shiftY, target.shiftY, alpha);

    applyModuleHoverVisuals(module, cell, index, anim, target);
  });

  updateModuleHoverCursorState();
}

function resetModuleHoverVisuals(immediate = true) {
  grid.querySelectorAll('.cell').forEach((cell, index) => {
    const module = cell.querySelector('.cell__module');
    if (!module) return;

    moduleHoverTargetByModule.set(module, MODULE_HOVER_REST);

    if (!immediate) return;

    const anim = getModuleHoverAnim(module);
    anim.factor = 1;
    anim.blur = 0;
    anim.moduleBlur = 0;
    anim.shiftX = 0;
    anim.shiftY = 0;
    clearModuleHoverRestSize(module);
    module.classList.remove('cell__module--hover-scale');
    applyModuleHoverVisuals(module, cell, index, anim, MODULE_HOVER_REST);

    const contentIndex = Number(module.dataset.contentIndex ?? index % getModuleCount());
    setModuleImageSrc(module, getModuleItem(contentIndex), false);
  });
}

function getProximityStrength(distance) {
  if (!state.moduleHoverZoneEnabled) {
    return distance <= 0 ? 1 : 0;
  }

  const zone = Math.max(1, state.moduleHoverZone);
  if (distance >= zone) return 0;

  const t = 1 - distance / zone;
  return easeProximityStrength(t, state.moduleHoverZoneSmoothness);
}

function applyModuleHover(clientX, clientY) {
  if (!state.moduleHover) return;

  lastHoverPointer = { x: clientX, y: clientY };

  const cells = grid.querySelectorAll('.cell');
  const maxScale = state.moduleHoverScale / 100;
  const dimScale = state.moduleHoverDimScale / 100;
  const blurAmount = state.moduleHoverBlurAmount;
  const metrics = [];

  cells.forEach((cell, index) => {
    const module = cell.querySelector('.cell__module');
    if (!module) return;

    const rect = cell.getBoundingClientRect();
    const dist = distanceToRect(clientX, clientY, rect);
    const proximity = getProximityStrength(dist);
    metrics.push({ cell, module, index, proximity });
  });

  if (metrics.length === 0) return;

  let originIndex = 0;
  let originProximity = 0;

  metrics.forEach(({ index, proximity }) => {
    if (proximity > originProximity) {
      originProximity = proximity;
      originIndex = index;
    }
  });

  const active = originProximity > 0.001;

  metrics.forEach(({ cell, module, index, proximity }) => {
    let factor = 1;

    if (state.moduleHoverCascade && active) {
      const gridDist = getCellChebyshevDistance(originIndex, index);
      const cascadeScale = getCascadeHoverFactor(gridDist);
      factor = 1 + (cascadeScale - 1) * originProximity;
    } else if (state.moduleHoverDimOthers && active) {
      if (proximity > 0) {
        factor = 1 + (maxScale - 1) * proximity;
      } else {
        factor = 1 + (dimScale - 1) * originProximity;
      }
    } else if (active) {
      factor = 1 + (maxScale - 1) * proximity;
    }

    const contentIndex = index % getModuleCount();
    const item = getModuleItem(contentIndex);
    const onModule = isPointInsideRect(clientX, clientY, module.getBoundingClientRect());
    const parallax = state.moduleHoverParallax && item.image && onModule
      ? getModuleParallaxShift(clientX, clientY, module)
      : { x: 0, y: 0, onModule: false };
    const isHoverSubject = proximity > 0.001 || index === originIndex;

    moduleHoverTargetByModule.set(module, {
      factor: Math.abs(factor - 1) > 0.0005 ? factor : 1,
      blur: state.moduleHoverBlurOthers && active && blurAmount > 0 && !isHoverSubject
        ? blurAmount * originProximity
        : 0,
      moduleBlur: state.moduleHoverBlurModule && active && blurAmount > 0 && !isHoverSubject
        ? blurAmount * originProximity
        : 0,
      shiftX: parallax.onModule ? parallax.x : 0,
      shiftY: parallax.onModule ? parallax.y : 0,
      isPrimary: active && index === originIndex,
      cellZIndex: (() => {
        if (!active) return '';
        if (index === originIndex) return '1000';
        if (proximity > 0.001) return String(100 + Math.round(proximity * 99));
        return '';
      })(),
      zIndex: (() => {
        if (state.moduleHoverCascade && active) {
          const gridDist = getCellChebyshevDistance(originIndex, index);
          return String(gridDist === 0 ? 12 : Math.max(1, 10 - gridDist));
        }
        if (Math.abs(factor - 1) > 0.0005 && factor > 1.001) {
          return String(Math.round(factor * 10));
        }
        return '';
      })(),
      isHoverCell: active && (proximity > 0 || Math.abs(factor - 1) > 0.0005),
      aboveCaption: onModule && Boolean(item.image),
      onModule,
      isFocused: isHoverSubject,
      useOriginal: onModule && Boolean(item.image),
    });
  });

  grid.classList.toggle('grid--hover-proximity-active', active);
  updateModuleHoverCursorState();
}

function clearModuleHover(immediate = false) {
  lastHoverPointer = null;
  resetModuleHoverVisuals(immediate);
  stand.classList.remove('stand--hide-cursor');
  grid.classList.remove('grid--hover-proximity-active');
}

function bindModuleHover() {
  stand.addEventListener('pointermove', (event) => {
    if (!state.moduleHover) return;
    applyModuleHover(event.clientX, event.clientY);
  });

  stand.addEventListener('pointerleave', () => {
    clearModuleHover();
  });
}

function getCaptionBlockHeight() {
  const probe = gridCycle.querySelector('.cell__caption');
  if (!probe) return state.captionSize * 2 * 1.35 + 8;
  return probe.getBoundingClientRect().height + 8;
}

function drawGuides() {
  guides.innerHTML = '';

  if (!state.showGuides) {
    guides.classList.remove('is-visible');
    return;
  }

  guides.classList.add('is-visible');

  const canvasRect = canvas.getBoundingClientRect();
  const gridRect = gridCycle.getBoundingClientRect();
  const colGap = calcColGap(getCanvasInnerWidth(), getActiveColumns(), state.moduleSize);
  const moduleSize = state.moduleSize;
  const captionHeight = getCaptionBlockHeight();
  const rowUnit = moduleSize + captionHeight;
  const columns = getActiveColumns();
  const rows = Math.ceil(getModuleCount() / columns);
  const segmentHeight = rows * rowUnit + (rows - 1) * state.rowGap;
  const totalHeight = segmentHeight * (state.infiniteScroll ? 2 : 1);

  guides.setAttribute('width', canvasRect.width);
  guides.setAttribute('height', Math.max(canvasRect.height, totalHeight + EDGE_MARGIN * 2));
  guides.setAttribute('viewBox', `0 0 ${canvasRect.width} ${Math.max(canvasRect.height, totalHeight + EDGE_MARGIN * 2)}`);

  const offsetX = gridRect.left - canvasRect.left;
  const offsetY = gridRect.top - canvasRect.top;

  const addLine = (x1, y1, x2, y2, className) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('class', className);
    guides.appendChild(line);
  };

  const height = Math.max(canvasRect.height, totalHeight + offsetY + EDGE_MARGIN);

  addLine(EDGE_MARGIN, 0, EDGE_MARGIN, height, 'guide--margin');
  addLine(canvasRect.width - EDGE_MARGIN, 0, canvasRect.width - EDGE_MARGIN, height, 'guide--margin');

  for (let c = 0; c <= columns; c += 1) {
    const lineX = c < columns
      ? offsetX + c * (moduleSize + colGap)
      : offsetX + columns * moduleSize + (columns - 1) * colGap;

    addLine(lineX, offsetY, lineX, offsetY + totalHeight, 'guide--col');
  }

  for (let r = 0; r <= rows; r += 1) {
    const y = offsetY + r * (rowUnit + state.rowGap) - (r === rows ? state.rowGap : 0);
    addLine(offsetX, y, offsetX + gridRect.width, y, 'guide--row');
  }

  for (let r = 0; r < rows; r += 1) {
    const moduleBottom = offsetY + r * (rowUnit + state.rowGap) + moduleSize;
    addLine(offsetX, moduleBottom, offsetX + gridRect.width, moduleBottom, 'guide--row');
  }
}

function updateScrollDirectionBlend(dtNorm) {
  if (introActive) {
    cascadeBlend = 1;
    return;
  }

  smoothScrollVel += (scroll.vel - smoothScrollVel) * Math.min(1, 0.18 * dtNorm);

  if (state.scrollReverseUp) {
    let targetCascade = cascadeBlend;

    if (smoothScrollVel > 1.5) {
      targetCascade = 0;
    } else if (smoothScrollVel < -1.5) {
      targetCascade = 1;
    }

    cascadeBlend += (targetCascade - cascadeBlend) * Math.min(1, 0.1 * dtNorm);
  } else {
    cascadeBlend += (0 - cascadeBlend) * Math.min(1, 0.12 * dtNorm);
  }
}

function getScrollSpeedRatio() {
  const velMag = Math.abs(smoothScrollVel);
  return 1 - Math.exp(-velMag / (14 + state.scrollStagger * 0.15));
}

function getColumnCascadeT(col) {
  const columns = getActiveColumns();
  const lastCol = Math.max(1, columns - 1);
  const downT = col / lastCol;
  const upT = (lastCol - col) / lastCol;
  return downT * (1 - cascadeBlend) + upT * cascadeBlend;
}

function updateColScrollLag(dtNorm) {
  const columns = getActiveColumns();
  const staggerScale = state.scrollStagger / 280;
  const leadCatchUp = Math.min(1, (0.32 + staggerScale * 0.05) * dtNorm);
  const lagStep = 0.72 + staggerScale * 0.08;
  const lastCol = columns - 1;
  const cascadeDownWeight = 1 - cascadeBlend;
  const cascadeUpWeight = cascadeBlend;

  for (let c = 0; c < columns; c += 1) {
    const downCatchUp = leadCatchUp * lagStep ** c;
    const upCatchUp = leadCatchUp * lagStep ** (lastCol - c);
    const colCatchUp = Math.min(1, downCatchUp * cascadeDownWeight + upCatchUp * cascadeUpWeight);

    colScrollLag[c] += (scroll.y - colScrollLag[c]) * colCatchUp;
  }

  for (let c = columns; c < colScrollLag.length; c += 1) {
    colScrollLag[c] = scroll.y;
  }
}

function updateColScaleLag(dtNorm) {
  const columns = getActiveColumns();
  const speedScale = state.scrollScaleSpeed / 280;
  const leadCatchUp = Math.min(1, (0.32 + speedScale * 0.05) * dtNorm);
  const lagStep = 0.72 + speedScale * 0.08;
  const lastCol = columns - 1;
  const cascadeDownWeight = 1 - cascadeBlend;
  const cascadeUpWeight = cascadeBlend;

  for (let c = 0; c < columns; c += 1) {
    const downCatchUp = leadCatchUp * lagStep ** c;
    const upCatchUp = leadCatchUp * lagStep ** (lastCol - c);
    const colCatchUp = Math.min(1, downCatchUp * cascadeDownWeight + upCatchUp * cascadeUpWeight);

    colScaleLag[c] += (scroll.y - colScaleLag[c]) * colCatchUp;
  }

  for (let c = columns; c < colScaleLag.length; c += 1) {
    colScaleLag[c] = scroll.y;
  }
}

function updateColBlurLag(dtNorm) {
  const columns = getActiveColumns();
  const speedScale = state.scrollBlurSpeed / 280;
  const leadCatchUp = Math.min(1, (0.32 + speedScale * 0.05) * dtNorm);
  const lagStep = 0.72 + speedScale * 0.08;
  const lastCol = columns - 1;
  const cascadeDownWeight = 1 - cascadeBlend;
  const cascadeUpWeight = cascadeBlend;

  for (let c = 0; c < columns; c += 1) {
    const downCatchUp = leadCatchUp * lagStep ** c;
    const upCatchUp = leadCatchUp * lagStep ** (lastCol - c);
    const colCatchUp = Math.min(1, downCatchUp * cascadeDownWeight + upCatchUp * cascadeUpWeight);

    colBlurLag[c] += (scroll.y - colBlurLag[c]) * colCatchUp;
  }

  for (let c = columns; c < colBlurLag.length; c += 1) {
    colBlurLag[c] = scroll.y;
  }
}

function driftToScale(drift, col) {
  const activity = Math.min(1, Math.abs(drift) / (state.moduleSize * 0.75));
  const baseShrink = (state.scrollScaleAmount / 100) * activity;
  const minRatio = state.scrollScaleRatio / 100;
  const colT = getColumnCascadeT(col);

  return (1 - baseShrink) * (1 - colT * (1 - minRatio));
}

function driftToBlur(drift, col) {
  const activity = Math.min(1, Math.abs(drift) / (state.moduleSize * 0.75));
  const maxBlur = state.scrollBlurAmount * activity;
  const minRatio = state.scrollBlurRatio / 100;
  const colT = getColumnCascadeT(col);

  return maxBlur * (minRatio + colT * (1 - minRatio));
}

function updateScrollColumns(dtNorm = 1) {
  const cells = gridCycle.querySelectorAll('.cell');
  const shiftEnabled = state.scrollEffect;
  const scaleEnabled = state.scrollScaleEffect;
  const scaleCascade = scaleEnabled && state.scrollScaleCascade;
  const blurEnabled = state.scrollBlurEffect && (state.scrollBlurCell || state.scrollBlurModule);
  const blurCascade = blurEnabled && state.scrollBlurCascade;
  const anyEffect = shiftEnabled || scaleEnabled || blurEnabled;

  if (!anyEffect) {
    grid.classList.remove('grid--scroll-cols', 'grid--scroll-scale', 'grid--scroll-blur');
    resetColScrollLag();
    cells.forEach((cell) => {
      cell.style.transform = '';
      const module = cell.querySelector('.cell__module');
      if (module) setModuleScrollScale(module, 1);
      clearCellScrollBlur(cell, module);
    });
    return;
  }

  grid.classList.toggle('grid--scroll-cols', shiftEnabled);
  grid.classList.toggle('grid--scroll-scale', scaleEnabled);
  grid.classList.toggle('grid--scroll-blur', blurEnabled);

  const needsShiftLag = shiftEnabled;
  const needsScaleLag = scaleCascade;
  const needsBlurLag = blurCascade;
  const needsDirectionBlend = needsShiftLag || needsScaleLag || needsBlurLag;

  if (needsDirectionBlend) {
    updateScrollDirectionBlend(dtNorm);
  } else if (scaleEnabled || blurEnabled) {
    smoothScrollVel += (scroll.vel - smoothScrollVel) * Math.min(1, 0.18 * dtNorm);
  }

  if (needsShiftLag) {
    updateColScrollLag(dtNorm);
  } else {
    colScrollLag.fill(scroll.y);
  }

  if (needsScaleLag) {
    updateColScaleLag(dtNorm);
  } else {
    colScaleLag.fill(scroll.y);
  }

  if (needsBlurLag) {
    updateColBlurLag(dtNorm);
  } else {
    colBlurLag.fill(scroll.y);
  }

  const factor = state.scrollIntensity / 100;
  const speedRatio = getScrollSpeedRatio();
  const maxShrink = state.scrollScaleAmount / 100;
  const maxBlur = state.scrollBlurAmount;

  cells.forEach((cell) => {
    const col = Number(cell.dataset.col);
    const module = cell.querySelector('.cell__module');
    const shiftDrift = scroll.y - colScrollLag[col];
    const scaleDrift = scroll.y - colScaleLag[col];
    const blurDrift = scroll.y - colBlurLag[col];

    if (shiftEnabled) {
      const offsetY = shiftDrift * factor;
      cell.style.transform = Math.abs(offsetY) < 0.01 ? '' : `translateY(${offsetY}px)`;
    } else {
      cell.style.transform = '';
    }

    if (scaleEnabled && module) {
      let scale = scaleCascade ? driftToScale(scaleDrift, col) : 1 - maxShrink * speedRatio;

      if (!state.scrollScaleHoldAtRest) {
        scale = 1 + (scale - 1) * speedRatio;
      }

      setModuleScrollScale(module, scale);
    } else if (module) {
      setModuleScrollScale(module, 1);
    }

    if (blurEnabled) {
      const hoverTarget = module ? getModuleHoverTarget(module) : null;
      const isHoverFocused = state.moduleHover && hoverTarget.isFocused;

      if (isHoverFocused) {
        clearCellScrollBlur(cell, module);
      } else {
        let blurPx = blurCascade ? driftToBlur(blurDrift, col) : maxBlur * speedRatio;

        if (!state.scrollBlurHoldAtRest) {
          blurPx *= speedRatio;
        }

        setCellScrollBlur(cell, module, blurPx);
      }
    } else {
      clearCellScrollBlur(cell, module);
    }
  });
}

function syncScrollVisuals(updateGuides = false, dtNorm = 1) {
  applyScrollTransform();
  updateScrollColumns(dtNorm);
  if (updateGuides && state.showGuides) drawGuides();
}

function onWheel(event) {
  if (devPanel.contains(event.target)) return;
  if (introActive) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  clearModuleHover(true);

  const delta = event.deltaY * (state.inertiaSensitivity / 100);
  lastWheelTime = performance.now();
  decelStartTime = 0;

  if (state.inertiaEnabled) {
    scroll.vel += delta * 0.18;
  } else {
    scroll.vel = 0;
    scroll.y += delta;
    applyScrollBounds();
    syncScrollVisuals(true);
  }
}

function getCatalogIntroDistance() {
  measureCycleHeight();
  const viewport = getCanvasViewportHeight();
  const byViewport = viewport * 0.72;
  const byCycle = cycleHeight > 0 ? cycleHeight * 0.28 : byViewport;
  return clamp(byViewport, 240, Math.max(240, Math.min(byViewport, byCycle)));
}

function startCatalogIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  introStartDistance = getCatalogIntroDistance();
  if (introStartDistance <= 0) return;

  introActive = true;
  introStartTime = performance.now();
  scroll.y = introStartDistance;
  scroll.vel = 0;
  smoothScrollVel = -18;
  cascadeBlend = 1;
  clearModuleHover(true);

  const columns = getActiveColumns();
  const lastCol = Math.max(1, columns - 1);
  const cascadeSpread = introStartDistance * (0.18 + state.scrollStagger / 500);
  const staggerStep = cascadeSpread / lastCol;

  for (let c = 0; c < columns; c += 1) {
    const lag = introStartDistance + (lastCol - c) * staggerStep;
    colScrollLag[c] = lag;
    colScaleLag[c] = lag;
    colBlurLag[c] = lag;
  }

  applyScrollTransform();
  updateScrollColumns(1);
}

function updateCatalogIntro(now) {
  const progress = clamp((now - introStartTime) / INTRO_DURATION_MS, 0, 1);
  const eased = introEase(progress);

  scroll.y = introStartDistance * (1 - eased);
  smoothScrollVel = -18 * (1 - progress);

  if (progress >= 1) {
    introActive = false;
    scroll.y = 0;
    scroll.vel = 0;
    smoothScrollVel = 0;
    cascadeBlend = 0;
    resetColScrollLag();
  }
}

function pickHeaderScrambleChar() {
  return HEADER_SCRAMBLE_CHARS[Math.floor(Math.random() * HEADER_SCRAMBLE_CHARS.length)];
}

function stripHeaderHtml(html) {
  return html.replace(/<[^>]*>/g, '');
}

function syncHeaderMeasureEl(referenceEl) {
  if (!headerMeasureEl) {
    headerMeasureEl = document.createElement('span');
    headerMeasureEl.setAttribute('aria-hidden', 'true');
    headerMeasureEl.style.position = 'absolute';
    headerMeasureEl.style.visibility = 'hidden';
    headerMeasureEl.style.pointerEvents = 'none';
    headerMeasureEl.style.whiteSpace = 'pre';
    headerMeasureEl.style.left = '-9999px';
    headerMeasureEl.style.top = '0';
    document.body.appendChild(headerMeasureEl);
  }

  const style = getComputedStyle(referenceEl);
  headerMeasureEl.style.font = style.font;
  headerMeasureEl.style.fontSize = style.fontSize;
  headerMeasureEl.style.fontWeight = style.fontWeight;
  headerMeasureEl.style.fontFamily = style.fontFamily;
  headerMeasureEl.style.letterSpacing = style.letterSpacing;
  headerMeasureEl.style.textTransform = style.textTransform;
}

function measureHeaderLineWidth(referenceEl, text) {
  syncHeaderMeasureEl(referenceEl);
  headerMeasureEl.textContent = text.replace(/ /g, '\u00a0');
  return headerMeasureEl.getBoundingClientRect().width;
}

function measureHeaderLineCharWidths(referenceEl, text) {
  syncHeaderMeasureEl(referenceEl);
  const widths = [];
  let prevWidth = 0;

  for (let i = 0; i < text.length; i += 1) {
    headerMeasureEl.textContent = text.slice(0, i + 1).replace(/ /g, '\u00a0');
    const cumulative = headerMeasureEl.getBoundingClientRect().width;
    widths.push(cumulative - prevWidth);
    prevWidth = cumulative;
  }

  return widths;
}

function wrapHeaderTextNode(container, text, referenceEl, charWidths, startIndex, startTime, elementDelay) {
  let charIndex = startIndex;
  const widths = charWidths.length ? charWidths : measureHeaderLineCharWidths(referenceEl, text);

  for (let i = 0; i < text.length; i += 1) {
    const finalChar = text[i];
    const span = document.createElement('span');
    span.className = 'site-header__char';
    span.setAttribute('aria-hidden', 'true');
    span.style.width = `${widths[i]}px`;

    if (finalChar === ' ') {
      span.textContent = '\u00a0';
      container.appendChild(span);
      charIndex += 1;
      continue;
    }

    span.textContent = pickHeaderScrambleChar();
    headerScrambleItems.push({
      span,
      finalChar,
      revealAt: startTime + elementDelay + charIndex * HEADER_SCRAMBLE_STAGGER_MS
        + Math.random() * HEADER_SCRAMBLE_JITTER_MS,
      lastTick: startTime,
      locked: false,
    });
    container.appendChild(span);
    charIndex += 1;
  }

  return charIndex;
}

function wrapHeaderTextElement(el, startIndex, startTime, elementDelay) {
  const label = el.textContent.replace(/\s+/g, ' ').trim();
  if (label) el.setAttribute('aria-label', label);

  const minHeight = Math.ceil(el.getBoundingClientRect().height);
  const hasBreaks = /<br/i.test(el.innerHTML);
  const lines = (hasBreaks
    ? el.innerHTML.split(/<br\s*\/?>/i).map(stripHeaderHtml)
    : [el.textContent]
  ).map((line) => line.trim()).filter(Boolean);

  el.textContent = '';
  el.style.minHeight = `${minHeight}px`;

  let charIndex = startIndex;

  lines.forEach((line) => {
    const lineEl = document.createElement('span');
    lineEl.className = 'site-header__line';
    lineEl.style.width = `${Math.ceil(measureHeaderLineWidth(el, line))}px`;

    const charWidths = measureHeaderLineCharWidths(el, line);
    charIndex = wrapHeaderTextNode(
      lineEl,
      line,
      el,
      charWidths,
      charIndex,
      startTime,
      elementDelay,
    );
    el.appendChild(lineEl);
  });

  return charIndex;
}

function startHeaderScramble() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  headerScrambleItems.length = 0;
  headerScrambleActive = false;

  const elements = document.querySelectorAll(
    '.site-header__sandbox, .site-header__titles p, .site-header__desc, .site-header__link',
  );
  if (!elements.length) return;

  const startTime = performance.now();
  let charIndex = 0;

  elements.forEach((el, elementIndex) => {
    charIndex = wrapHeaderTextElement(
      el,
      charIndex,
      startTime,
      elementIndex * HEADER_SCRAMBLE_ELEMENT_GAP_MS,
    );
  });

  headerScrambleActive = headerScrambleItems.length > 0;
}

function updateHeaderScramble(now) {
  if (!headerScrambleActive) return;

  let allDone = true;

  headerScrambleItems.forEach((item) => {
    if (item.locked) return;

    allDone = false;

    if (now >= item.revealAt) {
      item.span.textContent = item.finalChar;
      item.locked = true;
      return;
    }

    if (now - item.lastTick >= HEADER_SCRAMBLE_TICK_MS) {
      item.span.textContent = pickHeaderScrambleChar();
      item.lastTick = now;
    }
  });

  if (allDone) headerScrambleActive = false;
}

function clearHeaderIntroBlockStyles(el) {
  el.style.filter = '';
  el.style.opacity = '';
  el.style.transform = '';
}

function startHeaderIntroBlur() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  headerIntroBlocks.length = 0;
  headerIntroActive = false;

  const selectors = [
    '.site-header__left',
    '.site-header__logo-wrap',
    '.site-header__right',
  ];

  selectors.forEach((selector) => {
    const el = document.querySelector(selector);
    if (!el) return;

    el.style.filter = `blur(${HEADER_INTRO_BLUR_PX}px)`;
    el.style.opacity = '0';
    el.style.transform = `translateY(${HEADER_INTRO_OFFSET_Y}px)`;
    headerIntroBlocks.push(el);
  });

  if (!headerIntroBlocks.length) return;

  headerIntroActive = true;
  headerIntroStartTime = performance.now();
}

function updateHeaderIntroBlur(now) {
  if (!headerIntroActive) return;

  let allDone = true;

  headerIntroBlocks.forEach((el, index) => {
    const delay = index * HEADER_INTRO_STAGGER_MS;
    const progress = clamp((now - headerIntroStartTime - delay) / HEADER_INTRO_DURATION_MS, 0, 1);

    if (progress < 1) allDone = false;

    const eased = introEase(progress);
    const blur = HEADER_INTRO_BLUR_PX * (1 - eased);
    const opacity = eased;
    const offsetY = HEADER_INTRO_OFFSET_Y * (1 - eased);

    if (progress >= 1) {
      clearHeaderIntroBlockStyles(el);
      return;
    }

    el.style.filter = blur < 0.05 ? 'none' : `blur(${blur.toFixed(2)}px)`;
    el.style.opacity = String(opacity);
    el.style.transform = offsetY < 0.05 ? '' : `translateY(${offsetY.toFixed(2)}px)`;
  });

  if (allDone) {
    headerIntroActive = false;
    headerIntroBlocks.length = 0;
  }
}

function applyInertiaStep(dt, now) {
  if (!state.inertiaEnabled) return;

  const dtNorm = dt / 16.667;
  scroll.y += scroll.vel * dtNorm;

  const idleMs = now - lastWheelTime;

  if (idleMs > 50 && Math.abs(scroll.vel) > 0.05) {
    if (!decelStartTime) decelStartTime = now;

    const progress = clamp((now - decelStartTime) / state.inertiaDuration, 0, 1);
    const [x1, y1, x2, y2] = state.inertiaCurve;
    const ease = createCubicBezier(x1, y1, x2, y2)(progress);
    const friction = 0.975 - ease * 0.095;
    scroll.vel *= friction ** dtNorm;
  }

  if (Math.abs(scroll.vel) < 0.08) {
    scroll.vel = 0;
  }
}

function physicsLoop(now) {
  const dt = Math.min(24, now - lastFrameTime);
  lastFrameTime = now;
  const dtNorm = dt / 16.667;

  if (introActive) {
    updateCatalogIntro(now);
  } else if (state.inertiaEnabled && Math.abs(scroll.vel) > 0.01) {
    applyInertiaStep(dt, now);
  }

  applyScrollBounds();
  applyScrollTransform();
  updateScrollColumns(dtNorm);
  updateModuleHoverAnimation(dt);
  updateHeaderScramble(now);
  updateHeaderIntroBlur(now);

  requestAnimationFrame(physicsLoop);
}

function syncSiteHeaderOffset() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  document.documentElement.style.setProperty(
    '--site-header-offset',
    `${header.offsetHeight + 100}px`,
  );
}

function render() {
  syncLayoutColumns();
  applyVariables();
  syncSiteHeaderOffset();
  measureCycleHeight({ preserveScroll: true });
  measureScrollLimits();

  if (lastHoverPointer && state.moduleHover) {
    applyModuleHover(lastHoverPointer.x, lastHoverPointer.y);
  }

  syncScrollVisuals(true);
}

function syncModuleHoverAnimationControls() {
  const enabled = state.moduleHoverAnimate;
  controls['module-hover-duration'].disabled = !enabled;
  controls['module-hover-duration-input'].disabled = !enabled;
  hoverCurveEls.svg?.closest('.curve-editor')?.classList.toggle('curve-editor--disabled', !enabled);
}

function syncModuleHoverParallaxControls() {
  const enabled = state.moduleHoverParallax;
  controls['module-hover-parallax-amount'].disabled = !enabled;
  controls['module-hover-parallax-amount-input'].disabled = !enabled;
}

function syncModuleHoverZoneControls() {
  const enabled = state.moduleHoverZoneEnabled;
  controls['module-hover-zone'].disabled = !enabled;
  controls['module-hover-zone-input'].disabled = !enabled;
  controls['module-hover-zone-smoothness'].disabled = !enabled;
  controls['module-hover-zone-smoothness-input'].disabled = !enabled;
}

function syncResponsiveColumnsControls() {
  const enabled = state.responsiveColumns;
  controls['responsive-col-gap'].disabled = !enabled;
  controls['responsive-col-gap-input'].disabled = !enabled;
}

function syncControlsFromState() {
  paramDefs.forEach(({ key, slider, input }) => {
    controls[slider].value = state[key];
    controls[input].value = state[key];
  });
  controls.showGuides.checked = state.showGuides;
  controls.moduleHover.checked = state.moduleHover;
  controls.moduleHoverZoneEnabled.checked = state.moduleHoverZoneEnabled;
  controls.moduleHoverAnimate.checked = state.moduleHoverAnimate;
  controls.moduleHoverDimOthers.checked = state.moduleHoverDimOthers;
  controls.moduleHoverBlurOthers.checked = state.moduleHoverBlurOthers;
  controls.moduleHoverBlurModule.checked = state.moduleHoverBlurModule;
  controls.moduleHoverCascade.checked = state.moduleHoverCascade;
  controls.moduleHoverParallax.checked = state.moduleHoverParallax;
  controls.scrollEffect.checked = state.scrollEffect;
  controls.scrollReverseUp.checked = state.scrollReverseUp;
  controls.scrollScaleEffect.checked = state.scrollScaleEffect;
  controls.scrollScaleCascade.checked = state.scrollScaleCascade;
  controls.scrollScaleHoldAtRest.checked = state.scrollScaleHoldAtRest;
  controls.scrollBlurEffect.checked = state.scrollBlurEffect;
  controls.scrollBlurCell.checked = state.scrollBlurCell;
  controls.scrollBlurModule.checked = state.scrollBlurModule;
  controls.scrollBlurCascade.checked = state.scrollBlurCascade;
  controls.scrollBlurHoldAtRest.checked = state.scrollBlurHoldAtRest;
  controls.inertiaEnabled.checked = state.inertiaEnabled;
  controls.infiniteScroll.checked = state.infiniteScroll;
  controls.responsiveColumns.checked = state.responsiveColumns;
  syncThemeColorControls();
  syncResponsiveColumnsControls();
  syncModuleHoverZoneControls();
  syncModuleHoverAnimationControls();
  syncModuleHoverParallaxControls();
  updateModuleStat();
  syncCurveEditors();
}

function setParam(key, rawValue, min, max) {
  const parsed = Number(rawValue);
  if (!Number.isFinite(parsed)) {
    syncControlsFromState();
    return;
  }

  if (key === 'inertiaDuration') {
    state[key] = clamp(Math.round(parsed / 50) * 50, min, max);
  } else if (key === 'moduleHoverDuration') {
    state[key] = parsed <= 0 ? 0 : clamp(Math.round(parsed / 10) * 10, min, max);
  } else {
    state[key] = clamp(Math.round(parsed), min, max);
  }
  syncControlsFromState();

  if (key === 'columns' || key === 'moduleSize' || key === 'responsiveColGap') {
    layoutColumns = -1;
  }

  render();
}

function bindParam(def) {
  const { key, slider, input, min, max } = def;

  controls[slider].addEventListener('input', () => {
    setParam(key, controls[slider].value, min, max);
  });

  controls[input].addEventListener('input', () => {
    setParam(key, controls[input].value, min, max);
  });

  controls[input].addEventListener('blur', () => {
    syncControlsFromState();
  });
}

function curveToSvg(x, y) {
  return { x: x * 100, y: (1 - y) * 100 };
}

function updateCurvePath(editor) {
  const [x1, y1, x2, y2] = state[editor.stateKey];
  const { path, p1, p2, lineA, lineB, x1: x1Input, y1: y1Input, x2: x2Input, y2: y2Input } = editor.els;
  const point1 = curveToSvg(x1, y1);
  const point2 = curveToSvg(x2, y2);

  path.setAttribute('d', `M 0 100 C ${point1.x} ${point1.y}, ${point2.x} ${point2.y}, 100 0`);
  p1.setAttribute('cx', point1.x);
  p1.setAttribute('cy', point1.y);
  p2.setAttribute('cx', point2.x);
  p2.setAttribute('cy', point2.y);
  lineA.setAttribute('x2', point1.x);
  lineA.setAttribute('y2', point1.y);
  lineB.setAttribute('x2', point2.x);
  lineB.setAttribute('y2', point2.y);

  x1Input.value = x1.toFixed(2);
  y1Input.value = y1.toFixed(2);
  x2Input.value = x2.toFixed(2);
  y2Input.value = y2.toFixed(2);
}

function setCurveValues(editor, x1, y1, x2, y2) {
  state[editor.stateKey] = [
    clamp(x1, 0, 1),
    clamp(y1, 0, 1),
    clamp(x2, 0, 1),
    clamp(y2, 0, 1),
  ];
  updateCurvePath(editor);
  editor.onChange?.();
}

function syncCurveEditors() {
  updateCurvePath(inertiaCurveEditor);
  updateCurvePath(hoverCurveEditor);
}

function getSvgPoint(svg, event) {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const matrix = svg.getScreenCTM();
  if (!matrix) return { x: 0, y: 0 };
  const transformed = point.matrixTransform(matrix.inverse());
  return { x: transformed.x, y: transformed.y };
}

function bindCurveHandle(editor, handle, indexX, indexY) {
  handle.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    handle.setPointerCapture(event.pointerId);
    handle.classList.add('is-dragging');

    const onMove = (moveEvent) => {
      if (moveEvent.pointerId !== event.pointerId) return;
      const point = getSvgPoint(editor.els.svg, moveEvent);
      const next = [...state[editor.stateKey]];
      next[indexX] = clamp(point.x / 100, 0, 1);
      next[indexY] = clamp(1 - point.y / 100, 0, 1);
      setCurveValues(editor, next[0], next[1], next[2], next[3]);
    };

    const onUp = (upEvent) => {
      if (upEvent.pointerId !== event.pointerId) return;
      handle.releasePointerCapture(upEvent.pointerId);
      handle.classList.remove('is-dragging');
      handle.removeEventListener('pointermove', onMove);
      handle.removeEventListener('pointerup', onUp);
      handle.removeEventListener('pointercancel', onUp);
    };

    handle.addEventListener('pointermove', onMove);
    handle.addEventListener('pointerup', onUp);
    handle.addEventListener('pointercancel', onUp);
  });
}

function bindCurveInputs(editor) {
  const fields = [
    { el: editor.els.x1, index: 0 },
    { el: editor.els.y1, index: 1 },
    { el: editor.els.x2, index: 2 },
    { el: editor.els.y2, index: 3 },
  ];

  fields.forEach(({ el, index }) => {
    el.addEventListener('change', () => {
      const next = [...state[editor.stateKey]];
      next[index] = clamp(Number(el.value), 0, 1);
      setCurveValues(editor, next[0], next[1], next[2], next[3]);
    });
  });
}

function initCurveEditor(editor) {
  bindCurveHandle(editor, editor.els.p1, 0, 1);
  bindCurveHandle(editor, editor.els.p2, 2, 3);
  bindCurveInputs(editor);
  updateCurvePath(editor);
}

function getPresetSnapshot() {
  return {
    columns: state.columns,
    responsiveColumns: state.responsiveColumns,
    responsiveColGap: state.responsiveColGap,
    moduleSize: state.moduleSize,
    captionSize: state.captionSize,
    rowGap: state.rowGap,
    showGuides: state.showGuides,
    moduleHover: state.moduleHover,
    moduleHoverScale: state.moduleHoverScale,
    moduleHoverZone: state.moduleHoverZone,
    moduleHoverZoneEnabled: state.moduleHoverZoneEnabled,
    moduleHoverZoneSmoothness: state.moduleHoverZoneSmoothness,
    moduleHoverAnimate: state.moduleHoverAnimate,
    moduleHoverDuration: state.moduleHoverDuration,
    moduleHoverCurve: [...state.moduleHoverCurve],
    moduleHoverDimOthers: state.moduleHoverDimOthers,
    moduleHoverDimScale: state.moduleHoverDimScale,
    moduleHoverBlurOthers: state.moduleHoverBlurOthers,
    moduleHoverBlurModule: state.moduleHoverBlurModule,
    moduleHoverBlurAmount: state.moduleHoverBlurAmount,
    moduleHoverCascade: state.moduleHoverCascade,
    moduleHoverCascadeMin: state.moduleHoverCascadeMin,
    moduleHoverCascadeRadius: state.moduleHoverCascadeRadius,
    moduleHoverCascadeSharpness: state.moduleHoverCascadeSharpness,
    moduleHoverParallax: state.moduleHoverParallax,
    moduleHoverParallaxAmount: state.moduleHoverParallaxAmount,
    scrollEffect: state.scrollEffect,
    scrollStagger: state.scrollStagger,
    scrollIntensity: state.scrollIntensity,
    scrollReverseUp: state.scrollReverseUp,
    scrollScaleEffect: state.scrollScaleEffect,
    scrollScaleCascade: state.scrollScaleCascade,
    scrollScaleAmount: state.scrollScaleAmount,
    scrollScaleSpeed: state.scrollScaleSpeed,
    scrollScaleRatio: state.scrollScaleRatio,
    scrollScaleHoldAtRest: state.scrollScaleHoldAtRest,
    scrollBlurEffect: state.scrollBlurEffect,
    scrollBlurCell: state.scrollBlurCell,
    scrollBlurModule: state.scrollBlurModule,
    scrollBlurCascade: state.scrollBlurCascade,
    scrollBlurAmount: state.scrollBlurAmount,
    scrollBlurSpeed: state.scrollBlurSpeed,
    scrollBlurRatio: state.scrollBlurRatio,
    scrollBlurHoldAtRest: state.scrollBlurHoldAtRest,
    inertiaEnabled: state.inertiaEnabled,
    inertiaSensitivity: state.inertiaSensitivity,
    inertiaDuration: state.inertiaDuration,
    inertiaCurve: [...state.inertiaCurve],
    infiniteScroll: state.infiniteScroll,
    backgroundColor: state.backgroundColor,
    textColor: state.textColor,
  };
}

function loadDefaultPresetId() {
  return localStorage.getItem(DEFAULT_PRESET_KEY) || '';
}

function saveDefaultPresetId(id) {
  if (id) {
    localStorage.setItem(DEFAULT_PRESET_KEY, id);
  } else {
    localStorage.removeItem(DEFAULT_PRESET_KEY);
  }
}

function getDefaultPreset() {
  const id = loadDefaultPresetId();
  if (!id) return null;
  const preset = loadPresets().find((entry) => entry.id === id) || null;
  if (!preset) saveDefaultPresetId('');
  return preset;
}

function setDefaultPreset(id) {
  saveDefaultPresetId(loadDefaultPresetId() === id ? '' : id);
  renderPresetList();
}

function loadPresets() {
  try {
    const stored = localStorage.getItem(PRESETS_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function savePresets(presets) {
  localStorage.setItem(PRESETS_KEY, JSON.stringify(presets));
}

function ensureBundledPresets() {
  const bundled = window.BUNDLED_PRESETS;
  const seedVersion = window.BUNDLED_PRESETS_VERSION;
  if (!Array.isArray(bundled) || !bundled.length || !seedVersion) return;

  const storedSeed = localStorage.getItem(PRESETS_SEED_KEY);
  if (storedSeed === seedVersion) return;

  savePresets(bundled.map(({ id, name, values }) => ({ id, name, values })));

  const defaultEntry = bundled.find((entry) => entry.isDefault) || bundled[0];
  if (defaultEntry) {
    saveDefaultPresetId(defaultEntry.id);
  }

  localStorage.setItem(PRESETS_SEED_KEY, seedVersion);
}

async function ensureBundledModules() {
  const seedVersion = window.BUNDLED_MODULES_VERSION;
  if (!seedVersion) return;

  const storedSeed = localStorage.getItem(MODULES_SEED_KEY);
  if (storedSeed === seedVersion) return;

  try {
    const response = await fetch(BUNDLED_MODULES_URL);
    if (!response.ok) return;

    const bundled = await response.json();
    if (!bundled || !Array.isArray(bundled.items) || !bundled.items.length) return;

    applyStoredModuleContent(bundled);
    applyModuleImageFit();
    await saveModuleContent();
    localStorage.setItem(MODULES_SEED_KEY, seedVersion);
  } catch {
    // bundled modules are optional when running offline without data/
  }
}

function applyPresetValues(values) {
  state.columns = values.columns;
  state.responsiveColumns = values.responsiveColumns !== false;
  state.responsiveColGap = values.responsiveColGap ?? defaults.responsiveColGap;
  state.moduleSize = values.moduleSize;
  state.captionSize = values.captionSize;
  state.rowGap = values.rowGap;
  state.showGuides = Boolean(values.showGuides);
  state.moduleHover = Boolean(values.moduleHover);
  state.moduleHoverScale = values.moduleHoverScale ?? defaults.moduleHoverScale;
  state.moduleHoverZone = values.moduleHoverZone ?? defaults.moduleHoverZone;
  state.moduleHoverZoneEnabled = values.moduleHoverZoneEnabled !== false;
  state.moduleHoverZoneSmoothness = values.moduleHoverZoneSmoothness ?? defaults.moduleHoverZoneSmoothness;
  state.moduleHoverAnimate = values.moduleHoverAnimate !== false;
  state.moduleHoverDuration = values.moduleHoverDuration ?? defaults.moduleHoverDuration;
  state.moduleHoverCurve = Array.isArray(values.moduleHoverCurve)
    ? values.moduleHoverCurve.map((v) => clamp(Number(v), 0, 1))
    : [...defaults.moduleHoverCurve];
  state.moduleHoverDimOthers = Boolean(values.moduleHoverDimOthers);
  state.moduleHoverDimScale = values.moduleHoverDimScale ?? defaults.moduleHoverDimScale;
  state.moduleHoverBlurOthers = Boolean(values.moduleHoverBlurOthers);
  state.moduleHoverBlurModule = Boolean(values.moduleHoverBlurModule);
  state.moduleHoverBlurAmount = values.moduleHoverBlurAmount ?? defaults.moduleHoverBlurAmount;
  state.moduleHoverCascade = Boolean(values.moduleHoverCascade);
  state.moduleHoverCascadeMin = values.moduleHoverCascadeMin ?? defaults.moduleHoverCascadeMin;
  state.moduleHoverCascadeRadius = values.moduleHoverCascadeRadius ?? defaults.moduleHoverCascadeRadius;
  state.moduleHoverCascadeSharpness = values.moduleHoverCascadeSharpness ?? defaults.moduleHoverCascadeSharpness;
  state.moduleHoverParallax = Boolean(values.moduleHoverParallax);
  state.moduleHoverParallaxAmount = values.moduleHoverParallaxAmount ?? defaults.moduleHoverParallaxAmount;
  state.scrollEffect = values.scrollEffect !== false;
  clearModuleHover(true);
  state.scrollStagger = values.scrollStagger ?? defaults.scrollStagger;
  state.scrollIntensity = values.scrollIntensity ?? defaults.scrollIntensity;
  state.scrollReverseUp = values.scrollReverseUp !== false;
  state.scrollScaleEffect = Boolean(values.scrollScaleEffect);
  state.scrollScaleCascade = values.scrollScaleCascade !== false;
  state.scrollScaleAmount = values.scrollScaleAmount ?? defaults.scrollScaleAmount;
  state.scrollScaleSpeed = values.scrollScaleSpeed ?? defaults.scrollScaleSpeed;
  state.scrollScaleRatio = values.scrollScaleRatio ?? defaults.scrollScaleRatio;
  state.scrollScaleHoldAtRest = values.scrollScaleHoldAtRest !== false;
  state.scrollBlurEffect = Boolean(values.scrollBlurEffect);
  state.scrollBlurCell = Boolean(values.scrollBlurCell);
  state.scrollBlurModule = values.scrollBlurModule !== undefined
    ? Boolean(values.scrollBlurModule)
    : defaults.scrollBlurModule;
  state.scrollBlurCascade = values.scrollBlurCascade !== false;
  state.scrollBlurAmount = values.scrollBlurAmount ?? defaults.scrollBlurAmount;
  state.scrollBlurSpeed = values.scrollBlurSpeed ?? defaults.scrollBlurSpeed;
  state.scrollBlurRatio = values.scrollBlurRatio ?? defaults.scrollBlurRatio;
  state.scrollBlurHoldAtRest = values.scrollBlurHoldAtRest !== false;
  state.inertiaEnabled = values.inertiaEnabled !== false;
  state.inertiaSensitivity = values.inertiaSensitivity ?? defaults.inertiaSensitivity;
  state.inertiaDuration = values.inertiaDuration ?? defaults.inertiaDuration;
  state.inertiaCurve = Array.isArray(values.inertiaCurve)
    ? values.inertiaCurve.map((v) => clamp(Number(v), 0, 1))
    : [...defaults.inertiaCurve];
  state.infiniteScroll = values.infiniteScroll !== false;
  state.backgroundColor = normalizeHexColor(values.backgroundColor, defaults.backgroundColor);
  state.textColor = normalizeHexColor(values.textColor, defaults.textColor);
  decelStartTime = 0;
  scroll.vel = 0;
  layoutColumns = -1;
  resetColScrollLag();
  syncControlsFromState();
  render();
}

function renderPresetList() {
  const presets = loadPresets();
  const defaultPresetId = loadDefaultPresetId();
  presetList.innerHTML = '';
  presetEmpty.hidden = presets.length > 0;

  presets.forEach((preset) => {
    const item = document.createElement('li');
    item.className = 'dev-tools__preset-item';
    const isDefault = preset.id === defaultPresetId;

    const defaultBtn = document.createElement('button');
    defaultBtn.type = 'button';
    defaultBtn.className = `dev-tools__preset-default${isDefault ? ' is-active' : ''}`;
    defaultBtn.textContent = isDefault ? '★' : '☆';
    defaultBtn.title = isDefault
      ? panelT('preset.removeDefault')
      : panelT('preset.setDefault');
    defaultBtn.setAttribute(
      'aria-label',
      isDefault
        ? panelT('preset.removeDefaultNamed', { name: preset.name })
        : panelT('preset.setDefaultNamed', { name: preset.name }),
    );
    defaultBtn.addEventListener('click', () => {
      setDefaultPreset(preset.id);
    });

    const loadBtn = document.createElement('button');
    loadBtn.type = 'button';
    loadBtn.className = `dev-tools__preset-load${isDefault ? ' is-default' : ''}`;
    loadBtn.textContent = preset.name;
    loadBtn.title = panelT('preset.applyNamed', { name: preset.name });
    loadBtn.addEventListener('click', () => {
      applyPresetValues(preset.values);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'dev-tools__preset-delete';
    deleteBtn.setAttribute('aria-label', panelT('preset.deleteNamed', { name: preset.name }));
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', () => {
      if (loadDefaultPresetId() === preset.id) {
        saveDefaultPresetId('');
      }
      const next = loadPresets().filter((entry) => entry.id !== preset.id);
      savePresets(next);
      renderPresetList();
    });

    item.append(defaultBtn, loadBtn, deleteBtn);
    presetList.appendChild(item);
  });
}

function saveCurrentPreset() {
  const name = presetNameInput.value.trim() || panelT('preset.defaultName', { n: loadPresets().length + 1 });
  const presets = loadPresets();
  const preset = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    values: getPresetSnapshot(),
  };

  presets.unshift(preset);
  savePresets(presets);
  presetNameInput.value = '';
  renderPresetList();
}

function placePanelDefault() {
  const margin = 16;
  devPanel.style.left = `${window.innerWidth - devPanel.offsetWidth - margin}px`;
  devPanel.style.top = `${Math.max(margin, window.innerHeight - devPanel.offsetHeight - 72)}px`;
}

function setPanelOpen(isOpen) {
  if (isOpen) {
    devPanel.hidden = false;

    if (!devPanel.dataset.positioned) {
      placePanelDefault();
      devPanel.dataset.positioned = 'true';
    }
  } else {
    devPanel.hidden = true;
  }

  panelOpen.hidden = isOpen;
  panelOpen.setAttribute('aria-expanded', String(isOpen));
}

function bindPanelDrag() {
  dragHandle.addEventListener('pointerdown', (event) => {
    if (event.target.closest('.dev-tools__close, .dev-tools__tab, .dev-tools__lang-btn')) return;

    const rect = devPanel.getBoundingClientRect();
    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top,
    };

    dragHandle.setPointerCapture(event.pointerId);
    dragHandle.classList.add('is-dragging');
  });

  dragHandle.addEventListener('pointermove', (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;

    const nextLeft = dragState.left + event.clientX - dragState.startX;
    const nextTop = dragState.top + event.clientY - dragState.startY;

    devPanel.style.left = `${clamp(nextLeft, 0, window.innerWidth - devPanel.offsetWidth)}px`;
    devPanel.style.top = `${clamp(nextTop, 0, window.innerHeight - devPanel.offsetHeight)}px`;
    devPanel.dataset.positioned = 'true';
  });

  const stopDrag = (event) => {
    if (!dragState || event.pointerId !== dragState.pointerId) return;

    dragHandle.releasePointerCapture(event.pointerId);
    dragHandle.classList.remove('is-dragging');
    dragState = null;
  };

  dragHandle.addEventListener('pointerup', stopDrag);
  dragHandle.addEventListener('pointercancel', stopDrag);
}

function bindPanelGroups() {
  let saved = {};

  try {
    saved = JSON.parse(localStorage.getItem(PANEL_GROUPS_KEY) || '{}');
  } catch {
    saved = {};
  }

  const persistGroups = () => {
    localStorage.setItem(PANEL_GROUPS_KEY, JSON.stringify(saved));
  };

  const setGroupCollapsed = (group, toggle, collapsed) => {
    group.classList.toggle('is-collapsed', collapsed);
    toggle.setAttribute('aria-expanded', String(!collapsed));
  };

  document.querySelectorAll('.dev-tools__group').forEach((group) => {
    const id = group.dataset.group;
    const toggle = group.querySelector('.dev-tools__group-toggle');

    if (!id || !toggle) return;

    setGroupCollapsed(group, toggle, saved[id] === false);

    toggle.addEventListener('click', () => {
      const collapsed = !group.classList.contains('is-collapsed');
      setGroupCollapsed(group, toggle, collapsed);
      saved[id] = !collapsed;
      persistGroups();
    });
  });
}

async function init() {
  bindPanelLangSwitcher();
  applyPanelI18n();
  document.addEventListener('panel-lang-change', () => {
    renderPresetList();
    renderModuleList();
    render();
  });

  bindPanelDrag();
  bindPanelGroups();
  bindThemeColorControl(controls.backgroundColor, controls.backgroundColorInput, 'backgroundColor');
  bindThemeColorControl(controls.textColor, controls.textColorInput, 'textColor');
  initCurveEditor(inertiaCurveEditor);
  initCurveEditor(hoverCurveEditor);

  panelOpen.addEventListener('click', () => setPanelOpen(true));
  panelClose.addEventListener('click', () => setPanelOpen(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !devPanel.hidden) {
      setPanelOpen(false);
    }
  });

  controls.showGuides.addEventListener('change', () => {
    state.showGuides = controls.showGuides.checked;
    drawGuides();
  });

  controls.moduleHover.addEventListener('change', () => {
    state.moduleHover = controls.moduleHover.checked;
    if (!state.moduleHover) clearModuleHover(true);
    applyVariables();
  });

  controls.moduleHoverZoneEnabled.addEventListener('change', () => {
    state.moduleHoverZoneEnabled = controls.moduleHoverZoneEnabled.checked;
    syncModuleHoverZoneControls();
    if (lastHoverPointer) applyModuleHover(lastHoverPointer.x, lastHoverPointer.y);
  });

  controls.moduleHoverAnimate.addEventListener('change', () => {
    state.moduleHoverAnimate = controls.moduleHoverAnimate.checked;
    syncModuleHoverAnimationControls();
    applyVariables();
    if (lastHoverPointer) applyModuleHover(lastHoverPointer.x, lastHoverPointer.y);
  });

  controls.moduleHoverDimOthers.addEventListener('change', () => {
    state.moduleHoverDimOthers = controls.moduleHoverDimOthers.checked;
    if (lastHoverPointer) applyModuleHover(lastHoverPointer.x, lastHoverPointer.y);
    applyVariables();
  });

  controls.moduleHoverBlurOthers.addEventListener('change', () => {
    state.moduleHoverBlurOthers = controls.moduleHoverBlurOthers.checked;
    if (lastHoverPointer) applyModuleHover(lastHoverPointer.x, lastHoverPointer.y);
    applyVariables();
  });

  controls.moduleHoverBlurModule.addEventListener('change', () => {
    state.moduleHoverBlurModule = controls.moduleHoverBlurModule.checked;
    if (lastHoverPointer) applyModuleHover(lastHoverPointer.x, lastHoverPointer.y);
    applyVariables();
  });

  controls.moduleHoverCascade.addEventListener('change', () => {
    state.moduleHoverCascade = controls.moduleHoverCascade.checked;
    if (lastHoverPointer) applyModuleHover(lastHoverPointer.x, lastHoverPointer.y);
    applyVariables();
  });

  controls.moduleHoverParallax.addEventListener('change', () => {
    state.moduleHoverParallax = controls.moduleHoverParallax.checked;
    syncModuleHoverParallaxControls();
    applyVariables();
    if (!state.moduleHoverParallax) stand.classList.remove('stand--hide-cursor');
    if (lastHoverPointer) applyModuleHover(lastHoverPointer.x, lastHoverPointer.y);
  });

  controls.scrollEffect.addEventListener('change', () => {
    state.scrollEffect = controls.scrollEffect.checked;
    if (!state.scrollEffect) resetColScrollLag();
    updateScrollColumns();
  });

  controls.scrollReverseUp.addEventListener('change', () => {
    state.scrollReverseUp = controls.scrollReverseUp.checked;
    updateScrollColumns();
  });

  controls.scrollScaleEffect.addEventListener('change', () => {
    state.scrollScaleEffect = controls.scrollScaleEffect.checked;
    updateScrollColumns();
  });

  controls.scrollScaleCascade.addEventListener('change', () => {
    state.scrollScaleCascade = controls.scrollScaleCascade.checked;
    updateScrollColumns();
  });

  controls.scrollScaleHoldAtRest.addEventListener('change', () => {
    state.scrollScaleHoldAtRest = controls.scrollScaleHoldAtRest.checked;
    updateScrollColumns();
  });

  controls.scrollBlurEffect.addEventListener('change', () => {
    state.scrollBlurEffect = controls.scrollBlurEffect.checked;
    if (!state.scrollBlurEffect) resetColScrollLag();
    updateScrollColumns();
  });

  controls.scrollBlurCell.addEventListener('change', () => {
    state.scrollBlurCell = controls.scrollBlurCell.checked;
    updateScrollColumns();
  });

  controls.scrollBlurModule.addEventListener('change', () => {
    state.scrollBlurModule = controls.scrollBlurModule.checked;
    updateScrollColumns();
  });

  controls.scrollBlurCascade.addEventListener('change', () => {
    state.scrollBlurCascade = controls.scrollBlurCascade.checked;
    updateScrollColumns();
  });

  controls.scrollBlurHoldAtRest.addEventListener('change', () => {
    state.scrollBlurHoldAtRest = controls.scrollBlurHoldAtRest.checked;
    updateScrollColumns();
  });

  controls.inertiaEnabled.addEventListener('change', () => {
    state.inertiaEnabled = controls.inertiaEnabled.checked;
    if (!state.inertiaEnabled) {
      decelStartTime = 0;
      scroll.vel = 0;
    }
  });

  controls.responsiveColumns.addEventListener('change', () => {
    state.responsiveColumns = controls.responsiveColumns.checked;
    layoutColumns = -1;
    syncResponsiveColumnsControls();
    render();
  });

  controls.infiniteScroll.addEventListener('change', () => {
    state.infiniteScroll = controls.infiniteScroll.checked;
    buildGrid();
    applyScrollBounds();
    resetColScrollLag();
    updateModuleStat();
    render();
  });

  presetSaveBtn.addEventListener('click', saveCurrentPreset);
  presetNameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') saveCurrentPreset();
  });

  await loadModuleContent();
  await ensureBundledModules();
  applyModuleImageFit();

  stand.addEventListener('wheel', onWheel, { passive: false });

  bindModuleHover();
  bindModuleContentPanel();
  paramDefs.forEach(bindParam);

  ensureBundledPresets();

  const defaultPreset = getDefaultPreset();
  if (defaultPreset) {
    applyPresetValues(defaultPreset.values);
  } else {
    buildGrid();
    syncControlsFromState();
    render();
  }

  renderPresetList();
  updateModuleStat();
  resetColScrollLag();
  if (document.fonts?.ready) await document.fonts.ready;
  startHeaderIntroBlur();
  startHeaderScramble();
  startCatalogIntro();

  const onViewportLayoutChange = () => render();
  window.addEventListener('resize', onViewportLayoutChange);
  window.visualViewport?.addEventListener('resize', onViewportLayoutChange);
  window.visualViewport?.addEventListener('scroll', onViewportLayoutChange);

  if (typeof ResizeObserver !== 'undefined') {
    const layoutObserver = new ResizeObserver(onViewportLayoutChange);
    layoutObserver.observe(stand);
    layoutObserver.observe(canvas);
  }

  [480, 768, 1024, 1280, 1536].forEach((width) => {
    window.matchMedia(`(max-width: ${width}px)`).addEventListener('change', onViewportLayoutChange);
  });

  requestAnimationFrame(() => {
    layoutColumns = -1;
    render();
  });
  requestAnimationFrame(physicsLoop);
}

init().catch((error) => {
  console.error(error);
});
