# Pub/Sub schema updates

Product: Pub/Sub
Feature slug: `pub-sub-schema-updates`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Pub/Sub schemas can be updated after creation.

## Lifecycle

- Latest feature date: 2023-03-13
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

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- audit (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- auth (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- iam (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- identity (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- key (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- kms (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- permission (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- policy (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- role (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))
- token (evidence: [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription), [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control), [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic))

## Official Evidence

- [https://docs.cloud.google.com/pubsub/docs/access-control](https://docs.cloud.google.com/pubsub/docs/access-control)
- [https://docs.cloud.google.com/pubsub/docs/associate-schema-topic](https://docs.cloud.google.com/pubsub/docs/associate-schema-topic)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_topic)
