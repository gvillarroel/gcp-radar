---
title: "Apigee Analytics release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/analytics/release-notes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/analytics/release-notes
  title: "Apigee Analytics release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Resources
Send feedback
Apigee Analytics release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Apigee Analytics/API Monitoring in 2022 and later. We recommend that users periodically check this list for any new announcements, or subscribe to this page using a feed reader to get notifications of updates.
What is a feed reader?
What is a feed reader?
Really simple syndication (RSS) feed readers aggregate content from
websites that you specify.
Feed reader notifications can be email-, browser-, desktop-, or
mobile-based. Some readers are free, or have free versions, and some
require a subscription.
A few examples:
Feedly
Feedreader
Feeder
More information on RSS:
RSS
Comparison of feed aggregators
Close
See also:
2021 and prior Release notes
Known issues
rss_feed Subscribe:
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
November 17, 2025
Announcement
On November 17, 2025 we released an updated version of Apigee Analytics.
Feature
Support for aggregate data in Error Code Analysis, Cache Performance, and Target Performance charts
Announcing support for viewing aggregate data in the Error Code Analysis, Cache
Performance, and Target Performance Analytics dashboards.
For information on the Analytics dashboards, see
Use the Analytics dashboards .
November 10, 2025
Announcement
On November 10, 2025 we released an updated version of Apigee.
Feature
Support for new Apigee Analytics regions
This release introduces Apigee Analytics support for these new regions:
Hong Kong ( asia-east2 ) and São Paulo ( southamerica-east1 ).
NOTE: Apigee Advanced API Security does not support these new regions at this
time.
For a list of all of the supported Analytics regions, see
Available Apigee API Analytics regions .
June 23, 2025
Announcement
On June 23, 2025 we released an updated version of Apigee.
Announcement
On June 23, 2025 we released an updated version of Apigee.
Feature
Addition of AppGroup-specific Analytics dimensions for Custom Reports
This release introduces two new AppGroups Analytics dimensions: AppGroup Name and AppGroup App Name .
Use these dimensions with custom reports and report jobs to group metrics by a specific AppGroup or a specific app within an AppGroup.
For additional information see Analytics dimensions and Creating and managing custom reports .
Feature
Addition of AppGroup-specific Analytics dimensions for Custom Reports
This release introduces two new AppGroups Analytics dimensions: AppGroup Name and AppGroup App Name .
Use these dimensions with custom reports and report jobs to group metrics by a specific AppGroup or a specific app within an AppGroup.
For additional information see Analytics dimensions and Creating and managing custom reports .
June 16, 2025
Announcement
On June 16, 2025 we released an updated version of Apigee Analytics and the Apigee UI.
Announcement
On June 16, 2025 we released an updated version of Apigee Analytics and the Apigee UI.
Feature
Starting with this release, the API proxy performance dashboard includes aggregate metrics such as the average TPS (transactions per second) with each chart.
For information and usage instructions for the API proxy performance dashboard, see the API proxy performance dashboard customer documentation .
Feature
Starting with this release, the API proxy performance dashboard includes aggregate metrics such as the average TPS (transactions per second) with each chart.
For information and usage instructions for the API proxy performance dashboard, see the API proxy performance dashboard customer documentation .
April 15, 2025
Announcement
On April 15, 2025 we released an updated version of Apigee Analytics and the Apigee UI.
Announcement
On April 15, 2025 we released an updated version of Apigee Analytics and the Apigee UI.
Change
Starting with this release, the Analytics dashboards available in the Apigee Classic UI redirect to the comparable dashboards in Apigee UI in Cloud console. These dashboards are available exclusively in the Apigee UI in Cloud console going forward.
For information and usage instructions for the Analytics dashboards, see Apigee API Analytics overview .
Change
Starting with this release, the Analytics dashboards available in the Apigee Classic UI redirect to the comparable dashboards in Apigee UI in Cloud console. These dashboards are available exclusively in the Apigee UI in Cloud console going forward.
For information and usage instructions for the Analytics dashboards, see Apigee API Analytics overview .
June 09, 2023
Announcement
On June 9, 2023 we released an updated version of Apigee X.
Fixed
Bug ID
Description
286452898
Previously, the Apigee Analytics topk query parameter, which returns the top k results for a query, always returned the results in descending order, even when the order parameter was ASC . This has been fixed: results are now sorted according to the order parameter before returning the top k entries.
March 24, 2022
Announcement
On March 24, 2022, we released a new version of the Apigee Analytics software.
We welcome your feedback about the anomaly events feature in Advanced API Operations. If you have received an anomaly alert, you can send feedback about the alert in the API Monitoring Investigate dashboard by clicking the Anomaly Feedback button at the top of the Anomaly Event Details pane.
March 24, 2021
Announcement
On March 24, 2021 we released an updated version of the Apigee Analytics software.
Feature
Advanced API Operations
This is the GA release of Apigee's Advanced API Operations (AAPI Ops), which provides tools to help you ensure that your APIs stay up and running as intended. AAPI Ops automatically detects unusual patterns in API traffic—called anomalies—such as spikes in latency or error rate.
AAPI Ops enables you to:
Detect anomalies and view them in the Anomaly Events dashboard
Investigate anomalies
Create anomaly alerts
February 05, 2021
Announcement
On February 5, 2021 we released an updated version of the Apigee Analytics software.
Feature
Recent view
The new API Monitoring Recent view displays treemaps of API traffic by proxy. A treemap displays traffic data for each proxy as a rectangle, whose size is proportional to the amount of traffic in the proxy. The colors of the rectangle indicate the relative sizes of the following variables:
Number of incidents triggered by alerts .
Error rate
Maximum latency 50th percentile (median)
See Using the Recent view .
Feature
Additional channels for sending alert notifications
Apigee API Monitoring now supports the following channels for sending alert notifications:
Email
PagerDuty
Slack
Webhooks
See Creating a notification for an alert .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
