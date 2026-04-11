---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.380Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "User credential authorization for runs and scheduling"
feature_slug: "user-credential-authorization-for-runs-and-scheduling"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/schedule-runs"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
keywords:
  - "user"
  - "credential"
  - "authorization"
  - "for"
  - "runs"
  - "and"
  - "scheduling"
  - "this"
---

# User credential authorization for runs and scheduling

Product: Dataform
Coverage: LOW

## Step 02 Summary

This feature lets Dataform use Google Account user credentials to authorize pipeline creation, scheduling, execution, and workflow configuration creation.

## Extended Definition

This feature lets Dataform use Google Account user credentials to authorize pipeline creation, scheduling, execution, and workflow configuration creation.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)

## Supporting Pages

### Schedule runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google Account user credentials ( Preview ) Google Account user credentials are the default authorization method for manual, non-scheduled workflow configuration creation and executions.
- Launch a workflow config after recompiling the release config WORKFLOW CONFIG RESOURCE="projects/${ PROJECT ID}/locations/${ DATAFORM LOCATION}/repositories/${ DATAFORM REPO ID}/workflowConfigs/${ WORKFLOW CONFIG ID}" CREATE WORKFLOW PAYLOAD="{\"workflowConfig\": \"$$WORKFLOW CONFIG RESOURCE\"}" WORKFLOW INVOCATIONS API="https://dataform.googleapis.com/v1/projects/${ PROJECT ID}/locations/${ DATAFORM LOCATION}/repositories/${ DATAFORM REPO ID}/workflowInvocations" curl --fail-with-body -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d "$$CREATE WORKFLOW PAYLOAD" \ "$$WORKFLOW INVOCATIONS API" echo "Successfully created a new workflow invocation." Define substitution variables that can be set in the trigger substitutions : DATAFORM LOCATION : 'us-central1' # Default, change if needed DATAFORM REPO ID : '' # Required: Set this in the trigger RELEASE CONFIG ID : '' # Required: Set this in the trigger WORKFLOW CONFIG ID : '' # Required: Set this in the trigger PROJECT ID : ${PROJECT ID} # Automatically uses the build's Project ID options : logging : CLOUD LOGGING ONLY Create the Cloud Build trigger To create a trigger that runs your build configuration when code is pushed to your repository, do the following: In the Google Cloud console, open the Cloud Build Triggers page.
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Dataform Admin ( roles/dataform.admin ) on repositories Composer Worker ( roles/composer.worker ) on the Cloud Composer environment's service account Automate runs with Cloud Build: Service Account Admin ( roles/iam.serviceAccountAdmin ) on the custom service account Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- To authenticate the resource with your Google Account user credentials, you must manually grant permission for BigQuery pipelines to get the access token for your Google Account and access the source data on your behalf.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking.
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. team folder path team folder path ( project : str , location : str , team folder : str ) - > str Returns a fully-qualified team folder string. test iam permissions test iam permissions ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get location get location ( request : typing .
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking.
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. team folder path team folder path ( project : str , location : str , team folder : str ) - > str Returns a fully-qualified team folder string. test iam permissions test iam permissions ( request : typing .
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example: :literal: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get location get location ( request : typing .
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

