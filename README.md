# Transaction Insights

Transaction Insights is a MERN stack application that provides detailed insights and analytics on product transactions. The application allows users to view, search, and filter transactions, as well as visualize data using statistics, bar charts, and pie charts.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
  - [Initialize Database](#initialize-database)
  - [List Transactions](#list-transactions)
  - [Get Statistics](#get-statistics)
  - [Bar Chart Data](#bar-chart-data)
  - [Pie Chart Data](#pie-chart-data)
  - [Combined Data](#combined-data)
- [Frontend](#frontend)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- Initialize database with seed data from a third-party API
- List all transactions with search and pagination
- Generate statistics for total sales amount, number of sold items, and number of unsold items
- Display bar chart data for price ranges
- Display pie chart data for unique categories
- Combine all data into a single API response

## Tech Stack
- MongoDB
- Express.js
- React.js
- Node.js
- Ant Design (for UI components)
- Styled-components (for styling)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/transaction-insights.git
    cd transaction-insights
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

## Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
THIRD_PARTY_API_URL=https://s3.amazonaws.com/roxiler.com/product_transaction.json
```

## API Documentation

### Initialize Database

**Endpoint:** `GET /api/initialize`

**Description:** Fetches JSON data from the third-party API and initializes the database with seed data.

**Request:**

```bash
GET /api/initialize
```

**Response:**

```json
{
  "message": "Database initialized successfully."
}
```

### List Transactions

**Endpoint:** `GET /api/transactions`

**Description:** Lists all transactions with support for search and pagination.

**Request:**

```bash
GET /api/transactions?month=March&page=1&perPage=10&search=text
```

**Response:**

```json
{
  "transactions": [
    {
      "id": 1,
      "title": "Product Title",
      "description": "Product Description",
      "price": 100,
      "dateOfSale": "2022-03-15T00:00:00.000Z",
      "category": "electronics",
      "sold": true,
      "image": "image_url"
    },
    ...
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50
  }
}
```

### Get Statistics

**Endpoint:** `GET /api/statistics`

**Description:** Provides statistics for total sale amount, number of sold items, and number of unsold items for the selected month.

**Request:**

```bash
GET /api/statistics?month=March
```

**Response:**

```json
{
  "totalSaleAmount": 1000,
  "totalSoldItems": 10,
  "totalUnsoldItems": 5
}
```

### Bar Chart Data

**Endpoint:** `GET /api/bar-chart`

**Description:** Provides bar chart data for price ranges in the selected month.

**Request:**

```bash
GET /api/bar-chart?month=March
```

**Response:**

```json
{
  "0-100": 5,
  "101-200": 10,
  "201-300": 15,
  "301-400": 20,
  "401-500": 25,
  "501-600": 30,
  "601-700": 35,
  "701-800": 40,
  "801-900": 45,
  "901-above": 50
}
```

### Pie Chart Data

**Endpoint:** `GET /api/pie-chart`

**Description:** Provides pie chart data for unique categories and the number of items in each category for the selected month.

**Request:**

```bash
GET /api/pie-chart?month=March
```

**Response:**

```json
{
  "electronics": 20,
  "clothing": 15,
  "home": 10,
  "beauty": 5
}
```

### Combined Data

**Endpoint:** `GET /api/combined-data`

**Description:** Fetches the data from all the above APIs, combines the responses, and sends a final response.

**Request:**

```bash
GET /api/combined-data?month=March
```

**Response:**

```json
{
  "transactions": [ ... ],
  "statistics": {
    "totalSaleAmount": 1000,
    "totalSoldItems": 10,
    "totalUnsoldItems": 5
  },
  "barChartData": {
    "0-100": 5,
    "101-200": 10,
    "201-300": 15,
    ...
  },
  "pieChartData": {
    "electronics": 20,
    "clothing": 15,
    "home": 10,
    ...
  }
}
```

## Frontend

The frontend is built with React.js and Ant Design for UI components.

1. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

2. Start the frontend server:

    ```bash
    cd frontend
    npm start
    ```

3. Open the browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the month dropdown to select the month for which you want to view the transactions, statistics, bar chart, and pie chart data.
- Use the search box to filter transactions based on title, description, or price.
- Use the pagination controls to navigate through different pages of transactions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Screenshot 


## Transaction Dashboard
![image](https://github.com/user-attachments/assets/e2f362a3-be49-4de0-adef-1836d07767a4)


## Statistic along with Bar-Chart of Transaction for selected month
![image](https://github.com/user-attachments/assets/93519b11-fe0f-4d1b-b9f7-2e820eccaa12)


## Pie-Chart of selected month based on product category
![image](https://github.com/user-attachments/assets/e63142e9-68be-4eea-883b-25ea60191f22)


