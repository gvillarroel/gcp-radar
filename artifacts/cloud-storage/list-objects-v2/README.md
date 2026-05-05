# List Objects V2

Product: Cloud Storage
Feature slug: `list-objects-v2`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

List Objects V2 provides an updated object listing capability for Cloud Storage.

## Lifecycle

- Latest feature date: 2021-11-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))
- audit (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))
- iam (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))
- identity (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))
- logging (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))
- permission (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))
- policy (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))
- private (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))
- role (evidence: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders))

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects)
