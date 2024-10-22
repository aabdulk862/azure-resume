# Adam Abdulkadir's Resume

This project is a personal resume website built with React and hosted on Azure. It showcases my professional background, skills, certifications, and projects, providing visitors with a comprehensive overview of my qualifications.

## Features

- **Dynamic Visit Counter**: Tracks the number of visits using an Azure Function connected to a Cosmos DB.
- **Responsive Design**: Adapts seamlessly to various screen sizes, ensuring a great user experience on mobile and desktop devices.
- **Image Display**: Showcases certifications with responsive images.

## Technologies Used

- **Frontend**: 
  - React
  - React Bootstrap
  - Axios for API requests

- **Backend**: 
  - Azure Functions
  - Azure Cosmos DB

- **Deployment**:
  - Azure Blob Storage for static file hosting
  - Azure CDN for content delivery

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

To run the project locally, use:
```bash
npm start
```
This will start the development server and open the application in your default web browser.

## API Integration

The project includes an API endpoint that tracks the number of visits. Make sure to configure the Azure Function with the correct Cosmos DB connection string.

## Deployment

To deploy the project:
1. Build the React application:
   ```bash
   npm run build
   ```

2. Upload the contents of the `build` folder to Azure Blob Storage.

3. Configure Azure CDN for optimal performance.

## Author

Adam Abdulkadir  
[LinkedIn](https://www.linkedin.com/in/adam-abdulkadir/) | [GitHub](https://github.com/aabdulk862)

## License

This project is licensed under the MIT License.
