---
title: "Set up consumer services \_|\_ Network Security Integration \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-consumer-service
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-endpoint-groups
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-consumer-service
  title: "Set up consumer services \_|\_ Network Security Integration \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Security Integration
Guides
Send feedback
Set up consumer services
Stay organized with collections
Save and categorize content based on your preferences.
This page provides details about the steps that you as a service consumer must
take to send traffic to a producer's packet inspection services.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following Identity and Access Management (IAM) roles on
your project:
For security profile groups and security profile, the
Security Profile Admin role
( networksecurity.securityProfileAdmin ) on the
organization.
For new consumer side networks creation, the
Compute Network Admin role
( roles/compute.networkAdmin )
on the project.
For intercept resources, the
Intercept Endpoint Admin role
( roles/networksecurity.interceptEndpointAdmin )
on your project.
Enable the Compute Engine and Network Security APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI. For more information,
see gcloud CLI overview .
Note: If you haven't run the Google Cloud CLI previously, initialize
your gcloud CLI directory by running the
gcloud init command .
To connect to a producer, get the following details:
The name of the intercept deployment group.
The list of zones where the intercept deployment group is active.
The Intercept Deployment User role
( roles/networksecurity.interceptDeploymentUser ) on the producer's project.
Prepare your network
To enable one or more VPC networks to send traffic to a producer's packet
inspection services, do the following:
Identify VPC networks, and set the firewall policy enforcement
order.
Identify the VPC networks that want to use a producer's packet intercept
offering. After the networks are identified, set the firewall policy and
rule enforcement
order
of each network to BEFORE_CLASSIC_FIREWALL .
The BEFORE_CLASSIC_FIREWALL enforcement order ensures that hierarchical
and global firewall policy rules—which you will use to intercept traffic—are
evaluated before VPC firewall rules. If you use the default
AFTER_CLASSIC_FIREWALL order, VPC firewall rules take precedence and your
traffic might get dropped before it can be intercepted for inspection.
Create zonal managed or zonal unmanaged instance groups containing your VMs.
We recommend using managed instance groups, if possible. If you choose
managed instance groups, you must use zonal managed instance groups. For more information, see Create a MIG in a single zone .
Configure in-band resources
Create the following resources to use producer's packet inspection services:
Create an intercept endpoint group and an intercept endpoint group
association
in a project. For more information, see Create and manage intercept endpoint groups .
A consumer uses intercept endpoint group and intercept endpoint group
association to select a producer's packet intercept offering to use in one
or more consumer VPC networks.
When configuring the intercept endpoint group and intercept endpoint group
association, consider of the following:
Consumer VPC networks and their corresponding intercept endpoint group
associations must be in the same project.
An intercept endpoint group referenced by an endpoint group association
can be located in any project of the consumer's organization.
Create a security
profile
and security profile
group
in the organization. For more information about how to create a custom intercept security profile, see Create a custom intercept security profile and Create and manage security profile groups .
A security profile and a security profile group lets you use a producer's
packet intercept offering in rules of a hierarchical firewall policy or
global network firewall policy. Rules in a firewall policy reference the
security profile group and use the apply_security_profile_group action to
send packets to a producer's packet inspection service.
Configure a firewall policy and add firewall rules to direct traffic for
packet inspection. For more information, see Create and manage firewall rules .
Rules that direct traffic to packet inspection must have all of the
following characteristics:
The
action
of the firewall policy rule must be apply_security_profile_group .
The firewall policy rule must reference a security profile group
containing the security profile you configured in the previous step.
The security profile must reference the same intercept endpoint group
that's associated with the VPC networks to which the rule needs to
apply.
The firewall policy that contains the rule must be associated with the
VPC networks to which the rule needs to apply. The method for creating
this association depends on the type of policy:
If the rule is in a global network firewall policy, that policy must
be associated with the VPC networks to which the rule needs to
apply.
If the rule is in a hierarchical network firewall policy, the
firewall policy must be associated with a folder or the organization
that contains the VPC networks to which the rule needs to apply.
Additionally, if the target of the rule is a network resource, the
target must include the VPC networks to which the rule needs to
apply.
For more information about firewall rule parameters, see Firewall policy rule components .
Associate the firewall policy with the VPC networks that use producer's
packet inspection.
For more information, see Associate network firewall policy .
After you associate the firewall policy and configure the firewall rules, the network traffic is redirected to the producer's intercept deployment group.
What's next
Intercept endpoint groups and associations overview
Create and manage intercept endpoint groups
Create and manage intercept endpoint group associations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
