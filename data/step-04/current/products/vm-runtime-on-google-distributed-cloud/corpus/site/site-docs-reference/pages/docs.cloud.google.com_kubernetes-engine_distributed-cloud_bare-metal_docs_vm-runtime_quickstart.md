---
title: "Quickstart: Create a VM in Google Distributed Cloud clusters \_|\_ Google\
  \ Distributed Cloud (software only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/quickstart
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/quickstart
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/quickstart
  title: "Quickstart: Create a VM in Google Distributed Cloud clusters \_|\_ Google\
    \ Distributed Cloud (software only) for bare metal \_|\_ Google Cloud Documentation"
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
Quickstart: Create a VM in Google Distributed Cloud clusters
Stay organized with collections
Save and categorize content based on your preferences.
This quickstart shows you how to use VM Runtime on GDC to create a
virtual machine (VM) on Google Distributed Cloud. VM Runtime on GDC uses
KubeVirt
to orchestrate VMs on clusters, and lets you work with your VM-based apps and
workloads in a uniform development environment.
Before you begin
To complete this quickstart, you need access to Google Distributed Cloud version
1.12 ( anthosBareMetalVersion: 1.12 ) or higher cluster. You can use any
cluster type capable of running workloads. If needed,
try Google Distributed Cloud on Compute Engine
or see the
cluster creation overview .
Enable VM Runtime on GDC
VM Runtime on GDC is automatically installed in Google Distributed Cloud
version 1.10 or higher, but is disabled by default. Before you can run VM
resources in your Google Distributed Cloud, you must enable the
VM Runtime on GDC.
bmctl
Google Distributed Cloud version 1.11 or higher can use the bmctl command-line tool:
To enable the runtime, use the bmctl tool:
bmctl enable vmruntime --kubeconfig KUBECONFIG_PATH
Provide the path to the kubeconfig file for your cluster.
Google Distributed Cloud generates the kubeconfig file on the admin
workstation when you create a cluster. By default, the path is
bmctl-workspace/ CLUSTER_NAME / CLUSTER_NAME -kubeconfig .
If VM Runtime on GDC is already enabled, the command returns an
error.
Custom resource
Google Distributed Cloud version 1.10 or higher can use a custom resource definition
to enable VM Runtime on GDC. This custom resource is installed by
default.
Edit the VMRuntime custom resource:
kubectl edit vmruntime
Set enabled:true in the spec:
apiVersion : vm.cluster.gke.io/v1
kind : VMRuntime
metadata :
name : vmruntime
spec :
enabled : true
# useEmulation defaults to "false" if not set.
useEmulation : true
# vmImageFormat defaults to "qcow2" if not set.
vmImageFormat : qcow2
In the preceding spec section, the following values can be set:
enabled : set to true to enable VM Runtime on GDC
useEmulation : If your node doesn't support hardware virtualization, or
you aren't sure, set the value to true. If available, hardware
virtualization provides better performance than software emulation. The
useEmulation field defaults to false , if it isn't specified.
vmImageFormat : Supports two disk image format values: raw and
qcow2 . If you don't set vmImageFormat , the
VM Runtime on GDC uses the raw disk image format to create
VMs. The raw format may provide improved performance over qcow2 , a
copy on write format, but may use more disk. For more information about
the image formats for your VM, see
Disk image file formats
in the QEMU documentation.
Save the custom resource in your editor.
Verify that the VMRuntime custom resource is enabled:
kubectl describe vmruntime vmruntime
The details of the VMRuntime custom resource include a Status section.
VM Runtime on GDC is enabled and working when
VMRuntime.Status.Ready shows as true .
Install the virtctl client tool
To create and manage VMs, install the
virtctl client tool .
Install the virtctl client tool as a kubectl plugin:
export GOOGLE_APPLICATION_CREDENTIALS = " PATH_TO_SERVICE_ACCOUNT_KEY /bm-gcr.json"
sudo -E bmctl install virtctl
The credentials let you authenticate and download the virtctl client tool,
then install to /usr/bin/kubectl-virt on your local machine.
Verify that the virtctl plugin is installed:
kubectl plugin list
If kubectl-virt is listed in the response, the plugin is successfully
installed.
If kubectl-virt is not listed, check the install-virtctl.log file as noted
in the output of the previous bmctl install command, such as
bmctl-workspace/log/install-virtctl-[date]/install-virtctl.log .
Create a VM
In this quickstart, you use the kubectl CLI to create a VM that uses a public
VM image and default credentials.
Note: For instructions on creating a VM from a VirtualMachine YAML manifest
file, see
Tutorial: Create and manage a Linux VM in VM Runtime on GDC .
Create a VM in your cluster. The virtctl plugin is used with the
kubectl command:
kubectl virt create vm VM_NAME \
--image ubuntu20.04 \
--configure-initial-password USERNAME : PASSWORD
This command creates an Ubuntu 20.04 VM and defaults of 2 CPU, 4Gi
memory, and a 20Gi boot disk in ReadWriteOnce mode using the
local-shared storage class. Replace the following values:
VM_NAME : name for your VM. VM names
must contain only lowercase alphanumeric characters or '-', start and end
with an alphanumeric character, and contain at most 63 characters. For
more information, see
RFC 1123 Label Names
in the Kubernetes documentation.
USERNAME : user name for the account to create on the
VM.
PASSWORD : password for the user account.
If you receive an error about CLI parameters, verify that your cluster is at
version 1.11.1 or higher and that you have the latest version of the
virtctl client tool. For more information about CLI errors, consult the
console log. For username and password rules, see the documentation for the
guest operating system (OS). If something isn't working as expected, check for
VM Runtime on GDC known issues .
Note: The preceding command creates a YAML file, such as vm-sample1.yaml , in
the ~/google-virtctl directory. You can view the content of this file to see
the definition of the Kubernetes resources that were created by
VM Runtime on GDC.
It can take a few minutes to create the VM. Check the status of the VM with
the kubectl command:
kubectl get gvm
The following example output shows the VM in a Running state:
NAME STATUS AGE IP
vm-sample1 Running 64s 192.168.2.124
Connect to your VM
When your VM is running, connect to the console of the VM.
To access a VM from the console, use kubectl :
kubectl virt console VM_NAME
When prompted, enter the user credentials you specified to create the VM.
After you have successfully connected to the console of the VM, exit the VM
session and console:
Ctrl + ]
Clean up
To clean up the resources created in this quickstart, follow these steps.
To delete the VM and associated DataVolume, use kubectl :
kubectl virt delete vm VM_NAME --all
What's next
Manage the power state of a VM in Google Distributed Cloud .
Edit a VM in Google Distributed Cloud .
View VM console logs in Google Distributed Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
