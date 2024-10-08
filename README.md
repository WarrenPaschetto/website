# Personal Website

This repository contains the code for a personal website that dynamically adjusts based on whether you are viewing my role as a developer or trainer. It only shows relevant information according to the mode or role selected. I built this using **Next.js**, **TypeScript**, and **Tailwind CSS**, with a focus on responsive design and modern web development practices.

## Live Demo 🌐

You can view the live website at: [warrenpaschetto.com](https://warrenpaschetto.com)

## Features 🚀

- **Dynamic Content Rendering**: The website adapts its content based on the role selected by the user (e.g., Developer or Trainer).
- **Responsive Design**: Built to be responsive across all devices, including desktops, tablets, and mobile phones.
- **Client-Side Rendering**: Uses Next.js's "use client" directive to ensure interactive components are client-rendered.
- **Modular Components**: Organized and reusable components such as `Navbar`, `Projects`, `Testimonials`, `Pricing`, etc.
- **Dark Mode Support**: Includes light and dark themes, switching dynamically based on user preferences.

## Technologies Used 🛠️

- **Next.js**: A React framework for server-rendered applications and static websites.
- **React**: Core library for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for quickly designing responsive layouts.
- **Google Maps API**: Integrated Google Maps to display location within the Trainer contact section.
- **TypeScript**: Type-safe environment for writing robust code.

## Components 📂

- **Navbar**: The navigation bar for accessing different sections of the website.
- **Large Screen Header** and **Small Screen Header**: Two different headers depending on screen size with the larger one including an interactive image that changes according to the mouse direction in the Y-axis.
- **About**: Information about me either as a Developer or Personal Trainer.
- **Experience**: Section detailing your professional experiences as either a Developer or Trainer depending on the role selected.
- **Projects**: Displayed only for the Developer role. Showcases some of my development projects.
- **Recipes**: Displayed only for the Trainer role. Contains healthy recipes with nutritional information.
- **Testimonials**: Feedback from clients regarding my Personal Trainer role.
- **Pricing**: Pricing section for my personal training services.
- **Contact Form**: A form for users to reach out to me.
- **GoogleMap**: Displays my personal training location using Google Maps.

## Usage 🎮

1. **Dynamic Role-Based Content**: 
    - The website adapts content based on the `role` defined in the global state.
    - If the role is set to `developer`, sections like **Projects** will be displayed.
    - If the role is set to `trainer`, sections like **Recipes**, **Testimonials**, and **Pricing** will be rendered.

2. **Mobile and Desktop Views**:
    - The layout adapts to mobile screens when the width is below 768px, hiding or adjusting certain components to maintain usability on smaller devices.

## License 📄

This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](./LICENSE) file for details.



