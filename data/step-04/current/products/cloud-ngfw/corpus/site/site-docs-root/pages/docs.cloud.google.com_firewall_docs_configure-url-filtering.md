---
title: "Configure the URL filtering service \_|\_ Cloud Next Generation Firewall \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/configure-url-filtering
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/configure-url-filtering
  title: "Configure the URL filtering service \_|\_ Cloud Next Generation Firewall\
    \ \_|\_ Google Cloud Documentation"
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
Configure the URL filtering service
Stay organized with collections
Save and categorize content based on your preferences.
The URL filtering service lets you control access to specific web domains by blocking or
allowing them. To enable the URL filtering service in your network, you must set up multiple
Cloud Next Generation Firewall components, including firewall endpoints,
security profiles, and security profile groups. This document provides a
high-level workflow that describes how to configure these components and enable
the URL filtering service.
To learn more about the URL filtering service, see URL filtering service
overview .
Required roles
Identity and Access Management (IAM) roles govern the actions related to
configuring and enabling the URL filtering service. The following table describes which
roles are necessary for each step:
Ability
Necessary role
Create a firewall endpoint and a firewall endpoint association for a
Virtual Private Cloud (VPC) network
Any of the following roles:
Compute Network Admin role ( roles/compute.networkAdmin )
Firewall Endpoint Admin role ( roles/networksecurity.firewallEndpointAdmin )
These roles contain the following permission to create a firewall endpoint:
networksecurity.firewallEndpoints.create
In addition, these roles contain the following permissions to create a
firewall endpoint association:
networksecurity.firewallEndpointAssociations.create
networksecurity.firewallEndpoints.use on the organization
where the firewall endpoint is created
Create a URL filtering security profile, a threat prevention security
profile, and a security profile group
Security Profile Admin role ( roles/networksecurity.securityProfileAdmin )
This role contains the following required permissions:
networksecurity.securityProfileGroups.create to create a
security profile group
networksecurity.securityProfiles.create to create a URL
filtering security profile or a threat prevention security profile
Create a hierarchical firewall policy and its rules
Compute Organization Firewall Policy Admin role ( roles/compute.orgFirewallPolicyAdmin )
You need this role to create a hierarchical firewall policy. You must
grant the role on the resource where you want to create the policy.
In addition, you need this role to create a rule in a hierarchical
firewall policy. You must grant the role on the resource containing the
policy or on the policy itself.
The role contains the following required permissions:
compute.firewallPolicies.create to create a hierarchical
firewall policy
compute.firewallPolicies.update to create a hierarchical
firewall policy rule
Associate a hierarchical firewall policy with an organization or folder
Any of the following sets of roles:
Compute Organization Resource Admin role ( roles/compute.orgSecurityResourceAdmin ) on the target resource and
Compute Organization Firewall Policy User role ( roles/compute.orgFirewallPolicyUser ) on the policy resource or on the policy itself
or
Compute Organization Resource Admin role ( roles/compute.orgSecurityResourceAdmin ) on the target resource and
Compute Organization Firewall Policy Admin role ( roles/compute.orgFirewallPolicyAdmin ) on the policy resource or on the policy itself
These roles contain the following required permissions:
compute.firewallPolicies.addAssociation on the firewall policy
compute.organizations.setFirewallPolicy on the target resource
Create a global network firewall policy and its rules
Compute Security Admin role ( roles/compute.securityAdmin )
You need this role to create a global network firewall policy. You must
grant the role on the project where you want to create the policy.
In addition, you need this role to create a rule in a global network
firewall policy. You must grant the role on the project containing the
policy or on the policy itself.
The role contains the following required permissions:
compute.firewallPolicies.create to create a global network
firewall policy
compute.firewallPolicies.update to create a global network
firewall policy rule
Associate a global network firewall policy with a VPC network
Compute Network Admin role ( roles/compute.networkAdmin )
This role contains the following required permissions:
compute.firewallPolicies.use
compute.networks.setFirewallPolicy
Create a CA pool
CA Service Operation Manager role ( roles/privateca.caManager )
If you are using Transport Layer Security (TLS) inspection, you need
this role to create a CA pool.
Create a TLS inspection policy
Compute Network Admin role ( roles/compute.networkAdmin )
Compute Security Admin role ( roles/compute.securityAdmin )
If you are using TLS inspection, you need one of the preceding roles to
create a TLS inspection policy.
These roles contain the following required permissions:
certificatemanager.trustconfigs.list
certificatemanager.trustconfigs.use
networksecurity.operations.get
networksecurity.tlsInspectionPolicies.create
networksecurity.tlsInspectionPolicies.list
privateca.caPools.list
privateca.caPools.use
privateca.certificateAuthorities.list
For more information about granting roles, see
Manage access to projects, folders, and organizations .
You might also be able to get the prescribed permissions with custom roles
or other predefined roles .
Configure the URL filtering service without TLS inspection
To configure the URL filtering service in your network, perform the following tasks.
Note: The following workflow provides a high-level sequence of steps required to
configure the URL filtering service in your network. This workflow assumes that you have
already set up your VPC network, subnets,
virtual machine (VM) instances, and other required Google Cloud resources
and components.
Create a firewall endpoint.
A firewall endpoint is a zonal resource that you must create in the
same zone as the workload you want to protect with the URL filtering service.
You can create a firewall endpoint with or without jumbo frame support.
For more information, see Create a firewall
endpoint .
Associate the firewall endpoint with your VPC networks.
To enable the URL filtering service, associate the firewall endpoint with
your VPC networks. Make sure that you're running your
workloads in the same zone as the firewall endpoint.
A firewall endpoint with jumbo frame support can accept packets only up to
8,500 bytes. Alternatively, a firewall endpoint without jumbo frame support
can accept packets only up to 1,460 bytes. If you need URL filtering service, we recommend that you
configure the associated
VPC networks to use the maximum transmission unit (MTU)
limits of 8,500 bytes and 1,460 bytes. For more information, see
Supported packet size .
Caution: A firewall endpoint doesn't perform URL filtering service for
a VPC network if the network is configured with an MTU that's greater than the
firewall endpoint's limit.
For more information about creating firewall endpoint associations, see
Create firewall endpoint associations .
Create a security profile for URL filtering.
To allow or deny access to specific domains, create a security profile of
type url-filtering and use URL lists to specify your matcher strings.
For more information, see Create a URL filtering security
profile .
Optionally, you can create a security profile to scan traffic for threats.
To scan the traffic for security threats, create another security profile of
type threat-prevention . Review the list of threat signatures, evaluate the
default responses, and customize actions for the selected signatures
according to your requirements.
For more information, see Create a threat prevention security
profile .
To learn more about intrusion detection and prevention service, see Intrusion detection and prevention service overview .
Create a security profile group.
A security profile group acts as a container for security profiles. Create a
security profile group to include the security profiles you created in the
previous steps.
For more information, see Create a security profile
group .
Configure and apply the URL filtering service to your network traffic.
To configure the URL filtering service, create a global network firewall
policy or a hierarchical
firewall policy with Layer 7 inspection.
If you create a new global firewall policy or use an existing one, add a
firewall policy rule with the apply_security_profile_group action and
specify the name of the security profile group that you created
previously. Make sure that the firewall policy is associated with the
same VPC network as the workloads that require
inspection.
For more information, see Create a global network firewall
policy
and Create a rule .
If you create a new hierarchical firewall policy or use an existing one,
add a firewall policy rule with the apply_security_profile_group action.
Make sure that the firewall policy is associated with the same
VPC network as the workloads that require inspection.
For more information, see Create a
rule .
Configure the URL filtering service with TLS inspection
To configure the URL filtering service with TLS inspection
in your network, perform the following tasks.
Create a firewall endpoint.
You can create a firewall endpoint with or without jumbo frame support.
A firewall endpoint is a zonal resource that you must create in the
same zone as the workload you want to protect with the URL filtering service.
For more information, see Create a firewall
endpoint .
Associate the firewall endpoint with your VPC networks.
To enable the URL filtering service, associate the firewall endpoint with
your VPC networks. Make sure that you're running your
workloads in the same zone as the firewall endpoint.
A firewall endpoint with jumbo frame support can accept packets only up to
8,500 bytes. Alternatively, a firewall endpoint without jumbo frame support
can accept packets only up to 1,460 bytes. If you need URL filtering service, we recommend that you
configure the associated
VPC networks to use the maximum transmission unit (MTU)
limits of 8,500 bytes and 1,460 bytes. For more information, see
Supported packet size .
Caution: A firewall endpoint doesn't perform URL filtering service for
a VPC network if the network is configured with an MTU that's greater than the
firewall endpoint's limit.
For more information about creating firewall endpoint associations, see
Create firewall endpoint associations .
Create a security profile for URL filtering.
To allow or deny access to specific domains, create a security profile of
type url-filtering and use URL lists to specify your matcher strings.
For more information, see Create a URL filtering security
profile .
Optionally, you can create a security profile to scan traffic for threats.
To scan traffic for security threats, create another security profile of
type threat-prevention . Review the list of threat signatures, evaluate the
default responses, and customize actions for the selected signatures
according to your requirements.
For more information, see Create a threat prevention security
profile .
To learn more about intrusion detection and prevention service, see Intrusion detection and prevention service overview .
Create a security profile group.
A security profile group acts as a container for security profiles. Create a
security profile group to include the security profiles you created in the
previous steps.
For more information, see Create a security profile
group .
Create and configure resources to inspect encrypted traffic.
Create a certificate authority (CA) pool.
A CA pool is a collection of CAs with a common certificate issuance policy
and IAM policy. A regional CA pool must exist
before you can configure TLS inspection.
For more information, see Create a CA
pool .
Create a root CA.
To use TLS inspection, you must have at least one root CA. The root CA signs
an intermediate CA, which then signs all leaf certificates for the clients.
For more information, see reference documentation for gcloud privateca
roots create command .
Grant necessary permissions to the Network Security Service Agent
(P4SA).
Cloud NGFW requires a P4SA to generate intermediate CAs for TLS
inspection. The service agent needs the required permissions to request
certificates for the CA pool.
For more information, see Create a service
account .
Create a regional TLS inspection policy.
A TLS inspection policy specifies how to intercept encrypted traffic. A
regional TLS inspection policy can hold the configurations for the TLS
inspection.
For more information, see Create a TLS inspection
policy .
Associate the firewall endpoint with the TLS inspection policy.
Configure and apply the URL filtering service to your network traffic.
To configure the URL filtering service, create a global network firewall
policy or a hierarchical
firewall policy with Layer 7 inspection.
If you create a new global firewall policy or use an existing one, add a
firewall policy rule with the apply_security_profile_group action and
specify the name of the security profile group that you created
previously. Make sure that the firewall policy is associated with the
same VPC network as the workloads that require
inspection.
For more information, see Create global network firewall
policy
and Create a
rule .
If you create a new hierarchical firewall policy or use an existing one,
add a firewall policy rule with the apply_security_profile_group action
configured. Make sure that the firewall policy is associated with the
same VPC network as the workloads that require
inspection.
For more information, see Create a
rule .
Example deployment model
The following diagram shows an example of the URL filtering service deployment with multiple
firewall endpoints, configured for two VPC networks in the same
region but two different zones.
Deploy the URL filtering service in a region (click to enlarge).
The example deployment has the following configuration:
Two security profile groups:
Security profile group 1 with security profile Security profile 1 .
Security profile group 2 with security profile Security profile 2 .
Customer VPC 1 ( VPC 1 ) has a firewall policy
with its security profile group set to Security profile group 1 .
Customer VPC 2 ( VPC 2 ) has a firewall
policy with its security profile group set to Security profile group 2 .
Firewall endpoint Firewall endpoint 1 performs URL filtering for workloads
running on VPC 1 and VPC 2 in zone
us-west1-a .
Firewall endpoint Firewall endpoint 2 performs URL filtering with TLS
inspection enabled for workloads running on VPC 1 and
VPC 2 in zone us-west1-b .
What's next
Security profile overview
Security profile group overview
Firewall endpoint overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
