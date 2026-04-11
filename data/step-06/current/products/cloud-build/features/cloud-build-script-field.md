---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.734Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build script field"
feature_slug: "cloud-build-script-field"
latest_feature_date: "2022-09-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
keywords:
  - "build"
  - "script"
  - "field"
  - "is"
  - "generally"
  - "available"
  - "for"
  - "defining"
---

# Cloud Build script field

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build's script field is generally available for defining build steps with shell scripts or other scripting languages; Cloud Build supports a script field for executing shell scripts within build steps as a preview feature.

## Extended Definition

Cloud Build's script field is generally available for defining build steps with shell scripts or other scripting languages; Cloud Build supports a script field for executing shell scripts within build steps as a preview feature.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)

## Supporting Pages

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- API To create a GitHub Enterprise trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : " TRIGGER NAME " , "description" : " TRIGGER DESCRIPTION " , "serviceAccount" : " SERVICE ACCOUNT " , "github" : { "owner" : " OWNER " , "name" : " REPO NAME " , "push" : { "branch" : ". " }, "enterprise config resource name" : "projects/ PROJECT NUMBER /githubEnterpriseConfigs/ CONNECTION ID " }, "include build logs" : i n clude - build - logs - value } Where: TRIGGER NAME is a name for the trigger.
- Note: Inline build configuration support is not available for Dockerfile .
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your GitHub Enterprise installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to GitHub Enterprise from Cloud Build helps you identify triggers by name and see build results on GitHub Enterprise.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- September 09, 2022 Feature The Cloud Build script field is now generally available .
- November 30, 2022 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Java and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- April 04, 2023 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Maven and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- June 23, 2023 Feature The Cloud Build Security insights panel that displays security metrics such as Supply-chain Levels for Software Artifacts (SLSA) level for built artifacts, vulnerabilities, and build details is now generally available .

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Fields can include the following variables, which will be expanded when the build is created: - $PROJECT ID: the project ID of the build. - $PROJECT NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD ID: the autogenerated ID of the build. - $REPO NAME: the source repository name specified by RepoSource. - $BRANCH NAME: the branch name specified by RepoSource. - $TAG NAME: the tag name specified by RepoSource. - $REVISION ID or $COMMIT SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT SHA: first 7 characters of $REVISION ID or $COMMIT SHA. secret version path secret version path ( project : str , secret : str , version : str ) - > str Returns a fully-qualified secret version string. service account path service account path ( project : str , service account : str ) - > str Returns a fully-qualified service account string. subscription path subscription path ( project : str , subscription : str ) - > str Returns a fully-qualified subscription string. topic path topic path ( project : str , topic : str ) - > str Returns a fully-qualified topic string. update build trigger update build trigger ( request : typing .
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Format: projects/{project}/locations/{location}/builds/{build} This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

