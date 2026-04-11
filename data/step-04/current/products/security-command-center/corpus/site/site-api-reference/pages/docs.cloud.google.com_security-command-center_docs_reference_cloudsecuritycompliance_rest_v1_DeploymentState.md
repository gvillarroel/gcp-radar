---
title: "DeploymentState \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/DeploymentState
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/reference/cloudsecuritycompliance/rest/v1/DeploymentState
  title: "DeploymentState \_|\_ Security Command Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Reference
Send feedback
DeploymentState
Stay organized with collections
Save and categorize content based on your preferences.
The state of the deployment resource.
Enums
DEPLOYMENT_STATE_UNSPECIFIED
Default value. This value is unused.
DEPLOYMENT_STATE_VALIDATING
Validating the deployment.
DEPLOYMENT_STATE_CREATING
Deployment is being created.
DEPLOYMENT_STATE_DELETING
Deployment is being deleted.
DEPLOYMENT_STATE_FAILED
Deployment has failed. All the changes made by the deployment were successfully rolled back. You can retry or delete a deployment that's in this state.
DEPLOYMENT_STATE_READY
Deployment is successful and ready to use.
DEPLOYMENT_STATE_PARTIALLY_DEPLOYED
Deployment is partially deployed. All the cloud controls weren't deployed successfully. Retrying the operation resumes from the first failed step.
DEPLOYMENT_STATE_PARTIALLY_DELETED
Deployment is partially deleted. All the cloud control deployments weren't deleted successfully. Retrying the operation resumes from the first failed step.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-15 UTC."],[],[]]
