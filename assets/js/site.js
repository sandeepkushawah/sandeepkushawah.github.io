/* ==========================================================================
   Sandeep Kushawah — portfolio interactions
   No external libraries. Respects prefers-reduced-motion.
   ========================================================================== */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- Theme (dark / light) with persistence ----------------------------- */
  var root = document.documentElement;
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
  var stored = null;
  try { stored = localStorage.getItem("skn-theme"); } catch (e) {}
  if (!stored) stored = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(stored);

  document.addEventListener("click", function (e) {
    var t = e.target.closest(".theme-toggle");
    if (!t) return;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("skn-theme", next); } catch (err) {}
  });

  /* ----- Mobile nav -------------------------------------------------------- */
  var burger = document.querySelector(".nav__burger");
  var links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ----- Nav: shadow on scroll + active section --------------------------- */
  var nav = document.querySelector(".nav");
  var sectionLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var sections = sectionLinks.map(function (a) {
    var id = a.getAttribute("href").slice(1);
    return document.getElementById(id);
  });
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
    var pos = window.scrollY + 120, current = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].offsetTop <= pos) current = sectionLinks[i];
    }
    sectionLinks.forEach(function (a) { a.classList.remove("active"); });
    if (current) current.classList.add("active");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Scroll reveal (IntersectionObserver) ----------------------------- */
  var reveal = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add("in"); });
  }

  /* ----- Animated counters ------------------------------------------------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ----- Lightbox (images + videos) --------------------------------------- */
  var lb = document.querySelector(".lightbox");
  if (lb) {
    var lbContent = lb.querySelector(".lightbox__content");
    function openLB(html) { lbContent.innerHTML = html; lb.classList.add("open"); document.body.style.overflow = "hidden"; }
    function closeLB() { lb.classList.remove("open"); lbContent.innerHTML = ""; document.body.style.overflow = ""; }
    document.addEventListener("click", function (e) {
      var trig = e.target.closest("[data-lightbox]");
      if (trig) {
        e.preventDefault();
        var src = trig.getAttribute("data-lightbox");
        var type = trig.getAttribute("data-lb-type") || "image";
        if (type === "video") openLB('<video src="' + src + '" controls autoplay loop playsinline></video>');
        else openLB('<img src="' + src + '" alt="">');
        return;
      }
      if (e.target.closest(".lightbox__close") || e.target === lb) closeLB();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLB(); });
  }

  /* ----- Hero particle network -------------------------------------------- */
  var canvas = document.querySelector(".hero__canvas");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var W, H, DPR = Math.min(window.devicePixelRatio || 1, 2), particles = [], raf;
    function resize() {
      var r = canvas.parentElement.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      var count = Math.max(28, Math.min(70, Math.round(W * H / 16000)));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
          r: Math.random() * 1.8 + 1 });
      }
    }
    var mouse = { x: -999, y: -999 };
    canvas.parentElement.addEventListener("mousemove", function (e) {
      var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener("mouseleave", function () { mouse.x = -999; mouse.y = -999; });
    function tick() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        var dxm = p.x - mouse.x, dym = p.y - mouse.y, dm = Math.sqrt(dxm*dxm + dym*dym);
        if (dm < 120) { p.x += dxm / dm * .6; p.y += dym / dm * .6; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(93,202,165,.75)";
        ctx.fill();
      }
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x, dy = particles[a].y - particles[b].y;
          var d = Math.sqrt(dx*dx + dy*dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = "rgba(93,202,165," + (0.16 * (1 - d / 130)) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    }
    resize(); tick();
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(resize, 200); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { cancelAnimationFrame(raf); } else { tick(); }
    });
  }

  /* ----- Copy to clipboard (BibTeX) --------------------------------------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".copy-btn");
    if (!btn) return;
    var pre = btn.closest("pre");
    var text = pre ? pre.querySelector("code").innerText : "";
    function done() {
      var label = btn.querySelector("span");
      var old = label ? label.textContent : "";
      if (label) label.textContent = "Copied";
      setTimeout(function () { if (label) label.textContent = old || "Copy"; }, 1600);
    }
    if (navigator.clipboard) { navigator.clipboard.writeText(text).then(done).catch(done); }
    else {
      var ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta);
      ta.select(); try { document.execCommand("copy"); } catch (err) {} document.body.removeChild(ta); done();
    }
  });

  /* ----- Footer year ------------------------------------------------------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
