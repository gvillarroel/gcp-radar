---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.980Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "n1-standard-8 machine type support"
feature_slug: "n1-standard-8-machine-type-support"
latest_feature_date: "2023-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/available-machine-types"
  - "https://docs.cloud.google.com/workstations/docs/available-gpus"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api"
keywords:
  - "n1"
  - "standard"
  - "machine"
  - "type"
  - "workstations"
  - "supports"
  - "the"
---

# n1-standard-8 machine type support

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports the n1-standard-8 machine type.

## Extended Definition

Cloud Workstations supports the n1-standard-8 machine type.

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
- Final score: 241
- Re-rank relevance: N/A

Evidence snippets:
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n1-standard-1 1 3.75 GB n1-standard-2 2 7.5 GB n1-standard-4 4 15 GB n1-standard-8 8 30 GB n1-standard-16 16 60 GB n1-standard-32 32 120 GB n1-standard-64 64 240 GB n1-standard-96 96 360 GB N2 machine types For more information, see the Compute Engine description of the N2 machine series .
- Workstation machine type Virtual CPUs Memory in GB Confidential compute GPU acceleration Persistent Storage e2-medium 2 4 GB e2-standard-2 2 8 GB e2-standard-4 4 16 GB e2-standard-8 8 32 GB e2-standard-16 16 64 GB e2-standard-32 32 128 GB N1 machine types For more information, see the Compute Engine description of the N1 machine series .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage n2d-standard-2 2 8 GB n2d-standard-4 4 16 GB n2d-standard-8 8 32 GB n2d-standard-16 16 64 GB n2d-standard-32 32 128 GB N2D high-mem machine types For more information, see the Compute Engine description of the N2D machine series and select N2D high-mem .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage c3-standard-4 4 16 GB c3-standard-8 8 32 GB c3-standard-22 22 88 GB c3-standard-44 44 176 GB c3-standard-88 88 352 GB c3-standard-176 176 704 GB A2 Standard machine types These machine types have a fixed number of A100 40GB GPUs .

### Available GPUs \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: N/A

Evidence snippets:
- For all other GPU models, run this command: gcloud beta workstations configs update \ --project = PROJECT ID \ --region = LOCATION \ --cluster = CLUSTER NAME \ CONFIG NAME \ --machine-type = N1 MACHINE TYPE \ --accelerator-type = ACCELERATOR TYPE \ --accelerator-count = ACCELERATOR COUNT Replace the following: N1 MACHINE TYPE : the chosen machine type from the N1 series (for example, n1-standard-2 ).
- Limitations A workstation configuration may specify GPUs, subject to the following limitations: Cloud Workstations only supports GPUs for configurations that specify machine types in the N1 machine series , the A2 machine series , or the A3 machine series .
- If you chose the NVIDIA A100 40GB GPU model in the previous step, your configuration must use the A2 machine series: gcloud compute machine-types list \ --format = "table(name,zone,guestCpus:sort=1)" \ --filter = "name:a2-highgpu- OR name:a2-megagpu-" \ --zones = ZONES \ --project = PROJECT ID If you chose any other GPU model in the previous step, your configuration must use the N1 machine series: gcloud compute machine-types list \ --format = "table(name,zone,guestCpus:sort=1)" \ --filter = "name:n1-standard-" \ --zones = ZONES \ --project = PROJECT ID Choose a machine type that is listed twice in the table, indicating it is available in both replica zones .
- For all other GPU models, run this command to create your configuration: gcloud beta workstations configs create \ --project = PROJECT ID \ --region = LOCATION \ --cluster = CLUSTER NAME \ CONFIG NAME \ --replica-zones = REPLICA ZONES \ --machine-type = N1 MACHINE TYPE \ --accelerator-type = ACCELERATOR TYPE \ --accelerator-count = ACCELERATOR COUNT Replace the following: PROJECT ID : the ID of the project that will contain the new workstation configuration.

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- For more information about machine types that Cloud Workstations supports, see the list of available machine types . serviceAccount string Optional.
- For more information about machine types that Cloud Workstations supports, see the list of available machine types .
- Machine Type : nested virtualization can only be enabled on workstation configurations that specify a machineType in the N1 or N2 machine series. shieldedInstanceConfig object ( GceShieldedInstanceConfig ) Optional.
- Machine Type : nested virtualization can only be enabled on boost configurations that specify a machineType in the N1 or N2 machine series. poolSize integer Optional.

### Authenticate to the Cloud Workstations API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api](https://docs.cloud.google.com/workstations/docs/authenticate-to-workstations-api)
- Source ID: `site-docs-root-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're new to the Cloud Workstations API, make sure that you read the following sections first: Before you begin Access control with IAM Authenticate and setup API access within a workstation For more information about Google Cloud authentication, see the Authentication methods .
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Cloud Workstations client libraries provide high-level language support for authenticating to Cloud Workstations programmatically.
- On Google Cloud To authenticate a workload running on Google Cloud, you use the credentials of the service account attached to the compute resource where your code is running, such as a Compute Engine virtual machine (VM) instance .
- Home Documentation Application development Cloud Workstations Guides Send feedback Authenticate to the Cloud Workstations API Stay organized with collections Save and categorize content based on your preferences.

