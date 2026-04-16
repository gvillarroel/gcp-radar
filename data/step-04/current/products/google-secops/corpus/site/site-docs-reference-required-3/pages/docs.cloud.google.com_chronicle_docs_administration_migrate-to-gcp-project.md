---
title: "Migrate to a Google Cloud project \_|\_ Google Security Operations \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/yara-l/functions
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/administration/migrate-to-gcp-project
  title: "Migrate to a Google Cloud project \_|\_ Google Security Operations \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrate to a Google Cloud project
Supported in:
Google secops
SIEM
This document explains how to migrate an existing Google SecOps instance to a customer-owned Google Cloud project.
By linking a Google SecOps instance to a Google Cloud project, you can use Google Cloud services for key capabilities, for example:
Examine ingested data and monitor the project for potential security threats.
Use authentication and monitoring features, including:
Cloud Identity integration for accessing a range of Google Cloud services,
such as authentication, Identity and Access Management, Cloud Monitoring, and Cloud Audit Logs.
IAM and Workforce Identity Federation support for
authenticating with your existing third-party IdP.
Important: If you have multiple frontend paths, self-service migration to Google Cloud projects and Workforce Identity Federation isn't supported. In this case, contact Google SecOps Support for assistance with the migration.
To migrate an existing Google SecOps instance to a customer-owned Google Cloud project, do the following:
Sign in to Google SecOps.
Select Settings > SIEM Settings .
Click Google Cloud Platform .
Enter the Google Cloud project ID to link the project to the Google SecOps instance.
Click Generate link .
Click Connect to Google Cloud Platform . The Google Cloud console opens. If you enter an incorrect Google Cloud project ID in the Google SecOps application, return to the Google Cloud Platform page in Google SecOps and enter the correct project ID.
On the Google Cloud console, go to Security > Google SecOps .
Verify the service account that the system created for the Google Cloud project.
Optional: You can configure single sign-on (SSO) at this point.
Alternatively, you can do that in the next step, Migrate from legacy authentication to Google Cloud authentication .
Click Connect .
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
