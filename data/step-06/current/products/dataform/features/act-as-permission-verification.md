---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.375Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Act-as permission verification"
feature_slug: "act-as-permission-verification"
latest_feature_date: "2025-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/strict-act-as-mode"
  - "https://docs.cloud.google.com/dataform/docs/best-practices-repositories"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
keywords:
  - "act"
  - "as"
  - "permission"
  - "verification"
  - "helps"
  - "users"
  - "identify"
  - "and"
---

# Act-as permission verification

Product: Dataform
Coverage: LOW

## Step 02 Summary

Act-as permission verification helps users identify and resolve iam.serviceAccounts.actAs permission issues in Dataform using Cloud Logging.

## Extended Definition

Act-as permission verification helps users identify and resolve iam.serviceAccounts.actAs permission issues in Dataform using Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
- [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### Use strict act-as mode \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/strict-act-as-mode](https://docs.cloud.google.com/dataform/docs/strict-act-as-mode)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: For existing repositories, we recommend enabling strict act-as mode, as this helps to ensure a more secure and predictable permissions model for your Dataform projects.
- You should review these logs regularly to identify and grant any missing iam.serviceAccounts.actAs permissions.
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Service Account User ( roles/iam.serviceAccountUser ) on the custom service account View logs in Logging: Logs Viewer ( roles/logging.viewer ) on the project Grant IAM roles to users or service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Verify act-as permissions for the effective service account To ensure your Dataform workflows run securely and without interruption, it's important to verify the act-as permissions on the service accounts they use.

### Best practices for repositories \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/best-practices-repositories](https://docs.cloud.google.com/dataform/docs/best-practices-repositories)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The following structure of subdirectories in the definitions directory reflects the key stages of a workflow: sources Data source declarations and basic transformation of source data—for example, filtering. intermediate Tables and actions that read from sources and transform data before you use the transformed data to define outputs tables.
- Best practices for repository size Repository size impacts multiple aspects of development in Dataform, such as the following: Collaboration Codebase readability Development processes Workflow compilation Workflow execution Dataform enforces API quotas and limits on compilation resources .
- Overview of repository size This section helps you understand how repository size impacts workflow development and Dataform compilation resources usage, and how to estimate the compilation resources usage of your repository.
- Some areas of a large workflow in a single repository might require custom permissions or processes, such as scheduling, that are different from the permissions and processes applied to the rest of the workflow.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- QueryWorkflowInvocationActionsRequest ( name="name value", ) Make the request page result = client. query workflow invocation actions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.QueryWorkflowInvocationActionsRequest , dict]] The request object.
- QueryCompilationResultActionsRequest ( name="name value", ) Make the request page result = client. query compilation result actions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataform v1.types.QueryCompilationResultActionsRequest , dict]] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,DataformTransport,Callable[..., DataformTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.

