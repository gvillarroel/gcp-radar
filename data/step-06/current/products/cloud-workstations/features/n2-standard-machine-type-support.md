---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.985Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "N2 standard machine type support"
feature_slug: "n2-standard-machine-type-support"
latest_feature_date: "2023-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/available-machine-types"
  - "https://docs.cloud.google.com/workstations/docs/available-gpus"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api"
keywords:
  - "n2"
  - "standard"
  - "machine"
  - "type"
  - "workstations"
  - "supports"
  - "the"
  - "16"
---

# N2 standard machine type support

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports the n2-standard-8, n2-standard-16, and n2-standard-32 machine types for workstation configurations.

## Extended Definition

Cloud Workstations supports the n2-standard-8, n2-standard-16, and n2-standard-32 machine types for workstation configurations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api](https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api)

## Supporting Pages

### Available machine types \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- Source ID: `site-docs-root-2`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n1-standard-1 1 3.75 GB n1-standard-2 2 7.5 GB n1-standard-4 4 15 GB n1-standard-8 8 30 GB n1-standard-16 16 60 GB n1-standard-32 32 120 GB n1-standard-64 64 240 GB n1-standard-96 96 360 GB N2 machine types For more information, see the Compute Engine description of the N2 machine series .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n2d-standard-2 2 8 GB n2d-standard-4 4 16 GB n2d-standard-8 8 32 GB n2d-standard-16 16 64 GB n2d-standard-32 32 128 GB N2D high-mem machine types For more information, see the Compute Engine description of the N2D machine series and select N2D high-mem .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n2-standard-2 2 8 GB n2-standard-4 4 16 GB n2-standard-8 8 32 GB n2-standard-16 16 64 GB n2-standard-32 32 128 GB N2D standard machine types For more information, see the Compute Engine description of the N2D machine series .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n2d-highmem-2 2 16 GB n2d-highmem-4 4 32 GB n2d-highmem-8 8 64 GB n2d-highmem-16 16 128 GB n2d-highmem-32 32 256 GB n2d-highmem-48 48 384 GB n2d-highmem-64 64 512 GB n2d-highmem-80 80 640 GB n2d-highmem-96 96 768 GB Tau T2D machine types For more information, see the Compute Engine description of the Tau T2D machine series .

### Available GPUs \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- For all other GPU models, run this command: gcloud beta workstations configs update \ --project = PROJECT ID \ --region = LOCATION \ --cluster = CLUSTER NAME \ CONFIG NAME \ --machine-type = N1 MACHINE TYPE \ --accelerator-type = ACCELERATOR TYPE \ --accelerator-count = ACCELERATOR COUNT Replace the following: N1 MACHINE TYPE : the chosen machine type from the N1 series (for example, n1-standard-2 ).
- Limitations A workstation configuration may specify GPUs, subject to the following limitations: Cloud Workstations only supports GPUs for configurations that specify machine types in the N1 machine series , the A2 machine series , or the A3 machine series .
- Using Google Cloud Hyperdisk disk types is only supported on these following machine series: A3 C3 C4 G4 M3 N4 N4D Z3 Supported GPU models Cloud Workstations supports many of the GPU models that Compute Engine makes available.
- If you chose the NVIDIA A100 40GB GPU model in the previous step, your configuration must use the A2 machine series: gcloud compute machine-types list \ --format = "table(name,zone,guestCpus:sort=1)" \ --filter = "name:a2-highgpu- OR name:a2-megagpu-" \ --zones = ZONES \ --project = PROJECT ID If you chose any other GPU model in the previous step, your configuration must use the N1 machine series: gcloud compute machine-types list \ --format = "table(name,zone,guestCpus:sort=1)" \ --filter = "name:n1-standard-" \ --zones = ZONES \ --project = PROJECT ID Choose a machine type that is listed twice in the table, indicating it is available in both replica zones .

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- For more information about machine types that Cloud Workstations supports, see the list of available machine types . serviceAccount string Optional.
- For more information about machine types that Cloud Workstations supports, see the list of available machine types .
- Machine Type : nested virtualization can only be enabled on workstation configurations that specify a machineType in the N1 or N2 machine series. shieldedInstanceConfig object ( GceShieldedInstanceConfig ) Optional.
- Machine Type : nested virtualization can only be enabled on boost configurations that specify a machineType in the N1 or N2 machine series. poolSize integer Optional.

### Authenticate to the Cloud Workstations API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api](https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're new to the Cloud Workstations API, make sure that you read the following sections first: Before you begin Access control with IAM Authenticate and setup API access within a workstation For more information about Google Cloud authentication, see the Authentication methods .
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Cloud Workstations client libraries provide high-level language support for authenticating to Cloud Workstations programmatically.
- On Google Cloud To authenticate a workload running on Google Cloud, you use the credentials of the service account attached to the compute resource where your code is running, such as a Compute Engine virtual machine (VM) instance .
- Home Documentation Application development Cloud Workstations Guides Send feedback Authenticate to the Cloud Workstations API Stay organized with collections Save and categorize content based on your preferences.

