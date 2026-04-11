---
title: "Best practices for Cloud Network Insights \_|\_ Network Intelligence Center\
  \ - Cloud Network Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/best-practices
  title: "Best practices for Cloud Network Insights \_|\_ Network Intelligence Center\
    \ - Cloud Network Insights \_|\_ Google Cloud Documentation"
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
Best practices for Cloud Network Insights
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
This page describes the best practices for monitoring your networks
with Cloud Network Insights.
Enable in a dedicated Google Cloud project
While you can enable Cloud Network Insights in any Google Cloud project, we
recommend creating a new, dedicated project for enabling Cloud Network Insights. You can
monitor other Google Cloud projects by deploying a Monitoring Point to them.
We don't recommend adding a Monitoring Point to the project with Cloud Network Insights
enabled.
Deploy to the location you want to monitor
We recommend deploying one Monitoring Point to each location you want to
monitor, such as on-premises networks, data centers, or Google Cloud regions.
In addition, what you want to monitor determines where you deploy Monitoring
Points. For example, if you want to monitor the user experience for a web app,
deploy a Monitoring Point in the same network environment. The closer you can
get to deploying in the same subnet, location, VLAN, etc., the more closely you
can monitor the user experience.
Learn more about deployment Best
Practices from AppNeta .
Deploy a single-purpose container or VM first
Before deploying a Monitoring Point, deploy one of the following to the
network that includes the application you want to monitor.
A container on a VM
A container on Google Kubernetes Engine
VM on KVM
VM on VmWare
Then install the Monitoring Point on the fresh container or VM.
We don't recommend installing a Monitoring Point directly with the workload you
want to monitor. This isolates the Monitoring Point from other applications,
preventing resource contention and ensuring more reliable monitoring results.
Use multiple severities when creating alarm rules
When creating alarm rules, define multiple rules for the same metric. With
multiple levels, you can create different notifications.
For example, create an alarm rule with a Minor severity level in AppNeta and
a second alarm rule with a Major severity level. You can then create
notifications that send information for the Minor alert to a chat and the
information for the Major alert to a pager.
For more alarm best practices, see the AppNeta
documentation .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
