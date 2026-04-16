---
title: "Set up Config Controller \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/setup
  title: "Set up Config Controller \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Controller
Guides
Send feedback
Set up Config Controller
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to set up Config Controller.
Config Controller provides a managed control plane, based on Kubernetes. In
addition, Config Controller instances come pre-installed with
Policy Controller, Config Sync, and Config Connector. By using these components,
you can use the tools and workflows of Kubernetes to manage Google Cloud
resources and achieve consistency by using a GitOps workflow. To learn more, see the
Config Controller overview .
If you're creating a Config Controller instance for the first time, see
Quickstart: Manage resources with Config Controller .
Limitations
Because Config Controller instances are fully managed, you can't
register them with a fleet .
Config Controller does not support Arm architecture .
Before you begin
Before setting up Config Controller, complete the following steps:
Install and initialize the Google Cloud
CLI , which provides the Google Cloud CLI used in these
instructions. If you use
Cloud Shell ,
the Google Cloud CLI is already installed.
Because kubectl is not installed by default by the Google Cloud
CLI, install it:
gcloud components install kubectl
Set the Google Cloud project where you want to host Config Controller:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with the Google Cloud project
that will host Config Controller.
Enable the required APIs:
gcloud services enable krmapihosting.googleapis.com \
container.googleapis.com \
cloudresourcemanager.googleapis.com \
serviceusage.googleapis.com
Create a Config Controller instance
You can create a Config Controller instance that's backed by a
Standard cluster
or an
Autopilot cluster .
Both types of clusters are
private .
Select a standard cluster if you want more customization options. Select an
Autopilot cluster if you want a quicker installation, horizontal and
vertical Pod autoscaling, and enhanced security features such as
Container-Optimized OS ,
Shielded GKE Nodes ,
Workload Identity Federation for GKE , and
Secure Boot .
Creating a new cluster can take up to 15 minutes to complete. If you want to observe
what's happening during creation, you can view Logs Explorer in the
Google Cloud console.
Go to the Logs Explorer
If you encounter errors during creation, see
Troubleshoot Config Controller
for guidance on resolving common issues.
Create an Autopilot cluster
To create a Config Controller instance on an Autopilot cluster,
run the following command:
gcloud anthos config controller create CONFIG_CONTROLLER_NAME \
--location = LOCATION \
--full-management
Replace the following:
CONFIG_CONTROLLER_NAME : the name that you want
to give your Config Controller instance.
LOCATION : the location where you want to create your
Config Controller instance, for example us-central1 . For a list
of supported locations, see Locations .
Create a Standard cluster
To create a Config Controller instance on a Standard cluster,
run the following command:
gcloud anthos config controller create CONFIG_CONTROLLER_NAME \
--location = LOCATION
Replace the following:
CONFIG_CONTROLLER_NAME : the name that you want
to give your Config Controller instance.
LOCATION : the location where you want to create your
Config Controller instance, for example us-central1 . For a list
of supported locations, see Locations .
You can set multiple optional parameters when you're creating a standard
Config Controller instance. For the full list of options, refer to the
gcloud anthos config controller create
documentation.
Confirm your Config Controller instance
To confirm that your Config Controller instance is set up, complete the
following steps:
To verify that your Config Controller instances was created, view the
list of Config Controller instances:
gcloud anthos config controller list --location = LOCATION
You should see a value of RUNNING in the status column. If the status is
CREATING , then your Config Controller instance is still being created
and you should continue to wait. If you see ERROR , you've encountered a
problem that you cannot resolve yourself. Contact Google Cloud
Support for assistance.
To communicate with the Config Controller endpoint, get the
appropriate credentials and endpoint information:
gcloud anthos config controller get-credentials CONFIG_CONTROLLER_NAME \
--location LOCATION
Use your Config Controller instance
Now that you've created a Config Controller instance, you can start using
the installed components and complete the following tasks:
Use Config Connector to create Google Cloud
resources .
If you have existing Google Cloud resources that you want to use with
Config Controller, learn about
Acquiring an existing resource .
Use Policy Controller to apply
constraints
that enforce regulatory compliance and Kubernetes standards.
After you
configure Config Sync , in the following
section, sync your Config Controller instance to
configs
(including Policy Controller constraints and Config Connector resources) that
are stored in a source of truth.
For a guided example showing you how to complete these tasks with
Config Controller, see
Quickstart: Manage resources with Config Controller .
Configure your Config Controller instance
The following sections explain how to configure the components of your
Config Controller instance.
Warning: Don't edit, update, or delete the Google Kubernetes Engine cluster that backs your
Config Controller instance because you can damage your Config Controller
instance. For more information, see
Unsupported Config Controller changes .
Configure Config Connector
You don't need to manage any settings for the Config Connector installation.
However, you need to grant Config Controller permissions to manage
Google Cloud resources:
Set an environment variable for your service account email:
export SA_EMAIL = " $( kubectl get ConfigConnectorContext -n config-control \
-o jsonpath = '{.items[0].spec.googleServiceAccount}' 2 > /dev/null ) "
Create the policy binding:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount: ${ SA_EMAIL } " \
--role " ROLE " \
--project PROJECT_ID
Replace the following:
PROJECT_ID : your project ID
ROLE : A set of
predefined roles
or
custom roles
that meet your needs. Alternatively, you can use roles/owner for
non-production environments. To learn more about Config Controller IAM
permissions, read
IAM permissions for Config Controller .
If the preceding operation fails, check if the controllers are ready:
kubectl wait pod --all --all-namespaces --for = condition = Ready
After you have granted these permissions, you can start creating Google Cloud
resources.
Configure Policy Controller
You might need to add or update the IAM policy to allow
Policy Controller to send metrics.
Allow Policy Controller to send metrics by running this command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = "serviceAccount: PROJECT_ID .svc.id.goog[gatekeeper-system/gatekeeper-admin]" \
--role = roles/monitoring.metricWriter
Replace PROJECT_ID with the cluster's Google Cloud project ID.
Configure Config Sync
If you want your Config Controller instance to sync from configs stored in a
source of truth, you need to configure Config Sync.
If you want to use Config Sync to create Config Connector resources, make sure
you've also
granted Config Controller permission to manage resources .
To configure Config Sync, create and edit a
RootSync object :
To sync from an external repository (for example, GitHub),
set up Cloud NAT with GKE .
You need to do this because private cluster nodes don't have outbound internet
access.
Save one of the following manifests as root-sync.yaml . Use the manifest
version that corresponds to the source type for your configs.
Git
# root-sync.yaml
apiVersion : configsync.gke.io/v1beta1
kind : RootSync
metadata :
name : ROOT_SYNC_NAME
namespace : config-management-system
spec :
sourceType : git
sourceFormat : unstructured
git :
repo : ROOT_REPOSITORY
revision : ROOT_REVISION
branch : ROOT_BRANCH
dir : ROOT_DIRECTORY
auth : ROOT_AUTH_TYPE
gcpServiceAccountEmail : ROOT_EMAIL
secretRef :
name : ROOT_SECRET_NAME
noSSLVerify : ROOT_NO_SSL_VERIFY
caCertSecretRef :
name : ROOT_CA_CERT_SECRET_NAME
Replace the following:
ROOT_SYNC_NAME : add the name of your RootSync
object.
ROOT_REPOSITORY : add the URL of the Git repository to
use as the root repository. You can enter URLs using either the HTTPS
or SSH protocol. For example, https://github.com/GoogleCloudPlatform/anthos-config-management-samples uses the HTTPS protocol.
This field is required.
ROOT_REVISION : add the Git revision (tag or
hash) or branch to sync from. This field is optional and the default value is
HEAD . When using a hash, it must be a full hash, and not an
abbreviated form.
ROOT_BRANCH : add the branch of the
repository to sync from. This field is optional and the default value
is master . We recommend using the revision field to specify a branch name for
simplicity. If both the revision field and the branch field are
specified, revision takes precedence over branch .
ROOT_DIRECTORY : add the path in the Git repository to
the root directory that contains the configuration that you want to sync
to. This field is optional and the default is the root directory ( / ) of
the repository.
ROOT_AUTH_TYPE : add one of the following authentication types:
none : Use no authentication
ssh : Use a SSH key pair
cookiefile : Use a cookiefile
token : Use a token
gcpserviceaccount : Use a Google service account to access a Cloud Source Repositories.
gcenode : Use a Google service account to access a
Cloud Source Repositories. Only select this option if Workload Identity Federation for GKE
is not enabled in your cluster.
For more information on these authentication types, see
Granting Config Sync read-only access to Git .
This field is required.
ROOT_EMAIL : If you added gcpserviceaccount as your
ROOT_AUTH_TYPE , add your Google service account email address. For example,
acm@PROJECT_ID.iam.gserviceaccount.com .
ROOT_SECRET_NAME : add the name of your Secret. If this
field is set, you must add the Secret's public key to
the Git provider. This field is optional.
ROOT_NO_SSL_VERIFY : To disable
the SSL certificate verification, set this field to true . The default value is false .
ROOT_CA_CERT_SECRET_NAME : add the name of your
Secret. If this field is set, your Git provider must be using a
certificate issued by this certificate authority (CA). The Secret must
contain the CA certificate under a key named cert . This field is
optional.
To learn more about how to configure the Secret object for the CA
certificate, see Configure Certificate Authority
For an explanation of the fields and a complete list of fields that you
can add to the spec field, see RootSync fields .
This manifest creates a RootSync object that uses Git as the source.
OCI
# root-sync.yaml
apiVersion : configsync.gke.io/v1beta1
kind : RootSync
metadata :
name : ROOT_SYNC_NAME
namespace : config-management-system
spec :
sourceType : oci
sourceFormat : unstructured
oci :
image : ROOT_IMAGE
dir : ROOT_DIRECTORY
auth : ROOT_AUTH_TYPE
gcpServiceAccountEmail : ROOT_EMAIL
caCertSecretRef :
name : ROOT_CA_CERT_SECRET_NAME
Replace the following:
ROOT_SYNC_NAME : add the name of your RootSync
object.
ROOT_IMAGE : the URL of the OCI image to use as the
root repository, for example LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY_NAME / PACKAGE_NAME .
By default, the image is pulled from the latest tag, but you can pull in images by TAG or DIGEST instead.
Specify TAG or DIGEST in the PACKAGE_NAME :
To pull by TAG : LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY_NAME / PACKAGE_NAME :TAG
To pull by DIGEST : LOCATION -docker.pkg.dev/ PROJECT_ID / REPOSITORY_NAME / PACKAGE_NAME @sha256:DIGEST
Caution: Config Sync requires that the OCI layer is compressed in
the tar or tar+gzip .
Other formats (for example, tar+bz2 ) will not be recognized by
Config Sync. Switching from a valid REPO to an OCI image with
an unsupported format will cause managed resources to be pruned without
an error.
ROOT_DIRECTORY : add the path in the repository to
the root directory that contains the configuration that you want to sync
to. This field is optional and the default is the root directory ( / ) of
the repository.
ROOT_AUTH_TYPE : add one of the following authentication types:
none : Use no authentication
gcenode : Use the
Compute Engine default service account to access an image in
Artifact Registry. Only select this option if
Workload Identity Federation for GKE is not enabled in your cluster.
gcpserviceaccount : Use a Google service account to access an
image.
This field is required.
ROOT_EMAIL : If you added gcpserviceaccount as your
ROOT_AUTH_TYPE , add your Google service account email address. For example,
acm@ PROJECT_ID .iam.gserviceaccount.com .
ROOT_CA_CERT_SECRET_NAME : add the name of your
Secret. If this field is set, your OCI provider must be using a
certificate issued by this certificate authority (CA). The Secret must
contain the CA certificate under a key named cert . This field is
optional.
To learn more about how to configure the Secret object for the CA
certificate, see Configure Certificate Authority
For an explanation of the fields and a complete list of fields that you
can add to the spec field, see RootSync fields .
This manifest creates a RootSync object that uses an OCI image as the source.
Helm
# root-sync.yaml
apiVersion : configsync.gke.io/v1beta1
kind : RootSync
metadata :
name : ROOT_SYNC_NAME
namespace : config-management-system
spec :
sourceType : helm
sourceFormat : unstructured
helm :
repo : ROOT_HELM_REPOSITORY
chart : HELM_CHART_NAME
version : HELM_CHART_VERSION
releaseName : HELM_RELEASE_NAME
namespace : HELM_RELEASE_NAMESPACE
values :
foo :
bar : VALUE_1
baz :
- qux : VALUE_2
xyz : VALUE_3
includeCRDs : HELM_INCLUDE_CRDS
auth : ROOT_AUTH_TYPE
gcpServiceAccountEmail : ROOT_EMAIL
secretRef :
name : ROOT_SECRET_NAME
caCertSecretRef :
name : ROOT_CA_CERT_SECRET_NAME
Replace the following:
ROOT_SYNC_NAME : add the name of your RootSync
object.
ROOT_HELM_REPOSITORY : the URL of the Helm
repository to use as the root repository. You can enter URLs using either
the HTTPS or SSH protocol. For example, https://github.com/GoogleCloudPlatform/anthos-config-management-samples uses the HTTPS
protocol. This field is required.
HELM_CHART_NAME : add the name of your Helm
chart. This field is required.
HELM_CHART_VERSION : the version of your chart.
This field is optional. If no value is specified, the latest version is
used.
HELM_RELEASE_NAME : the name of the Helm release.
This field is optional.
HELM_RELEASE_NAMESPACE : the target namespace for
a release. It only sets a namespace for resources that contain namespace: {{ .Release.Namespace }} in their templates.
This field is optional. If no value is specified, the default namespace config-management-system is used.
HELM_INCLUDE_CRDS : set to true if you want
the Helm template to also generate a CustomResourceDefinition. This
field is optional. If no value is specified, the default is false and
a CRD won't be generated.
VALUE : values to use instead of default values that accompany the Helm chart.
Format this field the same way as helm chart's values.yaml file. This field is optional.
ROOT_AUTH_TYPE : add one of the following authentication types:
none : Use no authentication
token : Use a username and password to access a private Helm
repository.
gcenode : Use the
Compute Engine default service account to access an image in
Artifact Registry. Only select this option if
Workload Identity Federation for GKE is not enabled in your cluster.
gcpserviceaccount : Use a Google service account to access an
image.
This field is required.
ROOT_EMAIL : If you added gcpserviceaccount as your
ROOT_AUTH_TYPE , add your Google service account email address. For example,
acm@ PROJECT_ID .iam.gserviceaccount.com .
ROOT_SECRET_NAME : add the
name of your Secret
if token is the ROOT_AUTH_TYPE . This field is optional.
ROOT_CA_CERT_SECRET_NAME : add the name of your
Secret. If this field is set, your Helm provider must be using a
certificate issued by this certificate authority (CA). The Secret must
contain the CA certificate under a key named cert . This field is
optional.
To learn more about how to configure the Secret object for the CA
certificate, see Configure Certificate Authority
For an explanation of the fields and a complete list of fields that you
can add to the spec field, see RootSync fields .
This manifest creates a RootSync object that uses Helm as the source.
To create the Config Sync configuration, create a RootSync object by
applying the manifest:
kubectl apply -f root-sync.yaml
To verify that your changes were applied, view the RootSync object:
kubectl describe rootsync ROOT_SYNC_NAME -n config-management-system
Upgrade Config Controller
Because Config Controller is a managed service, Google upgrades it
automatically. For details on new features, and to learn which
Config Sync, Policy Controller, and Config Connector versions Config Controller uses,
see the
Config Controller release notes .
Delete your Config Controller instance
If you decide to stop using a Config Controller instance, clean up all
Config Connector resources created before you delete the Config Controller
cluster itself.
Deleting your Config Controller instance without first deleting the
provisioned resources leaves the resources in an abandoned state. The resources
still exist in Google Cloud (and incur billing charges), but are not managed
from declarative configuration.
After all of your resources have been deleted, delete your Config Controller
cluster:
gcloud anthos config controller delete \
--location = LOCATION CONFIG_CONTROLLER_NAME
Production considerations
When going to production, you should first review the
high availability considerations for Config Controller .
What's next
Learn best practices for Config Controller scalability
Deploy custom workloads on Config Controller clusters
Troubleshoot Config Controller .
Get support .
Learn more about
syncing configurations and policies with Config Sync .
Learn more about
enforcing policies with Policy Controller .
Learn more about Config Connector resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
