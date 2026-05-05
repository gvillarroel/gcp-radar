# Workflow Templates YAML import/export

Product: Dataproc
Feature slug: `workflow-templates-yaml-import-export`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Workflow Templates YAML import and export lets users import and export Dataproc workflow templates directly from YAML files with the gcloud CLI.

## Lifecycle

- Latest feature date: 2018-07-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- allow (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- certificate (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- credential (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- key (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- kms (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- logging (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- policy (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))
- token (evidence: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview), [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ListWorkflowTemplatesResponse)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog)
