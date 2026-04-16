---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.742Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Terraform IAM policy for repository resource"
feature_slug: "terraform-iam-policy-for-repository-resource"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/terraform"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
keywords:
  - "terraform"
  - "iam"
  - "policy"
  - "for"
  - "repository"
  - "resource"
  - "this"
  - "adds"
---

# Terraform IAM policy for repository resource

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

This feature adds Terraform IAM policy support for the Dataform repository resource.

## Extended Definition

This feature adds Terraform IAM policy support for the Dataform repository resource.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/terraform](https://docs.cloud.google.com/dataform/docs/terraform)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)

## Supporting Pages

### Use Terraform with Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/terraform](https://docs.cloud.google.com/dataform/docs/terraform)
- Source ID: `site-docs-root-2`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- Dataform resource Terraform registry sample Repository google dataform repository Release configuration google dataform repository release config Workflow configuration google dataform repository workflow config Manage IAM access in Terraform You can use Terraform to set and manage the dataform repository iam policy for the repository resource.
- The following resources help you manage the dataform repository iam policy: google dataform repository iam policy google dataform repository iam binding google dataform repository iam member For best practices for managing IAM in Terraform, see Manage Identity and Access Management .
- Terraform is an infrastructure-as-code (IaC) tool that you can use to provision resources and permissions for the following Dataform resources: Repository Release configuration Workflow configuration For example, you can use Terraform to create and configure Dataform repositories, release configurations, and workflow configurations.
- Terraform registry Terraform Developer website Terraform Language Documentation Terraform CLI Documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.GetIamPolicyRequest( resource="resource value", ) Make the request response = await client. get iam policy (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.GetIamPolicyRequest , dict]] The request object.
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.SetIamPolicyRequest( resource="resource value", ) Make the request response = await client. set iam policy (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.SetIamPolicyRequest , dict]] The request object.
- Request message for SetIamPolicy method. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DataformClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.
- DataformClient () Initialize request argument(s) request = iam policy pb2.GetIamPolicyRequest( resource="resource value", ) Make the request response = client. get iam policy (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.GetIamPolicyRequest , dict] The request object.
- DataformClient () Initialize request argument(s) request = iam policy pb2.SetIamPolicyRequest( resource="resource value", ) Make the request response = client. set iam policy (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.SetIamPolicyRequest , dict] The request object.
- Request message for SetIamPolicy method. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Restrict remote repositories Required roles To get the permissions that you need to create and delete a repository, ask your administrator to grant you the following IAM roles on repositories: Dataform Admin ( roles/dataform.admin ) - the project Service Account User ( roles/iam.serviceAccountUser ) - the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- To let Dataform use your custom service account, the default Dataform service agent must have the following roles on the custom service account resource: Service Account Token Creator ( roles/iam.serviceAccountTokenCreator ) Service Account User ( roles/iam.serviceAccountUser ) To grant these roles, follow these steps: In the Google Cloud console, go to the IAM page.
- By default, Dataform uses a service agent or service account derived from your project number in the following format: service- PROJECT NUMBER @gcp-sa-dataform.iam.gserviceaccount.com You must use a custom service account to run workflows in your repository, but the default Dataform service agent is still used for all other repository operations.
- Important: To create a Dataform repository connected to a remote Git repository that is not allow-listed in the dataform.restrictGitRemotes policy, first add the remote Git repository to the allowedValues list in the policy, and then create a new Dataform repository and connect it to the remote repository.

