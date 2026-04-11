---
title: "Abandon a release \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/abandon-release
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/abandon-release
  title: "Abandon a release \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Guides
Send feedback
Abandon a release
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to permanently abandon a Cloud Deploy
release.
You can permanently abandon a release. An
abandoned release has the following characteristics:
You can't promote an abandoned release.
You can't roll back to an abandoned release.
You can't unabandon a release. After you abandon a release, it's permanently
deactivated.
Reasons for abandoning a release include the following, for example:
There's a bug in the release
There's a security issue in the release
A feature included in the release has been deprecated
To abandon a release, run the following command:
gcloud deploy releases abandon RELEASE_NAME --delivery-pipeline = PIPELINE_NAME --region = REGION
Where:
RELEASE_NAME
Is the name of the release to abandon. This is required.
PIPELINE_NAME
Is the name of the delivery pipeline that created the release. This is
required.
REGION
Is the name of the region in which the release was created, for example
us-central1 . This is required.
IAM permissions
The IAM permissions required for abandoning a release are
included in the following roles:
roles/clouddeploy.admin
roles/clouddeploy.operator
roles/clouddeploy.developer
Rollouts from abandoned releases
When you abandon a release, any rollouts created from that release that are in
progress or queued continue to completion—they are not cancelled. However, you
can't create new rollouts from an abandoned release.
View abandoned releases
In Google Cloud console, you can see if a release has been abandoned. The
Releases tab, on the Delivery pipeline details page, labels the release as
"abandoned":
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
