# Pub/Sub notifications for external-to-Cloud Storage transfer jobs

Product: Storage Transfer Service
Feature slug: `pub-sub-notifications-for-external-to-cloud-storage-transfer-jobs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The service now supports Pub/Sub notifications for transfer jobs that move data from external cloud providers to Cloud Storage.

## Lifecycle

- Latest feature date: 2020-03-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication), [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location))
- auth (evidence: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication), [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location))
- authorization (evidence: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication), [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location))
- iam (evidence: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication), [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location))
- permission (evidence: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication), [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location))
- role (evidence: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication), [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location))
- token (evidence: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google), [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication), [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location))

## Official Evidence

- [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-google](https://docs.cloud.google.com/storage-transfer/docs/event-driven-google)
- [https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location](https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location)
