---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.276Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync Kustomize external directory loading"
feature_slug: "config-sync-kustomize-external-directory-loading"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
keywords:
  - "config"
  - "sync"
  - "kustomize"
  - "external"
  - "directory"
  - "loading"
  - "can"
  - "load"
---

# Config Sync Kustomize external directory loading

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync can load files from directories outside the Kustomize root during rendering.

## Extended Definition

Config Sync can load files from directories outside the Kustomize root during rendering.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)

## Supporting Pages

### "Configure Kubernetes with Kustomize \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/kustomize)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following diagram shows you the directory structure: ├── example │ ├── base │ │ ├── kustomization.yaml │ │ ├── namespace.yaml │ │ ├── networkpolicy.yaml │ │ ├── rolebinding.yaml │ │ └── role.yaml │ ├── kustomization.yaml │ ├── README.md │ ├── team-a │ │ └── kustomization.yaml │ ├── team-b │ │ └── kustomization.yaml │ └── team-c │ └── kustomization.yaml ├── external-team │ └── kustomization.yaml └── external-data.txt The following kustomization.yaml file is in the root of the source of truth and it contains references to the four overlays with a ConfigMap generator from a local file: ./example/kustomization.yaml resources : - team-a - team-b - team-c - ../external-team configMapGenerator : - name : my-configmap namespace : my-namespace files : - ../external-data.txt The following kustomize.yaml is in the team-a directory and is the overlay for team-a : ./example/team-a/kustomization.yaml namespace : team-a resources : - ../base patches : - target : kind : RoleBinding name : team-admin-rolebinding patch : - - op: replace path: /subjects/0/name value: team-a-admin@mydomain.com - target : kind : Namespace name : default patch : - - op: replace path: /metadata/name value: team-a The following kustomization.yaml is in the base directory and is the Kustomize base: ./example/base/kustomization.yaml resources : - namespace.yaml - rolebinding.yaml - role.yaml - networkpolicy.yaml You can explore an example repository in the configuring namespace-specific policies directory in GitHub.
- Example architecture for Kustomize configurations This directory includes four overlays ( team-a , team-b , team-c , and external-team ) that reference the same base, and a file used by the ConfigMap generator.
- What's next Use Config Sync with Kustomize and Helm Use Config Sync in multiple environments with automated rendering Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Configure Kubernetes with Kustomize Stay organized with collections Save and categorize content based on your preferences.

### Use Config Sync with Kustomize and Helm \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Verify that there no other errors by using nomos status : nomos status Example output: CLUSTER NAME -------------------- <root> https:/github.com/GoogleCloudPlatform/anthos-config-management-samples.git/helm-component/manifests@init SYNCED fd17dd5a Verify if the Helm component is successfully installed: kubectl get all -n cert-manager Example output: NAME READY STATUS RESTARTS AGE pod/my-cert-manager-54f5ccf74-wfzs4 1/1 Running 0 10m pod/my-cert-manager-cainjector-574bc8678c-rh7mq 1/1 Running 0 10m pod/my-cert-manager-webhook-7454f4c77d-rkct8 1/1 Running 0 10m NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE service/my-cert-manager ClusterIP 10.76.9.35 <none> 9402/TCP 10m service/my-cert-manager-webhook ClusterIP 10.76.11.205 <none> 443/TCP 10m NAME READY UP-TO-DATE AVAILABLE AGE deployment.apps/my-cert-manager 1/1 1 1 10m deployment.apps/my-cert-manager-cainjector 1/1 1 1 10m deployment.apps/my-cert-manager-webhook 1/1 1 1 10m NAME DESIRED CURRENT READY AGE replicaset.apps/my-cert-manager-54f5ccf74 1 1 1 10m replicaset.apps/my-cert-manager-cainjector-574bc8678c 1 1 1 10m replicaset.apps/my-cert-manager-webhook-7454f4c77d 1 1 1 10m Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Use Config Sync with Kustomize and Helm Stay organized with collections Save and categorize content based on your preferences.
- Without automated rendering, you have to maintain one Git repository with the original Kustomize configurations and Helm charts and another Git repository with the output generated by the external hydration.
- Since you are using Kustomize configurations and Helm charts, you need to use an unstructured repository and add this flag. --output= OUTPUT DIRECTORY lets you define a path to the rendered configs.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- If the Git repository contains Kustomize configurations, but no kustomization.yaml file exists in the Git sync directory, either add kustomization.yaml in the sync directory to trigger the rendering process, or remove kustomization.yaml from all sub directories to skip rendering.
- If nomos vet returns this error on a type with group: configsync.gke.io , such as a RepoSync, download v1.6.0-rc.6 or later from the downloads page to resolve.
- KNV1044: Unsyncable Resources Error Code An abstract namespace directory with configs must have at least one namespace subdirectory.
- N/A KNV1002: Duplicate Directory Name Error Deprecated in Config Sync 1.3.

