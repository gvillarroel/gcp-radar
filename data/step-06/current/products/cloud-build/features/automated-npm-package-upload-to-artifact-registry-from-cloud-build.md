---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.834Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Automated npm package upload to Artifact Registry from Cloud Build"
feature_slug: "automated-npm-package-upload-to-artifact-registry-from-cloud-build"
latest_feature_date: "2023-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact"
keywords:
  - "package"
  - "upload"
  - "automated"
  - "registry"
  - "artifact"
---

# Automated npm package upload to Artifact Registry from Cloud Build

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can automatically upload npm packages to Artifact Registry.

## Extended Definition

Cloud Build can automatically upload npm packages to Artifact Registry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact)

## Supporting Pages

### "Class Artifacts (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- Source ID: `site-python-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If any objects fail to be pushed, the build is marked FAILURE. python packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.PythonPackage ] A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps.
- If any objects fail to be pushed, the build is marked FAILURE. npm packages MutableSequence[ google.cloud.devtools.cloudbuild v1.types.Artifacts.NpmPackage ] A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps.
- PythonPackage PythonPackage ( mapping = None , , ignore unknown fields = False , kwargs ) Python package to upload to Artifact Registry upon successful completion of all build steps.
- NpmPackage NpmPackage ( mapping = None , , ignore unknown fields = False , kwargs ) Npm package to upload to Artifact Registry upon successful completion of all build steps.

### "Package cloudbuild_v1.types (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types)
- Source ID: `site-python-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UploadedNpmPackage An npm package uploaded to Artifact Registry using the NpmPackage directive.
- UploadedGoModule A Go module artifact uploaded to Artifact Registry using the GoModule directive.
- UploadedPythonPackage Artifact uploaded using the PythonPackage directive.
- Artifacts Artifacts produced by a build that should be uploaded upon successful completion of all build steps.

### "Class MavenArtifact (3.35.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts.MavenArtifact)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Version latest keyboard arrow down 3.35.0 (latest) 3.34.0 3.33.0 3.32.0 3.31.3 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.2 3.23.3 3.22.0 3.21.0 3.20.1 3.19.0 3.18.0 3.17.1 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.1 3.10.0 3.9.3 3.8.3 3.7.1 3.6.0 3.5.2 3.4.0 3.3.2 3.2.1 3.1.1 3.0.2 2.0.2 1.1.2 1.0.0 0.1.0 MavenArtifact ( mapping = None , , ignore unknown fields = False , kwargs ) A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
- This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. artifact id str Maven artifactId value used when uploading the artifact to Artifact Registry. group id str Maven groupId value used when uploading the artifact to Artifact Registry. version str Maven version value used when uploading the artifact to Artifact Registry.
- Attributes Name Description repository str Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. path str Optional.
- Path to an artifact in the build's workspace to be uploaded to Artifact Registry.

