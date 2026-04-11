---
title: "Quotas and limits \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/quotas
  title: "Quotas and limits \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and system limits that apply to
Policy Intelligence.
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
There are also system limits on Policy Intelligence resources.
System limits can't be changed.
Policy Analyzer quotas
Cloud Asset Inventory enforces the rate of incoming requests based on the consumer
project. Default quotas are listed below:
Quota
Value
AnalyzeIamPolicy
100 per minute per consumer project
1,000 per day per consumer project
AnalyzeIamPolicyLongrunning
100 per minute per consumer project
1,000 per day per consumer project
You can use the
APIs and services quotas dashboard
to view current quotas and usage for your project.
Policy Analyzer also limits the number of queries that you can make
if you don't have an organization-level activation of the Premium or Enterprise
tier of
Security Command Center .
Quota
Value
Analysis queries per organization per day 1
20
1 This quota only applies for organizations that don't have an
organization-level activation of the Premium or Enterprise tier of
Security Command Center.
For more details, see Billing questions .
Policy Analyzer limits
Policy Analyzer limits group expansion within the group memberships
and resource expansion within the resource hierarchy to the following values.
Limit
Value
AnalyzeIamPolicy
1,000 per group
AnalyzeIamPolicy
1,000 per resource
AnalyzeIamPolicyLongrunning
100,000 per resource
Recommendations limits
The following limits apply to IAM recommendations:
Limit
Value
Number of recommendations
per day to add a custom role to an organization
15
Number of recommendations
per day to add a custom role to a project
5
Number of custom roles in an organization that prevents recommendations
to create new custom roles 1
100
Number of custom roles in a project that prevents recommendations to
create new custom roles 2
25
1 If your organization contains more than
100 custom roles, you will
continue to receive role recommendations from Recommender.
However, none of the recommendations will suggest that you create a new custom
role .
2 If your project contains more than
25 custom roles, you will
continue to receive role recommendations from Recommender.
However, none of the recommendations for that project will suggest that you
create a new custom role .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
