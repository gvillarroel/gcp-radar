---
title: "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/dag-serialization
  title: "Enabling and disabling DAG serialization \_|\_ Cloud Composer \_|\_ Google\
    \ Cloud Documentation"
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
Enabling and disabling DAG serialization
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
Follow the instructions on this page to enable or disable DAG serialization.
In a Cloud Composer environment, both the Airflow scheduler and
the Airflow web server continuously process DAGs. You can improve
the reliability and performance of the Airflow web server by enabling
DAG serialization .
Enabling DAG serialization forces the scheduler to process DAG files
before they are sent to the web server. The web server does not process DAGs.
Instead, it reads the serialized DAGs from the Airflow database. Serializing
DAGs in this way reduces the CPU and memory usage of the web server,
especially when processing a large number of DAGs.
Before you begin
Note: Starting from Cloud Composer version 1.15.0 , DAG
serialization is enabled by default. You can enable and disable DAG
serialization in new and existing environments by
overriding Airflow configuration options , as described in the
following sections.
DAG serialization affects the following Cloud Composer features:
DAG serialization cannot be enabled at the same time as
asynchronous DAG loading .
Enabling DAG serialization disables all Airflow web server plugins for
Cloud Composer. This does not impact scheduler or worker plugins,
including Airflow operators, sensors, and so on.
Enabling DAG serialization
You can enable DAG serialization for an existing environment or when creating a
new environment.
Note: Do not apply these settings to environments running Airflow 2.x.
The DAG serialization and storing DAG code in Airflow Metadata Database is by
default turned on in Airflow 2.x and you cannot switch it on or off.
To enable DAG serialization,
override the following Airflow configuration options:
Section
Key
Value
core
store_serialized_dags
True
core
store_dag_code
True
core
min_serialized_dag_update_interval
30
scheduler
dag_dir_list_interval
30
The min_serialized_dag_update_interval
Airflow configuration option controls how frequently serialized DAGs
are updated in the database.
The dag_dir_list_interval
option controls how frequently removed DAGs are deleted from the Airflow
database. A high update frequency can negatively impact performance. We
recommend setting min_serialized_dag_update_interval and
dag_dir_list_interval to 30 seconds.
Disabling DAG serialization
You can enable DAG serialization for an existing environment or when creating
a new environment.
To disable DAG serialization, override the following Airflow
configuration options:
Section
Key
Value
core
store_serialized_dags
False
core
store_dag_code
False
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-09 UTC."],[],[]]
