### Groww Checkout Project Overview

#### Roadmap & Planning
The Groww Checkout project is a Next.js application designed to provide a seamless checkout experience. The roadmap likely involved several key phases:

1. *Setup & Initial Configuration*: Setting up the Next.js environment and configuring essential tools.
2. *UI Development*: Creating interactive and responsive interfaces using Tailwind CSS.
3. *State Management*: Implementing Zustand for efficient state handling across the application.
4. *Checkout Logic*: Developing the checkout flow, including cart management and payment processing.
5. *Testing & Optimization*: Ensuring the application is robust, fast, and user-friendly.
6. *Deployment*: Deploying the app to Vercel for public access.

#### Table of Tools Used

| Tool                   | Purpose                                               |
|------------------------|-------------------------------------------------------|
| *Next.js*            | The React framework for building the user interface.  |
| *Tailwind CSS*       | A utility-first CSS framework for styling.            |
| *Zustand*            | State management library for managing application state. |
| *Flowbite & Flowbite-React* | UI component libraries used alongside Tailwind CSS. |
| *Axios*              | Promise-based HTTP client for making API requests.    |

#### Key Components & Files

- *Checkout Page*: [page.jsx](https://github.com/Giriraj-Roy/Groww-Checkout/blob/master/src/app/checkout/page.jsx) - Handles the checkout process, displaying order status and payment details.
- *Dashboard Client*: [DashboardClient.jsx](https://github.com/Giriraj-Roy/Groww-Checkout/blob/master/src/app/components/DashboardClient.jsx) - Manages the user's cart and displays available payment methods.
- *Cart Store*: [cart.jsx](https://github.com/Giriraj-Roy/Groww-Checkout/blob/master/src/app/stores/cart.jsx) - Zustand store for managing cart state.
- *Payment Store*: [payment.jsx](https://github.com/Giriraj-Roy/Groww-Checkout/blob/master/src/app/stores/payment.jsx) - Zustand store for handling payment details.

#### Deployment

The application is deployed and can be accessed at [Groww Checkout](https://groww-checkout-ashy.vercel.app/).

---