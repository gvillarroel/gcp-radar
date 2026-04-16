---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.890Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Native Buildpacks support"
feature_slug: "cloud-native-buildpacks-support"
latest_feature_date: "2020-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containers"
  - "https://docs.cloud.google.com/docs/buildpacks/overview"
  - "https://docs.cloud.google.com/docs/buildpacks/python"
keywords:
  - "containers"
  - "dockerfile"
  - "requiring"
  - "without"
  - "buildpacks"
  - "native"
---

# Cloud Native Buildpacks support

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can build containers without requiring a Dockerfile or Cloud Build configuration file by using Cloud Native Buildpacks.

## Extended Definition

Cloud Build can build containers without requiring a Dockerfile or Cloud Build configuration file by using Cloud Native Buildpacks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- [https://docs.cloud.google.com/docs/buildpacks/overview](https://docs.cloud.google.com/docs/buildpacks/overview)
- [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)

## Supporting Pages

### Build container images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Build with Google Cloud's buildpacks Cloud Build lets you build an image without a Dockerfile or a build config file.
- Here are some example commands: Running a build using the default gcr.io/buildpacks/builder to create the image us-docker.pkg.dev/gcb-docs-project/containers/gke/hello-app : gcloud builds submit --pack image=us-docker.pkg.dev/gcb-docs-project/containers/gke/hello-app Passing multiple environment variables to your build using ^--^ as a separator.
- If your Dockerfile and source code are in different directories, add -f and the path to the Dockerfile to the list of arguments in the args field: YAML steps : - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' , '-f' , ' DOCKERFILE PATH ' , '.' ] JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "args" : [ "build" , "-t" , " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , ' - f ' , ' DOCKERFILE PATH ' , "." ] } ] } Where: LOCATION : the regional or multi-regional location for your repository.
- For more information about escaping arguments, see gcloud topic escaping . gcloud builds submit --pack \ ^--^image=gcr.io/my-project/myimage--env=GOOGLE ENTRYPOINT='java -jar target/myjar.jar',GOOGLE RUNTIME VERSION='3.1.301' Configuring triggers to use buildpacks : In addition to building using the command line, you can configure triggers to use buildpacks to build your image automatically.

### Google Cloud's buildpacks \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/overview](https://docs.cloud.google.com/docs/buildpacks/overview)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The buildpacks published by Google Cloud implement the Cloud Native Buildpack specification and are designed to help you build and configure containers that you can deploy to Google Cloud.
- What's next Builders Build an application Build a function Learn about Cloud Native Buildpacks Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use buildpacks to containerize your code Buildpacks can be used locally or remotely to: Build an application or service Build a function For programming languages that exclude a standard ways to start an application, you can use a Procfile to define the process to invoke when a container starts.
- Containerization with buildpacks When you deploy to and serve your application (service) or function on the Google Cloud Serverless products, your code gets packaged into a runnable container using buildpacks.

### Build a Python application \_|\_ Buildpacks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/docs/buildpacks/python](https://docs.cloud.google.com/docs/buildpacks/python)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported buildpacks configurations Python buildpacks supports the following configurations: pip buildpack : Installs dependencies directly from pyproject.toml if it detects all the following conditions: A pyproject.toml file is present in the root directory and you don't configure high-precedence tools such as a poetry.lock file, a [tool.poetry] section, or a uv.lock file.
- Configure pip It is possible to configure the behavior of pip using environment variables : pack build sample-python --builder=gcr.io/buildpacks/builder \ --env PIP DEFAULT TIMEOUT='60' Private dependencies from Artifact Registry An Artifact Registry Python repository can host private dependencies for your Python function.
- To configure the buildpack to use a supported Python version when deploying your app: pack build sample-python --builder=gcr.io/buildpacks/builder \ --env GOOGLE PYTHON VERSION="3.14.x" You can also use a project.toml project descriptor to encode the environment variable alongside your project files.
- Example: pack build sample-python \ --builder gcr.io/buildpacks/builder --env "GOOGLE ENTRYPOINT='gunicorn --bind :$PORT main:app'" Environment Variables The Python buildpack supports the following environment variables to customize your container PIP <key> See pip documentation .

