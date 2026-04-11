---
title: "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/how-to-use-security-health-analytics
  title: "Using Security Health Analytics \_|\_ Security Command Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Using Security Health Analytics
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
This page explains how to manage Security Health Analytics findings using Security Command Center.
Security Health Analytics is a built-in service in Security Command Center that scans the
resources in your cloud environment and generates findings for any
misconfigurations that it detects.
To receive Security Health Analytics findings, the service must be enabled
in Security Command Center
Services settings.
To create findings related to Amazon Web Services (AWS) resources, Security Command Center must be
connected to AWS .
Findings from Security Health Analytics detectors are searchable in the
Google Cloud console and using the Security Command Center API.
Scans start approximately one hour after Security Command Center is enabled. On Google Cloud, scans run in two modes: batch mode, which automatically runs
once each day for all enrolled organizations and projects, and real-time mode,
which runs scans against asset configuration changes. On the Security Command Center
Standard and Standard-legacy tiers, the ingestion scan runs every 48 hours,
which can result in a finding update latency of 72 hours.
All detectors are scheduled to run for all enrolled organizations or projects
once a day.
Security Health Analytics detectors that don't support real-time scanning mode are
listed in
Security Command Center latency overview .
Security Health Analytics scans other cloud platforms in batch mode only.
Before you begin
Standard-legacy, Standard, Premium, and Enterprise service tiers
To get the permissions that
you need to manage Security Health Analytics findings,
ask your administrator to grant you the
following IAM roles on your organization, folder, or project:
Enable and disable detectors:
Security Center Settings Editor ( roles/securitycenter.settingsEditor )
View and filter findings:
Security Center Findings Viewer ( roles/securitycenter.findingsViewer )
Manage mute rules:
Security Center Mute Configurations Editor ( roles/securitycenter.muteConfigsEditor )
Manage security marks:
Security Center Finding Security Marks Writer ( roles/securitycenter.findingSecurityMarksWriter )
Programmatically manage findings:
Security Center Findings Editor ( roles/securitycenter.findingsEditor )
Grant inbound access to a VPC Service Controls service perimeter:
Access Context Manager Editor ( roles/accesscontextmanager.policyEditor )
Complete any task on this page:
Security Center Settings Admin ( roles/securitycenter.settingsAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable and disable detectors
Standard-legacy, Standard, Premium, and Enterprise service tiers
Disabling detectors can impact the state of active findings. When a detector is
disabled, existing findings are automatically marked as inactive.
When you activate Security Command Center at the organization level, you
can disable Security Health Analytics or specific detectors for specific
folders or projects. If Security Health Analytics or detectors are turned off for
folders and projects, any existing findings attached to assets in those
resources are marked as inactive.
The following Security Health Analytics detectors for Google Cloud are
disabled by default:
ALLOYDB_AUTO_BACKUP_DISABLED
ALLOYDB_CMEK_DISABLED
BIGQUERY_TABLE_CMEK_DISABLED
BUCKET_CMEK_DISABLED
CLOUD_ASSET_API_DISABLED
DATAPROC_CMEK_DISABLED
DATASET_CMEK_DISABLED
DISK_CMEK_DISABLED
DISK_CSEK_DISABLED
NODEPOOL_BOOT_CMEK_DISABLED
PUBSUB_CMEK_DISABLED
SQL_CMEK_DISABLED
SQL_NO_ROOT_PASSWORD
SQL_WEAK_ROOT_PASSWORD
VPC_FLOW_LOGS_SETTINGS_NOT_RECOMMENDED
Note: If you disable Security Health Analytics, Security Command Center also disables the
individual Security Health Analytics modules and stores their previous enablement states. If
you re-enable Security Health Analytics, Security Command Center restores the modules to their
previous enablement states.
Console
If the Security Health Analytics service is enabled, you can set the enablement state of
its individual modules.
In the Google Cloud console, go to the Modules page for
Security Health Analytics.
Go to Modules
Select your organization or project.
On the Modules tab, in the Status column, select the current
status of the module that you want to enable or disable, and then select one
of the following:
Enable : Enable the module.
Disable : Disable the module.
gcloud
The
gcloud scc manage services update
command updates the state of a Security Command Center service or module.
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : the type of resource to update
( organization , folder , or project ).
RESOURCE_ID : the numeric identifier for the organization, folder, or
project to update. For projects, you can also use the alphanumeric project ID.
MODULE_NAME : the name of the module to enable or disable. For valid
values, see Security Health Analytics
built-in detectors .
NEW_STATE : ENABLED to enable the module;
DISABLED to disable the module; or INHERITED to inherit the enablement
status of the parent resource (valid only for projects and folders).
Save the following content in a file called request.json :
{
" MODULE_NAME " : {
"intendedEnablementState" : " NEW_STATE "
}
}
Execute the
gcloud scc manage services update
command:
Linux, macOS, or Cloud Shell
gcloud scc manage services update security-health-analytics \
-- RESOURCE_TYPE = RESOURCE_ID \
--module-config-file = request.json
Windows (PowerShell)
gcloud scc manage services update security-health-analytics `
-- RESOURCE_TYPE = RESOURCE_ID `
--module-config-file = request.json
Windows (cmd.exe)
gcloud scc manage services update security-health-analytics ^
-- RESOURCE_TYPE = RESOURCE_ID ^
--module-config-file = request.json
You should receive a response similar to the following. For brevity, this example shows a subset
of all Security Health Analytics modules.
effectiveEnablementState: ENABLED
intendedEnablementState: ENABLED
modules:
ACCESS_AWSCLOUDSHELLFULLACCESS_RESTRICTED:
effectiveEnablementState: DISABLED
ACCESS_KEYS_ROTATED_90_DAYS_LESS:
effectiveEnablementState: ENABLED
ACCESS_TRANSPARENCY_DISABLED:
effectiveEnablementState: ENABLED
ADMIN_SERVICE_ACCOUNT:
effectiveEnablementState: ENABLED
ALLOYDB_AUTO_BACKUP_DISABLED:
effectiveEnablementState: DISABLED
name: projects/1070293378382/locations/global/securityCenterServices/SECURITY_HEALTH_ANALYTICS
updateTime: '2026-02-11T21:15:41.269584764Z'
REST
The Security Command Center Management API's
RESOURCE_TYPE .locations.securityCenterServices.patch
method updates the state of a Security Command Center service or module.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : the type of resource to
update ( organizations , folders , or projects ).
QUOTA_PROJECT : the project ID to use for billing and quota tracking.
RESOURCE_ID : the numeric identifier for the organization, folder, or
project to update. For projects, you can also use the alphanumeric project ID.
MODULE_NAME : the name of the module to enable or disable. For valid
values, see Security Health Analytics
built-in detectors .
NEW_STATE : ENABLED to enable the module;
DISABLED to disable the module; or INHERITED to inherit the enablement
status of the parent resource (valid only for projects and folders).
HTTP method and URL:
PATCH https://securitycentermanagement.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /locations/global/securityCenterServices/security-health-analytics?updateMask=modules
Request JSON body:
{
"modules": {
" MODULE_NAME ": {
"intendedEnablementState": " NEW_STATE "
}
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
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: QUOTA_PROJECT " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://securitycentermanagement.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /locations/global/securityCenterServices/security-health-analytics?updateMask=modules"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " QUOTA_PROJECT " } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://securitycentermanagement.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID /locations/global/securityCenterServices/security-health-analytics?updateMask=modules" | Select-Object -Expand Content
You should receive a response similar to the following. For brevity, this example shows a subset
of all Security Health Analytics modules.
{
"effectiveEnablementState": "ENABLED",
"intendedEnablementState": "ENABLED",
"modules": {
"ACCESS_AWSCLOUDSHELLFULLACCESS_RESTRICTED": {
"effectiveEnablementState": "DISABLED"
},
"ACCESS_KEYS_ROTATED_90_DAYS_LESS": {
"effectiveEnablementState": "ENABLED"
},
"ACCESS_TRANSPARENCY_DISABLED": {
"effectiveEnablementState": "ENABLED"
},
"ADMIN_SERVICE_ACCOUNT": {
"effectiveEnablementState": "ENABLED"
},
"ALLOYDB_AUTO_BACKUP_DISABLED": {
"effectiveEnablementState": "DISABLED"
}
},
"name": "projects/1070293378382/locations/global/securityCenterServices/SECURITY_HEALTH_ANALYTICS",
"updateTime": "2026-02-11T21:15:41.269584764Z"
}
Filtering findings in the Google Cloud console
Standard-legacy, Standard, Premium, and Enterprise service tiers
A large organization might have many vulnerability findings across their
deployment to review, triage, and track. By using filters that are available
on the Security Command Center Vulnerabilities and Findings pages
in the Google Cloud console, you can focus on the highest severity
vulnerabilities across your organization, and review vulnerabilities by
asset type, project, and more.
For more information about filtering vulnerability findings, see
Filter vulnerability findings in Security Command Center .
Manage findings with cases
Enterprise service tier
Security Command Center automatically opens a case in the Security Operations console
for threats, toxic combinations, and findings related to toxic combinations.
A single case can contain multiple related findings.
Use the case, which can be integrated with your preferred ticketing system,
to manage the investigation and remediation of findings, by assigning owners,
reviewing related information, and, with playbooks, automate your response
workflow.
If a finding has a corresponding case, you can find a link to its case on the
details page of the finding. Open the details page for a finding from the
Findings page.
For more information about cases, see
Cases overview .
Mute findings
Standard-legacy, Standard, Premium, and Enterprise service tiers
To control the volume of findings in Google Cloud console, you can manually or
programmatically mute individual findings, or create mute rules that
automatically mute findings based on filters you define. There are two types of
mute rules you can use to control finding volume:
Static mute rules that indefinitely mute future findings.
Dynamic mute rules that contain an option to temporarily mute current and
future findings.
We recommend using dynamic mute rules exclusively to reduce the number of
findings you review manually. To avoid confusion, we don't recommend using both
static and dynamic mute rules simultaneously. For a comparison of the two rule
types, see Types of mute
rules .
Findings that you mute in the Google Cloud console are hidden
and silenced, but continue to be logged for audit and
compliance purposes. You can view muted findings or unmute them at any time. To
learn more, see
Mute findings in Security Command Center .
Marking assets and findings with security marks
Standard-legacy, Standard, Premium, and Enterprise service tiers
You can add custom properties to findings and assets in Security Command Center
by using security marks. Security marks enable you to identify high-priority
areas of interest like production projects, tag findings with bug and incident
tracking numbers, and more.
For assets, you can add security marks only to those assets that
Security Command Center supports. For the list of supported assets, see
Supported asset types in Security Command Center .
Add assets to allowlists
Standard-legacy, Standard, Premium, and Enterprise service tiers
Allowlists with security marks deprecated : This feature is
deprecated and will become unavailable
for all users on or after April 15, 2025. Until then, this feature is
available only in instances
of Security Command Center that were activated before June 26, 2023. If your
activation of Security Command Center began on or after June 26, 2023, use
the mute feature to suppress findings for certain assets.
For more information, see
Mute findings in
Security Command Center .
Although it is not a recommended method, you can suppress
unneeded findings by adding dedicated security marks to assets so that
the Security Health Analytics detectors don't create security findings for
those assets.
The recommended and most effective approach for controlling finding volume
is to Mute findings . Mute findings that you don't need
to review, because they are either for assets that are isolated or because
the findings fall within acceptable business parameters.
When you apply dedicated security marks to assets, the assets are
added to an allowlist in Security Health Analytics, which marks any findings for
those assets as resolved during the next batch scan.
Dedicated security marks must be applied directly to assets, not findings, as
described in How allowlists work later on this page. If
you apply a mark to a finding, the underlying asset can still generate findings.
How allowlists work
Each Security Health Analytics detector has a dedicated mark type for allowlists, in
the form of allow_ FINDING_TYPE :true . Adding this
dedicated mark to an asset that is supported by Security Command Center
lets you exclude the asset from the detection policy.
For example, to exclude the finding type SSL_NOT_ENFORCED , set the security
mark, allow_ssl_not_enforced:true , on the related Cloud SQL instance.
The specified detector won't create findings for marked assets.
Note: Assets on allowlists are still scanned by detectors, but findings are
suppressed and not written to Security Command Center.
For a complete list of finding types, see the
Security Health Analytics detectors list .
To learn more about security marks and techniques for using them, see
Using security marks .
Asset types
This section describes how security marks work for different assets.
Allowlist assets: When you add a dedicated mark to an asset, like a
Cloud Storage bucket or firewall, the associated finding is marked as
resolved when the next batch scan runs. The detector won't generate new
findings or update existing findings for the asset until the mark is removed.
Allowlist projects : When you add a mark to a project resource, findings
for which the project itself is the scanned, or target, resource are resolved.
However, assets contained within the project, such as virtual machines or
crypto keys, can still generate findings. This security mark is only available
if you activate Security Command Center Premium tier at the organization level.
Allowlist folders : When you add a mark to a folder resource, findings
for which the folder itself is the scanned, or target, resource are resolved.
However, assets contained within the folder, including projects, can still
generate findings. This security mark is only available
if you activate Security Command Center Premium tier at the organization level.
Detectors that support multiple assets : If a detector supports more than
one asset type, you must apply the dedicated mark to each asset. For example,
the KMS_PUBLIC_KEY detector supports CryptoKey and KeyRing Cloud Key Management Service
assets. If you apply the mark allow_kms_public_key:true to the CryptoKey
asset, then KMS_PUBLIC_KEY findings for that asset are resolved. However,
findings can still be generated for the KeyRing asset.
Security marks are only updated during batch scans, not real-time scans. If a
dedicated security mark is removed, and the asset has a vulnerability, it might
take up to 24 hours before the mark is deleted and a finding is written.
Special-case detector: Customer Supplied Encryption Keys
The
DISK_CSEK_DISABLED
detector isn't on by default. To use this detector, you must mark the
assets for which you want to use self-managed encryption keys.
To enable the DISK_CSEK_DISABLED detector for specific assets,
apply the security mark
enforce_customer_supplied_disk_encryption_keys to the asset with a value of
true .
Viewing active finding count by finding type
You can use the Google Cloud console or the Google Cloud CLI to
view active finding counts by finding type.
Console
The Google Cloud console lets you view a count of active findings for each
finding type.
To view Security Health Analytics findings by finding type, do the following:
To display Security Health Analytics findings, go to the legacy Vulnerabilities page.
Go to Vulnerabilities
To sort findings by the number of active findings for each finding type,
click the Active column header.
gcloud
To use the gcloud CLI to get a count of all active findings, you
query Security Command Center to get the Security Health Analytics source ID. Then you
use the source ID to query the active findings count.
Step 1: Get the source ID
To get the source ID, run one of the following commands:
If you activated Security Command Center at the organization level, run the
following command:
gcloud scc sources describe organizations/ ORGANIZATION_ID \
--source-display-name = "Security Health Analytics"
If you activated Security Command Center at the project level, run the following
command:
gcloud scc sources describe projects/ PROJECT_ID \
--source-display-name = "Security Health Analytics"
If you haven't already enabled the Security Command Center API, you are prompted to
enable it. When the Security Command Center API is enabled, run the previous command
again. The command should display output like the following:
description : Scans for deviations from a GCP security baseline.
displayName : Security Health Analytics
name : organizations/ ORGANIZATION_ID /sources/ SOURCE_ID
Note the SOURCE_ID to use in the next step.
Step 2: Get the active findings count
Use the SOURCE_ID you noted in the previous step to
filter findings from Security Health Analytics. The following gcloud CLI
commands return a count of findings by category.
If you activated Security Command Center at the organization level, run the
following command:
gcloud scc findings group organizations/ ORGANIZATION_ID /sources/ SOURCE_ID \
--group-by = category --page-size = PAGE_SIZE
If you activated Security Command Center at the project level, run the following
command:
gcloud scc findings group projects/ PROJECT_ID /sources/ SOURCE_ID \
--group-by = category --page-size = PAGE_SIZE
You can set the page size to any value up to 1000. The command should display
output like the following, with results from your organization:
groupByResults :
- count : '1'
properties :
category : MFA_NOT_ENFORCED
- count : '3'
properties :
category : ADMIN_SERVICE_ACCOUNT
- count : '2'
properties :
category : API_KEY_APIS_UNRESTRICTED
- count : '1'
properties :
category : API_KEY_APPS_UNRESTRICTED
- count : '2'
properties :
category : API_KEY_EXISTS
- count : '10'
properties :
category : AUDIT_CONFIG_NOT_MONITORED
- count : '10'
properties :
category : AUDIT_LOGGING_DISABLED
- count : '1'
properties :
category : AUTO_UPGRADE_DISABLED
- count : '10'
properties :
category : BUCKET_IAM_NOT_MONITORED
- count : '10'
properties :
category : BUCKET_LOGGING_DISABLED
nextPageToken : TOKEN
readTime : '2023-08-05T21:56:13.862Z'
totalSize : 50
Programmatically manage findings
Standard-legacy, Standard, Premium, and Enterprise service tiers
Using the Google Cloud CLI and the Security Command Center client libraries, you can
automate almost anything you can do with Security Command Center in the
Google Cloud console. You can
also remediate many findings using the gcloud CLI. For more
information, review the documentation for the resource types described in each
finding:
Listing security findings
Creating, modifying, and querying security marks
Creating and updating security findings
Creating, updating, and listing finding sources
Configuring organization settings
To export or list assets programmatically, use the Cloud Asset Inventory
API. For more information, see Export asset history and metadata .
The asset methods and fields of the Security Command Center API are deprecated and
will be removed on or after June 26, 2024.
Until they are removed, users who activated Security Command Center before
June 26, 2023 can use the asset methods of the Security Command Center API
to list assets, but these methods support only the assets that
Security Command Center supports .
For information about using the deprecated asset API methods, see
listing assets .
Scanning projects protected by a service perimeter
Premium and Enterprise service tiers (requires organization-level activation )
If you have a service perimeter that
blocks access to certain projects and services, you must grant the
Security Command Center service account inbound access to that service perimeter.
Otherwise, Security Health Analytics can't produce findings related to the protected
projects and services.
Note: Security Command Center provides error detectors, which report
configuration errors that prevent Security Command Center and its services from
working properly. If you have a VPC Service Controls Restriction
( VPC_SC_RESTRICTION ) error finding, see
VPC Service Controls Restriction .
Console
Navigate to the service perimeter
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
Select your organization.
In the drop-down list, select the access policy that contains the service perimeter
that you want to grant access to.
The service perimeters associated with the access policy appear in the list.
Click the name of the service perimeter that you want to update.
To find the service perimeter you need to modify, you can check your logs for entries
that show RESOURCES_NOT_IN_SAME_SERVICE_PERIMETER violations. In those
entries, check the servicePerimeterName field:
accessPolicies/ ACCESS_POLICY_ID /servicePerimeters/ SERVICE_PERIMETER_NAME
Click edit Edit .
Add an ingress rule
Click Ingress policy .
Click Add an ingress rule .
In the From section, set the following details:
For Identities > Identity , select Select identities & groups .
Click Add identities .
Enter the email address that identifies the Cloud Security Command Center
Service Agent . This address has the
following format:
service-org- ORGANIZATION_ID @security-center-api.iam.gserviceaccount.com
Replace ORGANIZATION_ID with your organization ID.
Select the service agent or press ENTER , and then click Add
identities .
In the To section, set the following details:
For Resources > Projects , select All projects .
For Operations or IAM roles , select
All operations , or select specific services for which VPC Service Controls violations
appear.
Click Save .
gcloud
If a quota project isn't already set, then set it. Choose a project that has the
Access Context Manager API enabled.
gcloud config set billing/quota_project QUOTA_PROJECT_ID
Replace QUOTA_PROJECT_ID with the ID of the project that you
want to use for billing and quota.
Create a file named ingress-rule.yaml with the following contents:
- ingressFrom :
identities :
- serviceAccount:service-org- ORGANIZATION_ID @security-center-api. iam.gserviceaccount.com
sources :
- accessLevel : '*'
ingressTo :
operations :
- serviceName : '*'
resources :
- '*'
Alternatively, you can use operations to specify services for which
VPC Service Controls violations appear and resources to specify the project that
appeared in the finding.
Replace ORGANIZATION_ID with your organization ID.
Add the ingress rule to the perimeter:
gcloud access-context-manager perimeters update PERIMETER_NAME \
--set-ingress-policies = ingress-rule.yaml
Replace the following:
PERIMETER_NAME : the name of the perimeter. For example,
accessPolicies/1234567890/servicePerimeters/example_perimeter .
To find the service perimeter you need to modify, you can check your logs for
entries that show RESOURCES_NOT_IN_SAME_SERVICE_PERIMETER violations.
In those entries, check the servicePerimeterName field:
accessPolicies/ ACCESS_POLICY_ID /servicePerimeters/ SERVICE_PERIMETER_NAME
For more information, see Ingress and egress rules .
What's next
Learn about
Security Health Analytics detectors and findings .
Read recommendations for
remediating Security Health Analytics findings .
Learn how to
use Security Command Center security marks .
Learn about cases .
Learn more about
using Security Command Center Standard or Premium in the Google Cloud console
to review assets and findings.
Learn more about
using Security Command Center Enterprise in the Google Cloud console .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
