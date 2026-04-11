---
title: "Deploying container images from Google Cloud Marketplace to Kubernetes or\
  \ Docker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/container-images
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/container-images
  title: "Deploying container images from Google Cloud Marketplace to Kubernetes or\
    \ Docker \_|\_ Google Cloud Documentation"
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
Deploying container images from Google Cloud Marketplace to Kubernetes or Docker
Stay organized with collections
Save and categorize content based on your preferences.
This page is a supplemental guide to the container readme for each
Google Cloud Marketplace container product .
It provides additional information for deploying a container to a
brand new Google Kubernetes Engine cluster or to a local Minikube cluster.
It also provides links for using Docker.
As of July 18, 2018, the container registry
launcher.gcr.io and its alias l.gcr.io are deprecated.
Docker images in launcher.gcr.io remain available, but are
no longer updated.
If you are currently pulling images from launcher.gcr.io , you
must:
Change all your references to marketplace.gcr.io .
Set up authentication for Container Registry, using the
following command:
gcloud auth configure-docker
Deploy a container
The following sections describe how to deploy to Kubernetes and to Docker.
Deploy to Kubernetes
There are two methods to deploy containers to Kubernetes. You can deploy to
Google Kubernetes Engine, or locally to your machine using Minikube. Both methods are
described below.
Deploy to Google Kubernetes Engine
Install the required tools
Follow the steps in the
Quickstart for Google Kubernetes Engine .
These steps will help you setup your environment with gcloud and kubectl .
Verify that kubectl can connect to the clusters
After your environment is set up, verify kubectl can reach the clusters you
created. You can run the following to see if your nodes are running:
kubectl get nodes
Follow the getting started documentation for the container in the
Kubernetes section
Each container product on Cloud Marketplace contains a getting
started guide. You can access the container getting started document by
selecting the container you want to deploy from
the Google Cloud console ,
and then clicking the Get Started with { product name } button near
the top of the page.
Deploy to Minikube
Install the required tools
Follow the steps in the
Minikube Setup guide .
These steps will help you setup a local Minikube environment. After
minikube start in the linked instructions, you can then follow the
instructions below.
Verify that kubectl can connect to the clusters
While Minikube is running (after running minikube start ), you can use the
following command to check if your nodes are running:
kubectl get nodes
Follow the getting started documentation for the container in the Kubernetes section
Each container product on Cloud Marketplace contains a getting
started guide. You can access the container getting started document by
selecting the container you want to deploy from
the Google Cloud console ,
and then clicking the Get Started with [product_name] button
near the top of the page.
Deploy to Docker
Install Docker
To deploy a container to Docker, first install Docker on your local machine
or virtual machine. The Docker installation guide is available from the
Docker website .
Follow the steps in the getting started guide
Each container product on Cloud Marketplace contains a getting
started guide. You can access the container's getting started guide by
selecting the container you want to deploy from
the Google Cloud console
and then clicking the Get Started with [product_name] button near
the top of the page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
