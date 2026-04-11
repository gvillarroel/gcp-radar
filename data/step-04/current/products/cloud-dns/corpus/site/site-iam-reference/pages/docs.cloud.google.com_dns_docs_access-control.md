---
title: "Roles and permissions \_|\_ Cloud DNS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/access-control
  title: "Roles and permissions \_|\_ Cloud DNS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Guides
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud offers Identity and Access Management (IAM), which lets you give more
granular access to specific Google Cloud resources and prevents unwanted
access to other resources. This page describes the Cloud DNS API roles. For a
detailed description of IAM, see the
Identity and Access Management documentation .
IAM lets you adopt the
security principle of least privilege
so that you grant only the necessary access to your resources.
IAM lets you control who has what permissions to which
resources by setting IAM policies. IAM policies
grant specific roles to a user, giving the user certain permissions. For
example, a particular user might need to create and modify Domain Name System
(DNS) record resources. You would then give that user (who) the
/roles/dns.admin role, which has the dns.changes.create and
dns.resourceRecordSets.create permissions (what) so that they can create and
update resource record sets (which). In contrast, a support department might
only need to view existing resource record sets, so they would get a
/roles/dns.reader role.
Cloud DNS supports IAM permissions at the project level
and individual DNS zone level. The default permission is at the project level.
To configure permissions at the individual DNS zone (or resource) level, see
Create a zone with specific IAM
permissions .
Permissions and roles
Every Cloud DNS API method requires the caller to have the necessary
IAM permissions. Permissions are assigned by granting roles to
a user, group, or service account. In addition to the basic roles Owner,
Editor, and Viewer, you can grant Cloud DNS API roles to the users
of your project.
Permissions
The following table lists the permissions that the caller must have to call
each method.
Method
Required permission(s)
dns.changes.create
To create a resource record, set both
dns.changes.create and dns.resourceRecordSets.create
on the project containing the record set.
To update a resource record, set both
dns.changes.create and dns.resourceRecordSets.update
on the project containing the record set.
To delete a resource record, set both
dns.changes.create and dns.resourceRecordSets.delete
on the project containing the record set.
dns.changes.get
dns.changes.get on the project containing the managed zone.
dns.changes.list
dns.changes.list on the project containing the managed zone.
dns.dnsKeys.get
dns.dnsKeys.get on the project containing the managed zone.
dns.dnsKeys.list
dns.dnsKeys.list on the project containing the managed zone.
dns.managedZoneOperations.get
dns.managedZoneOperations.get on the project containing the managed zone.
dns.managedZoneOperations.list
dns.managedZoneOperations.list on the project containing the managed zone.
dns.managedZones.create
dns.managedZones.create on the project containing the
managed zone. If you are creating a private zone, you also need
dns.networks.bindPrivateDNSZone and
dns.networks.targetWithPeeringZone on each project with a
VPC network authorized to access the zone.
If you are creating a private zone with GKE integration,
you also need dns.gkeClusters.bindPrivateDNSZone to configure
a GKE cluster scope.
dns.managedZones.delete
dns.managedZones.delete on the project containing the managed zone.
dns.managedZones.get
dns.managedZones.get on the project containing the managed zone.
dns.managedZones.list
dns.managedZones.list on the project containing the
managed zone.
dns.managedZones.update
dns.managedZones.update on the project containing the
managed zone. If you are creating a private zone, you also need
dns.networks.bindPrivateDNSZone and
dns.networks.targetWithPeeringZone on each project with a
VPC network authorized to access the zone.
If you are creating a private zone with GKE integration,
you also need dns.gkeClusters.bindPrivateDNSZone to configure
a GKE cluster scope.
dns.policies.create
dns.policies.create on the project containing the policy.
If the policy is created on a VPC network, you also need
dns.networks.bindPrivateDNSPolicy for each project containing
each VPC network.
dns.policies.delete
dns.policies.delete on the project containing the policy.
dns.policies.get
dns.policies.get on the project containing the policy.
dns.policies.list
dns.policies.list on the project containing the policy.
dns.policies.update
dns.policies.update on the project containing the policy.
If the policy is updated to be on a VPC network, you also
need dns.networks.bindPrivateDNSPolicy for each project
containing each VPC network.
dns.projects.get
dns.projects.get on the project.
dns.resourceRecordSets.create
dns.resourceRecordSets.create on the project containing the
record set.
dns.resourceRecordSets.delete
dns.resourceRecordSets.delete on the project containing the
record set.
dns.resourceRecordSets.get
dns.resourceRecordSets.get on the project containing the
record set.
dns.resourceRecordSets.list
dns.resourceRecordSets.list on the project containing the
managed zone.
dns.resourceRecordSets.update
dns.resourceRecordSets.update and dns.changes.create on the project containing the
record set.
dns.responsePolicies.create
dns.responsePolicies.create on the project containing the
response policy.
You also need
dns.networks.bindDNSResponsePolicy to validate the request.
If you want to create a response policy attached to a GKE cluster, you need
dns.gkeClusters.bindDNSResponsePolicy .
dns.responsePolicies.delete
dns.responsePolicies.delete on the project containing the
response policy.
dns.responsePolicies.get
dns.responsePolicies.get on the project containing the
response policy.
dns.responsePolicies.list
dns.responsePolicies.list on the project.
dns.responsePolicies.update
dns.responsePolicies.update on the project containing the
response policy.
You also need
dns.networks.bindDNSResponsePolicy to validate the request.
If you want to create a response policy attached to a GKE cluster, you need
dns.gkeClusters.bindDNSResponsePolicy .
dns.responsePolicyRules.create
dns.responsePolicyRules.create on the project containing the
response policy rule.
dns.responsePolicyRules.delete
dns.responsePolicyRules.delete on the project containing the
response policy rule.
dns.responsePolicyRules.get
dns.responsePolicyRules.get on the project containing the
response policy rule.
dns.responsePolicyRules.list
dns.responsePolicyRules.list on the project containing the
response policy.
dns.responsePolicyRules.update
dns.responsePolicyRules.update on the project containing the
response policy rule.
networksecurity.dnsThreatDetectors.list
networksecurity.dnsThreatDetectors.list on the project where the VPC networks are monitored for threats.
networksecurity.dnsThreatDetectors.get
networksecurity.dnsThreatDetectors.get on the project where the VPC networks are monitored for threats.
networksecurity.dnsThreatDetectors.create
networksecurity.dnsThreatDetectors.create on the project containing the VPC networks you want to monitor for threats.
networksecurity.dnsThreatDetectors.update
networksecurity.dnsThreatDetectors.update on the project where the VPC networks are monitored for threats.
networksecurity.dnsThreatDetectors.delete
networksecurity.dnsThreatDetectors.delete on the project where the VPC networks are monitored for threats.
Roles
The following table lists the Cloud DNS API IAM roles with
a corresponding list of all the permissions that each role includes. Every
permission is applicable to a particular resource type.
You can also use basic roles to make
DNS changes.
Role
Permissions
DNS Administrator
( roles/ dns.admin )
Provides read-write access to all Cloud DNS resources.
Lowest-level resources where you can grant this role:
Managed zone
compute.networks.get
compute.networks.list
dns.changes.*
dns.changes.create
dns.changes.get
dns.changes.list
dns.dnsKeys.*
dns.dnsKeys.get
dns.dnsKeys.list
dns.gkeClusters.*
dns. gkeClusters. bindDNSResponsePolicy
dns. gkeClusters. bindPrivateDNSZone
dns.managedZoneOperations.*
dns.managedZoneOperations.get
dns.managedZoneOperations.list
dns.managedZones.create
dns.managedZones.delete
dns.managedZones.get
dns.managedZones.getIamPolicy
dns.managedZones.list
dns.managedZones.update
dns.networks.*
dns. networks. bindDNSResponsePolicy
dns. networks. bindPrivateDNSPolicy
dns. networks. bindPrivateDNSZone
dns. networks. targetWithPeeringZone
dns.networks.useHealthSignals
dns.policies.*
dns.policies.create
dns.policies.createTagBinding
dns.policies.delete
dns.policies.deleteTagBinding
dns.policies.get
dns.policies.list
dns.policies.listEffectiveTags
dns.policies.listTagBindings
dns.policies.update
dns.projects.get
dns.resourceRecordSets.*
dns.resourceRecordSets.create
dns.resourceRecordSets.delete
dns.resourceRecordSets.get
dns.resourceRecordSets.list
dns.resourceRecordSets.update
dns.responsePolicies.*
dns.responsePolicies.create
dns.responsePolicies.delete
dns.responsePolicies.get
dns.responsePolicies.list
dns.responsePolicies.update
dns.responsePolicyRules.*
dns.responsePolicyRules.create
dns.responsePolicyRules.delete
dns.responsePolicyRules.get
dns.responsePolicyRules.list
dns.responsePolicyRules.update
resourcemanager.projects.get
resourcemanager.projects.list
DNS Peer
( roles/ dns.peer )
Access to target networks with DNS peering zones
dns. networks. targetWithPeeringZone
DNS Reader
( roles/ dns.reader )
Provides read-only access to all Cloud DNS resources.
Lowest-level resources where you can grant this role:
Managed zone
compute.networks.get
dns.changes.get
dns.changes.list
dns.dnsKeys.*
dns.dnsKeys.get
dns.dnsKeys.list
dns.managedZoneOperations.*
dns.managedZoneOperations.get
dns.managedZoneOperations.list
dns.managedZones.get
dns.managedZones.list
dns.policies.get
dns.policies.list
dns.policies.listEffectiveTags
dns.policies.listTagBindings
dns.projects.get
dns.resourceRecordSets.get
dns.resourceRecordSets.list
dns.responsePolicies.get
dns.responsePolicies.list
dns.responsePolicyRules.get
dns.responsePolicyRules.list
resourcemanager.projects.get
resourcemanager.projects.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Cloud DNS Service Agent
( roles/ dns.serviceAgent )
Gives Cloud DNS Service Agent access to Cloud Platform resources.
Warning: Do not grant service agent roles to any principals except
service agents .
compute. globalNetworkEndpointGroups. attachNetworkEndpoints
compute. globalNetworkEndpointGroups. create
compute. globalNetworkEndpointGroups. delete
compute. globalNetworkEndpointGroups. detachNetworkEndpoints
compute. globalNetworkEndpointGroups. get
compute.globalOperations.get
compute.healthChecks.get
The following table lists the DNS Armor IAM roles with
a corresponding list of all the permissions that each role includes.
Role
Permissions
DNS Threat Detector Admin
( roles/ networksecurity.dnsThreatDetectorAdmin )
Enables full access to DNS Threat Detector resources.
networksecurity. dnsThreatDetectors.*
networksecurity. dnsThreatDetectors. create
networksecurity. dnsThreatDetectors. delete
networksecurity. dnsThreatDetectors. get
networksecurity. dnsThreatDetectors. list
networksecurity. dnsThreatDetectors. update
resourcemanager.projects.get
resourcemanager.projects.list
DNS Threat Detector Viewer
( roles/ networksecurity.dnsThreatDetectorViewer )
Enables view access to DNS Threat Detector resources.
networksecurity. dnsThreatDetectors. get
networksecurity. dnsThreatDetectors. list
resourcemanager.projects.get
resourcemanager.projects.list
Manage access control
You can use the Google Cloud console to manage access control for your
topics and projects.
To set access controls at the project level, follow these steps.
Console
In the Google Cloud console, go to the IAM page.
Go to the IAM page
Select your project from the top pull-down menu.
Click Add .
In New principals , enter the email address of a new principal.
Select a role from the list.
Click Save .
Verify that the principal is listed with the role that you granted.
What's next
To get started using Cloud DNS, see
Quickstart: Set up DNS records for a domain name with Cloud DNS .
To find solutions for common issues that you might encounter when using
Cloud DNS, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
