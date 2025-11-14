# CleanCity Project

## 👤👤👤  Team Members
|**Fullname**|**Role**|**Email**|
|-----------------------|-----------------------|-----------------------|
|Viron Ochieng|Test Manager|`ochiengviron06@gmail.com`|
|Meseret akalu |Risk Analyst|meseretinsa@gmail.com|
|Mercy Benu|Test Executor|benumercy1@gmail.com|


## Overview of the project and purpose
- To verify that the user login, logout, registration form are functioning well
- To verify that the application works well accross different browsers and on mobile phones
- To ensure that an admin can add new status, edit the current status, and also update status
- Automate the website using selenium

##  Objectives of the Project
- The main purpose of the project is to apply what we have learnt to ensure that both the users and admins navigate through the cleancity website with much ease.



---

## **What to be tested**
## ***Manual Testing***
## 🧪 *What To Do*

###  Run the Application
1. Open the provided `index.html` file in VS Code.  
2. Right-click → **Open with Live Server**.  
3. Explore the website  manually.  
4. Observe how the app reacts to different input combinations.



###   Equivalence Partitioning (EP)

**Objective:** Identify valid and invalid input *classes* for each field.

| Input | Partitions (Valid / Invalid) | Representative Value | Expected Behavior | Actual Behavior | Pass/ Fail
|--------|-------------------------------|----------------------|-------------------|-----------------|-----------------|
| Name|                          |                      |                   |                 |
|Email |                               |                      |                   |                 |
| Password|                          |                      |                   |                 |
| Confirm Password|                          |                      |                   |                 |



✅ **Task:**  
---
- Navigate to the registeration page
- Try Registering to the website determine which classes of inputs should behave the same
- Test one input from each partipation at a time

**Findings:**  
---
-
-
### Boundary Value Analysis (BVA)

**Objective:** Test edge values around valid input limits.

| Parameter | Boundaries Identified | Test Values  | Expected | Actual | Notes |
|------------|------------------------|----------------------------|-----------|---------|--------|
| Date Boundaries | | | | | |
|Text Input Boundaries | | | | | |
|Numeric Boundaries | | | | | |

✅ **Task:**
--- 
- Test for minimum / maximum date for delivery
- Test for valid password i.e should contain more than 8 digits
- Test valid phone number format
- Empty inputs eg. blank name

**Findings:**  
---
-
-

## Decision Table Testing (DTT)

**Objective:** Combine multiple inputs and predict outcomes.  

| Filter by Status |Filter by Location  |Expected Outcome  |Actual Outcome | Pass/ Fail |
|--------|--------------|---------------|-------------------------------------------|----------------|
|--------|--------------|---------------|-------------------------------------------|----------------|
|--------|--------------|---------------|-------------------------------------------|----------------|
|--------|--------------|---------------|-------------------------------------------|----------------|
|--------|--------------|---------------|-------------------------------------------|----------------|

**Findings:**  
---
-
-

## 🔄 State / Flow Testing

**Objective:** Test how the system transition across the waste scheduler. 

### ** States Identified**
- Start / Idle  
- InputReady  
- Results  
- NoResults  
- Reset / Clear  

### **Actions and Transitions**

| Current State | Action / Event | Expected Next State | Actual Next State | Pass/Fail |
|----------------|----------------|---------------------|-------------------|-----------|
| Start/Idle | Login | Users dashboard page | Users dashboard page | Pass |
|InputReady | Filter requests by status and location | List of requests based on applied filters | Only one filter is applied to the results | Fail|
| Home page | log out | Reset/Clear(End session and back to login page) | Back to Home page | Fail|
|----------------|----------------|---------------------|-------------------|-----------|

✅ **Task:**
--- 
- Navigate through the home page and observe how the application transitions with different inputs.
- Record Findings


**Findings**
--- Login Page
- On the Login page, once a user enters valid login credentials, the user receives a success message informing them of the successful login and they are immediately redirected to their dashboard.
--- Home page
  - On the home page, a user is able to schedule a pick up date by filling in a form. Once valid details have been provided in the input fields, the user gets a success message "Request submitted successfully!" and on navigating to the dashboard, they are able to view a list of their requests which updates automatically in descending order.

