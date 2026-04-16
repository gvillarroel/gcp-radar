---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.751Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Column-level security"
feature_slug: "column-level-security"
latest_feature_date: "2020-11-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "column"
  - "level"
  - "security"
  - "bigquery"
  - "restricts"
  - "access"
  - "columns"
  - "policy"
---

# Column-level security

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery column-level security restricts access to columns using policy tags, including replication across locations; BigQuery supports access control policies at the column level.

## Extended Definition

BigQuery column-level security restricts access to columns using policy tags, including replication across locations; BigQuery supports access control policies at the column level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Data policies define rules for data masking, row-level security, or column-level security. @param {string} projectId The Google Cloud project ID. (for example, 'example-project-id') @param {string} location The Google Cloud location of the data policies. (For example, 'us') / async function listDataPolicies ( projectId , location ) { const parent = projects/ ${ projectId } /locations/ ${ location } ; const request = { parent , }; try { console . log ( Listing data policies for project: ${ projectId } in location: ${ location } , ); const [ dataPolicies ] = await client . listDataPolicies ( request ); if ( dataPolicies . length === 0 ) { console . log ( No data policies found in location ${ location } for project ${ projectId } . , ); return ; } console . log ( 'Data Policies:' ); for ( const dataPolicy of dataPolicies ) { console . log ( Data Policy Name: ${ dataPolicy . name } ); console . log ( ID: ${ dataPolicy . dataPolicyId } ); console . log ( Type: ${ dataPolicy . dataPolicyType } ); if ( dataPolicy . policyTag ) { console . log ( Policy Tag: ${ dataPolicy . policyTag } ); } if ( dataPolicy . grantees && dataPolicy . grantees . length > 0 ) { console . log ( Grantees: ${ dataPolicy . grantees . join ( ', ' ) } ); } if ( dataPolicy . dataMaskingPolicy ) { if ( dataPolicy . dataMaskingPolicy . predefinedExpression ) { console . log ( Data Masking Predefined Expression: ${ dataPolicy . dataMaskingPolicy . predefinedExpression } , ); } else if ( dataPolicy . dataMaskingPolicy . routine ) { console . log ( Data Masking Routine: ${ dataPolicy . dataMaskingPolicy . routine } , ); } } } console . log ( Successfully listed ${ dataPolicies . length } data policies. ); } catch ( err ) { if ( err . code === status .
- Data policies are used to define rules for data masking or row-level security on BigQuery tables. @param {string} projectId The Google Cloud project ID (for example, 'example-project-id') @param {string} [location='us'] The Google Cloud location of the data policy (For example, 'us', 'europe-west2'). @param {string} [dataPolicyId='example-data-policy'] The ID of the data policy to retrieve. / async function getDataPolicy ( projectId , location = 'us' , dataPolicyId = 'example-data-policy' , ) { const name = client . dataPolicyPath ( projectId , location , dataPolicyId ); const request = { name , }; try { const [ dataPolicy ] = await client . getDataPolicy ( request ); console . log ( 'Successfully retrieved data policy:' ); console . log ( Name: ${ dataPolicy . name } ); console . log ( Type: ${ dataPolicy . dataPolicyType } ); if ( dataPolicy . dataMaskingPolicy ) { console . log ( Data Masking Policy: ${ dataPolicy . dataMaskingPolicy . predefinedExpression dataPolicy . dataMaskingPolicy . routine } , ); } if ( dataPolicy . grantees && dataPolicy . grantees . length > 0 ) { console . log ( Grantees: ${ dataPolicy . grantees . join ( ', ' ) } ); } } catch ( err ) { if ( err . code === status .
- It may have already been deleted." ) except Exception as e : print ( f "Error deleting data policy ' { name } ': { e } " ) Mask data by applying data policies to a column Note: To provide feedback or request support for this feature, send an email to bigquery-security-feedback@google.com .
- This is a primary mechanism for implementing column-level security in BigQuery. @param {string} projectId The Google Cloud project ID (for example, 'example-project-id') @param {string} location The Google Cloud location.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- This permission is required for creating replica materialized views. bigquery.tables.restoreSnapshot Table Restore a table snapshot. bigquery.tables.setCategory Table Set policy tags in the table's schema. bigquery.tables.setColumnDataPolicy Table Set column-level access policies on a table. bigquery.tables.setIamPolicy Table Set access controls on a table. bigquery.tables.update Table Update table. metadata. bigquery.tables.get is also required to update table metadata in the console. bigquery.tables.updateData Table Update table data. bigquery.tables.updateIndex Table Update a search index on the table.
- Modify the policy to remove the desired role or principal, and then apply the updated policy using the Table#setIamPolicy() method. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const tableId = "YOUR TABLE ID" // const roleToRemove = "YOUR ROLE" // const principalToRemove = "YOUR PRINCIPAL ID" const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function revokeAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To revoke access to a table or view, // remove bindings from the Table or View policy. // // Find more details about Policy objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy if ( principalToRemove ) { // Create a copy of bindings for modifications. const bindings = [... policy . bindings ]; // Filter out the principal from each binding. for ( const binding of bindings ) { if ( binding . members ) { binding . members = binding . members . filter ( m = > m !== principalToRemove ); } } // Filter out bindings with empty members. policy . bindings = bindings . filter ( binding = > binding . members && binding . members . length > 0 ); } if ( roleToRemove ) { // Filter out all bindings with the roleToRemove // and assign a new list back to the policy bindings. policy . bindings = policy . bindings . filter ( b = > b . role !== roleToRemove ); } // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Both role and principal are removed if ( roleToRemove !== null && principalToRemove !== null ) { console . log ( Role ' ${ roleToRemove } ' revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // Only role is removed if ( roleToRemove !== null && principalToRemove === null ) { console . log ( Role ' ${ roleToRemove } ' revoked for all principals on resource ' ${ datasetId } . ${ tableId } '. ); } // Only principal is removed if ( roleToRemove === null && principalToRemove !== null ) { console . log ( Access revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // No changes were made if ( roleToRemove === null && principalToRemove === null ) { console . log ( No changes made to access policy for ' ${ datasetId } . ${ tableId } '. ); } } Work with access controls for routines Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Call the Table#getIamPolicy() function to retrieve the current IAM policy for a table or view, modify the policy by adding new bindings, and then use Table#setIamPolicy() function to save changes to the access policy. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID"; // const datasetId = "YOUR DATASET ID"; // const tableId = "YOUR TABLE ID"; // const principalId = "YOUR PRINCIPAL ID"; // const role = "YOUR ROLE"; const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function grantAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To grant access to a table or view // add bindings to the Table or View policy. // // Find more details about Policy and Binding objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding const binding = { role , members : [ principalId ], }; policy . bindings . push ( binding ); // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Show a success message. console . log ( Role ' ${ role } ' granted for principal ' ${ principalId } ' on resource ' ${ datasetId } . ${ tableId } '. ); } await grantAccessToTableOrView (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Find more details about Policy and Binding objects here: https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding binding = { "role" : role , "members" : [ principal id , ], } policy . bindings . append ( binding ) Set the IAM access policy with updated bindings. updated policy = client . set iam policy ( full resource name , policy ) Show a success message. print ( f "Role ' { role } ' granted for principal ' { principal id } '" f " on resource ' { full resource name } '." ) Predefined roles that grant access to tables and views Views are treated as table resources in BigQuery.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery lets you control access to your resources at many levels, including access to the organization, folders, projects, datasets, tables, table columns, and table rows.
- For information about controlling access to your BigQuery resources, see Overview of data security and governance .
- Secure resources BigQuery security is based on Google Cloud Identity and Access Management .
- In particular, you can create an Organization resource, which lets you do some tasks, such as setting access controls, at the organization level.

