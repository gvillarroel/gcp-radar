---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.044Z"
product_name: "Buildpacks"
product_slug: "buildpacks"
feature_name: "Node.js buildpack Bun package manager support"
feature_slug: "node-js-buildpack-bun-package-manager-support"
latest_feature_date: "2026-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/docs/buildpacks/nodejs"
  - "https://docs.cloud.google.com/docs/buildpacks/python"
  - "https://docs.cloud.google.com/docs/buildpacks/build-application"
keywords:
  - "node"
  - "js"
  - "buildpack"
  - "bun"
  - "package"
  - "manager"
  - "supports"
  - "application"
---

# Node.js buildpack Bun package manager support

Product: Buildpacks
Coverage: MEDIUM

## Step 02 Summary

The Node.js buildpack supports the Bun package manager for application dependency management.

## Extended Definition

The Node.js buildpack supports the Bun package manager for application dependency management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- [https://docs.cloud.google.com/docs/buildpacks/build-application](https://docs.cloud.google.com/docs/buildpacks/build-application)

## Supporting Pages

### Building a Node.js application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/nodejs](https://docs.cloud.google.com/docs/buildpacks/nodejs)
- Source ID: `site-docs-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Bun package manager The Node.js buildpack supports the Bun package manager, google.nodejs.bun buildpack for installing dependencies.
- Package manager precedence The Node.js buildpack determines the package manager based on the configuration in the following order of precedence: The buildpack first checks for lockfiles in the following order: Yarn - yarn.lock pnpm - pnpm-lock.yaml Bun - bun.lock or bun.lockb NPM - package-lock.json If you don't use lockfiles, the Node.js buildpack uses the value you assign the GOOGLE PACKAGE MANAGER environment variable.
- You can specify one or more commands, or instead specify an empty string to prevent any command from running, like "gcp-build":"" . "scripts" : { ... "gcp-build" : "npm run lint && npm run build" ... } Application entrypoint The Node.js buildpack executes the command you specify in the scripts.start field of your package.json file.
- To configure the buildpack to use the latest version of Node.js when deploying your app, add the following values in your package.json : "engines" : { "node" : "24.x.x" } Use GOOGLE NODEJS VERSION You can also specify the Node.js version using the GOOGLE NODEJS VERSION environment variable.

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you manage your application dependencies in a pyproject.toml file instead of the requirements.txt file, the Python buildpack determines the package manager based on the configuration you specify in the pyproject.toml file.
- You set the GOOGLE PYTHON PACKAGE MANAGER environment variable to pip . uv buildpack : Supports Python projects you manage with uv .
- The buildpack supports pip, uv and Poetry package managers.
- Package manager precedence The Python buildpacks determines the default package manager based on the configuration in the following order of precedence: The highest precedence is given to the requirements.txt file.

### "Build an application with buildpacks \_|\_ Buildpacks \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/docs/buildpacks/build-application](https://docs.cloud.google.com/docs/buildpacks/build-application)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Use gcloud to submit the application source code to Cloud Build: Go gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-go Java gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-java-gradle Node.js gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-node PHP gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-php Python gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-python Ruby gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-ruby .NET gcloud builds submit --pack image= LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME /sample-dotnet Verify that the sample application was successfully published to REPO NAME : gcloud artifacts docker images list LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME Replace: LOCATION with the region name of your container repository.
- Clone the sample repository to your local machine: git clone https://github.com/GoogleCloudPlatform/buildpack-samples.git Change to the directory that contains the application sample code: Go cd buildpack-samples/sample-go Java cd buildpack-samples/sample-java-gradle Node.js cd buildpack-samples/sample-node PHP cd buildpack-samples/sample-php Python cd buildpack-samples/sample-python Ruby cd buildpack-samples/sample-ruby .NET cd buildpack-samples/sample-dotnet Use pack to build the sample application image: Go pack build --builder=gcr.io/buildpacks/builder sample-go Java pack build --builder=gcr.io/buildpacks/builder sample-java-gradle Node.js pack build --builder=gcr.io/buildpacks/builder sample-node PHP pack build --builder=gcr.io/buildpacks/builder sample-php Python pack build --builder=gcr.io/buildpacks/builder sample-python Ruby pack build --builder=gcr.io/buildpacks/builder sample-ruby .NET pack build --builder=gcr.io/buildpacks/builder sample-dotnet Run the image using docker : Go docker run -p8080:8080 sample-go Java docker run -it -ePORT=8080 -p8080:8080 sample-java-gradle Node.js docker run -it -ePORT=8080 -p8080:8080 sample-node PHP docker run -it --rm -p 8080:8080 sample-php Python docker run -it -ePORT=8080 -p8080:8080 sample-python Ruby docker run -it -ePORT=8080 -p8080:8080 sample-ruby .NET docker run -it -ePORT=8080 -p8080:8080 sample-dotnet Visit the running application by browsing to localhost:8080 .
- Build an application locally You use the pack build command and specify the default builder --builder=gcr.io/buildpacks/builder to build your container images locally. pack build --builder = gcr.io/buildpacks/builder IMAGE NAME Replace IMAGE NAME with the name of your service's container image.
- Home Documentation Application hosting Buildpacks Guides Send feedback Build an application with buildpacks Stay organized with collections Save and categorize content based on your preferences.

