# CleanCity Waste Pickup Scheduler - QA Report

**Project:** CleanCity Waste Pickup Scheduler  
**Prepared By:** Meseret Akalu  
**Reviewed By:** Mercy Benu, Viron Ochieng  
**Prepared Date:** 18/11/2025  
**Review Date:** 18/11/2025  

---

## 1. Executive Summary
The CleanCity Waste Pickup Scheduler has undergone comprehensive testing, covering functional, usability, performance, accessibility, and security aspects. Testing verified critical user journeys, data integrity, and cross-browser/device compatibility. Overall, **94.6% of planned test cases passed**, with identified defects prioritized for immediate resolution.

---

## 2. Test Strategy and Approach
- **Manual Testing:** Verification of all functional workflows, data validation, UI/UX, and error handling.  
- **Automation Testing:** 72% of test cases automated covering critical flows and regression scenarios.  
- **Performance Testing:** Load and stress tests performed to ensure app stability under peak usage.  
- **Security Testing:** Vulnerability assessment including session management, input validation, and accessibility checks.  
- **Device/Browser Coverage:**  
  - **Devices:** Samsung Galaxy S23, iPhone 14, OnePlus 10, Google Pixel 7  
  - **Browsers:** Chrome, Firefox, Edge, Safari, UC Browser  

---

## 3. Test Environment Details
- **Platform:** Windows 10, macOS Ventura, Android 13, iOS 17  
- **Web Servers:** Apache Tomcat 10  
- **Database:** MySQL 8.0  
- **Test Management Tools:** TestLink, Jira/GitHub for issue tracking  
- **Automation Tools:** Selenium WebDriver, Cypress  

---

## 4. Test Execution Summary

| Metric                        | Value                |
|-------------------------------|-------------------|
| Total Test Cases Planned       | 63                 |
| Total Test Cases Executed      | 63 (100%)          |
| Passed                         | 59 (94.6%)         |
| Failed                         | 4 (6.3%)           |
| Blocked                        | 0                  |
| Not Run                        | 0                  |
| Not Covered                    | 0                  |
| Automation Coverage            | 72%                |
| Code Coverage (Unit+Integration)| 87%               |
| Critical User Journeys Verified| 15/15 (100%)       |

---

## 5. Defect Analysis and Categorization

| ID | Description | Severity | Status | Notes |
|----|------------|---------|-------|------|
| 1  | App accepts numerical inputs as user’s name during scheduling | Medium | Open | Data integrity risk |
| 2  | User can schedule a pickup for a past date | High | Open | Operational confusion |
| 3  | User session timeout not implemented | Critical | Open | Security & usability risk |
| 4  | Add dark mode support to "Awareness" page | Enhancement | Open | UX improvement |
| 5  | Awareness page has no text alternatives for non-text content | Medium | Open | Accessibility compliance |
| 6  | Logout does not clear credentials in input fields | Medium | Open | Security / privacy risk |
| 7  | Missing requests in "system statistics" section | Low | Open | Reporting accuracy |
| 8  | Admin cannot use "Edit" button in "All requests" section | High | Open | Admin workflow blocked |
| 9  | Filter section on admin dashboard does not filter requests by status/location | High | Open | Workflow efficiency issue |

**Defect Severity Distribution:** Critical: 1, High: 3, Medium: 3, Low: 1, Enhancement: 1  

---

## 6. Risk Assessment

| Risk ID | Risk Name | Description | Probability | Impact | Severity | Risk Level |
|---------|-----------|------------|------------|--------|---------|------------|
| RS_001 | Login Functionality | Invalid login inputs accepted | High | High | Very High | Critical |
| RS_002 | Pickup Date | Users schedule past dates | Very High | Very High | Very High | Critical |
| RS_003 | Session Timeout | Session not expiring | High | High | High | Critical |
| RS_004 | Admin Editing | Admin cannot edit requests | Very High | Very High | High | Critical |
| RS_005 | Accessibility | Missing text alternatives & dark mode | Medium | Medium | Medium | Moderate |
| RS_006 | Browser Compatibility | App fails on Firefox & UC Browser | Very High | Medium | Medium | Severe |
| RS_007 | Logout Security | Credentials persist after logout | Medium | Medium | Medium | Moderate |
| RS_008 | Reporting / Stats | Missing requests in system statistics | Low | Medium | Medium | Moderate |
| RS_009 | Data Quality | Numerical names accepted | High | Medium | Medium | Moderate |

### Risk Matrix

| Impact ↓ / Probability → | Very Low | Low       | Medium    | High      | Very High |
|---------------------------|----------|-----------|-----------|-----------|-----------|
| Very High                 | Moderate | Severe    | Severe    | Critical  | Critical  |
| High                      | Sustainable | Moderate | Severe    | Critical  | Critical  |
| Medium                    | Sustainable | Moderate | Moderate  | Severe    | Critical  |
| Low                       | Sustainable | Sustainable | Moderate  | Severe    | Critical  |
| Very Low                  | Sustainable | Sustainable | Sustainable | Moderate | Severe    |

### 🎯 Risk Level Distribution (Mermaid Pie Chart)

```mermaid
pie title Risk Level Distribution
    "Critical" : 4
    "Severe" : 1
    "Moderate" : 4
    "Sustainable" : 0
