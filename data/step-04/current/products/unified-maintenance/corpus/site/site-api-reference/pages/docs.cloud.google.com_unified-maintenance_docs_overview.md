---
title: "Unified Maintenance overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/overview
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/overview
  title: "Unified Maintenance overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Guides
Send feedback
Unified Maintenance overview
Stay organized with collections
Save and categorize content based on your preferences.
Unified Maintenance is a service to manage planned maintenance across Google Cloud
services. Unified Maintenance provides Cloud Logging integration and sends
notifications with information about upcoming maintenance. Use these notifications
to prepare for scheduled changes affecting your workflows.
The Unified Maintenance service does the following:
Provides visibility into planned maintenance events.
Provides access to basic maintenance controls, such as reschedule or on-demand
updates.
Provides access to maintenance information through alerts using Cloud Logging.
Integrates maintenance information with your workflow using supported
Cloud Logging integrations, such as Slack, PagerDuty, or email.
Unified Maintenance integrates with Google Cloud services that are subject to
planned maintenance, which could cause your applications to experience disruptions.
Planned maintenance is any scheduled maintenance performed by Google that impacts
one or more customer resources. Impact to customer resources could manifest in
many ways. For example, you might experience downtime, reduced availability,
latency spikes, loss of connectivity, or performance degradation due to software
or hardware updates.
Not all Google Cloud products are subject to these kinds of disruptions during
maintenance. For more information, see the Supported services section. To learn if your region is supported, see the
Regions and zones section.
Unplanned incidents are not captured by Unified Maintenance. Incidents are any
unexpected downtime to a service, loss of connectivity, or degradation. Incidents
might be caused by a regional outage, hardware failure, or software defect.
To learn more about other service health events not covered by Unified Maintenance,
see the Personalized Service Health
documentation.
Unified Maintenance retention policy
Unified Maintenance deletes maintenance activity data after a 60-day
retention period. However, complete erasure of this data can take
up to 80 days total.
You may still see maintenance activity data in Google Cloud console while it's in
the process of being erased.
What's next
View maintenance activities
Set up Unified Maintenance
Access control with IAM
Log schema overview
Configure alerts and notifications
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
