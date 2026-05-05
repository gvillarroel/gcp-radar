# Access policies for Eventarc Advanced bus publishing

Product: Eventarc
Feature slug: `access-policies-for-eventarc-advanced-bus-publishing`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Eventarc Advanced lets publishers use access policies to control access when publishing event messages to a bus.

## Lifecycle

- Latest feature date: 2025-11-11
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

- access (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- audit (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- constraint (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- encrypt (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- iam (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- identity (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- key (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- logging (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- permission (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- policy (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- private (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- role (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))
- token (evidence: [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition), [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control), [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing))

## Official Evidence

- [https://docs.cloud.google.com/eventarc/docs/access-control](https://docs.cloud.google.com/eventarc/docs/access-control)
- [https://docs.cloud.google.com/eventarc/standard/docs/access-control](https://docs.cloud.google.com/eventarc/standard/docs/access-control)
- [https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing](https://docs.cloud.google.com/eventarc/standard/docs/audit-logs-publishing)
- [https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition](https://docs.cloud.google.com/eventarc/standard/docs/choose-product-edition)
