---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.207Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Chat with BigQuery results"
feature_slug: "chat-with-bigquery-results"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "chat"
  - "bigquery"
  - "results"
  - "studio"
  - "lets"
  - "users"
  - "start"
  - "conversations"
---

# Chat with BigQuery results

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Studio lets users start conversations and chat directly with query results.

## Extended Definition

BigQuery Studio lets users start conversations and chat directly with query results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.
- Partner references Get Started with Dataddo and BigQuery Connect to Google BigQuery Partner Advantage page Direct link dbt Labs Solution DBT Category ETL & Data Integration Description DBT (data build tool) lets data analysts, data scientists, and data engineers easily transform data in their warehouses while using the same practices that software engineers use to build applications.
- Partner references How to read from and write to BigQuery tables in Databricks Databricks on Google Cloud Partner Advantage page Direct link DataChat Solution DataChat Category BI, ML, & Advanced Analytics Description DataChat is a no-code, generative AI analytics platform that enables business users and domain experts to unlock the power of data without any technical expertise.
- Partner references Numbers station BigQuery Quickstart BigQuery integration OWOX Solution Owox BI Category BI, ML, & Advanced Analytics Description OWOX BI is a leading data democratization platform, designed for collaboration between data teams and business users, giving the right tools to empower everyone to explore and act upon business data.

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Agents ( Preview ): lets you create and chat with data agents that are designed to answer questions about BigQuery resources.
- The BigQuery Studio page The BigQuery Studio page displays your BigQuery resources and lets you perform common tasks.
- Users can have conversations with data agents to ask questions about BigQuery data using natural language.
- Studio : lets you display your BigQuery resources and perform common tasks.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Modify the access property to exclude the desired entity, and then call the Dataset#setMetadata() function to apply the updated access list. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset" // ID of the user or group from whom you are revoking access. // const entityId = "user-or-group-to-remove@example.com" const { BigQuery } = require ( '@google-cloud/bigquery' ); // Instantiate a client. const bigquery = new BigQuery (); async function revokeDatasetAccess () { const [ dataset ] = await bigquery . dataset ( datasetId ). get (); // To revoke access to a dataset, remove elements from the access list. // // See the BigQuery client library documentation for more details on access entries: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Filter access entries to exclude entries matching the specified entity id // and assign a new list back to the access list. dataset . metadata . access = dataset . metadata . access . filter ( entry = > { return ! ( entry . entity id === entityId entry . userByEmail === entityId entry . groupByEmail === entityId ); }); // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/bigquery/docs/updating-datasets // Update just the 'access entries' property of the dataset. await dataset . setMetadata ( dataset . metadata ); console . log ( Revoked access to ' ${ entityId } ' from ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The access policy is available in the access property of the resulting metadata object. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const bigquery = new BigQuery (); async function viewDatasetAccessPolicy () { const dataset = bigquery . dataset ( datasetId ); const [ metadata ] = await dataset . getMetadata (); const accessEntries = metadata . access []; // Show the list of AccessEntry objects. // More details about the AccessEntry object in the BigQuery documentation: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest console . log ( ${ accessEntries . length } Access entries in dataset ' ${ datasetId } ': ); for ( const accessEntry of accessEntries ) { console . log ( Role: ${ accessEntry . role 'null' } ); console . log ( Special group: ${ accessEntry . specialGroup 'null' } ); console . log ( User by Email: ${ accessEntry . userByEmail 'null' } ); } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Create a copy for modifications. const entries = [... dataset . metadata . access ]; // Append an AccessEntry to grant the role to a dataset. // Find more details about the AccessEntry object in the BigQuery documentation: // https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.dataset.AccessEntry entries . push ({ role , [ entityType ] : entityId , }); // Assign the array of AccessEntries back to the dataset. const metadata = { access : entries , }; // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Update just the 'access entries' property of the dataset. await client . dataset ( datasetId ). setMetadata ( metadata ); console . log ( Role ' ${ role } ' granted for entity ' ${ entityId } ' in ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

