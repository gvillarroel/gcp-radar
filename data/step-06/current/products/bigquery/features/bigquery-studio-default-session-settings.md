---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.389Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Studio default session settings"
feature_slug: "bigquery-studio-default-session-settings"
latest_feature_date: "2025-01-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "bigquery"
  - "studio"
  - "default"
  - "session"
  - "settings"
  - "lets"
  - "users"
  - "configure"
---

# BigQuery Studio default session settings

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Studio lets users configure default settings that apply when a session starts.

## Extended Definition

BigQuery Studio lets users configure default settings that apply when a session starts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- The table option list specifies the: Table expiration time: January 1, 2025 at 00:00:00 UTC Partition expiration time: 1 day Description: A table that expires in 2025 Label: org unit = development Creating a new table from an existing table The following example creates a table named top words in mydataset from a query: CREATE TABLE mydataset . top words OPTIONS ( description = "Top ten words per Shakespeare corpus" ) AS SELECT corpus , ARRAY AGG ( STRUCT ( word , word count ) ORDER BY word count DESC LIMIT 10 ) AS top words FROM bigquery - public - data . samples . shakespeare GROUP BY corpus ; If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default usage data is from the reservation resource and the capacity data is from the edition resource.
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default usage data is from the reservation resources.
- View and configure resource utilization charts To view and configure resource utilization charts, follow these steps: In the Google Cloud console, go to the BigQuery Monitoring page.
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default resource is the reservation resource.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- You must place it in the same local directory as that main.tf file, and you must have already applied that main.tf file to create the "default" dataset resource with a dataset id of "mydataset". data "google iam policy" "iam policy" { binding { role = "roles/bigquery.admin" members = [ "user:user@example.com" , ] } binding { role = "roles/bigquery.dataOwner" members = [ "group:data.admin@example.com" , ] } binding { role = "roles/bigquery.dataEditor" members = [ "serviceAccount:bqcx-1234567891011-12a3@gcp-sa-bigquery-condel.iam.gserviceaccount.com" , ] } } resource "google bigquery dataset iam policy" "dataset iam policy" { dataset id = google bigquery dataset.default.dataset id policy data = data.google iam policy.iam policy.policy data } Set role membership for a dataset The following example shows how to use the google bigquery dataset iam binding resource to set membership in a given role for the mydataset dataset.
- You must place it in the same local directory as that main.tf file, and you must have already applied that main.tf file to create the "default" table resource with a table id of "mytable". data "google iam policy" "iam policy" { binding { role = "roles/bigquery.dataOwner" members = [ "user:user@example.com" , ] } } resource "google bigquery table iam policy" "table iam policy" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id policy data = data.google iam policy.iam policy.policy data } Set role membership for a table The following example shows how to use the google bigquery table iam binding resource to set membership in a given role for the mytable table.
- You must place it in the same local directory as that main.tf file, and you must have already applied that main.tf file to create the "default" table resource with a table id of "mytable". resource "google bigquery table iam binding" "table iam binding" { dataset id = google bigquery table.default.dataset id table id = google bigquery table.default.table id role = "roles/bigquery.dataOwner" members = [ "group:group@example.com" , ] } Set role membership for a single principal The following example shows how to use the google bigquery table iam member resource to update the IAM policy for the mytable table to grant a role to one principal.
- You must place it in the same local directory as that main.tf file, and you must have already applied that main.tf file to create the "default" dataset resource with a dataset id of "mydataset". resource "google bigquery dataset iam binding" "dataset iam binding" { dataset id = google bigquery dataset.default.dataset id role = "roles/bigquery.jobUser" members = [ "user:user@example.com" , "group:group@example.com" ] } Set role membership for a single principal The following example shows how to use the google bigquery dataset iam member resource to update the IAM policy for the mydataset dataset to grant a role to one principal.

