const PANEL_LANG_KEY = 'grid-stand-panel-lang';

const panelTranslations = {
  ru: {
    'panel.aria': 'Параметры сетки',
    'panel.open': 'Открыть параметры',
    'panel.close': 'Закрыть панель',
    'tablist.aria': 'Разделы панели',
    'tab.params': 'Параметры',
    'tab.modules': 'Модули',
    'lang.ru': 'RU',
    'lang.en': 'EN',
    'lang.switch': 'Язык панели',
    'group.grid': 'Сетка',
    'group.appearance': 'Цвета',
    'group.tape': 'Лента',
    'group.scroll': 'Скролл колонок',
    'group.inertia': 'Инерция скролла',
    'group.presets': 'Пресеты',
    'group.stats': 'Статистика',
    'check.showGuides': 'Направляющие',
    'control.columns': 'Колонок',
    'aria.columns': 'Колонок, число',
    'check.responsiveColumns': 'Адаптив колонок',
    'control.responsiveColGap': 'Мин. gap для адаптива, px',
    'aria.responsiveColGap': 'Минимальный горизонтальный gap для адаптива, px',
    'hint.responsiveColGap': 'На узких экранах колонок станет меньше, если зазор между модулями опустится ниже указанного минимума.',
    'control.moduleSize': 'Ширина модуля, px',
    'aria.moduleSize': 'Ширина модуля, число',
    'control.captionSize': 'Кегль подписи, px',
    'aria.captionSize': 'Кегль подписи, число',
    'control.rowGap': 'Вертикальные зазоры, px',
    'control.backgroundColor': 'Фон',
    'control.textColor': 'Текст',
    'aria.backgroundColor': 'Цвет фона',
    'aria.textColor': 'Цвет текста',
    'aria.rowGap': 'Вертикальные зазоры, число',
    'check.moduleHover': 'Ховер модуля',
    'control.moduleHoverScale': 'Увеличение, ×',
    'aria.moduleHoverScale': 'Увеличение при наведении',
    'check.moduleHoverZone': 'Зона влияния',
    'control.moduleHoverZone': 'Радиус зоны, px',
    'aria.moduleHoverZone': 'Зона влияния вокруг модуля, px',
    'control.moduleHoverZoneSmoothness': 'Плавность зоны, %',
    'aria.moduleHoverZoneSmoothness': 'Плавность нарастания ховера от края зоны',
    'check.moduleHoverAnimate': 'Анимация',
    'control.moduleHoverDuration': 'Длительность анимации, ms',
    'aria.moduleHoverDuration': 'Длительность анимации ховера, ms',
    'control.hoverCurve': 'Кривая анимации',
    'aria.hoverCurve': 'Редактор кривой ховера',
    'check.moduleHoverParallax': 'Микродвижение картинки',
    'control.moduleHoverParallax': 'Смещение, px',
    'aria.moduleHoverParallax': 'Сила микродвижения картинки, px',
    'check.moduleHoverDimOthers': 'Уменьшать остальные',
    'control.moduleHoverDimScale': 'Масштаб остальных, %',
    'aria.moduleHoverDimScale': 'Масштаб остальных модулей, %',
    'check.moduleHoverBlurCell': 'Размывать ячейку',
    'check.moduleHoverBlurModule': 'Размывать только модуль',
    'control.moduleHoverBlurAmount': 'Сила размытия, px',
    'aria.moduleHoverBlurAmount': 'Сила размытия, px',
    'check.moduleHoverCascade': 'Каскад при ховере',
    'control.moduleHoverCascadeMin': 'Мин. масштаб, %',
    'aria.moduleHoverCascadeMin': 'Минимальный масштаб каскада, %',
    'control.moduleHoverCascadeRadius': 'Радиус каскада',
    'aria.moduleHoverCascadeRadius': 'Радиус каскада, колец',
    'control.moduleHoverCascadeSharpness': 'Резкость каскада, %',
    'aria.moduleHoverCascadeSharpness': 'Резкость каскада, %',
    'hint.moduleHoverBlur': '110 = ×1,10. «Размывать ячейку» — модуль и подпись. «Только модуль» — подпись остаётся резкой. Сила размытия общая для обоих режимов.',
    'check.infiniteScroll': 'Бесконечный скролл',
    'check.scrollEffect': 'Включить',
    'check.scrollReverseUp': 'Реверс при скролле вверх',
    'hint.scrollReverseUp': 'Вниз: каскад слева направо, движение сверху вниз. Вверх: справа налево, снизу вверх.',
    'control.scrollStagger': 'Задержка, px',
    'aria.scrollStagger': 'Задержка скролла, число',
    'control.scrollIntensity': 'Сила, %',
    'aria.scrollIntensity': 'Сила скролла, число',
    'check.scrollScaleEffect': 'Уменьшать модули',
    'check.scrollScaleCascade': 'Уменьшать каскадом',
    'check.scrollScaleHoldAtRest': 'Сохранять каскад в покое',
    'control.scrollScaleAmount': 'Коэффициент уменьшения, %',
    'aria.scrollScaleAmount': 'Коэффициент уменьшения, число',
    'control.scrollScaleSpeed': 'Скорость каскада',
    'aria.scrollScaleSpeed': 'Скорость каскада, число',
    'control.scrollScaleRatio': 'Пропорция мин/макс, %',
    'aria.scrollScaleRatio': 'Пропорция мин/макс, число',
    'hint.scrollScale': 'Мин/макс: насколько меньше самый маленький модуль относительно самого большого в каскаде. Без «Сохранять в покое» — все модули возвращаются к исходному размеру после скролла.',
    'check.scrollBlurEffect': 'Размытие при скролле',
    'check.scrollBlurCell': 'Размывать ячейку',
    'check.scrollBlurModule': 'Размывать только модуль',
    'check.scrollBlurCascade': 'Размывать каскадом',
    'check.scrollBlurHoldAtRest': 'Сохранять каскад в покое',
    'control.scrollBlurAmount': 'Сила размытия, px',
    'aria.scrollBlurAmount': 'Сила размытия при скролле, px',
    'control.scrollBlurSpeed': 'Скорость каскада',
    'aria.scrollBlurSpeed': 'Скорость каскада размытия, число',
    'control.scrollBlurRatio': 'Пропорция мин/макс, %',
    'aria.scrollBlurRatio': 'Пропорция размытия мин/макс, число',
    'hint.scrollBlur': 'Размытие синхронизируется со скроллом. Каскад — по колонкам, как у уменьшения модулей.',
    'check.inertiaEnabled': 'Включить',
    'control.inertiaSensitivity': 'Чувствительность, %',
    'aria.inertiaSensitivity': 'Чувствительность, число',
    'control.inertiaDuration': 'Длительность, ms',
    'aria.inertiaDuration': 'Длительность, число',
    'control.inertiaCurve': 'Кривая замедления',
    'aria.inertiaCurve': 'Редактор кривой инерции',
    'preset.placeholder': 'Название пресета',
    'preset.save': 'Сохранить',
    'preset.hint': '★ — пресет по умолчанию, загружается при обновлении страницы',
    'preset.empty': 'Пресетов пока нет',
    'preset.removeDefault': 'Убрать пресет по умолчанию',
    'preset.setDefault': 'Сделать пресетом по умолчанию',
    'preset.removeDefaultNamed': 'Убрать «{name}» как пресет по умолчанию',
    'preset.setDefaultNamed': 'Сделать «{name}» пресетом по умолчанию',
    'preset.applyNamed': 'Применить «{name}»',
    'preset.deleteNamed': 'Удалить пресет «{name}»',
    'preset.defaultName': 'Пресет {n}',
    'stats.colGap': 'Гориз. зазор',
    'stats.modules': 'Модулей',
    'stats.colSuffix': 'col',
    'modules.imageFit': 'Изображение в модуле',
    'modules.fitCover': 'Квадрат (обрезка)',
    'modules.fitWidth': 'По ширине модуля',
    'modules.hint': 'Номер привязывается к позиции в списке. Перетаскивайте строки для смены порядка. Пустые модули (без картинки и с названием Placeholder) можно удалить кнопкой −.',
    'modules.add': 'Добавить модуль',
    'modules.listAria': 'Список модулей',
    'module.upload': 'Загрузить изображение',
    'module.clearImage': 'Убрать изображение',
    'module.titleNamed': 'Название модуля {n}',
    'module.deleteEmpty': 'Удалить пустой модуль',
    'module.imageTooLarge': 'Изображение слишком большое. Максимум 10 МБ.',
  },
  en: {
    'panel.aria': 'Grid parameters',
    'panel.open': 'Open parameters',
    'panel.close': 'Close panel',
    'tablist.aria': 'Panel sections',
    'tab.params': 'Parameters',
    'tab.modules': 'Modules',
    'lang.ru': 'RU',
    'lang.en': 'EN',
    'lang.switch': 'Panel language',
    'group.grid': 'Grid',
    'group.appearance': 'Colors',
    'group.tape': 'Tape',
    'group.scroll': 'Column scroll',
    'group.inertia': 'Scroll inertia',
    'group.presets': 'Presets',
    'group.stats': 'Statistics',
    'check.showGuides': 'Guides',
    'control.columns': 'Columns',
    'aria.columns': 'Columns, number',
    'check.responsiveColumns': 'Responsive columns',
    'control.responsiveColGap': 'Min. adaptive gap, px',
    'aria.responsiveColGap': 'Minimum horizontal gap for responsive layout, px',
    'hint.responsiveColGap': 'On narrow screens, column count drops when the gap between modules falls below this minimum.',
    'control.moduleSize': 'Module width, px',
    'aria.moduleSize': 'Module width, number',
    'control.captionSize': 'Caption size, px',
    'aria.captionSize': 'Caption size, number',
    'control.rowGap': 'Vertical gaps, px',
    'control.backgroundColor': 'Background',
    'control.textColor': 'Text',
    'aria.backgroundColor': 'Background color',
    'aria.textColor': 'Text color',
    'aria.rowGap': 'Vertical gaps, number',
    'check.moduleHover': 'Module hover',
    'control.moduleHoverScale': 'Scale, ×',
    'aria.moduleHoverScale': 'Hover scale factor',
    'check.moduleHoverZone': 'Influence zone',
    'control.moduleHoverZone': 'Zone radius, px',
    'aria.moduleHoverZone': 'Hover influence radius, px',
    'control.moduleHoverZoneSmoothness': 'Zone smoothness, %',
    'aria.moduleHoverZoneSmoothness': 'Hover zone falloff smoothness',
    'check.moduleHoverAnimate': 'Animation',
    'control.moduleHoverDuration': 'Animation duration, ms',
    'aria.moduleHoverDuration': 'Hover animation duration, ms',
    'control.hoverCurve': 'Animation curve',
    'aria.hoverCurve': 'Hover easing curve editor',
    'check.moduleHoverParallax': 'Image micro-motion',
    'control.moduleHoverParallax': 'Offset, px',
    'aria.moduleHoverParallax': 'Image parallax offset, px',
    'check.moduleHoverDimOthers': 'Dim others',
    'control.moduleHoverDimScale': 'Others scale, %',
    'aria.moduleHoverDimScale': 'Non-hovered modules scale, %',
    'check.moduleHoverBlurCell': 'Blur cell',
    'check.moduleHoverBlurModule': 'Blur module only',
    'control.moduleHoverBlurAmount': 'Blur amount, px',
    'aria.moduleHoverBlurAmount': 'Blur amount, px',
    'check.moduleHoverCascade': 'Hover cascade',
    'control.moduleHoverCascadeMin': 'Min. scale, %',
    'aria.moduleHoverCascadeMin': 'Minimum cascade scale, %',
    'control.moduleHoverCascadeRadius': 'Cascade radius',
    'aria.moduleHoverCascadeRadius': 'Cascade radius, rings',
    'control.moduleHoverCascadeSharpness': 'Cascade sharpness, %',
    'aria.moduleHoverCascadeSharpness': 'Cascade sharpness, %',
    'hint.moduleHoverBlur': '110 = ×1.10. Blur cell affects caption + module. Module only keeps caption sharp. Blur amount is shared.',
    'check.infiniteScroll': 'Infinite scroll',
    'check.scrollEffect': 'Enable',
    'check.scrollReverseUp': 'Reverse on scroll up',
    'hint.scrollReverseUp': 'Down: cascade left→right, motion top→bottom. Up: right→left, bottom→top.',
    'control.scrollStagger': 'Delay, px',
    'aria.scrollStagger': 'Scroll delay, number',
    'control.scrollIntensity': 'Intensity, %',
    'aria.scrollIntensity': 'Scroll intensity, number',
    'check.scrollScaleEffect': 'Scale modules down',
    'check.scrollScaleCascade': 'Cascade scale',
    'check.scrollScaleHoldAtRest': 'Hold cascade at rest',
    'control.scrollScaleAmount': 'Scale amount, %',
    'aria.scrollScaleAmount': 'Scale amount, number',
    'control.scrollScaleSpeed': 'Cascade speed',
    'aria.scrollScaleSpeed': 'Cascade speed, number',
    'control.scrollScaleRatio': 'Min/max ratio, %',
    'aria.scrollScaleRatio': 'Min/max ratio, number',
    'hint.scrollScale': 'Min/max: how much smaller the smallest module is vs the largest. Without hold at rest, all modules return to original size after scroll.',
    'check.scrollBlurEffect': 'Scroll blur',
    'check.scrollBlurCell': 'Blur cell',
    'check.scrollBlurModule': 'Blur module only',
    'check.scrollBlurCascade': 'Cascade blur',
    'check.scrollBlurHoldAtRest': 'Hold cascade at rest',
    'control.scrollBlurAmount': 'Blur amount, px',
    'aria.scrollBlurAmount': 'Scroll blur amount, px',
    'control.scrollBlurSpeed': 'Cascade speed',
    'aria.scrollBlurSpeed': 'Blur cascade speed, number',
    'control.scrollBlurRatio': 'Min/max ratio, %',
    'aria.scrollBlurRatio': 'Blur min/max ratio, number',
    'hint.scrollBlur': 'Blur syncs with scroll. Cascade follows columns, like module scaling.',
    'check.inertiaEnabled': 'Enable',
    'control.inertiaSensitivity': 'Sensitivity, %',
    'aria.inertiaSensitivity': 'Sensitivity, number',
    'control.inertiaDuration': 'Duration, ms',
    'aria.inertiaDuration': 'Duration, number',
    'control.inertiaCurve': 'Deceleration curve',
    'aria.inertiaCurve': 'Inertia easing curve editor',
    'preset.placeholder': 'Preset name',
    'preset.save': 'Save',
    'preset.hint': '★ — default preset, loaded on page refresh',
    'preset.empty': 'No presets yet',
    'preset.removeDefault': 'Remove default preset',
    'preset.setDefault': 'Set as default preset',
    'preset.removeDefaultNamed': 'Remove «{name}» as default preset',
    'preset.setDefaultNamed': 'Set «{name}» as default preset',
    'preset.applyNamed': 'Apply «{name}»',
    'preset.deleteNamed': 'Delete preset «{name}»',
    'preset.defaultName': 'Preset {n}',
    'stats.colGap': 'Horiz. gap',
    'stats.modules': 'Modules',
    'stats.colSuffix': 'col',
    'modules.imageFit': 'Module image',
    'modules.fitCover': 'Square (crop)',
    'modules.fitWidth': 'Fit module width',
    'modules.hint': 'Numbers follow list order. Drag rows to reorder. Empty modules (no image, Placeholder title) can be removed with −.',
    'modules.add': 'Add module',
    'modules.listAria': 'Module list',
    'module.upload': 'Upload image',
    'module.clearImage': 'Remove image',
    'module.titleNamed': 'Module title {n}',
    'module.deleteEmpty': 'Delete empty module',
    'module.imageTooLarge': 'Image is too large. Maximum 10 MB.',
  },
};

