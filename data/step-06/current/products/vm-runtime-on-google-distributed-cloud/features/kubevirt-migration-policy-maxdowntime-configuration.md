---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.735Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "KubeVirt migration policy maxDowntime configuration"
feature_slug: "kubevirt-migration-policy-maxdowntime-configuration"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms"
keywords:
  - "kubevirt"
  - "migration"
  - "policy"
  - "maxdowntime"
  - "configuration"
  - "vm"
  - "runtime"
  - "now"
---

# KubeVirt migration policy maxDowntime configuration

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime now supports configuring the live migration `maxDowntime` parameter in the kubevirt migration policy to limit how long a VM can be paused at the end of migration.

## Extended Definition

VM Runtime now supports configuring the live migration `maxDowntime` parameter in the kubevirt migration policy to limit how long a VM can be paused at the end of migration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms)

## Supporting Pages

### "Configure the eviction policies for VMs in Google Distributed Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The cluster can retry the live migration up to 3 times, with a 30-second timeout on the process each time to start: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : disableCDIUploadProxyVIP : false enabled : true evictionPolicy : evictionStrategy : LiveMigrate maxMigrationAttemptsPerVM : 3 migrationTargetInitializationTimeout : 30s useEmulation : false Restart The following example eviction policy makes no attempt at migration for any VMs during eviction.
- The following eviction policy settings can be configured: Property Default Valid values evictionStrategy LiveMigrate LiveMigrate , Restart maxMigrationAttemptsPerVM 3 Integers in the range [ 1 , 5 ] migrationTargetInitializationTimeout 30s Any valid duration string, such as 1m , 2h , or 1h30m evictionStrategy If this value is set to LiveMigrate , VM Runtime on GDC attempts to migrate any migratable VM away from a node to evict it.
- VM Runtime on GDC now applies the eviction policy to VMs in your cluster.
- To enable and configure the eviction policy, complete the following steps: Edit the VMRuntime custom resource: kubectl edit vmruntime vmruntime Add or update the evictionPolicy section with an empty object to use the default eviction policy settings, or add your desired settings: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : disableCDIUploadProxyVIP : false enabled : true evictionPolicy : {} useEmulation : false If the evictionPolicy isn't populated, such as evictionPolicy: null or isn't included in the manifest, no special action is taken.

### "VM Runtime on Google Distributed Cloud overview \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Networking VM Runtime on GDC expands on the default pod-network offering of KubeVirt to provide networking options more suitable for production VM workloads .
- VM Runtime on GDC integrates Kubevirt into your Google Distributed Cloud software-only installation to give a consistent way to manage your applications.
- Finally, KubeVirt tools, such as virtctl , have also been extended to support the additional VM Runtime on GDC capabilities.
- How VM Runtime on GDC differs from KubeVirt VM Runtime on GDC builds on the KubeVirt open source project .

### "Edit VM configuration in VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- If you edit compute settings, VM Runtime on GDC restarts your VM automatically when you save your changes. apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : ... name : vm-sample-01 namespace : default resourceVersion : "16711824" uid : ed623879-0cfa-52de-ad2c-b63308e6116c spec : autoRestartOnConfigurationChange : true compute : cpu : vcpus : 2 ...
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Edit VM configuration in VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- If you have made label or scheduling changes for the VM prior to enabling the automatic restart feature, adding autoRestartOnConfigurationChange now without any other change doesn't trigger a restart.
- VM Runtime on GDC monitors the VM and, if it detects a configuration change, it restarts the VM automatically to sync the changes.

### "Configure a high availability policy for VMs \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/high-availability-policy-vms)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following output shows that the current value of defaultRecoveryStrategy is Reschedule : vm-system default 5m55s Reschedule 15s 1m30s Get a detailed view of the VMHighAvailabilityPolicy object: kubectl --kubeconfig USER CLUSTER KUBECONFIG get VMHighAvailabilityPolicy \ --namespace vm-system --output yaml Example output: apiVersion: vm.cluster.gke.io/v1alpha1 kind: VMHighAvailabilityPolicy metadata: ... labels: app.kubernetes.io/component: kubevirt app.kubernetes.io/managed-by: virt-operator kubevirt.io: virt-api name: default namespace: vm-system .. spec: defaultRecoveryStrategy: Reschedule nodeHeartbeatInterval: 15s nodeMonitorGracePeriod: 1m30s Change the default recovery strategy In certain situations, we recommend that you change the default recovery strategy.
- This document shows you how to configure the high-availability policy for virtual machines (VMs) that run using VM Runtime on GDC.
- When you enable VM Runtime on GDC , the cluster creates a VMHighAvailabilityPolicy object named default .
- For example: kubectl --kubeconfig USER CLUSTER KUBECONFIG \ annotate vmi my-vm \ vm.cluster.gke.io/vm-ha-recovery-strategy- kubectl --kubeconfig USER CLUSTER KUBECONFIG \ annotate gvm my-vm \ vm.cluster.gke.io/vm-ha-recovery-strategy- Advanced configuration In addition to configuring the default recovery strategy, you can configure the following: Node heartbeat interval : The time between heartbeats sent by each cluster node Node monitor grace period : The maximum amount of time a node can fail to send a heartbeat before it is considered unhealthy In most cases, the default values for heartbeat interval and grace period are appropriate.

