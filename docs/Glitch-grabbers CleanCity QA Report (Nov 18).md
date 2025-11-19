---
title: "Glitch‑grabbers — CleanCity QA Report (Nov 18, 2025)"
author:
  - "Prepared By: Meseret Akalu"
  - "Reviewed By: Mercy Benu, Viron Ochieng"
date: "2025-11-18"
geometry: margin=1in
fontsize: 11pt
toc: true
toc-depth: 2
header-includes:
  - \usepackage{fancyhdr}
  - \pagestyle{fancy}
  - \fancyfoot[C]{Page \thepage}
  - \usepackage{color}
  - \usepackage{graphicx}
  - \usepackage{booktabs}
  - \usepackage{longtable}
  - \usepackage{caption}
  - \usepackage{pgfplots}
  - \pgfplotsset{compat=1.17}
  - \usepackage{pgf-pie}
  - \usepackage{tikz}
  - \usepackage{sectsty}
  - \sectionfont{\color{sectionTitle}}
  - \definecolor{sectionTitle}{rgb}{0.10,0.26,0.49}
  - \definecolor{tableHeader}{rgb}{0.24,0.34,0.50}
  - \definecolor{accent}{rgb}{0.16,0.57,0.38}
  - \setlength{\parskip}{0.5em}
---

\thispagestyle{empty}
\begin{center}
  \vspace*{1.0in}
  {\LARGE\bfseries CleanCity — Waste Pickup Scheduler}\\[0.6em]
  {\Large\bfseries QA Test Report}\\[1.5em]

  {\large Prepared By: Meseret Akalu}\\
  {\large Reviewed By: Mercy Benu, Viron Ochieng}\\[0.8em]

  {\normalsize Team: Glitch‑grabbers}\\
  {\normalsize Institution: CleanCity QA Team — Software Testing Mastery in Scrum Course}\\[0.6em]

  {\normalsize Date: 2025‑11‑18}\\[1.5em]

  \begin{minipage}{0.85\textwidth}
    \centering
    \small
    "Assuring a cleaner, smarter city — one release at a time."
  \end{minipage}

  \vfill

  \includegraphics[width=0.18\textwidth]{logo_placeholder.png} % replace with project logo
\end{center}
\newpage

\setcounter{tocdepth}{2}
\tableofcontents
\newpage

# Executive Summary

- Scope: Full QA of CleanCity Waste Pickup Scheduler — core flows (auth, scheduling, admin), new features (wishlist, AR), 3rd‑party integrations (payments, analytics).
- Outcome: 34 planned test cases executed; 24 passed, 10 failed — Pass rate 70.6%.
- Key high‑impact defects: session timeout missing (security), scheduling allows past dates (operational), admin edit blocked (workflow).
- Business risk: Critical issues in scheduling and session management — recommend blocking full rollout until resolved or using feature flags with canary cohorts (10%).
- Top recommendations: Hotfix critical bugs, harden session TTL, add server‑side validation for scheduling, enable enhanced telemetry on login/payment, expand automation coverage and accessibility fixes.

# Test Strategy & Approach

## QA Objectives
- Validate business‑critical journeys for correctness, security, performance, compatibility and accessibility.
- Focus on risk‑driven testing: prioritize fixes for critical user and business impact.
- Increase automation for regression and smoke tests in CI.

## Test Scope
- Functional: Authentication, Scheduling (create/edit/cancel), Catalog & AR, Cart/Checkout & payments (5 gateways), Admin/Reporting.
- Non‑functional: Performance, Security, Browser/device compatibility, Accessibility (WCAG AA).

## Test Design & Techniques
- Risk‑based prioritization, equivalence classes, boundary values, decision tables, exploratory testing for UX.
- Automation: Selenium/Cypress/Appium (452 regression scripts; 45 new tests for this release).
- Manual: Complex UX, accessibility, and negative/edge scenarios.

# Test Environment Details

