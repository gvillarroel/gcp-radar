---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.467Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Variables in Studio in Looker"
feature_slug: "variables-in-studio-in-looker"
latest_feature_date: "2025-05-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer"
keywords:
  - "variables"
  - "studio"
  - "looker"
  - "lets"
  - "users"
  - "use"
  - "parameters"
  - "query"
---

# Variables in Studio in Looker

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Lets users use parameters and query result variables in Studio in Looker reports.

## Extended Definition

Lets users use parameters and query result variables in Studio in Looker reports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)

## Supporting Pages

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analyze Data Studio queries with job labels All queries that are sent by Data Studio to BigQuery have the BigQuery job label requestor:looker studio .
- The Data Studio BigQuery connector lets you access data from your BigQuery tables within Data Studio.
- SELECT FROM ( SELECT Criteria ID, Parent ID, Name FROM 'table 1' ) As table 1 LEFT JOIN ( SELECT Criteria ID, Parent ID, Name FROM 'table 2' ) As table 2 ON table 1.Criteria ID = table 2.Criteria ID This query includes the following duplicate column names: Criteria ID Parent ID Name To avoid the Field is ambiguous error, you can explicitly rename the duplicated fields using the AS keyword: SELECT FROM ( SELECT Criteria ID AS Criteria ID 1, Parent ID AS Parent ID 1, Name AS NAME 1 FROM 'table 1' ) AS table 1 LEFT JOIN ( SELECT Criteria ID AS Criteria ID 2, Parent ID AS Parent ID 2, Name AS NAME 2 FROM 'table 2' ) AS table 2 ON table 1.Criteria ID 1 = table 2.Criteria ID 2; If you need to rename only a few fields, you can select everything except the ones that you want to rename, for example: SELECT EXCEPT (city), city AS city 1 FROM 'table 1' Query timeout Custom queries in Data Studio might time out after three to five minutes.
- Note: Scheduled email delivery doesn't work with data that is protected using IP-based access levels with VPC Service Controls. (This is because Data Studio cannot pass the email recipient's IP address to BigQuery to assess IP-based access levels when generating the email.) Visualize BigQuery GEOGRAPHY polygons You can display GEOGRAPHY polygons by using a Google Maps visualization in your report.

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT Campaign , Campaign ID , Date FROM ( SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN start date AND end date ) ORDER BY Campaign ID , Date Impressions and distinct users by campaign within a date range The following SQL sample query analyzes the number of impressions and distinct users by campaign between start date and end date .
- SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE Impressions and distinct users by campaign The following SQL sample query analyzes the number of impressions and distinct users by campaign over the past 30 days.
- Date Impressions, clicks, activities and distinct users by campaign The following SQL sample query analyzes the number of impressions, clicks, activities, and distinct users by campaign over the past 30 days.
- The transfer name can be any value that lets you identify the transfer if you need to modify it later. parameters contains the parameters for the created data transfer configuration in JSON format.

### Load Google Ad Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT City , DATA DATE AS Date , count ( ) AS imps , count ( distinct UserId ) AS uniq users FROM dataset .NetworkImpressions network code WHERE DATA DATE BETWEEN start date AND end date GROUP BY City , Date Impressions and unique users by line item type The following SQL sample query analyzes the number of impressions and unique users by line item type over the past 30 days.
- The transfer name can be any value that lets you identify the data transfer if you need to modify it later. parameters contains the parameters for the created transfer configuration in JSON format.
- Impressions and unique users by city The following SQL sample query analyzes the number of impressions and unique users by city over the past 30 days.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create a ad manager(formerly DFP) transfer config public class CreateAdManagerTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String bucket = "gs://cloud-sample-data" ; // the network code can only be digits with length 1 to 15 String networkCode = "12345678" ; Map<String , Value > params = new HashMap <> (); params . put ( "bucket" , Value . newBuilder (). setStringValue ( bucket ). build ()); params . put ( "network code" , Value . newBuilder (). setStringValue ( networkCode ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Ad Manager Config Name" ) . setDataSourceId ( "dfp dt" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . build (); createAdManagerTransfer ( projectId , transferConfig ); } public static void createAdManagerTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Ad manager transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Ad manager transfer was not created." + ex . toString ()); } } } Warning: If you change the schema of a report, all files on that day must have the same schema, or the data transfer for the entire day will fail.

