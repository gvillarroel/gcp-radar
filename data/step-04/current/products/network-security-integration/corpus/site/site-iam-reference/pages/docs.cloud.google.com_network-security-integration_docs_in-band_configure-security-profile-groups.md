---
title: "Create and manage security profile groups \_|\_ Network Security Integration\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-security-profile-groups
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-endpoint-groups
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-security-profile-groups
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
This page describes how to create and manage security profile
groups
with a custom intercept security profile .
Before you begin
Enable the
Network Security API in
your project.
Install the gcloud CLI .
Create a custom intercept security
profile .
Roles
To create, view, update, or delete security profile groups, ask your
administrator to grant you the necessary Identity and Access Management (IAM)
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
Create a security profile group
When you create a security profile group, you specify the name of the
security profile group and the name of the custom security profile.
We recommend that you create the security profile group in a project owned
by your security administrator.
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
In the Security profile groups tab, click Create profile
group .
For Name , enter the name of the security profile group.
For Security profile group purpose , select NSI in-band .
For Custom intercept profile , select the custom security
profile for in-band integration.
Click Create .
gcloud
To create a security profile group, use the gcloud network-security
security-profile-groups create
command :
gcloud network-security security-profile-groups create SECURITY_PROFILE_GROUP_ID \
--custom-intercept-profile CUSTOM_INTERCEPT_PROFILE_ID \
--organization ORGANIZATION_ID \
--billing-project BILLING_PROJECT_ID \
--location global
Replace the following:
SECURITY_PROFILE_GROUP_ID : the ID of the security
profile group.
CUSTOM_INTERCEPT_PROFILE_ID : the ID of the custom
intercept security profile.
ORGANIZATION_ID : the ID of the organization where you
want to create the security profile group.
BILLING_PROJECT_ID : the project ID to use for quotas.
Terraform
To create a security profile group, you can use a google_network_security_security_profile_group resource .
resource "google_network_security_security_profile_group" "default" {
name = "security-profile-group"
parent = "organizations/${data.google_organization.default.org_id}"
location = "global"
custom_intercept_profile = google_network_security_security_profile.default.id
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
View details of a security profile group
You can view the details of a security profile group in an organization, such as
its name and custom intercept profile.
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
In the Security profile groups tab, click the name of the
security profile group.
gcloud
To view details of a security profile group, use the gcloud
network-security security-profile-groups describe
command :
gcloud network-security security-profile-groups describe SECURITY_PROFILE_GROUP_ID \
--organization ORGANIZATION_ID \
--billing-project BILLING_PROJECT_ID \
--location global
Replace the following:
SECURITY_PROFILE_GROUP_ID : the ID of the security
profile group.
ORGANIZATION_ID : the ID of the organization where the
security profile group is created.
BILLING_PROJECT_ID : the project ID to use for quotas.
In the output, the name of the security profile group is displayed in the
organizations/ ORGANIZATION_ID /locations/global/securityProfileGroups/ SECURITY_PROFILE_GROUP_ID
format.
List security profile groups
You can list all security profile groups in an organization, including their
IDs.
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
In the Security profile groups tab, you can see the list of
security profile groups.
gcloud
To list security profile groups, use the gcloud
network-security security-profile-groups list
command :
gcloud network-security security-profile-groups list \
--organization ORGANIZATION_ID \
--location global \
--billing-project BILLING_PROJECT_ID
Replace the following:
ORGANIZATION_ID : ID of the organization where the
security profile group is created.
BILLING_PROJECT_ID : the project ID to use for quotas.
Delete a security profile group
Before you delete a security profile group, delete the custom intercept
security
profile
that reference the security profile group.
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
In the Security profile groups tab, select the checkbox of the
security profile group and click Delete .
Click Delete again to confirm.
gcloud
To delete a security profile group, use the gcloud network-security
security-profile-groups delete
command :
gcloud network-security security-profile-groups delete SECURITY_PROFILE_GROUP_ID \
--organization ORGANIZATION_ID \
--billing-project BILLING_PROJECT_ID \
--location global
Replace the following:
SECURITY_PROFILE_GROUP_ID : the ID of the security
profile group that you want to delete.
ORGANIZATION_ID : the ID of the organization where the
security profile group is created.
BILLING_PROJECT_ID : the project ID to use for quotas.
What's next
Create and manage intercept endpoint groups
Security profile groups overview
Create and manage custom intercept security profiles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
