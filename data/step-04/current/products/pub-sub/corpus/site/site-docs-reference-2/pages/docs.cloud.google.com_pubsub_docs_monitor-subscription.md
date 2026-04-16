---
title: "Monitor subscriptions within Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/monitor-subscription
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/monitor-subscription
  title: "Monitor subscriptions within Pub/Sub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Guides
Send feedback
Monitor subscriptions within Pub/Sub
Stay organized with collections
Save and categorize content based on your preferences.
You can use the Google Cloud console to access the monitoring dashboard
for a single subscription or all the subscriptions available in your project.
Key Point: Learn how to access the monitoring dashboard for Pub/Sub
subscriptions, understand some key metrics, and learn how to create a custom
monitoring experience.
Before you begin
Ensure that you've prepared the following:
A Cloud Billing account
A Pub/Sub project with billing enabled
At least one topic with a subscription in your Pub/Sub project
Familiarity with Cloud Monitoring
and Metrics Explorer
View the monitoring dashboard for all subscriptions
To view the monitoring dashboard for all the subscriptions
in a project, perform the following steps:
In the Google Cloud console, go to the Pub/Sub Subscriptions page.
Go to Subscriptions
Click the Metrics tab.
The monitoring dashboard is displayed for all subscriptions in the project.
The monitoring dashboard has two sections: Overview and Quota .
View the monitoring dashboard for a single subscription
To view the monitoring dashboard for a single subscription
in a project, perform the following steps:
In the Google Cloud console, go to the Pub/Sub Subscriptions page.
Go to Subscriptions
In the Subscriptions page, click any subscription.
The subscription details page is displayed.
Within the subscription details page, click the Metrics tab.
The monitoring dashboard is displayed for the single subscription.
The monitoring dashboard has four sections: Overview , Health ,
Retention , and Pull or Push , depending on your subscription type.
You can see the Retention section only if you enable message retention for
the subscription.
Customize the monitoring dashboard
You can create a custom dashboard or add individual charts to an
existing custom dashboard.
To create a custom dashboard, perform the following steps:
Follow the steps to go to the monitoring page for all subscriptions or for
a single subscription .
Choose one of the following options:
To create a new dashboard containing all the charts, or to add all the
charts to an existing custom dashboard, click Save as custom dashboard .
To add a single chart to a new or custom dashboard, in an individual chart,
expand the more_vert
More Actions option and click Add to custom dashboard .
You can view all your dashboards in the Monitoring console.
Modify a chart
To modify a chart, perform the following steps:
Follow the steps to go to the monitoring page for all subscriptions or for
a single subscription .
In an individual chart, expand the more_vert
More Actions option and click View in Metrics Explorer .
The chart opens in Metrics Explorer .
You can use PromQL queries to make changes to your
chart and test the output.
Click Save chart to save the changes.
Create an alerting policy
Creating an alerting policy for a chart lets you set up an alert that monitors the
metric, configure the circumstances under which you want to be
alerted, and configure how you want to be notified.
For more information on how to create alerts, see Create metric-based alert policies .
Some charts might not offer a Create alerting policy option.
In this case, perform the following steps:
Save the chart to a custom dashboard.
In the custom dashboard, for the individual chart, expand
the more_vert More Actions option.
Click Convert to alert chart .
Key charts to monitor subscriptions
Although there are a number of charts available to monitor your subscription,
the following charts are a good starting point to check the
status of a single subscription:
The Oldest unacked message chart in the
Health section lets you check if any messages are taking a long time
to be acknowledged after being published.
The Unacked messages by region chart in the Overview section lets you
check the number of unacknowledged messages in each region for the subscription.
The Delivery latency health score chart in the Health section lets you
check which factors may be contributing to an increased delivery latency. For
more information about this metric, see
Monitor delivery latency health .
The following chart in the Quota section help you monitor quotas for
all the subscriptions in your project:
The Administrator operations chart lets you monitor administrative
operations regarding subscriptions. Each administrator operation charges one
unit against this quota.
For more information, see Pub/Sub quotas and limits .
What's next
To monitor topics, see Monitor topics within Pub/Sub .
To learn more about using PromQL to build
monitoring charts, see Using the Query Editor .
To learn more about maintaining a healthy subscription, see Maintain a healthy subscription .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
