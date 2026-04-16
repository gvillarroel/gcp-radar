---
title: "Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/access-control
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture
  title: "Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
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
Environment architecture
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes the architecture of Cloud Composer environments.
Environment architecture configurations
Cloud Composer 1 environments can have the following architecture
configurations:
Public IP architecture
Private IP architecture with VPC peerings
Private IP with Domain restricted sharing (DRS) architecture
Customer and tenant projects
When you create an environment, Cloud Composer distributes the
environment's resources between a tenant and a customer project:
Customer project is a Google Cloud project where you create your
environments. You can create more than one environment in a single customer
project.
Tenant project is a Google-managed tenant project and
belongs to the Google.com organization. The tenant project provides unified
access control and an additional layer of data security to your
environment. Each Cloud Composer environment has its own tenant
project.
Environment components
A Cloud Composer environment consists of environment components.
An environment component is an element of a managed Airflow infrastructure
that runs on Google Cloud, as a part of your environment. Environment
components run either in the tenant or in the customer project of
your environment.
Environment's cluster
Environment's cluster is a Standard mode
VPC-native or
Routes-based Google Kubernetes Engine cluster of your
environment:
Caution: Do not introduce changes in the environment's cluster. Clusters
for Cloud Composer and workloads deployed into them are managed by
Google. It is possible to change the configuration of your environment's
cluster, but doing so might break your environment. If you delete an
environment's cluster, it cannot be restored; you must delete the environment
and create a new environment.
By default, Cloud Composer enables
node auto-upgrades and node auto-repair
to protect your environment's cluster from security vulnerabilities. These
operations happen during maintenance windows that you specify for your
environment.
Environment's bucket
Environment's bucket is a Cloud Storage bucket
that stores DAGs, plugins, data dependencies, and Airflow logs. Environment's
bucket is located in the customer project.
When you upload your DAG files to the /dags folder in your
environment's bucket, Cloud Composer synchronizes the DAGs to Airflow components of your environment.
Note: Because of a service restriction on App Engine, the data/
and logs/ folders are not available to the Airflow web server.
Airflow web server
Airflow web server runs the Airflow UI of your environment.
In Cloud Composer 1, Airflow web server runs in the tenant project
of your environment.
The Airflow web server is integrated with Identity-Aware Proxy.
Cloud Composer hides the IAP integration
details, and provides access to the web server based on user identities
and IAM policy bindings defined for users.
In Cloud Composer 1, the Airflow web server run on a different service account
than Airflow workers and Airflow schedulers. The service account for web server
is auto-generated during the environment creation and is derived from the web
server domain. For example, if the domain is example.appspot.com , the
service account is example@appspot.gserviceaccount.com .
Airflow database
Airflow database is a Cloud SQL instance
that runs in the tenant project of your environment. It hosts the Airflow
metadata database.
To protect sensitive connection and workflow information,
Cloud Composer allows database access only to
the service account of your environment.
Other airflow components
Other Airflow components that run in your environment are:
Airflow schedulers parse DAG definition files, schedule DAG runs
based on the schedule interval, and queues tasks for execution by
Airflow workers.
In Cloud Composer 1
Airflow DAG processors run as a part of scheduler components.
Airflow workers execute tasks that are scheduled by Airflow
schedulers.
Public IP environment architecture
Figure 1. Public IP environment architecture (click to enlarge)
In a Public IP environment architecture for Cloud Composer 1:
The tenant project hosts a Cloud SQL instance,
Cloud SQL storage, and a App Engine Flex instance that
runs the Airflow web server.
The customer project hosts all other components of the environment.
Airflow schedulers and workers in the customer project communicate with the
Airflow database through a Cloud SQL proxy instances located in
the customer project.
Airflow web server in the tenant project communicates with the Airflow
database through a Cloud SQL proxy instance located in the
tenant project.
Private IP environment architecture
Figure 2. Private IP environment architecture (click to enlarge)
In a Private IP environment architecture:
The tenant project hosts a Cloud SQL instance,
Cloud SQL storage, and two App Engine instances
that run the Airflow web server.
The customer project hosts all other components of the environment.
Airflow schedulers and workers connect to the Airflow database through
the HAProxy process in the environment's cluster.
The HAProxy process load balances traffic to the Cloud SQL
instance between two Cloud SQL Proxy instances that are
located in the tenant project. Private IP environments use two Cloud SQL Proxy instances because the customer project does not
access the database directly due to network limitations. Two instances
are needed to ensure that components of your environment have access to
the database at all times.
Private IP with DRS
Figure 3. Private IP environment architecture (click to enlarge)
If the Domain Restricted Sharing (DRS) organizational policy
is turned on in your project, then Cloud Composer uses the Private IP
with DRS environment architecture.
In the Private IP with DRS environment architecture:
The tenant project hosts a Cloud SQL instance,
Cloud SQL storage, and two App Engine instances that
run the Airflow web server.
The tenant project hosts an additional environment's bucket . Airflow web
server accesses this bucket directly.
The customer project hosts all other components of the environment.
The customer project hosts the Bucket Syncing process in
the environment's cluster. This process synchronizes two environment
buckets.
Airflow schedulers and workers connect to the Airflow database through
the HAProxy process in the environment's cluster.
The HAProxy process load balances traffic to the Cloud SQL
instance between two Cloud SQL Proxy instances that are
located in the tenant project. Private IP environments use two Cloud SQL Proxy instances because the customer project does not
access the database directly due to network limitations. Two instances
are needed to ensure that components of your environment have access to
the database at all times.
Integration with Cloud Logging and Cloud Monitoring
Cloud Composer integrates with Cloud Logging and
Cloud Monitoring of your Google Cloud project, so that you have a
central place to view Airflow and DAG logs .
Cloud Monitoring collects and ingests metrics, events, and metadata
from Cloud Composer to
generate insights through dashboards and charts .
Because of the streaming nature of Cloud Logging, you can view logs emitted by Airflow components immediately instead of waiting for Airflow logs to appear in the Cloud Storage bucket of your environment.
To limit the number of logs in your Google Cloud project,
you can stop all logs ingestion . Do not
disable Logging.
What's next
Create an environment
Versioning overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
