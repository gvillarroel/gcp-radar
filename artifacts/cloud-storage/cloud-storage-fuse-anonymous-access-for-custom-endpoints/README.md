# Cloud Storage FUSE anonymous access for custom endpoints

Product: Cloud Storage
Feature slug: `cloud-storage-fuse-anonymous-access-for-custom-endpoints`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Storage FUSE can disable authentication on custom endpoints by using the --anonymous-access flag.

## Lifecycle

- Latest feature date: 2024-05-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- key
- logging
- permission
- token

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-config-file](https://docs.cloud.google.com/storage/docs/gcsfuse-config-file)
