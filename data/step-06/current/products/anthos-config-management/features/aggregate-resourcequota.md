---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.361Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Aggregate ResourceQuota"
feature_slug: "aggregate-resourcequota"
latest_feature_date: "2019-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects"
keywords:
  - "aggregate"
  - "resourcequota"
  - "allows"
  - "shared"
  - "across"
  - "multiple"
  - "namespaces"
  - "under"
---

# Aggregate ResourceQuota

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Aggregate ResourceQuota support allows a ResourceQuota to be shared across multiple namespaces under a common abstract namespace directory.

## Extended Definition

Aggregate ResourceQuota support allows a ResourceQuota to be shared across multiple namespaces under a common abstract namespace directory.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)

## Supporting Pages

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- While you should adhere to the principle of least privilege by granting fine-grained permissions to a user-defined Role , you can define a ClusterRole or use user-facing roles , and reference the same ClusterRole in multiple RoleBindings across different namespaces.
- For example, the following ClusterRole or Role grants permissions to manage Deployment and ServiceAccount objects: ROOT REPO/namespaces/ NAMESPACE /sync-role.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ROLE KIND metadata : namespace : NAMESPACE # only set this field for a 'Role' name : RECONCILER ROLE rules : Update 'apiGroups' and 'resources' to reference actual resources managed by 'RepoSync'. - apiGroups : [ "apps" ] resources : [ "deployments" ] verbs : [ " " ] - apiGroups : [ "" ] resources : [ "serviceaccounts" ] verbs : [ " " ] Save the RoleBinding manifest that references the ClusterRole or Role as FILENAME : ROOT REPO/namespaces/ NAMESPACE / FILENAME .yaml kind : RoleBinding apiVersion : rbac.authorization.k8s.io/v1 metadata : name : syncs-repo namespace : NAMESPACE subjects : - kind : ServiceAccount name : SERVICE ACCOUNT NAME namespace : config-management-system roleRef : kind : ROLE KIND name : RECONCILER ROLE apiGroup : rbac.authorization.k8s.io Replace the following: FILENAME : the name for the RoleBinding manifest.
- Helm ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : helm sourceFormat : unstructured helm : repo : NAMESPACE REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.
- Helm ROOT SOURCE/namespaces/NAMESPACE/repo-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RepoSync metadata : name : REPO SYNC NAME namespace : NAMESPACE spec : sourceType : helm sourceFormat : unstructured helm : repo : NAMESPACE REPOSITORY chart : HELM CHART NAME version : HELM CHART VERSION releaseName : HELM RELEASE NAME namespace : HELM RELEASE NAMESPACE values : foo : bar : VALUE 1 baz : - qux : VALUE 2 xyz : VALUE 3 includeCRDs : HELM INCLUDE CRDS auth : NAMESPACE AUTH TYPE gcpServiceAccountEmail : NAMESPACE EMAIL secretRef : name : NAMESPACE SECRET NAME caCertSecretRef : name : NAMESPACE CA CERT SECRET NAME Replace the following: REPO SYNC NAME : add the name of your RepoSync object.

### "Using Config Sync in multiple environments with automated rendering \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/multiple-environments-config-sync)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You should see the foo namespace appear. kubectl get namespace Example output: NAME STATUS AGE config-management-monitoring Active 9m38s config-management-system Active 9m38s default Active 47h foo Active 9m5s kube-node-lease Active 47h kube-public Active 47h kube-system Active 47h resource-group-system Active 9m30s You have now set up automated config rendering for a dev and prod environment, across multiple Google Cloud projects and environments.
- Your goal as the platform admin is to ensure that both environments stay within compliance of Foo Corp's policies, and that base level resources, like Kubernetes namespaces and service accounts, remain consistent across both environments.
- Verify your configuration In this section you check to make sure that your clusters are syncing to the configs in your repository: To check the state of your Config Sync installation, run the nomos status command : nomos status You should see that both your dev and prod clusters are now synced to their respective repos: gke DEV PROJECT ID us-central1-c dev -------------------- <root> https://github.com/GoogleCloudPlatform/anthos-config-management-samples/multi-environments-kustomize/config-source/overlays/dev@main SYNCED 8f2e196f Managed resources: NAMESPACE NAME STATUS clusterrole.rbac.authorization.k8s.io/pod-creator Current namespace/default Current namespace/foo Current default rolebinding.rbac.authorization.k8s.io/pod-creators Current foo serviceaccount/foo-ksa-dev Current gke PROD PROJECT ID us-central1-c prod -------------------- <root> https://github.com/GoogleCloudPlatform/anthos-config-management-samples/multi-environments-kustomize/config-source/overlays/prod@main SYNCED c91502ee Managed resources: NAMESPACE NAME STATUS clusterrole.rbac.authorization.k8s.io/pod-creator Current namespace/default Current namespace/foo Current default rolebinding.rbac.authorization.k8s.io/pod-creators Current foo serviceaccount/foo-ksa-prod Current ``` Use kubectl to switch to the dev cluster: kubectl config use-context "gke ${ DEV PROJECT } ${ DEV CLUSTER ZONE } dev" To verify that the resources are synced, get namespaces.
- For example, the dev RoleBinding allows all Foo Corp developers deploy Pods to the dev cluster, whereas the prod RoleBinding only allows a Continuous Deployment agent, deploy-bot@foo-corp.com , to deploy Pods into production: apiVersion: kustomize.config.k8s.io/v1beta1 kind: Kustomization resources: - ../../base patches: ServiceAccount - make name unique per environ - target: kind: ServiceAccount name: foo-ksa patch: - - op: replace path: /metadata/name value: foo-ksa-dev - op: replace path: /metadata/namespace value: foo-dev Pod creators - give all Foo Corp developers access - target: kind: RoleBinding name: pod-creators patch: - - op: replace path: /subjects/0/name value: developers-all@foo-corp.com commonLabels: environment: dev Objectives Set up Config Sync to automatically render and sync the configuration for the two separate environments.

### "Sync objects to multiple namespaces \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This example disables inheritance for role bindings: system/hierarchy-config.yaml kind : HierarchyConfig apiVersion : configmanagement.gke.io/v1 metadata : name : rbac spec : resources : Configure role to only be allowed in leaf namespaces. - group : rbac.authorization.k8s.io kinds : [ "RoleBinding" ] hierarchyMode : none Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create an example object quota that references the namespace selector: kind : ResourceQuota apiVersion : v1 metadata : name : quota annotations : configmanagement.gke.io/namespace-selector : exclude-exempt-namespaces spec : hard : pods : "1" cpu : "200m" memory : "200Mi" The resource quota is created in all namespaces except those that have the quota-exempt: exempt key-value pair.
- Create an example object quota that references the namespace selector: kind : ResourceQuota apiVersion : v1 metadata : name : quota annotations : configmanagement.gke.io/namespace-selector : gamestore-selector spec : hard : pods : "1" cpu : "200m" memory : "200Mi" The resource quota is created only in namespaces that have the app: gamestore label.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Sync objects to multiple namespaces Stay organized with collections Save and categorize content based on your preferences.

