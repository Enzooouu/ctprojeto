/* ==========================================================================
   Construflama | Protótipo da home
   Interações: cabeçalho ao rolar, menu mobile, submenus, carrossel,
   animações de entrada e avisos de links ainda não criados.
   ========================================================================== */
(function () {
  'use strict';

  var desktopQuery = window.matchMedia('(min-width: 1180px)');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------------------
     1. Cabeçalho: muda de aspecto depois de rolar um pouco
     ------------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  var ticking = false;

  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
  updateHeader();

  /* ------------------------------------------------------------------------
     2. Menu mobile (hambúrguer)
     ------------------------------------------------------------------------ */
  var nav = document.getElementById('site-nav');
  var toggle = document.querySelector('.nav-toggle');
  var toggleLabel = toggle.querySelector('.sr-only');

  function setMenu(open, returnFocus) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggleLabel.textContent = open ? 'Fechar menu' : 'Abrir menu';
    document.body.classList.toggle('nav-open', open);
    // Ao abrir, o cabeçalho fica sólido para o painel não "flutuar" sobre o hero
    if (open) header.classList.add('is-scrolled'); else updateHeader();

    if (open) {
      var first = nav.querySelector('button, a');
      if (first) first.focus();
    } else if (returnFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Fecha o menu ao escolher um link (âncoras na mesma página)
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a') && !desktopQuery.matches) setMenu(false);
  });

  // Mantém o foco do teclado dentro do painel aberto
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Tab' || !nav.classList.contains('is-open')) return;
    var focusables = [toggle].concat(Array.prototype.filter.call(
      nav.querySelectorAll('a, button'),
      function (el) { return el.offsetParent !== null; }
    ));
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });

  // Ao passar para o desktop, garante que o painel mobile seja fechado
  desktopQuery.addEventListener('change', function (e) {
    if (e.matches && nav.classList.contains('is-open')) setMenu(false);
    closeAllSubmenus();
  });

  /* ------------------------------------------------------------------------
     3. Submenus: hover no desktop, clique no mobile (e teclado em ambos)
     ------------------------------------------------------------------------ */
  var subItems = Array.prototype.slice.call(document.querySelectorAll('.has-sub'));
  var closeTimer = null;

  function setSubmenu(item, open) {
    item.classList.toggle('is-open', open);
    item.querySelector('.nav-link').setAttribute('aria-expanded', String(open));
  }

  function closeAllSubmenus(except) {
    subItems.forEach(function (item) {
      if (item !== except) setSubmenu(item, false);
    });
  }

  subItems.forEach(function (item) {
    var button = item.querySelector('.nav-link');

    button.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      // No desktop só um submenu aberto por vez; no mobile funciona como acordeão
      if (desktopQuery.matches) closeAllSubmenus(item);
      setSubmenu(item, willOpen);
    });

    item.addEventListener('mouseenter', function () {
      if (!desktopQuery.matches) return;
      clearTimeout(closeTimer);
      closeAllSubmenus(item);
      setSubmenu(item, true);
    });

    item.addEventListener('mouseleave', function () {
      if (!desktopQuery.matches) return;
      // Pequeno atraso para perdoar movimentos diagonais do mouse
      closeTimer = setTimeout(function () { setSubmenu(item, false); }, 160);
    });

    // Fecha quando o foco do teclado sai do item (desktop)
    item.addEventListener('focusout', function (event) {
      if (desktopQuery.matches && !item.contains(event.relatedTarget)) setSubmenu(item, false);
    });
  });

  // Clique fora fecha os submenus do desktop
  document.addEventListener('click', function (event) {
    if (desktopQuery.matches && !event.target.closest('.has-sub')) closeAllSubmenus();
  });

  // Esc fecha o submenu aberto (devolvendo o foco ao botão) ou o menu mobile
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    var openItem = subItems.filter(function (item) { return item.classList.contains('is-open'); })[0];
    if (openItem && desktopQuery.matches) {
      setSubmenu(openItem, false);
      openItem.querySelector('.nav-link').focus();
    } else if (nav.classList.contains('is-open')) {
      setMenu(false, true);
    }
  });

  /* ------------------------------------------------------------------------
     4. Carrossel de produtos: setas, arrasto com mouse e barra de progresso.
        No celular o arrasto é o rolar nativo (com scroll-snap).
     ------------------------------------------------------------------------ */
  var track = document.querySelector('.carousel__track');

  if (track) {
    var prev = document.querySelector('[data-carousel-prev]');
    var next = document.querySelector('[data-carousel-next]');
    var bar = document.querySelector('.carousel__bar');

    function step() {
      var card = track.querySelector('.product');
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    }

    function scrollByCards(direction) {
      track.scrollBy({ left: direction * step(), behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    }

    function updateCarousel() {
      var max = track.scrollWidth - track.clientWidth;
      var ratio = max > 0 ? track.scrollLeft / max : 0;
      var visible = track.scrollWidth > 0 ? track.clientWidth / track.scrollWidth : 1;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
      bar.style.setProperty('--progresso', (visible * 100) + '%');
      bar.style.setProperty('--inicio', (ratio * (1 - visible) * 100) + '%');
    }

    prev.addEventListener('click', function () { scrollByCards(-1); });
    next.addEventListener('click', function () { scrollByCards(1); });
    track.addEventListener('scroll', updateCarousel, { passive: true });
    window.addEventListener('resize', updateCarousel);
    updateCarousel();

    // Setas do teclado quando o carrossel está focado
    track.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') { event.preventDefault(); scrollByCards(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); scrollByCards(-1); }
    });

    // Arrasto com mouse (toque e caneta já rolam nativamente)
    var dragging = false;
    var moved = false;
    var startX = 0;
    var startScroll = 0;

    track.addEventListener('pointerdown', function (event) {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
    });

    window.addEventListener('pointermove', function (event) {
      if (!dragging) return;
      var dx = event.clientX - startX;
      if (!moved && Math.abs(dx) > 4) {
        moved = true;
        track.classList.add('is-dragging');
      }
      if (moved) track.scrollLeft = startScroll - dx;
    });

    window.addEventListener('pointerup', function () {
      if (!dragging) return;
      dragging = false;
      if (moved) {
        track.classList.remove('is-dragging');
        // Reencaixa no card mais próximo depois de soltar
        var s = step();
        track.scrollTo({ left: Math.round(track.scrollLeft / s) * s, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      }
    });

    // Evita que um arrasto vire clique em link
    track.addEventListener('click', function (event) {
      if (moved) { event.preventDefault(); moved = false; }
    }, true);

    // Impede o "arrastar imagem/link" nativo do navegador
    track.addEventListener('dragstart', function (event) { event.preventDefault(); });
  }

  /* ------------------------------------------------------------------------
     5. Animações de entrada ao rolar (respeita prefers-reduced-motion via CSS)
     ------------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ------------------------------------------------------------------------
     6. Links ainda não criados neste protótipo: aviso discreto em vez de
        página quebrada. TODO: remover quando as páginas existirem.
     ------------------------------------------------------------------------ */
  var toast = document.querySelector('.toast');
  var toastTimer = null;

  document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-proto]');
    if (!link) return;
    event.preventDefault();
    toast.textContent = link.getAttribute('data-proto') || 'Esta página será criada na próxima etapa do protótipo.';
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 3200);
  });

  /* ------------------------------------------------------------------------
     7. Ano atual no rodapé
     ------------------------------------------------------------------------ */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
