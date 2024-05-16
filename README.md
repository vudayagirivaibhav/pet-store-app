# Pet Store App

The Pet Store App is a React-based web application designed to interact with the Pet Store API. It provides a simple user interface for logging in, viewing, and managing pet information.

## Features

- **Login**: Secure authentication to access pet management features.
- **View Pets**: Display pets filtered by their status (available, pending, sold).
- **Edit Pets**: Modify the details of existing pets, such as their name and status.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

To install the Pet Store App, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pet-store-app.git
   cd pet-store-app
2. Install the necessary npm packages:

```bash
    Copy code
    npm install

3. Start the backend API (assuming you have the Docker image for the Pet Store API):

bash
Copy code
docker pull swaggerapi/petstore3:unstable
docker run --name swaggerapi-petstore3 -d -p 8080:8080 swaggerapi/petstore3:unstable