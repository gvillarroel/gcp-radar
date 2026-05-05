# Cloud EKM with VPC

Product: Cloud Key Management Service
Feature slug: `cloud-ekm-with-vpc`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud EKM with VPC lets you access your external key manager through a private endpoint over a virtual private network; Cloud EKM with VPC lets you access your external key manager through a private endpoint over a virtual private network.

## Lifecycle

- Latest feature date: 2022-03-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- auth (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- iam (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- identity (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- key (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- kms (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- permission (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- policy (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- private (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- role (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))
- security (evidence: [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm), [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection), [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key), [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors))

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/create-ekm-connection](https://docs.cloud.google.com/kms/docs/create-ekm-connection)
- [https://docs.cloud.google.com/kms/docs/create-external-key](https://docs.cloud.google.com/kms/docs/create-external-key)
- [https://docs.cloud.google.com/kms/docs/ekm](https://docs.cloud.google.com/kms/docs/ekm)
- [https://docs.cloud.google.com/kms/docs/reference/ekm_errors](https://docs.cloud.google.com/kms/docs/reference/ekm_errors)
