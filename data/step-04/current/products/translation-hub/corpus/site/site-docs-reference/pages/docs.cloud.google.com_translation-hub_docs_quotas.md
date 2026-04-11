---
title: "Quotas and limits \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/translation-hub/docs/quotas
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/translation-hub/docs/resources
source_metadata:
  url: https://docs.cloud.google.com/translation-hub/docs/quotas
  title: "Quotas and limits \_|\_ Translation Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Translation Hub
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
Starting on June 30, 2025, Translation Hub is officially
deprecated and will no longer be supported. You can continue using
Translation Hub until September 20, 2026, when it will be shut down.
This document lists the quotas and system limits that apply to
Translation Hub.
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
There are also system limits on Translation Hub resources.
System limits can't be changed.
Quotas
The following quotas apply to a project. You can request a quota change through
the Cloud Translation - Advanced API quotas page .
Quotas
Value
The number of Translation Hub portals
1,000
The number of concurrent translation jobs
Unlimited
The number of pages that can be translated per minute
Unlimited
Usage limits
Translation Hub enforces the following usage limits:
Usage limit
Value
PDF translation requests
300 pages per file
DOCX and PPTX translation requests
20 MB per file
Importing Google Docs and Google Slides files from
Google Drive
10 MB per file
CSV file size for importing users
100 KB or 500 lines per import
Number of glossaries
10,000
Size of each glossary entry
1024 UTF-8 bytes
Total size of a glossary file
10.4 million (10,485,760) UTF-8 bytes
Number of admin-created translation templates
4 per portal
Number of portal user-created translation templates
6 per user per portal
Request a quota increase
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
