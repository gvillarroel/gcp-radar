# Force option for API deletion with child resources

Product: Apigee API hub
Feature slug: `force-option-for-api-deletion-with-child-resources`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

API hub now supports a force delete option to remove an API and its child resources in a single step.

## Lifecycle

- Latest feature date: 2024-06-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- secret (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues), [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart), [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits](https://docs.cloud.google.com/apigee/docs/api-platform/reference/limits)
- [https://docs.cloud.google.com/apigee/docs/release/known-issues](https://docs.cloud.google.com/apigee/docs/release/known-issues)
