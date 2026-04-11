---
title: "Quotas & limits \_|\_ Channel Services \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/quotas
  title: "Quotas & limits \_|\_ Channel Services \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
Resources
Send feedback
Quotas & limits
Stay organized with collections
Save and categorize content based on your preferences.
Channel Services limits
The table below lists several limits applying to Channel Services
Resources limits
Resource
Limit
Account
1 per reseller domain
Customers
Unlimited
Entitlements
Unlimited
Channel Partner Links
Unlimited
Google Workspace limits
Resource
Limit
Maximum number of seats
50,000 (contact Support to increase)
Maximum trial duration
30 days (for applicable SKUs)
Limits specific to Test Partner Sales Console
Resource
Limit
Maximum number of seats
10
Maximum trial duration
1 day
There are additional considerations when using a Test Partner Sales Console:
Customers need to follow the test domain naming convention.
Google Workspace entitlements are marked for deletion 3 days after
creation, and deleted weekly.
Cloud Channel API rate limits
API rate limits define the number of requests that can be made to the
Cloud Channel API. Limits exist on a per-project basis and all API requests,
including invalid requests, incur a quota cost.
Rate limits are enforced at 60 second (1 minute) intervals. If you reach
your limit within 60 seconds, you need to wait for your quotas to refresh to
make more requests.
We have different quota buckets for different groups of endpoints. Quota usages
in each bucket are evaluated independently. The following table lists the
specific and default per-project Cloud Channel API quota limits, and the
methods to which they apply.
API Method
Limit (requests/minute)
accounts.customers.entitlements.list
24
accounts.customers.list
24
accounts.skuGroups.list
24
accounts.skuGroups.billableSkus.list
24
operations.get
600
all other endpoints
120
If you need a higher rate limit for API requests, you can request an increase
via the
Google Cloud console .
Best practices
Here are some best practices to help you with the API rate limits on
Cloud Channel API.
Use a client-side rate limiter to set an artificial rate limit.
This can keep one client from using all of your quotas.
Use
exponential backoff
to progressively space out requests once you reach your quota. This gives the
server time to refill your buckets.
Follow polling recommendations described for all methods returning an
Operation when calling operations.get
If you receive a 403 error with the message rateLimitExceeded , wait a
few seconds and try your request again. Quotas are refilled every 60
seconds, so your request should succeed after waiting for the next refresh.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
