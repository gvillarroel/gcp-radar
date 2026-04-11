---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.668Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build generic artifacts integration"
feature_slug: "cloud-build-generic-artifacts-integration"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build"
keywords:
  - "build"
  - "generic"
  - "artifacts"
  - "integration"
  - "now"
  - "supports"
  - "uploading"
  - "to"
---

# Cloud Build generic artifacts integration

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports uploading generic artifacts to generic repositories and downloading those repositories as build dependencies.

## Extended Definition

Cloud Build now supports uploading generic artifacts to generic repositories and downloading those repositories as build dependencies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- March 30, 2026 Feature Cloud Build now supports uploading generic artifacts to generic repositories, and also downloading generic repositories as build dependencies.
- March 07, 2024 Feature Cloud Build repositories (2nd gen) now supports integration with Bitbucket Cloud and Bitbucket Data Center .
- March 16, 2026 Feature Cloud Build now supports uploading OCI images to Artifact Registry during a build process.
- June 25, 2024 Feature Cloud Build support for Supply-chain Levels for Software Artifacts (SLSA) version 1.0 compliant provenance is now generally available to help you safeguard your automated build pipelines.

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Note: Pub/Sub triggers cannot build GitHub Enterprise, Bitbucket Data Center, and Bitbucket Server repositories through Cloud Build's native integration.
- In the example below, the trigger is configured to respond to builds with a Cloud Storage event associated with a new binary pushed to an existing storage bucket: gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' EVENT TYPE = "$(body.message.attributes.eventType)" , ' \ ' BUCKET ID = "$(body.message.attributes.bucketId)" , ' \ ' OBJECT ID = "$(body.message.attributes.objectId)" ' \ -- subscription - filter = ' EVENT TYPE == "OBJECT FINALIZE" && OBJECT ID . matches ( "<object-id>" ) && BUCKET ID . matches ( "<bucket-id>" ) ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- In the example below, the trigger is configured to respond to builds with a tag matching prod and an action matching INSERT based on the specified payload as defined by the substitution variable, IMAGE TAG . gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' IMAGE TAG = "$(body.message.data.tag)" , ' \ ' ACTION = "$(body.message.data.action)" ' \ -- subscription - filter = ' IMAGE TAG != "" && ACTION == "INSERT" ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.

### Class Build (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The TTL starts ticking from create time. artifacts google.cloud.devtools.cloudbuild v1.types.Artifacts Artifacts produced by the build that should be uploaded upon successful completion of all build steps. logs bucket str Cloud Storage bucket where logs should be written (see `Bucket Name Requirements source provenance google.cloud.devtools.cloudbuild v1.types.SourceProvenance Output only.
- Valid keys are: - BUILD: time to execute all build steps. - PUSH: time to push all artifacts including docker images and non docker artifacts. - FETCHSOURCE: time to fetch source. - SETUPBUILD: time to set up build.
- At a high level, a Build describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts.
- Fields can include the following variables, which will be expanded when the build is created: $PROJECT ID: the project ID of the build. $PROJECT NUMBER: the project number of the build. $LOCATION: the location/region of the build. $BUILD ID: the autogenerated ID of the build. $REPO NAME: the source repository name specified by RepoSource. $BRANCH NAME: the branch name specified by RepoSource. $TAG NAME: the tag name specified by RepoSource. $REVISION ID or $COMMIT SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. $SHORT SHA: first 7 characters of $REVISION ID or $COMMIT SHA.

