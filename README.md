# Azure CV ☁️📄
A cloud‑hosted version of my CV built on Microsoft Azure.

After achieving the Microsoft AZ-900 certification, I wanted to demonstrate my practical cloud skills and applied knowledge. I created a dynamic website version of my CV hosted on Azure. This project showcases how modern Azure services can be combined to deliver a scalable, secure web application.

🔗 **Live here** [josh-fryer-az-cv.live](https://www.josh-fryer-az-cv.live)

![](./images/index%20Screenshot%202026-01-24.png "Screenshot of website")

---

The frontend is HTML, CSS and JS stored in Azure Blob storage, configured to run as a static website. 
A JavaScript page visitor counter stores and retrieves data from an Azure Cosmos DB by calling an Azure Functions API .NET app.

The Functions App targets .NET 8.0 and uses the isolated process model.

Azure Front Door was used to configure my custom domain name. To prevent an excessive number of requests or DDoS attacks, I created a WAF policy to rate limit when a threshold is exceeded.

Backend and frontend code are on separate GitHub repositories with GitHub Action workflows set up for CI/CD. Whenever I make a change and push to either repo, it automatically deploys to Azure. The backend repo runs unit tests before deploying.

👉 [***Backend repo here***](https://github.com/MyDevOrgJF/cloudCV-FunctionApp) 