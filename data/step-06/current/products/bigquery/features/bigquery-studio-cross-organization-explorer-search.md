---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.236Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Studio cross-organization Explorer search"
feature_slug: "bigquery-studio-cross-organization-explorer-search"
latest_feature_date: "2025-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "bigquery"
  - "studio"
  - "cross"
  - "organization"
  - "explorer"
  - "search"
  - "can"
  - "show"
---

# BigQuery Studio cross-organization Explorer search

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Studio Explorer search can show results from the current organization and lets users switch organizations from a drop-down menu.

## Extended Definition

BigQuery Studio Explorer search can show results from the current organization and lets users switch organizations from a drop-down menu.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery real-time operational health monitoring is a centralized monitoring system that lets you observe BigQuery usage across the organization in multiple locations.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the Chart configuration pane, configure the Group by field by selecting one of the following options: None : This option gives you a high-level overview of the chosen metrics, over time, across the entire organization.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- The access policy details are available in the returned policy object. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const resourceName = "YOUR RESOURCE NAME"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function viewTableOrViewAccessPolicy () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( resourceName ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings if they don't exist if ( ! policy . bindings ) { policy . bindings = []; } // Show policy details. // Find more details for the Policy object here: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Policy console . log ( Access Policy details for table or view ' ${ resourceName } '. ); console . log ( Bindings: ${ JSON . stringify ( policy . bindings , null , 2 ) } ); console . log ( etag: ${ policy . etag } ); console . log ( Version: ${ policy . version } ); } Revoke access to a table or view To revoke access to a table or view, select one of the following options: Console Go to the BigQuery page.
- The access policy is available in the access property of the resulting metadata object. / TODO(developer): Update and un-comment below lines / // const datasetId = "my project id.my dataset"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const bigquery = new BigQuery (); async function viewDatasetAccessPolicy () { const dataset = bigquery . dataset ( datasetId ); const [ metadata ] = await dataset . getMetadata (); const accessEntries = metadata . access []; // Show the list of AccessEntry objects. // More details about the AccessEntry object in the BigQuery documentation: // https://cloud.google.com/nodejs/docs/reference/bigquery/latest console . log ( ${ accessEntries . length } Access entries in dataset ' ${ datasetId } ': ); for ( const accessEntry of accessEntries ) { console . log ( Role: ${ accessEntry . role 'null' } ); console . log ( Special group: ${ accessEntry . specialGroup 'null' } ); console . log ( User by Email: ${ accessEntry . userByEmail 'null' } ); } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- DatasetId datasetId = DatasetId . of ( projectId , datasetName ); Dataset dataset = bigquery . getDataset ( datasetId ); // Show ACL details. // Find more information about ACL and the Acl Class here: // https://cloud.google.com/storage/docs/access-control/lists // https://cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.Acl List<Acl> acls = dataset . getAcl (); System . out . println ( "ACLs in dataset \"" + dataset . getDatasetId (). getDataset () + "\":" ); System . out . println ( acls . toString ()); for ( Acl acl : acls ) { System . out . println (); System . out . println ( "Role: " + acl . getRole ()); System . out . println ( "Entity: " + acl . getEntity ()); } } catch ( BigQueryException e ) { System . out . println ( "ACLs info not retrieved. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- These logs record API calls and actions that modify the configuration or metadata of your resources. resource.type = "bigquery dataset" : This narrows the search to events related to BigQuery datasets, where table operations are logged. timestamp >= " STARTING TIMESTAMP " : Filters log entries to only show those created on or after the specified timestamp. protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" : Ensures the log message conforms to the standard Cloud Audit Log structure. ( ... ) : This block groups conditions to find different types of table events, as outlined in the previous section.
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def list tables dataset id = "your dataset id" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id puts "Tables in dataset #{ dataset id } :" dataset . tables . each do table puts " \t #{ table . table id } " end end Audit table history You can audit the history of BigQuery tables by querying Cloud Audit Logs in Logs Explorer.
- Interpret the results In the Logs Explorer result pane, expand the entry you're interested in, and then click Expand nested fields to show the whole message.
- Go to the BigQuery page In the left pane, click explore Explorer : If you don't see the left pane, click last page Expand left pane to open the pane.

