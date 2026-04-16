---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.458Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "BigQuery optional job creation query execution"
feature_slug: "bigquery-optional-job-creation-query-execution"
latest_feature_date: "2025-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
keywords:
  - "bigquery"
  - "optional"
  - "job"
  - "creation"
  - "query"
  - "execution"
  - "looker"
  - "can"
---

# BigQuery optional job creation query execution

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker can execute BigQuery queries with jobCreationMode=JOB_CREATION_OPTIONAL to return immediate results without creating a job when possible.

## Extended Definition

Looker can execute BigQuery queries with jobCreationMode=JOB_CREATION_OPTIONAL to return immediate results without creating a job when possible.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)

## Supporting Pages

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT base . , imp . count AS imp count , imp . du AS imp du , click . count AS click count , click . du AS click du , activity . count AS activity count , activity . du AS activity du FROM ( SELECT FROM ( SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN DATE ADD ( CURRENT DATE (), INTERVAL - 31 DAY ) AND DATE ADD ( CURRENT DATE (), INTERVAL - 1 DAY ) ) ) AS base LEFT JOIN ( SELECT Campaign ID , DATA DATE AS Date , COUNT ( ) AS count , COUNT ( DISTINCT User ID ) AS du FROM dataset .impression campaign manager id WHERE DATA DATE BETWEEN DATE ADD ( CURRENT DATE (), INTERVAL - 31 DAY ) AND DATE ADD ( CURRENT DATE (), INTERVAL - 1 DAY ) GROUP BY Campaign ID , Date ) AS imp ON base .
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT base . , imp . count AS imp count , imp . du AS imp du FROM ( SELECT FROM ( SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN start date AND end date ) ) AS base LEFT JOIN ( SELECT Campaign ID , DATA DATE AS Date , COUNT ( ) AS count , COUNT ( DISTINCT User ID ) AS du FROM dataset .impression campaign manager id WHERE DATA DATE BETWEEN start date AND end date GROUP BY Campaign ID , Date ) AS imp ON base .
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT Campaign , Campaign ID , Date FROM ( SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN start date AND end date ) ORDER BY Campaign ID , Date Impressions and distinct users by campaign within a date range The following SQL sample query analyzes the number of impressions and distinct users by campaign between start date and end date .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- JOBS view The INFORMATION SCHEMA.JOBS view contains near real-time metadata about all BigQuery jobs in the current project.
- JOBS WHERE state != "DONE" AND creation time TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 MINUTE ) ORDER BY creation time ASC ; The result is similar to the following: +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ job id job type state creation time start time user email +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ bquxjob 1 QUERY RUNNING 2023-05-03 05:07:22.818000 UTC 2023-05-03 05:07:22.905000 UTC abc@example.com bquxjob 2 QUERY PENDING 2023-05-01 02:05:47.925000 UTC 2023-05-01 02:05:47.998000 UTC xyz@example.com bquxjob 3 QUERY PENDING 2023-05-01 02:05:47.925000 UTC 2023-05-01 02:05:47.998000 UTC abc@example.com +-----------+----------+---------+--------------------------------+--------------------------------+------------------+ Queries using optional job creation mode The following example shows a list of queries that were executed in optional job creation mode for which BigQuery did not create jobs.
- The results should look like the following: +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ job id statement type priority cache hit job creation reason code total bytes billed total bytes processed total slot ms state error result message +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ bquxjob 1 SELECT INTERACTIVE false null 161480704 161164718 3106 DONE null +-----------+----------------+-------------+-----------+--------------------------+--------------------+---------------------+---------------+-------+----------------------+ The following example shows a list of queries that were executed in optional job creation mode for which BigQuery did create jobs.
- JOBS WHERE TIMESTAMP TRUNC ( creation time , DAY ) = '2024-06-12' AND job creation reason . code IS NULL LIMIT 3 ; The results should look like the following: +-----------+ job id +-----------+ bquxjob 1 bquxjob 2 bquxjob 3 +-----------+ The following example shows information about a query that was executed in optional job creation mode for which BigQuery did not create a job.

