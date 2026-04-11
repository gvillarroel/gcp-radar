---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.387Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Terraform IAM policy for repository resource"
feature_slug: "terraform-iam-policy-for-repository-resource"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/terraform"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
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
Coverage: LOW

## Step 02 Summary

This feature adds Terraform IAM policy support for the Dataform repository resource.

## Extended Definition

This feature adds Terraform IAM policy support for the Dataform repository resource.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/terraform](https://docs.cloud.google.com/dataform/docs/terraform)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)

## Supporting Pages

### Use Terraform with Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/terraform](https://docs.cloud.google.com/dataform/docs/terraform)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Dataform resource Terraform registry sample Repository google dataform repository Release configuration google dataform repository release config Workflow configuration google dataform repository workflow config Manage IAM access in Terraform You can use Terraform to set and manage the dataform repository iam policy for the repository resource.
- The following resources help you manage the dataform repository iam policy: google dataform repository iam policy google dataform repository iam binding google dataform repository iam member For best practices for managing IAM in Terraform, see Manage Identity and Access Management .
- Terraform is an infrastructure-as-code (IaC) tool that you can use to provision resources and permissions for the following Dataform resources: Repository Release configuration Workflow configuration For example, you can use Terraform to create and configure Dataform repositories, release configurations, and workflow configurations.
- Terraform registry Terraform Developer website Terraform Language Documentation Terraform CLI Documentation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = await client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict]] The request object.
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.GetIamPolicyRequest( resource="resource value", ) Make the request response = await client. get iam policy (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.GetIamPolicyRequest , dict]] The request object.
- DataformAsyncClient () Initialize request argument(s) request = iam policy pb2.SetIamPolicyRequest( resource="resource value", ) Make the request response = await client. set iam policy (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.iam.v1.iam policy pb2.SetIamPolicyRequest , dict]] The request object.
- Request message for SetIamPolicy method. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DataformClient () Initialize request argument(s) request = iam policy pb2.TestIamPermissionsRequest( resource="resource value", permissions=['permissions value1', 'permissions value2'], ) Make the request response = client. test iam permissions (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.TestIamPermissionsRequest , dict] The request object.
- DataformClient () Initialize request argument(s) request = iam policy pb2.GetIamPolicyRequest( resource="resource value", ) Make the request response = client. get iam policy (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.GetIamPolicyRequest , dict] The request object.
- DataformClient () Initialize request argument(s) request = iam policy pb2.SetIamPolicyRequest( resource="resource value", ) Make the request response = client. set iam policy (request=request) Handle the response print(response) Parameters Name Description request Union[ google.iam.v1.iam policy pb2.SetIamPolicyRequest , dict] The request object.
- Request message for SetIamPolicy method. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

