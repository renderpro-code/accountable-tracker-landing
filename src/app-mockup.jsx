// App dashboard mockup — used in hero and How It Works.
// Three states for the three "How it Works" steps.

const AppMockup = ({ step = 2, compact = false }) => {
  return (
    <div className="appmock" data-step={step} data-compact={compact || undefined}>
      {/* Window chrome */}
      <div className="appmock-chrome">
        <div className="appmock-dots">
          <span /><span /><span />
        </div>
        <div className="appmock-url mono">accountabletracker.com/app</div>
        <div style={{ width: 48 }} />
      </div>

      <div className="appmock-body">
        {/* Sidebar */}
        <aside className="appmock-side">
          <div className="appmock-brand">
            <span className="appmock-brand-dot" />
            <span>Accountable</span>
          </div>
          <nav className="appmock-nav">
            <a className={step === 1 ? "on" : ""}>Overview</a>
            <a className={step === 2 ? "on" : ""}>Expenses</a>
            <a>Mileage</a>
            <a>Reports</a>
            <a className={step === 3 ? "on" : ""}>Export</a>
          </nav>
          <div className="appmock-side-foot">
            <div className="appmock-avatar">SM</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 500 }}>Sarah M.</div>
              <div style={{ fontSize: 11, color: "var(--ink-3)" }}>Personal</div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="appmock-main">
          {step === 1 && <AppStep1 />}
          {step === 2 && <AppStep2 />}
          {step === 3 && <AppStep3 />}
        </main>
      </div>
    </div>
  );
};

const AppStep1 = () => (
  <>
    <div className="appmock-pageheader">
      <div>
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".12em" }}>Step 1 · Set up</div>
        <h3 style={{ marginTop: 6, fontSize: 22 }}>Your business</h3>
      </div>
    </div>
    <div className="appmock-form">
      <label>
        <span>Business name</span>
        <div className="appmock-input filled">Clutter Healing, Inc</div>
      </label>
      <label>
        <span>Entity type</span>
        <div className="appmock-input filled">S-Corporation</div>
      </label>
      <label>
        <span>Home office (sq ft)</span>
        <div className="appmock-input filled with-sub">
          <span>180</span>
          <span className="appmock-sub">of 2,400 total · 7.5%</span>
        </div>
      </label>
      <label>
        <span>Phone & internet</span>
        <div className="appmock-input filled with-sub">
          <span>65%</span>
          <span className="appmock-sub">business use</span>
        </div>
      </label>
    </div>
    <button className="appmock-btn">Save business</button>
  </>
);

const AppStep2 = () => (
  <>
    <div className="appmock-pageheader">
      <div>
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".12em" }}>Step 2 · Track</div>
        <h3 style={{ marginTop: 6, fontSize: 22 }}>April expenses</h3>
      </div>
      <div className="appmock-kpis">
        <div className="kpi"><span className="kpi-k">Reimbursable</span><span className="kpi-v">$1,284.50</span></div>
      </div>
    </div>

    <div className="appmock-rows">
      {[
        ["Home office · rent allocation", "$187.50", "Apr 1", "Auto"],
        ["Mileage · client visit", "$42.84", "Apr 8", "64 mi · $0.67/mi"],
        ["Adobe Creative Cloud", "$54.99", "Apr 12", "Software"],
        ["Office supplies — Staples", "$128.17", "Apr 15", "Supplies"],
        ["Phone bill (65%)", "$58.50", "Apr 20", "Auto"],
        ["Mileage · co-working", "$18.76", "Apr 22", "28 mi"],
      ].map(([n, a, d, t], i) => (
        <div className="appmock-row" key={i}>
          <div className="appmock-row-dot" style={{ background: i === 1 || i === 5 ? "var(--accent)" : "var(--ink-2)" }} />
          <div className="appmock-row-name">{n}</div>
          <div className="appmock-row-meta mono">{t}</div>
          <div className="appmock-row-date mono">{d}</div>
          <div className="appmock-row-amount">{a}</div>
        </div>
      ))}
    </div>
  </>
);

const AppStep3 = () => (
  <>
    <div className="appmock-pageheader">
      <div>
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".12em" }}>Step 3 · Export</div>
        <h3 style={{ marginTop: 6, fontSize: 22 }}>Q1 2026 Report</h3>
      </div>
      <button className="appmock-btn small">Download PDF</button>
    </div>

    <div className="appmock-pdf">
      <div className="appmock-pdf-head">
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>Accountable Plan Reimbursement</div>
          <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>Q1 2026 · Clutter Healing, Inc</div>
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>IRS §1.62-2</div>
      </div>
      <div className="appmock-pdf-grid">
        <div><span>Home office</span><b>$562.50</b></div>
        <div><span>Mileage (847 mi)</span><b>$567.49</b></div>
        <div><span>Phone & internet</span><b>$175.50</b></div>
        <div><span>Supplies & software</span><b>$712.44</b></div>
      </div>
      <div className="appmock-pdf-total">
        <span>Total reimbursable</span>
        <b>$2,017.93</b>
      </div>
      <div className="appmock-pdf-stamp mono">
        <span className="dot" /> IRS-compliant · ready for CPA
      </div>
    </div>
  </>
);

window.AppMockup = AppMockup;
