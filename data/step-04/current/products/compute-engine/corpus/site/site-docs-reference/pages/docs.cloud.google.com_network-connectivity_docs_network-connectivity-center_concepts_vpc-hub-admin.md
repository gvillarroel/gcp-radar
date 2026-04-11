---
title: "Hub administration overview \_|\_ Network Connectivity Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/vpc-hub-admin
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/vpc-hub-admin
  title: "Hub administration overview \_|\_ Network Connectivity Center \_|\_ Google\
    \ Cloud Documentation"
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
Hub administration overview
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of the Network Connectivity Center (NCC) hub administrator role
( roles/networkconnectivity.hubAdmin ) .
An Identity and Access Management (IAM) principal who has the hub administrator role can
do the following:
Create a hub and create
Virtual Private Cloud (VPC) spokes for VPC networks that are in
the same project as the hub.
Give access to spoke administrators so
they can create VPC spoke proposals for VPC
networks located in different projects.
Review, accept, and reject VPC spoke
proposals or set up auto-accept for spoke groups .
View hub route tables .
Custom roles can also be used if they at least include the same permissions of
the NCC hub administrator role.
How VPC spokes join a hub
If a VPC network and an NCC hub are located in the
same project, creating a VPC spoke for the VPC
network immediately establishes connectivity to the hub without any additional
steps.
If a VPC network and an NCC hub are located in
different projects, the process for creating a VPC spoke is as
follows:
A hub administrator establishes IAM policy bindings that let
spoke administrators in other projects create VPC spoke
proposals .
Note: Hub administrators can change IAM policy bindings
at any time. For example, a hub administrator might revoke access later,
preventing a spoke administrator from creating additional spoke proposals.
This is true when auto-accept for spokes is
not enabled.
During hub creation, the hub administrator chooses the connectivity topology
between the default mesh topology and star topology.
A spoke administrator proposes a VPC
spoke . If the spoke proposal is for
a hub that is configured to use the star topology, the spoke
administrator assigns the spoke to either the center or the edge
group. For mesh topology, all spokes belong to the single default group.
A hub administrator reviews each spoke proposal, and then accepts or rejects
the proposal. The following describes how hub connectivity works following
accepting or rejecting a proposal:
A spoke becomes active only after a hub administrator accepts the spoke
proposal. NCC only provides network connectivity to
active spokes.
A hub administrator can reject a previously accepted VPC
spoke, making the spoke inactive. When a previously active
VPC spoke becomes inactive, NCC does not
provide network connectivity to the spoke.
How spoke update proposals work
When a VPC or a producer
VPC spoke exists in a project different from the hub, a hub
administrator must accept or reject update proposals unless auto-accept for
spokes is enabled. These spoke updates can be changes to the include or
exclude IPv4 subnet ranges ( Preview ).
For more information about updating
spokes, see Update a spoke .
Auto-accept projects
A hub administrator can enable auto-accept for spoke groups in a hub.
When enabled, VPC spokes located in the auto-accept projects
list are added or updated immediately after the VPC spoke
creation or update proposal. Manual review and approval from a hub
administrator is skipped.
The hub route table
The hub route table shows subnet routes imported from the VPC
spokes. When a new VPC spoke is created, all local subnet
routes from the VPC network are exported to the hub unless
the spoke administrator uses the exclude-export-ranges
flag
in the Google Cloud CLI or the excludeExportRanges field in the API. For more
information, see subnet route
uniqueness .
When you create a new VPC spoke, the following occurs:
A spoke belongs to exactly one group.
Each group has a corresponding route table.
Spokes are associated with that route table.
Spoke subnets are propagated to one or more route tables.
Because there is only one default group in a mesh topology connectivity, the
subnet routes are propagated to a single hub route table. Spokes connected to a
hub that supports star topology
belong to one of two different groups, namely, center and edge .
So, two hub route tables are generated, one associated with each
spoke group. Spokes in the center group have their subnet routes propagated
to the center and edge route tables. Spokes in the edge group have their subnet
routes propagated to the center route table.
For detailed information about connectivity topologies, see
Preset connectivity topologies .
Google Cloud automatically updates the VPC network route
table of each VPC spoke and the NCC hub route
table when any of the following occur:
You perform a subnet lifecycle activity ,
such as adding or deleting a subnet.
You add or remove VPC spokes from the hub.
For more information, see Route tables that show subnet
routes
and Routes in the VPC documentation.
What's next
To create hubs and spokes, see
Work with hubs and spokes .
To view a list of partners whose solutions are integrated with
NCC,
see NCC partners .
To find solutions for Router appliance issues, see
Troubleshooting .
To get details about API and gcloud commands, see
APIs and reference .
Note: For a Terraform solution that simplifies the setup of NCC hubs and various types of spokes, see the Terraform examples for NCC .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
