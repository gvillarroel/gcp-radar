---
title: "Cloud Workstations platform logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/platform-logging
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/platform-logging
  title: "Cloud Workstations platform logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Cloud Workstations platform logging
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Google Cloud platform logs created by
Cloud Workstations.
Overview
Cloud Logging receives, indexes, and stores platform log entries from
Google Cloud services, such as Cloud Workstations. Platform logs are
system-defined, service-specific logs that can help you debug and troubleshoot
issues, as well as better understand the Google Cloud
services you're using.
User-defined
audit logging
is chargeable and logs activity when a user updates resources.
Platform logging ,
however, is non-chargeable and logs activity when Cloud Workstations assigns
resources to a workstation.
Cloud Workstations creates the following types of platform logs:
Disk assignments: Logs when Cloud Workstations assigns a persistent disk
to a workstation. The logName field of this platform log ends with
disk_assignments and can be selected by updating the Logs Explorer
with the query logName=projects/$PROJECT/logs/workstations.googleapis.com%2Fdisk_assignments .
Instance assignments: Logs when Cloud Workstations assigns a VM instance
to a workstation. These logs contain the VM name, VM ID, internal IP address,
and external IP address (if present). The logName field of this platform
log ends with vm_assignments and can be selected by updating the
Logs Explorer with the query
logName=projects/$PROJECT/logs/workstations.googleapis.com%2Fvm_assignments .
Workstation shutdowns: Logs when Cloud Workstations shuts down a workstation
and unassigns the VM instance. These logs contain the VM name, VM ID, internal IP address,
and external IP address (if present). The logName field of this platform
log ends with workstation_shutdowns and can be selected by updating the
Logs Explorer with the query
logName=projects/$PROJECT/logs/workstations.googleapis.com%2Fworkstation_shutdowns .
For information about how to view Cloud Workstations logs in
Logs Explorer ,
see
View logs .
What's next
Learn more about
Cloud Workstations logging API .
Understand and manage
Google Cloud platform logs .
Learn more about
Cloud Workstations audit logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
