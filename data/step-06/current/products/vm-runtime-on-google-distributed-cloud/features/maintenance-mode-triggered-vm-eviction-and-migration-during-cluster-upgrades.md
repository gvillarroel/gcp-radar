---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.739Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Maintenance-mode triggered VM eviction and migration during cluster upgrades"
feature_slug: "maintenance-mode-triggered-vm-eviction-and-migration-during-cluster-upgrades"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm"
keywords:
  - "maintenance"
  - "mode"
  - "triggered"
  - "vm"
  - "eviction"
  - "and"
  - "migration"
  - "during"
---

# Maintenance-mode triggered VM eviction and migration during cluster upgrades

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime now triggers VM eviction and live migration during cluster upgrades only after a node enters maintenance mode, using Anthos-on-Bare-Metal's entering maintenance window timeout and best-effort migration to already-upgraded nodes.

## Extended Definition

VM Runtime now triggers VM eviction and live migration during cluster upgrades only after a node enters maintenance mode, using Anthos-on-Bare-Metal's entering maintenance window timeout and best-effort migration to already-upgraded nodes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)

## Supporting Pages

### "Configure the eviction policies for VMs in Google Distributed Cloud \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/eviction-policy)
- Source ID: `site-docs-reference`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The cluster can retry the live migration up to 3 times, with a 30-second timeout on the process each time to start: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : disableCDIUploadProxyVIP : false enabled : true evictionPolicy : evictionStrategy : LiveMigrate maxMigrationAttemptsPerVM : 3 migrationTargetInitializationTimeout : 30s useEmulation : false Restart The following example eviction policy makes no attempt at migration for any VMs during eviction.
- VMs are stopped on their current host, and start again when the host finishes its maintenance event: apiVersion : vm.cluster.gke.io/v1 kind : VMRuntime metadata : name : vmruntime spec : disableCDIUploadProxyVIP : false enabled : true evictionPolicy : evictionStrategy : Restart useEmulation : false Save and close the VMRuntime custom resource in your editor.
- The following example manifests show how to enable live migration of VMs, or restart the VMs on the same host after maintenance is complete: Live migrate The following example eviction policy enables live migration of VMs.
- This document shows you how to configure the eviction policy that controls how VMs that use VM Runtime on GDC can automatically migrate to other hosts during maintenance events.

### "Enable and use NVIDIA GPUS in VMs with VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see how to configure the eviction policy for VMs during maintenance events .
- The following example output shows that the allocatable GPU name on this node is NVIDIA A100 SXM4 40GB : Name: bm-node1 Roles: worker [ ... ] Allocatable: cpu: 47810m [ ... ] memory: 336929400Ki nvidia.com/gpu-vm-NVIDIA A100 SXM4 40GB: 1 [ ... ] Create a VirtualMachine manifest, such as my-gpu-vm.yaml , in the editor of your choice: nano my-gpu-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true gpu : model : nvidia.com/gpu-vm- GPU NAME quantity : 1 In this YAML file, define the following settings: VM NAME : the name for your VM.
- You allocate them to VMs in the next section: NAME ALLOCATED DEVICEMODEL bm-node1 true Tesla A100 SXM4 40GB bm-node2 true Tesla A100 SXM4 40GB Allocate GPUs for use with VMs With GPU support configured in your bare metal cluster nodes and in VM Runtime on GDC, allocate the GPUs for use with VMs.
- Verify that the GPUs report their ALLOCATED status as true : kubectl get gpuallocations --namespace vm-system The following example output shows that the GPUs on the nodes are available for use: NAME ALLOCATED DEVICEMODEL gpu-w1 true Tesla A100 SXM4 40GB gpu-w2 true Tesla A100 SXM4 40GB Create a VM with GPU support You can now create a VM that uses the GPU from the node.

### "Create and use storage classes in VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/storage-classes)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To use a specific, already-defined StorageClass when you create a VirtualMachineDisk , complete the following steps: Create a VirtualMachineDisk manifest, such as my-disk.yaml , in the editor of your choice: nano my-disk.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : DISK NAME spec : size : 10Gi storageClassName : STORAGE CLASS NAME Replace the following values: DISK NAME : the name for your disk.
- The following example output shows that the cluster has four storage classes and associated profiles: $ kubectl get storageprofiles NAME AGE anthos-system 11d node-disk 11d standard 11d nfs 11d To edit a storage profile and change the access mode or volume mode, complete the following steps: Edit the StorageProfile custom resource for editing: kubectl edit storageprofile STORAGE PROFILE NAME Replace STORAGE PROFILE NAME with the StorageProfile you want to edit.
- Add a single entry to the spec.claimPropertySets list of the StorageProfile : apiVersion : cdi.kubevirt.io/v1beta1 kind : StorageProfile metadata : name : nfs spec : claimPropertySets : - accessModes : - ACCESS MODE volumeMode : VOLUME MODE The accessMode and volumeMode use the underlying Kubernetes components.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Create and use storage classes in VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.

### "Tutorial: Create and manage a Linux VM in VM Runtime on GDC \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- All the nodes in your cluster can then connect to and use this NFS storage: apiVersion : storage.k8s.io/v1 kind : StorageClass metadata : name : example-nfs provisioner : nfs.csi.k8s.io parameters : server : nfs-server.example.com path : /vm-share reclaimPolicy : Delete volumeBindingMode : Immediate mountOptions : - nconnect=8 - nfsvers=4.1 In this tutorial, use the name of a StorageClass in your own cluster.
- After you successfully connect to the console of the VM, exit the VM session and console: Ctrl + ] Edit the VM During the lifecycle of your VM, you might want to edit your VM.
- Create a manifest that defines a VirtualMachine , such as my-vm.yaml , in the editor of your choice: nano my-vm.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : osType : linux compute : cpu : vcpus : VCPU NUMBER memory : capacity : MEMORY SIZE interfaces : - name : eth0 networkName : NETWORK NAME default : true disks : - boot : true virtualMachineDiskName : DISK NAME Replace the following values: VM NAME : the name for your VM.
- Create a VirtualMachineDisk manifest, such as my-disk.yaml , in the editor of your choice: nano my-disk.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : DISK NAME spec : size : 20Gi storageClassName : STORAGE CLASS NAME source : http : url : https://cloud-images.ubuntu.com/releases/focal/release/ubuntu-20.04-server-cloudimg-amd64.img Replace the following values: DISK NAME : the name that you want for your disk.

