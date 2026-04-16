---
title: "About environment scaling \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/cross-project-environment-monitoring-terraform
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/environment-scaling
  title: "About environment scaling \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
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
Composer 1 Guides
Send feedback
About environment scaling
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how environment scaling works.
Other pages about scaling:
For information about scaling your environments, see
Scale environments .
Resizable environments
Cloud Composer 1 has environments that run a constant number of workers.
When you create an environment, you specify the number of nodes. This number
corresponds to the number of workers in your environment.
Cloud Composer distributes load between all workers in your
environment. In addition to running Airflow workers, your environment nodes
also run schedulers and other environment components.
You can scale your environment by changing the number of nodes in your
environment.
Scale and performance parameters
You can control the scale and performance parameters of your environment by
adjusting the machine types used by the Airflow database and web server
components of your environment. By doing so you can scale your environment
vertically, in addition to the horizontal scaling provided by the number of
nodes setting. You can adjust machine types of the Airflow database and web
server at any time.
You set the machine type for environment nodes when you create an environment.
You cannot change this parameter later. It means that you cannot scale Airflow
workers vertically in Cloud Composer 1.
Multiple schedulers
If your environment uses Airflow 2, You can specify a number of schedulers up
to the number of nodes in your environment.
For more information about configuring the number of schedulers
for your environment, see
Scale environments .
Database disk space
Disk space for the Airflow database automatically increases to accommodate the
demand.
What's next
Scale environments
Cloud Composer pricing
Create environments
Environment architecture
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
