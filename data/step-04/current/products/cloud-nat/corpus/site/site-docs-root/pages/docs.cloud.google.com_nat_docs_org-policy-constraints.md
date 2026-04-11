---
title: "Organization policy constraints \_|\_ Cloud NAT \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/nat/docs/org-policy-constraints
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/nat/docs
source_metadata:
  url: https://docs.cloud.google.com/nat/docs/org-policy-constraints
  title: "Organization policy constraints \_|\_ Cloud NAT \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NAT
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Organization policy constraints
This page provides information about the organization
policy constraints
that you can configure for Cloud NAT.
Network administrators can create Cloud NAT configurations and
specify which subnetworks (subnets) can use the gateway. By default, there
are no limits to what subnets the administrator creates or which of them
can use a Cloud NAT configuration.
An Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) can use the constraints/compute.restrictCloudNATUsage constraint to limit which
subnets can use Cloud NAT.
You create and enforce organizational constraints in an organization policy.
Prerequisites
IAM permissions
The person creating the constraints must have the
roles/orgpolicy.policyAdmin
role.
If using Shared VPC, the user role must be in the host project.
Organization policy background
If you have not worked with organization policy constraints before, first review
the following documentation:
Understanding constraints
Understanding hierarchy evaluation
Planning your constraints
You can create allow or deny constraints at the following levels
of the resource hierarchy:
Organization
Folder
Project
Subnetwork
By default, a constraint created at a node is inherited by all child nodes.
However, an Organization Policy Administrator for a given folder can decide if a
given folder inherits from its parents, so inheritance is not
automatic. For more information, see
Inheritance
in Understanding hierarchy evaluation .
Constraints are not applied retroactively. Existing configurations continue to
work even if they violate the constraints.
Constraints consist of allow and deny settings.
Interaction between allowed and denied values
If a restrictCloudNatUsage constraint is configured but neither
allowedValues nor deniedValues is specified, everything is allowed.
If allowedValues is configured and deniedValues is not configured,
everything not specified in allowedValues is denied.
If deniedValues is configured and allowedValues is not configured,
everything not specified in deniedValues is allowed.
If both allowedValues and deniedValues are configured, everything not
specified in allowedValues is denied.
If two values conflict, deniedValues takes precedence.
Interaction between subnets and gateways
Constraints do not prevent subnets from using a NAT gateway. Instead,
constraints prevent a configuration that would violate the constraint
by preventing the creation of either a gateway or a subnet.
Example 1: Trying to create a subnet that violates a deny rule
A gateway exists in a region.
The gateway is configured to allow all subnets in a region to use it.
A single subnet ( subnet-1 ) exists in the region.
A constraint is created so that only subnet-1 can use the gateway.
Administrators are not able to create more subnets in that network in
that region. The constraint prevents the creation of subnets that would
be able to use the gateway. If the new subnets should exist, then
the Organization Policy Administrator can add these subnets to the list of
permitted subnets.
Example 2: Trying to create a gateway that violates a deny rule
Two subnets ( subnet-1 and subnet-2 ) exist in a region.
A constraint exists that only allows subnet-1 to use a gateway.
Administrators are not able to create a gateway that is open to all subnets
in the region. Instead, either they have to create a gateway that only serves
subnet-1 , or the Organization Policy Administrator has to add subnet-2 to
the list of permitted subnets.
Creating your constraints
To create an organization policy with a particular constraint, see
Using constraints .
What's next
Learn about how to use custom organization policies .
Set up a Public NAT gateway .
Set up a Private NAT gateway .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
