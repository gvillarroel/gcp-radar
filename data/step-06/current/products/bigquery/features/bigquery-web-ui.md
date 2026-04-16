---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.826Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery web UI"
feature_slug: "bigquery-web-ui"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "bigquery"
  - "web"
  - "ui"
  - "console"
  - "provides"
  - "browser"
  - "based"
  - "interface"
---

# BigQuery web UI

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery web UI in the Cloud console provides a browser-based interface for working with BigQuery resources and queries; The BigQuery web UI in the Cloud console provides a browser-based interface for working with BigQuery resources and queries.

## Extended Definition

The BigQuery web UI in the Cloud console provides a browser-based interface for working with BigQuery resources and queries; The BigQuery web UI in the Cloud console provides a browser-based interface for working with BigQuery resources and queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Explore BigQuery in the Google Cloud console The BigQuery Google Cloud console provides a graphical interface that you can use to create and manage BigQuery resources.
- Go to Overview You can also open the BigQuery Overview page by entering the following URL in your browser: https://console.cloud.google.com/bigquery/overview Review the following sections of the Overview page: The Introduction section: gives you a quick video overview of BigQuery's capabilities.
- Go to Studio Alternatively, enter the following URL in your browser: https://console.cloud.google.com/bigquery The Studio page opens in your most recently accessed project.
- After you select a data source, you can do the following based on the capabilities available for your data source: Set up BigQuery table over external data ( federation ) : enables BigQuery to access external data without ingesting it into BigQuery.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Take the tour Tools BigQuery provides several interfaces you can use for administration tasks.
- Reliability guidance This document provides an understanding of BigQuery reliability, including insight into availability, durability, data consistency, consistency of performance, and data recovery in BigQuery, as well as a review of error handling considerations.
- You can use the bq command-line tool to do tasks that aren't supported in the Google Cloud console, to prototype capabilities before encoding them in queries or API methods, or if you prefer working in a command-line interface.
- When a user initiates one of these tasks by using the Google Cloud console , the bq command-line tool , a SQL statement , or an API call , BigQuery automatically creates a job to execute the task.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Modify the policy to remove the desired role or principal, and then apply the updated policy using the Table#setIamPolicy() method. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const tableId = "YOUR TABLE ID" // const roleToRemove = "YOUR ROLE" // const principalToRemove = "YOUR PRINCIPAL ID" const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function revokeAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To revoke access to a table or view, // remove bindings from the Table or View policy. // // Find more details about Policy objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy if ( principalToRemove ) { // Create a copy of bindings for modifications. const bindings = [... policy . bindings ]; // Filter out the principal from each binding. for ( const binding of bindings ) { if ( binding . members ) { binding . members = binding . members . filter ( m = > m !== principalToRemove ); } } // Filter out bindings with empty members. policy . bindings = bindings . filter ( binding = > binding . members && binding . members . length > 0 ); } if ( roleToRemove ) { // Filter out all bindings with the roleToRemove // and assign a new list back to the policy bindings. policy . bindings = policy . bindings . filter ( b = > b . role !== roleToRemove ); } // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Both role and principal are removed if ( roleToRemove !== null && principalToRemove !== null ) { console . log ( Role ' ${ roleToRemove } ' revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // Only role is removed if ( roleToRemove !== null && principalToRemove === null ) { console . log ( Role ' ${ roleToRemove } ' revoked for all principals on resource ' ${ datasetId } . ${ tableId } '. ); } // Only principal is removed if ( roleToRemove === null && principalToRemove !== null ) { console . log ( Access revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // No changes were made if ( roleToRemove === null && principalToRemove === null ) { console . log ( No changes made to access policy for ' ${ datasetId } . ${ tableId } '. ); } } Work with access controls for routines Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Modify the access property to exclude the desired entity, and then call the Dataset#setMetadata() function to apply the updated access list. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset" // ID of the user or group from whom you are revoking access. // const entityId = "user-or-group-to-remove@example.com" const { BigQuery } = require ( '@google-cloud/bigquery' ); // Instantiate a client. const bigquery = new BigQuery (); async function revokeDatasetAccess () { const [ dataset ] = await bigquery . dataset ( datasetId ). get (); // To revoke access to a dataset, remove elements from the access list. // // See the BigQuery client library documentation for more details on access entries: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest // Filter access entries to exclude entries matching the specified entity id // and assign a new list back to the access list. dataset . metadata . access = dataset . metadata . access . filter ( entry = > { return ! ( entry . entity id === entityId entry . userByEmail === entityId entry . groupByEmail === entityId ); }); // Update will only succeed if the dataset // has not been modified externally since retrieval. // // See the BigQuery client library documentation for more details on metadata updates: // https://cloud.google.com/bigquery/docs/updating-datasets // Update just the 'access entries' property of the dataset. await dataset . setMetadata ( dataset . metadata ); console . log ( Revoked access to ' ${ entityId } ' from ' ${ datasetId } '. ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The access policy details are available in the returned policy object. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const resourceName = "YOUR RESOURCE NAME"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function viewTableOrViewAccessPolicy () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( resourceName ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings if they don't exist if ( ! policy . bindings ) { policy . bindings = []; } // Show policy details. // Find more details for the Policy object here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Policy console . log ( Access Policy details for table or view ' ${ resourceName } '. ); console . log ( Bindings: ${ JSON . stringify ( policy . bindings , null , 2 ) } ); console . log ( etag: ${ policy . etag } ); console . log ( Version: ${ policy . version } ); } Revoke access to a table or view To revoke access to a table or view, select one of the following options: Console Go to the BigQuery page.

