# Key Visualizer for Datastore

Product: Datastore
Feature slug: `key-visualizer-for-datastore`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Key Visualizer for Datastore provides heatmap-style analysis of Datastore key and performance patterns.

## Lifecycle

- Latest feature date: 2021-12-15
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
- encrypt
- iam
- identity
- key
- kms
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.key.Key)
