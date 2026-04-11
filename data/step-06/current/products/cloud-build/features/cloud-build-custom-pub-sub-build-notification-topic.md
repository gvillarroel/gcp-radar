---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.684Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build custom Pub/Sub build notification topic"
feature_slug: "cloud-build-custom-pub-sub-build-notification-topic"
latest_feature_date: "2025-03-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/create-custom-build-steps"
keywords:
  - "build"
  - "custom"
  - "pub"
  - "sub"
  - "notification"
  - "topic"
  - "now"
  - "supports"
---

# Cloud Build custom Pub/Sub build notification topic

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports configuring a custom Pub/Sub topic for build notifications in the build config file.

## Extended Definition

Cloud Build now supports configuring a custom Pub/Sub topic for build notifications in the build config file.

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
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- In the example below, the trigger is configured to respond to builds with a Cloud Storage event associated with a new binary pushed to an existing storage bucket: gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' EVENT TYPE = "$(body.message.attributes.eventType)" , ' \ ' BUCKET ID = "$(body.message.attributes.bucketId)" , ' \ ' OBJECT ID = "$(body.message.attributes.objectId)" ' \ -- subscription - filter = ' EVENT TYPE == "OBJECT FINALIZE" && OBJECT ID . matches ( "<object-id>" ) && BUCKET ID . matches ( "<bucket-id>" ) ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- In the example below, the trigger is configured to respond to builds with a tag matching prod and an action matching INSERT based on the specified payload as defined by the substitution variable, IMAGE TAG . gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' IMAGE TAG = "$(body.message.data.tag)" , ' \ ' ACTION = "$(body.message.data.action)" ' \ -- subscription - filter = ' IMAGE TAG != "" && ACTION == "INSERT" ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- Risks associated with an unfiltered trigger If you have not configured filters on your Pub/Sub trigger, your trigger may end up invoking an infinite number of builds if your trigger modifies an artifact or object which unintentionally publishes a new message to the topic it's listening to.
- Pub/Sub topic : Select the gcs topic from the drop-down menu or manually create the topic using instructions in Configuring Pub/Sub notifications for Cloud Storage .

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- March 21, 2025 Feature You can now specify, in your build config file, a custom Pub/Sub topic for build notifications.
- For more information, see Pub/Sub topics for build notifications .
- September 07, 2023 Feature Users can now use manual triggers , webhook triggers , and Pub/Sub triggers to build Bitbucket Server and Bitbucket Data Center repositories through Cloud Build repositories (1st gen).
- May 11, 2023 Feature You can now create manual triggers , webhook triggers , or Pub/Sub triggers using Cloud Build repositories (2nd gen).

### "Using community-contributed builders and custom builders \_|\_ Cloud Build\

- URL: [https://docs.cloud.google.com/build/docs/create-custom-build-steps](https://docs.cloud.google.com/build/docs/create-custom-build-steps)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The following code shows an example Dockerfile : FROM alpine RUN apk add curl CMD curl https : //httpbin.org/ip -s > myip.txt; echo " My IP is: $(cat myip.txt)" Build and push the custom builder to the Artifact Registry in your project, replacing values for project-id and image-name : gcloud builds submit -- tag gcr . io / project - id / image - name Use the custom builder image in Cloud Build by specifying the builder in the name field of a build step: YAML steps : - name : 'gcr.io/ project-id / image-name ' id : Determine IP of this build worker JSON { "steps" : [ { "name" : "gcr.io/ project-id / image-name " , "id" : "Determine IP of this build worker" } ] } Use the build config file to start the build manually or build using triggers .
- Creating a custom builder If the task you want to perform requires capabilities that are not provided by a public image, a supported builder, or a community-contributed builder , you can build your own image and use it in a build step.
- Clone the cloud-builders-community repository: git clone https : //github.com/GoogleCloudPlatform/cloud-builders-community.git Navigate to the builder image you want to use, where builder-name is the directory that contains the builder: cd cloud - builders - community / builder - name Submit the builder to your project: gcloud builds submit .
- Home Documentation Application development Cloud Build Guides Send feedback Using community-contributed builders and custom builders Stay organized with collections Save and categorize content based on your preferences.

