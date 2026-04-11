---
title: "Limiting target types \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/limiting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/limiting
  title: "Limiting target types \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Guides
Send feedback
Limiting target types
Stay organized with collections
Save and categorize content based on your preferences.
In some situations it might be preferable to limit the job target type. To do
this, administrators who have the Organization Policy Administrator
role can configure a policy
to control what kind of job targets (HTTP, Pub/Sub, and/or App Engine HTTP) can
be created in their organization.
Console
Visit the Organization policies page of the IAM & Admin section.
IAM & Admin
From the top left dropdown, select the resource (organization or project)
to which you wish to apply the constraint.
Select Allowed target types for jobs from the list of Organization
Policies .
On the policy page, click the Edit button.
Under Rules , open Add Rule
Select Custom for Policy values .
Select Allow for Policy type .
Add the type (PUBSUB, HTTP, or APPENGINE) to allowlist.
Click on New Policy Value to add multiple job types.
Save to enforce the policy.
Gcloud
To see the value of the constraint in an existing policy:
gcloud resource-manager org-policies describe cloudscheduler.allowedTargetTypes -- RESOURCE_TYPE = RESOURCE_ID
Where RESOURCE_TYPE is either project , folder , or organization ,
depending on where in the hierarchy the policy is attached.
Which should return something like this:
constraint: constraints/cloudscheduler.allowedTargetTypes
etag: ETAG_VALUE
listPolicy:
allowedValues:
- PUBSUB
updateTime: '2021-09-04T15:30:45.313018Z'
Make a note of the ETAG_VALUE for the next step.
To create a policy.yaml file with the constraint:
cat >policy.yaml
constraint: constraints/cloudscheduler.allowedTargetTypes -- RESOURCE_TYPE = RESOURCE_ID
etag: ETAG_VALUE
listPolicy:
allowedValues:
- PUBSUB
To set the policy:
gcloud resource-manager org-policies set-policy -- RESOURCE_TYPE = RESOURCE_ID policy.yaml
To delete the constraint:
gcloud resource-manager org-policies delete -- RESOURCE_TYPE = RESOURCE_ID
constraints/cloudscheduler.allowedTargetTypes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
