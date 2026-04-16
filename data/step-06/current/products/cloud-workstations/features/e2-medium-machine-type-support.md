---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.975Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "e2-medium machine type support"
feature_slug: "e2-medium-machine-type-support"
latest_feature_date: "2024-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/available-machine-types"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient"
keywords:
  - "e2"
  - "medium"
  - "machine"
  - "type"
  - "workstations"
  - "supports"
  - "the"
---

# e2-medium machine type support

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports the e2-medium machine type; Cloud Workstations supports the e2-medium machine type.

## Extended Definition

Cloud Workstations supports the e2-medium machine type; Cloud Workstations supports the e2-medium machine type.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)

## Supporting Pages

### Available machine types \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- Source ID: `site-docs-root-2`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Workstation machine type Virtual CPUs Memory in GB Confidential compute GPU acceleration Persistent Storage e2-medium 2 4 GB e2-standard-2 2 8 GB e2-standard-4 4 16 GB e2-standard-8 8 32 GB e2-standard-16 16 64 GB e2-standard-32 32 128 GB N1 machine types For more information, see the Compute Engine description of the N1 machine series .
- E2 machine types For more information, see the Compute Engine description of the E2 machine series .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n2d-highmem-2 2 16 GB n2d-highmem-4 4 32 GB n2d-highmem-8 8 64 GB n2d-highmem-16 16 128 GB n2d-highmem-32 32 256 GB n2d-highmem-48 48 384 GB n2d-highmem-64 64 512 GB n2d-highmem-80 80 640 GB n2d-highmem-96 96 768 GB Tau T2D machine types For more information, see the Compute Engine description of the Tau T2D machine series .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n1-standard-1 1 3.75 GB n1-standard-2 2 7.5 GB n1-standard-4 4 15 GB n1-standard-8 8 30 GB n1-standard-16 16 60 GB n1-standard-32 32 120 GB n1-standard-64 64 240 GB n1-standard-96 96 360 GB N2 machine types For more information, see the Compute Engine description of the N2 machine series .

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For more information about machine types that Cloud Workstations supports, see the list of available machine types . serviceAccount string Optional.
- For more information about machine types that Cloud Workstations supports, see the list of available machine types .
- The type of machine that boosted VM instances will use—for example, e2-standard-4 .
- The type of machine to use for VM instances—for example, "e2-standard-4" .

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict]] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict]] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict]] The request object.
- DeleteWorkstationClusterRequest ( name="name value", ) Make the request operation = client. delete workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.DeleteWorkstationClusterRequest , dict]] The request object.

### "Class WorkstationsClient (0.8.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- Source ID: `site-python-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict] The request object.
- DeleteWorkstationClusterRequest ( name="name value", ) Make the request operation = client. delete workstation cluster (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.workstations v1.types.DeleteWorkstationClusterRequest , dict] The request object.

