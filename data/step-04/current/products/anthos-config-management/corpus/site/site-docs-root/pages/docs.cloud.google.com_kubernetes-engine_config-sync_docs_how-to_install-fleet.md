---
title: "Install Config Sync as a fleet default \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-fleet
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/install-fleet
  title: "Install Config Sync as a fleet default \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Guides
Send feedback
Install Config Sync as a fleet default
Stay organized with collections
Save and categorize content based on your preferences.
You can install Config Sync as a fleet default so that all new clusters
added to your fleet automatically have Config Sync enabled with the settings
that you want. By setting up fleet-level defaults, you help ensure that every new
GKE on Google Cloud cluster registered to the fleet inherits a
standard Config Sync setup, including the version and connections to your
source of truth. This process simplifies cluster provisioning and helps maintain a
uniform configuration management baseline.
This page explains the following:
How to configure these fleet-level default settings using the Google Cloud CLI, Google Cloud console, or Terraform.
How to apply default settings to existing clusters.
How to disable the fleet default configuration if needed.
For general information about fleet default configurations, see
Manage fleet-level features .
Before you begin
Before you install Config Sync, prepare your source of truth and a suitable cluster.
Grant Config Sync access to your source of truth
To synchronize configuration from a source of truth to your clusters,
Config Sync requires read-only access to your repository. To authorize
Config Sync to read your configurations, complete the following steps:
Create, or have access to, a source of truth that contains the configuration
files that you want Config Sync to sync to your clusters. For more information, see the
following resources:
Add configs to a source of truth : conceptual information about configurations.
GitOps best practices : tips and general best practices for organizing and managing your repository.
Use an unstructured repo : recommendations for using and organizing an unstructured repository.
If your source of truth is public, no further action is needed.
Config Sync doesn't require extra permissions.
If your source of truth is private, complete the instructions in one of the following pages:
Grant Config Sync access to Git .
Grant Config Sync access to OCI or Helm .
Review cluster requirements
Before you create a cluster, review
cluster requirements .
Limitations
Configuring Helm as a source type is not supported as a fleet default.
The Google Cloud console does not support connecting to a source of truth
as a default setting. Instead, you must use the Deploy packages feature
after creating a cluster.
Configure fleet-level defaults for a Git repository
To configure fleet-level defaults for Config Sync, complete the following
steps:
gcloud
Create a manifest named apply-spec.yaml with the following contents.
If you've already created a manifest, you don't need to create a new one.
applySpecVersion : 1
spec :
configSync :
enabled : true
sourceType : git
sourceFormat : unstructured
syncRepo : REPO
syncRev : REVISION
secretType : SECRET_TYPE
# only required if gcpserviceaccount is the secretType
# gcpServiceAccountEmail: EMAIL
metricsGcpServiceAccountEmail : METRICS_EMAIL
preventDrift : false
Replace the following:
REPO : the URL of your Git repository, for example https://github.com/GoogleCloudPlatform/anthos-config-management-samples .
Use the HTTPS format for the URL, or the SSH format if ssh is the sourceType.
REVISION : the Git revision (tag or hash) or branch name
to sync from. When using a hash, it must be a full hash, and not an abbreviated form.
SECRET_TYPE : the authentication method used to connect to
your Git repository. For public repositories, use none . For private repositories,
use one of the following:
ssh : use an SSH key pair.
cookiefile : use a cookiefile .
token : use a token.
gcpserviceaccount : use a Google service account if Workload Identity Federation for GKE is enabled. Secure Source Manager or Cloud Source Repositories only.
gcenode : use a Google service account if Workload Identity Federation for GKE is not enabled. Secure Source Manager or Cloud Source Repositories only.
githubapp : use a GitHub App to authenticate to a GitHub repository.
For more information about connecting your Git repository to Config Sync,
see Grant Config Sync access to Git .
EMAIL : if gcpserviceaccount is the secretType , uncomment this field and add the Google service
account email address, for example config-sync@PROJECT_ID.iam.gserviceaccount.com .
METRICS_EMAIL : the email of the Google Cloud
Service Account (GSA) used for exporting Config Sync metrics to
Cloud Monitoring. For more information on setting up metrics export,
see Monitor Config Sync .
For a complete list of fields that you can add to the apply-spec manifest,
see gcloud apply spec fields .
Apply the apply-spec file with your default fleet settings by running
the following command:
gcloud beta container fleet config-management enable \
--fleet-default-member-config = apply-spec.yaml
Console
In the Google Cloud console, go to the Feature Manager page.
Go to Feature Manager
In the Config Sync pane, click Configure .
Review your fleet-level settings. All new clusters that you create in the fleet
inherit these settings.
Optional: To change the default settings, click Customize fleet settings .
In the dialog that appears, do the following:
Select the Config Sync version that you want to use.
Click Save changes .
Click Configure .
In the Configuring fleet settings confirmation dialog, click Confirm .
If you haven't previously enabled Config Sync, clicking Confirm also
enables the anthosconfigmanagement.googleapis.com API.
Although you can't configure your source of truth settings
as a fleet default from the Google Cloud console, you can select multiple
clusters when you use the Deploy a package feature.
Terraform
To enable Config Sync as a fleet default, refer to the following example:
resource "google_gke_hub_feature" "default" {
name = "configmanagement"
location = "global"
fleet_default_member_config {
configmanagement {
config_sync {
# The field `enabled` was introduced in Terraform version 5.41.0, and
# needs to be set to `true` explicitly to install Config Sync.
enabled = true
git {
sync_repo = " REPO "
sync_branch = " BRANCH "
policy_dir = " DIRECTORY "
secret_type = " SECRET "
}
}
}
}
}
Replace the following:
REPO : the URL to the Git repository that contains your configuration files.
BRANCH : the repository branch, for example main .
DIRECTORY : the path within the Git repository that represents the top level of the repository you want to sync.
SECRET : the secret auth type.
For more information about using Terraform, see
Provision Config Sync resources with Terraform .
Configure fleet-level defaults for an OCI image
To configure fleet-level defaults for Config Sync, complete the following
steps:
gcloud
Create a manifest named apply-spec.yaml with the following contents.
If you've already created a manifest, you don't need to create a new one.
applySpecVersion : 1
spec :
configSync :
enabled : true
sourceType : oci
sourceFormat : unstructured
syncRepo : REPO
secretType : SECRET_TYPE
# only required if gcpserviceaccount is the secretType
# gcpServiceAccountEmail: EMAIL
metricsGcpServiceAccountEmail : METRICS_EMAIL
preventDrift : false
Replace the following:
REPO : the URL of your OCI image with the format
LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY_NAME / PACKAGE_NAME .
By default, the image is pulled from the latest tag, but you can
pull in images by TAG or DIGEST instead. Specify TAG or DIGEST
in the PACKAGE_NAME :
To pull by TAG : LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY_NAME / PACKAGE_NAME :TAG
To pull by DIGEST : LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY_NAME / PACKAGE_NAME @sha256:DIGEST
Caution: Config Sync requires that the OCI layer is compressed in
the tar or tar+gzip format. Other formats
(for example, tar+bz2 ) aren't recognized by Config Sync.
Switching from a valid repository to an OCI image with an unsupported format
causes managed resources to be pruned without an error.
SECRET_TYPE : the authentication method used to
connect to your OCI image. For public images, use none as the value.
For private images, use one of the following:
gcpserviceaccount : Secure Source Manager or Cloud Source Repositories only. Use a Google service account if Workload Identity Federation for GKE is enabled.
gcenode : Secure Source Manager or Cloud Source Repositories only. Use a Google service account if Workload Identity Federation for GKE is not enabled.
For more information on connecting your OCI image to Config Sync,
see Grant Config Sync access to OCI or Helm .
EMAIL : if gcpserviceaccount is the secretType , uncomment this field and add the Google service
account email address, for example config-sync@PROJECT_ID.iam.gserviceaccount.com .
METRICS_EMAIL : the email of the Google Cloud
Service Account (GSA) used for exporting Config Sync metrics to
Cloud Monitoring. For more information on setting up metrics export,
see Monitor Config Sync .
For a complete list of fields that you can add to the apply-spec manifest,
see gcloud apply spec fields .
Apply the apply-spec file with your default fleet settings by running
the following command:
gcloud beta container fleet config-management enable \
--fleet-default-member-config = apply-spec.yaml
Console
In the Google Cloud console, go to the Feature Manager page.
Go to Feature Manager
In the Config Sync pane, click Configure .
Review your fleet-level settings. All new clusters you create in the fleet
inherit these settings.
Optional: To change the default settings, click Customize fleet settings .
In the dialog that appears, do the following:
Select the Config Sync version that you want to use.
Click Save changes .
Click Configure .
In the Configuring fleet settings confirmation dialog, click Confirm .
If you haven't previously enabled Config Sync, clicking Confirm also
enables the anthosconfigmanagement.googleapis.com API.
Although you can't configure your source of truth settings
as a fleet default from the Google Cloud console, you can select multiple
clusters when you use the Deploy a package feature.
Terraform
To enable Config Sync as a fleet default, refer to the following example:
resource "google_gke_hub_feature" "configmanagement_feature_member" {
name = "configmanagement"
location = "global"
fleet_default_member_config {
configmanagement {
config_sync {
# The field `enabled` was introduced in Terraform version 5.41.0, and
# needs to be set to `true` explicitly to install Config Sync.
enabled = true
oci {
sync_repo = " REPO "
policy_dir = " DIRECTORY "
secret_type = " SECRET "
}
}
}
}
}
Replace the following:
REPO : the URL to the OCI image repository that contains your configuration files.
DIRECTORY : the absolute path of the directory containing the resources you want to sync. To use the root directory, leave this field blank.
SECRET : the secret auth type.
For more information about using Terraform, see
Provision Config Sync resources with Terraform .
Update existing clusters to inherit fleet defaults
To update existing clusters to use your default Config Sync settings, you
can use the Google Cloud console or gcloud CLI to sync selected fleet
clusters to your fleet defaults. Alternatively, you can manually configure each
cluster with the same settings by using Terraform and following the instructions for
installing Config Sync in the previous section. If you previously used
Terraform to specify fleet defaults, use the same configmanagement and
config_sync block that you used to set the defaults to configure your chosen
clusters.
To sync Config Sync default settings across your fleet, follow these steps:
gcloud
Sync an existing membership to the fleet default configuration:
gcloud beta container fleet config-management apply \
--origin = FLEET \
--membership = MEMBERSHIP_NAME
Replace MEMBERSHIP_NAME with the fleet membership name
of the cluster that you want to sync with the fleet default configuration.
Confirm that your membership configurations are synced with the fleet default:
gcloud beta container fleet config-management status
The output of this command should display as Yes for the Synced_to_Fleet_Default status
of the membership that you synced.
console
Go to Feature Manager :
Go to Feature Manager: Config Sync
In the cluster table, select the clusters that you want to sync to fleet settings.
Click Sync to fleet settings .
Disable fleet defaults
To disable Config Sync default settings across your fleet, follow these
steps:
To disable the fleet default configuration, run the following command:
gcloud beta container fleet config-management disable --fleet-default-member-config
Confirm that the fleet default configuration is disabled:
gcloud beta container fleet config-management status
What's next
Learn how to upgrade Config Sync .
Discover how to configure syncing from multiple repositories .
Use the nomos command .
Review the Default Config Sync permissions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
