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



.TC h1{
    font-family: 'Nunito', sans-serif;
    margin-bottom: 0.3em; 
}

.tiny{
   font-size: 1rem; 
   font-family: 'Montserrat', sans-serif ;
}

.para-block{
    font-size: 1rem;
    width: 70%;
}

.TC{
    margin-top: 0.4em;
    font-family: 'Nunito', sans-serif;
}

/*

# CSS Documentation

## Introduction

This document provides a formal documentation for the CSS code that describes styling rules for a web page layout. The code includes definitions for various classes, properties, and values that determine the appearance and layout of elements on a webpage.

## Table of Contents

1. [Global Styles](#global-styles)
2. [Main Container](#main-container)
3. [Hero Section](#hero-section)
4. [Text and Typography](#text-and-typography)
5. [Buttons](#buttons)
6. [Timer](#timer)
7. [Footer](#footer)

---

## 1. Global Styles <a name="global-styles"></a>

### *{ ... }

- **Description**: Resets margin, padding, and box-sizing for all elements.
  
---

## 2. Main Container <a name="main-container"></a>

### .main

- **Description**: Defines styles for the main container.
- **Properties**:
  - `display: flex`: Enables flexbox layout.
  - `flex-direction: row-reverse`: Arranges flex items in a row and reverses their order.
  - `align-items: center`: Aligns flex items vertically in the center.
  - `margin: auto`: Centers the container horizontally.

---

## 3. Hero Section <a name="hero-section"></a>

### .hero-image-container

- **Description**: Defines the container for the hero image.
- **Properties**:
  - `width: 40%`: Sets the width of the container to 40%.

### .hero-image

- **Description**: Defines styles for the hero image.
- **Properties**:
  - `width: 100%`: Makes the image responsive by occupying the full width of its container.

### .hero-txt

- **Description**: Defines styles for the text content within the hero section.
- **Properties**:
  - `width: 50%`: Sets the width of the text container to 50%.
  - `display: flex`: Enables flexbox layout.
  - `flex-direction: column`: Arranges text content in a column direction.
  - `justify-content: center`: Vertically centers the content.
  - `align-items: left`: Aligns content to the left.
  - `gap: 0.8em`: Sets the gap between child elements.

### .h1:hover

- **Description**: Styles the hover effect for the `<h1>` element.
- **Properties**:
  - `color: #28ece0`: Changes text color on hover.
  - `cursor: pointer`: Changes cursor to a pointer on hover.

---

## 4. Text and Typography <a name="text-and-typography"></a>

### .top and .bottom

- **Description**: Defines styles for the top and bottom text.
- **Properties**:
  - `font-size`: Sets font size.
  - `font-family`: Specifies font family.
  - `color`: Sets text color.

### .TC, .tiny, .para-block

- **Description**: Defines styles for various text blocks and paragraphs.
- **Properties**: Varying font sizes and families for different sections.

---

## 5. Buttons <a name="buttons"></a>

### button

- **Description**: Styles the button element.
- **Properties**:
  - `width: 40%`: Sets the width of the button to 40%.
  - `margin: auto`: Centers the button horizontally.
  - `padding`: Sets padding for the button.
  - `font-size`: Sets font size for the button text.
  - `border-radius`: Rounds the corners of the button.
  - `background-color`: Sets background color.

### button:hover

- **Description**: Defines the hover effect for the button.
- **Properties**:
  - `cursor: pointer`: Changes cursor to a pointer on hover.
  - `box-shadow`: Adds a shadow effect on hover.

---

## 6. Timer <a name="timer"></a>

### .timer

- **Description**: Defines styles for the timer element.
- **Properties**:
  - `font-family`: Specifies font family.
  - `font-size`: Sets font size.

---

## 7. Footer <a name="footer"></a>

### .foot and .Participate

- **Description**: Defines styles for the footer and participate section.
- **Properties**: Varying styles for layout and typography within the footer.

---

This documentation provides an overview of the CSS code and its associated styles. For detailed information or modifications, please refer to the specific sections and properties outlined above.

*/
