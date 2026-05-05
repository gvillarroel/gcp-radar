# Metadata backup and restore

Product: Dataproc Metastore
Feature slug: `metadata-backup-and-restore`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Metadata backup and restore supports cross-service restoration of Dataproc Metastore metadata; Metadata backup and restore lets Dataproc Metastore back up and restore service metadata.

## Lifecycle

- Latest feature date: 2021-07-30
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

- access (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc))
- allow (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc))
- audit (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc))
- iam (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc))
- logging (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc))
- permission (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc))
- policy (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc))
- role (evidence: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata), [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest), [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rest)
- [https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc](https://docs.cloud.google.com/dataproc-metastore/docs/reference/rpc)
- [https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting](https://docs.cloud.google.com/dataproc-metastore/docs/troubleshooting)
