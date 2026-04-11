---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:06.155Z"
product_name: "Data Catalog"
product_slug: "data-catalog"
feature_name: "Data stewards"
feature_slug: "data-stewards"
latest_feature_date: "2022-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries"
  - "https://docs.cloud.google.com/data-catalog/docs/how-to/filesets"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.ListEntriesAsyncPager"
keywords:
  - "stewards"
  - "catalog"
  - "supports"
  - "assigning"
  - "to"
  - "entries"
---

# Data stewards

Product: Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Data Catalog supports assigning data stewards to data entries.

## Extended Definition

Data Catalog supports assigning data stewards to data entries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries](https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries)
- [https://docs.cloud.google.com/data-catalog/docs/how-to/filesets](https://docs.cloud.google.com/data-catalog/docs/how-to/filesets)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.ListEntriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.ListEntriesAsyncPager)

## Supporting Pages

### "Create custom Data Catalog entries for your data sources \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries](https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project id " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://datacatalog.googleapis.com/v1/projects/ project id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/my project id/locations/us-central1/entryGroups/my entryGroup id/entries/my entry id", "userSpecifiedType": "my-type", "userSpecifiedSystem": "my system", "displayName": "On-prem entry", "description": "My entry description.", "schema": { "columns": [ { "type": "STRING", "description": "First name", "mode": "REQUIRED", "column": "first name" }, { "type": "STRING", "description": "Last name", "mode": "REQUIRED", "column": "last name" }, { "type": "RECORD", "description": "Address", "mode": "REPEATED", "column": "address", "subcolumns": [ { "type": "STRING", "description": "City", "mode": "NULLABLE", "column": "city" }, { "type": "STRING", "description": "State", "mode": "NULLABLE", "column": "state" } ] } ] }, "sourceSystemTimestamps": { "createTime": "2019-10-23T23:11:26.326Z", "updateTime": "2019-10-23T23:11:26.326Z" }, "linkedResource": "example.com/def" } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example JSON schema: { ... "schema": { "columns": [ { "column": "first name", "description": "First name", "mode": "REQUIRED", "type": "STRING" }, { "column": "last name", "description": "Last name", "mode": "REQUIRED", "type": "STRING" }, { "column": "address", "description": "Address", "mode": "REPEATED", "subcolumns": [ { "column": "city", "description": "City", "mode": "NULLABLE", "type": "STRING" }, { "column": "state", "description": "State", "mode": "NULLABLE", "type": "STRING" } ], "type": "RECORD" } ] } ... } HTTP method and URL: POST https://datacatalog.googleapis.com/v1/projects/ project id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId Request JSON body: { "description": " Description ", "displayName": " Display name ", "userSpecifiedType": " my type ", "userSpecifiedSystem": " my system ", "linkedResource": " example.com/def ", "schema": { schema } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: project id " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://datacatalog.googleapis.com/v1/projects/ project id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- ColumnSchema ( column = "second column" , type = "DOUBLE" , description = "This columns consists of ...." , mode = None , ) ) entry = datacatalog . create entry ( parent = entry group name , entry id = entry id , entry = entry ) print ( "Created entry: {} " . format ( entry . name )) REST & CMD LINE REST See the following examples and refer to the Data Catalog REST API entryGroups.create and entryGroups.entries.create documentation.

### "Surface files from Cloud Storage with fileset entries \_|\_ Data Catalog\

- URL: [https://docs.cloud.google.com/data-catalog/docs/how-to/filesets](https://docs.cloud.google.com/data-catalog/docs/how-to/filesets)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project id " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://datacatalog.googleapis.com/v1/projects/ project id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/my project id/locations/us-central1/entryGroups/my entryGroup id/entries/my entry id", "type": "FILESET", "displayName": "My Fileset", "description": "My Fileset description.", "schema": { "columns": [ { "type": "STRING", "description": "First name", "mode": "REQUIRED", "column": "first name" }, { "type": "STRING", "description": "Last name", "mode": "REQUIRED", "column": "last name" }, { "type": "RECORD", "description": "Address", "mode": "REPEATED", "column": "address", "subcolumns": [ { "type": "STRING", "description": "City", "mode": "NULLABLE", "column": "city" }, { "type": "STRING", "description": "State", "mode": "NULLABLE", "column": "state" } ] } ] }, "gcsFilesetSpec": { "filePatterns": [ "gs://my bucket name/chicago taxi trips/csv/shard- .csv" ] }, "sourceSystemTimestamps": { "createTime": "2019-10-23T23:11:26.326Z", "updateTime": "2019-10-23T23:11:26.326Z" }, "linkedResource": "//datacatalog.googleapis.com/projects/my project id/locations/us-central1/entryGroups/my entryGroup id/entries/my entry id " } IAM roles, permissions, and policies Data Catalog defines entry and entry group roles to facilitate permission management of filesets and other Data Catalog resources.
- Example JSON schema: { ... "schema": { "columns": [ { "column": "first name", "description": "First name", "mode": "REQUIRED", "type": "STRING" }, { "column": "last name", "description": "Last name", "mode": "REQUIRED", "type": "STRING" }, { "column": "address", "description": "Address", "mode": "REPEATED", "subcolumns": [ { "column": "city", "description": "City", "mode": "NULLABLE", "type": "STRING" }, { "column": "state", "description": "State", "mode": "NULLABLE", "type": "STRING" } ], "type": "RECORD" } ] } ... } HTTP method and URL: POST https://datacatalog.googleapis.com/v1/projects/ project id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId Request JSON body: { "description": " Fileset description. ", "displayName": " Display name ", "gcsFilesetSpec": { "filePatterns": [ "gs:// bucket name/file pattern " ] }, "type": "FILESET", "schema": { schema } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- This Google Cloud CLI command example, below, creates a fileset entry that includes schema of fileset data. gcloud data-catalog entries create my fileset entry \ --location=us-central1 \ --entry-group= my entrygroup \ --type=FILESET \ --gcs-file-patterns=gs:// my-bucket / .csv \ --schema-from-file= path to schema file \ --description="Fileset description ..." Flag notes: --gcs-file-patterns : See File pattern requirements . --schema-from-file : The following sample shows the JSON format of the schema text file accepted by the --schema-from-file flag. [ { "column": "first name", "description": "First name", "mode": "REQUIRED", "type": "STRING" }, { "column": "last name", "description": "Last name", "mode": "REQUIRED", "type": "STRING" }, { "column": "address", "description": "Address", "mode": "REPEATED", "type": "STRING" } ] Java Before trying this sample, follow the Java setup instructions in the Data Catalog quickstart using client libraries .
- ColumnSchema ( column = "state" , description = "State" , mode = "NULLABLE" , type = "STRING" ) ) entry . schema . columns . append ( addresses column ) entry = datacatalog . create entry ( parent = entry group . name , entry id = fileset entry id , entry = entry ) print ( f "Created fileset entry: { entry . name } " ) REST and Command line REST If you don't have access to Cloud Client libraries for your language or want to test the API using REST requests, see the following examples and refer to the Data Catalog REST API entryGroups.create and entryGroups.entries.create documentation.

### "Class ListEntriesAsyncPager (3.29.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.ListEntriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.pagers.ListEntriesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.datacatalog v1.types.ListEntriesRequest The initial request object. response google.cloud.datacatalog v1.types.ListEntriesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListEntriesAsyncPager (3.29.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListEntries requests and continue to iterate through the entries field on the corresponding responses.
- This class thinly wraps an initial ListEntriesResponse object, and provides an aiter method to iterate through its entries field.

