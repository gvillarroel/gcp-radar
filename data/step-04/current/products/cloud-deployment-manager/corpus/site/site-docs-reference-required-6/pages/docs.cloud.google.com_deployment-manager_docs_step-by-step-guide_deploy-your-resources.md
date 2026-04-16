---
title: "Deploying Your Resources \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/configuration/create-basic-configuration
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/deploy-your-resources
  title: "Deploying Your Resources \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
    \ Documentation"
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
Deploying Your Resources
Stay organized with collections
Save and categorize content based on your preferences.
Now that you have a
configuration ,
you can use it to create a deployment. A deployment creates the resources that
you defined in a configuration. In this tutorial, your deployment has two
virtual machine (VM) instances.
To deploy your configuration, run this command:
gcloud deployment-manager deployments create deployment-with-2-vms --config two-vms.yaml
Wait for the indication that you successfully created the deployment (note that
your actual operation ID will differ):
Waiting for create operation-1432319707382-516afeb5d00f1-b864f0e7-b7103978...done.
Create operation operation-1432319707382-516afeb5d00f1-b864f0e7-b7103978 completed successfully.
NAME TYPE STATE ERRORS INTENT
the-first-vm compute.v1.instance COMPLETED []
the-second-vm compute.v1.instance COMPLETED []
You have created a deployment! To get a list of resources you created, run:
gcloud deployment-manager resources list --deployment deployment-with-2-vms
To get more detailed information about the deployment, such as the start and end
time, and the operation ID if you need to debug a deployment, run:
gcloud deployment-manager deployments describe deployment-with-2-vms
In this example, you created some static configurations that were hard-coded.
In future configurations, you might want to create more dynamic configurations
using variables and reusable templates. Follow the rest of this guide to
learn how to make this static configuration much more dynamic and useful.
View your deployment in the Google Cloud console interface
You can also view an expanded list of all your deployments in the
Google Cloud console , Google Cloud's graphical interface. To do so:
Go to the Deployments page in the
Google Cloud console.
Expand your deployment to see the associated resources.
You can open this page at any time to see your deployments in a visual tree.
With more complicated deployments, this page can help you
understand the hierarchy of resources in your deployment.
Delete your deployment
You won't use this deployment for the remainder of the tutorial. Since
Compute Engine resources incur charges, you should delete this
deployment. Deleting a deployment also deletes all the resources in a deployment.
If you don't delete the deployment, you will run into conflicts with future examples.
To delete this deployment, run:
gcloud deployment-manager deployments delete deployment-with-2-vms
Next, you will use references to access the properties of other resources
in your deployment.
Previous
arrow_back
Understanding configurations
Next
Understanding references
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
