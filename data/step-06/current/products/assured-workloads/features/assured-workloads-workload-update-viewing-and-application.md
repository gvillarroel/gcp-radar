---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:44.400Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Assured Workloads workload update viewing and application"
feature_slug: "assured-workloads-workload-update-viewing-and-application"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ApplyWorkloadUpdateResponse"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences"
  - "https://docs.cloud.google.com/assured-workloads/docs/apply-updates"
keywords:
  - "viewing"
  - "update"
  - "users"
  - "workload"
  - "application"
  - "workloads"
  - "assured"
  - "and"
---

# Assured Workloads workload update viewing and application

Product: Assured Workloads
Coverage: LOW

## Step 02 Summary

Assured Workloads users can now view and apply workload updates to adopt the latest control package configuration, initially in Preview.

## Extended Definition

Assured Workloads users can now view and apply workload updates to adopt the latest control package configuration, initially in Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ApplyWorkloadUpdateResponse](https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ApplyWorkloadUpdateResponse)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences](https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences)
- [https://docs.cloud.google.com/assured-workloads/docs/apply-updates](https://docs.cloud.google.com/assured-workloads/docs/apply-updates)

## Supporting Pages

### ApplyWorkloadUpdateResponse \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ApplyWorkloadUpdateResponse](https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/ApplyWorkloadUpdateResponse)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Assured Workloads Reference Send feedback ApplyWorkloadUpdateResponse Stay organized with collections Save and categorize content based on your preferences.
- It servces the same purpose as the orgpolicy.v2.Policy object but with functionality that is limited to what is supported by Assured Workloads(e.g. only one rule under one OrgPolicy object, no conditions, etc).
- Format: organizations/{organization}/locations/{location}/workloads/{workload}/updates/{update} state enum ( State ) Output only.
- OrgPolicyUpdate Represents an update for an org policy control applied on an Assured Workload resource.

### "US Data Boundary for Healthcare and Life Sciences \_|\_ Assured Workloads\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences](https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn how to create an Assured Workloads folder Learn about the US Data Boundary for Healthcare and Life Sciences with Support control package Understand Assured Workloads pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prerequisites To remain compliant as a user of the US Data Boundary for Healthcare and Life Sciences control package, verify that you satisfy and adhere to the following prerequisites: Create a US Data Boundary for Healthcare and Life Sciences folder using Assured Workloads and deploy your HIPAA or HITRUST workloads only in that folder.
- These split boundaries are accessible by Google personnel for technical support and debugging purposes, and are not subject to administrative access data controls in Assured Workloads.
- These split boundaries are accessible by Google personnel for technical support and debugging purposes, and are not subject to administrative access data controls in Assured Workloads.

### Apply workload updates \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/apply-updates](https://docs.cloud.google.com/assured-workloads/docs/apply-updates)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported update types This feature supports viewing and applying the following types of updates on an Assured Workloads folder: Organization policy constraints : Any organization policy constraints that are applicable to your workload and enforced by Assured Workloads can be included in a workload update, with the following exceptions: gcp.resourceLocations gcp.restrictCmekCryptoKeyProjects Note: gcp.restrictServiceUsage updates are available in the Google Cloud console but are not available when using the Assured Workloads API.
- Then make the following request, replacing the placeholder values with your own: GET https:// [ ENDPOINT URI ] /v1/organizations/ [ ORGANIZATION ID ] /locations/ [ LOCATION ID ] /operations/ [ OPERATION ID ] For example: GET https://us-central1-assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-central1/operations/647b1c77-b9a5-45d2-965e-70a1e867fe5b If successful, you will receive a JSON response similar to the following example: { "name" : "organizations/919698298765/locations/us-central1/operations/647b1c77-b9a5-45d2-965e-70a1e867fe5b" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.assuredworkloads.v1.ApplyWorkloadUpdateOperationMetadata" , "updateName" : "organizations/919698298765/locations/us-central1/workloads/00-701ea036-7152-4781-a867-9f5/updates/edb84871-833b-45ec-9c00-c9b5c19d2d87" , "createTime" : "2024-10-01T13:33:09Z" "action" : "APPLY" }, "done" : true "response" : { "@type" : "type.googleapis.com/google.cloud.assuredworkloads.v1.ApplyWorkloadUpdateResponse" , "appliedUpdate" : { "name" : "organizations/531459884741/locations/us-central1/workloads/00-0b328e90-da70-431e-befc-a4a/updates/db556beb-ce66-4260-bd3b-28115f1ec300" , "state" : "APPLIED" , "createTime" : "2024-10-01T14:31:24.310323Z" , "updateTime" : "2024-10-01T14:34:30.855792Z" , "details" : { "orgPolicyUpdate" : { "appliedPolicy" : { "resource" : "folders/196232301850" , "constraint" : "constraints/compute.disableInstanceDataAccessApis" , "rule" : { "enforce" : true } }, "suggestedPolicy" : { "resource" : "folders/196232301850" , "constraint" : "constraints/compute.disableInstanceDataAccessApis" , "rule" : { "enforce" : false } } } } } } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method, URL, and query parameters: GET https:// [ ENDPOINT URI ] /v1/organizations/ [ ORGANIZATION ID ] /locations/ [ LOCATION ID ] /workloads/ [ WORKLOAD ID ] /updates?page size = [ PAGE SIZE ] & page token = [ PAGE TOKEN ] Replace the following placeholder values with your own: ENDPOINT URI : The Assured Workloads service endpoint URI .
- This permission is included in the Assured Workloads Reader ( roles/assuredworkloads.reader ) , Assured Workloads Editor ( roles/assuredworkloads.editor ) , and Assured Workloads Admin ( roles/assuredworkloads.admin ) predefined roles. assuredworkloads.updates.update on the target workload to apply available updates.