## **Browser Compatiblity**

**Objective :** To verify that the application fuctions properly across different modern browsers

|Modern Browser- Specific version|Findings |
|----------------|-------------------------------------|
|Chrome| Compatible |
|Firefox| Incompatible |
|Microsoft Edge| Compatible |
|Safari| Compatible |

### **Screenshot evidence**
**Compatible on Microsoft edge**

<img width="1326" height="683" alt="image" src="https://github.com/user-attachments/assets/38ec01c7-7525-454f-acb8-79d449edc804" />

**Compatible with Chrom browser**

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/01fe59b9-1b1f-4e5b-87ff-ebc7f82d1e68" />


## **Device Compatibility**

**Objectives:** To ensure that the application fuctions properly in a number of devices

|Device |Outcome|
|----------------|-------------------------------------|
|Desktop| Compatible |
|Tablet| Compatible |
|Iphone 14 Pro max| Compatible |
|Samsung Galaxy A51/A71| Compatible |

### **Screenshot evidence**

**Desktop compatible**

<img width="1357" height="727" alt="image" src="https://github.com/user-attachments/assets/34821c25-d8f4-4bba-a2de-6e435650d8b4" />

**Tablet compatible**

<img width="652" height="678" alt="image" src="https://github.com/user-attachments/assets/fdc185f3-0670-4c23-8d1c-9ad99b671538" />

**Iphone 14 Pro max**

<img width="582" height="587" alt="image" src="https://github.com/user-attachments/assets/3038f4fa-6edd-419b-8d8f-d42105102cd9" />

**Samsung Galaxy A51/A71**

<img width="638" height="572" alt="image" src="https://github.com/user-attachments/assets/db18a1fa-951d-4343-8d10-a9b43567505e" />


## 📋 **Test Environment Setup Data**

###  **Network Conditions**

**Objective:** To test the functionality of the application in different network conditions

|Network condition|Outcome|
|----------------|-------------------------------------|
|4G connection|-------------------------------------|
|3G connection|-------------------------------------|
|No internet connection|-------------------------------------|

### **Findings**
---
-
-


## **Defects Report and Risk Analysis**

### **Defect/ Bug 1: The filter section on the admin dashboard does not filter requests by status and location.**

**Steps to Produce**
- Access the admin dashboard
- Navigate to filter requests
- Enter the required values eg status: Missed, location: Nairobi
- Observe the output.
  
**Expected behavior**
Outputs results filtered by status: Missed and location: Nairobi

**Actual behavior**
Outputs results filtered only by location: Nairobi

### **Defect/ Bug 2: Admin user cannot use the "Edit" button in the "All requests" section to edit a request**

**Steps to Produce**
-Navigate to the Admin page
- On the "All requests" section click on the "Edit" button under action.
- Observe
  
**Expected results**
On clicking the "Edit" button, the admin should be able to edit/update the status of a listed request.

**Actual results**
On clicking the "Edit" button, nothing happens
  
### **Defect/ Bug 3: There are some missing requests on the "system statistics" section.**

**Steps to Produce**
- Navigate to the page.
- scroll down to the "system statistics" section.
- Observe the listed requests.
  
**Expected behavior**
The number of "Total requests" should be a sum of all the requests and their status.

**Actual behavior**
The total number of "Total request" is not equal to the listed request and their status.
  
### **Defect/ Bug 4: When a user logs out of their account, their login credentials persist on the input fields.**

**Steps to Produce**
- on a user's dashboard, click on log out.
- Observe the input fields.

**Expected behavior**
Once a user logs out, their login credentials should be cleared from the input fields such that no other user can use the same credentials to impersonate them.

**Actual behavior**
When a user clicks on the logout button, they are redirected to the login page, with their login credentials auto filled in the input fields.  

### **Defect/ Bug 5: The "Awareness" page has no text alternatives for non-text content**

**Steps to Produce**
- Navigate to the awareness page
- click ctrl+u
- Observe the source code for  tags

