---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.983Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Regional availability in us-east4"
feature_slug: "regional-availability-in-us-east4"
latest_feature_date: "2023-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/available-gpus"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.pagers.ListUsableWorkstationsAsyncPager"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "us"
  - "east4"
  - "workstations"
  - "is"
  - "available"
---

# Regional availability in us-east4

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations is available in the us-east4 region.

## Extended Definition

Cloud Workstations is available in the us-east4 region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek](https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.pagers.ListUsableWorkstationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.pagers.ListUsableWorkstationsAsyncPager)

## Supporting Pages

### Available GPUs \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- Source ID: `site-docs-root-2`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A100 40GB H100 T4 V100 P100 P4 Clear all Zones Location GPU platforms asia-east1-a Taiwan P100, T4 asia-east1-b Taiwan asia-east1-c Taiwan H100, P100, T4, V100 asia-east2-a Hong Kong T4 asia-east2-b Hong Kong asia-east2-c Hong Kong T4 asia-northeast1-a Tokyo A100 40GB, T4 asia-northeast1-b Tokyo H100 asia-northeast1-c Tokyo A100 40GB, T4 asia-northeast3-a Seoul A100 40GB, H100 asia-northeast3-b Seoul A100 40GB, T4 asia-northeast3-c Seoul H100, T4 asia-south1-a asia-south1-b Mumbai T4 asia-south1-c Mumbai H100 asia-southeast1-a Singapore T4 asia-southeast1-b asia-southeast1-c Singapore A100 40GB, H100, P4, T4 australia-southeast1-a Sydney P4, T4 australia-southeast1-b Sydney P100, P4 australia-southeast1-c Sydney H100, T4 australia-southeast2-a australia-southeast2-b australia-southeast2-c Melbourne europe-central2-a Warsaw europe-central2-b europe-central2-c Warsaw T4 europe-north1-a europe-north1-b Finland europe-north1-c Finland H100 europe-southwest1-a europe-southwest1-b europe-southwest1-c Madrid europe-west1-b Belgium H100, P100, T4 europe-west1-c Belgium H100, T4 europe-west1-d Belgium P100, T4 europe-west12-a europe-west12-b Turin europe-west2-a London T4 europe-west2-b London H100, T4 europe-west2-c London europe-west3-a Frankfurt H100 europe-west3-b Frankfurt T4 europe-west3-c Frankfurt H100 europe-west4-a Netherlands A100 40GB, P100, T4, V100 europe-west4-b Netherlands A100 40GB, H100, P4, T4, V100 europe-west4-c Netherlands H100, P4, T4, V100 europe-west6-a europe-west6-b europe-west6-c Zurich europe-west8-a europe-west8-b Milan europe-west8-c Milan H100 europe-west9-a europe-west9-b Paris europe-west9-c Paris H100 me-central2-a me-central2-b me-central2-c Dammam me-west1-a Tel Aviv A100 40GB me-west1-b Tel Aviv T4 me-west1-c Tel Aviv A100 40GB, T4 northamerica-northeast1-a northamerica-northeast1-b Montréal P4 northamerica-northeast1-c Montréal P4, T4 southamerica-east1-a São Paulo T4 southamerica-east1-b São Paulo southamerica-east1-c São Paulo T4 southamerica-west1-a southamerica-west1-b southamerica-west1-c Santiago us-central1-a Iowa A100 40GB, H100, P4, T4, V100 us-central1-b Iowa A100 40GB, H100, T4, V100 us-central1-c Iowa A100 40GB, H100, P100, P4, T4, V100 us-central1-f Iowa A100 40GB, P100, T4, V100 us-east1-b South Carolina A100 40GB, P100 us-east1-c South Carolina P100, T4, V100 us-east1-d South Carolina T4 us-east4-a us-east4-b us-east4-c Northern Virginia H100, P4, T4 us-east5-a Columbus H100 us-east5-b us-east5-c Columbus us-west1-a Oregon H100, P100, T4, V100 us-west1-b Oregon A100 40GB, H100, P100, T4, V100 us-west1-c Oregon us-west4-a Las Vegas H100, T4 us-west4-b Las Vegas A100 40GB, T4 us-west4-c Las Vegas What's next Specify GPUs using the Cloud Workstations API .
- First though, collect some information to see which GPU models are available and to choose one for your configuration: Check which replica zones the configuration specifies by running the following gcloud CLI command: gcloud workstations configs describe \ --format = "table(name.scope(workstationConfigs),replicaZones.list())" \ --project = PROJECT ID \ --region = LOCATION \ --cluster = CLUSTER NAME \ CONFIG NAME Replace the following: PROJECT ID : the ID of the project that contains the workstation configuration.
- Using Google Cloud Hyperdisk disk types is only supported on these following machine series: A3 C3 C4 G4 M3 N4 N4D Z3 Supported GPU models Cloud Workstations supports many of the GPU models that Compute Engine makes available.
- To satisfy this use case, Cloud Workstations allows the use of Google Cloud Hyperdisk Balanced High Availability disks as persistent directories for the machine types enumerated earlier.

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: projects.locations.workstationClusters.workstationConfigs Resource: WorkstationConfig JSON representation Host JSON representation GceInstance JSON representation GceShieldedInstanceConfig JSON representation GceConfidentialInstanceConfig JSON representation Accelerator JSON representation BoostConfig JSON representation PersistentDirectory JSON representation GceRegionalPersistentDisk JSON representation ReclaimPolicy GceHyperdiskBalancedHighAvailability JSON representation ReclaimPolicy EphemeralDirectory JSON representation GcePersistentDisk JSON representation Container JSON representation CustomerEncryptionKey JSON representation ReadinessCheck JSON representation PortRange JSON representation Methods Resource: WorkstationConfig A workstation configuration resource in the Cloud Workstations API.
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "reconciling" : boolean , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "deleteTime" : string , "etag" : string , "idleTimeout" : string , "runningTimeout" : string , "maxUsableWorkstations" : integer , "host" : { object ( Host ) } , "persistentDirectories" : [ { object ( PersistentDirectory ) } ] , "ephemeralDirectories" : [ { object ( EphemeralDirectory ) } ] , "container" : { object ( Container ) } , "encryptionKey" : { object ( CustomerEncryptionKey ) } , "readinessChecks" : [ { object ( ReadinessCheck ) } ] , "replicaZones" : [ string ] , "degraded" : boolean , "conditions" : [ { object ( Status ) } ] , "enableAuditAgent" : boolean , "disableTcpConnections" : boolean , "allowedPorts" : [ { object ( PortRange ) } ] , "grantWorkstationAdminRoleOnCreate" : boolean } Fields name string Identifier.
- Methods create Creates a new workstation configuration. delete Deletes the specified workstation configuration. get Returns the requested workstation configuration. getIamPolicy Gets the access control policy for a resource. list Returns all workstation configurations in the specified cluster. listUsable Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission. patch Updates an existing workstation configuration. setIamPolicy Sets the access control policy on the specified resource. testIamPermissions Returns permissions that a caller has on the specified resource.
- How a persistent directory should be implemented. directory type can be only one of the following: gcePd object ( GceRegionalPersistentDisk ) A PersistentDirectory backed by a Compute Engine persistent disk. gceHd object ( GceHyperdiskBalancedHighAvailability ) A PersistentDirectory backed by a Compute Engine hyperdisk high availability disk.

