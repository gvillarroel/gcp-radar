---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.023Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Secret Manager integration"
feature_slug: "secret-manager-integration"
latest_feature_date: "2021-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/securing/managing-access-iam"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy"
keywords:
  - "secret"
  - "manager"
  - "integration"
  - "lets"
  - "functions"
  - "access"
  - "secrets"
  - "natively"
---

# Secret Manager integration

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Secret Manager integration lets functions access secrets natively.

## Extended Definition

Secret Manager integration lets functions access secrets natively.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy)

## Supporting Pages

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- Methods call Synchronously invokes a deployed Cloud Function. create Creates a new function. delete Deletes a function with the given name from the specified project. generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl Returns a signed URL for uploading a function source code. get Returns a function with the given name from the requested project. getIamPolicy Gets the IAM access control policy for a function. list Returns a list of functions that belong to the requested project. patch Updates existing function. setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions Tests the specified permissions against the IAM access control policy for a function.
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.
- If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function. secret string Name of the secret in secret manager (not the full resource name). versions[] object ( SecretVersion ) List of secret versions to mount for this secret.

### Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- Source ID: `site-iam-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Viewing principals To view principals, use the gcloud functions get-iam-policy command: gcloud functions get-iam-policy FUNCTION NAME Allowing unauthenticated HTTP function invocation Note: If you created functions using the Cloud Run Admin API, see the Allowing public (unauthenticated) access guide instead.
- Before you begin To get the permission that you need to control access for a specific function or all functions in a project, ask your administrator to grant you the Cloud Functions Admin ( roles/roles/cloudfunctions.admin ) IAM role on the function or the project.
- Authorize access with IAM You use Identity and Access Management (IAM) to authorize identities to perform administrative actions on functions created using the Cloud Functions v2 API —for example, using gcloud functions , the REST API, or Terraform.
- This predefined role contains the cloudfunctions.functions.setIamPolicy permission, which is required to control access for a specific function or all functions in a project.

### Policy \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/Policy)
- Source ID: `site-docs-reference-2`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation .
- For some types of Google Cloud resources, a binding can also specify a condition , which is a logical expression that allows access to a resource only if the expression evaluates to true .
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Policy Stay organized with collections Save and categorize content based on your preferences.
- JSON representation An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.

