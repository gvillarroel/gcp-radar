---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.192Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Connection and project access control in GoogleSQL"
feature_slug: "connection-and-project-access-control-in-googlesql"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/access-control-intro"
keywords:
  - "connection"
  - "project"
  - "access"
  - "control"
  - "googlesql"
  - "supports"
  - "user"
  - "resource"
---

# Connection and project access control in GoogleSQL

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

GoogleSQL supports connection user and PROJECT resource types in GRANT and REVOKE statements for managing connection and project access.

## Extended Definition

GoogleSQL supports connection user and PROJECT resource types in GRANT and REVOKE statements for managing connection and project access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Syntax To create a GoogleSQL stored procedure , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ OPTIONS ( procedure option list ) ] BEGIN multi statement query END ; procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT To create a stored procedure for Apache Spark , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ EXTERNAL SECURITY external security ] WITH CONNECTION connection project id . connection region . connection id [ OPTIONS ( procedure option list ) ] LANGUAGE language [ AS pyspark code ] procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT external security : INVOKER Arguments OR REPLACE : Replaces any procedure with the same name if it exists.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then call the Dataset#setMetadata() function to update the property. / TODO(developer): Update and un-comment below lines. / // const datasetId = "my project id.my dataset name"; // ID of the user or group from whom you are adding access. // const entityId = "user-or-group-to-add@example.com"; // One of the "Basic roles for datasets" described here: // https://cloud.google.com/bigquery/docs/access-control-basic-roles#dataset-basic-roles // const role = "READER"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); // Type of entity you are granting access to. // Find allowed allowed entity type names here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource:-dataset const entityType = 'groupByEmail' ; async function grantAccessToDataset () { const [ dataset ] = await client . dataset ( datasetId ). get (); // The 'access entries' array is immutable.
- See the BigQuery client library documentation for more details on update dataset: https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client#google cloud bigquery client Client update dataset try : Update just the access entries property of the dataset. dataset = client . update dataset ( dataset , [ "access entries" ], ) Notify user that the API call was successful. full dataset id = f " { dataset . project } . { dataset . dataset id } " print ( f "Revoked dataset access for ' { entity id } ' to ' dataset ' { full dataset id } .'" ) except PreconditionFailed : # A read-modify-write error. print ( f "Dataset ' { dataset . dataset id } ' was modified remotely before this update. " "Fetch the latest version and retry." ) Work with table and view access controls Views are treated as table resources in BigQuery.
- OBJECT PRIVILEGES WHERE object name = "mydataset" ; The output should look like the following: +------------------+-----------------------------+-------------------------+ object name privilege type grantee +------------------+-----------------------------+-------------------------+ mydataset roles/bigquery.dataOwner projectOwner:myproject mydataset roles/bigquery.dataViwer user:user@example.com +------------------+-----------------------------+-------------------------+ API To view the access controls for a dataset, call the datasets.get method with a defined dataset resource .
- To create a IAM deny policy for viewing dataset access controls, deny the following permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy To create a IAM deny policy for updating dataset access controls, deny the following permissions: bigquery.datasets.update bigquery.datasets.setIamPolicy What's next Learn how to use the projects.testIamPermissions method to test user access to a resource.

### "Introduction to security and access controls in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- Source ID: `site-docs-reference-2`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can grant access to the following BigQuery resources: Datasets and these resources within datasets: Tables and views Routines Connections Saved queries Data canvases Data preparations Pipelines Repositories Grant access to Resource Manager resources You can configure access to BigQuery resources through Resource Manager by granting a BigQuery role to a principal and then by granting that role on an organization, a folder, or a project.
- You can use the following types of roles in IAM to grant access to BigQuery resources: Predefined roles are managed by Google Cloud and support common use cases and access control patterns.
- Grant access to datasets You can assign roles at the dataset level to provide access to a specific dataset, without providing complete access to the project's other resources.
- For additional information on using IAM to manage access to Resource Manager resources, see Manage access to projects, folders, and organizations in the IAM documentation.

