---
title: "Quotas and limits \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/quotas
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/quotas
  title: "Quotas and limits \_|\_ Gemini for Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and system limits that apply to
Gemini for Google Cloud.
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
There are also system limits on Gemini resources.
System limits can't be changed.
Requests per second
Gemini for Google Cloud enforces quotas on requests per second
for each user in a project.
Quota
Value
Requests per second
2
Requests per day
Gemini for Google Cloud enforces quotas for the total number of
requests per day for each user in a project.
Quota
Value
Requests per day for Gemini Code Assist or Gemini in
BigQuery code requests, such as code generation and code
completion.
6000
Requests per day for chat, visualization, data insight table scans, metadata
generation, data preparation, and other requests that display responses in the
Cloud Assist panel in the Google Cloud console and IDEs.
960
Quotas for Gemini Code Assist
Gemini Code Assist enforces quotas for certain features.
Quota
Value
Local codebase awareness
1,000,000 token context window
Code customization repositories
20,000
Quotas for agent mode and Gemini CLI
Quotas for requests from Gemini Code Assist agent mode and
Gemini CLI are combined. When in agent mode or when using the
Gemini CLI, one prompt might result in multiple model requests.
Requests are limited per user per minute and are subject to the availability of
the service in times of high demand.
Quota
Gemini Code Assist edition
Value
Maximum requests per user per day
Standard
1500
Enterprise
2000
Quotas for Gemini Code Assist on GitHub
Usage of
Gemini Code Assist on GitHub
is not counted as part of the general quotas for
Gemini Code Assist.
An installation
of the consumer version of the Gemini Code Assist on
GitHub app has a quota of 33 pull request reviews per day.
An installation
of the enterprise version of the Gemini Code Assist on
GitHub app (Preview)
has a quota of at least 100 pull request reviews per day.
The exact number of pull request reviews depends on the codebase and how
many model calls are required to complete each code review. Because of
this, in some cases the quota can be significantly greater than 100.
Gemini Code Assist on GitHub quotas reset in
alignment with resets for
Google Cloud quotas .
Gemini in BigQuery
For information about Gemini in BigQuery limits, see BigQuery
Quotas and limits .
Request a quota increase
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
