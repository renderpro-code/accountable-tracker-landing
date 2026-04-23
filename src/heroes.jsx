// Hero — Editorial direction, committed. Uses real app screenshot.

const { useTheme, themedAsset } = window;

const HeroEditorial = () => {
  const theme = useTheme();
  return (
  <section className="hero hero-editorial" id="top">
    <div className="container hero-wrap">
      <div className="hero-copy">
        <div className="eyebrow">For 1099s · S-Corps · LLCs</div>
        <h1 className="hero-h1">
          Accountable plan<br/>reimbursements,<br/>
          <span className="serif-italic" style={{ color: "var(--accent)" }}>made simple.</span>
        </h1>
        <p className="hero-sub">
          Track home office, mileage, and expenses. Auto‑calculate IRS rates.
          Export compliant PDFs in seconds — ready for your CPA.
        </p>
        <div className="hero-cta">
          <EmailCapture cta="Start free trial" tier="personal" />
        </div>
        <div className="hero-trust">
          <span><i className="dot ok" /> IRS-compliant calculations</span>
          <span><i className="dot ok" /> Zero setup required</span>
          <span><i className="dot ok" /> 1099s, S-Corps, LLCs</span>
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-art-frame">
          <div className="hero-browser">
            <div className="hero-browser-chrome">
              <div className="appmock-dots"><span/><span/><span/></div>
              <div className="hero-browser-url mono">accountabletracker.com/app</div>
              <div style={{width:48}}/>
            </div>
            <div className="hero-browser-body">
              <img src={themedAsset("assets/app-01.png", theme)} alt="Accountable Tracker app" className="hero-shot" />
            </div>
          </div>
        </div>
        <div className="hero-floats">
          <div className="hero-float hero-float-1">
            <div className="hero-float-k mono">Q1 2026</div>
            <div className="hero-float-v">$2,017.93</div>
            <div className="hero-float-s mono">total reimbursable</div>
          </div>
          <div className="hero-float hero-float-2">
            <div className="hero-float-k mono">IRS §1.62-2</div>
            <div className="hero-float-v" style={{ fontSize: 14 }}>Compliant</div>
            <div className="hero-float-s mono">verified April 2026</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

window.HeroEditorial = HeroEditorial;
