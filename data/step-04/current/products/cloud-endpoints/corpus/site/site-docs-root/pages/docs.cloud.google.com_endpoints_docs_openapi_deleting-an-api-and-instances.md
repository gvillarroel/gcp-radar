---
title: "Deleting an API and API instances \_|\_ Cloud Endpoints with OpenAPI \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/deleting-an-api-and-instances
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/deleting-an-api-and-instances
  title: "Deleting an API and API instances \_|\_ Cloud Endpoints with OpenAPI \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Endpoints
OpenAPI
Send feedback
Deleting an API and API instances
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
Cloud Endpoints uses the
Extensible Service Proxy (ESP)
and Service Management to manage your API. When you deployed your
OpenAPI document by using the gcloud endpoints services deploy command, the
command used Service Management to create a managed service for your API.
To delete your API you need to:
Delete the instance that ESP and your API backend is running on.
Delete the managed service that was created for your API.
The easiest way to do both of these tasks is to delete the Google Cloud
project that your API is in. If you want to preserve your
Google Cloud project, then you need to delete the instance and the managed
service.
Note: If you encounter issues with Google Cloud project deletion, refer to the troubleshooting section for resolution.
Deleting instances
App Engine
To delete an instance running in the App Engine flexible environment:
You can either disable the application on the App
Engine Settings page in the Google Cloud console, or
you can delete the Google Cloud project. See Disabling
an application and shutting down a project for more information.
Compute Engine
Use the gcloud compute instances delete
command. When you delete an instance in this way, the instance shuts down and
is removed from the list of instances, and all resources attached to the
instance are released, such as persistent disks and any static IP addresses.
To delete an instance, use the following command:
gcloud compute instances delete [ INSTANCE_NAME ] --zone = [ZONE]
For more information on deleting Compute Engine instances, see the
Compute Engine documentation .
GKE
To delete a GKE cluster with the Google Cloud CLI:
gcloud container clusters delete [ NAME ] --zone [ZONE]
Replace [NAME] with the name of your cluster and
[ZONE] with the compute zone that the cluster is in.
For more information on deleting a GKE cluster, see the
GKE documentation .
Deleting the managed service
If you don't need the data on the Endpoints Services page and in the
Produced API log on the Logs Explorer page, you can delete the managed
service for your API, which removes the data from the Google Cloud console.
To delete the managed service:
Make sure that the gcloud CLI ( gcloud ) is authorized to access your
data and services on Google Cloud:
gcloud auth login
Enter the following to display the project IDs for your Google Cloud
projects:
gcloud projects list
Using the applicable project ID from the previous step, set the default
Google Cloud project to the one that your application is in:
gcloud config set project [ YOUR_PROJECT_ID ]
Obtain the name of all managed services in your Google Cloud project:
gcloud endpoints services list
Delete the service from Service Management. Replace
SERVICE_NAME with the name of the service you want
to remove.
gcloud endpoints services delete SERVICE_NAME
Running gcloud endpoints services delete doesn't immediately delete the
managed service. Service Management disables the managed service for
30 days, which allows you time to restore it if you need to. After 30 days,
Service Management permanently deletes the managed service.
What's next
To restore a managed service, see
Restoring a managed service .
For information on the gcloud commands used on this page, see the
gcloud reference .
For information on Service Management, see
Creating and deleting managed services .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
