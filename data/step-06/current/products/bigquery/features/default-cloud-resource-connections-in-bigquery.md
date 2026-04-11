---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.451Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Default Cloud resource connections in BigQuery"
feature_slug: "default-cloud-resource-connections-in-bigquery"
latest_feature_date: "2025-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "connection fallback behavior"
  - "default Cloud resource connection"
  - "project-level default connection"
  - "default connection setting"
  - "default resource connection"
  - "Cloud resource connections"
  - "default connection"
  - "CREATE CONNECTION"
---

# Default Cloud resource connections in BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now lets projects define reusable default Cloud resource connections.

## Extended Definition

BigQuery supports managing Cloud resource connections through GoogleSQL DDL using `CREATE CONNECTION`, `ALTER CONNECTION SET OPTIONS`, and `DROP CONNECTION` statements. BigQuery release notes describe the feature as support for configuring reusable default Cloud resource connections at the project level, and the DDL reference notes a default Cloud resource connection used when creating tables and models (shown as Preview).

## Evidence Summary

The DDL reference defines Cloud resource connection creation and references a default connection field for table/model creation, while release notes explicitly announce project-level reusable default Cloud resource connection support.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Example: region-us.default query optimizer options = 'adaptive=on' default cloud resource connection id STRING The default connection to use when creating tables and models (Preview).
- Example The following example creates a Cloud resource connection named my cloud resource connection : CREATE CONNECTION IF NOT EXISTS us.my cloud resource connection OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = "My Resource Connection" , description = "Connection to access Cloud resources" ); ALTER SCHEMA SET DEFAULT COLLATE statement Sets collation specifications on a dataset.
- Syntax CREATE CONNECTION [ IF NOT EXISTS ] [[project id.]location.]connection id OPTIONS ( connection option list ); Arguments project id (Optional): The ID of the project to create the connection in.
- Sets the default connection to connection 1 in the us region. default sql dialect option STRING The default sql query dialect for executing query jobs using the bq command-line tool or BigQuery API.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- April 02, 2026 Feature You can now use the CREATE CONNECTION , ALTER CONNECTION SET OPTIONS , and DROP CONNECTION data definition language (DDL) statements to manage Cloud resource connections with GoogleSQL.
- September 09, 2025 Feature You can configure reusable, default Cloud resource connections in a project.
- March 12, 2025 Feature You can configure reusable, default Cloud resource connections in a project.
- June 02, 2025 Libraries Go 1.69.0 (2025-05-27) Features bigquery/analyticshub: Add support for Analytics Hub & Marketplace Integration ( 2aaada3 ) bigquery/analyticshub: Adding allow only metadata sharing to Listing resource ( 2aaada3 ) bigquery/analyticshub: Adding CommercialInfo message to the Listing and Subscription resources ( 2aaada3 ) bigquery/analyticshub: Adding delete commercial and revoke commercial to DeleteListingRequest and RevokeSubscriptionRequest ( 2aaada3 ) bigquery/analyticshub: Adding DestinationDataset to the Subscription resource ( 2aaada3 ) bigquery/analyticshub: Adding routine field to the SharedResource message ( 2aaada3 ) bigquery: Add support for dataset view and update modes ( #12290 ) ( 7c1f961 ) bigquery: Job creation mode GA ( #12225 ) ( 1d8990d ) Libraries Node.js 8.1.0 (2025-05-29) Features Job creation mode GA ( #1480 ) ( b51359a ) Support per-job reservation assignment ( #1477 ) ( 8151e72 ) Libraries Python 3.34.0 (2025-05-27) Features Job creation mode GA ( #2190 ) ( 64cd39f ) Bug Fixes deps: Update all dependencies ( #2184 ) ( 12490f2 ) Documentation Update query.py ( #2192 ) ( 9b5ee78 ) Use query and wait in the array parameters sample ( #2202 ) ( 28a9994 ) Feature BigQuery now supports using Spanner external datasets with authorized views , authorized routines , and Cloud resource connections .

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- CloudResourceProperties (), ) try : created connection = client . create connection ( parent = parent , connection id = connection id , connection = connection ) print ( f "Successfully created connection: { created connection . name } " ) print ( f "Friendly name: { created connection . friendly name } " ) print ( f "Service Account: { created connection . cloud resource . service account id } " ) except google . api core . exceptions .
- Note: The cloud resource nested object has only one output field - serviceAccountId. resource "google bigquery connection" "default" { connection id = "my cloud resource connection" project = data.google project.default.project id location = "US" cloud resource {} } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Go to BigQuery In the query editor, enter the following statement: CREATE CONNECTION [ IF NOT EXISTS ] CONNECTION NAME OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = " FRIENDLY NAME " , description = " DESCRIPTION " ); Replace the following: CONNECTION NAME : the name of the connection in either the PROJECT ID .
- ConnectionServiceClient () def create connection ( project id : str , location : str , connection id : str , ): """Creates a BigQuery connection to a Cloud Resource.

