# GKE on AWS Workload Identity

Product: Anthos clusters on AWS (previous generation)
Feature slug: `gke-on-aws-workload-identity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Workload Identity enables binding Kubernetes service accounts to AWS IAM accounts and assigning per-workload IAM roles for fine-grained, least-privilege access.

## Lifecycle

- Latest feature date: 2020-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