- Platforms: Desktop (Windows 10, macOS Ventura), Mobile (Android 10–14, iOS 15–18)
- Browsers: Chrome, Firefox, Edge, Safari, UC Browser
- Infrastructure: Apache Tomcat 10; MySQL 8.0; CI/CD pipelines for gating
- Tools: TestRail/Jira, Selenium/Cypress/Appium, JMeter, SonarQube, BrowserStack, Accessibility Scanner

# Test Execution Summary

| Metric                      | Value         |
|----------------------------:|--------------:|
| Total Planned Test Cases    | 34            |
| Executed                    | 34 (100%)     |
| Passed                      | 24 (70.6%)    |
| Failed                      | 10 (29.4%)    |
| Blocked                     | 0             |
| Regression Pack             | 452           |
| Automation Coverage         | 72%           |
| Unit/Integration Coverage   | 87%           |
| Critical Journeys           | 15/15 pass    |

\bigskip

\noindent Below are visual summaries of key metrics.

\begin{center}
\begin{tikzpicture}
  \pie[text=legend, after number=\%, radius=2.0]{
    70.6/Passed (24),
    29.4/Failed (10)
  }
\end{tikzpicture}
\qquad
\begin{tikzpicture}
  \begin{axis}[
      width=8cm,
      height=4cm,
      ybar,
      bar width=14pt,
      ymin=0,
      ymax=12,
      ylabel={Count},
      symbolic x coords={Critical, High, Medium, Low},
      xtick=data,
      nodes near coords,
      nodes near coords align={vertical},
      enlarge x limits=0.4
    ]
    \addplot+[fill=accent] coordinates {(Critical,4) (High,3) (Medium,2) (Low,1)};
  \end{axis}
\end{tikzpicture}
\end{center}

# Defect Analysis & Categorization

| ID  | Description                               | Severity     | Status | Note                                         |
|:---:|:------------------------------------------|:------------:|:------:|:---------------------------------------------|
| 1   | Numerical name accepted                   | Medium       | Open   | Data integrity risk                          |
| 2   | Can schedule pickup for past date         | High         | Open   | Scheduling validation missing                |
| 3   | Session timeout not implemented           | Critical     | Open   | Security risk, session persists              |
| 4   | Dark mode missing on Awareness page       | Enhancement  | Open   | UX/Accessibility                             |
| 5   | Accessibility alternatives missing        | Medium       | Open   | No alt text/ARIA for graphics                |
| 6   | Logout does not clear credentials         | Medium       | Open   | Security/privacy                             |
| 7   | Missing data in system statistics         | Low          | Open   | Intermittent aggregation issue               |
| 8   | Admin cannot use Edit in requests         | High         | Open   | Admin workflow blocked                       |
| 9   | Filter does not combine properly          | High         | Open   | User filtering disrupted                     |
| 10  | Wishlist sync intermittent (SHOP‑4589)    | High         | Open   | Cross‑device sync                            |

## Root Cause Summary
- Input validation gaps (server & client)
- Session & token lifecycle handling (missing TTL / cookie clearing)
- Partial client↔server sync and race conditions (wishlist)
- UI attribute & accessibility omissions (missing alt/ARIA)

# Risk Assessment

| Risk ID | Area              | Probability | Impact | Severity     |
|:-------:|:------------------|:-----------:|:------:|:------------:|
| RS_001  | Login             | High        | High   | Critical     |
| RS_002  | Scheduling        | Very High   | Very High | Critical  |
| RS_003  | Session timeout   | High        | High   | Critical     |
| RS_004  | Admin Edit        | Very High   | Very High | Critical  |
| RS_005  | Accessibility     | Medium      | Medium | Moderate     |
| RS_006  | Browser compat.   | Very High   | Medium | Severe       |

Mitigation priority: RS_002, RS_003, RS_004 must be fixed or mitigated before wide rollout.

# Recommendations & Improvements

Immediate (next 72 hours)
- Hotfix session TTL + cookie clearing (IDs 3,6)
- Enforce server‑side date validation (no past scheduling) (ID 2)
- Triage and fix admin edit workflow (ID 8)
- Deploy SHOP‑4589 wishlist hotfix to canary cohort and monitor

