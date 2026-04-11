---
title: "Overview \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/overview
  title: "Overview \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Cortex Framework
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Overview
Google Cloud Cortex Framework provides reference architectures, deployable solutions, and
packaged implementation services to kickstart your
Data and AI Cloud journey. Everything you need to rapidly
design, build, and deploy data and AI solutions for your business.
Cortex Framework focuses on solving specific problems and offers pre built
solutions for business areas like Marketing, Sales, Supply Chain, Manufacturing,
Finance, and Sustainability. For more information, see
Data sources and workloads .
Google Cloud integration
Cortex Framework builds on top of Google Cloud tools to provide a
unified environment for managing your entire data journey. The following diagram
describes how Cortex Framework uses various
components to provide a unified platform for storing, managing, and analyzing
data from diverse data sources:
Figure 1 . Google Cloud Cortex Framework Technical Stack.
Multiple tools are responsible for extracting, transforming, and
loading (ETL) data from various sources into the database for later
visualization and analysis. Depending on the needs of your business, you
can use some of the following:
Data Storage
Cloud Storage : for storing data from
other data sources.
BigQuery : serverless, managed data warehouse
for storing and analyzing large datasets. Cortex Framework uses
BigQuery for storing raw, transformed, and reporting data.
Secret Manager : secure storage service for sensitive information like passwords, API keys, and certificates. Cortex Framework uses
Secret Manager to protect your sensitive data and ensure its
responsible use within your data and AI projects.
Data Integration and Processing
Cloud Build : service that automates building,
testing, and deploying your software. Cortex Framework uses Cloud Build for
customizing and deploying pre built solutions.
Dataflow : managed service for building and running
data pipelines. Cortex Framework uses Dataflow to automate certain data ingestion,
transformation, and loading tasks.
Cloud Composer : managed orchestration service
for workflows. Cortex Framework uses Cloud Composer to manage and schedule
complex data pipelines.
Data Transformation and Analysis
BigQuery : serverless environment
for building and deploying datasets within
BigQuery. Cortex Framework uses BigQuery
for data transformations.
Managed Service for Apache Spark : managed Hadoop and Spark service for large-scale
data processing. While less common for Cortex Framework's pre built solutions,
Managed Service for Apache Spark could be used for custom data processing needs.
Looker : business intelligence platform for data
exploration and visualization. Cortex Framework integrates with Looker
to provide user-friendly dashboards and reports.
ML and AI
Vertex AI : unified platform for building,
training, deploying, and managing models. Cortex Framework might use prebuilt
Vertex AI components within its solutions.
Data Foundation
The Cortex Framework Data Foundation defines the structure and organization of the data to
ensure consistency and facilitate data analysis across different applications.
Cortex Framework simplifies data management, streamlines development,
and offers prebuilt solutions for various business domains through its Data Foundation.
Data Foundation incorporates tools and services that help
ingest, transform, and load data.
Marketing, operations, and sustainability are all business areas that can be
benefited from Cortex Framework. It includes predefined workloads
that can be used to collect, analyze, and use data. Data can come
from various data sources such as Salesforce Marketing Cloud, some Google
platforms (like Google Ads and CM360), TikTok, Meta, SAP, and more.
For more information, see the Data sources and workloads .
Deployment
For Cortex Framework deployment instructions, see the following guides:
Quickstart Demo : a quickstart demo
to test the Cortex Framework set up process with sample data with
in just a few clicks.
Deployment steps : after reading the
prerequisites for Cortex Framework Data Foundation
deployment, follow the steps for deployment in production environments:
Establish workloads .
Clone repository .
Determine integration mechanism .
Set up components .
Configure deployment .
Execute deployment .
Support
In case of any requests or issues, you can reach out directly to the
Cortex Framework team by creating a new ticket in our support channel:
Go to our support channel
to create a new support case.
Optional : Add the email addresses of people that should also receive updates.
Submit the ticket to our team by clicking Create .
For all other questions, contact the
Cortex Framework team .
For more information about our support channel, take a look at the available
resources:
User's guide
FAQ
Terms of Service
What's next?
See Cortex Framework Data Foundation
repository in GitHub.
For information about data sources and workloads available in Cortex Framework,
see Data sources and workloads .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
