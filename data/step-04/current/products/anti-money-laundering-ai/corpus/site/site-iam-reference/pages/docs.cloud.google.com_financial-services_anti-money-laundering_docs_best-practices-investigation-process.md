---
title: "Best practices for your investigation process \_|\_ Anti Money Laundering\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/best-practices-investigation-process
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/best-practices-investigation-process
  title: "Best practices for your investigation process \_|\_ Anti Money Laundering\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Best practices for your investigation process | Anti Money Laundering AI | Google Cloud Documentation
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
On this page
Using risk scores
Using explainability
Filtering out repeated alerts
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Best practices for your investigation process
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Using risk scores
Using explainability
Filtering out repeated alerts
This page outlines best practices for using risk scores and explainability.
Using risk scores
Risk scores can be used in your investigation process to prioritize
investigations of high-risk parties.
Common approaches include alerting based on investigator load or based on a
chosen risk level:
Capacity led: Alert or investigate the top n parties in the output table
based on risk score in descending order, depending on available investigator
volume.
Note: Consider modifying investigator volume over time through assessment of
the implied risk level (for example, a marginal conversion rate of lowest
scoring alerted cases).
Risk led: Alert or investigate all parties with a risk score above a
fixed threshold that is fixed month-to-month. This is also based on backtest
results which give an acceptable level of a recall of previous cases and
discovery of new risk. For more information, see Collect model and risk
governance artifacts .
Note: Risk score threshold should be re-evaluated when using a new or
retrained model, because the same threshold may correspond to a different
risk level depending on the dataset or other aspects of the model.
Using explainability
The feature families with the highest positive attribution scores can be
provided to investigators to direct their investigations, to decrease the time
needed per investigation or increase success rate. Experience suggests that
negative scores (which indicates a feature family has reduced the risk of a
case) can be difficult for an investigator to use and some AML AI
customers don't show these to their investigators. For best results, consider
what training or guidance your investigators need to handle investigations
related to different feature families.
You might also use explainability for other purposes:
determining if a customer's behavior has changed enough to merit a fresh
investigation for a 2nd or repeated alert for this customer
deriving aggregate insights from feature family contributions over time
Filtering out repeated alerts
AML AI risk scores identify high-risk parties, but don't
separate out repeat alerts. For example, a customer presenting a high risk in
March 2023 may have a similarly high score in April 2023, generating two
consecutive cases despite their behavior remaining the same. You might want to
apply rules to filter out repeated alerts to avoid re-alerting a party with a
current or recently completed investigation without significant change in risk
score or explainability.
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
