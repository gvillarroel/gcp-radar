---
title: "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus
  title: "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Container-Optimized OS
Guides
Send feedback
Running instances with GPU accelerators
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use NVIDIA graphics processing unit (GPU) hardware
accelerators on Container-Optimized OS virtual machine (VM) instances.
Overview
By using Compute Engine, you can create VM instances running
Container-Optimized OS that have GPUs attached. You can only use two
machine families when running GPUs on Compute Engine: accelerator-optimized
and N1 general-purpose.
For accelerator-optimized machine types, each machine type has a specific
model of NVIDIA GPUs attached.
For A4 accelerator-optimized machine types,
NVIDIA B200 GPUs are attached.
For A3 Ultra accelerator-optimized machine types,
NVIDIA H200 141GB GPUs are attached.
For A3 accelerator-optimized machine types,
NVIDIA H100 80GB GPUs are attached.
For A2 accelerator-optimized machine types,
NVIDIA A100 GPUs are attached.
These are available in both A100 40GB and A100 80GB options.
For G2 accelerator-optimized machine types,
NVIDIA L4 GPUs are attached.
For N1 general-purpose machine types, you can attach the following GPUs:
NVIDIA T4
NVIDIA V100
NVIDIA P100
NVIDIA P4
GPUs provide compute power to drive deep-learning tasks such as image recognition
and natural language processing, as well as other compute-intensive tasks such
as video transcoding and image processing.
Google Cloud provides a seamless experience for you to run your GPU workloads
within containers on Container-Optimized OS VM instances so that
you can benefit from other Container-Optimized OS features such as
security and reliability.
To learn more about the use cases for GPUs, see Cloud GPUs .
To learn about using GPUs on Google Kubernetes Engine (GKE), see
Running GPUs on GKE .
Requirements
Running GPUs on Container-Optimized OS VM instances has the following
requirements:
Container-Optimized OS x86 images: only x86-based Container-Optimized OS
images support running GPUs. Arm-based Container-Optimized OS images don't
support the feature.
Container-Optimized OS version: To run GPUs on Container-Optimized OS VM
instances, the
Container-Optimized OS release milestone
must be a LTS milestone and the milestone number must be 85 or higher.
GPU quota: You must have Compute Engine GPU quota
in your chosen zone before you can create Container-Optimized OS VM
instances with GPUs. To ensure that you have enough GPU quota in your project,
see Quotas in the Google Cloud console.
If you require additional GPU quota, you must
request GPU quota in the Google Cloud console.
If you have an established billing account, your project automatically receives
GPU quota after you submit the quota request.
Note: By default, free trial accounts
don't receive GPU quota.
NVIDIA GPU drivers: You must install NVIDIA GPU drivers by yourself on
your Container-Optimized OS VM instances. This section
explains how to install the drivers on Container-Optimized OS VM
instances.
Create a VM
The following sections explain how to run GPUs on Container-Optimized OS
VMs.
First, you need a Container-Optimized OS VM instance with GPUs.
The method used to create a VM depends on the GPU model selected.
To create a Container-Optimized OS VM that has attached NVIDIA H100,
A100, or L4 GPUs, see
Create an accelerator-optimized VM .
To create a Container-Optimized OS VM that has attached NVIDIA T4, P4,
P100, or V100 GPUs, see
Create an N1 VM that has attached GPUs .
You can also add GPUs
to existing Container-Optimized OS VM instances.
When you create VMs, remember to choose images or image families from
the cos-cloud image project.
To check all GPUs attached to your current Container-Optimized OS VM
instances, run the following command:
gcloud compute instances describe INSTANCE_NAME \
--project= PROJECT_ID \
--zone ZONE \
--format="value(guestAccelerators)"
Replace the following:
INSTANCE_NAME : The name
of the new VM instance.
PROJECT_ID : The ID of your project .
zone : The zone for the VM instance.
Install NVIDIA GPU device drivers
After you create an instance with one or more GPUs, your system requires device
drivers so that your applications can access the device. This guide shows the
ways to install NVIDIA proprietary drivers on Container-Optimized OS VM
instances.
Container-Optimized OS provides a built-in utility cos-extensions to
simplify the NVIDIA driver installation process. By running the utility, users
agree to accept the NVIDIA license agreement.
Identify GPU driver versions
Each version of Container-Optimized OS image has a list of supported
NVIDIA GPU driver versions for each GPU type, along with a default driver for
each type.
For a complete list of supported versions,
see the release notes of the
major Container-Optimized OS LTS milestones.
Note: When using different GPU types on the same Container-Optimized OS version, the GPU driver version associated with the same label may differ. For example, in the supported GPU driver version list for Container-Optimized OS version cos-105-17412-448-12 , the NVIDIA L4 has a Default GPU driver version of 535.183.01 , whereas the NVIDIA P100 has a Default GPU driver version of 470.256.02 .
You may also check all the GPU driver versions supported by the GPU on your
Container-Optimized OS VM instance by running the following command:
sudo cos-extensions list
Identify the required CUDA toolkit version
If your applications use CUDA ,
install NVIDIA's CUDA toolkit in your containers. Each version of CUDA
requires a minimum GPU driver version or a later version. To check the minimum
GPU driver version required for your version of CUDA, see
CUDA Toolkit and Compatible Driver Versions .
Ensure that the Container-Optimized OS version you are using
has the correct GPU driver version for the version of CUDA you are using.
Install the driver
You can install GPUs by using either shell commands, startup scripts, or
cloud-init. All three methods use the sudo cos-extensions install gpu command
to install the default GPU driver for your Container-Optimized OS LTS version.
Note: Before attempting to install the drivers, ensure that the gcr-online.target
and docker.socket services are active.
To run the installation scripts, the cos-extensions utility requires
the https://www.googleapis.com/auth/devstorage.read_only
scope for communicating with the gcr.io ( cos-cloud ).
Without this scope, downloading of the driver and its dependencies will fail.
This scope is one of the default scopes ,
which is typically added when you create a VM.
Shell
After you
connect to your Container-Optimized OS VM instances ,
you can run the following command manually to install drivers:
sudo cos-extensions install gpu
Note: You need to run the preceding command on every VM reboot to configure
GPU drivers.
Startup scripts
You can also install GPU drivers through
startup scripts . You can
provide the startup script
when you create VM instances or
apply the script to running VM instances
and then reboot the VMs. This lets you install drivers without connecting
to the VMs. It also makes sure the GPU drivers are configured on every
VM reboot.
The following is an example startup script to install drivers:
#! /bin/bash
sudo cos-extensions install gpu
Cloud-init
Cloud-init is similar to startup scripts but more powerful. The following
example shows how to install GPU driver through cloud-init:
#cloud-config
runcmd :
- cos-extensions install gpu
Using cloud-init lets you specify the dependencies so that your GPU
applications will only run after the driver has been installed. See the
End-to-end: Running a GPU application on Container-Optimized OS
section for more details.
For more information about how to use cloud-init on Container-Optimized OS VM
instances, see the
creating and configuring instances
page.
In some cases the default driver included with Container-Optimized OS
doesn't meet the minimum driver requirements of your CUDA toolkit or your
GPU model. See the Required NVIDIA driver
versions for the version requirements for specific types of GPUs.
To install a specific GPU driver version, run the following command:
sudo cos-extensions install gpu -- -version= DRIVER_VERSION
Replace DRIVER_VERSION with one of the following
options:
default : Installs the default driver designated by the
Container-Optimized OS release. This version receives bug fixes and
security updates.
latest : Installs the latest driver available in the
Container-Optimized OS release. Be aware that this might introduce
compatibility changes due to potential major version updates across COS
releases.
The full version : Use this to pin to a specific version for workloads
sensitive to driver changes. For example, specify version 535.183.01 .
NVIDIA driver branch : Installs the latest stable driver within a specific
NVIDIA branch to stay current with security updates and bug fixes within that
branch. For example, specify branch R535 . This option is available starting
from cos-gpu-installer:v2.2.1 .
To see the available versions for each of those options, run the command to
Identify GPU driver versions .
Pass parameters to the kernel modules
You can pass specific parameters to the NVIDIA kernel module upon installation using the --module-arg flag. This flag is useful for enabling or disabling certain driver features. The flag can be used multiple times to pass several arguments.
For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg_EnableGpuFirmware=0 parameter.
sudo cos-extensions install gpu -- --module-arg nvidia.NVreg_EnableGpuFirmware=0
Preload the driver
You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached. This is useful for preparing environments or testing configurations before attaching physical GPU hardware.
To preload the GPU driver, run the following command:
sudo cos-extensions install gpu -- -no-verify -target-gpu= GPU_DEVICE
This command is supported starting from cos-gpu-installer:v2.3.0 . The following flags apply:
-no-verify : Downloads and prepares the driver files but skips kernel module loading and installation verification.
-target-gpu : Specifies the GPU device to ensure the correct driver is preloaded, preventing compatibility issues when the GPU device is later attached.
Replace GPU_DEVICE with a specific GPU model (for example, NVIDIA_L4 ) listed in the Overview .
If -target-gpu is not specified, the default GPU driver will be preloaded.
Verify the installation
You can run the following commands on your Container-Optimized OS VM
instances to manually verify the installation of the GPU drivers. The output
from the command shows the GPU devices information, such as devices state and
driver version.
# Make the driver installation path executable by re-mounting it.
sudo mount --bind /var/lib/nvidia /var/lib/nvidia
sudo mount -o remount,exec /var/lib/nvidia
/var/lib/nvidia/bin/nvidia-smi
Configure containers to consume GPUs
After the GPU drivers are installed, you can configure containers to
consume GPUs. The following example shows you how to run a CUDA
application in a Docker container that consumes /dev/nvidia0 :
docker run \
--volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \
--volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \
--device /dev/nvidia0:/dev/nvidia0 \
--device /dev/nvidia-uvm:/dev/nvidia-uvm \
--device /dev/nvidiactl:/dev/nvidiactl \
registry.k8s.io/cuda-vector-add:v0.1
You can run your containers through cloud-init to specify
the dependency between driver installation and your containers. see the
End-to-end: Running a GPU application on Container-Optimized OS
section for more details.
End-to-end: Running a GPU application on Container-Optimized OS
The following end-to-end example shows you how to use cloud-init to configure
Container-Optimized OS VM instances that provision a GPU application
container myapp:latest after the GPU driver has been installed:
#cloud-config
users :
- name : myuser
uid : 2000
write_files :
- path : /etc/systemd/system/install-gpu.service
permissions : 0644
owner : root
content : |
[Unit]
Description=Install GPU drivers
Wants=gcr-online.target docker.socket
After=gcr-online.target docker.socket
[Service]
User=root
Type=oneshot
ExecStart=cos-extensions install gpu
StandardOutput=journal+console
StandardError=journal+console
- path : /etc/systemd/system/myapp.service
permissions : 0644
owner : root
content : |
[Unit]
Description=Run a myapp GPU application container
Requires=install-gpu.service
After=install-gpu.service
[Service]
User=root
Type=oneshot
RemainAfterExit=true
ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest
StandardOutput=journal+console
StandardError=journal+console
runcmd :
- systemctl daemon-reload
- systemctl start install-gpu.service
- systemctl start myapp.service
About the NVIDIA CUDA-X libraries
CUDA® is NVIDIA's
parallel computing platform and programming model for GPUs. To use CUDA
applications, the libraries must be present in
the image you are using. You can do any of the following to add the NVIDIA
CUDA-X libraries:
Use an image with the NVIDIA CUDA-X libraries pre-installed. For example, you
can use
Google's Deep Learning Containers .
These containers pre-install the key data science frameworks, the NVIDIA CUDA-X
libraries, and tools. Alternatively, NVIDIA's CUDA image contains the NVIDIA CUDA-X libraries only.
Build and use your own image. In this case, include
/usr/local/cuda-XX.X/lib64 , which contains the NVIDIA CUDA-X libraries, and
/usr/local/nvidia/lib64 , which contains the NVIDIA device drivers, in
the LD_LIBRARY_PATH environment variable. For
/usr/local/cuda-XX.X/lib64 , the name of the directory depends on the version
of the image you used. For example, the NVIDIA CUDA-X libraries and debug
utilities in Docker containers can be at /usr/local/cuda-11.0/lib64 and
/usr/local/nvidia/bin , respectively.
Security
Just like other kernel modules on Container-Optimized OS, GPU drivers are
cryptographically signed and verified by keys that are built into the
Container-Optimized OS kernel. Unlike some other distros,
Container-Optimized OS does not allow users to enroll their Machine Owner
Key (MOK) and use the keys to sign custom kernel modules. This is to ensure the
integrity of the Container-Optimized OS kernel and reduce the attack
surface.
Restrictions
Container-Optimized OS version restrictions
Only Container-Optimized OS LTS release milestone 85 and later support the
cos-extensions utility mentioned in the Installing NVIDIA GPU device drivers
section. For earlier Container-Optimized OS release milestones, use the
cos-gpu-installer
open source tool to manually install GPU drivers.
VM instances restrictions
VM instances with GPUs have specific restrictions that make them behave
differently than other instance types. For more information, see the
Compute Engine GPU restrictions page.
Quota and availability
GPUs are available in specific regions and zones .
When you request GPU quota , consider the
regions in which you intend to run your Container-Optimized OS VM instances.
For a complete list of applicable regions and zones, see GPUs on Compute Engine .
You can also see GPUs available in your zone using the Google Cloud CLI.
gcloud compute accelerator-types list
Pricing
For GPU pricing information, see the Compute Engine pricing page .
Supportability
Each Container-Optimized OS release version
has at least one supported NVIDIA GPU driver version. The
Container-Optimized OS team qualifies the supported GPU drivers against
the Container-Optimized OS version before release to make sure they are
compatible. New versions of the NVIDIA GPU drivers may be made available from
time-to-time. Some GPU driver versions won't qualify for
Container-Optimized OS, and the qualification timeline is not guaranteed.
When the Container-Optimized OS team releases a new version on a
release milestone
we try to support the latest GPU driver version on the corresponding
driver branch. This is to fix CVEs discovered in GPU drivers as soon as possible.
If a Container-Optimized OS customer identifies an issue that's related to
the NVIDIA GPU drivers, the customer must work directly with NVIDIA for support.
If the issue is not driver specific, then users can open a request with Cloud Customer Care.
What's next
Learn more about
running containers on a Container-Optimized OS VM instance .
Learn more about GPUs on Compute Engine .
Learn more about requesting GPU quota .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
