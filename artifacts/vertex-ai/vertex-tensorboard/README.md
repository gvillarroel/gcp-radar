# Vertex TensorBoard

Product: Vertex AI
Feature slug: `vertex-tensorboard`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Vertex TensorBoard is available as a preview feature for tracking, visualizing, and comparing machine learning experiments.

## Lifecycle

- Latest feature date: 2021-05-18
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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
- [https://docs.cloud.google.com/vertex-ai/docs/general/locations](https://docs.cloud.google.com/vertex-ai/docs/general/locations)
