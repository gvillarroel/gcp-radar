---
title: "Monitoring Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/armor/docs/monitoring
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/armor/docs
source_metadata:
  url: https://docs.cloud.google.com/armor/docs/monitoring
  title: "Monitoring Cloud Armor security policies \_|\_ Google Cloud Armor \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Google Cloud Armor
Guides
Send feedback
Monitoring Cloud Armor security policies
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud Armor exports monitoring data from security policies to
Cloud Monitoring. You can use monitoring metrics to
check whether your policies are working as intended or to troubleshoot problems.
For example, you can view the traffic that was blocked or allowed for each
backend service. You can monitor the metrics of a single security policy
(which can be applied to multiple backend services) or a single backend service.
In addition to the predefined dashboards in Monitoring, you can
create custom dashboards, set up alert policies, and query the metrics through
the Cloud Monitoring API .
On the Monitoring dashboard, Open incidents are
driven by the alerting policies that you configure. Alerts appear as incidents
on the dashboard when the alert is triggered. These are general functions of
Monitoring.
There are no Monitoring logs for Security Command Center.
For complete information about Monitoring, see the
Cloud Monitoring documentation .
Viewing the monitoring dashboard
You can monitor the status and request traffic volumes (allowed, denied, or
previewed) on a per-policy and per-backend-service basis by using the
preconfigured Cloud Armor policies overview resource dashboard in
Cloud Monitoring.
To view the dashboard, follow these steps:
In the Google Cloud console, go to Monitoring .
Go to Monitoring
In the navigation pane on the left, select Dashboards .
Under Name , select Cloud Armor policies overview .
Click the name of your policy.
When you access the dashboard, you see overall metrics on the right. These
include request volume metrics for requests evaluated by a security policy
broken down by outcome: allowed, denied, previewed allowed, previewed denied.
Metrics can be observed at varying levels of granularity, including
per-project, per-policy, and per-backend-service.
When you click a policy name, you see details about the policy.
Cloud Armor monitoring dashboard (click to
enlarge)
Defining custom dashboards
To create custom Monitoring dashboards over Network Security
Policy metrics, follow these steps:
Console
In the Google Cloud console, go to Monitoring .
Go to Monitoring
Click Dashboards , and then click Create dashboard .
Create a name for your dashboard, and then click Confirm .
Click Add chart .
Give the chart a title.
Select metrics and filters. For metrics, the resource type is Network
Security Policy .
Click Save .
Defining alerting policies
Console
You can create alerting policies to monitor the values of metrics and to notify you when
those metrics violate a condition.
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
If you haven't created your notification channels and if you want to be notified, then click
Edit Notification Channels and add your notification channels. Return to the
Alerting page after you add your channels.
From the Alerting page, select Create policy .
To select the metric, expand the Select a metric menu and then do the following:
To limit the menu to relevant entries, enter Network Security Policy
into the filter bar. If there are no results after you filter the menu, then disable
the Show only active resources & metrics toggle.
For the Resource type , select Network Security Policy .
Select a Metric category and a Metric , and then select Apply .
Click Next .
The settings in the Configure alert trigger page determine when the alert is triggered.
Select a condition type and, if necessary, specify a threshold. For more
information, see
Create metric-threshold alerting policies .
Click Next .
Optional: To add notifications to your alerting policy, click
Notification channels . In the dialog, select one or more notification
channels from the menu, and then click OK .
Optional: Update the Incident autoclose duration . This field determines when
Monitoring closes incidents in the absence of metric data.
Optional: Click Documentation , and then add any information that you
want included in a notification message.
Click Alert name and enter a name for the alerting policy.
Click Create Policy .
For more information, see Alerting overview .
Metric reporting frequency and retention
Metrics for the Cloud Armor security policies are exported to
Cloud Monitoring in one-minute granularity batches. Monitoring data is
retained for six weeks. The dashboard provides data analysis in the following
default intervals:
1H (one hour)
6H (six hours)
1D (one day)
1W (one week)
6W (six weeks)
To manually request analysis in any interval from 6W to 1 minute, use the
Google Cloud console controls on the Monitoring page.
Monitoring metrics for security policies
The following metrics are reported on the Cloud Armor policies overview
dashboard:
Metric
Description
Requests count
The number of requests processed by a Cloud Armor security
policy.
Previewed Requests count
The number of requests that match preview-mode rules. Previewed
Requests are logged, but the corresponding action is not enforced.
The Previewed Requests counts are included in the preceding
Requests count metric because all requests are expected to match
a configured non-preview rule or the default rule.
Filtering dimensions for security policies
Metrics are aggregated for each Cloud Armor security policy. You can
filter aggregated metrics by the following dimensions:
Dimension
Description
backend_target_name
Track requests based on the backend target (service) that the
traffic was destined to.
blocked
Track requests based on whether they were allowed or blocked by the
security policy rules.
What's next
Troubleshoot issues
Use the custom rules language reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