### "Encrypt workstation resources using CMEK \_|\_ Cloud Workstations \_|\_\

- URL: [https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek](https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek)
- Source ID: `site-docs-root-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check for workstation clusters If you don't have workstation clusters available in the Google Cloud console , ask your Cloud Workstations Admin to create a workstation cluster for you in the same region as the Cloud KMS key ring, or make sure that you have a Cloud Workstations Admin IAM role on the project so that you can create these resources yourself.
- If you would like to create a new service account, use the following command: gcloud iam service-accounts create \ KMS KEY SERVICE ACCOUNT NAME \ --display-name = "Service account for Cloud Workstations CMEK" \ --project = WORKSTATIONS PROJECT ID Replace the following: KMS KEY SERVICE ACCOUNT NAME : the name of the service account.
- To retrieve the Cloud Workstations Service Agent for your workstation project, use the following command: gcloud beta services identity create \ --service = workstations.googleapis.com \ --project = WORKSTATIONS PROJECT ID Replace WORKSTATIONS PROJECT ID with the ID of your workstation project.
- Rotate customer-managed encryption keys When you granted the Cloud Workstations Service Agent Cloud KMS Viewer role ( roles/cloudkms.viewer ) on the CMEK key, the workstation service is able to detect key rotation and re-encrypt your home disk using the new primary key version.

### "Class ListUsableWorkstationsAsyncPager (0.8.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.pagers.ListUsableWorkstationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.pagers.ListUsableWorkstationsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.workstations v1.types.ListUsableWorkstationsRequest The initial request object. response google.cloud.workstations v1.types.ListUsableWorkstationsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListUsableWorkstations requests and continue to iterate through the workstations field on the corresponding responses.
- This class thinly wraps an initial ListUsableWorkstationsResponse object, and provides an aiter method to iterate through its workstations field.
- 0.8.0 (latest) 0.7.0 0.6.0 0.5.13 0.4.1 0.3.0 0.2.1 0.1.1 ListUsableWorkstationsAsyncPager ( method : typing .

