---
title: "Authenticate to Access Approval \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication
  title: "Authenticate to Access Approval \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Technology areas
Reference
Authenticate to Access Approval
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to authenticate to Access Approval programmatically. How
you authenticate to Access Approval depends on the interface you use to access the API
and the environment where your code is running.
For more information about Google Cloud authentication, see the
Authentication methods .
API access
Access Approval supports programmatic access. You can access the API in
the following ways:
Google Cloud CLI
REST
Google Cloud CLI
When you use the gcloud CLI to access
Access Approval, you
log in to the gcloud CLI with a user
account, which provides the credentials used by the gcloud CLI commands.
If your organization's security policies prevent user accounts from having the required
permissions, you can use service account impersonation .
For more information, see
Authenticate for using the gcloud CLI .
For more information about using the gcloud CLI with Access Approval,
see the gcloud CLI reference pages .
REST
You can authenticate to
the Access Approval API
by using your gcloud CLI credentials or by using
Application Default Credentials .
For more information about authentication for REST requests, see
Authenticate for using REST .
For information about the types of credentials, see
gcloud CLI credentials and ADC credentials .
Access control for Access Approval
After you authenticate to Access Approval, you must be authorized to access
Google Cloud resources. Access Approval uses
Identity and Access Management (IAM) for authorization.
For more information about the roles for Access Approval, see
Access control with IAM .
For more information about IAM and authorization, see
IAM overview .
What's next
Learn about Google Cloud authentication methods .
See a list of authentication use cases .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
