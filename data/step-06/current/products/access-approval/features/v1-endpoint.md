---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.091Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "v1 endpoint"
feature_slug: "v1-endpoint"
latest_feature_date: "2020-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient"
keywords:
  - "v1"
  - "endpoint"
  - "access"
  - "approval"
  - "provides"
  - "functionally"
  - "equivalent"
  - "v1beta1"
---

# v1 endpoint

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval provides a v1 endpoint that is functionally equivalent to v1beta1.

## Extended Definition

Access Approval provides a v1 endpoint that is functionally equivalent to v1beta1.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)

## Supporting Pages

### "Class AccessApprovalAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- Source ID: `site-python-reference`
- Final score: 37
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample get access approval service account(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample delete access approval settings(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample update access approval settings(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample get access approval settings(): Create a client client = accessapproval v1 .

### "Class AccessApprovalClient (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)
- Source ID: `site-python-reference`
- Final score: 37
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 def sample get access approval service account(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 def sample delete access approval settings(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 def sample update access approval settings(): Create a client client = accessapproval v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 def sample get access approval settings(): Create a client client = accessapproval v1 .

### Access Approval API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 37
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This service provides the following discovery document: https://accessapproval.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://accessapproval.googleapis.com REST Resource: v1.folders Methods deleteAccessApprovalSettings DELETE /v1/{name=folders/ /accessApprovalSettings} Deletes the settings associated with a project, folder, or organization. getAccessApprovalSettings GET /v1/{name=folders/ /accessApprovalSettings} Gets the Access Approval settings associated with a project, folder, or organization. getServiceAccount GET /v1/{name=folders/ /serviceAccount} Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests. updateAccessApprovalSettings PATCH /v1/{settings.name=folders/ /accessApprovalSettings} Updates the settings associated with a project, folder, or organization.
- REST Resource: v1.organizations Methods deleteAccessApprovalSettings DELETE /v1/{name=organizations/ /accessApprovalSettings} Deletes the settings associated with a project, folder, or organization. getAccessApprovalSettings GET /v1/{name=organizations/ /accessApprovalSettings} Gets the Access Approval settings associated with a project, folder, or organization. getServiceAccount GET /v1/{name=organizations/ /serviceAccount} Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests. updateAccessApprovalSettings PATCH /v1/{settings.name=organizations/ /accessApprovalSettings} Updates the settings associated with a project, folder, or organization.
- REST Resource: v1.projects Methods deleteAccessApprovalSettings DELETE /v1/{name=projects/ /accessApprovalSettings} Deletes the settings associated with a project, folder, or organization. getAccessApprovalSettings GET /v1/{name=projects/ /accessApprovalSettings} Gets the Access Approval settings associated with a project, folder, or organization. getServiceAccount GET /v1/{name=projects/ /serviceAccount} Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests. updateAccessApprovalSettings PATCH /v1/{settings.name=projects/ /accessApprovalSettings} Updates the settings associated with a project, folder, or organization.

