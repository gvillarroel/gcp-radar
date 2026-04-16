---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.605Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "JobTriggers scheduled scans"
feature_slug: "jobtriggers-scheduled-scans"
latest_feature_date: "2018-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles"
keywords:
  - "jobtriggers"
  - "scheduled"
  - "schedule"
  - "regular"
  - "storage"
  - "scans"
---

# JobTriggers scheduled scans

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

JobTriggers can schedule regular scans of storage.

## Extended Definition

JobTriggers can schedule regular scans of storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)

## Supporting Pages

### "Creating and scheduling Sensitive Data Protection inspection jobs \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- Source ID: `site-api-reference-required-2`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CloudStorageOptions; use Google\Cloud\Dlp\V2\CloudStorageOptions\FileSet; use Google\Cloud\Dlp\V2\CreateJobTriggerRequest; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectConfig\FindingLimits; use Google\Cloud\Dlp\V2\InspectJobConfig; use Google\Cloud\Dlp\V2\JobTrigger; use Google\Cloud\Dlp\V2\JobTrigger\Status; use Google\Cloud\Dlp\V2\JobTrigger\Trigger; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\Schedule; use Google\Cloud\Dlp\V2\StorageConfig; use Google\Cloud\Dlp\V2\StorageConfig\TimespanConfig; use Google\Protobuf\Duration; / Create a Data Loss Prevention API job trigger. @param string $callingProjectId The project ID to run the API call under @param string $bucketName The name of the bucket to scan @param string $triggerId (Optional) The name of the trigger to be created @param string $displayName (Optional) The human-readable name to give the trigger @param string $description (Optional) A description for the trigger to be created @param int $scanPeriod (Optional) How often to wait between scans, in days (minimum = 1 day) @param bool $autoPopulateTimespan (Optional) Automatically limit scan to new content only @param int $maxFindings (Optional) The maximum number of findings to report per request (0 = server maximum) / function create trigger( string $callingProjectId, string $bucketName, string $triggerId, string $displayName, string $description, int $scanPeriod, bool $autoPopulateTimespan, int $maxFindings ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // ----- Construct job config ----- // The infoTypes of information to match $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $infoTypes = [$personNameInfoType, $phoneNumberInfoType]; // The minimum likelihood required before returning a match $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // Specify finding limits $limits = (new FindingLimits()) ->setMaxFindingsPerRequest($maxFindings); // Create the inspectConfig object $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes); // Create triggers $duration = (new Duration()) ->setSeconds($scanPeriod 60 60 24); $schedule = (new Schedule()) ->setRecurrencePeriodDuration($duration); $triggerObject = (new Trigger()) ->setSchedule($schedule); // Create the storageConfig object $fileSet = (new FileSet()) ->setUrl('gs://' . $bucketName . '/ '); $storageOptions = (new CloudStorageOptions()) ->setFileSet($fileSet); // Auto-populate start and end times in order to scan new objects only. $timespanConfig = (new TimespanConfig()) ->setEnableAutoPopulationOfTimespanConfig($autoPopulateTimespan); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions($storageOptions) ->setTimespanConfig($timespanConfig); // Construct the jobConfig object $jobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig); // ----- Construct trigger object ----- $jobTriggerObject = (new JobTrigger()) ->setTriggers([$triggerObject]) ->setInspectJob($jobConfig) ->setStatus(Status::HEALTHY) ->setDisplayName($displayName) ->setDescription($description); // Run trigger creation request $parent = $dlp->locationName($callingProjectId, 'global'); $createJobTriggerRequest = (new CreateJobTriggerRequest()) ->setParent($parent) ->setJobTrigger($jobTriggerObject) ->setTriggerId($triggerId); $trigger = $dlp->createJobTrigger($createJobTriggerRequest); // Print results printf('Successfully created trigger %s' .
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // (Optional) The name of the trigger to be created. // const triggerId = 'my-trigger'; // (Optional) A display name for the trigger to be created // const displayName = 'My Trigger'; // (Optional) A description for the trigger to be created // const description = "This is a sample trigger."; // The name of the bucket to scan. // const bucketName = 'YOUR-BUCKET'; // Limit scan to new content only. // const autoPopulateTimespan = true; // How often to wait between scans, in days (minimum = 1 day) // const scanPeriod = 1; // The infoTypes of information to match // const infoTypes = [{ name: 'PHONE NUMBER' }, { name: 'EMAIL ADDRESS' }, { name: 'CREDIT CARD NUMBER' }]; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; async function createTrigger () { // Get reference to the bucket to be inspected const storageItem = { cloudStorageOptions : { fileSet : { url : gs:// ${ bucketName } / }, }, timeSpanConfig : { enableAutoPopulationOfTimespanConfig : autoPopulateTimespan , }, }; // Construct job to be triggered const job = { inspectConfig : { infoTypes : infoTypes , minLikelihood : minLikelihood , limits : { maxFindingsPerRequest : maxFindings , }, }, storageConfig : storageItem , }; // Construct trigger creation request const request = { parent : projects/ ${ projectId } /locations/global , jobTrigger : { inspectJob : job , displayName : displayName , description : description , triggers : [ { schedule : { recurrencePeriodDuration : { seconds : scanPeriod 60 60 24 , // Trigger the scan daily }, }, }, ], status : ' HEALTHY ' , }, triggerId : triggerId , }; // Run trigger creation request const [ trigger ] = await dlp . createJobTrigger ( request ); console . log ( Successfully created trigger ${ trigger . name } . ); } createTrigger (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- JSON input: { "jobTrigger" :{ "displayName" : "JobTrigger1" , "description" : "Starts an inspection of a Datastore kind" , "triggers" : [ { "schedule":{ "recurrencePeriodDuration":"86400s" } } ] , "status" : "HEALTHY" , "inspectJob" :{ "storageConfig" :{ "datastoreOptions" :{ "kind" :{ "name" : "Example-Kind" } , "partitionId" :{ "projectId" : "[PROJECT ID]" , "namespaceId" : "[NAMESPACE ID]" } } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PHONE NUMBER" } ] , "excludeInfoTypes" : false , "includeQuote" : true , "minLikelihood" : "LIKELY" } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT ID ] ", " datasetId ":" [ BIGQUERY DATASET NAME ] ", " tableId ":" [ BIGQUERY TABLE NAME ] " } } } } ] } } } JSON output: The following output indicates that the job trigger was successfully created. { "name" : "projects/[PROJECT ID]/jobTriggers/[JOB TRIGGER NAME]" , "displayName" : "JobTrigger1" , "description" : "Starts an inspection of a Datastore kind" , "inspectJob" :{ "storageConfig" :{ "datastoreOptions" :{ "partitionId" :{ "projectId" : "[PROJECT ID]" , "namespaceId" : "[NAMESPACE ID]" } , "kind" :{ "name" : "Example-Kind" } } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PHONE NUMBER" } ] , "minLikelihood" : "LIKELY" , "limits" :{ } , "includeQuote" : true } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT ID ] ", " datasetId ":" [ BIGQUERY DATASET NAME ] ", " tableId ":" [ BIGQUERY TABLE NAME ] " } } } } ] }, " triggers ":[ { " schedule ":{ " recurrencePeriodDuration ":" 86400 s " } } ], " createTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " updateTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " status ":" HEALTHY " } List all jobs To list all jobs for the current project: Console In the Google Cloud console, go to the Sensitive Data Protection page.
- JSON output: { "jobTriggers" : [ { "name":"projects/[PROJECT ID ]/ jobTriggers /[ JOB TRIGGER NAME ] ", " displayName ":" JobTrigger1 ", " description ":" Starts an inspection of a Datastore kind ", " inspectJob ":{ " storageConfig ":{ " datastoreOptions ":{ " partitionId ":{ " projectId ":" [ PROJECT ID ] ", " namespaceId ":" [ NAMESPACE ID ] " }, " kind ":{ " name ":" Example - Kind " } } }, " inspectConfig ":{ " infoTypes ":[ { " name ":" PHONE NUMBER " } ], " minLikelihood ":" LIKELY ", " limits ":{ }, " includeQuote ":true }, " actions ":[ { " saveFindings ":{ " outputConfig ":{ " table ":{ " projectId ":" [ PROJECT ID ] ", " datasetId ":" [ BIGQUERY DATASET NAME ] ", " tableId ":" [ BIGQUERY TABLE NAME ] " } } } } ] }, " triggers ":[ { " schedule ":{ " recurrencePeriodDuration ":" 86400 s " } } ], " createTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " updateTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " status ":" HEALTHY " }, ... ], " nextPageToken ":" KkwKCQjivJ2UpPreAgo Kj1wcm9qZWN0cy92ZWx2ZXR5LXN0dWR5LTE5NjEwMS9qb2JUcmlnZ2Vycy8xNTA5NzEyOTczMDI0MDc1NzY0 " } To quickly try this out, you can use the API Explorer that's embedded below.

