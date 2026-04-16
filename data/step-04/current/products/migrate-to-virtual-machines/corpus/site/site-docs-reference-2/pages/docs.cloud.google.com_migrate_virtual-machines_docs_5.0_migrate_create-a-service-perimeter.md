---
title: "Secure your migrations in a service perimeter \_|\_ Migrate to Virtual Machines\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-service-perimeter
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/create-a-service-perimeter
  title: "Secure your migrations in a service perimeter \_|\_ Migrate to Virtual Machines\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Secure your migrations in a service perimeter
Stay organized with collections
Save and categorize content based on your preferences.
VPC Service Controls helps you reduce the risk of unauthorized copying or transfer
of data from your Google-managed services.
With VPC Service Controls, you can configure service perimeters around the
resources of your Google-managed services and control the movement of data
across the perimeter boundary.
Create a service perimeter
To create a service perimeter, follow the
VPC Service Controls guide to creating a service perimeter .
When you specify which services you want to restrict, make sure to add all of the
following services:
VMMigration API ( vmmigration.googleapis.com )
Pub/Sub API ( pubsub.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
Cloud Logging API ( logging.googleapis.com )
Secret Manager API ( secretmanager.googleapis.com )
Compute Engine API ( compute.googleapis.com )
Your service perimeter must restrict all these services in order for
Migrate to Virtual Machines to work with VPC Service Controls.
You should ensure the project in which you enabled the VMMigration API with the
Target Projects are included in the perimeter.
Configure your Migrate Connector in a VPC-SC enabled environment
In an environment that employs VPC-SC, you need to make sure that your Migrate
Connector can communicate with the Google Cloud APIs.
You can allow your Migrate Connector to access the VPC-SC environment using
several methods. Your available methods depend on the configuration of the
VPC-SC environment and whether your Migrate Connector network traffic is
routed privately or publicly:
If your Migrate Connector network traffic is routed to
Google Cloud using VPN or interconnect to the project VPC-SC, see
the VPC-SC private connectivity documentation.
If your Migrate Connector network traffic is routed using a public
network, see the VPC-SC overview documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
