---
title: "Monitor out-of-band integration \_|\_ Network Security Integration \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/out-of-band/monitor-out-of-band-integration
  title: "Monitor out-of-band integration \_|\_ Network Security Integration \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Security Integration
Guides
Send feedback
Monitor out-of-band integration
Stay organized with collections
Save and categorize content based on your preferences.
Packet Mirroring exports monitoring data about mirrored traffic to
Cloud Monitoring . You can use monitoring metrics to
check whether traffic from a virtual machine (VM) instance is being mirrored
as intended. For example, you can view the mirrored packet or byte count for
a particular instance.
For mirrored VM
instances, Packet Mirroring provides metrics specific to mirrored
packets, such as /mirroring/mirrored_packets_count ,
/mirroring/mirrored_bytes_count , and
/mirroring/dropped_packets_count . For more information, see the
metrics list for
Compute Engine in the Monitoring documentation.
View packet mirroring metrics in the Compute Engine console
Go to the VM instances page.
Go to the VM instances page
Select the project that contains the mirrored instance.
Click the name of the mirrored instance to view its details.
Click the Monitoring tab.
View the Mirrored Network Bytes and Mirrored Network Packets charts
to see the mirrored bytes and mirrored packets. The Mirrored Network Packets
chart shows the number of successful and dropped mirrored packets.
View the monitoring dashboard for a mirrored instance
To view the automatically created monitoring dashboard for a mirrored instance,
do the following:
In the Google Cloud console, go to the dashboard Dashboards page:
Go to Dashboards
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the All Dashboards pane, select the Mirrored Instances
from the list.
Click list List and then select the
name of a mirrored instance.
When you access the dashboard, Cloud Monitoring shows time series charts,
such as the number of packets mirrored.
Define Monitoring alerts
You can define
alerts
over the packet mirroring metrics:
In the Google Cloud console, go to the Monitoring page.
Go to Monitoring
Click Alerting .
Click Create Policy .
Click Add Condition and select condition type.
In the Metric tab, select a target.
For the resource type, VM Instance .
Select a packet mirroring metric .
Click Save Condition .
Enter a policy name in the Name this policy field and click
Save Policy .
Define custom dashboards
In addition to the predefined dashboards in Cloud Monitoring, you can
create custom dashboards, set up alert policies, and query the metrics through
the Cloud Monitoring API .
On the Cloud Monitoring dashboard, Open Incidents are
driven by the alerting policies that you configure. Alerts appear as incidents
on the dashboard when the alert is triggered. These are general functions of
Cloud Monitoring.
You can create custom Cloud Monitoring dashboards over packet mirroring
metrics:
In the Google Cloud console, go to the Monitoring page.
Go to Monitoring
Click Dashboards .
Click Create Dashboard .
Select a chart type to create.
Give the chart a title.
In the Metric tab, select a target.
For the resource type, VM Instance .
Select a packet mirroring metric .
Click Save .
Metric reporting frequency and retention
Metrics for the VPC security policies are exported to
Cloud Monitoring in 1-minute granularity batches. Monitoring data is
retained for six weeks. The dashboard provides data analysis in the following
default intervals:
1H (one hour)
6H (six hours)
1D (one day)
1W (one week)
6W (six weeks)
Using the controls in the upper-right hand corner of the Cloud Monitoring
page, you can manually request analysis in any interval from 6W to 1 minute.
For more information about Cloud Monitoring, see the
Cloud Monitoring documentation .
What's next
Network Security Integration overview
Out-of-band integration overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
