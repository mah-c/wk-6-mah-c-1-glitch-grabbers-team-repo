# CleanCity Project

## 👤👤👤  Team Members
|**Fullname**|**Role**|**Email**|
|-----------------------|-----------------------|-----------------------|
|Viron Ochieng|Test Manager|`ochiengviron06@gmail.com`|
|MarkPaul Ndiragu|Risk Analyst|-----------------------|
|Mercy Benu|Test Executor|-----------------------|


## Overview of the project and purpose
- To verify that the user login, logout, registration form are functioning well
- To verify that the application works well accross different browsers and even mobile phones
- To ensure that an admin can add new status, edit the current status, and also update status
- Automate the website using selnium

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
|----------------|----------------|---------------------|-------------------|-----------|
|----------------|----------------|---------------------|-------------------|-----------|
|----------------|----------------|---------------------|-------------------|-----------|

✅ **Task:**
--- 
- Navigate through the home page and observe how the application transitions with different inputs.
- Record Findings


**Findings**
---
-
-

## **Browser Compatiblity**

**Objective :** To verify that the application fuctions properly across different modern browsers

|Modern Browser- Specific version|Findings |
|----------------|-------------------------------------|
|Chrome|-------------------------------------|
|Firefox|-------------------------------------|
|Microsoft Edge|-------------------------------------|
|Safari|-------------------------------------|

### **Screenshot evidence**
---
-
-

## **Device Compatibility**

**Objectives:** To ensure that the application fuctions properly in a number of devices

|Device |Outcome|
|----------------|-------------------------------------|
|Desktop|-------------------------------------|
|Tablet|-------------------------------------|
|Iphone 14 Pro max|-------------------------------------|
|Samsung Galaxy A51/A71|-------------------------------------|

### **Screenshot evidence**
---
-
-

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

### **Defect/ Bug 1**

**Steps to Produce**
---
-
-
-
-

### **Defect/ Bug 2**

**Steps to Produce**
--
-
-
-
-


**GitHub Issues Filed:**  
---
|Bug /Issue |Severity |`link here`|
|----------------|----------------|----------------|
|----------------|----------------|----------------|



## **Risks Identified**
|Risk name|Likelihood | Severity|Description|
|----------------|----------------|----------------|----------------|
|----------------|----------------|----------------|----------------|
|----------------|----------------|----------------|----------------|
|----------------|----------------|----------------|----------------|
|----------------|----------------|----------------|----------------|
|----------------|----------------|----------------|----------------|
|----------------|----------------|----------------|----------------|
|----------------|----------------|----------------|----------------|
|----------------|----------------|----------------|----------------|


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
|Mercy Benu|------------------|----------------|
|Viron Otieno|------------------|`ochiengviron06@gmail.com`|
|MarkPaul Ndiragu|------------------|----------------|
