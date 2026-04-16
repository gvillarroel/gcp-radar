---
title: "Save and load environment snapshots \_|\_ Cloud Composer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/latest/save-load-snapshots
  title: "Save and load environment snapshots \_|\_ Cloud Composer \_|\_ Google Cloud\
    \ Documentation"
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
Save and load environment snapshots
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to save and load the state of your environment using
environment snapshots.
You can configure your environment to automatically save snapshots. For more
information, see Configure scheduled snapshots .
About environment snapshots
Environment snapshots store the state of your environment. You can save and
load environment snapshots on demand.
You can use snapshots to:
Restore your environment to an earlier state. Create backups of your
environment using snapshots, then load one of the snapshots to restore your
environment. For example, you can roll back an update operation that
installs PyPI packages or overrides Airflow configuration options, even
after your environment is successfully updated.
Perform side-by-side upgrades and copy environments. Create a snapshot of an
existing environment, create a new environment that uses the same or later
version of Cloud Composer, then apply the snapshot to this new
environment. This procedure is similar to
migrating . Make sure to pause DAGs before
you make the snapshot, to avoid duplicate DAG runs.
How snapshots are stored
An environment snapshot is a set of files that describe the state of your
environment and store the backup of the environment data.
You can create multiple snapshots of your environment. Environment snapshots
are non-incremental. You can use any snapshot independently of other snapshots.
Cloud Composer does not delete snapshots when you delete your
environment.
By default, Cloud Composer stores snapshots in the snapshots/
folder in your environment's bucket. You can also specify a custom location
when you create a snapshot.
While the Cloud Storage UI displays data as folders for convenience,
buckets work in a flat-file structure. This doesn't change how you work with
saving and loading snapshots in the Google Cloud console, but keep this in
mind when you perform operations directly on the files in your bucket. For more
information, see Object namespace .
Security considerations for snapshots
Warning: The fernet key of your environment is stored
together with the Airflow database's backup. This means that
sensitive information such as Airflow connection extras and passwords can
be decrypted from an environment snapshot.
To mitigate this security risk, you can store sensitive information
that is used by Airflow DAGs, such as keys or passwords, in
Secret Manager. For more information, see
Configure Secret Manager for your environment .
Make sure to check security permissions for your environment's bucket. If you
store environment snapshots in a custom bucket, make sure that
access permissions for it are configured properly in your
project. When assigning permissions, make sure that environment's service
account has enough permissions to save and load snapshots from the
bucket.
What data is saved in snapshots
Cloud Composer saves the following data in snapshots:
Airflow configuration overrides.
Environment variables.
List of custom PyPI packages, as requirements.
A backup of the Airflow database, including states of executed tasks, and DAG
runs history.
A backup of the /dags , /data , and /plugins folders from the
environment's bucket.
Environment's fernet key .
Other information about the environment's configuration, such as
environment's scale and performance parameters.
Cloud Composer does not use this information when it loads
snapshots.
What data is loaded from snapshots
Cloud Composer loads the following data from snapshots:
Airflow configuration overrides.
Environment variables.
Custom PyPI packages (unless you choose to skip installing them).
Caution: Cloud Composer installs packages as they are specified
in the requirements. For example, if a snapshot has example_package>=1.0
as a requirement, then a different version of the package can be installed
when you load the snapshot.
The contents of the Airflow database, including states of executed tasks, and
DAG runs history.
Contents of the /dags , /data , and /plugins folders from the snapshot
are loaded into the environment's bucket.
The fernet key from the snapshot is used to re-encrypt the data from the
snapshot with the environment's own fernet key. The fernet key of the
environment remains unchanged.
Although Cloud Composer stores some information about the
environment's configuration in snapshots, it is not used when loading
snapshots. The following parameters of your environment do not change when you
load a snapshot:
Environment configuration, such as environment scale and performance
parameters.
Environment's networking configuration.
Contents of the environment's bucket outside of the /dags , /data , and
/plugins folders.
Environment labels.
Any settings that you applied in Cloud Composer infrastructure
without using Cloud Composer API might be lost when you load a
snapshot.
About partially completed operations
When you load a snapshot, the operation can be successful, failed, or partially
completed:
Successful operations load all data from the snapshot.
Failed operations do not introduce any changes.
Partially completed operations load a subset of data from the snapshot. Such
operations are reported as failed, but the error message indicates what
data was successfully loaded. For example, if PyPI packages are installed,
but Airflow configuration option overrides did not succeed, the error
message indicates this.
For a partially completed operation, you can try to load the same snapshot
again. Cloud Composer skips steps that were successful on the
previous attempt. For example, if an operation failed on a timeout, but the
database was successfully loaded, then the next attempt does not load the
database again.
Before you begin
Snapshots are supported in Cloud Composer 2 version 2.0.9 and later.
Cloud Composer 1 supports saving environment snapshots in 1.18.5 and later
versions.
Snapshots do not create an environment. If you want to load a snapshot from
an environment to a different environment, you first need to create a new
environment and then load the snapshot to it.
You cannot load snapshots to environments that are in the error state. It is
not possible to fix such environments by loading a snapshot. You can still
load an existing snapshot to a new environment.
You can only load snapshots to the same or later version of Airflow. For
example, you cannot load a snapshot from Airflow 2.9.3 to Airflow 2.7.3.
It is possible to load a snapshot from a later Airflow build of the same
Airflow version to an environment with an earlier build. For example, you
can load airflow-2.9.3-build.6 to airflow-2.9.3-build.5 . We recommend
to load snapshots to earlier builds only if it's necessary to do so.
The maximum size of the Airflow database that supports snapshots is
20 GB. If your environment's database takes
more than 20 GB,
reduce the size of the Airflow database before saving a
snapshot.
The total number of objects in the /dags , /plugins and /data folders in
the environment's bucket must be less than 100,000 to
create snapshots.
If you use the XCom mechanism to transfer files, make sure that you
use it according to Airflow's guidelines .
Transferring big files or a large number of files using XCom impacts
Airflow database's performance and can lead to failures when loading
snapshots or upgrading your environment. Consider using alternatives such
as Cloud Storage to transfer large volumes of data.
The maximum length of an object's name in the environment's bucket must be no
longer that 1024 symbols. Otherwise, snapshots cannot be created.
If you save snapshots in a location outside your environment's
bucket, the service account of your environment must have
read and write permissions for the specified location. For example, the
Storage Object Admin role has such permissions. You
can apply it to a project or to a specific bucket.
Creating and storing snapshots produces additional costs, which are related
to Cloud Storage. For more information, see Pricing .
Save an environment snapshot
Cloud Composer saves environment snapshots in a
subfolder , relative to the folder that you specify.
The folder name contains the project ID, the environment's location, the
environment's name, and the timestamp when the snapshot was saved. For example:
/snapshots/example-project_us-central1_example-environment_2022-01-05T18-59-00 .
Console
To create a snapshot of your environment:
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Click Save snapshot .
In the Save snapshot dialog, select where to store the snapshot:
To store the snapshot in the /snapshots folder in the environment's
bucket, select Use snapshot folder in environment bucket
(default) .
To store the snapshot in the custom folder, select
Use custom folder in another bucket , then specify a location.
Click Save .
gcloud
The gcloud composer environments snapshots save command saves a
snapshot of your environment.
The snapshot-location argument specifies a folder where the snapshot is
saved. By default, snapshots are saved in the /snapshots folder in your
environment's bucket. For example,
gs://us-central1-example-916807e1-bucket/snapshots . You can also specify
any other folder.
To save a snapshot of your environment, run:
gcloud composer environments snapshots save \
ENVIRONMENT_NAME \
--location LOCATION \
--snapshot-location " SNAPSHOTS_FOLDER "
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
(Optional) SNAPSHOTS_FOLDER with the URI of a bucket folder where to store
the snapshot. If you omit this argument, Cloud Composer saves
the snapshot in the /snapshots folder in your environment's bucket.
The following example uses the default location:
gcloud composer environments snapshots save \
example-environment \
--location us-central1
The following example saves to a custom folder:
gcloud composer environments snapshots save \
example-environment \
--location us-central1 \
--snapshot-location "gs://example-bucket/environment_snapshots"
API
Construct an
environments.saveSnapshot
API request.
In the request body, in the snapshotLocation field, specify
the folder where you want to save the snapshot.
{
"snapshotLocation" : " SNAPSHOTS_FOLDER "
}
Replace:
SNAPSHOTS_FOLDER with the URI of a bucket folder where to
save the snapshot.
Example:
// POST https://composer.googleapis.com/v1/projects/example-project/
// locations/us-central1/environments/example-environment:saveSnapshot
{
"snapshotLocation" : "gs://us-central1-example-916807e1-bucket/snapshots"
}
Terraform
It is not possible to save and load environment snapshots from Terraform.
Saving and loading snapshots are actions performed on an environment, and the
resulting snapshots are not a part of an environment's definition. Since
Terraform manages only Cloud Composer environment's configuration,
you cannot save or load environment snapshots from it.
Load an environment snapshot
Warning: After you load a snapshot, the DAG run history is restored to the
state of the snapshot. This might lead to duplicate DAG runs .
Consider the following situation. For example,
catch-up is enabled and Airflow executes a DAG
on a schedule between the time when the snapshot was created and when it was
loaded. In this case, after you load the snapshot, Airflow has no information
about the DAG run that happened, so Airflow runs the DAG again for the
same time and data.
As another example, consider a DAG that runs on a daily schedule. You take a
snapshot, then Airflow executes this DAG, and after that you load the snapshot
on the same day. In this case, Airflow runs the DAG again, even if catch-up
is disabled.
Console
To load a snapshot to your environment:
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your
environment. The Environment details page opens.
Click Load snapshot .
In the Load snapshot dialog, click Browse .
Select a folder that stores the snapshot. The name of the folder lists the
ID of your project, environment's location and the timestamp when the
snapshot was saved. For example,
/snapshots/example-project_us-central1_example-environment_2022-01-05T18-59-00 .
(Optional) To skip the installation of custom PyPI packages from the
snapshot, select Skip PyPI packages installation . If you load a
snapshot of an environment with installed
custom PyPI packages ,
then Cloud Composer does not install these custom packages.
Click Load and wait until Cloud Composer loads the snapshot.
gcloud
The gcloud composer environments snapshots load command loads a
snapshot to your environment.
The --snapshot-path argument specifies a folder where the snapshot is
located.
The name of the folder lists the ID of your project, environment's
location and the timestamp when the snapshot was saved. For example,
gs://us-central1-example-916807e1-bucket/snapshots/example-project_us-central1_example-environment_2022-01-05T18-59-00 .
(Optional) The --skip-pypi-packages-installation argument skips the
installation of custom PyPI packages from the snapshot. If you load a
snapshot of an environment with installed
custom PyPI packages ,
then Cloud Composer does not install these custom packages.
gcloud composer environments snapshots load \
DESTINATION_ENVIRONMENT_NAME \
--location LOCATION \
--snapshot-path " SNAPSHOT_PATH "
Replace:
DESTINATION_ENVIRONMENT_NAME with the name of the environment where you
want to load the snapshot.
LOCATION with the region where the environment is located.
SNAPSHOT_PATH with the URI of a bucket, followed by the path to the
snapshot.
Example:
gcloud composer environments snapshots load \
example-environment \
--location us-central1 \
--snapshot-path "gs://us-central1-example-916807e1-bucket/snapshots/example-project_us-central1_example-environment_2022-01-05T18-59-00"
API
Construct an
environments.loadSnapshot
API request.
In the request body, in the snapshotPath field, specify
the URI of a bucket, followed by the path to the snapshot. The name of
the folder lists the ID of your project, environment's location and the
timestamp when the snapshot was saved. For example,
gs://us-central1-example-916807e1-bucket/snapshots/example-project_us-central1_example-environment_2022-01-05T18-59-00 .
(Optional) In the request body, in the skipPypiPackagesInstallation field
specify if Cloud Composer must skip the
installation of custom PyPI packages from the snapshot. If you load a
snapshot of an environment with installed
custom PyPI packages ,
then Cloud Composer does not install these custom packages.
This field is optional. If you omit this field, Cloud Composer
installs PyPI packages from the snapshot.
{
"snapshotPath" : " SNAPSHOT_PATH "
}
Replace:
SNAPSHOT_PATH with the URI of a bucket folder where to
store the snapshot.
Example:
// POST https://composer.googleapis.com/v1/projects/example-project/
// locations/us-central1/environments/example-environment:loadSnapshot
{
"snapshotPath" : "gs://us-central1-example-916807e1-bucket/snapshots/example-project_us-central1_example-environment_2022-01-05T18-59-00" ,
"skipPypiPackagesInstallation" : "False"
}
Terraform
It is not possible to save and load environment snapshots using Terraform.
Saving and loading snapshots are actions performed on an environment, and the
resulting snapshots are not a part of an environment's definition. Since
Terraform manages only Cloud Composer environment's configuration,
you cannot save or load environment snapshots from it.
What's next
Configure scheduled snapshots
Create environments
Access control
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
