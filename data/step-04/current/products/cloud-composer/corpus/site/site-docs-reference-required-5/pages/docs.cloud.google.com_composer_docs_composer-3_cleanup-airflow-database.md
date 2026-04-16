---
title: "Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/cleanup-airflow-database
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/cleanup-airflow-database
  title: "Clean up the Airflow database \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
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
Composer 3 Guides
Send feedback
Clean up the Airflow database
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to maintain the Airflow database in your environment.
Automatic database cleanup with a database retention policy
You can configure automatic database cleanup for your Cloud Composer 3
environment by setting a database retention policy. After you set up this
policy, records older than a certain period are automatically removed from the
Airflow database daily. For more information, see
Configure database retention policy .
Deprecated cleanup procedures
Deprecated: The maintenance DAG approach is obsolete in Cloud Composer 3.
If you still use the database maintenance DAG, we recommend to remove or pause
it and configure a database retention policy instead.
Before the database retention policy became available in
Cloud Composer, we recommended a different approach for automating
the database cleanup, through a database cleanup DAG . This
approach is obsolete in Cloud Composer 3. This DAG does redundant work and you
can reduce the resource consumption by removing it and replacing it with a
database retention policy .
Limits for database size
As the time goes, the Airflow database of your environment stores more and
more data. This data includes information and logs related to past DAG runs,
tasks, and other Airflow operations.
If the Airflow database size is more than
20 GB,
then you can't upgrade your environment to a later version.
If the Airflow database size is more than 20 GB,
it is not possible to create snapshots.
Maintain database performance
Airflow database performance issues can lead to overall DAG execution
issues.
Observe Database CPU and memory usage
statistics. If CPU and memory utilization approaches the limits, then the
database is overloaded and requires scaling.
The amount of resources available to the Airflow database is controlled by
the environment size property of your environment. To scale the database up
change the environment size to a larger tier. Increasing the
environment size increases the costs of your environment.
If you use the XCom mechanism to transfer files, make sure that you
use it according to Airflow's guidelines .
Transferring big files or a large number of files using XCom impacts
Airflow database's performance and can lead to failures when loading
snapshots or upgrading your environment. Consider using alternatives such
as Cloud Storage to transfer large volumes of data.
Remove entries for unused DAGs
You can remove database entries for unused DAGs by
removing DAGs from the Airflow UI .
What's next
Configure database retention policy
Access Airflow command-line interface
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
