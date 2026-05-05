import { useState, useEffect } from "react";

const SECTIONS = {
  june: {
    label: "June",
    sublabel: "Foundation",
    color: "#2563EB",
    lightColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    groups: [
      {
        title: "Resume & LinkedIn — Week 1 (June 1–7)",
        items: [
          { id: "j1", text: "Fix Evans Scholar date typo", note: "currently reads Sep 2023–May 2023, should be May 2024" },
          { id: "j2", text: "Reorder resume sections", note: "Education → Skills → Projects → Involvement → Experience" },
          { id: "j3", text: "Expand Skills section", note: "add Matplotlib, NumPy, Jupyter, Git/GitHub, Tableau" },
          { id: "j4", text: "Quantify ICON consulting bullets", note: "name the tools, client industry, and measurable outcome" },
          { id: "j5", text: "Create two resume versions", note: "one data science-focused, one business/analyst-focused" },
          { id: "j6", text: "Polish LinkedIn profile", note: "photo, headline, about section, link GitHub once ready" },
          { id: "j7", text: "Connect with 10 UIUC alumni in data/analytics on LinkedIn", note: "send a specific message — not a generic connection request" },
        ]
      },
      {
        title: "GitHub & SQL — Week 1–2 (June 1–14)",
        items: [
          { id: "j8", text: "Create a GitHub account if not already done" },
          { id: "j9", text: "Upload existing projects (used car + academic performance)", note: "write a clean README for each explaining problem, approach, results" },
          { id: "j10", text: "Complete Kaggle Learn — Pandas course", note: "free, 1–2 days" },
          { id: "j11", text: "Complete Kaggle Learn — Feature Engineering course", note: "free, directly applies to Airbnb project" },
          { id: "j12", text: "Complete Codecademy SQL fundamentals", note: "free tier — 1 week of evenings is enough" },
        ]
      },
      {
        title: "Airbnb Project — Start (Week 2–3, June 8–21)",
        items: [
          { id: "j13", text: "Download Barcelona and/or Chicago data from insideairbnb.com", note: "listings.csv" },
          { id: "j14", text: "Clean dataset", note: "convert price strings, handle nulls, remove outliers" },
          { id: "j15", text: "Exploratory Data Analysis (EDA)", note: "document every decision in a Jupyter notebook" },
          { id: "j16", text: "Engineer features", note: "distance to center, amenities count, superhost status, review scores" },
        ]
      },
      {
        title: "Research & Mindset (Ongoing in June)",
        items: [
          { id: "j17", text: "Build a company target spreadsheet", note: "columns: Company, Role Type, Tech Stack, Remote Policy, App Open Date" },
          { id: "j18", text: "Identify 20 target companies across all three tracks", note: "DS, Analyst, Finance/Consulting" },
          { id: "j19", text: "Read 2–3 job descriptions per target role", note: "note recurring skills and keywords to work into your resume" },
          { id: "j20", text: "Decide if actuary path interests you", note: "if yes, download SOA Exam P study materials and start 2 hrs/week" },
        ]
      }
    ]
  },
  july: {
    label: "July",
    sublabel: "Build & Apply",
    color: "#7C3AED",
    lightColor: "#F5F3FF",
    borderColor: "#DDD6FE",
    groups: [
      {
        title: "Airbnb Project — Finish & Deploy (Week 1–2, July 1–14)",
        items: [
          { id: "jl1", text: "Train XGBoost or Random Forest regression model", note: "step up from existing linear regression projects" },
          { id: "jl2", text: "Run SHAP value analysis", note: "shows which features drive price — a highly employable skill" },
          { id: "jl3", text: "Build Streamlit dashboard", note: "neighborhood filter, map of listings by price, live price predictor" },
          { id: "jl4", text: "Deploy on Streamlit Community Cloud (free)", note: "get a live public URL for your resume and LinkedIn" },
          { id: "jl5", text: "Add to GitHub with full README", note: "include R² score, dataset size, tools used, and a screenshot" },
          { id: "jl6", text: "Add bullet to resume", note: "e.g. 'Built end-to-end Airbnb pricing model (50K+ records), deployed interactive Streamlit dashboard'" },
        ]
      },
      {
        title: "Second Project — FRED Economic Dashboard (Week 2–3, July 7–21)",
        items: [
          { id: "jl7", text: "Pull data from FRED API (free)", note: "unemployment, inflation (CPI), GDP, interest rates" },
          { id: "jl8", text: "Build Plotly or Matplotlib visualizations of indicator trends" },
          { id: "jl9", text: "Write a short written analysis section in the README", note: "shows economic thinking, not just coding" },
          { id: "jl10", text: "Deploy or publish notebook on GitHub" },
        ]
      },
      {
        title: "Certifications (July — ongoing)",
        items: [
          { id: "jl11", text: "Start Google Advanced Data Analytics Certificate (Coursera)", note: "~$50/mo, 6–8 weeks if you push" },
          { id: "jl12", text: "Complete at least 3 modules before August 1" },
        ]
      },
      {
        title: "Applications — Start Now (July 7+)",
        items: [
          { id: "jl13", text: "Begin submitting applications — target 5 per week minimum", note: "do not wait for projects to be 'perfect'" },
          { id: "jl14", text: "Apply to rotational analyst programs", note: "Capital One, Discover, Northwestern Mutual, Allstate, Walgreens, Morningstar" },
          { id: "jl15", text: "Apply to data/business analyst roles at mid-size tech and fintech companies" },
          { id: "jl16", text: "Apply to boutique consulting firms with Chicago presence", note: "West Monroe Partners, Huron Consulting, Navigant, A.T. Kearney" },
          { id: "jl17", text: "Apply to supply chain/operations analyst roles at large employers", note: "Amazon, Target, Caterpillar, Boeing, Grainger" },
          { id: "jl18", text: "Set up job alerts on LinkedIn and Indeed", note: "keywords: data analyst, business analyst, quantitative analyst, junior data scientist" },
        ]
      },
      {
        title: "Kaggle (July)",
        items: [
          { id: "jl19", text: "Join one active Kaggle competition", note: "mid-pack finish is fine — it still counts" },
          { id: "jl20", text: "Complete Kaggle Learn — ML Explainability (SHAP)", note: "ties directly into your Airbnb project" },
          { id: "jl21", text: "Create a public Kaggle profile", note: "link it from LinkedIn and your resume" },
        ]
      }
    ]
  },
  august: {
    label: "August",
    sublabel: "Network & Close",
    color: "#059669",
    lightColor: "#ECFDF5",
    borderColor: "#A7F3D0",
    groups: [
      {
        title: "Networking (All of August)",
        items: [
          { id: "a1", text: "Reach out to 15 UIUC alumni working in data, analytics, or finance", note: "ask for a 15-minute coffee chat, not a job" },
          { id: "a2", text: "Attend at least 1 virtual career fair or info session", note: "UIUC often runs these in late August/early September" },
          { id: "a3", text: "Follow up with any July connections you haven't heard from", note: "one polite follow-up after 2 weeks is expected, not pushy" },
          { id: "a4", text: "Connect with recruiters at target companies on LinkedIn", note: "personalized note referencing their company specifically" },
        ]
      },
      {
        title: "Interview Prep (August)",
        items: [
          { id: "a5", text: "Practice 10 SQL query problems on LeetCode (Easy/Medium)", note: "filter by 'Database' tag" },
          { id: "a6", text: "Prepare answers to 5 behavioral questions using STAR format", note: "Tell me about a time you used data... / worked under pressure... / led a team..." },
          { id: "a7", text: "Prepare a 2-minute walkthrough for each GitHub project", note: "problem → approach → result → what you'd do differently" },
          { id: "a8", text: "Research your top 10 target companies deeply", note: "recent news, products, tech stack, culture" },
          { id: "a9", text: "Do at least 2 mock interviews", note: "use Pramp, a friend, or record yourself" },
        ]
      },
      {
        title: "Certifications — Finish & Add",
        items: [
          { id: "a10", text: "Complete Google Advanced Data Analytics Certificate", note: "add to LinkedIn and resume upon completion" },
          { id: "a11", text: "Begin AWS Cloud Practitioner prep", note: "Stephane Maarek's Udemy course (~$15 on sale) is the standard resource" },
        ]
      },
      {
        title: "Before You Return to Campus — Final Checklist",
        items: [
          { id: "a12", text: "4 projects on GitHub (2 existing + Airbnb + FRED)", note: "each with a polished README" },
          { id: "a13", text: "At least 20 applications submitted" },
          { id: "a14", text: "LinkedIn fully polished with GitHub linked" },
          { id: "a15", text: "Both resume versions finalized and reviewed", note: "ask a professor or career center contact for feedback" },
          { id: "a16", text: "At least 3 informational interviews completed" },
          { id: "a17", text: "Know your answer to 'Why no internship?' cold", note: "'I studied abroad in Spain and used the summer to build out my portfolio' is a complete answer" },
        ]
      }
    ]
  },
  ongoing: {
    label: "Ongoing",
    sublabel: "Weekly habits",
    color: "#DC2626",
    lightColor: "#FFF5F5",
    borderColor: "#FECACA",
    groups: [
      {
        title: "Weekly Habits — Build these into your routine",
        items: [
          { id: "o1", text: "Apply to 5+ roles per week starting July 7", note: "quantity matters — do not apply to 3 jobs and wait" },
          { id: "o2", text: "Check job alert emails daily", note: "new grad roles fill fast" },
          { id: "o3", text: "Post one GitHub commit per week minimum", note: "keeps your profile active and green" },
          { id: "o4", text: "Spend 30 minutes on SQL problems each week", note: "LeetCode, Mode, or HackerRank" },
          { id: "o5", text: "Read one data science or industry article per week", note: "Towards Data Science, Stratechery, or Morning Brew" },
          { id: "o6", text: "Update company tracker spreadsheet weekly", note: "status, follow-up dates, contacts" },
          { id: "o7", text: "Exam P study (actuary track only)", note: "2–3 hours per week is enough to make real progress" },
        ]
      }
    ]
  }
};

