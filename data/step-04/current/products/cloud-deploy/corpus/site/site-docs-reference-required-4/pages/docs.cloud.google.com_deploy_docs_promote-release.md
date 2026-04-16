---
title: "Promote your release and manage approvals \_|\_ Cloud Deploy \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/promote-release
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/promote-release
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/promote-release
  title: "Promote your release and manage approvals \_|\_ Cloud Deploy \_|\_ Google\
    \ Cloud Documentation"
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
Promote your release and manage approvals
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to promote an existing Cloud Deploy release to the
next target in a delivery pipeline progression .
Before you begin
This page assumes you have already created a release .
Promote the release
When your release is deployed into a target defined in your delivery pipeline,
you can promote it to the next target:
gcloud
gcloud deploy releases promote --release = RELEASE_NAME \
--delivery-pipeline = PIPELINE_NAME \
--region = REGION
Where:
RELEASE_NAME is the name of the release you're
promoting.
PIPELINE_NAME is the name of the delivery pipeline
you're using to manage deployment of this release.
REGION is the name of the region in which the release
was created, for example us-central1 . This is required.
See the Google Cloud SDK
reference for more information about the
gcloud deploy releases promote command .
Note: you can also include --to-target= TARGET_NAME
to specify a destination target. If you omit --to-target , the release is
promoted to the next target in the promotion sequence.
Console
Open the Delivery
pipelines page .
Click your pipeline shown in the list of delivery pipelines.
The Delivery pipeline details page shows a graphical representation of
your delivery pipeline's progress.
On the first target in the delivery pipeline visualization, click Promote .
The Promote release dialog is shown. It shows the details of the
target you're promoting to.
Click Promote .
If the delivery pipeline or target has changed since the release was created,
Cloud Deploy returns a message indicating a possible
mismatch , and prompts
you to confirm the promotion. You can respond n to the prompt and examine the
differences between the pipeline versions before you proceed. If you choose to
promote anyway, the release is deployed according to the delivery pipeline as it
was defined when the release was created. See
Pipeline instances per release for more
information about pipeline mismatches.
Cloud Deploy creates a rollout for the release into the
destination target, and the release is queued for deployment. When it's
deployed, the delivery pipeline visualization shows that fact:
Manage approvals for a delivery pipeline
You can require approval for
any target, and you can approve or reject releases into that target.
Approvals can be managed programmatically by integrating your workflow
management system (such as ServiceNow), or other system, with
Cloud Deploy using Pub/Sub and the Cloud Deploy
API.
Require approval
To require approval on any target, set requireApproval to true in the target
configuration:
apiVersion: deploy.cloud.google.com/v1
kind: Target
metadata:
name:
description:
requireApproval: true
See Delivery pipeline configuration
for further details.
When a rollout is pending approval, users or systems that subscribe to the
clouddeploy-approvals Pub/Sub topic receive notification, from the
clouddeploy-approvals topic, and can then approve or reject the rollout.
When using parallel deployment , you can configure the
multi-target to require approval .
If promotion to the target is rejected, the controller rollout fails, with a
state of APPROVAL_REJECTED , and the child rollouts are not created.
Approve or reject a rollout
Any user or service account with the role roles/clouddeploy.approver can
approve a Cloud Deploy rollout to a target that requires approval.
Your integrated workflow management system, having received an approval-required
notification using service notifications ,
can approve or reject the rollout using the Cloud Deploy API.
Approve or reject manually
Console
In the Google Cloud console, navigate to the Cloud Deploy
Delivery pipelines page to view of list of your available delivery
pipelines.
Open the Delivery pipelines page
The list of delivery pipelines is shown in Google Cloud console.
Delivery pipelines that have been configured but not registered
with the Cloud Deployservice are not shown.
Click the name of the delivery pipeline.
The pipeline visualization is shown. If approval is pending, and if you
have the roles/clouddeploy.approver role, or equivalent permissions,
the visualization includes a Review link.
Click Review .
A list is shown of rollouts pending approval.
Click Review .
The Approve rollout screen is shown.
The Manifest diff tab shows any changes to the rendered manifest from
the currently deployed version (if any) to the one you're now approving
(or rejecting).
Click Approve or Reject .
If you approve, your application is deployed into the target. If you
reject, the application is not deployed, and can't be approved later
unless re-promoted.
gcloud
A user with the roles/clouddeploy.approver role can manually approve or
reject a rollout. To approve:
gcloud deploy rollouts approve rollout - name -- delivery - pipeline = pipeline - name \
-- region = region \
-- release = release - name
To reject:
gcloud deploy rollouts reject rollout - name -- delivery - pipeline = pipeline - name \
-- region = region \
-- release = release - name
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
