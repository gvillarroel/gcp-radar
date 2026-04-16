---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.976Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "n2d-highmem machine type support"
feature_slug: "n2d-highmem-machine-type-support"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/available-machine-types"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient"
  - "https://docs.cloud.google.com/workstations/docs/available-gpus"
keywords:
  - "n2d"
  - "highmem"
  - "machine"
  - "type"
  - "workstations"
  - "supports"
  - "types"
---

# n2d-highmem machine type support

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports n2d-highmem machine types; Cloud Workstations supports n2d-highmem machine types.

## Extended Definition

Cloud Workstations supports n2d-highmem machine types; Cloud Workstations supports n2d-highmem machine types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)

## Supporting Pages

### Available machine types \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- Source ID: `site-docs-root-2`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n2d-highmem-2 2 16 GB n2d-highmem-4 4 32 GB n2d-highmem-8 8 64 GB n2d-highmem-16 16 128 GB n2d-highmem-32 32 256 GB n2d-highmem-48 48 384 GB n2d-highmem-64 64 512 GB n2d-highmem-80 80 640 GB n2d-highmem-96 96 768 GB Tau T2D machine types For more information, see the Compute Engine description of the Tau T2D machine series .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n2d-standard-2 2 8 GB n2d-standard-4 4 16 GB n2d-standard-8 8 32 GB n2d-standard-16 16 64 GB n2d-standard-32 32 128 GB N2D high-mem machine types For more information, see the Compute Engine description of the N2D machine series and select N2D high-mem .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n2-standard-2 2 8 GB n2-standard-4 4 16 GB n2-standard-8 8 32 GB n2-standard-16 16 64 GB n2-standard-32 32 128 GB N2D standard machine types For more information, see the Compute Engine description of the N2D machine series .
- Home Documentation Application development Cloud Workstations Guides Send feedback Available machine types Stay organized with collections Save and categorize content based on your preferences.

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict]] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict]] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict]] The request object.
- DeleteWorkstationClusterRequest ( name="name value", ) Make the request operation = client. delete workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.DeleteWorkstationClusterRequest , dict]] The request object.

### "Class WorkstationsClient (0.8.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- Source ID: `site-python-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict] The request object.
- DeleteWorkstationClusterRequest ( name="name value", ) Make the request operation = client. delete workstation cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.DeleteWorkstationClusterRequest , dict] The request object.

### Available GPUs \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- Source ID: `site-docs-root-2`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Limitations A workstation configuration may specify GPUs, subject to the following limitations: Cloud Workstations only supports GPUs for configurations that specify machine types in the N1 machine series , the A2 machine series , or the A3 machine series .
- Using Google Cloud Hyperdisk disk types is only supported on these following machine series: A3 C3 C4 G4 M3 N4 N4D Z3 Supported GPU models Cloud Workstations supports many of the GPU models that Compute Engine makes available.
- GPU model Machine type GPU count NVIDIA A100 40GB ( nvidia-tesla-a100 ) a2-highgpu-1g 1 GPU a2-highgpu-2g 2 GPUs a2-highgpu-4g 4 GPUs a2-highgpu-8g 8 GPUs a2-megagpu-16g 16 GPUs Cloud Workstations does not support A2 ultra machine types.
- N1 machine series The N1 general-purpose machine series supports several GPU models, and workstation configurations that specify any of the N1 machine types can also specify one of the following GPU models.

