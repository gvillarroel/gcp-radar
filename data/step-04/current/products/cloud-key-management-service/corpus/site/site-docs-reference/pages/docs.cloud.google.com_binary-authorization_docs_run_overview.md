---
title: "Set up overview for Cloud Run \_|\_ Binary Authorization \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/run/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/run/overview
  title: "Set up overview for Cloud Run \_|\_ Binary Authorization \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
Set up overview for Cloud Run
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of how to set up Binary Authorization for use with
Cloud Run services and jobs.
How Binary Authorization policies are applied to Cloud Run
You can set a Binary Authorization policy on Cloud Run services and jobs.
However, policy enforcement varies slightly between Cloud Run services
and jobs.
Policies applied to Cloud Run services
When you set a Binary Authorization policy on a service, Cloud Run
checks the policy each time you deploy a new revision. If the new revision does
not conform to the policy, the deployment will fail. However, if this happens, you
can use the breakglass
feature to bypass the Binary Authorization policy and deploy a revision using a
non-compliant container.
Changes in the Binary Authorization policy do not retroactively
apply to existing revisions.
Policies applied to Cloud Run jobs
When you set a Binary Authorization policy on a job, Cloud Run checks the
policy each time you execute the job. If a job has a non-compliant container:
You can still update the job successfully.
Executing the job will fail. You can use the
breakglass
feature to bypass the Binary Authorization policy in these situations.
Changes in the Binary Authorization policy do not retroactively
apply to already-running executions.
Before you begin
Before you use Binary Authorization for Cloud Run, we recommend that you
set up your Cloud Run environment .
Setup Steps
To set up Binary Authorization for Cloud Run, perform the following steps:
Enable Binary Authorization .
Recommended: Require Binary Authorization for Cloud Run using an organization policy.
Enable Binary Authorization for Cloud Run .
Configure the Binary Authorization policy.
Note: Skip this step if you want to use attestations.
You can configure the following features in your policy:
Default rule .
Exempt images . Learn more about exempt images .
To deploy functions in Cloud Run, the Binary Authorization
policy administrator must configure the Binary Authorization policy to
exempt all images from the
REGION -docker.pkg.dev/ PROJECT_ID /cloud-run-source-deploy/**
repository and its subdirectories.
Optional: Use the built-by-cloud-build attestor to deploy only images built by Cloud Build ( Preview ).
Optional: Use attestations .
View Binary Authorization for Cloud Run events in Cloud Audit Logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
