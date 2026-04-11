---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.905Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Artifact Registry repository selection for functions"
feature_slug: "artifact-registry-repository-selection-for-functions"
latest_feature_date: "2025-02-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud"
keywords:
  - "artifact"
  - "registry"
  - "repository"
  - "selection"
  - "for"
  - "functions"
  - "run"
  - "can"
---

# Artifact Registry repository selection for functions

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run functions can specify an Artifact Registry image repository for storing built containers.

## Extended Definition

Cloud Run functions can specify an Artifact Registry image repository for storing built containers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud)

## Supporting Pages

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable the Artifact Registry, Cloud Build, Cloud Run Admin API, and Cloud Logging APIs: gcloud services enable artifactregistry.googleapis.com \ cloudbuild.googleapis.com \ run.googleapis.com \ logging.googleapis.com Optionally, enable the Eventarc API to use event triggers: gcloud services enable eventarc.googleapis.com If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
- To specify a self-created Artifact Registry repository, use the following command: gcloud gcloud run deploy FUNCTION \ --source . \ --function FUNCTION ENTRYPOINT \ --base-image BASE IMAGE \ --region REGION \ --image IMAGE URL Replace the following: FUNCTION with the name of the function you are deploying.
- IMAGE URL with a reference to the image path using the Artifact Registry image repository of your choice, for example projects/ PROJECT NAME /locations/ LOCATION /repositories/ REPOSITORY NAME / FUNCTION .
- Artifact Registry automatically creates the Artifact Registry repository REGION -docker.pkg.dev/ PROJECT ID /cloud-run-source-deploy if your project hasn't already created one with this name.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Deploying the service Follow the steps to complete infrastructure provisioning and deployment: Create a Cloud SQL instance with postgreSQL database using the console or CLI: gcloud sql instances create CLOUD SQL INSTANCE NAME \ --database-version = POSTGRES 16 \ --region = CLOUD SQL REGION \ --cpu = 2 \ --memory = 7680MB \ --root-password = DB PASSWORD Add your Cloud SQL credential values to postgres-secrets.json : Node.js { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Python { "CLOUD SQL CONNECTION NAME" : "PROJECT ID:REGION:INSTANCE" , "DB NAME" : "postgres" , "DB USER" : "postgres" , "DB PASSWORD" : "PASSWORD SECRET" } Java { "spring.cloud.gcp.sql.instance-connection-name" : "PROJECT ID:REGION:INSTANCE" , "spring.cloud.gcp.sql.database-name" : "postgres" , "spring.datasource.username" : "postgres" , "spring.datasource.password" : "PASSWORD SECRET" } Create a versioned secret using the console or CLI: gcloud secrets create idp-sql-secrets \ --replication-policy = "automatic" \ --data-file = postgres-secrets.json Create a service account for the server using the console or CLI: gcloud iam service-accounts create idp-sql-identity Grant roles for Secret Manager and Cloud SQL access using the console or CLI: Allow the service account associated with the server to access the created secret: gcloud secrets add-iam-policy-binding idp-sql-secrets \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/secretmanager.secretAccessor Allow the service account associated with the server to access Cloud SQL: gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --role roles/cloudsql.client Create an Artifact Registry: gcloud artifacts repositories create REPOSITORY \ --repository-format docker \ --location REGION REPOSITORY is the name of the repository.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use the gcloud credential helper to authorize Docker to push to your Artifact Registry. gcloud auth configure-docker Use the Jib Maven Plugin to build and push the container to Artifact Registry. mvn compile jib:build -Dimage = REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /idp-sql Deploy the container image to Cloud Run using the console or CLI.

### "Quickstart: Deploy a Cloud Run function using the gcloud CLI \_|\_ Google\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License . -- > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>com . example . functions < / groupId > < artifactId>functions - hello - world < / artifactId > < version>1 .0.0 - SNAPSHOT < / version > < parent > < groupId>com . google . cloud . samples < / groupId > < artifactId>shared - configuration < / artifactId > < version>1 .2.0 < / version > < / parent > < dependencyManagement > < dependencies > < dependency > < artifactId>libraries - bom < / artifactId > < groupId>com . google . cloud < / groupId > < scope>import < / scope > < type>pom < / type > < version>26 .32.0 < / version > < / dependency > < / dependencies > < / dependencyManagement > < properties > < maven . compiler . target>11 < / maven . compiler . target > < maven . compiler . source>11 < / maven . compiler . source > < / properties > < dependencies > < !-- Required for Function primitives -- > < dependency > < groupId>com . google . cloud . functions < / groupId > < artifactId>functions - framework - api < / artifactId > < version>1 .1.0 < / version > < scope>provided < / scope > < / dependency > < !-- The following dependencies are only required for testing -- > < dependency > < groupId>com . google . truth < / groupId > < artifactId>truth < / artifactId > < version>1 .4.0 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . guava < / groupId > < artifactId>guava - testlib < / artifactId > < scope>test < / scope > < / dependency > < dependency > < groupId>org . mockito < / groupId > < artifactId>mockito - core < / artifactId > < version>5 .10.0 < / version > < scope>test < / scope > < / dependency > < / dependencies > < build > < plugins > < plugin > < !-- Google Cloud Functions Framework Maven plugin This plugin allows you to run Cloud Functions Java code locally .
- Learn how to grant roles . gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com run.googleapis.com logging.googleapis.com To set the default project for your Cloud Run service: gcloud config set project PROJECT ID Replace PROJECT ID with the name of the project you created for this quickstart.
- Write the sample function To write an application, follow these steps: Node.js Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a package.json file in the helloworld directory to specify Node.js dependencies: { "name" : "nodejs-docs-samples-functions-hello-world-get" , "version" : "0.0.1" , "private" : true , "license" : "Apache-2.0" , "author" : "Google Inc." , "repository" : { "type" : "git" , "url" : "https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git" }, "engines" : { "node" : ">=16.0.0" }, "scripts" : { "test" : "c8 mocha -p -j 2 test/ .test.js --timeout=6000 --exit" }, "dependencies" : { "@google-cloud/functions-framework" : "^3.1.0" }, "devDependencies" : { "c8" : "^10.0.0" , "gaxios" : "^6.0.0" , "mocha" : "^10.0.0" , "wait-port" : "^1.0.4" } } Create an index.js file in the helloworld directory with the following Node.js sample: const functions = require ( '@google-cloud/functions-framework' ); // Register an HTTP function with the Functions Framework that will be executed // when you make an HTTP request to the deployed function's endpoint. functions . http ( 'helloGET' , ( req , res ) = > { res . send ( 'Hello World!' ); }); Python Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a requirements.txt file in the helloworld directory, to specify Python dependencies: functions - framework == 3.9.2 flask == 3.0.3 google - cloud - error - reporting == 1.11.1 MarkupSafe == 2.1.3 This adds packages needed by the sample.
- Use the following terminal command to run a given function locally : mvn function : run - Drun . functionTarget = your . package . yourFunction -- > < groupId>com . google . cloud . functions < / groupId > < artifactId>function - maven - plugin < / artifactId > < version>0 .11.0 < / version > < configuration > < functionTarget>functions .

