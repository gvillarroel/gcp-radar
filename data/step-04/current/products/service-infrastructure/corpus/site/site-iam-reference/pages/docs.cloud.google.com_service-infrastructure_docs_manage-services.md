---
title: "Managing Service Lifecycles \_|\_ Service Infrastructure \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/manage-services
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/manage-services
  title: "Managing Service Lifecycles \_|\_ Service Infrastructure \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Guides
Send feedback
Managing Service Lifecycles
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to manage the lifecycles of
managed services using the Google Cloud CLI
gcloud endpoints services
commands.
For advanced use cases, you can use the Service Management API
to manage services programmatically. For more information, see
Getting Started with the Service Management
API
Introduction
A managed service
is a simple resource that logically represents a service integrated with Service
Infrastructure, such as Gmail API and Spanner API. A managed service itself
has only two immutable properties, a service name and a producer project ,
but the implementation of a managed service can provide a wide range of
functionality. For example, Cloud Storage API provides
planet-scale object storage for millions of developers and enterprises.
A managed service has a set of
service consumers ,
a history of immutable
service configurations ,
and a history of immutable
service rollouts .
The service configurations referenced by the latest service rollout represents
the current state of the service, which covers all aspects of the service, from
the display name to metrics definitions to rate limits. For the specification,
see
google.api.Service .
We will describe how to create and manage your service lifecycles in this page.
For more information about the service management, see
How-to Guides .
Creating a service
To create a service, you need to complete the following steps.
Install and initialize
gcloud CLI on your
computer.
Create a dedicated producer project to host your service. A dedicated
project provides the best security and isolation for your service.
It also allows you to transfer the ownership of your service to another
team or even another company.
Enable the Service Management API and Service Control API for your project.
Enable Cloud Billing for your project. To integrate your service with
Service Infrastructure, you will depend on several paid Google Cloud
products, including the Service Control API, Cloud Logging API, and
Cloud Monitoring API.
Prepare a simple service configuration yaml file for your service
as follows:
# Filename : endpointsapis . yaml
type : google . api . Service
config_version : 3
# Update the next line to use your own service name .
name : endpointsapis . appspot . com
# Update the next line to use your own producer project id .
producer_project_id : endpointsapis
Run gcloud command to create your service by deploying a blank service
configuration:
gcloud endpoints services deploy endpointsapis.yaml
The service creation process takes about a minute. After that, you should be
able to see your service listed on the
Endpoints page
in Google Cloud console.
Listing services
To list services in a project, you can use the following command:
gcloud endpoints services list --project endpointsapis
Describing a service
To describe a service and its configuration, you can use the following command:
gcloud endpoints services describe endpointsapis.appspot.com
Deleting a service
If you no longer need a service, you can delete it using the following command:
gcloud endpoints services delete endpointsapis.appspot.com
NOTE: Every service has a mandatory 30-day deletion retention.
Undeleting a service
You can undelete a service within its retention window using the following
command:
gcloud endpoints services undelete endpointsapis.appspot.com
Next steps
The Service Management API uses a declarative model for service management.
After the service is created, you need to push immutable service
configurations and service rollouts to reach the desired state
of your service. Your service configurations are used to configure
Google Cloud infrastructure services to support your service,
including Cloud Billing, Cloud Logging, Cloud Monitoring, and
Identity and Access Management.
For more information about service configurations, see
Managing Service Configurations .
For more information about service rollouts, see
Managing Service Rollouts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
