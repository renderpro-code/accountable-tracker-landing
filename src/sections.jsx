// Landing page sections — direction A committed.
const { useState, useEffect, useRef, useCallback } = React;

// ─── Theme hook ────────────────────────────────────────────── //
const useTheme = () => {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" ? (document.body.dataset.theme || "light") : "light"
  );
  useEffect(() => {
    const obs = new MutationObserver(() => {
      setTheme(document.body.dataset.theme || "light");
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return theme;
};

const DARK_MAP = {
  "assets/app-01.png": "assets/app-01-dark.png",
};
const themedAsset = (src, theme) => (theme === "dark" && DARK_MAP[src]) ? DARK_MAP[src] : src;

// ─── App redirect (replaces Stripe checkout on landing page) ──
// All CTAs send users to the app with plan + email pre-filled.
// The app handles OAuth login, then redirects to the correct
// Stripe checkout internally. Keeps Stripe keys off the landing page.
const APP_URL = "https://ap2.accountabletracker.com/";
const BETA_TOKEN = "RkT8KeKze52Vrr8blIjUOe_qBs-lE6Nk";

const goToApp = (plan = "personal", email = "") => {
  const params = new URLSearchParams({ token: BETA_TOKEN });
  if (plan) params.set("plan", plan);
  if (email) params.set("email", email);
  window.location.href = `${APP_URL}?${params.toString()}`;
};

// ─── Logo mark ─────────────────────────────────────────────── //
const LogoMark = ({ size = 22, tone = "auto" }) => {
  const src = tone === "white" ? "assets/logo-mark-white.png" : "assets/logo-mark-black.png";
  return <img src={src} alt="" aria-hidden className="logo-mark-img" style={{ height: size, width: "auto" }} />;
};

// ─── Nav ───────────────────────────────────────────────────── //
const Nav = ({ onThemeToggle, theme, page = "landing" }) => {
  const href = (target) => {
    const [p, hash] = target.split("#");
    if (p === page) return hash ? `#${hash}` : "#top";
    const file = { landing: "/index.html", pricing: "/pricing.html", cpas: "/for-cpas.html" }[p];
    return hash ? `${file}#${hash}` : file;
  };

  const goStart = (e) => {
    e.preventDefault();
    goToApp("personal");
  };

  return (
    <header className="nav">
      <div className="container nav-row">
        <a href={href("landing")} className="nav-brand">
          <LogoMark size={26} tone={theme === "dark" ? "white" : "black"} />
          <span>Accountable</span>
        </a>
        <nav className="nav-links">
          <a href={href("landing#features")} className={page === "landing" ? "" : ""}>Features</a>
          <a href={href("landing#how")}>How it works</a>
          <a href={href("pricing")} className={page === "pricing" ? "on" : ""}>Pricing</a>
          <a href={href("cpas")} className={page === "cpas" ? "on" : ""}>For CPAs</a>
          <a href={href("landing#faq")}>FAQ</a>
        </nav>
        <div className="nav-actions">
          <button className="nav-iconbtn" onClick={onThemeToggle} aria-label="Toggle theme" title={theme === "dark" ? "Light mode" : "Dark mode"}>
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <a href={`${APP_URL}login`} className="nav-signin">Sign in</a>
          <button className="btn btn-primary btn-sm" onClick={goStart}>
            Start free trial
          </button>
        </div>
      </div>
    </header>
  );
};

// ─── Email capture ─────────────────────────────────────────── //
const EmailCapture = ({
  placeholder = "you@yourbusiness.com",
  cta = "Start free trial",
  tier = "personal",
  compact = false
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const val = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setStatus("err");
      setMsg("Please enter a valid email.");
      return;
    }
    try { localStorage.setItem("at_email", val); } catch {}
    goToApp(tier, val);
  };

  return (
    <form className={`emailform ${compact ? "emailform-compact" : ""}`} onSubmit={submit}>
      <input
        className="input"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (status === "err") setStatus("idle"); }}
        aria-invalid={status === "err"}
        required
      />
      <button type="submit" className="btn btn-primary">
        {cta} <span aria-hidden>→</span>
      </button>
      {status === "err" && <div className="emailform-msg err">{msg}</div>}
      <div className="emailform-hint">14 days free · No credit card required · Cancel anytime</div>
    </form>
  );
};

