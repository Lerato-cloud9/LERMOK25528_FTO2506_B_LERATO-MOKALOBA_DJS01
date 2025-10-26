# DJS01: Vanilla JS Podcast App

## Overview

You will design and build a responsive web application that allows users to **browse podcast shows** on a landing page and **view detailed information** in a modal. The application should display clear, concise previews of podcast shows and offer additional information through a modal pop-up, **all without navigating away from the page**. Your app should showcase clean code architecture and strong UI/UX design while following JavaScript best practices.

---

## Core Objectives

### 1. Landing Page – Podcast Previews

- Display a list of podcast shows on the landing page.
- Each podcast preview must include:
  - Cover image
  - Show title
  - Number of seasons
  - Genre names
  - Last updated date (in a human-readable format)

### 2. Modal View – Show Details

- When a user clicks on a podcast preview, open a modal.
- The modal should include:
  - Larger cover image
  - Podcast title
  - Description of the show
  - Genre tags
  - Last updated date (readable format)
  - List of season titles
  - Number of episodes in each season
- Include a clear and accessible way to **close the modal**.

### 3. Code Architecture & Best Practices

- Use **object-oriented programming (OOP)** where appropriate.
- Apply **functional programming principles** to ensure modularity and predictability.
- Follow **SOLID design principles** for clean, maintainable code.
- Abstract repeated logic into **reusable functions or classes**.
- Add **JSDoc comments** for major functions and modules.

---

## Technical Requirements

- Use **HTML, CSS (or Tailwind), and JavaScript**.
- No page reloads: Use JavaScript to handle modal behaviour and data rendering.
- Ensure all UI states (modal open/close, hover effects, etc.) work smoothly.
- Ensure all data is displayed in a **readable and accessible format**.

---

## Design & UX Goals

- Visually appealing UI with clear layout and hierarchy.
- Use a consistent **colour scheme, typography, spacing, and sizing**.
- Accessibility considerations (contrast, font readability, responsive buttons).
- App should be fully **responsive** on desktop, tablet, and mobile.

Make sure to dive into the wireframe reference images folder for guidance on how to build the UI structure. Note that the UI wireframes for both Desktop and Mobile are included.  

![alt text](<wireframe reference images/desktop view/desktop_modal_view.png>)

---

## Deliverables

- A fully functional, responsive podcast preview web application.
- Clean, well-commented source code (HTML, CSS, JS).



🎙️ Podcast Webpage Project

🎯 What I Built
I created a single-page web application that shows podcasts in a grid layout. When you click on any podcast, a modal pops up with all the details. It's fully responsive on all screens like desktop, tablet, and mobile.

✨ Features I Implemented

Responsive Grid: The layout adjusts from 4 columns on desktop down to 1 column on mobile
Filter Dropdowns: Added genre and sorting filters in the header 
Interactive Cards: Each podcast card has hover effects and opens a detailed modal on click
Clean Modal Design: Shows the podcast cover, description, genres, last updated date, and all seasons
Use Mobile-First Approach: Everything works smoothly across all screen sizes

🛠️ Tech Stack
Technologies used:

HTML5 for structure
CSS3 for styling (flexbox and grid)
Vanilla JavaScript for interactivity(Modal)

The Modal
Here's how it works:

HTML Structure: Modal is always in the DOM but hidden with display: none
JavaScript Click Handler: When you click a podcast card, it:

Extracts the data (title, genres, seasons, etc.)
Populates the modal with that data
Adds the active class to show the modal
Prevents body scrolling with modal-open class


Closing: Multiple ways to close:

Click the X button
Click outside the modal (on the overlay)


🚀 How to Use My Project:

Main Grid: Scroll through all available podcasts
Click a Card: Opens the modal with full podcast details
Close Modal: Click the X button, or click outside the modal

🎯 Goal of This Project

The goal is to practice:

✅ DOM manipulation
✅ Event listeners
✅ Responsive grid layouts
✅ UI/UX design for modals
