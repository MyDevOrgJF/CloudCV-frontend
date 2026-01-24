# Azure Cloud CV
After achieving the Microsoft AZ-900 certification, I wanted to demonstrate my practical cloud skills and applied knowledge. I created a dynamic website version of my CV hosted on Azure. On the frontend it is html, CSS and JS stored in Azure Blob storage configured to run a static website. A JavaScript page visitor counter stores and retrieves data from an Azure Cosmos DB using an Azure Functions API .NET app. Azure Frontdoor was used to configure my custom domain name. Backend and frontend code are on separate GitHub repositories with GitHub Action workflows setup for CI/CD. Whenever I make a change to either repo it automatically deploys to Azure. The backend repo runs unit tests before deploying.

[Backend repo here](https://github.com/MyDevOrgJF/cloudCV-FunctionApp)

![](./images/index%20Screenshot%202026-01-24.png "Screenshot of website")