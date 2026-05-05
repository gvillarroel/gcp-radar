# MCP use control with organization policies

Product: Firestore
Feature slug: `mcp-use-control-with-organization-policies`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The gcp.managed.allowedMCPServices organization policy constraint for controlling MCP use is deprecated in favor of IAM deny policies; deprecated on 2026-03-17.

## Lifecycle

- Latest feature date: 2026-02-17
- Deprecation date: 2026-03-17
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- allow (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- auth (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- authorization (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- constraint (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- encrypt (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- iam (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- identity (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- key (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- permission (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- policy (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- role (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))
- security (evidence: [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam), [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization), [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control))

## Official Evidence

- [https://docs.cloud.google.com/mcp/access-control](https://docs.cloud.google.com/mcp/access-control)
- [https://docs.cloud.google.com/mcp/control-mcp-use-iam](https://docs.cloud.google.com/mcp/control-mcp-use-iam)
- [https://docs.cloud.google.com/mcp/control-mcp-use-organization](https://docs.cloud.google.com/mcp/control-mcp-use-organization)
