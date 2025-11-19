---
title: "Glitch-grabbers CleanCity QA Report (Nov 18, 2025)"
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
  - \definecolor{sectionTitle}{rgb}{0.10, 0.26, 0.49}
  - \definecolor{tableHeader}{rgb}{0.24, 0.34, 0.50}
---

\newpage

# CleanCity — Waste Pickup Scheduler  
## QA Test Report

> **Prepared By**: Meseret Akalu  
> **Reviewed By**: Mercy Benu, Viron Ochieng  
> **Prepared Date**: 2025-11-18  
> **Project Title**: CleanCity Waste Pickup Scheduler  
> **Team / Institution**: CleanCity QA Team — Software Testing Mastery in Scrum Course

<br>

> ✨ *"Assuring a cleaner, smarter city — one release at a time."* ✨

---

## Table of Contents

1. [Cover Page](#cleancity--waste-pickup-scheduler-qa-test-report)
2. [Table of Contents](#table-of-contents)
3. [Executive Summary](#executive-summary)
4. [Test Strategy & Approach](#test-strategy--approach)
5. [Test Environment Details](#test-environment-details)
6. [Test Execution Summary](#test-execution-summary)
7. [Defect Analysis & Categorization](#defect-analysis--categorization)
8. [Risk Assessment](#risk-assessment)
9. [Recommendations & Improvements](#recommendations--improvements)
10. [Test Metrics & KPIs](#test-metrics--kpis)
11. [Appendices (Evidence & Artifacts, Test Cases, Glossary)](#appendices)

---

\newpage

## Executive Summary

- **Scope**: Comprehensive QA (functional, non-functional) of CleanCity Waste Pickup Scheduler—core flows (auth, scheduling, admin), new features (wishlist, AR), and 3rd-party integrations.
- **Overall QA Outcome**: Of 34 planned test cases, 24 passed and 10 failed, for a **pass rate of 70.6%**. High-impact issues include missing session timeout, improper scheduling validation, admin/filters workflow blocks, and wishlist sync (SHOP-4589).
- **Business Risk**: Two critical issues—security (session) and operational (date validation)—must be resolved. Controlled release is advised (phased 10% cohort, feature flags).
- **Coverage**: Regression automation (452 scripts, 72% coverage); core business journeys passed (login, scheduling, payment happy-paths); remaining manual/edge scenarios executed.
- **Recommendation**: Block full launch pending critical fixes; enable intensive monitoring (payment, login, scheduling), and prepare rapid rollback contingencies.

---

\newpage

## Test Strategy & Approach

### QA Objectives

- Exercise and validate all business-critical and edge user journeys for correctness, security, performance, compatibility, and accessibility.
- Prioritize risk-driven testing, leverage automation, and reduce release uncertainty.

### Scope

**Functional Areas**
- User authentication/account management (register, login/logout, password reset, profile, preferences)
- Scheduling (create, edit, cancel pickups; proper date/time validation)
- Service/Product catalog & search (filters, advanced search, AR experience)
- Cart/Checkout & payments (5 payment gateways, fraud handling, UI/UX)
- Admin, reporting, and new features (personalized recommendations, in-app chat)
- **Non-functional**: performance, browser/device compatibility, security, accessibility (WCAG, screen readers)

### Test Design & Execution

- **Techniques**: Risk-based prioritization, functional (black/white-box), boundary-value, equivalence class, decision-tables, exploratory sessions for UX/edge
- **Automation**: 452 regression scripts (Selenium/Cypress/Appium); 45 new for this release; automated critical/smoke in CI/CD
- **Manual**: New, complex, UX scenarios; exploratory and boundary conditions
- **Continuous Testing**: Automated smoke/regression on every PR in CI/CD

---

\newpage

## Test Environment Details

### Platforms & Devices

- **Desktop OS**: Windows 10, macOS Ventura
- **Mobile OS**: Android 10–14, iOS 15–18
- **Browsers**: Chrome, Firefox, Edge, Safari, UC Browser
- **Device Matrix**: BrowserStack App Live

### Infrastructure

- **Web Server**: Apache Tomcat 10
- **Database**: MySQL 8.0
- **Payment Gateways**: All legacy + 5 new integrations
- **CI/CD**: Automated pipelines for regression, pre-release gating

### Tools & Services

- **Test Management**: TestLink, TestRail, Jira / GitHub Issues
- **Automation**: Selenium WebDriver, Cypress, Appium (Python 3.11)
- **Performance**: JMeter 5.6
- **Security/Static Analysis**: SonarQube
- **Accessibility**: Accessibility Scanner, VoiceOver/TalkBack

---

\newpage

## Test Execution Summary

| Metric                      | Value         |
|-----------------------------|--------------:|
| Total Planned Test Cases    | 34            |
| Executed                    | 34 (100%)     |
| Passed                      | 24 (70.6%)    |
| Failed                      | 10 (29.4%)    |
| Blocked                     | 0             |
| Regression Pack             | 452           |
| Automation Coverage         | 72%           |
| Unit/Integration Coverage   | 87%           |
| Critical Journeys           | 15/15 pass    |

**Coverage/Effectiveness**

- **Regression**: 452 automated scripts, 72% coverage; all critical/happy-path journeys pass.
- **Manual**: New features, error/edge cases, and accessibility.
- **Evidence**: Full logs, coverage screenshots, and attachments in Appendices.

**Highlights**

- **Critical journeys** (login, pickup scheduling, checkout, payment): All happy-paths verified and passed.
- **Defects** (see below): Significant critical/high issues found; selected logs and screenshots attached in evidence.

---

\newpage

## Defect Analysis & Categorization

| ID  | Description                               | Severity     | Status | Note                                         |
|-----|-------------------------------------------|--------------|--------|----------------------------------------------|
| 1   | Numerical name accepted                   | Medium       | Open   | Data integrity risk                          |
| 2   | Can schedule pickup for past date         | High         | Open   | Scheduling validation missing                |
| 3   | Session timeout not implemented           | Critical     | Open   | Security risk, session persists              |
| 4   | Dark mode missing on Awareness page       | Enhancem.    | Open   | UX/Accessibility                             |
| 5   | Accessibility alternatives missing        | Medium       | Open   | No alt text/ARIA for graphics                |
| 6   | Logout does not clear credentials         | Medium       | Open   | Security/privacy                             |
| 7   | Missing data in system statistics         | Low          | Open   | Intermittent aggregation issue               |
| 8   | Admin cannot use Edit in requests         | High         | Open   | Admin workflow blocked                       |
| 9   | Filter does not combine properly          | High         | Open   | User filtering disrupted                     |

**Root Causes**  
- Input validation, session/token handling, UI attribute gaps, partial client–server sync (wishlist)

**Critical/High-impact Recommendations**  
- Immediate triage or block release
- Apply hotfixes & retest before open rollout

---

\newpage

## Risk Assessment

| Risk    | Area              | Probability      | Impact        | Severity        |
|---------|-------------------|------------------|---------------|-----------------|
| RS_001  | Login             | High             | High          | Critical        |
| RS_002  | Scheduling (past) | Very High        | Very High     | Critical        |
| RS_003  | Session timeout   | High             | High          | Critical        |
| RS_004  | Admin Edit        | Very High        | Very High     | Critical        |
| RS_005  | Accessibility gaps| Medium           | Medium        | Moderate        |
| RS_006  | Browser compat.   | Very High        | Medium        | Severe          |
| RS_007  | Logout/Credential | Medium           | Medium        | Moderate        |

**Recommendation**  
Block release until all critical issues resolved or fully mitigated (feature-flag, enhanced telemetry/rollback).

**Mitigation Plan**
- Patch and deploy hotfixes (e.g., SHOP-4589)
- Enforce session TTL server-side and client-side
- Tighten scheduling validation (no past dates)
- Cohort-based monitor on new payment methods
- Expand alerts/telemetry for login/payments

---

\newpage

## Recommendations & Improvements

### Immediate (72 hours)

- Patch/verify: session timeout, past-date scheduling, admin edit (IDs 3, 2, 8)
- Deploy SHOP-4589 wishlist hotfix, monitor post-deploy
- Enhance 24/7 monitoring, pre-release security checks

### Short-term (Sprint)

- Complete all high/medium defect fixes
- Logout: Ensure credentials/sessions are cleared both sides
- Increment automation and accessibility (target >90% coverage)

### Mid-term (2–6 sprints)

- Full WCAG AA compliance
- Regression suite expansion and accessibility in CI
- Fix browser-specific issues (Firefox, UC)
- Implement release gating and canary synthetic runs

---

\newpage

## Test Metrics & KPIs

| Metric                       | Value            |
|------------------------------|-----------------:|
| Test case execution          | 34/34 (100%)     |
| Pass rate                    | 24/34 (70.6%)    |
| Defect density               | 9 (full suite)   |
| Automation coverage          | 72%              |
| Regression scripts           | 452              |
| Unit/integration coverage    | 87%              |
| Critical journeys passed     | 15/15            |
| TTD (critical defects)       | avg. 1.2d/test   |

**Suggested KPIs (post-release)**  
- Error rate per 1k sessions (rollback threshold: 72h)
- Payment gateway failure delta (vs. baseline)
- Login/auth failures and mean session duration
- Mean TTD for critical fixes (target ≤ 72h)

---

\newpage

## Appendices

### A. Evidence & Attachments

#### QA Test Screenshots (Selected)

| # | Description                        | Image Preview                                                        |
|---|------------------------------------|-----------------------------------------------------------------------|
| 1 | Unit Test Coverage                 | ![Unit Test Screenshot](https://github.com/user-attachments/assets/4b12fa12-c8a5-47da-8d67-7cf0784948ce) |
| 2 | Login Success Feedback             | ![Screenshot 1](https://github.com/user-attachments/assets/ee92012e-2d77-4c47-a4dc-b4c9a0b32af2)           |
| 3 | Payment Gateway UX                 | ![Screenshot 2](https://github.com/user-attachments/assets/04115f6a-a603-4235-9f1b-1fb953162aa2)           |
| 4 | Scheduling Past Date Error         | ![Screenshot 3](https://github.com/user-attachments/assets/4287e42c-1bab-4c17-9998-483792c67669)           |
| 5 | Wishlist Sync Issue                | ![Screenshot 4](https://github.com/user-attachments/assets/91f7aa31-ebbd-4c66-b993-2d3582871172)           |
| 6 | Accessibility: Screen Reader Alert | ![Screenshot 5](https://github.com/user-attachments/assets/a5e050c7-d3e2-44f7-b327-e100590b7c08)           |

**Other Supporting Artifacts**

- **Automation logs**: *[Internal link: `link_to_automation_logs.txt`]*
- **Coverage reports**: *[Internal link: `link_to_coverage_report.html`]*
- **Defect references**: [GitHub Issue Tracker](https://github.com/mah-c/wk-6-mah-c-1-glitch-grabbers-team-repo/issues), SHOP-4589

---

### B. Sample Test Cases

#### TC_LG_001 — Login Functionality
- **Steps**: Open app → Go to Login → Enter valid email/password → Submit
- **Test Data**: Email `user@cleancity.com` / Pass `password123`
- **Expected**: Redirect to dashboard if successful.
- **Actual**: Login successful. **PASS**

#### TC_WS_002 — Wishlist Synchronization
- **Steps**: Add item on Device A, remove on Device B, refresh Device A.
- **Expected**: Wishlist state synchronized across devices.
- **Actual**: Intermittent loss. **FAIL** *(SHOP-4589)*

#### TC_AC_001 — Accessibility
- **Steps**: Navigate using VoiceOver/TalkBack on key flows.
- **Expected**: All UI elements announced, navigable.
- **Actual**: Missing image alt texts/labels. **PARTIAL**

*Full test cases: available via TestRail/Jira export (on request).*

---

### C. Glossary & Notes

- **Critical journey**: End-to-end user flow (login → schedule → checkout → payment)
- **SHOP-4589**: Wishlist sync bug/hotfix
- *Percentages normalized if discrepancies in artifact source*
- Some internal evidence URLs may require access.

---

> **Prepared by:** Meseret Akalu (CleanCity QA Team)  
> **Reviewed by:** Mercy Benu, Viron Ochieng

---

<div style="text-align:center; font-size:1.2em;">
  <strong>End of Report — Delivering Clean, Reliable User Experiences</strong>
</div>
