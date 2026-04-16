---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:17.956Z"
product_name: "Confidential VM"
product_slug: "confidential-vm"
feature_name: "Live migration for Confidential VM"
feature_slug: "live-migration-for-confidential-vm"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-live-migration"
  - "https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/error-messages"
  - "https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance"
  - "https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance"
keywords:
  - "live"
  - "migration"
  - "for"
  - "confidential"
  - "vm"
  - "supports"
  - "eligible"
  - "n2d"
---

# Live migration for Confidential VM

Product: Confidential VM
Coverage: MEDIUM

## Step 02 Summary

Confidential VM supports live migration for eligible N2D instances using AMD SEV and supported operating system images.

## Extended Definition

Confidential VM supports live migration for eligible N2D instances using AMD SEV and supported operating system images.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-live-migration](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-live-migration)
- [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/error-messages](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/error-messages)
- [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance)
- [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance)

## Supporting Pages

### Live migration \_|\_ Confidential VM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-live-migration](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-live-migration)
- Source ID: `site-docs-reference`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Confidential VM instance must have the following configuration to support live migration : An N2D or a C3D machine type AMD SEV Confidential Computing technology An operating system image that supports live migration Be created after January 15, 2024 All other Confidential VM types don't support live migration, and must set their onHostMaintenance policy to TERMINATE when being created.
- Minimize the impact of host maintenance events To minimize the impact of host maintenance events on Confidential VM instances that don't support live migration, you can do the following things: Monitor for host maintenance event notices Simulate a host maintenance event Change your workload Provision your Confidential VM instances on sole-tenancy nodes Monitor for maintenance event notices To receive advance notice of host events, monitor the /computeMetadata/v1/instance/maintenance-event metadata value.
- Host maintenance events for Confidential VM instances that don't support live migration During host maintenance events, Confidential VM instances that don't support live migration and have default host maintenance policy settings are stopped.
- Host maintenance policy Confidential VM default values Description onHostMaintenance TERMINATE This property must be set to TERMINATE for Confidential VM instances that don't support live migration.

### Live migration \_|\_ Confidential VM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/error-messages](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 267
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Confidential VM instance must have the following configuration to support live migration : An N2D or a C3D machine type AMD SEV Confidential Computing technology An operating system image that supports live migration Be created after January 15, 2024 All other Confidential VM types don't support live migration, and must set their onHostMaintenance policy to TERMINATE when being created.
- Minimize the impact of host maintenance events To minimize the impact of host maintenance events on Confidential VM instances that don't support live migration, you can do the following things: Monitor for host maintenance event notices Simulate a host maintenance event Change your workload Provision your Confidential VM instances on sole-tenancy nodes Monitor for maintenance event notices To receive advance notice of host events, monitor the /computeMetadata/v1/instance/maintenance-event metadata value.
- Host maintenance events for Confidential VM instances that don't support live migration During host maintenance events, Confidential VM instances that don't support live migration and have default host maintenance policy settings are stopped.
- Host maintenance policy Confidential VM default values Description onHostMaintenance TERMINATE This property must be set to TERMINATE for Confidential VM instances that don't support live migration.

### Create a Confidential VM instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } $body = @" { "name": "my-instance", "confidentialInstanceConfig": { "confidentialInstanceType": "SEV SNP" }, "machineType": "zones/us-central1-a/machineTypes/n2d-standard-2", "minCpuPlatform": "AMD Milan", "scheduling": { "automaticRestart": true, "nodeAffinities": [], "onHostMaintenance": "TERMINATE", "preemptible": false } "disks": [ { "boot": true, "initializeParams": { "sourceImage": "projects/ubuntu-os-cloud/global/images/family/ubuntu-2404-lts-amd64" } } ], "networkInterfaces": [ { "nicType": "gVNIC" } ] } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -Body $body ` -Uri "https://compute.googleapis.com/compute/projects/my-project/zones/us-central1-a/instances" Select-Object -Expand Content Response A response to a creation request looks similar to the following example: { "kind" : "compute#operation" , "id" : "0000000000000000000" , "name" : "operation-0000000000000-0000000000000-00000000-00000000" , "zone" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a" , "operationType" : "insert" , "targetLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance" , "targetId" : "0000000000000000000" , "status" : "RUNNING" , "user" : "alex@example.com" , "progress" : 0 , "insertTime" : "2024-09-29T18:06:52.174-07:00" , "startTime" : "2024-09-29T18:06:52.175-07:00" , "selfLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/operations/operation-0000000000000-0000000000000-00000000-00000000" } You can check the VM creation progress by making a GET request to the selfLink : GET https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE NAME /operations/ OPERATION ID Enable higher network bandwidth for specific machine types Larger machine types support high-bandwidth networking.
- MAINTENANCE POLICY : For N2D and C3D machine types that use SEV, set this to MIGRATE for live migration support.
- MAINTENANCE POLICY : For N2D machine types that use SEV, set this to MIGRATE for live migration support.
- Set a default region and zone for your client that supports Confidential VM .

### Create a Confidential VM instance \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance](https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-confidential-vm-instance)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } $body = @" { "name": "my-instance", "confidentialInstanceConfig": { "confidentialInstanceType": "SEV SNP" }, "machineType": "zones/us-central1-a/machineTypes/n2d-standard-2", "minCpuPlatform": "AMD Milan", "scheduling": { "automaticRestart": true, "nodeAffinities": [], "onHostMaintenance": "TERMINATE", "preemptible": false } "disks": [ { "boot": true, "initializeParams": { "sourceImage": "projects/ubuntu-os-cloud/global/images/family/ubuntu-2404-lts-amd64" } } ], "networkInterfaces": [ { "nicType": "gVNIC" } ] } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -Body $body ` -Uri "https://compute.googleapis.com/compute/projects/my-project/zones/us-central1-a/instances" Select-Object -Expand Content Response A response to a creation request looks similar to the following example: { "kind" : "compute#operation" , "id" : "0000000000000000000" , "name" : "operation-0000000000000-0000000000000-00000000-00000000" , "zone" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a" , "operationType" : "insert" , "targetLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/instances/my-instance" , "targetId" : "0000000000000000000" , "status" : "RUNNING" , "user" : "alex@example.com" , "progress" : 0 , "insertTime" : "2024-09-29T18:06:52.174-07:00" , "startTime" : "2024-09-29T18:06:52.175-07:00" , "selfLink" : "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-a/operations/operation-0000000000000-0000000000000-00000000-00000000" } You can check the VM creation progress by making a GET request to the selfLink : GET https://www.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE NAME /operations/ OPERATION ID Enable higher network bandwidth for specific machine types Larger machine types support high-bandwidth networking.
- MAINTENANCE POLICY : For N2D and C3D machine types that use SEV, set this to MIGRATE for live migration support.
- MAINTENANCE POLICY : For N2D machine types that use SEV, set this to MIGRATE for live migration support.
- Set a default region and zone for your client that supports Confidential VM .

