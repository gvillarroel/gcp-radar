---
title: "Install Cloud Service Mesh for Kubernetes workloads off Google Cloud \_|\_\
  \ Cloud Service Mesh v1.26 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/install-in-cluster-cloud-service-mesh
  title: "Install Cloud Service Mesh for Kubernetes workloads off Google Cloud \_\
    |\_ Cloud Service Mesh v1.26 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
v1.26
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Install Cloud Service Mesh for Kubernetes workloads off Google Cloud
Note: This guide only supports Cloud Service Mesh with Istio APIs and does
not support Google Cloud APIs. For more information see,
Cloud Service Mesh overview .
This page explains how to install unmanaged, in-cluster Cloud Service Mesh for
Kubernetes workloads off Google Cloud:
Run asmcli to do a new installation of Cloud Service Mesh 1.26.8-asm.3.
Optionally, deploy an ingress gateway.
Deploy or redeploy your workloads to inject sidecar proxies.
If you need to install unmanaged, in-cluster Cloud Service Mesh with an
istiod control plane on GKE, see
Install in-cluster Cloud Service Mesh on Google Cloud . Note that for Kubernetes workloads on
Google Cloud, we recommend
provisioning a managed control plane
For instructions to prepare an offline installation of Cloud Service Mesh,
see
Prepare an offline installation of Cloud Service Mesh
You will need to specify the --offline and --output_dir options when running
asmcli install .
Limitations
Note the following limitations:
All Cloud Service Mesh clusters for one mesh must be registered to the same
fleet at all times to use Cloud Service Mesh. Other clusters in the
project of a Cloud Service Mesh cluster must not be registered to a
different fleet.
The asmcli tool must have access to the Google Kubernetes Engine (GKE)
endpoint. You can configure access through a
"jump" server , such as a
Compute Engine VM within the Virtual Private Cloud (VPC) giving specific
access.
Before you begin
Before you begin, make sure that you:
Review the prerequisites .
Review the information in
Plan the install .
Install the required tools .
Download asmcli .
Grant cluster admin permissions .
Validate project and cluster .
Warning: For Cloud Service Mesh to function correctly, deploy istiod and
canonical-service-controller-manager to your cluster. These tools have
elevated
role-based access control (RBAC) permissions ,
such as the ability to modify all deployments and to modify all cluster secrets.
These permissions are required for Cloud Service Mesh functions such as
injecting sidecars, discovering services, securing traffic, managing ingress
gateways, and presenting services dashboards. Note: If you need to install Cloud Service Mesh from a private or custom
container registry, see
Use a custom overlay for custom registry .
Roles required to install in-cluster Cloud Service Mesh
The following table describes the roles that are required to install in-cluster
Cloud Service Mesh.
Role name
Role ID
Grant location
Description
GKE Hub Admin
roles/gkehub.admin
Fleet project
Full access to GKE Hubs and related resources.
Kubernetes Engine Admin
roles/container.admin
Cluster project. Note that this role must be granted in both Fleet and
cluster project for cross-project bindings.
Provides access to full management of Container Clusters and their
Kubernetes API objects.
Mesh Config Admin
roles/meshconfig.admin
Fleet and cluster project
Provides permissions required to initialize managed components of
Cloud Service Mesh, such as managed control plane and backend permission that
allows workloads to talk to Stackdriver without each being
individually authorized (for both managed and in-cluster control planes).
Project IAM Admin
roles/resourcemanager.projectIamAdmin
Cluster project
Provides permissions to administer IAM policies on
projects.
Service Account Admin
roles/iam.serviceAccountAdmin
Fleet project
Authenticate as a service account.
Service Management Admin
roles/servicemanagement.admin
Fleet project
Full control of Google Service Management resources.
Service Usage Admin
roles/serviceusage.serviceUsageAdmin
Fleet project
Ability to enable, disable, and inspect service states, inspect
operations, and consume quota and billing for a consumer
project. (Note 1)
CA Service Admin Beta
roles/privateca.admin
Fleet project
Full access to all CA Service resources.
(Note 2)
Notes:
Service Usage Admin - This role is necessary
as a prerequisite to enable the mesh.googleapis.com API when
initially provisioning managed Cloud Service Mesh.
CA Service Admin - This role is only required if you
are integrating with CA Service.
Install Cloud Service Mesh
Warning: GitOps tools (including Config Sync, Argo CD, Terraform,
and Jenkins) may interfere with your Cloud Service Mesh installation,
migration, or upgrade processes. For best results, disable your GitOps tools
before you install, migrate, or upgrade Cloud Service Mesh.
The following outlines how to install Cloud Service Mesh:
Run asmcli install to install the in-cluster control plane on a single
cluster. See the following sections for command line examples. The examples
contain both required arguments and optional arguments that you might find
useful. We recommend that you always specify the output_dir argument so
that you can locate sample gateways and tools such as istioctl . See the
navigation bar on the right for a list of the examples.
Optionally, install an ingress gateway . By default,
asmcli doesn't install the istio-ingressgateway . We recommend that you
deploy and manage the control plane and gateways separately. If you need the
default istio-ingressgateway installed with the in-cluster control plane,
include the --option legacy-default-ingressgateway argument.
To complete setting up Cloud Service Mesh, you need to enable automatic
sidecar injection and
deploy or redeploy workloads .
If you are installing Cloud Service Mesh on more than one cluster, run
asmcli install on each cluster. When you run asmcli install , be
sure to use the same FLEET_PROJECT_ID for each
cluster. After Cloud Service Mesh is installed, see the instructions to
set up a multi-cluster mesh
off Google Cloud .
If your clusters are on different networks (as they are in
island mode
then you should pass a unique network name to asmcli using the
--network_id flag.
Install default features and Mesh CA
This section shows how to run asmcli to install Cloud Service Mesh with the
default supported features for your platform and enable
Cloud Service Mesh certificate authority as the certificate authority.
On-premises
Run the following commands on Google Distributed Cloud (software only) for VMware or
Google Distributed Cloud (software only) for bare metal to install the control plane with default
features and Cloud Service Mesh certificate authority. Enter your values in the provided
placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca mesh_ca
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--ca mesh_ca Use Cloud Service Mesh certificate authority as the
certificate authority. asmcli configures
Cloud Service Mesh certificate authority to use
fleet
workload identity
To view SLOs and infrastructure metrics in the Cloud Service Mesh UI, you must
also perform the first three steps in
Enable application logging and monitoring .
If logging and monitoring are not enabled and do not receive custom logs and
metrics, the Cloud Service Mesh dashboard will not display SLOs, error logs, or CPU
and memory metrics.
Note: Prometheus monitoring is enabled by default. Enabling Prometheus and
having enableStackdriverForApplications set to true may incur extra
Cloud Monitoring charges. For more information, see
GKE on GDC known issues .
To disable Prometheus annotations during Cloud Service Mesh installation, see
disable Prometheus metrics merging feature .
AWS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on GKE on AWS to install the control plane
with default features and Cloud Service Mesh certificate authority. Enter your values in the
provided placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca mesh_ca
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--ca mesh_ca Use Cloud Service Mesh certificate authority as the
certificate authority. asmcli configures
Cloud Service Mesh certificate authority to use
fleet
workload identity .
To view SLOs and infrastructure metrics in the Cloud Service Mesh UI, you must
also perform the first three steps in
Enable application logging and monitoring .
If logging and monitoring are not enabled and do not receive custom logs and
metrics, the Cloud Service Mesh dashboard will not display SLOs, error logs, or CPU
and memory metrics.
Azure
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on GKE on Azure to
install the control plane with default features and Cloud Service Mesh certificate authority.
Enter your values in the provided placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca mesh_ca
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--ca mesh_ca Use Cloud Service Mesh certificate authority as the
certificate authority. asmcli configures
Cloud Service Mesh certificate authority to use
fleet
workload identity .
To view SLOs and infrastructure metrics in the Cloud Service Mesh UI, you must
also perform the first three steps in
Enable application logging and monitoring .
If logging and monitoring are not enabled and do not receive custom logs and
metrics, the Cloud Service Mesh dashboard will not display SLOs, error logs, or CPU
and memory metrics.
Amazon EKS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on Amazon EKS to install the control plane with
default features and Cloud Service Mesh certificate authority. Enter your values in the
provided placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--option attached-cluster \
--network_id default \
--ca mesh_ca
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--option attached-cluster Changes the default signing
utility to be istiod.
--network_id If you are setting up a multi-network mesh,
then set the --network_id to a unique value for each cluster
in the mesh.
--ca mesh_ca Use Cloud Service Mesh certificate authority as the
certificate authority. asmcli configures
Cloud Service Mesh certificate authority to use
fleet
workload identity .
To view SLOs and infrastructure metrics in the Cloud Service Mesh UI, you must
also perform the first three steps in
Enable application logging and monitoring .
If logging and monitoring are not enabled and do not receive custom logs and
metrics, the Cloud Service Mesh dashboard will not display SLOs, error logs, or CPU
and memory metrics.
Microsoft AKS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on Microsoft AKS to install the control plane with
default features and Cloud Service Mesh certificate authority. Enter your values in the
provided placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
HUB_REGISTRATION_EXTRA_FLAGS=--has-private-issuer ./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--option attached-cluster \
--network_id default \
--ca mesh_ca
HUB_REGISTRATION_EXTRA_FLAGS=--has-private-issuer
Allows registration with GKE Hub.
Note: To allow registration with GKE Hub, you must use
this flag because AKS clusters do not have a publicly-routable OIDC
discovery endpoint for the Kubernetes service account token.
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--option attached-cluster Changes the default signing
utility to be istiod.
--network_id If you are setting up a multi-network mesh,
then set the --network_id to a unique value for each cluster
in the mesh.
--ca mesh_ca Use Cloud Service Mesh certificate authority as the
certificate authority. asmcli configures
Cloud Service Mesh certificate authority to use
fleet
workload identity .
To view SLOs and infrastructure metrics in the Cloud Service Mesh UI, you must
also perform the first three steps in
Enable application logging and monitoring .
If logging and monitoring are not enabled and do not receive custom logs and
metrics, the Cloud Service Mesh dashboard will not display SLOs, error logs, or CPU
and memory metrics.
Install default features and Certificate Authority (CA) Service
This section shows how to run asmcli to install Cloud Service Mesh with the default
supported features for your platform and
enable CA Service as the certificate authority.
Platform note: CA Service is only supported on the
following platforms: GKE clusters on Google Cloud,
Google Distributed Cloud (software only) for VMware, and Distributed Cloud. If you run
asmcli install and specify --ca gcp_cas on other
platforms, the installation appears successful, but your workloads will fail
to start.
In addition to Cloud Service Mesh certificate authority ,
you can configure Cloud Service Mesh to use
Certificate Authority Service . This
guide provides you an opportunity to integrate with CA Service,
which is recommended for the following use cases:
If you need different certificate authorities to sign workload certificates
on different clusters.
If you need to back your signing keys in a Cloud HSM .
If you are in a highly regulated industry and are subject to compliance.
If you want to chain up your Cloud Service Mesh CA to a custom enterprise root
certificate to sign workload certificates.
The cost of Cloud Service Mesh certificate authority is included in the
Cloud Service Mesh pricing . The
CA Service isn't included in the base Cloud Service Mesh price and is
charged separately . Additionally,
CA Service comes with an
explicit SLA , but the Cloud Service Mesh certificate authority does not.
Configure CA Service
Create the CA pool
in the tier DevOps and in the same region as the
cluster that it serves to avoid excessive latency issues or potential
cross-region outages. For more information, see Workload-optimized tiers .
Create the CA
to have at least one active certificate authority in the CA pool in the
same project as the GKE cluster. Use subordinate CA's to sign
Cloud Service Mesh workload certificates. Note down the CA pool
corresponding to the subordinate CA.
If it is meant to only service certificates for Cloud Service Mesh workloads, set
up the following issuance policy for the CA pool:
policy.yaml
baselineValues:
keyUsage:
baseKeyUsage:
digitalSignature: true
keyEncipherment: true
extendedKeyUsage:
serverAuth: true
clientAuth: true
caOptions:
isCa: false
identityConstraints:
allowSubjectPassthrough: false
allowSubjectAltNamesPassthrough: true
celExpression:
expression: subject_alt_names.all(san, san.type == URI && san.value.startsWith("spiffe:// PROJECT_ID .svc.id.goog/ns/") )
Note: As a best practice for multi-cluster meshes, set one subordinate
CA pool per unique cluster region. All the subordinate CA pools should chain
to the same root CA pool.
To update the CA pool's issuance policy, use the following command:
gcloud privateca pools update CA_POOL --location ca_region --issuance-policy policy.yaml
For information on setting a policy on a pool, see Using a certificate issuance policy .
If you are using a certificate template , then configure it now. For more information,
follow the CA Service guide for workload identity certificates.
Ensure the certificate template is created in the same region as the CA pool. If there are multiple regions for CA pools, then create a certificate
template per region.
Configure Cloud Service Mesh to use CA Service
Run the following commands on Google Distributed Cloud (software only) for VMware or
Google Distributed Cloud (software only) for bare metal to install the control plane with default features
and Certificate Authority Service. Enter your values in the provided placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--kubeconfig KUBECONFIG_FILE \
--fleet_id FLEET_PROJECT_ID \
--output_dir DIR_PATH \
--enable_all \
--ca gcp_cas \
--platform multicloud \
--ca_pool projects/ CA_POOL_PROJECT_ID /locations/ ca_region /caPools/ CA_POOL
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--ca gcp_cas Use Certificate Authority Service as the
certificate authority. Changing certificate authorities during an
upgrade causes downtime. asmcli configures
Certificate Authority Service to use
fleet
workload identity
--ca_pool The full identifier for the
Certificate Authority Service CA Pool .
If you are using a certificate template , then append the template id separated by : . For example:
--ca_pool projects/ CA_POOL_PROJECT_ID /locations/ ca_region /caPools/ CA_POOL :projects/ CA_POOL_PROJECT_ID /locations/ ca_region /certificateTemplates/ CERT_TEMPLATE_ID
To view SLOs and infrastructure metrics in the Cloud Service Mesh UI, you must
also perform the first three steps in
Enable application logging and monitoring .
If logging and monitoring are not enabled and do not receive custom logs and
metrics, the Cloud Service Mesh dashboard will not display SLOs, error logs, or CPU
and memory metrics.
Install default features with Istio CA
This section explains how to:
Generate certificates and keys for the Istio CA that Cloud Service Mesh uses to
sign your workloads.
Run asmcli to install Cloud Service Mesh with default features and enable
Istio CA.
By default environments that install Cloud Service Mesh with Istio CA report metrics
to Prometheus. If you want to use the Cloud Service Mesh dashboards, you must enable
Stackdriver. For more information, see Install with optional features .
For the best security, we highly recommend maintaining an offline root CA and
using the subordinate CAs to issue certificates for each cluster. For more
information, see Plug in CA Certificates .
In this configuration, all workloads in the service mesh use the same root
certificate authority (CA). Each Cloud Service Mesh CA uses an intermediate CA
signing key and certificate, signed by the root CA. When multiple CAs exist
within a mesh, this establishes a hierarchy of trust among the CAs. You can
repeat these steps to provision certificates and keys for any number of
certificate authorities.
Important: These steps create certificates and keys using a make command that
we provide for illustrative purposes only. For the best security, use an offline
secure computer and production-ready tools, for example using HashiCorp
Vault to securely generate and protect the CA
signing key.
The Makefile to generate the certificates is located in the
istio-1.26.8-asm.3 subdirectory in the --output_dir directory that you
specified in the asmcli validate command. If you didn't run asmcli validate ,
or you don't have the downloaded directory locally, you can get the Makefile by
downloading the Cloud Service Mesh installation file
and extracting the contents.
Change to the istio-1.26.8-asm.3 directory.
Create a directory for the certificates and keys:
mkdir -p certs && \
pushd certs
Generate a root certificate and key:
make -f ../tools/certs/Makefile.selfsigned.mk root-ca
This generates these files:
root-cert.pem : the root certificate
root-key.pem : the root key
root-ca.conf : the configuration for openssl to generate the root certificate
root-cert.csr : the CSR for the root certificate
Generate an intermediate certificate and key:
make -f ../tools/certs/Makefile.selfsigned.mk cluster1-cacerts
This generates these files in a directory named cluster1 :
ca-cert.pem : the intermediate certificates
ca-key.pem : the intermediate key
cert-chain.pem : the certificate chain which istiod uses
root-cert.pem : the root certificate
Note: You can replace cluster1 with a different name. For example, make
mycluster-cacerts creates a directory named mycluster .
If you perform these steps using an offline computer, copy the generated
directory to a computer with access to the clusters.
Return to the previous directory:
popd
Run asmcli to install a mesh using Istio CA:
On-premises
Run the following commands on Google Distributed Cloud (software only) for VMware or
Google Distributed Cloud (software only) for bare metal to install the control plane with
default features and Istio CA. Enter your values in the provided
placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate
--ca_key The key for the intermediate certificate
--root_cert The root certificate
--cert_chain The certificate chain
AWS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on GKE on AWS to install the control
plane with default features and Istio CA. Enter your values in the
provided placeholders. You can choose to enable Ingress for the public
subnet or the private subnet.
Public
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate.
--ca_key The key for the intermediate certificate.
--root_cert The root certificate.
--cert_chain The certificate chain.
Private
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Save the following YAML to a file called istio-operator-internal-lb.yaml :
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
components:
ingressGateways:
- enabled: true
k8s:
serviceAnnotations:
service.beta.kubernetes.io/aws-load-balancer-internal: "true"
name: istio-ingressgateway
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert FILE_PATH \
--ca_key FILE_PATH \
--root_cert FILE_PATH \
--cert_chain FILE_PATH \
--custom_overlay istio-operator-internal-lb.yaml
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate.
--ca_key The key for the intermediate certificate.
--root_cert The root certificate.
--cert_chain The certificate chain.
--custom_overlay The name of the overlay file created. For more information
about overlay files, see
Enabling optional
features on the in-cluster control plane
Azure
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on GKE on Azure to
install the control plane with default features and Istio CA. Enter your
values in the provided placeholders. You can choose to enable Ingress for
the public subnet or the private subnet.
Public
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate.
--ca_key The key for the intermediate certificate.
--root_cert The root certificate.
--cert_chain The certificate chain.
Private
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Save the following YAML to a file called istio-operator-internal-lb.yaml :
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
components:
ingressGateways:
- enabled: true
k8s:
serviceAnnotations:
service.beta.kubernetes.io/aws-load-balancer-internal: "true"
name: istio-ingressgateway
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert FILE_PATH \
--ca_key FILE_PATH \
--root_cert FILE_PATH \
--cert_chain FILE_PATH \
--custom_overlay istio-operator-internal-lb.yaml
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate.
--ca_key The key for the intermediate certificate.
--root_cert The root certificate.
--cert_chain The certificate chain.
--custom_overlay The name of the overlay file created. For more information
about overlay files, see
Enabling optional
features on the in-cluster control plane
Amazon EKS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on Amazon EKS to install the control plane with
default features and Istio CA. Enter your values in the provided
placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--option attached-cluster \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH \
--network_id default
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--option attached-cluster Changes the default signing
utility to be istiod.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate
--ca_key The key for the intermediate certificate
--root_cert The root certificate
--cert_chain The certificate chain
--network_id If you are setting up a multi-network
mesh, then set the --network_id to a unique value for each
cluster in the mesh.
Microsoft AKS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on Microsoft AKS to install the control plane
with default features and Istio CA. Enter your values in the provided
placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
HUB_REGISTRATION_EXTRA_FLAGS=--has-private-issuer ./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--option attached-cluster \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH \
--network_id default
HUB_REGISTRATION_EXTRA_FLAGS=--has-private-issuer
Allows registration with GKE Hub.
Note: To allow registration with GKE Hub, you must use
this flag because AKS clusters do not have a publicly-routable OIDC
discovery endpoint for the Kubernetes service account token.
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--option attached-cluster Changes the default signing
utility to be istiod.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate
--ca_key The key for the intermediate certificate
--root_cert The root certificate
--cert_chain The certificate chain
--network_id If you are setting up a multi-network
mesh, then set the --network_id to a unique value for each
cluster in the mesh.
Install with Istio CA with Google Cloud Observability enabled
If you want to use Cloud Service Mesh dashboards, you must enable Stackdriver.
On-premises
Run the following commands on Google Distributed Cloud (software only) for VMware or
Google Distributed Cloud (software only) for bare metal to install the control plane with Stackdriver
and other optional features features and Istio CA. Enter your values in the
provided placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate
--ca_key The key for the intermediate certificate
--root_cert The root certificate
--cert_chain The certificate chain
--option stackdriver Enables Stackdriver option. Note that
you can also enable both Stackdriver and Prometheus by using
--option prometheus-and-stackdriver .
To view SLOs and infrastructure metrics in the Cloud Service Mesh UI, you must
also perform the first three steps in
Enable application logging and monitoring .
If logging and monitoring are not enabled and do not receive custom logs and
metrics, the Cloud Service Mesh dashboard will not display SLOs, error logs, or CPU
and memory metrics.
AWS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on GKE on AWS to install the control
plane with Stackdriver and other optional features and Istio CA. Enter your
values in the provided placeholders. You can choose to enable Ingress for
the public subnet or the private subnet.
Public
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH \
--option stackdriver
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate.
--ca_key The key for the intermediate certificate.
--root_cert The root certificate.
--cert_chain The certificate chain.
--option stackdriver Enables Stackdriver option. Note that
you can also enable both Stackdriver and Prometheus by using
--option prometheus-and-stackdriver .
Private
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Save the following YAML to a file called istio-operator-internal-lb.yaml :
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
components:
ingressGateways:
- enabled: true
k8s:
serviceAnnotations:
service.beta.kubernetes.io/aws-load-balancer-internal: "true"
name: istio-ingressgateway
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert FILE_PATH \
--ca_key FILE_PATH \
--root_cert FILE_PATH \
--cert_chain FILE_PATH
--custom_overlay istio-operator-internal-lb.yaml \
--option stackdriver
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate.
--ca_key The key for the intermediate certificate.
--root_cert The root certificate.
--cert_chain The certificate chain.
--custom_overlay The name of the overlay file created. For more information
about overlay files, see
Enabling optional
features on the in-cluster control plane
--option stackdriver Enables Stackdriver option. Note that
you can also enable both Stackdriver and Prometheus by using
--option prometheus-and-stackdriver . Alternatively, you can
enable Stackdriver using --custom_overlay stackdriver.yaml . You must either
Download the anthos-service-mesh-package or create stackdriver.yaml from the
provided manifest .
Azure
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on GKE on Azure to
install the control plane with Stackdriver and other optional features and
Istio CA. Enter your values in the provided placeholders. You can choose to
enable Ingress for the public subnet or the private subnet.
Public
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH \
--option stackdriver
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate.
--ca_key The key for the intermediate certificate.
--root_cert The root certificate.
--cert_chain The certificate chain.
--option stackdriver Enables Stackdriver option. Note that
you can also enable both Stackdriver and Prometheus by using
--option prometheus-and-stackdriver .
Private
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Save the following YAML to a file called istio-operator-internal-lb.yaml :
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
components:
ingressGateways:
- enabled: true
k8s:
serviceAnnotations:
service.beta.kubernetes.io/aws-load-balancer-internal: "true"
name: istio-ingressgateway
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert FILE_PATH \
--ca_key FILE_PATH \
--root_cert FILE_PATH \
--cert_chain FILE_PATH
--custom_overlay istio-operator-internal-lb.yaml \
--option stackdriver
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate.
--ca_key The key for the intermediate certificate.
--root_cert The root certificate.
--cert_chain The certificate chain.
--custom_overlay The name of the overlay file created. For more information
about overlay files, see
Enabling optional
features on the in-cluster control plane
--option stackdriver Enables Stackdriver option. Note that
you can also enable both Stackdriver and Prometheus by using
--option prometheus-and-stackdriver . Alternatively, you can
enable Stackdriver using --custom_overlay stackdriver.yaml . You must either
Download the anthos-service-mesh-package or create stackdriver.yaml from the
provided manifest .
Amazon EKS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on Amazon EKS to install the control plane with
Stackdriver and other optional features and Istio CA. Enter your values in
the provided placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH \
--option stackdriver \
--option attached-cluster
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate
--ca_key The key for the intermediate certificate
--root_cert The root certificate
--cert_chain The certificate chain
--option stackdriver Enables Stackdriver option. Note that
you can also enable both Stackdriver and Prometheus by using
--option prometheus-and-stackdriver .
--option stackdriver Changes the default signing utility
to be istiod .
Microsoft AKS
Caution: GKE on Azure
and GKE on AWS
are deprecated and will shut down on March 17, 2027.
Cloud Service Mesh support for
attached clusters , including Amazon EKS clusters and Microsoft AKS clusters,
is deprecated and will shut down March 17, 2027.
Run the following commands on Microsoft AKS to install the control plane
with default features and Istio CA. Enter your values in the provided
placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install :
HUB_REGISTRATION_EXTRA_FLAGS=--has-private-issuer ./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca citadel \
--ca_cert CA_CERT_FILE_PATH \
--ca_key CA_KEY_FILE_PATH \
--root_cert ROOT_CERT_FILE_PATH \
--cert_chain CERT_CHAIN_FILE_PATH \
--option stackdriver \
--option attached-cluster
HUB_REGISTRATION_EXTRA_FLAGS=--has-private-issuer
Allows registration with GKE Hub.
Note: To allow registration with GKE Hub, you must use
this flag because AKS clusters do not have a publicly-routable OIDC
discovery endpoint for the Kubernetes service account token.
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
-ca citadel Use Istio CA as the certificate authority.
--ca_cert The intermediate certificate
--ca_key The key for the intermediate certificate
--root_cert The root certificate
--cert_chain The certificate chain
--option stackdriver Enables Stackdriver option. Note that
you can also enable both Stackdriver and Prometheus by using
--option prometheus-and-stackdriver .
--option stackdriver Changes the default signing utility
to be istiod .
Install with optional features
An overlay file is a YAML file containing an IstioOperator custom resource
(CR) that you pass to asmcli to configure the control plane. You can
override the default control plane configuration and
enable an optional feature by passing
the YAML file to asmcli . You can layer on more overlays, and each overlay
file overrides the configuration on the previous layers. As a best practice,
we recommend that you save the overlay files in your version control system.
There are two options to enable optional features:
--option and
--custom_overlay .
Use --option to if you don't need to change the overlay
file. With this method asmcli fetches the file from the
GitHub repository
for you.
Use --custom_overlay when you need to customize the overlay file.
For more information, see
Enabling optional features on the in-cluster control plane .
Run the following commands on Google Distributed Cloud (software only) for VMware,
Google Distributed Cloud (software only) for bare metal, GKE on AWS, GKE on Azure,
Amazon EKS, or Microsoft AKS. Enter your values in the provided placeholders.
Set the current context to your user cluster:
kubectl config use-context CLUSTER_NAME
Run asmcli install to install the control plane with an optional
feature. To add multiple files, specify --custom_overlay and the
filename, for example: --custom_overlayoverlay_file1.yaml
--custom_overlay overlay_file2.yaml --custom_overlay overlay_file3.yaml
./asmcli install \
--fleet_id FLEET_PROJECT_ID \
--kubeconfig KUBECONFIG_FILE \
--output_dir DIR_PATH \
--platform multicloud \
--enable_all \
--ca mesh_ca \
--custom_overlay OVERLAY_FILE
--fleet_id The project ID of the
fleet host project .
--kubeconfig The full path to the
kubeconfig file .
The environment variable $PWD doesn't work here. Additionally,
relative kubeconfig file locations that use a `~` will not work.
--output_dir Include this option to specify a directory
where asmcli downloads the anthos-service-mesh
package and extracts the installation file, which
contains istioctl , samples, and manifests. Otherwise
asmcli downloads the files to a tmp directory.
You can specify either a relative path or a full path. The environment
variable $PWD doesn't work here.
--platform multicloud Specifies that the platform is something
other than Google Cloud, such as on-premises or multi-cloud.
--enable_all Allows the script to:
Grant required IAM permissions.
Enable the required Google APIs.
Set a label on the cluster that identifies the mesh.
Register the cluster to the fleet if it isn't already registered.
--ca mesh_ca Use Cloud Service Mesh certificate authority as the
certificate authority. Note that asmcli configures
Cloud Service Mesh certificate authority to use
fleet
workload identity
--custom_overlay Specify the name of the overlay file.
Install gateways
Cloud Service Mesh gives you the option to deploy and manage gateways as part of your
service mesh. A gateway describes a load balancer operating at the edge of the
mesh receiving incoming or outgoing HTTP/TCP connections. Gateways are Envoy
proxies that provide you with fine-grained control over traffic entering and
leaving the mesh.
Create a namespace for the ingress gateway if you don't already have one.
Gateways are user workloads, and as a best practice, they shouldn't be
deployed in the control plane namespace. Replace
GATEWAY_NAMESPACE with the name of your namespace.
kubectl create namespace GATEWAY_NAMESPACE
Expected output:
namespace/ GATEWAY_NAMESPACE created
Enable auto-injection on the gateway. The steps required depend on whether
you want to use
default injection labels
(for example, istio-injection=enabled ) or the
revision label on the gateway
namespace. The default revision tag and revision label are used by the
sidecar injector webhook to associate injected proxies with a particular
control plane revision.
Default (recommended)
If you used a default tag revision to enable auto-injection on the
gateway, verify that the default tag exists in the directory that you
specified in --output_dir and that it is pointing to the newly installed
revision.
DIR_PATH /istioctl tag list
Apply the default injection labels to the namespace.
kubectl label namespace GATEWAY_NAMESPACE istio-injection=enabled istio.io/rev-
Revision label
Use the following command to locate the revision label on istiod :
kubectl get deploy -n istio-system -l app=istiod -o \
"jsonpath={.items[*].metadata.labels['istio\.io/rev']}{'\n'}"
The command outputs the revision label that corresponds to the
Cloud Service Mesh version, for example: asm-1268-3
Apply the revision label to the namespace. In the following command,
REVISION is the value of the istiod revision
label that you noted in the previous step.
kubectl label namespace GATEWAY_NAMESPACE \
istio.io/rev= REVISION --overwrite
Expected output:
namespace/ GATEWAY_NAMESPACE labeled
You can ignore the message "istio.io/rev" not found in the
output. That means that the namespace didn't previously have the
istio.io/rev label, which you should expect in new installations of
Cloud Service Mesh or new deployments. Because auto-injection fails if a namespace
has both the istio.io/rev and the istio-injection
label, all kubectl label commands in the Cloud Service Mesh
documentation explicitly specify both labels.
If the gateway namespace is not labelled, the istio-ingressgateway pods
will fail with an ImagePullBackOff error when the gateway attempts to pull
and the auto image. This image should be replaced by the webhook.
Download the example ingress gateway .yaml configuration file from the
anthos-service-mesh-packages repository .
Apply the example ingress gateway .yaml configuration as is, or modify as
needed.
kubectl apply -n GATEWAY_NAMESPACE \
-f CONFIG_PATH /istio-ingressgateway
Expected output:
deployment.apps/istio-ingressgateway created
poddisruptionbudget.policy/istio-ingressgateway created
horizontalpodautoscaler.autoscaling/istio-ingressgateway created
role.rbac.authorization.k8s.io/istio-ingressgateway created
rolebinding.rbac.authorization.k8s.io/istio-ingressgateway created
service/istio-ingressgateway created
serviceaccount/istio-ingressgateway created
Learn more about best practices for gateways .
Deploy and redeploy workloads
Warning: If you are installing sidecars in application pods where CA
connectivity through a direct connection is not available (for example, due to
firewalls or other restrictive features), then you must
Configure CA connectivity through a proxy
after installing the in-cluster control plane and before redeploying workloads.
Cloud Service Mesh uses sidecar proxies to enhance network security, reliability, and
observability. With Cloud Service Mesh, these functions are abstracted away from the
application's primary container and implemented in a common out-of-process proxy
delivered as a separate container in the same Pod.
Your installation isn't complete until you enable automatic sidecar proxy
injection (auto-injection) and restart the Pods for any workloads that
were running on your cluster before you installed Cloud Service Mesh.
To enable auto-injection, you label your namespaces with the
default injection labels
if the default tag is set up, or a revision label
that was set on istiod when you installed Cloud Service Mesh. The default revision
tag and revision label are used by the sidecar injector webhook to associate
injected sidecars with an istiod revision. After adding the label, any
existing Pods in the namespace must be restarted for sidecars to be injected.
Before you deploy new workloads in a new namespace, make sure to configure
auto-injection so that Cloud Service Mesh can monitor and secure traffic.
The steps required to enable auto-injection depend on whether you want to use
default injection labels or the revision label:
Default (Recommended)
If you used a default tag revision to enable auto-injection on the
gateway, verify that the default tag exists in the directory that you
specified in --output_dir and that it is pointing to the newly installed
revision.
DIR_PATH /istioctl tag list
Run the following command. NAMESPACE is the name of the
namespace where you want to enable auto-injection.
kubectl label namespace NAMESPACE istio-injection=enabled istio.io/rev-
The default injection labels inject the revision
the default tag is pointing to.
Revision label
Use the following command to locate the revision label on istiod :
kubectl -n istio-system get pods -l app=istiod --show-labels
The output looks similar to the following:
NAME READY STATUS RESTARTS AGE LABELS
istiod-asm-1268-3-5788d57586-bljj4 1 /1 Running 0 23h app = istiod,istio.io/rev = asm-1268-3,istio = istiod,pod-template-hash = 5788d57586
istiod-asm-1268-3-5788d57586-vsklm 1 /1 Running 1 23h app = istiod,istio.io/rev = asm-1268-3,istio = istiod,pod-template-hash = 5788d57586
In the output, under the LABELS column, note the value of the istiod
revision label, which follows the prefix istio.io/rev= . In this example,
the value is asm-1268-3 .
Apply the revision label and remove the istio-injection label if it
exists. In the following command, NAMESPACE is
the name of the namespace where you want to enable auto-injection, and
REVISION is the revision label you noted in the
previous step.
kubectl label namespace NAMESPACE istio-injection- istio.io/rev= REVISION --overwrite
You can ignore the message "istio-injection not found" in the
output. That means that the namespace didn't previously have the
istio-injection label, which you should expect in new
installations of Cloud Service Mesh or new deployments. Because auto-injection
behavior is undefined when a namespace has both the istio-injection
and the revision label, all kubectl label commands in the
Cloud Service Mesh documentation explicitly ensure that only one is set.
If workloads were running on your cluster before you installed
Cloud Service Mesh, restart the Pods to trigger re-injection.
How you restart Pods depends on your application and the environment the
cluster is in. For example, in your staging environment, you might simply
delete all the Pods, which causes them to restart. But in your production
environment, you might have a process that implements a
blue-green deployment
so that you can safely restart Pods to avoid traffic interruption.
You can use kubectl to perform a rolling restart:
kubectl rollout restart deployment -n NAMESPACE
What's next?
If you mesh consists of clusters outside of Google Cloud, see
Set up a multi-cluster mesh outside of Google Cloud .
Configure an external IP address on-premises .
Deploy the Online Boutique sample application .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
