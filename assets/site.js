/* BC Guide Outfitters mock-up — shared chrome + interactions.
   Header/footer are injected here so the 7 mock pages stay in sync (a real build would use templates). */
const IMG = "assets/wp/";
// Public number = BCGO's Twilio toll-free line (TFN). Calls forward to Mark's phone;
// texts get the HO SMS assistant. Mark's cell is deliberately NOT published anywhere.
// Goes live with the new site, after toll-free verification + assistant setup.
const PHONE = "866-589-5183";
const PHONE_E164 = "+18665895183";
const TEXT_BODY = "Hi, I have a question about a hunt.";
const SMS_URL = `sms:${PHONE_E164}?&body=${encodeURIComponent(TEXT_BODY)}`;
// Public address on BCGO's own domain (planned to forward to Mark's Gmail). Mark's Gmail is not published.
const EMAIL = "markbcgo@gmail.com";
const PORTAL_URL = "https://bcgo.huntoutfitter.app/login";
// Booking (updated 2026-11-12). Request to Book goes to book.html, which embeds HO's
// booking widget (embed.js data-widget="book" -> bcgo.huntoutfitter.app/embed/book).
// BCGO's hunt types are all request-to-book: a request creates an inquiry booking and
// charges nothing; Mark confirms first. Species pages embed the same widget with
// data-hunt=<HO hunt type id> to preselect the hunt. Only hunts set up in HO are
// bookable (moose, elk, black bear, lynx, wolf); mule deer, cougar, mountain goat and
// Shiras moose go to the contact page's lead form ("Ask Mark") instead.
const BOOK_URL = "book.html";
const ASK_URL = "contact.html";


const SPECIES = [
  ["moose.html", "Canadian Moose", "Fall rut"],
  ["#", "Black Bear", "Spring"],
  ["#", "Rocky Mtn Elk", "Fall rut"],
  ["#", "Mule Deer", "Fall"],
  ["#", "Mountain Goat", "Fall"],
  ["#", "Cougar", "Winter"],
  ["#", "Canada Lynx", "Winter"],
  ["#", "Timber Wolf", "Winter"],
];

function header(page) {
  const a = (href, label, key) => `<a href="${href}"${page === key ? ' class="active"' : ""}>${label}</a>`;
  return `
  <div class="utility"><div class="wrap">
    <span>Family-run · Northern British Columbia since day one</span>
    <div class="u-right">
      <a href="${SMS_URL}">💬 Text or call ${PHONE}</a>
      <a href="mailto:${EMAIL}">${EMAIL}</a>
      <a href="${PORTAL_URL}" target="_blank" rel="noopener">Client Portal ↗</a>
    </div>
  </div></div>
  <header class="site-header"><div class="wrap">
    <a class="brand" href="index.html"><img class="brand-logo" src="assets/img/logo.png" width="319" height="132" alt="BC Guide Outfitters — home"></a>
    <a class="btn btn-blaze mobile-book" href="${BOOK_URL}">Request</a>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav" aria-label="Main">
      <div class="dd">
        <button type="button" aria-haspopup="true"${page === "hunts" ? ' class="active"' : ""}>Hunts</button>
        <div class="dd-menu">
          ${SPECIES.map(([h, n, s]) => `<a href="${h}">${n} <small>${s}</small></a>`).join("")}
          <a class="all" href="hunts.html">View all hunts →</a>
        </div>
      </div>
      ${a("rates.html", "Rates", "rates")}
      ${a("about.html#territory", "Territory", "territory")}
      ${a("about.html", "About", "about")}
      ${a("gallery.html", "Gallery", "gallery")}
      ${a("faq.html", "FAQ", "faq")}
      ${a("contact.html", "Contact", "contact")}
      <a href="https://guideschoolbc.com/" target="_blank" rel="noopener">Guide School ↗</a>
      <a class="nav-portal" href="${PORTAL_URL}" target="_blank" rel="noopener">Client Portal ↗</a>
      <a class="btn btn-blaze" href="${BOOK_URL}">Request to Book</a>
    </nav>
  </div></header>`;
}

