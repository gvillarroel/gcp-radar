---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.420Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Risk analysis job creation in the Cloud DLP UI"
feature_slug: "risk-analysis-job-creation-in-the-cloud-dlp-ui"
latest_feature_date: "2020-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers"
keywords:
  - "creation"
  - "create"
  - "analysis"
  - "risk"
---

# Risk analysis job creation in the Cloud DLP UI

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

The Cloud DLP UI can create risk analysis jobs in Cloud Console.

## Extended Definition

The Cloud DLP UI can create risk analysis jobs in Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)

## Supporting Pages

### "Enable inspection or risk analysis actions \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions)
- Source ID: `site-api-reference-required-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action BigQuery inspection Cloud Storage inspection Datastore inspection Hybrid inspection Risk analysis Save findings to BigQuery ✓ ✓ ✓ ✓ ✓ Save findings to Cloud Storage ✓ ✓ ✓ ✓ Publish to Pub/Sub ✓ ✓ ✓ ✓ ✓ Publish to Security Command Center ✓ ✓ ✓ Publish to Knowledge Catalog ✓ Publish to Data Catalog ( Deprecated ) ✓ Notify by email ✓ ✓ ✓ ✓ ✓ Publish to Cloud Monitoring ✓ ✓ ✓ ✓ De-identify findings ✓ Specify actions You can specify one or more actions when you configure a job: When you create a new inspection or risk analysis job using Sensitive Data Protection in the Google Cloud console, specify actions in the Add actions section of the job creation workflow.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Enable inspection or risk analysis actions Stay organized with collections Save and categorize content based on your preferences.
- This document describes the actions that Sensitive Data Protection can perform after running an inspection job or risk analysis.
- An action is a task that Sensitive Data Protection performs after completing an inspection job or risk analysis.

### "Re-identification risk analysis \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis)
- Source ID: `site-api-reference-required-2`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Risk analysis terms and techniques If you don't correctly or adequately de-identify sensitive data, you risk an attacker re-identifying the data or learning sensitive information about individuals, which can have serious privacy implications.
- Re-identification risk analysis (or just risk analysis ) is the process of analyzing sensitive data to find properties that might increase the risk of subjects being identified, or of sensitive information about individuals being revealed.
- Sensitive Data Protection's risk analysis APIs simulate a re-identification dataset to approximate the steps an attacker might go through to compare the original dataset in order to re-identify the data.
- And like for k -map estimation, Sensitive Data Protection's risk analysis APIs simulate a population dataset to approximate the dataset that an attacker might use to find out who is in the dataset.

### "Creating and scheduling Sensitive Data Protection inspection jobs \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- Source ID: `site-api-reference-required-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CloudStorageOptions; use Google\Cloud\Dlp\V2\CloudStorageOptions\FileSet; use Google\Cloud\Dlp\V2\CreateJobTriggerRequest; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectConfig\FindingLimits; use Google\Cloud\Dlp\V2\InspectJobConfig; use Google\Cloud\Dlp\V2\JobTrigger; use Google\Cloud\Dlp\V2\JobTrigger\Status; use Google\Cloud\Dlp\V2\JobTrigger\Trigger; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\Schedule; use Google\Cloud\Dlp\V2\StorageConfig; use Google\Cloud\Dlp\V2\StorageConfig\TimespanConfig; use Google\Protobuf\Duration; / Create a Data Loss Prevention API job trigger. @param string $callingProjectId The project ID to run the API call under @param string $bucketName The name of the bucket to scan @param string $triggerId (Optional) The name of the trigger to be created @param string $displayName (Optional) The human-readable name to give the trigger @param string $description (Optional) A description for the trigger to be created @param int $scanPeriod (Optional) How often to wait between scans, in days (minimum = 1 day) @param bool $autoPopulateTimespan (Optional) Automatically limit scan to new content only @param int $maxFindings (Optional) The maximum number of findings to report per request (0 = server maximum) / function create trigger( string $callingProjectId, string $bucketName, string $triggerId, string $displayName, string $description, int $scanPeriod, bool $autoPopulateTimespan, int $maxFindings ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // ----- Construct job config ----- // The infoTypes of information to match $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $infoTypes = [$personNameInfoType, $phoneNumberInfoType]; // The minimum likelihood required before returning a match $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // Specify finding limits $limits = (new FindingLimits()) ->setMaxFindingsPerRequest($maxFindings); // Create the inspectConfig object $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes); // Create triggers $duration = (new Duration()) ->setSeconds($scanPeriod 60 60 24); $schedule = (new Schedule()) ->setRecurrencePeriodDuration($duration); $triggerObject = (new Trigger()) ->setSchedule($schedule); // Create the storageConfig object $fileSet = (new FileSet()) ->setUrl('gs://' . $bucketName . '/ '); $storageOptions = (new CloudStorageOptions()) ->setFileSet($fileSet); // Auto-populate start and end times in order to scan new objects only. $timespanConfig = (new TimespanConfig()) ->setEnableAutoPopulationOfTimespanConfig($autoPopulateTimespan); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions($storageOptions) ->setTimespanConfig($timespanConfig); // Construct the jobConfig object $jobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig); // ----- Construct trigger object ----- $jobTriggerObject = (new JobTrigger()) ->setTriggers([$triggerObject]) ->setInspectJob($jobConfig) ->setStatus(Status::HEALTHY) ->setDisplayName($displayName) ->setDescription($description); // Run trigger creation request $parent = $dlp->locationName($callingProjectId, 'global'); $createJobTriggerRequest = (new CreateJobTriggerRequest()) ->setParent($parent) ->setJobTrigger($jobTriggerObject) ->setTriggerId($triggerId); $trigger = $dlp->createJobTrigger($createJobTriggerRequest); // Print results printf('Successfully created trigger %s' .
- Example : gs://GOOGLE STORAGE BUCKET NAME/dlp sample.csv / function create job( string $callingProjectId, string $gcsPath ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // Set autoPopulateTimespan to true to scan only new content. $timespanConfig = (new TimespanConfig()) ->setEnableAutoPopulationOfTimespanConfig(true); // Specify the GCS file to be inspected. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($gcsPath)); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions(($cloudStorageOptions)) ->setTimespanConfig($timespanConfig); // ----- Construct inspection config ----- $emailAddressInfoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $locationInfoType = (new InfoType()) ->setName('LOCATION'); $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $infoTypes = [$emailAddressInfoType, $personNameInfoType, $locationInfoType, $phoneNumberInfoType]; // Whether to include the matching string in the response. $includeQuote = true; // The minimum likelihood required before returning a match. $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // The maximum number of findings to report (0 = server maximum). $limits = (new FindingLimits()) ->setMaxFindingsPerRequest(100); // Create the Inspect configuration object. $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes) ->setIncludeQuote($includeQuote); // Specify the action that is triggered when the job completes. $action = (new Action()) ->setPublishSummaryToCscc(new PublishSummaryToCscc()); // Configure the inspection job we want the service to perform. $inspectJobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Send the job creation request and process the response. $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJobConfig); $job = $dlp->createDlpJob($createDlpJobRequest); // Print results. printf($job->getName()); } Python To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // (Optional) The name of the trigger to be created. // const triggerId = 'my-trigger'; // (Optional) A display name for the trigger to be created // const displayName = 'My Trigger'; // (Optional) A description for the trigger to be created // const description = "This is a sample trigger."; // The name of the bucket to scan. // const bucketName = 'YOUR-BUCKET'; // Limit scan to new content only. // const autoPopulateTimespan = true; // How often to wait between scans, in days (minimum = 1 day) // const scanPeriod = 1; // The infoTypes of information to match // const infoTypes = [{ name: 'PHONE NUMBER' }, { name: 'EMAIL ADDRESS' }, { name: 'CREDIT CARD NUMBER' }]; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; async function createTrigger () { // Get reference to the bucket to be inspected const storageItem = { cloudStorageOptions : { fileSet : { url : gs:// ${ bucketName } / }, }, timeSpanConfig : { enableAutoPopulationOfTimespanConfig : autoPopulateTimespan , }, }; // Construct job to be triggered const job = { inspectConfig : { infoTypes : infoTypes , minLikelihood : minLikelihood , limits : { maxFindingsPerRequest : maxFindings , }, }, storageConfig : storageItem , }; // Construct trigger creation request const request = { parent : projects/ ${ projectId } /locations/global , jobTrigger : { inspectJob : job , displayName : displayName , description : description , triggers : [ { schedule : { recurrencePeriodDuration : { seconds : scanPeriod 60 60 24 , // Trigger the scan daily }, }, }, ], status : ' HEALTHY ' , }, triggerId : triggerId , }; // Run trigger creation request const [ trigger ] = await dlp . createJobTrigger ( request ); console . log ( Successfully created trigger ${ trigger . name } . ); } createTrigger (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The filter expression to use // For more information and filter syntax, see https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs/list // const filter = state=DONE; // The type of job to list (either 'INSPECT JOB' or 'RISK ANALYSIS JOB') // const jobType = 'INSPECT JOB'; async function listJobs () { // Construct request for listing DLP scan jobs const request = { parent : projects/ ${ projectId } /locations/global , filter : filter , type : jobType , }; // Run job-listing request const [ jobs ] = await dlp . listDlpJobs ( request ); jobs . forEach ( job = > { console . log ( Job ${ job . name } status: ${ job . state } ); }); } listJobs (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .

