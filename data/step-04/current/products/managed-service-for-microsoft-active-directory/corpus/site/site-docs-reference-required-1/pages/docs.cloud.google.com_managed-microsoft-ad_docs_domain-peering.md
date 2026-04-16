---
title: "Domain peering overview \_|\_ Managed Service for Microsoft Active Directory\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-peering
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/domain-peering
  title: "Domain peering overview \_|\_ Managed Service for Microsoft Active Directory\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Domain peering overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how domain peering works in Managed Service for Microsoft Active Directory (Managed Microsoft AD).
Managed Microsoft AD offers highly available and
hardened Microsoft Active Directory domains hosted by Google Cloud. Authorized networks make Managed Microsoft AD available on your VPC in the domain resource project. Domain peering makes Managed Microsoft AD available to non-domain-resource projects, such as VPC resource projects, as well.
How domain peering works
Managed Microsoft AD creates a domain peering resource in both the domain
resource project and the VPC resource project. This ensures that
both projects have visibility to peering and appropriate operators have provided
their consent before networks are connected.
After you have successfully configured a domain peering, Managed Microsoft AD VPC peers with the VPC networks and creates a Cloud DNS peering zone to provide seamless domain
discovery.
You must configure domain peering only after you create the domain . If a domain
already exists, you must
configure peering for both projects .
Note: When you configure multiple domain peerings with the same domain,
VPC networks can communicate with domain controllers over the peered
connection but can't communicate with each other. If there is a need for
VPC networks to communicate with each other, you need to create a separate peering since VPC peerings are non-transitive.
How domain peering differs from authorized network
Managed Microsoft AD domain supports adding up to 5 authorized networks from the domain resource project. Additionally, domain
peering lets you add up to 10 networks to the Managed Microsoft AD domain from other projects.
With Managed Microsoft AD domain peering, the authorized network originates
from projects other than the domain resource project. This functionality
provides the flexibility of sharing a single Managed Microsoft AD domain with multiple projects
and networks outside the domain resource project. This makes it possible to
use different deployment models such as hub and spoke.
What's next
Create a domain
Configure domain peering
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
