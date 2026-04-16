---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.213Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataset undeletion within time travel window"
feature_slug: "dataset-undeletion-within-time-travel-window"
latest_feature_date: "2026-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-historical-data"
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "dataset"
  - "undeletion"
  - "within"
  - "time"
  - "travel"
  - "window"
  - "bigquery"
  - "can"
---

# Dataset undeletion within time travel window

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can restore a deleted dataset to its previous state if it is still within the time travel window.

## Extended Definition

BigQuery can restore a deleted dataset to its previous state if it is still within the time travel window.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Access historical data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-historical-data](https://docs.cloud.google.com/bigquery/docs/access-historical-data)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access historical data BigQuery lets you query and restore data stored in BigQuery that has been changed or deleted within your time travel window.
- The following example copies the version of a table from one hour ago: bq cp mydataset.mytable@-3600000 mydataset.newtable Note: If you attempt to recover data prior to the time travel window or from a time before the table was created, you'll receive an Invalid time travel timestamp error.
- If the timestamp specifies a time from prior to the time travel window or from before the table was created, then the query fails and returns an error like the following: Invalid snapshot time 1601168925462 for table myproject:mydataset.table1@1601168925462.
- Query data at a point in time You can query a table's historical data from any point in time within the time travel window by using a FOR SYSTEM TIME AS OF clause.

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. require "google/cloud/bigquery" def delete dataset and contents dataset id = "my dataset with tables" bigquery = Google :: Cloud :: Bigquery . new Use the force parameter to delete a dataset and its contents dataset = bigquery . dataset dataset id dataset . delete force : true puts "Dataset #{ dataset id } and contents deleted." end Restore tables from deleted datasets You can restore tables from a deleted dataset that are within the dataset's time travel window .
- Copy the originaldataset.table1 table at the time 1418864998000 into the new dataset: bq cp originaldataset.table1@1418864998000 mydataset.mytable To find the names of the nonempty tables that were in the deleted dataset, query the dataset's INFORMATION SCHEMA.TABLE STORAGE view within the time travel window.
- The following examples show the formatting of the parameters, based on your system's environment: Linux: use single quotes to enclose the JSON string–for example: '{"source dataset id":"mydataset","source project id":"mysourceproject","overwrite destination table":"true"}' Windows command line: use double quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: "{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}" PowerShell: use single quotes to enclose the JSON string, and escape double quotes in the string with a backslash–for example: '{\"source dataset id\":\"mydataset\",\"source project id\":\"mysourceproject\",\"overwrite destination table\":\"true\"}' For example, the following command creates a dataset copy configuration that's named My Transfer with a target dataset that's named mydataset and a project with the ID of myproject . bq mk \ --transfer config \ --project id = myproject \ --data source = cross region copy \ --target dataset = mydataset \ --display name = 'My Transfer' \ --params = '{ "source dataset id":"123 demo eu", "source project id":"mysourceproject", "overwrite destination table":"true" }' API Enable the BigQuery Data Transfer Service for your destination dataset.
- You can copy a dataset, including partitioned data within a region or across regions, without extracting, moving, or reloading data into BigQuery.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Undeletes a dataset within your time travel window.
- Tables: mytable and MyTable can coexist in the same dataset if case-sensitivity for the dataset is turned on. is primary BOOLEAN Declares if the dataset is the primary replica. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the dataset, expressed as key-value pairs. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- If you specify this option and also explicitly set the location for the query job, the two values must match; otherwise the query fails. max time travel hours SMALLINT Specifies the duration in hours of the time travel window for the dataset.
- If the dataset already exists or has passed the time travel window, then the statement returns an error.

