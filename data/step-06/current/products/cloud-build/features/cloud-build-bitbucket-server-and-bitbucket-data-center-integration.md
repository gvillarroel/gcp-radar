---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.744Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Bitbucket Server and Bitbucket Data Center integration"
feature_slug: "cloud-build-bitbucket-server-and-bitbucket-data-center-integration"
latest_feature_date: "2022-02-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center"
keywords:
  - "build"
  - "bitbucket"
  - "server"
  - "and"
  - "center"
  - "integration"
  - "supports"
  - "building"
---

# Cloud Build Bitbucket Server and Bitbucket Data Center integration

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build supports building repositories hosted on Bitbucket Server and Bitbucket Data Center, including on-premises deployments.

## Extended Definition

Cloud Build supports building repositories hosted on Bitbucket Server and Bitbucket Data Center, including on-premises deployments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)

## Supporting Pages

### Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Data Center triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- API To create a Bitbucket Data Center trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "bitbucket server trigger config" : { "repo slug" : " REPO SLUG " , "project key" : " PROJECT KEY " , "push" : { "branch" : " BRANCH NAME " # "tag" : " TAG NAME " }, "bitbucket server config resource" : "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ ID " "comment control" : " COMMENT SETTING " } } Where: REPO SLUG is the slug of your Bitbucket Server repository.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Data Center installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Data Center from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Data Center repositories.
- Create a Bitbucket Data Center trigger This section explains how you can connect your Bitbucket Data Center repositories to Cloud Build and create a trigger to automatically invoke builds on your connected repositories.

### "Connect to a Bitbucket Data Center repository \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following curl command in your terminal from the same directory as the JSON file: curl -X POST -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -H "x-goog-user-project: PROJECT NUMBER " https://cloudbuild.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME /connectedRepositories:batchCreate -d @requests.json Where: PROJECT NUMBER is your Google Cloud project number.
- Enter the following command to retrieve the webhook ID: gcloud alpha builds enterprise-config bitbucketserver describe CONFIG NAME --region = REGION Where: CONFIG NAME is the name of the Bitbucket Data Center config REGION is the region of the Bitbucket Data Center host connection What's next Learn how to build repositories from Bitbucket Data Center .
- API To connect your Bitbucket Data Center repository to Cloud Build using the API, complete the following steps: Create a JSON file with the following contents: { "parent": "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME ", "requests": { "parent": "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME ", "bitbucketServerConnectedRepository": { "parent": "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET DATA CENTER CONFIG NAME ", "repo": { "projectKey":" PROJECT KEY ", "repoSlug": " REPO SLUG ", } } } } Where: PROJECT NUMBER is the project number of your Cloud project.
- Home Documentation Application development Cloud Build Guides Send feedback Connect to a Bitbucket Data Center repository Stay organized with collections Save and categorize content based on your preferences.

### "Connect to a Bitbucket Data Center host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required IAM permissions To get the permissions that you need to connect to your Bitbucket Data Center host, ask your administrator to grant you the following IAM roles on your user account: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Integrations Owner ( roles/cloudbuild.integrations.owner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Unlike connecting your host using the Google Cloud console, you'll need to manually store your personal access tokens and webhook secret in Secret Manager before running the following command: gcloud alpha builds enterprise-config bitbucket-data-center create --name = CONFIG NAME \ --user-name = USERNAME \ --host-uri = HOST URI \ --admin-access-token-secret-version = ADMIN ACCESS TOKEN SECRET VERSION \ --read-access-token-secret-version = READ ACCESS TOKEN SECRET VERSION \ --webhook-secret-secret-version = WEBHOOK SECRET SECRET VERSION \ --api-key = API KEY \ --peered-network = PEERED NETWORK \ --peered-network-ip-range = PEERED NETWORK IP RANGE \ --ssl-ca-file = SSL CA FILE Where: CONFIG NAME is the name of your Bitbucket Data Center configuration.
- Enter the following curl command in your terminal: curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" https : // cloudbuild . googleapis . com / v1 / projects / PROJECT ID / locations / REGION / bitbucketServerConfigs / ? bitbucketServerConfigId = CONFIG NAME - d @config . json Where: PROJECT ID is your Google Cloud project ID .
- To rotate an old or expired token for your connection, do the following: Find the secrets associated with your host connection: Run the following command: gcloud builds connections describe CONNECTION PATH --region = REGION Where: CONNECTION PATH is the path of your Bitbucket Data Center host connection in Cloud Build, in the format projects/ PROJECT ID /locations/ REGION /connections/ CONNECTION NAME .

