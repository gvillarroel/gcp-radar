---
title: "Restrict VM interaction to Confidential VM only \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/restrict-confidential-vm-interaction
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/restrict-confidential-vm-interaction
  title: "Restrict VM interaction to Confidential VM only \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Confidential VM
Guides
Send feedback
Restrict VM interaction to Confidential VM only
Stay organized with collections
Save and categorize content based on your preferences.
You can set up a security perimeter that makes sure your Confidential VM instances
can only interact with other Confidential VM instances. This is achieved with the
following services:
Shared Virtual Private Cloud (VPC) networks
Organization policy constraints
Firewall rules
A security perimeter can be established around Confidential VM instances that
reside inside the same project, or in separate projects.
Required roles
To get the permissions that
you need to create a security perimeter,
ask your administrator to grant you the
following IAM roles on the organization:
Organization Administrator ( roles/resourcemanager.organizationAdmin )
Compute Shared VPC Admin ( roles/compute.xpnAdmin )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Instance Admin ( roles/compute.instanceAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
To learn more about these roles, see Required administrative
roles in the Shared
VPC overview .
Create a Confidential VM perimeter
To create a security perimeter around your Confidential VM instances, complete the
following instructions:
Create a folder in your
organization called confidential-perimeter .
Inside the folder,
create a shared VPC host project .
This defines the Confidential VM perimeter.
After you've created a VPC host project, share the project by
granting your networking team access.
Enforce the perimeter
To prevent
service projects
from allowing non-Confidential VM instances from interacting with the perimeter,
apply the following organization policy constraints
to your confidential-perimeter folder as indicated.
Constraint
Value
Description
constraints/compute.restrictNonConfidentialComputing
deny compute.googleapis.com
Forces all service projects to create Confidential VM instances only.
constraints/compute.restrictSharedVpcHostProjects
under: FOLDER_ID
Prevents projects inside the perimeter from creating another Shared
VPC host project. Replace FOLDER_ID with the
ID
of your confidential-perimeter folder.
constraints/compute.restrictVpcPeering
is: []
Prevents service projects from peering network and network connections
outside of the perimeter.
constraints/compute.vmExternalIpAccess
is: []
Forces all Confidential VM instances in service projects to use internal
IPs.
constraints/compute.restrictLoadBalancerCreationForTypes
allowedValues: ["INTERNAL_TCP_UDP", "INTERNAL_HTTP_HTTPS",]
Prevents all VM instances from defining an internet-visible ingress
point. You may override this for specific projects in your perimeter
that should have ingress—for example, your perimeter network.
To control network data transfer outside of the perimeter, use
VPC firewall rules .
What's next
You can use VPC Service Controls to extend the security perimeter to cover
Google Cloud resources. To learn more, see Overview of
VPC Service Controls .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
