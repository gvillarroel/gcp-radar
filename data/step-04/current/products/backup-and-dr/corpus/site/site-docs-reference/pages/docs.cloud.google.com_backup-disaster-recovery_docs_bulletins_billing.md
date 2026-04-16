---
title: "Announcement of pricing changes for protecting Google Cloud VMware Engine\
  \ workloads \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/bulletins/billing
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/bulletins/billing
  title: "Announcement of pricing changes for protecting Google Cloud VMware Engine\
    \ workloads \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Send feedback
Announcement of pricing changes for protecting Google Cloud VMware Engine workloads
Stay organized with collections
Save and categorize content based on your preferences.
This page contains pricing updates which was rolled out on August 10, 2023 .
The pricing model for backing up Google Cloud VMware Engine has been moved from a
usage-based model to a flat-rate model. Users backing up Google Cloud VMware Engine
are billed at a fixed price per node, thereby simplifying the pricing
and leading to better cost predictability. The updated pricing model is
described in the tables below.
The existing pricing is as follows:
Products / SKUs - Backup
Pricing model
Meter
List price
VM data: Cloud VMs, On-Premises VMs, File Systems
Usage-based
Per GiB-mo of source (front-end) capacity under protection
$0.03 / GiB-month
The new pricing is as follows:
Products / SKUs - Backup
Location
Pricing model
Meter
List price
VMware Protected Standard 72 VCPU Node (asia-northeast1)
Tokyo
Node-based
hourly per node
$0.53
VMware Protected Standard 72 VCPU Node (asia-south1)
Mumbai
Node-based
hourly per node
$0.51
VMware Protected Standard 72 VCPU Node (asia-southeast1)
Singapore
Node-based
hourly per node
$0.51
VMware Protected Standard 72 VCPU Node (australia-southeast1)
Sydney
Node-based
hourly per node
$0.51
VMware Protected Standard 72 VCPU Node (europe-west2)
London
Node-based
hourly per node
$0.53
VMware Protected Standard 72 VCPU Node (europe-west3)
Frankfurt
Node-based
hourly per node
$0.53
VMware Protected Standard 72 VCPU Node (europe-west4)
Netherlands
Node-based
hourly per node
$0.53
VMware Protected Standard 72 VCPU Node (europe-west6)
Zurich
Node-based
hourly per node
$0.58
VMware Protected Standard 72 VCPU Node (northamerica-northeast1)
Montreal, Quebec
Node-based
hourly per node
$0.51
VMware Protected Standard 72 VCPU Node (northamerica-northeast2)
Toronto, Ontario
Node-based
hourly per node
$0.51
VMware Protected Standard 72 VCPU Node (southamerica-east1)
São Paulo
Node-based
hourly per node
$0.66
VMware Protected Standard 72 VCPU Node (us-central1)
Council Bluffs, Iowa
Node-based
hourly per node
$0.46
VMware Protected Standard 72 VCPU Node (us-east4)
Ashburn
Node-based
hourly per node
$0.46
VMware Protected Standard 72 VCPU Node (us-west2)
Los Angeles
Node-based
hourly per node
$0.50
VMware Protected Standard 72 VCPU Node (europe-west8)
Milan
Node-based
hourly per node
$0.54
The pricing is calculated based on the number of ESXi nodes that are being
protected. A ESXi node is considered to be protected if one or more of VMs
attached to it are being protected by Backup and DR Service.
Below is an example that demonstrates the billing process under the new pricing model:
Price to backup a single Google Cloud VMware Engine node (VM backups only)
in us-central1 region for a month =
(List price to backup the node/ hour) X (No. of hours in a day node is active) X (No. of days in a month).
Considering the Google Cloud VMware Engine node is active for 24 hours,
there are 30 days in a month, and the price to backup a node are $0.46 X 24 X 30 = $331 USD .
Starting August 10, 2023 , revised pricing are applicable to both
current and new Google Cloud Backup and DR Service customers, protecting
Google Cloud VMware Engine workloads.
All existing Google Cloud Backup and DR Service customers protecting
Google Cloud VMware Engine workloads need to update all their backup/recovery appliances
on 11.0.5 version or later, to adopt the new pricing model.
See the pricing update related FAQs .
If you have additional questions or need assistance, drop an email at
migrate-to-gcve-protected@google.com .
Thanks for choosing Google Cloud Backup and DR Service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
