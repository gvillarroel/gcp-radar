---
title: "Quotas and limits \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/quotas
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/quotas
  title: "Quotas and limits \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Error Reporting
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and system limits that apply to
Error Reporting.
Quotas have default values, but you can typically request
adjustments.
System limits are fixed values that can't be changed.
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
There are also system limits on Error Reporting resources.
System limits can't be changed.
API activity limits
Quota name
Limit
Error event data requests per minute per user
60
Error group metadata requests per minute per user
60
Error reports per minute
6,000
You can also see the API dashboard for your
current API activity and quotas. Click on an API and select Quotas to see
your limits.
Request changes to Error Reporting API quota
You can request higher or lower Error Reporting API limits using the
Google Cloud console.
For more information, see View and manage quotas .
If you get an error Edit is not allowed for this quota , you can
contact Support to request changes to
the quota. Note also that billing must be enabled on the
Google Cloud project to click the checkboxes.
Deployment limits
There is a limit of 10,000 deployment-error group pairs, where a
deployment is a combination of
service and
version .
Once you have reached this limit,
Error Reporting will discard the oldest (or less-recently modified)
deployments and their associated error data.
Data retention periods
Information in Error Reporting is retained for 30 days.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
