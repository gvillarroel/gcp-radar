---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.415Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud KMS Autokey for CMEKs"
feature_slug: "cloud-kms-autokey-for-cmeks"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek"
  - "https://docs.cloud.google.com/mcp/control-mcp-use-organization"
keywords:
  - "kms"
  - "autokey"
  - "cmeks"
  - "bigquery"
  - "supports"
  - "automate"
  - "creation"
  - "use"
---

# Cloud KMS Autokey for CMEKs

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports Cloud KMS Autokey to automate creation and use of customer-managed encryption keys, including with Cloud HSM.

## Extended Definition

BigQuery supports Cloud KMS Autokey to automate creation and use of customer-managed encryption keys, including with Cloud HSM.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)

## Supporting Pages

### "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId sourceTable = TableId . of ( sourceDatasetName , sourceTableId ); TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId ); // For more information on CopyJobConfiguration see: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html CopyJobConfiguration configuration = CopyJobConfiguration . newBuilder ( destinationTable , sourceTable ) . setDestinationEncryptionConfiguration ( encryption ) . build (); // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html Job job = bigquery . create ( JobInfo . of ( configuration )); // Blocks until this job completes its execution, either failing or succeeding.
- Job completedJob = job . waitFor (); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to copy table due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table cmek copied successfully." ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table cmek copying job was interrupted. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is // protected with a customer managed encryption key. func copyTableWithCMEK ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Explore further For detailed documentation that includes this code sample, see the following: Customer-managed Cloud KMS keys Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### "Create a dataset with a customer-managed encryption key \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days default encryption configuration { kms key name = google kms crypto key.crypto key.id } labels = { billing group = "accounting" , pii = "sensitive" } depends on = [ google project iam member.service account access ] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a dataset with a customer-managed encryption key Stay organized with collections Save and categorize content based on your preferences.

### "Control MCP use with Identity and Access Management \_|\_ Google Cloud MCP\

- URL: [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
- Source ID: `site-docs-reference-required-13`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deny MCP use by service The following IAM deny policy prevents use of MCP tools from a specific service for all users. { "rules" : [ { "denyRule" : { "deniedPrincipals" : [ "principalSet://goog/public:all" ], "deniedPermissions" : [ "mcp.googleapis.com/tools.call" ], "denialCondition" : { "title" : "Deny all MCP tool use from this service" , "expression" : "resource.service == ' SERVICE NAME '" } } } ] } Replace SERVICE NAME with the service name—for example, bigquery.googleapis.com .
- Deny policy attributes The following attributes can be used in your Identity and Access Management deny policies: tool.isReadOnly : a resource attribute that indicates whether the invoked tool only reads data. request.auth.oauth.client id : the OAuth client ID. resource.service : the name of service—for example, bigquery.googleapis.com .

