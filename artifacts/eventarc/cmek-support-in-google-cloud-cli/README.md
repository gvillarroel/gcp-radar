# CMEK support in Google Cloud CLI

Product: Eventarc
Feature slug: `cmek-support-in-google-cloud-cli`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Eventarc can use customer-managed encryption keys when configured through Google Cloud CLI.

## Lifecycle

- Latest feature date: 2022-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- constraint
- credential
- encrypt
- key
- kms
- logging
- policy
- token

## Official Evidence

- [https://docs.cloud.google.com/eventarc/docs/use-cmek](https://docs.cloud.google.com/eventarc/docs/use-cmek)
- [https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints](https://docs.cloud.google.com/eventarc/standard/docs/custom-constraints)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient](https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.services.eventarc.EventarcClient)
