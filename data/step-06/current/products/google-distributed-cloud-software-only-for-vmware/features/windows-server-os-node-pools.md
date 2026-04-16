---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.045Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Windows Server OS node pools"
feature_slug: "windows-server-os-node-pools"
latest_feature_date: "2025-05-06"
deprecation_date: "2026-05-25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade"
keywords:
  - "windows"
  - "server"
  - "os"
  - "node"
  - "pools"
  - "deprecated"
  - "version"
  - "32"
---

# Windows Server OS node pools

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Windows Server OS node pools are deprecated in version 1.32 and removed in version 1.33 and later, with support ending on 2026-05-25; deprecated on 2026-05-25.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Windows Server OS node pools are Kubernetes node pools intended to run Windows workloads using a Windows Server VM image/template (for example, Anthos Windows VM templates) for node creation. The feature documentation states it is deprecated in version 1.32 and will be unavailable in version 1.33 and later. The upgrade guidance also indicates that skip-version node pool upgrades are supported for Ubuntu and COS pools only, not for Windows node pools.

## Evidence Summary

These official docs establish the deprecation/unavailability milestone for Windows Server OS node pools and confirm they are excluded from supported skip-version upgrade paths.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 342
- Re-rank relevance: STRONG
- Re-rank rationale: This page is the dedicated user guide for Windows Server OS node pools and explicitly documents their configuration, constraints, and deprecation timeline.

Evidence snippets:
- Caution: The Windows Server OS node pools feature is deprecated in Google Distributed Cloud version 1.32 and will be unavailable in version 1.33 and higher.
- The name has the following format: Successfully created Anthos Windows VM template "gke-on-prem-windows-server-2019- VERSION " Note: The created VM template will be used as the OS image for the Windows node pools and is prepared to trigger a script at first startup, which is required for the node to function correctly.
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: The page notes that skip-version upgrades are not supported for Windows node pools, giving only a narrow OS-related limitation.

Evidence snippets:
- This page assumes that you are somewhat familiar with planning and executing Google Distributed Cloud upgrades as described in the following: Upgrade overview Upgrade best practices Upgrade a cluster or a node pool Limitations Skip-version upgrades has the following limitations: Skip-version upgrades are supported for Ubuntu and COS node pools, but not for Windows node pools.
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar 1.14 Upgrade 1.15 1.16 Upgrade 1.28 1.29 Skipping over one minor version when upgrading your node pools reduces the number of upgrades required to stay on a supported version.
- After updating your configuration file, it should look similar to the following: gkeOnPremVersion: INTERMEDIATE VERSION ... nodePools: - name: pool-1 gkeOnPremVersion: SOURCE VERSION ... - name: pool-2 gkeOnPremVersion: SOURCE VERSION ...

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-3`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: The page notes Windows node pools are not supported for skip-version upgrades, but it does not document lifecycle/deprecation details.

Evidence snippets:
- This page assumes that you are somewhat familiar with planning and executing Google Distributed Cloud upgrades as described in the following: Upgrade overview Upgrade best practices Upgrade a cluster or a node pool Limitations Skip-version upgrades has the following limitations: Skip-version upgrades are supported for Ubuntu and COS node pools, but not for Windows node pools.
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar 1.14 Upgrade 1.15 1.16 Upgrade 1.28 1.29 Skipping over one minor version when upgrading your node pools reduces the number of upgrades required to stay on a supported version.
- After updating your configuration file, it should look similar to the following: gkeOnPremVersion: INTERMEDIATE VERSION ... nodePools: - name: pool-1 gkeOnPremVersion: SOURCE VERSION ... - name: pool-2 gkeOnPremVersion: SOURCE VERSION ...

