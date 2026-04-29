# Control MCP use with organization policies

Product: Resource Manager
Feature slug: `control-mcp-use-with-organization-policies`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Organization policies using the gcp.managed.allowedMCPServices constraint are deprecated and replaced by IAM deny policies for controlling MCP use; deprecated on 2026-03-17.

## Lifecycle

- Latest feature date: 2026-02-15
- Deprecation date: 2026-03-17
- Status: deprecation_noted

## IAM

Explicit IAM evidence was found in the supporting documentation.

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- auth
- authorization
- constraint
- iam
- identity
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
