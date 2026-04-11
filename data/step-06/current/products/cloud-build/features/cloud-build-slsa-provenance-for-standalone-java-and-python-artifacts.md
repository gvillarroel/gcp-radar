---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.726Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build SLSA provenance for standalone Java and Python artifacts"
feature_slug: "cloud-build-slsa-provenance-for-standalone-java-and-python-artifacts"
latest_feature_date: "2022-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-java"
  - "https://docs.cloud.google.com/build/docs/building/build-java"
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
keywords:
  - "build"
  - "slsa"
  - "provenance"
  - "for"
  - "standalone"
  - "java"
  - "and"
  - "python"
---

# Cloud Build SLSA provenance for standalone Java and Python artifacts

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can generate SLSA build provenance metadata for standalone Java and Python packages using new config file fields when publishing to Artifact Registry.

## Extended Definition

Cloud Build can generate SLSA build provenance metadata for standalone Java and Python packages using new config file fields when publishing to Artifact Registry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-java](https://docs.cloud.google.com/build/docs/building/build-containerize-java)
- [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)
- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)

## Supporting Pages

### Build, test, and containerize Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-java](https://docs.cloud.google.com/build/docs/building/build-containerize-java)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step containerizes your application, pushes your container image to Artifact Registry, and generates build provenance information: maven steps: - name: gcr.io/cloud-builders/docker args: [ 'build' , '-t' , ' location -docker.pkg.dev/ project-id / repository / image ' , '--build-arg=JAR FILE=target/ build-artifact ' , '.' ] images: [ ' location -docker.pkg.dev/ project-id / repository / image ' ] gradle steps: - name: gcr.io/cloud-builders/docker args: [ 'build' , '-t' , ' location -docker.pkg.dev/ project-id / repository / image ' , '--build-arg=JAR FILE=build/libs/ build-artifact ' , '.' ] images: [ ' location -docker.pkg.dev/ project-id / repository / image ' ] Where: location : the regional or multi-regional location for your repository. project-id : the ID of your Google Cloud project. repository : the name of your repository Artifact Registry. image : the name of your container image. build-artifact : the name of your JAR file created from your build step.
- The following build step specifies the entrypoint for the gradle image tagged as 5.6.2-jdk8 and prints the build tool version: steps: - name: gradle:5.6.2-jdk8 entrypoint: gradle args: [ '--version' ] Configuring Java builds In your project root directory, create a build config file named cloudbuild.yaml .
- This page explains how to use Cloud Build to build, test, and containerize Java-based applications, upload your container images to Artifact Registry, and generate build provenance.
- Optional: Add requestedVerifyOption: VERIFIED within the options field in your build config file to enable Supply chain Levels for Software Artifacts (SLSA) provenance generation.

### Build and test Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page explains how to use Cloud Build to build and test Java-based applications, store built artifacts in a Maven repository in Artifact Registry, and generate build provenance information.
- The following build step specifies the entrypoint for the maven image tagged as 3.3-jdk-8 and prints the build tool version: steps : - name : maven : 3.3 - jdk - 8 entrypoint : mvn args : [ ' -- version ' ] Configuring Java builds In your project root directory, create a build config file named cloudbuild.yaml .
- Optional: Enable provenance generation Cloud Build can generate verifiable Supply chain Levels for Software Artifacts (SLSA) build provenance metadata to help secure your continuous integration pipeline.
- Upload to Artifact Registry : In your build config file, use the mavenArtifacts field to specify your application path and your Maven repository in Artifact Registry: artifacts : mavenArtifacts : - repository : ' https : // location -maven.pkg.dev/ project-id / repository-name ' path : ' app - path ' artifactId : ' build - artifact ' groupId : ' group - id ' version : ' version ' Replace the following values: location : the location for your repository in Artifact Registry. project-id : the ID of the Google Cloud project that contains your Artifact Registry repository. repository-name : the name of your Maven repository in Artifact Registry. app-path : the path to your packaged application. build-artifact : the name of your package file created from your build step. group-id : uniquely identifies your project across all Maven projects, in the format com.mycompany.app .

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step adds arguments to install requirements from the requirements.txt file: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Add unit tests : If you've defined unit tests in your application using a testing framework such as pytest , you can configure Cloud Build to run the tests by adding the following fields in a build step: name : Set the value of this field to python to use the python image from Docker Hub for your task. entrypoint : Set the value of this field to python to run python commands. args : Add the arguments for running the python pytest command.
- The following build step pushes the image that you built in the previous step to Artifact Registry: Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Optional: If you want Cloud Build to generate Supply chain Levels for Software Artifacts (SLSA) build provenance information, complete the following: Use the images field in your build step instead of using a separate using a Docker push build step.
- Learn how to build standalone Python applications .
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .

