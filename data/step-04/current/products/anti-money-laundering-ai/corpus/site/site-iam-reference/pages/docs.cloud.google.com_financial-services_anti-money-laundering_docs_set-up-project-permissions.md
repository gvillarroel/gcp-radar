---
title: "Set up a project and permissions \_|\_ Anti Money Laundering AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/set-up-project-permissions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/set-up-project-permissions
  title: "Set up a project and permissions \_|\_ Anti Money Laundering AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set up a project and permissions | Anti Money Laundering AI | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Anti Money Laundering AI
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Product overview
Process overview
Architectural overview
Security and compliance features
Documentation policy
Glossary
Quickstart
Train and test models designed to detect money laundering
Get started
Set up a project and permissions
Create an instance
Prepare Big Query datasets and tables
Prepare data for AML AI
Understand the AML data model and requirements
Understand data scope and duration
Select data for best performance and typology coverage
Create and manage AML AI datasets
Generate a model and evaluate performance
Overview of model preparation
Configure an engine
Manage engine versions
Create and manage engine configs
Generate a model
Create and manage models
Evaluate a model
Copy models to new instances
Create and manage backtest results
Generate risk scores and explainability
Register your parties
Party registration sharing for multiple instances
Prepare to generate prediction outputs
Create and manage prediction results
Understand prediction outputs
Best practices for your investigation process
Prepare for model and risk governance
Collect model and risk governance artifacts
Evaluate model fairness
Troubleshoot
Troubleshoot AML AI
Data validation errors
Administer AML AI
Access control
Access control with IAM
Authenticate to AML AI
Data residency
VPC service controls
Encryption
Understand encryption in transit
Encrypt data at rest (CMEK)
Monitor AML AI resources
Use audit logs
Use platform logs
Manage instances
Manage long-running operations
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Set up a project and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to create a Google Cloud project, enable AML AI,
create
authentication credentials ,
and grant your account one or more
IAM roles .
Important: After you create your project, the API is not automatically visible.
You must contact your Google representative before you can enable the API.
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
To run the commands on this page, set up the gcloud CLI in one of the following
development environments:
Cloud Shell Local shell
More
To use an online terminal with the gcloud CLI already set up, activate
Cloud Shell:
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
To use a local development environment, follow these steps:
Install the gcloud CLI.
If you're using an external identity provider (IdP), sign in to the
gcloud CLI with your federated identity. For more information, see
Sign in to the gcloud CLI with your federated identity .
Initialize the gcloud CLI .
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the required APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable financialservices.googleapis.com bigquery.googleapis.com cloudkms.googleapis.com
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/financialservices.admin, roles/cloudkms.admin, roles/bigquery.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
To run the commands on this page, set up the gcloud CLI in one of the following
development environments:
Cloud Shell Local shell
More
To use an online terminal with the gcloud CLI already set up, activate
Cloud Shell:
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
To use a local development environment, follow these steps:
Install the gcloud CLI.
If you're using an external identity provider (IdP), sign in to the
gcloud CLI with your federated identity. For more information, see
Sign in to the gcloud CLI with your federated identity .
Initialize the gcloud CLI .
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
See more code actions.
Light code theme
Dark code theme
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
See more code actions.
Light code theme
Dark code theme
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the required APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable financialservices.googleapis.com bigquery.googleapis.com cloudkms.googleapis.com
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/financialservices.admin, roles/cloudkms.admin, roles/bigquery.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
These roles fulfill the following required permissions:
Required permissions
The following permissions are required to complete the
quickstart
and are needed to perform many vital operations in AML AI.
Permission
Description
bigquery.datasets.create Create a BigQuery dataset bigquery.datasets.delete Delete a BigQuery dataset bigquery.datasets.get Get a BigQuery dataset bigquery.datasets.setIamPolicy Set the IAM policy on a BigQuery dataset bigquery.datasets.update Update a BigQuery dataset bigquery.jobs.create Create a BigQuery job bigquery.tables.getData Get data from a BigQuery table bigquery.transfers.get Get a BigQuery Data Transfer Service transfer bigquery.transfers.update Create or delete a BigQuery Data Transfer Service transfer cloudkms.cryptoKeys.create Create a Cloud KMS key cloudkms.cryptoKeys.getIamPolicy Get the IAM policy on a Cloud KMS key cloudkms.cryptoKeys.setIamPolicy Set the IAM policy on a Cloud KMS key cloudkms.keyRings.create Create a Cloud KMS key ring financialservices.operations.get Get an AML AI operation financialservices.v1backtests.create Create an AML AI backtest result financialservices.v1backtests.delete Delete an AML AI backtest result financialservices.v1backtests.exportMetadata Export metadata from an AML AI backtest result financialservices.v1datasets.create Create an AML AI dataset financialservices.v1datasets.delete Delete an AML AI dataset financialservices.v1engineconfigs.create Create an AML AI engine config financialservices.v1engineconfigs.delete Delete an AML AI engine config financialservices.v1instances.create Create an AML AI instance financialservices.v1instances.delete Delete an AML AI instance financialservices.v1instances.importRegisteredParties Import registered parties into an AML AI instance financialservices.v1models.copyFrom Copy from an AML AI model financialservices.v1models.copyTo Copy to an AML AI instance financialservices.v1models.create Create an AML AI model financialservices.v1models.delete Delete an AML AI model financialservices.v1predictions.create Create an AML AI prediction result financialservices.v1predictions.delete Delete an AML AI prediction result resourcemanager.projects.get Get a Google Cloud project resourcemanager.projects.list List Google Cloud projects
Important: After you enable the Financial Services API, you must contact your
Google representative to allowlist all AML AI functionality before proceeding to
Create an AML AI instance .
Make sure to inform the representative of the
location in which
you want to create your API resources.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
