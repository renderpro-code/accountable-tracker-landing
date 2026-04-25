// Pricing page — hero, full comparison, FAQ.
const { useState: useStateP, useEffect: useEffectP } = React;

// ─── Pricing Hero ──────────────────────────────────────────── //
const PricingHero = () => (
  <section className="hero hero-pricing" id="top">
    <div className="container">
      <div className="pricing-hero-inner">
        <div className="eyebrow">Pricing</div>
        <h1 className="hero-h1 pricing-h1">
          One price. <span className="serif-italic">No surprises.</span>
        </h1>
        <p className="hero-sub pricing-sub">
          Every plan includes a 14-day free trial. No credit card required. Cancel anytime. Export your data whenever you want.
        </p>
        <div className="pricing-hero-trust">
          <span><i className="dot ok" /> 14 days free</span>
          <span><i className="dot ok" /> No credit card</span>
          <span><i className="dot ok" /> Cancel anytime</span>
        </div>
      </div>
    </div>
  </section>
);

// ─── Plan cards ────────────────────────────────────────────── //
const PlanCards = () => (
  <section className="sec-plancards">
    <div className="container">
      <div className="plancards-grid">
        <article className="plancard">
          <header>
            <div className="plancard-tier">Personal</div>
            <div className="plancard-amt">
              <span className="plancard-num">$12</span>
              <span className="plancard-per">/month</span>
            </div>
            <p className="plancard-desc">
              For solo owners running their own accountable plan. Up to 2 businesses.
            </p>
          </header>
          <button className="btn btn-ghost btn-lg" onClick={() => goToApp("personal")}>
            Start 14-day trial
          </button>
          <div className="plancard-note mono">Then $12/month · Cancel anytime</div>
        </article>

        <article className="plancard featured">
          <div className="plancard-badge">Most popular</div>
          <header>
            <div className="plancard-tier">Pro</div>
            <div className="plancard-amt">
              <span className="plancard-num">$39</span>
              <span className="plancard-per">/month</span>
            </div>
            <p className="plancard-desc">
              For S-Corps, multi-business owners, and small teams. Unlimited everything, plus API.
            </p>
          </header>
          <button className="btn btn-primary btn-lg" onClick={() => goToApp("pro")}>
            Start 14-day trial
          </button>
          <div className="plancard-note mono">Then $39/month · Cancel anytime</div>
        </article>

        <article className="plancard">
          <header>
            <div className="plancard-tier">Enterprise</div>
            <div className="plancard-amt">
              <span className="plancard-num plancard-num-sm">Custom</span>
            </div>
            <p className="plancard-desc">
              For CPA firms, agencies, and teams that need SSO, SLAs, and white-label options.
            </p>
          </header>
          <a className="btn btn-ghost btn-lg" href="mailto:sales@accountabletracker.com?subject=Enterprise%20inquiry">
            Contact sales
          </a>
          <div className="plancard-note mono">Volume discounts · Custom terms</div>
        </article>
      </div>
    </div>
  </section>
);

// ─── Comparison table ──────────────────────────────────────── //
const COMPARE_ROWS = [
  { cat: "Usage", rows: [
    ["Businesses per account", "2", "Unlimited", "Unlimited"],
    ["Users per account", "1", "2 included", "Custom"],
    ["Monthly PDF exports", "Unlimited", "Unlimited", "Unlimited"],
    ["Transaction history", "12 months", "12 months", "Unlimited"],
  ]},
  { cat: "Features", rows: [
    ["Home office multiplier", true, true, true],
    ["Auto-updated IRS mileage rates", true, true, true],
    ["Phone & internet allocation", true, true, true],
    ["Out-of-pocket expenses", true, true, true],
    ["IRS-compliant PDF reports", true, true, true],
    ["Dark & light themes", true, true, true],
    ["Receipt attachments", true, true, true],
  ]},
  { cat: "Advanced", rows: [
    ["Multi-user access", false, "2 logins", "Custom"],
    ["API access", false, "Coming Q2 2026", "Custom"],
    ["Custom integrations", false, false, true],
    ["Single sign-on (SAML)", false, false, true],
    ["Audit log", false, true, true],
  ]},
  { cat: "Support", rows: [
    ["Email support", true, "Priority", "Priority"],
    ["Onboarding call", false, false, true],
    ["Dedicated success manager", false, false, true],
    ["SLA guarantees", false, false, true],
  ]},
];

const Cell = ({ v }) => {
  if (v === true) return <span className="cmp-yes" aria-label="Included">✓</span>;
  if (v === false) return <span className="cmp-no" aria-label="Not included">—</span>;
  return <span className="cmp-text">{v}</span>;
};

