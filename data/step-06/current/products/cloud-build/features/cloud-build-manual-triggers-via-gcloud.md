---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.862Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build manual triggers via gcloud"
feature_slug: "cloud-build-manual-triggers-via-gcloud"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
keywords:
  - "manually"
  - "gcloud"
  - "manual"
  - "supports"
  - "triggers"
---

# Cloud Build manual triggers via gcloud

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports manually triggering builds from the gcloud CLI.

## Extended Definition

Cloud Build now supports manually triggering builds from the gcloud CLI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- You can directly create triggers for your repositories in Cloud Source Repositories without manually connecting to them.
- Test a build trigger To manually test a build trigger: Open the Triggers page in the Google Cloud console.
- To create a trigger if your source code is in GitHub : gcloud builds triggers create github \ -- name = TRIGGER NAME \ -- region = REGION \ -- repo - name = REPO NAME \ -- repo - owner = REPO OWNER \ -- branch - pattern = BRANCH PATTERN \ # or -- tag - pattern = TAG PATTERN -- build - config = BUILD CONFIG FILE \ -- service - account = SERVICE ACCOUNT \ -- require - approval -- include - logs - with - status Where: REGION is the region for your trigger.
- Click Create to save your build trigger. gcloud To create a trigger if your source code is in Cloud Source Repositories : gcloud builds triggers create cloud-source-repositories \ --repo= REPO NAME \ --branch-pattern= BRANCH PATTERN \ # or --tag-pattern= TAG PATTERN --build-config= BUILD CONFIG FILE \ --service-account= SERVICE ACCOUNT \ --require-approval Where: REPO NAME is the name of your repository.

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Click Create to create your build trigger. gcloud To create a webhook trigger: gcloud builds triggers create webhook \ -- name = TRIGGER NAME \ -- repo = PATH TO REPO \ -- repo - type = REPO TYPE \ -- secret = PATH TO SECRET \ -- substitutions = SUB ONE = '$ ( body . message . test ) ' , SUB TWO = '$ ( body . message . output ) ' \ -- subscription - filter = ' SUB ONE == "prod" ' \ -- inline - config = PATH TO INLINE BUILD CONFIG \ -- tag = TAG NAME -- build - config = PATH TO BUILD CONFIG \ -- branch = BRANCH NAME Where: + TRIGGER NAME is the name of your trigger. + PATH TO REPO is the path to the repository to invoke a build on.
- If you don't see this role automatically granted to the necessary service account, complete the following steps to manually add the role so that your service account has access to your secret: Open the IAM page in the Google Cloud console: Open the IAM page Optional: To see Google-provided accounts, select the Include Google-provided role grants checkbox.
- If you use an existing secret, you may need to manually grant the Secret Manager Secret Accessor role to your Cloud Build service account, service-${PROJECT NUMBER}@gcp-sa-cloudbuild.iam.gserviceaccount.com .
- If Cloud Build is unable to retrieve your API key, you can manually add your API key to the URL or learn how to obtain an API key if you don't have one yet.

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn how to start builds manually using gcloud commands or the Cloud Build API.
- In the example below, the trigger is configured to respond to builds with a Cloud Storage event associated with a new binary pushed to an existing storage bucket: gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' EVENT TYPE = "$(body.message.attributes.eventType)" , ' \ ' BUCKET ID = "$(body.message.attributes.bucketId)" , ' \ ' OBJECT ID = "$(body.message.attributes.objectId)" ' \ -- subscription - filter = ' EVENT TYPE == "OBJECT FINALIZE" && OBJECT ID . matches ( "<object-id>" ) && BUCKET ID . matches ( "<bucket-id>" ) ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- In the example below, the trigger is configured to respond to builds with a tag matching prod and an action matching INSERT based on the specified payload as defined by the substitution variable, IMAGE TAG . gcloud builds triggers create pubsub \ -- name = TRIGGER NAME \ -- topic = projects / PROJECT ID / topics / TOPIC NAME \ -- build - config = BUILD CONFIG \ # or -- inline - config = INLINE BUILD CONFIG -- substitutions = \ ' IMAGE TAG = "$(body.message.data.tag)" , ' \ ' ACTION = "$(body.message.data.action)" ' \ -- subscription - filter = ' IMAGE TAG != "" && ACTION == "INSERT" ' \ -- repo = REPO NAME \ -- repo - type = REPO TYPE \ -- tag = TAG NAME # or -- branch = BRANCH NAME Where: TRIGGER NAME is the name of your trigger.
- Pub/Sub topic : Select the gcs topic from the drop-down menu or manually create the topic using instructions in Configuring Pub/Sub notifications for Cloud Storage .

