# Resource Manager remote MCP server

Product: Resource Manager
Feature slug: `resource-manager-remote-mcp-server`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The remote MCP server lets you search for and identify Google Cloud projects you can access before configuring resources.

## Lifecycle

- Latest feature date: 2026-02-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- auth
- credential
- key
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/mcp/manage-mcp-servers](https://docs.cloud.google.com/mcp/manage-mcp-servers)
- [https://docs.cloud.google.com/mcp/overview](https://docs.cloud.google.com/mcp/overview)
- [https://docs.cloud.google.com/mcp/supported-products](https://docs.cloud.google.com/mcp/supported-products)
