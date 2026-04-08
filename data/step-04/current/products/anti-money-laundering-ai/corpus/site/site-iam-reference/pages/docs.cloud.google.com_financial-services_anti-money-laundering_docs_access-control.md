---
title: "IAM permissions \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/access-control
  title: "IAM permissions \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

IAM permissions | Anti Money Laundering AI | Google Cloud Documentation
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
Prepare BigQuery datasets and tables
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
On this page
Overview
Permissions Required permissions
Roles
Custom roles
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
IAM permissions
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview
Permissions Required permissions
Roles
Custom roles
Overview
AML AI uses Identity and Access Management (IAM) for
access control.
You can configure access control for the Financial Services API at the project
level. For example, you can grant access for developers to list and get all
datasets within a project.
For a detailed description of IAM and its features, see the
IAM documentation . In particular, see the section on
managing IAM policies .
Every AML AI method requires the caller to have the necessary
permissions. For more information, see Permissions and
Roles .
Permissions
This section lists AML AI operations and their related
permissions implemented by IAM.
Required permissions
The following tables list the IAM permissions that are associated with
AML AI.
projects. locations method name
Required permissions
projects. locations. get
financialservices. locations. get on the specific Google Cloud project
projects. locations. list
financialservices. locations. list on the specific Google Cloud project
Note: The following method names are shortened in each table; each method's full
name begins with projects.locations .
instances method name
Required permissions
instances. create
financialservices. v1instances. create on the parent location, which is a specific Google Cloud project and data location combination
instances. delete
financialservices. v1instances. delete on the instance resource
instances. get
financialservices. v1instances. get on the instance resource
instances. list
financialservices. v1instances. list on the parent location, which is a specific Google Cloud project and data location combination
instances. patch
financialservices. v1instances. update on the instance resource
instances. import Registered Parties
financialservices. v1instances. import Registered Parties on the instance resource
instances. export Registered Parties
financialservices. v1instances. export Registered Parties on the instance resource
instances. engine Configs method name
Required permissions
instances. engine Configs. create
financialservices. v1engineconfigs. create on the parent instance
instances. engine Configs. delete
financialservices. v1engineconfigs. delete on the engine config resource
instances. engine Configs. get
financialservices. v1engineconfigs. get on the engine config resource
instances. engine Configs. list
financialservices. v1engineconfigs. list on the parent instance
instances. engine Configs. patch
financialservices. v1engineconfigs. update on the engine config resource
instances. engine Configs. export Metadata
financialservices. v1engineconfigs. export Metadata on the engine config resource
instances. engine Versions
method name
Required permissions
instances. engine Versions. get
financialservices. v1engineversions. get
on the engine version resource
instances. engine Versions. list
financialservices. v1engineversions. list
on the parent instance
instances. datasets method name
Required permissions
instances. datasets. create
financialservices. v1datasets. create
on the parent instance
instances. datasets. delete
financialservices. v1datasets. delete
on the dataset resource
instances. datasets. get
financialservices. v1datasets. get on
the dataset resource
instances. datasets. list
financialservices. v1datasets. list
on the parent instance
instances. datasets. patch
financialservices. v1datasets. update
on the dataset resource
instances. models method name
Required permissions
instances. models. copy
financialservices. v1models. copy From on the source model resource and financialservices. v1models. copy To on the parent instance
instances. models. create
financialservices. v1models. create on the parent instance
instances. models. delete
financialservices. v1models. delete on the model resource
instances. models. get
financialservices. v1models. get on the model resource
instances. models. list
financialservices. v1models. list on the parent instance
instances. models. patch
financialservices. v1models. update on the model resource
instances. models. export Metadata
financialservices. v1models. export Metadata on the model resource
instances. backtest Results method name
Required permissions
instances. backtest Results. create
financialservices. v1backtests. create on the parent instance
instances. backtest Results. delete
financialservices. v1backtests. delete on the backtest result resource
instances.backtestResults.get
financialservices.v1backtests.get on the backtest result resource
instances.backtestResults.list
financialservices.v1backtests.list on the parent instance
instances.backtestResults.patch
financialservices.v1backtests.update on the backtest result resource
instances.backtestResults.exportMetadata
financialservices.v1backtests.exportMetadata on the backtest result resource
instances.predictionResults method name
Required permissions
instances.predictionResults.create
financialservices.v1predictions.create on the parent instance
instances.predictionResults.delete
financialservices.v1predictions.delete on the prediction result resource
instances.predictionResults.get
financialservices.v1predictions.get on the prediction result resource
instances.predictionResults.list
financialservices.v1predictions.list on the parent instance
instances.predictionResults.patch
financialservices.v1predictions.update on the prediction result resource
instances.predictionResults.exportMetadata
financialservices.v1predictions.exportMetadata on the prediction result resource
The following methods are inherited from google.longrunning.Operations .
operations method name
Required permissions
operations.cancel
financialservices.operations.cancel
on the specific Google Cloud project
operations.delete
financialservices.operations.delete
on the specific Google Cloud project
operations.get
financialservices.operations.get on
the specific Google Cloud project
operations.list
financialservices.operations.list
on the specific Google Cloud project
Roles
The following table lists the AML AI IAM
roles, including the permissions associated with each role:
IAM role
Permissions
Financial Services Viewer
( roles/ financialservices.viewer )
View access to all Financial Services API resources.
financialservices.locations.*
financialservices. locations. get
financialservices. locations. list
financialservices. operations. get
financialservices. operations. list
financialservices. v1backtests. exportMetadata
financialservices. v1backtests. get
financialservices. v1backtests. list
financialservices. v1datasets. get
financialservices. v1datasets. list
financialservices. v1engineconfigs. exportMetadata
financialservices. v1engineconfigs. get
financialservices. v1engineconfigs. list
financialservices. v1engineversions.*
financialservices. v1engineversions. get
financialservices. v1engineversions. list
financialservices. v1instances. exportRegisteredParties
financialservices. v1instances. get
financialservices. v1instances. list
financialservices. v1models. copyFrom
financialservices. v1models. exportMetadata
financialservices.v1models.get
financialservices. v1models. list
financialservices. v1predictions. exportMetadata
financialservices. v1predictions. get
financialservices. v1predictions. list
resourcemanager.projects.get
resourcemanager.projects.list
Financial Services Admin
( roles/ financialservices.admin )
Full access to all Financial Services API resources.
financialservices.*
financialservices. locations. get
financialservices. locations. list
financialservices. operations. cancel
financialservices. operations. delete
financialservices. operations. get
financialservices. operations. list
financialservices. v1backtests. create
financialservices. v1backtests. delete
financialservices. v1backtests. exportMetadata
financialservices. v1backtests. get
financialservices. v1backtests. list
financialservices. v1backtests. update
financialservices. v1datasets. create
financialservices. v1datasets. delete
financialservices. v1datasets. get
financialservices. v1datasets. list
financialservices. v1datasets. update
financialservices. v1engineconfigs. create
financialservices. v1engineconfigs. delete
financialservices. v1engineconfigs. exportMetadata
financialservices. v1engineconfigs. get
financialservices. v1engineconfigs. list
financialservices. v1engineconfigs. update
financialservices. v1engineversions. get
financialservices. v1engineversions. list
financialservices. v1instances. create
financialservices. v1instances. delete
financialservices. v1instances. exportRegisteredParties
financialservices. v1instances. get
financialservices. v1instances. importRegisteredParties
financialservices. v1instances. list
financialservices. v1instances. update
financialservices. v1models. copyFrom
financialservices. v1models. copyTo
financialservices. v1models. create
financialservices. v1models. delete
financialservices. v1models. exportMetadata
financialservices.v1models.get
financialservices. v1models. list
financialservices. v1models. update
financialservices. v1predictions. create
financialservices. v1predictions. delete
financialservices. v1predictions. exportMetadata
financialservices. v1predictions. get
financialservices. v1predictions. list
financialservices. v1predictions. update
resourcemanager.projects.get
resourcemanager.projects.list
For more information about roles, see
IAM basic and predefined roles reference .
Custom roles
If the predefined IAM roles for AML AI don't meet your needs,
you can define custom roles. Custom roles enable you to choose a specific set of
permissions, create your own role with those permissions, and grant the role to
users in your organization. For more information, see
Understanding IAM custom roles .
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
