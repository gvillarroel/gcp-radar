---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.745Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build integrity features"
feature_slug: "cloud-build-build-integrity-features"
latest_feature_date: "2021-10-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
keywords:
  - "build"
  - "integrity"
  - "features"
  - "add"
  - "verification"
  - "using"
  - "binary"
  - "authorization"
---

# Cloud Build build integrity features

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Build integrity features add build verification using binary authorization and build provenance records to secure image deployments.

## Extended Definition

Build integrity features add build verification using binary authorization and build provenance records to secure image deployments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- In the example below, the trigger is configured to respond to builds with a Cloud Storage event associated with a new binary pushed to an existing storage bucket: gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' EVENT TYPE = "$(body.message.attributes.eventType)" , ' \ ' BUCKET ID = "$(body.message.attributes.bucketId)" , ' \ ' OBJECT ID = "$(body.message.attributes.objectId)" ' \ -- subscription - filter = ' EVENT TYPE == "OBJECT FINALIZE" && OBJECT ID . matches ( "<object-id>" ) && BUCKET ID . matches ( "<bucket-id>" ) ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- Creating a build trigger that responds to Cloud Storage events You can create a Pub/Sub trigger that responds to Cloud Storage events such as when a new binary is pushed to an existing storage bucket.
- Click Create to create your build trigger. gcloud To create a trigger that listens for a new tag pushed to an existing image in Artifact Registry using the gcloud commands: Open a terminal window.
- Buildpack environment variables (optional): If you selected buildpacks as your configuration type, click Add pack environment variable to specify your buildpack environment variables and values.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- To set up your build verification policy, see Using binary authorization to control image deployment .
- October 12, 2021 Feature Build integrity features in preview let you secure deployments by requiring that images are built by Cloud Build.
- November 30, 2022 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Java and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- April 04, 2023 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Maven and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Using community-contributed builders Prebuilt images are not available for community-contributed builders; to use these builders in a Cloud Build config file, you must first build the image and push it to Artifact Registry in your project.
- Home Documentation Application development Cloud Build Guides Send feedback Using community-contributed builders and custom builders Stay organized with collections Save and categorize content based on your preferences.
- JSON { "steps" : [ { "name" : "gcr.io/ project-id / builder-name " , "args" : [ " arg1 " , " arg2 " , ... ] ... } ] } Use the build config file to start the build manually or build using triggers .

