---
title: "Roles and permissions \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/roles-permissions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/initial-setup-steps
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/roles-permissions
  title: "Roles and permissions \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Guides
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity and Access Management (IAM) permissions that are
necessary to perform specific Secure Web Proxy operations. It also explains how to
create a custom IAM role and assign the required permissions to
the role for managing various Secure Web Proxy resources.
Permissions
The following table lists the permissions that you require to perform specific
operations in Secure Web Proxy. For more information, see the
IAM permissions reference .
Operation
Resource
Permission (method)
Create a policy
Gateway security policies
networksecurity.gatewaySecurityPolicies.create
Delete a policy
Gateway security policies
networksecurity.gatewaySecurityPolicies.delete
Retrieve a policy
Gateway security policies
networksecurity.gatewaySecurityPolicies.get
List policies
Gateway security policies
networksecurity.gatewaySecurityPolicies.list
Update a policy
Gateway security policies
networksecurity.gatewaySecurityPolicies.update
Create a rule
Gateway security policy rules
networksecurity.gatewaySecurityPolicyRules.create
Delete a rule
Gateway security policy rules
networksecurity.gatewaySecurityPolicyRules.delete
Retrieve a rule
Gateway security policy rules
networksecurity.gatewaySecurityPolicyRules.get
List rules
Gateway security policy rules
networksecurity.gatewaySecurityPolicyRules.list
Update a rule
Gateway security policy rules
networksecurity.gatewaySecurityPolicyRules.update
Retrieve an operation
Operations
networksecurity.operations.get
Create a TLS inspection policy
TLS inspection policies
networksecurity.tlsInspectionPolicies.create
Delete a TLS inspection policy
TLS inspection policies
networksecurity.tlsInspectionPolicies.delete
Retrieve a TLS inspection policy
TLS inspection policies
networksecurity.tlsInspectionPolicies.get
List TLS inspection policies
TLS inspection policies
networksecurity.tlsInspectionPolicies.list
Update a TLS inspection policy
TLS inspection policies
networksecurity.tlsInspectionPolicies.update
Attach a TLS inspection policy to a Secure Web Proxy policy
TLS inspection policies
networksecurity.tlsInspectionPolicies.use
Create a URL list
URL lists
networksecurity.urlLists.create
Delete a URL list
URL lists
networksecurity.urlLists.delete
Retrieve a URL list
URL lists
networksecurity.urlLists.get
List all URL lists
URL lists
networksecurity.urlLists.list
Update a URL list
URL lists
networksecurity.urlLists.update
Attach a URL list to a Secure Web Proxy rule
URL lists
networksecurity.urlLists.use
Provision and manage a Secure Web Proxy instance
Various Certificate Manager, Compute Engine,
Secure Web Proxy, Resource Manager, and Cloud Monitoring resources
certificatemanager.certs.get
certificatemanager.certs.list
certificatemanager.certs.use
compute.addresses.create
compute.addresses.createInternal
compute.addresses.list
compute.instances.update
compute.networks.get
compute.networks.list
compute.projects.get
compute.regionOperations.get
compute.routers.create
compute.routers.delete
compute.routers.get
compute.routers.list
compute.routers.update
compute.subnetworks.get
compute.subnetworks.list
networksecurity.gatewaySecurityPolicies.get
networksecurity.gatewaySecurityPolicies.list
networksecurity.gatewaySecurityPolicies.use
networksecurity.gatewaySecurityPolicyRules.get
networksecurity.gatewaySecurityPolicyRules.list
networksecurity.locations.list
networksecurity.urlLists.get
networksecurity.urlLists.list
networksecurity.urlLists.use
networkservices.gateways.create
networkservices.gateways.delete
networkservices.gateways.get
networkservices.gateways.list
networkservices.gateways.update
networkservices.gateways.use
networkservices.locations.list
networkservices.operations.get
networkservices.operations.list
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage.quotas.get
serviceusage.services.get
serviceusage.services.list
Roles
To get the permissions that you need to provision a Secure Web Proxy instance,
ask your administrator to grant you the following IAM roles on
your project:
To configure policies and provision a Secure Web Proxy instance:
Compute Network Admin role
( roles/compute.networkAdmin )
To upload explicit Secure Web Proxy TLS certificates:
Certificate Manager Editor role
( roles/certificatemanager.editor )
For more information about granting roles, see
Manage access to projects, folders, and organizations .
You might also be able to get the required permissions through custom roles or
other predefined roles.
Optional: If you have a set of users who are responsible for managing your
Compute Engine organization security policies, then grant them the
Compute Organization Security Policy Admin role
( roles/compute.orgSecurityPolicyAdmin ).
For more information about project roles and permissions, see the following:
Identity and Access Management documentation
Compute Engine API documentation
Cloud Monitoring API documentation
What's next
To complete the initial tasks to set up Secure Web Proxy, see
Initial setup steps .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
