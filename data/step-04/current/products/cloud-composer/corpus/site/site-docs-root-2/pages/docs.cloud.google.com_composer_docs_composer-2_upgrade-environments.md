---
title: "Upgrade environments \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-2/upgrade-environments
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-versions
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-2/upgrade-environments
  title: "Upgrade environments \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
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
Composer 2 Guides
Send feedback
Upgrade environments
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to upgrade your environment to a new
Cloud Composer or Airflow
version.
About upgrade operations
You can upgrade the Cloud Composer version, the Airflow version,
or both at the same time.
When you change the version of Airflow or Cloud Composer used by
your environment:
Cloud Composer re-deploys your environment's components
using new versions of Cloud Composer images .
Cloud Composer applies Airflow configuration changes, such as
custom PyPI packages or Airflow configuration option overrides, if your
environment had them before the upgrade.
Cloud Composer updates the Airflow airflow_db connection to
point to the new Cloud SQL database.
Upgrading doesn't change how you connect to the resources in your
environment, such as the URL of your environment's bucket, or Airflow web
server.
Limitations of upgrade operations
Upgrade operations have the following limitations:
Cloud Composer releases are gradually
rolled out to all regions supported by Cloud Composer over
several days. The latest version from a release in progress might not be
available in your region yet.
You can't downgrade to an earlier Cloud Composer or Airflow
version.
In Google Cloud console, you can upgrade only to the latest supported
versions of Cloud Composer 2.
In Google Cloud CLI, API, or Terraform, you can upgrade an environment
to the latest supported versions, three previous versions of
Cloud Composer 2, the last patch version of the previous minor
version, and to versions with an extended upgrade timeline. It's not
possible to upgrade to other versions of Cloud Composer 2, even if
they are still supported and can be used to create a new environment.
Example of upgrade choices for Google Cloud CLI, API, and Terraform:
Latest versions: composer-2.11.5-airflow-*
Three previous Cloud Composer 2 versions:
composer-2.11.4-airflow-* , composer-2.11.3-airflow-* ,
composer-2.11.2-airflow-* .
Last patch of the previous Cloud Composer 2 minor version:
composer-2.10.2-airflow-*
Cloud Composer 2 versions with an extended upgrade timeline:
composer-2.10.2-airflow-* , composer-2.10.1-ariflow-* ,
composer-2.9.7-airflow-* , and other versions with an extended upgrade
timeline.
The version that you upgrade to must support your environment's
current Python version.
The Compute Engine API quota limits can prevent upgrades.
In Google Cloud console, navigate to the IAM and Admin
> Quotas and System Limits page and check if the
Compute Engine API quota for CPU is not exceeded. If the
quota threshold is being approached, request Quota extension before
proceeding with upgrade operation.
You can't upgrade your environment if the Airflow database contains
more than 16 GB
of data. During an upgrade, a warning is shown if the Airflow database size
is more than 16
GB. In this case, perform the database maintenance to reduce
the database size.
If you use the XCom mechanism to transfer files, make sure that you
use it according to Airflow's guidelines .
Transferring big files or a large number of files using XCom impacts
Airflow database's performance and can lead to failures when loading
snapshots or upgrading your environment. Consider using alternatives such
as Cloud Storage to transfer large volumes of data.
Before you begin
Caution:
Make sure that you know the differences between
the current versions of Airflow and Cloud Composer and the
versions that you are upgrading to.
The new version can include different versions of preinstalled
packages, patches from Cloud Composer, or changes in Airflow
functionality, provided by the Airflow open source project. You can
check the versions of provider packages that are included in
a specific version.
Make sure that your DAGs are compatible with the new Airflow version and
new versions of all provider packages (including the Airflow provider
package for Google Cloud and Google services). Incompatible changes can
cause your DAGs to no longer work.
During an upgrade operation, all running tasks are terminated .
After the upgrade is completed, Airflow schedules these tasks for a retry,
depending on the way you configure retries for your DAGs.
Do not upgrade GKE clusters of your
Cloud Composer environments to newer versions. Use the
GKE version that was pre-configured during the environment
creation and rely on auto-upgrades of the GKE service.
We recommend to create a new snapshot of the
environment to be able to re-create the environment in case this is needed.
Your account must have a role that can trigger environment upgrade
operations. In addition, the service account of the environment must have a
role that has enough permissions to perform upgrade operations. For more
information, see Access control .
You might notice
Compute Engine metadata entries
for the GKE clusters that belong to environments in your
project. During GKE cluster creation and upgrades,
Google Kubernetes Engine automatically adds project-level metadata entries
( google_compute_project_metadata ) to track secondary IP address range
usage. Don't modify or remove these entries. Google Kubernetes Engine manages them
automatically.
Check that your environment is up to date
Cloud Composer displays warnings when
your environment's image approaches its end of full support date.
You can use these warnings to always keep your environment
supported .
Figure 1. A deprecation message is displayed on the Environment
details page
Cloud Composer keeps track of the
Cloud Composer image version
that your environment is based on. When it approaches the
end of support date ,
you can see a warning in the list of environments and on the
Environment details page.
Note: You can always upgrade your environment, even if
Cloud Composer image version is past its full support period.
To check if your environment is up to date:
Console
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
In the Image version field, one of the following messages is displayed:
Newest available version . Your environment image is fully supported.
New version available . Your environment image is fully supported and
you can upgrade it to a later version.
Support for this image version ends in... Your environment image
approaches the end of the full support period.
This version is not supported as of... Your environment is past the
full support period.
gcloud
This functionality is not available through Google Cloud CLI. You can
View suggested upgrades instead, which shows new versions
that are available.
API
This functionality is not available through API. You can
View suggested upgrades instead, which shows new versions
that are available.
View suggested upgrades
Cloud Composer provides a list of
Cloud Composer versions
that you can upgrade your environment to.
Note: The list of suggested versions
doesn't list all available versions that you can use .
For example, you can upgrade to several previous versions of
Cloud Composer. For more information about Cloud Composer
versions that you can choose for upgrading, see
Limitations of upgrade operations .
To view Cloud Composer versions suggested for an upgrade:
Console
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab and click
Upgrade Image Version .
For the list of suggested versions, click the Cloud Composer
Image version drop-down menu.
gcloud
gcloud composer environments list-upgrades \
ENVIRONMENT_NAME \
--location LOCATION
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Example:
gcloud composer environments list-upgrades example-environment \
--location us-central1
API
You can view available versions for a location. To do so, construct an
imageVersions.list API request.
For example:
// GET https://composer.googleapis.com/v1/projects/example-project/
// locations/us-central1/imageVersions
Check for PyPI package conflicts
You can check if PyPI packages installed in your environment have any
conflicts with preinstalled packages in the new
Cloud Composer image.
A successful check means that there are no conflicts in PyPI package
dependencies between the current and the specified version. However, an
upgrade operation might still not be successful because of other reasons.
Console
To run an upgrade check for your environment:
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab, locate
the Image version entry, and click Upgrade .
In the Environment version upgrade dialog, in
the New version drop-down list, select
a Cloud Composer version
that you want to upgrade to.
In the PyPI packages compatibility section, click
Check for conflicts .
Wait until the check is complete. If there are PyPI package dependency
conflicts, then the displayed error messages contain details about
conflicting packages and package versions.
gcloud
To run an upgrade check for your environment, run the
environments check-upgrade
command with the
Cloud Composer image version.
that you want to upgrade to.
gcloud composer environments check-upgrade \
ENVIRONMENT_NAME \
--location LOCATION \
--image-version VERSION
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
VERSION with
the new Cloud Composer image version
that you want to upgrade to, in the composer-a.b.c-airflow-x.y.z
format.
You can use all version aliases .
Example:
gcloud composer environments check-upgrade example-environment \
--location us-central1 \
--image-version composer-2.16.10-airflow-2.10.5
Example output:
Waiting for [projects/example-project/locations/us-central1/environments/
example-environment] to be checked for PyPI package conflicts when upgrading
to composer-2.16.10-airflow-2.10.5. Operation [projects/example-project/locations/
us-central1/operations/04d0e8b2-...]...done.
...
Response:
'@type': type.googleapis.com/
google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse
buildLogUri: ...
containsPypiModulesConflict: CONFLICT
pypiConflictBuildLogExtract: |-
The Cloud Build image build failed: Build failed; check build logs for
details. Full log can be found at ...
Error details: tensorboard 2.2.2 has requirement
setuptools>=41.0.0, but you have setuptools 40.3.0.
As an alternative, you can run an upgrade check asynchronously. Use the
--async argument to make an asynchronous call, then check the result with
the gcloud composer operations describe
command.
API
Construct an environments.checkUpgrade API
request.
Specify the image version in the imageVersion field:
{
"imageVersion" : " VERSION "
}
Replace VERSION with the new version that you want to upgrade to, in
the composer-a.b.c-airflow-x.y.z format.
Check for conflicts with Cloud Composer 3
While it isn't possible to migrate your environment from Cloud Composer 2 to
Cloud Composer 3 in-place, you can check for compatibility problems using an
upgrade check. We recommend to do it before
migrating to Cloud Composer 3 .
To check for compatibility with Cloud Composer 3, make a regular upgrade check
of your Cloud Composer 2 environment and specify a Cloud Composer 3 version
as a target.
Each reported conflict can have the following types:
BLOCKING conflicts report incompatible environment configuration elements
that aren't supported in Cloud Composer 3. We recommend to address these
conflicts before starting a migration to Cloud Composer 3.
NON_BLOCKING conflicts report environment configuration elements that are
different in Cloud Composer 3 and might cause unexpected behavior. For
example, changes of the default values such as default maintenance windows
are reported as non-blocking conflicts. We recommend to check if these
conflicts can cause problems before starting the migration process.
PyPI package conflicts are also reported as part of this check. They are
reported separately from the configuration conflicts, in the same way as
for a regular PyPI package compatibility check .
Console
To check for compatibility with Cloud Composer 3, use
gcloud CLI or the Cloud Composer API.
Google Cloud console supports only checks for PyPI package compatibility.
gcloud
To check for compatibility with Cloud Composer 3, run the
environments check-upgrade
command and specify a Cloud Composer 3 version as a target.
gcloud composer environments check-upgrade \
ENVIRONMENT_NAME \
--location LOCATION \
--image-version COMPOSER_3_VERSION
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
COMPOSER_3_VERSION with
the Airflow version and build that you want to upgrade
to, in the airflow-x.y.z-build.t format. You can use all
version aliases .
Example:
gcloud composer environments check-upgrade example-environment \
--location us-central1 \
--image-version composer-3-airflow-2
Example conflict messages:
...
- message: Error validating property [core]unit_test_mode. Overriding [core]
unit_test_mode is not permitted.
type: BLOCKING
- message: Environment variables [GOOGLE_CLOUD_PROJECT] may not be overridden.
type: BLOCKING
- message: You have to specify Worker CPUs to be 0.5, 1.0 or multiples of 2.0.
type: BLOCKING
- message: The environment uses a default maintenance window, which is
different in Composer 2 and Composer 3. Unless set to a custom value, the
maintenance window will be changed to a new default after the upgrade.
type: NON_BLOCKING
...
As an alternative, you can run this check asynchronously. Use the
--async argument to make an asynchronous call, then check the result with
the gcloud composer operations describe
command.
API
Construct an environments.checkUpgrade API
request.
Specify the image version in the imageVersion field:
{
"imageVersion" : " COMPOSER_3_VERSION "
}
Replace COMPOSER_3_VERSION with the Airflow version and build
that you want to upgrade to, in the airflow-x.y.z-build.t format. You can
use all version aliases .
Upgrade your environment
Caution: Pause all DAGs and wait for in-progress tasks to finish before
upgrading.
To upgrade your environment
to a later version of Cloud Composer or Airflow:
Console
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
Locate the Image version item and click Upgrade .
From the Image version drop-down menu, select
a Cloud Composer version
that you want to upgrade to.
Click Upgrade .
gcloud
gcloud composer environments update \
ENVIRONMENT_NAME \
--location LOCATION \
--image-version VERSION
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
VERSION with
the new Cloud Composer image version
that you want to upgrade to, in the composer-a.b.c-airflow-x.y.z
format.
You can also use all
version aliases .
For example:
gcloud composer environments update
example-environment \
--location us-central1 \
--image-version composer-2.16.10-airflow-2.10.5
API
Construct an environments.patch API request.
In this request:
In the updateMask parameter, specify the
config.softwareConfig.imageVersion mask.
In the request body, in the imageVersion field, specify a new
version that you want to upgrade to.
For example:
// PATCH https://composer.googleapis.com/v1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.softwareConfig.imageVersion
{
"config" : {
"softwareConfig" : {
"imageVersion" : "composer-2.16.10-airflow-2.10.5"
}
}
}
Terraform
The image_version field in the config.software_config block
controls
the Cloud Composer image of your environment. In this
field, specify a new Cloud Composer image.
resource "google_composer_environment" "example" {
provider = google-beta
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
software_config {
image_version = " VERSION "
}
}
}
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
the new Cloud Composer image version
that you want to upgrade to, in the composer-a.b.c-airflow-x.y.z
format.
You can also use all
version aliases .
Example:
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
software_config {
image_version = "composer-2.16.10-airflow-2.10.5"
}
}
}
What's next
List of versions
Cloud Composer versioning
Update environments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
