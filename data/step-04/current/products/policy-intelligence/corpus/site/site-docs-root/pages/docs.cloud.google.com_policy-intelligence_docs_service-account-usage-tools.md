---
title: "Tools to understand service account usage \_|\_ Policy Intelligence \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/service-account-usage-tools
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/service-account-usage-tools
  title: "Tools to understand service account usage \_|\_ Policy Intelligence \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Guides
Send feedback
Tools to understand service account usage
Stay organized with collections
Save and categorize content based on your preferences.
There are several different tools that you can use to understand authentication
activities for service accounts and keys. This page describes the available
tools and their intended uses.
If you want to see how service accounts are using their permissions and identify
over-privileged service accounts, use role recommendations. For more
information, see Overview of role recommendations .
Authentication activities
Whenever a service account or key is used to call a Google API, including an
API that is not part of Google Cloud, it generates an authentication
activity. To understand service account usage, you can track these
authentication activities using the tools described on this page.
Authentication activities include both successful and failed API calls. For
example, if an API call fails because the caller is not authorized to call that
API, or because the request referred to a resource that does not exist, the
action still counts as an authentication activity for the service account or
key that was used for that API call.
Authentication activities with a Google API outside of Google Cloud, such as
domain-wide delegation of
authority to Google Workspace APIs, aren't tracked by
Activity Analyzer or service account insights . To
track these authentication activities, use Cloud Monitoring
service account usage metrics .
Cloud Storage hash-based message authentication code (HMAC) authentication keys
don't generate authentication activities for either service accounts or service
account keys. For more information, see
HMAC keys .
Activity Analyzer
Preview
— Viewing service account and key authentication activities with Activity Analyzer
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Policy Intelligence's Activity Analyzer lets you view the most recent
authentication activities for your service accounts and
service account keys. The date of the most recent authentication activity is
determined based on US and Canadian Pacific Standard Time (UTC-8), even when
Pacific Daylight Time is in effect.
Use Activity Analyzer to identify unused service accounts and keys. With
Activity Analyzer, you can use your own definition of what it means for a
service account or key to be "unused." For example, some organizations might
define "unused" as 90 days of inactivity, while others might define "unused" as
30 days of inactivity.
We recommend disabling or deleting these unused service
accounts and keys because they create an unnecessary security risk. Cross
reference Activity Analyzer results with Cloud Monitoring service account
usage metrics before disabling or deleting a service account to prevent removing
service accounts that are in use with Google APIs outside of Google Cloud.
To learn how to view service account authentication activities, see View recent
usage for service accounts and keys .
Service account insights
Preview
— Service account insights
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Recommender provides service account insights, which identify the
service accounts in your project that haven't authenticated in the past
90 days. Use service account insights to quickly identify
unused service accounts.
We recommend that you disable or delete these unused service accounts because
they create an unnecessary security risk. Cross reference service account
insights with Cloud Monitoring service account usage metrics before
you disable or delete a service account. This approach prevents you from
removing service accounts that are in use with Google APIs outside of
Google Cloud.
To learn how to use service account insights, see Find unused service
accounts .
Service account usage metrics
Cloud Monitoring provides usage metrics for your service accounts and service
account keys. Usage metrics report each authentication
activity for your service accounts and service account keys.
Authentication activities for service account keys include any time a
system lists the keys while attempting to authenticate a request, even if the
system doesn't use the key to authenticate the request. This behavior is most
common when using signed URLs for Cloud Storage or when
authenticating to third-party applications.
Use service account usage metrics to track service account usage patterns over
time. These patterns can help you identify anomalies, either automatically
or manually.
To learn how to view service account usage metrics, see Monitor usage patterns
for service accounts and keys in the IAM
documentation.
Dormant service account detection
Event Threat Detection detects and reports when a dormant service account triggers
an action. Dormant service accounts are service accounts that have been inactive
for more than 180 days.
This feature is only available for customers with organization-level activations
of the Premium or Enterprise tier of
Security Command Center .
To learn how to view and remediate dormant service account action findings, see
Investigating and responding to threats .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
