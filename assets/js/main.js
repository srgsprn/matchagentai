/**
 * MatchAgent — premium landing
 */
(function () {
  'use strict';

  var TRANSLATIONS = {
    ru: {
      theme_toggle_light: 'Включить светлую тему',
      theme_toggle_dark: 'Включить тёмную тему',
      nav_product: 'Продукт',
      nav_how: 'Как это работает',
      nav_app: 'Приложение',
      nav_pricing: 'Тарифы',
      nav_register: 'Начать',
      aria_menu: 'Открыть меню',
      hero_label: 'MatchAgent',
      hero_title_1: 'Только те,',
      hero_title_2: 'кто вам подходят.',
      hero_subtitle: 'AI-агент отбирает, общается и формирует шорт-лист — каждое знакомство осмысленное.',
      hero_btn_join: 'Попробовать бесплатно',
      hero_btn_how: 'Как это работает',
      hero_note: '3 дня бесплатно · Карта не нужна для старта',
      hero_scroll_aria: 'Прокрутить вниз',
      stat_1_val: '1 000+',
      stat_1_label: 'Параллельных диалогов ИИ',
      stat_2_val: '98%',
      stat_2_label: 'Шума отсечено',
      stat_3_val: '24/7',
      stat_3_label: 'Агент всегда активен',
      stat_4_val: 'Приватно',
      stat_4_label: 'Контакты по вашим правилам',
      product_eyebrow: 'Почему MatchAgent',
      intro_title: 'Ваши стандарты. Наш интеллект.',
      intro_text: 'Опишите, кто вы и кого ищете. MatchAgent ведёт диалоги, проверяет совместимость и формирует шорт-лист, достойный вашего времени.',
      product_p1: 'Подбор по критериям — без бесконечных свайпов',
      product_p2: 'Глубокий скрининг до первого «привет»',
      product_p3: 'Полная прозрачность в личном кабинете',
      panel_status: 'Активен',
      panel_label: 'Активность агента',
      panel_footer_count: '12',
      panel_metric: '847',
      panel_metric_sub: 'анкет проверено сегодня',
      panel_footer: 'матчей готовы к вашему просмотру',
      how_eyebrow: 'Как это работает',
      how_title: 'Три шага. Один понятный путь.',
      how_lead: 'От профиля до верифицированного шорт-листа — MatchAgent берёт путь на себя.',
      s1_title: 'Расскажите, кто вы',
      s1_text: 'Поделитесь ценностями, образом жизни и границами. Чем больше контекста — тем точнее агент.',
      s2_title: 'Задайте критерии матча',
      s2_text: 'Опишите идеального партнёра. MatchAgent проверяет фото, тон и интересы — и запускает структурированные проверки совместимости.',
      s3_title: 'Просмотрите шорт-лист',
      s3_text: 'Верифицированные матчи с полным контекстом. Вы решаете, с кем встретиться — отбор уже сделан.',
      gallery_eyebrow: 'Внутри MatchAgent',
      gallery_title: 'Ваш центр управления',
      gallery_lead: 'Замените заглушки скриншотами Telegram-бота — вставьте изображения в рамки телефонов.',
      g1_label: 'Профиль',
      g1_hint: 'Профиль и критерии',
      g1_text: 'Задайте стандарты один раз. Агент всё запомнит.',
      g2_hint: 'Диалоги агента',
      g2_text: 'ИИ ведёт беседы — до вас доходят только победители.',
      g3_hint: 'Отобранные матчи',
      g3_text: 'Контакты только с вашего одобрения. Приватность по умолчанию.',
      benefits_eyebrow: 'Возможности',
      benefits_title: 'Для тех, кто ценит время',
      b1_title: 'Ноль потерянных часов',
      b1_text: 'MatchAgent отсекает 98% неподходящих профилей. Ваше внимание — только на важном.',
      b2_title: 'Проверенные диалоги',
      b2_text: 'Обманщики и несоответствия выявляются в переписке — включая верификацию по фото.',
      b3_text_merged: 'Дашборд с образом жизни, интересами, контекстом и историей чата — каждое свидание осознанно.',
      proof_eyebrow: 'Результаты',
      proof_title: 'Создано для реальных итогов',
      quote_1: '«Я перестал свайпать. К пятнице агент подготовил три сильных варианта.»',
      quote_1_author: '— Участник раннего доступа',
      quote_2: '«Наконец знакомства, которые уважают моё время и стандарты.»',
      quote_2_author: '— Пользователь Premium',
      safety_1: 'Данные не продаются и не раскрываются',
      safety_2: 'Полный контроль приватности',
      safety_3: 'Контакты только после вашего одобрения',
      pricing_eyebrow: 'Тарифы',
      pricing_title: 'Выберите темп',
      price_basic_name: 'Базовый',
      price_trial: '3 дня бесплатно',
      price_per_month: '/ мес.',
      price_3months: '/ 3 мес.',
      price_per_year: '/ год',
      price_btn: 'Выбрать',
      price_badge: 'Популярный',
      price_standard_name: 'Премиум',
      price_premium_name: 'Ultimate',
      cta_title: 'Ваш следующий этап начинается здесь',
      cta_text: 'Присоединяйтесь к MatchAgent — пусть интеллект берёт на себя рутину, пока вы живёте.',
      cta_register: 'Начать бесплатно',
      footer_copy: '© 2026 MatchAgent. Все права защищены.',
      floating_cta: 'Начать'
    },
    en: {
      theme_toggle_light: 'Switch to light theme',
      theme_toggle_dark: 'Switch to dark theme',
      nav_product: 'Product',
      nav_how: 'How it works',
      nav_app: 'Inside the app',
      nav_pricing: 'Pricing',
      nav_register: 'Get started',
      aria_menu: 'Open menu',
      hero_label: 'MatchAgent',
      hero_title_1: 'Meet people',
      hero_title_2: 'worth your time.',
      hero_subtitle: 'An AI agent screens, converses, and shortlists on your behalf — so every introduction is intentional.',
      hero_btn_join: 'Start free trial',
      hero_btn_how: 'See how it works',
      hero_note: '3-day trial · No card required to explore',
      hero_scroll_aria: 'Scroll to learn more',
      stat_1_val: '1,000+',
      stat_1_label: 'Parallel AI dialogues',
      stat_2_val: '98%',
      stat_2_label: 'Noise filtered out',
      stat_3_val: '24/7',
      stat_3_label: 'Agent always on',
      stat_4_val: 'Private',
      stat_4_label: 'Contacts on your terms',
      product_eyebrow: 'Why MatchAgent',
      intro_title: 'Your standards. Our intelligence.',
      intro_text: 'Define who you are and who you want. MatchAgent runs the conversations, validates compatibility, and delivers a shortlist worth your time.',
      product_p1: 'Matching by criteria — not endless swipes',
      product_p2: 'Deep screening before your first hello',
      product_p3: 'Full visibility in your private dashboard',
      panel_status: 'Active',
      panel_label: 'Agent activity',
      panel_footer_count: '12',
      panel_metric: '847',
      panel_metric_sub: 'profiles screened today',
      panel_footer: 'matches ready for your review',
      how_eyebrow: 'How it works',
      how_lead: 'From your profile to a verified shortlist — MatchAgent handles everything in between.',
      how_title: 'Three steps. One clear path.',
      s1_title: 'Tell us who you are',
      s1_text: 'Share your values, lifestyle, and boundaries. The more context you give, the sharper the agent becomes.',
      s2_title: 'Set your match criteria',
      s2_text: 'Describe your ideal partner. MatchAgent screens photos, tone, and interests — then runs structured compatibility checks.',
      s3_title: 'Review your shortlist',
      s3_text: 'Get vetted matches with full context. You choose who to meet — we did the screening.',
      gallery_eyebrow: 'Inside MatchAgent',
      gallery_title: 'Your command center',
      gallery_lead: 'Replace placeholders with your Telegram bot screenshots — drop images into each phone frame.',
      g1_label: 'Profile',
      g1_hint: 'Profile & criteria',
      g1_text: 'Set your standards once. The agent remembers everything.',
      g2_hint: 'Agent conversations',
      g2_text: 'Watch AI dialogues unfold — only winners reach you.',
      g3_hint: 'Curated matches',
      g3_text: 'Approve contacts on your terms. Privacy built in.',
      benefits_eyebrow: 'Capabilities',
      benefits_title: 'Built for people who value time',
      b1_title: 'Zero wasted hours',
      b1_text: 'MatchAgent filters 98% of unsuitable profiles before they reach you. Your attention stays on what matters.',
      b2_title: 'Screened conversations',
      b2_text: 'Deceivers, scammers, and mismatches are caught in dialogue — including photo-based age and profile verification.',
      b3_text_merged: 'Dashboard with lifestyle, interests, family context, and chat history — so every date is an informed choice.',
      proof_eyebrow: 'Outcomes',
      proof_title: 'Designed for real results',
      quote_1: '"I stopped swiping entirely. My agent had three solid options by Friday."',
      quote_1_author: '— Early access member',
      quote_2: '"Finally dating that respects my time and my standards."',
      quote_2_author: '— Premium user',
      safety_1: 'Your data never sold or exposed',
      safety_2: 'End-to-end privacy controls',
      safety_3: 'Contacts shared only with your approval',
      pricing_eyebrow: 'Plans',
      pricing_title: 'Choose your pace',
      price_basic_name: 'Basic',
      price_trial: '3 days free',
      price_per_month: '/ month',
      price_3months: '/ 3 months',
      price_per_year: '/ year',
      price_btn: 'Select',
      price_badge: 'Most popular',
      price_standard_name: 'Premium',
      price_premium_name: 'Ultimate',
      cta_title: 'Your next chapter starts here',
      cta_text: 'Join MatchAgent — let intelligence do the heavy lifting while you live your life.',
      cta_register: 'Get started free',
      footer_copy: '© 2026 MatchAgent. All rights reserved.',
      floating_cta: 'Get started'
    }
  };

  var THEME_KEY = 'ma-theme';

  var header = document.querySelector('.header');
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  var floatingCta = document.querySelector('.floating-cta');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function getStoredTheme() {
    try {
      var t = localStorage.getItem(THEME_KEY);
      if (t === 'light' || t === 'dark') return t;
    } catch (_) {}
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function getStoredLang() {
    try {
      var l = localStorage.getItem('ma-lang');
      return l === 'en' || l === 'ru' ? l : 'en';
    } catch (_) {
      return 'en';
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var isLight = theme === 'light';
    btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    var t = TRANSLATIONS[getStoredLang()] || TRANSLATIONS.en;
    btn.setAttribute('aria-label', isLight ? t.theme_toggle_dark : t.theme_toggle_light);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  }

  function setLang(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;
    try { localStorage.setItem('ma-lang', lang); } catch (_) {}
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-attr][data-i18n-attr-key]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-attr-key');
      var attr = el.getAttribute('data-i18n-attr');
      if (attr && key && t[key] != null) el.setAttribute(attr, t[key]);
    });
    document.querySelectorAll('.lang-switcher__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    applyTheme(document.documentElement.getAttribute('data-theme') || getStoredTheme());
  }

  document.querySelectorAll('.lang-switcher__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  applyTheme(getStoredTheme());
  setLang(getStoredLang());

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !open);
      nav.classList.toggle('nav--open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav--open');
        document.body.style.overflow = '';
      });
    });
  }

  function onScroll() {
    if (header) header.classList.toggle('header--scrolled', window.scrollY > 40);
    if (floatingCta) {
      floatingCta.classList.toggle('is-visible', window.scrollY > 500);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!reducedMotion && 'IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  if (!reducedMotion) {
    var hero = document.querySelector('.hero__ambient');
    if (hero) {
      window.addEventListener('scroll', function () {
        var y = Math.min(window.scrollY * 0.08, 72);
        hero.style.transform = 'translate3d(0, ' + y + 'px, 0)';
      }, { passive: true });
    }
  }

  document.querySelectorAll('.price-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.price-card').forEach(function (c) {
        c.classList.remove('price-card--selected');
      });
      card.classList.add('price-card--selected');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      if (anchor.closest('.price-card')) return;
      var id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        var instant = window.matchMedia('(max-width: 899px)').matches || reducedMotion;
        target.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  window.MatchAgent = {
    setLang: setLang,
    getLang: getStoredLang
  };
})();
