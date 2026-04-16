---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.858Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build security insights panel"
feature_slug: "cloud-build-build-security-insights-panel"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/overview"
  - "https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact"
keywords:
  - "information"
  - "security"
  - "insights"
  - "panel"
  - "shows"
  - "artifact"
---

# Cloud Build build security insights panel

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now shows build security information for Artifact Registry artifacts in the console’s Build History Security insights panel.

## Extended Definition

Cloud Build now shows build security information for Artifact Registry artifacts in the console’s Build History Security insights panel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact)

## Supporting Pages

### Overview of Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/overview](https://docs.cloud.google.com/build/docs/overview)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This panel displays the following information: Supply-chain Levels for Software Artifacts (SLSA) Level : Identifies the maturity level of your software build process in accordance with the SLSA specification .
- Security insights panel Cloud Build includes a Security insights panel in the Google Cloud console that displays a high-level overview of multiple security metrics.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Build security Cloud Build provides several features to secure your builds including: Automated Builds An automated build or scripted build defines all build steps in build script or build configuration, including steps to retrieve source code and steps to build the code.

### Deploying to Cloud Run using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To automate your deployment: In your repository root, add a config file named cloudbuild.yaml with steps to build the image, push the image to Artifact Registry, and then invoke the gcloud run deploy command: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : - 'run' - 'deploy' - ' SERVICE NAME ' - '--image' - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' - '--region' - ' SERVICE REGION ' images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE / SERVICE NAME :$COMMIT SHA' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- In the build config file, add docker build steps to build the image and push it to Artifact Registry, and then add a gcloud build step to invoke the gcloud run deploy command to deploy the image on Cloud Run: steps : Build the image - name : 'gcr.io/cloud-builders/docker' args : [ 'build' , '-t' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '.' ] Push the image to Artifact Registry - name : 'gcr.io/cloud-builders/docker' args : [ 'push' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' ] Deploy image to Cloud Run - name : 'gcr.io/google.com/cloudsdktool/cloud-sdk' entrypoint : gcloud args : [ 'run' , 'deploy' , ' SERVICE NAME ' , '--image' , ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' , '--region' , ' SERVICE REGION ' ] images : - ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE ' Where: REPOSITORY is the name of the Artifact Registry repository from where you deploy your image.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Code examples Here are some sample repositories, each of which contains a sample application and a build config file to deploy application to Cloud Run: deploy-prebuilt : A code example that shows how to deploy a prebuilt image to Cloud Run. run-example-builddeploy : A code example that shows how to build and deploy an image to Cloud Run.

### "Class MavenArtifact (3.35.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact)
- Source ID: `site-python-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 MavenArtifact ( mapping = None , , ignore unknown fields = False , kwargs ) A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
- This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. artifact id str Maven artifactId value used when uploading the artifact to Artifact Registry. group id str Maven groupId value used when uploading the artifact to Artifact Registry. version str Maven version value used when uploading the artifact to Artifact Registry.
- Attributes Name Description repository str Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. path str Optional.