Short term (1–2 sprints)
- Close all high/medium defects, run full regression
- Improve logout/token revocation flows
- Increase automation coverage target → 90% for critical suites

Mid term (2–6 sprints)
- WCAG AA compliance effort (accessibility remediation)
- CI: add accessibility checks, browser compatibility matrix validation
- Implement canary release and automated rollback thresholds

# Test Metrics & KPIs

- Test case execution: 34/34 (100%)
- Pass rate: 70.6%
- Defect density (per test suite): 9 reported defects in release
- Automation coverage: 72%
- Regression scripts: 452
- Unit/integration coverage: 87%
- TTD (critical defects): avg. 1.2 days

Suggested post‑release KPIs
- Error rate per 1k sessions (alert threshold → roll back)
- Payment gateway failure delta (vs baseline)
- Login/auth failure rate and mean session duration
- Mean time to detect/resolve critical issues (target ≤ 72h)

# Reporting Matrices & Charts

## Test Coverage Matrix (sample)
| Area               | Manual | Automated | Coverage % | Notes |
|:------------------:|:------:|:---------:|:----------:|:-----:|
| Authentication     | Yes    | Yes       | 95%        | Critical paths automated |
| Scheduling         | Yes    | Partial   | 78%        | Add negative date tests |
| Payments           | Yes    | Yes       | 84%        | Synthetic canaries needed |
| Admin              | Yes    | Partial   | 65%        | Complex UI workflows manual |
| Accessibility      | Partial| Partial   | 40%        | Needs investment |

## Defect Trend (Weekly snapshot)
\begin{center}
\begin{tikzpicture}
  \begin{axis}[
      width=12cm,height=4cm,
      xlabel=Week,
      ylabel=Defects,
      xtick=data,
      ymin=0,ymax=20
    ]
    \addplot[mark=*, color=accent] coordinates {(W-2,18) (W-1,12) (W0,9)};
    \addplot[mark=square*, color=blue] coordinates {(W-2,5) (W-1,3) (W0,2)};
    \legend{Opened,Closed}
  \end{axis}
\end{tikzpicture}
\end{center}

# Test Evidence (Appendix A)

- All screenshots and logs are stored in the project evidence folder (internal links / attachments).
- Selected screenshots:
  - Unit Test Coverage: https://github.com/user-attachments/assets/4b12fa12-c8a5-47da-8d67-7cf0784948ce
  - Scheduling Past Date Error: https://github.com/user-attachments/assets/4287e42c-1bab-4c17-9998-483792c67669
  - Wishlist Sync: https://github.com/user-attachments/assets/91f7aa31-ebbd-4c66-b993-2d3582871172

# Appendix B — Selected Test Cases (sample)

## TC_LG_001 — Login Functionality
- Steps: Open app → Login → Enter valid email/password → Submit
- Data: user@cleancity.com / password123
- Expected: Redirect to dashboard
- Actual: PASS

## TC_WS_002 — Wishlist Synchronization (SHOP‑4589)
- Steps: Add item on Device A, remove on Device B, refresh Device A
- Expected: Wishlist state synchronized
- Actual: FAIL — Intermittent desync

## TC_SC_005 — Scheduling validation
- Steps: Attempt to schedule for yesterday’s date
- Expected: Validation error, prevent scheduling
- Actual: FAIL — Past date allowed

# Appendix C — Glossary & Notes

- Critical journey: End‑to‑end (login → schedule → checkout → payment)
- SHOP‑4589: Wishlist sync bug/hotfix
- Some internal links require access permissions.

\newpage
\section*{Signatures}
\begin{tabular}{ll}
Prepared by: & Meseret Akalu \\
Reviewed by: & Mercy Benu, Viron Ochieng \\
Date: & 2025‑11‑18 \\
\end{tabular}

\bigskip
\begin{center}
  {\large End of Report — Delivering Clean, Reliable User Experiences}
\end{center}
