# Config Sync

Product: Google Kubernetes Engine
Feature slug: `config-sync`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Synchronizes Kubernetes configuration to GKE clusters from source control or configuration files; GKE can manage Kubernetes deployments using configuration files stored in a Git repository.

## Lifecycle

- Latest feature date: 2021-07-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow), [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-autopilot-privileged-workloads)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-developer-workflow)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/modern-cicd-gke-user-guide)
