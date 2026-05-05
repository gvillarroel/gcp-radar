# Imagen restricted access feature

Product: Vertex AI
Feature slug: `imagen-restricted-access-feature`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Imagen on Vertex AI announced restricted access availability for additional GA features.

## Lifecycle

- Latest feature date: 2023-08-29
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

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- certificate (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- firewall (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy), [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control), [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- [https://docs.cloud.google.com/vertex-ai/docs/general/access-control](https://docs.cloud.google.com/vertex-ai/docs/general/access-control)
