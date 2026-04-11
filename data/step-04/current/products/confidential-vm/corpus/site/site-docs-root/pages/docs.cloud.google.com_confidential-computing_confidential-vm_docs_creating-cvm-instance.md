---
title: "Create a Confidential VM instance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/creating-cvm-instance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/creating-cvm-instance
  title: "Create a Confidential VM instance \_|\_ Google Cloud Documentation"
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
Create a Confidential VM instance
Stay organized with collections
Save and categorize content based on your preferences.
You can create a Confidential VM instance as part of creating a new
Compute Engine virtual machine.
Before you begin
Before creating a Confidential VM instance, you need to set up your environment as
follows:
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Optional: To use the gcloud CLI examples in this guide:
Install or update to the latest version of the
gcloud CLI .
Set a default region and zone for your client
that
supports Confidential VM .
Optional: To use the API examples in this guide,
set up authentication
for your requests. Learn more about
OAuth 2.0 .
Create an instance
Console
To create a Confidential VM instance with the Google Cloud console, complete
the following steps:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click Create instance .
In the Machine configuration pane, do the following:
Select a
supported region and zone .
Select one of the following machine families:
General purpose
Compute optimized
GPUs
If you selected the GPUs family, select the appropriate
GPU type and the Number of GPUs based on the
supported machine type .
Select a
supported machine type
for the Confidential Computing technology you want to use.
In the navigation menu, click Security .
In the Confidential VM service section, click Enable .
In the Select a type box, select one of the following
Confidential Computing technology
types:
AMD SEV
AMD SEV-SNP
Intel TDX
In the Enable Confidential Computing dialog, review the list of
settings that are updated when you enable the service. They can include
the following fields, if they were set to incompatible values.
Series and Machine type . For more information, see
Machine types, CPUs, and zones .
Region and zone . For more information, see
Machine types, CPUs, and zones .
Boot disk image . For more information, see
Operating systems .
On-host maintenance . For more information, see
Set host maintenance policy of a VM .
Network interface card . For more information, see
Using Google Virtual NIC .
Click Confirm , and then click Create .
After you click Create , the VM instances page opens. On this page
you can view the status and details for your new instance. When an
Available icon appears in the Status column for your Confidential VM
instance, it's ready to use.
gcloud
To create a Confidential VM instance with the gcloud CLI, use the
instances create
sub-command with the --confidential-compute-type flag.
gcloud compute instances create INSTANCE_NAME \
--confidential-compute-type = CONFIDENTIAL_COMPUTING_TECHNOLOGY \
--machine-type = MACHINE_TYPE_NAME \
--min-cpu-platform = " CPU_PLATFORM " \
--maintenance-policy = MAINTENANCE_POLICY \
--zone = ZONE_NAME \
--image-project = IMAGE_PROJECT \
--image-family = IMAGE_FAMILY_NAME \
--project = PROJECT_ID
Provide the following values:
INSTANCE_NAME : The name of the new VM instance.
CONFIDENTIAL_COMPUTING_TECHNOLOGY :
The type of
Confidential Computing technology
to use. Choose one of the following values:
SEV
SEV_SNP
TDX
MACHINE_TYPE_NAME : The VM machine type, for example,
n2d-standard-2 . Valid machine types for Confidential VM instances are
determined by the Confidential Computing technology you've chosen. See
Machine types, CPUs, and zones .
CPU_PLATFORM : Choose one of the following values:
For AMD SEV: Either AMD Milan (C2D or N2D machine types),
AMD Genoa (C3D machine types), or AMD Turin (C4D machine types).
For AMD SEV-SNP: AMD Milan (N2D machine types).
For Intel TDX: Remove this flag.
MAINTENANCE_POLICY : For N2D and C3D machine types that
use SEV, set this to MIGRATE for live migration support. For all other
machine types, set this value to TERMINATE , as they
don't support live migration .
ZONE_NAME : The
Confidential VM-supported zone
in which to create the instance.
IMAGE_PROJECT : The project containing the supported
operating system image.
IMAGE_FAMILY_NAME : The family for the
Confidential VM-supported operating system image .
When you don't additionally specify --image , the latest image version is
selected.
PROJECT_ID : Optional. The ID of the project to create
the VM in.
Example
Run the following command to create an n2d-standard-2 instance called
my-instance in the us-central1-a zone, using AMD SEV-SNP:
gcloud compute instances create my-instance \
--machine-type = n2d-standard-2 \
--min-cpu-platform = "AMD Milan" \
--zone = us-central1-a \
--confidential-compute-type = SEV_SNP \
--maintenance-policy = TERMINATE \
--image-project = ubuntu-os-cloud \
--image-family = ubuntu-2404-lts-amd64
Response
A response to a creation request looks similar to the following example:
Created [https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance].
NAME: my-instance
ZONE: us-central1-a
MACHINE_TYPE: n2d-standard-2
PREEMPTIBLE:
INTERNAL_IP: 0.0.0.0
EXTERNAL_IP: 0.0.0.0
STATUS: RUNNING
REST
To create a Confidential VM instance, you need to send a POST request with the
appropriate body content.
The HTTP method and URL:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE_NAME /instances
Request JSON body:
{
"name" : " INSTANCE_NAME " ,
"confidentialInstanceConfig" : {
"confidentialInstanceType" : " CONFIDENTIAL_COMPUTING_TECHNOLOGY "
},
"machineType" : "zones/ ZONE_NAME /machineTypes/ MACHINE_TYPE_NAME " ,
"minCpuPlatform" : " CPU_PLATFORM " ,
"scheduling" : {
"automaticRestart" : true ,
"nodeAffinities" : [],
"onHostMaintenance" : " MAINTENANCE_POLICY " ,
"preemptible" : false
},
"disks" : [
{
"boot" : true ,
"initializeParams" : {
"sourceImage" : "projects/ IMAGE_PROJECT /global/images/family/ IMAGE_FAMILY_NAME "
}
}
],
"networkInterfaces" : [
{
"nicType" : "gVNIC"
}
]
}
Provide the following values:
PROJECT_ID : The ID of the project to create the VM in.
ZONE_NAME : The
Confidential VM-supported zone
in which to create the instance.
INSTANCE_NAME : The name of the new VM instance.
CONFIDENTIAL_COMPUTING_TECHNOLOGY :
The type of
Confidential Computing technology
to use. Choose one of the following values:
SEV
SEV_SNP
TDX
MACHINE_TYPE_NAME : The VM machine type, for example,
n2d-standard-2 . Valid machine types for Confidential VM instances are
determined by the Confidential Computing technology you've chosen. See
Machine types, CPUs, and zones .
CPU_PLATFORM : Choose one of the following values:
For AMD SEV: Either AMD Milan (C2D or N2D machine types),
AMD Genoa (C3D machine types), or AMD Turin (C4D machine types).
For AMD SEV-SNP: AMD Milan (N2D machine types).
For Intel TDX: Remove this key-value pair.
MAINTENANCE_POLICY : For N2D machine types that use SEV,
set this to MIGRATE for live migration support. For all other machine
types, set this value to TERMINATE , as they
don't support live migration .
IMAGE_PROJECT : The project containing the supported
operating system image.
IMAGE_FAMILY_NAME : The family for the
Confidential VM-supported operating system image .
When you don't additionally specify --image , the latest image version is
selected.
Example
Run one of the following commands to create an n2d-standard-2 instance
called my-instance in the us-central1-a zone, in the my-project project,
using AMD SEV-SNP:
curl (Linux, macOS, or Cloud Shell)
Note: The following command assumes that you have logged in
to the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login , or by using
Cloud Shell , which automatically logs
you into the gcloud CLI. You can check the active account
by running
gcloud auth list .
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"name": "my-instance",
"confidentialInstanceConfig": {
"confidentialInstanceType": "SEV_SNP"
},
"machineType": "zones/us-central1-a/machineTypes/n2d-standard-2",
"minCpuPlatform": "AMD Milan",
"scheduling": {
"automaticRestart": true,
"nodeAffinities": [],
"onHostMaintenance": "TERMINATE",
"preemptible": false
},
"disks": [
{
"boot": true,
"initializeParams": {
"sourceImage": "projects/ubuntu-os-cloud/global/images/family/ubuntu-2404-lts-amd64"
}
}
],
"networkInterfaces": [
{
"nicType": "gVNIC"
}
]
}' \
https://compute.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances
PowerShell (Windows)
Note: The following command assumes that you have logged in
to the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login . You can check the active account
by running
gcloud auth list .
$cred = gcloud auth print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }
$body = @"
{
"name": "my-instance",
"confidentialInstanceConfig": {
"confidentialInstanceType": "SEV_SNP"
},
"machineType": "zones/us-central1-a/machineTypes/n2d-standard-2",
"minCpuPlatform": "AMD Milan",
"scheduling": {
"automaticRestart": true,
"nodeAffinities": [],
"onHostMaintenance": "TERMINATE",
"preemptible": false
}
"disks": [
{
"boot": true,
"initializeParams": {
"sourceImage": "projects/ubuntu-os-cloud/global/images/family/ubuntu-2404-lts-amd64"
}
}
],
"networkInterfaces": [
{
"nicType": "gVNIC"
}
]
}
"@
Invoke-WebRequest `
-Method POST `
-Headers $headers `
-ContentType: "application/json; charset=utf-8" `
-Body $body `
-Uri "https://compute.googleapis.com/compute/projects/my-project/zones/us-central1-a/instances" | Select-Object -Expand Content
Response
A response to a creation request looks similar to the following example:
{
"kind" : "compute#operation" ,
"id" : "0000000000000000000" ,
"name" : "operation-0000000000000-0000000000000-00000000-00000000" ,
"zone" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a" ,
"operationType" : "insert" ,
"targetLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance" ,
"targetId" : "0000000000000000000" ,
"status" : "RUNNING" ,
"user" : "alex@example.com" ,
"progress" : 0 ,
"insertTime" : "2024-09-29T18:06:52.174-07:00" ,
"startTime" : "2024-09-29T18:06:52.175-07:00" ,
"selfLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/operations/operation-0000000000000-0000000000000-00000000-00000000"
}
You can check the VM creation progress by making a GET request to the
selfLink :
GET https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE_NAME /operations/ OPERATION_ID
Enable higher network bandwidth for specific machine types
Larger machine types support high-bandwidth networking. When you select a Tier_1
network bandwidth configuration, the data transfer out bandwidth increases from
the default 32 Gbps to 50 to 200 Gbps, depending on the machine type.
To achieve the higher Tier_1
bandwidth speeds, your instance must be running the
gVNIC virtual network driver .
Learn more about
configuring a VM with higher bandwidth .
What's next
Learn how to use
Cloud Monitoring to validate your Confidential VM instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
