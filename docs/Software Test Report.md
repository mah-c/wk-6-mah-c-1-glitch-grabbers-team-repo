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
---

\newpage

# CleanCity — Waste Pickup Scheduler  
## QA Test Report

**Prepared By**: Meseret Akalu  
**Reviewed By**: Mercy Benu, Viron Ochieng  
**Prepared Date**: 2025-11-18  
**Project Title**: CleanCity Waste Pickup Scheduler  
**Team / Institution**: CleanCity QA Team — Software Testing Mastery in Scrum Course

---

## Table of Contents

1. [Cover Page](#cleancity--waste-pickup-scheduler-qa-test-report)
2. [Table of Contents](#table-of-contents)
3. [Executive Summary](#executive-summary-page-3)
4. [Test Strategy & Approach](#3-test-strategy--approach-page-4)
5. [Test Environment Details](#4-test-environment-details-page-6)
6. [Test Execution Summary](#5-test-execution-summary-page-7)
7. [Defect Analysis & Categorization](#6-defect-analysis--categorization-page-9)
8. [Risk Assessment](#7-risk-assessment-page-11)
9. [Recommendations & Improvements](#8-recommendations--improvements-page-13)
10. [Test Metrics & KPIs](#9-test-metrics--kpis-page-15)
11. [Appendices (Supporting docs, screenshots, test cases)](#10-appendices-page-17)

---

\newpage

## Executive Summary (page 3)
- **Scope**: Full functional and non-functional QA of CleanCity Waste Pickup Scheduler including core flows (auth, scheduling, admin), new features, and integrations.
- **Overall status**: The QA effort executed the complete planned suite. Key result: of 34 planned test cases executed, 24 passed and 10 failed. (See Test Execution Summary for details and raw outputs.)
- **Pass rate** (executed cases): 24/34 → 70.6%.
- **Key findings**:
    - Critical issues: session timeout not implemented (security risk), scheduling allowed for past dates (business/ops risk).
    - High-impact admin and filter defects block a subset of workflows (admin edit, filter combination).
    - Wishlist synchronization shows intermittent loss—requires a hotfix (SHOP-4589 referenced).
- **Recommendation**: Proceed with a controlled, phased release (10% initial ramp) only after addressing at minimum the critical security and scheduling fixes or ensuring compensating monitoring and rollback capabilities. Implement enhanced monitoring on payment gateway and login-related flows for first 72 hours.

\newpage

## 3. Test Strategy & Approach (page 4)

### Objectives
- Validate that business-critical journeys are correct, secure, performant, and accessible.
- Reduce release risk via prioritized testing and automation.

### Scope (Functional Areas)
- User Authentication & Account Management (registration, login/logout, password reset, profile, preferences)
- Scheduling & Pickup flows (create, edit, cancel pickups, validation including date/time)
- Product / Service Catalog & Search (browse, filters, advanced search)
- Cart, Checkout & Payments (including 5 new payment methods)
- Admin & Back-office workflows (edit requests, statistics)
- New features: personalized recommendations, wishlist sharing, AR visualization, in-app chat

**Non-Functional Areas**
- Performance/load under realistic and peak conditions
- Compatibility across Android (v10–v14), iOS (v15–v18), major browsers
- Security: input validation, session management, secure storage
- Accessibility: WCAG conformance, screen-reader tests

**Test Design & Techniques**
- Risk-based prioritization (payments, auth, scheduling first)
- Test types: functional (black/white-box), boundary-value, equivalence partitions, decision-table testing
- Regression automated: 452 scripts (existing suite), new features manually tested then automated
- Exploratory sessions for UX and edge cases

**Test Execution Model**
- Manual + automation: manual for new/complex scenarios; automation for regression and repeatable flows.
- Continuous testing in CI for critical smoke/regression flows.

\newpage

## 4. Test Environment Details (page 6)

**Platforms & Browsers**
- Desktop OS: Windows 10, macOS Ventura
- Mobile OS: Android 10–14, iOS 15–18
- Browsers: Chrome, Firefox, Edge, Safari, UC Browser

**Infrastructure & Services**
- Web Server: Apache Tomcat 10
- Database: MySQL 8.0
- Payment gateways: Existing + 5 new (note: enhanced monitoring required)
- Cloud/device matrix: BrowserStack App Live for wide device coverage

**Tools & Frameworks**
- Test Management: TestLink, TestRail, Jira/GitHub issues
- Automation (UI): Selenium WebDriver, Cypress
- Mobile Automation: Appium 2.2.1 (Python 3.11)
- Performance: JMeter 5.6
- Static Analysis/Security: SonarQube
- Accessibility: Accessibility Scanner, VoiceOver/TalkBack
- CI: Project CI for automated suites — regression in pre-deploy gating

\newpage

## 5. Test Execution Summary (page 7)

### Execution Summary (overall)
- **Total Planned Test Cases**: 34
- **Total Executed**: 34 (100%)
- **Passed**: 24 → 70.6%
- **Failed**: 10 → 29.4%
- **Blocked**: 0

**Automation & Coverage**
- Automated: 45 in new/combined suite
- Regression pack: 452
- Automation coverage: 72% (45/63 as per artifacts)
- Unit/Integration coverage: 87%

**Critical Journeys**
- Verified and passed: core critical journeys (login, scheduling creation, checkout, payment) for happy-paths. *Note: some critical defects (session timeout, scheduling past-date validation) require fix.*

| Metric                      | Value          |
|-----------------------------|---------------:|
| Total Planned               | 34             |
| Executed                    | 34             |
| Passed                      | 24             |
| Failed                      | 10             |
| Automation Coverage         | 72% (45/63)    |
| Unit Coverage               | 87%            |
| Critical Journeys Passed    | 15/15 (happy-path) |

**Note:** Metrics are normalized from original executions for accuracy.

**Screenshots & Evidence**
- Automation logs, unit coverage screenshots and other attachments referenced in Appendices.

\newpage

## 6. Defect Analysis & Categorization (page 9)

### Defect Summary
- **Total distinct defects**: 9 (plus 1 enhancement)
- **Severity**:  
    - Critical: 1  
    - High: 3  
    - Medium: 3  
    - Low: 1  
    - Enhancement: 1

| ID  | Description                               | Severity     | Status | Note                                              |
|-----|-------------------------------------------|--------------|--------|---------------------------------------------------|
| 1   | Numerical name accepted                   | Medium       | Open   | Data integrity risk on user profiles              |
| 2   | Can schedule pickup for past date         | High         | Open   | Scheduling validation missing                     |
| 3   | Session timeout not implemented           | Critical     | Open   | Sessions persist beyond expected TTL              |
| 4   | Dark mode missing on Awareness page       | Enhancement  | Open   | UX improvement                                   |
| 5   | Accessibility alternatives missing        | Medium       | Open   | Lacks alt text/ARIA for graphics                  |
| 6   | Logout does not clear credentials         | Medium       | Open   | Security/privacy issue                            |
| 7   | Missing data in system statistics         | Low          | Open   | Intermittent aggregation issue                    |
| 8   | Admin cannot use Edit in requests         | High         | Open   | Admin functionality blocked                       |
| 9   | Filter does not combine properly          | High         | Open   | Workflow disruption                               |

**Root Causes**
- Missing validation rules
- Session/token management issues
- Partial client–server sync (wishlist)
- Accessibility/UI attribute gaps

**Recommendations**
- Critical/High: immediate triage/hotfix or block release until mitigated.
- Medium/Low: next sprint, with clear ownership/test verification.
- Enhancement: backlog for future UX sprint.

\newpage

## 7. Risk Assessment (page 11)

### Risk Summary & Matrix

| Risk    | Area              | Probability      | Impact        | Severity        |
|---------|-------------------|------------------|---------------|-----------------|
| RS_001  | Login             | High             | High          | Critical        |
| RS_002  | Scheduling (past) | Very High        | Very High     | Critical        |
| RS_003  | Session timeout   | High             | High          | Critical        |
| RS_004  | Admin Edit        | Very High        | Very High     | Critical        |
| RS_005  | Accessibility gaps| Medium           | Medium        | Moderate        |
| RS_006  | Browser compatibility | Very High   | Medium        | Severe          |
| RS_007  | Logout/Credential | Medium           | Medium        | Moderate        |

**Release Risk Recommendation:**  
Do **not** proceed to full open release until critical issues are fixed OR compensating controls (feature flag, restricted rollout, enhanced monitoring & rollback) are in place.

**Mitigation Actions:**
- Hotfix SHOP-4589 (wishlist)
- Implement session TTL/server enforcement
- Date validation on scheduling (<now blocked)
- Feature flags for payment method rollout
- Expanded telemetry/alerts (login, payment, server)

\newpage

## 8. Recommendations & Improvements (page 13)

### Immediate (Next 48–72 hours)
- Patch and deploy: session timeout (ID3), scheduling validation (ID2), admin edit (ID8)
- Prepare SHOP-4589 hotfix & verify post-deploy
- Enable enhanced monitoring for 72h rollout

### Short-term (Sprint)
- High & medium defect resolution
- Improve logout: clear creds/session on both ends
- Server-side scheduling validation for past dates

### Medium-term (2–6 sprints)
- WCAG accessibility fixes for AA compliance
- Expand automation: >90% regression, add accessibility to CI
- Browser compatibility: Firefox, UC fixes

### Process
- Pre-release gating checklist (security, scheduling)
- Feature-flagged release path with cohort monitoring
- Synthetic, scheduled canary runs for payment/auth flows

\newpage

## 9. Test Metrics & KPIs (page 15)

| Metric                       | Value                  |
|------------------------------|-----------------------:|
| Test case execution          | 34/34 (100%)           |
| Pass rate (by case)          | 24/34 → 70.6%          |
| Defect density               | 9 across full suite    |
| Automation coverage          | 72% (as per artifacts) |
| Regression scripts           | 452 (regression pack)  |
| Code coverage                | 87% (unit/integration) |
| Critical journeys            | 15/15 passed (happy)   |
| TTD (critical defects)       | avg. 1.2d/test cycle   |

**Suggested KPIs (post-release)**
- Production error rate (per 1k sessions, 72h threshold for rollback)
- Payment failure delta from baseline
- Login/auth failure + average session duration
- RTO for critical fixes: ≤24–72h

\newpage

## 10. Appendices (page 17)

### A. Evidence & Attachments

**Automation logs & coverage screenshots**  
- `assets/unit-test-screenshot.png`
- Automation logs: `link_to_automation_logs.txt` (internal)
- Coverage report: `link_to_coverage_report.html` (internal)

**Selected QA Screenshots:**  
![Unit Test Screenshot](https://github.com/user-attachments/assets/4b12fa12-c8a5-47da-8d67-7cf0784948ce)  
![Screenshot 1](https://github.com/user-attachments/assets/ee92012e-2d77-4c47-a4dc-b4c9a0b32af2)  
![Screenshot 2](https://github.com/user-attachments/assets/04115f6a-a603-4235-9f1b-1fb953162aa2)  
![Screenshot 3](https://github.com/user-attachments/assets/4287e42c-1bab-4c17-9998-483792c67669)  
![Screenshot 4](https://github.com/user-attachments/assets/91f7aa31-ebbd-4c66-b993-2d3582871172)  
![Screenshot 5](https://github.com/user-attachments/assets/a5e050c7-d3e2-44f7-b327-e100590b7c08)  

### B. Sample Test Cases

- **TC_LG_001 — Login Functionality**
    - Steps: Open app → Navigate to Login → Enter valid email/password → Submit
    - Test Data: Email user@cleancity.com / Password password123
    - Expected: Login successful; redirected to dashboard
    - Actual: Login successful — *Pass*

- **TC_WS_002 — Wishlist Synchronization**
    - Steps: Add items to wishlist on A → Remove on B → Refresh A
    - Expected: Wishlist state consistent across devices
    - Actual: Intermittent loss — *Fail* (SHOP-4589)

- **TC_AC_001 — Accessibility**
    - Steps: VoiceOver/TalkBack across user flows
    - Expected: All content announced/navigable
    - Actual: Missing alt texts/labels — *Partial*

### C. Issue Tracker & References

- Team repo for demo: [GitHub Issues](https://github.com/mah-c/wk-6-mah-c-1-glitch-grabbers-team-repo/issues)
- Ticket: `SHOP-4589` — Wishlist sync hotfix

### D. Glossary & Notes

- **Critical journey**: business-critical path (login → schedule → checkout → payment)
- *Percentages normalized if source artifacts inconsistent*
- Any URLs above may require internal access.

---

\newpage

Prepared by: Meseret Akalu (CleanCity QA Team)  
Reviewed by: Mercy Benu, Viron Ochieng

---

**End of document**
