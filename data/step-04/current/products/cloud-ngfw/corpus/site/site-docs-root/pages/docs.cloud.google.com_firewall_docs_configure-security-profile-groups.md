---
title: "Create and manage security profile groups \_|\_ Cloud Next Generation Firewall\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/configure-security-profile-groups
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/configure-security-profile-groups
  title: "Create and manage security profile groups \_|\_ Cloud Next Generation Firewall\
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
Create and manage security profile groups
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create and manage security profile groups
by using the Google Cloud console or the Google Cloud CLI.
Note: To check the progress of the operations listed on this page,
make sure that your user role has the following
Compute Network User role ( roles/compute.networkUser )
permissions:
networksecurity.operations.get
networksecurity.operations.list
Before you begin
You must enable
the Network Security API
in your project.
Install the gcloud CLI if you want to run the gcloud
command-line examples in this guide.
You need a threat prevention security profile
or a URL filtering security profile .
Roles
To get the permissions that you need to create, view, update, or delete
security profile groups, ask your administrator to grant you the necessary
IAM roles on your
organization. For more information about granting roles, see
Manage access .
Create a security profile group
Each security profile group can contain up to one security profile of each of
the following types:
url-filtering
threat-prevention
When you create a security profile group, you can specify the name of the
security profile group as a string or as a unique URL identifier. The unique URL
for an organization-scoped security profile group can be constructed in the
following format:
organization/ ORGANIZATION_ID /locations/ LOCATION /securityProfileGroups/ SECURITY_PROFILE_GROUP_NAME
If you use a unique URL identifier for the security profile group name,
the organization and location of the security profile group is already included in
the URL identifier. However, if you use only the security profile group name, you must
specify the organization and location separately.
For more information about unique URL identifiers, see
security profile group specifications .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.create
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
In the project selector menu, select your organization.
Select the Security profile groups tab.
Configure a security profile group:
Click Create profile group .
Enter a name in the Name field.
Don't include sensitive information such as
personally identifiable information or security data in the
security profile group name.
Optional: Enter a description in the Description field.
To create a security profile group for Cloud Next Generation Firewall Enterprise, in
the Purpose section, select Cloud NGFW Enterprise .
In the Threat prevention profile list or the URL filtering profile
list, select the security profile that you want to add to this security
profile group.
Click Create .
gcloud
To create a security profile group, use the gcloud network-security
security-profile-groups create
command :
gcloud network-security security-profile-groups create NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--project PROJECT_ID \
--url-filtering-profile SECURITY_PROFILE_URL \
--threat-prevention-profile SECURITY_PROFILE_URL \
--description DESCRIPTION
Replace the following:
NAME : the name of the security profile group; you can
specify the name as a string or as a unique URL identifier.
Don't include sensitive information such as
personally identifiable information or security data in the
security profile group name.
ORGANIZATION_ID : the organization where the security
profile group is created. If you use a unique URL identifier for the
name flag, you can omit the organization flag.
LOCATION : the location of the security profile group.
Location is always set to global . If you use a unique URL identifier
for the name flag, you can omit the location flag.
PROJECT_ID : an optional project ID to use for quotas
and access restrictions on the security profile group.
SECURITY_PROFILE_URL : a unique URL identifier for a
security profile of either url-filtering or threat-prevention
type. You must add at least one of these security profiles.
DESCRIPTION : an optional description for the security
profile group.
View security profile group
You can view the details of a specific security profile group in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.get
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profile groups tab. The tab shows a list of
configured security profile groups.
Select the security profile group to view its details.
gcloud
To view details of a security profile group, use the gcloud
network-security security-profile-groups describe
command :
gcloud network-security security-profile-groups describe NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--project PROJECT_ID
Replace the following:
NAME : the name of the security profile group; you can
specify the name as a string or as a unique URL identifier.
ORGANIZATION_ID : the organization where the security
profile group is created. If you use a unique URL identifier for the
name flag, you can omit the organization flag.
LOCATION : the location of the security profile group.
Location is always set to global . If you use a unique URL identifier
for the name flag, you can omit the location flag.
PROJECT_ID : an optional project ID to use for quotas
and access restrictions on the security profile group.
List security profile groups
You can list all the security profile groups in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.list
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profile groups tab. The tab shows a list of
configured security profile groups.
gcloud
To list security profile groups, use the gcloud network-security
security-profile-groups list
command :
gcloud network-security security-profile-groups list \
--organization ORGANIZATION_ID \
--location LOCATION \
--billing-project PROJECT_ID
Replace the following:
ORGANIZATION_ID : the organization where the security
profile group is created. If you use a unique URL identifier for the
name flag, you can omit the organization flag.
LOCATION : the location of the security profile group.
Location is always set to global . If you use a unique URL identifier
for the name flag, you can omit the location flag.
PROJECT_ID : an optional project ID to use for billing
of the security profile group.
Update a security profile group
You can update the security profile name referenced in a security profile group.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.update
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profile groups tab. The tab shows a list of
configured security profile groups.
Select the security profile group, and then click Edit .
Update the required fields, and then click Save .
gcloud
To update a security profile group, use the gcloud network-security
security-profile-groups update
command :
gcloud network-security security-profile-groups update NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--clear-threat-prevention-profile | --threat-prevention-profile SECURITY_PROFILE_URL \
--clear-url-filtering-profile | --url-filtering-profile SECURITY_PROFILE_URL \
--project PROJECT_ID \
--description DESCRIPTION
Replace the following:
NAME : the name of the security profile group that you
want to update; you can specify the name as a string or as a unique URL
identifier.
ORGANIZATION_ID : the organization where the security
profile group is created. If you use a unique URL identifier for the
name flag, you can omit the organization flag.
LOCATION : the location of the security profile group.
Location is always set to global . If you use a unique URL identifier
for the name flag, you can omit the location flag.
SECURITY_PROFILE_URL : a unique URL identifier of the
security profile of either url-filtering or threat-prevention
type.
Specify at most one of these flags:
clear-threat-prevention-profile : clear the threat-prevention-profile field.
threat-prevention-profile : update the threat-prevention-profile
field with unique URL identifier of the security profile of
threat-prevention type.
Similarly, specify at most one of these flags:
clear-url-filtering-profile : clear the url-filtering-profile field.
url-filtering-profile : update the url-filtering-profile field with
the unique URL identifier of the security profile of the url-filtering type.
PROJECT_ID : an optional project ID to use for quotas
and access restrictions on the security profile group.
DESCRIPTION : an optional description for the security
profile group.
Delete a security profile group
You can delete a security profile group by specifying its name,
location, and organization. However, if a security profile is referenced by a
firewall policy, that security profile group cannot be deleted.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfileGroups.delete
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profile groups tab. The tab shows a list of
configured security profile groups.
Select the security profile group, and then click Delete .
Click Delete again to confirm.
gcloud
To delete a security profile group, use the gcloud network-security
security-profile-groups delete
command :
gcloud network-security security-profile-groups delete NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--billing-project PROJECT_ID
Replace the following:
NAME : the name of the security profile group that you
want to delete; you can specify the name as a string or as a unique URL
identifier.
ORGANIZATION_ID : the organization where the security
profile group is created. If you use a unique URL identifier for the
name flag, you can omit the organization flag.
LOCATION : the location of the security profile group.
Location is always set to global . If you use a unique URL identifier
for the name flag, you can omit the location flag.
PROJECT_ID : an optional project ID to use for quotas
and access restrictions on the security profile group.
What's next
Create and manage firewall endpoints
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
