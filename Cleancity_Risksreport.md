# 🛡️ CleanCity – Risk Assessment Report  
### Project: CleanCity Waste Pickup Scheduler

**Prepared By:** Meseret Akalu  
**Prepared Date:** 12/11/2025  
**Reviewed By:** Mercy Benu  and viron ochieng
**Review Date:** _TBD_

---

## 📌 1. Introduction  
This document contains the complete risk assessment for the CleanCity Waste Pickup Scheduler.  
Each risk is evaluated using Probability, Impact, Severity, and Risk Level.

---

## 📊 2. Risk Register

| Risk ID | Risk Name | Description | Probability | Impact | Severity | Risk Level |
|--------|------------|-------------|-------------|--------|----------|------------|
| RS_001 | Login Functionality | User providing invalid login details | High | High | Very High | **Critical** |
| RS_002 | Pick-Up Date | User selects date outside allowed range | Very High | Very High | Very High | **Critical** |
| RS_003 | Registration Password | Password less than required digits | Low | Low | Low | **Sustainable** |
| RS_004 | Registration Blank Inputs | User inputs blank fields | Medium | High | High | **Severe** |
| RS_005 | Browser Compatibility | App fails in some browsers | Very High | Medium | Medium | **Severe** |
| RS_006 | Mobile Responsiveness | App fails on some mobile devices | High | High | High | **Critical** |
| RS_007 | Request Editing Issues | Admin fails to edit requests | Very High | Very High | High | **Critical** |
| RS_008 | Status Not Updating | Status not reflected in statistics | Low | Medium | Medium | **Moderate** |
| RS_009 | Dashboard Update Failure | Request submitted but not updated | Low | High | Medium | **Moderate** |

---

## 🎯 3. Severity Definitions

| Severity | Description |
|----------|-------------|
| Very High | Breaks core functionality; must be fixed immediately |
| High | Significantly impacts key functions |
| Medium | Impacts usability but system works |
| Low | Minor impact, cosmetic or low risk |

---

## 🎲 4. Probability Scale

| Probability | Description |
|-------------|-------------|
| Very High | Happens frequently |
| High | Likely to occur |
| Medium | Occurs occasionally |
| Low | Rare |
| Very Low | Very unlikely |

---

## 🚦 5. Risk Level Categories

| Risk Level | Meaning |
|------------|---------|
| **Critical** | Immediate attention required |
| **Severe** | Needs urgent mitigation |
| **Moderate** | Monitor and control |
| **Sustainable** | Acceptable risk |

---

## 🧩 6. Risk Matrix (Markdown Table)

| **Impact ↓ / Probability →** | Very Low | Low | Medium | High | Very High |
|------------------------------|----------|------|--------|--------|------------|
| **Very High** | Moderate | Severe | Severe | Critical | Critical |
| **High** | Sustainable | Moderate | Severe | Critical | Critical |
| **Medium** | Sustainable | Moderate | Moderate | Severe | Critical |
| **Low** | Sustainable | Sustainable | Moderate | Severe | Critical |
| **Very Low** | Sustainable | Sustainable | Sustainable | Moderate | Severe |

---

## 🥧 7. Mermaid Charts (GitHub Supported)

### 📌 Risk Level Distribution (Pie Chart)
```mermaid
pie title Risk Level Distribution
    "Critical" : 4
    "Severe" : 2
    "Moderate" : 2
    "Sustainable" : 1


