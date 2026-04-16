---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.768Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table-level access control"
feature_slug: "table-level-access-control"
latest_feature_date: "2020-10-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/access-control-intro"
  - "https://docs.cloud.google.com/bigquery/docs/conditions"
keywords:
  - "table"
  - "level"
  - "access"
  - "control"
  - "bigquery"
  - "supports"
  - "policies"
---

# Table-level access control

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports access control policies at the table level; BigQuery supports access control policies at the table level.

## Extended Definition

BigQuery supports access control policies at the table level; BigQuery supports access control policies at the table level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)

## Supporting Pages

### "Introduction to security and access controls in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- For more information on assigning roles at the table, view, or routine level, see Control access to resources with IAM .
- You can grant access to the following BigQuery resources: Datasets and these resources within datasets: Tables and views Routines Connections Saved queries Data canvases Data preparations Pipelines Repositories Grant access to Resource Manager resources You can configure access to BigQuery resources through Resource Manager by granting a BigQuery role to a principal and then by granting that role on an organization, a folder, or a project.
- You can use the following types of roles in IAM to grant access to BigQuery resources: Predefined roles are managed by Google Cloud and support common use cases and access control patterns.
- Introduction to security and access controls in BigQuery This document provides an overview of access controls in BigQuery using Identity and Access Management (IAM).

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- This permission is required for creating replica materialized views. bigquery.tables.restoreSnapshot Table Restore a table snapshot. bigquery.tables.setCategory Table Set policy tags in the table's schema. bigquery.tables.setColumnDataPolicy Table Set column-level access policies on a table. bigquery.tables.setIamPolicy Table Set access controls on a table. bigquery.tables.update Table Update table. metadata. bigquery.tables.get is also required to update table metadata in the console. bigquery.tables.updateData Table Update table data. bigquery.tables.updateIndex Table Update a search index on the table.
- Then call the IAM().SetPolicy() function to save changes to the access policy for a table or view. import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" "cloud.google.com/go/iam" ) // revokeTableOrViewAccessPolicies creates a new ACL removing the VIEWER role to group "example-analyst-group@google.com" // For more information on the types of ACLs available see: // https://cloud.google.com/storage/docs/access-control/lists func revokeTableOrViewAccessPolicies ( w io .
- Then call the Roles() function to get the access policy for a table or view. import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" ) // viewTableOrViewAccessPolicies retrieves the ACL for the given resource // For more information on the types of ACLs available see: // https://cloud.google.com/storage/docs/access-control/lists func viewTableOrViewAccessPolicies ( w io .
- Modify the policy to remove the desired role or principal, and then apply the updated policy using the Table#setIamPolicy() method. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const tableId = "YOUR TABLE ID" // const roleToRemove = "YOUR ROLE" // const principalToRemove = "YOUR PRINCIPAL ID" const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function revokeAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To revoke access to a table or view, // remove bindings from the Table or View policy. // // Find more details about Policy objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy if ( principalToRemove ) { // Create a copy of bindings for modifications. const bindings = [... policy . bindings ]; // Filter out the principal from each binding. for ( const binding of bindings ) { if ( binding . members ) { binding . members = binding . members . filter ( m = > m !== principalToRemove ); } } // Filter out bindings with empty members. policy . bindings = bindings . filter ( binding = > binding . members && binding . members . length > 0 ); } if ( roleToRemove ) { // Filter out all bindings with the roleToRemove // and assign a new list back to the policy bindings. policy . bindings = policy . bindings . filter ( b = > b . role !== roleToRemove ); } // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Both role and principal are removed if ( roleToRemove !== null && principalToRemove !== null ) { console . log ( Role ' ${ roleToRemove } ' revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // Only role is removed if ( roleToRemove !== null && principalToRemove === null ) { console . log ( Role ' ${ roleToRemove } ' revoked for all principals on resource ' ${ datasetId } . ${ tableId } '. ); } // Only principal is removed if ( roleToRemove === null && principalToRemove !== null ) { console . log ( Access revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // No changes were made if ( roleToRemove === null && principalToRemove === null ) { console . log ( No changes made to access policy for ' ${ datasetId } . ${ tableId } '. ); } } Work with access controls for routines Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Control access with IAM Conditions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conditions](https://docs.cloud.google.com/bigquery/docs/conditions)
- Source ID: `site-docs-reference-5`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- However, a user with conditional access can grant themselves the BigQuery Admin role ( roles/bigquery.admin ) on the table, and then modify row and column access policies.
- With this role, the user can list all the resources in the dataset, but they can't perform any queries on those resources. { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . metadataViewer , "condition" : { "title" : "Dataset dataset 2" , "description" : "Allowed to list resources in dataset 2 dataset" , "expression" : resource . name == projects / project 2 / datasets / dataset 2 && resource . type == bigquery . googleapis . com / Dataset } } Grant owner access to all tables in all datasets with a specific prefix This example grants cloudysanfrancisco@gmail.com the BigQuery Data Owner role on all tables in all datasets that start with the public prefix: { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Tables public " , "description" : "Allowed owner access to tables in datasets with public prefix" , "expression" : resource . name . startsWith ( "projects/project 3/datasets/public " ) && resource . type == bigquery . googleapis . com / Table } } Grant owner access to all tables, models, and routines in all datasets that have a specific prefix This example grants cloudysanfrancisco@gmail.com the BigQuery Data Owner role on all tables, models, and routines in all datasets that start with the general prefix: { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Tables general " , "description" : "Allowed owner access to tables in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Table } }, { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Models general " , "description" : "Allowed owner access to models in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Model } }, { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataOwner , "condition" : { "title" : "Routines general " , "description" : "Allowed owner access to routines in datasets with general prefix" , "expression" : resource . name . startsWith ( "projects/project 4/datasets/general " ) && resource . type == bigquery . googleapis . com / Routine } } What's next Learn more about configuring temporary access by using IAM Conditions.
- When you create conditions for BigQuery routines, use the following formats: Attribute Value resource.type bigquery.googleapis.com/Routine resource.name projects/ PROJECT ID /datasets/ DATASET ID /routines/ ROUTINE ID resource.service bigquery.googleapis.com When you create conditions for BigQuery models, use the following formats: Attribute Value resource.type bigquery.googleapis.com/Model resource.name projects/ PROJECT ID /datasets/ DATASET ID /models/ MODEL ID resource.service bigquery.googleapis.com Replace the following: PROJECT ID : the ID of the project that contains the resources that you are granting access to DATASET ID : the ID of the dataset that you are granting access to TABLE ID : the ID of the table or view that you are granting access to ROUTINE ID : the ID of the routine that you are granting access to MODEL ID : the ID of the model that you are granting access to Conditions best practices When you build conditions in BigQuery, use the following best practices: We recommend using positive conditions for resource.type , resource.name , and resource.service for greater accuracy.
- The user can't view the table in the Google Cloud console because they don't have the bigquery.tables.list permission on the dataset. { "members" : [ cloudysanfrancisco @ gmail . com ], "role" : roles / bigquery . dataViewer , "condition" : { "title" : "Table dataset 1.table 1" , "description" : "Allowed to read table with name table 1 in dataset 1 dataset" , "expression" : resource . name == projects / project 1 / datasets / dataset 1 / tables / table 1 && resource . type == bigquery . googleapis . com / Table } } Grant list access to a specific dataset This example grants cloudysanfrancisco@gmail.com the BigQuery Metadata Viewer role on the dataset 2 dataset.

