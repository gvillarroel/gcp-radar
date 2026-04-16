---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.738Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Rocky Linux GPU guest OS support"
feature_slug: "rocky-linux-gpu-guest-os-support"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config"
keywords:
  - "rocky"
  - "linux"
  - "gpu"
  - "guest"
  - "os"
  - "added"
  - "for"
  - "operating"
---

# Rocky Linux GPU guest OS support

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

Added GPU support for Rocky Linux guest operating systems, with package management via dnf.

## Extended Definition

Added GPU support for Rocky Linux guest operating systems, with package management via dnf.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config)

## Supporting Pages

### "Verified guest operating systems for VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verified guest operating systems: RHEL 7 ( Extended Life Cycle Support available through June 2028 ) RHEL 8 ( Extended Update Support available through May 2025 ) Rocky Linux 8 ( reaches End of Life May 2029 ) Ubuntu 18.04 ( Expanded Security Maintenance ends April 2028 ) Ubuntu 20.04 ( Expanded Security Maintenance ends April 2030 ) Ubuntu 22.04 ( Expanded Security Maintenance ends March 2032 ) Windows Server 2016 ( extended support ends January 2027 ) Windows Server 2019 ( extended support ends January 2029 ) Windows Server 2022 ( extended support ends October 2031 ) Windows 10 Professional ( support ends October 2025 ) What's next To get started, Create a VM in Google Distributed Cloud .
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Verified guest operating systems for VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- This document lists the guest operating systems (OSes) that have been tested by Google and verified to work with VM Runtime on GDC.
- For example, if a given Red Hat Enterprise Linux (RHEL) 8.x is verified, then RHEL 8 minor releases such as RHEL 8.y or RHEL 8.z ought to work without any issues, even though they aren't explicitly tested and verified.

### "Enable and use NVIDIA GPUS in VMs with VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/use-gpu)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get the kernel version of your node: KERNEL VERSION = " $( uname -r ) " Update your Ubuntu node and install the appropriate kernel headers: sudo apt update && \ apt install -y linux-headers- ${ KERNEL VERSION } Install the build-essential package so that you can compile the Nvidia drivers in a following step: sudo apt install -y build-essential Download the appropriate NVIDIA driver package for your GPU.
- The following example output shows that the allocatable GPU name on this node is NVIDIA A100 SXM4 40GB : Name: bm-node1 Roles: worker [ ... ] Allocatable: cpu: 47810m [ ... ] memory: 336929400Ki nvidia.com/gpu-vm-NVIDIA A100 SXM4 40GB: 1 [ ... ] Create a VirtualMachine manifest, such as my-gpu-vm.yaml , in the editor of your choice: nano my-gpu-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : interfaces : - name : eth0 networkName : pod-network default : true disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true gpu : model : nvidia.com/gpu-vm- GPU NAME quantity : 1 In this YAML file, define the following settings: VM NAME : the name for your VM.
- The following example output shows the desired state: NAME READY STATUS RESTARTS AGE gpu-controller-controller-manager-gwvcb 2 /2 Running 0 10m kubevirt-gpu-dp-daemonset-2lfkl 1 /1 Running 0 10m kubevm-gpu-driver-daemonset-5fwh6 1 /1 Running 0 10m nvidia-gpu-dp-daemonset-9zq2w 1 /1 Running 0 10m nvidia-mig-manager-5g7pz 1 /1 Running 0 10m vm-controller-controller-manager-7b6df6979b 2 /2 Running 2 ( 13m ago ) 14m Verify that the GPUs are available for use when the GPU controllers all report their status as Running : kubectl get gpuallocations --namespace vm-system The following example output shows that the GPUs on the nodes are available for use.
- Verify that the GPUs report their ALLOCATED status as true : kubectl get gpuallocations --namespace vm-system The following example output shows that the GPUs on the nodes are available for use: NAME ALLOCATED DEVICEMODEL gpu-w1 true Tesla A100 SXM4 40GB gpu-w2 true Tesla A100 SXM4 40GB Create a VM with GPU support You can now create a VM that uses the GPU from the node.

### "Connect to VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To disable the guest agent: Use kubectl to stop your VM before you make changes to the configuration: kubectl virt stop VM NAME --kubeconfig KUBECONFIG Edit your VM resource: kubectl edit gvm VM NAME --kubeconfig KUBECONFIG Update the VirtualMachine configuration to add an empty spec.guestEnvironment explicitly: apiVersion : vm.cluster.gke.io/v1alpha1 kind : VirtualMachine metadata : name : vm-example namespace : default spec : compute : ... osType : Linux guestEnvironment : {} Save and close the updated VM manifest in your editor.
- Check your VirtualMachine custom resource to confirm it's configured to enable the guest agent: kubectl get gvm VM NAME -o yaml --kubeconfig KUBECONFIG The spec.osType field should be set to the operating system of your VM, Linux or Windows .
- Linux guest OS For Linux VMs, user credentials can be built in to your custom images, or can be specified when you create a VM.
- The process for creating initial user credentials differs for Linux and Windows guest operating systems.

### "Configure VM startup routines \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Windows guest OSes aren't supported for this capability, since they don't support cloud-init.
- Use a verified Linux guest OS and set osType to Linux in the VM manifest.
- For instructions to create a VM by applying a manifest, see Tutorial: Create and manage a Linux VM in VM Runtime on GDC .
- For instructions to create a VM by applying a manifest, see Tutorial: Create and manage a Linux VM in VM Runtime on GDC .

