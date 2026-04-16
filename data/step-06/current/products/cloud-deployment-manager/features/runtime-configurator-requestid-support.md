---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.980Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Runtime Configurator requestId support"
feature_slug: "runtime-configurator-requestid-support"
latest_feature_date: "2016-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop"
keywords:
  - "runtime"
  - "configurator"
  - "requestid"
  - "supports"
  - "optional"
  - "field"
  - "create"
  - "requests"
---

# Runtime Configurator requestId support

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

The Runtime Configurator API supports an optional requestId field on create requests to ensure uniqueness.

## Extended Definition

The Runtime Configurator API supports an optional requestId field on create requests to ensure uniqueness.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)

## Supporting Pages

### Deployments: patch \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/patch)
- Source ID: `site-api-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from. targetId unsigned long [Output Only] The unique target ID, which identifies a specific incarnation of the target resource. status string [Output Only] The status of the operation, which can be one of the following: PENDING , RUNNING , or DONE . statusMessage string [Output Only] An optional textual description of the current status of the operation. user string [Output Only] User who requested the operation, for example: user@example.com . progress integer [Output Only] An optional progress indicator that ranges from 0 to 100.
- This property is optional. error.errors[]. message string [Output Only] An optional, human-readable error message. warnings[] list [Output Only] If warning messages are generated during processing of the operation, this field will be populated. warnings[]. code string [Output Only] A warning code, if applicable.
- It is not settable as a field in the request body. description string [Output Only] A textual description of the operation, which is set when the operation is created.
- It is not settable as a field in the request body. clientOperationId string [Output Only] The value of requestId if you provided it in the request.

### "Deployments: cancelPreview \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview)
- Source ID: `site-api-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from. targetId unsigned long [Output Only] The unique target ID, which identifies a specific incarnation of the target resource. status string [Output Only] The status of the operation, which can be one of the following: PENDING , RUNNING , or DONE . statusMessage string [Output Only] An optional textual description of the current status of the operation. user string [Output Only] User who requested the operation, for example: user@example.com . progress integer [Output Only] An optional progress indicator that ranges from 0 to 100.
- This property is optional. error.errors[]. message string [Output Only] An optional, human-readable error message. warnings[] list [Output Only] If warning messages are generated during processing of the operation, this field will be populated. warnings[]. code string [Output Only] A warning code, if applicable.
- It is not settable as a field in the request body. description string [Output Only] A textual description of the operation, which is set when the operation is created.
- It is not settable as a field in the request body. clientOperationId string [Output Only] The value of requestId if you provided it in the request.

### Deployments: stop \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)
- Source ID: `site-api-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from. targetId unsigned long [Output Only] The unique target ID, which identifies a specific incarnation of the target resource. status string [Output Only] The status of the operation, which can be one of the following: PENDING , RUNNING , or DONE . statusMessage string [Output Only] An optional textual description of the current status of the operation. user string [Output Only] User who requested the operation, for example: user@example.com . progress integer [Output Only] An optional progress indicator that ranges from 0 to 100.
- This property is optional. error.errors[]. message string [Output Only] An optional, human-readable error message. warnings[] list [Output Only] If warning messages are generated during processing of the operation, this field will be populated. warnings[]. code string [Output Only] A warning code, if applicable.
- It is not settable as a field in the request body. description string [Output Only] A textual description of the operation, which is set when the operation is created.
- It is not settable as a field in the request body. clientOperationId string [Output Only] The value of requestId if you provided it in the request.

