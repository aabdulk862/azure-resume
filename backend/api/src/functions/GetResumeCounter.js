const { app } = require('@azure/functions');
const { CosmosClient } = require("@azure/cosmos");

// Get the Cosmos DB connection string from environment variables
const connectionString = process.env.COSMOS_DB_CONNECTION_STRING;
const client = new CosmosClient(connectionString);

// Specify the database and container IDs
const databaseId = "react-resume";   // Replace with your database ID
const containerId = "Counter"; // Replace with your container ID

app.http('GetResumeCounter', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        try {
            // Access the container
            const container = client.database(databaseId).container(containerId);

            // Get the document with id '1' (assuming the id is always '1' for your counter)
            const { resource: visitDocument } = await container.item('1', '1').read();

            // Increment the count
            const updatedCount = visitDocument.count + 1;

            // Update the document with the new count
            visitDocument.count = updatedCount;
            await container.item('1', '1').replace(visitDocument);

            // Return the updated count
            return {
                jsonBody: { count: updatedCount }
            };
        } catch (error) {
            context.log.error('Error fetching or updating visit count:', error);
            return {
                status: 500,
                body: 'Error fetching or updating visit count'
            };
        }
    }
});

