---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.682Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build dependency declarations"
feature_slug: "cloud-build-build-dependency-declarations"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview"
keywords:
  - "build"
  - "dependency"
  - "declarations"
  - "now"
  - "supports"
  - "declaring"
  - "dependencies"
  - "directly"
---

# Cloud Build build dependency declarations

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports declaring build dependencies directly in the build configuration file.

## Extended Definition

Cloud Build now supports declaring build dependencies directly in the build configuration file.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- March 30, 2026 Feature Cloud Build now supports uploading generic artifacts to generic repositories, and also downloading generic repositories as build dependencies.
- May 05, 2022 Feature Cloud Build now supports a script field, which allows users to specify shell scripts to execute in a build step.
- March 07, 2024 Feature Cloud Build repositories (2nd gen) now supports integration with Bitbucket Cloud and Bitbucket Data Center .
- September 12, 2022 Change Cloud Build now supports Supply chain Levels for Software Artifacts (SLSA) level 3 assurance.

### Class Build (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
- Source ID: `site-python-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Contains information about the build when status=FAILURE. dependencies MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Dependency ] Optional.
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 Build ( mapping = None , , ignore unknown fields = False , kwargs ) A build resource in the Cloud Build API.
- Classes FailureInfo FailureInfo ( mapping = None , , ignore unknown fields = False , kwargs ) A fatal problem encountered during the execution of the build.
- Warning Warning ( mapping = None , , ignore unknown fields = False , kwargs ) A non-fatal problem encountered during the execution of the build.

### "google-cloud-build overview (3.90.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-build/latest/overview)
- Source ID: `site-java-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- The example below demonstrates how you would import the BOM and include the google-cloud-build artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.79.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-build</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- Add a platform dependency on com.google.cloud:libraries-bom and remove the version from the dependency declarations in the artifact's build.gradle file.
- Cloud Build Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Build for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.
- The example below demonstrates how you would import the BOM and include the google-cloud-build artifact. implementation ( platform ( "com.google.cloud:libraries-bom:26.79.0" )) implementation ( "com.google.cloud:google-cloud-build" ) The platform and enforcedPlatform keywords supply dependency versions declared in a BOM.

