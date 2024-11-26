# Lendsqr Frontend Assessment

## Project Overview

This application is a frontend solution for the Lendsqr Admin Console. It consists of four pages:

1. **Login Page**: A user authentication interface.
2. **Dashboard**: Displays user statistics in a card layout.
3. **Users Page**: A paginated and filterable table displaying user data fetched from a mock API.
4. **User Details Page**: Displays detailed user information stored in `localStorage` or `IndexedDB`.

The application is fully responsive and closely follows the provided Figma design.

---

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: For type safety and better developer tooling.
- **SCSS**: For modular, maintainable, and reusable styles.
- **React Router**: For client-side routing.
- **Axios**: For API requests.

---

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chiomanwocha/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the application**:

   ````bash
   npm start
   ````
   The application will be accessible at http://localhost:3000.
   

4. **Build for production**:
   ````bash
   npm run build
   ````
   This creates an optimized production build in the build/ directory.

---

## Deployment Details

The application is deployed and accessible at:  
**[Live Demo](https://chioma-nwocha-lendsqr-fe-test.vercel.app/)**

---

## Testing Details

To run the tests, use the following command:

```bash
npm run build
```

This launches the test runner in interactive watch mode.

### Tests include:

- **Unit Tests**: For individual components and hooks.
- **Integration Tests**: To verify user flows and inter-component communication.
- **Positive and Negative Scenarios**: Ensuring functionality under valid and invalid conditions.

---

## Additional Notes

### Unique Features and Design Choices:

1. **Mock API**: Leveraged the Lendsqr mock API containing 500 records.
2. **User Details Storage**: Utilized `IndexedDB` to fetch individual user data by calling the `/user/:id` endpoint.
3. **Reusable Components**: Created modular components such as `Button`, `Card`, `Table`, and `DropdownMenu` to ensure maintainability and scalability.
4. **SCSS Utilities**: Implemented SCSS mixins for common patterns like `flexbox`, `media queries`, and `transitions`.
5. **Responsive Design**: Designed the application to adapt seamlessly to various screen sizes, providing an optimal user experience across mobile, tablet, and desktop devices.

---
