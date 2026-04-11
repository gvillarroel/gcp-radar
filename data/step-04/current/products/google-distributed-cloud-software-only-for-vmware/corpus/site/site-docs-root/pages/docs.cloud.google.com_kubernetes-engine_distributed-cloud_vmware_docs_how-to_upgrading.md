---
title: "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading
  title: "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Upgrade a cluster
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to upgrade clusters in Google Distributed Cloud
(software only) for VMware. This document provides the steps for upgrading your
admin workstation, user clusters, and admin clusters. The steps for upgrading
a user cluster show how to upgrade the control plane and all node pools. If
you want to upgrade the user cluster control plane and node pools separately,
see Upgrade node pools .
This page is for IT administrators and Operators who manage the
lifecycle of the underlying tech infrastructure. To learn more about common
roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Before you proceed, we recommend that you review the following documentation:
Upgrade overview
Among other things, this document describes the supported version skew and
version rules for upgrades, which have changed for 1.28 and later.
Upgrade best practices
This document provides checklists and best practices for upgrading clusters.
Important: Make sure you have a current backup of the admin and user clusters
before starting the upgrade. For more information, see
Back up the user and admin cluster .
Advanced clusters differences
When
advanced clusters
are enabled, there are some differences with upgrades, particularly in the
preview of advanced clusters in version 1.31. To see the upgrade differences,
search this document for the word advanced . For a table of all differences,
see
Differences when running advanced clusters .
Automatic upgrade to advanced clusters
Note the following differences between versions:
When you upgrade your clusters from version 1.32 to 1.33, they are
automatically converted to
advanced clusters , which uses
improved architectures that provide greater flexibility and scalability. When
upgrading to version 1.33, you have the option to have the cluster remain
non-advanced. For details, see
Upgrade a version 1.32 non-advanced cluster and keep it as non-advanced .
cert-manager is automatically installed on advanced clusters.
When you migrate from a non-advanced cluster to an advanced cluster, the
cert-manager integrated with advanced clusters automatically overrides any
existing versions of cert-manager . Make sure you don't
have critical custom configurations or features in your existing
cert-manager before you update or upgrade to advanced
clusters. For more information, see Upgrade to cert-manager bundled with advanced clusters .
The following table lists the bundled cert-manager versions for each
version of Google Distributed Cloud (software only) for VMware.
Google Distributed Cloud (software only) for VMware
Bundled cert-manager version
1.33
1.18
1.34
1.19
Keeping a cluster as non-advanced is supported only for upgrades from version
1.32 to 1.33. When you upgrade a non-advanced cluster from version 1.33 to
1.34, the cluster is always converted to an advanced cluster.
You must use the gkectl command line tool to upgrade non-advanced clusters
to version 1.33. The GKE On-Prem API clients, Terraform, the
Google Cloud console, and the gcloud CLI aren't supported.
Ensure gkectl version : The gkectl version must be the same as
your target version. For example, if you are upgrading a 1.32 non-advanced
cluster to 1.33.0-gke.799 advanced cluster, the gkectl version must be
1.33.0-gke.799. This strict version requirement only applies during the
transition to an advanced cluster. For all subsequent upgrades on your
advanced cluster, the standard version skew rules are in effect.
Version skew not allowed : When upgrading from a non-advanced to an
advanced cluster, you cannot upgrade the control plane and node pools
separately. You must upgrade the control plane and all node pools to version
1.33 at the same time.
Caution: If an update or upgrade to admin clusters fails, don't
delete the external bootstrap cluster from the workstation. The bootstrap
cluster contains all states required to resume the update or upgrade. If you
need to re-run gkectl upgrade admin from a previous failure, you must add the
flag --reuse-bootstrap-cluster or -r . Failure to use this flag can cause a
severe issue where critical data is lost.
Requirements
This section provides information about version-related requirements and
requirements for using the GKE On-Prem API clients (the Google Cloud console, the
Google Cloud CLI, and Terraform) for upgrades.
Version rules
The rules for upgrades depends on the cluster minor version.
For versions 1.30 and lower, the user cluster minor version must be greater
than or equal to the admin cluster minor version. The patch version doesn't
matter. For example, if a user cluster is at version 1.30.1, the admin
cluster can be upgraded to a higher patch version, such as 1.30.3.
For versions 1.31 and higher, the admin cluster version, including the patch
version, must be greater than or equal to the user cluster version. For
example, if an admin cluster is at version 1.31.1, the highest version that
the user cluster can be upgraded to is 1.31.1.
When you want to upgrade your clusters to version 1.31, you must first bring all
your clusters to version 1.30. After all the clusters are at version 1.30, you
upgrade the admin cluster to version 1.31. After that, you can upgrade the user
clusters to the same 1.31 patch version as the admin cluster.
Version rules for gkectl
The version of gkectl that you can use for the upgrade depends on the target
cluster version (that is, the version of the cluster you are upgrading to).
Typically, you use the same version of gkectl as the cluster target version.
The following rules are enforced during the upgrade:
The gkectl version can't be a lower minor version than the target minor
cluster version. For example, if you are upgrading a 1.29 cluster to 1.30,
you can't use gkectl 1.29 since that is lower than the target cluster
version. Patch versions don't matter. For example, you can use gkectl
version 1.29.0-gke.1456 to upgrade to a higher patch version, such as
1.29.1000-gke.94.
The gkectl version can't be more than two minor versions higher than the
current cluster version. For example, if you are upgrading a 1.28 cluster to
1.29, the gkectl version can be 1.29 or 1.30. But you can't use gkectl
version 1.31 because that is three minor versions higher than the cluster
version.
If you are
upgrading the cluster to an advanced cluster ,
the gkectl version must be the same as your target version. For
example, if you are upgrading a 1.32 non-advanced cluster to 1.33.0-gke.799
advanced cluster, the gkectl version must be 1.33.0-gke.799.
Your cluster will be upgraded to advanced cluster by default in 1.33.
That means for 1.32 to 1.33 upgrades, the gkectl version must be the
same as the upgraded version.
This strict version requirement only applies during the transition to an
advanced cluster. For all subsequent upgrades on your advanced cluster,
the standard version skew rules are in effect.
If needed, see Download gkectl to
get a supported version of gkectl .
Review your firewall rules
In version 1.29 and later, server-side preflight checks are enabled by default.
Server-side preflight checks require additional firewall rules. In
Firewall rules for admin clusters ,
search for "Preflight checks" and make sure all required firewall rules
are configured.
With server-side preflight checks, when you upgrade a user cluster using
gkectl , the preflight checks are run on the admin cluster instead of locally
on the admin workstation. Server-side preflight checks are also run on the admin
cluster when you use the Google Cloud console, the Google Cloud CLI, or Terraform
to upgrade a cluster.
When you upgrade an admin cluster, Google Distributed Cloud deploys a
Kubernetes in Docker (kind) cluster to
temporarily host the Kubernetes controllers needed to upgrade the admin
cluster. This transient cluster is called a bootstrap cluster . Server-side
preflight checks are run on the bootstrap cluster when you upgrade an admin
cluster.
Enable stackdriver
If you created the user cluster using gkectl , before upgrading, make sure that
the
stackdriver
section in your user cluster configuration file is filled in, which enables
stackdriver (needed for logging and monitoring). If stackdriver isn't
enabled, fill in the stackdriver section in the user cluster configuration
file, and update the cluster before you
upgrade.
If you created the cluster using Terraform, the Google Cloud console, or the
gcloud CLI, stackdriver is automatically enabled.
Enable Dataplane V2
Dataplane V2 is required to be enabled on all user clusters as of version 1.31.
Before upgrading a user cluster to 1.31, perform the following steps. If you
have concerns about temporarily removing the NetworkPolicy specification,
contact Google Support.
Set
enableDataplaneV2
to true in your user cluster configuration file.
If your cluster is using a NetworkPolicy , temporarily remove its
specification from the cluster, as follows:
Check whether there's any non-system NetworkPolicy applied to your
cluster:
kubectl --kubeconfig USER_CLUSTER_KUBECONFIG get networkpolicy -A -o wide | grep -v kube-system
If the output of the prior step was not empty, save each NetworkPolicy
specification to a file so that you can reapply the specification after
upgrading the cluster.
kubectl --kubeconfig USER_CLUSTER_KUBECONFIG get networkpolicy NETWORK_POLICY_NAME -n NETWORK_POLICY_NAMESPACE -o yaml > NETWORK_POLICY_NAME .yaml
Replace the following:
NETWORK_POLICY_NAME : the name of the NetworkPolicy that you are saving.
NETWORK_POLICY_NAMESPACE : the namespace of the NetworkPolicy .
Delete the NetworkPolicy , using the following command:
kubectl --kubeconfig USER_CLUSTER_KUBECONFIG delete networkpolicy NETWORK_POLICY_NAME -n NETWORK_POLICY_NAMESPACE
Continue with the upgrade.
After the upgrade is complete, if you removed any non-system
NetworkPolicy specifications, then reapply them with this command:
kubectl --kubeconfig USER_CLUSTER_KUBECONFIG apply -f NETWORK_POLICY_NAME .yaml
Google API and IAM requirements
To upgrade a cluster to version 1.28 and later, you must enable
kubernetesmetadata.googleapis.com and grant the kubernetesmetadata.publisher
IAM role to the
logging-monitoring service account . These
changes are required to use Cloud Monitoring.
Enable kubernetesmetadata.googleapis.com :
gcloud services enable --project PROJECT_ID \
kubernetesmetadata.googleapis.com
Replace PROJECT_ID with the ID of the
fleet host project in which
the user cluster is a member. This is the project that you
specified when the cluster was created. If you created the cluster
using gkectl , this is the project ID in the gkeConnect.projectID
field in the cluster configuration file.
If your organization has set up
an allowlist that lets traffic from
Google APIs and other addresses pass through your proxy server, add
kubernetesmetadata.googleapis.com to the allowlist.
Grant the kubernetesmetadata.publisher role to the
logging-monitoring service account:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount: SERVICE_ACCOUNT_EMAIL " \
--role "roles/kubernetesmetadata.publisher"
Replace SERVICE_ACCOUNT_EMAIL with the email
address of your logging-monitoring service account.
Legacy features blocked on upgrades
The following legacy features are blocked during cluster upgrade to
version 1.32:
Dataplane V1 (Calico)
Integrated F5 Big IP load balancer configuration
Non-HA admin cluster
Kubeception user cluster
Seesaw load balancer
You must
migrate your clusters to recommended features
before upgrading to version 1.32.
IAM requirements for upgrading user clusters
Skip this section if you plan to use gkectl for the user cluster upgrade.
If you want to use the Google Cloud console, the Google Cloud CLI, or Terraform to
upgrade a user cluster, and you aren't a project owner, you must be granted the
Identity and Access Management role roles/gkeonprem.admin on the Google Cloud project that the
cluster was created in. For details on the permissions included in this role,
see
GKE on-prem roles
in the IAM documentation.
To use the console to upgrade the cluster, at a minimum, you also
need the following:
roles/container.viewer . This role lets users view the GKE
Clusters page and other container resources in the console. For
details about the permissions included in this role, or to grant a role with
read/write permissions, see
Kubernetes Engine roles
in the IAM documentation.
roles/gkehub.viewer . This role lets users view clusters in the
console. For details about the
permissions included in this role, or to grant a role with read/write
permissions,see
GKE Hub roles in the
IAM documentation.
Limitations with advanced clusters
Note the following limitations if you have
advanced clusters enabled :
When upgrading clusters from version 1.32 to 1.33, you must use gkectl . The GKE On-Prem API clients
(the console, the gcloud CLI, and Terraform) aren't
supported for this specific upgrade path but are supported for upgrades starting from version 1.33.
Only synchronous upgrades are supported.
Make configuration changes either before or after an upgrade
If you need to make configuration changes to your clusters, do the
cluster update either before or after
the upgrade. The only change to the cluster configuration for an upgrade should
be the version. Depending on the cluster version and type, other configuration
changes are either silently ignored or cause the upgrade to fail. For more
information see
Remove unsupported changes to unblock upgrade .
Check available versions for cluster upgrades
Run the following command to see which versions are available for upgrade:
gkectl version --kubeconfig ADMIN_CLUSTER_KUBECONFIG
Replace ADMIN_CLUSTER_KUBECONFIG with the path to the
admin cluster's kubeconfig file.
The output shows the current version and the versions available for upgrade.
If you plan to use the console, the gcloud CLI or
Terraform for the upgrade, it takes about 7 to 14 days after a release for the
version to be available in the GKE On-Prem API in all Google Cloud regions.
The console lists only the available versions for the user
cluster upgrade. The steps for upgrading a user cluster using the
gcloud CLI or Terraform include a step to run
gcloud container vmware clusters query-version-config to get available versions for the upgrade.
Upgrade your admin workstation
The way you upgrade your admin workstation depends on how you created it:
gkeadm
or
user-managed .
gkeadm
Locate required files
Before you created your admin workstation, you filled in an
admin workstation configuration file
that was generated by gkeadm create config . The default name for this file is
admin-ws-config.yaml .
In addition, your workstation has an information file. The default name of this
file is the same as the name of your admin workstation.
Locate your admin workstation configuration file and your information file. You
need them to do the upgrade steps. If these files are in your current
directory and they have their default names, then you won't need to specify
them when you run the upgrade commands. If these files are in
another directory, or if you have changed the filenames, then you specify them
by using the --config and --info-file flags.
If your output information file is missing, you can recreate it. See
Recreate an information file if missing .
Upgrade
To upgrade the admin workstation:
Check the adminWorkstation.diskGB field in the admin workstation
configuration file and make sure that the specified size is at least 100,
for example:
adminWorkstation:
diskGB: 100
When upgrading to 1.28 and higher, 100 GB is required, and the cluster
upgrade fails if the admin workstation doesn't have sufficient disk space.
From your jump server, download gkeadm :
gkeadm upgrade gkeadm --target-version TARGET_VERSION
Replace TARGET_VERSION with the version that you are
upgrading to. You need to specify a complete version number in the form of
X.Y.Z-gke.N. . For a list of the Google Distributed Cloud versions, see
Versioning .
Upgrade your admin workstation:
gkeadm upgrade admin-workstation --config AW_CONFIG_FILE \
--info-file INFO_FILE
Replace the following:
AW_CONFIG_FILE : the path of your admin workstation
configuration file. You can omit this flag if the file is in your current
directory and has the name admin-ws-config.yaml .
INFO_FILE : the path of your information file. You can omit
this flag if the file is in your current directory. The default name of this
file is the same as the name of your admin workstation.
User-managed
On your admin workstation, navigate to a directory where you want to install a
new version of gkectl .
Download gkectl :
gcloud storage cp gs://gke-on-prem-release/gkectl/ TARGET_VERSION /gkectl ./
chmod +x gkectl
Replace TARGET_VERSION with the version that you are
upgrading to. You need to specify a complete version number in the form of
X.Y.Z-gke.N. . For a list of the Google Distributed Cloud versions, see
Versioning .
Download the Google Distributed Cloud bundle. Make sure the version matches the
one you used to download gkectl :
gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ TARGET_VERSION /gke-onprem-vsphere- TARGET_VERSION .tgz ./
Upgrade the admin cluster
The steps for upgrading the admin cluster vary slightly depending on the
minor version you're upgrading to (the target version):
1.31 and higher
If the target version is 1.31 or higher, before you upgrade your user
clusters to the next minor version, you need to upgrade your admin cluster.
In 1.31 and higher, the admin cluster version, including the patch
version, must be greater than or equal to the user cluster version. For
example, if an admin cluster is at version 1.31.1, the highest version that
the user cluster can be upgraded to is 1.31.1.
Run the following command on your admin workstation to import OS images to
vSphere:
gkectl prepare \
--bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET_VERSION .tgz \
--kubeconfig ADMIN_CLUSTER_KUBECONFIG
Replace ADMIN_CLUSTER_KUBECONFIG with the path to the
admin cluster's kubeconfig file.
1.30 and lower
If the target version is 1.30 or lower, you must upgrade all your user
clusters before you upgrade your admin cluster. The admin cluster minor
version must be less than or equal to the user cluster minor version. The
patch version doesn't matter. For example, if a user cluster is at version
1.30.1, the admin cluster can be upgraded to a higher patch version, such as
1.30.3.
Before you begin:
If you are upgrading to version 1.13 or higher, you must first register the
admin cluster by filling out the gkeConnect section in the admin cluster
configuration file. Run the gkectl update cluster command with the configuration file changes.
Make sure your gkectl and clusters are the appropriate version for an
upgrade, and that you have downloaded the appropriate bundle. The version
skew between your admin and user clusters depends on the Google Distributed Cloud
version. To make sure you can upgrade your admin cluster, see
Admin and user cluster version skew .
Make sure the bundlepath field in the
admin cluster configuration file matches the path of the bundle to which you want to upgrade.
About cert-manager installation: cert-manager is
automatically installed on advanced clusters. When you migrate from a
non-advanced cluster to an advanced cluster, the integrated
cert-manager automatically overrides any
customer-installed versions of cert-manager . Make sure you don't
have critical custom configurations or features applied to
your existing cert-manager before you update or upgrade to advanced
clusters. For more information, see Upgrade to
cert-manager bundled with advanced clusters .
If you make any other changes to the fields in the admin cluster
configuration file, these changes are ignored during the upgrade. To make
those changes take effect, you must first upgrade the cluster, and then run
an update cluster command with the
configuration file changes to make other changes to the cluster.
Perform the upgrade
gkectl
Do the steps in this section on your admin workstation. There are two
variations of the gkectl upgrade admin command:
Asynchronous :
With the asynchronous variation, the command starts the upgrade and then
completes. You don't need to watch the output of the command for the entire
duration of the upgrade. Instead, you can periodically check on the upgrade
progress by running gkectl list admin and gkectl describe admin .
To use the asynchronous variation, include the --async flag in the
command.
Requirements for asynchronous upgrade:
Supported only for HA admin clusters with version 1.29 or higher.
All user clusters must have Controlplane V2 enabled.
Version 1.31: Not supported on advanced clusters.
Version 1.32 and higher: Available on advanced clusters.
Synchronous :
With the synchronous variation, the gkectl upgrade admin command outputs
status messages to the admin workstation as the upgrade progresses.
Note: The gkectl upgrade admin command accepts several optional flags. For
example, you could include the --skip-validation-infra flag to skip
checking of your vSphere infrastructure. To get information about the all
the flags you can use, run the command with only the -h flag.
Asynchronous upgrade
On your admin workstation, start an asynchronous upgrade:
gkectl upgrade admin \
--kubeconfig ADMIN_CLUSTER_KUBECONFIG \
--config ADMIN_CLUSTER_CONFIG_FILE \
--reuse-bootstrap-cluster \
--async
Replace the following:
ADMIN_CLUSTER_KUBECONFIG : the path to the
admin cluster's kubeconfig file.
ADMIN_CLUSTER_CONFIG_FILE : the path to the
admin cluster configuration file.
The preceding command completes, and you can continue to use your
admin workstation while the upgrade is in progress.
To see the status of the upgrade:
gkectl list admin --kubeconfig ADMIN_CLUSTER_KUBECONFIG
The output shows a value for the cluster STATE . If the cluster is still
upgrading, the value of STATE is UPGRADING . For example:
NAME STATE AGE VERSION
gke-admin-test UPGRADING 9h 1.34.200-gke.68
The possible values for STATE are RUNNING , UPGRADING , RECONCILING ,
ERROR , and UNKNOWN .
To get more details about the upgrade progress and cluster events:
gkectl describe admin --kubeconfig ADMIN_CLUSTER_KUBECONFIG
The output shows the OnPremAdminCluster custom resource for the specified
admin cluster, which includes cluster status, conditions, and events.
We record events for the start and end of each critical upgrade phase.
Example output:
Events:
Type Reason Age From Message
---- ------ ---- ---- -------
Normal ControlPlaneUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating admin cluster API Controller
Normal ControlPlaneMachineUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating control plane machine
Normal StatusChanged 40m onprem-admin-cluster-controller OnPremAdminCluster status changed:
- New ClusterState condition: UPGRADING
- New Ready condition: False, CreateOrUpdateControlPlaneMachine, Creating or updating control plane machine
Normal StatusChanged 2m onprem-admin-cluster-controller OnPremAdminCluster status changed:
- New ClusterState condition: RUNNING
- New Ready condition: True, ClusterRunning, Cluster is running
When the upgrade is complete, gkectl list admin shows a STATUS of
RUNNING :
NAME STATE AGE VERSION
gke-admin-test RUNNING 9h 1.34.200-gke.68
Also, when the upgrade is complete, gkectl describe admin shows a
Last GKE On Prem Version field under Status . For example:
Status:
Cluster State: RUNNING
Last GKE On Prem Version: 1.34.0-gke.1
Troubleshoot asynchronous upgrade
For an asynchronous upgrade, the timeout duration is based on the number of
nodes in the cluster. If the upgrade takes longer than the timeout duration,
the cluster state is changed from UPGRADING to ERROR , with an event saying
that the upgrade operation timed out. Note that the ERROR state here means
the upgrade is taking longer than expected, but has not been terminated. The
controller continues the reconciliation and keeps retrying the operation.
When an upgrade is blocked or fails, you can run
gkectl diagnose to check for
common cluster issues. Based on the result, you can decide whether to perform
a manual fix or contact Google Cloud Support
for further assistance.
Synchronous upgrade
Run the following command:
gkectl upgrade admin \
--kubeconfig ADMIN_CLUSTER_KUBECONFIG \
--config ADMIN_CLUSTER_CONFIG_FILE \
--reuse-bootstrap-cluster
Replace the following:
ADMIN_CLUSTER_KUBECONFIG : the path to the admin
cluster kubeconfig file.
ADMIN_CLUSTER_CONFIG_FILE : the path to the admin
cluster configuration file.
The gkectl upgrade command runs preflight checks. If the preflight checks
fail, the command is blocked. You must fix the failures or use the flag
--skip-preflight-check-blocking with the command to unblock it.
If you are upgrading to version 1.14.0 or higher, a new kubeconfig file is
generated for the admin cluster that overwrites any existing file. To view
cluster details in the file, run the following command:
kubectl config view --kubeconfig ADMIN_CLUSTER_KUBECONFIG
gcloud
Upgrade the admin cluster using the gcloud CLI.
Update the platform version to the target version:
gcloud container vmware admin-clusters update ADMIN_CLUSTER_NAME \
--location = REGION \
--required-platform-version = VERSION \
--async
Replace the following:
ADMIN_CLUSTER_NAME : the name of your admin cluster.
REGION : the Google Cloud region where the admin cluster is managed.
VERSION : the target version you are upgrading to.
This command returns an operation ID. You can monitor the progress using gcloud container vmware operations describe .
After you complete the platform version update, update the admin cluster version:
gcloud container vmware admin-clusters update ADMIN_CLUSTER_NAME \
--location = REGION \
--version = VERSION \
--async
This step completes the upgrade of the admin cluster to the target version.
Upgrade a user cluster
You can use gkectl , the console, the gcloud CLI, or
Terraform to upgrade a user cluster. For information on deciding which tool to
use, see
Choose a tool to upgrade user clusters .
gkectl
Prepare to upgrade a user cluster
Do the following steps on your admin workstation:
Do this step only if the TARGET_VERSION is 1.30 or
lower, or if you are upgrading the user cluster to a different version
from the admin cluster. Run gkectl prepare to import OS images to
vSphere:
gkectl prepare \
--bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET_VERSION .tgz \
--kubeconfig ADMIN_CLUSTER_KUBECONFIG
If your cluster has a Windows node pool, run gkectl prepare windows , and
update the osImage field for the node pool. For detailed instructions,
see
Upgrade user cluster with Windows node pools .
In the user cluster configuration file, set
gkeOnPremVersion
to the target version of your upgrade.
Run preflight checks
When upgrading to version 1.29 and higher, you can run the preflight checks
before upgrading a user cluster:
gkectl upgrade cluster \
--kubeconfig ADMIN_CLUSTER_KUBECONFIG \
--config USER_CLUSTER_CONFIG \
--dry-run
Replace USER_CLUSTER_CONFIG with the path to the user
cluster configuration file.
With the --dry-run flag, gkectl upgrade cluster runs the preflight checks
but doesn't start the upgrade process. Although earlier versions of
Google Distributed Cloud run preflight checks, they can't be run separately
from the upgrade. By adding the --dry-run flag, you can find and fix any
issues that the preflight checks find with your user cluster before the
upgrade.
Run gkectl upgrade cluster
There are two variations of the gkectl upgrade cluster command:
Asynchronous : (recommended)
With the asynchronous variation, the command starts the upgrade and then
completes. You don't need to watch the output of the command for the entire
duration of the upgrade. Instead, you can periodically check on the upgrade
progress by running gkectl list clusters and gkectl describe clusters .
To use the asynchronous variation, include the --async flag in the command.
Version 1.31: Not available on advanced clusters.
Version 1.32 and higher: Available on advanced clusters.
Synchronous :
With the synchronous variation, the gkectl upgrade cluster command outputs
status messages to the admin workstation as the upgrade progresses.
Asynchronous upgrade
Skip this step if you are upgrading to a version later than
1.16.
If you are using
prepared credentials
and a private registry
for the user cluster, make sure the private registry credential is
prepared before upgrading the user cluster. For information on how
to prepare the private registry credential, see
Configure prepared credentials for user clusters .
On your admin workstation, start an asynchronous upgrade:
gkectl upgrade cluster \
--kubeconfig ADMIN_CLUSTER_KUBECONFIG \
--config USER_CLUSTER_CONFIG \
--async
The preceding command completes, and you can continue to use your
admin workstation while the upgrade is in progress.
To see the status of the upgrade:
gkectl list clusters --kubeconfig ADMIN_CLUSTER_KUBECONFIG
The output shows a value for the cluster STATE . If the cluster is still
upgrading, the value of STATE is UPGRADING . For example:
NAMESPACE NAME READY STATE AGE VERSION
my-uc-gkeonprem-mgmt my-uc False UPGRADING 9h 1.34.0-gke.1
The possible values for STATE are PROVISIONING , UPGRADING , DELETING ,
UPDATING , RUNNING , RECONCILING , ERROR , and UNKNOWN .
To get more details about the upgrade progress and cluster events:
gkectl describe clusters --kubeconfig ADMIN_CLUSTER_KUBECONFIG \
--cluster USER_CLUSTER_NAME -v 5
The output shows the OnPremUserCluster custom resource for the specified user
cluster, which includes cluster status, conditions, and events.
We record events for the start and end of each critical upgrade phase,
including:
ControlPlaneUpgrade
MasterNodeUpgrade
AddonsUpgrade
NodePoolsUpgrade
Example output:
Events:
Type Reason Age From Message
---- ------ ---- ---- -------
Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool
Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads
Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready
Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running
When the upgrade is complete, gkectl list clusters shows a STATUS of
RUNNING :
NAMESPACE NAME READY STATE AGE VERSION
my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1
Also, when the upgrade is complete, gkectl describe clusters shows a
Last GKE On Prem Version field under Status . For example:
Status:
Cluster State: RUNNING
Last GKE On Prem Version: 1.34.0-gke.1
Troubleshoot asynchronous upgrade
For an asynchronous upgrade, the timeout duration is based on the
number of nodes in the cluster. If the upgrade takes longer than the timeout
duration, the cluster state is changed from UPGRADING to ERROR , with an
event saying that the upgrade operation timed out. Note that the ERROR state
here means the upgrade is taking longer than expected, but has not been
terminated. The controller continues the reconciliation and keeps retrying the
operation.
Usually a timeout is the result of a deadlock caused by a
PodDisruptionBudget (PDB). In that case, Pods cannot be evicted from old
nodes, and the old nodes cannot be drained. If the Pod eviction takes longer
than 10 minutes, we write an event to the OnPremUserCluster object. You can
capture the event by running gkectl describe clusters . Then you can adjust
the PDB to allow the node to drain. After that, the upgrade can proceed and
eventually complete.
Example event:
Warning PodEvictionTooLong 96s (x2 over 4m7s) onprem-user-cluster-controller
Waiting too long(>10m0.00000003s) for (kube-system/coredns-856d6dbfdf-dl6nz) eviction.
In addition, when an upgrade is blocked or fails, you can run gkectl diagnose to
check for common cluster issues. Based on the result, you can decide whether to
perform a manual fix or contact the Anthos support team for further assistance.
Synchronous upgrade
The gkectl upgrade command runs preflight checks. If the preflight checks
fail, the command is blocked. You must fix the failures, or use the
--skip-preflight-check-blocking flag. You should only skip the preflight
checks if you are confident there are no critical failures.
Proceed with these steps on your admin workstation:
Skip this step if you are upgrading to a version later than
1.16.
If you are using
prepared credentials
and a private registry
for the user cluster, make sure the private registry credential is
prepared before upgrading the user cluster. For information on how
to prepare the private registry credential, see
Configure prepared credentials for user clusters .
Upgrade the cluster:
gkectl upgrade cluster \
--kubeconfig ADMIN_CLUSTER_KUBECONFIG \
--config USER_CLUSTER_CONFIG
If you are upgrading to version 1.14.0 or higher, a new kubeconfig file is
generated for the user cluster that overwrites any existing file. To view
cluster details in the file, run the following command:
kubectl config view --kubeconfig USER_CLUSTER_KUBECONFIG
Resume an upgrade
If a user cluster upgrade is interrupted, you can resume the user cluster
upgrade by running the same upgrade command with the --skip-validation-all
flag:
gkectl upgrade cluster \
--kubeconfig ADMIN_CLUSTER_KUBECONFIG \
--config USER_CLUSTER_CONFIG \
--skip-validation-all
Console
Upgrading a user cluster requires some changes to the admin cluster. The
console automatically does the following:
Enrolls the admin cluster in the GKE On-Prem API
if it isn't already enrolled.
Downloads and deploys a bundle of components to the admin cluster. The
version of the components matches the version you specify for the upgrade.
These components let the admin cluster manage user clusters at that version.
To upgrade a user cluster:
In the console, go to the Google Kubernetes Engine clusters overview
page.
Go to GKE clusters
Select the Google Cloud project, and then select the cluster that you
want to upgrade.
In the Details panel, click More details .
In the Cluster basics section, click
edit Upgrade .
In the Choose target version list, select the version that you want to
upgrade to. The curated list contains only the latest patch releases.
Click Upgrade .
Before the cluster is upgraded, preflight checks run to validate cluster
status and node health. If the preflight checks pass, the user cluster is
upgraded. It takes about 30 minutes for the upgrade to complete.
To view the status of the upgrade, click Show Details on the Cluster
Details tab.
gcloud CLI
Upgrading a user cluster requires some changes to the admin cluster. The
the gcloud container vmware clusters upgrade command automatically does the
following:
Enrolls the admin cluster in the GKE On-Prem API
if it isn't already enrolled.
Downloads and deploys a bundle of components to the admin cluster. The
version of the components matches the version you specify for the upgrade.
These components let the admin cluster manage user clusters at that version.
To upgrade a user cluster:
Update the Google Cloud CLI components:
gcloud components update
Get a list of available versions to upgrade to:
gcloud container vmware clusters query-version-config \
--cluster= USER_CLUSTER_NAME \
--project= PROJECT_ID \
--location= REGION
The output of the command is similar to the following:
versions:
- version: 1.16.3-gke.45
- version: 1.16.2-gke.28
- version: 1.16.1-gke.45
- version: 1.16.0-gke.669
- version: 1.15.6-gke.25
- version: 1.15.5-gke.41
An Anthos version must be made available on the admin cluster ahead of the user
cluster creation or upgrade. Versions annotated with isInstalled=true are
installed on the admin cluster for the purpose of user cluster creation or
upgrade whereas other version are released and will be available for upgrade
once dependencies are resolved.
To install the version in the admin cluster, run:
$ gcloud container vmware admin-clusters update my-admin-cluster --required-platform-version=VERSION
You can ignore the message after the list of versions. It doesn't matter
if the version that you are upgrading to is installed on the admin
cluster. The upgrade command downloads and deploys a bundle of the
components that matches the version you specify in the upgrade command.
Upgrade the cluster.
gcloud container vmware clusters upgrade USER_CLUSTER_NAME \
--project= PROJECT_ID \
--location= REGION \
--version= VERSION
Replace VERSION with the Google Distributed Cloud
version that you want to upgrade to. Specify a version from the output of
the previous command. We recommend that you upgrade to the most recent
patch version.
The output from the command is similar to the following:
Waiting for operation [projects/example-project-12345/locations/us-west1/operations/operation-1679543737105-5f7893fd5bae9-942b3f97-75e59179] to complete.
In the example output, the string operation-1679543737105-5f7893fd5bae9-942b3f97-75e59179
is the OPERATION_ID of the long-running operation.
You can find out the status of the operation by running the following
command in another terminal window:
gcloud container vmware operations describe OPERATION_ID \
--project= PROJECT_ID \
--location= REGION
Terraform
Update the Google Cloud CLI components:
gcloud components update
If you haven't already,
enroll the admin cluster in the GKE On-Prem API .
After the cluster is enrolled in the GKE On-Prem API, you don't need to
do this step again.
Get a list of available versions to upgrade to:
gcloud container vmware clusters query-version-config \
--cluster= USER_CLUSTER_NAME \
--project= PROJECT_ID \
--location= REGION
Replace the following:
USER_CLUSTER_NAME : The name of the user cluster.
PROJECT_ID : The ID of the fleet project
in which that user cluster is a member. This is the project that you
specified when the cluster was created. If you created the cluster
using gkectl , this is the project ID in the gkeConnect.projectID
field in the cluster configuration file.
REGION : The Google Cloud region in which the
GKE On-Prem API runs and stores its metadata. In the main.tf file that
you used to create the user cluster, the region is in the location
field of the cluster resource.
The output of the command is similar to the following:
versions:
- version: 1.16.3-gke.45
- version: 1.16.2-gke.28
- version: 1.16.1-gke.45
- version: 1.16.0-gke.669
- version: 1.15.6-gke.25
- version: 1.15.5-gke.41
An Anthos version must be made available on the admin cluster ahead of the user
cluster creation or upgrade. Versions annotated with isInstalled=true are
installed on the admin cluster for the purpose of user cluster creation or
upgrade whereas other version are released and will be available for upgrade
once dependencies are resolved.
To install the version in the admin cluster, run:
$ gcloud container vmware admin-clusters update my-admin-cluster --required-platform-version=VERSION
Download the new version of the components and deploy them in the admin
cluster:
gcloud container vmware admin-clusters update ADMIN_CLUSTER_NAME \
--project= PROJECT_ID \
--location= REGION \
--required-platform-version= VERSION
This command downloads the version of the components that you specify in
--required-platform-version to the admin cluster, and then deploys the
the components. These components let the admin cluster manage user
clusters at that version.
In the main.tf file that you used to create the user cluster, change
on_prem_version in the cluster resource to the new version.
Initialize and create the Terraform plan:
terraform init
Terraform installs any needed libraries, such as the Google Cloud
provider.
Review the configuration and make changes if needed:
terraform plan
Apply the Terraform plan to create the user cluster:
terraform apply
Remove the full bundle
If you downloaded a full bundle, and you have successfully run
gkectl prepare and upgraded the admin cluster and all user clusters, you
should delete the full bundle to save disk space on the admin workstation. Run
the following command to delete the full bundle:
rm /var/lib/gke/bundles/gke-onprem-vsphere- TARGET_VERSION -full.tgz
Resuming an admin cluster upgrade
If an admin cluster upgrade is interrupted or fails, the upgrade can be resumed if the admin cluster checkpoint contains the state required to restore the state prior to the interruption.
Warning : Don't repair the admin master with gkectl repair admin-master after
a failed upgrade attempt. This will cause the admin cluster to get into a bad
state.
Follow these steps:
Check if the admin control plane is healthy before you begin the initial upgrade attempt. See
Diagnosing cluster issues . As discussed in that topic, run the gkectl diagnose cluster command for the admin cluster.
If the admin control plane is unhealthy prior to the initial upgrade attempt, repair the admin control plane with the gkectl repair admin-master command.
When you rerun the upgrade command after an upgrade has been interrupted or has failed, use the same bundle and target version as you did in the previous upgrade attempt.
When you rerun the upgrade command, the resumed upgrade recreates admin cluster
state from the checkpoint and reruns the entire upgrade. Starting from 1.12.0,
if the admin control plane is unhealthy, the upgrade process will directly
upgrade to the target version without trying to restore the admin cluster at the
source version before proceeding to upgrade.
The upgrade will resume from the point where it failed or exited if the admin cluster checkpoint is available. If the checkpoint is unavailable, the upgrade will fall back to relying on the admin control plane, and therefore the admin control plane must be healthy in order to proceed with the upgrade. After a successful upgrade, the checkpoint is regenerated.
If gkectl exits unexpectedly during an admin cluster upgrade, the kind cluster is not cleaned up. Before you rerun the upgrade command to resume the upgrade, delete the kind cluster:
docker stop gkectl-control-plane && docker rm gkectl-control-plane
After deleting the kind cluster, rerun the upgrade command again.
Roll back an admin workstation after an upgrade
You can roll back the admin workstation to the version used before the upgrade.
During the upgrade, gkeadm records the version before it was upgraded in the output information file. During the rollback, gkeadm uses the version listed to download the older file.
To roll back your admin workstation to the previous version:
gkeadm rollback admin-workstation --config= AW_CONFIG_FILE
You can omit --config= AW_CONFIG_FILE if your admin workstation configuration file is the default admin-ws-config.yaml . Otherwise, replace AW_CONFIG_FILE with the path to the admin workstation configuration file.
The rollback command performs these steps:
Downloads the rollback version of gkeadm .
Backs up the home directory of the current admin workstation.
Creates a new admin workstation using the rollback version of gkeadm .
Deletes the original admin workstation.
Install bundle with a different version for upgrade
If you upgrade your workstation, a bundle with a corresponding version is installed there for upgrading your clusters. If you want a different version, follow these steps to install a bundle for TARGET_VERSION , which is the version to which you want to upgrade.
To check the current gkectl and cluster versions, run this command. Use the flag --details/-d for more detailed information.
gkectl version --kubeconfig ADMIN_CLUSTER_KUBECONFIG --details
The output provides information about your cluster versions.
Based on the output you get, look for the following issues, and fix them as needed.
If the current admin cluster version is more than one minor version lower than the TARGET_VERSION , upgrade all your clusters to be one minor version lower than the TARGET_VERSION .
If the gkectl version is lower than 1.11, and you want to upgrade to 1.12.x, you will have to perform multiple upgrades. Upgrade one minor version at a time, until you get to 1.11.x, and then proceed with the instructions in this topic.
If the gkectl version is lower than the TARGET_VERSION , upgrade the admin workstation to the TARGET_VERSION .
When you have determined that your gkectl and cluster versions are appropriate for an upgrade, download the bundle.
Check whether the bundle tarball already exists on the admin workstation.
stat /var/lib/gke/bundles/gke-onprem-vsphere- TARGET_VERSION .tgz
If the bundle is not on the admin workstation, download it.
gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ TARGET_VERSION /gke-onprem-vsphere- TARGET_VERSION .tgz /var/lib/gke/bundles/
Install the bundle.
gkectl prepare --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET_VERSION .tgz --kubeconfig ADMIN_CLUSTER_KUBECONFIG
Replace ADMIN_CLUSTER_KUBECONFIG with the path of your kubeconfig file. You can omit
this flag if the file is in your current directory and has the name kubeconfig .
Note: By default, the regular bundle, rather than the full bundle, is downloaded. The full bundle contains all of the container and VM images, whereas the regular bundle downloads the container and VM images from Google Cloud Platform on to the admin workstation during installation. To use the full bundle instead, the bundle path in the installation command is gke-onprem-vsphere- TARGET_VERSION -full.tgz .
List available cluster versions, and make sure the target version is included in the available user cluster versions.
gkectl version --kubeconfig ADMIN_CLUSTER_KUBECONFIG --details
You can now create a user cluster at the target version, or upgrade a user cluster to the target version.
Troubleshooting the upgrade process
If you experience an issue when following the recommended upgrade process, follow these recommendations to resolve them. These suggestions assume that you have begun with a version 1.11.x setup, and are proceeding through the recommended upgrade process.
See also: Troubleshooting cluster creation and upgrade
Troubleshooting a user cluster upgrade issue
Suppose you find an issue with the upgrade version when upgrading a user cluster. You determine from Google Support that the issue will be fixed in an upcoming patch release. You can proceed as follows:
Continue using the current version for production.
Test the patch release in a non-production cluster when it is released.
Upgrade all production user clusters to the patch release version when you are confident.
Upgrade the admin cluster to the patch release version.
Troubleshooting an admin cluster upgrade issue
If you encounter an issue when upgrading the admin cluster, you must contact Google Support to resolve the issue with the admin cluster.
In the meantime, with the new upgrade flow, you can still benefit from new user cluster features without being blocked by the admin cluster upgrade, which allows you to reduce the upgrade frequency of the admin cluster if you want. Your upgrade process can proceed as follows:
Upgrade production user clusters to 1.12.x.
Keep the admin cluster at its earlier version and continue receiving security patches.
Test admin cluster upgrade from 1.11.x to 1.12.x in a test environment, and report issues if there are any;
If your issue is solved by a 1.12.x patch release, you can then choose to upgrade the production admin cluster to this patch release if desired.
Known issues for recent versions
The following known issues might affect upgrades if you are upgrading from version 1.7 or later.
See also: Known issues
Upgrading the admin workstation might fail if the data disk is nearly full
If you upgrade the admin workstation with the gkectl upgrade admin-workstation command, the upgrade might fail if the data disk is nearly full, because the system attempts to back up the current admin workstation locally while upgrading to a new admin workstation. If you cannot clear sufficient space on the data disk, use the gkectl upgrade admin-workstation command with the additional flag --backup-to-local=false to prevent making a local backup of the current admin workstation.
Disruption for workloads with PodDisruptionBudgets
Upgrading clusters can cause disruption or downtime for workloads
that use PodDisruptionBudgets (PDBs).
Nodes fail to complete their upgrade process
If you have PodDisruptionBudget objects configured that are unable to
allow any additional disruptions, node upgrades might fail to upgrade to the
control plane version after repeated attempts. To prevent this failure, we
recommend that you scale up the Deployment or HorizontalPodAutoscaler to
allow the node to drain while still respecting the PodDisruptionBudget
configuration.
To see all PodDisruptionBudget objects that do not allow any disruptions:
kubectl get poddisruptionbudget --all-namespaces -o jsonpath='{range .items[?(@.status.disruptionsAllowed==0)]}{.metadata.name}/{.metadata.namespace}{"\n"}{end}'
Appendix
About VMware DRS rules enabled in version 1.1.0-gke.6
As of version 1.1.0-gke.6, Google Distributed Cloud automatically creates VMware
Distributed Resource Scheduler
(DRS) anti-affinity rules for your user cluster's nodes, causing them to be
spread across at least three physical hosts in your datacenter. As of version
1.1.0-gke.6, this feature is automatically enabled for new clusters and existing
clusters.
Before you upgrade, be sure that your vSphere environment meets the following
conditions:
VMware DRS is enabled. VMware DRS requires vSphere Enterprise Plus license
edition. To learn how to enable DRS, see
Enabling VMware DRS in a cluster
The vSphere username provided in your
credentials configuration file
has the Host.Inventory.EditCluster permission.
There are at least three physical hosts available.
If your vSphere environment does not meet the preceding conditions, you can
still upgrade, but for upgrading a user cluster from 1.3.x to 1.4.x, you need
to disable anti-affinity groups. For more information, see this
known issue
in the Google Distributed Cloud release notes.
About downtime during upgrades
Resource
Description
Admin cluster
When an admin cluster is down, user cluster control planes and
workloads on user clusters continue to run, unless they were affected by
a failure that caused the downtime.
User cluster control plane
Typically, you should expect no noticeable downtime to user cluster
control planes. However, long-running connections to the Kubernetes API
server might break and would need to be re-established. In those cases,
the API caller should retry until it establishes a connection. In the
worst case, there can be up to one minute of downtime during an upgrade.
Note: If user cluster nodes are unable to reach the
user control plane during the upgrade, new workloads are not scheduled to the cluster. Existing
workloads are unaffected.
User cluster nodes
If an upgrade requires a change to user cluster nodes,
Google Distributed Cloud recreates the nodes in a rolling fashion, and
reschedules Pods running on these nodes. You can prevent impact to your
workloads by configuring
appropriate PodDisruptionBudgets
and anti-affinity rules .
Re-create an information file if missing
If the output information file for your admin workstation is missing, you must re-create this file so you can then proceed with the upgrade. This file was created when you initially created your workstation, and if you have since done an upgrade, it was updated with new information.
The output information file has this format:
Admin workstation version: GKEADM_VERSION
Created using gkeadm version: GKEADM_VERSION
VM name: ADMIN_WS_NAME
IP: ADMIN_WS_IP
SSH key used: FULL_PATH_TO_ADMIN_WS_SSH_KEY
To access your admin workstation:
ssh -i FULL-PATH-TO-ADMIN-WS-SSH-KEY ubuntu@ ADMIN-WS-IP
Here is a sample output information file:
Admin workstation version: v1.10.3-gke.49
Created using gkeadm version: v1.10.3-gke.49
VM name: admin-ws-janedoe
IP: 172.16.91.21
SSH key used: /usr/local/google/home/janedoe/.ssh/gke-admin-workstation
Upgraded from (rollback version): v1.10.0-gke.194
To access your admin workstation:
ssh -i /usr/local/google/home/janedoe/.ssh/gke-admin-workstation ubuntu@172.16.91.21
Create the file in an editor, substituting the appropriate parameters. Save the file with a filename that is the same as the VM name in the directory from which gkeadm is run. For example, if the VM name is admin-ws-janedoe , save the file as admin-ws-janedoe .
What's next
gcloud CLI reference documentation
gcloud container vmware clusters
gcloud container vmware node-pools
gcloud container vmware admin-clusters
Terraform reference documentation
google_gkeonprem_vmware_cluster
google_gkeonprem_vmware_node_pool
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
