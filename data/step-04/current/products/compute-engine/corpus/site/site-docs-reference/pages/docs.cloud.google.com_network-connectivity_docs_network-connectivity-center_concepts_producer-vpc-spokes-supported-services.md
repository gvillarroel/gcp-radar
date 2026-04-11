---
title: "Supported services for producer VPC spokes \_|\_ Network Connectivity Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/producer-vpc-spokes-supported-services
  title: "Supported services for producer VPC spokes \_|\_ Network Connectivity Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Network Connectivity Center
Guides
Send feedback
Supported services for producer VPC spokes
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the services supported with producer Virtual Private Cloud spokes.
To use a producer VPC spoke, the service must be consumed by
using private services access or
VPC Network Peering . That is, the
name of the peering connection between your VPC network and the
producer VPC network must be servicenetworking-googleapis-com .
The following Google services consumed through private services access can be
used with producer VPC spokes.
If you're using Google Cloud NetApp Volumes ,
the name of the peering connection must be sn-netapp-* .
For detailed information, see the following resources:
For information about configuring private service access, see Configure private services access .
For information about producer Virtual Private Cloud (VPC) spokes in
Network Connectivity Center (NCC), see Producer VPC spokes .
The following Google services consumed through private services access
can be used with producer VPC spokes.
AlloyDB for PostgreSQL
Apigee
Cloud Build
Cloud SQL
Google Cloud NetApp Volumes
Looker (Google Cloud core)
Memorystore for Memcached
Memorystore for Redis
Parallelstore
Vertex AI
You can check whether a service producer exports only subnet routes by
listing peering routes and
ensuring that the associated peering connection only has routes of type
Peering subnet .
Producer VPC spokes don't support third-party services.
What's next
Create a producer VPC spoke
Troubleshoot NCC
Get details about API and gcloud commands
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
