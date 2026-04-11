---
title: "Create and manage security profile groups \_|\_ Network Security Integration\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/configure-security-profile-groups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-endpoint-groups
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/configure-security-profile-groups
  title: "Create and manage security profile groups \_|\_ Network Security Integration\
    \ \_|\_ Google Cloud Documentation"
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
Create and manage security profile groups
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create and manage
security profile groups
with a custom security profile by using the Google Cloud CLI.
Before you begin
You must enable
the Network Security API
in your project.
Install the gcloud CLI if you want to run the gcloud
command-line examples in this guide.
You must have a custom mirroring security profile .
Roles
To get the permissions that you need to create, view, update, or delete
security profile groups, ask your administrator to grant you the necessary
Identity and Access Management (IAM) roles
on your organization. For more information about granting roles, see
Manage access to projects, folders, and organizations .
To check the progress of the operations listed on this page, make sure that
your user role has the following
Compute Network User role
( roles/compute.networkUser ) permissions:
networksecurity.operations.get
networksecurity.operations.list
Create a security profile group with custom profile
You can only create a security profile group with a security profile of type
CUSTOM_MIRRORING .
When you create a security profile group, you can specify the name of the
security profile group as a string or as a unique URL identifier.
The unique URL for an organization-scoped security profile group can be
constructed in the following format:
organizations/ ORGANIZATION_ID /locations/ LOCATION /securityProfileGroups/ SECURITY_PROFILE_GROUP_NAME
Replace the following:
ORGANIZATION_ID : ID of the organization.
LOCATION : scope of the security profile group.
Location is always set to global .
SECURITY_PROFILE_GROUP_NAME : the name of the security
profile group.
If you use a unique URL identifier for the security profile group name, the
organization and location of the security profile group is already included
in the URL identifier. However, if you use only the security profile group name,
you must specify the organization and location separately. For more information
about unique URL identifiers, see
Specifications .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.create
Roles
Security Profile Admin role ( networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profile groups
page.
Go to Security profile groups
From the project picker, select your organization.
On the Security profile groups tab, click Create profile group .
For Name , enter the name of the security profile group.
For Security profile group purpose , select NSI out-of-band .
For Custom mirroring profile , select the custom security
profile for in-band integration.
Click Create .
gcloud
To create a security profile group, use the
gcloud network-security security-profile-groups create command :
gcloud network-security security-profile-groups \
create SECURITY_PROFILE_GROUP_NAME \
--custom-mirroring-profile CUSTOM_MIRROING_PROFILE_NAME \
--description DESCRIPTION \
--organization ORGANIZATION_ID \
--location=global \
--billing-project PROJECT_ID
Replace the following:
SECURITY_PROFILE_GROUP_NAME : the name of the security
profile group; you can specify the name as a string or as a unique
URL identifier.
CUSTOM_MIRRORING_PROFILE_NAME : the name of the custom
mirroring security profile.
DESCRIPTION : an optional description for the security
profile group.
ORGANIZATION_ID : the organization where the security
profile group is created.
PROJECT_ID : the project ID to use
for quotas and access restrictions on the security profile group.
Terraform
To create a security profile group, you can use a google_network_security_security_profile_group resource .
resource "google_network_security_security_profile_group" "default" {
name = "security-profile-group"
parent = "organizations/${data.google_organization.default.org_id}"
location = "global"
custom_mirroring_profile = google_network_security_security_profile.default.id
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
View security profile group
You can view the details of a specific security profile group in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.get
Roles
Security Profile Admin role ( networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profile groups page.
Go to Security profile groups
From the project picker, select your organization.
On the Security profile groups tab, click the name of the
security profile group.
gcloud
To view details of a security profile group, use the
gcloud network-security security-profile-groups describe command :
gcloud network-security security-profile-groups \
describe SECURITY_PROFILE_GROUP_NAME \
--organization ORGANIZATION_ID \
--location=global \
--billing-project PROJECT_ID
Replace the following:
SECURITY_PROFILE_GROUP_NAME : the name of the security
profile group; you can specify the name as a string or as a unique URL
identifier.
ORGANIZATION_ID : the organization where the security
profile group is created.
PROJECT_ID : the project ID to use
for quotas and access restrictions on the security profile group.
List security profile groups
You can list all the custom mirroring security profile groups in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.list
Roles
Security Profile Admin role ( networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profile groups page.
Go to Security profile groups
From the project picker, select your organization.
On the Security profile groups tab, you can see the list of
security profile groups.
gcloud
To list custom mirroring security profile groups, use the
gcloud network-security security-profile-groups list command :
gcloud network-security security-profile-groups list \
--organization ORGANIZATION_ID \
--location=global \
--filter CUSTOM_MIRRORING_PROFILE
--billing-project PROJECT_ID
Replace the following:
ORGANIZATION_ID : the organization where the security
profile group is created.
CUSTOM_MIRRORING_PROFILE : name of the
profile groups that have a custom_mirroring_profile defined.
PROJECT_ID : the project ID to use
for billing of the security profile group.
Update a security profile group
You can update the description and labels of the security profile
referenced in a security profile group.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.update
Roles
Security Profile Admin role ( networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profile groups page.
Go to Security profile groups
From the project picker, select your organization.
Click your security profile group.
Click Edit .
After you edit the rule, click Save .
gcloud
To update a security profile group, use the
gcloud network-security security-profile-groups update command :
gcloud network-security security-profile-groups \
update SECURITY_PROFILE_GROUP_NAME \
--organization ORGANIZATION_ID \
--location=global \
--description DESCRIPTION
Replace the following:
SECURITY_PROFILE_GROUP_NAME : the name of the security
profile group that you want to update; you can specify the name as a
string or as a unique URL identifier.
ORGANIZATION_ID : the organization where the security
profile group is created.
DESCRIPTION : an optional description for the security
profile group.
Delete a security profile group
You can delete a security profile group by specifying its name,
location, and organization. However, if a custom security profile is
referenced by a network firewall policy, that security profile group
cannot be deleted.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.delete
Roles
Security Profile Admin role ( networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profile groups page.
Go to Security profile groups
From the project picker, select your
organization.
On the Security profile groups tab, select the checkbox of the
security profile group that you want to delete, and then click Delete .
Click Delete again to confirm.
gcloud
To delete a security profile group, use the
gcloud network-security security-profile-groups delete command :
gcloud network-security security-profile-groups \
delete SECURITY_PROFILE_GROUP_NAME \
--custom-profile CUSTOM_PROFILE_NAME \
--organization ORGANIZATION_ID \
--location-global \
--billing-project PROJECT_ID
Replace the following:
SECURITY_PROFILE_GROUP_NAME : the name of the security
profile group that you want to delete; you can specify the name as a
string or as a unique URL identifier.
CUSTOM_PROFILE_NAME : the name of the custom security
profile.
ORGANIZATION_ID : the organization where the security
profile group is created.
PROJECT_ID : the project ID to use
for quotas and access restrictions on the security profile group.
What's next
Create and manage mirroring endpoint groups
Security profile groups overview
Create and manage custom mirroring security profiles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
