---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.812Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build generic artifacts integration"
feature_slug: "cloud-build-generic-artifacts-integration"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
  - "https://docs.cloud.google.com/build/docs/build-push-docker-image"
keywords:
  - "generic"
  - "uploading"
  - "artifacts"
  - "integration"
  - "repositories"
  - "supports"
---

# Cloud Build generic artifacts integration

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports uploading generic artifacts to generic repositories and downloading those repositories as build dependencies.

## Extended Definition

Cloud Build now supports uploading generic artifacts to generic repositories and downloading those repositories as build dependencies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)

## Supporting Pages

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- YAML artifacts : genericArtifacts : - folder : '/workspace/binaryOut' registryPath : 'projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version' JSON { "artifacts" : { "genericArtifacts" : [ { "folder" : "/workspace/binaryOut" , "registryPath" : "projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version" } ] } } You can configure a generic artifact as a build dependency so that Cloud Build downloads the dependency before the build begins.
- The following build config sets the genericArtifacts field to upload the /workspace/binaryOut folder to the Artifact Registry generic repository projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version .
- The following build config sets the goModules field to upload the module in example.com/myapp to the Artifact Registry repository quickstart-go-repo : YAML artifacts : goModules : - repositoryName : 'quickstart-go-repo' repositoryLocation : 'us-central1' repositoryProjectId : 'argo-local-myname' sourcePath : '/workspace/myapp' modulePath : 'example.com/myapp' moduleVersion : 'v1.0.0' JSON { "artifacts" : { "goModules" : [ { "repositoryName" : "quickstart-go-repo" , "repositoryLocation" : "us-central1" , "repositoryProjectId" : "argo-local-myname" , "sourcePath" : "/workspace/myapp" , "modulePath" : "example.com/myapp" , "moduleVersion" : "v1.0.0" } ] } } mavenArtifacts The mavenArtifacts field lets you upload non-container Java artifacts to Maven repositories in Artifact Registry.
- The following build config sets the pythonPackages field to upload the Python package dist/my-pkg.whl to the Artifact Registry repository https://us-east1-python.pkg.dev/my-project/my-repo : YAML artifacts : pythonPackages : - repository : 'https://us-east1-python.pkg.dev/my-project/my-repo' paths : [ 'dist/my-pkg.whl' ] JSON { "artifacts" : { "pythonPackages" : [ { "repository" : "https://us-east1-python.pkg.dev/my-project/my-repo" , "paths" : [ "dist/my-pkg.whl" ] } ] } } npmPackages Use the npmPackages field to configure Cloud Build to upload your built npm packages to supported repositories in Artifact Registry.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- YAML artifacts : genericArtifacts : - folder : '/workspace/binaryOut' registryPath : 'projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version' JSON { "artifacts" : { "genericArtifacts" : [ { "folder" : "/workspace/binaryOut" , "registryPath" : "projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version" } ] } } You can configure a generic artifact as a build dependency so that Cloud Build downloads the dependency before the build begins.
- The following build config sets the genericArtifacts field to upload the /workspace/binaryOut folder to the Artifact Registry generic repository projects/my-project/locations/us-east1/repositories/my-repo/packages/my-pkg/versions/my-version .
- The following build config sets the goModules field to upload the module in example.com/myapp to the Artifact Registry repository quickstart-go-repo : YAML artifacts : goModules : - repositoryName : 'quickstart-go-repo' repositoryLocation : 'us-central1' repositoryProjectId : 'argo-local-myname' sourcePath : '/workspace/myapp' modulePath : 'example.com/myapp' moduleVersion : 'v1.0.0' JSON { "artifacts" : { "goModules" : [ { "repositoryName" : "quickstart-go-repo" , "repositoryLocation" : "us-central1" , "repositoryProjectId" : "argo-local-myname" , "sourcePath" : "/workspace/myapp" , "modulePath" : "example.com/myapp" , "moduleVersion" : "v1.0.0" } ] } } mavenArtifacts The mavenArtifacts field lets you upload non-container Java artifacts to Maven repositories in Artifact Registry.
- The following build config sets the pythonPackages field to upload the Python package dist/my-pkg.whl to the Artifact Registry repository https://us-east1-python.pkg.dev/my-project/my-repo : YAML artifacts : pythonPackages : - repository : 'https://us-east1-python.pkg.dev/my-project/my-repo' paths : [ 'dist/my-pkg.whl' ] JSON { "artifacts" : { "pythonPackages" : [ { "repository" : "https://us-east1-python.pkg.dev/my-project/my-repo" , "paths" : [ "dist/my-pkg.whl" ] } ] } } npmPackages Use the npmPackages field to configure Cloud Build to upload your built npm packages to supported repositories in Artifact Registry.

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The time is $( date ) ." Create a file named Dockerfile with the following contents: FROM alpine COPY quickstart.sh / CMD [ "/quickstart.sh" ] In the terminal window, run the following command to make quickstart.sh executable: chmod +x quickstart.sh Create a Docker repository in Artifact Registry Use the gcloud artifacts repositories create command to create a Docker repository named quickstart-docker-repo in the location us-west2 with the description "Docker repository": gcloud artifacts repositories create quickstart-docker-repo --repository-format = docker \ --location = us-west2 --description = "Docker repository" Verify that your repository was created: gcloud artifacts repositories list The list of displayed repositories should include quickstart-docker-repo .
- Note: This quickstart shows you how to build an image with Docker, but Cloud Build supports most build tools and programming languages.
- To view the artifacts of your build, under Build Summary , click Build artifacts .
- Artifact Registry uses a naming convention to identify repositories and images.

