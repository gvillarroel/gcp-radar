# Cloud Datastore API v1

Product: Datastore
Feature slug: `cloud-datastore-api-v1`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Datastore API v1 is the general Datastore API for application access.

## Lifecycle

- Latest feature date: 2016-08-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential
- key
- logging
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial](https://docs.cloud.google.com/datastore/docs/datastore-api-tutorial)
- [https://docs.cloud.google.com/datastore/docs/reference/admin/rest](https://docs.cloud.google.com/datastore/docs/reference/admin/rest)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest](https://docs.cloud.google.com/python/docs/reference/datastore/latest)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
