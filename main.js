// Entry point for portfolio interactions:
// - reveal-on-scroll animations
// - page fade transitions
// - theme toggle (dark / light)
// - projects filter
// - contact form handling
// - optional custom cursor

function initRevealOnScroll() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length || !("IntersectionObserver" in window)) {
    // Fallback: показати все без анімації
    revealElements.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.revealDelay;
          if (delay) {
            el.style.transitionDelay = delay;
          }
          el.classList.add("reveal-visible");
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function initPageTransitions() {
  const body = document.body;
  body.classList.add("page-fade-in");

  const isInternalLink = (link) => {
    if (!link.href) return false;
    const url = new URL(link.href, window.location.href);
    const current = window.location;
    const isSameOrigin = url.origin === current.origin;
    const isHtml = url.pathname.endsWith(".html") || url.pathname === "/";
    return isSameOrigin && isHtml;
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    if (link.target === "_blank" || link.hasAttribute("download")) return;
    if (!isInternalLink(link)) return;

    event.preventDefault();
    const href = link.getAttribute("href");
    if (!href) return;

    body.classList.add("page-fade-out");
    setTimeout(() => {
      window.location.href = href;
    }, 180);
  });
}

function getPreferredTheme() {
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;

  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

function initThemeToggle() {
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });

  if (window.matchMedia) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", (event) => {
      const stored = window.localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        return; // користувач зробив явний вибір
      }
      applyTheme(event.matches ? "dark" : "light");
    });
  }
}

function initProjectsFilter() {
  const grid = document.querySelector(".projects-grid");
  const filterBar = document.querySelector(".projects-filters");
  if (!grid || !filterBar) return;

  const cards = Array.from(grid.querySelectorAll(".project-card"));
  if (!cards.length) return;

  const buttons = Array.from(filterBar.querySelectorAll("[data-filter]"));

  const update = (filter) => {
    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(",").map((t) => t.trim().toLowerCase());
      const shouldShow = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter || "all";

      buttons.forEach((b) => b.classList.toggle("active", b === btn));
      update(filter);
    });
  });

  update("all");
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const submitButton = form.querySelector("button[type='submit']");
  const statusEl = form.querySelector(".form-status");

  const setStatus = (type, message) => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.classList.remove("form-status--success", "form-status--error");
    if (type === "success") statusEl.classList.add("form-status--success");
    if (type === "error") statusEl.classList.add("form-status--error");
  };

  const setLoading = (isLoading) => {
    if (!submitButton) return;
    submitButton.disabled = isLoading;
    submitButton.classList.toggle("btn-loading", isLoading);
    submitButton.textContent = isLoading ? "Sending..." : "Send message";
  };

  const clearFieldErrors = () => {
    form.querySelectorAll(".form-field").forEach((field) => {
      field.classList.remove("has-error");
      const err = field.querySelector(".form-error");
      if (err) err.textContent = "";
    });
  };

  const setFieldError = (name, message) => {
    const field = form.querySelector(`.form-field[data-field='${name}']`);
    if (!field) return;
    field.classList.add("has-error");
    const err = field.querySelector(".form-error");
    if (err) err.textContent = message;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFieldErrors();
    setStatus("", "");

    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    let hasError = false;

    if (!name) {
      setFieldError("name", "Please enter your name.");
      hasError = true;
    }

    if (!email) {
      setFieldError("email", "Please enter your email.");
      hasError = true;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setFieldError("email", "Please enter a valid email address.");
      hasError = true;
    }

    if (!message || message.length < 10) {
      setFieldError("message", "Please write a slightly longer message.");
      hasError = true;
    }

    if (hasError) {
      setStatus("error", "Please fix the highlighted fields.");
      return;
    }

    setLoading(true);

    // Імітація успішної відправки – можна замінити на реальний fetch до сервісу форми.
    setTimeout(() => {
      setLoading(false);
      form.reset();
      setStatus("success", "Thanks! Your message has been sent.");
    }, 900);
  });
}

function initCustomCursor() {
  // Custom cursor intentionally removed – using the native cursor for clarity.
}

function init() {
  initRevealOnScroll();
  initPageTransitions();
  initThemeToggle();
  initProjectsFilter();
  initContactForm();
  initCustomCursor();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

