---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.155Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Max instances"
feature_slug: "max-instances"
latest_feature_date: "2019-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse"
keywords:
  - "max"
  - "instances"
  - "lets"
  - "limit"
  - "how"
  - "far"
  - "can"
  - "scale"
---

# Max instances

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Max instances lets a function limit how far it can scale in response to incoming traffic.

## Extended Definition

Max instances lets a function limit how far it can scale in response to incoming traffic.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse)

## Supporting Pages

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit.
- Deprecated: use vpcConnector maxInstances integer The limit on the maximum number of function instances that may coexist at a given time.
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- See the Max Instances Guide for more details. minInstances integer A lower bound for the number function instances that may coexist at a given time. vpcConnector string The VPC Network Connector that this cloud function can connect to.

### ListOperationsResponse \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### ListLocationsResponse \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListLocationsResponse)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

