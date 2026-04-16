---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.715Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Workload updates"
feature_slug: "workload-updates"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/apply-updates"
  - "https://docs.cloud.google.com/assured-workloads/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.services.assured_workloads_service.AssuredWorkloadsServiceAsyncClient"
keywords:
  - "workload"
  - "updates"
  - "let"
  - "you"
  - "view"
  - "apply"
  - "so"
  - "workloads"
---

# Workload updates

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

Workload updates let you view and apply updates so workloads use the most recent control package configuration, and the feature is in Preview.

## Extended Definition

Workload updates let you view and apply updates so workloads use the most recent control package configuration, and the feature is in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/apply-updates](https://docs.cloud.google.com/assured-workloads/docs/apply-updates)
- [https://docs.cloud.google.com/assured-workloads/docs/overview](https://docs.cloud.google.com/assured-workloads/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.services.assured_workloads_service.AssuredWorkloadsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.services.assured_workloads_service.AssuredWorkloadsServiceAsyncClient)

## Supporting Pages

### Apply workload updates \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/apply-updates](https://docs.cloud.google.com/assured-workloads/docs/apply-updates)
- Source ID: `site-docs-reference-2`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported update types This feature supports viewing and applying the following types of updates on an Assured Workloads folder: Organization policy constraints : Any organization policy constraints that are applicable to your workload and enforced by Assured Workloads can be included in a workload update, with the following exceptions: gcp.resourceLocations gcp.restrictCmekCryptoKeyProjects Note: gcp.restrictServiceUsage updates are available in the Google Cloud console but are not available when using the Assured Workloads API.
- Apply workload updates This page describes how to enable, view, and apply workload updates for Assured Workloads folders.
- Then make the following request, replacing the placeholder values with your own: GET https:// [ ENDPOINT URI ] /v1/organizations/ [ ORGANIZATION ID ] /locations/ [ LOCATION ID ] /operations/ [ OPERATION ID ] For example: GET https://us-central1-assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-central1/operations/647b1c77-b9a5-45d2-965e-70a1e867fe5b If successful, you will receive a JSON response similar to the following example: { "name" : "organizations/919698298765/locations/us-central1/operations/647b1c77-b9a5-45d2-965e-70a1e867fe5b" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.assuredworkloads.v1.ApplyWorkloadUpdateOperationMetadata" , "updateName" : "organizations/919698298765/locations/us-central1/workloads/00-701ea036-7152-4781-a867-9f5/updates/edb84871-833b-45ec-9c00-c9b5c19d2d87" , "createTime" : "2024-10-01T13:33:09Z" "action" : "APPLY" }, "done" : true "response" : { "@type" : "type.googleapis.com/google.cloud.assuredworkloads.v1.ApplyWorkloadUpdateResponse" , "appliedUpdate" : { "name" : "organizations/531459884741/locations/us-central1/workloads/00-0b328e90-da70-431e-befc-a4a/updates/db556beb-ce66-4260-bd3b-28115f1ec300" , "state" : "APPLIED" , "createTime" : "2024-10-01T14:31:24.310323Z" , "updateTime" : "2024-10-01T14:34:30.855792Z" , "details" : { "orgPolicyUpdate" : { "appliedPolicy" : { "resource" : "folders/196232301850" , "constraint" : "constraints/compute.disableInstanceDataAccessApis" , "rule" : { "enforce" : true } }, "suggestedPolicy" : { "resource" : "folders/196232301850" , "constraint" : "constraints/compute.disableInstanceDataAccessApis" , "rule" : { "enforce" : false } } } } } } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Request body: { "name" : "organizations/ [ORGANIZATION ID] /locations/ [LOCATION ID] /workloads/ [WORKLOAD ID] /updates/ [UPDATE ID] " , "action" : "APPLY" } For example: POST https://us-central1-assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-central1/workloads/00-701ea036-7152-4781-a867-9f5/updates/edb84871-833b-45ec-9c00-c9b5c19d2d87:apply { "name" : "organizations/919698298765/locations/us-central1/workloads/00-701ea036-7152-4781-a867-9f5/updates/edb84871-833b-45ec-9c00-c9b5c19d2d87" , "action" : "APPLY" } If successful, you will receive a JSON response similar to the following example: { "name" : "organizations/919698298765/locations/us-central1/operations/647b1c77-b9a5-45d2-965e-70a1e867fe5b" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.assuredworkloads.v1.ApplyWorkloadUpdateOperationMetadata" , "update name" : "organizations/919698298765/locations/us-central1/workloads/00-701ea036-7152-4781-a867-9f5/updates/edb84871-833b-45ec-9c00-c9b5c19d2d87" , "create time" : "2024-10-01T14:34:30.290896Z" , "action" : "APPLY" } } To get the status of a long-running update operation, use the operation ID in the name value from the JSON response.

### Overview of Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/overview](https://docs.cloud.google.com/assured-workloads/docs/overview)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If a more recent configuration version is available, you can apply updates to the Assured Workloads folder to upgrade to the latest version.
- Assured Workloads capabilities Assured Workloads provides a variety of capabilities to help you meet your compliance and regulatory requirements, including the following: Regional data boundaries and regulatory data boundaries for compliance enforcement Personnel data access controls Encryption key management controls Compliance updates Monitoring for violations The following sections describe these capabilities.
- Overview of Assured Workloads Assured Workloads enables organizations in the private and public sectors to configure a sovereign data and access boundary with residency, access, and personnel controls for sensitive workloads in the cloud.
- These notifications include information about the Assured Workloads folder, audit logs, and affected organization policies to enable informed review and remediation of the causes for non-compliance.

### "Class AssuredWorkloadsServiceAsyncClient (2.2.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.services.assured_workloads_service.AssuredWorkloadsServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.services.assured_workloads_service.AssuredWorkloadsServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.assuredworkloads v1.types.AcknowledgeViolationResponse Response for violation acknowledgement common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create workload create workload ( request : typing .
- Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: organizations/{org id}/locations/{location id}/workloads/{workload id} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Returns Type Description google.cloud.assuredworkloads v1.types.Workload A Workload object for managing highly regulated workloads of cloud customers. violation path violation path ( organization : str , location : str , workload : str , violation : str ) - > str Returns a fully-qualified violation string. workload path workload path ( organization : str , location : str , workload : str ) - > str Returns a fully-qualified workload string.

