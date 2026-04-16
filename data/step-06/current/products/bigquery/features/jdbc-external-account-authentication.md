---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.658Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JDBC external account authentication"
feature_slug: "jdbc-external-account-authentication"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/authentication"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "jdbc"
  - "external"
  - "account"
  - "authentication"
  - "bigquery"
  - "driver"
  - "supports"
  - "accounts"
---

# JDBC external account authentication

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery JDBC driver supports authentication with external accounts through workforce or workload identity federation.

## Extended Definition

The BigQuery JDBC driver supports authentication with external accounts through workforce or workload identity federation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/authentication](https://docs.cloud.google.com/bigquery/docs/authentication)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.

### Authenticate to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authentication](https://docs.cloud.google.com/bigquery/docs/authentication)
- Source ID: `site-docs-reference-required-15`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up authentication: Ensure that you have the Create Service Accounts IAM role ( roles/iam.serviceAccountCreator ) and the Project IAM Admin role ( roles/resourcemanager.projectIamAdmin ).
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.
- Set the --service-account flag to the email address for the service account that you created. gcloud compute instances create INSTANCE NAME --zone = ZONE --service-account = SERVICE ACCOUNT EMAIL For more information about authenticating to Google APIs, see Authentication methods .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Magnitude Simba Google BigQuery JDBC Data Connector: Installation and Configuration Guide Drivers for Google BigQuery Partner Advantage page Direct link Simba ODBC Driver Solution Simba ODBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- Partner references Google BigQuery Data Integration Google BigQuery Connection Manager Google BigQuery Destination Component Magnitude Simba JDBC Driver Solution Simba JDBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- BigQuery can be accessed using both ODBC and JDBC drivers.
- Partner references Zing Data + BigQuery Configure Google BigQuery with Zing Data Partner Advantage page Direct link Connectors & Developer Tools CData Solution Google BigQuery ODBC Driver Category Connectors & Developer Tools Description The Google BigQuery ODBC Driver is a powerful tool that lets you connect with live BigQuery data directly from any applications that support ODBC connectivity.

