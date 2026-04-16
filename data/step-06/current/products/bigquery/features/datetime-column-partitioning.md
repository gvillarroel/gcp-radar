---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.769Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DATETIME column partitioning"
feature_slug: "datetime-column-partitioning"
latest_feature_date: "2020-09-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transformation"
keywords:
  - "datetime"
  - "column"
  - "partitioning"
  - "bigquery"
  - "supports"
  - "time"
  - "unit"
  - "partitioned"
---

# DATETIME column partitioning

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports using a DATETIME column as the partitioning column for time-unit partitioned tables.

## Extended Definition

BigQuery supports using a DATETIME column as the partitioning column for time-unit partitioned tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)

## Supporting Pages

### "Campaign Manager report transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transformation)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Campaign Manager file BigQuery table BigQuery view Data Transfer files impression p impression campaign manager id impression campaign manager id click p click campaign manager id click campaign manager id activity p activity campaign manager id activity campaign manager id rich media p rich media campaign manager id rich media campaign manager id Match Tables activity cats p match table activity cats campaign manager id match table activity cats campaign manager id activity types p match table activity types campaign manager id match table activity types campaign manager id ads p match table ads campaign manager id match table ads campaign manager id ad placement assignments p match table ad placement assignments campaign manager id match table ad placement assignments campaign manager id advertisers p match table advertisers campaign manager id match table advertisers campaign manager id assets p match table assets campaign manager id match table assets campaign manager id browsers p match table browsers campaign manager id match table browsers campaign manager id campaigns p match table campaigns campaign manager id match table campaigns campaign manager id cities p match table cities campaign manager id match table cities campaign manager id creatives p match table creatives campaign manager id match table creatives campaign manager id creative ad assignments p match table creative ad assignments campaign manager id match table creative ad assignments campaign manager id custom creative fields p match table custom creative fields campaign manager id match table custom creative fields campaign manager id paid search p match table paid search campaign manager id match table paid search campaign manager id designated market areas p match table designated market areas campaign manager id match table designated market areas campaign manager id keyword value p match table keyword value campaign manager id match table keyword value campaign manager id null user ID reason categories Unsupported Unsupported rich media standard event and event type IDs Unsupported Unsupported custom rich media p match table custom rich media campaign manager id match table custom rich media campaign manager id operating systems p match table operating systems campaign manager id match table operating systems campaign manager id placements p match table placements campaign manager id match table placements campaign manager id placement cost p match table placement cost campaign manager id match table placement cost campaign manager id sites p match table sites campaign manager id match table sites campaign manager id states p match table states campaign manager id match table states campaign manager id custom floodlight variables p match table custom floodlight variables campaign manager id match table custom floodlight variables campaign manager id landing page url p match table landing page url campaign manager id match table landing page url campaign manager id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Campaign Manager report transformation When your Campaign Manager (formerly known as DoubleClick Campaign Manager) data transfer files are transferred to BigQuery, the files are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for campaign manager id is your Campaign Manager Network, Advertiser, or Floodlight ID.

### Column-based time partitioning \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DAY ) . setField ( "date" ) // name of column to use for partitioning . setExpirationMs ( 7776000000L ) // 90 days . build (); StandardTableDefinition tableDefinition = StandardTableDefinition . newBuilder () . setSchema ( schema ) . setTimePartitioning ( partitioning ) . build (); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Partitioned table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Partitioned table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTablePartitioned () { // Creates a new partitioned table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; const schema = 'Name:string, Post Abbr:string, Date:date' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , timePartitioning : { type : 'DAY' , expirationMs : '7776000000' , field : ' date ' , }, }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created with partitioning: ); console . log ( table . metadata . timePartitioning ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "time" "cloud.google.com/go/bigquery" ) // createTablePartitioned demonstrates creating a table and specifying a time partitioning configuration. func createTablePartitioned ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // tableID := "mytableid" ctx := context .
- DAY , field = "date" , # name of column to use for partitioning expiration ms = 1000 60 60 24 90 , ) # 90 days table = client . create table ( table ) print ( f "Created table { table . project } . { table . dataset id } . { table . table id } , " f "partitioned on column { table . time partitioning . field } ." ) Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .

### "Display & Video 360 data transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Display & Video 360 resource BigQuery table BigQuery view Data Transfer files Impression p Impression displayvideo id Impression displayvideo id Click p Click displayvideo id Click displayvideo id Activity p Activity displayvideo id Activity displayvideo id DV360 API Resource (v3) Partner p Partner displayvideo id Partner displayvideo id Advertiser p Advertiser displayvideo id Advertiser displayvideo id LineItem p LineItem displayvideo id LineItem displayvideo id LineItemTargeting p LineItemTargeting displayvideo id LineItemTargeting displayvideo id Campaign p Campaign displayvideo id Campaign displayvideo id CampaignTargeting p CampaignTargeting displayvideo id CampaignTargeting displayvideo id InsertionOrder p InsertionOrder displayvideo id InsertionOrder displayvideo id InsertionOrderTargeting p InsertionOrderTargeting displayvideo id InsertionOrderTargeting displayvideo id AdGroup p AdGroup displayvideo id AdGroup displayvideo id AdGroupTargeting p AdGroupTargeting displayvideo id AdGroupTargeting displayvideo id AdGroupAd p AdGroupAd displayvideo id AdGroupAd displayvideo id Creative p Creative displayvideo id Creative displayvideo id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Display & Video 360 data transformation When your Display & Video 360 data are transferred to BigQuery, they are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for displayvideo id is your Display & Video 360 partner or advertiser ID.

