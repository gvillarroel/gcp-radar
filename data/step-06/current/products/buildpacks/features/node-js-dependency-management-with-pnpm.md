---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:04:48.328Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Node.js dependency management with pnpm"
feature_slug: "node-js-dependency-management-with-pnpm"
latest_feature_date: "2023-06-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/nodejs"
  - "https://docs.cloud.google.com/docs/buildpacks/base-images"
  - "https://docs.cloud.google.com/docs/buildpacks/build-application"
keywords:
  - "runtimes"
  - "pnpm"
  - "gain"
  - "node"
  - "management"
  - "js"
  - "dependency"
  - "with"
---

# Node.js dependency management with pnpm

Product: Buildpacks
Coverage: LOW

## Step 02 Summary

Node.js runtimes gain support for configuring dependencies using the pnpm package manager.

## Extended Definition

Node.js runtimes gain support for configuring dependencies using the pnpm package manager.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- [https://docs.cloud.google.com/docs/buildpacks/base-images](https://docs.cloud.google.com/docs/buildpacks/base-images)
- [https://docs.cloud.google.com/docs/buildpacks/build-application](https://docs.cloud.google.com/docs/buildpacks/build-application)

## Supporting Pages

### Building a Node.js application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Package manager precedence The Node.js buildpack determines the package manager based on the configuration in the following order of precedence: The buildpack first checks for lockfiles in the following order: Yarn - yarn.lock pnpm - pnpm-lock.yaml Bun - bun.lock or bun.lockb NPM - package-lock.json If you don't use lockfiles, the Node.js buildpack uses the value you assign the GOOGLE PACKAGE MANAGER environment variable.
- When deploying a function onto Cloud Run functions, the engines.node property should be compatible with the runtime used to deploy your function Install dependencies NPM is the default package manager for all versions of Node.js.
- Home Documentation Application hosting Buildpacks Guides Send feedback Building a Node.js application Stay organized with collections Save and categorize content based on your preferences.
- You can specify one or more commands, or instead specify an empty string to prevent any command from running, like "gcp-build":"" . "scripts" : { ... "gcp-build" : "npm run lint && npm run build" ... } Application entrypoint The Node.js buildpack executes the command you specify in the scripts.start field of your package.json file.

### Base images \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/base-images](https://docs.cloud.google.com/docs/buildpacks/base-images)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, buildpacks references the Node.js 24 base image using the google-24 stack, hosted in us-central1 with the following URL: us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/nodejs24 .
- Node.js Runtime Generation Environment Runtime ID Node.js 24 2nd gen Ubuntu 24.04 nodejs24 Node.js 22 1st gen, 2nd gen Ubuntu 22.04 nodejs22 Node.js 20 1st gen, 2nd gen Ubuntu 22.04 nodejs20 Node.js 18 1st gen, 2nd gen Ubuntu 22.04 nodejs18 Node.js 16 1st gen, 2nd gen Ubuntu 18.04 nodejs16 Node.js 14 1st gen, 2nd gen Ubuntu 18.04 nodejs14 Node.js 12 1st gen, 2nd gen Ubuntu 18.04 nodejs12 Node.js 10 1st gen, 2nd gen Ubuntu 18.04 nodejs10 Node.js 8 1st gen, 2nd gen Ubuntu 18.04 nodejs8 Node.js 6 1st gen, 2nd gen Ubuntu 18.04 nodejs6 Python Runtime Generation Environment Runtime ID Python 3.14 2nd gen Ubuntu 24.04 python314 Python 3.13 2nd gen Ubuntu 22.04 python313 Python 3.12 1st gen, 2nd gen Ubuntu 22.04 python312 Python 3.11 1st gen, 2nd gen Ubuntu 22.04 python311 Python 3.10 1st gen, 2nd gen Ubuntu 22.04 python310 Python 3.9 1st gen, 2nd gen Ubuntu 18.04 python39 Python 3.8 1st gen, 2nd gen Ubuntu 18.04 python38 Python 3.7 1st gen Ubuntu 18.04 python37 Go Runtime Generation Environment Runtime ID Go 1.26 2nd gen Ubuntu 24.04 go126 Go 1.25 2nd gen Ubuntu 22.04 go125 Go 1.24 2nd gen Ubuntu 22.04 go124 Go 1.23 2nd gen Ubuntu 22.04 go123 Go 1.22 2nd gen Ubuntu 22.04 go122 Go 1.21 1st gen, 2nd gen Ubuntu 22.04 go121 Go 1.20 1st gen, 2nd gen Ubuntu 22.04 go120 Go 1.19 1st gen, 2nd gen Ubuntu 22.04 go119 Go 1.18 1st gen, 2nd gen Ubuntu 22.04 go118 Go 1.16 1st gen, 2nd gen Ubuntu 18.04 go116 Go 1.13 1st gen, 2nd gen Ubuntu 18.04 go113 Go 1.11 1st gen, 2nd gen Ubuntu 18.04 go111 Note: Go's release policy states that each major Go release is supported until there are two newer major releases.
- You can customize the base image path by replacing the first portion of the URI with your region of choice: REGION -docker.pkg.dev/serverless-runtimes/ STACK /runtimes/ RUNTIME ID Replace: REGION with the preferred region, for example us-central1 .
- Home Documentation Application hosting Buildpacks Guides Send feedback Base images Stay organized with collections Save and categorize content based on your preferences.

### "Build an application with buildpacks \_|\_ Buildpacks \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-application](https://docs.cloud.google.com/docs/buildpacks/build-application)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Use gcloud to submit the application source code to Cloud Build: Go gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-go Java gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-java-gradle Node.js gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-node PHP gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-php Python gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-python Ruby gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-ruby .NET gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-dotnet Verify that the sample application was successfully published to REPO NAME : gcloud artifacts docker images list LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME Replace: LOCATION with the region name of your container repository.
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Use pack to build the sample application image: Go pack build --builder=gcr.io/buildpacks/builder sample-go Java pack build --builder=gcr.io/buildpacks/builder sample-java-gradle Node.js pack build --builder=gcr.io/buildpacks/builder sample-node PHP pack build --builder=gcr.io/buildpacks/builder sample-php Python pack build --builder=gcr.io/buildpacks/builder sample-python Ruby pack build --builder=gcr.io/buildpacks/builder sample-ruby .NET pack build --builder=gcr.io/buildpacks/builder sample-dotnet Run the image using docker : Go docker run -p8080:8080 sample-go Java docker run -it -ePORT=8080 -p8080:8080 sample-java-gradle Node.js docker run -it -ePORT=8080 -p8080:8080 sample-node PHP docker run -it --rm -p 8080:8080 sample-php Python docker run -it -ePORT=8080 -p8080:8080 sample-python Ruby docker run -it -ePORT=8080 -p8080:8080 sample-ruby .NET docker run -it -ePORT=8080 -p8080:8080 sample-dotnet Visit the running application by browsing to localhost:8080 .
- Create a YAML file name cloudbuild.yaml that includes the URI of your container image repository. options : logging : CLOUD LOGGING ONLY pool : {} projectId : PROJECT ID steps : - name : gcr.io/k8s-skaffold/pack entrypoint : pack args : - build - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME - --builder - gcr.io/buildpacks/builder:latest - --network - cloudbuild - --publish - name : gcr.io/cloud-builders/docker entrypoint : pack args : - pull - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME images : - LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / IMAGE NAME Replace: LOCATION with the region name of your container repository, for example, us-west2 .
- For example, to create a docker repository in us-west2 with the description "Docker repository", you run: gcloud artifacts repositories create buildpacks-docker-repo --repository-format = docker \ --location = us-west2 --description = "Docker repository" Verify that your repository was created: gcloud artifacts repositories list You should see name that you choose for your Docker repository in the list.

