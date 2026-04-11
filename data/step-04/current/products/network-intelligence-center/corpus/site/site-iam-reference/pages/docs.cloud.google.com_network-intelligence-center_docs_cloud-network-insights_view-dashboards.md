---
title: "View dashboards \_|\_ Network Intelligence Center - Cloud Network Insights\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/view-dashboards
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/view-dashboards
  title: "View dashboards \_|\_ Network Intelligence Center - Cloud Network Insights\
    \ \_|\_ Google Cloud Documentation"
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
View dashboards
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
Dashboards provide high-level insights into your network that you can use to
further troubleshoot it. You can view metrics from network paths and
web paths.
Network paths dashboard
The default network paths dashboard is automatically filtered to the paths you
selected before you clicked Open Dashboard .
For paths where the target is not another Monitoring Point (single-ended), the
dashboard displays the following key metrics:
Avg. RTT
AVG. loss
Average RTT for NetworkPath (MEAN)
Maximum RTT for NetworkPath (MAX)
Connectivity Loss
Total Jitter for NetworkPath (Single-Ended) (SUM)
Test Error for NetworkPath (SUM)
Single ended data packets received and sent
For paths where the target is another Monitoring Point (dual-ended), the
dashboard displays the following key metrics:
Avg. RTT
AVG. loss
Average RTT for NetworkPath (MEAN)
Maximum RTT for NetworkPath (MAX)
Connectivity Loss (Inbound)
Connectivity Loss (Outbound)
Total Jitter for NetworkPath (Single-Ended) (SUM)
Dual ended inbound data packets received and sent
Dual ended outbound data packets received and sent
Web paths dashboard
The default web paths dashboard is automatically filtered to the paths you
selected before you click Open Dashboard . It displays the following key
metrics:
Average Total HTTP response time
Total transaction time
Failed test status for web path
Failed HTTP test status for WebPath (filtered) (SUM)
HTTP download size for WebPath (MAX)
HTTP download size for WebPath (MEAN)
HTTP download speed for WebPath (MEAN)
Maximum total response time for WebPath
Request Receive HTTP response time for WebPath (MEAN)
DNS Lookup HTTP response time for WebPath (MEAN)
TCP Connect HTTP response time for WebPath (MEAN)
SSL Connect HTTP response time for WebPath (MEAN)
Access the Cloud Network Insights dashboards
Cloud Network Insights provides predefined dashboards prepopulated with common
troubleshooting metrics for your selected network or web paths.
Open the Google Cloud console and go to Network Intelligence >
Cloud Network Insights .
Go to Cloud Network Insights
Open either the Network Paths tab or the Web Paths tab.
Select one or more paths, and then click Open Dashboard .
Update dashboards
To modify the dashboard, or to perform more in-depth analysis, you can also
create custom dashboards using the Metrics Explorer in Cloud Monitoring .
Cloud Network Insights metrics are listed with the
*networkmanagement.googleapis.com/insights/* prefix.
Network Metrics: networkmanagement.googleapis.com/insights/network/
Web Metrics: networkmanagement.googleapis.com/insights/web/
See Monitoring metrics for a full list and
descriptions.
Monitoring scale limits
Cloud Monitoring has a soft scale limit of 10,000 total MonitoredResources per
project. For Cloud Network Insights, this total includes all Monitoring Points,
network paths, and web paths combined.
Exceeding this limit can result in significant performance degradation within
Cloud Monitoring, including slow query results, dashboard failures, or
unreliable alerting. Operating beyond this threshold is not recommended, as
monitoring tools may not function as expected.
View additional analytics in AppNeta
Use AppNeta when you need information like hop-by-hop analysis to identify
which router in a path is dropping packets or waterfall charts for seeing which
specific component of a web page is slow to load.
You can view additional details in AppNeta by doing one of the following:
Click the Actions menu on any Path or Monitoring Point in the Cloud Network Insights
UI and select Open in AppNeta .
In Cloud Logging, every alarm entry includes a provider_link in the
jsonPayload . Clicking this link takes you directly to the diagnostic view
for that specific incident in AppNeta.
For more information about the information you can view in AppNeta, see
Analyze Network Monitoring Results
in the AppNeta documentation.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
