---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.682Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data Studio exploration from query results"
feature_slug: "data-studio-exploration-from-query-results"
latest_feature_date: "2022-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "studio"
  - "exploration"
  - "query"
  - "results"
  - "bigquery"
  - "console"
  - "can"
  - "link"
---

# Data Studio exploration from query results

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery query results in the Cloud console can link directly to Data Studio for exploration.

## Extended Definition

BigQuery query results in the Cloud console can link directly to Data Studio for exploration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: To see how to use keyboard shortcuts in Studio, click keyboard BigQuery Studio shortcuts in the BigQuery Studio toolbar: To explore the Studio page, follow these steps: In the Google Cloud console, go to the BigQuery Studio page.
- Go to Studio Alternatively, enter the following URL in your browser: https://console.cloud.google.com/bigquery The Studio page opens in your most recently accessed project.
- Go to Overview You can also open the BigQuery Overview page by entering the following URL in your browser: https://console.cloud.google.com/bigquery/overview Review the following sections of the Overview page: The Introduction section: gives you a quick video overview of BigQuery's capabilities.
- Explore the Studio page The Studio page BigQuery is the central point for viewing your BigQuery resources and for performing common tasks such as creating datasets and creating and running notebooks.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery agent BigQuery Agent Example Partner Advantage page Direct link Vanna.ai Solution Vanna.ai Category BI, ML, & Advanced Analytics Description Vanni.ai is the Leading open source Python package to query large SQL databases in natural language at production scale with access control that's auditable, accurate, fast, and locally deployable so that code is transparent, results are useful and immediate, and data never leaves your premise.
- Partner references BigQuery Integration Query Results Save Detection Google Cloud Monitoring Partner Advantage page Direct link Datafold Solution Datafold Category Data Quality, Observability, & FinOps Description Datafold is the unified platform for proactive data quality that combines automated data testing, data reconciliation, and observability to help data teams prevent data quality issues and accelerate their development velocity.
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.
- Partner references Configure BigQuery as a Destination How Lytics is built on BigQuery Partner Advantage page Direct link Lyzr.ai Solution Lyzr Agent Studio Category BI, ML, & Advanced Analytics Description Lyzr is a full-stack framework for building autonomous AI agents.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The console also requires the bigquery.datasets.update permission to update the dataset. bigquery.datasets.delete Dataset Delete a dataset. bigquery.datasets.createTagBinding Dataset Attach tags to the dataset. bigquery.datasets.deleteTagBinding Dataset Detach tags from the dataset. bigquery.datasets.listTagBindings Dataset List tags for the dataset. bigquery.datasets.listEffectiveTags Dataset List effective tags (applied and inherited) for the dataset. bigquery.datasets.link Dataset Create a linked dataset . bigquery.datasets.listSharedDatasetUsage Project List shared dataset usage statistics for datasets that you have access to in the project.
- Modify the policy to remove the desired role or principal, and then apply the updated policy using the Table#setIamPolicy() method. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const tableId = "YOUR TABLE ID" // const roleToRemove = "YOUR ROLE" // const principalToRemove = "YOUR PRINCIPAL ID" const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function revokeAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To revoke access to a table or view, // remove bindings from the Table or View policy. // // Find more details about Policy objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy if ( principalToRemove ) { // Create a copy of bindings for modifications. const bindings = [... policy . bindings ]; // Filter out the principal from each binding. for ( const binding of bindings ) { if ( binding . members ) { binding . members = binding . members . filter ( m = > m !== principalToRemove ); } } // Filter out bindings with empty members. policy . bindings = bindings . filter ( binding = > binding . members && binding . members . length > 0 ); } if ( roleToRemove ) { // Filter out all bindings with the roleToRemove // and assign a new list back to the policy bindings. policy . bindings = policy . bindings . filter ( b = > b . role !== roleToRemove ); } // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Both role and principal are removed if ( roleToRemove !== null && principalToRemove !== null ) { console . log ( Role ' ${ roleToRemove } ' revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // Only role is removed if ( roleToRemove !== null && principalToRemove === null ) { console . log ( Role ' ${ roleToRemove } ' revoked for all principals on resource ' ${ datasetId } . ${ tableId } '. ); } // Only principal is removed if ( roleToRemove === null && principalToRemove !== null ) { console . log ( Access revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // No changes were made if ( roleToRemove === null && principalToRemove === null ) { console . log ( No changes made to access policy for ' ${ datasetId } . ${ tableId } '. ); } } Work with access controls for routines Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Modify the access property to exclude the desired entity, and then call the Dataset#setMetadata() function to apply the updated access list. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset" // ID of the user or group from whom you are revoking access. // const entityId = "user-or-group-to-remove@example.com" const { BigQuery } = require ( '@google-cloud/bigquery' ); // Instantiate a client. const bigquery = new BigQuery (); async function revokeDatasetAccess () { const [ dataset ] = await bigquery . dataset ( datasetId ). get (); // To revoke access to a dataset, remove elements from the access list. // // See the BigQuery client library documentation for more details on access entries: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Filter access entries to exclude entries matching the specified entity id // and assign a new list back to the access list. dataset . metadata . access = dataset . metadata . access . filter ( entry = > { return ! ( entry . entity id === entityId entry . userByEmail === entityId entry . groupByEmail === entityId ); }); // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/bigquery/docs/updating-datasets // Update just the 'access entries' property of the dataset. await dataset . setMetadata ( dataset . metadata ); console . log ( Revoked access to ' ${ entityId } ' from ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

