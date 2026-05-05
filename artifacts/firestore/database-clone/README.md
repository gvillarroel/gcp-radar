# Database clone

Product: Firestore
Feature slug: `database-clone`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Firestore database cloning is available at the General Availability level; Firestore databases can be cloned into a new database from a selected timestamp.

## Lifecycle

- Latest feature date: 2025-10-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek))
- encrypt (evidence: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek))
- iam (evidence: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek))
- identity (evidence: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek))
- key (evidence: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek))
- kms (evidence: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek))
- permission (evidence: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek))
- security (evidence: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases), [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek), [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/cmek](https://docs.cloud.google.com/firestore/docs/cmek)
- [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- [https://docs.cloud.google.com/firestore/native/docs/cmek](https://docs.cloud.google.com/firestore/native/docs/cmek)
