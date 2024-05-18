## Ecommerce React App

**Key Features:**

- Navbar
  - Displays the count of items in the cart
  - Navigation links to different pages
- All Products Page
  - Displays a list of products fetched from a dummy API
  - Inline editing of products
  - Deleting products
  - Sorting products by price
  - Adding products to the cart
- Add new prducts
- Product Detail Page
- Error and Success Handling
  - Alerts/Notifications for various actions (add, edit, delete, errors)

**Table of Contents**

- [About BusyBuy](#about-busybuy)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)

## About BusyBuy

This project is a frontend implementation of an ecommerce website using React. It provides functionalities such as viewing a list of products, adding products to a cart, editing and deleting products, sorting products by price, and managing the cart. The app utilizes Redux for state management and Radix with TailwindCSS for styling.

**Built with:**

- React: For building the user interface
- Redux Toolkit (for efficient state management)
- React Router: For client-side routing
- TailwindCSS: For styling
- my-json-server: For creating a dummy API service

## Getting Started

### Prerequisites

- Node.js (version 14 or later) and npm (or yarn) installed on your system. You can download them from [https://nodejs.org/en/download](https://nodejs.org/en/download)

### Installation

1. Clone the repository:

```bash
git clone [https://github.com/arjunsutharr/ecommerce-react](https://github.com/arjunsutharr/ecommerce-react)
```

2. Navigate to the project directory:

```bash
cd ecommerce-react
```

3. Install dependencies:

```bash
npm install
```

## Project Structure

This project adheres to a well-organized structure for better maintainability:

- src: Houses the core React application code.
- components: Reusable React components for building UI elements.
- pages: Individual application pages with specific functionalities, including 404Page.
- redux: Contains Redux-related files for managing application state:

  - ProductReducer.js: Manages product data, filtering, and manipulation.
  - CartReducer.js: Controls user cart items, quantities, and updates.

- App.js: The main application entry point, responsible for initializing components, routing, and authentication.
- public: Contains static assets like images, fonts, and favicons used throughout the app.
- package.json: Manages project dependencies, scripts, and metadata.

## Running the Application

1. Start the development server:

```bash
npm start
```

This will launch the development server and open in your default browser, usually at http://localhost:3000 (the port might vary).
