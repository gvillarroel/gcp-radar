# Model Context Protocol (MCP) support in API hub

Product: Apigee API hub
Feature slug: `model-context-protocol-mcp-support-in-api-hub`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds MCP as a first-class API style in API hub, including registration, management, and tool extraction for MCP APIs.

## Lifecycle

- Latest feature date: 2025-12-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- audit (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- authorization (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- certificate (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- credential (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- encrypt (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- firewall (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- private (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))
- token (evidence: [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis), [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools), [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools](https://docs.cloud.google.com/apigee/docs/apihub/manage-mcp-tools)
- [https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis](https://docs.cloud.google.com/apigee/docs/apihub/register-mcp-apis)
