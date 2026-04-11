---
title: "Differences between Google Cloud and AppNeta \_|\_ Network Intelligence Center\
  \ - Cloud Network Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/appneta-differences
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/appneta-differences
  title: "Differences between Google Cloud and AppNeta \_|\_ Network Intelligence\
    \ Center - Cloud Network Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Cloud Network Insights
Guides
Differences between Google Cloud and AppNeta
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes key differences between Google Cloud and AppNeta by Broadcom.
If you already have an AppNeta instance as part of your network
monitoring implementation, you can't combine your current AppNeta monitoring
solution with Cloud Network Insights. Cloud Network Insights is associated with
a unique AppNeta instance and can't be associated with a different instance.
Differences in identity and access management
While identity and access management is handled differently between the two
platforms, Google's Identity and Access Management
takes precedence over AppNeta's access control.
Any access granted to your Google user account grants the same access in
AppNeta.
Differences between alarms and alerts
In Cloud Network Insights, AppNeta uses alarms and alarm rules to generate
events and logs that are sent to Cloud Monitoring . Those logs can then be used to create alerts and notifications
in Cloud Network Insights.
Some of Google Cloud's logs and AppNeta's logs are different. The following
table maps the difference between alarm log severity.
AppNeta
Google
Warning
Notice
Minor
Warning
Major
Error
Critical
Critical
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
