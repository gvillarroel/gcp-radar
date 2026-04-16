---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.346Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "AKS and EKS support"
feature_slug: "aks-and-eks-support"
latest_feature_date: "2020-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize"
keywords:
  - "aks"
  - "eks"
  - "allows"
  - "anthos"
  - "config"
  - "management"
  - "run"
  - "kubernetes"
---

# AKS and EKS support

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

AKS and EKS support allows Anthos Config Management to run on supported Kubernetes clusters in Amazon EKS and Azure AKS.

## Extended Definition

AKS and EKS support allows Anthos Config Management to run on supported Kubernetes clusters in Amazon EKS and Azure AKS.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)

## Supporting Pages

### "Quickstart: Deploy Kubernetes resources across a fleet \_|\_ Config Sync\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't previously enabled Config Sync, clicking Confirm also enables the anthosconfigmanagement.googleapis.com API.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Connect the repository to Cloud Build Config Sync's fleet package service uses Cloud Build to sync and fetch the Kubernetes resources from your Git repository.
- Using GitOps tools like Config Sync's fleet packages can help you scale up configuration management across large numbers of clusters.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- For example, https://github.com/GoogleCloudPlatform/anthos-config-management-samples uses the HTTPS protocol.
- For example, https://github.com/GoogleCloudPlatform/anthos-config-management-samples uses the HTTPS protocol.
- For example, https://github.com/GoogleCloudPlatform/anthos-config-management-samples uses the HTTPS protocol.
- For example, https://github.com/GoogleCloudPlatform/anthos-config-management-samples uses the HTTPS protocol.

### "Configure Kubernetes with Kustomize \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Configure Kubernetes with Kustomize Stay organized with collections Save and categorize content based on your preferences.
- Kustomize is a Kubernetes configuration transformation tool that lets you customize untemplated YAML files, leaving the original files untouched.
- The following diagram shows you the directory structure: ├── example │ ├── base │ │ ├── kustomization.yaml │ │ ├── namespace.yaml │ │ ├── networkpolicy.yaml │ │ ├── rolebinding.yaml │ │ └── role.yaml │ ├── kustomization.yaml │ ├── README.md │ ├── team-a │ │ └── kustomization.yaml │ ├── team-b │ │ └── kustomization.yaml │ └── team-c │ └── kustomization.yaml ├── external-team │ └── kustomization.yaml └── external-data.txt The following kustomization.yaml file is in the root of the source of truth and it contains references to the four overlays with a ConfigMap generator from a local file: ./example/kustomization.yaml resources : - team-a - team-b - team-c - ../external-team configMapGenerator : - name : my-configmap namespace : my-namespace files : - ../external-data.txt The following kustomize.yaml is in the team-a directory and is the overlay for team-a : ./example/team-a/kustomization.yaml namespace : team-a resources : - ../base patches : - target : kind : RoleBinding name : team-admin-rolebinding patch : - - op: replace path: /subjects/0/name value: team-a-admin@mydomain.com - target : kind : Namespace name : default patch : - - op: replace path: /metadata/name value: team-a The following kustomization.yaml is in the base directory and is the Kustomize base: ./example/base/kustomization.yaml resources : - namespace.yaml - rolebinding.yaml - role.yaml - networkpolicy.yaml You can explore an example repository in the configuring namespace-specific policies directory in GitHub.
- What's next Use Config Sync with Kustomize and Helm Use Config Sync in multiple environments with automated rendering Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

