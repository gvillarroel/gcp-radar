---
title: "Quotas and limits \_|\_ API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/quotas
  title: "Quotas and limits \_|\_ API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Quotas and limits
This page describes API Gateway's quota limits.
Limits on APIs, API configs, and gateways
API Gateway enforces the following limits on APIs, API configs, and gateways:
APIs - 50 total
API Configs - 100 per API
Gateways - 50 per region
If you attempt to create a second API config before the first API config
creation for the same API completes, one or both configs may not be available
for later use in a Gateway.
Request rate limits
A rate limit of 10,000,000 quota units per 100 seconds per service producer project is enforced by default.
One quota unit is consumed for each call to services.check
and for each operation reported by
services.report .
Note: API Gateway employs efficient caching algorithms so it doesn't call
Service Control every time your API is called. So while the default limit is 10,000,000 per 100 seconds, your API can support a much higher volume.
Payload size limits
The following limits apply specifically to max payload size for traffic through deployed gateways:
Limit
Amount
Request size
32 megabytes
Response size
32 megabytes
gRPC transcoding response size
1 megabyte
gRPC transcoding request size
1 megabyte
Streaming is not supported.
Header size limits
The following limits apply specifically to max header size for traffic through deployed gateways:
Limit
Amount
Request headers size
60 kilobytes
The backend service called by API Gateway may have lower limits.
How to increase quota
Cloud Quotas adjustment requests are subject to review. If your quota
adjustment request requires review, you receive an email acknowledging receipt
of your request. If you need further assistance, respond to the email. After
reviewing your request, you receive an email notification indicating whether
your request was approved.
Console
To adjust a quota value, follow these steps:
In the Google Cloud console, go to the
IAM & Admin > Quotas & System Limits page:
Go to Quotas & System Limits
If prompted to select a project, select the project that you want to
adjust.
Find the quota value that you want to update in the Quota column and
select the checkbox next to the quota that you want to update.
If needed, use the Filter search box to search for your quota.
Click create Edit and the Quota changes dialog appears.
Enter the quota value that you want in the New value field.
Some quota values have a unit of measurement; if this applies, select the
unit that you want in the adjacent list. Click Done .
Optional: If you see a checkbox with the text I understand that this
request will remove any overrides , it means that adjusting the quota value
to a number equal to or greater than the default will remove the previous
quota override . If this is what
you want, select the checkbox and proceed.
To increase your quota value greater than the number indicated on the
dialog, select Apply for higher quota .
In the Quota changes form, enter the updated quota value that
you want in the New value field. If a Request description
field appears, enter a description. Click Done .
If a Next button appears, click Next and fill out your contact
details in the screen that follows.
Click Submit request .
If you find that you can't request an adjustment from the console, request the
increase from Cloud Customer Care .
To learn more about how the quota increase process works, see
About quota adjustments .
Batching requests for higher quota values
You can batch requests for higher quota by selecting the checkbox next to each
quota that you want to include. However, batching requests can increase the
amount of time it takes for Google Cloud to review your request.
To reduce review time, group quota adjustment requests by product and area. For
example, if you want to request adjustments to networking and Compute Engine
VM quotas, create one request for the networking quotas and another request for
the Compute Engine VM quotas.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
