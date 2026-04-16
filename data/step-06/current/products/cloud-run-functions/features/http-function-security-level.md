---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.032Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "HTTP function security level"
feature_slug: "http-function-security-level"
latest_feature_date: "2021-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions"
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/building"
keywords:
  - "http"
  - "security"
  - "level"
  - "controls"
  - "whether"
  - "url"
  - "allows"
  - "https"
---

# HTTP function security level

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

HTTP function security level controls whether a function URL allows HTTPS only or both HTTP and HTTPS.

## Extended Definition

HTTP function security level controls whether a function URL allows HTTPS only or both HTTP and HTTPS.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)

## Supporting Pages

### "REST Resource: projects.locations.functions \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: CloudFunction JSON representation SourceRepository JSON representation HttpsTrigger JSON representation SecurityLevel EventTrigger JSON representation FailurePolicy JSON representation Retry CloudFunctionStatus VpcConnectorEgressSettings IngressSettings SecretEnvVar JSON representation SecretVolume JSON representation SecretVersion JSON representation DockerRegistry AutomaticUpdatePolicy OnDeployUpdatePolicy JSON representation Methods Resource: CloudFunction Describes a Cloud Function that contains user computation executed in response to an event.
- This controls the methods to enforce security (HTTPS) on a URL.
- JSON representation { "name" : string , "description" : string , "status" : enum ( CloudFunctionStatus ) , "entryPoint" : string , "runtime" : string , "timeout" : string , "availableMemoryMb" : integer , "serviceAccountEmail" : string , "updateTime" : string , "versionId" : string , "labels" : { string : string , ... } , "environmentVariables" : { string : string , ... } , "buildEnvironmentVariables" : { string : string , ... } , "network" : string , "maxInstances" : integer , "minInstances" : integer , "vpcConnector" : string , "vpcConnectorEgressSettings" : enum ( VpcConnectorEgressSettings ) , "ingressSettings" : enum ( IngressSettings ) , "kmsKeyName" : string , "buildWorkerPool" : string , "buildId" : string , "buildName" : string , "secretEnvironmentVariables" : [ { object ( SecretEnvVar ) } ] , "secretVolumes" : [ { object ( SecretVolume ) } ] , "sourceToken" : string , "dockerRepository" : string , "dockerRegistry" : enum ( DockerRegistry ) , "buildServiceAccount" : string , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , // Union field source code can be only one of the following: "sourceArchiveUrl" : string , "sourceRepository" : { object ( SourceRepository ) } , "sourceUploadUrl" : string // End of list of possible types for union field source code . // Union field trigger can be only one of the following: "httpsTrigger" : { object ( HttpsTrigger ) } , "eventTrigger" : { object ( EventTrigger ) } // End of list of possible types for union field trigger . // Union field runtime update policy can be only one of the following: "automaticUpdatePolicy" : { object ( AutomaticUpdatePolicy ) } , "onDeployUpdatePolicy" : { object ( OnDeployUpdatePolicy ) } // End of list of possible types for union field runtime update policy . } Fields name string A user-defined name of the function.
- This controls when security patches are applied to the runtime environment. runtime update policy can be only one of the following: automaticUpdatePolicy object ( AutomaticUpdatePolicy ) onDeployUpdatePolicy object ( OnDeployUpdatePolicy ) SourceRepository Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The error message In Audited Resources logs, an entry like the following: "protoPayload": { "@type": "type.googleapis.com/google.cloud.audit.AuditLog", "status": { "code": 7, "details": [ { "@type": "type.googleapis.com/google.rpc.PreconditionFailure", "violations": [ { "type": "VPC SERVICE CONTROLS", ... "authenticationInfo": { "principalEmail": " CLOUD FUNCTION RUNTIME SERVICE ACCOUNT ", ... "metadata": { "violationReason": "NO MATCHING ACCESS LEVEL", "securityPolicyInfo": { "organizationId": " ORGANIZATION ID ", "servicePerimeterName": "accessPolicies/ NUMBER /servicePerimeters/ SERVICE PERIMETER NAME " ...
- Serving error due to allow internal traffic only configuration Ingress settings restrict whether an HTTP function can be invoked by resources outside of your Google Cloud project or VPC Service Controls service perimeter.
- Step #2 - "build": ERROR: failed to create image cache: accessing cache image " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": connect to repo store " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION NAME /cache:latest": GET https:// LOCATION -docker.pkg.dev/v2/token?scope=repository%3A PROJECT %2Fgcf-artifacts%2F FUNCTION NAME %2Fcache%3Apull&service=: DENIED: Permission "artifactregistry.repositories.downloadArtifacts" denied on resource "projects/ PROJECT /locations/ LOCATION /repositories/gcf-artifacts" (or it may not exist) Could not build the function due to a missing permission on the build service account.
- For example, you can get an identity token using gcloud as follows: curl -H "Authorization: Bearer $( gcloud auth print-identity-token ) " https:// REGION - PROJECT ID .cloudfunctions.net/ FUNCTION NAME Redeploy your function to allow unauthenticated invocations if this is supported by your organization.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: Deploying function ( may take a while - up to 2 minutes ) ...⠹ For Cloud Build Stackdriver Logs , visit: https://console.cloud.google.com/logs/viewer?project = & advancedFilter = resource.type% 3Dbuild%0Aresource.labels.build id%3D38d5b662-2315-45dd-8aa2- 380d50d4f5e8%0AlogName%3Dprojects%2F % 2Flogs%2Fcloudbuild Deploying function ( may take a while - up to 2 minutes ) ...done.
- To use Cloud Run functions with VPC Service Controls, you must configure your Cloud Build service account (whether default or custom ) to have access to your service perimeter.
- VPC Service Controls considerations If you have a VPC Service Controls perimeter protecting both your project and the Cloud Run functions API, and if you're using the Compute Engine default service account as the Cloud Build Service Account role for Cloud Run functions, you must create the following ingress rules: Allow Compute Engine default service account ingress to all methods on both Cloud Storage and Cloud Logging APIs.
- You can optionally use a private pool , which you specify using the --build-worker-pool flag. gcloud functions deploy FUNCTION NAME \ -- gen2 \ -- region = REGION \ -- project = PROJECT ID \ -- runtime = RUNTIME \ -- entry - point = CODE ENTRYPOINT \ -- build - service - account = projects / PROJECT ID / serviceAccounts / SA EMAIL \ -- memory = 256 Mi \ -- trigger - http \ -- source = .

