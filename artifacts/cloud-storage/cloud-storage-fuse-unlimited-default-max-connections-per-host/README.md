# Cloud Storage FUSE unlimited default max connections per host

Product: Cloud Storage
Feature slug: `cloud-storage-fuse-unlimited-default-max-connections-per-host`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Storage FUSE sets max-conns-per-host to an unlimited default value subject to machine limits.

## Lifecycle

- Latest feature date: 2024-05-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- credential
- key
- logging
- permission
- token

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/cli-options)
- [https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file](https://docs.cloud.google.com/storage/docs/cloud-storage-fuse/config-file)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-cli](https://docs.cloud.google.com/storage/docs/gcsfuse-cli)
- [https://docs.cloud.google.com/storage/docs/gcsfuse-config-file](https://docs.cloud.google.com/storage/docs/gcsfuse-config-file)
