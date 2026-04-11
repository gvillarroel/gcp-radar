---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.714Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build SLSA provenance for standalone Maven and Python artifacts"
feature_slug: "cloud-build-slsa-provenance-for-standalone-maven-and-python-artifacts"
latest_feature_date: "2023-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-python"
  - "https://docs.cloud.google.com/build/docs/building/build-containerize-java"
  - "https://docs.cloud.google.com/build/docs/release-notes"
keywords:
  - "build"
  - "slsa"
  - "provenance"
  - "for"
  - "standalone"
  - "maven"
  - "and"
  - "python"
---

# Cloud Build SLSA provenance for standalone Maven and Python artifacts

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can generate SLSA build provenance metadata for standalone Maven and Python packages via new config file fields.

## Extended Definition

Cloud Build can generate SLSA build provenance metadata for standalone Maven and Python packages via new config file fields.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/building/build-containerize-java](https://docs.cloud.google.com/build/docs/building/build-containerize-java)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)

## Supporting Pages

### Build, test, and containerize Python applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- Source ID: `site-docs-root-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step adds arguments to install requirements from the requirements.txt file: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Add unit tests : If you've defined unit tests in your application using a testing framework such as pytest , you can configure Cloud Build to run the tests by adding the following fields in a build step: name : Set the value of this field to python to use the python image from Docker Hub for your task. entrypoint : Set the value of this field to python to run python commands. args : Add the arguments for running the python pytest command.
- The following build step pushes the image that you built in the previous step to Artifact Registry: Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Optional: If you want Cloud Build to generate Supply chain Levels for Software Artifacts (SLSA) build provenance information, complete the following: Use the images field in your build step instead of using a separate using a Docker push build step.
- Learn how to build standalone Python applications .
- The following build step stores the test logs that you saved in the JUNIT XML file to a Cloud Storage bucket: Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml The following snippet shows the complete build config file for the all the steps described above: steps : Install dependencies - name : python entrypoint : pip args : [ "install" , "-r" , "requirements.txt" , "--user" ] Run unit tests - name : python entrypoint : python args : [ "-m" , "pytest" , "--junitxml=${SHORT SHA} test log.xml" ] Docker Build - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '.' ] Docker push to Google Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , 'us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' ] Deploy to Cloud Run - name : google/cloud-sdk args : [ 'gcloud' , 'run' , 'deploy' , 'helloworld-${SHORT SHA}' , '--image=us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA}' , '--region' , 'us-central1' , '--platform' , 'managed' , '--allow-unauthenticated' ] Save test logs to Google Cloud Storage artifacts : objects : location : gs://${ BUCKET NAME}/ paths : - ${SHORT SHA} test log.xml Store images in Google Artifact Registry images : - us-central1-docker.pkg.dev/${PROJECT ID}/${ ARTIFACT REGISTRY REPO}/myimage:${SHORT SHA} Start your build : manually or using build triggers .

### Build, test, and containerize Java applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containerize-java](https://docs.cloud.google.com/build/docs/building/build-containerize-java)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following build step containerizes your application, pushes your container image to Artifact Registry, and generates build provenance information: maven steps: - name: gcr.io/cloud-builders/docker args: [ 'build' , '-t' , ' location -docker.pkg.dev/ project-id / repository / image ' , '--build-arg=JAR FILE=target/ build-artifact ' , '.' ] images: [ ' location -docker.pkg.dev/ project-id / repository / image ' ] gradle steps: - name: gcr.io/cloud-builders/docker args: [ 'build' , '-t' , ' location -docker.pkg.dev/ project-id / repository / image ' , '--build-arg=JAR FILE=build/libs/ build-artifact ' , '.' ] images: [ ' location -docker.pkg.dev/ project-id / repository / image ' ] Where: location : the regional or multi-regional location for your repository. project-id : the ID of your Google Cloud project. repository : the name of your repository Artifact Registry. image : the name of your container image. build-artifact : the name of your JAR file created from your build step.
- The following build step specifies the entrypoint for the maven image tagged as 3.3-jdk-8 and prints the build tool version: steps: - name: maven:3.3-jdk-8 entrypoint: mvn args: [ '--version' ] gradle To execute your tasks in the gradle image, add a step to your build config with the following fields: name : Set the value of this field to gradle or gradle:<tag> , where the tag represents the version.
- In your build config file, add test to the args field to invoke test within maven and gradle : maven steps: - name: maven:3.3-jdk-8 entrypoint: mvn args: [ 'test' ] gradle steps: - name: gradle:5.6.2-jdk8 entrypoint: gradle args: [ 'test' ] Package application : To package your application into a JAR file for your maven image, specify the package command in the args field.
- Optional: Add requestedVerifyOption: VERIFIED within the options field in your build config file to enable Supply chain Levels for Software Artifacts (SLSA) provenance generation.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- April 04, 2023 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Maven and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- November 30, 2022 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Java and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- Feature Cloud Build now provides the ability to upload npm packages to Artifact Registry automatically and generate Supply-chain Levels for Software Artifacts (SLSA) Level 3 build provenance.
- June 23, 2023 Feature The Cloud Build Security insights panel that displays security metrics such as Supply-chain Levels for Software Artifacts (SLSA) level for built artifacts, vulnerabilities, and build details is now generally available .

