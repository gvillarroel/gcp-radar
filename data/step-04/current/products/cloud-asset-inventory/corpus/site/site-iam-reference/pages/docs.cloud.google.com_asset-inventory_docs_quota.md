---
title: "Quotas and limits \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/quota
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/quota
  title: "Quotas and limits \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud Asset Inventory
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
Free analysis query limit
Policy Analyzer limits the number of queries that you can make
if you don't have an
organization-level activation of the Premium or Enterprise tier of Security Command Center .
Quota
Value
Analysis queries per organization per day 1
20
1 This quota only applies for organizations that don't have an
organization-level activation of the Premium or Enterprise tier of
Security Command Center. This limit is shared among all Policy Analyzer
tools.
For more details, see
Billing questions in the
Policy Intelligence documentation.
Project quota
Cloud Asset Inventory enforces the rate of incoming requests based on the consumer
project. The default quotas are as follows:
Quota
Value
AnalyzeIamPolicy
100 per minute per consumer project
1000 per day per consumer project
AnalyzeIamPolicyLongrunning
100 per minute per consumer project
1000 per day per consumer project
BatchGetAssetsHistory
100 per minute per consumer project
BatchGetEffectiveIamPolicies
100 per minute per consumer project
ExportAssets
60 per minute per consumer project
6000 per day per consumer project
ListAssets
100 per minute per consumer project
Real-time feed APIs
600 per minute per consumer project
Saved Query APIs
600 per minute per consumer project
SearchAllIamPolicies
400 per minute per consumer project
SearchAllResources
400 per minute per consumer project
You can use the
APIs and services quotas dashboard
to view current quotas and usage for your project.
Resource organization quota
In addition to the per-project quota, Cloud Asset Inventory also enforces rate
limits on incoming requests based on resource organization. The limits are as
follows:
Quota
Value
BatchGetAssetsHistory
180 per minute per organization
195,000 per day per organization
ExportAssets
75 per minute per organization
13,000 per day per organization
ListAssets
800 per minute per organization
650,000 per day per organization
QueryAssets
20 per minute per organization for requests with a query statement
200 per minute per organization for requests with a job reference
Real-time feed APIs
30 per minute per organization
SearchAllIamPolicies
3,000 per minute per organization
SearchAllResources
1,500 per minute per organization
Policy Analyzer expansion limits
The Policy Analyzer limits group expansion in the group memberships and
resource expansion in the resource hierarchy to the following values.
Limit
Value
AnalyzeIamPolicy group expansion
1000 per group
AnalyzeIamPolicy resource expansion
1000 per resource
AnalyzeIamPolicyLongrunning resource
expansion
100000 per resource
Downstream services
In addition to limits enforced by Cloud Asset Inventory, the number of incoming
requests is also capped by the rate and quota of the downstream services that
Cloud Asset Inventory depends on.
BigQuery
Table operations: BigQuery has a quota limit
for table operations, which defines the maximum number of ExportAssets API
requests to the same BigQuery table that can be performed daily.
ExportAssets issues 2 table operations per table per request.
Query jobs: BigQuery has a concurrent
rate limit for query job, which defines the
maximum number of concurrent ExportAssets API requests that can be issued
per project.
Pub/Sub
Publisher throughput: Pub/Sub has a
publisher throughput limit per region, which affects
the combined asset update size
Real-time feed can publish to
your topic.
Message size: Pub/Sub has
message limits . For
Real-time feed , if the payload
of your asset update exceeds the limit, your asset update is discarded.
Request a quota increase
If you have access to the Security Command Center Premium or Enterprise tier at the
organization level, you can contact your account representative to request a
Cloud Asset Inventory quota increase. Activating Security Command Center Premium or Enterprise
only at the project level might not quality you for additional quota.
Access to the Security Command Center Premium or Enterprise tier also automatically grants
an unlimited number of analysis queries per organization per day.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
