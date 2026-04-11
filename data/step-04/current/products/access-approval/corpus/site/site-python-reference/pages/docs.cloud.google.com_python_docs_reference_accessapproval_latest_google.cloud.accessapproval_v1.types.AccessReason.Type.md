---
title: "Class Type (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessReason.Type
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessReason.Type
  title: "Class Type (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class Type (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.1
1.9.1
1.8.0
1.7.5
1.6.1
1.5.1
1.4.1
1.3.5
1.2.0
1.1.1
1.0.0
0.2.2
0.1.0
Type ( value )
Type of access justification.
- "Feedback Report: #####"
- "Case Number: #####"
- "Case ID: #####"
- "E-PIN Reference: #####"
- "Google-#####"
- "T-#####".
GOOGLE_INITIATED_SERVICE (2):
The principal accessed customer data in order
to diagnose or resolve a suspected issue in
services. Often this access is used to confirm
that customers are not affected by a suspected
service issue or to remediate a reversible
system issue.
GOOGLE_INITIATED_REVIEW (3):
Google initiated service for security, fraud,
abuse, or compliance purposes.
THIRD_PARTY_DATA_REQUEST (4):
The principal was compelled to access
customer data in order to respond to a legal
third party data request or process, including
legal processes from customers themselves.
GOOGLE_RESPONSE_TO_PRODUCTION_ALERT (5):
The principal accessed customer data in order
to diagnose or resolve a suspected issue in
services or a known outage.
Enums
Name
Description
TYPE_UNSPECIFIED
Default value for proto, shouldn't be used.
CUSTOMER_INITIATED_SUPPORT
Customer made a request or raised an issue that required the principal to access customer data. `detail` is of the form ("#####" is the issue ID):
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
