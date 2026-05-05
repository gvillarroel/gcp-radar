# Artifact Registry region expansion to africa-south1

Product: Artifact Registry
Feature slug: `artifact-registry-region-expansion-to-africa-south1`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry is available in the Africa-South1 (Johannesburg) region.

## Lifecycle

- Latest feature date: 2024-01-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints))
- auth (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints))
- constraint (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints))
- secret (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/custom-constraints](https://docs.cloud.google.com/artifact-registry/docs/custom-constraints)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest](https://docs.cloud.google.com/artifact-registry/docs/reference/rest)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
