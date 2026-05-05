# Custom job IDs in Storage Transfer Service

Product: Storage Transfer Service
Feature slug: `custom-job-ids-in-storage-transfer-service`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Storage Transfer Service jobs can now be created with custom job identifiers.

## Lifecycle

- Latest feature date: 2020-03-09
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

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- audit (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- constraint (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- logging (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- private (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))
- security (evidence: [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints), [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs), [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control)
- [https://docs.cloud.google.com/storage-transfer/docs/custom-constraints](https://docs.cloud.google.com/storage-transfer/docs/custom-constraints)
- [https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs](https://docs.cloud.google.com/storage-transfer/docs/monitor-transfer-jobs)