const SALARY_DATA = [
  { role: "Data Scientist", range: "$85K–$110K", bonus: "$90K–$120K", remote: "High", track: "A" },
  { role: "Product Analyst (Tech)", range: "$75K–$110K", bonus: "$80K–$120K", remote: "Very High", track: "A" },
  { role: "Risk Analyst", range: "$70K–$100K", bonus: "$80K–$115K", remote: "High", track: "C" },
  { role: "Business / Data Analyst", range: "$65K–$90K", bonus: "$70K–$100K", remote: "High", track: "B" },
  { role: "Consulting (Boutique)", range: "$65K–$95K", bonus: "$80K–$115K", remote: "Medium", track: "C" },
  { role: "Financial Analyst", range: "$65K–$85K", bonus: "$75K–$100K", remote: "Medium", track: "C" },
  { role: "Supply Chain Analyst", range: "$60K–$85K", bonus: "$65K–$90K", remote: "Medium", track: "B" },
  { role: "Market Research Analyst", range: "$55K–$80K", bonus: "$60K–$85K", remote: "High", track: "B" },
  { role: "Actuary (entry)", range: "$65K–$80K", bonus: "$70K–$90K", remote: "Very High", track: "C" },
];

const RESOURCES = [
  { name: "Kaggle Learn", what: "Pandas, ML, Feature Engineering, SHAP", cost: "Free", priority: "Do First", url: "https://www.kaggle.com/learn" },
  { name: "Codecademy SQL", what: "SQL fundamentals", cost: "Free tier", priority: "Do First", url: "https://www.codecademy.com/learn/learn-sql" },
  { name: "Inside Airbnb", what: "Dataset for Airbnb project", cost: "Free", priority: "Do First", url: "http://insideairbnb.com/get-the-data/" },
  { name: "FRED API", what: "Economic data for second project", cost: "Free", priority: "High", url: "https://fred.stlouisfed.org/" },
  { name: "Google Advanced Analytics", what: "Python, regression, ML — resume cert", cost: "~$50/mo", priority: "High", url: "https://www.coursera.org/professional-certificates/google-advanced-data-analytics" },
  { name: "Streamlit Community Cloud", what: "Free dashboard deployment", cost: "Free", priority: "High", url: "https://streamlit.io/cloud" },
  { name: "AWS Cloud Practitioner", what: "Cloud fundamentals — differentiator", cost: "~$100 exam", priority: "Medium", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
  { name: "LeetCode (Database)", what: "SQL interview prep", cost: "Free tier", priority: "High", url: "https://leetcode.com/problemset/database/" },
  { name: "Pramp", what: "Free mock technical interviews", cost: "Free", priority: "August", url: "https://www.pramp.com/" },
];

const ALL_ITEM_IDS = Object.values(SECTIONS).flatMap(s => s.groups.flatMap(g => g.items.map(i => i.id)));

export default function App() {
  const [activeTab, setActiveTab] = useState("june");
  const [checked, setChecked] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const result = await window.storage.get("checklist_state");
        if (result && result.value) setChecked(JSON.parse(result.value));
      } catch {}
      setLoaded(true);
    }
    load();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    window.storage.set("checklist_state", JSON.stringify(checked)).catch(() => {});
  }, [checked, loaded]);

  function toggle(id) {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  }

  function getSectionProgress(sectionKey) {
    const ids = SECTIONS[sectionKey].groups.flatMap(g => g.items.map(i => i.id));
    const done = ids.filter(id => checked[id]).length;
    return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
  }

  function getGroupProgress(group) {
    const done = group.items.filter(i => checked[i.id]).length;
    return { done, total: group.items.length };
  }

  const totalDone = ALL_ITEM_IDS.filter(id => checked[id]).length;
  const totalItems = ALL_ITEM_IDS.length;
  const totalPct = Math.round((totalDone / totalItems) * 100);

  const section = SECTIONS[activeTab];

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 680, margin: "0 auto", padding: "1.5rem 1rem 3rem" }}>

      {/* Header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)" }}>Summer 2026 Plan</h1>
            <p style={{ margin: "2px 0 0", fontSize: 13, color: "var(--color-text-secondary)" }}>Tasso Panousopoulos · June 1 – August 31</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)" }}>{totalPct}%</span>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--color-text-secondary)" }}>{totalDone}/{totalItems} done</p>
          </div>
        </div>
        <div style={{ height: 6, background: "var(--color-background-secondary)", borderRadius: 999, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${totalPct}%`, background: "#2563EB", borderRadius: 999, transition: "width 0.4s ease" }} />
        </div>
      </div>

      {/* Month progress cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: "1.25rem" }}>
        {Object.entries(SECTIONS).map(([key, sec]) => {
          const { done, total, pct } = getSectionProgress(key);
          const isActive = activeTab === key;
          return (
            <button key={key} onClick={() => setActiveTab(key)} style={{
              background: isActive ? sec.lightColor : "var(--color-background-primary)",
              border: isActive ? `1.5px solid ${sec.color}` : "0.5px solid var(--color-border-tertiary)",
              borderRadius: "var(--border-radius-md)", padding: "10px 8px", cursor: "pointer",
              textAlign: "left", transition: "all 0.15s"
            }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: isActive ? sec.color : "var(--color-text-primary)", marginBottom: 2 }}>{sec.label}</div>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 6 }}>{sec.sublabel}</div>
              <div style={{ height: 3, background: "var(--color-background-secondary)", borderRadius: 999, overflow: "hidden", marginBottom: 4 }}>
                <div style={{ height: "100%", width: `${pct}%`, background: sec.color, borderRadius: 999, transition: "width 0.4s ease" }} />
              </div>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{done}/{total}</div>
            </button>
          );
        })}
      </div>

      {/* Checklist */}
      <div style={{ marginBottom: "1.5rem" }}>
        {section.groups.map((group, gi) => {
          const { done, total } = getGroupProgress(group);
          return (
            <div key={gi} style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{group.title}</h3>
                <span style={{ fontSize: 12, color: done === total ? section.color : "var(--color-text-secondary)", fontWeight: done === total ? 500 : 400 }}>{done}/{total}</span>
              </div>
              <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
                {group.items.map((item, ii) => (
                  <div key={item.id} onClick={() => toggle(item.id)} style={{
                    display: "flex", alignItems: "flex-start", gap: 12, padding: "11px 14px",
                    borderBottom: ii < group.items.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
                    cursor: "pointer", background: checked[item.id] ? section.lightColor : "transparent",
                    transition: "background 0.15s"
                  }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 4, flexShrink: 0, marginTop: 1,
                      border: checked[item.id] ? `2px solid ${section.color}` : "1.5px solid var(--color-border-secondary)",
                      background: checked[item.id] ? section.color : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s"
                    }}>
                      {checked[item.id] && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontSize: 14, color: checked[item.id] ? "var(--color-text-secondary)" : "var(--color-text-primary)", textDecoration: checked[item.id] ? "line-through" : "none", lineHeight: 1.4 }}>{item.text}</p>
                      {item.note && <p style={{ margin: "3px 0 0", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.4 }}>{item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Salary reference */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ margin: "0 0 0.75rem", fontSize: 16, fontWeight: 500, color: "var(--color-text-primary)" }}>Salary reference — entry level 2026</h2>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto", gap: 0 }}>
            {["Role", "Base range", "w/ bonus", "Remote"].map(h => (
              <div key={h} style={{ padding: "8px 12px", fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-secondary)" }}>{h}</div>
            ))}
            {SALARY_DATA.map((row, i) => {
              const trackColor = row.track === "A" ? "#2563EB" : row.track === "B" ? "#7C3AED" : "#059669";
              const trackBg = row.track === "A" ? "#EFF6FF" : row.track === "B" ? "#F5F3FF" : "#ECFDF5";
              return [
                <div key={`r${i}`} style={{ padding: "9px 12px", fontSize: 13, color: "var(--color-text-primary)", borderBottom: i < SALARY_DATA.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 500, padding: "1px 6px", borderRadius: 4, background: trackBg, color: trackColor }}>Track {row.track}</span>
                  {row.role}
                </div>,
                <div key={`r${i}b`} style={{ padding: "9px 12px", fontSize: 13, color: "var(--color-text-primary)", borderBottom: i < SALARY_DATA.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none", fontVariantNumeric: "tabular-nums" }}>{row.range}</div>,
                <div key={`r${i}c`} style={{ padding: "9px 12px", fontSize: 13, color: "var(--color-text-secondary)", borderBottom: i < SALARY_DATA.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none", fontVariantNumeric: "tabular-nums" }}>{row.bonus}</div>,
                <div key={`r${i}d`} style={{ padding: "9px 12px", fontSize: 12, borderBottom: i < SALARY_DATA.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
                  <span style={{ color: row.remote === "Very High" ? "#059669" : row.remote === "High" ? "#2563EB" : "var(--color-text-secondary)" }}>{row.remote}</span>
                </div>
              ];
            })}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ margin: "0 0 0.75rem", fontSize: 16, fontWeight: 500, color: "var(--color-text-primary)" }}>Resources</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {RESOURCES.map((r, i) => {
            const pColors = { "Do First": { bg: "#ECFDF5", text: "#059669" }, "High": { bg: "#EFF6FF", text: "#2563EB" }, "Medium": { bg: "#F5F3FF", text: "#7C3AED" }, "August": { bg: "#FFF7ED", text: "#C2410C" } };
            const pc = pColors[r.priority] || pColors["Medium"];
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-md)", padding: "10px 14px" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)" }}>{r.name}</span>
                    <span style={{ fontSize: 10, fontWeight: 500, padding: "2px 7px", borderRadius: 999, background: pc.bg, color: pc.text }}>{r.priority}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-secondary)" }}>{r.what} · {r.cost}</p>
                </div>
                <a href={r.url} style={{ fontSize: 12, color: "#2563EB", textDecoration: "none", flexShrink: 0, padding: "4px 10px", border: "0.5px solid #BFDBFE", borderRadius: "var(--border-radius-md)", background: "#EFF6FF" }}>Open →</a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interview prep */}
      <div>
        <h2 style={{ margin: "0 0 0.75rem", fontSize: 16, fontWeight: 500, color: "var(--color-text-primary)" }}>Interview prep</h2>
        <div style={{ background: "#EFF6FF", border: "0.5px solid #BFDBFE", borderRadius: "var(--border-radius-lg)", padding: "14px 16px", marginBottom: "0.75rem" }}>
          <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 500, color: "#2563EB", textTransform: "uppercase", letterSpacing: "0.05em" }}>Your answer to "Why no internship?"</p>
          <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.6, fontStyle: "italic" }}>"I spent my junior year studying abroad in Spain, which was an intentional decision. This summer I focused on building a strong technical portfolio — I built and deployed two data science projects on GitHub, completed the Google Advanced Analytics certification, and worked on SQL and machine learning fundamentals. I'm confident the portfolio reflects the skills you'd expect from an internship candidate."</p>
        </div>
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", overflow: "hidden" }}>
          {[
            "Tell me about a time you used data to make a decision or recommendation.",
            "Describe a time you worked on a team with a difficult dynamic.",
            "Tell me about a project where things didn't go as planned. What did you do?",
            "Give an example of a time you had to learn something quickly.",
            "Describe your most technically challenging project.",
          ].map((q, i, arr) => (
            <div key={i} style={{ padding: "10px 14px", borderBottom: i < arr.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", minWidth: 18, paddingTop: 1 }}>{i + 1}.</span>
              <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-primary)", lineHeight: 1.5 }}>{q}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
