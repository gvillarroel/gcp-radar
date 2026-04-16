---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:17.955Z"
product_name: "Confidential VM"
product_slug: "confidential-vm"
feature_name: "C4D machine type support"
feature_slug: "c4d-machine-type-support"
latest_feature_date: "2025-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance"
  - "https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance"
  - "https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/creating-cvm-instance"
  - "https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations"
keywords:
  - "c4d"
  - "machine"
  - "type"
  - "confidential"
  - "vm"
  - "supports"
  - "general"
  - "purpose"
---

# C4D machine type support

Product: Confidential VM
Coverage: MEDIUM

## Step 02 Summary

Confidential VM supports general purpose C4D machine types with AMD EPYC Turin processors, Google Titanium, and AMD SEV memory encryption.

## Extended Definition

Confidential VM supports general purpose C4D machine types with AMD EPYC Turin processors, Google Titanium, and AMD SEV memory encryption.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance)
- [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance)
- [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/creating-cvm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/creating-cvm-instance)
- [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations)

## Supporting Pages

### Create a Confidential VM instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } $body = @" { "name": "my-instance", "confidentialInstanceConfig": { "confidentialInstanceType": "SEV SNP" }, "machineType": "zones/us-central1-a/machineTypes/n2d-standard-2", "minCpuPlatform": "AMD Milan", "scheduling": { "automaticRestart": true, "nodeAffinities": [], "onHostMaintenance": "TERMINATE", "preemptible": false } "disks": [ { "boot": true, "initializeParams": { "sourceImage": "projects/ubuntu-os-cloud/global/images/family/ubuntu-2404-lts-amd64" } } ], "networkInterfaces": [ { "nicType": "gVNIC" } ] } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -Body $body ` -Uri "https://compute.googleapis.com/compute/projects/my-project/zones/us-central1-a/instances" Select-Object -Expand Content Response A response to a creation request looks similar to the following example: { "kind" : "compute#operation" , "id" : "0000000000000000000" , "name" : "operation-0000000000000-0000000000000-00000000-00000000" , "zone" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a" , "operationType" : "insert" , "targetLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance" , "targetId" : "0000000000000000000" , "status" : "RUNNING" , "user" : "alex@example.com" , "progress" : 0 , "insertTime" : "2024-09-29T18:06:52.174-07:00" , "startTime" : "2024-09-29T18:06:52.175-07:00" , "selfLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/operations/operation-0000000000000-0000000000000-00000000-00000000" } You can check the VM creation progress by making a GET request to the selfLink : GET https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE NAME /operations/ OPERATION ID Enable higher network bandwidth for specific machine types Larger machine types support high-bandwidth networking.
- The HTTP method and URL: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE NAME /instances Request JSON body: { "name" : " INSTANCE NAME " , "confidentialInstanceConfig" : { "confidentialInstanceType" : " CONFIDENTIAL COMPUTING TECHNOLOGY " }, "machineType" : "zones/ ZONE NAME /machineTypes/ MACHINE TYPE NAME " , "minCpuPlatform" : " CPU PLATFORM " , "scheduling" : { "automaticRestart" : true , "nodeAffinities" : [], "onHostMaintenance" : " MAINTENANCE POLICY " , "preemptible" : false }, "disks" : [ { "boot" : true , "initializeParams" : { "sourceImage" : "projects/ IMAGE PROJECT /global/images/family/ IMAGE FAMILY NAME " } } ], "networkInterfaces" : [ { "nicType" : "gVNIC" } ] } Provide the following values: PROJECT ID : The ID of the project to create the VM in.
- When an Available icon appears in the Status column for your Confidential VM instance, it's ready to use. gcloud To create a Confidential VM instance with the gcloud CLI, use the instances create sub-command with the --confidential-compute-type flag. gcloud compute instances create INSTANCE NAME \ --confidential-compute-type = CONFIDENTIAL COMPUTING TECHNOLOGY \ --machine-type = MACHINE TYPE NAME \ --min-cpu-platform = " CPU PLATFORM " \ --maintenance-policy = MAINTENANCE POLICY \ --zone = ZONE NAME \ --image-project = IMAGE PROJECT \ --image-family = IMAGE FAMILY NAME \ --project = PROJECT ID Provide the following values: INSTANCE NAME : The name of the new VM instance.
- NAME: my-instance ZONE: us-central1-a MACHINE TYPE: n2d-standard-2 PREEMPTIBLE: INTERNAL IP: 0.0.0.0 EXTERNAL IP: 0.0.0.0 STATUS: RUNNING REST To create a Confidential VM instance, you need to send a POST request with the appropriate body content.

