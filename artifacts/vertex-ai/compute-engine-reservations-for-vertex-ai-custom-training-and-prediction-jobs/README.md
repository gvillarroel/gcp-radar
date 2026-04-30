# Compute Engine reservations for Vertex AI custom training and prediction jobs

Product: Vertex AI
Feature slug: `compute-engine-reservations-for-vertex-ai-custom-training-and-prediction-jobs`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex AI now allows custom training and prediction jobs to consume GPU-backed Compute Engine reservations for greater resource availability; Vertex AI now supports attaching Compute Engine reservations to custom training and prediction jobs to increase capacity assurance, with preview availability for A2 and A3 machine series reservations.

## Lifecycle

- Latest feature date: 2025-03-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- auth
- authorization
- iam
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
