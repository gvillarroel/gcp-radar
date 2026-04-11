---
title: "Create and manage threat prevention security profiles \_|\_ Cloud Next Generation\
  \ Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/configure-security-profiles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/configure-security-profiles
  title: "Create and manage threat prevention security profiles \_|\_ Cloud Next Generation\
    \ Firewall \_|\_ Google Cloud Documentation"
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
Create and manage threat prevention security profiles
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create and manage security profiles
of the type threat-prevention by using the Google Cloud console or the Google Cloud CLI.
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
Roles
To get the permissions that you need to create, view, update, or delete
security profiles, ask your administrator to grant you the necessary
IAM roles on your
organization. For more information about granting roles, see
Manage access .
Create a threat prevention security profile
When you create a threat prevention security profile (security profile of type
threat-prevention ), you can specify the name of the security
profile as a string or as a unique URL identifier. The unique URL for an
organization-scoped security profile can be constructed in the following format:
organization/ ORGANIZATION_ID /locations/ LOCATION /securityProfiles/ SECURITY_PROFILE_NAME
If you use a unique URL identifier for the security profile name,
the organization and location of the security profile is already included in
the URL identifier. However, if you use only the security profile name, you must
specify the organization and location separately.
For more information about unique URL identifiers, see
security profile specifications .
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.create
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
In the project selector menu, select your organization.
Select the Security profiles tab.
Click Create profile .
Enter a name in the Name field.
Don't include sensitive information such as
personally identifiable information or security data in the
security profile name.
Optional: Enter a description in the Description field.
To create a Cloud Next Generation Firewall Enterprise security profile, in the Purpose
section, select Cloud NGFW Enterprise .
To create a threat prevention security profile, in the Type section,
select Threat Prevention .
Click Continue .
Optionally, add severity and threat overrides:
Under Severity overrides , click Edit next to the severity
level that you want to override.
In the Override action list, select the appropriate action for the
severity level.
To add a threat signature override, click Add signature by ID .
In the Signature ID field, enter the threat ID that you want to
override. You can view the threat IDs on the threat dashboard .
In the Override action list, select the appropriate action for the
threat ID.
Click Create .
gcloud
To create a threat prevention security profile, use the
gcloud network-security security-profiles threat-prevention create command :
gcloud network-security security-profiles threat-prevention create NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--project PROJECT_ID \
--description DESCRIPTION
Replace the following:
NAME : the name of the threat prevention security profile; you can specify
the name as a string or as a unique URL identifier.
Don't include sensitive information such as
personally identifiable information or security data in the
security profile name.
If you use a unique URL identifier for the NAME flag, you can omit
the ORGANIZATION_ID and LOCATION flags.
ORGANIZATION_ID : the organization where the threat prevention security
profile is created. If you use a unique URL identifier for the
NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the threat prevention security profile.
Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
PROJECT_ID : an optional project ID to use
for quotas and access restrictions on the threat prevention security profile.
DESCRIPTION : an optional description for the threat prevention security
profile.
Note: To add severity or threat overrides by using Google Cloud CLI,
see Add override actions in a threat prevention security profile .
View a threat prevention security profile
You can view the details of a specific threat prevention security profile in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.describe
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
Click a security profile of type Threat prevention to view the
profile details.
gcloud
To view the details of a threat prevention security profile, use the
gcloud beta network-security security-profiles describe command :
gcloud beta network-security security-profiles describe NAME \
--organization ORGANIZATION_ID \
--location LOCATION
Replace the following:
NAME : the name of the security profile of type
threat-prevention that you want to describe; you can specify the name
as a string or as a unique URL identifier.
If you use a unique URL identifier for the NAME flag, you can
omit the ORGANIZATION_ID and LOCATION flags.
ORGANIZATION_ID : the organization where the threat
prevention security profile is created. If you use a unique URL identifier
for the NAME flag, you can omit the
ORGANIZATION_ID flag.
LOCATION : the location of the threat prevention security
profile. Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the
LOCATION flag.
List threat prevention security profiles
You can list all the threat prevention security profiles in an organization.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.list
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
gcloud
To list all the threat prevention security profiles, use the
gcloud network-security security-profiles threat-prevention list command :
gcloud network-security security-profiles threat-prevention list \
--organization ORGANIZATION_ID \
--location LOCATION \
--project PROJECT_ID
Replace the following:
ORGANIZATION_ID : the organization where the threat prevention security
profiles are created.
LOCATION : the location of the threat prevention security profiles.
Location is always set to global .
PROJECT_ID : an optional project ID to use
for quotas and access restrictions on the threat prevention security profile.
Delete a threat prevention security profile
You can delete a threat prevention security profile by specifying its name,
location, and organization. However, if a security profile is referenced by a
security profile group, that security profile cannot be deleted.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.delete
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
Select the threat prevention security profile that you want to delete, and then
click Delete .
Click Delete again to confirm.
gcloud
To delete a threat prevention security profile, use the
gcloud network-security security-profiles threat-prevention delete command :
gcloud network-security security-profiles threat-prevention delete NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--project PROJECT_ID
Replace the following:
NAME : the name of the threat prevention security profile that you want to
delete; you can specify the name as a string or as a unique URL
identifier.
ORGANIZATION_ID : the organization where the threat prevention security
profile is created. If you use a unique URL identifier for the
NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the threat prevention security profile.
Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
PROJECT_ID : an optional project ID to use
for quotas and access restrictions on the threat prevention security profile.
Import a threat prevention security profile
You can import a threat prevention security profile (either custom-created or
previously exported) from a YAML file. When
importing a threat prevention security profile, if a profile with the same name
already exists, Cloud NGFW updates the existing profile.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.create
networksecurity.securityProfiles.update (required only if a
profile with the same name already exists)
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
gcloud
To import a threat prevention security profile from a YAML file, use the
gcloud beta network-security security-profiles import command :
gcloud beta network-security security-profiles import NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--source FILE_NAME
Replace the following:
NAME : the name of the security profile of type
threat-prevention that you want to import; you can specify the name
as a string or as a unique URL identifier.
If you use a unique URL identifier for the NAME flag, you can omit
the ORGANIZATION_ID and LOCATION flags.
ORGANIZATION_ID : the organization where the threat
prevention security profile is created. If you use a unique URL identifier
for the NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the threat prevention security
profile. Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
FILE_NAME : the path to the YAML file containing the
configuration export data for the threat prevention security profile. For
example, threat-prevention-sp.yaml .
The YAML file must not contain any output-only fields. Alternatively, you
can omit the source flag to read from the standard input.
Export a threat prevention security profile
You can export a threat prevention security profile to a YAML file. For
example, instead of using the user-interface to modify a large security profile,
you can use this functionality to export the security profile, modify it
quickly, and import it back.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.describe
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
gcloud
To export a threat prevention security profile to a YAML file, use the
gcloud beta network-security security-profiles export command :
gcloud beta network-security security-profiles export NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--destination FILE_NAME
Replace the following:
NAME : the name of the security profile of type
threat-prevention that you want to export; you can specify the name
as a string or as a unique URL identifier.
If you use a unique URL identifier for the NAME flag, you can omit
the ORGANIZATION_ID and LOCATION flags.
ORGANIZATION_ID : the organization where the threat
prevention security profile is created. If you use a unique URL identifier
for the NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the threat prevention security
profile. Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
FILE_NAME : the path to the YAML file into which
Cloud NGFW will export the configuration for the threat
prevention security profile. For example, threat-prevention-sp.yaml .
The exported configuration data doesn't contain any output-only fields.
Alternatively, you can omit the destination flag to write to the
standard output.
Add override actions in a threat prevention security profile
You can override the actions associated with specific
threat signatures
or severity levels
in an existing threat prevention security profile.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.update
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab.The tab shows a list of configured
security profiles.
Select the security profile where you want to override actions, and
then click Edit .
Under Severity overrides , click Edit next to the severity
level that you want to override.
In Override action list, select the appropriate action for the severity
level.
Click Confirm .
Click Save .
gcloud
To add an override to a threat prevention security profile, use the
gcloud network-security security-profiles threat-prevention add-override command :
gcloud network-security security-profiles threat-prevention add-override NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--project PROJECT_ID \
[--severities SEVERITIES | --threat-ids THREAT_IDS | --antivirus PROTOCOLS ] \
--action ACTION
Note: You can specify action overrides for the --severities flag, the
--threat-ids flag, or the --antivirus flag in a single command. To specify
action overrides with two or more override flags, run separate commands.
Replace the following:
NAME : the name of the security profile; you can specify
the name as a string or as a unique URL identifier.
ORGANIZATION_ID : the organization where the security
profile is created.
If you use a unique URL identifier for the
NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the security profile.
Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
PROJECT_ID : an optional project ID to use
for quotas and access restrictions on the security profile.
SEVERITIES : a comma-separated list of severity levels
to override the action for. The firewall endpoint applies the configured
--action flag to all threats of the specified severity levels.
The severity can be any of following:
INFORMATIONAL
LOW
MEDIUM
HIGH
CRITICAL
THREAT_IDS : a comma-separated list of threat signature IDs
to override the action for. The firewall endpoint applies the configured
--action flag to all threats of the specified threat IDs.
PROTOCOLS : a comma-separated list of network
protocols to monitor for the antivirus threat. For more information, see supported protocols .
ACTION : the action for the specified threat IDs
or severities. For more information, see supported actions .
Note: For specific threat types, not all actions are allowed.
List override actions in a threat prevention security profile
You can list all the override actions in a threat prevention security profile.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.list
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab.The tab shows a list of configured
security profiles.
Select the security profile to view the configured severity override
actions and threat signature override actions.
gcloud
To list all override actions in a threat prevention security profile, use the
gcloud network-security security-profiles threat-prevention list-overrides command :
gcloud network-security security-profiles threat-prevention list-overrides NAME \
--organization ORGANIZATION_ID \
--location LOCATION
Replace the following:
NAME : the name of the security profile; you can specify
the name as a string or as a unique URL identifier.
ORGANIZATION_ID : the organization where the security
profile is created.
If you use a unique URL identifier for the
NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the security profile.
Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
Update override actions in a threat prevention security profile
You can update existing override actions for severity levels or threat signatures
in a threat prevention security profile.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.update
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
Select the security profile, and then click Edit .
Under Severity overrides , click Edit next to the severity
level where you want to update override action.
In the Override action list, select the appropriate action for the severity
level.
Click Confirm .
Click Save .
gcloud
To update an override action in a threat prevention security profile, use the
gcloud network-security security-profiles threat-prevention update-override command :
gcloud network-security security-profiles threat-prevention update-override NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--project PROJECT_ID \
[--severities SEVERITIES | --threat-ids THREAT_IDS | --antivirus PROTOCOLS ] \
--action ACTION
Note: You can specify action overrides for the --severities flag, the
--threat-ids flag, or the --antivirus flag in a single command. To specify
action overrides with two or more override flags, run separate commands.
Replace the following:
NAME : the name of the security profile; you can specify
the name as a string or as a unique URL identifier.
ORGANIZATION_ID : the organization where the security
profile is created.
If you use a unique URL identifier for the
NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the security profile.
Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
PROJECT_ID : an optional project ID to use
for quotas and access restrictions on the security profile.
SEVERITIES : a comma-separated list of severity levels
you want to update overrides for. The severity can be any of following:
INFORMATIONAL
LOW
MEDIUM
HIGH
CRITICAL
THREAT_IDS : a comma-separated list of threat signature IDs
you want to update overrides for.
PROTOCOLS : a comma-separated list of network
protocols to monitor for the antivirus threat. The following protocols
are supported:
SMTP
SMB
POP3
IMAP
HTTP2
HTTP
FTP
ACTION : the default action for the specified threat IDs
or severities. The action can be one of the following:
DEFAULT
ALLOW
DENY
ALERT
Note: For specific threat types, not all actions are allowed.
Delete override actions from a threat prevention security profile
You can delete existing override actions for severity levels or threat
signatures from a threat prevention security profile.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.securityProfiles.delete
Roles
Security Profile Admin ( roles/networksecurity.securityProfileAdmin )
Console
In the Google Cloud console, go to the Security profiles page.
Go to Security profiles
Select the Security profiles tab. The tab shows a list of configured
security profiles.
Select the security profile, and then click Edit .
Under Severity overrides , click Edit next to the severity
level where you want to delete the override action.
In the Override action list, select No override .
Click Confirm .
Under Signature overrides , select the threat ID that you want to delete.
Click Delete .
Click Save .
gcloud
To delete an override action from a threat prevention security profile, use the
gcloud network-security security-profiles threat-prevention delete-override command :
gcloud network-security security-profiles threat-prevention delete-override NAME \
--organization ORGANIZATION_ID \
--location LOCATION \
--project PROJECT_ID \
[--severities SEVERITIES | --threat-ids THREAT_IDS | --antivirus PROTOCOLS ]
Note: You can specify action overrides for the --severities flag, the
--threat-ids flag, or the --antivirus flag in a single command. To specify
action overrides with two or more override flags, run separate commands.
Replace the following:
NAME : the name of the security profile; you can specify
the name as a string or as a unique URL identifier.
ORGANIZATION_ID : the organization where the security
profile is created.
If you use a unique URL identifier for the
NAME flag, you can omit the ORGANIZATION_ID flag.
LOCATION : the location of the security profile.
Location is always set to global . If you use a unique URL identifier
for the NAME flag, you can omit the LOCATION flag.
PROJECT_ID : an optional project ID to use
for quotas and access restrictions on the security profile.
SEVERITIES : a comma-separated list of severity levels
you want to delete overrides for. The severity can be any of following:
INFORMATIONAL
LOW
MEDIUM
HIGH
CRITICAL
THREAT_IDS : a comma-separated list of threat signature
IDs you want to delete overrides for.
PROTOCOLS : a comma-separated list of network
protocols to monitor for the antivirus threat. The following protocols
are supported:
SMTP
SMB
POP3
IMAP
HTTP2
HTTP
FTP
What's next
Create and manage security profile groups
Create and manage firewall endpoints
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
