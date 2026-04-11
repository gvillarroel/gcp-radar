---
title: "Security profile overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/about-security-profiles
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/about-security-profiles
  title: "Security profile overview \_|\_ Cloud Next Generation Firewall \_|\_ Google\
    \ Cloud Documentation"
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
Security profile overview
Stay organized with collections
Save and categorize content based on your preferences.
Security profiles help you define Layer 7 inspection policy for your
Google Cloud resources. They are generic policy structures
that are used by firewall endpoints to scan intercepted traffic to provide
application Layer services, such as the URL filtering service and the intrusion detection and prevention service.
This document provides a detailed overview of security profiles and their
capabilities.
Specifications
A security profile is an organizational level resource.
Cloud Next Generation Firewall supports security profiles of url-filtering
and threat-prevention types.
Each security profile is uniquely identified by a URL with
the following elements:
Organization ID: ID of the organization.
Location: scope of security profile. Location is always
set to global .
Name: security profile name in the following format:
A string 1-63 characters long
Includes only alphanumeric characters or hyphens (-)
Must not start with a number
To construct a unique URL identifier for a security profile,
use the following format:
organization/ ORGANIZATION_ID /locations/ LOCATION /securityProfiles/ SECURITY_PROFILE_NAME
For example, a global security profile example-security-profile
in organization 2345678432 has the following unique identifier:
organization/2345678432/locations/global/securityProfiles/example-security-profile
After you create a security profile, you have the option to attach it
to a security profile group
or to attach it later.
This security profile group is referenced by the firewall policy of the
Virtual Private Cloud (VPC) network where you want to enforce Layer 7 inspection.
Each security profile must have an associated project ID. The associated
project is used for quotas and access restrictions on security profile
resources. If you authenticate your service account by using the
gcloud auth activate-service-account command ,
you can associate your service account with the security profile.
To learn more about how to create a security profile,
see Create a threat prevention security profile
and Create a URL filtering security profile .
URL filtering security profile
Cloud NGFW uses a URL filtering security profile to configure the
URL filtering service .
A URL filtering security profile is a type of security profile that uses one or
more URL filters to define security policies for the firewall endpoints. A URL
filter is a list of matcher strings with a unique priority and an action.
Matcher strings contain domain names that Cloud NGFW matches
against the HTTP message being evaluated. For encrypted messages,
Cloud NGFW checks the matcher strings against the SNI sent during
TLS negotiation. If you enable TLS inspection, Cloud NGFW decrypts
the message header and also evaluates the host header. For unencrypted traffic,
Cloud NGFW always compares the matcher strings against the host
header of the HTTP message.
The priority of a URL filter is determined by the unique value that you specify
using the priority field. The priority value of a URL filter can range from 0 to
2147483647 . Cloud NGFW processes the lowest numeric value
(representing the highest priority) first, followed by the next higher numeric
value until it finds a match. Cloud NGFW doesn't evaluate
the individual domains within a URL filtering list in priority order.
Note: If you modify a URL filtering security profile, it might take up to
15 minutes for the changes to take effect.
To learn more about creating and managing URL filtering security profiles,
see Create and manage URL filtering security profiles .
To learn more about how to configure URL filtering, see
Configure the URL filtering service .
Threat prevention security profile
Cloud NGFW uses threat prevention security profiles to provide
intrusion detection and prevention .
When you create a security profile of type threat-prevention , the following
default threat signatures
with default severity and associated actions are added to the profile:
Vulnerability detection signatures
Anti-spyware signatures
Antivirus signatures
DNS signatures
You have the option to add severity overrides to your threat prevention security profiles. Each
default signature has a threat severity level .
The severity level indicates the risk of the detected threat. Each severity
level also has an associated default action. The default action specifies the
measures Cloud NGFW takes to handle threats with a specific
severity level. You can use threat prevention security profiles to override the default action
for a severity level.
The following actions are supported:
No override : performs the default action associated
with the threat.
Deny : logs the threat and drops the packet.
Alert : logs the threat and allows the session.
Allow : ignores the threat, if detected.
When you create a threat prevention security profile, the default override action for all
severity levels is set to No override .
You can also add signature overrides to your threat prevention security profiles. Each threat
signature has an associated default action. You can use threat prevention security profiles to
override the default actions of the threat signatures by using the preceding
actions. Signature overrides take precedence over severity overrides.
Note: If you override the default threat signature action or modify the default
severity level action in a threat prevention security profile, it might take up to 15 minutes
for these changes to take effect.
To learn more about how to configure threat prevention, see
Configure intrusion detection and prevention service .
Identity and Access Management roles
Identity and Access Management (IAM) roles govern the following security profiles actions:
Creating a security profile in an organization
Modifying or deleting a security profile
Viewing details of a security profile
Viewing a list of security profiles in an organization
Using a security profile in a security profile group
The following table describes the roles that are necessary for each step.
Ability
Necessary role
Create a security profile
Compute Network Admin ( roles/compute.networkAdmin ) and Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) roles on the organization where the security profile is created.
Modify a security profile
Compute Network Admin ( roles/compute.networkAdmin ) and Security Profile Admin ( roles/networksecurity.securityProfileAdmin ) roles on the organization where the security profile is created.
Delete a security profile
Compute Network Admin ( roles/compute.networkAdmin ) role on the organization where the security profile is created.
View details about the security profile in an organization
Any of the following roles for the organization:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
View all of the security profiles in an organization
Any of the following roles for the organization:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Use a security profile in a security profile group
Any of the following roles for the organization:
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Quotas
To view quotas associated with security profiles, see Quotas and limits .
Pricing
Pricing for security profiles is described in Cloud NGFW pricing .
What's next
Configure the URL filtering service
Configure intrusion detection and prevention service
Create and manage threat prevention security profiles
Create and manage URL filtering security profiles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
