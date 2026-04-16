---
title: "Cloud Composer versioning overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/concepts/versioning/composer-versioning-overview
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/concepts/versioning/composer-versioning-overview
  title: "Cloud Composer versioning overview \_|\_ Google Cloud Documentation"
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
Resources
Send feedback
Cloud Composer versioning overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Cloud Composer versioning and lists differences
between major Cloud Composer versions.
Major versions of Cloud Composer
Cloud Composer has the following major versions:
Cloud Composer 3 . This version has simplified network setup and hides
infrastructure components including the environment's cluster and environment's dependencies on other services.
Cloud Composer 2 . In this version, the environment's cluster scales
automatically to meet the resource demands.
Important: On September 15, 2026 , versions 2.0.x of
Cloud Composer 2 will reach their planned end of life, and you won't be able to use them. Versions 2.1.x and later aren't affected by this change.
We recommend upgrading your environment to the latest
Cloud Composer 2 version or
migrating to Cloud Composer 3 .
Cloud Composer 1 . Has manual environment scaling, the infrastructure
is deployed to your projects and networks.
Important: On March 25, 2024 , Cloud Composer 1 entered its
post-maintenance mode. Google will not release any further updates to
Cloud Composer 1, including new versions of Airflow, bugfixes, and security
updates. On September 15, 2026 , all Cloud Composer 1 environments will
reach their planned end of life, and you won't be able to use them. We
recommend migration to Cloud Composer 3 .
Comparison of Cloud Composer versions
The following table lists major differences between
Cloud Composer 1, Cloud Composer 2, and Cloud Composer 3.
Feature
Cloud Composer 1
Cloud Composer 2
Cloud Composer 3
Image version
composer-1.b.c-airflow-x.y.z
composer-2.b.c-airflow-x.y.z
composer-3-airflow-x.y.z-build.t
Airflow versions
Airflow 1.10.* and Airflow 2
Airflow 2
Airflow 2, Airflow 3 (Preview)
Python versions
3.8.12
3.11.8 (3.11.5 and 3.8.12 in earlier versions)
3.11.8
Environment's cluster
Standard mode VPC-native or Routes-based Google Kubernetes Engine cluster
Autopilot mode VPC-native Google Kubernetes Engine cluster
Environment's cluster is not deployed into your project.
Horizontal scaling
Can adjust the number of nodes in the environment's cluster. This changes the number of Airflow workers.
Can adjust the number of Airflow schedulers.
Automatically scaling number of Airflow workers, based on demand. Can set and change upper and lower limits for the number of workers.
Can adjust the number of Airflow schedulers and triggerers
Automatically scaling number of Airflow workers, based on demand. Can set and change upper and lower limits for the number of workers.
Can adjust the number of Airflow schedulers, triggerers, and DAG processors
Vertical scaling
Can set machine types for cluster nodes, Airflow web server and database when creating an environment. Can change machine types for Airflow web server and database.
Can set and change the workloads configuration: CPU, memory, and storage parameters for Airflow workers, schedulers, web server, and the environment size.
Can set and change the workloads configuration: CPU, memory, and storage parameters for Airflow workers, schedulers, web server, DAG processors, and the environment size.
Pricing model
Cloud Composer 1 pricing model
Cloud Composer 2 pricing model
Cloud Composer 3 pricing model
Access control
Cloud Composer 1 roles
Cloud Composer roles. Uses Workload Identity Federation for GKE and requires additional permissions for the Cloud Composer Service Agent account.
Cloud Composer roles. Uses Workload Identity Federation for GKE. Extra permissions are not required
Access through Workforce Identity Federation
Not supported
Supported
Supported
Highly Resilient environments
Not supported
Supported
Supported
Database retention policy
Not supported
Not yet available
Supported
Private IP networking
VPC peerings
Private Service Connect
Simplified network setup. Can be changed between Public and Private IP in an existing environment.
VPC Service Controls
Supported
Supported
Supported
Airflow executors
Celery Executor
Celery Executor
CeleryKubernetes Executor
Airflow triggerer (deferrable operators)
Not supported
Supported
Supported
Custom service account for KubernetesPodOperator
Supported
Supported
Not supported
CMEK
Supported
Supported
Supported
Web server access controls
Supported
Supported
Supported
Restarting web server
Supported
Supported
Supported
Web server plugins
Supported in Airflow 1 environments with disabled DAG serialization.
Supported
Supported, plugins can be disabled and enabled on demand.
Scheduler plugins
Not supported
Supported
Not supported
Listeners
Not supported
Supported
Only task-level listeners
TimeTables
Only Built-In
Custom and Built-In
Only Built-In
Scheduler custom PyPI packages
Not supported
Supported
Not supported
Installing custom plugins
Supported
Supported
Supported
Maintenance operations
All tasks can be impacted.
Tasks that take less than 55 minutes to execute are not impacted.
Tasks that take less than 24 hours to execute are not impacted.
Storing Snapshots
Supported for Airflow 2.x and 1.10.15 versions
Supported
Supported
Loading Snapshots
Not supported
Supported
Supported
Scheduled Snapshots
Not supported
Supported
Supported
Custom environment's bucket
Not supported
Supported
Supported
Saving Airflow task logs only in Cloud Logging
Not supported
Supported
Supported
Data lineage integration
Not supported
Supported
Supported
Composer Local Development CLI tool
Not supported
Supported
Supported
Comparison of Airflow versions
Preview
— Airflow 3
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Cloud Composer 3 provides environments with Airflow 2 and Airflow 3. While
Airflow 3 is in Preview, some Airflow and Cloud Composer features
might not be available.
Support for Cloud Composer 3 features
The following table summarizes Cloud Composer 3 features that
aren't yet supported in the Airflow 3 Preview. All other features of
Cloud Composer 3 that aren't listed are supported in the Airflow 3 Preview and
work similar to environments with Airflow 2.
Feature
Status
Description
Upgrades to Airflow 3 (snapshots)
Not supported in the Airflow 3 Preview
Side-by-side migration of existing Cloud Composer 3 environments from Airflow 2 to Airflow 3 using snapshots.
Upgrades to Airflow 3 (in-place)
Not supported in the Airflow 3 Preview
In-place upgrades of existing Cloud Composer 3 environments from Airflow 2 to Airflow 3 by specifying a version with Airflow 3 during an upgrade.
Workforce Identity Federation support
Not supported in the Airflow 3 Preview
Using an external identity provider in environments with Airflow 3.
Known issues in Airflow 3 preview
The following known issues have been identified in the Airflow 3 preview:
Warning messages in the logs of Airflow workloads. These messages can be
safely ignored.
The airflowctl utility can't be easily used from headless environments such
as Airflow workers in Cloud Composer or Docker containers. This
is a limitation of the utility. For more information about this limitation,
see
Issue 58230
in the Airflow repository on GitHub.
Support for Airflow 3 features
The following table lists Airflow 3 features and
their support in the Airflow 3 Preview:
Feature
Status
Airflow 3.0 UI
Supported
DAG versioning
Supported
Backfills (from Airflow UI)
Supported
Event-driven scheduling
Supported
Assets
Supported
Inference execution and hyper-parameter tuning
Supported
airflowctl command-line tool
Supported
DAG bundles (other than LocalDagBundle)
Not supported in the Airflow 3 Preview
Edge Executor and tasks in other programming languages
Not supported in the Airflow 3 Preview
Cloud Composer images
To run Apache Airflow, Cloud Composer builds Docker images
that bundle Airflow releases with other common binaries and Python
libraries.
Cloud Composer images include Airflow modifications that are
specific to Cloud Composer and unsuitable for the upstream Airflow
codebase. Each Cloud Composer image contains preinstalled packages
along with Cloud Composer-specific Airflow changes.
Google periodically releases
new Cloud Composer images :
In Cloud Composer 3, images include new builds of supported Airflow
versions. You can select an Airflow version and a build that you want to
use. Your environment gets Cloud Composer improvements
automatically.
In Cloud Composer 2 and Cloud Composer 1, images include
Cloud Composer improvements and new builds of supported
Airflow versions. To get Cloud Composer improvements, you
upgrade your environment to a later version of Cloud Composer.
Version deprecation and support
Composer 3
Google supports an Airflow build for a period of time
after it was released:
0-12 months from the release date : Cloud Composer 3
environments running this Airflow build are supported.
12+ months from the release date : Cloud Composer 3
environments running these versions are unsupported.
After an Airflow build is no longer supported, environments
running this Airflow build are also unsupported and entirely user-managed.
Deprecated: In the past, some Airflow builds in Cloud Composer 3 had their
end of support date listed as "To be announced". This approach was
deprecated. We're now providing support dates that depend
on the date when a particular Airflow build was released. All Airflow
builds that didn't have an end of support date when this change was
introduced are supported until July 1, 2026 . Because of this change,
some Airflow builds released before July 1, 2025 are supported for longer
than the regular support period of 12 months. All builds released after
July 1, 2025 use the regular support period. All Airflow builds that had
their support date shorter than 12 months are now supported for 12 months
since the date of their initial release.
Environments work with supported and unsupported Airflow builds in the
following way:
You can create environments with all Airflow builds that are supported.
You can still use an environment with an Airflow build that is no longer
supported. The environment still works, you can keep using it, and you can
upgrade it to a
supported Airflow build .
In some cases, an upgrade to a later Airflow version or build is
the only available solution for a security vulnerability.
Composer 2
Google supports Cloud Composer 2 versions for a period of
time after the version's release:
0-12 months from the release date : Cloud Composer 2
environments running these versions are supported.
12+ months from the release date : Cloud Composer 2
environments running these versions are unsupported.
Important: In some cases, an upgrade to a more recent
Cloud Composer and Airflow version is the only available
solution for a security vulnerability.
You can use Cloud Composer versions after the date they are
no longer supported. For example, if your environment is based on a
Cloud Composer version that is past the support period, the
environment still works and you can keep using it. In this case, we recommend
you to upgrade your environment to a
supported version .
Composer 1
New Cloud Composer 1 versions were released until the end of March 2023.
All released Cloud Composer 1 versions follow
the same version deprecation policy as Cloud Composer 2 and are supported
according to it.
Deprecated: On March 25, 2024 , Cloud Composer 1 entered its
post-maintenance mode. Google will not release any further updates to
Cloud Composer 1, including new versions of Airflow, bugfixes, and security
updates. On September 15, 2026 , all Cloud Composer 1 environments will
reach their planned end of life, and you will not be able to use them. We
recommend migration to Cloud Composer 3 .
Version schemas
This section describes Airflow and Cloud Composer version schemas
and version aliases.
Airflow version schema
Airflow follows
the semantical software versioning schema .
Each version of Airflow has a major , minor , and patch version.
Composer 3
In Cloud Composer 3, new Airflow versions and builds become available as the
time goes.
Your environment can function with all previous Airflow versions and builds,
and receives updates to its infrastructure components automatically. Each
version and build is supported as described in
Version deprecation and support , and you
can choose to upgrade your Airflow version to a later version or build.
Composer 2
For a list of Airflow versions supported in each Cloud Composer
version, see the list of Cloud Composer versions .
In each release, Cloud Composer 2 supports
two minor versions of Airflow 2 .
For example, Cloud Composer 2.4.0 supports Airflow 2.4.* and
Airflow 2.5.*.
For each minor version of Airflow 2, Cloud Composer
supports one patch version .
For example, for Airflow 2.4.*, Cloud Composer supports
Airflow 2.4.3.
When a new patch version of Airflow 2 becomes available in
Cloud Composer, the corresponding release has
two patch versions of Airflow 2 available for the same minor version
of Airflow. The previous patch version is then removed in one of the next
releases.
For example, Cloud Composer 2.3.4 supports both Airflow 2.5.1
and Airflow 2.5.3.
Cloud Composer can skip some Airflow patch versions between
releases of Cloud Composer. In addition, if there are
functional, quality, or performance issues with a specific patch version
of Airflow, Cloud Composer can also skip this version.
For example, Airflow 2.1.3 is skipped and Airflow 2.1.4 is available.
A Cloud Composer release running a stable Airflow version can
include Airflow updates that are backported from a later Airflow version.
Composer 1
The latest version of Airflow supported in Cloud Composer 1 is Airflow 2.4.3.
Only Cloud Composer 1 supports Airflow 1.10.15, which is the latest released
version of Airflow 1.
Cloud Composer version schema
Composer 3
Cloud Composer 3 versioning schema captures Airflow versions and builds:
composer-3-airflow-x.y.z-build.t
Where:
composer-3 is the major version of Cloud Composer.
airflow-x.y.z.build.t is the Airflow version and build.
Every next release of the same Airflow version in Cloud Composer 3 has a
higher build number. The build number is defined by
Cloud Composer and not by the Airflow open source project.
Composer 2
Cloud Composer 2 image versioning schema captures Cloud Composer
and Airflow versions:
composer-2.b.c-airflow-x.y.z
Where:
composer-2.b.c denotes the minor and patch version of
Cloud Composer-managed customizations in Cloud Composer 2.
As a general rule, minor versions of Cloud Composer correspond
to significant changes in functionality compared to the previous minor
version, such as when the available set of Airflow versions is changed.
Patch versions are updated in subsequent releases.
airflow-x.y.z is the Airflow release, it denotes the major, minor, and
patch version of Airflow that's used in a specific
Cloud Composer image.
Composer 1
Cloud Composer 1 image versioning schema captures Cloud Composer
and Airflow versions:
composer-1.b.c-airflow-x.y.z
Where:
composer-1.b.c is the version of Cloud Composer-managed
customizations
airflow-x.y.z is the Airflow release
Version aliases
Version aliases work in the following way:
Cloud Composer resolves the version alias to the full format when
it creates your environment:
All version aliases become composer-3-airflow-x.y.z-build.t in
Cloud Composer 3.
All version aliases become composer-a.b.c-airflow-x.y.z in
Cloud Composer 2 and Cloud Composer 1.
In Cloud Composer 3, using a version alias, such as
composer-3-airflow-x.y
does not automatically upgrade the Airflow version and build of your
environment. The environment stays on the same Airflow build and
version until you upgrade it. The environment still receives automatic
infrastructure upgrades, as usual.
In Cloud Composer 2 and Cloud Composer 1, using a version alias, such as
composer-a-airflow-x.y.z does not provide automatic upgrades for an
environment. The environment stays on the same Cloud Composer
and Airflow version until you upgrade it.
Cloud Composer 3 version aliases
Cloud Composer 3 supports the following version aliases:
Alias
Airflow version
composer-3-airflow-2
Latest version and build of Airflow 2
composer-3-airflow-x.y
Latest version and build of Airflow within x.y major and minor versions
composer-3-airflow-x.y.z
Latest build of the specified version of Airflow
Cloud Composer 2 version aliases
Cloud Composer 2 supports the following version aliases:
Alias
Cloud Composer version
Airflow version
composer-2-airflow-2
Latest version of Cloud Composer 2
Latest version of Airflow 2
composer-2-airflow-x.y
Latest version of Cloud Composer 2
Latest version of Airflow within x.y major and minor versions
composer-2-airflow-x.y.z
Latest version of Cloud Composer 2
Specified version of Airflow
composer-2.b.c-airflow-x.y
Specified version of Cloud Composer 2
Latest version of Airflow available within x.y major and minor versions
Cloud Composer 1 version aliases
Cloud Composer 1 supports the following version aliases:
Alias
Cloud Composer version
Airflow version
composer-1-airflow-2
Latest version of Cloud Composer 1
Latest version of Airflow 2
composer-1-airflow-1
Latest version of Cloud Composer 1
Latest version of Airflow 1
composer-1-airflow-x.y
Latest version of Cloud Composer 1
Latest version of Airflow within x.y major and minor versions
composer-1-airflow-x.y.z
Latest version of Cloud Composer 1
Specified version of Airflow
composer-1.b.c-airflow-x.y
Specified version of Cloud Composer 1
Latest version of Airflow available within x.y major and minor versions.
The following version aliases point to Cloud Composer 3. You can still use
them, but consider switching to aliases for your version of
Cloud Composer.
composer-latest-airflow-x.y is equal to composer-3-airflow-x.y .
composer-latest-airflow-x.y.z is equal to composer-3-airflow-x.y.z .
Version arguments in Google Cloud CLI
When you create or upgrade
a Cloud Composer environment using Google Cloud CLI, you can
specify Cloud Composer and Airflow versions:
Composer 3
--image-version argument specifies the Airflow version and build in the
composer-3-airflow-x.y.z-build.t format. You can use
version aliases , which are resolved by
Google Cloud CLI into the full format.
--airflow-version specifies the Airflow version in the following formats:
The x.y.z format is for the latest build of the specified version of
Airflow. This format is equal to the composer-3-airflow-x.y.z
version alias.
The x.y format is for the latest build of Airflow available within
x.y major and minor versions. This format is equal to the
composer-3-airflow-x.y version alias.
x.y.z-build.t is the specified version and build of Airflow. This
format is equal to composer-3-airflow-x.y.z-build.t .
Composer 2
--image-version argument specifies Cloud Composer 2 and Airflow
versions:
composer-a.b.c-airflow-x.y.z format creates an environment with the
specified versions of Cloud Composer and Airflow.
Version aliases first resolve to
the composer-a.b.c-airflow-x.y.z format and then create an
environment with the specified versions of Cloud Composer 2
and Airflow.
--airflow-version specifies the Airflow version in the following formats:
The x.y.z format is for the latest version of Cloud Composer 2 and
the specified version of Airflow. This format is equal to
the composer-2-airflow-x.y.z version alias.
The x.y format is for the latest version of Cloud Composer 2 and the
latest version of Airflow available within x.y major and minor
versions. This format is equal to the composer-2-airflow-x.y
version alias.
Composer 1
--image-version argument specifies Cloud Composer 1 and Airflow
versions:
composer-a.b.c-airflow-x.y.z format creates an environment with the
specified versions of Cloud Composer and Airflow.
Version aliases first resolve to
the composer-a.b.c-airflow-x.y.z format and then create an
environment with the specified versions of Cloud Composer 1
and Airflow.
--airflow-version specifies the Airflow version in the following formats:
The x.y.z format is for the latest version of Cloud Composer 1 and
the specified version of Airflow. This format is equal to
the composer-1-airflow-x.y.z version alias.
The x.y format is for the latest version of Cloud Composer 1 and the
latest version of Airflow available within
x.y major and minor versions. This format is equal to the
composer-1-airflow-x.y version alias.
What's next
Cloud Composer images
Create an environment
Upgrade an existing Cloud Composer environment
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