### Create a Confidential VM instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } $body = @" { "name": "my-instance", "confidentialInstanceConfig": { "confidentialInstanceType": "SEV SNP" }, "machineType": "zones/us-central1-a/machineTypes/n2d-standard-2", "minCpuPlatform": "AMD Milan", "scheduling": { "automaticRestart": true, "nodeAffinities": [], "onHostMaintenance": "TERMINATE", "preemptible": false } "disks": [ { "boot": true, "initializeParams": { "sourceImage": "projects/ubuntu-os-cloud/global/images/family/ubuntu-2404-lts-amd64" } } ], "networkInterfaces": [ { "nicType": "gVNIC" } ] } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -Body $body ` -Uri "https://compute.googleapis.com/compute/projects/my-project/zones/us-central1-a/instances" Select-Object -Expand Content Response A response to a creation request looks similar to the following example: { "kind" : "compute#operation" , "id" : "0000000000000000000" , "name" : "operation-0000000000000-0000000000000-00000000-00000000" , "zone" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a" , "operationType" : "insert" , "targetLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance" , "targetId" : "0000000000000000000" , "status" : "RUNNING" , "user" : "alex@example.com" , "progress" : 0 , "insertTime" : "2024-09-29T18:06:52.174-07:00" , "startTime" : "2024-09-29T18:06:52.175-07:00" , "selfLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/operations/operation-0000000000000-0000000000000-00000000-00000000" } You can check the VM creation progress by making a GET request to the selfLink : GET https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE NAME /operations/ OPERATION ID Enable higher network bandwidth for specific machine types Larger machine types support high-bandwidth networking.
- The HTTP method and URL: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE NAME /instances Request JSON body: { "name" : " INSTANCE NAME " , "confidentialInstanceConfig" : { "confidentialInstanceType" : " CONFIDENTIAL COMPUTING TECHNOLOGY " }, "machineType" : "zones/ ZONE NAME /machineTypes/ MACHINE TYPE NAME " , "minCpuPlatform" : " CPU PLATFORM " , "scheduling" : { "automaticRestart" : true , "nodeAffinities" : [], "onHostMaintenance" : " MAINTENANCE POLICY " , "preemptible" : false }, "disks" : [ { "boot" : true , "initializeParams" : { "sourceImage" : "projects/ IMAGE PROJECT /global/images/family/ IMAGE FAMILY NAME " } } ], "networkInterfaces" : [ { "nicType" : "gVNIC" } ] } Provide the following values: PROJECT ID : The ID of the project to create the VM in.
- When an Available icon appears in the Status column for your Confidential VM instance, it's ready to use. gcloud To create a Confidential VM instance with the gcloud CLI, use the instances create sub-command with the --confidential-compute-type flag. gcloud compute instances create INSTANCE NAME \ --confidential-compute-type = CONFIDENTIAL COMPUTING TECHNOLOGY \ --machine-type = MACHINE TYPE NAME \ --min-cpu-platform = " CPU PLATFORM " \ --maintenance-policy = MAINTENANCE POLICY \ --zone = ZONE NAME \ --image-project = IMAGE PROJECT \ --image-family = IMAGE FAMILY NAME \ --project = PROJECT ID Provide the following values: INSTANCE NAME : The name of the new VM instance.
- NAME: my-instance ZONE: us-central1-a MACHINE TYPE: n2d-standard-2 PREEMPTIBLE: INTERNAL IP: 0.0.0.0 EXTERNAL IP: 0.0.0.0 STATUS: RUNNING REST To create a Confidential VM instance, you need to send a POST request with the appropriate body content.

### Create a Confidential VM instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/creating-cvm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/creating-cvm-instance)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } $body = @" { "name": "my-instance", "confidentialInstanceConfig": { "confidentialInstanceType": "SEV SNP" }, "machineType": "zones/us-central1-a/machineTypes/n2d-standard-2", "minCpuPlatform": "AMD Milan", "scheduling": { "automaticRestart": true, "nodeAffinities": [], "onHostMaintenance": "TERMINATE", "preemptible": false } "disks": [ { "boot": true, "initializeParams": { "sourceImage": "projects/ubuntu-os-cloud/global/images/family/ubuntu-2404-lts-amd64" } } ], "networkInterfaces": [ { "nicType": "gVNIC" } ] } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -Body $body ` -Uri "https://compute.googleapis.com/compute/projects/my-project/zones/us-central1-a/instances" Select-Object -Expand Content Response A response to a creation request looks similar to the following example: { "kind" : "compute#operation" , "id" : "0000000000000000000" , "name" : "operation-0000000000000-0000000000000-00000000-00000000" , "zone" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a" , "operationType" : "insert" , "targetLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance" , "targetId" : "0000000000000000000" , "status" : "RUNNING" , "user" : "alex@example.com" , "progress" : 0 , "insertTime" : "2024-09-29T18:06:52.174-07:00" , "startTime" : "2024-09-29T18:06:52.175-07:00" , "selfLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/operations/operation-0000000000000-0000000000000-00000000-00000000" } You can check the VM creation progress by making a GET request to the selfLink : GET https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE NAME /operations/ OPERATION ID Enable higher network bandwidth for specific machine types Larger machine types support high-bandwidth networking.
- The HTTP method and URL: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE NAME /instances Request JSON body: { "name" : " INSTANCE NAME " , "confidentialInstanceConfig" : { "confidentialInstanceType" : " CONFIDENTIAL COMPUTING TECHNOLOGY " }, "machineType" : "zones/ ZONE NAME /machineTypes/ MACHINE TYPE NAME " , "minCpuPlatform" : " CPU PLATFORM " , "scheduling" : { "automaticRestart" : true , "nodeAffinities" : [], "onHostMaintenance" : " MAINTENANCE POLICY " , "preemptible" : false }, "disks" : [ { "boot" : true , "initializeParams" : { "sourceImage" : "projects/ IMAGE PROJECT /global/images/family/ IMAGE FAMILY NAME " } } ], "networkInterfaces" : [ { "nicType" : "gVNIC" } ] } Provide the following values: PROJECT ID : The ID of the project to create the VM in.
- When an Available icon appears in the Status column for your Confidential VM instance, it's ready to use. gcloud To create a Confidential VM instance with the gcloud CLI, use the instances create sub-command with the --confidential-compute-type flag. gcloud compute instances create INSTANCE NAME \ --confidential-compute-type = CONFIDENTIAL COMPUTING TECHNOLOGY \ --machine-type = MACHINE TYPE NAME \ --min-cpu-platform = " CPU PLATFORM " \ --maintenance-policy = MAINTENANCE POLICY \ --zone = ZONE NAME \ --image-project = IMAGE PROJECT \ --image-family = IMAGE FAMILY NAME \ --project = PROJECT ID Provide the following values: INSTANCE NAME : The name of the new VM instance.
- NAME: my-instance ZONE: us-central1-a MACHINE TYPE: n2d-standard-2 PREEMPTIBLE: INTERNAL IP: 0.0.0.0 EXTERNAL IP: 0.0.0.0 STATUS: RUNNING REST To create a Confidential VM instance, you need to send a POST request with the appropriate body content.

