---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.971Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Regional availability in asia-northeast3"
feature_slug: "regional-availability-in-asia-northeast3"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/available-gpus"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli"
  - "https://docs.cloud.google.com/workstations/docs/available-machine-types"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "asia"
  - "northeast3"
  - "workstations"
  - "is"
  - "available"
---

# Regional availability in asia-northeast3

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations is available in the asia-northeast3 region.

## Extended Definition

Cloud Workstations is available in the asia-northeast3 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli](https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli)
- [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)

## Supporting Pages

### Available GPUs \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- A100 40GB H100 T4 V100 P100 P4 Clear all Zones Location GPU platforms asia-east1-a Taiwan P100, T4 asia-east1-b Taiwan asia-east1-c Taiwan H100, P100, T4, V100 asia-east2-a Hong Kong T4 asia-east2-b Hong Kong asia-east2-c Hong Kong T4 asia-northeast1-a Tokyo A100 40GB, T4 asia-northeast1-b Tokyo H100 asia-northeast1-c Tokyo A100 40GB, T4 asia-northeast3-a Seoul A100 40GB, H100 asia-northeast3-b Seoul A100 40GB, T4 asia-northeast3-c Seoul H100, T4 asia-south1-a asia-south1-b Mumbai T4 asia-south1-c Mumbai H100 asia-southeast1-a Singapore T4 asia-southeast1-b asia-southeast1-c Singapore A100 40GB, H100, P4, T4 australia-southeast1-a Sydney P4, T4 australia-southeast1-b Sydney P100, P4 australia-southeast1-c Sydney H100, T4 australia-southeast2-a australia-southeast2-b australia-southeast2-c Melbourne europe-central2-a Warsaw europe-central2-b europe-central2-c Warsaw T4 europe-north1-a europe-north1-b Finland europe-north1-c Finland H100 europe-southwest1-a europe-southwest1-b europe-southwest1-c Madrid europe-west1-b Belgium H100, P100, T4 europe-west1-c Belgium H100, T4 europe-west1-d Belgium P100, T4 europe-west12-a europe-west12-b Turin europe-west2-a London T4 europe-west2-b London H100, T4 europe-west2-c London europe-west3-a Frankfurt H100 europe-west3-b Frankfurt T4 europe-west3-c Frankfurt H100 europe-west4-a Netherlands A100 40GB, P100, T4, V100 europe-west4-b Netherlands A100 40GB, H100, P4, T4, V100 europe-west4-c Netherlands H100, P4, T4, V100 europe-west6-a europe-west6-b europe-west6-c Zurich europe-west8-a europe-west8-b Milan europe-west8-c Milan H100 europe-west9-a europe-west9-b Paris europe-west9-c Paris H100 me-central2-a me-central2-b me-central2-c Dammam me-west1-a Tel Aviv A100 40GB me-west1-b Tel Aviv T4 me-west1-c Tel Aviv A100 40GB, T4 northamerica-northeast1-a northamerica-northeast1-b Montréal P4 northamerica-northeast1-c Montréal P4, T4 southamerica-east1-a São Paulo T4 southamerica-east1-b São Paulo southamerica-east1-c São Paulo T4 southamerica-west1-a southamerica-west1-b southamerica-west1-c Santiago us-central1-a Iowa A100 40GB, H100, P4, T4, V100 us-central1-b Iowa A100 40GB, H100, T4, V100 us-central1-c Iowa A100 40GB, H100, P100, P4, T4, V100 us-central1-f Iowa A100 40GB, P100, T4, V100 us-east1-b South Carolina A100 40GB, P100 us-east1-c South Carolina P100, T4, V100 us-east1-d South Carolina T4 us-east4-a us-east4-b us-east4-c Northern Virginia H100, P4, T4 us-east5-a Columbus H100 us-east5-b us-east5-c Columbus us-west1-a Oregon H100, P100, T4, V100 us-west1-b Oregon A100 40GB, H100, P100, T4, V100 us-west1-c Oregon us-west4-a Las Vegas H100, T4 us-west4-b Las Vegas A100 40GB, T4 us-west4-c Las Vegas What's next Specify GPUs using the Cloud Workstations API .
- First though, collect some information to see which GPU models are available and to choose one for your configuration: Check which replica zones the configuration specifies by running the following gcloud CLI command: gcloud workstations configs describe \ --format = "table(name.scope(workstationConfigs),replicaZones.list())" \ --project = PROJECT ID \ --region = LOCATION \ --cluster = CLUSTER NAME \ CONFIG NAME Replace the following: PROJECT ID : the ID of the project that contains the workstation configuration.
- Using Google Cloud Hyperdisk disk types is only supported on these following machine series: A3 C3 C4 G4 M3 N4 N4D Z3 Supported GPU models Cloud Workstations supports many of the GPU models that Compute Engine makes available.
- To satisfy this use case, Cloud Workstations allows the use of Google Cloud Hyperdisk Balanced High Availability disks as persistent directories for the machine types enumerated earlier.

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: projects.locations.workstationClusters.workstationConfigs Resource: WorkstationConfig JSON representation Host JSON representation GceInstance JSON representation GceShieldedInstanceConfig JSON representation GceConfidentialInstanceConfig JSON representation Accelerator JSON representation BoostConfig JSON representation PersistentDirectory JSON representation GceRegionalPersistentDisk JSON representation ReclaimPolicy GceHyperdiskBalancedHighAvailability JSON representation ReclaimPolicy EphemeralDirectory JSON representation GcePersistentDisk JSON representation Container JSON representation CustomerEncryptionKey JSON representation ReadinessCheck JSON representation PortRange JSON representation Methods Resource: WorkstationConfig A workstation configuration resource in the Cloud Workstations API.
- How a persistent directory should be implemented. directory type can be only one of the following: gcePd object ( GceRegionalPersistentDisk ) A PersistentDirectory backed by a Compute Engine persistent disk. gceHd object ( GceHyperdiskBalancedHighAvailability ) A PersistentDirectory backed by a Compute Engine hyperdisk high availability disk.
- JSON representation { "mountPath" : string , // Union field directory type can be only one of the following: "gcePd" : { object ( GceRegionalPersistentDisk ) } , "gceHd" : { object ( GceHyperdiskBalancedHighAvailability ) } // End of list of possible types for union field directory type . } Fields mountPath string Optional.
- For more information about machine types that Cloud Workstations supports, see the list of available machine types . serviceAccount string Optional.

### "AI agent-assisted coding with Gemini CLI \_|\_ Cloud Workstations \_|\_\

- URL: [https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli](https://docs.cloud.google.com/workstations/docs/ai-agent-assisted-coding-gemini-cli)
- Source ID: `site-docs-root-2`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Cloud Workstations Guides Send feedback AI agent-assisted coding with Gemini CLI Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- For instructions, see Create and launch your workstation Start AI agent-assisted coding To begin using Gemini CLI for AI agent-assisted coding, follow these steps: In your workstation's base editor, open a folder or workspace using one of the following methods: Click Open Folder from the explorer view.
- For example: Explain the architecture of this codebase Write a unit test for the function in main.py Refactor the current file to use async/await Work with diffs When Gemini CLI suggests code modifications, it can open a diff view directly within your editor.

### Available machine types \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- Source ID: `site-docs-root-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the list of GPUs available in Cloud Workstations and Compute Engine GPU platforms .
- This page lists available machine types for Cloud Workstations.
- Workstation machine type GPU count Virtual CPUs Memory in GB Confidential compute GPU acceleration Persistent Storage a2-highgpu-1g 1 12 85 GB a2-highgpu-2g 2 24 170 GB a2-highgpu-4g 4 48 340 GB a2-highgpu-8g 8 96 680 GB a2-megagpu-16g 8 96 1360 GB A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .
- Workstation machine type GPU count Virtual CPUs Memory in GB Confidential compute GPU acceleration Persistent Storage a2-ultragpu-1g 1 12 170 GB a2-ultragpu-2g 2 24 340 GB a2-ultragpu-4g 4 48 680 GB a2-ultragpu-8g 8 96 1,360 GB A vCPU is implemented as a single hardware hyper-thread on one of the available CPU platforms .

