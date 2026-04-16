# Testable Todo Card (Stage 1)

This project is an interactive and accessible Todo Card built with HTML, CSS, and JavaScript. It extends the basic static card into a more dynamic and stateful component.

## 🔗 Live Demo
https://testable-todo-card-alpha.vercel.app/

## 📂 GitHub Repository
https://github.com/justicefriday/Testable-Todo-Card


## Overview

The Todo Card displays a task with details such as title, description, priority, due date, status, and tags. It also includes interactive features like editing, status control, and time tracking.

---

## 🚀 Features

### Core Features (Stage 0)
- Task title and description
- Priority indicator (Low, Medium, High)
- Due date display using `<time>`
- Time remaining calculation
- Status indicator (Pending, In Progress, Done)
- Completion checkbox
- Tags (Work, Urgent, Design)
- Edit and Delete buttons
- Fully responsive layout

### Advanced Features (Stage 1)

#### Edit Mode
- Edit task title, description, priority, and due date
- Save updates or cancel changes
- Form includes proper labels for accessibility

####  Status Control
- Dropdown to switch between:
  - Pending
  - In Progress
  - Done
- Synced with checkbox state

####  Priority Indicator
- Visual indicator changes based on priority level
- Uses color coding for quick recognition

####  Expand / Collapse
- Long descriptions are collapsible
- Toggle button controls visibility
- Accessible with `aria-expanded`

####  Time Management
- Displays:
  - "Due in X days/hours/minutes"
  - "Overdue by X time"
- Updates every 60 seconds
- Stops updating when task is marked "Done"
- Shows "Completed" when finished

#### Overdue Indicator
- Displays visual warning when overdue

##  Accessibility

- Semantic HTML (`article`, `time`, `button`, `label`, `ul`)
- Keyboard navigable (Tab support)
- Accessible form inputs with labels
- `aria-live="polite"` for time updates
- Visible focus states
- Good color contrast (WCAG AA)
##  Responsiveness

- Mobile-first layout
- Works from 320px to large screens
- Flexible layout with no overflow
- Tags wrap correctly on small screens

##  Technologies Used

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript

## What Changed from Stage 0

- Added edit functionality
- Introduced status control
- Added expandable description
- Improved time tracking logic
- Added overdue indicator
- Enhanced visual states and interactions


##  Known Limitations
- No persistent storage (data resets on refresh)
- Single card only (not a full todo app)
- Edit form does not trap focus (optional improvement)

##  Notes

This project focuses on:
- Testability (`data-testid`)
- Accessibility
- Clean UI structure
- State synchronization

