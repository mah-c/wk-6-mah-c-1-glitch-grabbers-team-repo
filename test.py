
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

 # Launch the browser
driver = webdriver.Chrome()

# open the specified URL
driver.get("http://127.0.0.1:5500/index.html")

# maximize the browser window
driver.maximize_window()
time.sleep(2)  # Wait for 2 seconds to observe the action

# Locate the login button 
login_button = WebDriverWait(driver, 5).until(
    EC.element_to_be_clickable((By.XPATH, "//button[text()='Login']"))
)
