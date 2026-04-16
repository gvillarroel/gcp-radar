---
title: "Disaster recovery with environment snapshots \_|\_ Cloud Composer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/disaster-recovery-with-snapshots
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/disaster-recovery-with-snapshots
  title: "Disaster recovery with environment snapshots \_|\_ Cloud Composer \_|\_\
    \ Google Cloud Documentation"
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
Disaster recovery with environment snapshots
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to use environment snapshots for
disaster recovery .
Definitions
This guide uses the following definitions:
Disaster is an event where Cloud Composer or other components
essential for your environment's operation are unavailable. This event
requires a failover to a different region and Cloud Composer
environments. The cause of a disaster could be natural, or human-made,
including both downtime of Google Cloud regions and outages on your own
infrastructure.
Disaster Recovery (DR) , in the context of Cloud Composer, is a
process of restoring the environment's operation after a disaster. The
process involves recreating the environment, possibly in another region.
For more information about Disaster Recovery, see
Disaster recovery planning guide .
Primary environment is a Cloud Composer environment that you
want to enable a DR capability for.
Failover environment is a Cloud Composer environment designated
to take over activities from the primary environment.
Warm DR scenario is a variant of Disaster Recovery, where you use a standby
failover environment, which you create before a disaster occurs.
Cold DR scenario is a variant of Disaster Recovery, where you create a
failover environment after a disaster occurs.
Cross-region DR is a variant of warm or cold Disaster Recovery where the
primary and the failover environment are located in different regions.
About the disaster recovery procedure
The disaster recovery procedure solves the problem when your primary
environment has become inoperative (broken or otherwise not accessible) because
of a disaster.
This procedure assumes that your primary environment is not going to be fixed
in-place to address the disaster. Instead, you create a second (failover)
environment side-by-side. This environment operates instead of the primary
environment. At a later stage, you might decide to go back to the primary
environment or to keep using the failover environment.
Because the procedure uses a failover environment, changes will be introduced
when you switch from the primary environment. Changes between the primary and
the failover environment include (the list is not comprehensive):
Web server URL is going to be different. This changes the address of the
Airflow UI and the Airflow REST API endpoint.
Environment's bucket URL is going to be different.
The network and access permissions configuration might require adjusting.
If you use the warm DR scenario, you know the values for the web server,
environment's bucket addresses, and the network configuration in advance.
Before you begin
The Airflow database must have less than 20 GB of
data to create snapshots.
The total number of objects in the /dags , /plugins and /data folders in
the environment's bucket must be less than 100,000 to
create snapshots.
If you use the XCom mechanism to transfer files, make sure that you
use it according to Airflow's guidelines .
Transferring big files or a large number of files using XCom impacts
Airflow database's performance and can lead to failures when loading
snapshots or upgrading your environment. Consider using alternatives such
as Cloud Storage to transfer large volumes of data.
Important: For production use cases, we highly recommend to use
highly resilient (Highly Available) environments . The
Airflow database of your environment is zonal. During a zonal outage, Airflow
tasks that are executed in the affected zone are interrupted and marked as
failed by Airflow. Highly resilient environments are more resilient to this
issue, because their databases are located in two separate zones.
Preparation overview
Both DR scenarios include the following preparation steps:
Create a failover environment .
In the warm DR scenario, you keep this environment available.
In the cold DR scenario, you create this environment only to test your
disaster recovery procedure. After you complete the preparation, you
delete this environment, and create it again after a disaster happens.
Create a bucket for snapshots .
The bucket must be available in the DR region. For cross-region DR, the
snapshots bucket must be either multiregional or located in a
different region than the primary environment.
Check that DAGs can access regional resources.
Set up DB maintenance .
Set up scheduled snapshots .
Test your disaster recovery procedure .
Disaster recovery overview
After a disaster happens:
(Cold DR only) Create a failover environment .
If possible, stop the primary environment from executing DAGs .
Load a snapshot from the snapshots bucket to the failover
environment.
If required,
adjust the configuration of the failover environment .
Decide what to do with the primary environment .
Preparation steps
Do the steps outlined below to set up disaster recovery for your environment.
Create a failover environment
Create an environment that acts as a failover environment.
Use the following guidelines:
Your primary and failover environment
must use the same version and build of Airflow.
Caution: While it's possible to do so, don't perform a failover to a
different build or version of Airflow, because this might require
additional changes related to compatibility. For example, two builds of the
same Airflow version might have different preinstalled PyPI packages.
In the warm DR scenario, make sure that you update and
upgrade both environments in sync. For example, if you
upgrade the primary environment
to a later Airflow build,
or install PyPI packages, then your failover environment must also
have these changes.
We recommend creating the failover environment in a region different from the
primary environment. As a result, a broader range of possible disaster
scenarios can be covered, such as a disaster that affects the availability
of the whole region.
We recommend to use Terraform to create primary and failover
environments, so that both have consistent configuration. Make sure that
Terraform definitions for both primary and failover environments are
synchronized.
The configuration of the failover environment (such as environment size,
number of schedulers, and IAM permissions) is recommended
to conform to the configuration of the primary environment.
IAM permissions for both environments must give
appropriate access to users and snapshots.
Check the resource availability
DAGs can operate on external resources, and access to those resources might be
dependent on the environment's configuration (such as permissions granted to
the environment's service account, network configuration, or project). Make
sure that those resources are available to the failover environment.
An environment might interact with some external resources through
connections stored in Airflow . Check
if these resources should be adjusted in the failover environment compared to
the primary environment.
Create a storage bucket for snapshots
Create a new storage bucket for environment snapshots.
Don't use environment buckets for disaster recovery, since configuration for
the retention policy and lifecycle is applied on the bucket level.
Make sure that this storage bucket has IAM permissions, a
retention policy, and a lifecycle configuration set in a way that prevents
accidental deletion or unauthorized access. For more information about
configuring a bucket for snapshots, see
Configuring scheduled snapshots .
You can:
Create a bucket in a different region.
Create a multi-regional bucket.
Caution: If you create a bucket in the same region as your primary environment,
some disaster scenarios cannot be covered, such as a disaster that affects the
availability of the whole region.
Set up DB maintenance
Keep the Airflow database small and within the size limit by setting up
database cleanup . Doing so makes the process of saving
and loading snapshots quicker. The Airflow database must have less
than 20 GB of data to create snapshots.
Set up scheduled snapshots
Set up scheduled snapshots for the primary
environment.
Snapshots can be created only in a healthy environment, so snapshots must be
saved before the disaster occurs.
For more information about how snapshots work, see
Save and load environment snapshots . See the
Save an environment snapshot section of the
documentation for information about where to find the saved snapshots.
(Optional) Set up monitoring for scheduled snapshot operations
For scheduled snapshots with a frequency of at least once every 12 hours,
you can use Cloud Monitoring to alert you when a snapshot is not automatically created.
For lower frequency schedules, you use Google Cloud CLI to verify snapshot operations results.
See Verify save snapshot operations .
In the Google Cloud console, go to the Monitoring page.
Go to Monitoring
In the Monitoring navigation pane, select
notifications Alerting .
If you haven't created your notification channels and if you want to be notified, then click
Edit Notification Channels and add your notification channels. Return to the
Alerting page after you add your channels.
From the Alerting page, select Create policy .
To select the metric, expand the Select a metric menu and then do the following:
To limit the menu to relevant entries, enter Composer Snapshot
into the filter bar. If there are no results after you filter the menu, then disable
the Show only active resources & metrics toggle.
For the Resource type , select Cloud Composer Environment .
For the Metric category , select Environment .
For the Metric , select Snapshot creation count .
Select Apply .
Click Add filter , and use the dropdown menus to add the following filters:
Filter
Comparator
Value
Resource label > environment_name
=
The environment name where you want to monitor scheduled snapshots.
Monitor label > result
=
SUCCEEDED
In the Transform data section, set the following attributes:
For Rolling window , select the monitoring window for this alert.
This value impacts the threshold configuration in the next step.
Recommended value for scheduled snapshot monitoring: 1 day .
For Rolling window function , select delta .
Click Next .
The settings in the Configure alert trigger page determine when the alert is triggered.
Complete this page with the settings in the following table.
Field
Value
Condition type
Threshold
Alert trigger
Any time series violates
Threshold position
Below threshold
Threshold value
The number of scheduled snapshots you expect to be saved
within the amount of time configured as the Rolling window
for the alert.
Calculate this value using the following formula:
(rolling window in hours / schedule frequency in hours) - 1
Note: Deducting 1 hour in the formula
is to account for varying snapshot completion times. This helps prevent
raising false positives if the latest snapshot is still running
during a monitoring check.
Example :
If you use the recommended rolling window of 1 day ,
and your schedule frequency is once every 2 hours, set this value to 11
(as per calculation: 24 / 2 - 1 = 11 ).
If your schedule runs correctly, within any 24 hour window you
should have at least 11 snapshots.
If you don't, it means a snapshot operation did not complete
successfully and Cloud Monitoring triggers this alert.
Condition name
Your custom name for the condition.
Click Next .
Optional: To add notifications to your alerting policy, click
Notification channels . In the dialog, select one or more notification
channels from the menu, and then click OK .
Optional: Update the Incident autoclose duration . This field determines when
Monitoring closes incidents in the absence of metric data.
Optional: Click Documentation , and then add any information that you
want included in a notification message.
Click Alert name and enter a name for the alerting policy.
Click Create Policy .
For more information, see Alerting policies .
Test your disaster recovery procedure
Make sure to test your disaster recovery procedure after you set it up and then
periodically afterwards. This lets you address potential problems that might
impact the actual disaster recovery process.
In the cold DR scenario, you can delete the failover environment after you
finish testing the disaster recovery procedure.
Verify save snapshot operations
You can use Google Cloud CLI to retrieve the list of save snapshot
operations and verify if your snapshots are ready for disaster recovery
scenarios.
This method is useful if you save snapshots less often than at least once every
12 hours. For verifying snapshots saved more frequently, it's best to configure
Cloud Monitoring alerting.
See
Set up monitoring for scheduled snapshot operations .
gcloud
List all your snapshot operations for a specific environment.
For the full command reference, see
gcloud composer operations list .
gcloud composer operations list \
--locations LOCATION \
--filter = "metadata.operationType=SAVE_SNAPSHOT AND
metadata.resource=projects/ PROJECT_ID /locations/ LOCATION /environments/ ENVIRONMENT_ID "
--format yaml
Replace:
LOCATIONS with the list of region identifiers where the environment is
located
PROJECT_ID with the identifier of the project where the environment is located
ENVIRONMENT_ID with the identifier of the environment where you want to check snapshot operations
Example:
gcloud composer operations list \
--locations us-central1 \
--filter = "metadata.operationType=SAVE_SNAPSHOT AND
metadata.resource=projects/my-project/locations/us-central1/environments/my-environment"
--format yaml
After a disaster happens
Do the steps outlined below after a disaster happens to recover your primary
environment.
(Cold DR only) Create a failover environment
Follow the instructions in the Create a failover environment section.
Stop the primary environment from executing DAGs
If possible, stop the primary environment from executing DAGs:
If the primary environment is still accessible,
pause all DAGs .
If the primary environment's bucket is accessible, move all DAGs from the
environment's bucket, or to a folder ouside /dags in the primary
environment's bucket.
Load a snapshot to the failover environment
Load a snapshot from the primary environment
into the failover environment.
Once the snapshot is loaded to the failover environment, it schedules and
executes tasks as if nothing was executed by the primary environment after
creating a snapshot. However, some of those tasks might have already been
executed by the primary environment. The failover environment does not have any
means to recognize which tasks have been executed after creating the snapshot
and before a disaster. As a result, some tasks might be executed twice (in both
the primary and the failover environment). We recommend that all tasks
are idempotent and that the scheduled snapshots are
created every two hours .
(If required) Adjust the configuration of the failover environment
In some cases, you might want to change the configuration of the failover
environment after you load the snapshot of the primary environment into it.
For example, in a cold DR scenario, you might need to use a different set of
Airflow environment variables in the failover environment. As another example,
in a warm DR scenario, you might need to grant permissions to users in
the Airflow UI, so that they can access the failover environment.
You can either perform these changes manually, or prepare a shell script with
commands that change the configuration of the failover environment by running
gcloud composer environment update commands.
Decide what to do with the primary environment
Some disasters might happen because the primary environment is not reachable
but still operative or does not operate properly. For example, you cannot
access the primary environment through the network because of an infrastructure
failure. As another example, the environment operates with some errors or with
reduced capacity, but some DAGs are still executed.
If the original environment is still running, then it might
generate costs directly related to Cloud Composer or other services
accessed through the DAGs, even though a new environment was created as a
replacement. This environment can still execute some DAGs; as a result, some
operations might be executed twice: in the primary environment that is still
running and in the failover environment after loading the snapshot.
If the primary environment exists, but does not operate properly
Primary environment can be deleted, if all relevant data was recovered. For
example, you might want to recover
data that is not included in the environment snapshots ,
such as networking configuration, or contents of the environment's
bucket outside the /dags and /plugins folders.
If the primary environment becomes accessible and healthy again
If the primary environment was inaccessible only temporarily, and becomes
accessible and healthy again, then you can choose an approach:
Keep using the failover environment.
Return to the primary environment.
To keep using the failover environment:
If the primary environment still executes DAGs,
pause them as soon as possible.
Make sure that all relevant data is recovered, then delete the primary
environment.
Repeat the DR preparation steps for the failover environment, such as setting
up scheduled snapshots.
To return to the primary environment:
Pause all DAGs in the failover environment.
Wait for all DAG runs to complete in the failover environment, or stop them.
Save a snapshot of the failover environment.
Load this snapshot to the primary environment.
Unpause the DAGs in the primary environment.
If required, delete the failover environment.
What's next
Configure scheduled snapshots
Create environments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
