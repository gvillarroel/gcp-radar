---
title: "Enable Cloud Network Insights \_|\_ Network Intelligence Center - Cloud Network\
  \ Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/enable-network-insights
  title: "Enable Cloud Network Insights \_|\_ Network Intelligence Center - Cloud\
    \ Network Insights \_|\_ Google Cloud Documentation"
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
Enable Cloud Network Insights
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
This page describes how to enable Cloud Network Insights for your organization.
Once Cloud Network Insights is enabled, a corresponding AppNeta instance is
provisioned to provide telemetry data, more monitoring options, and to allow
further configuration.
Cloud Network Insights is enabled for a single project. We highly recommend
that you create a dedicated project for enabling Cloud Network Insights where you don't
create other Google Cloud resources.
Before you begin
During the Preview period, contact your Technical Account Manager to
request access to Cloud Network Insights.
Ensure billing is
enabled
for your project.
You must have the following roles to enable Cloud Network Insights:
Service Usage Admin
( roles/serviceusage.serviceUsageAdmin ): To enable the Network Management API.
Cloud Network Insights Editor
( roles/networkmanagement.CloudNetworkInsightsEditor ): To enable
Cloud Network Insights and editing permissions for Cloud Network Insights
resources.
Enable Cloud Network Insights
Open the Google Cloud console and navigate to Network Intelligence >
Cloud Network Insights .
Go to Cloud Network Insights
If the page fails to load, reach out to your
Technical Account Manager to verify that your project has been granted access.
Click Enable .
If you haven't enabled the Network Management API already, click
Enable . This can take up to 10 minutes to complete.
Review the Broadcom Terms of Service.
To enable Cloud Network Insights, accept the Broadcom End User Agreement and then
click Accept .
What's next
Review best practices
Learn how to log on to AppNeta
Add a Monitoring Point
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