### "Inspect Google Cloud storage and databases for sensitive data \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- Source ID: `site-docs-reference-3`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- JSON output: { "name" : "projects/[PROJECT-ID]/dlpJobs/[JOB-ID]" , "type" : "INSPECT JOB" , "state" : "PENDING" , "inspectDetails" :{ "requestedOptions" :{ "snapshotInspectTemplate" :{ } , "jobConfig" :{ "storageConfig" :{ "cloudStorageOptions" :{ "fileSet" :{ "url" : "gs://[BUCKET NAME]/ " } , "bytesLimitPerFile" : "200" , "fileTypes" : [ "TEXT FILE" ] , "sampleMethod" : "TOP" , "filesLimitPercent" : 90 } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PERSON NAME" } ] , "minLikelihood" : "POSSIBLE" , "limits" :{ } , "includeQuote" : true , "excludeInfoTypes" : true } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT-ID ] ", " datasetId ":" [ DATASET-ID ] ", " tableId ":" [ TABLE-ID ] " }, " outputSchema ":" BASIC COLUMNS " } } } ] } } }, " createTime ":" 2018 - 05 - 30 T22 : 22 : 08.279 Z " } Limit BigQuery scans To enable sampling in BigQuery by limiting the amount of data that is scanned, specify the following optional fields within BigQueryOptions : rowsLimit : The maximum number of rows to scan.
- Schedule your scans Use Sensitive Data Protection job triggers to automatically run scans and generate findings daily, weekly, or quarterly.
- The following sections contain information about limiting the size of both Cloud Storage scans and BigQuery scans .
- Limit Cloud Storage scans You can enable sampling in Cloud Storage by limiting the amount of data that is scanned.

