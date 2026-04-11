---
title: "Create and manage custom intercept security profiles \_|\_ Network Security\
  \ Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-security-profiles
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-endpoint-groups
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-security-profiles
  title: "Create and manage custom intercept security profiles \_|\_ Network Security\
    \ Integration \_|\_ Google Cloud Documentation"
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
Create and manage custom intercept security profiles
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create and manage custom intercept security
profiles.
Before you begin
Enable the
Network Security API in
your project.
Install the gcloud CLI .
Roles
To create, view, update, or delete custom intercept security profiles, ask your
administrator to grant you the necessary IAM
roles
on your organization. For more information about granting roles, see Manage
access to projects, folders, and
organizations .
To check the progress of the operations listed on this page, make sure that your
user role has the following Compute Network User
role
( roles/compute.networkUser ) permissions:
networksecurity.operations.get
networksecurity.operations.list
Create a custom intercept security profile
For in-band integration, you can only create a security profile of type
custom-intercept .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.create
networksecurity.interceptEndpointGroups.use
Roles
Security Profile Admin role ( networksecurity.securityProfileAdmin )
networksecurity.interceptEndpointAdmin
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
From the project picker, select your organization.
In the Security profiles tab, click Create profile .
For Name , enter a name.
For Security profile purpose , select NSI in-band .
For Project , select the project that hosts the intercept endpoint
group.
For Intercept endpoint group , select the intercept endpoint group.
Click Create .
gcloud
To create a custom intercept security profile for in-band integration, use the
gcloud network-security security-profiles custom-intercept create
command :
gcloud network-security security-profiles custom-intercept create CUSTOM_INTERCEPT_PROFILE_ID \
--organization ORGANIZATION_ID \
--location global \
--billing-project BILLING_PROJECT_ID \
--intercept-endpoint-group \
projects/ ENDPOINT_GROUP_PROJECT_ID /locations/global/interceptEndpointGroups/ ENDPOINT_GROUP_ID
Replace the following:
CUSTOM_INTERCEPT_PROFILE_ID : the ID of the custom
intercept security profile.
ORGANIZATION_ID : the organization where you want to
create the custom intercept security profile.
BILLING_PROJECT_ID : the project ID to use for quotas.
ENDPOINT_GROUP_PROJECT_ID : the project ID where you
created the intercept endpoint group.
ENDPOINT_GROUP_ID : the ID of the endpoint group.
Terraform
To create a security profile, you can use a google_network_security_security_profile resource .
resource "google_network_security_security_profile" "default" {
name = "security-profile"
type = "CUSTOM_INTERCEPT"
parent = "organizations/${data.google_organization.default.org_id}"
location = "global"
custom_intercept_profile {
intercept_endpoint_group = google_network_security_intercept_endpoint_group.default.id
}
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
View details of a custom intercept security profile
You can view the details of a custom intercept security profile, such as its
name and endpoint group ID.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.get
Roles
Security
Profile Admin role ( networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
From the project picker, select your organization.
In the Security profiles tab, click the name of the security
profile.
gcloud
To view details of a custom intercept security profile, use the
gcloud network-security security-profiles custom-intercept describe
command :
gcloud network-security security-profiles custom-intercept describe CUSTOM_INTERCEPT_PROFILE_ID \
--billing-project BILLING_PROJECT_ID \
--location global
Replace the following:
CUSTOM_INTERCEPT_PROFILE_ID : the ID of the custom
intercept security profile.
BILLING_PROJECT_ID : the project ID to use for quotas.
In the output, the name of the custom intercept security profile is
displayed in the
organizations/ ORGANIZATION_ID /locations/global/securityProfiles/ SECURITY_PROFILE_ID
format.
List custom intercept security profiles
You can list all custom intercept security profiles in an organization,
including their IDs.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.list
Roles
Security Profile Admin role ( networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
From the project picker, select your organization.
In the Security profiles tab, view all security profiles of the
project.
gcloud
To list all the custom intercept security profiles, use the gcloud
network-security security-profiles custom-intercept list command:
gcloud network-security security-profiles custom-intercept list \
--organization ORGANIZATION_ID \
--location global \
--billing-project BILLING_PROJECT_ID
Replace the following:
ORGANIZATION_ID : the ID of the organization where the
custom intercept security profile is created.
BILLING_PROJECT_ID : the project ID to use for quotas.
Delete a custom intercept security profile
You can delete a custom intercept security profile by specifying its name and
organization. Before you delete the security profile, make sure that it isn't
used by a security profile group.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.delete
Roles
Security Profile Admin role ( networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
From the project picker, select your organization.
In the Security profiles tab, select the checkbox of the security
profile, and then click Delete .
Click Delete again to confirm.
gcloud
To delete the a custom intercept security profile, use the gcloud
network-security security-profiles custom-profile delete command:
gcloud network-security security-profiles custom-profile delete CUSTOM_INTERCEPT_PROFILE_ID \
--organization ORGANIZATION_ID \
--location global \
[--billing-project BILLING_PROJECT_ID ]
Replace the following:
CUSTOM_INTERCEPT_PROFILE_ID : the ID of the intercept
security profile that you want to delete.
ORGANIZATION_ID : the organization where the intercept
security profile is created.
BILLING_PROJECT_ID : the project ID to use for quotas.
What's next
Security profile groups overview
Security profiles overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
