---
title: "Quotas and limits \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/quotas
  title: "Quotas and limits \_|\_ Secure Source Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and system limits that apply to
Secure Source Manager.
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
There are also system limits on Secure Source Manager resources.
System limits can't be changed.
Quotas
Secure Source Manager enforces the following quotas.
Quota
Value
Instances per project, per region
5
API requests per project per minute
1200
Usage limits
Secure Source Manager enforces the following usage limits:
Usage limit
Value
Users per instance
500
Storage per instance
100GB
Git operations per instance per minute
1000
Increase available quota
To increase available quota, you can
request a quota adjustment or contact Google Cloud Customer
Care or your Support representative about increasing quota for
Secure Source Manager.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
