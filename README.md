# Elegant Portfolio Forge

## Portfolio Design Upgrade (Version 2.0)

Redesign the portfolio with a unique, premium, and modern aesthetic. Do not imitate or replicate any existing portfolio. Create an original design with a focus on elegance, readability, and recruiter-friendly navigation.

=========================================

DESIGN STYLE

=========================================

Design Philosophy:

- Premium

- Minimal

- Elegant

- Modern

- Professional

- High-end Software Engineer Portfolio

Avoid excessive glowing effects or neon-heavy designs. Use subtle animations and refined visual hierarchy.

=========================================

COLOR SYSTEM

=========================================

Implement complete Light Mode and Dark Mode with a theme toggle.

### Dark Theme

Background:

#0B1120

Secondary Background:

#111827

Surface Cards:

#1E293B

Primary Accent:

#2563EB

Secondary Accent:

#7C3AED

Success:

#10B981

Text:

#F8FAFC

Secondary Text:

#CBD5E1

Borders:

rgba(255,255,255,0.08)

=========================================

### Light Theme

Background:

#FFFFFF

Secondary:

#F8FAFC

Cards:

#FFFFFF

Accent Blue:

#2563EB

Accent Purple:

#7C3AED

Primary Text:

#111827

Secondary Text:

#6B7280

Border:

#E5E7EB

=========================================

THEME TOGGLE

Create a beautiful animated toggle button.

Requirements:

• Sun icon for Light Mode

• Moon icon for Dark Mode

• Save theme in Local Storage

• Remember user's preference

• Smooth transition between themes

• Entire website should animate during theme switching

• No page reload

=========================================

TYPOGRAPHY

=========================================

Font:

Inter

Alternative:

Manrope

Heading:

Bold

Body:

Medium

Proper spacing

Professional hierarchy

=========================================

NAVIGATION

=========================================

Sticky navigation

Blur background

Rounded corners

Active section highlight

Smooth animation

Desktop Navigation

Home

About

Skills

Projects

Experience

Education

Certificates

Achievements

Services

Contact

Resume

=========================================

IMPORTANT WEBSITE STRUCTURE

=========================================

Do NOT build everything on a single page.

Instead create a professional multi-page portfolio.

Routes

/

Home

/about

About Me

/skills

Technical Skills

/projects

All Projects

/projects/project-name

Separate Project Details Page

/experience

Experience Timeline

/education

Education

/certificates

Certificates

/achievements

Achievements

/services

Services

/contact

Contact

=========================================

HOME PAGE

=========================================

The home page should only introduce me.

Hero Section

Short About

Featured Skills

Featured Projects

Experience Highlights

Latest Achievement

Call To Action

Everything else should open on dedicated pages.

=========================================

PROJECT PAGE

=========================================

When clicking Projects from navbar

Navigate to

/projects

Show project gallery

Each project card opens separately.

Example

/projects/school-erp

Inside page include

Hero Image

Overview

Problem Statement

Features

Architecture Diagram

Screenshots

Tech Stack

Challenges

Solutions

Future Improvements

GitHub Button

Live Demo Button

Related Projects

Back Button

=========================================

ABOUT PAGE

=========================================

Create dedicated page

Professional Story

Career Objective

Journey

My Vision

Why Hire Me

Education Summary

=========================================

SKILLS PAGE

=========================================

Create beautiful categorized layout.

Programming

Frontend

Backend

Database

Frameworks

Tools

Soft Skills

Languages

Every skill card animated.

=========================================

EXPERIENCE PAGE

=========================================

Timeline

Internships

Responsibilities

Technologies Used

Achievements

=========================================

CERTIFICATE PAGE

=========================================

Certificate Gallery

Certificate Preview

Download Button

=========================================

ACHIEVEMENT PAGE

=========================================

Animated cards

Counters

Leadership

Workshops

Volunteer Activities

=========================================

CONTACT PAGE

=========================================

Split Layout

Left

Contact Details

Email

Phone

Location

GitHub

LinkedIn

Right

Modern Contact Form

Node.js Backend

MongoDB Storage

Email Notification

=========================================

PAGE TRANSITIONS

=========================================

Every page transition should use Framer Motion.

Fade

Slide

Scale

Smooth route animations

Loading animation between pages

=========================================

COMPONENTS

=========================================

Reusable Layout

Reusable Button

Reusable Card

Reusable Timeline

Reusable Badge

Reusable Modal

Reusable Animation

Reusable Section Header

=========================================

UI IMPROVEMENTS

=========================================

Rounded 2xl components

Soft shadows

Professional spacing

Modern buttons

Elegant icons

Minimal gradients

High-quality illustrations

SVG dividers

Subtle hover effects

=========================================

RESPONSIVE DESIGN

=========================================

Desktop

Laptop

Tablet

Mobile

Pixel-perfect layout

=========================================

PERFORMANCE

=========================================

Lazy Loading

Image Optimization

Code Splitting

SEO

Accessibility

Fast Performance

=========================================

FINAL GOAL

=========================================

The portfolio should feel like the personal website of a professional Software Engineer working at a top product company. It should be elegant, unique, easy to navigate, responsive, and maintainable. Each major section must have its own dedicated page with clean URL routing while the Home page serves as a polished overview that links to the detailed pages. Include a seamless Light/Dark theme toggle that remembers the user's preference.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://refined-engineer-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ac823bee-c416-4532-861d-619addb2642a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
