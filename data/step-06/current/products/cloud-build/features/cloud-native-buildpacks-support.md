---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.763Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Native Buildpacks support"
feature_slug: "cloud-native-buildpacks-support"
latest_feature_date: "2020-11-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containers"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
keywords:
  - "native"
  - "buildpacks"
  - "build"
  - "can"
  - "containers"
  - "without"
  - "requiring"
  - "dockerfile"
---

# Cloud Native Buildpacks support

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can build containers without requiring a Dockerfile or Cloud Build configuration file by using Cloud Native Buildpacks.

## Extended Definition

Cloud Build can build containers without requiring a Dockerfile or Cloud Build configuration file by using Cloud Native Buildpacks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)

## Supporting Pages

### Build container images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Build with Google Cloud's buildpacks Cloud Build lets you build an image without a Dockerfile or a build config file.
- For more information about escaping arguments, see gcloud topic escaping . gcloud builds submit --pack \ ^--^image=gcr.io/my-project/myimage--env=GOOGLE ENTRYPOINT='java -jar target/myjar.jar',GOOGLE RUNTIME VERSION='3.1.301' Configuring triggers to use buildpacks : In addition to building using the command line, you can configure triggers to use buildpacks to build your image automatically.
- Here are some example commands: Running a build using the default gcr.io/buildpacks/builder to create the image us-docker.pkg.dev/gcb-docs-project/containers/gke/hello-app : gcloud builds submit --pack image=us-docker.pkg.dev/gcb-docs-project/containers/gke/hello-app Passing multiple environment variables to your build using ^--^ as a separator.
- You can do this using Google Cloud's buildpacks .

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Repository : If your config file is located in your remote repository, provide the location of your build config file , the Dockerfile directory, or the buildpacks directory.
- Repository : If your config file is located in your remote repository, provide the location of your build config file , the Dockerfile directory, or the buildpacks directory.
- Note: Pub/Sub triggers cannot build GitHub Enterprise, Bitbucket Data Center, and Bitbucket Server repositories through Cloud Build's native integration.
- Note: Inline build configuration support is not available for Dockerfile or buildpacks.

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Repository triggers that use Cloud Build repositories (2nd gen) can be configured programmatically and are natively integrated with source providers, including support for GitHub and GitLab.
- Repository : If your config file is located in your remote repository, provide the location of your build config file , the Dockerfile directory, or the buildpacks directory.
- Note: Inline build configuration support is not available for Dockerfile or buildpacks.
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.

