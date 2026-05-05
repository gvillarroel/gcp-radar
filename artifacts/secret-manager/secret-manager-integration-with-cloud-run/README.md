# Secret Manager integration with Cloud Run

Product: Secret Manager
Feature slug: `secret-manager-integration-with-cloud-run`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run added UI, command line, and YAML support for using Secret Manager secrets in Preview.

## Lifecycle

- Latest feature date: 2021-05-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))
- audit (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))
- auth (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))
- authorization (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))
- key (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))
- logging (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))
- policy (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))
- secret (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))
- token (evidence: [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets), [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version), [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart), [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets))

## Official Evidence

- [https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets](https://docs.cloud.google.com/secret-manager/docs/add-labels-to-secrets)
- [https://docs.cloud.google.com/secret-manager/docs/add-secret-version](https://docs.cloud.google.com/secret-manager/docs/add-secret-version)
- [https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart](https://docs.cloud.google.com/secret-manager/docs/create-secret-quickstart)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets)
