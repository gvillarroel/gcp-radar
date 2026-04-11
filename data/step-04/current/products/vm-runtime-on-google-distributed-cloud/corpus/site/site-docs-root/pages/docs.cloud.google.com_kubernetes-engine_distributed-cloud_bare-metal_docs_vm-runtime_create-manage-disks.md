---
title: "Create and manage virtual disks in Google Distributed Cloud \_|\_ Google Distributed\
  \ Cloud (software only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-manage-disks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/create-manage-disks
  title: "Create and manage virtual disks in Google Distributed Cloud \_|\_ Google\
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
Create and manage virtual disks in Google Distributed Cloud
Stay organized with collections
Save and categorize content based on your preferences.
This document is intended for application owners that run Google Distributed Cloud.
This document shows you how to create and manage disk resources for virtual
machines (VMs) that use VM Runtime on GDC.
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
Create a VM with an attached disk
When you create a VM, you can attach an existing boot or data disk, create a
disk from an image (including for the boot disk), or create a blank disk.
Blank disk
In this scenario, you create a blank disk and attach it to the VM. This
scenario lets you create a data disk to store application data.
Create a manifest that defines a VirtualMachineDisk and VirtualMachine ,
such as my-vm.yaml , in the editor of your choice:
nano my-vm.yaml
Copy and paste the following YAML definition:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : DISK_NAME
spec :
size : 10Gi
---
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
name : VM_NAME
spec :
interfaces :
- name : eth0
networkName : pod-network
default : true
disks :
- boot : true
virtualMachineDiskName : VM_NAME -boot-dv
- virtualMachineDiskName : DISK_NAME
Replace the following:
DISK_NAME : the name of the blank disk
you're creating and attaching to your VM.
Note: Starting with Google Distributed Cloud version 1.13.0, when you create a VM,
VM Runtime on GDC sets the disk names specified with
virtualMachineDiskName as the serial number for the disk. For more
information, see Locating disks .
VM_NAME : the name of the VM you're
creating.
This example creates a blank 10Gi (10 gibibyte) disk named
DISK_NAME . In the VM's spec.disks
section, you must also attach a boot disk, such as from an image as shown in
the next section.
Save and close the manifest file in your editor.
Create the VM and disk using kubectl :
kubectl apply -f my-vm.yaml --kubeconfig KUBECONFIG
Replace KUBECONFIG with the path to
the cluster kubeconfig file.
From image
In this scenario, you create a disk from an image and attach it to the VM. This
scenario lets you create a boot disk, for example, from an image. You can also
create and attach data disks from an image.
Supported image sources
VM Runtime on GDC allows a variety of image formats
and supports three types of image sources that can be specified in the
VirtualMachineDisk spec. Each of the following examples creates 20 gibibyte
disk from a different supported image source.
Hypertext Transfer Protocol (HTTP)
The following VirtualMachineDisk example shows the basic structure for an
HTTP image source. The url field expects either an HTTP or HTTPS URL.
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : my-disk
spec :
source :
http :
url : https://download.cirros-cloud.net/0.4.0/cirros-0.4.0-x86_64-disk.img
size : 20GiB
storageClassName : local-shared
Cloud Storage
The following example shows how to create a disk from an image in a
Cloud Storage bucket. If the application default credentials on the machine
aren't sufficient to access the Cloud Storage URL, you must provide
credentials. In the following example, my-gcs is a secret containing a
base64-encoded service account key.
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : my-disk
spec :
source :
gcs :
url : gs://kubevirt-ci-vm-images/rhel8.2/rhel8_2_cloud.qcow2
secretRef : my-gcs
size : 20GiB
storageClassName : local-shared
If you used downloaded service account keys to create your cluster, you can
use the Artifact Registry service account key for Cloud Storage access. If
create a separate service account to access Cloud Storage, see
Configure a service account that can access a Cloud Storage bucket .
Use the following command to create a Kubernetes Secret from the downloaded
service account key file:
kubectl create secret generic SECRET_NAME --from-file = KEY_FILE --namespace default \
--kubeconfig KUBECONFIG
Replace the following:
SECRET_NAME : name for your Secret.
KEY_FILE : path to the downloaded
service account key JSON file. For example, bmctl-workspace/.sa-keys/my-project-anthos-baremetal-gcr.json .
KUBECONFIG : path to the cluster
kubeconfig file.
For more information on using credentials to access Cloud Storage, see
Create and use credentials to import images from Cloud Storage .
Container registry example
Container registries that comply with the Open Container Initiative (OCI)
distribution-spec are supported.
The following example creates a disk from an image stored in a Docker
registry.
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : my-disk
spec :
source :
registry :
url : docker://kubevirt/fedora-cloud-registry-disk-demo
size : 20GiB
storageClassName : local-shared
Valid image formats
You can use any of the following image formats when you you create a disk from
an image:
GNU zip (gzip) archive ( .gz )
RAW ( .raw , .img )
QEMU copy on write version 2 (qcow2) disk image ( .qcow2 )
XZ compressed archive ( .xz )
Virtual Machine disk (VMDK) file ( .vmdk )
VirtualBox Virtual Disk Image (VDI) file ( .vdi )
Virtual Hard Disk (VHD) image file ( .vdh )
Virtual Hard Disk version 2 (VDHX) file ( .vdhx )
ISO disc image file ( .iso )
Example of a disk created from an HTTP image
The following steps create a boot disk from an Ubuntu image:
Create a manifest that defines a VirtualMachineDisk and VirtualMachine ,
such as my-vm.yaml, in the editor of your choice:
nano my-vm.yaml
Copy and paste the following YAML definition:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : VM_NAME -boot-dv
spec :
size : 20Gi
source :
http :
url : https://cloud-images.ubuntu.com/releases/focal/release/ubuntu-20.04-server-cloudimg-amd64.img
---
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
name : VM_NAME
spec :
interfaces :
- name : eth0
networkName : pod-network
default : true
disks :
- boot : true
virtualMachineDiskName : VM_NAME -boot-dv
This example creates a 20Gi (20 gibibyte) disk named
VM_NAME -boot-dv using a public Ubuntu
image. In the VM's spec.disks section, the disk is set to boot: true .
Note: To import images from Cloud Storage, see
create and use credentials to import images from Cloud Storage .
Save and close the manifest in your editor.
Create the VM and disk using kubectl :
kubectl apply -f my-vm.yaml --kubeconfig KUBECONFIG
Replace KUBECONFIG with the path to
the cluster kubeconfig file.
Existing disk
In this scenario, you create a blank disk and attach it to the VM. This
scenario lets you create a data disk to store application data.
Create a VirtualMachine manifest, such as my-vm.yaml, in the editor of
your choice:
nano my-vm.yaml
Copy and paste the following YAML definition:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
name : VM_NAME
spec :
interfaces :
- name : eth0
networkName : pod-network
default : true
disks :
- boot : true
virtualMachineDiskName : VM_NAME -boot-dv
- virtualMachineDiskName : EXISTING_DISK_NAME
This example attaches an existing disk named
EXISTING_DISK_NAME .
In the VM's spec.disks section, you must also attach a boot disk, such as
from an image as shown in the preceding section.
Save and close the VM manifest in your editor.
Create the VM using kubectl :
kubectl apply -f my-vm.yaml --kubeconfig KUBECONFIG
Replace KUBECONFIG with the path to
the cluster kubeconfig file.
Locating disks
Starting with Google Distributed Cloud version 1.13.0, when you create a VM,
VM Runtime on GDC uses the disk names you specify in the VM resource to
set disk serial numbers. Specifically, the names you specify with
spec.disks.virtualMachineDiskName in the VirtualMachine custom resource are
used in the serial number for the disks. This feature makes it easier to locate
your disks in the VM when you need to perform disk operations, such as
formatting or mounting.
For example, if you created a VM and specified a boot disk named
sample-boot-dv your VirtualMachine custom resource looks something like
this:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
name : sample-vm
spec :
osType : Linux
compute :
cpu :
vcpus : 2
memory :
capacity : 4Gi
interfaces :
- name : eth0
networkName : pod-network
default : true
disks :
- boot : true
virtualMachineDiskName : sample-vm-boot-dv
- virtualMachineDiskName : attached-disk
For Linux VMs, when you log into your VM ,
you can run the following command to list disks by their serial number:
ls -l /dev/disk/by-id/
Your response should look something like this example output, where the disk
names appear as serial numbers:
total 0
lrwxrwxrwx 1 root root 9 Oct 19 17:17 ata-QEMU_HARDDISK_agentInstallation -> ../../sdb
lrwxrwxrwx 1 root root 9 Oct 19 17:17 ata-QEMU_HARDDISK_agentSADisk -> ../../sda
lrwxrwxrwx 1 root root 9 Oct 19 17:17 virtio-sample-boot-dv -> ../../vda
lrwxrwxrwx 1 root root 10 Oct 19 17:17 virtio-sample-boot-dv-part1 -> ../../vda1
lrwxrwxrwx 1 root root 11 Oct 19 17:17 virtio-sample-boot-dv-part14 -> ../../vda14
lrwxrwxrwx 1 root root 11 Oct 19 17:17 virtio-sample-boot-dv-part15 -> ../../vda15
lrwxrwxrwx 1 root root 11 Oct 19 17:17 virtio- attached-disk -> ../../vdb
Note the following situational feature behavior:
If the virtualMachineDiskName value is longer than 20 characters,
VM Runtime on GDC uses only the first 20 characters as the serial
number.
If there are two disks with the same first 20 characters, only the first
disk will have a serial number.
Create and attach disks to existing VM
If you have an existing VM, you can create and attach disks to support your
application lifecycles. The VM must be in a stopped state before you attach a
disk.
Blank disk
In this scenario, you create a blank disk and attach it to the VM. This
scenario lets you create a data disk to store application data.
Use kubectl to stop the VM, if needed:
kubectl virt stop vm VM_NAME --kubeconfig KUBECONFIG
Replace the following:
VM_NAME : the name of the VM that you
want to stop.
KUBECONFIG : the path to the
cluster kubeconfig file.
Edit your existing VM resource, such as my-vm :
kubectl edit gvm VM_NAME --kubeconfig KUBECONFIG
Update the VirtualMachine YAML manifest to add a VirtualMachineDisk
section at the top, and then attach the disk at the end of the VM's
spec.disks section:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : DISK_NAME
spec :
size : 10Gi
---
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
name : VM_NAME
spec :
interfaces :
- name : eth0
networkName : pod-network
default : true
disks :
- boot : true
virtualMachineDiskName : VM_NAME -boot-dv
- virtualMachineDiskName : DISK_NAME
This example creates a blank 10Gi (10 gibibyte) disk named
DISK_NAME .
Save and close the updated VM manifest in your editor.
Use kubectl to start the VM:
kubectl virt start vm VM_NAME --kubeconfig KUBECONFIG
From image
In this scenario, you create a disk from a source image and attach it to the
VM.
Note: For examples of supported images sources, see
Supported image sources . For a list of allowed image formats
see Valid image formats .
Use kubectl to stop the VM, if needed:
kubectl virt stop vm VM_NAME --kubeconfig KUBECONFIG
Replace the following:
VM_NAME : the name of the VM that you
want to stop.
KUBECONFIG : the path to the
cluster kubeconfig file.
Edit your existing VM resource, such as my-vm :
kubectl edit gvm VM_NAME --kubeconfig KUBECONFIG
Update the VirtualMachine manifest to add a VirtualMachineDisk section at
the top, and then attach the disk at the end of the VM's spec.disks section:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : DISK_NAME
spec :
size : 10Gi
source :
http :
url : http://example.com/my-disk-img.qcow2
---
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachine
metadata :
name : VM_NAME
spec :
interfaces :
- name : eth0
networkName : pod-network
default : true
disks :
- boot : true
virtualMachineDiskName : VM_NAME -boot-dv
- virtualMachineDiskName : DISK_NAME
This example creates a 10Gi (10 gibibyte) disk named
DISK_NAME from the
http://example.com/my-disk-img.qcow2 HTTP source.
Note: To import images from Cloud Storage, see
create and use credentials to import images from Cloud Storage .
Save and close the updated VM manifest in your editor.
Use kubectl to start the VM:
kubectl virt start vm VM_NAME --kubeconfig KUBECONFIG
Create a disk
In this scenario, you create the disk resources separately from the VM
resources. This scenario lets you create disks ahead of time, and then attach to
VMs as needed.
Blank disk
To create a blank disk, complete the following steps.
Create a VirtualMachineDisk manifest, such as my-disk.yaml, in the editor
of your choice:
nano my-disk.yaml
Copy and paste the following YAML definition:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : DISK_NAME
spec :
size : 10Gi
This example creates a blank 10Gi (10 gibibyte) disk named
DISK_NAME .
Save and close the disk manifest in your editor.
Create the disk using kubectl :
kubectl apply -f my-disk.yaml --kubeconfig KUBECONFIG
Replace KUBECONFIG with the path to
the cluster kubeconfig file.
From image
To create a disk from an image, complete the following steps.
Create a VirtualMachineDisk manifest, such as my-disk.yaml , in the
editor of your choice:
nano my-disk.yaml
Copy and paste the following YAML definition:
apiVersion : vm.cluster.gke.io/v1
kind : VirtualMachineDisk
metadata :
name : DISK_NAME
spec :
size : 20Gi
source :
http :
url : https://cloud-images.ubuntu.com/releases/focal/release/ubuntu-20.04-server-cloudimg-amd64.img
This example creates a 20Gi (20 gibibyte) disk named
DISK_NAME using a public Ubuntu image.
Save and close the disk manifest in your editor.
Create the disk using kubectl :
kubectl apply -f my-disk.yaml --kubeconfig KUBECONFIG
Replace KUBECONFIG with the path to
the cluster kubeconfig file.
What's next
Create and use credentials to import images from Cloud Storage .
Create and use storage classes in Google Distributed Cloud .
When you no longer need VMs or their virtual disk resources,
Delete a VM in Google Distributed Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
