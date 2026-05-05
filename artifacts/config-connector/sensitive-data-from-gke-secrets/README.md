# Sensitive data from GKE Secrets

Product: Config Connector
Feature slug: `sensitive-data-from-gke-secrets`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Connector can configure Google Cloud resources using sensitive data stored in GKE Secrets.

## Lifecycle

- Latest feature date: 2020-01-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions))
- allow (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/secrets](https://docs.cloud.google.com/config-connector/docs/how-to/secrets)