function footer() {
  return `
  <section class="wood cta-band">
    <div class="wrap">
      <div>
        <span class="eyebrow light">Cancellation list</span>
        <h2>Most hunts book a year or more out.</h2>
        <p>Openings come up from cancellations. Join the list and we'll email you the moment a spot opens.</p>
      </div>
      <form class="signup" onsubmit="event.preventDefault(); this.innerHTML='<strong>✓ You\\'re on the list (mock-up)</strong>';">
        <input type="email" placeholder="Your email address" aria-label="Email address" required>
        <button class="btn btn-blaze" type="submit">Join the list</button>
      </form>
    </div>
  </section>
  <footer class="site-footer">
    <div class="wrap cols">
      <div>
        <a class="brand" href="index.html"><img class="brand-logo brand-logo-lg" src="assets/img/logo.png" width="319" height="132" alt="BC Guide Outfitters — home"></a>
        <p style="margin-top:18px">A family-run outfit hunting moose, bear, elk, deer, goat and predators across northern British Columbia.</p>
        <div class="socials">
          <a href="https://www.facebook.com/mark.werner.376" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z"/></svg></a>
          <a href="https://www.instagram.com/bcguideoutfitters" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 2c-2.7 0-3 0-4.1.1C4.3 2.3 2.3 4.3 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.6 2.2 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.6-.2 5.6-2.2 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.6-2.2-5.6-5.8-5.8C15 2 14.7 2 12 2z"/></svg></a>
          <a href="mailto:${EMAIL}" aria-label="Email"><svg viewBox="0 0 24 24"><path d="M3 5h18v14H3zm2 2v.5l7 4.5 7-4.5V7zm14 10V9.8l-7 4.5-7-4.5V17z"/></svg></a>
        </div>
      </div>
      <div>
        <h4>Hunts</h4>
        <ul>${SPECIES.slice(0, 6).map(([h, n]) => `<li><a href="${h}">${n}</a></li>`).join("")}<li><a href="hunts.html">All hunts →</a></li></ul>
      </div>
      <div>
        <h4>Plan your trip</h4>
        <ul>
          <li><a href="rates.html">Rates &amp; packages</a></li>
          <li><a href="rates.html#licences">Licences &amp; tags</a></li>
          <li><a href="assets/wp/2018/10/Thingstobringhunt.pdf">What to bring (PDF)</a></li>
          <li><a href="about.html#territory">The territory</a></li>
          <li><a href="faq.html">FAQ &amp; text line</a></li>
          <li><a href="${PORTAL_URL}" target="_blank" rel="noopener">Client portal ↗</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>Text or call <a href="${SMS_URL}">${PHONE}</a><br><small style="opacity:.7">Texts get instant auto-replies to common questions</small></li>
          <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
          <li><a href="contact.html">Send an inquiry</a></li>
          <li>PO Box 3159, Kamloops, BC V2C 6B8</li>
        </ul>
        <div class="assoc"><span>GOABC MEMBER</span><span>LICENSED BC OUTFITTER</span></div>
      </div>
    </div>
    <p class="wrap powered-by">We run our bookings, deposits, signed forms and hunter licenses through <a href="https://www.huntoutfitter.app/" target="_blank" rel="noopener">Hunt Outfitter</a>, booking software built for hunting outfitters.</p>
    <div class="wrap legal">
      <span>© 2026 BC Guide Outfitters. All rights reserved.</span>
      <span><a href="privacy.html">Privacy</a> · <a href="https://guideschoolbc.com/">BC Guides Training</a></span>
    </div>
  </footer>
  <div class="callbar"><a href="${SMS_URL}">💬 Text us</a><a href="${BOOK_URL}">Request to Book</a></div>
  <div class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
    <button class="lb-close" aria-label="Close">×</button>
    <button class="lb-prev" aria-label="Previous">‹</button>
    <img alt="">
    <button class="lb-next" aria-label="Next">›</button>
  </div>`;
}

function bookCta() {
  return `
  <div class="text-cta book-cta">
    <div class="tc-body">
      <span class="eyebrow">How booking works</span>
      <h2>Request your dates, or ask Mark</h2>
      <ul class="book-ways">
        <li><strong>Moose, elk, black bear, lynx and wolf:</strong> pick your dates and send a request online. Mark confirms your hunt before any payment.</li>
        <li><strong>Mule deer, cougar, mountain goat and Shiras moose:</strong> send Mark an inquiry and he'll set it up with you.</li>
      </ul>
      <div class="btn-row">
        <a class="btn btn-blaze" href="${BOOK_URL}">Request to book</a>
        <a class="btn btn-outline" href="${ASK_URL}">Ask Mark</a>
      </div>
    </div>
  </div>`;
}

