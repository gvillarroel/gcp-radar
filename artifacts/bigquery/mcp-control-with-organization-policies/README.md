# MCP control with organization policies

Product: BigQuery
Feature slug: `mcp-control-with-organization-policies`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

BigQuery is deprecating the use of organization policies with the gcp.managed.allowedMCPServices constraint to control MCP use in favor of IAM deny policies; deprecated on 2026-03-17.

## Lifecycle

- Latest feature date: 2026-02-17
- Deprecation date: 2026-03-17
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- allow (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- constraint (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- iam (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- identity (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- permission (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- policy (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- role (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- security (evidence: [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation), [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))

## Official Evidence

- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- [https://docs.cloud.google.com/mcp/deprecations](https://docs.cloud.google.com/mcp/deprecations)
- [https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation](https://docs.cloud.google.com/mcp/organization-control-mcp-servers-deprecation)
