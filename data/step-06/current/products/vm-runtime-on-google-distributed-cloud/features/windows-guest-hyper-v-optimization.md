---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.743Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Windows guest Hyper-V optimization"
feature_slug: "windows-guest-hyper-v-optimization"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config"
keywords:
  - "windows"
  - "guest"
  - "hyper"
  - "optimization"
  - "vm"
  - "runtime"
  - "now"
  - "enables"
---

# Windows guest Hyper-V optimization

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime now enables optimized Hyper-V settings automatically for Windows guest OS on physical server environments to improve performance.

## Extended Definition

VM Runtime now enables optimized Hyper-V settings automatically for Windows guest OS on physical server environments to improve performance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config)

## Supporting Pages

### "Connect to VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check your VirtualMachine custom resource to confirm it's configured to enable the guest agent: kubectl get gvm VM NAME -o yaml --kubeconfig KUBECONFIG The spec.osType field should be set to the operating system of your VM, Linux or Windows .
- Windows guest OS Use the following steps to reset a password for an existing user or create the initial password for a new user: Enable the guest agent in your Windows VM: Configure the VM to enable the guest agent .
- Configure passwordless SSH access to VMs Direct, passwordless SSH access to your VM is facilitated by a guest agent that's installed by VM Runtime on GDC.
- When you use the kubectl virt vnc command, VM Runtime on GDC opens VNC for you, so you aren't required to enable VNC in the guest OS.

### "Verified guest operating systems for VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/guest-os)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verified guest operating systems: RHEL 7 ( Extended Life Cycle Support available through June 2028 ) RHEL 8 ( Extended Update Support available through May 2025 ) Rocky Linux 8 ( reaches End of Life May 2029 ) Ubuntu 18.04 ( Expanded Security Maintenance ends April 2028 ) Ubuntu 20.04 ( Expanded Security Maintenance ends April 2030 ) Ubuntu 22.04 ( Expanded Security Maintenance ends March 2032 ) Windows Server 2016 ( extended support ends January 2027 ) Windows Server 2019 ( extended support ends January 2029 ) Windows Server 2022 ( extended support ends October 2031 ) Windows 10 Professional ( support ends October 2025 ) What's next To get started, Create a VM in Google Distributed Cloud .
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Verified guest operating systems for VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- This document lists the guest operating systems (OSes) that have been tested by Google and verified to work with VM Runtime on GDC.
- This isn't an exhaustive list and doesn't imply that operating systems that aren't listed don't work properly with VM Runtime on GDC.

### "Create a Windows VM from ISO image in Google Distributed Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document shows you how to create a Windows virtual machine (VM) that boots from an ISO using VM Runtime on GDC.
- When prompted, enter your Windows guest OS user credentials for your VM.
- Create the VirtualMachineDisk using kubectl : kubectl apply -f virtio-driver.yaml Create a Windows VM Create a VM that boots from the Windows ISO VirtualMachineDisk , and attaches the virtio drivers disk: Create a manifest that defines a VirtualMachineDisk for the boot volume and a VirtualMachine , such as windows-vm.yaml , in the editor of your choice: nano windows-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : VM NAME -boot-dv spec : size : 100Gi --- apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : osType : Windows disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true - virtualMachineDiskName : windows-iso - virtualMachineDiskName : virtio-driver compute : cpu : vcpus : 2 memory : capacity : 4Gi interfaces : - name : eth0 networkName : pod-network Replace VM NAME with the name that you want for your VM.
- Create a VirtualMachineDisk manifest, such as windows-iso.yaml , in the editor of your choice: nano windows-iso.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : windows-iso spec : source : http : url : IMG URL size : 10Gi diskType : cdrom Replace IMG URL with the HTTP path to your Windows ISO.

### "Configure VM startup routines \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-startup-config)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this case, cloud-init enables DHCP for all ethernet devices with names that start with an "e" ( e ): apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : "my-vm" spec : ... cloudInit : noCloud : userData : #cloud-config runcmd: - echo hello networkData : version: 2 ethernets: alleths: match: name: e dhcp4: true Cloud-init network data as a base64-encoded string The following example shows how to specify network data in base64-encoded format.
- Cloud-init user data VM Runtime on GDC supports cloud-init user data in cloud-config syntax , so begin your user data with #cloud-config .
- Prerequisites In order to configure a VM with startup directives, you must meet the following prerequisites: Enable VM Runtime on GDC .
- For instructions to create a VM by applying a manifest, see Tutorial: Create and manage a Linux VM in VM Runtime on GDC .

