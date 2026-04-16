---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.038Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Build configuration variables"
feature_slug: "build-configuration-variables"
latest_feature_date: "2020-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/building"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
keywords:
  - "build"
  - "configuration"
  - "variables"
  - "let"
  - "buildpack"
  - "based"
  - "runtimes"
  - "customize"
---

# Build configuration variables

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Build configuration variables let buildpack-based runtimes customize build behavior through variables.

## Extended Definition

Build configuration variables let buildpack-based runtimes customize build behavior through variables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)

## Supporting Pages

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example import logging import traceback def try catch log(wrapped func): def wrapper( args, kwargs): try: response = wrapped func( args, kwargs) except Exception: Replace new lines with spaces so as to prevent several entries which would trigger several errors. error message = traceback.format exc().replace('\n', ' ') logging.error(error message) return 'Error'; return response; return wrapper; #Example hello world function @try catch log def python hello world(request): request args = request.args if request args and 'name' in request args: 1 + 's' return 'Hello World!' Logs too large in Node.js 10+, Python 3.8, Go 1.13, and Java 11 The maximum size for a regular log entry in these runtimes is 105 KiB.
- Step #2 - "build": ERROR: failed to create image cache: accessing cache image " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": connect to repo store " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": GET https:// LOCATION -docker.pkg.dev/v2/token?scope=repository%3A PROJECT %2Fgcf-artifacts%2F FUNCTION NAME %2Fcache%3Apull&service=: DENIED: Permission "artifactregistry.repositories.downloadArtifacts" denied on resource "projects/ PROJECT /locations/ LOCATION /repositories/gcf-artifacts" (or it may not exist) Could not build the function due to a missing permission on the build service account.
- The error message HTTP Error Response code: 404 NOT FOUND The solution To re-enable the default cloudfunctions.net URL for Cloud Run functions (2nd gen), you must re-enable the run.app URL in Cloud Run by replacing the service.yaml file with a new configuration where annotations:run.googleapis.com/default-url-disabled: false Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The error message The request was aborted because there was no available instance severity=WARNING ( Response code: 429 ) Cloud Run functions cannot scale due to the max-instances limit you set during configuration. severity=ERROR ( Response code: 500 ) Cloud Run functions intrinsically cannot manage the rate of traffic.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When specifying a Artifact Registry repository located in a different project or region you may need to consider additional configurations: IAM configurations: IAM configurations: Ensure that the build service account has authorized access to read and write to the REPOSITORY .
- Provide a service account for building functions As part of a function's configuration, you can specify a build service account when deploying the function.
- VPC Service Controls configurations: Ensure that the build service account can reach the target REPOSITORY within the VPC-SC perimeter.
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Cloud Build Name of the function deployment. projects/<project-number>/locations/<region>/builds/<build-id> . secretEnvironmentVariables[] object ( SecretEnvVar ) Secret environment variables configuration. secretVolumes[] object ( SecretVolume ) Secret volumes configuration. sourceToken string Input only.
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } . buildEnvironmentVariables map (key: string, value: string) Build environment variables that shall be available during build time.
- If the project id is not the same as the function, then the Cloud Functions Service Agent ( service-<project number>@gcf-admin-robot.iam.gserviceaccount.com ) must be granted the role Cloud Build Custom Workers Builder ( roles/cloudbuild.customworkers.builder ) in the project. buildId string Output only.