let panelLang = localStorage.getItem(PANEL_LANG_KEY) || 'ru';
if (!panelTranslations[panelLang]) panelLang = 'ru';

function panelT(key, vars = {}) {
  const table = panelTranslations[panelLang] || panelTranslations.ru;
  let text = table[key] ?? panelTranslations.ru[key] ?? key;
  Object.entries(vars).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, String(value));
  });
  return text;
}

function getPanelLang() {
  return panelLang;
}

function setPanelLang(lang) {
  if (!panelTranslations[lang]) return;
  panelLang = lang;
  localStorage.setItem(PANEL_LANG_KEY, lang);
  applyPanelI18n();
  document.dispatchEvent(new CustomEvent('panel-lang-change', { detail: { lang: panelLang } }));
}

function applyPanelI18n() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = panelT(el.dataset.i18n);
  });

  const labelMap = {
    columns: 'control.columns',
    'responsive-col-gap': 'control.responsiveColGap',
    'module-size': 'control.moduleSize',
    'caption-size': 'control.captionSize',
    'row-gap': 'control.rowGap',
    'background-color': 'control.backgroundColor',
    'text-color': 'control.textColor',
    'module-hover-scale': 'control.moduleHoverScale',
    'module-hover-zone': 'control.moduleHoverZone',
    'module-hover-zone-smoothness': 'control.moduleHoverZoneSmoothness',
    'module-hover-duration': 'control.moduleHoverDuration',
    'module-hover-parallax-amount': 'control.moduleHoverParallax',
    'module-hover-dim-scale': 'control.moduleHoverDimScale',
    'module-hover-blur-amount': 'control.moduleHoverBlurAmount',
    'module-hover-cascade-min': 'control.moduleHoverCascadeMin',
    'module-hover-cascade-radius': 'control.moduleHoverCascadeRadius',
    'module-hover-cascade-sharpness': 'control.moduleHoverCascadeSharpness',
    'scroll-stagger': 'control.scrollStagger',
    'scroll-intensity': 'control.scrollIntensity',
    'scroll-scale-amount': 'control.scrollScaleAmount',
    'scroll-scale-speed': 'control.scrollScaleSpeed',
    'scroll-scale-ratio': 'control.scrollScaleRatio',
    'scroll-blur-amount': 'control.scrollBlurAmount',
    'scroll-blur-speed': 'control.scrollBlurSpeed',
    'scroll-blur-ratio': 'control.scrollBlurRatio',
    'inertia-sensitivity': 'control.inertiaSensitivity',
    'inertia-duration': 'control.inertiaDuration',
  };

  Object.entries(labelMap).forEach(([id, key]) => {
    const label = document.querySelector(`label[for="${id}"]`);
    if (label) label.textContent = panelT(key);
  });

  const controlLabelMap = {
    'control-hover-curve': 'control.hoverCurve',
    'control-inertia-curve': 'control.inertiaCurve',
    'control-module-image-fit': 'modules.imageFit',
  };

  Object.entries(controlLabelMap).forEach(([id, key]) => {
    const label = document.getElementById(id);
    if (label) label.textContent = panelT(key);
  });

  const checkMap = {
    'show-guides': 'check.showGuides',
    'responsive-columns': 'check.responsiveColumns',
    'module-hover': 'check.moduleHover',
    'module-hover-zone-enabled': 'check.moduleHoverZone',
    'module-hover-animate': 'check.moduleHoverAnimate',
    'module-hover-parallax': 'check.moduleHoverParallax',
    'module-hover-dim-others': 'check.moduleHoverDimOthers',
    'module-hover-blur-others': 'check.moduleHoverBlurCell',
    'module-hover-blur-module': 'check.moduleHoverBlurModule',
    'module-hover-cascade': 'check.moduleHoverCascade',
    'infinite-scroll': 'check.infiniteScroll',
    'scroll-effect': 'check.scrollEffect',
    'scroll-reverse-up': 'check.scrollReverseUp',
    'scroll-scale-effect': 'check.scrollScaleEffect',
    'scroll-scale-cascade': 'check.scrollScaleCascade',
    'scroll-scale-hold-at-rest': 'check.scrollScaleHoldAtRest',
    'scroll-blur-effect': 'check.scrollBlurEffect',
    'scroll-blur-cell': 'check.scrollBlurCell',
    'scroll-blur-module': 'check.scrollBlurModule',
    'scroll-blur-cascade': 'check.scrollBlurCascade',
    'scroll-blur-hold-at-rest': 'check.scrollBlurHoldAtRest',
    'inertia-enabled': 'check.inertiaEnabled',
    'module-image-fit-cover': 'modules.fitCover',
    'module-image-fit-width': 'modules.fitWidth',
  };

  Object.entries(checkMap).forEach(([id, key]) => {
    const input = document.getElementById(id);
    const label = input?.closest('label');
    const span = label?.querySelector('span');
    if (span) span.textContent = panelT(key);
  });

  const groupMap = {
    appearance: 'group.appearance',
    grid: 'group.grid',
    tape: 'group.tape',
    'scroll-cols': 'group.scroll',
    inertia: 'group.inertia',
    presets: 'group.presets',
    stats: 'group.stats',
  };

  Object.entries(groupMap).forEach(([group, key]) => {
    const title = document.querySelector(`[data-group="${group}"] .dev-tools__group-title`);
    if (title) title.textContent = panelT(key);
  });

  const hintMap = {
    'hint-responsive-col-gap': 'hint.responsiveColGap',
    'hint-module-hover-blur': 'hint.moduleHoverBlur',
    'hint-scroll-reverse-up': 'hint.scrollReverseUp',
    'hint-scroll-scale': 'hint.scrollScale',
    'hint-scroll-blur': 'hint.scrollBlur',
    'hint-preset': 'preset.hint',
    'hint-modules': 'modules.hint',
  };

  Object.entries(hintMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = panelT(key);
  });

  const statMap = {
    'stat-col-gap': 'stats.colGap',
    'stat-modules': 'stats.modules',
  };

  Object.entries(statMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = panelT(key);
  });

  const buttonMap = {
    'preset-save': 'preset.save',
    'module-add': 'modules.add',
    'preset-empty': 'preset.empty',
  };

  Object.entries(buttonMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = panelT(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = panelT(el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', panelT(el.dataset.i18nAria));
  });

  const ariaMap = {
    'columns-input': 'aria.columns',
    'responsive-col-gap-input': 'aria.responsiveColGap',
    'module-size-input': 'aria.moduleSize',
    'caption-size-input': 'aria.captionSize',
    'row-gap-input': 'aria.rowGap',
    'background-color': 'aria.backgroundColor',
    'text-color': 'aria.textColor',
    'module-hover-scale-input': 'aria.moduleHoverScale',
    'module-hover-zone-input': 'aria.moduleHoverZone',
    'module-hover-zone-smoothness-input': 'aria.moduleHoverZoneSmoothness',
    'module-hover-duration-input': 'aria.moduleHoverDuration',
    'module-hover-parallax-amount-input': 'aria.moduleHoverParallax',
    'module-hover-dim-scale-input': 'aria.moduleHoverDimScale',
    'module-hover-blur-amount-input': 'aria.moduleHoverBlurAmount',
    'module-hover-cascade-min-input': 'aria.moduleHoverCascadeMin',
    'module-hover-cascade-radius-input': 'aria.moduleHoverCascadeRadius',
    'module-hover-cascade-sharpness-input': 'aria.moduleHoverCascadeSharpness',
    'scroll-stagger-input': 'aria.scrollStagger',
    'scroll-intensity-input': 'aria.scrollIntensity',
    'scroll-scale-amount-input': 'aria.scrollScaleAmount',
    'scroll-scale-speed-input': 'aria.scrollScaleSpeed',
    'scroll-scale-ratio-input': 'aria.scrollScaleRatio',
    'scroll-blur-amount-input': 'aria.scrollBlurAmount',
    'scroll-blur-speed-input': 'aria.scrollBlurSpeed',
    'scroll-blur-ratio-input': 'aria.scrollBlurRatio',
    'inertia-sensitivity-input': 'aria.inertiaSensitivity',
    'inertia-duration-input': 'aria.inertiaDuration',
  };

  Object.entries(ariaMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('aria-label', panelT(key));
  });

  const devPanel = document.getElementById('dev-panel');
  if (devPanel) devPanel.setAttribute('aria-label', panelT('panel.aria'));

  const tablist = document.querySelector('.dev-tools__tabs');
  if (tablist) tablist.setAttribute('aria-label', panelT('tablist.aria'));

  const panelOpen = document.getElementById('panel-open');
  if (panelOpen) panelOpen.setAttribute('aria-label', panelT('panel.open'));

  const panelClose = document.getElementById('panel-close');
  if (panelClose) panelClose.setAttribute('aria-label', panelT('panel.close'));

  const moduleList = document.getElementById('module-list');
  if (moduleList) moduleList.setAttribute('aria-label', panelT('modules.listAria'));

  const hoverSvg = document.getElementById('hover-curve-svg');
  if (hoverSvg) hoverSvg.setAttribute('aria-label', panelT('aria.hoverCurve'));

  const inertiaSvg = document.getElementById('curve-svg');
  if (inertiaSvg) inertiaSvg.setAttribute('aria-label', panelT('aria.inertiaCurve'));

  document.querySelectorAll('[data-panel-lang]').forEach((btn) => {
    const isActive = btn.dataset.panelLang === panelLang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  const langGroup = document.querySelector('.dev-tools__lang');
  if (langGroup) langGroup.setAttribute('aria-label', panelT('lang.switch'));

  document.documentElement.lang = panelLang;
}

function bindPanelLangSwitcher() {
  document.querySelectorAll('[data-panel-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setPanelLang(btn.dataset.panelLang);
    });
  });
}
