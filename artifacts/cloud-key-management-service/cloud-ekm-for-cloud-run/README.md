# Cloud EKM for Cloud Run

Product: Cloud Key Management Service
Feature slug: `cloud-ekm-for-cloud-run`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud EKM supports Cloud Run.

## Lifecycle

- Latest feature date: 2022-01-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- authorization (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- certificate (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- encrypt (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- key (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- logging (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- secret (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- security (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))
- token (evidence: [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors), [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/key-management-service](https://docs.cloud.google.com/kms/docs/key-management-service)
- [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors)