const ComparisonTable = () => (
  <section className="sec-compare" id="compare">
    <div className="container">
      <div className="section-head">
        <div className="eyebrow">Compare plans</div>
        <h2 style={{ marginTop: 18 }}>Every feature, side by side.</h2>
        <p>Not sure which plan fits? Here's the full breakdown.</p>
      </div>
      <div className="cmp-wrap">
        <table className="cmp-table">
          <thead>
            <tr>
              <th scope="col" className="cmp-cat-col">&nbsp;</th>
              <th scope="col">
                <div className="cmp-plan">Personal</div>
                <div className="cmp-plan-price">$12<span>/mo</span></div>
                <button className="btn btn-ghost btn-sm cmp-cta" onClick={() => goToApp("personal")}>Start trial</button>
              </th>
              <th scope="col" className="cmp-featured">
                <div className="cmp-plan-badge mono">Most popular</div>
                <div className="cmp-plan">Pro</div>
                <div className="cmp-plan-price">$39<span>/mo</span></div>
                <button className="btn btn-primary btn-sm cmp-cta" onClick={() => goToApp("pro")}>Start trial</button>
              </th>
              <th scope="col">
                <div className="cmp-plan">Enterprise</div>
                <div className="cmp-plan-price cmp-plan-price-sm">Custom</div>
                <a className="btn btn-ghost btn-sm cmp-cta" href="mailto:sales@accountabletracker.com">Contact</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((group) => (
              <React.Fragment key={group.cat}>
                <tr className="cmp-group">
                  <th colSpan={4} scope="rowgroup"><span className="mono">{group.cat}</span></th>
                </tr>
                {group.rows.map(([label, p, pr, e]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td><Cell v={p} /></td>
                    <td className="cmp-featured"><Cell v={pr} /></td>
                    <td><Cell v={e} /></td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// ─── Pricing FAQ ───────────────────────────────────────────── //
const PRICING_FAQS = [
  ["Can I change plans anytime?", "Yes. Upgrade or downgrade whenever. We prorate the difference to the day, so you never pay for time you didn't use."],
  ["Is there a yearly discount?", "Annual billing is coming. If you're interested today, email sales@accountabletracker.com and we'll honor early-bird pricing."],
  ["What counts as a \"business\"?", "Any separate entity or Schedule C — each with its own settings, history, and PDF report. A freelancer with two DBAs counts as two."],
  ["How does the trial work?", "14 days, full feature access, no credit card required. We'll email you before it ends. If you don't pick a plan, your account pauses but your data stays intact."],
  ["What if I need more than Pro?", "Enterprise. Custom client limits, SSO, API access, dedicated support, and volume pricing. Email sales@accountabletracker.com."],
  ["Do you offer refunds?", "Yes. If you're unhappy within the first 30 days after upgrading from trial, email support and we'll refund, no questions."],
  ["How is my data stored?", "Encrypted in transit and at rest. Regular backups. No third-party data sharing. Full privacy policy at /privacy."],
  ["Can I export my data?", "Anytime. PDF reports for filings, and CSV/JSON of your raw records for your own records. No lock-in."],
];

const PricingFAQ = () => {
  const [open, setOpen] = useStateP(0);
  return (
    <section id="faq" className="sec-faq">
      <div className="container faq-wrap">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">Questions</div>
          <h2 style={{ marginTop: 18 }}>Billing &amp; plan questions.</h2>
          <p style={{ marginTop: 16 }}>
            Need something custom? Email <a className="flink" href="mailto:sales@accountabletracker.com">sales@accountabletracker.com</a>.
          </p>
        </div>
        <ul className="faq-list">
          {PRICING_FAQS.map(([q, a], i) => (
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

// ─── Pricing CTA ───────────────────────────────────────────── //
const PricingCTA = () => (
  <section className="sec-footercta">
    <div className="container footercta-wrap">
      <div>
        <div className="eyebrow">Ready to start?</div>
        <h2 style={{ marginTop: 18 }}>
          Your first report is<br/>
          <span className="serif-italic">five minutes away.</span>
        </h2>
        <p style={{ marginTop: 16, maxWidth: 520 }}>
          Most new users have logged their first month's expenses and exported a report within the first hour.
        </p>
      </div>
      <div className="footercta-form">
        <EmailCapture cta="Start free trial" tier="personal" />
      </div>
    </div>
  </section>
);

Object.assign(window, { PricingHero, PlanCards, ComparisonTable, PricingFAQ, PricingCTA });
