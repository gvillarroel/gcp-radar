---
title: "Troubleshoot issues \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/troubleshooting
  title: "Troubleshoot issues \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Usage
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Troubleshoot issues
What does the "service not enabled" error mean?
To use any Google API service, you need to:
Create or use an existing Google Cloud project.
Enable the service for the Google Cloud project.
Pass an API key or an OAuth access token associated with the
Google Cloud project.
To learn more about using API keys, see
Authentication Overview . To fix this error, enable the
Service Usage API for your Google Cloud project using the instructions in
Enabling and Disabling Services .
How do I fix permission denied errors?
Such errors typically mean the caller doesn't have the right
Identity and Access Management permission. See the
Access Control guide for details on how to
fix this error.
How do I perform a retry on API errors?
If you receive an API error and want to retry the call, we recommend that you
perform the retry with exponential intervals plus randomness. Use the following
minimum retry intervals for the indicated errors:
30 seconds for 429 quota errors.
1 second for 500 quota errors.
1 second for 503 quota errors.
For other errors, make sure you perform retries based on additional error
information. See
google.rpc.Code
for more details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
