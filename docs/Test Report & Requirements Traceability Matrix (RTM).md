# CleanCity Waste Pickup Scheduler – Test Report & RTM

---

## Project Title
**CleanCity Waste Pickup Scheduler**

---

## 👤 Team Members

| Full Name       | Role           | Email                       |
|-----------------|----------------|-----------------------------|
| Viron Ochieng   | Test Manager   | ochiengviron06@gmail.com    |
| Meseret Akalu   | Risk Analyst   | meseretinsa@gmail.com       |
| Mercy Benu      | Test Executor  | benumercy1@gmail.com        |

---

## Project Overview & Purpose
The CleanCity Waste Pickup Scheduler web application provides a seamless waste management platform.  
This test project focuses on:

- Verifying user login, logout, and registration functionality.  
- Ensuring the application works smoothly across browsers and mobile devices.  
- Confirming admin functionality for status updates and request management.  
- Automating website testing using Selenium.

---

## Objectives of the Project
1. Ensure users and admins navigate the site easily.  
2. Validate functional requirements through manual and automated testing.  
3. Detect and report defects to maintain software quality.  
4. Ensure browser and device compatibility.  
5. Demonstrate traceability between requirements and test cases.

---

## Requirements Traceability Matrix (RTM) – Sample

| Req ID | Requirement Description                  | Test Scenario ID | Test Case ID | Steps to Execute                                     | Test Data                                | Expected Result                               | Actual Result       | Status | Priority |
|--------|-----------------------------------------|----------------|-------------|-----------------------------------------------------|-----------------------------------------|-----------------------------------------------|------------------|--------|---------|
| FR-004 | System shall allow registered users to log in | TS_001         | TC_LG_001   | Open index.html → Navigate to login → Enter credentials → Click submit | Email: user@cleancity.com Password: password123 | User should be logged in                        | Login Successful | Pass   | High    |
| FR-012 | Users can schedule waste pickups         | TS_005         | TC_AD_003   | Login as user → Schedule pickup request             | John Greg, pickup date 15/11/2025      | Request shown on dashboard                     | Request shown    | Pass   | High    |
| FR-010 | Role-based access control               | TS_005         | TC_AD_001   | Login as admin → Update request status             | Request ID REQ001, status: Missed      | Dashboard updates user request                 | Failed update    | Fail   | High    |

> **Note:** Full RTM includes all FRs mapped to TS_001–TS_006.

---

## Browser Compatibility Test Results

| Browser           | Test Case | Status |
|------------------|------------|--------|
| Chrome            | TC_BC_004  | Pass   |
| Mozilla Firefox   | TC_BC_001  | Fail   |
| Microsoft Edge    | TC_BC_002  | Pass   |
| UC Browser        | TC_BC_003  | Fail   |
| Internet Explorer | TC_BC_005  | Pass   |

> _Graph Placeholder:_ Browser vs Pass/Fail chart.

---

## Device Compatibility Test Results

| Device                  | Test Case | Status |
|-------------------------|------------|--------|
| Samsung Galaxy S20 Ultra | TC_DC_001 | Pass   |
| Pixel 7                 | TC_DC_002 | Pass   |
| iPhone 12 Pro           | TC_DC_003 | Pass   |
| Tablet 839x922          | TC_DC_004 | Pass   |
| Tablet 1057x922         | TC_DC_005 | Pass   |

> _Graph Placeholder:_ Device compatibility pie chart.

---

## Edge Cases & Validation Testing

| Test Case ID | Parameter                          | Test Data         | Expected Result                                | Actual Result | Status |
|--------------|------------------------------------|-----------------|------------------------------------------------|---------------|--------|
| TC_BDA_001   | Password length < 3                 | "po"            | Error: Password ≥ 3 characters                | Pass          | Low    |
| TC_BDA_002   | Password length > 16                | "Mypassword.cleancity" | Error: Password ≤ 16 characters            | Fail          | Low    |
| TC_BDA_004   | Pickup date before current date     | 09/11/2025      | Request should fail                            | Fail          | High   |
| TC_BDA_005   | Pickup date after current date      | 15/11/2025      | Request submitted successfully                | Pass          | Low    |

> _Graph Placeholder:_ Column chart for passed vs failed edge cases.

---

## Admin & User Dashboard Test Results

| Functionality                    | Test Case ID | Expected Result                                | Actual Result             | Status | Priority |
|----------------------------------|--------------|-----------------------------------------------|--------------------------|--------|---------|
| Admin updates request status      | TC_AD_001    | Dashboard updates user request                | Dashboard did not update | Fail   | High    |
| Status reflected in system stats  | TC_AD_002    | All request statuses updated                  | Some statuses missing    | Fail   | High    |
| New user schedules request        | TC_AD_003    | Dashboard shows newly scheduled requests      | Updated successfully     | Pass   | High    |

---

## Conclusion
- Core user functionalities work as expected.  
- Minor browser and device compatibility issues were identified.  
- Admin dashboard needs attention for real-time updates.  
- Automation with Selenium ensures efficiency for regression testing.  

---

> **Notes:**  
- Add screenshots for failed test cases.  
- Insert graphs for browser/device compatibility and test status summary.  
- This document is ready to share on GitLab or export as PDF.


