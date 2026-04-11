---
title: "Compare global and regional service \_|\_ Secret Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/secret-manager-secrets-comparison
  title: "Compare global and regional service \_|\_ Secret Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Compare global and regional service
Stay organized with collections
Save and categorize content based on your preferences.
This page explains the key differences between the global and regional service of
Secret Manager.
The global service is the default configuration for Secret Manager.
You can start using the service with default settings and the standard API endpoint.
The secret data is replicated across multiple regions and secrets can be accessed
from any region where Google Cloud platform operates.
For organizations with stringent data sovereignty and compliance
requirements, Secret Manager offers a regional service where you can
choose to store your data solely within specific geographical
locations or data residency zones (DRZs). Secrets can only be accessed from
within that specific region. To access the regional service, you'll require
a regional endpoint associated with the data residency zone.
The following table explains the key differences between the global and
regional service.
Feature
Global service
Regional service
Data residency
User managed replication
to specific regions or automatic replication
without any restriction.
Data is stored in a single location. Complete data residency zone (DRZ) compliance with
data at-rest, in-use, and in-transit.
Endpoints
Single, global endpoint
Regional endpoints
Cross-region access
Possible with both user managed replication and automatic replication.
Not possible. Secret data is tightly restricted to your region of choice
and doesn't flow outside its boundaries.
Use cases
General secret management
Your data doesn't have to be stored in a specific region.
You are only concerned with availability and latency of data, and not regulatory requirements.
Strict data residency requirements
Your data must be stored in a specific region.
You want to restrict movement of your sensitive data within that specific boundary,
Not all organizations are subject to stringent DRZ regulations on where data is
stored or accessed, and not all data might fall into the sensitive category to
be subject to the DRZ regulations. So depending upon the sensitivity of the data
being handled, you can choose either between the regional or global service.
If your organization must adhere to specific data residency regulations, choose
the regional service as it ensures that your secret data doesn't leave the designated
region. If your application requires high availability and the ability to access
secrets from anywhere, the global service might be more suitable due to its
multi-region replication.
To learn more about the regional service, refer to the
regional service documentation .
What's next
Enable the Secret Manager API
Create and access a secret
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
