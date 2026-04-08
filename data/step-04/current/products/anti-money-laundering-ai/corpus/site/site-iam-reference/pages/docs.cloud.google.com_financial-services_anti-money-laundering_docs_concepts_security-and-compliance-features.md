---
title: "Security and compliance features \_|\_ Anti Money Laundering AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/security-and-compliance-features
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/security-and-compliance-features
  title: "Security and compliance features \_|\_ Anti Money Laundering AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Security and compliance features | Anti Money Laundering AI | Google Cloud Documentation
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
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
Security and compliance features
Stay organized with collections
Save and categorize content based on your preferences.
This page outlines the security and compliance features supported by
AML AI.
Identity and Access Management (IAM) - IAM lets you grant granular access to
specific AML AI and Google Cloud resources. IAM also helps
prevent access to other resources.
See Access control in AML AI
or the IAM overview .
Encryption at Rest - Customer Managed Encryption Keys (CMEK) give you
control over the keys that protect and encrypt your data at rest in Google Cloud.
AML AI lets you manage your keys through Cloud KMS which
supports a range of options for storing encryption keys. These include:
Software security keys
Hardware backed security keys using Cloud HSM
Read more about encryption at rest in AML AI .
Encryption in Transit - Data in transit within Google Cloud and between the
AML AI endpoint and your network is always encrypted. Read more
about encryption in transit in AML AI or
encryption in transit in Google cloud .
VPC Service Controls - VPC Service Controls allow a similar level of
protection to private endpoints. It adds a layer of protection on top of IAM,
preventing access to Google services, including AML AI, from
unauthorized networks and services outside of a perimeter. Read more about
VPC Service Controls in AML AI and the
VPC Service Controls documentation .
Monitoring and logging - Platform logs
and, optionally, audit logs ,
help you to answer the questions, "Who did what, where, and when?" within your
AML AI and Google Cloud resources in real time.
Platform logs are always collected, but you must enable audit logs to collect
them. Model monitoring is a separate topic for which
AML AI provides artifacts to support your processes.
Data Residency - Data residency ensures that your data is stored only in the
regions you specify when an AML AI instance is created.
AML AI is implemented with strict data residency policies. See
data residency in AML AI .
Access Transparency Logs (AxT) - Access transparency logs record the actions
taken by Google personnel on your AML AI resources. Read more in
the AxT overview ,
or why Google support personnel might need to access your data at
privileged access at Google Cloud .
Data Deletion - Read more about how Google Cloud deletes data
and the Cloud Data Processing Addendum .
SLAs - AML AI offers documented SLAs
for the availability of the AML AI service.
Disaster Recovery - Input and output data from AML AI
resides in BigQuery which provides a number of options for disaster recovery .
Data stored by AML AI, such as model weights and metadata, don't
expose an export or backup facility and are regional only. See the
disaster recovery for AML AI page.
Geographic Resilience - AML AI supports regional, but not
multi-regional, deployment. This means AML AI provides resilience
against zonal outages but not regional outages. Since input and output data
resides in BigQuery, you can use some of the options provided by
BigQuery to provide some multi-regional geographic resilience.
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
