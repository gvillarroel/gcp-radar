# Post-startup scripts

Product: Colab Enterprise
Feature slug: `post-startup-scripts`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Post-startup scripts let you run custom tasks after a Colab Enterprise runtime starts; Post-startup scripts let you run custom tasks after a Colab Enterprise runtime starts.

## Lifecycle

- Latest feature date: 2025-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- auth (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- authorization (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- constraint (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- encrypt (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- iam (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- key (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- kms (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- permission (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- policy (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- role (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))
- token (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown), [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template))

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/custom-constraints](https://docs.cloud.google.com/colab/docs/custom-constraints)
- [https://docs.cloud.google.com/colab/docs/idle-shutdown](https://docs.cloud.google.com/colab/docs/idle-shutdown)
- [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template)
