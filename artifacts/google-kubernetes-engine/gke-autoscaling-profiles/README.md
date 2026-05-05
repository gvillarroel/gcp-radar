# GKE Autoscaling profiles

Product: Google Kubernetes Engine
Feature slug: `gke-autoscaling-profiles`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Provides autoscaling profile settings for GKE clusters.

## Lifecycle

- Latest feature date: 2021-08-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/nemo-rl-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/scaling-rl-verl-gke)
