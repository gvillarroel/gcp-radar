---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.973Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "a2-megagpu-16g machine type support"
feature_slug: "a2-megagpu-16g-machine-type-support"
latest_feature_date: "2024-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/available-machine-types"
  - "https://docs.cloud.google.com/workstations/docs/available-gpus"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient"
keywords:
  - "a2"
  - "megagpu"
  - "16g"
  - "machine"
  - "type"
  - "workstations"
  - "supports"
  - "the"
---

# a2-megagpu-16g machine type support

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports the a2-megagpu-16g machine type; Cloud Workstations supports the a2-megagpu-16g machine type.

## Extended Definition

Cloud Workstations supports the a2-megagpu-16g machine type; Cloud Workstations supports the a2-megagpu-16g machine type.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)

## Supporting Pages

### Available machine types \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- Source ID: `site-docs-root-2`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Workstation machine type GPU count Virtual CPUs Memory in GB Confidential compute GPU acceleration Persistent Storage a2-highgpu-1g 1 12 85 GB a2-highgpu-2g 2 24 170 GB a2-highgpu-4g 4 48 340 GB a2-highgpu-8g 8 96 680 GB a2-megagpu-16g 8 96 1360 GB A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage c3-standard-4 4 16 GB c3-standard-8 8 32 GB c3-standard-22 22 88 GB c3-standard-44 44 176 GB c3-standard-88 88 352 GB c3-standard-176 176 704 GB A2 Standard machine types These machine types have a fixed number of A100 40GB GPUs .
- Workstation machine type GPU count Virtual CPUs Memory in GB Confidential compute GPU acceleration Persistent Storage a2-ultragpu-1g 1 12 170 GB a2-ultragpu-2g 2 24 340 GB a2-ultragpu-4g 4 48 680 GB a2-ultragpu-8g 8 96 1,360 GB A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Workstation machine type GPU count Virtual CPUs Memory in GB Confidential compute GPU acceleration Persistent Storage a3-highgpu-8g 8 208 1,872 GB a3-megagpu-8g 8 208 1,872 GB A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .

### Available GPUs \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Limitations A workstation configuration may specify GPUs, subject to the following limitations: Cloud Workstations only supports GPUs for configurations that specify machine types in the N1 machine series , the A2 machine series , or the A3 machine series .
- GPU model Machine type GPU count NVIDIA A100 40GB ( nvidia-tesla-a100 ) a2-highgpu-1g 1 GPU a2-highgpu-2g 2 GPUs a2-highgpu-4g 4 GPUs a2-highgpu-8g 8 GPUs a2-megagpu-16g 16 GPUs Cloud Workstations does not support A2 ultra machine types.
- If you chose the NVIDIA A100 40GB GPU model in the previous step, your configuration must use the A2 machine series: gcloud compute machine-types list \ --format = "table(name,zone,guestCpus:sort=1)" \ --filter = "name:a2-highgpu- OR name:a2-megagpu-" \ --zones = ZONES \ --project = PROJECT ID If you chose any other GPU model in the previous step, your configuration must use the N1 machine series: gcloud compute machine-types list \ --format = "table(name,zone,guestCpus:sort=1)" \ --filter = "name:n1-standard-" \ --zones = ZONES \ --project = PROJECT ID Choose a machine type that is listed twice in the table, indicating it is available in both replica zones .
- Now that you have selected a GPU model and compatible machine type, update the configuration: For NVIDIA A100 40GB GPUs, run this command to update your configuration: gcloud beta workstations configs update \ --project = PROJECT ID \ --region = LOCATION \ --cluster = CLUSTER NAME \ CONFIG NAME \ --machine-type = A2 MACHINE TYPE Replace A2 MACHINE TYPE with the chosen A2 machine type determined in the previous step (for example, a2-highgpu-1g ).

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict]] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict]] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict]] The request object.
- DeleteWorkstationClusterRequest ( name="name value", ) Make the request operation = client. delete workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.DeleteWorkstationClusterRequest , dict]] The request object.

### "Class WorkstationsClient (0.8.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- Source ID: `site-python-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict] The request object.
- DeleteWorkstationClusterRequest ( name="name value", ) Make the request operation = client. delete workstation cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.DeleteWorkstationClusterRequest , dict] The request object.

