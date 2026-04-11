---
title: "Class Relevance (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.types.Event.Relevance
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-servicehealth/latest/google.cloud.servicehealth_v1.types.Event.Relevance
  title: "Class Relevance (0.4.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class Relevance (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.11
Relevance ( value )
Communicates why a given incident is deemed relevant in the
context of a given project. This enum lists all possible
detailed states of relevance.
Enums
Name
Description
RELEVANCE_UNSPECIFIED
Unspecified relevance.
UNKNOWN
The relevance of the incident to the project is unknown.
NOT_IMPACTED
The incident does not impact the project.
PARTIALLY_RELATED
The incident is associated with a Google Cloud product your project uses, but the incident may not be impacting your project. For example, the incident may be impacting a Google Cloud product that your project uses, but in a location that your project does not use.
RELATED
The incident has a direct connection with your project and impacts a Google Cloud product in a location your project uses.
IMPACTED
The incident is verified to be impacting your project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
