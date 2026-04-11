---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.239Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Seccomp Profiles"
feature_slug: "seccomp-profiles"
latest_feature_date: "2025-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/release-notes"
keywords:
  - "system call filtering"
  - "runtime seccomp profile"
  - "Seccomp Profiles"
  - "container system calls"
  - "seccomp profile"
  - "kubernetes security context"
  - "runtime component hardening"
  - "seccomp"
---

# Seccomp Profiles

Product: Apigee hybrid
Coverage: LOW

## Step 02 Summary

Apigee Hybrid supports Seccomp Profiles for runtime components to limit container system calls to the host kernel, improving container security posture.

## Extended Definition

Apigee Hybrid supports Seccomp Profiles for runtime components to limit container system calls to the host kernel, improving container security posture.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)

## Supporting Pages

### Configuration property reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref](https://docs.cloud.google.com/apigee/docs/hybrid/latest/config-prop-ref)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Configure Seccomp profiles for pod security . mintTaskScheduler.gsa Advanced Introduced in version: 1.15.1 Default value: None Chart: apigee-org The email address of the apigee-mint-task-scheduler Google IAM service account (GSA) to associate with the corresponding Kubernetes service account when enabling Workload Identity on GKE clusters using Helm charts.
- See Configure Seccomp profiles for pod security . envs[].serviceAccountPaths.runtime Basic Introduced in version: 1.4.0 Default value: None Chart: apigee-env Path to file on local system to a Google Service Account key with the Cloud Trace Agent role, usually the apigee-runtime service account.
- See Configure Seccomp profiles for pod security . cassandra.storage.capacity Basic Introduced in version: 1.0.0 Default value: 10Gi Chart: apigee-datastore Required if storage.storageclass is specified Specifies the disk size required, in mebibytes (Mi) or gibibytes (Gi).
- See Configure Seccomp profiles for pod security . metrics.adapter.image.pullPolicy Advanced Introduced in version: 1.8.1 Default value: IfNotPresent Chart: apigee-telemetry Determines when kubelet pulls the pod's Docker image.

### Apigee hybrid release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/release-notes](https://docs.cloud.google.com/apigee/docs/hybrid/release-notes)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information on container image support in Apigee hybrid releases, see Apigee release process . v1.16.0 Feature Seccomp Profiles Apigee Hybrid now offers the capability to apply Seccomp Profiles to your runtime components, significantly enhancing the security posture of your deployment.
- To enable the feature, see Configure Seccomp profiles for pod security . v1.16.0 Feature apigee-guardrails service account In v1.16.0, Apigee Hybrid introduces an apigee-guardrails Google IAM service account.
- Seccomp profiles are not enabled by default.

