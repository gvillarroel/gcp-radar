---
title: "Using Google Cloud CLI with Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/gcloud-installation
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-versions
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/gcloud-installation
  title: "Using Google Cloud CLI with Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Reference
Send feedback
Using Google Cloud CLI with Cloud Composer
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to get started using Google Cloud CLI with
Cloud Composer environments.
Before you begin
Google Cloud CLI uses Cloud Composer API to run
gcloud composer commands, so you must
enable the API .
Install Google Cloud CLI on your local client.
Getting started with the gcloud command-line tool
You can manage and access Cloud Composer environments
with gcloud composer commands provided by
Google Cloud CLI .
To start with the gcloud tool, review
the Google Cloud CLI documentation .
You can get help for the tool, resources, and commands by using the --help
flag:
gcloud composer environments --help
The help displayed with the --help flag is also available in the
Google Cloud CLI reference for gcloud composer .
Setting the default project and location in your local client
Most gcloud composer commands require a location. You can specify the
location by using the --location flag or by setting the default location.
To set the default project and location for Cloud Composer:
Set the default project by running the following command:
gcloud config set project PROJECT_ID
Replace the following:
PROJECT_ID : the Project ID of the
project where your Cloud Composer environment is located.
Configure the Cloud Composer location by running the following
command:
gcloud config set composer/location LOCATION
Replace the following:
LOCATION : the region where the environment is located, such as
us-central1 or europe-west1 .
(Optional) To list the configuration for Google Cloud CLI, you can run the
following command:
gcloud config list
What's next
Add and update Airflow DAGs
gcloud composer reference
gcloud beta composer reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
