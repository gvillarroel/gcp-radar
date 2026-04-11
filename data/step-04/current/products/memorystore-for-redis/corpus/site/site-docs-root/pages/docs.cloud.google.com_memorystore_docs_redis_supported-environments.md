---
title: "Supported environments \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/supported-environments
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/supported-environments
  title: "Supported environments \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Reference
Send feedback
Supported environments
Stay organized with collections
Save and categorize content based on your preferences.
This page describes which Google Cloud environments are supported for
Memorystore for Redis. It also shows which requirements are necessary for
connectivity, given different environments and networking setups.
All supported environments for Memorystore for Redis
Environments that do not need a Serverless VPC Access connector
Compute Engine
Google Kubernetes Engine
App Engine flexible environment
Serverless environments that need a Serverless VPC Access connector
Cloud Run functions
App Engine standard environment
Cloud Run
Capabilities and requirements
Environment
Requires a Serverless VPC Access connector. 1
Supports Shared VPC when Redis instance is provisioned in the host
project and a private service access connection is established.
2
Supports Shared VPC when Redis instance is provisioned in the service
project and a private service access connection is established.
2
Compute Engine
X
✓
✓
Google Kubernetes Engine
X
✓
✓
App Engine flexible environment
X
✓
X
App Engine standard environment
✓
✓
X
Cloud Run functions
✓
✓
X
Cloud Run
✓
✓
✓
1 Some of the serverless environments listed above require a
Serverless VPC Access connector. See Serverless VPC Access connector requirement
for more details.
2 See Networking for more
details.
Serverless VPC Access connector requirement
Some serverless environments require a Serverless VPC Access connector
as a prerequisite for connectivity with Memorystore for Redis. The serverless
environments that need the connector are Cloud Run functions, the App Engine
standard environment, and Cloud Run.
More details and connector setup instructions for these environments are found
below:
Cloud Run functions: Compare Direct VPC egress and VPC connectors .
App Engine standard environment: Connect to a VPC network .
Cloud Run: Compare Direct VPC egress and VPC connectors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
