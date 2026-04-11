---
title: "Create a Confidential VM instance with GPU \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance-with-gpu
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance-with-gpu
  title: "Create a Confidential VM instance with GPU \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Confidential VM
Guides
Send feedback
Create a Confidential VM instance with GPU
Stay organized with collections
Save and categorize content based on your preferences.
To use GPUs with Confidential VM, you must create
a Confidential VM instance using the spot or flex-start
provisioning model based on the
a3-highgpu-1g
machine type and use Intel TDX. After you create the VM instance, you then
enable confidential computing mode on the attached GPU.
Before you create a Confidential VM instance with GPU, make sure you have enough
GPU quota allocated to your Google Cloud
project.
GPU quota requirement
You need sufficient quota in the following quota types to create a Confidential VM
instance with GPU successfully:
Preemptible quota for the GPU models that you want to create in each region.
Global quota for the total number of GPUs of all types in all regions.
To request an increase to these GPU quotas, see
Request preemptible quota and
Request global quota .
Request preemptible quota
To request a regional preemptible NVIDIA H100 GPUs quota increase, do the
following:
In the Google Cloud console, go to the Quotas page.
Go to Quotas
In the Filter box, enter PREEMPTIBLE_NVIDIA_H100_GPUS , and then
press the Enter or Return key.
In the Dimensions column of the table, find the row with the region
whose quota you want to increase.
In that row, click
more_vert More actions , and then
click Edit quota .
In the Quota changes pane, enter the number of GPUs you want in the
New value box.
Click Submit request .
Request global quota
To request a global quota increase, do the following:
In the Google Cloud console, go to the Quotas page.
Go to Quotas
In the Filter box, enter GPUS_ALL_REGIONS , and then press the
Enter or Return key.
In the resulting row, click
more_vert More actions , and then
click Edit quota .
In the Quota changes pane, enter the number of GPUs you want in the
New value box.
Click Submit request .
What happens after a quota request
If your quota request is successful, you are sent an approval email. Wait 15
minutes after you receive the email, and then refresh the
Quotas page to check for the updated
quota. If the quota still hasn't been updated after 15 minutes, contact
Cloud Customer Care .
If your quota request is denied, you might receive an email explaining the next
steps you can take. To reapply for more quota, follow the instructions in the
email.
Create a Confidential VM instance with GPU
To create a VM instance using the spot or flex-start model, do the following:
To use the spot model, create an accelerator-optimized
Spot VM instance . For detailed steps, see
Spot model .
To use the flex-start model, create a
managed instance group (MIG) .
For detailed steps, see Flex-start model .
Caution: Don't flash the GPU firmware of the Confidential VM instances with
attached GPUs. This operation can cause instability and potential system
crashes.
Spot model
gcloud
To create an accelerator-optimized Spot VM instance with the
gcloud CLI, use the
instances create
sub-command with the --provisioning-model flag.
gcloud compute instances create INSTANCE_NAME \
--provisioning-model = SPOT \
--confidential-compute-type = TDX \
--machine-type = a3-highgpu-1g \
--maintenance-policy = TERMINATE \
--zone = ZONE_NAME \
--image-project = IMAGE_PROJECT \
--image-family = IMAGE_FAMILY_NAME \
--boot-disk-size = 30G
Provide the following values:
INSTANCE_NAME : The name of the new VM instance.
IMAGE_PROJECT : The project containing the supported
operating system image. We recommend using the ubuntu-os-cloud
image project for Ubuntu images. You can optionally use the
confidential-vm-images image project for Container-Optimized OS
images.
IMAGE_FAMILY_NAME : The family for the
Confidential VM-supported operating system image .
When using the ubuntu-os-cloud image project, we recommend using the
ubuntu-2404-lts image family. For Container-Optimized OS images
from the confidential-vm-images project, use the cos-tdx-113-lts
image family.
ZONE_NAME : The
supported zone
to create the VM in.
REST
To create a Spot VM instance, send the following POST
request with the appropriate body content.
The HTTP method and URL:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances
Request JSON body:
{
"name" : " INSTANCE_NAME " ,
"confidentialInstanceConfig" : {
"confidentialInstanceType" : "TDX"
},
"machineType" : "zones/ ZONE_NAME /machineTypes/a3-highgpu-1g" ,
"scheduling" : {
"onHostMaintenance" : "TERMINATE" ,
"provisioningModel" : "SPOT"
},
"disks" : [
{
"autoDelete" : true ,
"boot" : true ,
"index" : 0 ,
"initializeParams" : {
"diskSizeGb" : "30" ,
"sourceImage" : "projects/ IMAGE_PROJECT /global/images/family/ IMAGE_FAMILY_NAME "
},
"kind" : "compute#attachedDisk" ,
"mode" : "READ_WRITE" ,
"type" : "PERSISTENT"
}
],
"networkInterfaces" : [
{
"accessConfigs" : [
{
"name" : "external-nat" ,
"type" : "ONE_TO_ONE_NAT" ,
"kind" : "compute#accessConfig" ,
"networkTier" : "PREMIUM"
}
],
"kind" : "compute#networkInterface" ,
"name" : "nic0" ,
"network" : "projects/ PROJECT_ID /global/networks/default"
}
]
}
Provide the following values:
INSTANCE_NAME : The name of the new VM instance
template.
IMAGE_PROJECT : The project containing the supported
operating system image. We recommend using the ubuntu-os-cloud
image project for Ubuntu images. You can optionally use the
confidential-vm-images image project for Container-Optimized OS
images.
IMAGE_FAMILY_NAME : The family for the
Confidential VM-supported operating system image .
When using the ubuntu-os-cloud image project, we recommend using the
ubuntu-2404-lts image family. For Container-Optimized OS images
from the confidential-vm-images project, use the cos-tdx-113-lts
image family.
PROJECT_ID : Optional. The ID of the project to create
the VM in.
ZONE_NAME : The
supported zone
to create the VM in.
Flex-start model
To use the flex-start model , you
first create an instance template, and then create a
managed instance group (MIG)
using that template.
You can then add GPU VM instances to the MIG using
resize requests .
Using a MIG resize request with the flex-start provisioning model improves the
obtainability of GPU VM instances. For more information, see
About resize requests in a MIG .
Before you begin
See the
prerequisites for
creating a MIG and the
limitations
for creating a resize request in a MIG.
Create a MIG with GPU VM instances
To create an instance template, and then to use the template to create a MIG,
complete the following steps.
Create an instance template.
gcloud
gcloud beta compute instance-templates create INSTANCE_TEMPLATE_NAME \
--provisioning-model = FLEX_START \
--confidential-compute-type = TDX \
--machine-type = a3-highgpu-1g \
--maintenance-policy = TERMINATE \
--image-project = IMAGE_PROJECT \
--image-family = IMAGE_FAMILY_NAME \
--reservation-affinity = none \
--boot-disk-size = 30G \
--instance-termination-action = DELETE \
--max-run-duration = RUN_DURATION \
--project = PROJECT_ID
To enable
Secure Boot ,
you can optionally use the --shielded-secure-boot flag for VM instance
boots.
Provide the following values:
INSTANCE_TEMPLATE_NAME : The name of the new VM
instance template.
IMAGE_PROJECT : The project containing the supported
operating system image. We recommend using the ubuntu-os-cloud
image project for Ubuntu images. You can optionally use the
confidential-vm-images image project for Container-Optimized OS
images.
IMAGE_FAMILY_NAME : The family for the
Confidential VM-supported operating system image .
When using the ubuntu-os-cloud image project, we recommend using the
ubuntu-2404-lts image family. For Container-Optimized OS images
from the confidential-vm-images project, use the cos-tdx-113-lts
image family.
RUN_DURATION : The duration you want the requested
VM instances to run. You must format the value as the number of days,
hours, minutes, or seconds followed by d , h , m , and s
respectively. For example, specify 30m for 30 minutes or 1d2h3m4s
for one day, two hours, three minutes, and four seconds. The value must
be between 10 minutes and seven days.
PROJECT_ID : Optional. The ID of the project to create
the VM in.
REST
To create a Confidential VM instance template, send the following POST
request with the appropriate body content.
The HTTP method and URL:
POST https://compute.googleapis.com/compute/beta/projects/ PROJECT_ID /regions/ ZONE_NAME /instanceTemplates
Request JSON body:
{
"name" : " INSTANCE_TEMPLATE_NAME " ,
"properties" : {
"confidentialInstanceConfig" : {
"confidentialInstanceType" : "TDX"
},
"machineType" : "a3-highgpu-1g" ,
"scheduling" : {
"instanceTerminationAction" : "DELETE" ,
"maxRunDuration" : {
"seconds" : RUN_DURATION
},
"automaticRestart" : true ,
"onHostMaintenance" : "TERMINATE" ,
"provisioningModel" : "FLEX_START" ,
"preemptible" : false
},
"disks" : [
{
"autoDelete" : true ,
"index" : 0 ,
"boot" : true ,
"kind" : "compute#attachedDisk" ,
"mode" : "READ_WRITE" ,
"initializeParams" : {
"sourceImage" : "projects/ IMAGE_PROJECT /global/images/family/ IMAGE_FAMILY_NAME " ,
"diskSizeGb" : "30"
},
"type" : "PERSISTENT"
}
],
"networkInterfaces" : [
{
"accessConfigs" : [
{
"kind" : "compute#accessConfig" ,
"name" : "external-nat" ,
"networkTier" : "PREMIUM" ,
"type" : "ONE_TO_ONE_NAT"
}
],
"kind" : "compute#networkInterface" ,
"name" : "nic0" ,
"network" : "projects/ PROJECT_ID /global/networks/default"
}
],
"reservationAffinity" : {
"consumeReservationType" : "NO_RESERVATION"
},
"canIpForward" : false
}
}
To enable Secure Boot, you can optionally include the following object for
VM instance boots.
"shieldedInstanceConfig" : {
"enableIntegrityMonitoring" : true ,
"enableSecureBoot" : true ,
"enableVtpm" : true
}
Provide the following values:
PROJECT_ID : Optional. The ID of the project to create
the VM in.
ZONE_NAME : The
supported zone
to create the MIG in.
INSTANCE_TEMPLATE_NAME : The name of the new VM
instance template.
IMAGE_PROJECT : The project containing the supported
operating system image. We recommend using the ubuntu-os-cloud
image project for Ubuntu images. You can optionally use the
confidential-vm-images image project for Container-Optimized OS
images.
IMAGE_FAMILY_NAME : The family for the
Confidential VM-supported operating system image .
When using the ubuntu-os-cloud image project, we recommend using the
ubuntu-2404-lts image family. For Container-Optimized OS images
from the confidential-vm-images project, use the cos-tdx-113-lts
image family.
RUN_DURATION : The duration, in seconds, that you want
the requested VM instances to run. The value must be between 600 and
604800 seconds, which corresponds to a range between 10 minutes and
seven days.
Create a MIG and a resize request
to add GPU VM instances all at once.
List the instances present in the MIG.
gcloud
gcloud compute instance-groups managed list-instances INSTANCE_GROUP_NAME \
--zone = ZONE_NAME \
--project = PROJECT_ID
Provide the following values:
INSTANCE_GROUP_NAME : The name of the MIG.
ZONE_NAME : The
supported zone
to get a list of VM instances from.
PROJECT_ID : Optional. The ID of the project to get a
list of VM instances from.
REST
To list all instances, send the following GET request.
The HTTP method and URL:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/instanceTemplates
To narrow the list of instances to a specific zone, send the following
GET request.
The HTTP method and URL:
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ ZONE_NAME /instanceTemplates
Provide the following values:
ZONE_NAME : The
supported zone
to get a list of VM instances from.
PROJECT_ID : The ID of the project to get a list of
VM instances from.
Enable confidential computing mode on the GPU
Connect to a VM instance in the MIG using the
gcloud compute ssh command .
gcloud compute ssh
Update the package list and install the necessary tools and libraries.
sudo apt-get update --yes
sudo apt-get install linux-headers- $( uname -r )
sudo apt install -y build-essential libxml2 libncurses5-dev pkg-config libvulkan1 gcc-12
Install the appropriate GPU drivers on the VM instance .
For Secure Boot enabled VM instances, see
Install GPU drivers (Secure Boot VMs) .
We recommend using the nvidia-driver-575-open driver version.
To configure a secure communication between the GPU and the GPU driver,
enable the Linux Kernel Crypto API (LKCA).
echo "install nvidia /sbin/modprobe ecdsa_generic; /sbin/modprobe ecdh; /sbin/modprobe --ignore-install nvidia" | sudo tee /etc/modprobe.d/nvidia-lkca.conf
sudo update-initramfs -u
Enable persistence mode to establish a secure Security Protocol and Data
Model (SPDM) connection between the GPU and the GPU driver.
sudo test -f /usr/lib/systemd/system/nvidia-persistenced.service && sudo sed -i "s/no-persistence-mode/uvm-persistence-mode/g" /usr/lib/systemd/system/nvidia-persistenced.service
sudo systemctl daemon-reload
Reboot the VM instance to apply LKCA and persistence mode configurations.
sudo reboot
(Optional) Install the following CUDA samples.
wget -O cuda-samples.tar.gz https://github.com/NVIDIA/cuda-samples/archive/refs/tags/v12.5.tar.gz
tar xzvf cuda-samples.tar.gz
What's next
Learn how to
verify confidential mode is enabled on GPUs .
Learn how to check your GPU quota .
Read
GPU VMs and preemptible allocation quotas
to understand quota consumption.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
