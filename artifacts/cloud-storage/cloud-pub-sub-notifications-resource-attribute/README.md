# Cloud Pub/Sub Notifications resource attribute

Product: Cloud Storage
Feature slug: `cloud-pub-sub-notifications-resource-attribute`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The resource attribute in Cloud Pub/Sub Notifications for Cloud Storage identifies the notified resource in subscription data; deprecated on 2018-06-01.

## Lifecycle

- Latest feature date: 2017-11-14
- Deprecation date: 2018-06-01
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- allow (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- auth (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- authorization (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- encrypt (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- iam (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- key (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- kms (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- logging (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- permission (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- policy (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- secret (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))
- token (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil), [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1), [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting), [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys))

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil](https://docs.cloud.google.com/storage/docs/access-control/iam-gsutil)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/json_api/v1](https://docs.cloud.google.com/storage/docs/json_api/v1)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
