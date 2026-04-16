---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.612Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "DlpJob objects for risk analysis and storage inspection"
feature_slug: "dlpjob-objects-for-risk-analysis-and-storage-inspection"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions"
keywords:
  - "running"
  - "long"
  - "dlpjob"
  - "analysis"
  - "objects"
  - "inspection"
  - "storage"
  - "risk"
---

# DlpJob objects for risk analysis and storage inspection

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Long-running operations for risk analysis and storage inspection were replaced by DlpJob objects.

## Extended Definition

Long-running operations for risk analysis and storage inspection were replaced by DlpJob objects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions)

## Supporting Pages

### "Inspect Google Cloud storage and databases for sensitive data \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- Source ID: `site-docs-reference-3`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The scan starts from a random row. @param string $callingProjectId The project ID to run the API call under. @param string $topicId The Pub/Sub topic ID to notify once the job is completed. @param string $subscriptionId The Pub/Sub subscription ID to use when listening for job. @param string $projectId The Google Cloud Project ID. @param string $datasetId The BigQuery Dataset ID. @param string $tableId The BigQuery Table ID to be inspected. / function inspect bigquery with sampling( string $callingProjectId, string $topicId, string $subscriptionId, string $projectId, string $datasetId, string $tableId ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Specify the BigQuery table to be inspected. $bigqueryTable = (new BigQueryTable()) ->setProjectId($projectId) ->setDatasetId($datasetId) ->setTableId($tableId); $bigQueryOptions = (new BigQueryOptions()) ->setTableReference($bigqueryTable) ->setRowsLimit(1000) ->setSampleMethod(SampleMethod::RANDOM START) ->setIdentifyingFields([ (new FieldId()) ->setName('name') ]); $storageConfig = (new StorageConfig()) ->setBigQueryOptions($bigQueryOptions); // Specify the type of info the inspection will look for. // See https://cloud.google.com/dlp/docs/infotypes-reference for complete list of info types $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $infoTypes = [$personNameInfoType]; // Specify how the content should be inspected. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setIncludeQuote(true); // Specify the action that is triggered when the job completes. $pubSubAction = (new PublishToPubSub()) ->setTopic($topic->name()); $action = (new Action()) ->setPubSub($pubSubAction); // Configure the long running job we want the service to perform. $inspectJob = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes // Consider using an asynchronous execution model such as Cloud Functions $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.
- The scan starts from a random location in the dataset and only includes text files under 200 bytes. @param string $callingProjectId The project ID to run the API call under. @param string $gcsUri Google Cloud Storage file url. @param string $topicId The ID of the Pub/Sub topic to notify once the job completes. @param string $subscriptionId The ID of the Pub/Sub subscription to use when listening for job. / function inspect gcs with sampling( // TODO(developer): Replace sample parameters before running the code. string $callingProjectId, string $gcsUri = 'gs://GOOGLE STORAGE BUCKET NAME/dlp sample.csv', string $topicId = 'dlp-pubsub-topic', string $subscriptionId = 'dlp subcription' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Construct the items to be inspected. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($gcsUri)) ->setBytesLimitPerFile(200) ->setFilesLimitPercent(90) ->setSampleMethod(SampleMethod::RANDOM START); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions($cloudStorageOptions); // Specify the type of info the inspection will look for. $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $emailAddressInfoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $cardNumberInfoType = (new InfoType()) ->setName('CREDIT CARD NUMBER'); $infoTypes = [$phoneNumberInfoType, $emailAddressInfoType, $cardNumberInfoType]; // Specify how the content should be inspected. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setIncludeQuote(true); // Construct the action to run when job completes. $action = (new Action()) ->setPubSub((new PublishToPubSub()) ->setTopic($topic->name())); // Construct inspect job config to run. $inspectJob = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request. $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes. // Consider using an asynchronous execution model such as Cloud Functions. $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.
- DlpServiceClient (); const pubsub = new PubSub (); // The project ID to run the API call under // const projectId = 'my-project'; // The name of the bucket where the file resides. // const bucketName = 'YOUR-BUCKET'; // The path to the file within the bucket to inspect. // Can contain wildcards, e.g. "my-image. " // const fileName = 'my-image.png'; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; // The infoTypes of information to match // const infoTypes = [{ name: 'PHONE NUMBER' }, { name: 'EMAIL ADDRESS' }, { name: 'CREDIT CARD NUMBER' }]; // The customInfoTypes of information to match // const customInfoTypes = [{ infoType: { name: 'DICT TYPE' }, dictionary: { wordList: { words: ['foo', 'bar', 'baz']}}}, // { infoType: { name: 'REGEX TYPE' }, regex: {pattern: '\\(\\d{3}\\) \\d{3}-\\d{4}'}}]; // The name of the Pub/Sub topic to notify once the job completes // TODO(developer): create a Pub/Sub topic to use for this // const topicId = 'MY-PUBSUB-TOPIC' // The name of the Pub/Sub subscription to use when listening for job // completion notifications // TODO(developer): create a Pub/Sub subscription to use for this // const subscriptionId = 'MY-PUBSUB-SUBSCRIPTION' async function inspectGCSFile () { // Get reference to the file to be inspected const storageItem = { cloudStorageOptions : { fileSet : { url : gs:// ${ bucketName } / ${ fileName } }, }, }; // Construct request for creating an inspect job const request = { parent : projects/ ${ projectId } /locations/global , inspectJob : { inspectConfig : { infoTypes : infoTypes , customInfoTypes : customInfoTypes , minLikelihood : minLikelihood , limits : { maxFindingsPerRequest : maxFindings , }, }, storageConfig : storageItem , actions : [ { pubSub : { topic : projects/ ${ projectId } /topics/ ${ topicId } , }, }, ], }, }; // Create a GCS File inspection job and wait for it to complete const [ topicResponse ] = await pubsub . topic ( topicId ). get (); // Verify the Pub/Sub topic and listen for job notifications via an // existing subscription. const subscription = await topicResponse . subscription ( subscriptionId ); const [ jobsResponse ] = await dlp . createDlpJob ( request ); // Get the job's ID const jobName = jobsResponse . name ; // Watch the Pub/Sub topic until the DLP job finishes await new Promise (( resolve , reject ) = > { const messageHandler = message = > { if ( message . attributes && message . attributes .
- JSON output: { "name" : "projects/[PROJECT-ID]/dlpJobs/[JOB-ID]" , "type" : "INSPECT JOB" , "state" : "PENDING" , "inspectDetails" : { "requestedOptions" : { "snapshotInspectTemplate" : {}, "jobConfig" : { "storageConfig" : { "bigQueryOptions" : { "tableReference" : { "projectId" : "bigquery-public-data" , "datasetId" : "usa names" , "tableId" : "usa 1910 current" }, "rowsLimit" : "1000" , "sampleMethod" : "RANDOM START" , "includedFields" : [ { "name" : "name" } ] } }, "inspectConfig" : { "infoTypes" : [ { "name" : "FIRST NAME" } ], "limits" : {}, "includeQuote" : true }, "actions" : [ { "saveFindings" : { "outputConfig" : { "table" : { "projectId" : "[PROJECT-ID]" , "datasetId" : "[DATASET-ID]" , "tableId" : "bqsample" }, "outputSchema" : "BASIC COLUMNS" } } } ] } }, "result" : {} }, "createTime" : "2022-11-04T18:53:48.350Z" } When the inspect job finishes running and its results have been processed by BigQuery, the results of the scan are available in the specified BigQuery output table.

### "Creating and scheduling Sensitive Data Protection inspection jobs \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- Source ID: `site-api-reference-required-2`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example : gs://GOOGLE STORAGE BUCKET NAME/dlp sample.csv / function create job( string $callingProjectId, string $gcsPath ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // Set autoPopulateTimespan to true to scan only new content. $timespanConfig = (new TimespanConfig()) ->setEnableAutoPopulationOfTimespanConfig(true); // Specify the GCS file to be inspected. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($gcsPath)); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions(($cloudStorageOptions)) ->setTimespanConfig($timespanConfig); // ----- Construct inspection config ----- $emailAddressInfoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $locationInfoType = (new InfoType()) ->setName('LOCATION'); $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $infoTypes = [$emailAddressInfoType, $personNameInfoType, $locationInfoType, $phoneNumberInfoType]; // Whether to include the matching string in the response. $includeQuote = true; // The minimum likelihood required before returning a match. $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // The maximum number of findings to report (0 = server maximum). $limits = (new FindingLimits()) ->setMaxFindingsPerRequest(100); // Create the Inspect configuration object. $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes) ->setIncludeQuote($includeQuote); // Specify the action that is triggered when the job completes. $action = (new Action()) ->setPublishSummaryToCscc(new PublishSummaryToCscc()); // Configure the inspection job we want the service to perform. $inspectJobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Send the job creation request and process the response. $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJobConfig); $job = $dlp->createDlpJob($createDlpJobRequest); // Print results. printf($job->getName()); } Python To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // The filter expression to use // For more information and filter syntax, see https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs/list // const filter = state=DONE; // The type of job to list (either 'INSPECT JOB' or 'RISK ANALYSIS JOB') // const jobType = 'INSPECT JOB'; async function listJobs () { // Construct request for listing DLP scan jobs const request = { parent : projects/ ${ projectId } /locations/global , filter : filter , type : jobType , }; // Run job-listing request const [ jobs ] = await dlp . listDlpJobs ( request ); jobs . forEach ( job = > { console . log ( Job ${ job . name } status: ${ job . state } ); }); } listJobs (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- UNLIKELY , "limits" : { "max findings per request" : max findings }, "include quote" : True , } Construct a cloud storage options dictionary with the bucket's URL. url = f "gs:// { bucket } / " storage config = { "cloud storage options" : { "file set" : { "url" : url }}, Time-based configuration for each storage object. "timespan config" : { Auto-populate start and end times in order to scan new objects only. "enable auto population of timespan config" : auto populate timespan }, } Construct the job definition. job = { "inspect config" : inspect config , "storage config" : storage config } Call the API. response = dlp . create dlp job ( request = { "parent" : parent , "inspect job" : job , "job id" : job id } ) Print out the result. print ( f "Job : { response . name } status: { response . state } " ) REST A job is represented in the DLP API by the DlpJobs resource.
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Action; use Google\Cloud\Dlp\V2\Action\PublishSummaryToCscc; use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CloudStorageOptions; use Google\Cloud\Dlp\V2\CloudStorageOptions\FileSet; use Google\Cloud\Dlp\V2\CreateDlpJobRequest; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectConfig\FindingLimits; use Google\Cloud\Dlp\V2\InspectJobConfig; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\StorageConfig; use Google\Cloud\Dlp\V2\StorageConfig\TimespanConfig; / Creates an inspection job with the Cloud Data Loss Prevention API. @param string $callingProjectId The project ID to run the API call under. @param string $gcsPath GCS file to be inspected.

### "Enable inspection or risk analysis actions \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions)
- Source ID: `site-api-reference-required-2`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action BigQuery inspection Cloud Storage inspection Datastore inspection Hybrid inspection Risk analysis Save findings to BigQuery ✓ ✓ ✓ ✓ ✓ Save findings to Cloud Storage ✓ ✓ ✓ ✓ Publish to Pub/Sub ✓ ✓ ✓ ✓ ✓ Publish to Security Command Center ✓ ✓ ✓ Publish to Knowledge Catalog ✓ Publish to Data Catalog ( Deprecated ) ✓ Notify by email ✓ ✓ ✓ ✓ ✓ Publish to Cloud Monitoring ✓ ✓ ✓ ✓ De-identify findings ✓ Specify actions You can specify one or more actions when you configure a job: When you create a new inspection or risk analysis job using Sensitive Data Protection in the Google Cloud console, specify actions in the Add actions section of the job creation workflow.
- This document describes the actions that Sensitive Data Protection can perform after running an inspection job or risk analysis.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Enable inspection or risk analysis actions Stay organized with collections Save and categorize content based on your preferences.
- An action is a task that Sensitive Data Protection performs after completing an inspection job or risk analysis.

