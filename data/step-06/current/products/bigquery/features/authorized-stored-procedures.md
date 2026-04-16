---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.554Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Authorized stored procedures"
feature_slug: "authorized-stored-procedures"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/authorized-routines"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
keywords:
  - "authorized"
  - "stored"
  - "procedures"
  - "let"
  - "you"
  - "share"
  - "without"
  - "granting"
---

# Authorized stored procedures

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Authorized stored procedures let you share procedures without granting direct access to the underlying tables; Authorized stored procedures let users share stored procedures without granting direct access to the underlying tables.

## Extended Definition

Authorized stored procedures let you share procedures without granting direct access to the underlying tables; Authorized stored procedures let users share stored procedures without granting direct access to the underlying tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)

## Supporting Pages

### Authorized routines \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- Source ID: `site-docs-reference-5`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following types of routines can be authorized: Table functions User-defined functions (UDFs) Stored procedures Caution: Stored procedures authorized as routines have DDL and DML access.
- Authorized routines Authorized routines let you share query results with specific users or groups without giving them access to the underlying tables that generated the results.
- Principals with access to authorized stored procedures can bypass Identity and Access Management (IAM) permissions and perform actions that are normally denied to them.
- You can attach the following roles to a stored procedure: BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer ) BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer ) BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor ) BigQuery Routine Admin ( roles/bigquery.routineAdmin ) Note: You can attach these roles only to stored procedures.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Special cases Consider the following scenarios when you create IAM deny policies on a few BigQuery permissions: Access to authorized resources ( views , routines , datasets , or stored procedures ) lets you create , drop , or manipulate a table, along with reading and modifying table data, even if you don't have direct permission to perform those operations.
- It can also get model data or metadata and invoke other stored procedures on the underlying table.
- Modify the policy to remove the desired role or principal, and then apply the updated policy using the Table#setIamPolicy() method. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const tableId = "YOUR TABLE ID" // const roleToRemove = "YOUR ROLE" // const principalToRemove = "YOUR PRINCIPAL ID" const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function revokeAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To revoke access to a table or view, // remove bindings from the Table or View policy. // // Find more details about Policy objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy if ( principalToRemove ) { // Create a copy of bindings for modifications. const bindings = [... policy . bindings ]; // Filter out the principal from each binding. for ( const binding of bindings ) { if ( binding . members ) { binding . members = binding . members . filter ( m = > m !== principalToRemove ); } } // Filter out bindings with empty members. policy . bindings = bindings . filter ( binding = > binding . members && binding . members . length > 0 ); } if ( roleToRemove ) { // Filter out all bindings with the roleToRemove // and assign a new list back to the policy bindings. policy . bindings = policy . bindings . filter ( b = > b . role !== roleToRemove ); } // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Both role and principal are removed if ( roleToRemove !== null && principalToRemove !== null ) { console . log ( Role ' ${ roleToRemove } ' revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // Only role is removed if ( roleToRemove !== null && principalToRemove === null ) { console . log ( Role ' ${ roleToRemove } ' revoked for all principals on resource ' ${ datasetId } . ${ tableId } '. ); } // Only principal is removed if ( roleToRemove === null && principalToRemove !== null ) { console . log ( Access revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // No changes were made if ( roleToRemove === null && principalToRemove === null ) { console . log ( No changes made to access policy for ' ${ datasetId } . ${ tableId } '. ); } } Work with access controls for routines Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- As a publisher, you create or use an existing BigQuery dataset in your project with the following supported objects that you want to deliver to your subscribers: Authorized views Authorized datasets BigQuery ML models External tables Materialized views Routines User-defined functions (UDFs) Table functions SQL stored procedures Tables Table snapshots Views Shared datasets support column-level security and row-level security .
- Linked datasets support the following objects: Authorized views Authorized datasets Authorized routines Linked Pub/Sub subscriptions Subscribing to a listing with a shared topic creates a linked Pub/Sub subscription in the subscriber project.
- The separation of compute and storage in the BigQuery architecture lets data publishers share datasets with as many subscribers as they want, without having to make multiple copies of the data.
- Listings let you share data without replicating the shared data, and they can be monetized on the Google Cloud Marketplace or through your own channels.

