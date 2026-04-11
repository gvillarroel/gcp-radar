---
title: "Deleting deployments \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/deployments/deleting-deployments
  title: "Deleting deployments \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Deleting deployments
Stay organized with collections
Save and categorize content based on your preferences.
When you delete a deployment, all resources that are part of the deployment are
also deleted.
If you want to delete specific resources from your deployment and keep the rest,
delete those resources from your configuration file, and
update the deployment
instead.
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Deleting deployments
Warning: You cannot undo this operation.
If you want to delete a deployment, but keep all the underlying resources, you
must use the Google Cloud CLI or the API.
Console
In the Google Cloud console, open the Deployments page.
Go to the Deployments page
In the list of deployments, select the check boxes for the deployments
that you want to delete.
On the top of the page, click Delete .
gcloud
With gcloud , use the deployments delete command:
gcloud deployment-manager deployments delete example-deployment --delete-policy= POLICY
Where POLICY is the delete policy .
gcloud returns a response similar to the following:
Waiting for delete operation operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d to complete...done.
Delete operation operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d completed successfully.
endTime: '2014-11-05T16:19:03.253-08:00'
id: '5642095755656583573'
name: operation-1415233139561-2d5dd654-f438-4d15-87e3-4b5b8ca68c5d
operationType: delete
startTime: '2014-11-05T16:19:02.669-08:00'
status: DONE
targetLink: https://www.googleapis.com/deploymentmanager/v2beta1/projects/myproject/global/deployments/example-deployment
API
In the API, provide an empty DELETE request to the following URL:
DELETE https://www.googleapis.com/deploymentmanager/v2beta1/projects/myproject/global/deployments/example-deployment?deletePolicy= policy
Replace myproject with the name of your project, example-deployment
with the name of the deployment, and policy with the delete policy,
described below.
Select a delete policy
The delete policy you use determines how the resources in the deployment
are handled. You can use one of these policies:
DELETE [Default] : Deletes the underlying resource. This is
permanent and cannot be undone.
ABANDON : This deletes the deployment, but does not delete the
underlying resources. For example, if you have a VM instance in the
deployment, it will still be available for you to use after the
deployment is deleted.
If you need to re-create a deployment that you deleted, you can use the original
configuration file. However, the deployment is considered a new deployment, with new resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
