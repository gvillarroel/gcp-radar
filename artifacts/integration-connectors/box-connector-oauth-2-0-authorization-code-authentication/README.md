# Box connector OAuth 2.0 authorization code authentication

Product: Integration Connectors
Feature slug: `box-connector-oauth-2-0-authorization-code-authentication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Box connector supports OAuth 2.0 authorization code authentication.

## Lifecycle

- Latest feature date: 2023-04-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))
- auth (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))
- authorization (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))
- credential (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))
- key (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))
- logging (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))
- private (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))
- secret (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))
- token (evidence: [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure), [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure))

## Official Evidence

- [https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure)
- [https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure](https://docs.cloud.google.com/integration-connectors/docs/connectors/dropbox/configure)
