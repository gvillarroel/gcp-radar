---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.749Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "GKE on AWS Service Account-based Installation and Upgrade Access"
feature_slug: "gke-on-aws-service-account-based-installation-and-upgrade-access"
latest_feature_date: "2020-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade"
  - "https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/troubleshooting"
keywords:
  - "account"
  - "based"
  - "upgrade"
  - "installation"
  - "access"
---

# GKE on AWS Service Account-based Installation and Upgrade Access

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Installation and upgrade of Anthos GKE on AWS can be performed with any authenticated Google Cloud service account without requiring allowlist access.

## Extended Definition

Installation and upgrade of Anthos GKE on AWS can be performed with any authenticated Google Cloud service account without requiring allowlist access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade)
- [https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/troubleshooting](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/troubleshooting)

## Supporting Pages

### "Upgrade Cloud Service Mesh \_|\_ Cloud Service Mesh v1.21 \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Warning: GitOps tools (including Config Sync, Argo CD, Terraform, and Jenkins) may interfere with your Cloud Service Mesh installation, migration, or upgrade processes.
- Control plane customizations If you customized the previous installation, you need the same customizations when you upgrade to a new Cloud Service Mesh version or migrate from Istio.
- Deploying and redeploying workloads Your installation (or upgrade) isn't complete until you enable automatic sidecar proxy injection (auto-injection).
- Migrations from OSS Istio and upgrades follow the revision-based upgrade process (referred to as "canary upgrades" in the Istio documentation).

### "Upgrade Cloud Service Mesh \_|\_ Cloud Service Mesh v1.22 \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Warning: GitOps tools (including Config Sync, Argo CD, Terraform, and Jenkins) may interfere with your Cloud Service Mesh installation, migration, or upgrade processes.
- Control plane customizations If you customized the previous installation, you need the same customizations when you upgrade to a new Cloud Service Mesh version or migrate from Istio.
- Deploying and redeploying workloads Your installation (or upgrade) isn't complete until you enable automatic sidecar proxy injection (auto-injection).
- Migrations from OSS Istio and upgrades follow the revision-based upgrade process (referred to as "canary upgrades" in the Istio documentation).

### Troubleshoot common issues \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/troubleshooting](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/troubleshooting)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Forbidden user The following error occurs when your username does not have administrator access to your cluster: Error from server (Forbidden): users "administrator@example.com" is forbidden: User "system:serviceaccount:gke-connect:connect-agent-sa" cannot impersonate resource "users" in API group "" at the cluster scope You can configure additional users by passing the --admin-users flag when you create a cluster.
- If the output of the gcloud containers aws clusters describe and gcloud config get-value account don't match, run gcloud auth login and authenticate as the username with administrative access to the cluster.
- Cannot delete cluster If you receive an error similar to the following when you try to delete a cluster, your GKE Multi-Cloud API role might not exist: ERROR: (gcloud.container.aws.clusters.delete) FAILED PRECONDITION: Could not assume role "arn:aws:iam:: ACCOUNT NUMBER :role/gke123456-anthos-api-role" through service account "service-123456789@gcp-sa-gkemulticloud.iam.gserviceaccount.com".
- If the kubectl command is unresponsive, check the control plane component logs with Cloud Logging . kubectl exec, attach, and port-forward commands fail The kubectl exec , kubectl attach , and kubectl port-forward commands might fail with the message error: unable to upgrade connection when using Connect gateway.

