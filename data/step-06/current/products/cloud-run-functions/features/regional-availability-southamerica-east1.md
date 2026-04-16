---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.129Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Regional availability: southamerica-east1"
feature_slug: "regional-availability-southamerica-east1"
latest_feature_date: "2020-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations"
keywords:
  - "regional"
  - "availability"
  - "southamerica"
  - "east1"
  - "run"
  - "functions"
  - "available"
  - "region"
---

# Regional availability: southamerica-east1

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Cloud Run functions is available in the southamerica-east1 region.

## Extended Definition

Cloud Run functions is available in the southamerica-east1 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations)

## Supporting Pages

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- CONTAINER REGISTRY Docker images will be stored in multi-regional Container Registry repositories named gcf .
- ARTIFACT REGISTRY Docker images will be stored in regional Artifact Registry repositories.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.

### ListLocationsResponse \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse)
- Source ID: `site-docs-reference-2`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example {"cloud.googleapis.com/region": "us-east1"} An object containing a list of "key": value pairs.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback ListLocationsResponse Stay organized with collections Save and categorize content based on your preferences.
- For example: "projects/example-project/locations/us-east1" locationId string The canonical id for this location.
- For example: "us-east1" . displayName string The friendly name for this location, typically a nearby city name.

### "REST Resource: projects.locations \_|\_ Cloud Run functions \_|\_ Google\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations)
- Source ID: `site-docs-reference-2`
- Final score: 49
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example {"cloud.googleapis.com/region": "us-east1"} An object containing a list of "key": value pairs.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback REST Resource: projects.locations Stay organized with collections Save and categorize content based on your preferences.
- For example: "projects/example-project/locations/us-east1" locationId string The canonical id for this location.
- For example: "us-east1" . displayName string The friendly name for this location, typically a nearby city name.