### Supported configurations \_|\_ Confidential VM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Machine type CPU platform Confidential Computing technology Live migration support GPU support a3-highgpu-1g View machine type names Intel Sapphire Rapids Intel TDX See limitations NVIDIA See limitations Not supported Supported C4D View machine type names AMD EPYC Turin AMD SEV See limitations Not supported Not supported c3-standard- View machine type names Intel Sapphire Rapids Intel TDX See limitations Not supported Not supported C3D View machine type names AMD EPYC Genoa AMD SEV See limitations Supported Not supported C2D View machine type names AMD EPYC Milan AMD SEV See limitations Not supported Not supported N2D View machine type names AMD EPYC Milan AMD SEV on Milan See limitations AMD SEV-SNP on Milan See limitations Supported on AMD SEV VM instances only Not supported View supported zones You can view which zones support these machine types and Confidential Computing technology with one of the following methods.
- AMD SEV on the C4D and C3D machine type has the following limitations: Confidential VM instances that use C4D and C3D machine types might experience lower network bandwidth than equivalent non-confidential VMs, even with per VM Tier 1 networking performance enabled.
- Click Select a CPU , and then select AMD EPYC Milan , AMD EPYC Genoa , or AMD EPYC Turin . gcloud To list the zones available in Google Cloud, run the following command: gcloud compute zones list \ --format = "value(NAME)" To list the available CPU platforms for a specific zone, run the following command and check for AMD Milan, AMD Genoa, or AMD Turin support: gcloud compute zones describe ZONE NAME \ --format = "value(availableCpuPlatforms)" AMD SEV-SNP AMD SEV-SNP is supported in the following zones, on N2D machine types with AMD Milan CPU platforms: asia-southeast1-a asia-southeast1-b asia-southeast1-c europe-west3-a europe-west3-b europe-west3-c europe-west4-a europe-west4-b europe-west4-c us-central1-a us-central1-b us-central1-c Intel TDX Intel TDX is supported in the following zones, on c3-standard- machine types. asia-northeast1-b asia-south1-b asia-southeast1-a asia-southeast1-b asia-southeast1-c europe-west4-a europe-west4-b europe-west4-c europe-west9-a europe-west9-b us-central1-a us-central1-b us-central1-c us-east1-c us-east1-d us-east4-a us-east4-c us-east5-b us-east5-c us-west1-a us-west1-b NVIDIA Confidential Computing NVIDIA Confidential Computing is supported in the following zones, on Confidential VM instances with an attached GPU on a3-highgpu-1g machine types. europe-west4-c us-central1-a us-east5-a Operating systems For the available Confidential VM operating system images, see Operating system details .
- To limit the results to a specific image family, project, or other text provided in the previous command's response, use an AND operator, and replace STRING with a partial text match, similar to the following example: gcloud compute images list \ --filter = "guestOsFeatures[].type:( OS FEATURE ) AND STRING " To view details about a specific image, run the following command using details from the responses of the previous commands: gcloud compute images describe IMAGE NAME \ --project = IMAGE PROJECT Supported images for a Confidential VM instance with GPU For a Confidential VM instance on the A3 machine series that uses Intel TDX and has an attached H100 GPU, we recommend using the following operating system image families. ubuntu-2204-lts cos-tdx-113-lts While other images might be tagged as TDX CAPABLE , we don't provide official support for them when used with GPUs.

