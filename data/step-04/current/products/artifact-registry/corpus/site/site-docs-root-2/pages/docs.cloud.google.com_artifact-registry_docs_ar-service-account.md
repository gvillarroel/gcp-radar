---
title: "Artifact Registry Service Agent \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/ar-service-account
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/ar-service-account
  title: "Artifact Registry Service Agent \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Artifact Registry Service Agent
Stay organized with collections
Save and categorize content based on your preferences.
The Artifact Registry Service Agent acts on behalf of
Artifact Registry when interacting with Google Cloud services.
After you create the first Artifact Registry repository in a
Google Cloud project, the Artifact Registry Service Agent
is automatically created. The service agent identifier is:
service- PROJECT-NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com
PROJECT-NUMBER is the project number of the
Google Cloud project where Artifact Registry is running.
You can manually create the service account in a project without any
repositories with the command:
gcloud beta services identity create \
--service = artifactregistry.googleapis.com \
--project = PROJECT-ID
Replace PROJECT-ID with the Google Cloud project ID.
The Artifact Registry Service Agent is granted the Artifact Registry
Service Agent role ( roles/artifactregistry.serviceAgent ) for resources in the
project. To enforce the security principle of least privilege, the role only
has the minimum required permissions:
Publish Pub/Sub topics: pubsub.topics.publish
Download artifacts from Artifact Registry repositories:
artifactregistry.repositories.downloadArtifacts
Delete artifacts: artifactregistry.versions.delete
What's next
Learn about
Artifact Registry roles and configuring access to repositories .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
