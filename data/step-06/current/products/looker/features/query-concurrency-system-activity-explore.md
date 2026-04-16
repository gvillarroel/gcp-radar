---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.457Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Query Concurrency System Activity Explore"
feature_slug: "query-concurrency-system-activity-explore"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "query"
  - "concurrency"
  - "system"
  - "activity"
  - "explore"
  - "helps"
  - "identify"
  - "periods"
---

# Query Concurrency System Activity Explore

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This Explore helps identify periods of high load and investigate performance bottlenecks related to database connection limits; This Explore helps identify periods of high load and investigate performance bottlenecks related to database connection limits.

## Extended Definition

This Explore helps identify periods of high load and investigate performance bottlenecks related to database connection limits; This Explore helps identify periods of high load and investigate performance bottlenecks related to database connection limits.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Job completedJob = job . waitFor (); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to extract due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table extract compressed successful" ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table extraction job was interrupted. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- The following Logs Explorer filter returns information about your extract jobs: resource.type="bigquery resource" protoPayload.methodName="jobservice.insert" (protoPayload.serviceData.jobInsertRequest.resource.jobConfiguration.query.query= "EXPORT" OR protoPayload.serviceData.jobCompletedEvent.eventName="extract job completed" OR protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.query.query= "EXPORT") Exceeded extract bytes per day quota error BigQuery returns this error when the extraction exceeds the default 50 TiB daily limit in a project.
- Job completedJob = job . waitFor ( RetryOption . initialRetryDelay ( Duration . ofSeconds ( 1 )), RetryOption . totalTimeout ( Duration . ofMinutes ( 3 ))); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to extract due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table export successful.
- Check in GCS bucket for the " + dataFormat + " file." ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table extraction job was interrupted. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT base . , imp . count AS imp count , imp . du AS imp du , click . count AS click count , click . du AS click du , activity . count AS activity count , activity . du AS activity du FROM ( SELECT FROM ( SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN DATE ADD ( CURRENT DATE (), INTERVAL - 31 DAY ) AND DATE ADD ( CURRENT DATE (), INTERVAL - 1 DAY ) ) ) AS base LEFT JOIN ( SELECT Campaign ID , DATA DATE AS Date , COUNT ( ) AS count , COUNT ( DISTINCT User ID ) AS du FROM dataset .impression campaign manager id WHERE DATA DATE BETWEEN DATE ADD ( CURRENT DATE (), INTERVAL - 31 DAY ) AND DATE ADD ( CURRENT DATE (), INTERVAL - 1 DAY ) GROUP BY Campaign ID , Date ) AS imp ON base .
- Activity Group ID WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN start date AND end date ) ) AS base LEFT JOIN ( SELECT Campaign ID , Activity ID , DATA DATE AS Date , COUNT ( ) AS count , COUNT ( DISTINCT User ID ) AS du FROM dataset .activity campaign manager id WHERE DATA DATE BETWEEN DATE ADD ( CURRENT DATE (), INTERVAL - 31 DAY ) AND DATE ADD ( CURRENT DATE (), INTERVAL - 1 DAY ) GROUP BY Campaign ID , Activity ID , Date ) AS activity ON base .
- Date Campaign activity The following SQL sample query analyzes campaign activity over the past 30 days.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create campaign manager transfer config public class CreateCampaignmanagerTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String bucket = "gs://cloud-sample-data" ; // the network id only allows digits String networkId = "7878" ; String fileNamePrefix = "test " ; Map<String , Value > params = new HashMap <> (); params . put ( "bucket" , Value . newBuilder (). setStringValue ( bucket ). build ()); params . put ( "network id" , Value . newBuilder (). setStringValue ( networkId ). build ()); params . put ( "file name prefix" , Value . newBuilder (). setStringValue ( fileNamePrefix ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Campaignmanager Config Name" ) . setDataSourceId ( "dcm dt" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . build (); createCampaignmanagerTransfer ( projectId , transferConfig ); } public static void createCampaignmanagerTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Campaignmanager transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Campaignmanager transfer was not created." + ex . toString ()); } } } Warning: If you change the schema of a report, all files on that day must have the same schema, or the data transfer for the entire day will fail.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

