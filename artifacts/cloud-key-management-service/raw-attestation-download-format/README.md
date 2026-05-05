# Raw attestation download format

Product: Cloud Key Management Service
Feature slug: `raw-attestation-download-format`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS attestations downloaded from the console use raw format instead of base64 encoding.

## Lifecycle

- Latest feature date: 2018-09-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/retrieve-public-key](https://docs.cloud.google.com/kms/docs/retrieve-public-key), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/retrieve-public-key](https://docs.cloud.google.com/kms/docs/retrieve-public-key), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/retrieve-public-key](https://docs.cloud.google.com/kms/docs/retrieve-public-key), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- key (evidence: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/retrieve-public-key](https://docs.cloud.google.com/kms/docs/retrieve-public-key), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/retrieve-public-key](https://docs.cloud.google.com/kms/docs/retrieve-public-key), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- security (evidence: [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key), [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key), [https://docs.cloud.google.com/kms/docs/retrieve-public-key](https://docs.cloud.google.com/kms/docs/retrieve-public-key), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/attest-key](https://docs.cloud.google.com/kms/docs/attest-key)
- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool)
- [https://docs.cloud.google.com/kms/docs/retrieve-public-key](https://docs.cloud.google.com/kms/docs/retrieve-public-key)
