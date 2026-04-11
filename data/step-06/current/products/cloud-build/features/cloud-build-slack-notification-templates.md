---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.727Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Slack notification templates"
feature_slug: "cloud-build-slack-notification-templates"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/access-github-from-build"
keywords:
  - "build"
  - "slack"
  - "notification"
  - "templates"
  - "now"
  - "supports"
  - "customizable"
  - "notifications"
---

# Cloud Build Slack notification templates

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build now supports customizable Slack notifications using notifier templates.

## Extended Definition

Cloud Build now supports customizable Slack notifications using notifier templates.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)

## Supporting Pages

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- November 07, 2022 Feature Users can now customize Slack notifications for their builds using notifier templates.
- December 27, 2022 Feature Users can now customize email, BigQuery, and webhook-based notifications using notifier templates.
- March 21, 2025 Feature You can now specify, in your build config file, a custom Pub/Sub topic for build notifications.
- May 23, 2022 Feature Users can now receive build status notifications in Google Chat via a Google Chat notifier.

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Pub/Sub topic : Select the gcs topic from the drop-down menu or manually create the topic using instructions in Configuring Pub/Sub notifications for Cloud Storage .
- Pub/Sub topic : Select the gcr topic from the drop-down menu or manually create the topic using instructions in Configuring Pub/Sub notifications .
- In the example below, the trigger is configured to respond to builds with a Cloud Storage event associated with a new binary pushed to an existing storage bucket: gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' EVENT TYPE = "$(body.message.attributes.eventType)" , ' \ ' BUCKET ID = "$(body.message.attributes.bucketId)" , ' \ ' OBJECT ID = "$(body.message.attributes.objectId)" ' \ -- subscription - filter = ' EVENT TYPE == "OBJECT FINALIZE" && OBJECT ID . matches ( "<object-id>" ) && BUCKET ID . matches ( "<bucket-id>" ) ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- In the example below, the trigger is configured to respond to builds with a tag matching prod and an action matching INSERT based on the specified payload as defined by the substitution variable, IMAGE TAG . gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' IMAGE TAG = "$(body.message.data.tag)" , ' \ ' ACTION = "$(body.message.data.action)" ' \ -- subscription - filter = ' IMAGE TAG != "" && ACTION == "INSERT" ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.

### "Accessing GitHub from a build via SSH keys \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/access-github-from-build](https://docs.cloud.google.com/build/docs/access-github-from-build)
- Source ID: `site-docs-root-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Access the id github file from Secret Manager , and setup SSH steps : - name : 'gcr.io/cloud-builders/git' secretEnv : [ 'SSH KEY' ] entrypoint : 'bash' args : - - c - echo "$$SSH KEY" >> / root / . ssh / id rsa chmod 400 / root / . ssh / id rsa cp known hosts . github / root / . ssh / known hosts volumes : - name : 'ssh' path : / root / . ssh Clone the repository - name : 'gcr.io/cloud-builders/git' args : - clone - --recurse-submodules - git @github . com : GIT USERNAME / GIT REPOSITORY volumes : - name : 'ssh' path : / root / . ssh availableSecrets : secretManager : - versionName : projects / PROJECT ID / secrets / SECRET NAME / versions / latest env : 'SSH KEY' Replace the placeholder values in the above commands with the following: GIT USERNAME : The GitHub username of the repository owner.
- In your workingdir directory, create a file named known hosts.github and add the public SSH key to this file: ssh-keyscan -t rsa github.com > known hosts.github In the next section when you configure the build, you'll add instructions in the Cloud Build config file to copy the contents of known hosts.github to the known hosts file in Cloud Build's build environment.
- Configure the build To configure the build: Create a build config file named cloudbuild.yaml with two steps: the first gcloud step accesses the SSH key in Secret Manager and saves it as id rsa in a volume named ssh , along with a copy of the known hosts.github .
- You can do this by adding the key to a temporary known hosts.github file, and then copying the contents of known hosts.github to the known hosts file in Cloud Build's build environment.