**Expected behavior**
The non text content such images should have "alt" to describe the image to screen readers making it accessible to users with disability (visually impaired)

**Actual behavior**
There are no "alt" texts for non-text content.

### **Defect/ Bug 6: User session timeout has not been implemented.**

**Steps to Produce**
- Log in to user account
- Leave the account unattended to for 60 minutes.
- Observe.

**Expected behavior**
The user session should timeout after 45minutes of idle time and should require the user to log in again.

**Actual behavior**
User session does not time out.

**GitHub Issues Filed:**  
---
|Bug /Issue |Severity |`link here`|
|------------|---------|-----------|
| The filter section on the admin dashboard does not filter requests by status and location | Medium | https://github.com/mah-c/wk-6-mah-c-1-glitch-grabbers-team-repo/issues/2 |
| Admin user cannot use the "Edit" button in the "All requests" section to edit a request | Medium | https://github.com/mah-c/wk-6-mah-c-1-glitch-grabbers-team-repo/issues/3 |
| There are some missing requests on the "system statistics" section. | Medium | https://github.com/mah-c/wk-6-mah-c-1-glitch-grabbers-team-repo/issues/4 |
| When a user logs out of their account, their login credentials persist on the input fields. | Critical | https://github.com/mah-c/wk-6-mah-c-1-glitch-grabbers-team-repo/issues/5 |
| The "Awareness" page has no text alternatives for non-text content | Medium | https://github.com/mah-c/wk-6-mah-c-1-glitch-grabbers-team-repo/issues/6 |
| User session timeout has not been implemented | High | https://github.com/mah-c/wk-6-mah-c-1-glitch-grabbers-team-repo/issues/8 |



## **Risks Identified**
|Risk name|Likelihood | Severity|Description|
|----------|-----------|---------|-----------|
| Use of weak passwords to login| high |medium | A user can be able to create and login to their account using weak password. These passwords are easy to crack and a hacker can use the credentials for impersonation |
| User selecting date values outside allowed range |Very High | High |A user can be able to select date values that are way overdue eg.selcting a pickup date that is 5 years ago. This can cause the application to alfunction. |
| The Admin user(s) is unable to edit/update request statuses | High | Critical | The Edit button may fail to function hence hindering the Admin user(s) from updating request status. |
| Request status not updating on the dashboard | High | High | When an admin updates a request status, the current state may fail to update on the dashboard leading to duplicate was pickups. |
| Dashboard update failure | Medium| Medium | A user may schedule a request but the request fails to update on the dashboard. THis can result in duplicate scheduled requests on the users end. |
| Mobile responsiveness | Medium | Medium | The application may Fails in some devices e.g mobile. Leading to frustrations on the users end. |
| Browser compatibility | Medium | Medium | The application Fails in some browsers causing user frustrations. |
| Login failure | Medium | High | User providing invalid login details to login. If appropriate erroe handling techniques are not implemented, it could lead to the application crushing. |
|SQL injection | High | Critical | When proper data sanitization is not implemented, a hacker can use sql injection to insert malicious code in to the application. |


##  **Test Automation**
### **Use of selenium**
**Steps to Produce**
---
- Launch the browser
- Open the specified url
- Find element by its ID, Xpath, Class, Selector
- Perform actions on the element eg. click, send keys etc.
- Verify the expected outcomes
- Close the browser



## **Exit Criteria - When to stop the test.**
- When the project is done
- When the deadline is due
- When the instructor orders for the project to be stopped

## 🎬 **Video Recording Test Data**

### **Demo Scenarios for Video**

|Feature|Video link|
|----------------|-------------------------------------|
|User registration Flow||
|Pickup Scheduling Process||
|Cross- Browser testing||
|Device compatibility||

# Reflections
How confident the group members are with the project(Scale 1-10)
|Name|Level of confidence|email|
|----------------|------------------|----------------|
|Mercy Benu|------------------|benumercy1@gmail.com|
|Viron Otieno|------------------|`ochiengviron06@gmail.com`|
|meseret akalu|------------------|meseretinsa@gmail.com|
