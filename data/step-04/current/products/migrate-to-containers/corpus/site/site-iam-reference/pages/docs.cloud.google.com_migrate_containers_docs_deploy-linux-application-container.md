---
title: "Deploy a Linux application container \_|\_ Migrate to Containers \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/deploy-linux-application-container
  title: "Deploy a Linux application container \_|\_ Migrate to Containers \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy a Linux application container
This page describes how to prepare your cluster for deployment, and how to
deploy your Linux application containers using Skaffold.
Note: Using Skaffold is the recommended approach, but is not required.
You can also build directly with
docker build and apply the changes with
kubectl .
Skaffold handles the workflow for building, pushing, and deploying your
application.
Linux, Tomcat, WebSphere, JBoss, Apache, and WordPress support Skaffold
artifact creation by default.
If you use Cloud Shell, Skaffold is already installed. If you need to install
Skaffold, see Installing Skaffold .
Before you begin
Complete the migration and have the resulting generated artifacts.
Create the cluster where you want to deploy your workload. For more
information, see:
Creating a zonal cluster
Creating a regional cluster
Creating an Autopilot cluster
Set up kubectl and connect to the cluster .
Choose and set up your Docker registry
As part of your deployment, you build and upload the Docker image of your
container to a Docker registry.
For the Docker registry you can choose to use:
Artifact Registry
Any Docker registry that supports basic authentication
The recommended solution is to use Artifact Registry
in the same project of the deployment cluster.
GKE can access the registry by default.
For more information, see the requirements to integrate with
GKE .
If you want to use you a private Docker registry, learn
how to configure the registry .
Use Skaffold with Linux-based workloads
The skaffold.yaml file is at the root folder of the generated artifacts.
To learn how to edit the skaffold.yaml file, see the
Skaffold file reference .
To build and deploy your container, from the root folder of the generated
artifacts, run the following command:
skaffold run -d REPOSITORY_PATH
Replace REPOSITORY_PATH with the path to your artifact repository.
For example,
us-central1-docker.pkg.dev/ PROJECT_ID / REPOSITORY_NAME .
This command builds the image, uploads it to the selected repository,
and then deploys it to the default cluster.
To run Skaffold while building using Cloud Build, use the
following command:
skaffold run -d REPOSITORY_PATH -p cloudbuild
What's next
Learn how to monitor migrated workloads .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
