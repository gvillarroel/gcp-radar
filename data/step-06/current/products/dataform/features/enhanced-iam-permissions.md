---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.733Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Enhanced IAM permissions"
feature_slug: "enhanced-iam-permissions"
latest_feature_date: "2025-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/dataform/docs/schedule-runs"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
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
Coverage: MEDIUM

## Step 02 Summary

Enhanced IAM permissions provide more granular control over resource creation and scheduling in Dataform.

## Extended Definition

Enhanced IAM permissions provide more granular control over resource creation and scheduling in Dataform.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)

## Supporting Pages

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Control access to an individual repository To control access to Dataform with granular permissions, you can set Dataform IAM roles on individual repositories by using the Dataform API repositories.setIamPolicy request.
- To learn more about granting granular permissions to BigQuery datasets, see Controlling access to datasets .
- To learn more about BigQuery IAM roles and permissions, see Access control with IAM .
- The dataform.repositories.create permission is included in the following IAM roles: BigQuery Admin ( roles/bigquery.admin ) BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Studio User ( roles/bigquery.studioUser ) BigQuery User ( roles/bigquery.user ) Code Creator ( roles/dataform.codeCreator ) Code Editor ( roles/dataform.codeEditor ) Code Owner ( roles/dataform.codeOwner ) Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser ) Dataform Admin ( roles/dataform.admin ) To restrict the data that a user, service agent, or service account can read or write in BigQuery, you can grant granular BigQuery IAM permissions to selected BigQuery datasets or tables.

### Schedule runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- Source ID: `site-docs-root-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Dataform Admin ( roles/dataform.admin ) on repositories Composer Worker ( roles/composer.worker ) on the Cloud Composer environment's service account Automate runs with Cloud Build: Service Account Admin ( roles/iam.serviceAccountAdmin ) on the custom service account Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Important: We recommend enabling strict act-as mode on existing repositories, as this helps to ensure a more secure and predictable permissions model for your Dataform projects.
- Grant the required IAM permissions Grant the Dataform Admin role ( roles/dataform.admin ) to the custom service account in your Dataform repository.
- For details on how to grant an IAM role to an individual repository, see Control access to an individual repository .

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- This is a resource that is used to organize Files and other Folders and provide hierarchical access controls. get iam policy get iam policy ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. team folder path team folder path ( project : str , location : str , team folder : str ) - > str Returns a fully-qualified team folder string. test iam permissions test iam permissions ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = dataform v1 .
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- This is a resource that is used to organize Files and other Folders and provide hierarchical access controls. get iam policy get iam policy ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. team folder path team folder path ( project : str , location : str , team folder : str ) - > str Returns a fully-qualified team folder string. test iam permissions test iam permissions ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 import google.iam.v1.iam policy pb2 as iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = dataform v1 .
- DataformClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.

