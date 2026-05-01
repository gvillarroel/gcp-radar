# Key Visualizer heatmap for entity keys

Product: Datastore
Feature slug: `key-visualizer-heatmap-for-entity-keys`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Key Visualizer can visualize heatmap patterns for entity keys to help predict workload patterns.

## Lifecycle

- Latest feature date: 2023-08-07
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
- allow
- auth
- encrypt
- iam
- identity
- key
- kms
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- [https://docs.cloud.google.com/datastore/docs/concepts/entities](https://docs.cloud.google.com/datastore/docs/concepts/entities)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key)
