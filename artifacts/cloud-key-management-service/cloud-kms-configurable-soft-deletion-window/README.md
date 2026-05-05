# Cloud KMS configurable soft deletion window

Product: Cloud Key Management Service
Feature slug: `cloud-kms-configurable-soft-deletion-window`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS supports a configurable variable soft deletion window for cryptographic keys.

## Lifecycle

- Latest feature date: 2021-08-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key))
- key (evidence: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key)
- [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- [https://docs.cloud.google.com/kms/docs/hsm](https://docs.cloud.google.com/kms/docs/hsm)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
