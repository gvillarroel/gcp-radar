---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.818Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build custom Pub/Sub build notification topic"
feature_slug: "cloud-build-custom-pub-sub-build-notification-topic"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
  - "https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration"
keywords:
  - "notification"
  - "topic"
  - "custom"
  - "supports"
---

# Cloud Build custom Pub/Sub build notification topic

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports configuring a custom Pub/Sub topic for build notifications in the build config file.

## Extended Definition

Cloud Build now supports configuring a custom Pub/Sub topic for build notifications in the build config file.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- [https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration](https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Pub/Sub topic : Select the gcs topic from the drop-down menu or manually create the topic using instructions in Configuring Pub/Sub notifications for Cloud Storage .
- Pub/Sub topic : Select the gcr topic from the drop-down menu or manually create the topic using instructions in Configuring Pub/Sub notifications .
- In the example below, the trigger is configured to respond to builds with a Cloud Storage event associated with a new binary pushed to an existing storage bucket: gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' EVENT TYPE = "$(body.message.attributes.eventType)" , ' \ ' BUCKET ID = "$(body.message.attributes.bucketId)" , ' \ ' OBJECT ID = "$(body.message.attributes.objectId)" ' \ -- subscription - filter = ' EVENT TYPE == "OBJECT FINALIZE" && OBJECT ID . matches ( "<object-id>" ) && BUCKET ID . matches ( "<bucket-id>" ) ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- In the example below, the trigger is configured to respond to builds with a tag matching prod and an action matching INSERT based on the specified payload as defined by the substitution variable, IMAGE TAG . gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' IMAGE TAG = "$(body.message.data.tag)" , ' \ ' ACTION = "$(body.message.data.action)" ' \ -- subscription - filter = ' IMAGE TAG != "" && ACTION == "INSERT" ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- Home Documentation Application development Cloud Build Guides Send feedback Using community-contributed builders and custom builders Stay organized with collections Save and categorize content based on your preferences.
- The following steps show how to create and use a custom builder with an example Dockerfile : Create a custom builder image: Create the Dockerfile for the custom builder.

### Create a build configuration file \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration](https://docs.cloud.google.com/build/docs/configuring-builds/create-basic-configuration)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

