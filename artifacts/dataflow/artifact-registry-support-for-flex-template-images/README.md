# Artifact Registry support for Flex Template images

Product: Dataflow
Feature slug: `artifact-registry-support-for-flex-template-images`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry support lets Dataflow store Flex Template images in Artifact Registry.

## Lifecycle

- Latest feature date: 2021-07-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))
- certificate (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))
- credential (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))
- key (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))
- policy (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))
- role (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))
- secret (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates), [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates), [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/configuring-flex-templates)
- [https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates](https://docs.cloud.google.com/dataflow/docs/guides/templates/using-flex-templates)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.flex_templates_service.FlexTemplatesServiceAsyncClient)
