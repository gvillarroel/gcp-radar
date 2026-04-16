---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.896Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build build details page"
feature_slug: "cloud-build-build-details-page"
latest_feature_date: "2020-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github"
  - "https://docs.cloud.google.com/build/docs/build-push-docker-image"
keywords:
  - "details"
  - "platform"
  - "updated"
  - "page"
  - "console"
---

# Cloud Build build details page

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

The Cloud Build build details page in the Google Cloud Platform Console was updated.

## Extended Definition

The Cloud Build build details page in the Google Cloud Platform Console was updated.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds](https://docs.cloud.google.com/build/docs/automate-builds)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)

## Supporting Pages

### Building repositories from GitHub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The Build details page in Google Cloud console opens where you can see build information such as status, logs, and build steps.
- Google Cloud console To create GitHub triggers using the Google Cloud console, do the following: Open the Triggers page in the Google Cloud console.
- You can create and manage GitHub triggers using Google Cloud console or the Cloud Build API, as described on this page.
- The following table compares GitHub legacy triggers, GitHub triggers, and GitHub Enterprise triggers: Feature GitHub legacy triggers GitHub triggers GitHub Enterprise triggers Execute builds on pushes to the source code Yes Yes Yes Execute builds on pull requests No Yes Yes Create trigger using Google Cloud console Yes Yes Yes Create trigger using the Cloud Build API No Yes Yes Create trigger using the Cloud Build GitHub app No Yes Yes View build status on Google Cloud console Yes Yes Yes View build status on GitHub No Yes Yes Data sharing The data sent to GitHub from Cloud Build helps you identify triggers by name and see build results on GitHub.

### Quickstart: Automate builds by using Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automate-builds](https://docs.cloud.google.com/build/docs/automate-builds)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a trigger Open the Triggers page in the Google Cloud console: Open Triggers page Select your project from the project selector drop-down menu at the top of the page.
- To initialize the gcloud CLI, run the following command: gcloud init In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- On the Build details page, click Build Artifacts .

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View build details Open the Cloud Build page in the Google Cloud console.
- Make sure that you have the following role or roles on the project: Artifact Registry Administrator, Cloud Build Editor, Logs Viewer, Service Account User, Service Usage Admin, Storage Bucket Viewer, Storage Object Creator Check for the roles In the Google Cloud console, go to the IAM page.
- To initialize the gcloud CLI, run the following command: gcloud init In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- You should see output similar to the following: You can download your build log and view your image details in Artifact Registry from this page.

