---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.270Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Custom organization constraints for BigQuery sharing resources"
feature_slug: "custom-organization-constraints-for-bigquery-sharing-resources"
latest_feature_date: "2025-10-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "custom"
  - "organization"
  - "constraints"
  - "bigquery"
  - "sharing"
  - "resources"
  - "policy"
  - "can"
---

# Custom organization constraints for BigQuery sharing resources

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Organization Policy custom constraints can enforce granular controls on specific fields of BigQuery sharing resources such as exchanges and listings.

## Extended Definition

Organization Policy custom constraints can enforce granular controls on specific fields of BigQuery sharing resources such as exchanges and listings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### "Manage Sharing data exchanges and listings using custom constraints \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field analyticshub.googleapis.com/DataExchange resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact analyticshub.googleapis.com/Listing resource.allowOnlyMetadataSharing resource.bigqueryDataset.dataset resource.bigqueryDataset.replicaLocations resource.bigqueryDataset.restrictedExportPolicy.enabled resource.bigqueryDataset.restrictedExportPolicy.restrictDirectTableAccess resource.bigqueryDataset.restrictedExportPolicy.restrictQueryResult resource.bigqueryDataset.selectedResources.routine resource.bigqueryDataset.selectedResources.table resource.categories resource.dataProvider.name resource.dataProvider.primaryContact resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact resource.publisher.name resource.publisher.primaryContact resource.pubsubTopic.dataAffinityRegions resource.pubsubTopic.topic resource.requestAccess resource.restrictedExportConfig.enabled resource.restrictedExportConfig.restrictQueryResult What's next Learn more about custom constraints .
- The Listing resource must have the restrictedExportPolicy object enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.listingWithRestrictedExportPolicy resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : has(resource.bigqueryDataset) && has(resource.bigqueryDataset.restrictedExportPolicy) && resource.bigqueryDataset.restrictedExportPolicy.enabled == true action type : DENY display name : The Listing must have restricted export policy. description : The Listing resource must have restrictedExportPolicy enabled to allow egress controls.
- Error Message: Operation denied by org policy on resource 'projects/PROJECT ID/locations/us': ["customConstraints/custom.enforceDataExchangeDiscovery": "All DataExchange resources must be private."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: analyticshub.googleapis.com/DataExchange analyticshub.googleapis.com/Listing To learn more about Organization Policy, see Custom organization policies .

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to modify IAM policies for resources: To get a dataset's access policy: bigquery.datasets.get To set a dataset's access policy: bigquery.datasets.update To get a dataset's access policy (Google Cloud console only): bigquery.datasets.getIamPolicy To set a dataset's access policy (console only): bigquery.datasets.setIamPolicy To get a table or view's policy: bigquery.tables.getIamPolicy To set a table or view's policy: bigquery.tables.setIamPolicy To get a routine's access policy: bigquery.routines.getIamPolicy To set a routine's access policy: bigquery.routines.setIamPolicy To create bq tool or SQL BigQuery jobs (optional): bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- This capability implies that the authorized resources have the following permissions: bigquery.tables.get bigquery.tables.list bigquery.tables.getData bigquery.tables.updateData bigquery.tables.create bigquery.tables.delete bigquery.routines.get bigquery.routines.list bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata To deny access to these authorized resources, add one of the following values to the deniedPrincipal field when you create the deny policy: Value Use case principalSet://goog/public:all Blocks all principals including authorized resources. principalSet://bigquery.googleapis.com/projects/ PROJECT NUMBER / Blocks all BigQuery authorized resources in the specified project.
- Find more details about Policy and Binding objects here: https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding binding = { "role" : role , "members" : [ principal id , ], } policy . bindings . append ( binding ) Set the IAM access policy with updated bindings. updated policy = client . set iam policy ( full resource name , policy ) Show a success message. print ( f "Role ' { role } ' granted for principal ' { principal id } '" f " on resource ' { full resource name } '." ) Predefined roles that grant access to tables and views Views are treated as table resources in BigQuery.
- This permission also requires bigquery.jobs.create to run a query job that references the routine, and you also need permission to access any resources that the routine references, such as tables or views. bigquery.routines.list Dataset List routines in the dataset and show metadata for routines. bigquery.routines.update Routine Update routine definitions and metadata. bigquery.routines.getIamPolicy Routine Get access controls for the routine. bigquery.routines.setIamPolicy Routine Set access controls for the routine.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- This project acts as the BigQuery reservations admininistration project , enabling organization-wide sharing of slots.
- If your organization needs more flexibility, the following options are available: Cloud Composer jobs : you can schedule Cloud Composer jobs to issue ETL jobs that create regional subsets before triggering the BigQuery Data Transfer Service through its client API .
- The tenant can then decrypt the data either by accessing the key material in an authorized UDF or by passing the key material as a query parameter to BigQuery, where the host organization cannot log the key.

