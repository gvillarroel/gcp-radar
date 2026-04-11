---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:17:26.800Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "promoteRelease API"
feature_slug: "promoterelease-api"
latest_feature_date: "2021-09-15"
deprecation_date: "2021-09-15"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/deploy-app-in-console"
  - "https://docs.cloud.google.com/deploy/docs/release-notes"
  - "https://docs.cloud.google.com/deploy/docs/abandon-release"
keywords:
  - "promoterelease"
  - "api"
  - "the"
  - "was"
  - "removed"
  - "and"
  - "release"
  - "promotion"
---

# promoteRelease API

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

The promoteRelease API was removed, and release promotion must use releases.rollouts.create instead; deprecated on 2021-09-15.

## Extended Definition

The promoteRelease API was removed, and release promotion must use releases.rollouts.create instead; deprecated on 2021-09-15.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- [https://docs.cloud.google.com/deploy/docs/abandon-release](https://docs.cloud.google.com/deploy/docs/abandon-release)

## Supporting Pages

### "Quickstart: Create a pipeline and release in the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/deploy/docs/deploy-app-in-console](https://docs.cloud.google.com/deploy/docs/deploy-app-in-console)
- Source ID: `site-docs-root-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Delete the GKE clusters or Cloud Run services: GKE gcloud container clusters delete quickstart - cluster - for - console - staging -- region = us - central1 -- project = PROJECT ID \ && gcloud container clusters delete quickstart - cluster - for - console - prod -- region = us - central1 -- project = PROJECT ID Cloud Run gcloud run services delete in - console - quickstart - pipeline - target - 1 -- region = us - central1 -- project = PROJECT ID \ && gcloud run services delete in - console - quickstart - pipeline - target - 2 -- region = us - central1 -- project = PROJECT ID From the delivery pipeline page, click Delete to delete the delivery pipeline, the release, and rollouts.
- Create a pipeline and release in the Google Cloud console This page shows you how to use the Google Cloud console to create a Cloud Deploy delivery pipeline, and then create a release for that pipeline.
- Enable the Cloud Deploy, Cloud Build, GKE, Artifact Registry, Cloud Run, and Cloud Storage APIs.
- Enable the Cloud Deploy, Cloud Build, GKE, Artifact Registry, Cloud Run, and Cloud Storage APIs.

### Cloud Deploy release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/release-notes](https://docs.cloud.google.com/deploy/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated The promoteRelease API is removed.
- You can see the latest product updates for all of Google Cloud on the Google Cloud page, browse and filter all release notes in the Google Cloud console , or programmatically access release notes in BigQuery .
- November 13, 2023 Feature Cloud Deploy now supports delivery pipeline automation , including automated release promotion and automated rollout phase advancement, in preview .
- July 17, 2023 Feature Cloud Deploy now provides the ability to pass deploy parameters to your manifests, per delivery pipeline, per target, and per release (in preview ).

### Abandon a release \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/abandon-release](https://docs.cloud.google.com/deploy/docs/abandon-release)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Reasons for abandoning a release include the following, for example: There's a bug in the release There's a security issue in the release A feature included in the release has been deprecated To abandon a release, run the following command: gcloud deploy releases abandon RELEASE NAME --delivery-pipeline = PIPELINE NAME --region = REGION Where: RELEASE NAME Is the name of the release to abandon.
- IAM permissions The IAM permissions required for abandoning a release are included in the following roles: roles/clouddeploy.admin roles/clouddeploy.operator roles/clouddeploy.developer Rollouts from abandoned releases When you abandon a release, any rollouts created from that release that are in progress or queued continue to completion—they are not cancelled.
- The Releases tab, on the Delivery pipeline details page, labels the release as "abandoned": Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- An abandoned release has the following characteristics: You can't promote an abandoned release.

