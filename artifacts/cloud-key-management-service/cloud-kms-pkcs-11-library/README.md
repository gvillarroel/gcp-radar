# Cloud KMS PKCS #11 library

Product: Cloud Key Management Service
Feature slug: `cloud-kms-pkcs-11-library`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud KMS provides a library conforming to the PKCS #11 standard for use with existing PKCS #11 applications.

## Lifecycle

- Latest feature date: 2021-09-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- key (evidence: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))
- security (evidence: [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool), [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache), [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/reference/cng-signtool](https://docs.cloud.google.com/kms/docs/reference/cng-signtool)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache](https://docs.cloud.google.com/kms/docs/reference/pkcs11-apache)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign](https://docs.cloud.google.com/kms/docs/reference/pkcs11-jsign)
- [https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool](https://docs.cloud.google.com/kms/docs/reference/pkcs11-tool)
