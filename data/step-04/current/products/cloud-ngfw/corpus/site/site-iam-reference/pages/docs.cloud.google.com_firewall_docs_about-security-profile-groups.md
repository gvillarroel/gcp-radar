---
title: "Security profile group overview \_|\_ Cloud Next Generation Firewall \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/about-security-profile-groups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/about-security-profile-groups
  title: "Security profile group overview \_|\_ Cloud Next Generation Firewall \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Security profile group overview
Stay organized with collections
Save and categorize content based on your preferences.
A security profile group is a container for security profiles. A firewall
policy rule references a security profile group to enable Layer 7 inspection,
such as the URL filtering service and the
intrusion detection and prevention service ,
on your network.
This document provides a detailed overview of security profile groups and
their capabilities.
Specifications
A security profile group is an organizational level resource.
In a security profile group, you can add security profiles of types url-filtering or threat-prevention in any order.
A security profile group can only contain one security profile of each type. If you want
to add two profiles, they must be of different types. For example, if you add a
security profile of type url-filtering , you can add a second profile of
type threat-prevention to scan the traffic in addition to filtering it.
Each security profile group is uniquely identified by a URL with
the following elements:
Organization ID: ID of the organization.
Location: scope of the security profile group. Location is always
set to global .
Name: security profile group name in the following format:
A string 1-63 characters long
Includes only alphanumeric characters or hyphens (-)
Must not start with a number
To construct a unique URL identifier for a security profile group, use the
following format:
organization/ ORGANIZATION_ID /locations/ LOCATION /securityProfileGroups/ SECURITY_PROFILE_GROUP_NAME
For example, a global security profile group example-security-profile-group in
organization 2345678432 has the following unique identifier:
organization/2345678432/locations/global/securityProfileGroups/example-security-profile-group
To perform Layer 7 inspection of the network traffic, a firewall policy rule
must contain the name of the security profile group to be used by the
firewall endpoint.
Security profile groups apply to firewall policies only when you add a
firewall policy rule with action apply_security_profile_group . You can
configure security profile groups in
hierarchical firewall policy rules
and global network firewall policy rules .
The firewall policy rule applies to incoming and outgoing traffic of the
Virtual Private Cloud (VPC) network. The matched traffic is redirected
to the firewall endpoint along with the configured security profile group name.
The firewall endpoint uses the security profiles specified in the security
profile group to inspect domain and server name indication (SNI)
information, scan packets for threats, and apply configured actions.
The firewall endpoint executes the URL filtering security profile first
and then runs the threat prevention security profile. However, if the
endpoint detects a possible threat in the HTTP(S) message header, it can use
the intrusion detection and prevention service first to evaluate and block the traffic as needed. The
traffic that is evaluated and not blocked by intrusion detection and prevention service is then processed
by the URL filtering service.
To learn more about how to configure the URL filtering service, see
Configure the URL filtering service .
To learn more about how to configure threat prevention, see
Configure intrusion detection and prevention service .
Each security profile group must have an associated project ID. The associated
project is used for quotas and access restrictions on security
profile group resources. If you authenticate your service account by using the
gcloud auth activate-service-account command ,
you can associate your service account with the security profile group.
To learn more about how to create a profile group,
see Create a security profile group .
Identity and Access Management roles
Identity and Access Management (IAM) roles govern the following security profile group actions:
Creating a security profile group in an organization
Modifying or deleting a security profile group
Viewing details of a security profile group
Viewing a list of security profile groups in an organization
Using a security profile group in a firewall policy rule
The following table describes the roles that are necessary for each step.
Ability
Necessary role
Create a security profile group
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
and Compute Network Admin ( roles/compute.networkAdmin ) roles on the organization where the security profile group is created.
Modify a security profile group
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
and Compute Network Admin ( roles/compute.networkAdmin ) roles on the organization where the security profile group is created.
Delete a security profile group
Compute Network Admin ( roles/compute.networkAdmin ) role on the organization where the security profile group is created.
View details about the security profile group in an organization
Any of the following roles for the organization:
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
View all of the security profile groups in an organization
Any of the following roles for the organization:
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Use a security profile group in a firewall policy rule
Any of the following roles for the organization:
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
What's next
Configure the URL filtering service
Configure intrusion detection and prevention service
Create and manage security profile groups
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
