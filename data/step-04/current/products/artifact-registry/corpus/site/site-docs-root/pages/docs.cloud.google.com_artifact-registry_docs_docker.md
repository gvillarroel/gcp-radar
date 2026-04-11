---
title: "Work with container images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/docker
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/docker
  title: "Work with container images \_|\_ Artifact Registry \_|\_ Google Cloud Documentation"
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
Work with container images
Stay organized with collections
Save and categorize content based on your preferences.
Artifact Registry can store Docker and OCI container images
in a Docker repository.
To get familiar with container images in Artifact Registry, you can try the
quickstart .
When you are ready to learn more, read the following information:
Create a Docker repository for your
images.
Grant permissions to the account that
will connect with the repository.
The default service account for Compute Engine has permissions to pull
from Artifact Registry repositories in the same Google Cloud project
unless you have
disabled automatic role granting to default service accounts . The Compute Engine service account is also the
default GKE node service account and the default
Cloud Run service account .
The Cloud Build default service account has permissions to
push to and pull from Artifact Registry repositories in the same
Google Cloud project unless you have
disabled automatic role granting to default service accounts.
If you are using a Docker client to push and pull images, configure
authentication to Artifact Registry.
Learn about pushing and pulling images .
Learn about managing images .
Learn how to manage container metadata with attachments.
Attachments are OCI artifacts that hold metadata about another
container image.
Metadata can be any relevant information you want to store that is related to
a container image, including files you can scan or generate with
Artifact Analysis :
Software bill of materials (SBOM)
Vulnerability scan results
Other metadata such as build provenance
Set up Pub/Sub notifications
for changes to your repository.
Set up Artifact Analysis to manage
image metadata and scan for vulnerabilities.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
