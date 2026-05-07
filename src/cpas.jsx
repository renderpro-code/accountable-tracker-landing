// For CPAs — white-label sell to accounting firms

const { useState: useStateC } = React;

// ─── CPA Hero ────────────────────────────────────────────────
const CPAHero = () => (
  <section className="hero hero-cpas" id="top">
    <div className="container">
      <div className="cpas-hero-grid">
        <div className="cpas-hero-copy">
          <div className="eyebrow">For accounting firms</div>
          <h1 className="hero-h1 cpas-h1">
            Give your clients<br/>
            <span className="serif-italic">a better way.</span>
          </h1>
          <p className="hero-sub cpas-sub">
            White-label accountable plan software. Your logo, your domain, your pricing.
            Clients self-serve. You review once, export PDFs, keep the margin.
          </p>
          <div className="cpas-hero-cta">
            <a className="btn btn-primary btn-lg" href="mailto:sales@accountabletracker.com?subject=CPA%20demo%20request">
              Schedule 15-min demo
              <span aria-hidden>→</span>
            </a>
            <a className="btn btn-ghost btn-lg" href="#cpa-pricing">
              View pricing
            </a>
          </div>
          <div className="cpas-hero-trust">
            <span><i className="dot ok" /> White-labeled with your branding</span>
            <span><i className="dot ok" /> ~48 hour setup</span>
            <span><i className="dot ok" /> You keep 100% of client revenue</span>
          </div>
        </div>

        <div className="cpas-hero-art">
          <div className="cpas-wl-card">
            <div className="cpas-wl-head mono">CLIENT VIEW</div>
            <div className="cpas-wl-brand">
              <div className="cpas-wl-logo">◆</div>
              <div>
                <div className="cpas-wl-firm">Smith &amp; Associates</div>
                <div className="cpas-wl-url mono">clients.smithcpa.com</div>
              </div>
            </div>
            <div className="cpas-wl-divider"></div>
            <div className="cpas-wl-nav">
              <span className="on">Dashboard</span>
              <span>Businesses</span>
              <span>Reports</span>
            </div>
            <div className="cpas-wl-widget">
              <div className="cpas-wl-widget-h">
                <span className="mono">Q1 2026 · Reimbursable</span>
                <span className="cpas-wl-widget-v">$2,017.93</span>
              </div>
              <div className="cpas-wl-bars">
                <span style={{height: "40%"}}/>
                <span style={{height: "72%"}}/>
                <span style={{height: "55%"}}/>
                <span style={{height: "90%"}}/>
                <span style={{height: "48%"}}/>
                <span style={{height: "66%"}}/>
              </div>
              <div className="cpas-wl-foot mono">
                Prepared for: Sarah M. · Reviewed by: J. Smith, CPA
              </div>
            </div>
          </div>
          <div className="cpas-hero-stamp mono">
            Your logo<br/>Your domain<br/>Your pricing
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Problem (for CPAs) ──────────────────────────────────────
const CPA_PROBLEMS = [
  { k: "01", t: "Messy spreadsheets", d: "Clients send shoebox receipts and tangled Excel files. Every year. You do the untangling." },
  { k: "02", t: "No audit trail", d: "If a client gets audited, you're the one explaining the math. Loose documentation is your liability, not theirs." },
  { k: "03", t: "Low-margin admin", d: "5–10 hours per client per year just sorting reimbursements. At your rate, that's revenue bleeding." },
  { k: "04", t: "Silent churn", d: "Clients with no visibility into their own data drift to the next firm. Boring grunt work doesn't build loyalty." },
];

const CPAProblemSection = () => (
  <section id="cpa-problem" className="sec-problem">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">The status quo</div>
        <h2 style={{ marginTop: 18 }}>
          Reimbursement admin is <span className="serif-italic">eating your margins.</span>
        </h2>
        <p>If you've ever spent a Sunday reconciling a client's spreadsheet, you know.</p>
      </div>
      <div className="problem-grid">
        {CPA_PROBLEMS.map((p) => (
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

// ─── Solution (for CPAs) ─────────────────────────────────────
const CPA_BENEFITS = [
  { glyph: "⏱", t: "Reduce admin time by 80%", d: "Clients self-serve. You review quarterly, export a PDF, done. Save ~20 hours per client per year." },
  { glyph: "§", t: "IRS-ready compliance", d: "Auto-updated rates, documented methodology, structured audit trail. If they get audited, you have receipts." },
  { glyph: "↗", t: "New recurring revenue", d: "Charge clients $5–20/month for the tool. You keep 100% of what you charge. Pure margin." },
  { glyph: "◈", t: "White-labeled", d: "Your logo, your colors, your domain (clients.yourfirm.com). No Accountable branding anywhere client-facing." },
  { glyph: "◐", t: "Stickier clients", d: "Monthly check-ins turn into ongoing relationships. Visibility = retention. Lower churn, higher LTV." },
  { glyph: "◉", t: "Zero-ops hosting", d: "We handle infrastructure, uptime, updates, and escalated support. You focus on clients." },
];

const CPASolution = () => (
  <section id="cpa-features" className="sec-features">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">The offer</div>
        <h2 style={{ marginTop: 18 }}>
          Automate reimbursements.<br/>
          <span className="serif-italic">Keep your clients happy.</span>
        </h2>
        <p>Built specifically for the accountable plan workflow.</p>
      </div>
      <div className="feat-grid">
        {CPA_BENEFITS.map((f) => (
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

// ─── How It Works (for CPAs) — 4 steps ───────────────────────
const CPA_STEPS = [
  { n: 1, t: "White-label setup", s: "We spin up your branded instance at clients.yourfirm.com. Your logo, your colors, your welcome email. Takes ~48 hours." },
  { n: 2, t: "Invite your clients", s: "Send them a link or bulk-invite your book of business. They sign up in 2 minutes with Google SSO." },
  { n: 3, t: "They track, you review", s: "Clients log monthly. You get email summaries. Review quarterly. Export IRS-ready PDFs in one click." },
  { n: 4, t: "Your recurring revenue", s: "Charge clients $5–20/month. You invoice them, keep 100%. We bill you the base + per-client fee." },
];

const CPAHowItWorks = () => {
  const [step, setStep] = useStateC(1);
  return (
    <section id="cpa-how" className="sec-how sec-how-cpa">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">How it works</div>
          <h2 style={{ marginTop: 18 }}>
            Four steps. <span className="serif-italic">Forty-eight hours.</span>
          </h2>
          <p>From first email to first client invoice. Click a step to expand.</p>
        </div>

        <ol className="cpa-steps">
          {CPA_STEPS.map((s) => (
            <li key={s.n}
                className={"cpa-step" + (step === s.n ? " on" : "")}
                onClick={() => setStep(s.n)}>
              <div className="cpa-step-num mono">0{s.n}</div>
              <div className="cpa-step-body">
                <h3>{s.t}</h3>
                <p>{s.s}</p>
              </div>
              <div className="cpa-step-plus" aria-hidden>{step === s.n ? "–" : "+"}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

// ─── CPA Pricing ─────────────────────────────────────────────
const CPAPricing = () => (
  <section id="cpa-pricing" className="sec-pricing sec-cpa-pricing">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">CPA pricing</div>
        <h2 style={{ marginTop: 18 }}>
          Transparent base + per-client. <span className="serif-italic">You keep the margin.</span>
        </h2>
        <p>Charge clients what you want. We don't take a cut of your client revenue.</p>
      </div>

      <div className="plancards-grid">
        <article className="plancard">
          <header>
            <div className="plancard-tier">Starter</div>
            <div className="plancard-amt">
              <span className="plancard-num">$99</span>
              <span className="plancard-per">/mo + $2/client</span>
            </div>
            <p className="plancard-desc">
              Up to 25 active clients. Basic branding. Email support.
            </p>
          </header>
          <ul className="cpa-feats">
            <li>Up to 25 client accounts</li>
            <li>Your logo &amp; colors</li>
            <li>Email support</li>
            <li>Monthly usage reports</li>
            <li>PDF exports for every client</li>
          </ul>
          <div className="cpa-example mono">
            Example · 20 clients = $139/mo
          </div>
          <a className="btn btn-ghost btn-lg" href="mailto:sales@accountabletracker.com?subject=Starter%20trial">
            Start 14-day trial
          </a>
        </article>

        <article className="plancard featured">
          <div className="plancard-badge">Most firms pick this</div>
          <header>
            <div className="plancard-tier">Growth</div>
            <div className="plancard-amt">
              <span className="plancard-num">$199</span>
              <span className="plancard-per">/mo + $3/client</span>
            </div>
            <p className="plancard-desc">
              Up to 100 clients. Custom domain, priority support, custom integrations.
            </p>
          </header>
          <ul className="cpa-feats">
            <li>Up to 100 client accounts</li>
            <li>Custom domain (clients.yourfirm.com)</li>
            <li>SSO support <span className="price-chip">coming</span></li>
            <li>Priority email + Slack support</li>
            <li>Custom integrations</li>
            <li>Quarterly strategy call</li>
          </ul>
          <div className="cpa-example mono">
            Example · 50 clients = $349/mo
          </div>
          <a className="btn btn-primary btn-lg" href="mailto:sales@accountabletracker.com?subject=Growth%20trial">
            Start 14-day trial
          </a>
        </article>

        <article className="plancard">
          <header>
            <div className="plancard-tier">Enterprise</div>
            <div className="plancard-amt">
              <span className="plancard-num plancard-num-sm">Custom</span>
            </div>
            <p className="plancard-desc">
              Unlimited clients. SAML/SSO. API access. Dedicated success manager. SLA.
            </p>
          </header>
          <ul className="cpa-feats">
            <li>Unlimited client accounts</li>
            <li>Full white-label + custom domain</li>
            <li>SAML / SSO</li>
            <li>API access</li>
            <li>Dedicated success manager</li>
            <li>99.9% uptime SLA</li>
          </ul>
          <div className="cpa-example mono">
            Volume pricing · Custom terms
          </div>
          <a className="btn btn-ghost btn-lg" href="mailto:sales@accountabletracker.com?subject=Enterprise%20demo">
            Schedule demo
          </a>
        </article>
      </div>

      <p className="cpa-pricing-note mono">
        14-day free trial · 3-month minimum then month-to-month
      </p>
    </div>
  </section>
);

// ─── CPA Testimonials — hidden until real reviews available ──
const CPATestimonials = () => null;

// ─── CPA FAQ ─────────────────────────────────────────────────
const CPA_FAQS = [
  ["Will my clients see Accountable branding?",
   "No. It's fully white-labeled. Your logo, your colors, your domain. Emails, PDFs, dashboard — all branded as your firm."],
  ["How do I get paid if I charge clients?",
   "You bill clients directly at whatever rate you choose. We bill you the base subscription + per-client fee. You keep 100% of the margin — no revenue sharing."],
  ["What if a client complains or needs help?",
   "They contact you first. You can escalate to our support team whenever needed. We handle the platform; you handle the relationship."],
  ["Can I integrate with QuickBooks?",
   "On the roadmap for Q3 2026. Today we export CSV/PDF that imports cleanly into QB. If you need a custom integration, Growth and Enterprise plans cover it."],
  ["What's the minimum contract?",
   "3 months to start, then month-to-month with 30-day cancellation notice. We want you to see a quarter-end cycle before you commit long-term."],
  ["Do you train my team?",
   "Yes. Every plan includes a free onboarding call plus PDF docs. Growth and Enterprise get custom training sessions and quarterly reviews."],
  ["What about data security?",
   "All data encrypted at rest and in transit. Working toward SOC 2 Type II. No third-party data sharing. Full security documentation available before signing."],
  ["What happens if I want to leave?",
   "Export everything — client data, PDFs, CSVs. No lock-in. We'll help you migrate if needed."],
];

const CPAFAQ = () => {
  const [open, setOpen] = useStateC(0);
  return (
    <section id="cpa-faq" className="sec-faq">
      <div className="container faq-wrap">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">Questions</div>
          <h2 style={{ marginTop: 18 }}>Frequently asked.</h2>
          <p style={{ marginTop: 16 }}>
            Something specific? Email <a className="flink" href="mailto:sales@accountabletracker.com">sales@accountabletracker.com</a>.
          </p>
        </div>
        <ul className="faq-list">
          {CPA_FAQS.map(([q, a], i) => (
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

// ─── CPA Footer CTA ──────────────────────────────────────────
const CPAFooterCTA = () => (
  <section className="sec-footercta">
    <div className="container footercta-wrap">
      <div>
        <div className="eyebrow">Ready to try it?</div>
        <h2 style={{ marginTop: 18 }}>
          15 minutes to see it.<br/>
          <span className="serif-italic">48 hours to go live.</span>
        </h2>
        <p style={{ marginTop: 16, maxWidth: 520 }}>
          We'll walk through the white-label setup, show you real firm deployments, and answer whatever's on your list.
        </p>
      </div>
      <div className="footercta-form cpa-cta-actions">
        <a className="btn btn-primary btn-lg" href="mailto:sales@accountabletracker.com?subject=CPA%20demo%20request">
          Schedule 15-min demo
          <span aria-hidden>→</span>
        </a>
        <a className="btn btn-ghost btn-lg" href="mailto:sales@accountabletracker.com">
          Email sales
        </a>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  CPAHero, CPAProblemSection, CPASolution, CPAHowItWorks,
  CPAPricing, CPATestimonials, CPAFAQ, CPAFooterCTA,
});
