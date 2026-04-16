---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.575Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "BigQueryOptions row scan percentage limit"
feature_slug: "bigqueryoptions-row-scan-percentage-limit"
latest_feature_date: "2018-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues"
keywords:
  - "bigqueryoptions"
  - "percentage"
  - "limiting"
  - "limit"
  - "scan"
  - "number"
  - "adds"
---

# BigQueryOptions row scan percentage limit

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Adds support for limiting the number of rows scanned per file by percentage in BigQueryOptions.

## Extended Definition

Adds support for limiting the number of rows scanned per file by percentage in BigQueryOptions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues](https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues)

## Supporting Pages

### "Inspect Google Cloud storage and databases for sensitive data \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- Source ID: `site-docs-reference-3`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- JSON output: { "name" : "projects/[PROJECT-ID]/dlpJobs/[JOB-ID]" , "type" : "INSPECT JOB" , "state" : "PENDING" , "inspectDetails" :{ "requestedOptions" :{ "snapshotInspectTemplate" :{ } , "jobConfig" :{ "storageConfig" :{ "cloudStorageOptions" :{ "fileSet" :{ "url" : "gs://[BUCKET NAME]/ " } , "bytesLimitPerFile" : "200" , "fileTypes" : [ "TEXT FILE" ] , "sampleMethod" : "TOP" , "filesLimitPercent" : 90 } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PERSON NAME" } ] , "minLikelihood" : "POSSIBLE" , "limits" :{ } , "includeQuote" : true , "excludeInfoTypes" : true } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT-ID ] ", " datasetId ":" [ DATASET-ID ] ", " tableId ":" [ TABLE-ID ] " }, " outputSchema ":" BASIC COLUMNS " } } } ] } } }, " createTime ":" 2018 - 05 - 30 T22 : 22 : 08.279 Z " } Limit BigQuery scans To enable sampling in BigQuery by limiting the amount of data that is scanned, specify the following optional fields within BigQueryOptions : rowsLimit : The maximum number of rows to scan.
- This can be set to one or more of the following enumerated types . filesLimitPercent : Limits the number of files to scan to the specified percentage of the input FileSet .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Action; use Google\Cloud\Dlp\V2\Action\PublishToPubSub; use Google\Cloud\Dlp\V2\BigQueryOptions; use Google\Cloud\Dlp\V2\BigQueryTable; use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CreateDlpJobRequest; use Google\Cloud\Dlp\V2\DlpJob\JobState; use Google\Cloud\Dlp\V2\GetDlpJobRequest; use Google\Cloud\Dlp\V2\InfoType; use Google\Cloud\Dlp\V2\InspectConfig; use Google\Cloud\Dlp\V2\InspectConfig\FindingLimits; use Google\Cloud\Dlp\V2\InspectJobConfig; use Google\Cloud\Dlp\V2\Likelihood; use Google\Cloud\Dlp\V2\StorageConfig; use Google\Cloud\PubSub\PubSubClient; / Inspect a BigQuery table , using Pub/Sub for job status notifications. @param string $callingProjectId The project ID to run the API call under @param string $dataProjectId The project ID containing the target Datastore @param string $topicId The name of the Pub/Sub topic to notify once the job completes @param string $subscriptionId The name of the Pub/Sub subscription to use when listening for job @param string $datasetId The ID of the dataset to inspect @param string $tableId The ID of the table to inspect @param int $maxFindings (Optional) The maximum number of findings to report per request (0 = server maximum) / function inspect bigquery( string $callingProjectId, string $dataProjectId, string $topicId, string $subscriptionId, string $datasetId, string $tableId, int $maxFindings = 0 ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // The infoTypes of information to match $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $creditCardNumberInfoType = (new InfoType()) ->setName('CREDIT CARD NUMBER'); $infoTypes = [$personNameInfoType, $creditCardNumberInfoType]; // The minimum likelihood required before returning a match $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // Specify finding limits $limits = (new FindingLimits()) ->setMaxFindingsPerRequest($maxFindings); // Construct items to be inspected $bigqueryTable = (new BigQueryTable()) ->setProjectId($dataProjectId) ->setDatasetId($datasetId) ->setTableId($tableId); $bigQueryOptions = (new BigQueryOptions()) ->setTableReference($bigqueryTable); $storageConfig = (new StorageConfig()) ->setBigQueryOptions($bigQueryOptions); // Construct the inspect config object $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes); // Construct the action to run when job completes $pubSubAction = (new PublishToPubSub()) ->setTopic($topic->name()); $action = (new Action()) ->setPubSub($pubSubAction); // Construct inspect job config to run $inspectJob = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes // Consider using an asynchronous execution model such as Cloud Functions $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if (isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName()) { $subscription->acknowledge($message); // Get the updated job.
- The scan starts from a random row. @param string $callingProjectId The project ID to run the API call under. @param string $topicId The Pub/Sub topic ID to notify once the job is completed. @param string $subscriptionId The Pub/Sub subscription ID to use when listening for job. @param string $projectId The Google Cloud Project ID. @param string $datasetId The BigQuery Dataset ID. @param string $tableId The BigQuery Table ID to be inspected. / function inspect bigquery with sampling( string $callingProjectId, string $topicId, string $subscriptionId, string $projectId, string $datasetId, string $tableId ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Specify the BigQuery table to be inspected. $bigqueryTable = (new BigQueryTable()) ->setProjectId($projectId) ->setDatasetId($datasetId) ->setTableId($tableId); $bigQueryOptions = (new BigQueryOptions()) ->setTableReference($bigqueryTable) ->setRowsLimit(1000) ->setSampleMethod(SampleMethod::RANDOM START) ->setIdentifyingFields([ (new FieldId()) ->setName('name') ]); $storageConfig = (new StorageConfig()) ->setBigQueryOptions($bigQueryOptions); // Specify the type of info the inspection will look for. // See https://cloud.google.com/dlp/docs/infotypes-reference for complete list of info types $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $infoTypes = [$personNameInfoType]; // Specify how the content should be inspected. $inspectConfig = (new InspectConfig()) ->setInfoTypes($infoTypes) ->setIncludeQuote(true); // Specify the action that is triggered when the job completes. $pubSubAction = (new PublishToPubSub()) ->setTopic($topic->name()); $action = (new Action()) ->setPubSub($pubSubAction); // Configure the long running job we want the service to perform. $inspectJob = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes // Consider using an asynchronous execution model such as Cloud Functions $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.

### InspectJobConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectJobConfig)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Image inspection is restricted to 'global', 'us', 'asia', and 'europe'. sampleMethod enum ( SampleMethod ) How to sample the data. filesLimitPercent integer Limits the number of files to scan to this percentage of the input FileSet.
- JSON representation { "fileSet" : { object ( FileSet ) } , "bytesLimitPerFile" : string , "bytesLimitPerFilePercent" : integer , "fileTypes" : [ enum ( FileType ) ] , "sampleMethod" : enum ( SampleMethod ) , "filesLimitPercent" : integer } Fields fileSet object ( FileSet ) The set of one or more files to scan. bytesLimitPerFile string ( int64 format) Max number of bytes to scan from a file.
- For more information, see Limits on bytes scanned per file . bytesLimitPerFilePercent integer Max percentage of bytes to scan from a file.
- Nested fields such as person.birthdate.year are allowed. rowsLimit string ( int64 format) Max number of rows to scan.

### Known issues \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues](https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues)
- Source ID: `site-docs-reference-3`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example JSON The following example sets the value of the commit time stamp field to AUTO : { ... "commit time stamp": "AUTO", ... } Limiting scans by setting a maximum percentage or rows When you set a sampling limit based on a percentage of the total number of table rows ( rowsLimitPercent ), Sensitive Data Protection can inspect more rows than expected.
- Limiting scans to new BigQuery content If you're limiting scans to only new content , and you use the BigQuery Storage Write API to populate the input table, Sensitive Data Protection might skip scanning some rows.
- If you need to put a hard limit on the number of rows to scan, we recommend setting a maximum number of rows ( rowsLimit ) instead.
- Exported findings do not have values for the row number field When you configure Sensitive Data Protection to save findings to BigQuery, the location.content locations.record location.record key.big query key.row number field in the generated BigQuery table is inferred at the time the input table is scanned.

