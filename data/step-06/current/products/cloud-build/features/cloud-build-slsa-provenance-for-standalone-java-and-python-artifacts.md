---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.854Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build SLSA provenance for standalone Java and Python artifacts"
feature_slug: "cloud-build-slsa-provenance-for-standalone-java-and-python-artifacts"
latest_feature_date: "2022-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
  - "https://docs.cloud.google.com/build/docs/building/build-java"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts"
keywords:
  - "java"
  - "standalone"
  - "python"
  - "artifacts"
  - "provenance"
  - "slsa"
---

# Cloud Build SLSA provenance for standalone Java and Python artifacts

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can generate SLSA build provenance metadata for standalone Java and Python packages using new config file fields when publishing to Artifact Registry.

## Extended Definition

Cloud Build can generate SLSA build provenance metadata for standalone Java and Python packages using new config file fields when publishing to Artifact Registry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)

## Supporting Pages

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following build step pushes the image that you built in the previous step to Artifact Registry: Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Optional: If you want Cloud Build to generate Supply chain Levels for Software Artifacts (SLSA) build provenance information, complete the following: Use the images field in your build step instead of using a separate using a Docker push build step.
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .
- Learn how to build standalone Python applications .
- The following build step adds arguments to install requirements from the requirements.txt file: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Add unit tests : If you've defined unit tests in your application using a testing framework such as pytest , you can configure Cloud Build to run the tests by adding the following fields in a build step: name : Set the value of this field to python to use the python image from Docker Hub for your task. entrypoint : Set the value of this field to python to run python commands. args : Add the arguments for running the python pytest command.

### Build and test Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- This page explains how to use Cloud Build to build and test Java-based applications, store built artifacts in a Maven repository in Artifact Registry, and generate build provenance information.
- Upload to Artifact Registry : In your build config file, use the mavenArtifacts field to specify your application path and your Maven repository in Artifact Registry: artifacts : mavenArtifacts : - repository : ' https : // location -maven.pkg.dev/ project-id / repository-name ' path : ' app - path ' artifactId : ' build - artifact ' groupId : ' group - id ' version : ' version ' Replace the following values: location : the location for your repository in Artifact Registry. project-id : the ID of the Google Cloud project that contains your Artifact Registry repository. repository-name : the name of your Maven repository in Artifact Registry. app-path : the path to your packaged application. build-artifact : the name of your package file created from your build step. group-id : uniquely identifies your project across all Maven projects, in the format com.mycompany.app .
- The following build step specifies the entrypoint for the maven image tagged as 3.3-jdk-8 and prints the build tool version: steps : - name : maven : 3.3 - jdk - 8 entrypoint : mvn args : [ ' -- version ' ] Configuring Java builds In your project root directory, create a build config file named cloudbuild.yaml .

### "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- Source ID: `site-python-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If any objects fail to be pushed, the build is marked FAILURE. python packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.PythonPackage ] A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps.
- Home Documentation Developer tools Python Client libraries Send feedback Class Artifacts (3.35.0) Stay organized with collections Save and categorize content based on your preferences.
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 Artifacts ( mapping = None , , ignore unknown fields = False , kwargs ) Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
- If any objects fail to be pushed, the build is marked FAILURE. maven artifacts MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.MavenArtifact ] A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps.

