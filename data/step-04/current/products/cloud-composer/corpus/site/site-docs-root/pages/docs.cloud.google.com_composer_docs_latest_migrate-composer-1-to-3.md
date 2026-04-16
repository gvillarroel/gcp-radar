---
title: "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/latest/migrate-composer-1-to-3
  title: "Migrate to Cloud Composer\_3 from Cloud Composer\_1 (Airflow 2) \_|\_ Google\
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
Migrate to Cloud Composer 3 from Cloud Composer 1 (Airflow 2)
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
Note: This feature might not be available in some regions yet. See
Release Notes
for more information about this feature's availability.
This page explains how to transfer DAGs, data and configuration from your
existing Cloud Composer 1, Airflow 2 environments to Cloud Composer 3,
Airflow 2 using snapshots .
Note: Cloud Composer doesn't support migrating from
Cloud Composer 1 with Airflow 1 to Cloud Composer 3. If your environment uses Airflow 1, you can migrate
to Cloud Composer 2, Airflow 2 .
Other migration guides
From
To
Method
Guide
Cloud Composer 2
Cloud Composer 3
Side-by-side, using the migration script
Script migration guide
Cloud Composer 2
Cloud Composer 3
Side-by-side, using snapshots
Snapshots migration guide
Cloud Composer 1, Airflow 2
Cloud Composer 3
Side-by-side, using snapshots
This guide
Cloud Composer 1, Airflow 2
Cloud Composer 2
Side-by-side, using snapshots
Snapshots migration guide
Cloud Composer 1, Airflow 2
Cloud Composer 2
Side-by-side, manual transfer
Manual migration guide
Cloud Composer 1, Airflow 1
Cloud Composer 2, Airflow 2
Side-by-side, using snapshots
Snapshots migration guide
Cloud Composer 1, Airflow 1
Cloud Composer 2, Airflow 2
Side-by-side, manual transfer
Manual migration guide
Cloud Composer 1, Airflow 1
Cloud Composer 1, Airflow 2
Side-by-side, manual transfer
Manual migration guide
Before you begin
Cloud Composer supports side-by-side migration from
Cloud Composer 1 to Cloud Composer 3. It is not possible to upgrade from
Cloud Composer 1 to Cloud Composer 3 in-place.
Check the list of differences between
Cloud Composer 1, Cloud Composer 2, and Cloud Composer 3.
The maximum size of the Airflow database that supports snapshots is
20 GB. If your environment's database takes
more than 20 GB,
reduce the size of the Airflow database .
The total number of objects in the /dags , /plugins and /data folders in
the environment's bucket must be less than 100,000 to
create snapshots.
If you use the XCom mechanism to transfer files, make sure that you
use it according to Airflow's guidelines .
Transferring big files or a large number of files using XCom impacts
Airflow database's performance and can lead to failures when loading
snapshots or upgrading your environment. Consider using alternatives such
as Cloud Storage to transfer large volumes of data.
Make sure that your DAGs are compatible with Cloud Composer 3
Make sure that your DAGs are compatible with Cloud Composer 3 by following
these suggestions:
The [list of packages][cc-versions] in the Cloud Composer 3 environment
can be different than in your Cloud Composer 1 environment.
This might affect the compatibility of your DAGs with Cloud Composer 3.
Cloud Composer loads configuration overrides, environment
variables, and PyPI packages from your Cloud Composer 1 environment's
snapshot to Cloud Composer 3 without changing or adjusting them for
compatibility. If custom PyPI packages cause dependency conflicts, you can
skip their installation when you load the snapshot.
In Cloud Composer 3, the environment's cluster
is located in the tenant project . Make sure that your DAGs are
compatible with this change. In particular,
KubernetesPodOperator workloads now scale independently from
your environment and it's not possible to use Pod affinity configs.
In Cloud Composer 3, the Airflow database can't be accessed directly. Make
sure that your DAGs are compatible with this change.
Pause DAGs in your Cloud Composer 1 environment
Warning: If a DAG is enabled (not paused) in both environments, each
environment runs its own copy of the DAG, as scheduled. This might lead to
duplicate DAG runs for the same data and execution time.
To avoid duplicate DAG runs, pause all DAGs in your Cloud Composer 1
environment before saving its snapshot. Skip the liveness monitoring DAG
( airflow_monitoring ), it is used for monitoring purposes and is not included
in environment snapshots.
You can use any of the following options:
In the Airflow web interface ,
go to DAGs and pause all DAGs manually.
Use the composer_dags script to pause all DAGs:
python3 composer_dags.py --environment COMPOSER_1_ENV \
--project PROJECT_ID \
--location COMPOSER_1_LOCATION \
--operation pause
Replace:
COMPOSER_1_ENV with the name of your Cloud Composer 1 environment.
PROJECT_ID with the Project ID .
COMPOSER_1_LOCATION with the region where the environment is located.
(Airflow versions 2.9.1 and later) If there are quota errors while
pausing a large number of DAGs, you can use the following Airflow CLI
commands to pause all DAGs at once:
gcloud composer environments run COMPOSER_1_ENV dags pause \
--project PROJECT_ID \
--location COMPOSER_1_LOCATION \
-- -y --treat-dag-id-as-regex ".*"
(Airflow versions earlier than 2.9.1) If there are quota errors while
pausing a large number of DAGs, it's possible to pause DAGs using the
Airflow REST API . Also see
Trying the API in the Airflow
documentation.
Save the snapshot of your Cloud Composer 1 environment
Caution: If any changes or DAG runs happen in your Cloud Composer 1
environment after you save its snapshot, information about these changes isn't
transferred when you load the snapshot later.
Console
Create a snapshot of your environment:
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your
Cloud Composer 1 environment. The Environment details page opens.
Click Create snapshot .
In the Create snapshot dialog, click Submit . In
this guide, you save the snapshot in the Cloud Composer 1 environment's
bucket, but you can select a different location, if you want to.
Wait until Cloud Composer creates the snapshot.
gcloud
Get your Cloud Composer 1 environment's bucket URI:
Run the following command:
gcloud composer environments describe COMPOSER_1_ENV \
--location COMPOSER_1_LOCATION \
--format = "value(config.dagGcsPrefix)"
Replace:
COMPOSER_1_ENV with the name of your Cloud Composer 1
environment.
COMPOSER_1_LOCATION with the region where the environment is
located.
In the output, remove the /dags folder. The result is the URI of
your Cloud Composer 1 environment's bucket.
For example, change gs://us-central1-example-916807e1-bucket/dags
to gs://us-central1-example-916807e1-bucket .
Create a snapshot of your Cloud Composer 1 environment:
gcloud composer environments snapshots save \
COMPOSER_1_ENV \
--location COMPOSER_1_LOCATION \
--snapshot-location " COMPOSER_1_SNAPSHOTS_FOLDER "
Replace:
COMPOSER_1_ENV with the name of your Cloud Composer 1 environment.
COMPOSER_1_LOCATION with the region where the Cloud Composer 1
environment is located.
COMPOSER_1_SNAPSHOTS_FOLDER with the URI of your Cloud Composer 1
environment's bucket. In this guide, you save the snapshot in the
Cloud Composer 1 environment's bucket, but you can select a
different location, if you want to. If you specify a custom location,
the service accounts of both environments must
have read and write permissions for any location available to service
accounts of both environments.
Create a Cloud Composer 3 environment
Create a Cloud Composer 3 environment . You can
start with an environment preset that matches your
expected resource demands, and later scale and optimize your environment
further.
You don't need to specify configuration overrides and environment variables
because you replace them later when you load the snapshot of your
Cloud Composer 1 environment.
Note: Cloud Composer loads configuration overrides, environment
variables, and PyPI packages from your Cloud Composer 1 environment to
Cloud Composer 3 without changing or adjusting them for compatibility. If
custom PyPI packages cause dependency conflicts, you can skip their
installation when you load the snapshot.
Load the snapshot to your Cloud Composer 3 environment
Console
To load the snapshot to your Cloud Composer 3 environment:
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your
Cloud Composer 3 environment. The Environment details page opens.
Click Load snapshot .
In the Load snapshot dialog, click Browse .
Select the folder with the snapshot. If you use the default location for
this guide, this folder is located in your Cloud Composer 1 environment
bucket in the /snapshots folder, and its name is the timestamp of the
snapshot save operation. For example,
us-central1-example-916807e1-bucket/snapshots_example-project_us-central1_example-environment/2022-01-05T18-59-00 .
Click Load and wait until Cloud Composer loads the snapshot.
gcloud
Load the snapshot of your Cloud Composer 1 environment to your
Cloud Composer 3 environment:
gcloud composer environments snapshots load \
COMPOSER_3_ENV \
--location COMPOSER_3_LOCATION \
--snapshot-path " SNAPSHOT_PATH "
Replace:
COMPOSER_3_ENV with the name of your Cloud Composer 3 environment.
COMPOSER_3_LOCATION with the region where the Cloud Composer 3
environment is located.
SNAPSHOT_PATH with the URI of your Cloud Composer 1
environment's bucket, followed by the path to the snapshot. For
example,
gs://us-central1-example-916807e1-bucket/snapshots/example-project_us-central1_example-environment_2022-01-05T18-59-00 .
Unpause DAGs in the Cloud Composer 3 environment
You can use any of the following options:
In the Airflow web interface ,
go to DAGs and unpause all DAGs manually one by one.
Use the composer_dags script to unpause all DAGs:
python3 composer_dags.py --environment COMPOSER_3_ENV \
--project PROJECT_ID \
--location COMPOSER_3_LOCATION \
--operation unpause
Replace:
COMPOSER_3_ENV with the name of your Cloud Composer 3 environment.
PROJECT_ID with the Project ID .
COMPOSER_3_LOCATION with the region where the environment is located.
(Airflow versions 2.9.1 and later) If there are quota errors while
unpausing a large number of DAGs, you can use the following Airflow CLI
commands to unpause all DAGs at once:
gcloud composer environments run COMPOSER_3_ENV dags unpause \
--project PROJECT_ID \
--location COMPOSER_3_LOCATION \
-- -y --treat-dag-id-as-regex ".*"
(Airflow versions earlier than 2.9.1) If there are quota errors while
unpausing a large number of DAGs, it's possible to unpause DAGs using the
Airflow REST API . Also see
Trying the API in the Airflow
documentation.
Check for DAG errors
In the Airflow web interface ,
go to DAGs and check for reported DAG syntax errors.
Check that DAG runs are scheduled at the correct time.
Wait for the DAG runs to happen in the Cloud Composer 3 environment and
check if they were successful. If a DAG run was successful, don't
unpause it in the Cloud Composer 1 environment; if you do so, a DAG
run for the same time and date happens in your Cloud Composer 1
environment.
If a specific DAG runs fails, attempt to
troubleshoot the DAG until it successfully
runs in Cloud Composer 3.
Monitor your Cloud Composer 3 environment
After you transfer all DAGs and configuration to the Cloud Composer 3
environment, monitor it for potential issues, failed DAG runs, and overall
environment health.
If the Cloud Composer 3 environment runs without problems
for a sufficient period of time, consider deleting the Cloud Composer 1
environment.
What's next
Troubleshooting DAGs
Troubleshooting environment creation
Troubleshooting environment updates
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
