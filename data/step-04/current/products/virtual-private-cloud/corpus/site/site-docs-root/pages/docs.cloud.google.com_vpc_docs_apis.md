---
title: "APIs and reference \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/apis
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/apis
  title: "APIs and reference \_|\_ Virtual Private Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
APIs and reference
This page describes Google Cloud CLI commands and APIs that can be used with
Virtual Private Cloud (VPC) networks.
Most networking gcloud CLI commands and APIs are
part of Compute Engine. However, some services on this page use gcloud CLI commands
or APIs that are not part of Compute Engine— for example,
Serverless VPC Access and policy-based routes.
gcloud CLI and API references
Use the following resources and their methods when working with
VPC networks.
Addresses : Use to create internal and external IP address
resources, assign those address resources to Google Cloud resources, and modify
address resources.
gcloud ,
API
Firewall rules : Use to create and modify firewall rules
in your Google Cloud VPC network. Firewall rules enable you to allow or deny traffic to or from virtual machine (VM) instances based on IP addresses, protocol, and ports.
gcloud ,
API
Forwarding rules : Use to create and modify forwarding rules in your VPC
network. Forwarding rules tell the network where to send matching packets
that enter or pass through the network.
gcloud ,
API
Networks : Use to create, modify, and peer VPC networks.
gcloud ,
API
Private Service Connect : Use to access managed services and offer
managed services to service consumers.
Resources for service consumers: Use to access managed services privately
from inside your VPC network.
Endpoints: Use to access managed services. Endpoints are deployed by
using forwarding rules.
gcloud ,
API
Backends: Use to connect to supported managed services by using a load balancer.
Backends use Cloud Load Balancing resources. For more information,
see Cloud Load Balancing API and gcloud references .
Network attachments: Use to let service producer VPC networks initiate connections to consumer networks.
gcloud ,
API
Service connection policies: Use to automate deployment and connectivity
for eligible managed service instances.
gcloud ,
API
Resources for service producers: Use to host managed services in their own separate
VPC networks and offer a private connection to their consumers.
Service attachments: Use to publish services.
gcloud ,
API
Interfaces: Use to let service producer VPC networks initiate connections to consumer VPC networks.
gcloud ,
API
Routes : Use to create and modify VPC network routes.
Static routes: Use to manually configure instructions to
the VPC network for how to forward traffic
that is leaving VM instances.
gcloud ,
API
Policy-based routes: Use to forward traffic based on policies you create.
Policy-based routes have higher priority than static routes.
gcloud ,
API
Shared VPC : Use to share a VPC network with other
projects and control that sharing. In the API, modify these settings by
using the projects resource.
gcloud ,
API
Subnets : Use to create, modify, and delete subnets in a VPC network.
gcloud ,
API
Serverless VPC Access : Use to create, modify, and delete
Serverless VPC Access connectors.
gcloud ,
API
VPC Flow Logs : Use to monitor VPC
networks and understand your network usage.
Manage VPC Flow Logs configurations for subnets:
gcloud ,
API
Manage VPC Flow Logs configurations for VLAN
attachments for Cloud Interconnect and Cloud VPN tunnels:
gcloud ,
API
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
