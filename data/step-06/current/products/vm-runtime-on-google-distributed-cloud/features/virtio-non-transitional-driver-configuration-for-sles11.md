---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.742Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Virtio non-transitional driver configuration for SLES11"
feature_slug: "virtio-non-transitional-driver-configuration-for-sles11"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm"
keywords:
  - "virtio"
  - "non"
  - "transitional"
  - "driver"
  - "configuration"
  - "for"
  - "sles11"
  - "vm"
---

# Virtio non-transitional driver configuration for SLES11

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime on Google Distributed Cloud now supports configuring the virtio non-transitional driver for SLES11 by exposing the KubeVirt knob at the KubeVM layer.

## Extended Definition

VM Runtime on Google Distributed Cloud now supports configuring the virtio non-transitional driver for SLES11 by exposing the KubeVirt knob at the KubeVM layer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm)

## Supporting Pages

### "Edit VM configuration in VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/edit-vm)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- The following example output shows the condensed information for a VM, with a change to the network and IP address configuration successfully applied: Name : vm1 Namespace : default Labels : < none > Annotations : < none > API Version : vm.cluster.gke.io/v1 Kind : VirtualMachine ...
- The following example output shows the condensed information for a VM, with a change to the number of vCPUs successfully applied: Name : vm1 Namespace : default Labels : < none > Annotations : < none > API Version : vm.cluster.gke.io/v1 Kind : VirtualMachine ...
- The following example output shows the condensed information for a VM, with a change to the attached disks successfully applied: Name : vm1 Namespace : default Labels : < none > Annotations : < none > API Version : vm.cluster.gke.io/v1 Kind : VirtualMachine ...
- Configure your VM for automatic restarts Many VM configuration changes, such as changes to the compute settings, require the VM to be stopped and restarted for the changes to get synchronized with the corresponding VM instance ( VirtualMachineInstance ).

### "List and view VM information using VM Runtime on GDC \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/list-view-vms)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example output snippet shows the detailed information for the VM that you specify: Name: vm1 Namespace: default Labels: <none> Annotations: <none> API Version: vm.cluster.gke.io/v1 Kind: VirtualMachine Metadata: Creation Timestamp: 2022 -04-25T23:36:24Z Finalizers: vm.cluster.gke.io/vm-finalizer Generation: 1 Managed Fields: API Version: vm.cluster.gke.io/v1 Fields Type: FieldsV1 fieldsV1: ...
- This option is useful to view additional configuration information for a VM, such as storage or networking.
- Spec: Compute: Interfaces: Name: eth0 Network Name: pod-network Virt Spec: Template: Metadata: Creation Timestamp: <nil> Labels: kubevirt.io/vm: vm1 Spec: Domain: Cpu: Cores: 2 Devices: Disks: Boot Order: 1 Disk: Bus: virtio Name: vm1-boot-dv Resources: Requests: Memory: 4Gi Volumes: Data Volume: Name: vm1-boot-dv Name: vm1-boot-dv Status: ...
- View a list of all VMs using kubectl get gvm : kubectl get gvm --all-namespaces The following example output shows the VM information: NAME STATUS AGE IP vm1 Running 7m 192 .168.2.72 vm2 Running 4m 192 .168.2.73 Single namespace To view a list of VMs in a specific namespace, use the --namespace parameter with the kubectl command.

### "Tutorial: Create and manage a Linux VM in VM Runtime on GDC \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-create-vm)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Create the disk using kubectl : kubectl apply -f my-data-disk.yaml Use kubectl to stop your VM before you attach the new virtual disk: kubectl virt stop VM NAME Edit your VM resource: kubectl edit gvm VM NAME Update the VirtualMachine YAML manifest to attach the disk at the end of the VM's spec.disks section: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : ... disks : - boot : true virtualMachineDiskName : DISK NAME - virtualMachineDiskName : DATA DISK NAME Replace DATA DISK NAME with the name of your disk created in the previous step.
- Use kubectl to start the VM: kubectl virt start VM NAME Clean up To delete the resources created in this tutorial, complete the following steps: Delete your VM: kubectl delete -f my-vm.yaml Delete your VirtualMachineDisk resources: kubectl delete -f my-data-disk.yaml kubectl delete -f my-disk.yaml If you don't want to keep the basic dependencies in your cluster, complete the following steps: Delete your virtual network: kubectl delete -f use-dhcp-network.yaml To remove the CSI driver from your cluster, follow the instructions from your storage partner.
- Create a manifest that defines a VirtualMachine , such as my-vm.yaml , in the editor of your choice: nano my-vm.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : osType : linux compute : cpu : vcpus : VCPU NUMBER memory : capacity : MEMORY SIZE interfaces : - name : eth0 networkName : NETWORK NAME default : true disks : - boot : true virtualMachineDiskName : DISK NAME Replace the following values: VM NAME : the name for your VM.
- Create a VirtualMachineDisk manifest, such as my-disk.yaml , in the editor of your choice: nano my-disk.yaml Copy and paste the following YAML definition: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : DISK NAME spec : size : 20Gi storageClassName : STORAGE CLASS NAME source : http : url : https://cloud-images.ubuntu.com/releases/focal/release/ubuntu-20.04-server-cloudimg-amd64.img Replace the following values: DISK NAME : the name that you want for your disk.

### "Create a Windows VM from ISO image in Google Distributed Cloud \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/windows-vm)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create the VirtualMachineDisk using kubectl : kubectl apply -f virtio-driver.yaml Create a Windows VM Create a VM that boots from the Windows ISO VirtualMachineDisk , and attaches the virtio drivers disk: Create a manifest that defines a VirtualMachineDisk for the boot volume and a VirtualMachine , such as windows-vm.yaml , in the editor of your choice: nano windows-vm.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : VM NAME -boot-dv spec : size : 100Gi --- apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachine metadata : name : VM NAME spec : osType : Windows disks : - virtualMachineDiskName : VM NAME -boot-dv boot : true - virtualMachineDiskName : windows-iso - virtualMachineDiskName : virtio-driver compute : cpu : vcpus : 2 memory : capacity : 4Gi interfaces : - name : eth0 networkName : pod-network Replace VM NAME with the name that you want for your VM.
- To provide the virtio drivers to the VM, complete the following steps: Create a VirtualMachineDisk manifest, such as virtio-driver.yaml , in the editor of your choice: nano virtio-driver.yaml Copy and paste the following YAML manifest: apiVersion : vm.cluster.gke.io/v1 kind : VirtualMachineDisk metadata : name : virtio-driver spec : size : 1Gi source : registry : url : docker://quay.io/kubevirt/virtio-container-disk:latest diskType : cdrom This manifest pulls the latest virtio drivers from a public Docker repo and sets the diskType as cdrom .
- Detach the ISO image and drivers disk After the Windows install is complete, remove the virtio drivers disk and Windows ISO image from the VM: Stop your Windows VM: kubectl virt stop VM NAME Replace VM NAME with the name of your Windows VM.
- Create the VirtualMachineDisk using kubectl : kubectl apply -f windows-iso.yaml Create a VM drivers disk To successfully boot from a Windows ISO and complete the install process, the VM needs access to the virtio drivers .

