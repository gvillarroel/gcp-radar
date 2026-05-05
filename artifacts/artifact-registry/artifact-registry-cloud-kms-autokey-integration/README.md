# Artifact Registry Cloud KMS Autokey integration

Product: Artifact Registry
Feature slug: `artifact-registry-cloud-kms-autokey-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry can now be used with Cloud KMS Autokey for customer-managed encryption key operations.

## Lifecycle

- Latest feature date: 2025-02-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr))
- encrypt (evidence: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr))
- iam (evidence: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr))
- key (evidence: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr))
- kms (evidence: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr))
- permission (evidence: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr))
- role (evidence: [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/cmek](https://docs.cloud.google.com/artifact-registry/docs/cmek)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.operations/get)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
