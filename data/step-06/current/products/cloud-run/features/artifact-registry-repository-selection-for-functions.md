---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.461Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Artifact Registry repository selection for functions"
feature_slug: "artifact-registry-repository-selection-for-functions"
latest_feature_date: "2025-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
  - "https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud"
  - "https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console"
keywords:
  - "selection"
  - "repository"
  - "registry"
  - "artifact"
  - "specify"
  - "functions"
---

# Artifact Registry repository selection for functions

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run functions can specify an Artifact Registry image repository for storing built containers.

## Extended Definition

Cloud Run functions can specify an Artifact Registry image repository for storing built containers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud)
- [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console)

## Supporting Pages

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-reference-required-4`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When specifying an Artifact Registry repository located in a different project or region, you must consider the following: IAM configurations: Ensure that you have configured IAM permissions to deploy images from other Google Cloud projects Additionally, ensure that the build service account has authorized access to read and write to the REPOSITORY .
- To specify a self-created Artifact Registry repository, use the following command: gcloud gcloud run deploy FUNCTION \ --source . \ --function FUNCTION ENTRYPOINT \ --base-image BASE IMAGE \ --region REGION \ --image IMAGE URL Replace the following: FUNCTION with the name of the function you are deploying.
- Specify an image repository Cloud Run function deployments use Artifact Registry to store artifacts and manage container images.
- IMAGE URL with a reference to the image path using the Artifact Registry image repository of your choice, for example projects/ PROJECT NAME /locations/ LOCATION /repositories/ REPOSITORY NAME / FUNCTION .

### "Quickstart: Deploy a Cloud Run function using the gcloud CLI \_|\_ Google\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-gcloud)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Write the sample function To write an application, follow these steps: Node.js Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a package.json file in the helloworld directory to specify Node.js dependencies: { "name" : "nodejs-docs-samples-functions-hello-world-get" , "version" : "0.0.1" , "private" : true , "license" : "Apache-2.0" , "author" : "Google Inc." , "repository" : { "type" : "git" , "url" : "https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git" }, "engines" : { "node" : ">=16.0.0" }, "scripts" : { "test" : "c8 mocha -p -j 2 test/ .test.js --timeout=6000 --exit" }, "dependencies" : { "@google-cloud/functions-framework" : "^3.1.0" }, "devDependencies" : { "c8" : "^10.0.0" , "gaxios" : "^6.0.0" , "mocha" : "^10.0.0" , "wait-port" : "^1.0.4" } } Create an index.js file in the helloworld directory with the following Node.js sample: const functions = require ( '@google-cloud/functions-framework' ); // Register an HTTP function with the Functions Framework that will be executed // when you make an HTTP request to the deployed function's endpoint. functions . http ( 'helloGET' , ( req , res ) = > { res . send ( 'Hello World!' ); }); Python Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a requirements.txt file in the helloworld directory, to specify Python dependencies: functions - framework == 3.9.2 flask == 3.0.3 google - cloud - error - reporting == 1.11.1 MarkupSafe == 2.1.3 This adds packages needed by the sample.
- See the License for the specific language governing permissions and limitations under the License . -- > < project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" > < modelVersion>4 .0.0 < / modelVersion > < groupId>com . example . functions < / groupId > < artifactId>functions - hello - world < / artifactId > < version>1 .0.0 - SNAPSHOT < / version > < parent > < groupId>com . google . cloud . samples < / groupId > < artifactId>shared - configuration < / artifactId > < version>1 .2.0 < / version > < / parent > < dependencyManagement > < dependencies > < dependency > < artifactId>libraries - bom < / artifactId > < groupId>com . google . cloud < / groupId > < scope>import < / scope > < type>pom < / type > < version>26 .32.0 < / version > < / dependency > < / dependencies > < / dependencyManagement > < properties > < maven . compiler . target>11 < / maven . compiler . target > < maven . compiler . source>11 < / maven . compiler . source > < / properties > < dependencies > < !-- Required for Function primitives -- > < dependency > < groupId>com . google . cloud . functions < / groupId > < artifactId>functions - framework - api < / artifactId > < version>1 .1.0 < / version > < scope>provided < / scope > < / dependency > < !-- The following dependencies are only required for testing -- > < dependency > < groupId>com . google . truth < / groupId > < artifactId>truth < / artifactId > < version>1 .4.0 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . guava < / groupId > < artifactId>guava - testlib < / artifactId > < scope>test < / scope > < / dependency > < dependency > < groupId>org . mockito < / groupId > < artifactId>mockito - core < / artifactId > < version>5 .10.0 < / version > < scope>test < / scope > < / dependency > < / dependencies > < build > < plugins > < plugin > < !-- Google Cloud Functions Framework Maven plugin This plugin allows you to run Cloud Functions Java code locally .
- HelloWorld < / functionTarget > < / configuration > < / plugin > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - surefire - plugin < / artifactId > < !-- version 3.0.0 - M4 does not load JUnit5 correctly -- > < !-- see https : //issues.apache.org/jira/browse/SUREFIRE-1750 -- > < version>3 .2.5 < / version > < configuration > < includes > < include > / Test . java < / include > < / includes > < skipTests>$ { skipTests } < / skipTests > < reportNameSuffix>sponge log < / reportNameSuffix > < trimStackTrace>false < / trimStackTrace > < / configuration > < / plugin > < / plugins > < / build > < / project > Ruby Create a new directory named helloworld and change directory into it: mkdir helloworld cd helloworld Create a file named app.rb and paste the following code into it: require "functions framework" FunctionsFramework . http "hello get" do request The request parameter is a Rack::Request object.
- Use the following terminal command to run a given function locally : mvn function : run - Drun . functionTarget = your . package . yourFunction -- > < groupId>com . google . cloud . functions < / groupId > < artifactId>function - maven - plugin < / artifactId > < version>0 .11.0 < / version > < configuration > < functionTarget>functions .

### "Quickstart: Deploy a Cloud Run function using the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To delete Artifact Registry repositories, follow the steps in Delete repositories in the Artifact Registry documentation.
- However, you might still be charged for storing the container image in Artifact Registry .
- Enable the Artifact Registry, Cloud Build, Cloud Run Admin API, and Cloud Logging APIs.
- Enable the Artifact Registry, Cloud Build, Cloud Run Admin API, and Cloud Logging APIs.

