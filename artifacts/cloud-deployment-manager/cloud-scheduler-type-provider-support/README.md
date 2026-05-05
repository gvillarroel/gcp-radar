# Cloud Scheduler type provider support

Product: Cloud Deployment Manager
Feature slug: `cloud-scheduler-type-provider-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Deployment Manager supports managing Cloud Scheduler jobs through the gcp-types/cloudscheduler-v1 type provider.

## Lifecycle

- Latest feature date: 2020-04-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects))
- iam (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects))
- key (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects))
- kms (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects))
- policy (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects))
- private (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects))
- role (evidence: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types), [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects))

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/describing-listing-deleting-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects](https://docs.cloud.google.com/deployment-manager/docs/configuration/sharing-types-across-projects)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
