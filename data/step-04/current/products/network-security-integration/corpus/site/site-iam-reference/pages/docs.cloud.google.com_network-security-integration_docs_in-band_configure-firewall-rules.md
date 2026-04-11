---
title: "Create and manage firewall rules \_|\_ Network Security Integration \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-firewall-rules
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-endpoint-groups
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-firewall-rules
  title: "Create and manage firewall rules \_|\_ Network Security Integration \_|\_\
    \ Google Cloud Documentation"
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
Create and manage firewall rules
Stay organized with collections
Save and categorize content based on your preferences.
To inspect consumers' network traffic, you use firewall
policies to redirect the traffic to
the VPC's intercept endpoint group. The traffic then goes through the producer's intercept deployment group to their compute resources.
This page describes how to configure and manage global network firewall policies
and rules. If you want to create hierarchical firewall policies and rules, see
Use hierarchical firewall policies and
rules .
Before you begin
Enable the
Compute Engine API in your Google Cloud project.
Enable the
Network Security API
in your Google Cloud project.
Install the gcloud CLI .
Create a security profile
group .
Roles
To create, view, or delete firewall rules, ask your administrator to grant you
the necessary Identity and Access Management (IAM)
roles
on your project. For more information about granting roles, see Manage access
to projects, folders, and
organizations .
To check the progress of the operations listed on this page, make sure that your
user role has the following project-level Compute Security
Admin
( roles/compute.securityAdmin ), Compute Network
Admin
( roles/compute.networkAdmin ), and Compute
Viewer ( roles/compute.viewer )
roles:
compute.networks.get
compute.networks.list
compute.firewallPolicies.create
compute.firewallPolicies.update
compute.firewallPolicies.removeAssociation
Create firewall policies and rules
You create a firewall policy and a rule with the APPLY_SECURITY_PROFILE_GROUP
action.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions
compute.firewallPolicies.create
compute.firewallPolicies.update
compute.firewallPolicies.get
Roles
compute.securityAdmin on the project where you want
to create the policy
Console
To create a network firewall policy, follow these steps:
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the project selector list, select your project
within your organization.
Click Create firewall policy .
In the Name field, enter a name for the policy.
For Deployment scope , select Global.
To create rules for your policy, click
Continue , and then click Add rule .
In the Priority field, set the order number for the rule, where
0 is the highest priority.
For Direction of traffic , choose Ingress .
For Action on match , choose Proceed to L7 inspection .
For Purpose , choose NSI in-band .
For Security profile group , select the custom intercept security profile group.
For Target type , specify the target of the rule.
For Source filters , specify the source filter.
For Destinations , specify the destination filters.
For Protocols and ports , either specify that the rule applies
to all protocols and all destination ports or specify to which
protocols and destination ports the rule applies.
Click Create .
Click Add rule to add another rule.
If you want to associate the policy with a network, click
Continue , and then click Associate policy with VPC networks .
Click Create .
For more information, see Create global network firewall rules .
gcloud
To create a network firewall policy, use the
gcloud compute firewall-policies create
command :
gcloud compute network-firewall-policies create FIREWALL_POLICY
To create a firewall rule, use the
gcloud compute network-firewall-policies rules create
command :
gcloud compute network-firewall-policies rules create PRIORITY \
--action APPLY_SECURITY_PROFILE_GROUP \
--firewall-policy FIREWALL_POLICY \
--security-profile-group organizations/ ORGANIZATION_ID /locations/global/securityProfileGroups/ SECURITY_PROFILE_GROUP_ID \
--direction DIRECTION \
--layer4-configs LAYER4_CONIFG \
--src-ip-ranges SRC_IP_RANGE \
[--dest-ip-ranges DEST_IP_RANGE ] \
--global-firewall-policy
Replace the following:
PRIORITY : the priority of the rule to add.
FIREWALL_POLICY : the firewall policy ID with which to
create a rule.
ORGANIZATION_ID : the ID of the organization where the
security profile group is created.
SECURITY_PROFILE_GROUP_ID : the ID of the security
profile group that has a custom-intercept-profile action.
DIRECTION : indicates whether the rule is an ingress
or egress rule. If the direction is not specified, it defaults to
applying the rule on incoming traffic. For incoming traffic, you cannot
specify destination ranges. For outbound traffic, you cannot specify
source ranges or source tags.
LAYER4_CONFIG : a list of destination protocols and
ports to which the firewall rule applies.
SRC_IP_RANGE : the source IP ranges. This is only
specified if DIRECTION is ingress .
DEST_IP_RANGE : the destination IP ranges. This is
only specified if DIRECTION is egress .
Terraform
To create a firewall policy, you can use a google_compute_firewall_policy resource .
resource "google_compute_network_firewall_policy" "default" {
name = "firewall-policy"
}
To create a firewall policy rule, you can use a google_compute_network_firewall_policy_rule resource .
resource "google_compute_network_firewall_policy_rule" "default" {
firewall_policy = google_compute_network_firewall_policy.default.name
priority = 1000
action = "apply_security_profile_group"
direction = "INGRESS"
security_profile_group = google_network_security_security_profile_group.default.id
match {
layer4_configs {
ip_protocol = "tcp"
ports = ["80"]
}
src_ip_ranges = ["10.10.0.0/16"]
}
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Describe firewall policies and rules
You can see all the details of a policy, including all its firewall rules.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions
compute.firewallPolicies.get
Roles
compute.networkAdmin
compute.securityAdmin on the project
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
From the project picker, select your project that contains
the global network firewall policy.
Click your policy.
To see the details of a rule, click the priority of the rule.
gcloud
To describe a firewall policy, use the
gcloud compute network-firewall-policies describe
command :
gcloud compute network-firewall-policies describe FIREWALL_POLICY
To describe a firewall rule, use the
gcloud compute network-firewall-policies rules describe
command :
gcloud compute network-firewall-policies rules describe PRIORITY \
--firewall-policy FIREWALL_POLICY
Replace FIREWALL_POLICY with the firewall policy ID with
where the rule is defined.
Delete firewall policies and rules
You can delete a policy and its firewall rules. You must delete all associations
on an organization firewall policy before you can delete it.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions
compute.firewallPolicies.removeAssociation
compute.firewallPolicies.update
Roles
compute.securityAdmin on the project
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
From the project picker, select your project that contains
the policy.
Click your policy.
Select the rule that you want to delete.
Click Delete .
Click the Associations tab.
Select the association that you want to delete.
Click Remove Associations .
After all associations are removed, click Delete .
gcloud
To delete a firewall rule, use the
gcloud compute network-firewall-policies rules delete
command :
gcloud compute network-firewall-policies rules delete PRIORITY \
--firewall-policy FIREWALL_POLICY
Replace FIREWALL_POLICY with the firewall policy ID with
where the rule is defined.
To delete a firewall policy, use the
gcloud compute network-firewall-policies delete
command :
gcloud compute network-firewall-policies delete FIREWALL_POLICY
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
