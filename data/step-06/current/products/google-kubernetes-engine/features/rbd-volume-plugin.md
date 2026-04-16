---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.751Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "RBD volume plugin"
feature_slug: "rbd-volume-plugin"
latest_feature_date: "2024-05-01"
deprecation_date: "2024-05-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2"
keywords:
  - "rbd"
  - "volume"
  - "plugin"
  - "lets"
  - "kubernetes"
  - "mount"
  - "volumes"
  - "deprecated"
---

# RBD volume plugin

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

The RBD volume plugin lets Kubernetes mount RBD volumes and is deprecated in GKE 1.30; The RBD volume plugin lets Kubernetes mount RBD volumes and is deprecated in GKE 1.30; deprecated on 2024-05-01.

## Extended Definition

The RBD volume plugin lets Kubernetes mount RBD volumes and is deprecated in GKE 1.30; The RBD volume plugin lets Kubernetes mount RBD volumes and is deprecated in GKE 1.30; deprecated on 2024-05-01.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- We recommend you to upgrade your node pools to one of the following versions or above to take advantage of the latest patches: 1.21.4-gke.301 1.20.10-gke.301 1.19.14-gke.301 1.18.20-gke.4501 The following versions also contain the fix: 1.21.3-gke.2001 1.20.8-gke.2101 1.20.9-gke.701 1.20.9-gke.1001 1.19.12-gke.2101 1.19.13-gke.701 1.18.20-gke.3001 High GKE clusters on Description Severity A security issue was discovered in Kubernetes , CVE-2021-25741, where a user may be able to create a container with subpath volume mounts to access files & directories outside of the volume, including on the host filesystem.
- It is recommended that you: Upgrade your AWSManagementService , AWSCluster and AWSNodePool objects to the following version: 1.8.2 Update the gke-version of your AWSCluster and AWSNodePool objects to one of the supported Kubernetes versions : 1.17.17-gke.15800 1.18.20-gke.4800 1.19.14-gke.600 1.20.10-gke.600 High GKE clusters on Description Severity A security issue was discovered in Kubernetes , CVE-2021-25741, where a user may be able to create a container with subpath volume mounts to access files & directories outside of the volume, including on the host filesystem.
- Medium GKE on AWS Description Severity Note: This section applies to both the current and previous generation of GKE on AWS A vulnerability in the Google Secret Manager Provider for Secret Store CSI Driver allows an attacker with Pod and Secret creation permissions in a namespace to exfiltrate the CSI driver's Kubernetes service account token by mounting a malicious volume on a Pod.
- Upgrade your admin clusters and user clusters to one of the following versions: 1.8.3 1.8.2 1.7.4 1.6.5 High GKE clusters on Description Severity A security issue was discovered in Kubernetes , CVE-2021-25741, where a user may be able to create a container with subpath volume mounts to access files & directories outside of the volume, including on the host filesystem.

### "About dynamic resource allocation in GKE \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-dynamic-resource-allocation)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Comparison of ResourceClaims and ResourceClaimTemplates Manually-created ResourceClaims Automatically-created ResourceClaims Managed by you Managed by Kubernetes Provides access to the same devices from multiple Pods Provides access to devices from a single Pod Exists in the cluster independently of Pods Bound to the lifecycle of the corresponding Pod Ideal for multiple workloads that need to share a specific device Ideal for multiple workloads that need independent device access Comparison of DRA with manual device allocation DRA makes allocating attached devices a similar experience to dynamically provisioning PersistentVolumes.
- You should already be familiar with the following: GPUs in GKE Common Expression Language (CEL) Introduction to DRA DRA is a built-in Kubernetes feature that lets you flexibly request, allocate, and share hardware in your cluster among Pods and containers.
- How DRA works Using DRA in your clusters and workloads is a similar process to using StorageClasses, PersistentVolumeClaims, and PersistentVolumes to dynamically provision volumes for Pods .
- Benefits of DRA Without DRA, allocating hardware devices in Kubernetes relies on device plugins .

### "Migrate nodes to containerd 2 \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/migrate-containerd-2)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to check for the DaemonSets: kubectl get daemonsets --all-namespaces -o json \ jq -r ' [ "/", "/etc", "/etc/", "/etc/containerd", "/etc/containerd/", "/etc/containerd/config.toml" ] as $host paths [ "kube-system", "kube-node-lease", "istio-system", "asm-system", "gatekeeper-system", "config-management-system", "config-management-monitoring", "cnrm-system", "hnc-system", "gke-managed-system", "gke-gmp-system", "gmp-system", "gke-managed-cim" ] as $excluded namespaces .items[] select( ([.metadata.namespace] inside($excluded namespaces) not) and ( (any(.spec.template.spec.volumes[]?.hostPath.path; IN($host paths[]))) or ( .spec.template.spec.hostPID == true and any(.spec.template.spec.containers[]; .securityContext?.privileged == true) ) ) ) .metadata.namespace + "/" + .metadata.name ' Migrate from the CRI registry auths or configs.auth properties If your workloads use the auths or configs.auth properties in the containerd config to authenticate to a private registry for pulling container images, you must migrate the workloads using those images to the imagePullSecrets field instead.
- Run the following command: kubectl get pods --all-namespaces -o json \ jq -r ' [ "/", "/var", "/var/","/var/run", "/var/run/", "/var/run/containerd", "/var/run/containerd/", "/var/run/containerd/containerd.sock", "/run", "/run/", "/run/containerd", "/run/containerd/", "/run/containerd/containerd.sock" ] as $socket paths [ "kube-system", "kube-node-lease", "istio-system", "asm-system", "gatekeeper-system", "config-management-system", "config-management-monitoring", "cnrm-system", "hnc-system", "gke-managed-system", "gke-gmp-system", "gmp-system", "gke-managed-cim" ] as $excluded namespaces .items[] select( (.spec.volumes[]?.hostPath.path as $p $socket paths index($p)) and ([.metadata.namespace] inside($excluded namespaces) not) ) .metadata.namespace + "/" + .metadata.name ' Use eBPF tracing to identify API callers For a more definitive way to identify which workloads running on Linux nodes call the CRI v1alpha2 API, you can deploy two specialized DaemonSets: The containerd-socket-tracer logs any process opening a connection to the containerd socket, along with the Pod and container details.
- For example, replace the following application code: runtimeapi "k8s.io/cri-api/pkg/apis/runtime/v1alpha2" Update the code to use v1: runtimeapi "k8s.io/cri-api/pkg/apis/runtime/v1" Migrate from deprecated containerd config properties The registry.auths , registry.configs , and registry.mirrors containerd config properties in the CRI plugin are deprecated and will be removed in containerd 2.2, with a GKE version yet to be announced. registry.configs.tls , however, was already removed in containerd 2.0.
- The following containerd config properties in the CRI plugin are deprecated and will be removed in containerd 2.2, with a GKE version yet to be announced: registry.auths , registry.configs , registry.mirrors . registry.configs.tls , however, was already removed in containerd 2.0.

