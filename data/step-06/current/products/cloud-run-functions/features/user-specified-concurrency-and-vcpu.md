---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.958Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "User-specified concurrency and vCPU"
feature_slug: "user-specified-concurrency-and-vcpu"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/building"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy"
keywords:
  - "user"
  - "specified"
  - "concurrency"
  - "vcpu"
  - "run"
  - "functions"
  - "2nd"
  - "gen"
---

# User-specified concurrency and vCPU

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Cloud Run functions 2nd gen supports optional user-specified concurrency and vCPU settings.

## Extended Definition

Cloud Run functions 2nd gen supports optional user-specified concurrency and vCPU settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy)

## Supporting Pages

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.
- Google Cloud Functions delegates access to service agents to protect function resources in internal projects that are not accessible by the end user. buildWorkerPool string Name of the Cloud Build Custom Worker Pool that should be used to build the function.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.
- Note: If you are using a service account from a different project, see Configure user-specified service accounts .
- If you want to move your existing projects away from this service account, you can take the following steps to further secure your functions build environment: Prevent the legacy Cloud Build service account from being used for the build Prevent the default Compute service account from being used for the build Configure a new service account with appropriately scoped permissions to be used for the build Prevent the legacy Cloud Build service account from being used for build Warning: This will temporarily break all deployments until you assign a new service account.
- VPC Service Controls considerations If you have a VPC Service Controls perimeter protecting both your project and the Cloud Run functions API, and if you're using the Compute Engine default service account as the Cloud Build Service Account role for Cloud Run functions, you must create the following ingress rules: Allow Compute Engine default service account ingress to all methods on both Cloud Storage and Cloud Logging APIs.

### Policy \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy)
- Source ID: `site-docs-reference-2`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if the bindings grant 50 different roles to user:alice@example.com , and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy . auditConfigs[] object ( AuditConfig ) Specifies cloud audit logging configuration for this policy. etag string ( bytes format) etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other.
- JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation .
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Policy Stay organized with collections Save and categorize content based on your preferences.
- A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.

