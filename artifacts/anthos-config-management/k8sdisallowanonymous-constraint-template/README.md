# K8sDisallowAnonymous constraint template

Product: Anthos Config Management
Feature slug: `k8sdisallowanonymous-constraint-template`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This constraint template disallows anonymous access configurations in Kubernetes resources.

## Lifecycle

- Latest feature date: 2022-02-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- iam (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
