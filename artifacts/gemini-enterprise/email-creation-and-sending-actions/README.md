# Email creation and sending actions

Product: Gemini Enterprise
Feature slug: `email-creation-and-sending-actions`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Users can create and send emails from actions.

## Lifecycle

- Latest feature date: 2025-07-31
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

- access (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- allow (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- auth (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- authorization (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- credential (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- iam (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- identity (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- key (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- logging (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- permission (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- policy (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- private (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- role (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- security (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))
- token (evidence: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config), [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control), [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts), [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores))

## Official Evidence

- [https://docs.cloud.google.com/gemini/enterprise/docs/access-control](https://docs.cloud.google.com/gemini/enterprise/docs/access-control)
- [https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores](https://docs.cloud.google.com/gemini/enterprise/docs/apps-data-stores)
- [https://docs.cloud.google.com/gemini/enterprise/docs/concepts](https://docs.cloud.google.com/gemini/enterprise/docs/concepts)
- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud/third-party-config)
