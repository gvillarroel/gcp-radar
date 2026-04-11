---
title: "Create a VM with specific CPU and memory resources using VM Runtime on GDC\
  \ \_|\_ Google Distributed Cloud (software only) for bare metal \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/compute-configurations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/compute-configurations
  title: "Create a VM with specific CPU and memory resources using VM Runtime on GDC\
    \ \_|\_ Google Distributed Cloud (software only) for bare metal \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Create a VM with specific CPU and memory resources using VM Runtime on GDC
Stay organized with collections
Save and categorize content based on your preferences.
This document is intended for application owners and platform administrators
that run Google Distributed Cloud. This document shows you how to create and use VM
types or manually specify CPU and memory resources when you create VMs that use
VM Runtime on GDC.
Before you begin
To complete this document, you need access to the following resources:
Access to Google Distributed Cloud version 1.12.0 ( anthosBareMetalVersion: 1.12.0 )
or higher cluster. You can use any cluster type capable of running workloads.
If needed,
try Google Distributed Cloud on Compute Engine
or see the
cluster creation overview .
The virtctl client tool installed as a plugin for kubectl . If needed,
install the virtctl client tool .
Create a VM
When you create a VM, you can manually specify the CPU and memory requirements.
This ability lets you create VMs with the appropriate compute resources to match
your application needs.
To create a VM and manually specify the CPU and memory requirements, use the
following steps.
CLI
Use kubectl to create a VM:
kubectl virt create vm VM_NAME \
--image ubuntu20.04 \
--cpu CPU_NUMBER \
--memory MEMORY_SIZE
Replace the following values:
VM_NAME : the name for your VM. For more information
on name constraints, see
Object names and IDs .
CPU_NUMBER : The number of virtual CPUs (vCPUs)to
assign to the VM.
You can assign between 1 and 96 vCPUs to a VM.
MEMORY_SIZE : The amount of memory to assign to the
VM.
You can assign between 1M and 1T of memory to a VM. For more
information, see
Memory resource units .
Note: In the ~/google-virtctl directory, a
VM_NAME .yaml file is created. You can
view the content of this file to see the definition of the Kubernetes
resources that were created by the VM Runtime on GDC.
Manifest
Create a VirtualMachine manifest, such as my-custom-vm.yaml , in the
editor of your choice:
nano my-custom-vm.yaml
Copy and paste the following YAML manifest:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
name : VM_NAME
spec :
compute :
cpu :
vcpus : VCPU_NUMBER
memory :
capacity : MEMORY_SIZE
interfaces :
- name : eth0
networkName : pod-network
default : true
disks :
- virtualMachineDiskName : VM_NAME -boot-dv
boot : true
In this YAML file, define the following settings:
VM_NAME : the name for your VM. For more information
on name constraints, see
Object names and IDs .
VCPU_NUMBER : The number of vCPUs to assign to the VM.
You can assign between 1 and 96 vCPUs to a VM.
MEMORY_SIZE : The amount of memory to assign to the VM.
You can assign between 1M and 1T of memory to a VM. For more
information, see
Memory resource units .
The VM connects eth0 to the default pod-network network.
The boot disk named VM_NAME -boot-dv must already
exist. For more information, see
Create and manage virtual disks .
Save and close the VM manifest in your editor.
Create the VM using kubectl :
kubectl apply -f my-custom-vm.yaml
Create and use VM types
When you enable VM Runtime on GDC, a new VirtualMachineType custom
resource definition is available. This definition is used to specify CPU and
memory resources of a VM. You can create VM types for the different workloads
you need, and apply a consistent set of compute resources to VMs based on these
types.
If VM Runtime on GDC is enabled in Google Distributed Cloud, the
vm-controller-manager installs a predefined VM type. The following definition
shows the default example-machinetype VM type:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineType
metadata :
name : "example-machinetype"
labels :
vm.cluster.gke.io/predefined-machinetype : "true"
spec :
cpu :
vcpus : 2
memory :
capacity : 4G
You can't update this predefined VM type. This predefined VM type is
re-installed if it doesn't exist in the cluster every time the
vm-controller-manager is started or restarted, such as if you deleted the VM
type.
Create a VM type
You can create your own VM types to fit the compute needs of your workloads.
Create a VirtualMachineType manifest such as my-vm-type.yaml , in the
editor of your choice:
nano my-vm-type.yaml
Copy and paste the following YAML manifest:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineType
metadata :
name : my-vm-type
spec :
cpu :
vcpus : VCPU_NUMBER
memory :
capacity : MEMORY_SIZE
In this VM type, you define the following settings:
VM_NAME : the name for your VM. For more information
on name constraints, see
Object names and IDs .
VCPU_NUMBER : The number of vCPUs to assign to the VM.
You can assign between 1 and 96 vCPUs to a VM.
MEMORY_SIZE : The amount of memory to assign to the VM.
You can assign between 1M and 1T of memory to a VM. For more
information, see
Memory resource units .
Save and close the VM type manifest in your editor.
Create the VM type using kubectl :
kubectl apply -f my-vm-type.yaml
Create a VM using a VM type
Specify a VM type in your VirtualMachine manifest to apply predefined
compute settings to your VM.
Create a VirtualMachine manifest, such as my-custom-vm.yaml , in the
editor of your choice.
nano my-custom-vm.yaml
Copy and paste the following YAML manifest:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
name : VM_NAME
spec :
compute :
virtualMachineTypeName : my-vm-type
interfaces :
- name : eth0
networkName : pod-network
default : true
disks :
- virtualMachineDiskName : VM_NAME -boot-dv
boot : true
In this YAML file, specify the name of your custom VM type that you created in
the previous section, such as my-vm-type , as the value for
the virtualMachineTypeName .
The VM connects eth0 to the default pod-network network.
The boot disk named VM_NAME -boot-dv must already
exist. For more information, see
Create and manage virtual disks .
Save and close the VM manifest in your editor.
Create the VM using kubectl :
kubectl apply -f my-custom-vm.yaml
What's next
Edit a VM in Google Distributed Cloud .
When you no longer need VMs,
Delete a VM in Google Distributed Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
