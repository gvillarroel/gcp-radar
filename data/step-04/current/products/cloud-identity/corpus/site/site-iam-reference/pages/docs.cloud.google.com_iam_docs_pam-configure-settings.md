---
title: "Configure Privileged Access Manager settings \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/pam-configure-settings
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/pam-configure-settings
  title: "Configure Privileged Access Manager settings \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure Privileged Access Manager settings | Identity and Access Management (IAM) | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
IAM
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin
Enable service accounts as approvers
Customize notification preferences
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Configure Privileged Access Manager settings
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Enable service accounts as approvers
Customize notification preferences
What's next
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
As a Privileged Access Manager settings administrator, you can configure some additional
settings for the approval workflow and notification preferences.
The settings that you configure at the organization or folder level are
automatically applied to their child resources, unless you explicitly override
the settings at the child resource level.
You can enable service accounts as eligible approvers. This
setting lets administrators add service accounts and identities in workload identity pools as approvers when creating or modifying an entitlement.
You can customize resource-wide notification preferences for various Privileged Access Manager
events by selectively disabling notifications for
specific events and specific personas, or disabling all notifications.
Before you begin
To get the permissions that
you need to configure Privileged Access Manager settings,
ask your administrator to grant you the
following IAM roles:
Configure settings for your project, folder, or organization:
PAM Settings Admin ( roles/privilegedaccessmanager.settingsAdmin )
on your organization
View settings for your project, folder, or organization:
PAM Settings Viewer ( roles/privilegedaccessmanager.settingsViewer )
on your project, folder, or organization
These predefined roles contain
the permissions required to configure Privileged Access Manager settings. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to configure Privileged Access Manager settings:
Configure settings:
privilegedaccessmanager.settings.update
View settings:
privilegedaccessmanager.settings.get
privilegedaccessmanager.settings.fetchEffective
Enable service accounts as approvers
Console gcloud REST Terraform
More
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project.
Click the Settings tab.
In the Settings source section, Inherit from parent is selected by default.
To override settings inherited from the parent resource on a
child resource, in the Service account as approver section, select Override inheritance .
To enable the service account as approver setting, turn on the Enable Service Account As Approver toggle
and click Save .
Note: If you disable this setting, grants that require approvals from
service accounts won't get approved. If your entitlements have
only service accounts as approvers, then those entitlements won't be effective.
The
gcloud alpha pam settings update
command configures additional Privileged Access Manager.
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : Optional. The resource type that you want to update the settings for. Use the value organization ,
folder , or project .
RESOURCE_ID : Used with
RESOURCE_TYPE . The ID of the Google Cloud
project, folder, or organization that you want to manage entitlements
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like
123456789012 .
SA_AS_APPROVER : A boolean value in the serviceAccountApproverSettings field that indicates whether service accounts are allowed to approve grants. The default value is false .
If you specify the serviceAccountApproverSettings field with a value, then that setting is applied to your resource.
If you specify the serviceAccountApproverSettings field but leave it empty, then the default settings are applied to your resource.
If you don't specify the serviceAccountApproverSettings field at all, then your resource inherits the settings from the parent resource.
If you disable this setting, the grants that require approvals from
service accounts won't get approved. If your entitlements have
only service accounts as approvers, those entitlements won't be effective.
request.json : A file containing the modified settings. To create this file,
get the existing settings, save the response in file named
request.json , and then modify it to use as the body of your
update request. You must include the ETAG in the body to update the
latest version of the settings.
Save the following content in a file called filename.yaml :
emailNo t i f ica t io n Se tt i n gs :
cus t omNo t i f ica t io n Behavior :
admi n No t i f ica t io ns :
gra nt Ac t iva te d : NOTIFICATION_MODE_1
gra nt Ac t iva t io n Failed : DISABLED
gra nt E n ded : ENABLED
gra nt Ex ternall yModi f ied : ENABLED
approverNo t i f ica t io ns :
pe n di n gApproval : NOTIFICATION_MODE_2
reques ter No t i f ica t io ns :
e nt i tle me nt Assig ne d : ENABLED
gra nt Ac t iva te d : ENABLED
gra nt Expired : NOTIFICATION_MODE_3
gra nt Revoked : ENABLED
e ta g : ' "ZjlkNWZlMWUtNDlhYS00YjJjAYlzNWYtZWFkNGVjOWU3NWMkBwYRsottW5Md" '
na me : RESOURCE_TYPE / RESOURCE_ID /loca t io ns /global/se tt i n gs
serviceAccou nt ApproverSe tt i n gs :
e na bled : SA_AS_APPROVER
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud alpha pam settings update \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID \
--settings-file FILENAME .yaml
Windows (PowerShell)
gcloud alpha pam settings update `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID `
--settings-file FILENAME .yaml
Windows (cmd.exe)
gcloud alpha pam settings update ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--settings-file FILENAME .yaml
You should receive a response similar to the following:
Parsed [location] resource: RESOURCE_TYPE / RESOURCE_ID /locations/global
Request issued for: [global]
Updated location [global].
createTime: '2025-05-18T10:10:10.101010101Z'
emailNotificationSettings:
customNotificationBehavior:
adminNotifications:
grantActivated: ENABLED
grantActivationFailed: DISABLED
grantEnded: ENABLED
grantExternallyModified: ENABLED
approverNotifications:
pendingApproval: ENABLED
requesterNotifications:
entitlementAssigned: ENABLED
grantActivated: ENABLED
grantExpired: ENABLED
grantRevoked: ENABLED
etag: "ZjlkNWZlMWUtNDlhYS00YjJjAYlzNWYtZWFkNGVjOWU3NWMkBwYRsottW5Md1"
name: RESOURCE_TYPE / RESOURCE_ID /locations/global/settings
serviceAccountApproverSettings:
enabled: true
updateTime: '2025-05-18T10:10:40.101010101Z'
The Privileged Access Manager API's
updateSettings
method configures additional Privileged Access Manager.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that you want to update the settings for, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
UPDATED_FIELDS : A comma-separated list of fields that need to be updated in the settings. For example, emailNotificationSettings,serviceAccountApproverSettings .
To update all fields that can be modified, set the update mask to * .
SA_AS_APPROVER : A boolean value in the serviceAccountApproverSettings field that indicates whether service accounts are allowed to approve grants. The default value is false .
If you specify the serviceAccountApproverSettings field with a value, then that setting is applied to your resource.
If you specify the serviceAccountApproverSettings field but leave it empty, then the default settings are applied to your resource.
If you don't specify the serviceAccountApproverSettings field at all, then your resource inherits the settings from the parent resource.
If you disable this setting, the grants that require approvals from
service accounts won't be approved. If your entitlements have
only service accounts as approvers, those entitlements aren't effective.
request.json : A file containing the modified settings. To create this file,
get the existing settings, save the response in file named
request.json , and then modify it to use as the body of your
update request. You must include the ETAG in the body to update the
latest version of the settings.
HTTP method and URL:
PATCH https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/settings?updateMask= UPDATED_FIELDS
Request JSON body:
{
"emailNotificationSettings": {
"customNotificationBehavior": {
"adminNotifications": {
"grantActivated": " NOTIFICATION_MODE_1 ",
"grantActivationFailed": "DISABLED",
"grantEnded": "ENABLED",
"grantExternallyModified": "ENABLED"
},
"approverNotifications": {
"pendingApproval": " NOTIFICATION_MODE_2 "
},
"requesterNotifications": {
"entitlementAssigned": "ENABLED",
"grantActivated": "ENABLED",
"grantExpired": " NOTIFICATION_MODE_3 ",
"grantRevoked": "ENABLED"
}
}
},
"etag": "\"ZjlkNWZlMWUtNDlhYS00YjJjAYlzNWYtZWFkNGVjOWU3NWMkBwYRsottW5Md\"",
"name": " SCOPE /locations/global/settings",
"serviceAccountApproverSettings": {
"enabled": SA_AS_APPROVER
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/settings?updateMask= UPDATED_FIELDS "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/settings?updateMask= UPDATED_FIELDS " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": " SCOPE /locations/global/operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.privilegedaccessmanager.v1beta.OperationMetadata",
"createTime": "2024-03-25T01:55:02.544562950Z",
"target": " SCOPE /locations/global/settings",
"verb": "update",
"requestedCancellation": false,
"apiVersion": "v1beta"
},
"done": false
}
To check on the progress of an update operation, you can send a
GET request to the following endpoint:
https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/operations/ OPERATION_ID
Send a GET request to the following endpoint to list all
operations:
https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/operations
You can use Terraform to configure
Privileged Access Manager settings. For more information, see
google_privileged_access_manager_settings
in the Terraform documentation.
Customize notification preferences
Console gcloud REST Terraform
More
Go to the Privileged Access Manager page.
Go to Privileged Access Manager
Select the organization, folder, or project.
Click the Settings tab.
In the Notifications section, Inherit from parent is selected by default.
The following table shows the default notification preferences:
Event
Admin
Requester
Approver
Entitlement assigned
-
✓
-
Grant requires approval
-
-
✓
Grants are activated
✓
✓
-
Grants are denied
-
✓
-
Grants are expired
-
✓
-
Grants have ended
✓
✓
-
Grants are revoked
-
✓
-
Grants are externally modified
✓
✓
-
Grants activation failed
✓
✓
-
To override settings inheritance from the parent, turn on the
Send notifications for the following events toggle.
To disable notifications for the required PAM event and persona,
clear the corresponding checkboxes, and click Save .
To disable all the notifications, clear
Send notifications for the following events , and click Save .
The
gcloud alpha pam settings update
command configures additional Privileged Access Manager.
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : Optional. The resource type that you want to update the settings for. Use the value organization ,
folder , or project .
RESOURCE_ID : Used with
RESOURCE_TYPE . The ID of the Google Cloud
project, folder, or organization that you want to manage entitlements
for. Project IDs are alphanumeric strings, like my-project .
Folder and organization IDs are numeric, like
123456789012 .
NOTIFICATION_MODE :
In the emailNotificationSettings field, use ENABLED to send notification emails for the event, or DISABLED to prevent them.
If you specify the emailNotificationSettings field with a value, then that setting is applied to your resource.
If you specify the emailNotificationSettings field but leave it empty, then the default settings are applied to your resource.
If you don't specify the emailNotificationSettings field at all, then your resource inherits the settings from the parent resource.
request.json : A file containing the modified settings. To create this file,
get the existing settings, save the response in file named
request.json , and then modify it to use as the body of your
update request. You must include the ETAG in the body to update the
latest version of the settings.
Save the following content in a file called filename.yaml :
emailNo t i f ica t io n Se tt i n gs :
cus t omNo t i f ica t io n Behavior :
admi n No t i f ica t io ns :
gra nt Ac t iva te d : NOTIFICATION_MODE_1
gra nt Ac t iva t io n Failed : DISABLED
gra nt E n ded : ENABLED
gra nt Ex ternall yModi f ied : ENABLED
approverNo t i f ica t io ns :
pe n di n gApproval : NOTIFICATION_MODE_2
reques ter No t i f ica t io ns :
e nt i tle me nt Assig ne d : ENABLED
gra nt Ac t iva te d : ENABLED
gra nt Expired : NOTIFICATION_MODE_3
gra nt Revoked : ENABLED
e ta g : ' "ZjlkNWZlMWUtNDlhYS00YjJjAYlzNWYtZWFkNGVjOWU3NWMkBwYRsottW5Md" '
na me : RESOURCE_TYPE / RESOURCE_ID /loca t io ns /global/se tt i n gs
serviceAccou nt ApproverSe tt i n gs :
e na bled : SA_AS_APPROVER
Execute the
following
command:
Linux, macOS, or Cloud Shell
gcloud alpha pam settings update \
--location = global \
-- RESOURCE_TYPE = RESOURCE_ID \
--settings-file FILENAME .yaml
Windows (PowerShell)
gcloud alpha pam settings update `
--location = global `
-- RESOURCE_TYPE = RESOURCE_ID `
--settings-file FILENAME .yaml
Windows (cmd.exe)
gcloud alpha pam settings update ^
--location = global ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--settings-file FILENAME .yaml
You should receive a response similar to the following:
Parsed [location] resource: RESOURCE_TYPE / RESOURCE_ID /locations/global
Request issued for: [global]
Updated location [global].
createTime: '2025-05-18T10:10:10.101010101Z'
emailNotificationSettings:
customNotificationBehavior:
adminNotifications:
grantActivated: ENABLED
grantActivationFailed: DISABLED
grantEnded: ENABLED
grantExternallyModified: ENABLED
approverNotifications:
pendingApproval: ENABLED
requesterNotifications:
entitlementAssigned: ENABLED
grantActivated: ENABLED
grantExpired: ENABLED
grantRevoked: ENABLED
etag: "ZjlkNWZlMWUtNDlhYS00YjJjAYlzNWYtZWFkNGVjOWU3NWMkBwYRsottW5Md1"
name: RESOURCE_TYPE / RESOURCE_ID /locations/global/settings
serviceAccountApproverSettings:
enabled: true
updateTime: '2025-05-18T10:10:40.101010101Z'
The Privileged Access Manager API's
updateSettings
method configures additional Privileged Access Manager.
Before using any of the request data,
make the following replacements:
SCOPE : The organization, folder, or project that you want to update the settings for, in the format of
organizations/ ORGANIZATION_ID ,
folders/ FOLDER_ID , or
projects/ PROJECT_ID . Project IDs are
alphanumeric strings, like my-project . Folder and
organization IDs are numeric, like 123456789012 .
UPDATED_FIELDS : A comma-separated list of fields that need to be updated in the settings. For example, emailNotificationSettings,serviceAccountApproverSettings .
To update all fields that can be modified, set the update mask to * .
NOTIFICATION_MODE :
In the emailNotificationSettings field, use ENABLED to send notification emails for the event or DISABLED to prevent them.
If you specify the emailNotificationSettings field with a value, then that setting is applied to your resource.
If you specify the emailNotificationSettings field but leave it empty, then the default settings are applied to your resource.
If you don't specify the emailNotificationSettings field at all, then your resource inherits the settings from the parent resource.
request.json : A file containing the modified settings. To create this file,
get the existing settings, save the response in file named
request.json , and then modify it to use as the body of your
update request. You must include the ETAG in the body to update the
latest version of the settings.
HTTP method and URL:
PATCH https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/settings?updateMask= UPDATED_FIELDS
Request JSON body:
{
"emailNotificationSettings": {
"customNotificationBehavior": {
"adminNotifications": {
"grantActivated": " NOTIFICATION_MODE_1 ",
"grantActivationFailed": "DISABLED",
"grantEnded": "ENABLED",
"grantExternallyModified": "ENABLED"
},
"approverNotifications": {
"pendingApproval": " NOTIFICATION_MODE_2 "
},
"requesterNotifications": {
"entitlementAssigned": "ENABLED",
"grantActivated": "ENABLED",
"grantExpired": " NOTIFICATION_MODE_3 ",
"grantRevoked": "ENABLED"
}
}
},
"etag": "\"ZjlkNWZlMWUtNDlhYS00YjJjAYlzNWYtZWFkNGVjOWU3NWMkBwYRsottW5Md\"",
"name": " SCOPE /locations/global/settings",
"serviceAccountApproverSettings": {
"enabled": SA_AS_APPROVER
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/settings?updateMask= UPDATED_FIELDS "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/settings?updateMask= UPDATED_FIELDS " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": " SCOPE /locations/global/operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.privilegedaccessmanager.v1beta.OperationMetadata",
"createTime": "2024-03-25T01:55:02.544562950Z",
"target": " SCOPE /locations/global/settings",
"verb": "update",
"requestedCancellation": false,
"apiVersion": "v1beta"
},
"done": false
}
To check on the progress of an update operation, you can send a
GET request to the following endpoint:
https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/operations/ OPERATION_ID
Send a GET request to the following endpoint to list all
operations:
https://privilegedaccessmanager.googleapis.com/v1beta/ SCOPE /locations/global/operations
You can use Terraform to configure
Privileged Access Manager settings. For more information, see
google_privileged_access_manager_settings
in the Terraform documentation.
What's next
View and export Privileged Access Manager settings
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
