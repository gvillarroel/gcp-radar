---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.865Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Exclude removed or deleted items in Google Ads transfers"
feature_slug: "exclude-removed-or-deleted-items-in-google-ads-transfers"
latest_feature_date: "2017-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "exclude"
  - "removed"
  - "deleted"
  - "items"
  - "ads"
  - "transfers"
  - "bigquery"
  - "transfer"
---

# Exclude removed or deleted items in Google Ads transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service for Google Ads can exclude removed or deleted items during transfer setup.

## Extended Definition

BigQuery Data Transfer Service for Google Ads can exclude removed or deleted items during transfer setup.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- The data transfer is created in the default project: bq mk \ --transfer config \ --target dataset=mydataset \ --display name='My Transfer' \ --params='{"customer id":"123-123-1234","exclude removed items":"true"}' \ --data source=google ads The first time you run the command, you receive a message like the following: [URL omitted] Please copy and paste the above URL into your web browser and follow the instructions to retrieve an authentication code.
- Optional: set the exclude removed items parameter to true to prevent removed or disabled entities and metrics from being transferred.
- The following tables exclude ad group related columns when the Include PMax Campaign Tables checkbox is selected: GeoStats GeoConversionStats ShoppingProductConversionStats ShoppingProductStats LocationsUserLocationsStats The following tables are added when the Include PMax Campaign Tables checkbox is selected: Asset AssetGroup AssetGroupAsset AssetGroupListingGroupFilter AssetGroupSignal Audience AssetGroupProductGroupStats CampaignAssetStats Support for Google Ads manager accounts Existing customers who have multiple Customer ID-specific Google Ads Transfers are encouraged to set up a single Google Ads Transfer at the Manager Account (MCC) level, schedule a backfill, and disable individual Customer ID-specific Google Ads Transfers.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- FinGraph MATCH p = ( src : Account ) -[ t1 : Transfers ]- > ( dst : Account ) RETURN TO JSON ( p ) AS json array / --------------------------------------------------------------------+ json array +--------------------------------------------------------------------+ [{ "identifier":"mUZpbkdyYXBoLkFjY291bnQAeJEg", "kind":"node", "labels":["Account"], "properties":{ "create time":"2020-01-28T01:55:09.206Z", "id":16, "is blocked":true, "nick name":"Vacation Fund" } }, { "destination node identifier":"mUZpbkdyYXBoLkFjY291bnQAeJEo", "identifier":"mUZpbkdyYXBoLkFjY291...", "kind":"edge", "labels":["Transfers"], "properties":{ "amount":300.0, "create time":"2020-09-25T09:36:14.926Z", "id":16, "order number":"103650009791820", "to id":20 }, "source node identifier":"mUZpbkdyYXBoLkFjY291bnQAeJEg" }, { "identifier":"mUZpbkdyYXBoLkFjY291bnQAeJEo", "kind":"node", "labels":["Account"], "properties":{ "create time":"2020-02-18T13:44:20.655Z", "id":20, "is blocked":false, "nick name":"Vacation Fund" } } ... ] +--------------------------------------------------------------------/ In the following example, each graph node called src is converted into a JSON object: GRAPH graph db .
- FinGraph MATCH ( src : Account { id : 7 } ) -[ t1 : Transfers ]- > ( dst : Account ) RETURN TO JSON ( src ) AS json array / --------------------------------------------------------------------+ json array +--------------------------------------------------------------------+ { "identifier":"rhYAAAANAAAApgAAAAAAAAAApgcAAAAAAAAA", "kind":"node", "labels":["Account"], "properties":{ "create time":"2020-01-10T06:22:20.222Z", "id":7, "is blocked":false, "nick name":"Vacation Fund" } } { "identifier":"rhYAAAANAAAApgAAAAAAAAAApgcAAAAAAAAA", "kind":"node", "labels":["Account"], "properties":{ "create time":"2020-01-10T06:22:20.222Z", "id":7, "is blocked":false, "nick name":"Vacation Fund" } } +-------------------------------------------------------------------- / TO JSON STRING TO JSON STRING ( value [ , pretty print ] ) Description Converts a SQL value to a JSON-formatted STRING value.
- Return type json string expr : ARRAY<JSON-formatted STRING> json expr : ARRAY<JSON> Examples This extracts items in JSON to an array of JSON values: SELECT JSON EXTRACT ARRAY ( JSON '{"fruits":["apples","oranges","grapes"]}' , '$.fruits' ) AS json array ; / ---------------------------------+ json array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / This extracts the items in a JSON-formatted string to a string array: SELECT JSON EXTRACT ARRAY ( '[1,2,3]' ) AS string array ; / --------------+ string array +--------------+ [1, 2, 3] +-------------- / This extracts a string array and converts it to an integer array: SELECT ARRAY ( SELECT CAST ( integer element AS INT64 ) FROM UNNEST ( JSON EXTRACT ARRAY ( '[1,2,3]' , '$' ) ) AS integer element ) AS integer array ; / ---------------+ integer array +---------------+ [1, 2, 3] +--------------- / This extracts string values in a JSON-formatted string to an array: -- Doesn't strip the double quotes SELECT JSON EXTRACT ARRAY ( '["apples", "oranges", "grapes"]' , '$' ) AS string array ; / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / -- Strips the double quotes SELECT ARRAY ( SELECT JSON EXTRACT SCALAR ( string element , '$' ) FROM UNNEST ( JSON EXTRACT ARRAY ( '["apples","oranges","grapes"]' , '$' )) AS string element ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / This extracts only the items in the fruit property to an array: SELECT JSON EXTRACT ARRAY ( '{"fruit": [{"apples": 5, "oranges": 10}, {"apples": 2, "oranges": 4}], "vegetables": [{"lettuce": 7, "kale": 8}]}' , '$.fruit' ) AS string array ; / -------------------------------------------------------+ string array +-------------------------------------------------------+ [{"apples":5,"oranges":10}, {"apples":2,"oranges":4}] +------------------------------------------------------- / These are equivalent: SELECT JSON EXTRACT ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$[fruits]' ) AS string array ; SELECT JSON EXTRACT ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; -- The queries above produce the following result: / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / In cases where a JSON key uses invalid JSONPath characters, you can escape those characters using single quotes and brackets, [' '] .
- Return type json string expr : ARRAY<JSON-formatted STRING> json expr : ARRAY<JSON> Examples This extracts items in JSON to an array of JSON values: SELECT JSON QUERY ARRAY ( JSON '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS json array ; / ---------------------------------+ json array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / This extracts the items in a JSON-formatted string to a string array: SELECT JSON QUERY ARRAY ( '[1, 2, 3]' ) AS string array ; / --------------+ string array +--------------+ [1, 2, 3] +-------------- / This extracts a string array and converts it to an integer array: SELECT ARRAY ( SELECT CAST ( integer element AS INT64 ) FROM UNNEST ( JSON QUERY ARRAY ( '[1, 2, 3]' , '$' ) ) AS integer element ) AS integer array ; / ---------------+ integer array +---------------+ [1, 2, 3] +--------------- / This extracts string values in a JSON-formatted string to an array: -- Doesn't strip the double quotes SELECT JSON QUERY ARRAY ( '["apples", "oranges", "grapes"]' , '$' ) AS string array ; / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / -- Strips the double quotes SELECT ARRAY ( SELECT JSON VALUE ( string element , '$' ) FROM UNNEST ( JSON QUERY ARRAY ( '["apples", "oranges", "grapes"]' , '$' )) AS string element ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / This extracts only the items in the fruit property to an array: SELECT JSON QUERY ARRAY ( '{"fruit": [{"apples": 5, "oranges": 10}, {"apples": 2, "oranges": 4}], "vegetables": [{"lettuce": 7, "kale": 8}]}' , '$.fruit' ) AS string array ; / -------------------------------------------------------+ string array +-------------------------------------------------------+ [{"apples":5,"oranges":10}, {"apples":2,"oranges":4}] +------------------------------------------------------- / These are equivalent: SELECT JSON QUERY ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; SELECT JSON QUERY ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$."fruits"' ) AS string array ; -- The queries above produce the following result: / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / In cases where a JSON key uses invalid JSONPath characters, you can escape those characters using double quotes: " " .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- For more information about using the bq show command, see the following: Getting information about datasets Creating and using tables Getting information about views Working with transfers Managing jobs Getting information about a table snapshot bq update Use the bq update command to change a resource.
- For more information about using the bq update command, see the following: Updating dataset properties Managing tables Updating views Updating labels Working with transfers Updating table snapshot metadata bq version Use the bq version command to display the version number of your bq command-line tool.

