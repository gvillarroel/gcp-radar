---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.697Z"
product_name: "Anthos Attached Clusters"
product_slug: "anthos-attached-clusters"
feature_name: "Improved cluster attachment workflow"
feature_slug: "improved-cluster-attachment-workflow"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization"
keywords:
  - "attach an existing cluster"
  - "registration command flow"
  - "gcloud container attached clusters"
  - "cluster registration to fleet"
  - "cluster onboarding flow"
  - "cluster attach flow"
  - "attach workflow"
  - "cluster attachment workflow"
---

# Improved cluster attachment workflow

Product: Anthos Attached Clusters
Coverage: HIGH

## Step 02 Summary

Simplified the process for attaching clusters to Google Cloud infrastructure in the current Anthos Attached Clusters generation.

## Extended Definition

Anthos Attached Clusters attachment workflow defines how to onboard an existing external Kubernetes, AKS, or EKS cluster into Google Cloud by using `gcloud container attached clusters register` after preparing the cluster context (for example from `kubectl config current-context`) so it can be registered to a Fleet. The workflow also supports post-attachment updates through `gcloud container attached clusters update`, and includes optional attachment-related settings such as workload logging (`--logging`) and Binary Authorization mode (`--binauthz-evaluation-mode=PROJECT SINGLETON POLICY ENFORCE`), with optional issuer-mode variants during registration.

## Evidence Summary

These Google Cloud docs provide the canonical CLI commands and parameters for registering and updating attached clusters, including optional flags used during the cluster attachment workflow.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization)

## Supporting Pages

### "Attach your CNCF conformant cluster \_|\_ GKE attached clusters \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/generic/how-to/attach-cluster)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: STRONG
- Re-rank rationale: This page is a dedicated how-to guide for attaching CNCF-conformant clusters to GKE attached clusters, including supported clusters, prerequisites, and required parameters, which directly defines the attachment process.

Evidence snippets:
- Run this command to extract your cluster's kubeconfig context and store it in the KUBECONFIG CONTEXT environment variable: KUBECONFIG CONTEXT = $( kubectl config current-context ) Use the gcloud container attached clusters register command to register the cluster: gcloud container attached clusters register CLUSTER NAME \ --location = GOOGLE CLOUD REGION \ --fleet-project = PROJECT NUMBER \ --platform-version = PLATFORM VERSION \ --distribution = generic \ --issuer-url = ISSUER URL \ --context = KUBECONFIG CONTEXT \ --kubeconfig = KUBECONFIG PATH Replace the following: CLUSTER NAME : the name of your cluster.
- Choose the tab that applies to your cluster: Private OIDC issuer Use the gcloud container attached clusters register command to register the cluster: gcloud container attached clusters register CLUSTER NAME \ --location = GOOGLE CLOUD REGION \ --fleet-project = PROJECT NUMBER \ --platform-version = PLATFORM VERSION \ --distribution = generic \ --context = KUBECONFIG CONTEXT \ --has-private-issuer \ --kubeconfig = KUBECONFIG PATH Replace the following: CLUSTER NAME : the name of your cluster.

### "Install Cloud Logging on EKS attached clusters \_|\_ GKE attached clusters\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/eks/how-to/install-cloud-logging)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: It provides concrete attach/update command usage for EKS attached clusters (including the `--logging` flag), which gives procedural context for the attachment flow but does not describe a specific workflow-improvement change.

Evidence snippets:
- To enable workload logging when attaching a cluster, follow the instructions to attach your EKS cluster , and include the optional --logging flag in the gcloud container attached clusters register command : gcloud container attached clusters register CLUSTER NAME ... --logging= LOGGING FLAG To enable workload logging on a cluster that's already attached, follow the instructions to update your EKS cluster , and include the optional --logging flag in the gcloud container attached clusters update command : gcloud container attached clusters update CLUSTER NAME ... --logging= LOGGING FLAG Replace LOGGING FLAG with a flag indicating what kind of logging you want to enable: NONE : disable logging.

### "Enable Binary Authorization \_|\_ GKE attached clusters \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached/aks/how-to/enable-binary-authorization)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions cluster register/update steps, but only as context for configuring Binary Authorization, not as guidance on a standalone workflow improvement.

Evidence snippets:
- Follow the instructions in attach your AKS cluster , and include the optional argument --binauthz-evaluation-mode=PROJECT SINGLETON POLICY ENFORCE : gcloud container attached clusters register CLUSTER NAME \ ... --binauthz-evaluation-mode = PROJECT SINGLETON POLICY ENFORCE Replace CLUSTER NAME with the name of your cluster.
- Follow the instructions in update your AKS cluster , and include the optional argument --binauthz-evaluation-mode=PROJECT SINGLETON POLICY ENFORCE : gcloud container attached clusters update CLUSTER NAME \ ... --binauthz-evaluation-mode = PROJECT SINGLETON POLICY ENFORCE Replace CLUSTER NAME with the name of your cluster.
- Register a cluster To enable Binary Authorization when registering a cluster, use the gcloud container attached clusters register command .
- Update a cluster To enable Binary Authorization when updating a cluster, use the gcloud container attached clusters update command .

