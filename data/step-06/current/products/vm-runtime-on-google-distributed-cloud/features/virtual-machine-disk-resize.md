---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.742Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Virtual machine disk resize"
feature_slug: "virtual-machine-disk-resize"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm"
keywords:
  - "virtual"
  - "machine"
  - "disk"
  - "resize"
  - "vm"
  - "runtime"
  - "supports"
  - "resizing"
---

# Virtual machine disk resize

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime supports resizing VM disks, and when supported by the storage provider it automatically expands the underlying PVC and VM disk accordingly.

## Extended Definition

VM Runtime supports resizing VM disks, and when supported by the storage provider it automatically expands the underlying PVC and VM disk accordingly.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)

## Supporting Pages

### "Edit VM configuration in VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you edit compute settings, VM Runtime on GDC restarts your VM automatically when you save your changes. apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : ... name : vm-sample-01 namespace : default resourceVersion : "16711824" uid : ed623879-0cfa-52de-ad2c-b63308e6116c spec : autoRestartOnConfigurationChange : true compute : cpu : vcpus : 2 ...
- If you want to add an existing empty disk, update the disk configuration in your editor, as shown in the following example: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : vm1 spec : ... disks : - boot : true virtualMachineDiskName : vm1-boot-dv - virtualMachineDiskName : DISK NAME ...
- The following example output shows the condensed information for a VM, with a change to the attached disks successfully applied: Name : vm1 Namespace : default Labels : < none > Annotations : < none > API Version : vm.cluster.gke.io/v1 Kind : VirtualMachine ...
- For example, the following sample VirtualMachine manifest shows that only a boot disk is attached to the VM: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : vm1 spec : ... disks : - boot : true virtualMachineDiskName : vm1-boot-dv ...

### "Schedule VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/schedule-vms)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a VirtualMachine manifest, such as my-scheduled-vm.yaml, in the editor of your choice: nano my-scheduled-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME labels : KEY:VALUE spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true scheduling : affinity : podAntiAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 100 podAffinityTerm : topologyKey : kubernetes.io/hostname labelSelector : matchLabels : KEY:VALUE Replace the following values: VM NAME : the name of your VM.
- Create a VirtualMachine manifest, such as my-scheduled-vm.yaml, in the editor of your choice: nano my-scheduled-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME labels : KEY:VALUE spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true scheduling : affinity : podAffinity : preferredDuringSchedulingIgnoredDuringExecution - podAffinityTerm : topologyKey : kubernetes.io/hostname labelSelector : matchLabels : KEY:VALUE weight : 100 Replace the following values: VM NAME : the name of your VM.
- Create a VirtualMachine manifest, such as my-scheduled-vm.yaml, in the editor of your choice: nano my-scheduled-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : V VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true scheduling : affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 100 preference : matchExpressions : - key : kubernetes.io/hostname operator : NotIn values : - NODE NAME Replace the following values: VM NAME : the name of your VM.
- Create a VirtualMachine manifest, such as my-scheduled-vm.yaml, in the editor of your choice: nano my-scheduled-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true scheduling : affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 100 preference : matchExpressions : - key : kubernetes.io/hostname operator : In values : - NODE NAME Replace the following values: VM NAME : the name of your VM.

### "Tutorial: Create and manage a Linux VM in VM Runtime on GDC \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Objectives Configure basic dependencies Create a StorageClass for VM Runtime on GDC Create a virtual network for your VMs to use Create a virtual machine boot disk Create a VM Edit a VM to add a new virtual disk Before you begin To complete this tutorial, you need access to the following resources and tools: Access to Google Distributed Cloud version 1.12.0 ( anthosBareMetalVersion: 1.12.0 ) or higher cluster.
- Create the disk using kubectl : kubectl apply -f my-data-disk.yaml Use kubectl to stop your VM before you attach the new virtual disk: kubectl virt stop VM NAME Edit your VM resource: kubectl edit gvm VM NAME Update the VirtualMachine YAML manifest to attach the disk at the end of the VM's spec.disks section: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : ... disks : - boot : true virtualMachineDiskName : DISK NAME - virtualMachineDiskName : DATA DISK NAME Replace DATA DISK NAME with the name of your disk created in the previous step.
- Use kubectl to start the VM: kubectl virt start VM NAME Clean up To delete the resources created in this tutorial, complete the following steps: Delete your VM: kubectl delete -f my-vm.yaml Delete your VirtualMachineDisk resources: kubectl delete -f my-data-disk.yaml kubectl delete -f my-disk.yaml If you don't want to keep the basic dependencies in your cluster, complete the following steps: Delete your virtual network: kubectl delete -f use-dhcp-network.yaml To remove the CSI driver from your cluster, follow the instructions from your storage partner.
- Create a manifest that defines a VirtualMachine , such as my-vm.yaml , in the editor of your choice: nano my-vm.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : osType : linux compute : cpu : vcpus : VCPU NUMBER memory : capacity : MEMORY SIZE interfaces : - name : eth0 networkName : NETWORK NAME default : true disks : - boot : true virtualMachineDiskName : DISK NAME Replace the following values: VM NAME : the name for your VM.

### "Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- Source ID: `site-docs-reference`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Delete All Delete the VM Runtime on GDC VirtualMachine along with all the resources: kubectl virt delete vm pos-vm --all The following example output confirms the deletion: vm "pos-vm" used the following resources: gvm: pos-vm VirtualMachineDisk: pos-vm-boot-dv Start deleting the resources: Deleted gvm "pos-vm" .
- The following example output shows the VMRuntime is ready: vmruntime.vm.cluster.gke.io/vmruntime condition met Install the virtctl plugin for kubectl : sudo -E bmctl install virtctl The following example output shows the virtctl plugin installation process is complete: Please check the logs at bmctl-workspace/log/install-virtctl-20220831-182135/install-virtctl.log [ 2022 -08-31 18 :21:35+0000 ] Install virtctl succeeded Verify installation of the virtctl plugin: kubectl virt The following example output shows that the virtctl plugin is available for use with kubectl : Available Commands: addvolume add a volume to a running VM completion generate the autocompletion script for the specified shell config Config subcommands. console Connect to a console of a virtual machine instance. create Create subcommands. delete Delete subcommands. ...
- This enables reuse of this VM image and saves time spent on importing the image when creating a new VM. kubectl virt delete vm pos-vm The following example output confirms the deletion: vm "pos-vm" used the following resources: gvm: pos-vm VirtualMachineDisk: pos-vm-boot-dv Start deleting the resources: Deleted gvm "pos-vm" .
- This document provides a step-by-step guide to deploy a virtual machine (VM) based workload into an installation of Google Distributed Cloud (software only) on bare metal using VM Runtime on GDC.

