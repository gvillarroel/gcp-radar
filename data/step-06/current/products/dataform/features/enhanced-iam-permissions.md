---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.376Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Enhanced IAM permissions"
feature_slug: "enhanced-iam-permissions"
latest_feature_date: "2025-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/dataform/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
keywords:
  - "enhanced"
  - "iam"
  - "permissions"
  - "provide"
  - "more"
  - "granular"
  - "control"
  - "over"
---

# Enhanced IAM permissions

Product: Dataform
Coverage: LOW

## Step 02 Summary

Enhanced IAM permissions provide more granular control over resource creation and scheduling in Dataform.

## Extended Definition

Enhanced IAM permissions provide more granular control over resource creation and scheduling in Dataform.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Control access to an individual repository To control access to Dataform with granular permissions, you can set Dataform IAM roles on individual repositories by using the Dataform API repositories.setIamPolicy request.
- To learn more about granting granular permissions to BigQuery datasets, see Controlling access to datasets .
- To learn more about BigQuery IAM roles and permissions, see Access control with IAM .
- The dataform.repositories.create permission is included in the following IAM roles: BigQuery Admin ( roles/bigquery.admin ) BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Studio User ( roles/bigquery.studioUser ) BigQuery User ( roles/bigquery.user ) Code Creator ( roles/dataform.codeCreator ) Code Editor ( roles/dataform.codeEditor ) Code Owner ( roles/dataform.codeOwner ) Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser ) Dataform Admin ( roles/dataform.admin ) To restrict the data that a user, service agent, or service account can read or write in BigQuery, you can grant granular BigQuery IAM permissions to selected BigQuery datasets or tables.

### Dataform release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- December 09, 2025 Feature Dataform offers enhanced IAM permissions , providing more granular control over resource creation and scheduling.
- November 13, 2025 Feature You can use custom constraints with Organization Policy to provide more granular control over specific fields for the CompilationResult , ReleaseConfig , WorkflowConfig , WorkflowInvocation , and Workspace resources.
- October 06, 2025 Feature You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Dataform resources.
- This feature enhances security by requiring users to have the iam.serviceAccounts.actAs permission on the service account used to run workflows, ensuring a more secure and predictable permissions model for your Dataform projects.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- This is a resource that is used to organize Files and other Folders and provide hierarchical access controls. get iam policy get iam policy ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. team folder path team folder path ( project : str , location : str , team folder : str ) - > str Returns a fully-qualified team folder string. test iam permissions test iam permissions ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = dataform v1 .
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.

