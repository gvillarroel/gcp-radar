---
title: "Cloud Composer overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/composer-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-3/access-control
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/composer-overview
  title: "Cloud Composer overview \_|\_ Google Cloud Documentation"
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
Cloud Composer overview
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page provides a brief introduction to Airflow and DAGs, and describes the
features and capabilities of Cloud Composer.
For more information about new features in Cloud Composer releases,
see Release notes .
About Cloud Composer
Cloud Composer is a fully managed workflow orchestration service,
enabling you to create, schedule, monitor, and manage workflow pipelines
that span across clouds and on-premises data centers.
Cloud Composer is built on the popular
Apache Airflow open source project and
operates using the Python programming language.
By using Cloud Composer instead of a local instance of Apache
Airflow, you can benefit from the best of Airflow with no installation or
management overhead. Cloud Composer helps you create managed Airflow
environments quickly and use Airflow-native tools, such as the powerful
Airflow web interface and command-line tools, so you can focus on your
workflows and not your infrastructure.
Differences between Cloud Composer versions
For more information about differences between major versions of
Cloud Composer, see
Cloud Composer versioning overview .
Airflow and Airflow DAGs (workflows)
In data analytics, a workflow represents a series of tasks for ingesting,
transforming, analyzing, or utilizing data. In Airflow, workflows are created
using DAGs, or "Directed Acyclic Graphs".
Figure 1. Relationship between DAGs and tasks
A DAG is a collection of tasks that you want to schedule and run, organized
in a way that reflects their relationships and dependencies. DAGs are created
in Python files, which define the DAG structure using code. The DAG's
purpose is to ensure that each task is executed at the right time
and in the right order.
Each task in a DAG can represent almost anything—for example, one task
might perform any of the following functions:
Preparing data for ingestion
Monitoring an API
Sending an email
Running a pipeline
In addition to running a DAG on a schedule, you can trigger DAGs manually or
in response to events, such as changes in a Cloud Storage
bucket. For more information, see Schedule and trigger DAGs .
For more information about DAGs and
tasks, see the
Apache Airflow documentation .
Cloud Composer environments
Cloud Composer environments are self-contained Airflow
deployments based on Google Kubernetes Engine. They work with other Google Cloud
services using connectors built into Airflow. You can
create one or more environments in a single Google Cloud
project, in any supported region .
Cloud Composer provisions Google Cloud services that run
your workflows and all Airflow components. The main components of an
environment are:
GKE cluster : Airflow components such as Airflow
schedulers, triggerers, and workers run as GKE workloads
in a single cluster created for your environment, and are responsible for
processing and executing DAGs.
The cluster also hosts
other Cloud Composer components like Composer Agent
and Airflow Monitoring, which help manage the Cloud Composer
environment, gather logs to store in Cloud Logging, and gather
metrics to upload to Cloud Monitoring.
Airflow web server : The web server runs the Apache Airflow UI.
Airflow database : The database holds the Apache Airflow metadata.
Cloud Storage bucket : Cloud Composer associates
a Cloud Storage bucket with your environment.
This bucket, also called environment's bucket , stores the
DAGs , logs , custom
plugins ,
and data for the environment. For more information about the environment's
bucket see
Data stored in Cloud Storage .
For an in-depth look at the components of an environment, see
Environment architecture .
Cloud Composer interfaces
Cloud Composer provides interfaces for managing environments,
Airflow instances that run within environments, and individual DAGs.
For example, you can create and configure
Cloud Composer environments in Google Cloud console,
Google Cloud CLI, Cloud Composer API , or Terraform.
As another example, you can manage DAGs from
Google Cloud console, native Airflow UI , or by running
Google Cloud CLI and Airflow CLI commands .
Airflow features in Cloud Composer
When using Cloud Composer, you can manage and use Airflow features
such as:
Airflow DAGs : You can add, update, remove, or trigger
Airflow DAGs in Google Cloud console or using the native Airflow UI.
Airflow configuration options : You can change Airflow
configuration options from default values used by
Cloud Composer to custom values. In
Cloud Composer, some of the configuration options are
blocked , and you cannot change their values.
Airflow connections .
Airflow UI .
Airflow CLI .
Custom plugins : You can install
custom Airflow plugins , such as
custom, in-house Apache Airflow operators, hooks,
sensors, or interfaces, into your Cloud Composer environment.
Python dependencies : You can install Python
dependencies from the Python Package Index
in your environment or from a private package repository, including
Artifact Registry repositories. If the
dependencies are not in the package index, you can also use plugins.
Logging and monitoring for DAGs, Airflow components, and
Cloud Composer environments:
You can view Airflow logs that are associated with single DAG tasks
in the Airflow web interface
and the logs folder in the environment's bucket .
Cloud Monitoring logs and environment metrics
for Cloud Composer environments.
Access control in Cloud Composer
You manage security at the Google Cloud project level and can
assign IAM roles that allow individual
users to modify or create environments. If someone does not have access
to your project or does not have an appropriate Cloud Composer
IAM role, that person cannot access any of your environments.
In addition to IAM, you can use
Airflow UI access control , which is based on the Apache
Airflow Access Control model.
For more information about security features in Cloud Composer, see
Cloud Composer security overview .
Environment networking
Cloud Composer supports several networking configurations for
environments, with many configuration options. For example, in a Private IP
environment, DAGs and Airflow components are fully isolated from the public
internet.
For more information about networking in Cloud Composer, see pages
for individual networking features:
Public IP and Private IP environments
Shared VPC environments
Configuring VPC Service Controls
Authorized networks
IP Masquerade agent
Privately used public IP ranges
Frequently Asked Questions
What version of Apache Airflow does Cloud Composer use?
Cloud Composer environments are based on
Cloud Composer images . When you create an
environment, you can select an image with a specific Airflow version:
Cloud Composer 3 supports Airflow 2.
Cloud Composer 2 supports Airflow 2.
Cloud Composer 1 supports Airflow 1 and Airflow 2.
You have control over the Apache Airflow version of your environment. You can
decide to upgrade your environment to a later version of
Cloud Composer image. Each
Cloud Composer release supports several Apache
Airflow versions.
Can I use native Airflow UI and CLI?
You can access the Apache Airflow web interface of your environment. Each of
your environments has its own Airflow UI. For more information about accessing
the Airflow UI, see Airflow web interface .
To run Airflow CLI commands in your environments, use gcloud commands.
For more information about running Airflow CLI commands in
Cloud Composer environments, see
Airflow command-line interface .
Can I use my own database as the Airflow database?
Cloud Composer uses a managed database service for the Airflow
database. It is not possible to use a user-provided database
as the Airflow database.
Can I use my own cluster as a Cloud Composer cluster?
Cloud Composer uses Google Kubernetes Engine service to create, manage and
delete environment clusters where Airflow components run. These clusters are
fully managed by Cloud Composer.
It is not possible to build a Cloud Composer environment based on a
self-managed Google Kubernetes Engine cluster.
Can I use my own container registry?
Cloud Composer uses Artifact Registry service to manage container
image repositories used by Cloud Composer environments.
It is not possible to replace it with a user-provided container registry.
Are Cloud Composer environments zonal or regional?
When you create an environment, you specify a region for it:
Standard Cloud Composer environments have a zonal Airflow
database and a multi-zonal Airflow execution layer. The Airflow database is
located in one of the zones in the specified region and the Airflow
components are distributed between several zones.
Highly resilient (Highly Available)
Cloud Composer environments
have a multi-zonal Airflow database and a multi-zonal Airflow execution
layer. A highly resilient environment runs across at least two zones of the
selected region. Cloud Composer automatically distributes the
components of your environment between zones. The Cloud SQL
component that stores the Airflow database has a primary instance and a
standby instance distributed between zones in the selected region.
Important: For production use cases, we strongly recommend using
highly resilient environments .
Cloud Composer 1 environments are zonal.
What's next
Security overview
Create environments
Environment architecture
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
