---
title: "Roles and permissions \_|\_ Network Intelligence Center - Network Topology\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/access-control
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/access-control
  title: "Roles and permissions \_|\_ Network Intelligence Center - Network Topology\
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
Network Topology
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Roles and permissions
This page describes the permissions that you need to carry out tasks in
Network Topology.
Required roles and permissions
To get the permissions that
you need to carry out tasks in
Network Topology,
ask your administrator to grant you the
following IAM roles on your project:
Network Management Viewer ( roles/networkmanagement.viewer )
Monitoring Viewer ( roles/monitoring.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to carry out tasks in
Network Topology. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to carry out tasks in
Network Topology:
Open a project:
resourcemanager.projects.get
View the Network Topology graphs for a project and monitored projects:
networkmanagement.topologygraphs.read
View the metrics on the Network Topology graph:
monitoring.timeSeries.list
You might also be able to get
these permissions
with custom roles or
other predefined roles .
To view multiple projects, you need to have the networkmanagement.topologygraphs.read
permission for the scoping project . For more
information, see View metrics for multiple Cloud projects .
For more information about using Network Topology to visualize resources from
multiple projects, see
Multiple projects .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
