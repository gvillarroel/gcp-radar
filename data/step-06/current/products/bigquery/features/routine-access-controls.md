---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.348Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Routine access controls"
feature_slug: "routine-access-controls"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-routines"
  - "https://docs.cloud.google.com/bigquery/docs/access-control-intro"
keywords:
  - "routine"
  - "access"
  - "controls"
  - "bigquery"
  - "now"
  - "lets"
  - "you"
  - "set"
---

# Routine access controls

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now lets you set access controls on routines.

## Extended Definition

BigQuery now lets you set access controls on routines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)

## Supporting Pages

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Modify the policy to remove the desired role or principal, and then apply the updated policy using the Table#setIamPolicy() method. / TODO(developer): Update and un-comment below lines / // const projectId = "YOUR PROJECT ID" // const datasetId = "YOUR DATASET ID" // const tableId = "YOUR TABLE ID" // const roleToRemove = "YOUR ROLE" // const principalToRemove = "YOUR PRINCIPAL ID" const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate a client. const client = new BigQuery (); async function revokeAccessToTableOrView () { const dataset = client . dataset ( datasetId ); const table = dataset . table ( tableId ); // Get the IAM access policy for the table or view. const [ policy ] = await table . getIamPolicy (); // Initialize bindings array. if ( ! policy . bindings ) { policy . bindings = []; } // To revoke access to a table or view, // remove bindings from the Table or View policy. // // Find more details about Policy objects here: // https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy if ( principalToRemove ) { // Create a copy of bindings for modifications. const bindings = [... policy . bindings ]; // Filter out the principal from each binding. for ( const binding of bindings ) { if ( binding . members ) { binding . members = binding . members . filter ( m = > m !== principalToRemove ); } } // Filter out bindings with empty members. policy . bindings = bindings . filter ( binding = > binding . members && binding . members . length > 0 ); } if ( roleToRemove ) { // Filter out all bindings with the roleToRemove // and assign a new list back to the policy bindings. policy . bindings = policy . bindings . filter ( b = > b . role !== roleToRemove ); } // Set the IAM access policy with updated bindings. await table . setIamPolicy ( policy ); // Both role and principal are removed if ( roleToRemove !== null && principalToRemove !== null ) { console . log ( Role ' ${ roleToRemove } ' revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // Only role is removed if ( roleToRemove !== null && principalToRemove === null ) { console . log ( Role ' ${ roleToRemove } ' revoked for all principals on resource ' ${ datasetId } . ${ tableId } '. ); } // Only principal is removed if ( roleToRemove === null && principalToRemove !== null ) { console . log ( Access revoked for principal ' ${ principalToRemove } ' on resource ' ${ datasetId } . ${ tableId } '. ); } // No changes were made if ( roleToRemove === null && principalToRemove === null ) { console . log ( No changes made to access policy for ' ${ datasetId } . ${ tableId } '. ); } } Work with access controls for routines Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- This permission also requires bigquery.jobs.create to run a query job that references the routine, and you also need permission to access any resources that the routine references, such as tables or views. bigquery.routines.list Dataset List routines in the dataset and show metadata for routines. bigquery.routines.update Routine Update routine definitions and metadata. bigquery.routines.getIamPolicy Routine Get access controls for the routine. bigquery.routines.setIamPolicy Routine Set access controls for the routine.
- Special cases Consider the following scenarios when you create IAM deny policies on a few BigQuery permissions: Access to authorized resources ( views , routines , datasets , or stored procedures ) lets you create , drop , or manipulate a table, along with reading and modifying table data, even if you don't have direct permission to perform those operations.
- Control access to resources with IAM This document describes how to view, grant, and revoke access controls for BigQuery datasets and for the resources within datasets: tables, views, and routines.

### "Introduction to security and access controls in BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control-intro](https://docs.cloud.google.com/bigquery/docs/access-control-intro)
- Source ID: `site-docs-reference-2`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can grant access to the following BigQuery resources: Datasets and these resources within datasets: Tables and views Routines Connections Saved queries Data canvases Data preparations Pipelines Repositories Grant access to Resource Manager resources You can configure access to BigQuery resources through Resource Manager by granting a BigQuery role to a principal and then by granting that role on an organization, a folder, or a project.
- Introduction to security and access controls in BigQuery This document provides an overview of access controls in BigQuery using Identity and Access Management (IAM).
- IAM lets you grant granular access to specific BigQuery resources and helps prevent access to other resources.
- You can use the following types of roles in IAM to grant access to BigQuery resources: Predefined roles are managed by Google Cloud and support common use cases and access control patterns.

### Authorized routines \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-routines](https://docs.cloud.google.com/bigquery/docs/authorized-routines)
- Source ID: `site-docs-reference-5`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This role includes the bigquery.routines.get permission, which lets the user call the routine.
- You can attach the following roles to a stored procedure: BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer ) BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer ) BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor ) BigQuery Routine Admin ( roles/bigquery.routineAdmin ) Note: You can attach these roles only to stored procedures.
- You can attach the following roles to a stored procedure: BigQuery Routine Metadata Viewer ( roles/bigquery.routineMetadataViewer ) BigQuery Routine Data Viewer ( roles/bigquery.routineDataViewer ) BigQuery Routine Data Editor ( roles/bigquery.routineDataEditor ) BigQuery Routine Admin ( roles/bigquery.routineAdmin ) Note: You can attach these roles only to stored procedures.
- Edit the file to add the following JSON object to the access array in the Dataset resource: { "routine" : { "datasetId" : " DATASET NAME " , "projectId" : " PROJECT ID " , "routineId" : " ROUTINE NAME " } } Replace the following: DATASET NAME : the name of the dataset that contains the routine.

