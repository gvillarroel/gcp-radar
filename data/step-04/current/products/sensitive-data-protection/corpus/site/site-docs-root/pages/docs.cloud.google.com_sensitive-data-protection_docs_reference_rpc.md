---
title: "Sensitive Data Protection (DLP API) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rpc
  title: "Sensitive Data Protection (DLP API) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
Sensitive Data Protection (DLP API)
Stay organized with collections
Save and categorize content based on your preferences.
Provides methods for detection of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories. The Cloud Data Loss Prevention API (DLP API) is part of Sensitive Data Protection .
Service: dlp.googleapis.com
The Service name dlp.googleapis.com is needed to create RPC client stubs.
google.privacy.dlp.v2.DlpService
Methods
ActivateJobTrigger
Activate a job trigger.
CancelDlpJob
Starts asynchronous cancellation on a long-running DlpJob.
CreateConnection
Create a Connection to an external data source.
CreateDeidentifyTemplate
Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage.
CreateDiscoveryConfig
Creates a config for discovery to scan and profile storage.
CreateDlpJob
Creates a new job to inspect storage or calculate risk metrics.
CreateInspectTemplate
Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage.
CreateJobTrigger
Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule.
CreateStoredInfoType
Creates a pre-built stored infoType to be used for inspection.
DeidentifyContent
De-identifies potentially sensitive info from a ContentItem.
DeleteConnection
Delete a Connection.
DeleteDeidentifyTemplate
Deletes a DeidentifyTemplate.
DeleteDiscoveryConfig
Deletes a discovery configuration.
DeleteDlpJob
Deletes a long-running DlpJob.
DeleteFileStoreDataProfile
Delete a FileStoreDataProfile.
DeleteInspectTemplate
Deletes an InspectTemplate.
DeleteJobTrigger
Deletes a job trigger.
DeleteStoredInfoType
Deletes a stored infoType.
DeleteTableDataProfile
Delete a TableDataProfile.
FinishDlpJob
Finish a running hybrid DlpJob.
GetColumnDataProfile
Gets a column data profile.
GetConnection
Get a Connection by name.
GetDeidentifyTemplate
Gets a DeidentifyTemplate.
GetDiscoveryConfig
Gets a discovery configuration.
GetDlpJob
Gets the latest state of a long-running DlpJob.
GetFileStoreDataProfile
Gets a file store data profile.
GetInspectTemplate
Gets an InspectTemplate.
GetJobTrigger
Gets a job trigger.
GetProjectDataProfile
Gets a project data profile.
GetStoredInfoType
Gets a stored infoType.
GetTableDataProfile
Gets a table data profile.
HybridInspectDlpJob
Inspect hybrid content and store findings to a job.
HybridInspectJobTrigger
Inspect hybrid content and store findings to a trigger.
InspectContent
Finds potentially sensitive info in content.
ListColumnDataProfiles
Lists column data profiles for an organization.
ListConnections
Lists Connections in a parent.
ListDeidentifyTemplates
Lists DeidentifyTemplates.
ListDiscoveryConfigs
Lists discovery configurations.
ListDlpJobs
Lists DlpJobs that match the specified filter in the request.
ListFileStoreDataProfiles
Lists file store data profiles for an organization.
ListInfoTypes
Returns a list of the sensitive information types that the DLP API supports.
ListInspectTemplates
Lists InspectTemplates.
ListJobTriggers
Lists job triggers.
ListProjectDataProfiles
Lists project data profiles for an organization.
ListStoredInfoTypes
Lists stored infoTypes.
ListTableDataProfiles
Lists table data profiles for an organization.
RedactImage
Redacts potentially sensitive info from an image.
ReidentifyContent
Re-identifies content that has been de-identified.
SearchConnections
Searches for Connections in a parent.
UpdateConnection
Update a Connection.
UpdateDeidentifyTemplate
Updates the DeidentifyTemplate.
UpdateDiscoveryConfig
Updates a discovery configuration.
UpdateInspectTemplate
Updates the InspectTemplate.
UpdateJobTrigger
Updates a job trigger.
UpdateStoredInfoType
Updates the stored infoType by creating a new version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