### "Overview of sensitive data discovery \_|\_ Sensitive Data Protection \_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles](https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles)
- Source ID: `site-docs-reference-3`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Reprofiling on a schedule In your scan configuration, you can specify whether a subset of data should be reprofiled regularly regardless of whether the data underwent changes.
- It includes the following settings: Scope (organization, folder, or project) of the discovery operation Type of resource to profile Inspection templates to use Scan frequency Specific subsets of data that should be included in or excluded from discovery Actions that you want Sensitive Data Protection to take after discovery—for example, which Google Cloud services to publish the profiles to Service agent to use for discovery operations For information about how to create an organization-level or project-level discovery scan configuration, see the following pages: Discovery type Create an organization-level scan configuration Create a project-level scan configuration 1 Discovery for BigQuery data Profile BigQuery data in an organization or folder Profile BigQuery data in a single project Discovery for Cloud SQL data Profile Cloud SQL data in an organization or folder Profile Cloud SQL data in a single project Discovery for Cloud Storage data Profile Cloud Storage data in an organization or folder Profile Cloud Storage data in a single project Discovery for Vertex AI data Profile Vertex AI data in an organization or folder Profile Vertex AI data in a single project Discovery for Amazon S3 data Discovery for Amazon S3 data Not applicable Discovery for Azure Blob Storage data Discovery for Azure Blob Storage data Not applicable Secrets discovery (no profiles generated) Configure secrets discovery at the organization level Configure secrets discovery at the project level 1 Not suitable for customers who have an organization-level discovery subscription, such as one provided through Security Command Center Scan configuration scopes You can create a scan configuration at the following levels: Organization Folder Project Single data resource At the organization and folder levels, if two or more active scan configurations have the same project in their scope, Sensitive Data Protection determines which scan configuration can generate profiles for that project.
- Purpose Predefined role Relevant permissions Create a discovery scan configuration and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list Create a project to be used as the service agent container 1 Project Creator ( roles/resourcemanager.projectCreator ) resourcemanager.organizations.get resourcemanager.projects.create Grant discovery access 2 One of the following: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Admin ( roles/iam.securityAdmin ) resourcemanager.organizations.getIamPolicy resourcemanager.organizations.setIamPolicy View data profiles (read-only) DLP Data Profiles Reader ( roles/dlp.dataProfilesReader ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list DLP Reader ( roles/dlp.reader ) dlp.jobs.list dlp.jobTriggers.list 1 If you don't have the Project Creator ( roles/resourcemanager.projectCreator ) role, you can still create a scan configuration, but the service agent container that you use must be an existing project.
- Purpose Predefined role Relevant permissions Configure and view data profiles DLP Administrator ( roles/dlp.admin ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.inspectTemplates.create dlp.jobs.create dlp.jobs.list dlp.jobTriggers.create dlp.jobTriggers.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list View data profiles (read-only) DLP Data Profiles Reader ( roles/dlp.dataProfilesReader ) dlp.columnDataProfiles.list dlp.fileStoreProfiles.list dlp.projectDataProfiles.list dlp.tableDataProfiles.list DLP Reader ( roles/dlp.reader ) dlp.jobs.list dlp.jobTriggers.list Sensitive data discovery scan configuration A discovery scan configuration (sometimes called discovery configuration or scan configuration ) specifies how Sensitive Data Protection should profile your data.

