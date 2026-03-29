import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h6>Cloud &amp; AI/ML</h6>
                <h5>Nokia (Co-op) · Jan 2026 - Apr 2026</h5>
              </div>
            </div>
            <p>
              Co-architected a multi-agent AI pipeline (Supervisor, Planning, 4
              domain agents) cutting query resolution from 2–3 min to 30–40s.
              Implemented two-tier Redis semantic caching reducing LLM inference
              costs by ~60%. Deployed to Nokia's OpenShift cluster with Docker
              and Helm.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h6>AI Automation &amp; Integration</h6>
                <h5>DTC Force (Co-op) · Sep 2025 - Dec 2025</h5>
              </div>
            </div>
            <p>
              Built an AI Financial Agent automating 41 workflows with n8n,
              JavaScript, and LLMs. Reduced workflow turnaround from 5–10 min to
              1–2 min and cut response latency by 80% through routing logic and
              error-handling optimizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
