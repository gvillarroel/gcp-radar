---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.588Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "scan sampling with sample_method"
feature_slug: "scan-sampling-with-sample-method"
latest_feature_date: "2018-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig"
keywords:
  - "cloudstorageoptions"
  - "bigqueryoptions"
  - "sampling"
  - "sample"
  - "method"
  - "scanned"
  - "scan"
---

# scan sampling with sample_method

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

BigQueryOptions and CloudStorageOptions can sample scanned content instead of exhaustively inspecting every record.

## Extended Definition

BigQueryOptions and CloudStorageOptions can sample scanned content instead of exhaustively inspecting every record.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig)

## Supporting Pages

### "Inspect Google Cloud storage and databases for sensitive data \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- Source ID: `site-docs-reference-3`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON output: { "name" : "projects/[PROJECT-ID]/dlpJobs/[JOB-ID]" , "type" : "INSPECT JOB" , "state" : "PENDING" , "inspectDetails" :{ "requestedOptions" :{ "snapshotInspectTemplate" :{ } , "jobConfig" :{ "storageConfig" :{ "cloudStorageOptions" :{ "fileSet" :{ "url" : "gs://[BUCKET NAME]/ " } , "bytesLimitPerFile" : "200" , "fileTypes" : [ "TEXT FILE" ] , "sampleMethod" : "TOP" , "filesLimitPercent" : 90 } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PERSON NAME" } ] , "minLikelihood" : "POSSIBLE" , "limits" :{ } , "includeQuote" : true , "excludeInfoTypes" : true } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT-ID ] ", " datasetId ":" [ DATASET-ID ] ", " tableId ":" [ TABLE-ID ] " }, " outputSchema ":" BASIC COLUMNS " } } } ] } } }, " createTime ":" 2018 - 05 - 30 T22 : 22 : 08.279 Z " } Limit BigQuery scans To enable sampling in BigQuery by limiting the amount of data that is scanned, specify the following optional fields within BigQueryOptions : rowsLimit : The maximum number of rows to scan.
- The scan starts from a random row. @param string $callingProjectId The project ID to run the API call under. @param string $topicId The Pub/Sub topic ID to notify once the job is completed. @param string $subscriptionId The Pub/Sub subscription ID to use when listening for job. @param string $projectId The Google Cloud Project ID. @param string $datasetId The BigQuery Dataset ID. @param string $tableId The BigQuery Table ID to be inspected. / function inspect bigquery with sampling( string $callingProjectId, string $topicId, string $subscriptionId, string $projectId, string $datasetId, string $tableId ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Specify the BigQuery table to be inspected. $bigqueryTable = (new BigQueryTable()) ->setProjectId($projectId) ->setDatasetId($datasetId) ->setTableId($tableId); $bigQueryOptions = (new BigQueryOptions()) ->setTableReference($bigqueryTable) ->setRowsLimit(1000) ->setSampleMethod(SampleMethod::RANDOM START) ->setIdentifyingFields([ (new FieldId()) ->setName('name') ]); $storageConfig = (new StorageConfig()) ->setBigQueryOptions($bigQueryOptions); // Specify the type of info the inspection will look for. // See https://cloud.google.com/dlp/docs/infotypes-reference for complete list of info types $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $infoTypes = [$personNameInfoType]; // Specify how the content should be inspected. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setIncludeQuote(true); // Specify the action that is triggered when the job completes. $pubSubAction = (new PublishToPubSub()) ->setTopic($topic->name()); $action = (new Action()) ->setPubSub($pubSubAction); // Configure the long running job we want the service to perform. $inspectJob = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes // Consider using an asynchronous execution model such as Cloud Functions $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.
- The scan starts from a random location in the dataset and only includes text files under 200 bytes. @param string $callingProjectId The project ID to run the API call under. @param string $gcsUri Google Cloud Storage file url. @param string $topicId The ID of the Pub/Sub topic to notify once the job completes. @param string $subscriptionId The ID of the Pub/Sub subscription to use when listening for job. / function inspect gcs with sampling( // TODO(developer): Replace sample parameters before running the code. string $callingProjectId, string $gcsUri = 'gs://GOOGLE STORAGE BUCKET NAME/dlp sample.csv', string $topicId = 'dlp-pubsub-topic', string $subscriptionId = 'dlp subcription' ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Construct the items to be inspected. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($gcsUri)) ->setBytesLimitPerFile(200) ->setFilesLimitPercent(90) ->setSampleMethod(SampleMethod::RANDOM START); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions($cloudStorageOptions); // Specify the type of info the inspection will look for. $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $emailAddressInfoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $cardNumberInfoType = (new InfoType()) ->setName('CREDIT CARD NUMBER'); $infoTypes = [$phoneNumberInfoType, $emailAddressInfoType, $cardNumberInfoType]; // Specify how the content should be inspected. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setIncludeQuote(true); // Construct the action to run when job completes. $action = (new Action()) ->setPubSub((new PublishToPubSub()) ->setTopic($topic->name())); // Construct inspect job config to run. $inspectJob = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request. $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes. // Consider using an asynchronous execution model such as Cloud Functions. $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Action; use Google\Cloud\Dlp\V2\Action\PublishToPubSub; use Google\Cloud\Dlp\V2\BigQueryOptions\SampleMethod; use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CloudStorageOptions; use Google\Cloud\Dlp\V2\CloudStorageOptions\FileSet; use Google\Cloud\Dlp\V2\CreateDlpJobRequest; use Google\Cloud\Dlp\V2\DlpJob\JobState; use Google\Cloud\Dlp\V2\GetDlpJobRequest; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectJobConfig; use Google\Cloud\Dlp\V2\StorageConfig; use Google\Cloud\PubSub\PubSubClient; / Inspect storage with sampling.

### "Creating and scheduling Sensitive Data Protection inspection jobs \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- Source ID: `site-api-reference-required-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example : gs://GOOGLE STORAGE BUCKET NAME/dlp sample.csv / function create job( string $callingProjectId, string $gcsPath ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // Set autoPopulateTimespan to true to scan only new content. $timespanConfig = (new TimespanConfig()) ->setEnableAutoPopulationOfTimespanConfig(true); // Specify the GCS file to be inspected. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($gcsPath)); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions(($cloudStorageOptions)) ->setTimespanConfig($timespanConfig); // ----- Construct inspection config ----- $emailAddressInfoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $locationInfoType = (new InfoType()) ->setName('LOCATION'); $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $infoTypes = [$emailAddressInfoType, $personNameInfoType, $locationInfoType, $phoneNumberInfoType]; // Whether to include the matching string in the response. $includeQuote = true; // The minimum likelihood required before returning a match. $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // The maximum number of findings to report (0 = server maximum). $limits = (new FindingLimits()) ->setMaxFindingsPerRequest(100); // Create the Inspect configuration object. $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes) ->setIncludeQuote($includeQuote); // Specify the action that is triggered when the job completes. $action = (new Action()) ->setPublishSummaryToCscc(new PublishSummaryToCscc()); // Configure the inspection job we want the service to perform. $inspectJobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Send the job creation request and process the response. $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJobConfig); $job = $dlp->createDlpJob($createDlpJobRequest); // Print results. printf($job->getName()); } Python To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- DlpServiceClient (); // The project ID to run the API call under // const projectId = 'my-project'; // (Optional) The name of the trigger to be created. // const triggerId = 'my-trigger'; // (Optional) A display name for the trigger to be created // const displayName = 'My Trigger'; // (Optional) A description for the trigger to be created // const description = "This is a sample trigger."; // The name of the bucket to scan. // const bucketName = 'YOUR-BUCKET'; // Limit scan to new content only. // const autoPopulateTimespan = true; // How often to wait between scans, in days (minimum = 1 day) // const scanPeriod = 1; // The infoTypes of information to match // const infoTypes = [{ name: 'PHONE NUMBER' }, { name: 'EMAIL ADDRESS' }, { name: 'CREDIT CARD NUMBER' }]; // The minimum likelihood required before returning a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The maximum number of findings to report per request (0 = server maximum) // const maxFindings = 0; async function createTrigger () { // Get reference to the bucket to be inspected const storageItem = { cloudStorageOptions : { fileSet : { url : gs:// ${ bucketName } / }, }, timeSpanConfig : { enableAutoPopulationOfTimespanConfig : autoPopulateTimespan , }, }; // Construct job to be triggered const job = { inspectConfig : { infoTypes : infoTypes , minLikelihood : minLikelihood , limits : { maxFindingsPerRequest : maxFindings , }, }, storageConfig : storageItem , }; // Construct trigger creation request const request = { parent : projects/ ${ projectId } /locations/global , jobTrigger : { inspectJob : job , displayName : displayName , description : description , triggers : [ { schedule : { recurrencePeriodDuration : { seconds : scanPeriod 60 60 24 , // Trigger the scan daily }, }, }, ], status : ' HEALTHY ' , }, triggerId : triggerId , }; // Run trigger creation request const [ trigger ] = await dlp . createJobTrigger ( request ); console . log ( Successfully created trigger ${ trigger . name } . ); } createTrigger (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- Sampling works differently depending on the type of storage repository you're scanning: For BigQuery, you can sample a subset of the total selected rows, corresponding to the percentage of files you specify to include in the scan.
- Sampling works differently depending on the type of storage repository you're scanning: For BigQuery, you can sample a subset of the total selected rows, corresponding to the percentage of files you specify to include in the scan.

### InspectJobConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation StorageConfig JSON representation DatastoreOptions JSON representation PartitionId JSON representation KindExpression JSON representation CloudStorageOptions JSON representation FileSet JSON representation CloudStorageRegexFileSet JSON representation SampleMethod BigQueryOptions JSON representation SampleMethod HybridOptions JSON representation TableOptions JSON representation TimespanConfig JSON representation Controls what and how to inspect for findings.
- SampleMethod How to sample bytes if not all bytes are scanned.
- SampleMethod How to sample rows if not all rows are scanned.
- JSON representation { "timespanConfig" : { object ( TimespanConfig ) } , // Union field type can be only one of the following: "datastoreOptions" : { object ( DatastoreOptions ) } , "cloudStorageOptions" : { object ( CloudStorageOptions ) } , "bigQueryOptions" : { object ( BigQueryOptions ) } , "hybridOptions" : { object ( HybridOptions ) } // End of list of possible types for union field type . } Fields timespanConfig object ( TimespanConfig ) Configuration of the timespan of the items to include in scanning.

