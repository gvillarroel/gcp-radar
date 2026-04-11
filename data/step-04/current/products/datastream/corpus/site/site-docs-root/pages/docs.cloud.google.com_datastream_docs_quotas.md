---
title: "Quotas and limits \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/quotas
  title: "Quotas and limits \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
Datastream limits the maximum rates of incoming requests and enforces appropriate quotas on a per-project basis. Specific policies vary depending on resource availability, user profile, service usage history, and other factors, and are subject to change without notice.
Datastream has the following quota limits:
Each Google Cloud project can have a maximum of 200 stream resources per region.
Each Google Cloud project can have a maximum of 5 private connectivity configurations.
Each user can make up to 1,200 API calls per minute.
Salesforce API quotas
Salesforce defines a limit for the total number of inbound API requests
during a 24-hour period for an org. We recommend carefully considering your
polling interval values and the number of objects that you want to replicate.
To find out what limits there are in place for your org, use the Salesforce
Limits API .
Note: Limits are imposed on an org-basis, meaning that they affect the entire
Salesforce org. If the API usage reaches 90% of the quota, Datastream
throttles your stream, and the stream temporarily enters a FAILED state.
After a short while, Datastream checks if the usage is under 90%
and if so, the stream resumes.
Write to BigQuery and Cloud Storage
When writing data into BigQuery and Cloud Storage, the quotas and limits for BigQuery and Cloud Storage apply.
Cloud Logging
Datastream saves logs in Cloud Logging . The Logging quota applies to your Datastream resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
