---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.786Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build gcloud command group"
feature_slug: "cloud-build-gcloud-command-group"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise"
keywords:
  - "build"
  - "gcloud"
  - "command"
  - "group"
  - "cli"
  - "commands"
  - "were"
  - "updated"
---

# Cloud Build gcloud command group

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build gcloud CLI commands were updated to use the `gcloud builds` command group.

## Extended Definition

Cloud Build gcloud CLI commands were updated to use the `gcloud builds` command group.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Click Create to create your build trigger. gcloud To create a trigger that listens for a new tag pushed to an existing image in Artifact Registry using the gcloud commands: Open a terminal window.
- What's next Learn how to start builds manually using gcloud commands or the Cloud Build API.
- To use gcloud commands on this page, install the Google Cloud CLI .
- Specify the following as your filters: EVENT TYPE == OBJECT FINALIZE OBJECT ID matches ^<object-id>$ BUCKET ID matches ^<bucket-id>$ Click Create to create your build trigger . gcloud To create a build trigger that listens to build events with a specific event type in Cloud Storage: Open a terminal window.

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Enter the following curl command in your terminal: curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" - H "x-goog-user-project: PROJECT NUMBER " https : // cloudbuild . googleapis . com / v1 / projects / PROJECT ID / triggers - d @trigger . json Where: PROJECT NUMBER is your Google Cloud project number.
- Comment control : If you selected Pull request as your Event , choose one of the following options to control whether a build is automatically executed by the trigger: Required except for owners and collaborators : When a pull request is created or updated by a repository owner or collaborator, builds are automatically executed by the trigger.
- Required : When a pull request is created or updated by any contributor, builds are executed only after an owner or collaborator comments /gcbrun on the pull request.

### Building repositories from GitHub Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- To create GitHub triggers using gcloud commands, see the gcloud commands for Creating a build trigger . gcloud CLI To create GitHub Enterprise triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer - connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Enter the following curl command in your terminal: curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" - H "x-goog-user-project: PROJECT NUMBER " https : // cloudbuild . googleapis . com / v1 / projects / PROJECT ID / triggers - d @trigger . json Where: PROJECT NUMBER is your Google Cloud project number.
- Comment control : If you selected Pull request as your Event , choose one of the following options to control whether a build is automatically executed by the trigger: Required except for owners and collaborators : When a pull request is created or updated by a repository owner or collaborator, builds are automatically executed by the trigger.
- Required : When a pull request is created or updated by any contributor, builds are executed only after an owner or collaborator comments /gcbrun on the pull request.

