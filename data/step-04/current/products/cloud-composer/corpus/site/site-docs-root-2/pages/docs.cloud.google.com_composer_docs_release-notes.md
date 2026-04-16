---
title: "Cloud Composer release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-versions
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/release-notes
  title: "Cloud Composer release notes \_|\_ Google Cloud Documentation"
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
Cloud Composer release notes
Stay organized with collections
Save and categorize content based on your preferences.
These release notes apply to the Cloud Composer service. Announcements
and information about new or updated features, bug fixes and deprecated
functionality is published on this page.
You can also:
Follow Cloud Composer release notes in the
Apache Airflow Community workspace
on Slack.
See
Cloud Composer version list
for more information about Cloud Composer images and support
dates.
Check the Cloud Composer known issues
page to learn more about known issues and possible workarounds.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 01, 2026
Feature
Airflow 2.11.1 is available in Cloud Composer 3 and Cloud Composer 2.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.11.1-build.0
composer-3-airflow-3.1.7-build.4
composer-3-airflow-2.10.5-build.33 (default)
composer-3-airflow-2.9.3-build.53
Change
New images
are available in Cloud Composer 2:
composer-2.16.10-airflow-2.11.1
composer-2.16.10-airflow-2.10.5 (default)
composer-2.16.10-airflow-2.9.3
March 27, 2026
Announcement
Cloud Composer 2 environments can no longer be created in
Melbourne (australia-southeast2). We're switching this region to
supporting only Cloud Composer 3 environments. Existing Cloud Composer 2
environments in this region aren't affected by this change.
Announcement
A new Cloud Composer release has started on March 27, 2026 . Get ready
for upcoming changes and features as we roll out the new release to all regions.
This release is in progress at the moment. Listed changes and features might
not be available in some regions yet.
Change
(Airflow 3.1.7) Starting from version composer-3-airflow-3.1.7-build.1,
Airflow workers no longer have direct access to the Airflow database of your
environment.
This feature was
announced previously
and has finished gradually rolling out to all regions supported by
Cloud Composer 3.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.7-build.3
composer-3-airflow-2.10.5-build.32 (default)
composer-3-airflow-2.9.3-build.52
Change
New images
are available in Cloud Composer 2:
composer-2.16.9-airflow-2.10.5 (default)
composer-2.16.9-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.19 and composer-2.12.0-*.
March 19, 2026
Announcement
Cloud Composer 2 environments can no longer be created in
Berlin (europe-west10) and Dallas (us-south1). We're switching these regions to
supporting only Cloud Composer 3 environments. Existing Cloud Composer 2
environments in these regions aren't affected by this change.
Change
(Airflow 3.1.7 in Cloud Composer 3)
The apache-airflow-providers-cncf-kubernetes package was
upgraded to version 10.14.0 .
For changes in other packages, see the
preinstalled packages changelog .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.7-build.2
composer-3-airflow-2.10.5-build.31 (default)
composer-3-airflow-2.9.3-build.51
Change
New images
are available in Cloud Composer 2:
composer-2.16.8-airflow-2.10.5 (default)
composer-2.16.8-airflow-2.9.3
March 17, 2026
Change
(Airflow 3.1.7) Starting from version composer-3-airflow-3.1.7-build.1,
Airflow workers no longer have direct access to the Airflow database of your
environment.
This change follows the architectural and security improvements
introduced in the community version of Airflow 3.0. For more information about
an alternative way to export and access the data stored in the Airflow
database, see
Access the Airflow database .
This change is gradually rolled out to all regions supported by
Cloud Composer 3.
Change
(Airflow 3.1.7 in Cloud Composer 3)
The apache-airflow-providers-google package was upgraded to version 20.0.0.
For more information about changes, see the
apache-airflow-providers-google changelog .
Change
(Airflow 3.1.7 in Cloud Composer 3)
The apache-airflow-providers-cncf-kubernetes package was
upgraded to version 10.13.0 .
For changes in other packages, see the
preinstalled packages changelog .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.7-build.1
composer-3-airflow-2.10.5-build.30 (default)
composer-3-airflow-2.9.3-build.50
Change
New images
are available in Cloud Composer 2:
composer-2.16.7-airflow-2.10.5 (default)
composer-2.16.7-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.18, composer-3-airflow-2.9.3-build.17, composer-2.11.5-*, and composer-2.11.4-*.
March 10, 2026
Announcement
Cloud Composer 2 environments can no longer be created in
Turin (europe-west12). We're switching this region to supporting only
Cloud Composer 3 environments.
March 03, 2026
Feature
Airflow 3.1.7 is available in Cloud Composer 3.
Feature
Highly Resilient environments
are available in environments with Airflow 3 (Preview) starting from
Airflow version 3.1.7.
Feature
Per-folder roles registration
is available in environments with Airflow 3 (Preview) starting from Airflow version 3.1.7.
Change
Airflow 3.1.0 is no longer included in Cloud Composer images and builds.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.7-build.0
composer-3-airflow-2.10.5-build.29 (default)
composer-3-airflow-2.9.3-build.49
Change
New images
are available in Cloud Composer 2:
composer-2.16.6-airflow-2.10.5 (default)
composer-2.16.6-airflow-2.9.3
February 20, 2026
Feature
Cloud Composer API now accepts the new
https://www.googleapis.com/auth/cloudcomposer OAuth scope. This scope
provides access only to the Cloud Composer API and can't be used to call other
Google Cloud APIs.
Change
The enable_private_environment boolean field in the Cloud Composer API is
going to be deprecated in the future. When making direct calls to Cloud
Composer API, use the new networking_type field instead.
This change affects only direct calls to the Cloud Composer API.
Google Cloud CLI commands and the google_composer_environment resource in
Terraform are not affected.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.10
composer-3-airflow-2.10.5-build.27 (default)
composer-3-airflow-2.9.3-build.47
Change
New images
are available in Cloud Composer 2:
composer-2.16.5-airflow-2.10.5 (default)
composer-2.16.5-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.16 and composer-2.11.3-*.
February 16, 2026
Feature
Environment snapshots
are available in environments with Airflow 3 (Preview). This change is now
rolled out to all regions supported by Cloud Composer 3.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.9
composer-3-airflow-2.10.5-build.26 (default)
composer-3-airflow-2.9.3-build.46
Change
New images
are available in Cloud Composer 2:
composer-2.16.4-airflow-2.10.5 (default)
composer-2.16.4-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.15 and composer-2.11.2-*.
February 10, 2026
Fixed
(Available without upgrading in Cloud Composer 3) Fixed load snapshot
operations that were failing with invalid configuration error for the recently
created snapshots.
Fixed
(Available without upgrading) Fixed an issue where Airflow workloads used the
Performance Persistent Disk type ( pd-ssd ) instead of the Standard Persistent
Disk type ( pd-standard ).
January 29, 2026
Feature
The Composer Local Development CLI tool
is now available for Airflow 3 (Preview).
Feature
Environment snapshots
are available in environments with Airflow 3 (Preview).
This feature is gradually rolled out in several releases and is available in
the following regions in this release: africa-south1, asia-east1, asia-east2,
asia-northeast2, asia-northeast3, asia-south2, asia-southeast2,
australia-southeast2, europe-central2, europe-north1, europe-north2,
europe-southwest1, europe-west10, europe-west12, europe-west3, europe-west4,
europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1,
northamerica-northeast1, northamerica-northeast2, northamerica-south1,
southamerica-east1, southamerica-west1, us-east1, us-east5, us-south1,
us-west2, us-west3 and us-west4.
Feature
(Cloud Composer 2) Airflow component metrics are now available
on the Monitoring dashboard
in the Google Cloud console. This feature was previously available only in
Cloud Composer 3.
Fixed
(Available without upgrading) Cloud Composer 3 environment metadata in Cloud
Asset Inventory now matches the environment configuration available through the
Cloud Composer API, including the image version format.
Fixed
(Airflow 2) The Dag Details view in Airflow UI now scrolls correctly when the
"Run config" field contains long values.
Change
(Airflow 3.1.0 in Cloud Composer 3)
The apache-airflow-providers-google package was upgraded to version 19.4.0.
For more information about changes, see the
apache-airflow-providers-google changelog .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.8
composer-3-airflow-2.10.5-build.25 (default)
composer-3-airflow-2.9.3-build.45
Change
New images
are available in Cloud Composer 2:
composer-2.16.3-airflow-2.10.5 (default)
composer-2.16.3-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.14 and composer-2.11.1-*.
January 14, 2026
Feature
Database retention policy is now available
in environments with Airflow 3, starting with composer-3-airflow-3.1.0-build.5.
This change is now rolled out to all regions supported by Cloud Composer 3.
Change
Cloud Composer 3 environments no longer consume the Cloud SQL Admin API quota
in the customer project.
Fixed
Improved error handling when an invalid Airflow version is specified during environment creation.
Change
(Airflow 3.1.0 in Cloud Composer 3)
The apache-airflow-providers-google package was upgraded to version 19.2.0.
For more information about changes, see the
apache-airflow-providers-google changelog .
Change
(Airflow 3.1.0 in Cloud Composer 3)
The apache-airflow-providers-cncf-kubernetes
package was
upgraded to version 10.11.1 .
For changes in other packages, see the
preinstalled packages changelog .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.7
composer-3-airflow-2.10.5-build.24 (default)
composer-3-airflow-2.9.3-build.44
Change
New images
are available in Cloud Composer 2:
composer-2.16.2-airflow-2.10.5 (default)
composer-2.16.2-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.12, composer-2.10.2-airflow-2.9.3,
composer-2.10.2-airflow-2.10.2.
December 23, 2025
Issue
Environments with Cloud Composer 2 versions 2.16.0 and 2.16.1 might experience
a known issue
with the reporting of metrics. You can observe a few skipped data points in the
reported metrics and see error messages about the airflow-monitoring pod
restarts in the environment logs.
This issue doesn't affect the environment's functionality. The environment is
still operational and the environment health and monitoring information is
reported correctly. You can ignore the error messages.
December 17, 2025
Feature
Extra Large environments are now generally available (GA) in
Cloud Composer 3:
You can now use the
extra large environment size
for new and existing Cloud Composer 3 environments.
The new Extra Large environment preset is available in
the Google Cloud console. This preset sets the initial scale and
performance configuration for an environment that can support up to several
thousand DAGs. For more information about the estimated
number of supported DAGs, DAG runs, and tasks, see
Environment presets .
December 12, 2025
Feature
Database retention policy
is now available in environments with Airflow 3, starting with composer-3-airflow-3.1.0-build.5.
This change is gradually rolled out in several releases and is available in the
following regions in this release: africa-south1, asia-east1, asia-northeast2,
asia-northeast3, asia-south2, asia-southeast2, asia-southeast3,
australia-southeast2, europe-central2, europe-north2, europe-southwest1,
europe-west10, europe-west12, europe-west4, europe-west6,
europe-west8, europe-west9, me-central1, me-central2, me-west1,
northamerica-northeast1, northamerica-northeast2, northamerica-south1,
southamerica-east1, southamerica-west1, us-east5, us-south1, us-west3, us-west4.
Fixed
Fixed an issue where the Copy button on the DAG details page in the Airflow UI
was copying incorrect content.
Change
(Airflow 3.1.0 in Cloud Composer 3)
The apache-airflow-providers-google package was upgraded to version 19.1.0.
For more information about changes, see the
apache-airflow-providers-google changelog .
Change
(Airflow 3.1.0 in Cloud Composer 3)
The apache-airflow-providers-cncf-kubernetes
package was
upgraded to version 10.11.0 .
For changes in other packages, see the
preinstalled packages changelog .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.6
composer-3-airflow-2.10.5-build.23 (default)
composer-3-airflow-2.9.3-build.43
Change
New images
are available in Cloud Composer 2:
composer-2.16.1-airflow-2.10.5 (default)
composer-2.16.1-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.9.3-build.11, composer-2.10.1-*.
December 09, 2025
Announcement
The dates for maintenance exclusions were changed from the dates
announced earlier .
All Cloud Composer environment's
GKE clusters are now set up with maintenance exclusions from
December 4, 2025 to January 2, 2026. For more information, see
Maintenance exclusions .
Feature
Database retention policy is now available
in environments with Airflow 3, starting with composer-3-airflow-3.1.0-build.5.
This change is gradually rolled out in several releases and is available in the
following regions in this release: europe-north1, us-west2, us-east1,
europe-west3, asia-east2.
Fixed
Fixed an issue where composer.googleapis.com/environment/executor/open_slots
and composer.googleapis.com/environment/executor/running_tasks were not
available in environments with Airflow 3.
Change
(Cloud Composer 3) The name format for network attachments created by
Cloud Composer was modified to enhance uniqueness. This change applies only to
newly created network attachments.
Feature
(Cloud Composer 2) Cloud Composer's high availability infrastructure was
enhanced to provide greater resilience against zonal outages. This feature was
announced previously
and has finished gradually rolling out to all regions supported by
Cloud Composer.
Change
(Airflow 3.1.0 and 2.10.5) The apache-airflow-providers-google package was
upgraded to version 19.0.0 in Cloud Composer 2 images and Cloud Composer 3
builds.
For more information about changes, see the
apache-airflow-providers-google changelog
from version 18.0.0 to version 19.0.0.
Change
(Airflow 3.1.0 and 2.10.5) The apache-airflow-providers-cncf-kubernetes
package was
upgraded to version 10.9.0 .
For changes in other packages, see the
preinstalled packages changelog .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.5
composer-3-airflow-2.10.5-build.22 (default)
composer-3-airflow-2.9.3-build.42
Change
New images
are available in Cloud Composer 2:
composer-2.16.0-airflow-2.10.5 (default)
composer-2.16.0-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.7.3-build.22, composer-3-airflow-2.7.3-build.23,
composer-3-airflow-2.9.3-build.2, composer-3-airflow-2.9.3-build.3,
composer-3-airflow-2.9.3-build.4, composer-3-airflow-2.9.3-build.5,
composer-3-airflow-2.9.3-build.6, composer-3-airflow-2.9.3-build.7,
composer-3-airflow-2.9.3-build.10, composer-2.9.10-*, composer-2.9.11-*,
composer-2.10.0-*.
November 24, 2025
Issue
We discovered an issue that might impact the reporting of metrics in the
following recently released Cloud Composer versions:
composer-2.15.4-airflow-*
composer-3-airflow-2.10.5-build.20
composer-3-airflow-2.9.3-build.40
composer-3-airflow-3.1.0-build.3
To prevent additional environments from being affected, we have disabled the
ability to upgrade existing environments to these versions and to create new
environments using these versions. If your environment is already using one of
these versions, you can continue to use it as usual. We are working to resolve
the issue for all currently affected environments.
November 17, 2025
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-3.1.0-build.2
Announcement
All Cloud Composer environment's GKE clusters are set up with
maintenance exclusions from December 16, 2025 to January 2, 2026. For more
information, see
Maintenance exclusions .
November 14, 2025
Feature
You can now
start Gemini Cloud Assist investigations
for failed Airflow tasks.
November 05, 2025
Announcement
We strongly recommend to use
highly resilient environments
for production use cases. Highly resilient environments provide high
availability and use built-in redundancy and failover mechanisms to reduce the
environment's susceptibility to zonal failures and single point of failure
outages.
Fixed
Resolved an issue in the Kubernetes Pod Operator (KPO) where the Kubernetes
client experienced unreliable connections, leading to occasional failures. The
fix enhances connection stability through the addition of retry logic for
underlying connectivity problems.
Change
New images
are available in Cloud Composer 2:
composer-2.15.3-airflow-2.10.5 (default)
composer-2.15.3-airflow-2.9.3
Security
Fixed the CVE-2025-49844
vulnerability. The updated version of the environment component that hosts a
Redis-based task queue is available:
To apply the fix in Cloud Composer 3, upgrade the Airflow build of your
environment to airflow-2.10.5-build.19 or airflow-2.9.3-build.39, or later.
To apply the fix in Cloud Composer 2, upgrade your environment to
Cloud Composer version 2.15.3, or later.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.19 (default)
composer-3-airflow-2.9.3-build.39
October 30, 2025
Fixed
Fixed an error where Airflow components failed to start up when multiple
objects with the same name were present in the /dags or /plugins folder in
the environment's bucket.
Fixed
(Cloud Composer 3) Airflow workers are restarted when they exceed their
storage limit.
Change
New images
are available in Cloud Composer 2:
composer-2.15.2-airflow-2.10.5 (default)
composer-2.15.2-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.7.3-build.21 and composer-2.9.9-*.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.18 (default)
composer-3-airflow-2.9.3-build.38
Announcement
All Cloud Composer environment's GKE clusters will receive
maintenance exclusions from November 8, 2025 to December 2, 2025. For more
information, see
Maintenance exclusions .
October 27, 2025
Fixed
(Cloud Composer 2) Configuration of firewall rules for Private IP
environments now requires allowing egress traffic on port 19090.
Change
New images
are available in Cloud Composer 2:
composer-2.15.1-airflow-2.10.5 (default)
composer-2.15.1-airflow-2.9.3
October 22, 2025
Change
(Airflow 2.10.5) The apache-airflow-providers-google package was upgraded to version 18.0.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
For more information about changes, see the
apache-airflow-providers-google changelog
from version 17.2.0 to version 18.0.0.
Change
New images
are available in Cloud Composer 2:
composer-2.15.0-airflow-2.10.5 (default)
composer-2.15.0-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-3-airflow-2.7.3-build.20, composer-3-airflow-2.7.3-build.19,
composer-2.9.8-*, composer-2.9.7-*.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.17 (default)
composer-3-airflow-2.9.3-build.37
Change
(Airflow 2.10.5) The apache-airflow-providers-cncf-kubernetes package was
upgraded to version 10.8.2 .
For changes in other packages, see the
preinstalled packages changelog .
Change
The default value of the
NO_PROXY
environment variable now includes the IP address of the environment's cluster
Compute Engine metadata server.
October 10, 2025
Fixed
(Cloud Composer 2 versions from 2.12.0 to 2.12.3) Fixed a problem where
Airflow components in the environment's cluster were running out of ephemeral
storage. This change rolls out gradually over several releases to all regions
supported by Cloud Composer 2.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.16 (default)
composer-3-airflow-2.9.3-build.36
Change
New images
are available in Cloud Composer 2:
composer-2.14.4-airflow-2.10.5 (default)
composer-2.14.4-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-2.9.6-*, composer-3-airflow-2.7.3-build.17,
composer-3-airflow-2.7.3-build.18, composer-3-airflow-2.9.1-build.8, and
composer-3-airflow-2.9.1-build.9.
October 09, 2025
Feature
Upgrade checks
are now generally available (GA) in Cloud Composer 3 and Cloud Composer 2.
September 30, 2025
Change
(Airflow 2.10.5) The apache-airflow-providers-google package was upgraded
to version 17.2.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
For more information about changes, see the
apache-airflow-providers-google changelog from version 17.1.0 to
version 17.2.0.
Change
(Airflow 2.10.5) The apache-airflow-providers-cncf-kubernetes package was
upgraded to version 10.8.0
from version 10.7.0. For changes in other packages, see the
preinstalled packages changelog .
Fixed
The GCE_METADATA_TIMEOUT environment variable is changed to reserved. This
change addresses an issue where setting a low timeout value disrupted the
environment's operations that relied on the metadata server.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.15 (default)
composer-3-airflow-2.9.3-build.35
Issue
(Airflow 2.10.5) CloudComposerDAGRunSensor is broken in the
apache-airflow-providers-google package version 17.2.0. This package is used
by Cloud Composer versions and builds with Airflow 2.10.5 available in this
release. If your DAGs use this sensor, we recommend you postpone upgrading
until the issue is resolved.
Change
New images
are available in Cloud Composer 2:
composer-2.14.3-airflow-2.10.5 (default)
composer-2.14.3-airflow-2.9.3
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-2.9.4-*, composer-3-airflow-2.9.1 builds from build.0 to build.7, and
composer-3-airflow-2.7.3-build.16.
Fixed
DAG UI now correctly generates error messages about malformed serialized DAG.
September 11, 2025
Fixed
Fixed an issue where values of Airflow configuration options were evaluated
before being set. As a result, the actual value was set to the evaluated result.
Change
New images
are available in Cloud Composer 2:
composer-2.14.2-airflow-2.10.5 (default)
composer-2.14.2-airflow-2.9.3
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.14 (default)
composer-3-airflow-2.9.3-build.34
Fixed
Fixed Airflow logs not exporting to Cloud Logging because of a GKE version
mismatch between Airflow worker and GKE Control plane nodes.
September 03, 2025
Feature
(Cloud Composer 2) Cloud Composer's high availability infrastructure was
enhanced to provide greater resilience against zonal outages. This change rolls
out gradually over several releases to all regions supported by
Cloud Composer 2.
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.13 (default)
composer-3-airflow-2.9.3-build.33
Change
New images
are available in Cloud Composer 2:
composer-2.14.1-airflow-2.10.5 (default)
composer-2.14.1-airflow-2.9.3
Feature
(Available without upgrading) Cloud Composer 3 now supports DNS resolution
for
regional service endpoints .
You can now reach regional service endpoints from
DAGs in your environment. This change is available in Public IP environments
without additional configuration. For Private IP environments, an environment
must be
connected to a VPC network
where private endpoints are configured.
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-2.9.2-*, composer-2.9.3-*, and composer-3-airflow-2.7.3-build.15.
Feature
You can now check if a Cloud Composer 2 environment's configuration
is compatible with Cloud Composer 3 .
We recommend doing this check before migrating to Cloud Composer 3.
August 21, 2025
Change
New images
are available in Cloud Composer 2:
composer-2.14.0-airflow-2.10.5 (default)
composer-2.14.0-airflow-2.9.3
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.12 (default)
composer-3-airflow-2.9.3-build.32
Change
(Airflow 2.10.5) The apache-airflow-providers-google package was upgraded to version 17.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
For more information about changes, see the apache-airflow-providers-google changelog from version 15.1.0 to version 17.1.0.
Feature
Improved the startup times of Airflow workers for environments that have a
large number of custom PyPI packages installed.
This feature was
announced previously
and has finished gradually rolling out to all regions supported by
Cloud Composer.
Deprecated
The following Cloud Composer versions and builds have reached their
end of support period :
composer-2.9.0, composer-2.9.1, and composer-3-airflow-2.7.3 builds from build.5 to build.14.
Fixed
Airflow UI now shows the correct value of the [core]dags_folder Airflow
configuration option.
Change
(Airflow 2.10.5) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.7.0 from version 10.6.1. For changes in other packages, see the preinstalled packages changelog .
August 05, 2025
Change
(Cloud Composer 2) Moved the update_fab_perms option from [webserver] to
[fab] in the Airflow configuration. The corresponding deprecation warning is
no longer generated in Airflow web server logs.
Change
New images
are available in Cloud Composer 2:
composer-2.13.9-airflow-2.10.5 (default)
composer-2.13.9-airflow-2.9.3
Feature
(Airflow 2.10.5 only) Added task-level resource consumption
Airflow metrics
to Cloud Composer.
composer.googleapis.com/workflow/task/cpu_usage : percentage of CPU used by
a task.
composer.googleapis.com/workflow/task/mem_usage : percentage of memory used
by a task.
Deprecated
Cloud Composer versions 2.8.7 and 2.8.8 have reached their
end of support period .
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.11 (default)
composer-3-airflow-2.9.3-build.31
July 28, 2025
Fixed
(Cloud Composer 3) The DAGS_FOLDER reserved environment variable now
correctly points to the local directory where DAG files are stored.
Change
New images
are available in Cloud Composer 2:
composer-2.13.8-airflow-2.10.5 (default)
composer-2.13.8-airflow-2.9.3
Change
New Airflow builds
are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.10 (default)
composer-3-airflow-2.9.3-build.30
Deprecated
Cloud Composer version 2.8.6 has reached its
end of support period .
Fixed
Fixed an issue that caused unexpected restarts of Airflow component workloads
in the environment's cluster.
July 24, 2025
Feature
Web server restarting
is is now generally available (GA) in Cloud Composer 2 and Cloud Composer 3.
July 23, 2025
Announcement
If your environment uses dag-factory package version 0.22, then you might
experience DAG failures in Cloud Composer versions that have
apache-airflow-providers-cncf-kubernetes package version 10.4.2 or later. At
the same time, upgrading the dag-factory package to version 0.23 might require
you to update your DAG code to make it compatible.
If your environment uses dag-factory version 0.22, we recommend to do the
following:
Temporarily postpone upgrading your environment until you're ready to switch
to dag-factory version 0.23. Last versions of Cloud Composer that support
version 0.22 are composer-3-airflow-2.10.5-build.3,
composer-3-airflow-2.9.3-build.23, composer-2.13.1-airflow-2.10.5, and
composer-2.13.1-airflow-2.9.3 released on May 14, 2025.
When you are ready to upgrade, update your DAGs for compatibility with 0.23.
We recommend to do this in a development environment first.
Install
dag-factory version 0.23, then check that your DAGs are parsed and are
working correctly, and update them if needed. After your DAGs are
compatible, install dag-factory version 0.23 in your production
environment and transfer the updated DAGs. Your environment can now be
upgraded to a later version of Cloud Composer or Airflow.
If your environment is already upgraded to a later version of Cloud Composer
and you experience problems, then update dag-factory to version 0.23 and
update your DAGs for compatibility with 0.23.
July 17, 2025
Feature
Highly resilient environments are now generally available (GA) in Cloud Composer 3.
In Cloud Composer 3, highly resilient environments are available starting
from Airflow builds composer-3-airflow-2.10.2-build.13 and
composer-3-airflow-2.9.3-build.20.
July 14, 2025
Change
We're changing the way we provide support dates for Airflow builds in Cloud Composer 3. Before this change, some Airflow builds had their end of support date listed as "To be announced" until a later Airflow version became available. We're deprecating this approach for all builds that are released after July 01, 2025.
We are now providing support dates that depend on a date when a particular Airflow build was released:
We are introducing the standard support period of 12 months after the release date.
All Airflow builds that didn't have an end of support date when this change was introduced are supported until July 1, 2026. Because of this change, some Airflow builds released before July 1, 2025 are supported for longer than the standard support period.
All Airflow builds that had their support date shorter than 12 months are now supported for 12 months since the date of their initial release.
All builds released after July 1, 2025 will use the standard support period.
July 09, 2025
Change
(Available without upgrading) During Cloud Composer 2 environment operations, a more informative error message is returned when an environment's web server has connectivity issues.
Change
We are gradually rolling out a change that switches the default version from Cloud Composer 2 to Cloud Composer 3 in the Cloud Composer API.
In regions where the change is rolled out, a Cloud Composer 3 environment is created by default when a version is not specified in Google Cloud CLI, Cloud Composer API, or Terraform. If you use automation scripts to provision Cloud Composer 2 environments, make sure that you explicitly specify a Cloud Composer 2 version.
In this release, the change is rolling out in the following regions: africa-south1, asia-northeast2, asia-south2, asia-southeast2, europe-southwest1, europe-west10, europe-west12, europe-west8, me-central1, me-central2, me-west1, southamerica-west1, and us-south1.
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.9 (default)
composer-3-airflow-2.9.3-build.29
Deprecated
Cloud Composer versions 2.8.4 and 2.8.5 have reached their end of support period .
Change
New images are available in Cloud Composer 2:
composer-2.13.7-airflow-2.10.5 (default)
composer-2.13.7-airflow-2.9.3
July 02, 2025
Change
Cloud Composer 1 and Cloud Composer 2 environments with version 2.0.x are approaching their end of life . We're planning to deprecate them in the following way:
Starting September 15, 2025 , you will no longer be able to create new Cloud Composer 1 environments.
On September 15, 2026 , all Cloud Composer 1 and Cloud Composer 2 version 2.0.x environments will reach their planned end of life, and you won't be able to use them .
Cloud Composer 2 environments with versions later than 2.1.0 and all Cloud Composer 3 environments are not affected by this deprecation.
We recommend planning
migration to Cloud Composer 3
or upgrading your Cloud Composer 2 environments to a later version.
July 01, 2025
Change
This release includes internal infrastructure improvements to Cloud Composer. There are no user-visible changes.
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.8 (default)
composer-3-airflow-2.9.3-build.28
Change
New images are available in Cloud Composer 2:
composer-2.13.6-airflow-2.10.5 (default)
composer-2.13.6-airflow-2.9.3
June 23, 2025
Fixed
(Available without upgrading) Fixed an issue where deleting a Cloud Composer 2 environment could fail when the environment's cluster was in the process of creating a node pool.
Feature
Improved the startup times of Airflow workers for environments that have a large number of custom PyPI packages installed.
This feature was announced previously and is gradually rolling out over several releases. In this release, it's available in asia-east2, asia-northeast3, europe-central2, europe-west9, me-central1, me-west1, northamerica-northeast1, northamerica-northeast2, northamerica-south1, and us-west1 re
Change
(Airflow 2.10.5) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.5.0 from version 10.4.2. For changes in other packages, see the preinstalled packages changelog .
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.7 (default)
composer-3-airflow-2.9.3-build.27
Deprecated
Cloud Composer version 2.8.3 has reached its end of support period .
Change
New images are available in Cloud Composer 2:
composer-2.13.5-airflow-2.10.5 (default)
composer-2.13.5-airflow-2.9.3
June 16, 2025
Announcement
We're planning to phase out the APIs that aren't required by Cloud Composer 3.
Starting February 27, 2026 , the following APIs will become fully detachable . Deactivating these APIs won't cause the deactivation of the Cloud Composer API:
artifactregistry.googleapis.com
cloudbuild.googleapis.com
container.googleapis.com
pubsub.googleapis.com
sqladmin.googleapis.com
Starting May 27, 2026 , these APIs will no longer be enabled automatically when you enable the Cloud Composer API. To create Cloud Composer 2 environments in new projects, the group of detached APIs must be enabled manually.
Existing Cloud Composer 3 and Cloud Composer 2 environments in projects where the Cloud Composer API is already enabled will not be impacted. You can do the following:
After February 27, 2026 , if your project has only Cloud Composer 3 environments, then you can manually disable the detached APIs.
After February 27, 2026 , if your project has Cloud Composer 2 environments, then we recommend keeping these APIs enabled because disabling them might lead to environment's malfunction.
After May 27, 2026 , if you use automation scripts to provision Cloud Composer 2 environments, then make sure that the listed APIs are enabled in addition to the Cloud Composer API.
June 13, 2025
Feature
Cloud Composer pages in the Cloud Console now support the dark color theme. You can switch to the dark theme on the Appearance page in the Cloud Console.
June 10, 2025
Fixed
Fixed an issue that caused Airflow worker and scheduler Pods to be evicted when a large number of tasks was executed.
Change
New images are available in Cloud Composer 2:
composer-2.13.4-airflow-2.10.5 (default)
composer-2.13.4-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.6 (default)
composer-3-airflow-2.9.3-build.26
Deprecated
Cloud Composer version 2.8.2 has reached its end of support period .
June 02, 2025
Feature
Improved the startup times of Airflow workers for environments that have a large number of custom PyPI packages installed.
This change rolls out gradually. In this release, it's available in asia-east1, asia-northeast2, asia-south1, europe-north1, europe-west3, us-east1, us-south1, and us-west2 regions.
Fixed
(Cloud Composer 3) It's now possible to use zones with cross-project binding . Before this change, cross-project bound zones weren't supported in Cloud Composer 3.
Change
(Cloud Composer 3) If a VPC network is attached to an environment, then all DNS addresses accessed by the Airflow components of the environment are resolved using the Cloud DNS configuration of the VPC network. In particular, Airflow workers that execute DAGs will resolve DNS addresses in this way.
Change
(Cloud Composer 3) All newly created private DNS zones are immediately visible to a Cloud Composer environment. Previously, re-attaching a VPC network was required.
Change
(Cloud Composer 2) In Cloud Composer versions 2.11.5 and later, log processing is switching to using OpenTelemetry instead of Fluentd.
This change was announced previously and is gradually rolling out over several releases. In this release, it's available in the following regions: asia-east1, asia-east2, asia-northeast2, asia-northeast3, asia-south2, asia-southeast2, australia-southeast1, australia-southeast2, europe-central2, europe-north1, europe-north2, europe-southwest1, europe-west, europe-west10, europe-west12, europe-west6, europe-west8, europe-west9, me-central1, me-central2, me-west1, northamerica-northeast2, northamerica-south1, southamerica-east1, southamerica-west1, us-east5, us-south1, us-west, and us-west3.
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.5 (default)
composer-3-airflow-2.9.3-build.25
Deprecated
Cloud Composer version 2.8.1 has reached its end of support period .
Change
New images are available in Cloud Composer 2:
composer-2.13.3-airflow-2.10.5 (default)
composer-2.13.3-airflow-2.9.3
May 29, 2025
Feature
The Composer Local Development CLI tool is now available in Cloud Composer 3. This tool helps to streamline testing and developing by providing local Airflow environments based on Airflow builds used by Cloud Composer 3.
May 26, 2025
Feature
(Cloud Composer 3) New metrics that show the number of active Airflow components are now available for Cloud Composer 3 environments:
The number of active schedulers
The number of active DAG processors
The number of active triggerers
The number of active web servers
Fixed
(Cloud Composer 3) It's now possible to override the default scopes of access tokens in all regions supported by Cloud Composer 3. This fix was announced previously and has finished gradually rolling out.
Change
(Airflow 2.10.5 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.4.2 from version 10.1.0.
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.4 (default)
composer-3-airflow-2.9.3-build.24
Change
New images are available in Cloud Composer 2:
composer-2.13.2-airflow-2.10.5 (default)
composer-2.13.2-airflow-2.9.3
May 14, 2025
Feature
It is now possible to restart the Airflow web server through Cloud Composer API by using the RestartWebServer method .
Feature
It is now possible to migrate from Cloud Composer 1 to Cloud Composer 3 using snapshots in all regions supported by Cloud Composer 3. The gradual rollout of this feature is finished.
Change
Cloud Composer 3 and Cloud Composer 2 no longer support files with gzip encoding ( content-type=gzip ).
Before this change, all files that had gzip encoding, including .py and .zip files, were processed inconsistently by the DAG processor. After this change, the DAG processor skips all files with gzip encoding. This change doesn't apply to regular .zip archives. Airflow still decompresses and processes DAG files contained in archives that have no specified encoding.
This change is gradually rolled out to all regions supported by Cloud Composer, except us-central1, us-east4 and europe-west1. It will be rolled out to the remaining regions in one of the future releases.
Change
The default value of the [scheduler]max_tis_per_query Airflow configuration option is set to 128 . This change fixes the issue with DAGs remaining in the scheduled state in some cases.
Change
(Cloud Composer 3) Improved the computation of metrics related to snapshots. This change reduces the number of calls made by Cloud Composer to the Cloud Storage API.
Change
(Cloud Composer 2) In Cloud Composer versions 2.11.5 and later, log processing is switching to using OpenTelemetry instead of Fluentd.
This change is gradually rolled out to the asia-south1 and africa-south1 regions. It will be rolled out to more regions in future releases. New and upgraded Cloud Composer 2 environments in the listed regions will get this change.
Fixed
(Cloud Composer 3) Fixed an issue where the Airflow scheduler failed to initialize and work properly if a custom email backend was enabled. The Airflow scheduler now supports the following email backends:
airflow.providers.sendgrid.utils.emailer.send_email
airflow.utils.email.send_email_smtp
This issue affected only the Airflow scheduler. Airflow workers already support these and other backends. If you use an email backend that isn't supported by the scheduler, you can still send email from Airflow workers.
Change
(Airflow 2.9.3) Changes in preinstalled packages:
apache-airflow-providers-standard was upgraded to 1.0.0 from 0.4.0.
aiosqlite was removed from preinstalled packages.
json-merge-patch was removed from preinstalled packages.
time-machine was removed from preinstalled packages.
pyjwt was downgraded to 2.9.0 from 2.10.1.
Change
(Airflow 2.9.3) The apache-airflow-providers-google package was upgraded to version 15.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
For more information about changes, see the apache-airflow-providers-google changelog from version 14.0.0 to version 15.1.0.
Deprecated
Cloud Composer version 2.8.0 has reached its end of support period .
Change
New images are available in Cloud Composer 2:
composer-2.13.1-airflow-2.10.5 (default)
composer-2.13.1-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.3 (default)
composer-3-airflow-2.9.3-build.23
Change
The following Cloud Composer versions have an extended upgrade timeline:
composer-3-airflow-2.10.5-build.3
composer-3-airflow-2.9.3-build.23
composer-2.13.1-airflow-2.10.5
composer-2.13.1-airflow-2.9.3
May 07, 2025
Feature
Data lineage in Cloud Composer now uses OpenLineage in all regions supported by Cloud Composer. For more information about this feature, see the previous announcement .
Change
(Airflow 2.10.5) Changes in preinstalled packages:
apache-airflow-providers-standard was upgraded to 1.0.0 from 0.4.0.
aiosqlite was removed from preinstalled packages.
json-merge-patch was removed from preinstalled packages.
time-machine was removed from preinstalled packages.
Change
Improved the environment liveness monitoring. This change addresses some cases of transient failures that caused "Liveness probe failed" warnings in the environment's logs.
Change
For newly created Cloud Composer 3 environments, the minimum amount of memory is changed to 2 GB.
Change
For newly created environments, database retention policy is now enabled by default in Google Cloud CLI, API, and Terraform. Before this change, it was enabled by default only in Google Cloud Console.
Change
(Airflow 2.10.5) The apache-airflow-providers-google package was upgraded to version 15.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
For more information about changes, see the apache-airflow-providers-google changelog from version 14.0.0 to version 15.1.0.
Change
Airflow 2.10.2 is no longer included in Cloud Composer images and builds.
Change
The default version of Airflow is changed to 2.10.5.
Change
New images are available in Cloud Composer 2:
composer-2.13.0-airflow-2.10.5 (default)
composer-2.13.0-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.2 (default)
composer-3-airflow-2.9.3-build.22
Deprecated
Cloud Composer versions 2.7.0 and 2.7.1 have reached their end of support period .
May 06, 2025
Change
The Deployment Manager API is no longer automatically enabled when you enable Cloud Composer API because this API isn't used by the Cloud Composer service.
Environments with Cloud Composer versions 2.0.* still rely on the Deployment Manager API for updates, upgrades, and environment deletion. It won't be possible to perform these operations if this API is disabled. We recommend to upgrade your 2.0.* environments to a later version to remove this dependency.
May 05, 2025
Feature
It is now possible to migrate from Cloud Composer 1 to Cloud Composer 3 using snapshots. For more information, see the new migration guide .
This feature will gradually roll out to all regions supported by Cloud Composer 3. At the moment it is available in the africa-south1, asia-south1, me-central1, me-central2, me-west1, southamerica-east1, and southamerica-west1 regions.
April 30, 2025
Announcement
Starting from 5 May, 2025, new Cloud Composer 3 environments will use 1 CPU and 4 GB of memory for the Airflow web server by default. The minimum and maximum values for these parameters will not change.
April 29, 2025
Feature
A script for migrating from Cloud Composer 2 to Cloud Composer 3 is now available on GitHub .
For instructions about migrating with the script, see the new migration guide in Cloud Composer documentation.
April 24, 2025
Change
Starting from June 2025, the default version for new Cloud Composer environments changes from Cloud Composer 2 to Cloud Composer 3. New environments will use the latest default Airflow build ( composer-3-airflow-2 ). Currently, the default version is composer-2-airflow-2 .
April 17, 2025
Feature
Airflow 2.10.5 is available in Cloud Composer.
Change
Cloud Composer 2 environments now always use the environment's service account for performing PyPI packages installations :
Existing Cloud Composer 2 environments that previously used the default Cloud Build service account now use the environment's service account instead.
Cloud Composer 2 environments created in versions 2.10.2 and later already have this change.
Cloud Composer 3 environments already use the environment's service account, and are not affected by this change.
This change is gradually rolled out to all regions supported by Cloud Composer 2.
Change
The default environment's service account setting is gradually removed in Cloud Composer. After the change, you'll need to explicitly specify a service account when you create a new Cloud Composer environment. For more information about addressing the change, see the eariler announcement of this change .
In this release, the change is rolling out to the following regions: africa-south1, asia-northeast2, asia-south2, australia-southeast2, europe-north2, europe-southwest1, europe-west8, europe-west10, europe-west12, me-central1, me-central2, me-west1, northamerica-northeast2, northamerica-south1, southamerica-west1, us-east7, and us-south1. It will be rolled out to more regions in future releases.
Change
Database retention policy is now enabled by default in Google Cloud console and remains disabled in Google Cloud CLI, API, and Terraform.
This feature helps to maintain the Airflow database size. You can enable or disable the database retention policy or adjust the retention period for new and existing environments.
Change
Cloud Composer now detects situations when asynchronous tasks are blocked in Airflow triggerers. If a trigger's execution is blocked for more than five minutes, Cloud Composer restarts the triggerer, which solves this transient issue.
Fixed
The bucket synchronization process doesn't fail if the /plugins folder isn't available in the environment's bucket.
Fixed
(Cloud Composer 3) It's now possible to override the default scopes of access tokens. Before the fix, the scope always defaulted to https://www.googleapis.com/auth/cloud-platform and https://www.googleapis.com/auth/userinfo.email . This resulted in authentication failures when accessing non-Google Cloud services.
The change is gradually rolled out to the following regions: africa-south1, asia-south2, australia-southeast2, europe-north2, europe-west3, europe-west10, europe-west12, northamerica-south1, southamerica-west1, us-east7, and us-south1. It will be rolled out to more regions in future releases.
Fixed
(Cloud Composer 3) Key Access Justifications now correctly works for Customer Managed Encryption Keys (CMEK).
Change
Support dates for previous Cloud Composer 3 builds are available. All Cloud Composer 3 builds with Airflow 2.10.2 are supported until April 17, 2026.
Change
New images are available in Cloud Composer 2:
composer-2.12.1-airflow-2.10.5
composer-2.12.1-airflow-2.10.2 (default)
composer-2.12.1-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.5-build.0
composer-3-airflow-2.10.2-build.13 (default)
composer-3-airflow-2.9.3-build.20
April 09, 2025
Issue
The Airflow web server in Cloud Composer 3 requires at least 2 GB of memory when an environment is created or updated. This might lead to longer operation times or failures to perform these operations.
As a workaround, when you create a new Cloud Composer 3 environment or upgrade an existing environment, provide at least 2 GB of memory (default value) to the Airflow web server.
April 07, 2025
Announcement
All Cloud Composer environment's GKE clusters are set up with maintenance exclusions from March 27, 2025 to April 12, 2025. For more information, see Maintenance exclusions.
April 03, 2025
Announcement
The unification of Cloud Composer 3 billing with BigQuery is paused until further notice. The change was previously scheduled for April 13, 2025 .
Issue
In recently released Airflow builds of Cloud Composer 3, the Airflow web server requires more CPU to finish its initialization when an environment is created or updated. This might lead to longer operation times or failures to perform these operations.
As a workaround, when you create a new Cloud Composer 3 environment or upgrade an existing environment, provide at least 1 CPU to the Airflow web server.
This issue currently affects composer-3-airflow-2.10.2-build.12 and composer-3-airflow-2.9.3-build.19 Airflow builds.
March 26, 2025
Fixed
(Available without upgrading) Fixed an issue with updating maintenance windows when there is an upcoming Cloud Composer 3 infrastructure operation.
Feature
Data lineage in Cloud Composer now uses OpenLineage .
Data lineage support for a specific Airflow operator is now provided by the provider package where the operator is located. See Supported classes in the apache-airflow-providers-openlineage documentation for a list of latest supported operators.
For more information about data lineage in Cloud Composer, see Data lineage with Dataplex .
This feature is gradually rolled out. It will be available in us-west1, us-south1, europe-north1, me-west1, asia-northeast2, asia-southeast2, and africa-south1 regions. We plan to provide this feature in other regions in future releases.
Change
(Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.3.0 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-cncf-kubernetes changelog from version 10.1.0 to version 10.3.0.
Breaking
(Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-google package was upgraded to version 14.0.0 in Cloud Composer 2 images and Cloud Composer 3 builds.
This package is a new major version where many previously deprecated Airflow operators are removed . It is not possible to use these operators in your DAGs.
Make sure that you update your DAGs to use up-to-date alternatives of the removed operators. For more information about removed and deprecated Airflow operators and their up-to-date alternatives, see Deprecated and removed Airflow operators .
For more information about changes, see the apache-airflow-providers-google changelog from version 10.26.0 to version 14.0.0.
Change
(Airflow 2.10.2 and 2.9.3) Changes in preinstalled packages:
apache-airflow-providers-postgres was upgraded to 6.1.0 from 5.14.0.
apache-airflow-providers-smtp was upgraded to 2.0.0 from 1.9.0.
types-requests was removed from preinstalled packages.
Change
New images are available in Cloud Composer 2:
composer-2.12.0-airflow-2.10.2 (default)
composer-2.12.0-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.12 (default)
composer-3-airflow-2.9.3-build.19
Deprecated
Cloud Composer versions 2.6.4, 2.6.5, and 2.6.6 have reached their end of support period .
March 18, 2025
Announcement
After April 15, 2025 the database retention policy feature will be enabled by default in newly created Cloud Composer 3 environments.
This feature helps to maintain the Airflow database size. You can enable or disable the database retention policy or adjust the retention period for new and existing environments.
Issue
The issue with Cloud Composer 2 upgrade operations is now resolved . The upgrade operations are unblocked in all regions.
March 15, 2025
Feature
The Custom constraints with Organization Policy feature is now generally available (GA).
This feature provides more granular control over Cloud Composer environment configuration fields. You can use custom organization policies to allow or deny specific configuration values for Cloud Composer environments.
March 14, 2025
Issue
March 18, 2025 update : The issue is resolved .
Some upgrade operations for Cloud Composer 2 might lead to unhealthy environments. That is why upgrades for Cloud Composer 2 versions will be blocked until the issue is fully resolved.
March 11, 2025
Fixed
(Cloud Composer 3) Validation error messages now use the correct format for image versions.
Change
New images are available in Cloud Composer 2:
composer-2.11.5-airflow-2.10.2 (default)
composer-2.11.5-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.11 (default)
composer-3-airflow-2.9.3-build.18
March 05, 2025
Feature
You can now specify an order in which Airflow searches for secrets by overriding the
[secrets]backends_order Airflow configuration option.
Fixed
Fixed an issue in Cloud Composer REST API that allowed some environment.patch operations to succeed when multiple update masks that aren't related to each other were passed in a request. Now operations with such masks fail with an error.
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.10 (default)
composer-3-airflow-2.9.3-build.17
Deprecated
Cloud Composer versions 2.6.2 and 2.6.3 have reached their end of support period .
Change
New images are available in Cloud Composer 2:
composer-2.11.4-airflow-2.10.2 (default)
composer-2.11.4-airflow-2.9.3
March 04, 2025
Feature
Cloud Composer 3 supports Customer Managed Encryption Keys (CMEK) .
February 27, 2025
Feature
Database retention policy is available in Cloud Composer 3. You can use this feature to automatically delete older records from the Airflow database, which helps to maintain the Airflow database's size.
February 25, 2025
Feature
Cloud Composer 3 is now available in Stockholm (europe-north2). The change is gradually rolling out.
February 21, 2025
Announcement
Starting April 14, 2025, the Deployment Manager API won't be automatically enabled when you enable Cloud Composer API because this API isn't used by the Cloud Composer service.
February 20, 2025
Fixed
(Cloud Composer 3) Fixed a problem with configuring access to SMTP servers that don't support user and password authentication. The [smtp]smtp_user and [smtp]smtp_password Airflow configuration options are no longer preconfigured with placeholder values.
Change
Improved the forbidden APIs check. When a new environment is created, Cloud Composer now checks for forbidden APIs that are required by a specific major version of Cloud Composer.
Change
(Airflow 2.10.2 and 2.9.3) Preinstalled packages were changed:
virtualenv was downgraded from 20.29.1 to 20.28.1
Deprecated
Cloud Composer version 2.6.1 has reached its end of support period .
Change
New images are available in Cloud Composer 2:
composer-2.11.3-airflow-2.10.2 (default)
composer-2.11.3-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.9 (default)
composer-3-airflow-2.9.3-build.16
February 13, 2025
Fixed
(Cloud Composer 3) The GOOGLE_CLOUD_PROJECT environment variable is changed to reserved for Cloud Composer 3. This fixes an issue where creating an environment with this variable failed with a non-specific error.
Change
(Cloud Composer 2) The list of permissions reported by dependency_permissions_check_count metric was updated. Now the metric reports more permissions that are required for a functioning environment. Permissions that weren't necessary were replaced or removed.
Fixed
(Cloud Composer 2) The dependency_permissions_check_count metric now correctly reports the number of missing permissions.
Fixed
(Available without upgrading) Fixed a problem that caused Terraform to unnecessarily force the replacement of cloud_composer_network_ipv4_cidr_block , web_server_ipv4_cidr_block , and cloud_sql_ipv4_cidr_block fields in some configurations of Cloud Composer 2 and Cloud Composer 1 environments.
Change
(New Cloud Composer environments only) Cloud Composer now enforces SSL connections to Cloud SQL instances.
This change implements a security compliance standard in Cloud Composer and enforces SSL usage. You can adopt other security standards by following recommendations listed in Vulnerability findings .
Previously, it was possible to create a non-SSL connection to the Airflow database. After the change, the connection will be refused.
Change
(Airflow 2.10.2 and 2.9.3) Preinstalled packages were changed:
logbook was removed from preinstalled packages
minimal-snowplow-tracker was removed from preinstalled packages
mashumaro was downgraded from 3.15 to 3.14
Change
New images are available in Cloud Composer 2:
composer-2.11.2-airflow-2.10.2 (default)
composer-2.11.2-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.8 (default)
composer-3-airflow-2.9.3-build.15
Deprecated
Cloud Composer versions 2.6.0 and 2.6.1 have reached their end of support period .
February 07, 2025
Announcement
Starting March 2025, the default version for new Cloud Composer environments changes from Cloud Composer 2 to Cloud Composer 3.
New environments that are created without a specified version will use the default Airflow build of Cloud Composer 3, composer-3-airflow-2 . Currently, the default version is composer-2-airflow-2 .
February 06, 2025
Change
Cloud Composer 2 is no longer available in Mexico (northamerica-south1) . It is not possible to select this region when creating a new Cloud Composer 2 environment. Existing Cloud Composer 2 environments and both new and existing Cloud Composer 3 environments are not affected by this change.
February 04, 2025
Announcement
All Cloud Composer environment's GKE clusters are set up with maintenance exclusions from January 21, 2025 to February 10, 2025. For more information, see Maintenance exclusions .
January 31, 2025
Issue
(Cloud Composer 3) The issue with upgrading Airflow builds is now resolved . You can now upgrade Airflow builds for Cloud Composer 3 in the asia-south1, asia-northeast2, europe-west1, europe-west3, and europe-north1 regions.
January 30, 2025
Announcement
At the beginning of February 2025, we will delete inactive environments that are non-recoverable in Cloud Composer 1, Cloud Composer 2, and Cloud Composer 3. After this change, non-recoverable environments that have listed problems will be deleted automatically.
Cloud Composer 1 and Cloud Composer 2 environments that have both of the following problems present at the same time will be deleted:
The environment's underlying GKE cluster is deleted.
The environment is in the ERROR state for at least 60 days because of a disabled billing account or because the Cloud Composer API service was deactivated in its project.
Cloud Composer 3 environments that have the following problem will be deleted:
The environment is in the ERROR state for at least 60 days because of a disabled billing account or because the Cloud Composer API service was deactivated in its project.
This change doesn't affect buckets of these environments. You can still recover your DAGs and other data from the environment's bucket and then delete the bucket manually. See Delete environments for information about data that is not deleted automatically together with the environment.
January 28, 2025
Feature
Java Runtime in Airflow workers and schedulers is updated from version 17 to version 21 .
Fixed
(Cloud Composer 3) Fixed an issue with KubernetesPodOperator failing to run properly when do_xcom_push was set to True .
Fixed
Fixed a problem where synchronization between the environment's bucket and Airflow components failed because incorrect objects in the bucket were not ignored.
Change
(Available without upgrading) In Cloud Composer 2 and Cloud Composer 1, a more meaningful error message is produced when the Composer Service Agent account doesn't have necessary permissions to access the network during the environment creation.
Fixed
Fixed an issue where log messages were incorrectly formatted for non-string content, such as dictionaries and numbers.
Fixed
(Available without upgrading) In Cloud Composer 3, fixed an issue where deleting an environment with an attached VPC network failed if the project accept list of the network attachment was cleared manually.
Fixed
Terminating Airflow workers now generate log messages with information about still running tasks.
Change
(Cloud Composer 3) The zone in the Environment.config.node_config.location field is no longer populated in the Cloud Composer API.
Change
(Available without upgrading) Starting from Cloud Composer version 2.11.0 with Airflow 2.10.2 and 2.9.3, the enable_task_context_logger Airflow configuration option is no longer blocked.
Change
(Airflow 2.10.2 and 2.9.3) The following preinstalled provider packages were upgraded to new major versions:
apache-airflow-providers-apache-beam upgraded from 5.9.1 to 6.0.0
apache-airflow-providers-dbt-cloud upgraded from 3.11.2 to 4.0.0
apache-airflow-providers-hashicorp upgraded from 3.8.0 to 4.0.0
apache-airflow-providers-http upgraded from 4.13.3 to 5.0.0
apache-airflow-providers-mysql upgraded from 5.7.4 to 6.0.0
apache-airflow-providers-sendgrid upgraded from 3.6.0 to 4.0.0
apache-airflow-providers-sqlite upgraded from 3.9.1 to 4.0.0
apache-airflow-providers-ssh upgraded from 3.14.0 to 4.0.0
Change
(Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.1.0 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-cncf-kubernetes changelog from version 10.0.1 to version 10.1.0.
Change
(Airflow 2.10.2 and 2.9.3) The following preinstalled packages were downgraded:
certifi downgraded from 2024.12.14 to 2024.8.30.
charset-normalizer downgraded from 3.4.1 to 3.4.0.
cryptography downgraded from 44.0.0 to 43.0.3.
filelock downgraded from 3.16.1 to 3.15.4.
google-auth downgraded from 2.37.0 to 2.35.0.
keyring downgraded from 25.6.0 to 25.5.0.
urllib3 downgraded from 2.3.0 to 2.2.3.
zipp downgraded from 3.21.0 to 3.20.2.
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.7 (default)
composer-3-airflow-2.9.3-build.14
Change
New images are available in Cloud Composer 2:
composer-2.11.1-airflow-2.10.2 (default)
composer-2.11.1-airflow-2.9.3
Deprecated
Cloud Composer version 2.5.5 has reached its end of support period .
January 27, 2025
Issue
January 31, 2025 update : The issue is resolved .
(Cloud Composer 3 only) We are currently experiencing an issue with upgrading Airflow builds for Cloud Composer 3 in asia-south1, asia-northeast2, europe-west1, europe-west3, europe-north1 regions.
The upgrades are temporarily disabled as we continue our work to restore the listed functionalities. We will release an additional announcement after the issue is resolved.
January 24, 2025
Deprecated
The following recently released Cloud Composer 3 Airflow builds and Cloud Composer 2 versions are rolled back and aren't available for creating and upgrading existing environments. We will roll out new builds in the next release.
composer-2.11.0-airflow-2.10.2
composer-2.11.0-airflow-2.9.3
composer-3-airflow-2.10.2-build.6
composer-3-airflow-2.9.3-build.13
January 15, 2025
Announcement
In April 2025, Cloud Composer 2 environments will always use the environment's service account for performing PyPI packages installations :
The environment's service account will be used instead.
Existing Cloud Composer 2 environments that previously used the default Cloud Build service account will change to using the environment's service account instead.
Cloud Composer 2 environments created in versions 2.10.2 and later already have this change.
Cloud Composer 3 environments already use the environment's service account, and are not impacted by this change.
Announcement
Starting April 13, 2025, we are removing the default environment's service account setting . This change enhances security and provides greater control over your Cloud Composer environments.
Previously, the default Compute Engine service account was used by default when a user didn't specify a service account during Cloud Composer creation.
After the change, you'll need to explicitly specify a service account when you create a new Cloud Composer environment.
Existing Cloud Composer environments will not be affected by this change.
To address this change:
We recommend to create one or more user-managed service accounts for Cloud Composer environments in your project and grant them the minimum of required permissions. For more information and instructions, see Grant roles to an environment's service account .
If you use Terraform, scripts or other automation and configuration management tools , then make sure to update them, so that an environment's service account is specified when you create an environment .
January 12, 2025
Announcement
April 3, 2025 update : This change is postponed .
Starting after April 13, 2025 , Cloud Composer 3 will unify its billing with BigQuery . The Cloud Composer 3 standard milli DCU-hours SKU will be replaced with the new BigQuery Engine for Apache Airflow SKU, which will be calculated based on the number of BigQuery slot hours that your Cloud Composer 3 environments consume. Other SKUs will be renamed and moved under the BigQuery hierarchy. The change will be rolled out gradually to all regions supported by Cloud Composer 3. For more information about the change, see Transition to BigQuery slot-hour-based pricing .
January 10, 2025
Feature
(Cloud Composer 3) You can now use custom certificates when installing packages from your private repository . This change is gradually rolled out to all Cloud Composer 3 environments. To obtain this change earlier, upgrade the Airflow build of your environment.
Feature
(Cloud Composer 3) New metrics are available for Cloud Composer 3 environments:
CPU quota limit for Cloud Composer workloads
CPU quota usage for Cloud Composer workloads
Change
(Available without upgrading) Improved the error message generated when the Cloud Composer Service Agent service account is missing permissions on the project or on the environment's service account.
Fixed
Fixed an issue where the user-defined Cloud DNS configuration for Google API domains would break Cloud Composer 3 environment creation and attachment of VPC networks.
Change
(Cloud Composer 3 only) The /data folder is now synchronized with Airflow triggerers.
Fixed
(Cloud Composer 2) Cloud Composer 2 environments that use PSC interfaces will no longer try to allocate IP ranges for VPC peerings in the tenant project. Environments that use PSC instead of VPC peerings do not use these ranges. This fixes a problem where these ranges overlapped with ranges used for the PSC subnetwork.
Change
(New Cloud Composer 2 environments only) Cloud Composer 2 environments in versions 2.10.2 and later always use the environment's service account for performing PyPI packages installations. This change applies only to newly created environments , existing environments that are upgraded to 2.10.2 and later versions will not get this change.
Issue
The issue with automatic environment upgrades and upgrading Airflow builds in Cloud Composer 3 is resolved and these operations are working. If you think that your environment is still impacted by this issue, please reach out to the Cloud Support team.
Change
The Redis persistent disk is now automatically deleted together with the environment. This persistent disk is used by the Redis queue and stores only technical data.
Change
The importlib-resources package was removed from preinstalled packages.
Fixed
Removed the warning log message about in-memory storage because it doesn't apply to Cloud Composer.
Change
The worker_autoscale Airflow configuration option is blocked in Cloud Composer 2. Previously, it was blocked only in Cloud Composer 3.
Fixed
Fixed a problem with the interpolation of pip.conf file. Now the pip.conf file is not interpolated and can contain unescaped % characters.
Deprecated
Cloud Composer version 2.5.4 has reached its end of support period .
Change
New images are available in Cloud Composer 2:
composer-2.10.2-airflow-2.10.2 (default)
composer-2.10.2-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.5 (default)
composer-3-airflow-2.9.3-build.12
Change
Cloud Composer 2.10.1 is a version with an extended upgrade timeline.
January 09, 2025
Issue
January 10, 2025 update : The issue is resolved.
(Cloud Composer 3 only) We are currently experiencing an issue with automatic environment upgrades and upgrading Airflow builds for Cloud Composer 3 in asia-south1, europe-west1, and asia-northeast2 regions.
The upgrades are temporarily disabled as we continue our work to restore the listed functionalities. We will release an additional announcement after the issue is resolved.
Announcement
In January 2025, we will delete inactive Cloud Composer 1 environments that are non-recoverable . Environments that have both of the following problems present at the same time will be deleted:
The environment's underlying GKE cluster is deleted.
The environment is in the ERROR state for at least 60 days because of a disabled billing account or because the Cloud Composer API service was deactivated in its project.
This change doesn't affect buckets of these environments. You can still recover your DAGs and other data from the environment's bucket and then delete the bucket manually. See Delete environments for information about data that is not deleted automatically together with the environment.
December 20, 2024
Feature
Cloud Composer 3 is now available in Mexico (northamerica-south1).
December 16, 2024
Feature
Cloud Composer 3 is now generally available (GA) :
All Airflow builds starting from airflow-2.9.3-build.11 and airflow-2.10.2-build.4 are supported at the GA level.
If your environment uses an earlier Airflow build, then upgrade it to airflow-2.9.3-build.11, airflow-2.10.2-build.4, or a later build to use Cloud Composer 3 on the GA level.
December 15, 2024
Change
When creating new environments in Google Cloud console, it's now required to explicitly select a service account for the environment. We recommend to create a user-managed service account and use it for Cloud Composer environments.
December 11, 2024
Announcement
In January 2025, we plan to release Cloud Composer 2 versions that will always use the environment's service account for performing PyPI packages installations:
New Cloud Composer 2 environments created in versions 2.10.2 and later will have this change. This change applies only to newly created environments, existing environments that are upgraded to 2.10.2 and later versions will not get this change.
Currently, Cloud Composer 2 environments use the default Cloud Build service account if it exists (and the environment's service account if it doesn't). Depending on the way Cloud Build is configured in your project, this might mean that the default Cloud Compute service account or the legacy Cloud Build service account might be used by your environment. We recommend to configure Cloud Build to adhere to the principle of least privilege .
Make sure to check the Cloud Build default service account change page for information about changes to the default Cloud Build service account.
Cloud Composer 3 environments already use the environment's service account, and are not impacted by this change.
Fixed
(Cloud Composer 3) It is now possible to upgrade an environment if the [sentry]sentry_on Airflow configuration option is set to true .
Change
The COMPOSER_AGENT_BUILD_SERVICE_ACCOUNT environment variable is changed to reserved. This change improves the security of Cloud Composer environments.
Change
(Cloud Composer 2) Airflow worker liveness check configuration was changed to be consistent with the configuration used in Cloud Composer 3. In particular, this change increases the timeout, giving the liveness check more time to detect unhealthy Airflow workers. This change is gradually rolled out to all regions supported by Cloud Composer.
Fixed
Cloud Composer no longer adds any missing IAM permissions to the Cloud Storage bucket when it is used to create an environment with a custom environment's bucket. Make sure that the environment's service account has permissions from the Composer Worker role on the bucket .
Change
Increased allowed timeouts when detecting tasks stuck in the "queued" state during the Airflow worker liveness check. This change makes it less likely that checks will incorrectly fail in specific scenarios. This change is gradually rolled out to all regions supported by Cloud Composer.
Deprecated
Cloud Composer version 2.5.3 has reached its end of support period .
Change
New images are available in Cloud Composer 2:
composer-2.10.1-airflow-2.10.2 (default)
composer-2.10.1-airflow-2.9.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.4 (default)
composer-3-airflow-2.9.3-build.11
December 05, 2024
Feature
New Cloud Composer 3 environments can now be created in VPC SC . This feature is gradually rolled out to all regions supported by Cloud Composer.
Feature
Improved Airflow worker liveness checks to detect workers with unexpected idle task slots. This feature improves the stability of Airflow by better detection of unhealthy Airflow workers. This feature is gradually rolled out to all regions supported by Cloud Composer.
Fixed
Fixed the issue in the environment's component responsible for uploading the logs of Airflow components to Cloud Logging. This bug sometimes lead to a situation where Cloud Composer-level log might be missing for an Airflow component. The same log was still available on the Kubernetes-component level.
Fixed
(Cloud Composer 3) KubernetesPodOperator now works when the do_xcom_push parameter is set to True .
Fixed
(Cloud Composer 2) If an upgrade operation fails, Cloud Composer 2 now restores the environment with the correct number of triggers.
Fixed
(Cloud Composer 2 only) It is now possible to upgrade an environment if the [sentry]sentry_on Airflow configuration option is set to true .
Fixed
Long log entries now have proper task instance annotations.
Fixed
(New Cloud Composer 3 environments) Increased the maximum number of internet connections that each Airflow worker can support at the same time.
Fixed
The maximum limit on the database size during upgrades in Cloud Composer 3 is now the same as the limit for snapshots (20 GB).
Change
The aiohttp package was downgraded from 3.11.0 to 3.10.11.
Change
(Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-google package was upgraded to version 10.26.0 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-google changelog from version 10.25.0 to version 10.26.0.
Change
(Available without upgrading) Fixed an issue where Airflow workers sometimes generated incomplete or unreadable output.
Change
(Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 10.0.1 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-cncf-kubernetes changelog from version 9.0.1 to version 10.0.1.
Change
The default version of Airflow is changed to 2.10.2.
Deprecated
Airflow 2.7.3 is no longer included in Cloud Composer images and builds.
Change
New images are available in Cloud Composer 2:
composer-2.10.0-airflow-2.10.2 (default)
composer-2.10.0-airflow-2.9.3
Deprecated
Cloud Composer version 2.5.2 has reached its end of support period .
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.3 (default)
composer-3-airflow-2.9.3-build.10
December 04, 2024
Feature
Scheduled snapshots are available in Cloud Composer 3. This feature will be gradually rolled out to all regions supported by Cloud Composer 3.
Feature
Cloud Composer 2 is now available in Mexico (northamerica-south1).
December 03, 2024
Announcement
All Cloud Composer environment's GKE clusters are set up with maintenance exclusions from December 20, 2024 to January 2, 2025. For more information, see Maintenance exclusions .
November 27, 2024
Announcement
In December 2024, Google will remove the following previously deprecated Airflow operators from the apache-airflow-providers-google package.
The new version of this package will be included in one of the future releases of Cloud Composer and the change will be announced in the Release Notes. After this change, it will not be possible to use these operators in your DAGs.
Make sure that you use up-to-date alternatives of the removed operators instead. For more information about removed and deprecated Airflow operators and their up-to-date alternatives, see Deprecated and removed Airflow operators .
Operators that will be removed in December 2024 : DataPipelineHook, CreateDataPipelineOperator, RunDataPipelineOperator, AutoMLDatasetLink, AutoMLDatasetListLink, AutoMLModelLink, AutoMLModelTrainLink, AutoMLModelPredictLink.
November 13, 2024
Feature
Airflow 2.10.2 is available in Cloud Composer.
Fixed
(Airflow 2.7.3) Backported #35887 to fix an issue that occurred during the DST transition. The issue affected DAGs with timezone-aware cron schedule and caused infinite loops in the Airflow scheduler.
Change
Improved the error message generated when a Cloud Composer 3 environment creation fails because of missing permissions.
Change
(Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 9.0.1 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-cncf-kubernetes changelog from version 9.0.0 to version 9.0.1.
Change
(Airflow 2.10.2 and 2.9.3) The apache-airflow-providers-google package was upgraded to version 10.25.0 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-google changelog from version 10.24.0 to version 10.25.0.
Change
New images are available in Cloud Composer 2:
composer-2.9.11-airflow-2.10.2
composer-2.9.11-airflow-2.9.3 (default)
composer-2.9.11-airflow-2.7.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.10.2-build.0
composer-3-airflow-2.9.3-build.7 (default)
composer-3-airflow-2.7.3-build.23
Change
Support dates for previous Cloud Composer 3 builds are available. All Cloud Composer 3 builds with Airflow 2.9.3 are supported until November 13, 2025.
November 06, 2024
Change
(Airflow 2.9.3 and 2.7.3) The docutils package was removed from preinstalled packages.
Fixed
(Cloud Composer 3) Fixed an issue that affected the speed of PyPI package installation. PyPI packages are now installed slightly faster.
Change
New images are available in Cloud Composer 2:
composer-2.9.10-airflow-2.9.3 (default)
composer-2.9.10-airflow-2.7.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.3-build.6 (default)
composer-3-airflow-2.7.3-build.22
Change
Cloud Composer 2.9.7 is a version with an extended upgrade timeline.
Deprecated
Cloud Composer version 2.5.1 has reached its end of support period .
October 30, 2024
Fixed
(Cloud Composer 3) Airflow workers now generate a proper OpenID Connect (OIDC) token.
Change
(Airflow 2.9.3 and 2.7.3) The dbt-common package was downgraded from 1.11.0 to 1.10.0.
Deprecated
Cloud Composer version 2.5.0 has reached its end of support period .
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.3-build.5 (default)
composer-3-airflow-2.7.3-build.21
Change
Cloud Composer 2.9.9 images are available:
composer-2.9.9-airflow-2.9.3 (default)
composer-2.9.9-airflow-2.7.3
October 22, 2024
Change
(Only new Cloud Composer 2 environments, all versions) If a GKE Control Plane IP range is specified for an environment, GKE creates a new subnetwork in this range to provision the IP address for communication with the GKE Control Plane. Otherwise, the subnetwork specified in the Cloud Composer connection subnetwork range is used (this range defaults to the environment's subnetwork). For more information about IP ranges used by Cloud Composer environments, see Configure private IP networking .
Change
(Airflow 2.9.3) The apache-airflow-providers-google package was upgraded to version 10.24.0 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-google changelog from version 10.23.0 to version 10.24.0.
Change
(Airflow 2.9.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 9.0.0 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-cncf-kubernetes changelog from version 8.4.2 to version 9.0.0.
Change
(Airflow 2.9.3 and 2.7.3) Changes in preinstalled packages:
The grpcio package was downgraded from 1.66.2 to 1.65.5.
The js2py package was removed from dependencies.
The pyjsparser package was removed from dependencies.
The tzlocal package was removed from dependencies.
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.3-build.4 (default)
composer-3-airflow-2.7.3-build.20
Change
Cloud Composer 2.9.8 images are available:
composer-2.9.8-airflow-2.9.3 (default)
composer-2.9.8-airflow-2.7.3
Deprecated
Cloud Composer version 2.4.6 has reached its end of support period .
October 16, 2024
Fixed
Fixed a bug where upgrading a private IP environment could fail because of an invalid CIDR range.
Change
The default version of Airflow is changed to 2.9.3.
Change
Airflow 2.9.1 is no longer included in Cloud Composer images and builds.
Change
Cloud Composer 2.9.7 images are available:
composer-2.9.7-airflow-2.9.3 (default)
composer-2.9.7-airflow-2.7.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.3-build.3 (default)
composer-3-airflow-2.7.3-build.19
October 08, 2024
Change
Cloud Composer 2.9.6 images are available:
composer-2.9.6-airflow-2.9.3
composer-2.9.6-airflow-2.9.1 (default)
composer-2.9.6-airflow-2.7.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.3-build.2
composer-3-airflow-2.9.1-build.9 (default)
composer-3-airflow-2.7.3-build.18
Deprecated
Cloud Composer version 2.4.5 has reached its end of support period .
October 01, 2024
Fixed
(Available without upgrading) Fixed the cause of DAG run failures for runs created from the Cloud Console when the [scheduler]allowed_run_id_pattern Airflow configuration option is set to a custom value.
Change
(Airflow 2.9.3 and 2.9.1) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 8.4.2 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-cncf-kubernetes changelog from version 8.4.1 to version 8.4.2.
Change
(Airflow 2.9.3 and 2.9.1) The apache-airflow-providers-google package was upgraded to version 10.23.0 in Cloud Composer 2 images and Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-google changelog from version 10.22.0 to version 10.23.0.
Deprecated
Cloud Composer version 2.4.4 has reached its end of support period .
Change
Cloud Composer 2.9.5 images are available:
composer-2.9.5-airflow-2.9.3
composer-2.9.5-airflow-2.9.1 (default)
composer-2.9.5-airflow-2.7.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.3-build.1
composer-3-airflow-2.9.1-build.8 (default)
composer-3-airflow-2.7.3-build.17
September 18, 2024
Fixed
(Cloud Composer 3) Fixed the issue that caused KubernetesPodOperator tasks to fail if they ran for longer than 15 minutes.
Feature
Airflow 2.9.3 is available in Cloud Composer images.
Fixed
(Cloud Composer 2) Fixed the issue where environment create and update operations could fail in rare cases because of the scheduler probe timeouts.
Deprecated
Cloud Composer versions 2.4.2 and 2.4.3 have reached their end of support period .
Change
Cloud Composer 2.9.4 images are available:
composer-2.9.4-airflow-2.9.3
composer-2.9.4-airflow-2.9.1 (default)
composer-2.9.4-airflow-2.7.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.3-build.0
composer-3-airflow-2.9.1-build.7 (default)
composer-3-airflow-2.7.3-build.16
Change
Support dates for previous Cloud Composer 3 builds are available. All Cloud Composer 3 builds with Airflow 2.9.1 are supported until September 18, 2025.
September 02, 2024
Feature
Added a new metric: composer.googleapis.com/workflow/task_instance/queued_duration . This metric is based on the dag.<dag_id>.<task_id>.queued_duration Airflow metric .
Fixed
(Cloud Composer 3) Fixed the cause of false-positive failures of Airflow Celery workers reported by the liveness health check.
Fixed
Fixed an issue where an upgrade of a PSC-based private IP environment failed leaving the environment in an inconsistent state.
Change
The apache-airflow-providers-cncf-kubernetes package was upgraded to version 8.4.1 in Cloud Composer 2 images and Cloud Composer 3 builds with Airflow 2.9.1. For more information about changes, see the apache-airflow-providers-cncf-kubernetes changelog from version 8.3.4 to version 8.4.1.
Change
The apache-airflow-providers-google package was upgraded to version 10.22.0 in Cloud Composer 2 images and Cloud Composer 3 builds with Airflow 2.9.1. For more information about changes, see the apache-airflow-providers-google changelog from version 10.21.0 to version 10.22.0.
Change
Cloud Composer 2.9.3 images are available:
composer-2.9.3-airflow-2.9.1 (default)
composer-2.9.3-airflow-2.7.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.1-build.6 (default)
composer-3-airflow-2.7.3-build.15
August 27, 2024
Announcement
(Cloud Composer 2) Starting on September 26, 2024, all Cloud Composer environments within a VPC SC perimeter will have no access to public PyPI repositories by default . For details about installing PyPI packages in the VPC SC mode, see Installing PyPI packages .
August 22, 2024
Fixed
Fixed a bug where executing Airflow CLI commands produced output that was not human-readable.
Fixed
(Cloud Composer 3) Fixed the dags backfill Airflow CLI command that was failing with a connection error.
Change
The apache-airflow-providers-google package was upgraded to version 10.21.1 in Cloud Composer 2 images with Airflow 2.7.3 and 2.9.1, and in all latest Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-google changelog from version 10.21.0 to version 10.21.1.
Deprecated
Cloud Composer version 2.4.1 has reached its end of support period .
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.1-build.5
composer-3-airflow-2.7.3-build.14
Change
Cloud Composer 2.9.2 images are available:
composer-2.9.2-airflow-2.9.1 (default)
composer-2.9.2-airflow-2.7.3
August 13, 2024
Change
(Airflow 2.7.3) Improved the reliability of connections between Airflow components and the Redis component.
Change
Cloud Composer 2.9.1 images are available:
composer-2.9.1-airflow-2.9.1 (default)
composer-2.9.1-airflow-2.7.3
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.1-build.4
composer-3-airflow-2.7.3-build.13
August 08, 2024
Announcement
The kubelet read-only port in GKE clusters (TCP port 10255) is not used by Cloud Composer. You can define appropriate firewall rules to block external traffic over TCP 10255 in your customer project as described in Modify VPC firewall rules .
Change
(Airflow 2.9.1) Improved the reliability of connections between Airflow components and the Redis component.
Fixed
Fixed a problem that caused file synchronization between the bucket and Airflow components to be stuck or progress very slowly.
Change
The default version of Airflow is changed to 2.9.1.
Deprecated
Cloud Composer version 2.4.0 has reached its end of support period .
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.1-build.3
composer-3-airflow-2.7.3-build.12
Change
Cloud Composer 2.9.0 images are available:
composer-2.9.0-airflow-2.9.1 (default)
composer-2.9.0-airflow-2.7.3
August 01, 2024
Announcement
(Cloud Composer 3 only) The July 24th issue with Airflow upgrade operations for Cloud Composer 3 environments is now fixed. Airflow upgrade operations are now being re-enabled, and should reach all Cloud Composer 3 environments within the next couple of days.
Announcement
In July and August 2024, new Cloud Composer 2 environments keep switching to using GKE 1.29 and PSC as a connectivity channel to the GKE control plane. Creating new Cloud Composer 2 private IP environments will require using PSC SERVICE_PRODUCER endpoints, which might be blocked by the Disable Private Service Connect for Consumers organization policy constraint. Previously, this org policy limitation could be addressed by using VPC peerings instead of PSC, but starting from GKE 1.29, this workaround is no longer available.
Feature
The initial synchronization of DAGs and plugins in Airflow workloads is performed in a separate container and utilizes full resources of the Pod.
Fixed
(Cloud Composer 3) Fixed an error that happened when values in certain formats were used for Airflow configuration options.
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.1-build.2
composer-3-airflow-2.7.3-build.11
Deprecated
Airflow 2.6.3 is no longer included in Cloud Composer 2 images.
Change
Cloud Composer 2.8.8 images are available:
composer-2.8.8-airflow-2.9.1
composer-2.8.8-airflow-2.7.3 (default)
July 25, 2024
Fixed
Cloud Composer now verifies that the environment's service account is enabled before starting an environment creation operation. As a result, this type of error is reported sooner and the operation does not start.
Deprecated
Cloud Composer version 2.3.5 has reached its end of support period .
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.1-build.1
composer-3-airflow-2.7.3-build.10
Change
Cloud Composer 2.8.7 images are available:
composer-2.8.7-airflow-2.9.1
composer-2.8.7-airflow-2.7.3 (default)
composer-2.8.7-airflow-2.6.3
July 24, 2024
Issue
2024-08-01 Update : This issue has been resolved. For more information, see the release note from August 1st 2024 .
(Cloud Composer 3 only) We are currently experiencing an issue with the Airflow upgrade operations for Cloud Composer 3 environments. Upgrading Airflow builds for Cloud Composer 3 is temporarily disabled as we continue our work to restore Airflow upgrade functionalities.
July 18, 2024
Change
Information about excluded Cloud Storage objects in the environment's bucket is no longer logged. This change reduces the usage of the Storage API during the synchronization of DAG files, which improves the performance of Airflow components and results in fewer Airflow component restarts. The change will gradually become available in all Cloud Composer environments.
July 17, 2024
Change
(Airflow 2.9.1) Task context logging is disabled, and it is not possible to enable it.
Change
(Airflow 2.9.1) Raw HTML code in DAG docs and DAG parameter descriptions is disabled by default.
Change
(Airflow 2.9.1) Audit log permissions are revoked from all roles except Admin .
Feature
Airflow 2.9.1 is available in Cloud Composer images and builds. We recommend checking the list of changes in Apache Airflow release notes before upgrading to this version.
Change
The upgraded apache-airflow-providers-google package provides new operators and sensors for triggering DAGs across Cloud Composer environments:
CloudComposerRunAirflowCLICommandOperator makes a call to the Airflow REST API of a Cloud Composer environment.
CloudComposerDAGRunSensor checks if a DAG Run is completed.
Change
The apache-airflow-providers-google package was upgraded to version 10.21.0 in Cloud Composer 2 images with Airflow 2.7.3 and 2.9.1, and in all latest Cloud Composer 3 builds. For more information about changes, see the apache-airflow-providers-google changelog from version 10.18.0 to version 10.21.0.
Change
When installing PyPI packages, if you want your builds to run with a custom service account, you can override the
COMPOSER_AGENT_BUILD_SERVICE_ACCOUNT environment variable with the chosen service account. For more information, see Install Python dependencies .
Change
New Airflow builds are available in Cloud Composer 3:
composer-3-airflow-2.9.1-build.0
composer-3-airflow-2.7.3-build.9
Deprecated
Cloud Composer version 2.3.4 has reached its end of support period .
Change
Cloud Composer 2.8.6 images are available:
composer-2.8.6-airflow-2.9.1
composer-2.8.6-airflow-2.7.3 (default)
composer-2.8.6-airflow-2.6.3
Change
Support dates for previous Cloud Composer 3 builds are available. All Cloud Composer 3 builds with Airflow 2.7.3 are supported until July 17, 2025.
July 15, 2024
Deprecated
It is no longer possible to create Cloud Composer 1 environments in Google Cloud console . It's still possible to create Cloud Composer 1 environments through Google Cloud SDK, Terraform, and API in projects that support creating new Cloud Composer 1 environments.
July 09, 2024
Change
A new Airflow build is available in Cloud Composer 3:
composer-3-airflow-2.7.3-build.8
Change
Cloud Composer 2.8.5 images are available:
composer-2.8.5-airflow-2.7.3 (default)
composer-2.8.5-airflow-2.6.3
July 03, 2024
Change
New Cloud Composer 2 environments are gradually switched to using GKE 1.29 and PSC as a connectivity channel to the GKE control plane. The IP address for the PSC endpoint will be taken from the nodes IP range. This change might require using a larger IP range for the nodes when you create an environment.
July 02, 2024
Change
Cloud Composer 2.8.4 images are available:
composer-2.8.4-airflow-2.7.3 (default)
composer-2.8.4-airflow-2.6.3
Change
A new Airflow build is available in Cloud Composer 3:
composer-3-airflow-2.7.3-build.7
Issue
2024-07-03 Update : Resolution status updated.
The CVE-2024-6387 vulnerability in the OpenSSH package issue was discovered recently. GKE clusters used by Cloud Composer environments are impacted by this vulnerability, and Cloud Composer 1 and 2 environments that use Public IP networking are especially vulnerable to the described issue. For more information about CVE-2024-6387, see Google GKE Security bulletins .
Newly created Composer environments should not be impacted by this issue any more
Composer-owned GKE clusters will be auto-upgraded to newer GKE versions including the fix for CVE-2024-6387 . Other components of Composer environments using older versions of COS images will also be upgraded. These operations will be done in an expedited manner so some of the update operations might be done outside environment's regular maintenance windows.
While Google works on resolving this issue so Composer environments are immune to CVE-2024-6387 , you can disallow SSH to the Cloud Composer's cluster nodes through establishing proper firewall rules on the environment's cluster as described in the Google GKE Security bulletins. Follow the steps outlined for GKE .
Deprecated
Cloud Composer version 2.3.3 has reached its end of support period .
June 25, 2024
Feature
Cloud Composer is now available in Johannesburg (africa-south1).
June 20, 2024
Feature
​​We are thrilled to announce the Public Preview launch of the new generation of Cloud Composer, Cloud Composer 3 . The new version is now publicly available in all regions supported by Cloud Composer. It comes with a number of new features and characteristics:
All infrastructure hidden in a tenant project
Evergreen versioning
Simplified networking configuration
Improved performance
More reliable DAG parsing and scheduling as DAG Processor and Schedulers are now separate components
10 times bigger storage for Airflow workers
As well as most functionalities already known from the previous Composer versions. To see the list of features already supported by Composer 3, see Comparison of Cloud Composer versions .
Feature
(Airflow 2.7.3) New operators for executing jobs in Google Kubernetes Engine and Kubernetes are available. For example, you can use these operators with Kueue .
Operators for Google Kubernetes Engine:
GKEStartJobOperator
GKEStartKueueInsideClusterOperator
GKEDescribeJobOperator
GKEListJobsOperator
GKECreateCustomResourceOperator
GKEDeleteCustomResourceOperator
GKEStartKueueJobOperator
GKEDeleteJobOperator
GKESuspendJobOperator
GKEResumeJobOperator
Operators for Kubernetes:
KubernetesJobOperator
KubernetesPatchJobOperator
KubernetesDeleteJobOperator
Change
(Airflow 2.7.3) The apache-airflow-providers-cncf-kubernetes package was upgraded to version 8.3.1.
Change
(Airflow 2.7.3) The apache-beam package was upgraded to version 2.56.0.
Change
(Airflow 2.7.3) The apache-airflow-providers-google package was upgraded to version 10.18.0. For more information about changes, see the apache-airflow-providers-google changelog from version 10.17.0 to version 10.18.0.
Change
Cloud Composer 2.8.3 images are available:
composer-2.8.3-airflow-2.7.3 (default)
composer-2.8.3-airflow-2.6.3
Change
A new Airflow build is available in Cloud Composer 3:
composer-3-airflow-2.7.3-build.6
Change
Cloud Composer 2.8.3 is a version with an extended upgrade timeline.
Deprecated
Cloud Composer versions 2.3.2, 2.3.1, and 2.3.0 have reached their end of full support period .
June 14, 2024
Feature
Environment upgrading is now generally available (GA)
June 05, 2024
Change
The dbt-core and dbt-bigquery packages were upgraded to version 1.8.1.
Change
The google-cloud-bigquery package version was downgraded from 3.23.1 to 3.20.1 because of the #39541 issue in the public version of Airflow.
Change
Cloud Composer 2.8.2 images are available:
composer-2.8.2-airflow-2.7.3 (default)
composer-2.8.2-airflow-2.6.3
Deprecated
Cloud Composer versions 2.2.1, 2.2.0, and 2.1.15 have reached their end of full support period .
May 27, 2024
Feature
Cloud Composer 2 now supports data lineage for environments that have CMEK enabled.
Change
Cloud Composer 2.8.1 images are available:
composer-2.8.1-airflow-2.7.3 (default)
composer-2.8.1-airflow-2.6.3
May 11, 2024
Announcement
Starting from GKE version 1.27.5, Cloud Composer environment clusters will start using SSD disks as persistent disks. The disk quota will change from Persistent disk standard (GB) to Persistent disk SSD (GB). Please check the Persistent disk SSD (GB) quota in your project and request an increase if this quota approaches its limit.
A single environment created using a Small environment preset requires at least 600 GB SSD disk space and the SSD quota must be able to accommodate it.
Being close to the limit of the SSD quota might impact the autoscaling capabilities of Cloud Composer environments or make impossible to create new environments.
Change
The Logs in Cloud Logging Only feature is enabled by default in new environments:
New Cloud Composer environments now save Airflow task logs only in Cloud Logging by default.
Existing environments are not changed. If you upgrade an existing environment to Cloud Composer 2.8.0, it keeps saving logs to the environment's bucket.
You can enable and disable saving logs to the environment's bucket for an existing environment.
Fixed
Fixed a problem where some Airflow tasks were failing because the task could not write logs to the environment's bucket.
Change
Cloud Composer 2.8.0 images are available:
composer-2.8.0-airflow-2.7.3 (default)
composer-2.8.0-airflow-2.6.3
April 29, 2024
Change
The apache-airflow-providers-cncf-kubernetes package was upgraded to version 8.1.0.
Change
The apache-airflow-providers-google package is upgraded to version 10.17.0. For more information about changes, see the apache-airflow-providers-google changelog from version 10.16.0 to version 10.17.0.
Change
Cloud Composer 2.7.1 images are available:
composer-2.7.1-airflow-2.7.3 (default)
composer-2.7.1-airflow-2.6.3
Deprecated
Cloud Composer version 2.1.14 has reached its end of full support period .
April 18, 2024
Feature
Python 3.11.8 is available in environments with Airflow 2.6.3 and 2.7.3:
Existing environments with Airflow 2.6.3 and 2.7.3 switch to Python 3.11.8 when upgraded.
Before upgrading, make sure that custom PyPI packages in your environment are compatible with Python 3.11.8.
Issue
Between April 16, 2024, 2:00 AM (PST) and April 17, 2024, 3:30 AM (PST), Cloud Composer service experienced problems with environment creation, upgrades, and changing the environment size . The problem is resolved and all operations are working. If you think that your environment is still impacted by this issue, please reach out to the Cloud Support team.
Fixed
(Available without upgrading) Fixed a problem where enabling or disabling Logs in Cloud Logging Only could render the Airflow web server and workers inoperative. If your environment is affected, apply the fix by enabling or disabling this feature again.
Change
(New environments only) Increased the default value of the [webserver]auto_refresh_interval Airflow configuration option to 15 seconds. Pages in the Airflow UI, such as the list of DAGs, now will update every 15 seconds.
Change
The default version of Airflow is changed to 2.7.3.
Deprecated
Airflow 2.5.3 is no longer included in Cloud Composer images.
Deprecated
Cloud Composer versions 2.1.13, 2.1.12 and 1.20.12 have reached their end of full support period .
Change
Cloud Composer 2.7.0 images are available:
composer-2.7.0-airflow-2.7.3 (default)
composer-2.7.0-airflow-2.6.3
April 11, 2024
Announcement
Starting from June 15, 2024 it will not be possible to create Cloud Composer 1 environments in Google Cloud console. It will still be possible to create Cloud Composer 1 environments through Google Cloud SDK, Terraform, and API in allowlisted projects.
March 26, 2024
Feature
The Logs in Cloud Logging only feature is available in all regions:
In newly created Cloud Composer environments, Airflow task logs are now stored only in Cloud Logging by default.
You can disable this feature for a new or an existing environment. In this case, Airflow task logs are saved both to Cloud Logging and to the environment's bucket.
Change
The default values of the following Airflow configuration options are changed to provide more optimized Cloud Composer environments. This change applies to new environments with Airflow 2.6.3 and 2.7.3 and to existing environments that do not use custom values for these parameters. For existing environments, the new default values will be used after an upgrade.
[scheduler]job_heartbeat_sec to 30
[scheduler]scheduler_health_check_threshold to 60
[scheduler]scheduler_heartbeat_sec to 15
If you want to override the [scheduler]scheduler_heartbeat_sec option's value, then also adjust the [scheduler]scheduler_health_check_threshold option, as described in Cloud Composer documentation .
Change
Cloud Composer 2.6.6 images are available:
composer-2.6.6-airflow-2.7.3
composer-2.6.6-airflow-2.6.3 (default)
composer-2.6.6-airflow-2.5.3
Deprecated
Cloud Composer versions 2.1.11 and 1.20.11 have reached their end of full support period .
March 25, 2024
Announcement
Cloud Composer 1 entered the post-maintenance mode. Google will not release any further updates to Cloud Composer 1 , including new versions of Airflow, bugfixes, and security updates. We recommend planning migration to Cloud Composer 2 .
Issue
In Cloud Composer versions from 2.1.0 to 2.6.4, task instances that succeeded in the past can be marked as FAILED in some cases. We recommend to upgrade to Cloud Composer version 2.6.5 or later where this issue is fixed. For more information, see the related known issue .
March 20, 2024
Feature
The Logs in Cloud Logging only feature is gradually rolled out to all regions:
New Cloud Composer environments now save Airflow task logs only in Cloud Logging by default.
Existing environments are not changed. If you upgrade an existing environment, it keeps saving logs to the environment's bucket.
You can enable and disable saving logs to the environment's bucket for an existing environment.
Currently the feature is rolled out to the following regions: africa-south1, asia-east1, asia-east2, asia-northeast2, asia-south2, asia-southeast2, australia-southeast2, europe-central2, europe-southwest1, europe-west10, europe-west12, europe-west2, europe-west3, europe-west4, europe-west6, europe-west8, me-central1, me-central2, me-west1, northamerica-northeast2, southamerica-west1, us-east5, us-east7, us-south1, and us-west4.
March 19, 2024
Fixed
BigQueryInsertJobOperator now correctly handles ephemeral tables created with tableDefinitions .
Fixed
Fixed an issue where past Airflow task instances could be marked as failed in some cases.
Fixed
Fixed an issue where Airflow task logs for the first try of a task might not be visible in Airflow UI.
Feature
Airflow 2.7.3 is available in Cloud Composer images.
Fixed
In BigQueryInsertJobOperator, fixed the handling of parsing errors during Lineage emission when the query is too long or deeply nested.
Change
The apache-airflow-providers-cncf-kubernetes package was upgraded to version 8.0.1 in images with Airflow 2.6.3, and images with Airflow 2.7.3 have this version.
Change
The apache-airflow-providers-google package is upgraded to version 10.16.0 in images with Airflow 2.6.3, and images with Airflow 2.7.3 have this version. For more information about changes, see the apache-airflow-providers-google changelog from version 10.15.0 to version 10.16.0.
Change
Cloud Composer 2.6.5 images are available:
composer-2.6.5-airflow-2.7.3
composer-2.6.5-airflow-2.6.3 (default)
composer-2.6.5-airflow-2.5.3
Change
Cloud Composer 2.6.5 is a version with an extended upgrade timeline.
Deprecated
Cloud Composer versions 2.1.10, 2.1.9, 1.20.10, and 1.20.9 have reached their end of full support period .
March 14, 2024
Issue
In Airflow 2.6.3 offered in Cloud Composer versions earlier than 2.6.2, task statuses can be deleted as a result of the #31179 Airflow issue. If you use Airflow 2.6.3, we recommend to upgrade to Cloud Composer version 2.6.2 or later where this issue is fixed.
March 13, 2024
Deprecated
All preview versions of Cloud Composer 2 are past their security notifications end date and are not supported. If your environment uses a preview version of Cloud Composer 2, then please upgrade this environment to a supported version or re-create it using the latest version of Cloud Composer 2.
Issue
If you see frequent scheduler restarts in your Airflow 2.6.3 environment and the [scheduler]job_heartbeat_sec Airflow configuration option is set to a non-default value, you can fix this issue either by upgrading to Cloud Composer version 2.6.4 or by removing this option's override, so that it uses the default value.
March 12, 2024
Fixed
Fixed creation and upgrades in environments that have environment variables with special symbols.
Change
Cloud Composer 2.6.4 images are available:
composer-2.6.4-airflow-2.6.3 (default)
composer-2.6.4-airflow-2.5.3
Deprecated
Cloud Composer versions 2.1.8 and 1.20.8 have reached their end of full support period .
March 05, 2024
Breaking
Cloud Composer 2.6.3 release was rolled back. If you have an environment that was created with a composer-2.6.3-airflow-* image, you can later upgrade it to a newer version.
February 28, 2024
Announcement
Cloud Composer 2.6.3 release started on February 28, 2024 . Get ready for upcoming changes and features as we roll out the new release to all regions. This release is in progress at the moment. Listed changes and features might not be available in some regions yet
Change
(Cloud Composer 2 in select regions) Reduced the propagation time of the revoked Cloud IAM permission that blocks access to Airflow UI.
Change
In new environments with Airflow 2.6.3, the default values of the following Airflow configuration options are changed to provide more optimized Cloud Composer environments:
[scheduler]job_heartbeat_sec to 30
[scheduler]scheduler_heartbeat_sec to 15
Change
(Cloud Composer 2 in select regions) Cloud Composer shows the account selection and consent screens when opening Airflow UI for an environment.
If you have the "Don't allow users to access any third-party apps" setting enabled in Google Workspace, then configure access to the "Apache Airflow in Cloud Composer" app in Google Workspace, so that your Google Workspace users can still access Airflow UI in Cloud Composer environments. For more information, see Allow access to Airflow UI in Google Workspace .
Fixed
Fixed a problem where the IAM policy of a custom environment's bucket is replaced when an environment is created.
Change
The apache-airflow-providers-google package is upgraded to version 10.15.0 in images with Airflow 2.6.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.14.0 to version 10.15.0.
Change
Cloud Composer 2.6.3 images are available:
composer-2.6.3-airflow-2.6.3 (default)
composer-2.6.3-airflow-2.5.3
February 26, 2024
Change
Starting February 27, 2024, in the us-central1, europe-west1, europe-west2, europe-west3, europe-west6, us-east1, and us-east4 regions it is possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .
In all other existing or newly created projects in these regions, it is possible to create only Cloud Composer 2 environments. This change is a part of the preparation for Cloud Composer 1 end of support, as communicated earlier and described in the Versioning overview .
February 22, 2024
Fixed
Fixed a problem where one DAG run could potentially delete task instances from other DAG runs if run_id was the same (backported #32684 from a later Airflow version).
Change
Cloud Composer 2.6.2 images are available:
composer-2.6.2-airflow-2.6.3 (default)
composer-2.6.2-airflow-2.5.3
February 15, 2024
Announcement
Starting February 16, 2024, in the asia-east2, asia-northeast1, asia-northeast2, asia-northeast3, asia-south1, and australia-southeast1 regions it is possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .
In all other existing or newly created projects in these regions, it is possible to create only Cloud Composer 2 environments. This change is a part of the preparation for Cloud Composer 1 end of support, as communicated earlier and described in the Versioning overview .
Change
The apache-airflow-providers-google package is upgraded to version 10.14.0 in images with Airflow 2.6.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.13.1 to version 10.14.0.
Fixed
Improved the reliability of syncing Airflow tasks logs to the environment bucket. This fix addresses the issue with storing Airflow task log files, which affected environments in some cases.
Fixed
Improved the environment component responsible for metrics reporting (composer-monitoring) to minimize the restarts of this component.
Change
Cloud Composer 2.6.1 images are available:
composer-2.6.1-airflow-2.6.3 (default)
composer-2.6.1-airflow-2.5.3
Deprecated
Cloud Composer versions 2.1.6 and 1.20.6 have reached their end of full support period .
February 09, 2024
Announcement
Starting January 20, 2024, in the asia-southeast1, us-west3, and us-west4 regions it is possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .
In all other existing or newly created projects in these regions, it is possible to create only Cloud Composer 2 environments. This change is a part of the preparation for Cloud Composer 1 end of support, as communicated earlier and described in the Versioning overview .
February 08, 2024
Issue
The enabling and disabling functionality for the Logs in Cloud Logging only feature was temporarily rolled back.
At the moment, it is not possible to enable or disable this feature, and your environment will keep its current configuration. If this feature is enabled, Cloud Composer will keep saving logs to Cloud Logging only. Newly created environments save logs to Cloud Logging only and the environment's bucket.
We will announce when the issue is resolved.
February 05, 2024
Announcement
Airflow worker memory requirements in Python 3.11 are 10% higher compared to workers in Python 3.8. If you use custom settings for Airflow worker CPU and memory limits, then Airflow workers in your environment might enter the CrashLoopBackOff status and stop executing tasks, if resource consumption goes above the limit.
If your environment is impacted, see the related known issue for possible solutions: Workers require more memory than in previous Airflow versions .
The default worker_concurrency formula was adjusted in Airflow 2.6.3 and later versions to accommodate this change.
Change
Data lineage integration is now enabled by default in newly created environments with Cloud Composer version 2.1.2 and later, if Data Lineage API is enabled in the environment's project. Existing and upgraded environments keep their current configuration.
Feature
Python 3.11 is available in environments with Airflow 2.6.3:
New environments with Airflow 2.6.3 use Python 3.11. Python 3.8 is no longer available in new environments with Airflow 2.6.3.
Existing environments with Airflow 2.6.3 switch to Python 3.11 when upgraded. Before upgrading, make sure that custom PyPI packages in your environment are compatible with Python 3.11.
New and upgraded environments with Airflow 2.5.3 keep using Python 3.8.
Cloud Composer versions earlier than 2.6.0 keep using Python 3.8.
Change
(Available without upgrading) The default worker_concurrency in Airflow 2.6.3 and later versions is now calculated using a different formula. For more information, see Change worker concurrency .
Feature
Data lineage is now generally available (GA) in Cloud Composer 2.
Change
Connections to the Redis environment component are now additionally secured with a password.
Improved the reliability of the environment component responsible for metrics reporting (airflow-monitoring).
Change
The apache-airflow-providers-google package is upgraded to version 10.13.1 in images with Airflow 2.6.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.12.0 to version 10.13.1.
Change
Cloud Composer 2.6.0 images are available:
composer-2.6.0-airflow-2.6.3 (default)
composer-2.6.0-airflow-2.5.3
Deprecated
Cloud Composer versions 2.1.5 and 1.20.5 have reached their end of full support period .
Change
Cloud Composer 2.6.0 is a version with an extended upgrade timeline.
January 31, 2024
Announcement
In the first half of February, 2024, Cloud Composer 2 environments with Airflow 2.6.3 will start using Python 3.11 :
New and upgraded environments with Airflow 2.6.3 will switch to Python 3.11.
New and upgraded environments with Airflow 2.5.3 will still use Python 3.8.
Python 3.8 will no longer be available in new versions of Cloud Composer with Airflow 2.6.3 (and later versions of Airflow).
Existing environments with Airflow 2.6.3 will keep using Python 3.8 until they are upgraded.
Cloud Composer versions released before this change will keep using Python 3.8.
January 25, 2024
Feature
The Logs in Cloud Logging Only feature is now generally available (GA):
New Cloud Composer environments now save Airflow task logs only in Cloud Logging by default.
Existing environments are not changed. If you upgrade an existing environment to Cloud Composer 2.5.5, it keeps saving logs to the environment's bucket.
You can enable and disable saving logs to the environment's bucket for an existing environment.
Feature
Increased the amount of memory available to the Redis component in environments with Medium and Large environment sizes. This change improves the performance of Cloud Composer environments.
Fixed
(Available without upgrading) Auxiliary Cloud Pub/Sub topics and subscriptions used by save and load snapshot operations are now cleaned up if these operations fail.
Fixed
(Available without upgrading) In VPC Service Controls setups, device policy attributes in access levels are now respected when accessing the Airflow web server.
Change
Sensitive Airflow configuration options are now hidden in Airflow UI by default. The default value of the [webserver]expose_config option is now set to non-sensitive-only .
Deprecated
Cloud Composer versions 2.1.4, 2.1.3, 1.20.4, and 1.20.3 have reached their end of full support period .
January 08, 2024
Fixed
Environment snapshots now correctly work with the bring your own bucket (BYOB) feature.
Fixed
(Available without upgrading) Cloud Composer now creates an audit log on a successful completion of create and update environment operations.
Fixed
If an environment update operation fails, Airflow configuration overrides that were applied by this operation are rolled back.
Change
The apache-airflow-providers-google package is upgraded to version 10.12.0 in images with Airflow 2.6.3 and 2.5.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.11.1 to version 10.12.0.
Change
Cloud Composer 2.5.4 images are available:
composer-2.5.4-airflow-2.5.3
composer-2.5.4-airflow-2.6.3 (default)
Deprecated
Cloud Composer versions 2.1.2 and 1.20.2 have reached their end of full support period .
December 07, 2023
Deprecated
Cloud Composer versions 2.1.1, 2.1.0, 1.20.1, and 1.20.0 have reached their end of full support period .
Change
Cloud Composer 2.5.3 images are available:
composer-2.5.3-airflow-2.5.3
composer-2.5.3-airflow-2.6.3 (default)
December 01, 2023
Feature
(Available without upgrading) The dags list-import-errors Airflow CLI command is now supported.
Fixed
Improved the validation of zone values. Environment creation requests do not start the operation if the zone value is not valid.
Change
The apache-airflow-providers-google package is upgraded to version 10.11.1 in images with Airflow 2.6.3 and 2.5.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.10.1 to version 10.11.1.
Change
The apache-airflow-providers-cncf-kubernetes package was upgraded to version 7.9.0.
Change
Cloud Composer 2.5.2 images are available:
composer-2.5.2-airflow-2.5.3
composer-2.5.2-airflow-2.6.3 (default)
Deprecated
Cloud Composer versions 2.0.32 and 1.19.15 have reached their end of full support period .
November 30, 2023
Feature
You can specify a preferred Cloud SQL zone for the environment's database when creating a standard resilience environment.
Change
Quotas for snapshot operations are increased. Now it's possible to create up to 52 snapshots daily for a single environment. For scheduled snapshots taken at regular intervals, the minimum recommended interval is now 30 minutes (previously it was two hours).
November 26, 2023
Feature
Cloud Composer is now available in Dammam (me-central2).
November 21, 2023
Announcement
Between January, 2024 and April, 2024 newly created Cloud Composer 2 environments will start using Python 3.11 . After this change, Python 3.8 will no longer be available in new versions of Cloud Composer. If you upgrade an existing Cloud Composer 2 environment, the Python version will change to Python 3.11 as well.
The timing for Python 3.11 availability will be announced in January, 2024.
November 17, 2023
Announcement
Starting December 1, 2023, in the europe-central2, northamerica-northeast1, us-west1, and us-west2 regions it will be possible to create new Cloud Composer 1 environments only in projects that already have Cloud Composer 1 environments .
In all other existing or newly created projects in these regions, it will be possible to create only Cloud Composer 2 environments. This change is a part of the preparation for Cloud Composer 1 end of support, as communicated earlier and described in the Versioning overview .
November 15, 2023
Announcement
All Cloud Composer environment's GKE clusters are set up with maintenance exclusions for the following periods:
From November 20, 2023 to November 29, 2023 (already configured)
From December 20, 2023 to January 2, 2024 (will be configured in December)
For more information, see Maintenance exclusions .
November 06, 2023
Change
The apache-airflow-providers-cncf-kubernetes package was upgraded to version 7.6.0.
Change
The apache-airflow-providers-google package is upgraded to version 10.10.1 in images with Airflow 2.6.3 and 2.5.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.10.0 to version 10.10.1.
Deprecated
Cloud Composer versions 2.0.31, 2.0.30, 1.19.14, and 1.19.13 have reached their end of full support period .
Change
Cloud Composer 2.5.1 images are available:
composer-2.5.1-airflow-2.5.3
composer-2.5.1-airflow-2.6.3 (default)
October 30, 2023
Fixed
Fixed the validation of the constraints/gcp.restrictServiceUsage Organization Policy constraint. It no longer checks the non-blockable services, such as Cloud Logging and Cloud Monitoring.
Feature
Bring your own bucket feature is now generally available (GA). You can now use a custom Cloud Storage bucket as an environment's bucket.
Change
Directories with names ending in .py are no longer synchronized. If your
environment's bucket contains such directories, please rename them.
Fixed
Fixed the cause of workers and schedulers failing when Cloud Storage objects with invalid filesystem names are synchronized.
Change
The apache-airflow-providers-google package is upgraded to version 10.10.0 in images with Airflow 2.6.3 and 2.5.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.9.0 to version 10.10.0.
Change
The default version of Airflow is changed to 2.6.3.
Deprecated
Airflow 2.4.3 is no longer included in Cloud Composer images.
Announcement
In January 2024, we plan to switch newly created Cloud Composer 2 environments to stop storing task logs in the environment's bucket by default:
Task logs will be available in Cloud Logging and Airflow UI.
This change will not be enabled in already existing environments , including environments upgraded to a later version of Cloud Composer that supports this feature.
It will be possible to enable and disable the synchronization of task logs to the environment's bucket for an existing environment.
This planned change will be announced in the Release Notes when it is rolled out.
Change
Cloud Composer 2.5.0 images are available:
composer-2.5.0-airflow-2.5.3
composer-2.5.0-airflow-2.6.3 (default)
Deprecated
Cloud Composer versions 2.0.29 and 1.19.12 have reached their end of full support period .
October 16, 2023
Feature
Airflow 2.6.3 is available in Cloud Composer images.
Change
Airflow 2.6.3 consolidates the logic for handling tasks that are stuck in the queued state :
The [kubernetes]worker_pods_pending_timeout , [celery]stalled_task_timeout , and [celery]task_adoption_timeout Airflow configuration options are deprecated and merged into the [scheduler]task_queued_timeout option.
In Cloud Composer, the default value of the [scheduler]task_queued_timeout option is set to 40 minutes .
If your environment uses a custom value for any of the deprecated Airflow configuration options, please clear the overrides before upgrading. If the values are not cleared, the longest timeout of all deprecated options is selected upon upgrading.
If required, you can override the value of the [scheduler]task_queued_timeout option in your environment.
For more information about other changes between Airflow versions 2.5.3 and 2.6.3, see Airflow release notes .
Change
Cloud Composer 2.4.6 images are available:
composer-2.4.6-airflow-2.6.3
composer-2.4.6-airflow-2.5.3 (default)
composer-2.4.6-airflow-2.4.3
October 05, 2023
Fixed
Fixed a problem where newly-created Airflow workers ignored the SIGTERM signal, which could lead to task failures.
Feature
Cloud Composer 2 is now available in Milan (europe-west8), Berlin (europe-west10), and Turin (europe-west12).
Change
Cloud Composer 2.4.5 images are available:
composer-2.4.5-airflow-2.5.3 (default)
composer-2.4.5-airflow-2.4.3
October 03, 2023
Feature
Oozie to Airflow tool version 2.0 is available. The new version of the tool supports Airflow 2.
Oozie to Airflow tool converts Apache Oozie workflows into Apache Airflow DAGs. For more information, see the project's page in PyPI and the oozie-to-airflow repository on GitHub.
September 29, 2023
Feature
Airflow triggerer is now generally available (GA).
Change
The cost of the environments.ExecuteAirflowCommand and environments.StopAirflowCommand operations is reduced from 100 to 25 quota units .
Change
The apache-airflow-providers-google package is upgraded to version 10.9.0 in images with Airflow 2.5.3 and 2.4.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.7.0 to version 10.9.0.
Deprecated
Cloud Composer versions 2.0.28, 2.0.27, 1.19.11, and 1.19.10 have reached their end of full support period .
Change
Cloud Composer 2.4.4 images are available:
composer-2.4.4-airflow-2.5.3 (default)
composer-2.4.4-airflow-2.4.3
September 18, 2023
Change
The apache-airflow-providers-google package is upgraded to version 10.7.0 in images with Airflow 2.5.3 and 2.4.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.5.0 to version 10.7.0.
Version 10.7.0 includes new Cloud Run, Cloud Batch and Dataplex Data Quality operators:
Cloud Run is used to build and deploy scalable containerized apps written in any language (including Go, Python, Java, Node.js, .NET, and Ruby) on a fully managed platform. The newly provided Cloud Run Operators enable creating, executing, updating, deleting and listing Cloud Run Jobs.
Cloud Batch is a fully managed batch service to schedule, queue, and execute batch jobs on Google's infrastructure. The provided Cloud Batch Operators enable submitting, listing and deleting batch jobs as well as listing a job's tasks.
Dataplex is an intelligent data fabric that provides unified analytics and data management across your data lakes, data warehouses, and data marts. New Dataplex operators handle creating, updating, getting, deleting and running a Data Quality scan, getting a Data Quality Scan job, creating and deleting a zone, as well as creating and deleting an asset.
Change
Cloud Composer 2.4.3 images are available:
composer-2.4.3-airflow-2.5.3 (default)
composer-2.4.3-airflow-2.4.3
Deprecated
Cloud Composer versions 2.0.26 and 1.19.9 have reached their end of full support period .
September 14, 2023
Fixed
(Available without an upgrade) Fixed the issue with reaching the "Write requests per day" quota limit when executing Airflow CLI commands in Cloud Composer 2.
Announcement
(Cloud Composer 2 only) In the next two weeks we plan to introduce a 1 vCPU maximum limit for Airflow Triggerers in Cloud Composer. This change is a part of an upcoming adjustment to our triggerer resource allocation strategy where we want to allow for an increase in the maximum triggerer count.
After this change takes effect, if you configured more than 1 vCPU per triggerer, then the next update operation will generate an error. To address this change, adjust the triggerer configuration to meet the new 1 vCPU limit.
September 12, 2023
Feature
Cloud Composer 2 is now available in Doha (me-central1).
September 08, 2023
Security
Fixed the CVE-2023-29247 vulnerability in Airflow versions 2.4.3 and 2.5.3. To apply the fix, please upgrade your environment to Cloud Composer version 2.4.2 or later. For more information about this vulnerability in relation to Cloud Composer environments, see Known issues .
Fixed
Cloud Composer now correctly generates an error message when a Cloud Composer 1 environment is created using a version alias in a region where Cloud Composer 1 is not supported.
Change
Cloud Composer now generates a FAILED_PRECONDITION error message when an environment operation fails because the environment's cluster is missing.
Deprecated
Cloud Composer versions 2.0.25 and 1.19.8 have reached their end of full support period .
Change
Cloud Composer 2.4.2 images are available:
composer-2.4.2-airflow-2.5.3 (default)
composer-2.4.2-airflow-2.4.3
September 07, 2023
Feature
Maintenance windows configuration is now generally available (GA).
September 04, 2023
Change
(Cloud Composer 2) An update that enforces VPC Service Controls perimeter settings for accessing Airflow UI and Airflow REST API is rolled out to all regions. As a result of this change, certain users that could previously access the Airflow UI or Airflow REST API might not be able to do it now.
If you experience problems with access to Airflow UI or Airflow REST API, update the perimeter or access level configuration for affected users. For more information on configuring VPC Service Controls see Configure VPC Service Controls .
August 26, 2023
Issue
(Cloud Composer versions 1.x.x and 2.0.x) :
Creating Cloud Composer environments in projects with VPC Service Controls enabled fails if you add Cloud Identity-Aware Proxy API or Identity-Aware Proxy TCP API to the security perimeter.
For more information and possible workarounds, see Environment creation fails in projects with VPC Service Controls enabled .
August 22, 2023
Feature
Cloud Composer 2 is now available in Dallas (us-south1), Santiago (southamerica-west1), Melbourne (australia-southeast2), and Madrid (europe-southwest1).
August 16, 2023
Fixed
Fixed an issue where changing the environment size didn't modify the Redis component size properly.
Fixed
Fixed an issue where data lineage for BigQueryInsertJobOperator was reported to the incorrect target object in cases where Airflow tasks were running in parallel.
Change
The apache-airflow-providers-google package is upgraded to version 10.5.0 in images with Airflow 2.5.3 and 2.4.3. For more information about changes, see the apache-airflow-providers-google changelog from version 10.3.0 to version 10.5.0.
Change
Cloud Composer 2.4.1 images are available:
composer-2.4.1-airflow-2.5.3 (default)
composer-2.4.1-airflow-2.4.3
Deprecated
Cloud Composer versions 2.0.24 , 2.0.23 , 1.19.7 , and 1.19.6 have reached their end of full support period .
August 07, 2023
Change
The composer.environments.executeAirflowCommand permission is now required to run Airflow CLI commands through the gcloud environments run command:
The composer.user and composer.environmentAndStorageObjectViewer roles do not have this permission and are not permitted to run Airflow CLI commands .
This permission is added to the composer.admin and composer.environmentAndStorageObjectAdmin roles.
Feature
Airflow CLI commands no longer require access to the control plane of your environment's cluster.
Feature
You can run Airflow CLI commands through Cloud Composer API .
Change
GCSFuse version updated to 1.01. Cloud Composer uses GCSFuse to sync files between the environment bucket and worker pods.
Fixed
Fixed the cause of failures when creating Qwiklabs environments in some scenarios.
Deprecated
Cloud Composer versions 2.0.22 and 1.19.5 have reached their end of full support period .
Change
Cloud Composer 2.4.0 images are available:
composer-2.4.0-airflow-2.5.3 (default)
composer-2.4.0-airflow-2.4.3
July 31, 2023
Feature
It is now possible to enable and disable High Resilience mode for an existing environment.
July 25, 2023
Feature
The new Composer menu is now available in Airflow UI. You can use it to access environment-related resources (such as DAG files and logs) from your environment's Airflow UI.
Feature
Cloud Composer 2 is now available in Paris (europe-west9).
Change
The apache-airflow-providers-google package is upgraded to public version 10.3.0 in images with Airflow 2.5.3 and 2.4.3. Changes compared to version 2023.6.6+composer :
Google Ads API default version updated to v14.
scipy package is removed from dependencies.
Several other small fixes and improvements.
For more information about changes, see the apache-airflow-providers-google changelog from version 10.1.1 to version 10.3.0.
Fixed
(Cloud Composer 2) Airflow web server monitoring is now less sensitive to minor increases in response latency. This change fixes an issue where the web server status was reported as unhealthy for a short period of time.
Change
(Cloud Composer 2) The default version of Airflow is changed to 2.5.3.
Deprecated
(Cloud Composer 2) Airflow 2.5.1 is no longer included in Cloud Composer images.
Change
Cloud Composer 2.3.5 images are available:
composer-2.3.5-airflow-2.5.3 (default)
composer-2.3.5-airflow-2.4.3
This version is a version with an extended upgrade timeline.
Deprecated
Cloud Composer versions 2.0.21 and 1.19.4 have reached their end of full support period .
July 12, 2023
Feature
Airflow 2.5.3 is available in Cloud Composer images.
Change
(Available without upgrading) Improved the performance of DAG UI in Private IP environments.
Fixed
Fixed the retrying of transient errors in Composer Agent when creating Cloud Composer 2 environments.
Change
(Available without upgrading) The default amount of memory available to the web server, schedulers, and workers is changed from 3.75 GB per CPU core to 4 GB per CPU core. This value is used only if you do not specify the amount of memory available to these environment components.
Deprecated
Cloud Composer versions 2.0.20 and 1.19.3 have reached their end of full support period .
Change
Cloud Composer 2.3.4 images are available:
composer-2.3.4-airflow-2.5.3
composer-2.3.4-airflow-2.5.1 (default)
composer-2.3.4-airflow-2.4.3
July 04, 2023
Feature
Cloud Composer 2 is now available in Tel Aviv (me-west1).
June 29, 2023
Feature
A new metric was added to monitor exit_codes of task runners: composer.googleapis.com/workflow/task_runner/terminated_count .
Change
Improved the error message when environment creation fails because of issues with GKE workloads.
Feature
(Airflow 2.4.3) Logs produced in Airflow DAG callbacks are now visible in Cloud Logging under the "DAG processor manager" logs section. This feature was previously available only in images with Airflow 2.5.1.
Feature
(Airflow 2.4.3) Changed the severity of triggerer watchdog messages from error to warning and updated the message's content to be more informative. This feature was previously available only in images with Airflow 2.5.1.
Change
Cloud Composer 2.3.3 images are available:
composer-2.3.3-airflow-2.5.1 (default)
composer-2.3.3-airflow-2.4.3
Deprecated
Cloud Composer versions 2.0.19 , 2.0.18 , 1.19.2 , and 1.19.1 have reached their end of full support period .
June 20, 2023
Feature
(Airflow 2.5.1 only) Logs produced in Airflow DAG callbacks are now visible in Cloud Logging in the "DAG processor manager" logs section.
Feature
DataprocSubmitJobOperator now supports data lineage for Hive, SparkSQL, Presto, and Trino jobs.
Change
(Airflow 2.5.1) Changed the severity of triggerer watchdog messages from error to warning and updated the message's content to be more informative. This change improves debugging experience for triggers.
Change
Cloud Composer 2.3.2 images are available:
composer-2.3.2-airflow-2.5.1 (default)
composer-2.3.2-airflow-2.4.3
June 15, 2023
Announcement
Cloud Composer 2.3.1 release started on June 15, 2023 . Get ready for upcoming changes and features as we roll out the new release to all regions. This release is in progress at the moment. Listed changes and features might not be available in some regions yet.
Feature
Cloud Composer 2 is now available in Columbus (us-east5).
Change
Cloud Composer 2.3.1 images are available:
composer-2.3.1-airflow-2.5.1 (default)
composer-2.3.1-airflow-2.4.3
Deprecated
Cloud Composer versions 2.0.17 and 1.19.0 have reached their end of full support period .
June 14, 2023
Feature
Cloud Composer 2 is now available in Finland (europe-north1), Toronto (northamerica-northeast2), and Delhi (asia-south2).
June 09, 2023
Feature
An environment can now run two Airflow triggerers. This feature was previously available only in Highly Resilient environments.
Change
The apache-airflow-providers-google package in images with Airflow 2.5.1 and 2.4.3 was upgraded to version 2023.6.6+composer . This version is based on the public version 10.1.1 , with additional fixes to some operators and upgrades to many SDK package dependencies (such as protobuf ). Notable changes include:
Google Ads default API changed from version 12 to 13.
protobuf==4.22.5 is included, this is the first Cloud Composer version with protobuf version 4.x.
In this version of the provider package, the deprecated delegate_to parameter is removed from all GCP operators, hooks, and triggers, as well as from Firestore and Gsuite transfer operators that interact with GCS. Impersonation can be achieved by utilizing the impersonation_chain parameter instead. The delegate_to param remains available only in Gsuite and marketing platform hooks and operators that don't interact with Google Cloud.
For a full list of changes in the apache-airflow-providers-google , see the changelog from version 8.9.0 to 10.1.1 on the apache-airflow-providers-google page .
Change
The google-cloud-asset package is added to images with Airflow 2.5.1 and 2.4.3.
Fixed
(Cloud Composer 2) Fixed an issue where it was not possible to delete a Cloud Composer environment if the environment's service account was already deleted.
Change
Cloud Composer 2.3.0 images are available:
composer-2.3.0-airflow-2.5.1 (default)
composer-2.3.0-airflow-2.4.3
Deprecated
Cloud Composer versions 2.0.16 , 2.0.15 , 1.18.12 , and 1.18.11 , have reached their end of full support period .
May 30, 2023
Announcement
Starting July 2023, the new composer.environments.executeAirflowCommand permission will be required to run Airflow CLI commands through the gcloud composer environments run command:
The composer.user and composer.environmentAndStorageObjectViewer roles do not have this permission and will not be permitted to run Airflow CLI commands starting July 2023 .
This permission is already available in IAM and you can assign it in advance.
This permission is already added to the composer.admin composer.environmentAndStorageObjectAdmin roles.
This change applies only to Cloud Composer 2 environments. It will still be possible to run Airflow CLI commands on Cloud Composer 1 environments without this permission.
Feature
(Cloud Composer 2) You can now use custom certificates when installing packages from your private repository.
Feature
(Cloud Composer 2) The number of web server workers is now set dynamically based on available web server CPU and memory. This change improves Airflow web server performance and scalability by allowing it to handle more users.
These workers are internal to the gunicorn web server and are not related to workers that run tasks.
The new value is applied to the [webserver]workers Airflow configuration option when you change the environment's configuration. To use a different value, override this Airflow configuration option.
The number of web server workers is clamped between 2 and 12 workers and is calculated as the minimum of (web_server_CPU * 2) + 1 and web_server_memory * 1.1 .
Change
An improved error message is now displayed when a subnetwork with unsupported IPv4 ranges is used to create an environment in a shared VPC configuration.
Change
(Cloud Composer 2) The deprecated [core]non_pooled_task_slot_count Airflow configuration option is replaced with the [core]default_pool_task_slot_count configuration option in the default Airflow configuration. Make sure to update your custom Airflow configuration overrides to use the new option instead of the deprecated one.
Change
Cloud Composer 2.2.1 images are available:
composer-2.2.1-airflow-2.5.1 (default)
composer-2.2.1-airflow-2.4.3
Deprecated
Cloud Composer versions 2.0.14 , 2.0.13 , 1.18.10 , and 1.18.9 , have reached their end of full support period .
May 19, 2023
Feature
Cloud Composer API for Highly resilient environments is available. Cloud Console UI and gcloud CLI commands for this feature will be gradually rolled out in the upcoming days. Terraform support will be rolled out in the upcoming weeks as well.
Change
(Cloud Composer 2) Increased the default values of [core]dagbag_import_timeout to 120 seconds, and dag_file_processor_timeout to 300 seconds. The updated parameters allow the DAG Processor to parse more DAGs and provide more time to add parsed DAGs into the DAG bag.
Feature
Splitting Celery logs into stdout/stderr ( #30485 ) is now possible with the [logging]celery_stdout_stderr_separation Airflow configuration option. The default value for this option is False .
Change
(Cloud Composer 2) Increased the default value of [scheduler]zombie_detection_interval to 20 seconds. This change reduces the chance that Airflow skips retry attempts for a zombie task.
Change
Cloud Composer 2.2.0 images are available:
composer-2.2.0-airflow-2.5.1 (default)
composer-2.2.0-airflow-2.4.3
Deprecated
Cloud Composer versions 2.0.12 and 1.18.8 , have reached their end of full support period .
May 12, 2023
Change
(Airflow 2.4.3 and 2.5.1) Python packages upgraded:
Added new packages: dbt-bigquery and google-cloud-documentai .
The apache-airflow-providers-cncf-kubernetes package was upgraded to version 6.0.0.
Change
(Cloud Composer 2) The default [celery]stalled_task_timeout value is set to 1200 . Tasks that stay in the queued state for more than 20 minutes (1200 seconds) are now rescheduled.
Breaking
(Cloud Composer 2 with Airflow 2.5.1 and 2.4.3) Version 6.0.0 of the CNCF Kubernetes Provider package ( apache-airflow-providers-cncf-kubernetes ) introduces a backwards incompatible change. The kubernetes_default connection is now used by default in the KubernetesPodOperator . For more information, see CNCF Kubernetes Provider Changelog .
Change
(Cloud Composer 2) The default version of Airflow is changed to 2.5.1.
Deprecated
Cloud Composer versions 2.0.11 and 1.18.7 , have reached their end of full support period .
Change
Cloud Composer 2.1.15 images are available:
composer-2.1.15-airflow-2.5.1 (default)
composer-2.1.15-airflow-2.4.3
Deprecated
Airflow 2.3.4 is no longer included in Cloud Composer images.
April 25, 2023
Announcement
Starting from March 2023, Cloud Composer 1 is in maintenance mode. Maintenance releases of Cloud Composer 1 will contain only bug fixes and small improvements. Support for new Airflow versions after 2.4.3 is not planned for Cloud Composer 1.
Fixed
(Airflow 2.5.1 and 2.4.3) Per-folder Roles Registration now correctly reassigns permissions if a DAG file is deleted and added back.
Feature
(Cloud Composer 2) Airflow 2.5.1 is available in Cloud Composer images.
Change
Cloud Composer 2.1.14 and 1.20.12 images are available:
composer-2.1.14-airflow-2.5.1
composer-2.1.14-airflow-2.4.3 (default)
composer-2.1.14-airflow-2.3.4
composer-1.20.12-airflow-2.4.3
composer-1.20.12-airflow-2.3.4
composer-1.20.12-airflow-1.10.15
April 18, 2023
Feature
Java Runtime in Airflow workers and schedulers is updated from version 11 to version 17 .
Feature
(Composer 2 only) Cloud Composer is now available in Taiwan (asia-east1), Jakarta (asia-southeast2), and Netherlands (europe-west4).
Fixed
(Airflow 2.4.3 only) In environments with enabled data lineage integration, removed unnecessary warnings about deprecated operators that appeared in Airflow task logs.
Deprecated
The Google Display and Video 360 API v.1.1 is deprecated and its sunset date is April 27, 2023. Airflow operators that relied on API v1.1 will stop working after this date. If you use Google Display and Video 360 operators, then upgrade your environment to Cloud Composer version 2.1.13 or later. For more information about changes in operators, see Known Issues .
Deprecated
The Google Campaign Manager API v3.5 API is deprecated and its sunset date is May 1, 2023. Airflow operators that relied on API v3.5 will stop working after this date. If you use Google Campaign Manager operators, then upgrade your environment to Cloud Composer version 2.1.13 or later.
Change
The apache-airflow-providers-google package in images with Airflow 2.3.4 and 2.4.3 was upgraded to 2023.4.13+composer . Changes compared to version 2023.3.14+composer :
Update Google Display and Video 360 operators to use API v2.
Update Google Campaign Manager operators to use API v4.
Update google-cloud-dlp package to version 3.7.1 and adjust hooks and operators.
Change
Cloud Composer 2.1.13 images are available:
composer-2.1.13-airflow-2.4.3 (default)
composer-2.1.13-airflow-2.3.4
Deprecated
Cloud Composer versions 2.0.10 and 1.18.6 , have reached their end of full support period .
April 06, 2023
Feature
(Available without upgrading) Selected time ranges are now synchronized between the Monitoring tab and the Logs tab in Cloud Console.
Fixed
(Cloud Composer 2) Fixed a problem that caused Airflow tasks to fail in some cases because a worker scheduled for deletion started a new task before it was deleted.
Fixed
(Available without upgrading, Cloud Composer 1) Error messages related to the environment's cluster creation are now always propagated to error messages for Cloud Composer operations.
Change
GCSFuse version updated to 42.3. Cloud Composer uses GCSFuse to sync files between the environment bucket and worker pods.
Change
Cloud Composer 2.1.12 images are available:
composer-2.1.12-airflow-2.4.3 (default)
composer-2.1.12-airflow-2.3.4
Deprecated
Cloud Composer versions 2.0.9 , 2.0.8 , 1.18.5 , and 1.18.4 , have reached their end of full support period .
March 31, 2023
Announcement
(Cloud Composer 2) Access Approval is now generally available (GA). See Access Approval overview and Access Approval supported services for more information.
March 27, 2023
Feature
Cloud Composer 2 now supports access with external identities through workforce identity federation.
Fixed
Fixed a problem where upgrade checks were failing for some Cloud Composer 2 environments. This issue was affecting environments where Cloud Build can't be used to install PyPI packages.
Change
Increased the timeout for environment operations performed by Cloud Build to 35 minutes.
Change
The default value for the dag_dir_list_interval Airflow configuration option is changed from 30 to 120 seconds.
Change
Cloud Composer 2.1.11 and 1.20.11 images are available:
composer-2.1.11-airflow-2.4.3 (default)
composer-2.1.11-airflow-2.3.4
composer-1.20.11-airflow-1.10.15
composer-1.20.11-airflow-2.4.3
composer-1.20.11-airflow-2.3.4
March 18, 2023
Announcement
If your environment interacts with Google Ads, make sure to upgrade it to Cloud Composer version 2.1.10 and 1.20.10 (or later versions) before March 29, 2023 .
On this date, the Google Ads API v11 is sunset . The google-ads version 20.0.0 communicates with the supported Google Ads API v12.
Change
(Airflow 2.3.4 and 2.4.3 only) The Google Ads Python library ( google-ads ) package is updated to version 20.0.0 .
Change
(Composer 2 only) The instance_name field for Airflow Webservers in new environments is now by default set to the Composer Environment name.
Fixed
(Airflow 2) The Airflow metadata database size metric now reports more accurate values after the data is deleted from the database.
Change
(Airflow 2.3.4 and 2.4.3 only) The apache-airflow-providers-google package was upgraded to version 2023.3.14+composer . This version is based on the public version 8.9.0 with the following changes:
Use google-ads==20.0.0
The source code for the apache-airflow-providers-google package version 2023.3.14+composer is available on GitHub .
Feature
5 new Airflow metrics are now available in Cloud Monitoring. For more information, see Monitor environments with Cloud Monitoring .
Fixed
Cloud Composer 2 environments no longer create airflow.cfg and env_var.json files in the environment's bucket.
Change
Cloud Composer 1.20.1 and 2.1.11 are versions with an extended upgrade timeline.
Change
Cloud Composer 2.1.10 and 1.20.10 images are available:
composer-2.1.10-airflow-2.4.3 (default)
composer-2.1.10-airflow-2.3.4
composer-1.20.10-airflow-1.10.15
composer-1.20.10-airflow-2.4.3
composer-1.20.10-airflow-2.3.4
Deprecated
Airflow 2.2.5 is no longer included in Cloud Composer images.
Deprecated
Cloud Composer versions 2.0.7 and 1.18.3 have reached their end of full support period .
March 13, 2023
Fixed
Fixed the issue where BigQuery tasks in the deferrable mode failed when data lineage was enabled.
Fixed
PyPI package installation is now possible in network setups with maximum transmission unit (MTU) of 1280 bytes or more. This issue was affecting environments where Cloud Build cannot be used to install PyPI packages.
Deprecated
Cloud Composer versions 2.0.6 and 1.18.2 have reached their end of full support period .
Change
Cloud Composer 2.1.9 and 1.20.9 images are available:
composer-2.1.9-airflow-2.4.3 (default)
composer-2.1.9-airflow-2.3.4
composer-2.1.9-airflow-2.2.5
composer-1.20.9-airflow-1.10.15
composer-1.20.9-airflow-2.4.3
composer-1.20.9-airflow-2.3.4
composer-1.20.9-airflow-2.2.5
March 02, 2023
Change
Cloud Composer 2.1.8 and 1.20.8 images are available:
composer-2.1.8-airflow-2.4.3 (default)
composer-2.1.8-airflow-2.3.4
composer-2.1.8-airflow-2.2.5
composer-1.20.8-airflow-1.10.15
composer-1.20.8-airflow-2.4.3
composer-1.20.8-airflow-2.3.4
composer-1.20.8-airflow-2.2.5
February 24, 2023
Change
The default Composer version is changed to Cloud Composer 2.
The default Cloud Composer image used for operations is now the latest version of Cloud Composer 2, unless the image-version parameter is explicitly specified.
The composer-latest-airflow-* version aliases now point to Cloud Composer 2.
Feature
24 new Airflow metrics are now available in Cloud Monitoring. For more information, see Monitor environments with Cloud Monitoring .
Change
The apache-airflow-providers-google package is upgraded to the public version 8.9.0 in images with Airflow 2.4.3 and 2.3.4. For more information about changes, see the apache-airflow-providers-google page .
Change
Cloud Composer 2.1.7 and 1.20.7 images are available:
composer-2.1.7-airflow-2.4.3 (default)
composer-2.1.7-airflow-2.3.4
composer-2.1.7-airflow-2.2.5
composer-1.20.7-airflow-1.10.15
composer-1.20.7-airflow-2.4.3
composer-1.20.7-airflow-2.3.4
composer-1.20.7-airflow-2.2.5
Deprecated
Cloud Composer versions 2.0.4 , 2.0.5 , 1.18.0 , and 1.18.1 have reached their end of full support period .
February 14, 2023
Change
(Cloud Composer 2) The default version of Airflow is changed to 2.4.3.
Fixed
Fixed environment upgrade checks that were failing for environments in some Cloud Composer 2 versions.
Fixed
(Cloud Composer 2) Fixed the problem where the Composer Agent Kubernetes workload generated warnings about failed pods during the environment creation.
Change
Cloud Composer 2.1.6 and 1.20.6 images are available:
composer-2.1.6-airflow-2.4.3 (default)
composer-2.1.6-airflow-2.3.4
composer-2.1.6-airflow-2.2.5
composer-1.20.6-airflow-1.10.15 (default)
composer-1.20.6-airflow-2.4.3
composer-1.20.6-airflow-2.3.4
composer-1.20.6-airflow-2.2.5
Deprecated
Cloud Composer versions 2.0.3 and 1.17.10 have reached their end of full support period .
February 02, 2023
Fixed
(Available without upgrading) Private IP Cloud Composer 1 environments no longer report paused DAGs as active in Cloud Console.
Change
Cloud Composer 1.20.5 and 2.1.5 images are available:
composer-1.20.5-airflow-1.10.15 (default)
composer-1.20.5-airflow-2.2.5
composer-1.20.5-airflow-2.3.4
composer-1.20.5-airflow-2.4.3
composer-2.1.5-airflow-2.2.5
composer-2.1.5-airflow-2.3.4 (default)
composer-2.1.5-airflow-2.4.3
January 25, 2023
Feature
Airflow 2.4.3 is available in Cloud Composer images.
Change
Images with Airflow 2.4.3 use the public version 8.6.0 of the apache-airflow-providers-google package. For more information about changes, see the package's page in the Airflow documentation.
Fixed
(Airflow 2.3.4 only) Includes the fix for broken auto-refresh in Airflow UI #25950 .
Change
(Airflow 2.2.5 only) The apache-airflow-providers-google package in images with Airflow 2.2.5 was upgraded to 2022.12.20+composer . Changes compared to version 2022.10.17+composer :
Fix issue with the recursive error #25898 and #26175 .
Change log level to DEBUG for messages generated when a secret is not found in Secret Manager.
Improve memory usage in Dataproc deferrable operators.
Change
Cloud Composer 1.20.4 and 2.1.4 images are available:
composer-1.20.4-airflow-1.10.15 (default)
composer-1.20.4-airflow-2.2.5
composer-1.20.4-airflow-2.3.4
composer-1.20.4-airflow-2.4.3
composer-2.1.4-airflow-2.2.5
composer-2.1.4-airflow-2.3.4 (default)
composer-2.1.4-airflow-2.4.3
Deprecated
Cloud Composer versions 2.0.2 and 1.17.9 have reached their end of full support period .
January 10, 2023
Fixed
Fixed a problem where the number of active workers was reported as 0 after an environment's cluster update.
Deprecated
Cloud Composer versions 2.0.1 , 2.0.0 , and 1.17.8 have reached their end of full support period .
Change
Cloud Composer 1.20.3 and 2.1.3 images are available:
composer-1.20.3-airflow-1.10.15 (default)
composer-1.20.3-airflow-2.2.5
composer-1.20.3-airflow-2.3.4
composer-2.1.3-airflow-2.2.5
composer-2.1.3-airflow-2.3.4 (default)
December 20, 2022
Fixed
(Available without upgrading) Fixed an issue where upgrading a Private IP environment with VPC peerings to Cloud Composer 2.0.31 and later versions resulted in intermittent issues with database connections.
Change
Cloud Composer 1.20.2 and 2.1.2 are versions with an extended upgrade timeline.
December 15, 2022
Announcement
All Composer environment GKE clusters are set up with maintenance exclusions for the period between December 22, 2022 and January 2, 2023 . For more information, see Maintenance exclusions .
December 13, 2022
Feature
Data lineage is available in Preview in Cloud Composer 2.
Data lineage is a Dataplex feature that lets you track how data moves through
your systems: where it comes from, where it is passed to, and what
transformations are applied to it.
Fixed
Cloud SDK updated to version 411.0.0 in images provided by Cloud Composer. This version resolves issues encountered in version 410.0.0.
Fixed
Fixed an issue where a failed upgrade to the latest Cloud Composer version caused further upgrade attempts to fail.
Deprecated
Cloud Composer versions 1.17.6 , 1.17.7 , 2.0.0-preview.6 , and 2.0.0-preview.7 have reached their end of full support period .
Change
Cloud Composer 1.20.2 and 2.1.2 images are available:
composer-1.20.2-airflow-1.10.15 (default)
composer-1.20.2-airflow-2.2.5
composer-1.20.2-airflow-2.3.4
composer-2.1.2-airflow-2.2.5
composer-2.1.2-airflow-2.3.4 (default)
December 06, 2022
Feature
(Cloud Composer 2) Environment snapshots and Scheduled snapshots are now generally available (GA) for Cloud Composer 2 versions 2.1.1 and later.
Scheduled snapshots provide additional support for running disaster recovery scenarios.
Change
(Available without upgrading) Allowed custom secondary IP range for pods is now narrower. You can now create Composer environments using IP ranges with /23 masks.
Announcement
The following versions for Cloud Composer 1.20.1 and 2.1.1 are available:
composer-1.20.1-airflow-1.10.15 (default)
composer-1.20.1-airflow-2.2.5
composer-1.20.1-airflow-2.3.4
composer-2.1.1-airflow-2.2.5
composer-2.1.1-airflow-2.3.4 (default)
Deprecated
Cloud Composer versions 1.17.7 and 2.0.0-preview.7 have reached their end of full support period .
December 05, 2022
Feature
(Cloud Composer 2) The Composer Local Development CLI tool is now available to help streamline testing and developing using local Airflow environments with Composer 2.
December 04, 2022
Feature
(Cloud Composer 2) Cloud Composer 2 environments now include the composer-user-workloads namespace that you can use to run user-defined workloads.
Feature
(New environments only) Creating Cloud Composer 2 environments no longer depends on the constraints/compute.requireOsLogin organization policy setting.
Breaking
(Cloud Composer 2.1.0 with Airflow 2.3.4) Version 5.0.0 of the CNCF Kubernetes Provider package ( apache-airflow-providers-cncf-kubernetes ) introduces several backward incompatible changes. The most important changes are related to the kubernetes_default connection which is not used in version 5.0.0. These changes affect GKEStartPodOperator and KubernetesPodOperator operators. For more information, see Information about CNCF Kubernetes Provider .
Fixed
Fix to address occasional backfills deadlocks was backported to Airflow versions 2.2.5 and 2.3.4 ( #26161 ).
Fixed
(Available without upgrading) Fixed an issue where Cloud Storage bucket metadata would reset to defaults when an update labels operation was triggered for a Cloud Composer environment.
Change
(Cloud Composer 2) Starting with version 2.1.0 , Composer environments no longer use Deployment Manager .
Announcement
The following versions for Cloud Composer 1.20.0 and 2.1.0 are available:
composer-2.1.0-airflow-2.2.5
composer-2.1.0-airflow-2.3.4 (default)
composer-1.20.0-airflow-1.10.15 (default)
composer-1.20.0-airflow-2.2.5
composer-1.20.0-airflow-2.3.4
Change
(New environments only) Airflow 2.3.4 is now the default Airflow version for Composer 2 environments.
Deprecated
Cloud Composer versions 1.17.6 and 2.0.0-preview.6 have reached their end of full support period .
November 22, 2022
Issue
We are currently experiencing an issue with gcloud CLI version 410.0.0 . Some composer commands return non-zero error codes along with an additional gcloud crashed (TypeError): 'NoneType' object is not callable ) output message.
This issue doesn't impact the functionality provided by the commands when used in interactive mode. It may contribute to misleading error stack traces and cause failures when using the commands programmatically since it returns non-zero error codes.
If your operations could be affected by this issue, please refrain from upgrading to gcloud CLI version 410.0.0 .
If you already performed the upgrade, you can downgrade to a previous gcloud version. For more information see Cloud Composer known issues .
November 18, 2022
Feature
Airflow 2.3.4 is available in Cloud Composer images.
Fixed
Fixed an issue where the number of online Celery workers metric was sometimes incorrectly reported as 0.
Change
Images with Airflow 2.3.4 use the public version 8.4.0 of the apache-airflow-providers-google package . See the package page .
Fixed
(Available without upgrading) Fixed issues where creating environments with Private Service Connect would occasionally time out with a Rate limit exceeded error or fail due to a missing subnet name.
Change
(Cloud Composer 2 with Private Service Connect) SQL proxy now gets restarted faster when connection issues are detected.
Change
(Cloud Composer 2) You can now create Composer environments with labels that contain only digits.
Deprecated
Cloud Composer version 1.17.5 has reached its end of full support period .
Change
Cloud Composer 1.19.15 and 2.0.32 images are available:
composer-1.19.15-airflow-1.10.15 (default)
composer-1.19.15-airflow-2.1.4
composer-1.19.15-airflow-2.2.5
composer-1.19.15-airflow-2.3.4
composer-2.0.32-airflow-2.1.4
composer-2.0.32-airflow-2.2.5
composer-2.0.32-airflow-2.3.4
Deprecated
Airflow 2.3.3 is no longer included in Cloud Composer images.
November 14, 2022
Announcement
All Composer environment GKE clusters are set up with maintenance exclusions for the period between November 18, 2022 and November 30, 2022 . For more information, see Maintenance exclusions .
November 11, 2022
Feature
Airflow triggerer and Deferrable Operators are available in Preview in Cloud Composer 2.
Note: Minimum versions required by Airflow triggerer: Cloud Composer 2.0.31 and up, Apache Airflow 2.2.5 and up.
Deprecated
Cloud Composer versions 1.17.4 and 2.0.0-preview.5 have reached their end of full support period .
Change
Cloud Composer 1.19.14 and 2.0.31 images are available:
composer-1.19.14-airflow-1.10.15 (default)
composer-1.19.14-airflow-2.1.4
composer-1.19.14-airflow-2.2.5
composer-1.19.14-airflow-2.3.3
composer-2.0.31-airflow-2.1.4
composer-2.0.31-airflow-2.2.5
composer-2.0.31-airflow-2.3.3
October 31, 2022
Change
The apache-airflow-providers-google package in images with Airflow 2.1.4 and 2.2.5 was upgraded to 2022.10.17+composer . Changes compared to version 2022.9.6+composer :
Upgraded requirements for the google-cloud-container package from >=0.1.1,<2.0.0 to >=2.2.0,<3.0.0 .
Added changes for GKEHook and GKE unit tests from #22852 , without pulling changes for DataprocCreateClusterOperator .
Fixed
The google-api-core package was downgraded from 2.8.2 to 2.8.1 . This change fixes integration with Cloud Spanner.
Deprecated
Cloud Composer versions 1.17.3 and 2.0.0-preview.4 have reached their end of full support period .
Change
Cloud Composer 1.19.13 and 2.0.30 images are available:
composer-1.19.13-airflow-1.10.15 (default)
composer-1.19.13-airflow-2.1.4
composer-1.19.13-airflow-2.2.5
composer-1.19.13-airflow-2.3.3
composer-2.0.30-airflow-2.1.4
composer-2.0.30-airflow-2.2.5
composer-2.0.30-airflow-2.3.3
October 18, 2022
Fixed
(Available without upgrading) Fixed the issue with the CrashLoopBackOff task status in Airflow 2.3. The default worker_concurrency in Airflow 2.3.3 and later versions is now calculated using both worker CPU and worker memory values. See Change worker concurrency .
Change
Starting from Cloud Composer version 2.0.29, new private IP environments by default use Private Service Connect (instead of VPC peerings).
Change
You can set HTTP_PROXY and HTTPS_PROXY environment variables in your environment. These standard Linux variables are used to route traffic through the specified proxies. The NO_PROXY variable by default is set to a list of Google domains so that they are excluded from proxying.
Fixed
(Cloud Composer 2) Cloud Composer now generates appropriate error messages if your environment components cannot access required Google domains.
Change
The result of the airflow_monitoring DAG is no longer automatically sent to XCom. This change improves monitoring performance.
Deprecated
Cloud Composer versions 1.17.2 and 2.0.0-preview.3 have reached their end of full support period .
Change
Cloud Composer 1.19.12 and 2.0.29 images are available:
composer-1.19.12-airflow-1.10.15 (default)
composer-1.19.12-airflow-2.1.4
composer-1.19.12-airflow-2.2.5
composer-1.19.12-airflow-2.3.3
composer-2.0.29-airflow-2.1.4
composer-2.0.29-airflow-2.2.5
composer-2.0.29-airflow-2.3.3
October 06, 2022
Announcement
Starting from January 2023, the default version for new Cloud Composer environments changes from Cloud Composer 1 to Cloud Composer 2. New environments will use the latest Cloud Composer 2 version with the default Airflow 2 version ( composer-2-airflow-2 ). Currently, the default version is composer-1-airflow-1.10.15 .
Announcement
This issue was addressed in a later release. The worker concurrency formula was changed in Airflow 2.3.3 and later versions.
Airflow worker memory requirements in Airflow 2.3 are 30% higher compared to workers in Airflow 2.2 or Airflow 2.1, which causes problems with automatically calculated Airflow worker concurrency.
If you use custom settings for Airflow worker CPU and memory, then Airflow workers in your environment might enter the CrashLoopBackOff status and stop executing tasks. We work on providing an adjustment in Cloud Composer service for this issue and will announce when it is available.
Please see the related known issue for possible solutions: Workers in Airflow 2.3 require more memory than in previous Airflow versions .
September 29, 2022
Feature
Airflow 2.3.3 is available in Cloud Composer images.
Change
Images with Airflow 2.3.3 use the public version 8.1.0 of the apache-airflow-providers-google package. Other Cloud Composer images still use a custom version of this package, which is based on the public version 6.8.0 .
When upgrading to Airflow 2.3, make sure that your environment is not affected by breaking changes introduced in the version 7.0.0 of this package.
Version 8.1.0 does not include some connectors, such as Dataform . Support for Dataform connectors will be available starting from version 8.3.0 , which will be released together with Cloud Composer images with Airflow 2.3.4.
Change
Cloud Composer 1.19.11 and 2.0.28 images are available:
composer-1.19.11-airflow-1.10.15 (default)
composer-1.19.11-airflow-2.1.4
composer-1.19.11-airflow-2.2.5
composer-1.19.11-airflow-2.3.3
composer-2.0.28-airflow-2.1.4
composer-2.0.28-airflow-2.2.5
composer-2.0.28-airflow-2.3.3
Deprecated
Cloud Composer versions 1.17.1 and 2.0.0-preview.2 have reached their end of full support period .
September 21, 2022
Feature
The Monitoring Dashboard of an environment now displays periods of maintenance operations and other environment operations such as creating snapshots and updating environment configuration.
Fixed
Improved file synchronization performance in Airflow workloads. This change fixes OOM issues observed in some environments.
Fixed
(Available without upgrading) Fixed a problem that caused package 'namespecifier' could not be found errors when installing PyPI packages in private IP environments.
Change
The apache-airflow-providers-google package was upgraded to 2022.9.6+composer . Changes compared to version 2022.8.26+composer :
Fix the Triggerer's async thread was blocked error in the deferrable mode for Composer Operators. ( #25951 )
Fix a delay in Dataproc CreateBatch operator ( #26126 )
Show better log for Datafusion operators when the response is empty ( #26202 )
Deprecated
Cloud Composer versions 1.17.0 , and 2.0.0-preview.1 have reached their end of full support period .
Change
Cloud Composer 1.19.10 and 2.0.27 images are available:
composer-1.19.10-airflow-1.10.15 (default)
composer-1.19.10-airflow-2.1.4
composer-1.19.10-airflow-2.2.5
composer-2.0.27-airflow-2.1.4
composer-2.0.27-airflow-2.2.5
September 12, 2022
Feature
(New environments only) Encryption with customer-managed encryption keys (CMEK) now applies to the persistent disk of the environment's Redis queue.
Change
(Available without upgrading) Cloud Composer now makes several attempts to create an environment when the Cloud Composer connection subnetwork is locked by another operation. This change improves the reliability when creating environments with Public Service Connect.
Fixed
(Available without upgrading) Fixed a problem where the termination grace period for Airflow worker Pods in Cloud Composer 2 was set to 30 seconds (from 3600 seconds) after updating an environment. If your environment is impacted, this fix will apply automatically on the next update (or upgrade) operation. To apply the fix immediately, you can override and then delete a non-existing environment variable in your environment.
Fixed
Adjusted CPU limits for the FluentD environment component (responsible for uploading task logs to Cloud Logging), to avoid potential problems that might result in missing logs in Cloud Logging.
Change
(Available without upgrading) When an environment is deleted, Cloud Composer automatically deletes the persistent disk of the environment's Redis queue.
Fixed
Fixed a potential race condition in Airflow workers that could cause new tasks to be executed on a worker that is scheduled to be scaled down. This fix prevents Airflow tasks from being stuck in the running state.
Fixed
Set the logging level of Airflow's DeprecationWarning messages to Warning.
Change
The apache-airflow-providers-google package was upgraded to 2022.8.26+composer . Changes compared to version 2022.8.23+composer :
Added deferrable option to Dataproc operators to run the task asynchronously. ( #25302 )
Cloud Composer team plans to add support for Deferrable operators in October, 2022.
Deprecated
Cloud Composer versions 1.17.0.preview.12 , and 2.0.0-preview.0 have reached their end of full support period .
Change
Cloud Composer 1.19.9 and 2.0.26 images are available:
composer-1.19.9-airflow-1.10.15 (default)
composer-1.19.9-airflow-2.1.4
composer-1.19.9-airflow-2.2.5
composer-2.0.26-airflow-2.1.4
composer-2.0.26-airflow-2.2.5
August 29, 2022
Change
The apache-airflow-providers-google package was upgraded to 2022.8.23+composer . Changes compared to version 2022.8.16+composer :
Added missing google-cloud-dataform package.
Cloud Composer uses a custom version of the apache-airflow-providers-google package. This custom version is based on the public version 6.8.0 . For information about other changes compared to version 6.8.0 , see release notes for the previous versions of this package.
Change
(Available without upgrading) It is no longer possible to set environment variables with names http_proxy and https_proxy .
Fixed
Cloud Composer now generates an error message if an environment label matches internal environment labels used by Cloud Composer.
Fixed
(Cloud Composer 1) Fixed a transient issue that caused environment creation operations to fail with the Couldn't bring up ['composer-fluentd-daemon', 'airflow-worker'] in time message.
Deprecated
Cloud Composer versions 1.16.15 and 1.17.0.preview.11 have reached their end of full support period .
Change
Cloud Composer 1.19.8 and 2.0.25 images are available:
composer-1.19.8-airflow-1.10.15 (default)
composer-1.19.8-airflow-2.1.4
composer-1.19.8-airflow-2.2.5
composer-2.0.25-airflow-2.1.4
composer-2.0.25-airflow-2.2.5
August 18, 2022
Change
The apache-airflow-providers-google package was upgraded to 2022.8.16+composer . Changes compared to version 2022.6.22+composer :
Fix Vertex AI Custom Job training issue ( #25367 )
New Operators for the Google Cloud Dataform service ( #25587 )
Cloud Composer uses a custom version of the apache-airflow-providers-google package. This custom version is based on the public version 6.8.0 . For information about other changes compared to version 6.8.0 , see release notes for the previous versions of this package.
Change
The following packages are now preinstalled in Cloud Composer images with Airflow 2.2.5: google-cloud-firestore , firebase-admin , gcfs , dbt-core , apache-airflow-providers-dbt-cloud .
Change
Cloud Composer 1.19.7 and 2.0.24 images are available:
composer-1.19.7-airflow-1.10.15 (default)
composer-1.19.7-airflow-2.1.4
composer-1.19.7-airflow-2.2.5
composer-2.0.24-airflow-2.1.4
composer-2.0.24-airflow-2.2.5
Deprecated
Cloud Composer versions 1.16.14 and 1.17.0.preview.10 have reached their end of full support period .
August 10, 2022
Fixed
Improved DAG UI reliability in Private IP environments.
Fixed
(Cloud Composer 2) When creating environments with Private Service Connect, Cloud Composer no longer checks for networking range conflicts that are not relevant for this type of connectivity.
Deprecated
Starting with Cloud Composer 1.19.6, it is no longer possible to use any operators that call Python 2. In particular, PythonVirtualenvOperator can no longer create virtual environments with Python 2.
Change
Logs that are generated when processing individual DAG files are no longer written to the Airflow scheduler's disk. This change improves the scheduler's disk usage.
Deprecated
Cloud Composer versions 1.16.12 , 1.16.13 , 1.17.0.preview.8 , and 1.17.0.preview.9 have reached their end of full support period .
Change
Cloud Composer 1.19.6 and 2.0.23 images are available:
composer-1.19.6-airflow-1.10.15 (default)
composer-1.19.6-airflow-2.1.4
composer-1.19.6-airflow-2.2.5
composer-2.0.23-airflow-2.1.4
composer-2.0.23-airflow-2.2.5
July 28, 2022
Fixed
(Available without upgrading) Fixed a problem where DAG import errors were not displayed on the Environment details page, if the error messages did not have a creation time set.
Change
Cloud Composer 1.19.5 and 2.0.22 images are available:
composer-1.19.5-airflow-1.10.15 (default)
composer-1.19.5-airflow-2.1.4
composer-1.19.5-airflow-2.2.5
composer-2.0.22-airflow-2.1.4
composer-2.0.22-airflow-2.2.5
Deprecated
Cloud Composer versions 1.16.11 and 1.17.0.preview.7 have reached their end of full support period .
July 18, 2022
Fixed
(Cloud Composer 2) Fixed a problem where an environment creation in the PSC configuration might fail with the "Composer backend timed out" message.
Change
Cloud Composer 1.19.4 and 2.0.21 images are available:
composer-1.19.4-airflow-1.10.15 (default)
composer-1.19.4-airflow-2.1.4
composer-1.19.4-airflow-2.2.5
composer-2.0.21-airflow-2.1.4
composer-2.0.21-airflow-2.2.5
Deprecated
Cloud Composer versions 1.16.10 and 1.17.0.preview.6 have reached their end of full support period .
July 11, 2022
Fixed
Set memory and CPU limits for the Composer Agent pod. This change increases this pod's priority and improves the reliability of operations that could fail because of resource starvation.
Fixed
Environments no longer produce error log messages about the connection timeout when initializing the Airflow database during the environment creation. These messages were not associated with any error.
Change
Source code for the apache-airflow-providers-google package versions
2022.6.22+composer and 2022.5.18+composer is available on GitHub:
2022.6.22+composer
2022.5.18+composer
Fixed
(Cloud Composer 2) Improved the reliability of web server proxy connectivity. This change reduces the chance of 504 timeout errors when connecting to an environment's web server.
Feature
DAG UI is now generally available (GA).
Deprecated
Cloud Composer versions 1.16.8 , 1.16.9 , 1.17.0.preview.4 , and 1.17.0.preview.5 have reached their end of full support period .
Change
Cloud Composer 1.19.2 and 2.0.19 are versions with an extended upgrade timeline.
Change
Cloud Composer 1.19.3 and 2.0.20 images are available:
composer-1.19.3-airflow-1.10.15 (default)
composer-1.19.3-airflow-2.1.4
composer-1.19.3-airflow-2.2.5
composer-2.0.20-airflow-2.1.4
composer-2.0.20-airflow-2.2.5
June 29, 2022
Feature
The Per-folder Roles Registration feature is rolled out to all regions.
Change
Cloud Composer 1.19.2 and 2.0.19 images are available:
composer-1.19.2-airflow-1.10.15 (default)
composer-1.19.2-airflow-2.1.4
composer-1.19.2-airflow-2.2.5
composer-2.0.19-airflow-2.1.4
composer-2.0.19-airflow-2.2.5
June 27, 2022
Feature
Cloud Composer supports Per-folder Roles Registration .
June 23, 2022
Announcement
The earlier issue with DAG and task failures in Public IP environments in Cloud Composer 1 is now resolved for all impacted environments.
Fixed
(Cloud Composer 2) Incremental task logs are now correctly refreshed and displayed in Airflow UI.
Change
The apache-airflow-providers-google package upgraded to 2022.6.22+composer . Changes compared to version 2022.5.18+composer :
Fixed a regression in BigQueryToGCPOpertor after changes to links were introduced in #24416 .
Fixed errors related to the usage of the service_account attribute by BeamRunJavaPipelineOperator .
Cloud Composer uses a custom version of the apache-airflow-providers-google package. This custom version is based on the public version 6.8.0 . For information about other changes compared to version 6.8.0 , see release notes for the previous versions of this package.
Change
Cloud Composer 1.19.1 and 2.0.18 images are available:
composer-1.19.1-airflow-1.10.15 (default)
composer-1.19.1-airflow-2.1.4
composer-1.19.1-airflow-2.2.5
composer-2.0.18-airflow-2.1.4
composer-2.0.18-airflow-2.2.5
Change
Cloud Composer 1.18.12 is a version with an extended upgrade timeline.
Deprecated
Cloud Composer versions 1.16.7 and 1.17.0.preview.3 have reached their end of full support period .
June 20, 2022
Announcement
In July 2022, Cloud Composer 2 environments created in Cloud console will use Private Service Connect configuration by default.
Announcement
In July 2022, Cloud Composer 1 environments created in Cloud console will use the latest available version of Airflow 2 by default.
June 15, 2022
Announcement
Starting from July 2022, Cloud Composer service will start enforcing the "Act As" organization policy in all projects. It's a follow-up from the announcements sent out earlier. Please, grant the iam.serviceAccounts.actAs permission to users and service accounts that create, update, and delete Cloud Composer environments. For more information, see Securing Cloud Composer .
Breaking
(Airflow 1) New versions of Cloud Composer no longer support Python 2:
Starting from version 1.19.0, it is not possible to create new environments with Python 2, or upgrade existing environments with Python 2 to 1.19.0 and later versions of Cloud Composer.
Existing environments with Python 2 are not impacted by this change. It is possible to upgrade such environments to Cloud Composer version 1.18.12 and earlier through gcloud CLI, API, and Terraform.
Fixed
(Cloud Composer 1) Fixed the problem that caused increased DAG and task failures in Public IP environments because of Airflow database connectivity issues. This change improves the reliability of connections to the Airflow Database in Public IP environments.
You can upgrade your Composer 1 environments where you experience this issue to Cloud Composer 1.19.0 version to fix the problem immediately.
The fix will be applied to all existing Cloud Composer 1 Public IP environments within the next couple of days. We will announce when the issue is resolved. If you have any questions or concerns, please contact Cloud Customer Care .
Fixed
(Airflow 2) Enabled User Stats Chart view in Airflow UI for users with the Admin role.
Announcement
The earlier issue with autoscaling in some Cloud Composer 2 environments is now resolved for all impacted environments.
Fixed
(Airflow 2) Fix processor cleanup on DagFileProcessorManager #22685
Fixed
Logs in Cloud Logging now have Airflow DAG and task annotations for multilined output.
Change
Cloud Composer 1.19.0 and 2.0.17 images are available:
composer-1.19.0-airflow-1.10.15 (default)
composer-1.19.0-airflow-2.1.4
composer-1.19.0-airflow-2.2.5
composer-2.0.17-airflow-2.1.4
composer-2.0.17-airflow-2.2.5
Deprecated
Cloud Composer versions 1.16.6 and 1.17.0.preview.2 have reached their end of full support period .
June 14, 2022
Feature
Authorized networks support is now generally available (GA).
June 07, 2022
Fixed
This version fixes a problem with autoscaling not working properly in Cloud Composer 2 environments when GKE version 1.22 is used for the environment's cluster:
The issue could impact your Cloud Composer 2 environment if you created it between June 2, 2022 and June 7, 2022.
If you were impacted by this issue, you can recreate such an environment. As another option, Google will apply a fix to all impacted environments in a few days.
We will announce when the issue is resolved. If you have any questions or concerns, please contact Cloud Customer Care .
Change
(Airflow 1.10.15) Upgraded apache-beam and google provider packages to version 2022.6.1:
Support impersonation_chain parameter for Dataflow runner in Apache Beam operators
Added missing project_id parameter for wait_for_job method in the Dataflow operators
Added key_secret_project_id parameter which specifies a project with KeyFile
Change
Cloud Composer 1.18.12 and 2.0.16 images are available:
composer-1.18.12-airflow-1.10.15 (default)
composer-1.18.12-airflow-2.1.4
composer-1.18.12-airflow-2.2.5
composer-2.0.16-airflow-2.1.4
composer-2.0.16-airflow-2.2.5
June 01, 2022
Feature
Web server restarting is available in Preview in Cloud Composer 2.
Feature
IP Masquerade agent support is now generally available (GA) in Cloud Composer 1 and Cloud Composer 2.
Fixed
(Cloud Composer 2) Environment's size can now be updated for environments with Private Service Connect.
Fixed
Fixed a problem where an upgrade operation could fail when deleting the previous Cloud Composer namespace.
Fixed
(Cloud Composer 2) The amount of memory available to Redis queue now scales with the environment's size.
Deprecated
Airflow 2.2.3 is no longer included in Cloud Composer images.
Change
Cloud Composer 1.18.11 and 2.0.15 images are available:
composer-1.18.11-airflow-1.10.15 (default)
composer-1.18.11-airflow-2.1.4
composer-1.18.11-airflow-2.2.5
composer-2.0.15-airflow-2.1.4
composer-2.0.15-airflow-2.2.5
May 26, 2022
Deprecated
(Airflow 2) If your DAGs use the google-ads package version 14.0.0 or earlier, please upgrade your environment to Cloud Composer version 2.0.14 so that your environment uses Google Ads API v10 . Google Ads API v8 and v9 are deprecated and will not be available in the near future.
Feature
Added new database metrics : a metric that shows the total limit of database connections, and a metric for the number of active database connections.
Change
Cloud Composer uses a custom version of the apache-airflow-providers-google package, 2022.5.18+composer . This custom version is based on the public version 6.8.0 .
Changes compared to version 6.8.0 :
Breaking changes:
Upgrade to support Google Ads v10 ( #22965 )
Features:
[FEATURE] google provider - BigQueryInsertJobOperator log query ( #23648 )
[FEATURE] google provider - split GkeStartPodOperator execute ( #23518 )
Add exportContext.offload flag to CLOUD_SQL_EXPORT_VALIDATION. ( #23614 )
Create links for BiqTable operators ( #23164 )
implements #22859 - Add .sql as templatable extension ( #22920 )
GCSFileTransformOperator : New templated fields 'source_object', 'destination_object' ( #23328 )
Bug Fixes
Fix PostgresToGCSOperator does not allow nested JSON ( #23063 )
Fix GCSToGCSOperator ignores replace parameter when there is no wildcard ( #23340 )
update processor to fix broken download URLs ( #23299 )
LookerStartPdtBuildOperator , LookerCheckPdtBuildSensor : fix empty materialization id handling ( #23025 )
Change ComputeSSH to throw provider import error instead paramiko ( #23035 )
Fix cancel_on_kill after execution timeout for DataprocSubmitJobOperator ( #22955 )
Fix select * query xcom push for BigQueryGetDataOperator ( #22936 )
MSSQLToGCSOperator fails: datetime is not JSON Serializable ( #22882 )
Update credentials when using ADC in Compute Engine #23773
Misc changes
Add Stackdriver assets and migrate system tests to AIP-47 ( #23320 )
CloudTasks assets & system tests migration (AIP-47) ( #23282 )
TextToSpeech assets & system tests migration (AIP-47) ( #23247 )
Fix code-snippets in google provider ( #23438 )
BigQuery assets ( #23165 )
Remove redundant docstring in BigQueryUpdateTableSchemaOperator ( #23349 )
Migrate gcs to new system tests design ( #22778 )
add missing docstring in 'BigQueryHook.create_empty_table' ( #23270 )
Cleanup Google provider CHANGELOG.rst ( #23390 )
migrate system test gcs_to_bigquery into new design ( #22753 )
Add example DAG for demonstrating usage of GCS sensors ( #22808 )
Change
(Airflow 1) The google-cloud-bigquery package is upgraded from 1.28.0 to 2.13.0.
Fixed
(Cloud Composer 2) Fixed a problem where the Airflow web server becomes unavailable after all PyPI packages are uninstalled from an environment.
Fixed
(Cloud Composer 2) Several false error log messages are no longer generated after an environment is created.
Fixed
Fixed a problem where Cloud Composer always reported an error when checking for connectivity to the PyPI repository during PyPI package installation in Private IP environments.
Change
Cloud Composer 1.18.10 and 2.0.14 images are available:
composer-1.18.10-airflow-1.10.15 (default)
composer-1.18.10-airflow-2.1.4
composer-1.18.10-airflow-2.2.3
composer-1.18.10-airflow-2.2.5
composer-2.0.14-airflow-2.1.4
composer-2.0.14-airflow-2.2.3
composer-2.0.14-airflow-2.2.5
Deprecated
Cloud Composer versions 1.16.5 and 1.17.0.preview.1 have reached their end of full support period .
May 25, 2022
Feature
Private Service Connect support in Cloud Composer 2 is now generally available (GA).
Feature
Privately used public IP addresses are now generally available (GA).
May 19, 2022
Feature
Airflow 2.2.5 is available in Cloud Composer images.
Feature
New Airflow metrics for pools, smart sensor, and SLA email notifications are available for Cloud Composer environments.
Feature
(Cloud Composer 2) Increased the memory limit for the Redis queue and made it scale with the environment's size.
Feature
(Cloud Composer 2) You can now assign permissions for an environment's service account on the service account level instead of the project level. To use this feature, create environments using gcloud , API, or Terraform. Cloud Console support for this feature will be released at a later date.
Deprecated
(Airflow 1) If your DAGs use the google-ads package version 14.0.0 or earlier, please upgrade your environment to Cloud Composer version 1.18.9 so that your environment uses Google Ads API v10 . Google Ads API v8 and v9 are deprecated and will not be available in the near future. This change is available only for Airflow 1. We will provide a similar change for Airflow 2 in a future release.
Change
If it is not possible to create an environment because of CMEK-related organization policies constraints/gcp.restrictCmekCryptoKeyProjects and constraints/gcp.restrictNonCmekServices , then such attempts fail with an error immediately.
Change
If it is not possible to create an environment because of constraints/compute.vmCanIpForward and compute.vmExternalIpAccess organization policies, then such attempts fail with an error immediately.
Change
It is now possible to use upper-case symbols in the versions of PyPI packages.
Change
Cloud Composer 1.18.9 and 2.0.13 images are available:
composer-1.18.9-airflow-1.10.15 (default)
composer-1.18.9-airflow-2.1.4
composer-1.18.9-airflow-2.2.3
composer-1.18.9-airflow-2.2.5
composer-2.0.13-airflow-2.1.4
composer-2.0.13-airflow-2.2.3
composer-2.0.13-airflow-2.2.5
May 13, 2022
Announcement
Cloud Composer 1.18.8 and 2.0.12 release started on May 13, 2022 . Get ready for upcoming changes and features as we roll out the new release to all regions. This release is in progress at the moment. Listed changes and features might not be available in some regions yet.
Feature
Cloud Composer performs several retries when checking pip connectivity.
Fixed
(Airflow 2.2.3) Web server log messages in Airflow UI now have a correct time zone.
Change
(Airflow 2) The default value for the [webserver]worker_refresh_interval Airflow configuration option is changed to 600 seconds.
Change
(Available without upgrading) The domain prefix for Private Service Connect subnetwork ( connection_subnetwork ) is now omitted in environment details.
Feature
(Cloud Composer 2) Workers and schedulers generate a warning log message when storage usage is close to the limit.
Change
(Cloud Composer 1) Increased the memory limit for GCSfuse on machine types that have more than 4 GB of memory. This change improves the stability of the syncing process between the environment's bucket and worker pods.
Fixed
Fixed a problem where DAG import errors were not displayed in Cloud Console for Private IP environments in certain versions of Cloud Composer.
Fixed
(Airflow 1.10.15) Fixed the variables set command. Now it correctly sets values for specified variables.
Deprecated
Cloud Composer versions 1.16.3 , 1.16.4 , and 1.17.0.preview.0 have reached their end of full support period .
Change
Cloud Composer 1.18.8 and 2.0.12 images are available:
composer-1.18.8-airflow-1.10.15 (default)
composer-1.18.8-airflow-2.1.4
composer-1.18.8-airflow-2.2.3
composer-2.0.12-airflow-2.1.4
composer-2.0.12-airflow-2.2.3
May 10, 2022
Deprecated
The following deprecated operators are no longer actively maintained and will be removed in one of the future versions of operators for Airflow 2. Make sure to switch to alternative operators .
Deprecated operators: BigQueryExecuteQueryOperator, BigQueryPatchDatasetOperator, DataflowCreateJavaJobOperator, DataflowCreatePythonJobOperator, DataprocScaleClusterOperator, DataprocSubmitPigJobOperator, DataprocSubmitSparkSqlJobOperator, DataprocSubmitSparkJobOperator, DataprocSubmitHadoopJobOperator, DataprocSubmitPySparkJobOperator, MLEngineManageModelOperator, MLEngineManageVersionOperator, GCSObjectsWtihPrefixExistenceSensor.
Announcement
Cloud Composer Service Level Agreement is available.
April 29, 2022
Announcement
Join us for the Airflow in the Cloud: Lessons from the Field talk during Airflow Summit 2022 .
April 22, 2022
Feature
Airflow schedulers and workers generate error log messages if pods for these components are evicted.
Feature
Cloud Composer automatically recreates and unpauses the Airflow monitoring DAG if it was deleted or paused.
Feature
(Cloud Composer 2) Network tags are now applied to nodes in an environment's cluster.
Fixed
Fixed a problem where an environment was not deleted properly and remained in an error state in some cases.
Change
(Cloud Composer 2) When a new environment is created, Cloud Composer checks if the project's network setup allows connections to the Airflow web server domain, *.composer.cloud.google.com . An error is generated if it's not possible to connect to this domain.
Fixed
(Cloud Composer 2) Cloud Composer Service Agent account cannot be used as a service account for an environment.
Fixed
(Available without upgrading) Fixed a problem that caused Cloud Composer 1 environments with IP Masquerade Agent to break after an upgrade.
Change
Cloud Composer 1.18.7 and 2.0.11 images are available:
composer-1.18.7-airflow-1.10.15 (default)
composer-1.18.7-airflow-2.1.4
composer-1.18.7-airflow-2.2.3
composer-2.0.11-airflow-2.1.4
composer-2.0.11-airflow-2.2.3
Deprecated
Cloud Composer versions 1.16.1 , and 1.16.2 have reached their end of full support period .
April 13, 2022
Fixed
(Airflow 2) Exception traces from Airflow task executions are now properly annotated with labels in Cloud Logging.
Fixed
It is now possible to use upper case symbols in the names of PyPI packages.
Change
(Cloud Composer 2) Airflow webserver and worker-scheduler images in multiregional repositories are now tagged with their image version (for example, composer-2.0.10-airflow-2.1.4 ). This change is gradually backfilled to previous images as well.
Feature
Cloud Composer now supports CMEK encryption using keys stored in External Key Managers .
Fixed
(Available without upgrading) DAG schedule intervals are now correctly displayed in the list of DAGs in Cloud Console. Before the change, this value was not displayed in some environments.
Fixed
(Cloud Composer 2) Fixed a problem where some info log messages were logged as errors during environment operations.
Fixed
(Airflow 1.10.15) Fixes in the apache-airflow-backport-providers-google package: DataprocCreateBatchOperator , Dataplex operators , YAML safe load .
Change
(Airflow 1.10.15) Airflow Upgrade Checker updated to version 1.4.0.
Fixed
(Airflow 1.10.15) Backported the fix for KubernetesPodOperator . KubernetesPodOperator now retries log tailing in in long-living tasks.
Deprecated
Cloud Composer 1.16.0 has reached its end of full support period .
Change
Cloud Composer 1.18.6 and 2.0.10 images are available:
composer-1.18.6-airflow-1.10.15 (default)
composer-1.18.6-airflow-2.1.4
composer-1.18.6-airflow-2.2.3
composer-2.0.10-airflow-2.1.4
composer-2.0.10-airflow-2.2.3
April 04, 2022
Feature
Snapshots are available in Preview.
Feature
(Airflow 2) The max_connections limit in databases is increased. The values are 3 times higher than the default values in Cloud SQL .
Change
When syncing objects in an environment bucket to Airflow components, Cloud Composer now reports problems with file names. Such objects no longer cause the syncing process to fail. Objects in the environment's bucket named ".", having names ending in "/", and directories and objects having the same name are reported.
Change
Airflow 2.2.3 packages are updated: added keyrings.google-artifactregistry-auth , updated apache-airflow-providers-google to version 6.6.0 .
Fixed
Improved the error message generated when Cloud Composer Service Agent does not have enough permissions to create an environment.
Fixed
Fixed the severity level for Airflow Worker Set Controller logs
Fixed
When an environment is created, Cloud Composer validates if a policy that prohibits PSC connections is set on the project.
Fixed
(Airflow 2) Fixed the logging level of some messages generated by Airflow workers. These messages now have the correct INFO logging level.
Fixed
Improved the error message generated when a PyPI package installation times out.
Fixed
(Cloud Composer 2) Fixed an issue which caused failures when creating environments with Private Service Connect in a Shared VPC configuration.
Fixed
Improved the handling of insufficient quota errors during the environment creation. If such an error is generated, the operation fails immediately.
Fixed
Improved the validation when installing PyPI packages. Fixed a problem where DNS resolution errors in the cluster caused PyPI package installation failures.
Fixed
Improved the handling of deployment errors generated when creating or updating an environment. If such an error is generated, the environment operation fails immediately.
Fixed
(Cloud Composer 1) The Airflow web server is restarted when values of [core]log_filename_template and [core]logging_level Airflow configuration options change.
Deprecated
Cloud Composer 1.15.2 has reached its end of full support period .
Change
Cloud Composer 1.18.5 and 2.0.9 images are available:
composer-2.0.9-airflow-2.2.3
composer-2.0.9-airflow-2.1.4
composer-1.18.5-airflow-2.2.3
composer-1.18.5-airflow-2.1.4
composer-1.18.5-airflow-1.10.15 (default)
March 28, 2022
Feature
New version aliases for Cloud Composer images. Now you can specify the latest version of Airflow 2 with composer-2-airflow-2 and composer-1-airflow-2 aliases. The new composer-1-airflow-1 alias points to the latest version of Airflow 1.
Feature
If the /dags , /data , /logs , or /plugins folder is deleted in an environment's bucket, Cloud Composer re-creates this folder.
Feature
(Cloud Composer 2) Increased the safe interval for tasks executed during maintenance windows. Tasks that take less than 55 minutes to execute are not impacted by maintenance operations.
Change
(New Cloud Composer 1 environments) The minimum disk size for environment nodes is changed from 20 GB to 30 GB.
Change
Improved the validation of custom IP ranges that are specified when an environment is created. The validation is more extensive and redundant error messages were removed.
Fixed
(Cloud Composer 1) Fixed problems with upgrading to Cloud Composer 1.18.* from earlier versions of Cloud Composer.
Change
The description of Composer Compute CPU SKUs was changed from "CPU" to "mCPU", to simplify the invoice interpretation. There are no changes in the actual Cloud Composer pricing model.
Fixed
(Cloud Composer 2) Fixed a problem when an unhealthy web server is not restarted.
Fixed
Fixed a problem with "Environment health" and "Worker Pod eviction" metrics occasionally not reporting new time-series points.
Fixed
(Cloud Composer 1) In-cluster builds for PyPI package installations no longer fail when the constraints/compute.requireShieldedVm policy is turned on.
Deprecated
Cloud Composer 1.15.1 has reached its end of full support period .
Change
Cloud Composer 1.18.4 and 2.0.8 images are available:
composer-2.0.8-airflow-2.2.3
composer-2.0.8-airflow-2.1.4
composer-1.18.4-airflow-2.2.3
composer-1.18.4-airflow-2.1.4
composer-1.18.4-airflow-1.10.15 (default)
March 17, 2022
Change
Environment labels are now propagated to the environment's bucket.
Feature
The apache-airflow-providers-google package has operators for Cloud Composer , starting from version 6.4.0.
Feature
The Logs tab in Cloud Console is now generally available (GA).
Announcement
Starting from June 1, 2022 , new versions of Cloud Composer will no longer support Python 2 .
Fixed
(Cloud Composer 1) It is no longer possible to select the e2-micro machine type.
Fixed
Improved the syncing of DAGs and plugins to Airflow components. Objects named "." are ignored when syncing.
Change
Cloud Composer 1.18.3 and 2.0.7 images are available:
composer-2.0.7-airflow-2.2.3
composer-2.0.7-airflow-2.1.4
composer-1.18.3-airflow-2.2.3
composer-1.18.3-airflow-2.1.4
composer-1.18.3-airflow-1.10.15 (default)
Deprecated
Cloud Composer 1.15.0 has reached its end of full support period .
March 08, 2022
Feature
(Available without upgrading) New version aliases for Cloud Composer images. Now you can specify the latest version of Cloud Composer 2 with composer-2-airflow-x.y aliases. New composer-1-airflow-x.y aliases point to the latest version of Cloud Composer 1.
Feature
(Airflow 2) Added a new try-number label to Airflow task log entries.
Change
(Airflow 1) The apache-airflow-backport-providers-google package is updated to version 2022.2.22 .
Fixed
(Cloud Composer 1) Fixed a problem with web server metrics not being reported or being reported partially.
Fixed
(Available without upgrading) DAG UI now correctly handles invalid serialized DAG data.
Change
Improved the handling of errors generated during update and upgrade operations because of an invalid pip.conf configuration file.
Change
Cloud Composer 1.18.2 and 2.0.6 images are available:
composer-2.0.6-airflow-2.2.3
composer-2.0.6-airflow-2.1.4
composer-1.18.2-airflow-2.2.3
composer-1.18.2-airflow-2.1.4
composer-1.18.2-airflow-1.10.15 (default)
Deprecated
Cloud Composer 1.14.5 has reached its end of full support period .
March 01, 2022
Feature
Cloud Composer 2 supports Customer Managed Encryption Keys (CMEK) .
Feature
Java Client for Cloud Composer version 1.1.3 is released. You can use this library to interact with Cloud Composer API from Java.
February 28, 2022
Change
(Airflow 1) The apache-airflow-backport-providers-google package is updated to version 2022.2.11 .
Change
(Airflow 2) The google-cloud-datastore package was added to the list of preinstalled packages.
Change
(New environments only) Temporary Pub/Sub topics created during environment operations are now labeled.
Fixed
(Airflow 2) Fix the problem with task logs not being exported to Cloud Logging.
Fixed
(Cloud Composer 2) Fixed the problem with an environment having 0 workers after an unsuccessful upgrade operation is rolled back.
Change
(Available without upgrading) Improved the handling of errors in DAG UI for tasks without a set operator.
Deprecated
Cloud Composer 1.14.4 has reached its end of full support period .
Change
Cloud Composer 1.18.1 and 2.0.5 images are available:
composer-2.0.5-airflow-2.2.3
composer-2.0.5-airflow-2.1.4
composer-1.18.1-airflow-2.2.3
composer-1.18.1-airflow-2.1.4
composer-1.18.1-airflow-1.10.15 (default)
February 17, 2022
Feature
(Cloud Composer 2) Tasks that take less than 25 minutes to execute are not impacted by maintenance operations . Cloud Composer waits until such tasks are finished before the maintenance operation starts.
Feature
DAG UI is available in Preview.
February 15, 2022
Announcement
Cloud Composer 1.18.0 and 2.0.4 release started on February 15, 2022 . Get ready for upcoming changes and features as we roll out the new release to all regions. This release is in progress at the moment. Listed changes and features might not be available in some regions yet.
Change
(Cloud Composer 1) Starting from this version, newly created environments use Python 3.8 as the default Python version. Python 3.6 is no longer available. If you upgrade an existing environment to 1.18.0 and later versions, the Python version changes from Python 3.6 to Python 3.8 .
Fixed
(Cloud Composer 2) Environment creation no longer fails if the default Compute Engine service account is deleted in a project.
Change
Cloud Composer 1.18.0 and 2.0.4 images are available:
composer-2.0.4-airflow-2.2.3
composer-2.0.4-airflow-2.1.4
composer-1.18.0-airflow-2.2.3
composer-1.18.0-airflow-2.1.4
composer-1.18.0-airflow-1.10.15 (default)
Deprecated
Cloud Composer 1.14.3 has reached its end of full support period .
Deprecated
Airflow 2.0.2 is no longer included in Cloud Composer images.
February 07, 2022
Feature
Airflow 2.2.3 is available in Cloud Composer images.
Change
(Airflow 2.2.3) Support for Deferrable Tasks is not available in Cloud Composer yet.
Deprecated
Cloud Composer versions 1.14.0 , 1.14.1 , and 1.14.2 have reached their end of full support period .
Change
Cloud Composer 1.17.10 and 2.0.3 images are available:
composer-2.0.3-airflow-2.2.3
composer-2.0.3-airflow-2.1.4
composer-2.0.3-airflow-2.0.2
composer-1.17.10-airflow-2.2.3
composer-1.17.10-airflow-2.1.4
composer-1.17.10-airflow-2.0.2
composer-1.17.10-airflow-1.10.15 (default)
January 28, 2022
Announcement
The DAG UI feature was rolled back. We plan to make it available with the next release of Cloud Composer.
January 20, 2022
Fixed
Reliability of writing to and reading from /logs and /data folders in Airflow components is improved in Cloud Composer 2 environments.
Fixed
(New environments only) Cloud Composer 2 environments with a user-managed service account now correctly use this service account to get Cloud Composer images and export workload metrics (CPU, memory, disk usage).
Change
Cloud Composer 1.17.9 and 2.0.2 images are available:
composer-2.0.2-airflow-2.1.4
composer-2.0.2-airflow-2.0.2
composer-1.17.9-airflow-2.1.4
composer-1.17.9-airflow-2.0.2
composer-1.17.9-airflow-1.10.15 (default)
Deprecated
Cloud Composer 1.13.4 has reached its end of full support period .
January 10, 2022
Change
(Available without upgrading) Programmatic calls to Airflow API and Airflow UI in Cloud Composer 2 must now contain OAuth tokens with the https://www.googleapis.com/auth/cloud-platform scope. You can find an example of setting this scope in Make calls to Airflow REST API .
Fixed
Fixed the "First DAG run for an uploaded DAG file has several failed tasks" known issue for Airflow 2 environments.
Fixed
Improved error handling when configuring workload identity in Cloud Composer 2 environments.
Fixed
Fixed a problem with rollback of Cloud Composer system workloads after a failed environment upgrade attempt.
Fixed
Fixed levels of Airflow log messages in Cloud Composer 2 environments.
Fixed
Logs from SQL proxy are now correctly passed to the customer project in environments with enabled Private Service Connect support.
Deprecated
Cloud Composer 1.13.3 has reached its end of full support period .
Change
Cloud Composer 1.17.8 and 2.0.1 images are available:
composer-2.0.1-airflow-2.1.4
composer-2.0.1-airflow-2.0.2
composer-1.17.8-airflow-2.1.4
composer-1.17.8-airflow-2.0.2
composer-1.17.8-airflow-1.10.15 (default)
December 16, 2021
Feature
Private Service Connect support is available in Preview for Cloud Composer 2.
Announcement
For the latest updates of the potential impact of the open-source Apache Log4j 2 vulnerability on Google Cloud products, see the Apache Log4j 2 Vulnerability page.
Feature
Authorized networks support is available in Preview.
Change
Cloud Composer 2.0.0 images are available:
composer-2.0.0-airflow-2.1.4
composer-2.0.0-airflow-2.0.2
Feature
Cloud Composer 2 is now generally available (GA).
December 09, 2021
Announcement
We delay switching Python 3.6 to Python 3.8 in Cloud Composer images with Airflow 1.10.15 . This change will happen in February 2022. For existing environments, migration from Python 3.6 to 3.8 will happen during the upgrade process. New environments will use Python 3.8.
Fixed
Fixed the issue with continuous web server reloading when syncing plugins.
Change
(Airflow 2.1.4) The apache-airflow-providers-hashicorp package is added to images with Airflow 2.1.4.
Fixed
(Cloud Composer 2) Messages in web server logs now have correctly assigned severity.
Change
(Airflow 2.1.4) Users with the Admin role can now create users in the Airflow UI.
Change
(Airflow 2.1.4) Backported the fix for the SerializedDagNotFound: DAG not found in serialized_dag table Airflow bug.
Deprecated
Cloud Composer 1.13.2 has reached its end of full support period .
Change
Cloud Composer 1.17.7 and 2.0.0-preview.7 images are available:
composer-1.17.7-airflow-1.10.15 (default)
composer-1.17.7-airflow-2.0.2
composer-1.17.7-airflow-2.1.4
composer-2.0.0-preview.7-airflow-2.0.2
composer-2.0.0-preview.7-airflow-2.1.4
December 01, 2021
Change
(Available without upgrading) Web server network access control settings can now be configured in Cloud Composer 2 environments.
Change
(Cloud Composer 2) The /dags directory from the environment's bucket is no longer synced to the web server. With this change, the web server startup times are improved.
Change
(Cloud Composer 2) The performance of syncing files to schedulers and workers was improved.
Fixed
(Cloud Composer 2) Clusters that remain after failed environment creation operations are now deleted.
Change
(Airflow 1.10.15) The apache-airflow-backport-providers-google package is updated:
Wait mechanism for DataprocJobSensor was implemented to handle transient issues when a Job status is not available after creation.
Support for impersonation_chain in the GKEStartPodOperator .
New Operators for Dataproc Metastore and Dataproc Serverless.
Fixed a bug in Dataflow hook when no jobs are returned.
Google Secret Manager clients are no longer cached.
Use correct project and location in the on_kill method for Dataflow operators.
Deprecated
Airflow versions 2.1.2, 1.10.14, and 1.10.12 are no longer included in Cloud Composer images.
Deprecated
Cloud Composer 1.13.1 has reached its end of full support period .
Change
New versions of Cloud Composer images:
composer-1.17.6-airflow-1.10.15 (default)
composer-1.17.6-airflow-2.0.2
composer-1.17.6-airflow-2.1.4
composer-2.0.0-preview.6-airflow-2.0.2
composer-2.0.0-preview.6-airflow-2.1.4
November 16, 2021
Change
(Cloud Composer 1) GCSfuse version updated to 37.0. Cloud Composer uses
GCSfuse to sync files between the environment bucket and worker pods.
Change
(New environments only) Default values for maintenance windows are from 00:00:00 to 04:00:00 (GMT) on Sunday, Friday, and Saturday every week.
Change
New versions of Cloud Composer images:
composer-1.17.5-airflow-2.1.4
composer-1.17.5-airflow-2.1.2
composer-1.17.5-airflow-2.0.2
composer-1.17.5-airflow-1.10.15 (default)
composer-1.17.5-airflow-1.10.12
composer-1.17.5-airflow-1.10.14
Deprecated
Cloud Composer 1.13.0 has reached its end of full support period .
November 04, 2021
Feature
Airflow 2.1.4 is available in Cloud Composer images.
Change
The scheduler heartbeat probe no longer checks for the availability of logs in Cloud Logging. This change reduces the chance of false positives.
Change
(Cloud Composer 2 only) The termination grace period for workers is extended from 30 seconds to 30 minutes. This change does not apply to operations that re-create pods (for example, when changing environment variables), so that these operations do not require a long time to complete.
Change
(New Cloud Composer 2 environments only)
Access to the Airflow web server in Cloud Composer 2 is now additionally protected by Service Control API checks, for extended access control.
Change
New versions of Cloud Composer images:
composer-2.0.0-preview.5-airflow-2.1.4
composer-2.0.0-preview.5-airflow-2.1.2
composer-2.0.0-preview.5-airflow-2.0.2
composer-1.17.4-airflow-2.1.4
composer-1.17.4-airflow-2.1.2
composer-1.17.4-airflow-2.0.2
composer-1.17.4-airflow-1.10.15 (default)
composer-1.17.4-airflow-1.10.14
composer-1.17.4-airflow-1.10.12
Deprecated
Cloud Composer versions 1.12.4 and 1.12.5 have reached their end of full support period .
November 02, 2021
Feature
Cloud Composer is now available in Singapore (asia-southeast1).
October 18, 2021
Feature
Cloud Composer 2 supports Airflow web server plugins.
Change
Added the google-cloud-aiplatform package to Cloud Composer images with Airflow versions 2.1.2, 2.0.2, and 1.10.15.
Fixed
Fixed an issue with the Airflow web server availability in Cloud Composer 2.
Fixed
(Available without upgrading) Fixed a problem with Airflow 2 configuration changes not propagating to Airflow workers.
Feature
Cloud Composer is now available in Oregon (us-west1).
Fixed
Fixed a bug that caused the __pycache__ folder to sometimes appear in an environment's bucket.
Change
(New environments only) Shielded Nodes and Secure Boot features are enabled for Cloud Composer 1 environment clusters.
Change
(New environments only) Cloud Composer 1 environment creation no longer fails when the constraints/compute.requireShieldedVm policy is turned on.
Change
(New environments only) Cloud Composer 2 environments create Autopilot clusters using the Regular release channel . Before this change, the Rapid channel was used.
Change
New versions of Cloud Composer images:
composer-1.17.3-airflow-2.1.2
composer-1.17.3-airflow-2.0.2
composer-1.17.3-airflow-1.10.15 (default)
composer-1.17.3-airflow-1.10.14
composer-1.17.3-airflow-1.10.12
composer-2.0.0-preview.4-airflow-2.1.2
composer-2.0.0-preview.4-airflow-2.0.2
Deprecated
Cloud Composer versions 1.12.2 and 1.12.3 have reached their end of full support period .
October 05, 2021
Feature
Python Client for Cloud Composer version 1.0.0 is released. You can use this library to interact with Cloud Composer API from Python.
September 29, 2021
Feature
Cloud Composer supports the IP Masquerade agent in Preview. This feature is available in new Cloud Composer 1 environments.
Change
Changes in the preinstalled apache-airflow-backport-providers-google package for Airflow 1.10.15:
Dataflow job operators can be run in async mode.
Dataflow Hook handles no Job Type.
Change
New versions of Cloud Composer images:
composer-1.17.2-airflow-2.1.2
composer-1.17.2-airflow-2.0.2
composer-1.17.2-airflow-1.10.15 (default)
composer-1.17.2-airflow-1.10.14
composer-1.17.2-airflow-1.10.12
composer-2.0.0-preview.3-airflow-2.1.2 (default)
composer-2.0.0-preview.3-airflow-2.0.2
Deprecated
Cloud Composer 1.12.1 has reached its end of full support period .
September 23, 2021
Change
Cloud Composer images with Airflow 2 now use Python 3.8.12 .
Feature
Cloud Composer supports Privately used public IP addresses in Preview. This feature is available in new environments.
Fixed
The GRPC_POLLING_STRATEGY environment variable is set to epoll1 by default. This fix is a workaround for a bug introduced in grpcio 1.31.
Change
Changes in the preinstalled apache-airflow-backport-providers-google package for Airflow 1.10.15:
CloudDataFusionStartPipelineOperator can be run in async mode.
Added a new sensor, DatafusionPipelineStateSensor .
Fixes for the success_states and pipeline_timeout parameters in CloudDataFusionStartPipelineOperator .
Fixed
(New environments only) The FluentD environment component ( composer-fluentd ) no longer breaks if it was manually turned off for more than 30 days.
Fixed
(New environments only) The airflow-monitoring pod is restarted instead of being marked as unhealthy when the GKE control plane IP changes.
Change
New versions of Cloud Composer images:
composer-1.17.1-airflow-2.1.2
composer-1.17.1-airflow-2.0.2
composer-1.17.1-airflow-1.10.15 (default)
composer-1.17.1-airflow-1.10.14
composer-1.17.1-airflow-1.10.12
composer-2.0.0-preview.2-airflow-2.1.2
composer-2.0.0-preview.2-airflow-2.0.2
Deprecated
Cloud Composer 1.12.0 has reached its end of full support period .
September 15, 2021
Feature
Airflow 2 in Cloud Composer is now generally available (GA).
Feature
HA Scheduler in Cloud Composer is now generally available (GA).
Announcement
We plan to stop offering Airflow 1.10.14 and 1.10.12 in new versions of Cloud Composer. Starting from December 2021, new releases of Cloud Composer will support only Airflow 1.10.15 and Airflow 2.x versions.
Announcement
We plan to switch new versions of Cloud Composer with Airflow 1.10.15 to Python 3.8 . Starting from November 2021, new Cloud Composer images with Airflow 1.10.15 will use Python 3.8 instead of Python 3.6. Please check for PyPI package compatibility before upgrading your environment to a version with Python 3.8.
Feature
Java Runtime in Airflow workers and schedulers is updated from version 8 to version 11.
Change
The default value for the visibility-timeout Airflow configuration option, which determines the amount of time after which the task is re-picked by another worker, is increased from 6 hours to 7 days. This change fixes a problem with long-running tasks, when two Airflow workers attempt to write to one log file at the same time, causing tasks to fail with a logging exception.
Airflow has its own system for controlling task health, which is not dependent on visibility-timeout . If required, you can override the value of this configuration option for your environment.
Change
If an Airflow configuration option is blocked in the image version specified for an upgrade operation, and this option has an override in your environment, the upgrade operation is rejected.
Fixed
In Airflow UI, menu items for Configuration and DAG dependencies pages are now correctly displayed for users with the Op role.
Change
New versions of Cloud Composer images:
composer-1.17.0-airflow-2.1.2
composer-1.17.0-airflow-2.0.2
composer-1.17.0-airflow-1.10.15 (default)
composer-1.17.0-airflow-1.10.14
composer-1.17.0-airflow-1.10.12
composer-2.0.0-preview.1-airflow-2.1.2
composer-2.0.0-preview.1-airflow-2.0.2
Deprecated
Airflow 2.1.1 is no longer included in Cloud Composer images.
September 09, 2021
Feature
Cloud Composer 2 is available in Preview.
Cloud Composer 2 brings environments that scale automatically based on the demands of your workflows. For more information about Cloud Composer 2, see Major versions of Cloud Composer , Environment scaling , and Pricing pages in the documentation.
Change
Cloud Composer 2 uses the following Cloud Composer images :
composer-2.0.0-preview.0-airflow-2.1.2
composer-2.0.0-preview.0-airflow-2.1.1
composer-2.0.0-preview.0-airflow-2.0.2
August 30, 2021
Feature
Airflow 2.1.2 is available in Cloud Composer images.
Feature
(Airflow 2) Cloud Composer now supports the stable Airflow REST API . The stable Airflow REST API is enabled by default.
Change
(Airflow 2) Cloud Composer now uses a custom authentication backend for authentication in the stable Airflow REST API. The default value of the [api]auth_backend Airflow configuration option is changed to airflow.composer.api.backend.composer_auth . The default role for new users that authenticate through the stable Airflow REST API is defined by the [api]composer_auth_user_registration_role Airflow configuration option, which is set to Op by default.
Change
New versions of Cloud Composer images:
composer-1.16.16-airflow-1.10.12
composer-1.16.16-airflow-1.10.14
composer-1.16.16-airflow-1.10.15 (default)
composer-1.17.0-preview.12-airflow-2.0.2
composer-1.17.0-preview.12-airflow-2.1.1
composer-1.17.0-preview.12-airflow-2.1.2
August 23, 2021
Change
The default value for the [core]parallelism Airflow configuration option is set to match the maximum worker concurrency in Airflow. Before this change, some tasks could be present in the queue but not executed, and then fail after reaching the timeout.
Change
(Airflow 2.1.1) Airflow configuration options that are deprecated in Airflow 2 are now blocked . In Airflow 2, these options are located in a different configuration section, but Airflow still uses the deprecated location as a fallback.
Fixed
(Airflow 2) The airflow_db connection used by Airflow to connect to the Airflow database now correctly uses PostgreSQL connection type for Airflow 2 environments.
Fixed
Non-error output of CloudSQL Proxy instances is routed to stdout instead of stderr. Regular CloudSQL Proxy output is no longer marked as errors in container logs.
Change
New versions of Cloud Composer images:
composer-1.16.15-airflow-1.10.12
composer-1.16.15-airflow-1.10.14
composer-1.16.15-airflow-1.10.15 (default)
composer-1.17.0-preview.11-airflow-2.0.2
composer-1.17.0-preview.11-airflow-2.1.1
Deprecated
Cloud Composer 1.11.3 has reached its end of full support period .
August 12, 2021
Feature
Cloud Composer is now compliant with Access Transparency on the GA level.
Change
(Airflow 2.1.1) downgraded google-cloud-memcache dependency from 1.1.0 to 1.0.0
Change
(Airflow 2.1.1) Downgraded colorlog dependency from 5.0.1 to 4.8.0
Change
New versions of Cloud Composer images:
composer-1.16.14-airflow-1.10.12
composer-1.16.14-airflow-1.10.14
composer-1.16.14-airflow-1.10.15 (default)
composer-1.17.0-preview.10-airflow-2.0.2
composer-1.17.0-preview.10-airflow-2.1.1
Deprecated
Cloud Composer 1.11.2 has reached its end of full support period .
August 05, 2021
Change
(Airflow 2) By default, Airflow performs two retries for a failed task. The default value for the core-default_task_retries Airflow configuration option is 2 .
Feature
When upgrading your environment to a new version, you can now check if PyPI packages installed in your environment have any
conflicts with preinstalled packages in the new Cloud Composer image.
Fixed
Deleting a DAG that has queued tasks no longer causes worker pods to restart.
Change
New versions of Cloud Composer images:
composer-1.16.13-airflow-1.10.12
composer-1.16.13-airflow-1.10.14
composer-1.16.13-airflow-1.10.15 (default)
composer-1.17.0-preview.9-airflow-2.0.2
composer-1.17.0-preview.9-airflow-2.1.1
Deprecated
Cloud Composer 1.11.1 has reached its end of full support period .
July 29, 2021
Feature
Airflow 2.1.1 is available in Cloud Composer images.
Fixed
Fixed the problem with environment health metrics not being exported in VPC Service Controls environments because of airflow-monitoring component restarts.
Fixed
Fixed the problem with environment health metrics not being exported because of an incorrect environment variable value in the airflow-monitoring component.
Change
New versions of Cloud Composer images:
composer-1.16.12-airflow-1.10.12
composer-1.16.12-airflow-1.10.14
composer-1.16.12-airflow-1.10.15 (default)
composer-1.17.0-preview.8-airflow-2.0.2
composer-1.17.0-preview.8-airflow-2.1.1
Fixed
(Available without upgrading) The Require OS Login (compute.requireOsLogin) organization policy constraint is now checked before an environment is created. If this policy is enabled, the environment creation operation fails immediately with an error message. Before this change, the operation failed on a timeout.
Deprecated
Cloud Composer 1.11.0 has reached its end of full support period .
July 22, 2021
Feature
Cloud Composer environments with Airflow 2 can run more than one Airflow scheduler. This feature brings Airflow HA scheduler to Cloud Composer environments.
Change
New versions of Cloud Composer images:
composer-1.16.11-airflow-1.10.12
composer-1.16.11-airflow-1.10.14
composer-1.16.11-airflow-1.10.15 (default)
composer-1.17.0-preview.7-airflow-2.0.2
Deprecated
Airflow 2.0.1 is no longer included in Cloud Composer images.
July 14, 2021
Feature
Airflow 2.0.2 is available in Cloud Composer images.
Fixed
Fixed memory issues on the FluentD environment component.
Change
New versions of Cloud Composer images:
composer-1.16.10-airflow-1.10.15 (default)
composer-1.16.10-airflow-1.10.14
composer-1.16.10-airflow-1.10.12
composer-1.17.0-preview.6-airflow-2.0.1
composer-1.17.0-preview.6-airflow-2.0.2
July 08, 2021
Change
New versions of Cloud Composer images:
composer-1.17.0-preview.5-airflow-2.0.1
composer-1.16.9-airflow-1.10.15 (default)
composer-1.16.9-airflow-1.10.14
composer-1.16.9-airflow-1.10.12
Fixed
When PyPI modules installation fails with certain error types in VPC SC environments, an additional attempt to perform the environment update operation is made using an in-cluster build.
Deprecated
Cloud Composer 1.10.6 has reached its end of full support period .
June 30, 2021
Change
New versions of Cloud Composer images:
composer-1.17.0-preview.4-airflow-2.0.1
composer-1.16.8-airflow-1.10.15 (default)
composer-1.16.8-airflow-1.10.14
composer-1.16.8-airflow-1.10.12
Fixed
Fixed remaining memory issues that occurred while syncing files on machine types with more than 8 vCPUs.
Deprecated
Cloud Composer 1.10.5 has reached its end of full support period .
June 17, 2021
Feature
Cloud Composer is now available in Warsaw (europe-central2).
Change
GCSfuse version was updated to 0.35.1 (latest release). Cloud Composer uses GCSfuse to sync files between the environment buckets and worker pods. The change improves the stability of the syncing process.
Change
New versions of Cloud Composer images:
composer-1.17.0-preview.3-airflow-2.0.1
composer-1.16.7-airflow-1.10.15
composer-1.16.7-airflow-1.10.14 (default)
composer-1.16.7-airflow-1.10.12
Change
(Airflow 2) Preinstalled packages changed. Removed: google_cloud_build==2.0.0 , mock==2.0.0 , pbr==5.5.1 . Downgraded overrides from 3.1.0 to 2.8.0 .
Change
It is now possible to create environments with CMEK encryption in projects with enabled domain restricted sharing . Before the fix, an error related to insufficient Cloud Pub/Sub permissions was generated.
Change
For DAG runs that have long-running tasks with certain operators, task level logs are now periodically updated in the Airflow UI. Before this change, logs for such tasks were only available in Airflow UI after the task was completed.
Fixed
(Airflow 2) In the Airflow UI, you can now create connection types from the installed custom Airflow provider packages. Before, these connection types were not available.
Fixed
Fixed the cause of Liveness probe errored events that appeared in the scheduler and worker pod logs.
Fixed
Fixed a problem where the Airflow worker health was calculated incorrectly because of leftover queued tasks without DAGs being present in the Airflow database. This led to problems with task execution because Airflow workers were constantly restarted in healthy environments.
June 07, 2021
Change
New versions of Cloud Composer images:
composer-1.17.0-preview.2-airflow-2.0.1
composer-1.16.6-airflow-1.10.15
composer-1.16.6-airflow-1.10.14 (default)
composer-1.16.6-airflow-1.10.12
Change
Increased the timeout for environment upgrade operations to support upgrades for databases up to 16 GB in size. If an upgrade operation times out and the Airflow database size is more than 10 GB, a warning message about the database size is generated.
Feature
You can now store values for the smtp_password Airflow configuration option in Secret Manager.
Fixed
(Available without upgrading) Updating environment labels now correctly overrides previous labels in billing reports.
Fixed
DAG parsing and task processing in Airflow no longer fails because of incorrectly formatted Airflow logs. This happened due to a bug in Airflow log message formatting. Before this fix, errors related to sensor tasks with reschedule intervals shorter than scheduler processing time were not displayed.
Fixed
(New environments only) Some log messages related to Airflow web server access were previously missing in Cloud Logging. This problem is fixed and these messages now appear in Cloud Logging.
Fixed
Fixed memory issues that occurred while syncing files on machine types with more than 8 vCPUs.
Deprecated
Cloud Composer 1.10.4 has reached its end of full support period .
May 21, 2021
Change
New versions of Cloud Composer images:
composer-1.17.0-preview.1-airflow-2.0.1
composer-1.16.5-airflow-1.10.15
composer-1.16.5-airflow-1.10.14 (default)
composer-1.16.5-airflow-1.10.12
Change
Error messages about PyPI package conflicts now contain links to corresponding cluster build logs.
Deprecated
Cloud Composer 1.10.3 has reached its end of full support period .
May 13, 2021
Feature
Airflow 2.0.1 is available in Cloud Composer images.
Feature
You can now break down costs associated with particular Cloud Composer environments. User labels that you assign to your environments now appear in billing reports.
Feature
Preview: Cloud Composer supports Airflow 2 . For more information about transferring from environments with Airflow 1 to Airflow 2, see Migrate environments to Airflow 2 .
Change
For new Cloud Composer environments with Airflow 2, SMTP configuration properties for Airflow have new default values:
smtp_user is set to an empty value by default.
smtp_password is set to an empty value by default.
smtp_mail_from is set to a default value used by Airflow.
Change
New versions of Cloud Composer images:
composer-1.17.0-preview.0-airflow-2.0.1
composer-1.16.4-airflow-1.10.15
composer-1.16.4-airflow-1.10.14 (default)
composer-1.16.4-airflow-1.10.12
Change
Improved the error message that is generated when the specified service account does not have enough permissions to run Airflow workloads.
Change
Kerberos client ( krb5-user ) package is pre-installed in Cloud Composer container images.
Change
Added troubleshooting information to error messages generated on Airflow web server deployment failures.
Change
GKE clusters of new Cloud Composer environments use Container-Optimized OS with Containerd ( cos_containerd ) image type.
Change
Some environment operations that failed because of networking problems are now retried instead of failing.
Fixed
Error messages about dependency conflicts that happen when installing Python packages are now correctly reported.
Fixed
When an environment upgrade fails because of package dependency conflicts, the error message contains detailed information about the conflict.
Fixed
Database passwords are now redacted in error messages that appear in Composer Agent logs.
April 29, 2021
Change
New versions of Cloud Composer images:
composer-1.16.3-airflow-1.10.15
composer-1.16.3-airflow-1.10.14 (default)
composer-1.16.3-airflow-1.10.12
Fixed
When Airflow configuration is updated, an erroneous log message about a web server update failure no longer appears in logs.
Fixed
Fixed problems with execution date in environment health monitoring when Airflow uses a custom time zone.
Deprecated
Cloud Composer versions 1.8.3 to 1.10.2 have reached their end of full support period .
April 22, 2021
Change
New versions of Cloud Composer images:
composer-1.16.2-airflow-1.10.15
composer-1.16.2-airflow-1.10.14 (default)
composer-1.16.2-airflow-1.10.12
Deprecated
Airflow 1.10.10 is no longer included in Cloud Composer images.
Change
When a GKE authorization error occurs during an environment operation, the GKE error message is reported and the operation fails immediately.
Fixed
When Airflow uses a non-UTC time zone , manually triggered DAGs are executed at correct times now. The monitoring panel displays the correct environment health status.
Fixed
When an environment operation fails during the installation of PyPI packages, error messages generated by pip are now correctly reported.
Fixed
A deprecation message is now displayed for the xcom_push argument of KubernetesPodOperator .
April 15, 2021
Change
If an environment's service account does not have required permissions for a requested operation, Cloud Composer generates an actionable error message. The operation fails faster in this case.
Change
New versions of Cloud Composer images:
composer-1.16.1-airflow-1.10.15
composer-1.16.1-airflow-1.10.14 (default)
composer-1.16.1-airflow-1.10.12
composer-1.16.1-airflow-1.10.10
Fixed
Fixed a bug that caused environment update and upgrade operations to fail with errors related to GKE cluster endpoints, instead of the actual root cause. This problem affected environments with installed custom PyPI packages.
April 08, 2021
Feature
Airflow 1.10.15 is available in Cloud Composer images.
Change
New versions of Cloud Composer images:
composer-1.16.0-airflow-1.10.15
composer-1.16.0-airflow-1.10.14 (default)
composer-1.16.0-airflow-1.10.12
composer-1.16.0-airflow-1.10.10
Fixed
Environments with already deleted GKE clusters can now be deleted as usual. Deleting such environments no longer requires a workaround.
Fixed
In Airflow 1.10.14, PythonVirtualenvOperator now uses the Python version of the environment when a Python version is not specified.
March 31, 2021
Change
New versions of Cloud Composer images:
composer-1.15.2-airflow-1.10.14 (default)
composer-1.15.2-airflow-1.10.12
composer-1.15.2-airflow-1.10.10
Change
Irrelevant warnings about asynchronous DAG loading parameters no longer show up in the Airflow logs.
Fixed
Fixed an Airflow web UI bug that caused the DAG Tree View page to crash in rare cases.
Fixed
Corrected the validation of custom Cloud SQL and Airflow web server IP ranges that are specified during the environment creation. Changed the error code and the message that are returned when a specified CIDR range is not valid.
March 23, 2021
Change
New versions of Cloud Composer images:
composer-1.15.1-airflow-1.10.14 (default)
composer-1.15.1-airflow-1.10.12
composer-1.15.1-airflow-1.10.10
Feature
During the environment creation, Cloud Composer checks that there are enough CPUs, according to the Cloud Compute CPU quota for a region. If there are not enough CPUs, the operation does not start.
Change
For Cloud Composer versions 1.13.2 and later, regional base images are used for Airflow web server and worker-scheduler builds. This improves customized image build times.
Change
Invalid resource names in API requests now cause a 4xx response. The invalid resource name is reported in the error message.
Change
Removed the "@-@" workload info prefixes from Airflow task logs in the Airflow UI and Cloud Logging. This change is available for Airflow 1.10.14.
Fixed
Improved the validation procedure for custom IP ranges that are specified during the environment creation. Changed the error code and the message that are returned when a specified CIDR range is not valid.
Fixed
Improved error handling when creating node pools during upgrade operations. In some cases, the error was not reported when an upgrade operation failed on a timeout.
Fixed
Fixed the documentation link in the Airflow UI.
Fixed
Improved the file synchronization error handling for environments that run under the Domain Restricted Sharing organizational policy .
March 11, 2021
Feature
DAG serialization is enabled by default in new environments created for Cloud Composer versions 1.15.0 and later. Upgrading an existing environment to 1.15.0 does not change the existing DAG serialization settings.
Change
New versions of Cloud Composer images:
composer-1.15.0-airflow-1.10.14
composer-1.15.0-airflow-1.10.12 (default)
composer-1.15.0-airflow-1.10.10
Change
When creating new environments, enabling asynchronous DAG loading disables DAG serialization.
Change
Before creating or updating an environment, Cloud Composer checks that required APIs are enabled in a project and that CIDR blocks specified for VPC Native and Private IP are valid. If these requirements are not met, Cloud Composer reports an error and the operation does not start. This change is available only for new Cloud Composer environments.
Fixed
The environment creation process now aborts early on any web server deployment failure.
Fixed
Environment creation operations no longer fail in Private IP configurations that use Customer Managed Encryption Keys (CMEK) .
Fixed
Improved error reporting for web server deployment failures. App Engine errors that occur during the deployment are now marked as web server deployment errors.
Fixed
Fixed a bug that caused upgrades to fail during an in-cluster build in public IP environments.
Fixed
Environment deletion operations no longer fail when Artifact Registry API is disabled.
March 05, 2021
Change
New versions of Cloud Composer images:
composer-1.14.5-airflow-1.10.14
composer-1.14.5-airflow-1.10.12 (default)
composer-1.14.5-airflow-1.10.10
Change
Improved the logging of Airflow exceptions. Full Python tracebacks for Airflow exceptions are reported and marked as errors in the logs.
Fixed
Added a precondition check for upgrade operations. This check verifies that GKE control plane can reach GKE nodes. Previously, if there was a networking problem with communication between the control plane and GKE nodes, the operation failed on a timeout.
Fixed
When creating environments, unmet network requirements for pods and services cause the operation to fail immediately. Previously, the operation failed when a timeout was reached.
Fixed
PyPI packages can now be installed in Cloud Composer versions 1.11.0 and 1.11.1.
Fixed
Fixed a potential infinite loop in the airflow-monitoring pod. Environment health checks no longer get stuck after certain types of environment update operations.
Fixed
Cloud Composer acquires existing environment resources if they are available during an upgrade operation. Before, the operation could fail with the "ALREADY_EXISTS" error in some cases.
Fixed
Fixed the cause of failures when creating Qwiklabs environments.
Fixed
Fixed a problem with airflow-monitoring not having logs after changing the machine type for GKE Cluster in a Cloud Composer environment.
March 02, 2021
Feature
GA: Support for Resource location restrictions and Data Residency is now generally available.
Feature
GA: Support for the Airflow Role-Based Access Control (RBAC) UI is now generally available.
February 25, 2021
Change
New versions of Cloud Composer images:
composer-1.14.4-airflow-1.10.14
composer-1.14.4-airflow-1.10.12 (default)
composer-1.14.4-airflow-1.10.10
Change
Improved the syncing of DAGs and plugins to the Airflow web server. DAG parsing is now less likely to break because of race conditions.
Change
Upgraded apache-airflow-backport-providers-google package to version 2021.2.5 in Airflow 1.10.12 and 1.10.14. This is potentially a breaking change because the package contains updates of Python Google Cloud libraries. For a list of new operators and for more information about breaking changes, see the 2021.2.5 release notes .
Change
Added FreeTDS system package to Cloud Composer images.
Change
Improved the reliability of environment upgrade operations. Added new retrying procedures and enhanced existing ones.
Change
Updated apache-beam package version to 2.24.0 in Airflow 1.10.10 so that Dataflow jobs now correctly create partitioned BigQuery tables. Airflow versions 1.10.12 and 1.10.14 already have apache-beam version 2.27.0 installed.
Change
The google-cloud-pubsublite package is installed by default in Composer images for Airflow 1.10.12 and 1.10.14.
Change
When an environment update operation cannot start, an error message that lists possible causes for the error is generated.
Fixed
Fixed the cause of several update-related errors.
Fixed
Fixed an error in GKE cluster builds. In private IP environments, an additional nodepool no longer remains after an update.
Fixed
Fixed an error when some MsSQL operators were not working with Azure instances.
Fixed
The Airflow scheduler liveness checker is now compatible with google-cloud-logging==2.2.0 .
Fixed
When an environment deletion operation fails, a correct GKE error is displayed. Before, a different GKE error was displayed in some cases.
February 24, 2021
Feature
GA: Support for Customer Managed Encryption Keys (CMEK) is now generally available.
February 16, 2021
Feature
GA: Support for Domain restricted sharing is now generally available.
Feature
GA: Setting and updating machine types for CloudSQL/Web Server is now generally available.
Breaking
Cloud Composer 1.14.3 release was rolled back. If you have an environment that was created with a composer-1.14.3-airflow-* image, you can later upgrade it to a newer version.
February 11, 2021
Breaking
To upgrade environments that are deployed with VPC service controls , you must add Artifact Registry to the service perimeter and configure an additional firewall rule for *.pkg.dev .
For other types of environments, if your firewall configuration does not use the default rules, you might need to add a firewall rule for *.pkg.dev as well.
February 03, 2021
Change
Timeouts for environment upgrade operations are increased.
Security
Fix for CVE-2021-3156 vulnerability .
Fixed
Fixed SQL operation conflicts that were occurring during environment upgrade operations.
Fixed
Create and update operations for environments no longer fail if your account doesn't have the serviceusage.services.get permission.
Fixed
On a failed environment upgrade operation, the created CloudSQL database is now correctly rolled back.
Fixed
Upgrade operations that might have resulted in a semi-upgraded environment state when the operation timeout was reached are now correctly rolled back and errors are reported.
Fixed
You can now enable and disable RBAC in environments with installed custom PyPI packages.
Change
New versions of Cloud Composer images:
composer-1.14.2-airflow-1.10.14
composer-1.14.2-airflow-1.10.12 (default)
composer-1.14.2-airflow-1.10.10
January 31, 2021
Feature
Preview: You can now configure Cloud Composer to use Artifact Registry instead of Container Registry .
January 28, 2021
Deprecated
Airflow 1.10.9 is no longer included in Cloud Composer images.
Change
The default Airflow version for Composer images changes from 1.10.10 to 1.10.12.
Fixed
Updated google-auth package version to 1.24.0 in Cloud Composer images so that it works with VPC Service Controls . Earlier versions of google-auth caused multiple DAG execution errors when used with VPC SC.
Fixed
Updated pyarrow package version to 2.0.0 in Cloud Composer images to fix an error in BigQueryHook and Pandas integration. Earlier versions of pyarrow caused the to_pandas() got an unexpected keyword argument 'timestamp_as_object' error.
Change
New versions of Cloud Composer images:
composer-1.14.1-airflow-1.10.14
composer-1.14.1-airflow-1.10.12 (default)
composer-1.14.1-airflow-1.10.10
January 22, 2021
Breaking
If you run DAGs using Pandas and BigQuery in Composer version 1.14.0 and Airflow version 1.10.14, you must update the pyarrow PyPI package to version 1.0.0 or higher and apache-beam to version 2.27.0 or higher.
Change
New versions of Cloud Composer images: composer-1.14.0-airflow-1.10.9 , composer-1.14.0-airflow-1.10.10 , composer-1.14.0-airflow-1.10.12 , and composer-1.14.0-airflow-1.10.14 . The default is composer-1.14.0-airflow-1.10.10 . Upgrade your Cloud SDK to use features in this release.
Feature
The max-pods-per-node parameter configures the maximum number of pods per node in the GKE cluster. You can set this parameter when you create a new environment. This feature is available in Google Cloud SDK and Beta API .
Feature
You can now specify maintenance windows for your environments. GKE cluster and SQL database are updated only during the specified period. This feature is available in Google Cloud SDK and Beta API .
Change
The maximum number of pods per node in the GKE cluster changes from 100 to 32. This change affects all newly created environments. You can use the max-pods-per-node parameter when creating an environment to increase or decrease the number of pods.
January 13, 2021
Feature
Preview: You can now restart the Airflow web server using the command gcloud beta composer environments restart-web-server or the Beta API .
January 12, 2021
Feature
GA: Network ACL support for the Airflow web server is now generally available.
Preview: Composer can now be configured to use Customer-managed encryption keys (CMEK) .
Fixed
Fixed an issue where connections were inserted into the Airflow database twice.
The Airflow UI will now always send requests to HTTPS addresses.
Feature
Preview: Added support for the Airflow Role-Based Access Control (RBAC) UI for Airflow version 1.10.10 or newer and Python 3. You can enable the Airflow RBAC UI by setting the [webserver]rbac=True Airflow configuration override.
Change
New versions of Cloud Composer images: composer-1.13.4-airflow-1.10.9 , composer-1.13.4-airflow-1.10.10 , and composer-1.13.4-airflow-1.10.12 . The default is composer-1.13.4-airflow-1.10.10 . Upgrade your Cloud SDK to use features in this release.
If environment creation succeeds when the requester did not have the iam.serviceAccounts.actAs permission on the service account, Composer will now generate a warning in the audit log entry.
Error handling for files synchronization between buckets has been improved.
January 05, 2021
Announcement
In Cloud Composer 1.15.0, DAG serialization will be enabled by default when creating new Cloud Composer environments. Starting from this version, if you do not want to use DAG serialization, you must explicitly disable it.
December 16, 2020
Feature
Preview: A new Logs tab has been added to the Environment details page.
December 14, 2020
Change
New versions of Cloud Composer images: composer-1.13.3-airflow-1.10.9 , composer-1.13.3-airflow-1.10.10 , and composer-1.13.3-airflow-1.10.12 . The default is composer-1.13.3-airflow-1.10.10 . Upgrade your Cloud SDK to use features in this release.
Feature
Composer will now fail faster when the network settings in Private IP environments prohibit the download of publicly stored Python packages.
Fixed
Composer Agent error messages are now more descriptive.
Composer will now check whether the Artifact Registry API is enabled during updates (if it is required).
December 09, 2020
Feature
Support for VPC Service Controls is now generally available (GA).
December 03, 2020
Change
New versions of Cloud Composer images: composer-1.13.2-airflow-1.10.9 , composer-1.13.2-airflow-1.10.10 , and composer-1.13.2-airflow-1.10.12 . The default is composer-1.13.2-airflow-1.10.10 . Upgrade your Cloud SDK to use features in this release.
Change
Airflow worker pods are now forced to be scheduled on different nodes. Each node runs only a single Airflow worker pod.
Feature
You can now set web server network access control using the v1 Composer API .
New metrics have been added to monitor web server CPU and memory usage:
CPU usage time
CPU reserved cores
Memory bytes used
Memory quota
During environment creation and updates, Composer will now verify whether you have chosen a region compliant with any location restriction organization policies. Error reporting has also been improved in cases where location restrictions cause environment updates to fail.
Deprecated
Composer versions 1.8.1 and 1.8.2 have been deprecated.
November 23, 2020
Feature
Cloud Composer is now available in Los Angeles ( us-west2 ).
November 20, 2020
Feature
Composer version 1.12.5 or newer: File synchronization between buckets in Domain restricted sharing compliant environments has been improved. If your environment was created before November 20, 2020 you must upgrade your environment to access this feature
November 09, 2020
Change
New versions of Cloud Composer images: composer-1.13.0-airflow-1.10.6 , composer-1.13.0-airflow-1.10.9 , composer-1.13.0-airflow-1.10.10 , and composer-1.13.0-airflow-1.10.12 . The default is composer-1.13.0-airflow-1.10.10 . Upgrade your Cloud SDK to use features in this release.
Airflow 1.10.12: api-auth_backend is now set to airflow.api.auth.backend.deny_all by default. To use the experimental REST API , change the api-auth_backend configuration override to airflow.api.auth.backend.default .
Feature
Airflow 1.10.12 is now available for Cloud Composer.
The GKE release channel is set to STABLE for new and upgraded Composer environments.
Deprecated
The following Cloud Composer versions have been deprecated:
Composer-1.7.2
Composer-1.7.3
Composer-1.7.4
Composer-1.7.5
Composer-1.7.6
Composer-1.7.7
Composer-1.8.0
October 30, 2020
Feature
More detailed error messages are now provided for errors during Python package installation.
Change
New versions of Cloud Composer images: composer-1.12.5-airflow-1.10.6 , composer-1.12.5-airflow-1.10.9 , and composer-1.12.5-airflow-1.10.10 . The default is composer-1.12.5-airflow-1.10.10 . Upgrade your Cloud SDK to use features in this release.
Fixed
Fixed an issue where DAG definition files that exceeded 64kb were not working with [core] store_dag_code mode enabled. Now these files can be up to 16 MB.
Fixed an issue where updating Airflow configurations with value interpolation caused update requests to timeout; these requests are not supported and will now be rejected.
Improved GCSfuse stability to resolve intermittent issues where the mounted directory was unavailable.
October 23, 2020
Change
New versions of Cloud Composer images: composer-1.12.4-airflow-1.10.6 , composer-1.12.4-airflow-1.10.9 , and composer-1.12.4-airflow-1.10.10 . The default is composer-1.12.4-airflow-1.10.9 . Upgrade your Cloud SDK to use features in this release.
Feature
The following Composer environment database metrics are now available in Cloud Monitoring: CPU usage, CPU cores, CPU utilization, memory usage, memory quota, memory utilization, disk usage, disk quota, disk utilization.
Fixed
Worker liveness checks now also check whether the log syncing process is running.
Improved configuration synchronization with the Airflow web server, fixing an issue with loading logs.
The Airflow database will no longer disconnect after 30 seconds of query runtime.
Worker health checks will no longer overload the Airflow database.
October 15, 2020
Change
New versions of Cloud Composer images: composer-1.12.3-airflow-1.10.6 , composer-1.12.3-airflow-1.10.9 , and composer-1.12.3-airflow-1.10.10 . The default is composer-1.12.3-airflow-1.10.9 . Upgrade your Cloud SDK to use features in this release.
Fixed
Setting or updating the machine type of the Airflow web server or Cloud SQL instance in Composer versions that don't support this feature (older than composer-1.7.2 ) will now return an error instead of failing silently.
Environments will now fall back to the in-cluster build when PyPI package installation fails due to Cloud Build unavailability under your VPC Service Controls configuration.
Airflow 1.10.10:
Fixed an issue with async DAG bag loading.
Task instance details will now render properly, even if there are no DAG runs related to the instance.
Feature
Cloud Build logs from the tenant project are now published in the Composer logs. They are available under the log name build-log-webserver .
Airflow DAG processor manager logs are now published in the Composer logs. They are available under the log name dag-processor-manager .
If an update operation fails, links to the specific Cloud Build log will now be included in the error message.
Compatibility with Domain Restricted sharing has been improved. Upgrading your environment to the newest version of Composer can now enable or disable its compatibility with Domain Restricted Sharing based on your organization policy .
October 07, 2020
Change
New versions of Cloud Composer images: composer-1.12.2-airflow-1.10.6 , composer-1.12.2-airflow-1.10.9 , and composer-1.12.2-airflow-1.10.10 . The default is composer-1.12.2-airflow-1.10.9 . Upgrade your Cloud SDK to use features in this release.
Feature
Added the log entry labels version_id and instance_id to differentiate the logs of different Airflow web server instances.
Airflow database upgrade logs are now published in the Composer logs under a separate log name.
Cloud Storage syncing logs are now published together in the Composer logs under a separate log name. They can be separated based further on pod_id .
Fixed
Fixed upgrade rollback failures due to a mismatch in API versions error.
Improved handling of errors caused by a missing plugins/ directory in the Cloud Storage bucket.
Backported an Airflow change that fixes an issue with Airflow 1.10.9 and 1.10.10 that causes MySQL to deadlock on the rendered_task_instance_fields table when using DAG serialization.
Fixed a bug that undercharged customers for App Engine storage.
Backfilled GKE API versions to make older Composer environments GKE 1.16-proof.
Fixed an issue that caused bq load commands for files larger than 100MB to fail with a RedirectMissingLocation error.
September 28, 2020
Change
New versions of Cloud Composer images: composer-1.12.1-airflow-1.10.6 , composer-1.12.1-airflow-1.10.9 , and composer-1.12.1-airflow-1.10.10 . The default is composer-1.12.1-airflow-1.10.6 . Upgrade your Cloud SDK to use features in this release.
Fixed
Airflow 1.10.6, 1.10.9, and 1.10.9: An Airflow change has been backported that lowers the network cost of DAG serialization.
Airflow 1.10.9: An Airflow change has been backported that improves GKE cluster resource usage, improving overall Airflow performance.
Feature
In-cluster image build logs will now appear in Monitoring under separate log names build-log-* , instead of in the Composer Agent logs.
You can now set or update machine types for the Airflow web server and Cloud SQL instance for any environment running a Composer version 1.7.2 or newer, regardless of Airflow version.
September 17, 2020
Feature
Airflow 1.10.10 is now available.
You can now securely store Airflow connections and secrets by
configuring Composer environments with Secret
Manager .
All new Environments now use
Zonal DNS names .
Change
New versions of Cloud Composer images: composer-1.12.0-airflow-1.10.3 , composer-1.12.0-airflow-1.10.6 , composer-1.12.0-airflow-1.10.9 , and composer-1.12.0-airflow-1.10.10 . The default is composer-1.12.0-airflow-1.10.6 . Upgrade your Cloud SDK to use features in this release.
Fixed
Validation has been added to prevent setting DAG serialization and
async DAG bag loading at the same time.
Fixed rendering templates in the Airflow UI when async DAG bag loading
is on.
Fixed an issue with Airflow worker Pod placement on GKE Nodes after
environment upgrade and update.
Added validation to the v1 API so that environment creation fails quickly if
Domain Restricted Sharing is enforced in the project.
Environment variables set by the user at the environment creation are now correctly propagated to Pub/Sub topics.
A fix for the broken Airflow Sentry integration has been backported to older Composer Airflow versions.
Airflow 1.10.9:
Fixed an issue where task retries did not work while DAG
serialization was turned on.
Fixed an issue that broke Airflow database connections when DAG
serialization was turned on.
Fixed an issue where the default worker concurrency could not be
set, causing problems with cluster resources usage.
August 21, 2020
Change
New versions of Cloud Composer images: composer-1.11.3-airflow-1.10.3 , composer-1.11.3-airflow-1.10.6 , and composer-1.11.3-airflow-1.10.9 . The default is composer-1.11.3-airflow-1.10.6 . Upgrade your Cloud SDK to use features in this release.
The max size for serialized DAGs has been increased to 128 MB.
PyPi dependency conflicts will now cause environment updates to fail by default. This can now be changed by setting the environmental variable IGNORE_PYPI_DEPENDENCY_CONFLICTS=True . This is the default behavior For older environments, but you can set IGNORE_PYPI_DEPENDENCY_CONFLICTS=False to force conflicts to fail.
Fixed
The Airflow configuration [core]load_examples can no longer be modified.
Domain Restricted Sharing setup with buckets in the tenant project is now applied during environment creation using the Beta API only when it is required.
Airflow 1.10.3, 1.10.6 and 1.10.9:
Disabled editing DAG properties that will be overwritten when the DAG is reloaded.
Fixed the following security vulnerabilities:
CVE-2020-11981 ,
CVE-2020-11982 ,
CVE-2020-11978
Airflow 1.10.9:
Fixed an issue that caused BigQuery operators from backported providers to fail when DAG serialization was turned on.
The Airflow web server UI will now correctly reload when the plugin folder is modified.
Rendered template_fields can now be displayed without accessing DAG files.
Airflow 1.10.6: Fixed intermittent issues template rendering when DAG serialization is turned on.
August 10, 2020
Change
New versions of Cloud Composer images: composer-1.11.2-airflow-1.10.3 , composer-1.11.2-airflow-1.10.6 , and composer-1.11.2-airflow-1.10.9 . The default is composer-1.11.2-airflow-1.10.6 . Upgrade your Cloud SDK to use features in this release.
Feature
Airflow 1.10.6 and 1.10.9: You can now specify a location argument when creating a BigQueryCheckOperator to use it in a different region from the Composer environment.
Fixed
Fixed GKE setting incompatibilities that broke environment creation for Composer versions between 1.7.2 and 1.8.3.
When DAG serialization is on, plugins and DAGs are no longer synced when the Airflow web server starts up. This fixes web server failures when plugins use custom PyPI packages.
Fixed intermittent failures when triggering a DAG from the Airflow Web UI with DAG serialization turned on.
Fixed update operations (installing Python dependencies and upgrading environments) for domain-scoped projects.
Fixed a broken link to the Airflow documentation in Airflow 1.10.9.
August 03, 2020
Change
New versions of Cloud Composer images: composer-1.11.1-airflow-1.10.3 , composer-1.11.1-airflow-1.10.6 , and composer-1.11.1-airflow-1.10.9 . The default is composer-1.11.1-airflow-1.10.6 . Upgrade your Cloud SDK to use features in this release.
Composer now enforces iam.serviceAccounts.actAs permission checks on the service account specified during Composer environment creation. See Creating environments for details.
Feature
Private IP environments can now be creating using non-rfc 1918 CGN ranges (100.64.0.0/10)
New PyPi packages have been added for Composer version composer-1.11.0-airflow-1.10.6. These make it possible to install apache-airflow-backport-providers-google with no additional package upgrades.
The PyPi package google-cloud-datacatalog can now be installed on Composer environments running Airflow 1.10.6 and Python 3.
Cloud Composer 1.11.1+: Backport providers are installed by default for Airflow 1.10.6 and 1.10.9.
You can now use the label.worker_id filter in Cloud Monitoring logs to see logs sent out of a specific Airflow worker Pod.
With the Composer Beta API, you can now upgrade an environment to any of the three latest Composer versions (instead of just the latest).
You can now modify these previously blocked Airflow configurations: [scheduler] scheduler_heartbeat_sec , [scheduler] job_heartbeat_sec , [scheduler] run_duration
Fixed
A more informative error message was added for environment creation failures caused by issues with Cloud SQL instance creation.
Improved error reporting has been added for update operations that change the web server image in cases where the error occurs before the new web server image is created.
The Airflow-worker liveness check has been changed so that a task just added to a queue will not fire an alert.
Reduced the amount of non-informative logs thrown by the environment in Composer 1.10.6.
Improved the syncing procedure for env_var.json in Airflow 1.10.9 (it should no longer throw "missing file:" errors).
Airflow-worker and airflow-scheduler will no longer throw "missing env_var.json" errors in Airflow 1.10.6.
July 30, 2020
Feature
Cloud Composer is now available in Osaka ( asia-northeast2 ).
July 24, 2020
Change
New versions of Cloud Composer images: composer-1.11.0-airflow-1.10.2 , composer-1.11.0-airflow-1.10.3 , composer-1.11.0-airflow-1.10.6 , and composer-1.11.0-airflow-1.10.9 . The default is composer-1.11.0-airflow-1.10.3 . Upgrade your Cloud SDK to use features in this release.
Feature
Airflow 1.10.9 is now supported.
Environment upgrades have been enabled for the latest two Composer versions (1.11.0 and 1.10.6).
Added a retry feature to the Airflow CeleryExecutor (disabled by default). You can configure the number of times Celery will attempt to execute a task by setting the [celery] max_command_attempts property. The delay between each retry can also be adjusted with [celery] command_retry_wait_duration (default: 5 seconds).
Fixed
New PyPi packages have been added for Composer version composer-1.11.0-airflow-1.10.6 . These make it possible to install apache-airflow-backport-providers-google with no additional package upgrades.
The PyPi package google-cloud-datacatalog can now be installed on Composer environments running Airflow 1.10.6 and Python 3.
Fixed synchronization of environment variables to the web server.
Improved error reporting when PyPI package installation fails.
Deprecated
Composer versions 1.6.1, 1.7.0, and 1.7.1 are now deprecated.
July 07, 2020
Fixed
Fixed an issue with Airflow 1.10.6 environments where task logs were not visible in the UI when DAG serialization was enabled.
It is now possible to upgrade from Composer versions 1.1.1, 1.2.0, 1.3.0, 1.4.0, 1.4.1, 1.4.2, 1.5.0, and 1.5.2 to the newest version.
Fixed a misleading red environment health status bar when the [core]logging_level Airflow property is set to DEBUG .
Change
New versions of Cloud Composer images: composer-1.10.6-airflow-1.10.2 , composer-1.10.6-airflow-1.10.3 and composer-1.10.6-airflow-1.10.6 . The default is composer-1.10.6-airflow-1.10.3 . Upgrade your Cloud SDK to use features in this release.
For Airflow 1.10.6 and later: The Airflow config property [celery] pool is now blocked.
The [core]sql_alchemy_pool_recycle Airflow setting has been modified to improve SQL connection reliability.
June 30, 2020
Feature
Cloud Composer support for VPC Service Controls is now in Beta.
June 24, 2020
Change
New versions of Cloud Composer images: composer-1.10.5-airflow-1.10.2 , composer-1.10.5-airflow-1.10.3 and composer-1.10.5-airflow-1.10.6 . The default is composer-1.10.5-airflow-1.10.3 . Upgrade your Cloud SDK to use features in this release.
Feature
Composer now uses the Kubernetes v1 API, and is compatible with GKE 1.16
An updated haproxy configuration for Composer increases the maximum number of connections to 2000, and changes load balancing to be based on the number of connections. These settings can be configured with environment variables.
Fixed
Error messages for TP_APP_ENGINE_CREATING timeout and RPC delivery issues have been expanded.
Airflow Providers can now be installed inside Cloud Composer.
Error handling for rendering templates in the Airflow web server UI has been improved.
Fixed an issue with rendering task instance details (logs, task instance template, params) in the Airflow web server UI when DAG serialization is enabled.
Fixed an issue with DataFlowJavaOperator , so it can now be used with Apache Beam 2.20.
Improved error reporting for failing operations.
Memory consumption of the gcs-syncd container is now constrained to prevent system instability.
May 31, 2020
Feature
Cloud Composer is now available in Seoul ( asia-northeast3 ).
May 26, 2020
Change
New versions of Cloud Composer images: composer-1.10.4-airflow-1.10.2 , composer-1.10.4-airflow-1.10.3 and composer-1.10.4-airflow-1.10.6 . The default is composer-1.10.4-airflow-1.10.3 . Upgrade your Cloud SDK to use features in this release.
For Airflow 1.10.6 and later: The Airflow config property [celery] pool is now blocked.
Fixed
Fixed an issue with Airflow 1.10.6 environments where task logs were not visible in the UI when DAG serialization was enabled.
May 15, 2020
Change
New versions of Cloud Composer images: composer-1.10.3-airflow-1.10.2 , composer-1.10.3-airflow-1.10.3 and composer-1.10.3-airflow-1.10.6 . The default is composer-1.10.3-airflow-1.10.3 . Upgrade your Cloud SDK to use features in this release.
Feature
Resource quota limits have been updated, allowing environment administrators to set quotas with more granularity. The default quotas for read and write operations have also changed; see Cloud Composer resource quotas for details. The old limits are deprecated, but will not be removed from the Cloud Console Quotas page until a future release.
Change
The machine type of the Airflow web server will now be preserved during Composer environment updates, including cases like new PyPi module installations, or adding new environment variables.
Synchronization of log files between the Airflow scheduler, web server and workers has been improved.
More useful error messages have been added for Composer environment upgrade failures.
Future change: Airflow 1.10.6 will become the default Airflow version for Composer environments in an upcoming release.
Deprecated
Composer version 1.6.1 has been deprecated.
May 08, 2020
Feature
Cloud Composer is now available in Hong Kong ( asia-east2 ).
Feature
Cloud Composer is now available in Las Vegas ( us-west4 ).
April 27, 2020
Change
New versions of Cloud Composer images: composer-1.10.2-airflow-1.10.2 , composer-1.10.2-airflow-1.10.3 and composer-1.10.2-airflow-1.10.6 . The default is composer-1.10.2-airflow-1.10.3 . Upgrade your Cloud SDK to use features in this release.
Fixed
Fixed an issue with the CloudSQL Proxy HealthCheck that caused the Proxy Pod to restart repeatedly.
The fluentd spec for in-cluster build log exporting now correctly points to the production fluentd image from cloud-airflow-releaser . This fix is required for Composer to correctly perform in-cluster builds for VPC SC configuration.
Adjusted ImageBuilder to fix PyPI package installation issues when using VPC SC.
Fixed intermittent issues with airflow-monitoring during the initialization phase.
Fixed an issue that caused the Airflow scheduler and worker pods to take ~10 minutes to terminate.
Fixed an issue with upgrading the image version and improved error handling during Composer environment upgrades.
Deprecated
The oldest supported version of Composer is now composer-1.6.0-airflow-x.x.x
April 17, 2020
Breaking
Composer version 1.10.1 has been rolled back. If you created an environment with composer-1.10.1-airflow-* , you can retrieve and delete the environment, but not update it. We recommend that you delete the environment and create a new environment with the latest image version. Refer to the March 20, 2020 release notes for default version.
April 10, 2020
Feature
Private IP Composer environments are now generally available (GA). See Configuring private IP to learn how to use this feature.
Feature
Support for Shared VPC networks is now generally available (GA).
April 05, 2020
Feature
Cloud Composer is now available in Salt Lake City ( us-west3 ).
March 31, 2020
Feature
The new Composer monitoring dashboard
is now in beta.
March 23, 2020
Feature
Cloud Composer is now available in Sao Paulo ( southamerica-east1 ).
March 20, 2020
Change
New versions of Cloud Composer images: composer-1.10.0-airflow-1.10.2 , composer-1.10.0-airflow-1.10.3 and composer-1.10.0-airflow-1.10.6 . The default is composer-1.10.0-airflow-1.10.2 . Upgrade your Cloud SDK to use features in this release.
Feature
Improved Composer logs: Composer Agent adds more detailed logs in Cloud Monitoring to describe the current stage of environment creation and provide better error messages if an operation fails.
MySQL passwords are now stored in Kubernetes Secrets instead of the config map.
You can now set the core.store_serialized_dags property to False after setting it to True . (Previously it was not possible to switch back.)
Composer now uses Pip version 19.0.2 for both Python 2 and Python 3 Airflow environments.
Added the Airflow property core.store_dag_code , which lets you see DAG code in the web UI while VPC-SC is enabled.
New metrics have been added to the monitoring API. See the full list here .
Fixed
Fixed an issue where Airflow database connection errors did not propagate correctly.
Logs from the Composer Agent will now show the correct severity level in Cloud Monitoring.
Fixed an issue where network tags added to environments did not propagate to the node pools created during the in-cluster image building.
The Composer Agent will now wait for env_vars to be sent before starting the web server.
Backported a fix for SQL proxy, which improves the stability of SQL connections inside workers.
Added new scripts to handle synchronization of files from Customer Project buckets with tenant project buckets in DRS mode, so that DAG synchronization is not affected by long-running logs synchronization.
Fixed an issue that prevented the creation of environments in the same VPC but different regions.
Fixed an issue with updating the node count for Composer environments running versions 1.6.0 to 1.8.2.
Installing PyPI packages from private repositories in the public Internet (specified in the pip.conf file) now works in private IP Composer environments without having to configure Cloud NAT.
March 09, 2020
Feature
You can now control access to the Airflow web server, either allowing access from any IP address (default), or specifying which IP ranges have access. For details, see Creating environments .
February 28, 2020
Change
New versions of Cloud Composer images: composer-1.9.2-airflow-1.10.1 , composer-1.9.2-airflow-1.10.2 , composer-1.9.2-airflow-1.10.3 and composer-1.9.2-airflow-1.10.6 . The default is composer-1.9.2-airflow-1.10.2 . Upgrade your Cloud SDK to use features in this release.
Feature
(Beta) You can now create private IP Cloud Composer environments that are configured for Shared VPC .
Fixed
Fixed an issue with updating Composer environments running versions 1.6.0 to 1.8.2. Updating the node count for an environment is still broken, and will be fixed in a future version.
Workaround: To resize the cluster for an environment using version 1.6.0 - 1.8.2, resize the default node pool in the cluster directly through GKE interface, or delete the Composer environment and recreate it with a different node count.
Fixed an issue with the Dataflow Python hook for Airflow 1.10.6 that restricted it to using Python 2. Dataflow will now use the same Python version as the Composer environment.
February 25, 2020
Change
New versions of Cloud Composer images: composer-1.9.1-airflow-1.10.1 , composer-1.9.1-airflow-1.10.2 , composer-1.9.1-airflow-1.10.3 and composer-1.9.1-airflow-1.10.6 . The default is composer-1.9.1-airflow-1.10.2 . Upgrade your Cloud SDK to use features in this release.
Fixed
Fixed an issue where updating environment variables cleared the stored Fernet key.
Fixed an issue with running DAGs via the Airflow 1.10.2 REST API when dag_serialization is turned on.
Fixed an issue with environment creation for Composer versions 1.6.0 to 1.8.2 when using GKE version 1.14.
Improved the health check functionality for SQLProxy.
February 13, 2020
Change
New versions of Cloud Composer images: composer-1.9.0-airflow-1.10.1 , composer-1.9.0-airflow-1.10.2 , composer-1.9.0-airflow-1.10.3 and composer-1.9.0-airflow-1.10.6 . The default is composer-1.9.0-airflow-1.10.2 . Upgrade your Cloud SDK to use features in this release.
Feature
Airflow 1.10.6 is now available for Composer.
Change
Python 3 is now the default version for new Composer environments.
Airflow 1.9.0 is no longer supported for new Composer environments.
Fixed
Fixed BigQuery operators for Python 3 in Airflow 1.10.6.
Fixed a bug where some deserialized tasks had no start_date in Airflow 1.10.6.
The Fernet Key is now stored in Kubernetes Secrets instead of the Config Map.
Workers now wait until they have synced with the dags folder before executing tasks.
New items have been added to the Airflow security properties blocklist in airflow.cfg: webserver-auth_backend and scheduler-auth_backend .
Fixed a rare bug where Airflow workers tried to execute tasks before the DAG code was synced to the Airflow worker volume.
Deprecated
Composer is planning to deprecate support for Airflow 1.10.1.
In the near future it will not be possible to create Composer environments for Python 2 from the user interface. You will still be able to create Python 2 environments using gcloud.
January 31, 2020
Change
New versions of Cloud Composer images: composer-1.8.4-airflow-1.9.0 , composer-1.8.4-airflow-1.10.1 , composer-1.8.4-airflow-1.10.2 , and composer-1.8.4-airflow-1.10.3 . The default is composer-1.8.4-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Fixed
Deprecation policy update: It is no longer possible to create environments with image versions older than 1 year. Currently the oldest version allowed is composer-1.4.1.
The Python version for Dataflow Operators is no longer hard-coded. Composer users can now use Dataflow Operators with Python 2 and 3. (Airflow 1.10.3 only.)
Fixed an issue with App Engine health check errors when creating environments with Composer version 1.7.5 or lower.
The airflow_home configuration parameter is no longer added to airflow.cfg if using Airflow version 1.10.3 or greater.
Airflow 1.10.2 is now the default version used for new Composer environments when Airflow version is not specified.
December 16, 2019
Change
New versions of Cloud Composer images: composer-1.8.3-airflow-1.9.0 , composer-1.8.3-airflow-1.10.1 , composer-1.8.3-airflow-1.10.2 , and composer-1.8.3-airflow-1.10.3 . The default is composer-1.8.3-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Feature
Composer now uses OpenAPI to manage components running on GKE clusters. This ensures Composer will be compatible with future versions of GKE.
Fixed
Fixed the formatting for validation errors returned by the projects.locations.environments.create API method.
November 25, 2019
Change
New versions of Cloud Composer images: composer-1.8.2-airflow-1.9.0 , composer-1.8.2-airflow-1.10.1 , composer-1.8.2-airflow-1.10.2 , and composer-1.8.2-airflow-1.10.3 . The default is composer-1.8.2-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Fixed
Fixed an issue with triggering DAGs from the Web UI while DAG serialization is turned on (for Airflow 1.10.3).
CloudSQL Proxy should now use less CPU power.
November 18, 2019
Change
New versions of Cloud Composer images: composer-1.8.1-airflow-1.9.0 , composer-1.8.1-airflow-1.10.1 , composer-1.8.1-airflow-1.10.2 , and composer-1.8.1-airflow-1.10.3 . The default is composer-1.8.1-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Fixed
Fixed an issue that prevented upgrades from Airflow 1.10.2 to 1.10.3.
Fixed an issue with triggering DAGs from the Web UI while DAG serialization is turned on.
October 31, 2019
Feature
Cloud Composer is now available in Frankfurt ( europe-west3 ).
October 30, 2019
Change
New versions of Cloud Composer images: composer-1.8.0-airflow-1.9.0 , composer-1.8.0-airflow-1.10.1 , composer-1.8.0-airflow-1.10.2 , and composer-1.8.0-airflow-1.10.3 . The default is composer-1.8.0-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Feature
Added support for Apache Airflow 1.10.3.
Fixed
Fixed a DAG serialization issue in Airflow 1.10.2.
Fixed an issue with domain restricted sharing support.
October 18, 2019
Change
New versions of Cloud Composer images: composer-1.7.9-airflow-1.9.0 , composer-1.7.9-airflow-1.10.1 , and composer-1.7.9-airflow-1.10.2 . The default is composer-1.7.9-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Feature
Bucket Policy Only is now supported, and you will no longer need to disable it during Cloud Composer environment creation.
Support for Domain restricted sharing is now in Beta. See Creating environments to learn how to enable this feature.
Fixed
Improved automatic zone selection during environment creation.
Fixed an issue with Private IP setup during environment creation.
October 08, 2019
Change
New versions of Cloud Composer images: composer-1.7.7-airflow-1.9.0 , composer-1.7.7-airflow-1.10.1 , and composer-1.7.7-airflow-1.10.2 . The default is composer-1.7.7-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Feature
The ODBC Linux driver ( unixodbc-dev ) is now included by default in the Cloud Composer images.
jsonschema is now available as a Python dependency for DAG serialization.
Composer now ensures that you can only change the Airflow config [core] store_serialized_dags one way (from false to true).
Added default Airflow config and environment variables for DAG serialization.
Environment update timeout has been extended to facilitate migrating large databases.
Fixed
New environments will use regional buckets instead of multi-regional. Previously-created environments will continue to use multi-regional buckets.
Fixed an issue that sporadically caused Cloud Storage bucket synchronization to hang.
Fixed an issue where service account permission errors would overwrite other errors.
Fixed an issue that caused extraneous disk usage in the Airflow webserver.
September 20, 2019
Feature
Cloud Composer is now available in Zurich ( europe-west6 ).
September 12, 2019
Change
Note: This release has been rolled back. If you created an environment with composer-1.7.6-airflow-*, you can retrieve and delete the environment, but not update. We recommend that you delete the environment and create a new environment with the latest image version. Refer to the August 28, 2019, release note for default version.
Feature
The ODBC Linux driver ( unixodbc-dev ) is now included by default in the Cloud Composer images.
jsonschema is now available as a Python dependency for DAG serialization.
Change
New versions of Cloud Composer images: composer-1.7.6-airflow-1.9.0 , composer-1.7.6-airflow-1.10.1 , and composer-1.7.6-airflow-1.10.2 . The default is composer-1.7.6-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Fixed
New environments will use regional buckets instead of multi-regional. Previously-created environments will continue to use multi-regional buckets.
Fixed an issue that sporadically caused Cloud Storage bucket synchronization to hang.
Fixed an issue where service account permission errors would overwrite other errors.
Fixed an issue that caused extraneous disk usage in the Airflow webserver.
August 30, 2019
Feature
Cloud Composer is now available in Sydney ( australia-southeast1 ) and Montreal ( northamerica-northeast1 ).
August 28, 2019
Feature
Fixed unwanted error output from scheduler pod in Private IP Composer environments.
Improved reliability of Private IP environment creation in crowded IP address spaces.
Fixed an issue with asynchronous DAG loading when handling Unicode strings.
Fixed an issue that caused some environment deletion operations to fail.
Fixed an issue that sometimes prevented the liveness DAG from running when there were failed scheduler pods.
Improved error messages when corrupted Cloud Storage bucket permissions prevent operations from succeeding.
Reduced the latency of failed Python package updates when invalid packages are selected.
Backported AIRFLOW-4015 to support the GET dag_runs endpoint in Airflow 1.10.2.
Fixed an issue that caused image version upgrades to fail when the Airflow database was too large.
Change
New versions of Cloud Composer images: composer-1.7.5-airflow-1.9.0 , composer-1.7.5-airflow-1.10.1 , and composer-1.7.5-airflow-1.10.2 . The default is composer-1.7.5-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Change
Note: The August 22, 2019 , release has been rolled back, so this release supersedes the rollout dates and default version previously stated.
Change
Note: This Cloud Composer release has begun rolling out to supported regions . The rollout is scheduled to be completed on September 3, 2019, at which time composer-1.7.5-airflow-1.9.0 becomes the default Cloud Composer release for newly created environments in all regions.
August 22, 2019
Change
New versions of Cloud Composer images: composer-1.7.4-airflow-1.9.0 , composer-1.7.4-airflow-1.10.1 , and composer-1.7.4-airflow-1.10.2 . The default is composer-1.7.4-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Feature
Fixed unwanted error output from scheduler pod in Private IP Composer environments.
Improved reliability of Private IP environment creation in crowded IP address spaces.
Fixed an issue with asynchronous DAG loading when handling Unicode strings.
Fixed an issue that caused some environment deletion operations to fail.
Fixed an issue that sometimes prevented the liveness DAG from running when there were failed scheduler pods.
Improved error messages when corrupted Cloud Storage bucket permissions prevent operations from succeeding.
Reduced the latency of failed Python package updates when invalid packages are selected.
Backported AIRFLOW-4015 to support the GET dag_runs endpoint in Airflow 1.10.2.
Fixed an issue that caused image version upgrades to fail when the Airflow database was too large.
Change
Note: This release has been rolled back. If you created an environment with composer-1.7.4-airflow-* , you can retrieve and delete the environment, but not update. We recommend that you delete the environment and create a new environment with the latest image version. Refer to the August 28, 2019, release note for the rollout dates and default version.
August 14, 2019
Feature
This release contains only internal reliability improvements.
Change
New versions of Cloud Composer images: composer-1.7.3-airflow-1.9.0 , composer-1.7.3-airflow-1.10.1 , and composer-1.7.3-airflow-1.10.2 . The default is composer-1.7.3-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Change
Note: This Cloud Composer release has begun rolling out to supported regions . The rollout is scheduled to be completed on August 15, 2019, at which time composer-1.7.3-airflow-1.9.0 becomes the default Cloud Composer release for newly created environments in all regions.
June 21, 2019
Feature
Cloud Composer is now available in London ( europe-west2 ).
June 14, 2019
Change
Note: This Cloud Composer release has begun rolling out to supported regions . The rollout is scheduled to be completed on June 19, 2019, at which time composer-1.7.2-airflow-1.9.0 becomes the default Cloud Composer release for newly created environments in all regions.
Change
New versions of Cloud Composer images: composer-1.7.2-airflow-1.9.0 , composer-1.7.2-airflow-1.10.1 , and composer-1.7.2-airflow-1.10.2 . The default is composer-1.7.2-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
The Airflow configuration webserver-workers is now updatable. Available only in Airflow 1.10.2 and later.
Feature
Fixed an asynchronous DAG loading issue that prevented the Airflow web server from loading some DAGs. Available only in composer-1.7.2-airflow-1.10.2 versions and later.
Fixed an issue that caused image version upgrades to fail when migrating particularly large Airflow databases.
Fixed an issue that sometimes prevented data plane monitoring metrics from being reported in Stackdriver.
Fixed an issue that caused PyPI package installation to sometimes time out and fail.
May 28, 2019
Feature
Backported AIRFLOW-3143 to support auto-zone in DataprocClusterCreateOperator. Available only in composer-1.7.1-airflow-1.10.2 versions and later.
Added back the list of blocked Airflow configurations for Airflow 1.10.2.
Feature
To display DAGs faster and reduce potential downtime due to heavy DAG processing, Cloud Composer now supports asynchronous DAG loading in the Airflow web server. To enable, set the following Airflow configurations : [webserver]async_dagbag_loader=True and [webserver]worker_refresh_interval=3600 . Available only in composer-1.7.1-Airflow-1.10.2 versions and later.
Change
New versions of Cloud Composer images: composer-1.7.1-airflow-1.9.0 , composer-1.7.1-airflow-1.10.1 , and composer-1.7.1-airflow-1.10.2 . The default is composer-1.7.1-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
May 16, 2019
Feature
Added back the ping command-line utility to the default Cloud Composer managed Docker images.
Backported AIRFLOW-2715 AIRFLOW-2715 to fix the DataflowTemplateOperator region support issue. Available only in Airflow 1.10.2 versions and later.
Fixed an issue that prevented in-place upgrades when the environment service account had only the roles/composer.worker role.
Backported fixes for CVE-2019-0216 and CVE-2019-0229 .
Fixed an issue that caused some environment deletion operations to fail.
Fixed an issue that could cause Cloud Composer workloads to leak into the node pools added for KubernetesPodOperator workloads.
Fixed an issue in which the airflow_db connection did not work correctly for some environments.
Fixed an issue that prevented upgrading a Private IP Cloud Composer environment.
Feature
Cloud Composer now supports Private Python package repositories . Available only in composer-1.7.0-* and later versions.
Added support for Apache Airflow 1.10.2.
Added new health metrics in Stackdriver to monitor your environment: composer.googleapis.com/environment/healthy and composer.googleapis.com/environment/database_health
VPC Native support is now in beta.
Backported AIRFLOW-2747 to support explicit rescheduling of Airflow sensors. Available only in Airflow 1.10.2 versions and later.
Change
New versions of Cloud Composer images: composer-1.7.0-airflow-1.9.0 , composer-1.7.0-airflow-1.10.1 , and composer-1.7.0-airflow-1.10.2 . The default is composer-1.7.0-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
To prevent co-locating workers on the same node, improved Airflow worker pods scheduling.
When creating a Private IP Cloud Composer environment, the GKE master IP CIDR block no longer needs to be specified.
Starting from composer-1.7.0-* , Apache Airflow version 1.10.0 is no longer available for environment creation or in-place upgrade.
To protect your environment from security vulnerabilities, we recommend that you upgrade to the latest Cloud Composer version: composer-1.7.0-airflow.-1.x.y. Because Airflow 1.10.0 is no longer supported, also consider upgrading to Airflow 1.10.1.
April 04, 2019
Change
New versions of Cloud Composer images: composer-1.6.1-airflow-1.9.0 , composer-1.6.1-airflow-1.10.0 , and composer-1.6.1-airflow-1.10.1 . The default is composer-1.6.1-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Issue
Stackdriver Monitoring: In rare cases, a TRANSIENT_FAILURE connection error occurs when Cloud Composer writes metrics to Stackdriver Monitoring. Typically, the automatic retry is successful, but occasionally, the failure state persists for an extended period of time.
Feature
Stackdriver metrics for Cloud Composer is in beta. You can now use Stackdriver Monitoring to understand the performance and health of your Cloud Composer environments and examine Airflow metrics. Stackdriver is available for composer-1.6.0-airflow-1.9.0 and later versions.
April 03, 2019
Issue
Currently, you cannot perform an image version upgrade.
Currently, you cannot simultaneously create or delete two Cloud Composer environments on the same subnetwork if one of the two environments is a Private IP Cloud Composer environment.
You must wait until the first Cloud Composer environment is created before creating the second environment to avoid environment creation failures.
You must wait until the first Cloud Composer environment is deleted before deleting the second environment to avoid a GKE cluster resource leak. If the leak occurs, manually delete the GKE cluster for the Cloud Composer environment.
airflow_db connection: The airflow_db connection works only for the Airflow webserver. Workarounds are as follows:
Update the airflow_db connection's Host component to airflow-sqlproxy-service.default . This update breaks the ability to use the connection in the Airflow webserver's Ad Hoc Query page but is preferred for DAGs that rely on the airflow_db connection.
Create a new connection that mirrors the airflow_db connection but uses airflow-sqlproxy-service.default for the Host.
Change
New versions of Cloud Composer images: composer-1.4.2-airflow-1.9.0 and composer-1.4.2-airflow-1.10.0 .
Change
New versions of Cloud Composer images: composer-1.6.0-airflow-1.9.0 , composer-1.6.0-airflow-1.10.0 , and composer-1.6.0-airflow-1.10.1 . The default is composer-1.6.0-airflow-1.9.0 . Upgrade your Cloud SDK to use features in this release.
Feature
Increased the operation timeout from 20 to 30 minutes to fix the sporadic, premature PyPI dependency update timeout issue.
Feature
Private IP Cloud Composer environment is in beta. To isolate your workflows from the public internet, you can now assign only private IP ( RFC 1918 ) addresses to the managed Google Kubernetes Engine and Cloud SQL VMs in your Cloud Composer environment.
Image version upgrade is in beta. You can now perform an in-place upgrade on the Airflow version or Cloud Composer version that your environment runs.
Feature
Fixed the issue where max_active_runs and concurrency are not updated in the Airflow web UI DAG Details page when configurations are updated.
Fixed the failed KubernetesPodOperator and GkePodOperator when a task a runs longer than 1 hour due to authentication issues in the Kuberentes client.
March 20, 2019
Change
You can now configure Shared VPC in the Google Cloud Console.
March 11, 2019
Change
Note: The March 7, 2019, release has been rolled back, so this release supersedes the rollout dates and default version previously stated.
Feature
Backported the Apache Airflow fix for the SubDag failed by scheduler deadlock issue .
Fixed an issue where a DAG backfill could not be disabled on a per-DAG basis.
Feature
You can now access the Airflow web interface logs in Stackdriver Logging for Cloud Composer under airflow-webserver .
Change
New versions of Cloud Composer images: composer-1.5.2-airflow-1.9.0 , composer-1.5.2-airflow-1.10.0 , and composer-1.5.2-airflow-1.10.1 . The default is composer-1.5.2-airflow-1.9.0 .
For the Cloud SQL instance for Cloud Composer, the wait_timeout and interactive_timeout are reduced to 1800 seconds to enable a faster deadlock recovery if an idle SQL connection holds a database lock.
Added back the openssh-client package to the default Cloud Composer managed docker images.
March 07, 2019
Feature
You can now access the Airflow web interface logs in Stackdriver Logging for Cloud Composer under airflow-webserver .
Change
Note: This release has been rolled back. If you created an environment with composer-1.5.1-airflow-* , you can retrieve and delete the environment, but not update. We recommend that you delete the environment and create a new environment with the latest image version. Refer to the March 11, 2019, release note for the rollout dates and default version.
Change
New versions of Cloud Composer images: composer-1.5.1-airflow-1.9.0 , composer-1.5.1-airflow-1.10.0 , and composer-1.5.1-airflow-1.10.1 . The default is composer-1.5.1-airflow-1.9.0 .
For the Cloud SQL instance for Cloud Composer, the wait_timeout and interactive_timeout are reduced to 1800 seconds to enable a faster deadlock recovery if an idle SQL connection holds a database lock.
Added back the openssh-client package to the default Cloud Composer managed docker images.
Feature
Backported the Apache Airflow fix for the SubDag failed by scheduler deadlock issue .
Fixed an issue where a DAG backfill could not be disabled on a per-DAG basis.
February 06, 2019
Feature
Backported Airflow upstream fix for the broken Google Cloud connection in the DataflowJavaOperator and DataflowPythonOperator AIRFLOW-2009 in all Cloud Composer managed Airflow versions.
Backported Airflow upstream fixes for CVE-2018-20244: Stored XSS in Apache Airflow in all Cloud Composer managed Airflow versions (1.9.0, 1.10.0, 1.10.1).
Due to this vulnerability, we recommend that you upgrade to the latest Cloud Composer version.
Feature
Multi-version Apache Airflow support is now General Availability . You can select the Cloud Composer image version when you create a new environment without enabling Beta feature support.
You can now view available Cloud Composer image versions in all Cloud Composer interfaces.
Added support for Apache Airflow 1.10.1.
Change
New versions of Cloud Composer images: composer-1.5.0-airflow-1.9.0 , composer-1.5.0-airflow-1.10.0 , and composer-1.5.0-airflow-1.10.1
Increased the disk size for the Apache Airflow webserver from 10 to 20 GB.
We now install Airflow dependencies of "mysql" instead of "devel".
If your DAG uses dependencies that are available only in "devel", add the dependencies to your DAG as PyPI dependencies.
January 10, 2019
Feature
Added a Kubernetes pod liveness checker for the airflow-sqlproxy service to recover from the cloudsqlproxy process error.
December 19, 2018
Feature
Cloud Composer is now available in the Northern Virginia ( us-east4 ) region.
December 17, 2018
Change
New versions of Cloud Composer images: composer-1.4.1-airflow-1.9.0 and composer-1.4.1-airflow-1.10.0 .
The Airflow workers restart when a Celery concurrency configuration change is requested so that the change takes effect automatically.
The logs/ and data/ directories in Cloud Storage are mounted with file mode 755, enabling binaries to be placed in these directories and executed from Airflow.
The GCP_PROJECT environment variable is set to the Google Cloud Platform project ID in the Airflow webserver.
Feature
Fixed the broken Airflow webserver when DAG parsing times out on the webserver side.
Pinned the Airflow base Docker image tag for initial environment creation and future PyPI dependency installations.
November 26, 2018
Feature
GA launch of Python 3 support . Currently, the v1 API and the Google Cloud Console support GA Python 3 environment creation .
Change
New versions of Cloud Composer images: composer-1.4.0-airflow-1.9.0 and composer-1.4.0-airflow-1.10.0 .
Feature
Fixed the Stackdriver logging severity level for airflow-sqlproxy and improved the labeling of logs.
Fixed boundless HTTP header growth in the set_user_agent googleapiclient methods in 1.10.0 images.
October 24, 2018
Feature
Multi-version Apache Airflow support is now in Beta . You can choose from multiple versions of Airflow when creating a new Cloud Composer environment. Multiple versions of Airflow can run in the same Google Cloud project simultaneously.
Cloud Composer is now available in the Mumbai ( asia-south1 ) region.
The Cloud Composer now displays in the top-right banner of the Airflow webserver UI.
Change
New versions of Cloud Composer images: composer-1.3.0-airflow-1.9.0 and composer-1.3.0-airflow-1.10.0 .
October 02, 2018
Change
New version of the Cloud Composer image: composer-1.2.0-airflow-1.9.0 .
To reduce potential scheduling delays due to DAG processing, the scheduler restart behavior is now time based (every 600 seconds), not run based.
Feature
Support for Python 3 is now in Beta You can create Python 3 Cloud Composer environments and run Python 2 and Python 3 environments in the same Google Cloud project simultaneously. Currently, the v1beta1 API and Google Cloud Console support Python 3 environment creation.
For composer-1.2.0 environments, some commands in Python 2 Composer environments might run under the Python 3 runtime. Operators should explicitly specify python2 to ensure that commands run under Python 2. For more info, see PEP 394.
September 17, 2018
Change
New version of the Cloud Composer image: composer-1.1.1-airflow-1.9.0 .
The following Airflow configurations are now updatable: core-dag_concurrency, core-parallelism, core-max_active_runs_per_dag, and scheduler-max_threads.
August 17, 2018
Feature
Support for GKE Shared VPC is now in Beta. For information about Cloud Composer configuration, see Creating Environments .
Added the following Airflow updates:
Backported network, subnetwork, and tags support in DataprocClusterCreateOperator to create Cloud Dataproc clusters in user-specified subnetworks.
Backported GKEPodOperator to enable launching Kubernetes pods in GKE clusters that are accessible from Google Cloud connections.
Feature
Fixed the following Airflow issues:
Fixed the issue where the DataFlowJavaOperator and the DataFlowPythonOperator might run continually due to a job name mismatch.
Fixed a rare scheduler bug where the Airflow scheduler freezes by restarting the scheduler if its Stackdriver logs are old.
Change
New version of the Cloud Composer image: composer-1.1.0-airflow-1.9.0 .
Cloud Composer environments running composer-1.0.0 or later now have GKE cluster auto-upgrade enabled by default.
Introduced additional liveness monitoring for the Cloud Composer Stackdriver fluentd agent.
July 19, 2018
Feature
Fixed the following Airflow issues:
Fixed the issue where Airflow tasks were stuck in queued or running states for extended periods of time before failing.
Fixed the Airflow web interface crashlooping issue that resulted from statsd exceptions.
Revised the Airflow web interface message when the TaskInstance RUN button is clicked. Note that the task instance restarts automatically if the DAG is running and its dependencies are met.
Change
New version of the Cloud Composer image: composer-1.0.0-airflow-1.9.0 .
Cloud Composer environments running composer-1.0.0 or later can now launch Cloud Dataflow jobs in supported Cloud Dataflow regions .
Added the option to modify some celery configurations .
Feature
GA launch of Cloud Composer.
Cloud Composer is now available in the following regions:
asia-northeast1
us-east1
Revamped Stackdriver Logging as follows:
Stackdriver Logging now based on fluentd and now includes composer-agent , airflow-redis , and airflow-sqlproxy logs.
Exposed the Airflow worker and scheduler container logs in Stackdriver Logging, including exceptions and stderr.
Disabled Logging for Google Kubernetes Engine to avoid duplicate logging in Stackdriver Logging.
The log format for some raw Airflow logs stored in Cloud Storage now include the delimiter string, dag-id, task-id, and execution date.
Added new Identity and Access Management roles .
The composer.environmentAndStorageObjectAdmin and composer.environmentAndStorageObjectViewer roles provide users the permissions necessary to access environments and objects in Cloud Storage buckets.
The composer.worker role provides service accounts the permissions necessary to run a Cloud Composer VM.
Added the following Airflow updates:
Backported the KubernetesPodOperator to enable launching Docker containers in Cloud Composer.
Added PARQUET source format support in bigquery_hook .
Backported the JDBC/DBAPI autocommit issue fix.
Fixed the Airflow documentation link in the Airflow web interface.
June 27, 2018
Change
New version of the Cloud Composer image: composer-0.5.3-airflow-1.9.0 .
Added requirement to include https://www.googleapis.com/auth/cloud-platform when specifying OAuth scopes during environment creation .
Improved health checking on Airflow to restart scheduler and worker pods if scheduled tasks are not queued or executed.
Improved messaging for create and update environment failures.
June 15, 2018
Feature
Audit logging is now available in Beta.
Feature
Fixed the BAD REQUEST error message for environment creation or deletion failures to provide information about the failures.
Change
New version of the Cloud Composer image: composer-0.5.2-airflow-1.9.0 .
Added OAuth scope configuration on the Google Cloud Platform Console Environment creation page
Increased the minimum disk size from 10 GB to 20 GB.
Improved error reporting.
Improved stability of the CeleryExecutor Redis message backend.
May 17, 2018
Change
New version of the Cloud Composer image: composer-0.5.1-airflow-1.9.0 .
Feature
Fixed permanent environment DELETE error that occurred when the Google Kubernetes Engine cluster is deleted or that occurred when in an error state prior to environment deletion.
Removed inapplicable "Failed to update environment from json" error message from worker/scheduler logs.
May 01, 2018
Feature
Beta launch of Cloud Composer ( composer-0.5.0-airflow-1.9.0 ). This release includes Apache Airflow 1.9.0.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
