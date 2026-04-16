---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.935Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build API"
feature_slug: "cloud-build-api"
latest_feature_date: "2016-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/api/reference/rest"
  - "https://docs.cloud.google.com/build/docs/samples/cloudbuild-quickstart"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center"
keywords:
  - "availability"
  - "reached"
---

# Cloud Build API

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

The Cloud Build API reached general availability.

## Extended Definition

The Cloud Build API reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/api/reference/rest](https://docs.cloud.google.com/build/docs/api/reference/rest)
- [https://docs.cloud.google.com/build/docs/samples/cloudbuild-quickstart](https://docs.cloud.google.com/build/docs/samples/cloudbuild-quickstart)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)

## Supporting Pages

### Cloud Build API | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/api/reference/rest](https://docs.cloud.google.com/build/docs/api/reference/rest)
- Source ID: `feature-recovery-direct-http`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Build API | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Cloud Build Start free Overview Guides Reference Samples Support Resources Technology areas More Overview Guides Reference Samples Support Resources Cross-product tools More Console Cloud Build All APIs gcloud Command Reference REST API Overview v1 TopLevel webhook REST Resources githubDotComWebhook Overview receive locations Overview regionalWebhook operations Overview cancel get projects.builds Overview approve cancel create get list retry projects.githubEnterpriseConfigs Overview create delete get list patch projects.locations Overview getDefaultServiceAccount projects.locations.bitbucketServerConfigs Overview create delete get list patch removeBitbucketServerConnectedRepository projects.locations.bitbucketServerConfigs.connectedRepositories Overview batchCreate projects.locations.bitbucketServerConfigs.repos Overview list projects.locations.builds Overview approve cancel create get list retry projects.locations.gitLabConfigs Overview create delete get list patch removeGitLabConnectedRepository projects.locations.gitLabConfigs.connectedRepositories Overview batchCreate projects.locations.gitLabConfigs.repos Overview list projects.locations.githubEnterpriseConfigs Overview create delete get list patch projects.locations.operations Overview cancel get projects.locations.triggers Overview create delete get list patch run webhook projects.locations.workerPools Overview create delete get list patch projects.triggers Overview create delete get list patch run webhook Types ApprovalConfig ListBuildTriggersResponse ListBuildsResponse ListGithubEnterpriseConfigsResponse ReceiveTriggerWebhookResponse RepoSource v2 REST Resources projects.locations Overview get list projects.locations.connections Overview create delete fetchLinkableRepositories get getIamPolicy list patch processWebhook setIamPolicy testIamPermissions projects.locations.connections.repositories Overview accessReadToken accessReadWriteToken batchCreate create delete fetchGitRefs get list projects.locations.operations Overview cancel get Types Policy Shared types Types CancelOperationRequest GetOperationRequest HttpBody Operation Client Libraries Overview Go reference Java reference Node.js reference Python reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development Cloud Build Reference Send feedback Cloud Build API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v2.projects.locations REST Resource: v2.projects.locations.connections REST Resource: v2.projects.locations.connections.repositories REST Resource: v2.projects.locations.operations REST Resource: v1 REST Resource: v1.githubDotComWebhook REST Resource: v1.locations REST Resource: v1.operations REST Resource: v1.projects.builds REST Resource: v1.projects.githubEnterpriseConfigs REST Resource: v1.projects.locations REST Resource: v1.projects.locations.bitbucketServerConfigs REST Resource: v1.projects.locations.bitbucketServerConfigs.connectedRepositories REST Resource: v1.projects.locations.bitbucketServerConfigs.repos REST Resource: v1.projects.locations.builds REST Resource: v1.projects.locations.gitLabConfigs REST Resource: v1.projects.locations.gitLabConfigs.connectedRepositories REST Resource: v1.projects.locations.gitLabConfigs.repos REST Resource: v1.projects.locations.githubEnterpriseConfigs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.triggers REST Resource: v1.projects.locations.workerPools REST Resource: v1.projects.triggers Service: cloudbuild.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.builds Methods approve POST /v1/{name=projects/*/locations/*/builds/*}:approve Approves or rejects a pending build. cancel POST /v1/{name=projects/*/locations/*/builds/*}:cancel Cancels a build in progress. create POST /v1/{parent=projects/*/locations/*}/builds Starts a build with the specified configuration. get GET /v1/{name=projects/*/locations/*/builds/*} Returns information about a previously requested build. list GET /v1/{parent=projects/*/locations/*}/builds Lists previously requested builds. retry POST /v1/{name=projects/*/locations/*/builds/*}:retry Creates a new build based on the specified build.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudbuild.googleapis.com REST Resource: v2.projects.locations Methods get GET /v2/{name=projects/*/locations/*} Gets information about a location. list GET /v2/{name=projects/*}/locations Lists information about the supported locations for this service.

### Client Libraries - Cloud Build Quickstart | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/samples/cloudbuild-quickstart](https://docs.cloud.google.com/build/docs/samples/cloudbuild-quickstart)
- Source ID: `feature-recovery-http`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . async function quickstart ( projectId = 'YOUR_PROJECT_ID' , // Your Google Cloud Platform project ID triggerId = 'YOUR_TRIGGER_ID' , // UUID for build trigger. branchName = 'BRANCH_TO_BUILD' // Branch to run build against. ) { // Imports the Google Cloud client library const { CloudBuildClient } = require ( ' @google-cloud/cloudbuild ' ); // Creates a client const cb = new CloudBuildClient (); // Note: for Private Pools, you'll have to specify an API endpoint value // For example: // const cb = new CloudBuildClient({ apiEndpoint: '<YOUR_POOL_REGION>-cloudbuild.googleapis.com' }); // Starts a build against the branch provided. const [ resp ] = await cb . runBuildTrigger ({ projectId , triggerId , source : { projectId , dir : './' , branchName , }, }); console . info ( `triggered build for ${ triggerId } ` ); const [ build ] = await resp . promise (); const STATUS_LOOKUP = [ ' UNKNOWN ' , 'Queued' , 'Working' , 'Success' , 'Failure' , 'Error' , 'Timeout' , 'Cancelled' , ]; for ( const step of build . steps ) { console . info ( `step:\n\tname: ${ step . name } \n\tstatus: ${ STATUS_LOOKUP [ build . status ] } ` ); } } Python To authenticate to Cloud Build, set up Application Default Credentials.
- CloudBuildClient () # If you're using Private Pools or a non-global default pool, add a regional # `api_endpoint` to `CloudBuildClient()` # For example, '<YOUR_POOL_REGION>-cloudbuild.googleapis.com' # # from google.api_core import client_options # client_options = client_options.ClientOptions( # api_endpoint="us-central1-cloudbuild.googleapis.com" # ) # client = cloudbuild_v1.services.cloud_build.CloudBuildClient(client_options=client_options) build = cloudbuild_v1 .
- Quickstart for using the Cloud Build API Explore further For detailed documentation that includes this code sample, see the following: Cloud Build client libraries Code sample Node.js To authenticate to Cloud Build, set up Application Default Credentials.

### "Connect to a Bitbucket Data Center repository \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following curl command in your terminal from the same directory as the JSON file: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -H "x-goog-user-project: PROJECT NUMBER " https://cloudbuild.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME /connectedRepositories:batchCreate -d @requests.json Where: PROJECT NUMBER is your Google Cloud project number.

