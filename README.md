## Documentation for Three-Day Timer Webpage

### Overview:
This document provides a detailed explanation of the HTML and JavaScript code that constructs a webpage featuring a three-day timer and dynamic dates.

---

### HTML Structure:

1. **Document Type Declaration (`<!DOCTYPE html>`)**: 
   - Specifies the document type and version of HTML being used.

2. **HTML (`<html lang="en">`)**:
   - Root element for the HTML document with a language attribute set to "en" for English.

3. **Head Section (`<head>`)**:
   - Contains meta information, links to external resources, and scripts.
   
   **Meta Tags**:
     - Specifies character set.
     - Sets the title of the webpage.

   **Links**:
     - External CSS links for styles.
     - External font links from Google Fonts.

   **Script Section**:
     - Contains JavaScript code for functionality and DOM manipulation.

4. **Body Section (`<body>`)**:
   - Contains the visible content of the webpage.

   **Main Section (`<section class="main">`)**:
     - Contains main content, including a hero image, text, and a timer.

   **Footer Section (`<section class="foot">`)**:
     - Contains additional content such as participation guidelines, terms, and conditions.

---

### JavaScript Functionality:

1. **DOMContentLoaded Event Listener**:
   - Ensures that the JavaScript code runs after the HTML document is fully loaded.

2. **Deadline Calculation**:
   - Calculates a deadline that is 3 days from the current date.

3. **getTimeRemaining Function**:
   - Computes the time remaining between the current time and the deadline.

4. **initializeClock Function**:
   - Initializes and updates the timer display on the webpage using the time remaining.

5. **Date Calculation**:
   - Retrieves the current date and calculates the date that is 3 days from now.

6. **Updating info2 Div**:
   - Dynamically updates the content of the `<div class="info2">` element with the current date and the date that is 3 days from now.

---

### Key Elements:

1. **Timer Display (`<div class="timer" id="timer">`)**:
   - Shows a countdown timer with days, hours, minutes, and seconds until the deadline.

2. **Info2 Div (`<div class="info2">`)**:
   - Displays information about the giveaway deadline, including the current date and the date that is 3 days from now.

3. **Hero Image and Text**:
   - Provides visual and textual content about an exclusive iPhone giveaway.

4. **Participation Guidelines and Terms**:
   - Offers information on how to participate in the giveaway and lists the terms and conditions.

---

### External Resources:

- **Boxicons**: Used for icons in the webpage.
- **Google Fonts**: Used for custom fonts in the webpage.

---

### Conclusion:

The provided code creates a webpage that features a three-day timer and dynamic dates. It utilizes HTML for structure and JavaScript for functionality. The webpage showcases an exclusive iPhone giveaway, provides participation guidelines, and lists the terms and conditions. The timer counts down to a deadline set 3 days from the current date, and the `<div class="info2">` 
    element dynamically displays the current date and the date that is 3 days from now.