### "Migrate Apache Hive Metastore tables to Google Cloud \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer](https://docs.cloud.google.com/bigquery/docs/hdfs-data-lake-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- The service account should belong to the same Google Cloud project where the transfer configuration and destination dataset is created. bq To schedule Hive Metastore transfer, enter the bq mk command and supply the transfer creation flag --transfer config : bq mk --transfer config --data source = hadoop display name = ' TRANSFER NAME ' --service account name = ' SERVICE ACCOUNT ' --project id = ' PROJECT ID ' location = ' REGION ' --params = '{ "transfer strategy":" TRANSFER STRATEGY ", "table name patterns":" LIST OF TABLES ", "table metadata path":"gs:// DUMPER BUCKET /hive-dumper-output.zip", "target gcs file path":"gs:// MIGRATION BUCKET ", "metastore":" METASTORE ", "destination dataproc metastore":" DATAPROC METASTORE URL ", "destination bigquery dataset":" BIGLAKE METASTORE DATASET ", "translation output gcs path":"gs:// TRANSLATION OUTPUT BUCKET /metadata/config/default database/", "storage type":" STORAGE TYPE ", "agent pool name":" AGENT POOL NAME ", "aws access key id":" AWS ACCESS KEY ID ", "aws secret access key":" AWS SECRET ACCESS KEY ", "azure sas token":" AZURE SAS TOKEN ", "partition filter gcs path":" FILTER GCS PATH " }' Replace the following: TRANSFER NAME : the display name for the transfer configuration.
- The 'Dumper execution: SUCCEEDED' message was not found." return 1 # Failure fi } --- Main Script Logic --- log " Script Start " log "Dumper Executable: ${ DUMPER EXECUTABLE } " log "Cloud Storage Base Path: ${ GCS BASE PATH } " log "Local Base Directory: ${ LOCAL BASE DIR } " Use an array to build the command safely dumper command args =( "--connector" "hiveql" "--output" " ${ LOCAL ZIP PATH } " ) Add optional arguments if they are provided if [[ -n " ${ DUMPER HOST } " ]] ; then dumper command args +=( "--host" " ${ DUMPER HOST } " ) log "Using Host: ${ DUMPER HOST } " fi if [[ -n " ${ DUMPER PORT } " ]] ; then dumper command args +=( "--port" " ${ DUMPER PORT } " ) log "Using Port: ${ DUMPER PORT } " fi if [[ -n " ${ HIVE KERBEROS URL } " ]] ; then dumper command args +=( "--hive-kerberos-url" " ${ HIVE KERBEROS URL } " ) log "Using Hive Kerberos URL: ${ HIVE KERBEROS URL } " fi if [[ -n " ${ HIVEQL RPC PROTECTION } " ]] ; then dumper command args +=( "-Dhiveql.rpc.protection= ${ HIVEQL RPC PROTECTION } " ) log "Using HiveQL RPC Protection: ${ HIVEQL RPC PROTECTION } " fi log "Starting dumper tool execution..." log "COMMAND: JAVA OPTS=\"-Djavax.security.auth.useSubjectCredsOnly=false\" ${ DUMPER EXECUTABLE } ${ dumper command args [ ] } " JAVA OPTS = "-Djavax.security.auth.useSubjectCredsOnly=false" " ${ DUMPER EXECUTABLE } " " ${ dumper command args [@] } " >> " ${ LOG FILE } " 2 > & 1 log "Dumper process finished." Validate the output from the dumper execution for success or failure. validate dumper output " ${ LOG FILE } " Upload the ZIP file to Cloud Storage gcs zip path = " ${ GCS BASE PATH } / ${ ZIP FILE NAME } " log "Uploading ${ LOCAL ZIP PATH } to ${ gcs zip path } ..." if [ ! -f " ${ LOCAL ZIP PATH } " ] ; then log "ERROR: Expected ZIP file ${ LOCAL ZIP PATH } not found after dumper execution." The script will exit here with an error code, and the trap will run. exit 1 fi gsutil cp " ${ LOCAL ZIP PATH } " " ${ gcs zip path } " >> " ${ LOG FILE } " 2 > & 1 log "Upload to Cloud Storage successful." The script will now exit with code 0.
- Run the API request with the following information: GET https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources Example Response (abridged) (JSON): { "transferResources": [ { "name": "projects/.../transferResources/table1", "latestStatusDetail": { "state": "RESOURCE TRANSFER SUCCEEDED", "completedPercentage": 100.0 }, "updateTime": "2026-02-03T22:42:06Z" } ] } curl command: curl -X GET "https://bigquerydatatransfer.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /transferConfigs/ CONFIG ID /transferResources" -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Accept: application/json" You can filter the results by resource name or state.
- If you are using a service account, grant the service agent the roles/iam.serviceAccountTokenCreator role with the following command: gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT --member serviceAccount:service- PROJECT NUMBER @gcp-sa-bigquerydatatransfer.iam.gserviceaccount.com --role roles/iam.serviceAccountTokenCreator Grant the Storage Transfer Service service agent ( project- PROJECT NUMBER @storage-transfer-service.iam.gserviceaccount.com ) the following roles in the project: roles/storage.admin If you are migrating from on-prem/HDFS, you must also grant the roles/storagetransfer.serviceAgent role.

