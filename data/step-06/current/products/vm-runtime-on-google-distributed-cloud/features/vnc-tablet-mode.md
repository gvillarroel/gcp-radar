---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.743Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "VNC tablet mode"
feature_slug: "vnc-tablet-mode"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes"
keywords:
  - "vnc"
  - "tablet"
  - "mode"
  - "vm"
  - "runtime"
  - "on"
  - "distributed"
  - "now"
---

# VNC tablet mode

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime on Google Distributed Cloud now improves VNC access by adding a tablet mode for a better VNC experience.

## Extended Definition

VM Runtime on Google Distributed Cloud now improves VNC access by adding a tablet mode for a better VNC experience.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes)

## Supporting Pages

### "Connect to VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- Source ID: `site-docs-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Connect to VMs that use VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- When you use the kubectl virt vnc command, VM Runtime on GDC opens VNC for you, so you aren't required to enable VNC in the guest OS.
- After you confirm (or force) the password reset, the command returns the new password for the specified VM and username: Resetting and retrieving password for USERNAME on VM NAME vm name: VM NAME username: USERNAME password: PASSWORD What's next Manage the power state of a VM in Google Distributed Cloud .
- After you have successfully connected using SSH the VM and no longer need the connection, exit the SSH session: exit Connect directly using the console If you don't have direct network connectivity to your Linux VM for SSH access, connect to the console of the VM using the VM Runtime on GDC console.

### "Edit VM configuration in VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Edit VM configuration in VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- This document is intended for application owners that use VM Runtime on GDC to run virtual machines (VMs) in clusters created with Google Distributed Cloud (software only) on bare metal.
- If you edit compute settings, VM Runtime on GDC restarts your VM automatically when you save your changes. apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : ... name : vm-sample-01 namespace : default resourceVersion : "16711824" uid : ed623879-0cfa-52de-ad2c-b63308e6116c spec : autoRestartOnConfigurationChange : true compute : cpu : vcpus : 2 ...
- If you have made label or scheduling changes for the VM prior to enabling the automatic restart feature, adding autoRestartOnConfigurationChange now without any other change doesn't trigger a restart.

### "Configure the eviction policies for VMs in Google Distributed Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VM Runtime on GDC now applies the eviction policy to VMs in your cluster.
- To enable and configure the eviction policy, complete the following steps: Edit the VMRuntime custom resource: kubectl edit vmruntime vmruntime Add or update the evictionPolicy section with an empty object to use the default eviction policy settings, or add your desired settings: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : disableCDIUploadProxyVIP : false enabled : true evictionPolicy : {} useEmulation : false If the evictionPolicy isn't populated, such as evictionPolicy: null or isn't included in the manifest, no special action is taken.
- The cluster can retry the live migration up to 3 times, with a 30-second timeout on the process each time to start: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : disableCDIUploadProxyVIP : false enabled : true evictionPolicy : evictionStrategy : LiveMigrate maxMigrationAttemptsPerVM : 3 migrationTargetInitializationTimeout : 30s useEmulation : false Restart The following example eviction policy makes no attempt at migration for any VMs during eviction.
- The following eviction policy settings can be configured: Property Default Valid values evictionStrategy LiveMigrate LiveMigrate , Restart maxMigrationAttemptsPerVM 3 Integers in the range [ 1 , 5 ] migrationTargetInitializationTimeout 30s Any valid duration string, such as 1m , 2h , or 1h30m evictionStrategy If this value is set to LiveMigrate , VM Runtime on GDC attempts to migrate any migratable VM away from a node to evict it.

### "Create and use storage classes in VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Create and use storage classes in VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- Set or update the default StorageClass Initially, Google Distributed Cloud with VM Runtime on GDC have no default StorageClass configured.
- Edit the VMRuntime custom resource: kubectl edit vmruntime Add or update the spec.storage section that specifies the default StorageClass to use: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : enabled : true storage : defaultStorageClass : STORAGE CLASS NAME ...
- If you want to initially set or update the default StorageClass that VM Runtime on GDC uses when you create a VirtualMachineDisk , update the VMRuntime custom resource.

