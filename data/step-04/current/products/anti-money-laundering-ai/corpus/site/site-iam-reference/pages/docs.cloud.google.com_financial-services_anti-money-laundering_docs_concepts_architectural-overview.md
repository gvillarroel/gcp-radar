---
title: "Architectural overview \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/architectural-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/security-and-compliance-features
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/architectural-overview
  title: "Architectural overview \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Send feedback
Architectural overview
Stay organized with collections
Save and categorize content based on your preferences.
What is AML AI?
AML AI is an API-based machine learning pipeline for
automatically training, testing, deploying, and monitoring a productionized
anti-money laundering (AML) model. As a managed service, Google takes care of
the infrastructure behind the scenes and presents teams with a production-ready
system to train, predict, and backtest models to tackle money laundering.
Interface
The main way of interacting with AML AI API is using the
https://financialservices.googleapis.com endpoint with REST API calls. The
Google Cloud CLI tool is not supported for directly calling the
AML AI API, but it is recommended to use the Google Cloud CLI to
obtain credentials.
You may want to use programming languages to interact with AML AI.
To make coding against AML AI easier, Google provides
generic API client libraries
for a number of different languages that can reduce the amount of code you need
to write and make your code more robust.
Each of the API client libraries provide a means to use application default
credentials (ADC).
Note: There are no API-specific Cloud client libraries for AML AI.
For details about the REST interface, see
Financial Services API .
Data
AML AI reads input data from BigQuery and writes output
predictions and backtest data to BigQuery. For input data, an
AML AI dataset resource must be created which references the
data in BigQuery. This dataset must reside in the same location as the
AML AI instance.
The AML AI dataset resource represents pointers to datasets in
BigQuery. It does not hold or point to any specific snapshot of the
data in these tables. If data is modified after a dataset is created (for
example, if records are deleted), this will be reflected in the results of other
calls to the API (for example, the creation of new models or when running
predictions). Modifying the data this way is not recommended. For more
information, see
Create and manage datasets .
Services used by AML AI
As well as the AML AI API itself, there are a number of other
Google Cloud API services which are required to use the AML AI:
Required
Cloud IAM: for identity management and access management
Cloud KMS: for key management
BigQuery: for data storage
Cloud Logging: for logging and monitoring
Optional
Cloud HSM: Optional hardware-backed storage for encryption keys
VPC Service Controls: Prevent data exfiltration to unauthorized networks and devices
What's Next
Security and compliance features
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
