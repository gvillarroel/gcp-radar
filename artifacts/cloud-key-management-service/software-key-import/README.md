# Software key import

Product: Cloud Key Management Service
Feature slug: `software-key-import`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS supports importing key material into software-protected keys as a generally available feature; Cloud KMS supports importing key material into software-protected keys.

## Lifecycle

- Latest feature date: 2020-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys))
- key (evidence: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys))
- private (evidence: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys))
- security (evidence: [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys), [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key), [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-key](https://docs.cloud.google.com/kms/docs/create-key)
- [https://docs.cloud.google.com/kms/docs/creating-keys](https://docs.cloud.google.com/kms/docs/creating-keys)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys](https://docs.cloud.google.com/kms/docs/reference/inventory/rest/v1/projects.cryptoKeys)
