---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.621Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "BigQuery risk analysis"
feature_slug: "bigquery-risk-analysis"
latest_feature_date: "2017-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-anonymity"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/compute-stats"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis"
keywords:
  - "datasource"
  - "analyze"
  - "through"
  - "provides"
  - "analysis"
  - "risk"
---

# BigQuery risk analysis

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Provides risk analysis support for BigQuery data through the dataSource.analyze API.

## Extended Definition

Provides risk analysis support for BigQuery data through the dataSource.analyze API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-anonymity](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-anonymity)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-stats](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-stats)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis)

## Supporting Pages

### "Computing k-anonymity for a dataset \_|\_ Sensitive Data Protection \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-anonymity](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-k-anonymity)
- Source ID: `site-api-reference-required-2`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The results of the analysis are inside the "riskDetails" key, in an AnalyzeDataSourceRiskDetails object.
- Types ; public class RiskAnalysisCreateKAnonymity { public static AnalyzeDataSourceRiskDetails .
- DlpServiceClient (); // The project ID to run the API call under. // const projectId = "your-project-id"; // The ID of the dataset to inspect, e.g. 'my dataset' // const datasetId = 'my dataset'; // The ID of the table to inspect, e.g. 'my table' // const sourceTableId = 'my source table'; // The ID of the table where outputs are stored // const outputTableId = 'my output table'; async function kAnonymityWithEntityIds () { // Specify the BigQuery table to analyze. const sourceTable = { projectId : projectId , datasetId : datasetId , tableId : sourceTableId , }; // Specify the unique identifier in the source table for the k-anonymity analysis. const uniqueIdField = { name : 'Name' }; // These values represent the column names of quasi-identifiers to analyze const quasiIds = [{ name : 'Age' }, { name : 'Mystery' }]; // Configure the privacy metric to compute for re-identification risk analysis. const privacyMetric = { kAnonymityConfig : { entityId : { field : uniqueIdField , }, quasiIds : quasiIds , }, }; // Create action to publish job status notifications to BigQuery table. const action = [ { saveFindings : { outputConfig : { table : { projectId : projectId , datasetId : datasetId , tableId : outputTableId , }, }, }, }, ]; // Configure the risk analysis job to perform. const riskAnalysisJob = { sourceTable : sourceTable , privacyMetric : privacyMetric , actions : action , }; // Combine configurations into a request for the service. const createDlpJobRequest = { parent : projects/ ${ projectId } /locations/global , riskJob : riskAnalysisJob , }; // Send the request and receive response from the service const [ createdDlpJob ] = await dlp . createDlpJob ( createDlpJobRequest ); const jobName = createdDlpJob . name ; // Waiting for a maximum of 15 minutes for the job to get complete. let job ; let numOfAttempts = 30 ; while ( numOfAttempts > 0 ) { // Fetch DLP Job status [ job ] = await dlp . getDlpJob ({ name : jobName }); // Check if the job has completed. if ( job . state === 'DONE' ) { break ; } if ( job . state === 'FAILED' ) { console . log ( 'Job Failed, Please check the configuration.' ); return ; } // Sleep for a short duration before checking the job status again. await new Promise ( resolve = > { setTimeout (() = > resolve (), 30000 ); }); numOfAttempts -= 1 ; } // Create helper function for unpacking values const getValue = obj = > obj [ Object . keys ( obj )[ 0 ]]; // Print out the results. const histogramBuckets = job . riskDetails . kAnonymityResult . equivalenceClassHistogramBuckets ; histogramBuckets . forEach (( histogramBucket , histogramBucketIdx ) = > { console . log ( Bucket ${ histogramBucketIdx } : ); console . log ( Bucket size range: [ ${ histogramBucket . equivalenceClassSizeLowerBound } , ${ histogramBucket . equivalenceClassSizeUpperBound } ] ); histogramBucket . bucketValues . forEach ( valueBucket = > { const quasiIdValues = valueBucket . quasiIdsValues . map ( getValue ) . join ( ', ' ); console . log ( Quasi-ID values: { ${ quasiIdValues } } ); console . log ( Class size: ${ valueBucket . equivalenceClassSize } ); }); }); } await kAnonymityWithEntityIds (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\RiskAnalysisJobConfig; use Google\Cloud\Dlp\V2\BigQueryTable; use Google\Cloud\Dlp\V2\DlpJob\JobState; use Google\Cloud\Dlp\V2\Action; use Google\Cloud\Dlp\V2\Action\PublishToPubSub; use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CreateDlpJobRequest; use Google\Cloud\Dlp\V2\FieldId; use Google\Cloud\Dlp\V2\GetDlpJobRequest; use Google\Cloud\Dlp\V2\PrivacyMetric; use Google\Cloud\Dlp\V2\PrivacyMetric\KAnonymityConfig; use Google\Cloud\PubSub\PubSubClient; / Computes the k-anonymity of a column set in a Google BigQuery table. @param string $callingProjectId The project ID to run the API call under @param string $dataProjectId The project ID containing the target Datastore @param string $topicId The name of the Pub/Sub topic to notify once the job completes @param string $subscriptionId The name of the Pub/Sub subscription to use when listening for job @param string $datasetId The ID of the dataset to inspect @param string $tableId The ID of the table to inspect @param string[] $quasiIdNames Array columns that form a composite key (quasi-identifiers) / function k anonymity( string $callingProjectId, string $dataProjectId, string $topicId, string $subscriptionId, string $datasetId, string $tableId, array $quasiIdNames ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Construct risk analysis config $quasiIds = array map( function ($id) { return (new FieldId())->setName($id); }, $quasiIdNames ); $statsConfig = (new KAnonymityConfig()) ->setQuasiIds($quasiIds); $privacyMetric = (new PrivacyMetric()) ->setKAnonymityConfig($statsConfig); // Construct items to be analyzed $bigqueryTable = (new BigQueryTable()) ->setProjectId($dataProjectId) ->setDatasetId($datasetId) ->setTableId($tableId); // Construct the action to run when job completes $pubSubAction = (new PublishToPubSub()) ->setTopic($topic->name()); $action = (new Action()) ->setPubSub($pubSubAction); // Construct risk analysis job config to run $riskJob = (new RiskAnalysisJobConfig()) ->setPrivacyMetric($privacyMetric) ->setSourceTable($bigqueryTable) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setRiskJob($riskJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes // Consider using an asynchronous execution model such as Cloud Functions $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.

### "Computing numerical and categorical statistics \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/compute-stats](https://docs.cloud.google.com/sensitive-data-protection/docs/compute-stats)
- Source ID: `site-api-reference-required-2`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Types ; public class RiskAnalysisCreateCategoricalStats { public static AnalyzeDataSourceRiskDetails .
- Types ; public class RiskAnalysisCreateNumericalStats { public static AnalyzeDataSourceRiskDetails .
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Action; use Google\Cloud\Dlp\V2\Action\PublishToPubSub; use Google\Cloud\Dlp\V2\BigQueryTable; use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CreateDlpJobRequest; use Google\Cloud\Dlp\V2\DlpJob\JobState; use Google\Cloud\Dlp\V2\FieldId; use Google\Cloud\Dlp\V2\GetDlpJobRequest; use Google\Cloud\Dlp\V2\PrivacyMetric; use Google\Cloud\Dlp\V2\PrivacyMetric\NumericalStatsConfig; use Google\Cloud\Dlp\V2\RiskAnalysisJobConfig; use Google\Cloud\PubSub\PubSubClient; / Computes risk metrics of a column of numbers in a Google BigQuery table. @param string $callingProjectId The project ID to run the API call under @param string $dataProjectId The project ID containing the target Datastore @param string $topicId The name of the Pub/Sub topic to notify once the job completes @param string $subscriptionId The name of the Pub/Sub subscription to use when listening for job @param string $datasetId The ID of the BigQuery dataset to inspect @param string $tableId The ID of the BigQuery table to inspect @param string $columnName The name of the column to compute risk metrics for, e.g. "age" / function numerical stats( string $callingProjectId, string $dataProjectId, string $topicId, string $subscriptionId, string $datasetId, string $tableId, string $columnName ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Construct risk analysis config $columnField = (new FieldId()) ->setName($columnName); $statsConfig = (new NumericalStatsConfig()) ->setField($columnField); $privacyMetric = (new PrivacyMetric()) ->setNumericalStatsConfig($statsConfig); // Construct items to be analyzed $bigqueryTable = (new BigQueryTable()) ->setProjectId($dataProjectId) ->setDatasetId($datasetId) ->setTableId($tableId); // Construct the action to run when job completes $pubSubAction = (new PublishToPubSub()) ->setTopic($topic->name()); $action = (new Action()) ->setPubSub($pubSubAction); // Construct risk analysis job config to run $riskJob = (new RiskAnalysisJobConfig()) ->setPrivacyMetric($privacyMetric) ->setSourceTable($bigqueryTable) ->setActions([$action]); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Submit request $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setRiskJob($riskJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Poll Pub/Sub using exponential backoff until job finishes // Consider using an asynchronous execution model such as Cloud Functions $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Action; use Google\Cloud\Dlp\V2\Action\PublishToPubSub; use Google\Cloud\Dlp\V2\BigQueryTable; use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\CreateDlpJobRequest; use Google\Cloud\Dlp\V2\DlpJob\JobState; use Google\Cloud\Dlp\V2\FieldId; use Google\Cloud\Dlp\V2\GetDlpJobRequest; use Google\Cloud\Dlp\V2\PrivacyMetric; use Google\Cloud\Dlp\V2\PrivacyMetric\CategoricalStatsConfig; use Google\Cloud\Dlp\V2\RiskAnalysisJobConfig; use Google\Cloud\PubSub\PubSubClient; / Computes risk metrics of a column of data in a Google BigQuery table. @param string $callingProjectId The project ID to run the API call under @param string $dataProjectId The project ID containing the target Datastore @param string $topicId The name of the Pub/Sub topic to notify once the job completes @param string $subscriptionId The name of the Pub/Sub subscription to use when listening for job @param string $datasetId The ID of the dataset to inspect @param string $tableId The ID of the table to inspect @param string $columnName The name of the column to compute risk metrics for, e.g. "age" / function categorical stats( string $callingProjectId, string $dataProjectId, string $topicId, string $subscriptionId, string $datasetId, string $tableId, string $columnName ): void { // Instantiate a client. $dlp = new DlpServiceClient(); $pubsub = new PubSubClient(); $topic = $pubsub->topic($topicId); // Construct risk analysis config $columnField = (new FieldId()) ->setName($columnName); $statsConfig = (new CategoricalStatsConfig()) ->setField($columnField); $privacyMetric = (new PrivacyMetric()) ->setCategoricalStatsConfig($statsConfig); // Construct items to be analyzed $bigqueryTable = (new BigQueryTable()) ->setProjectId($dataProjectId) ->setDatasetId($datasetId) ->setTableId($tableId); // Construct the action to run when job completes $pubSubAction = (new PublishToPubSub()) ->setTopic($topic->name()); $action = (new Action()) ->setPubSub($pubSubAction); // Construct risk analysis job config to run $riskJob = (new RiskAnalysisJobConfig()) ->setPrivacyMetric($privacyMetric) ->setSourceTable($bigqueryTable) ->setActions([$action]); // Submit request $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setRiskJob($riskJob); $job = $dlp->createDlpJob($createDlpJobRequest); // Listen for job notifications via an existing topic/subscription. $subscription = $topic->subscription($subscriptionId); // Poll Pub/Sub using exponential backoff until job finishes // Consider using an asynchronous execution model such as Cloud Functions $attempt = 1; $startTime = time(); do { foreach ($subscription->pull() as $message) { if ( isset($message->attributes()['DlpJobName']) && $message->attributes()['DlpJobName'] === $job->getName() ) { $subscription->acknowledge($message); // Get the updated job.

### "Re-identification risk analysis \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis)
- Source ID: `site-api-reference-required-2`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sensitive Data Protection's risk analysis APIs simulate a re-identification dataset to approximate the steps an attacker might go through to compare the original dataset in order to re-identify the data.
- Risk analysis terms and techniques If you don't correctly or adequately de-identify sensitive data, you risk an attacker re-identifying the data or learning sensitive information about individuals, which can have serious privacy implications.
- Re-identification risk analysis (or just risk analysis ) is the process of analyzing sensitive data to find properties that might increase the risk of subjects being identified, or of sensitive information about individuals being revealed.
- And like for k -map estimation, Sensitive Data Protection's risk analysis APIs simulate a population dataset to approximate the dataset that an attacker might use to find out who is in the dataset.

