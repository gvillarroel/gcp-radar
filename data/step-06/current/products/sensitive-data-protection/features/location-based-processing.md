---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.429Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Location-based processing"
feature_slug: "location-based-processing"
latest_feature_date: "2020-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs"
keywords:
  - "processing"
  - "location"
  - "specific"
  - "inspection"
  - "allows"
  - "jobs"
  - "based"
---

# Location-based processing

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Allows inspection jobs to run in specific geographic processing locations.

## Extended Definition

Allows inspection jobs to run in specific geographic processing locations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs)

## Supporting Pages

### "Creating and scheduling Sensitive Data Protection inspection jobs \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers](https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers)
- Source ID: `site-api-reference-required-2`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Sensitive Data Protection Guides Send feedback Creating and scheduling Sensitive Data Protection inspection jobs Stay organized with collections Save and categorize content based on your preferences.
- Example : gs://GOOGLE STORAGE BUCKET NAME/dlp sample.csv / function create job( string $callingProjectId, string $gcsPath ): void { // Instantiate a client. $dlp = new DlpServiceClient(); // Set autoPopulateTimespan to true to scan only new content. $timespanConfig = (new TimespanConfig()) ->setEnableAutoPopulationOfTimespanConfig(true); // Specify the GCS file to be inspected. $cloudStorageOptions = (new CloudStorageOptions()) ->setFileSet((new FileSet()) ->setUrl($gcsPath)); $storageConfig = (new StorageConfig()) ->setCloudStorageOptions(($cloudStorageOptions)) ->setTimespanConfig($timespanConfig); // ----- Construct inspection config ----- $emailAddressInfoType = (new InfoType()) ->setName('EMAIL ADDRESS'); $personNameInfoType = (new InfoType()) ->setName('PERSON NAME'); $locationInfoType = (new InfoType()) ->setName('LOCATION'); $phoneNumberInfoType = (new InfoType()) ->setName('PHONE NUMBER'); $infoTypes = [$emailAddressInfoType, $personNameInfoType, $locationInfoType, $phoneNumberInfoType]; // Whether to include the matching string in the response. $includeQuote = true; // The minimum likelihood required before returning a match. $minLikelihood = likelihood::LIKELIHOOD UNSPECIFIED; // The maximum number of findings to report (0 = server maximum). $limits = (new FindingLimits()) ->setMaxFindingsPerRequest(100); // Create the Inspect configuration object. $inspectConfig = (new InspectConfig()) ->setMinLikelihood($minLikelihood) ->setLimits($limits) ->setInfoTypes($infoTypes) ->setIncludeQuote($includeQuote); // Specify the action that is triggered when the job completes. $action = (new Action()) ->setPublishSummaryToCscc(new PublishSummaryToCscc()); // Configure the inspection job we want the service to perform. $inspectJobConfig = (new InspectJobConfig()) ->setInspectConfig($inspectConfig) ->setStorageConfig($storageConfig) ->setActions([$action]); // Send the job creation request and process the response. $parent = "projects/$callingProjectId/locations/global"; $createDlpJobRequest = (new CreateDlpJobRequest()) ->setParent($parent) ->setInspectJob($inspectJobConfig); $job = $dlp->createDlpJob($createDlpJobRequest); // Print results. printf($job->getName()); } Python To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- JSON input: { "jobTrigger" :{ "displayName" : "JobTrigger1" , "description" : "Starts an inspection of a Datastore kind" , "triggers" : [ { "schedule":{ "recurrencePeriodDuration":"86400s" } } ] , "status" : "HEALTHY" , "inspectJob" :{ "storageConfig" :{ "datastoreOptions" :{ "kind" :{ "name" : "Example-Kind" } , "partitionId" :{ "projectId" : "[PROJECT ID]" , "namespaceId" : "[NAMESPACE ID]" } } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PHONE NUMBER" } ] , "excludeInfoTypes" : false , "includeQuote" : true , "minLikelihood" : "LIKELY" } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT ID ] ", " datasetId ":" [ BIGQUERY DATASET NAME ] ", " tableId ":" [ BIGQUERY TABLE NAME ] " } } } } ] } } } JSON output: The following output indicates that the job trigger was successfully created. { "name" : "projects/[PROJECT ID]/jobTriggers/[JOB TRIGGER NAME]" , "displayName" : "JobTrigger1" , "description" : "Starts an inspection of a Datastore kind" , "inspectJob" :{ "storageConfig" :{ "datastoreOptions" :{ "partitionId" :{ "projectId" : "[PROJECT ID]" , "namespaceId" : "[NAMESPACE ID]" } , "kind" :{ "name" : "Example-Kind" } } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PHONE NUMBER" } ] , "minLikelihood" : "LIKELY" , "limits" :{ } , "includeQuote" : true } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT ID ] ", " datasetId ":" [ BIGQUERY DATASET NAME ] ", " tableId ":" [ BIGQUERY TABLE NAME ] " } } } } ] }, " triggers ":[ { " schedule ":{ " recurrencePeriodDuration ":" 86400 s " } } ], " createTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " updateTime ":" 2018 - 11 - 30 T01 : 52 : 41.171857 Z ", " status ":" HEALTHY " } List all jobs To list all jobs for the current project: Console In the Google Cloud console, go to the Sensitive Data Protection page.
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Dlp\V2\Client\DlpServiceClient; use Google\Cloud\Dlp\V2\DlpJob\JobState; use Google\Cloud\Dlp\V2\DlpJobType; use Google\Cloud\Dlp\V2\ListDlpJobsRequest; / List Data Loss Prevention API jobs corresponding to a given filter. @param string $callingProjectId The project ID to run the API call under @param string $filter The filter expression to use / function list jobs(string $callingProjectId, string $filter): void { // Instantiate a client. $dlp = new DlpServiceClient(); // The type of job to list (either 'INSPECT JOB' or 'REDACT JOB') $jobType = DlpJobType::INSPECT JOB; // Run job-listing request // For more information and filter syntax, // @see https://cloud.google.com/dlp/docs/reference/rest/v2/projects.dlpJobs/list $parent = "projects/$callingProjectId/locations/global"; $listDlpJobsRequest = (new ListDlpJobsRequest()) ->setParent($parent) ->setFilter($filter) ->setType($jobType); $response = $dlp->listDlpJobs($listDlpJobsRequest); // Print job list $jobs = $response->iterateAllElements(); foreach ($jobs as $job) { printf('Job %s status: %s' .

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference-2`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Impact: Finding notification filters, post-processing and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings of the following categories: AUDIT CONFIG NOT MONITORED , BUCKET IAM NOT MONITORED , CUSTOM ROLE NOT MONITORED , FIREWALL NOT MONITORED , NETWORK NOT MONITORED , OWNER NOT MONITORED , ROUTE NOT MONITORED , SQL INSTANCE NOT MONITORED .
- Impact: Finding notification filters, post-processing and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings of the following categories: AUDIT CONFIG NOT MONITORED , BUCKET IAM NOT MONITORED , CUSTOM ROLE NOT MONITORED , FIREWALL NOT MONITORED , NETWORK NOT MONITORED , OWNER NOT MONITORED , ROUTE NOT MONITORED , SQL INSTANCE NOT MONITORED .
- Impact: Finding notification filters, post-processing, and alerting based on the finding source property will need to be updated to take advantage of the new data type on findings of the following categories: ADMIN SERVICE ACCOUNT , NON ORG IAM MEMBER , PRIMITIVE ROLES USED , OVER PRIVILEGED SERVICE ACCOUNT USER , REDIS ROLE USED ON ORG , SERVICE ACCOUNT ROLE SEPARATION , KMS ROLE SEPARATION .
- Impact: Finding notification filters, post-processing, and alerting based on the finding source property will need to be updated to take advantage of the new data type for findings.

### "REST Resource: projects.dlpJobs \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs)
- Source ID: `site-docs-root-3`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "processedBytes" : string , "totalEstimatedBytes" : string , "infoTypeStats" : [ { object ( InfoTypeStats ) } ] , "numRowsProcessed" : string , "hybridStats" : { object ( HybridInspectStatistics ) } } Fields processedBytes string ( int64 format) Total size in bytes that were processed. totalEstimatedBytes string ( int64 format) Estimate of the number of bytes to process. infoTypeStats[] object ( InfoTypeStats ) Statistics of how many instances of each info type were found during inspect job. numRowsProcessed string ( int64 format) Number of rows scanned after sampling and time filtering (applicable for row based stores such as BigQuery). hybridStats object ( HybridInspectStatistics ) Statistics related to the processing of hybrid inspect.
- Home Documentation Security Sensitive Data Protection Reference Send feedback REST Resource: projects.dlpJobs Stay organized with collections Save and categorize content based on your preferences.
- Resource: DlpJob JSON representation DlpJobType JobState AnalyzeDataSourceRiskDetails JSON representation PrivacyMetric JSON representation NumericalStatsConfig JSON representation CategoricalStatsConfig JSON representation KAnonymityConfig JSON representation EntityId JSON representation LDiversityConfig JSON representation KMapEstimationConfig JSON representation TaggedField JSON representation AuxiliaryTable JSON representation QuasiIdField JSON representation DeltaPresenceEstimationConfig JSON representation QuasiId JSON representation StatisticalTable JSON representation QuasiIdentifierField JSON representation NumericalStatsResult JSON representation CategoricalStatsResult JSON representation CategoricalStatsHistogramBucket JSON representation ValueFrequency JSON representation KAnonymityResult JSON representation KAnonymityHistogramBucket JSON representation KAnonymityEquivalenceClass JSON representation LDiversityResult JSON representation LDiversityHistogramBucket JSON representation LDiversityEquivalenceClass JSON representation KMapEstimationResult JSON representation KMapEstimationHistogramBucket JSON representation KMapEstimationQuasiIdValues JSON representation DeltaPresenceEstimationResult JSON representation DeltaPresenceEstimationHistogramBucket JSON representation DeltaPresenceEstimationQuasiIdValues JSON representation RequestedRiskAnalysisOptions JSON representation RiskAnalysisJobConfig JSON representation InspectDataSourceDetails JSON representation RequestedOptions JSON representation Result JSON representation InfoTypeStats JSON representation HybridInspectStatistics JSON representation ActionDetails JSON representation DeidentifyDataSourceDetails JSON representation RequestedDeidentifyOptions JSON representation DeidentifyDataSourceStats JSON representation Methods Resource: DlpJob Combines all of the information about a DLP job.
- JSON representation { "name" : string , "type" : enum ( DlpJobType ) , "state" : enum ( JobState ) , "createTime" : string , "startTime" : string , "endTime" : string , "lastModified" : string , "jobTriggerName" : string , "errors" : [ { object ( Error ) } ] , "actionDetails" : [ { object ( ActionDetails ) } ] , // Union field details can be only one of the following: "riskDetails" : { object ( AnalyzeDataSourceRiskDetails ) } , "inspectDetails" : { object ( InspectDataSourceDetails ) } // End of list of possible types for union field details . } Fields name string The server-assigned name. type enum ( DlpJobType ) The type of job. state enum ( JobState ) State of a job. createTime string ( Timestamp format) Time when the job was created.

