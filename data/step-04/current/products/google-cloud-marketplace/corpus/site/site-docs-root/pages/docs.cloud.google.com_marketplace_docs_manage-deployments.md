---
title: "Managing deployments \_|\_ Google Cloud Marketplace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/manage-deployments
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/manage-deployments
  title: "Managing deployments \_|\_ Google Cloud Marketplace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Guides
Send feedback
Managing deployments
Stay organized with collections
Save and categorize content based on your preferences.
After you launch deployments from Cloud Marketplace, you can
use Google Cloud tools to view, modify, and monitor your deployment.
For example, you can use Cloud Deployment Manager
to add resources to a deployment, or remove software deployments that you no
longer need.
Note: When you deploy a VM solution from Cloud Marketplace,
the deployment is created with several default labels , which are a way to organize
your deployments. Typically, the labels include a solution ID, and the
partner ID. One of the labels is marketplace-suppress-benign-warnings ,
which blocks warnings that are typically not relevant for
Cloud Marketplace solutions.
If you want to see the warnings, remove the label from the deployment.
For information about labels in your deployments, see
Adding labels to a deployment .
Managing your deployments
Return to your products by revisiting the page for the product on the
Cloud Marketplace page.
From there, you'll see a dropdown that shows your previous
deployments. For services, you can update service options directly from
the Cloud Marketplace product page.
Otherwise, if your deployment is running a VM instance, you can use
Deployment Manager to manage your
deployments. It displays a tree view of all the Google Cloud
resources that
comprise your deployment, as well as letting you SSH directly into
your VM instance or manage the instance from the
VM Instances page . From either
of those pages you can connect to the individual instances to manually
install additional software or modify the software packages. (You
cannot deploy multiple products to a single instance.)
Use Cloud Monitoring to track the performance and
availability of your cloud-powered apps. If a deployment is integrated
with Cloud Monitoring, the instances for that product already include
monitoring agents that provide product-specific dashboards and alerts.
Updating your deployments
To update a software package included in a deployment, deploy a newer version
of the product from the Product Details page in
Cloud Marketplace .
For example, if you deployed a LAMP stack that runs on an older version of
PHP and you want to update that instance of PHP, open the LAMP Stack
Product Details page and
deploy a version of the product
that includes an updated version of PHP.
Modifying and scaling your deployments
After your software package is deployed, you might need to add additional
storage, create additional instances, or include additional software on your
existing instances. To learn more, refer to the following Compute Engine
topics.
Create additional instances
Connect Cloud Storage to instances
Add persistent disks to your instances
Managing logging and monitoring for your deployment
Some Cloud Marketplace apps include the Cloud Logging and
Cloud Monitoring agents, which collect metrics, events, and metadata from
your deployment.
Depending on the volume of monitoring data that your deployment uses, you might
exceed the free usage allotment, after which you are charged for using
Monitoring and Logging.
If you want to disable Monitoring and Logging,
do the following:
For each VM instance in your deployment, run the following gcloud command
to disable Cloud Monitoring:
gcloud compute instances add - metadata [ YOUR_INSTANCE_NAME ] \
--metadata google-monitoring-enable=0,google-logging-enable=0
Sign in to each of your VMs using SSH, and restart the
agents using the following commands:
sudo service stackdriver-agent restart
sudo service google-fluentd restart
For tips on controlling your costs, see the
pricing information .
Removing your software deployments
If you decide you no longer need your software deployments, you can remove
them.
To remove a deployment:
Go to Deployment Manager and
delete the individual deployment. When you delete a deployment, it removes all
of the instances of that deployment, and any persistent disks that you created
when you first launched the deployment.
Some software packages require you to use Cloud Storage resources which do
not get deleted when you delete your deployment. You can view and delete those
resources on the
Cloud Storage browser in the
Google Cloud console.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