// ─── Problem section ───────────────────────────────────────── //
const PROBLEMS = [
  { k: "01", t: "Manual spreadsheets", d: "Error-prone, tedious, and easy to forget. One missed receipt and the year's numbers don't reconcile." },
  { k: "02", t: "CPA fees climb", d: "You're paying $200–$500/year just to have someone untangle your shoebox of receipts into something filable." },
  { k: "03", t: "Missed deductions", d: "When tracking is hard, you skip it. The deductions you're legally entitled to quietly evaporate." },
  { k: "04", t: "No audit trail", d: "If the IRS asks for documentation, you need dates, amounts, purposes, and calculations — all defensible." },
];

const ProblemSection = () => (
  <section id="problem" className="sec-problem">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">The status quo</div>
        <h2 style={{ marginTop: 18 }}>Expense tracking shouldn't eat your weekends.</h2>
        <p>Accountable plans are a tax gift from the IRS. Most business owners leave money on the table because the paperwork is painful.</p>
      </div>
      <div className="problem-grid">
        {PROBLEMS.map((p) => (
          <article className="problem-card" key={p.k}>
            <div className="problem-k mono">{p.k}</div>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ─── Features ──────────────────────────────────────────────── //
const FEATURES = [
  { t: "Home Office Multiplier", d: "Enter square footage once. We calculate the percentage and reimburse automatically each month.", glyph: "▢" },
  { t: "IRS Mileage Rates", d: "Rates update annually. Log a trip, we apply the correct rate for the date. No more guessing.", glyph: "→" },
  { t: "Phone & Internet", d: "Percentage-based allocations with clean justification the IRS accepts during an audit.", glyph: "~" },
  { t: "Out-of-Pocket Expenses", d: "Supplies, software, travel, meals. Categorized, dated, and receipt-attached.", glyph: "+" },
  { t: "PDF Reports", d: "Professional formatting. Monthly, quarterly, or yearly. Ready to hand to your CPA.", glyph: "§" },
  { t: "Dark & Light Theme", d: "Works the way you work. Toggle anytime. Remembers your preference.", glyph: "◐" },
];

const FeaturesSection = () => (
  <section id="features" className="sec-features">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">What you get</div>
        <h2 style={{ marginTop: 18 }}>Your accountable plan, <span className="serif-italic">automated</span>.</h2>
        <p>Six focused features. No bloat. Built by someone who has actually reconciled an S-Corp at midnight on April 14th.</p>
      </div>
      <div className="feat-grid">
        {FEATURES.map((f) => (
          <article className="feat-card" key={f.t}>
            <div className="feat-glyph" aria-hidden>{f.glyph}</div>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

// ─── How It Works ──────────────────────────────────────────── //
const STEPS = [
  { n: 1, t: "Set up once", s: "Enter your business details — home office sq ft, phone %, entity type. We remember everything.", img: "assets/app-01.png", crop: { objectPosition: "center 10%" } },
  { n: 2, t: "Track monthly", s: "Log expenses as they happen. Home office, mileage, phone, out-of-pocket — all auto-calculated.", img: "assets/app-01.png", crop: { objectPosition: "center 55%" } },
  { n: 3, t: "Export & hand off", s: "One click generates an IRS-compliant PDF. Summary, totals, methods compared. Ready for your CPA.", img: "assets/app-02.png", crop: { objectPosition: "center 100%" } },
];

const HowItWorks = () => {
  const theme = useTheme();
  const [step, setStep] = useState(1);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setStep((s) => (s % 3) + 1), 5500);
    return () => clearInterval(id);
  }, [auto]);

  return (
    <section id="how" className="sec-how">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">How it works</div>
          <h2 style={{ marginTop: 18 }}>Three steps. <span className="serif-italic">Five minutes.</span></h2>
          <p>From empty account to IRS-ready PDF. Click a step to see the screen.</p>
        </div>
        <div className="how-wrap">
          <ol className="how-steps">
            {STEPS.map((s) => (
              <li key={s.n} className={"how-step" + (step === s.n ? " on" : "")}
                onMouseEnter={() => { setAuto(false); setStep(s.n); }}
                onClick={() => { setAuto(false); setStep(s.n); }}>
                <div className="how-step-num mono">0{s.n}</div>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.s}</p>
                </div>
                <div className="how-step-bar"><span style={{ width: step === s.n ? "100%" : "0%" }} /></div>
              </li>
            ))}
          </ol>
          <div className="how-screen">
            <div className="how-browser">
              <div className="hero-browser-chrome">
                <div className="appmock-dots"><span/><span/><span/></div>
                <div className="hero-browser-url mono">accountabletracker.com/app</div>
                <div style={{width:48}}/>
              </div>
              <div className="how-browser-body">
                {STEPS.map((s) => (
                  <img key={s.n} src={themedAsset(s.img, theme)} alt={`Step ${s.n}: ${s.t}`}
                    className={"how-shot" + (step === s.n ? " on" : "")} style={s.crop} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="how-controls">
          <button className="how-toggle" onClick={() => setAuto((a) => !a)}>
            <span className={"how-toggle-dot" + (auto ? " on" : "")} />
            {auto ? "Auto-playing" : "Paused"}
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── Pricing ───────────────────────────────────────────────── //
const Pricing = () => (
  <section id="pricing" className="sec-pricing">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">Pricing</div>
        <h2 style={{ marginTop: 18 }}>Simple, transparent, honest.</h2>
        <p>Pick a plan. 14 days free. No credit card required.</p>
      </div>
      <div className="price-grid">
        <article className="price-card">
          <header>
            <div className="price-name">Personal</div>
            <div className="price-amt">
              <span className="price-num">$12</span>
              <span className="price-per">/month</span>
            </div>
            <p className="price-desc">For solo owners and freelancers running their own accountable plan.</p>
          </header>
          <ul className="price-feats">
            <li>2 businesses</li>
            <li>12-month history</li>
            <li>Unlimited PDF exports</li>
            <li>IRS mileage auto-updates</li>
            <li>Email support</li>
          </ul>
          <button className="btn btn-ghost btn-lg" onClick={() => goToApp("personal")}>Start 14-day trial</button>
          <div className="price-foot">No credit card required</div>
        </article>
        <article className="price-card featured">
          <div className="price-badge">Most popular</div>
          <header>
            <div className="price-name">Pro</div>
            <div className="price-amt">
              <span className="price-num">$39</span>
              <span className="price-per">/month</span>
            </div>
            <p className="price-desc">For S-Corps, multi-business owners, and small teams that need everything.</p>
          </header>
          <ul className="price-feats">
            <li>Unlimited businesses</li>
            <li>12-month history</li>
            <li>Unlimited PDF exports</li>
            <li>Multi-user (2 logins)</li>
            <li>Priority email support</li>
            <li>API access <span className="price-chip">coming soon</span></li>
          </ul>
          <button className="btn btn-primary btn-lg" onClick={() => goToApp("pro")}>Start 14-day trial</button>
          <div className="price-foot">No credit card required</div>
        </article>
      </div>
    </div>
  </section>
);

// ─── Testimonials ──────────────────────────────────────────── //
const TESTIMONIALS = [
  { q: "Saved me 10 hours a year on bookkeeping. The PDF exports are perfect for my CPA.", n: "Sarah M.", r: "Freelance Designer" },
  { q: "As an S-Corp, I was terrified of missing deductions. This tool makes it bulletproof.", n: "John D.", r: "Consultant" },
  { q: "Finally, a tool built specifically for accountable plans. Worth every penny.", n: "Michelle L.", r: "Coaching Business Owner" },
];

const Testimonials = () => (
  <section id="testimonials" className="sec-testimonials">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">Customers</div>
        <h2 style={{ marginTop: 18 }}>Trusted by solo business owners <span className="serif-italic">across the US.</span></h2>
      </div>
      <div className="tm-grid">
        {TESTIMONIALS.map((t, i) => (
          <figure className="tm-card" key={i}>
            <blockquote>
              <span className="tm-quote">"</span>
              {t.q}
            </blockquote>
            <figcaption>
              <div className="tm-avatar" aria-hidden>{t.n[0]}</div>
              <div>
                <div className="tm-name">{t.n}</div>
                <div className="tm-role">{t.r}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

// ─── FAQ ───────────────────────────────────────────────────── //
const FAQS = [
  ["Is this compliant with IRS rules?", "Yes. We use official IRS mileage rates and follow accountable plan guidelines under IRC §62(c) and Reg §1.62-2. Full methodology is on the compliance page."],
  ["Can I use this for multiple businesses?", "Yes. Personal covers 2 businesses. Pro is unlimited. Each has its own settings, history, and reports."],
  ["What if I already have a spreadsheet?", "Bring it. Contact support@accountabletracker.com and we'll help you import existing data before your trial ends."],
  ["Can I export in other formats?", "PDF is native. CSV and Excel are coming soon — ETA Q3 2026."],
  ["What happens if I cancel?", "You can download all your data anytime, including every PDF you've generated. No lock-in, no hostage data."],
  ["Does this work internationally?", "Currently US-focused because we rely on IRS rates. If you need international support, email us — we're tracking demand."],
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="sec-faq">
      <div className="container faq-wrap">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">Questions</div>
          <h2 style={{ marginTop: 18 }}>Good questions, direct answers.</h2>
          <p style={{ marginTop: 16 }}>Still wondering? Email <a className="flink" href="mailto:support@accountabletracker.com">support@accountabletracker.com</a>.</p>
        </div>
        <ul className="faq-list">
          {FAQS.map(([q, a], i) => (
            <li key={i} className={"faq-item" + (open === i ? " on" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{q}</span>
                <span className="faq-plus" aria-hidden>{open === i ? "–" : "+"}</span>
              </button>
              <div className="faq-a"><p>{a}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// ─── Footer CTA ────────────────────────────────────────────── //
const FooterCTA = () => (
  <section id="cta" className="sec-footercta">
    <div className="container footercta-wrap">
      <div>
        <div className="eyebrow">Get started</div>
        <h2 style={{ marginTop: 18 }}>Stop dreading tax season.<br/><span className="serif-italic">Start this month.</span></h2>
        <p style={{ marginTop: 16, maxWidth: 520 }}>Be audit-ready by Friday. Pair it with your existing CPA workflow — no migration, no spreadsheets.</p>
      </div>
      <div className="footercta-form">
        <EmailCapture cta="Start free trial" tier="personal" />
      </div>
    </div>
  </section>
);

const Footer = ({ page = "landing" }) => {
  const href = (target) => {
    const [p, hash] = target.split("#");
    if (p === page) return hash ? `#${hash}` : "#top";
    const file = { landing: "/index.html", pricing: "/pricing.html", cpas: "/for-cpas.html" }[p];
    return hash ? `${file}#${hash}` : file;
  };
  return (
    <footer className="foot">
      <div className="container foot-row">
        <div className="foot-brand">
          <LogoMark size={22} tone="black" />
          <span>Accountable</span>
        </div>
        <div className="foot-links">
          <a href={href("landing#features")}>Features</a>
          <a href={href("pricing")}>Pricing</a>
          <a href={href("cpas")}>For CPAs</a>
          <a href={href("landing#faq")}>FAQ</a>
          <a href="mailto:sales@accountabletracker.com">Contact sales</a>
          <a href="mailto:support@accountabletracker.com">Support</a>
        </div>
        <div className="foot-meta">
          <span>© 2026 Trident Visual LLC</span>
          <a href="/privacy.html">Privacy</a>
          <a href="/terms.html">Terms</a>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, {
  Nav, EmailCapture, ProblemSection, FeaturesSection, HowItWorks,
  Pricing, Testimonials, FAQ, FooterCTA, Footer,
  goToApp, LogoMark, useTheme, themedAsset,
});
