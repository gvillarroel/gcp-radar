# API operation management without valid specifications

Product: Apigee API hub
Feature slug: `api-operation-management-without-valid-specifications`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Operations entity now supports adding, editing, and deleting operations for an API version even without a valid or parseable specification file.

## Lifecycle

- Latest feature date: 2025-04-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
