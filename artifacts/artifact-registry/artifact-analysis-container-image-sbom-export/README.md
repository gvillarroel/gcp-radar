# Artifact Analysis container image SBOM export

Product: Artifact Registry
Feature slug: `artifact-analysis-container-image-sbom-export`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Analysis now supports exporting consolidated SBOMs for scanned Artifact Registry containers in SPDX format, with support for ingesting external SPDX or CycloneDX SBOMs.

## Lifecycle

- Latest feature date: 2023-08-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- logging
- security

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/analysis](https://docs.cloud.google.com/artifact-registry/docs/analysis)
- [https://docs.cloud.google.com/artifact-registry/docs/docker](https://docs.cloud.google.com/artifact-registry/docs/docker)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers](https://docs.cloud.google.com/artifact-registry/docs/docker/migrate-external-containers)
