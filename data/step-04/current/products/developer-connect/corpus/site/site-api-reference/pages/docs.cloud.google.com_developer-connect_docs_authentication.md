---
title: "Authenticate to Developer Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/authentication
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/authentication
  title: "Authenticate to Developer Connect \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Reference
Send feedback
Authenticate to Developer Connect
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to authenticate to Developer Connect programmatically. How
you authenticate to Developer Connect depends on the interface you use to access the API
and the environment where your code is running.
For more information about Google Cloud authentication, see the
Authentication methods .
API access
Developer Connect supports programmatic access. You can access the API in
the following ways:
Google Cloud CLI
REST
Google Cloud CLI
When you use the gcloud CLI to access
Developer Connect, you
log in to the gcloud CLI with a user
account, which provides the credentials used by the gcloud CLI commands.
If your organization's security policies prevent user accounts from having the required
permissions, you can use service account impersonation .
For more information, see
Authenticate for using the gcloud CLI .
For more information about using the gcloud CLI with Developer Connect,
see the gcloud CLI reference pages .
REST
You can authenticate to
the Developer Connect API
by using your gcloud CLI credentials or by using
Application Default Credentials .
For more information about authentication for REST requests, see
Authenticate for using REST .
For information about the types of credentials, see
gcloud CLI credentials and ADC credentials .
Access control for Developer Connect
After you authenticate to Developer Connect, you must be authorized to access
Google Cloud resources. Developer Connect uses
Identity and Access Management (IAM) for authorization.
For more information about the roles for Developer Connect, see
Access control with IAM .
For more information about IAM and authorization, see
IAM overview .
What's next
Learn about Google Cloud authentication methods .
See a list of authentication use cases .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
