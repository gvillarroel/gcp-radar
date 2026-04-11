---
title: "Availability and redundancy \_|\_ Google Cloud VMware Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/concepts-high-availability-vmware
  title: "Availability and redundancy \_|\_ Google Cloud VMware Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Availability and redundancy
Google Cloud VMware Engine provides availability for your applications running on VMware
in your private cloud environment. The following table lists failure scenarios
and the associated availability features that help protect your applications.
Failure scenario
Application protected?
VMware Engine HA feature
VMware HA feature
Google Cloud feature
Disk failure
Yes
Fast replacement of failed node
About the vSAN Default Storage Policy
N/A
Fan failure
Yes
Redundant fans, fast replacement of failed node
N/A
N/A
NIC failure
Yes
Redundant NIC, fast replacement of failed node
N/A
N/A
Host power failure
Yes
Redundant power supply
N/A
N/A
ESXi host failure
Yes
Fast replacement of failed node
VMware vSphere High Availability
N/A
VM failure
Yes
N/A
VMware vSphere High Availability
Load balancer for stateless VMware VMs
Leaf switch port failure
Yes
Redundant NIC
N/A
N/A
Leaf switch failure
Yes
Redundant leaf switches
N/A
N/A
Rack failure
Yes
Placement groups
N/A
N/A
Network connectivity to on-premises
Yes
Redundant networking services
N/A
Redundant Dedicated Interconnect and
Partner Interconnect circuits
Network connectivity
Yes
N/A
N/A
Redundant Dedicated Interconnect and
Partner Interconnect circuits
Regional failure
Yes
N/A
N/A
Hosting regions
Availability features
The following sections describe availability features.
Fast replacement of a failed node
VMware Engine continuously monitors the health of VMware clusters.
When VMware Engine detects an ESXi node failure, it adds a new ESXi
host to the affected VMware cluster from its pool of readily available nodes and
removes the failed node from the cluster. This feature quickly restores the
spare capacity in the VMware cluster, supporting the cluster's resiliency
provided by vSAN and VMware vSphere High Availability (HA).
VMware Engine zones
A VMware Engine zone is a logical collection of VMware resources that
are mapped to a Google Cloud zone. Sometimes zones are physically
co-located and might be impacted by zonal infrastructure failures.
If you require applications to remain operational during a
VMware Engine zone failure, we recommend that you distribute
redundant resources across different zones so you can safeguard your
applications and data from potential data center failures. To do this, we
recommend you deploy multiple
private clouds or a
stretched private cloud .
When zone separation is enabled, VMware Engine zones are mapped to the
same Google Cloud zones, with the following exceptions:
VMware Engine zone
Google Cloud zone
australia-southeast1-a
australia-southeast1-b †
australia-southeast1-b
australia-southeast1-c †
europe-west2-a
europe-west2-c †
europe-west2-b
europe-west2-a †
europe-west3-a
europe-west3-b †
europe-west3-b
europe-west3-a †
us-east4-a
us-east4-b †
us-east4-b
us-east4-a †
† When using zone separation.
Dedicated Interconnect locations
When designing on-premises to VMware Engine connectivity ,
the following Dedicated Interconnect locations correlate to the same VMware Engine
zone.
Communication from a specific VMware Engine zone to a
Google Cloud or Dedicated Interconnect location relies on
the Interconnect service for non-critical applications. For more information,
see the Cloud Dedicated and Partner Interconnect Service Level Agreement (SLA) .
VMware Engine zone
Dedicated Interconnect locations
asia-northeast1-a
AT Tokyo CC2 (nrt-zone1-738, nrt-zone2-738)
asia-south1-a
Equinix MB1 - Mumbai (GPX Mumbai 1) (bom-zone1-2310, bom-zone2-2310)
asia-south2-a
Sify Greenfort - Noida (del-zone1-2411, del-zone2-2411)
australia-southeast1-a
NEXTDC S1 (syd-zone1-1660, syd-zone2-1660)
europe-west12-a
Telecom Italia Cebrosa Campus (trn-zone1-99032, trn-zone2-99032)
europe-west2-a
Equinix London Slough (LD5) (lhr-zone1-832, lhr-zone2-832)
Equinix London Slough (LD6) (lhr-zone1-2262, lhr-zone2-2262)
europe-west3-a
Digital Realty Frankfurt FRA1-16 (fra-zone1-58, fra-zone2-58)
europe-west3-b
e-shelter Frankfurt (FRA1) (fra-zone1-277, fra-zone2-277)
europe-west6-a
greenDatacenter Lupfig (zrh-zone1-1086, zrh-zone2-1086)
europe-west8-a
Telecom Italia Sparkle Milano Data Center (mil-zone1-99013, mil-zone2-99013)
northamerica-northeast1-a
Cologix MTL10-H (yul-zone1-99002, yul-zone2-99002)
northamerica-northeast2-a
Equinix Toronto (TR2) (yyz-zone1-2206, yyz-zone2-2206)
southamerica-east1-a
Ascenty - Sao Paulo 2 (gru-zone1-7580, gru-zone2-7580)
southamerica-west1-a
GTD Panamericana (scl-zone2-99014, scl-zone2-99014)
us-east4-a
Equinix DC1-DC15, DC21 - Ashburn (iad-zone1-1, iad-zone2-1)
us-west2-a
Digital Realty LAX (600 West 7th) (lax-zone1-403, lax-zone2-403)
CoreSite - LA1 - One Wilshire (lax-zone1-19, lax-zone2-19)
Redundant networking services
All Google networking services for the private cloud (including firewall, public
IP addresses, internet, Dedicated Interconnect,
Partner Interconnect, and Cloud VPN) are highly available and
support the SLA.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
