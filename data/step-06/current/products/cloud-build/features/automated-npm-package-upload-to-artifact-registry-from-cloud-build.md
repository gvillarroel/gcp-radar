---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.702Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Automated npm package upload to Artifact Registry from Cloud Build"
feature_slug: "automated-npm-package-upload-to-artifact-registry-from-cloud-build"
latest_feature_date: "2023-06-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.NpmPackage"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types"
keywords:
  - "automated"
  - "npm"
  - "package"
  - "upload"
  - "to"
  - "artifact"
  - "registry"
  - "from"
---

# Automated npm package upload to Artifact Registry from Cloud Build

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can automatically upload npm packages to Artifact Registry.

## Extended Definition

Cloud Build can automatically upload npm packages to Artifact Registry.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.NpmPackage](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.NpmPackage)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types)

## Supporting Pages

### "Class NpmPackage (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.NpmPackage](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.NpmPackage)
- Source ID: `site-python-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 NpmPackage ( mapping = None , , ignore unknown fields = False , kwargs ) Npm package to upload to Artifact Registry upon successful completion of all build steps.
- Attributes Name Description repository str Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. package path str Optional.
- Home Documentation Developer tools Python Client libraries Send feedback Class NpmPackage (3.35.0) Stay organized with collections Save and categorize content based on your preferences.
- Path to the package.json. e.g. workspace/path/to/package Only one of archive or package path can be specified.

### "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If any objects fail to be pushed, the build is marked FAILURE. npm packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.NpmPackage ] A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps.
- NpmPackage NpmPackage ( mapping = None , , ignore unknown fields = False , kwargs ) Npm package to upload to Artifact Registry upon successful completion of all build steps.
- Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials.
- If any objects fail to be pushed, the build is marked FAILURE. python packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.PythonPackage ] A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps.

### "Package cloudbuild_v1.types (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types)
- Source ID: `site-python-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- UploadedNpmPackage An npm package uploaded to Artifact Registry using the NpmPackage directive.
- UploadedGoModule A Go module artifact uploaded to Artifact Registry using the GoModule directive.
- UploadedPythonPackage Artifact uploaded using the PythonPackage directive.
- Fields can include the following variables, which will be expanded when the build is created: $PROJECT ID: the project ID of the build. $PROJECT NUMBER: the project number of the build. $LOCATION: the location/region of the build. $BUILD ID: the autogenerated ID of the build. $REPO NAME: the source repository name specified by RepoSource. $BRANCH NAME: the branch name specified by RepoSource. $TAG NAME: the tag name specified by RepoSource. $REVISION ID or $COMMIT SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. $SHORT SHA: first 7 characters of $REVISION ID or $COMMIT SHA.