function textCta(compact) {
  return `
  <div class="text-cta${compact ? " compact" : ""}">
    <div class="tc-body">
      <span class="eyebrow">Fastest way to reach us</span>
      <h2>Got a question? Text us.</h2>
      <p>Text <strong>${PHONE}</strong> any time for instant answers about our hunts, seasons, rates and licences. Anything the auto-reply can't answer goes to Mark and the team, who reply personally.</p>
      <div class="btn-row">
        <a class="btn btn-blaze" href="${SMS_URL}">💬 Text <span class="lg">${PHONE}</span><span class="sm">us</span></a>
        <a class="btn btn-outline" href="tel:${PHONE}">Call <span class="lg">${PHONE}</span><span class="sm">us</span></a>
      </div>
      <p class="sms-terms">Auto-replies are labeled "BC Guide Outfitters Auto-reply." Msg &amp; data rates may apply. Msg frequency varies. Reply HELP for help, STOP to opt out. Texting from US and Canadian numbers only. <a href="https://bcgo.huntoutfitter.app/privacy" target="_blank" rel="noopener">Privacy</a> · <a href="https://bcgo.huntoutfitter.app/terms" target="_blank" rel="noopener">Terms</a></p>
    </div>
    <div class="tc-qr" aria-hidden="true"><div class="qr"></div><span>Scan to text us from your phone</span></div>
  </div>`;
}

function renderQr() {
  const spots = document.querySelectorAll(".tc-qr .qr");
  if (!spots.length) return;
  const draw = () => spots.forEach(el => {
    el.innerHTML = "";
    new QRCode(el, { text: `SMSTO:${PHONE_E164}:${TEXT_BODY}`, width: 132, height: 132, colorDark: "#1f2d24", colorLight: "#ffffff" });
  });
  if (window.QRCode) return draw();
  const sc = document.createElement("script");
  sc.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
  sc.onload = draw;
  document.head.append(sc);
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  document.getElementById("site-header").outerHTML = header(page);
  document.getElementById("site-footer").outerHTML = footer();
  document.querySelectorAll("[data-text-cta]").forEach(el => { el.outerHTML = textCta(el.dataset.textCta === "compact"); });
  document.querySelectorAll("[data-book-cta]").forEach(el => { el.outerHTML = bookCta(); });
  document.querySelectorAll("[data-book]").forEach(a => { a.href = BOOK_URL; });
  renderQr();

  // Header shadow on scroll
  const hdr = document.querySelector(".site-header");
  const onScroll = () => hdr.classList.toggle("scrolled", scrollY > 10);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    document.querySelector(".nav").style.top = hdr.getBoundingClientRect().bottom + "px";
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  document.querySelector(".dd > button").addEventListener("click", e => {
    if (innerWidth <= 920) e.currentTarget.parentElement.classList.toggle("open");
  });

  // Reveal on scroll
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Generic chip filters: <div class="filters" data-target=".selector"> chips carry data-filter
  document.querySelectorAll(".filters").forEach(group => {
    const items = document.querySelectorAll(group.dataset.target);
    group.addEventListener("click", e => {
      const chip = e.target.closest(".chip"); if (!chip) return;
      group.querySelectorAll(".chip").forEach(c => c.classList.toggle("is-active", c === chip));
      const f = chip.dataset.filter;
      items.forEach(it => it.classList.toggle("hidden", f !== "all" && !it.dataset.tags.split(" ").includes(f)));
    });
  });

  // Rates 1×1 / 2×1 toggle
  document.querySelectorAll(".toggle").forEach(t => t.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    t.querySelectorAll("button").forEach(x => x.classList.toggle("is-active", x === b));
    const ratio = b.dataset.ratio;
    document.querySelectorAll(".rate").forEach(r => {
      const p = r.dataset[ratio];
      r.classList.toggle("na", !p);
      if (p) {
        const el = r.querySelector(".price");
        el.classList.toggle("call", p === "call");
        el.innerHTML = p === "call" ? "Ask Mark for pricing" : `$${p} <small>${ratio === "one" ? "1 hunter : 1 guide" : "2 hunters : 1 guide"}</small>`;
      }
    });
  }));

  // Lightbox for any img[data-lightbox]
  const lb = document.querySelector(".lightbox"), lbImg = lb.querySelector("img");
  let shots = [], idx = 0;
  const show = i => { idx = (i + shots.length) % shots.length; lbImg.src = shots[idx].dataset.full || shots[idx].src; lbImg.alt = shots[idx].alt; };
  document.addEventListener("click", e => {
    const img = e.target.closest("img[data-lightbox]"); if (!img) return;
    shots = [...document.querySelectorAll("img[data-lightbox]")].filter(i => !i.closest(".hidden"));
    show(shots.indexOf(img)); lb.classList.add("open");
  });
  lb.addEventListener("click", e => {
    if (e.target.closest(".lb-prev")) show(idx - 1);
    else if (e.target.closest(".lb-next")) show(idx + 1);
    else if (e.target === lb || e.target.closest(".lb-close")) lb.classList.remove("open");
  });
  addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") lb.classList.remove("open");
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });

  // Header is injected after load, so re-apply any #anchor scroll
  if (location.hash) addEventListener("load", () => document.querySelector(location.hash)?.scrollIntoView({ behavior: "instant" }));

});
