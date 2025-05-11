# DocuWare - Use Case

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Overview 

This document outlines the high-level design for DocuWare’s use case web application created as part of a tech interview. This application aims to provide a prototype for a football teams application, but is designed to support future growth and scalability.

It covers the architectural decisions, provides a high-level design, and outlines the overall implementation.

## Context

This project involves developing a simple Node.js backend that serves football team data, along with an Angular web application that fetches and displays those teams in the browser. The client communicates with the backend using HTTP requests.

The UI is designed to be simple and responsive, ensuring usability across mobile devices.

## Goals and Non-Goals

### Goals

The goals is to deliver a simple UI that enables users to:

- View a list of all football teams returned by the backend.
- Click on a team logo to view a larger version (bonus).
- Display each team's title, description, and thumbnail.
- Include one or two basic unit tests for demonstration purposes.

### Non-Goals

- Authorization for the server is not required.

## UI/UX Design

- The design was kept simple, some colors from the client’s web page were selected to create a color palette. The color palette is centralized which allows a nice and easy way of updating those colors.
- The styling was done following the Mobile First Approach to ensure responsiveness across different breakpoints.
- The application uses Angular Material to show my ability to use different Design Systems.
- A reset CSS was included as part of the global styles to remove any default browser rules that could mess with the layout.

## Folder Structure

The project follows a clean and modular folder structure, designed for scalability, maintainability, and clarity. Each directory has a well-defined purpose, supporting both current features and future growth.

```
src
└── app
    ├── constants
    ├── features
    ├── layout
    ├── shared
    │   ├── components
    │   └── services
    └── assets
```

# Routing

Lazy loading was used for the main route. If the app becomes bigger this apporach will help scale the app and improve performance by only loading the parts of the app that were needed at the time.

# Error Handling

For the purpose of this exercise the errors are console logged and treated in a way that keeps the UI running, in the feature a more sophisticated error system could be added.

# Accessibility

The application was created using as many semantic tags as possible.

## Running the project locally

After cloning the repository, you need to start the backend first:

```bash
cd api
npm install
npm start
```

The Node.js server will run on [http://localhost:3000](http://localhost:3000).

Once the backend is running, you need to run the frontend. If you are still in the backend folder, go back to the root folder:

```bash
npm install
npm start
```

The frontend will run on [http://localhost:4200](http://localhost:4200).
