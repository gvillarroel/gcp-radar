---
title: "Migrating from Istio on GKE to Cloud Service Mesh \_|\_ Cloud Service Mesh\
  \ v1.20 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/migrate-service-mesh
  title: "Migrating from Istio on GKE to Cloud Service Mesh \_|\_ Cloud Service Mesh\
    \ v1.20 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing legacy v1.20 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.20
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrating from Istio on GKE to Cloud Service Mesh
This guide shows how to upgrade a Google Kubernetes Engine (GKE) cluster with
Istio on Google Kubernetes Engine (Istio on GKE) version 1.4 or 1.6
( Beta ) to
managed Cloud Service Mesh with the Google-managed
control plane and Cloud Service Mesh certificate authority.
Prerequisites
The following prerequisites are required to complete this guide:
A GKE cluster with Istio on GKE enabled.
If you have multiple GKE clusters, follow the same steps for
all clusters.
Istio on GKE must be version 1.4 or 1.6.
Ensure that you are running GKE version 1.17.17-gke.3100+,
1.18.16-gke.1600+, 1.19.8-gke.1600+, or later.
The GKE cluster must be running in one of these
locations .
The user or Service Account running this script requires the IAM
permissions documented in
Setting up your project .
This guide is tested on Cloud Shell, so we recommend that you use
Cloud Shell to perform the steps in this guide.
Objectives
Deploy Cloud Service Mesh Google-managed control plane in the regular channel.
This guide is specific to the regular channel, stable or rapid channels require slightly modified instructions.
To learn more about release channels, please visit this link .
Migrate Istio configurations to Cloud Service Mesh.
Configure Cloud Service Mesh certificate authority.
Migrate applications to Cloud Service Mesh.
Upgrade istio-ingressgateway from Istio on GKE to Cloud Service Mesh.
Finalize Cloud Service Mesh migration or roll back to Istio on GKE.
Set up your environment
To set up your environment, follow these steps:
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console page, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a
shell environment with the Google Cloud CLI and the
Google Cloud CLI
already installed, and with values already set for your current project. It
can take a few seconds for the session to initialize.
Note: The script does not work on macOS. The script has been tested on
Cloud Shell only. The script requires the following applications
(which are all included by default in Cloud Shell):
gcloud (version 346.0.0 and later)
kubectl (client version 1.21 and later)
jq
sed
curl
awk
Create the environment variables used in this guide:
# Enter your project ID
export PROJECT_ID= PROJECT_ID
# Copy and paste the following
gcloud config set project ${PROJECT_ID}
export PROJECT_NUM=$(gcloud projects describe ${PROJECT_ID} --format='value(projectNumber)')
export CLUSTER_1= GKE_CLUSTER_NAME
export CLUSTER_1_LOCATION= GKE_CLUSTER_REGION_OR_ZONE
export SHELL_IP=$(curl ifconfig.me) # This is required for private clusters with `master-authorized-networks` enabled.
Create a WORKDIR folder. All files associated with this guide end up in
WORKDIR so that you can delete WORKDIR when you are finished.
mkdir - p addon - to - asm && cd addon - to - asm && export WORKDIR = `pwd`
Create a KUBECONFIG file for this guide. You can also use your
existing KUBECONFIG file that contains the cluster context for the
GKE cluster to be migrated to Cloud Service Mesh.
touch asm - kubeconfig && export KUBECONFIG = `pwd` / asm - kubeconfig
Get credentials for the GKE cluster and store the context
in a variable:
Zonal clusters
gcloud container clusters get-credentials ${CLUSTER_1} \
--zone=${CLUSTER_1_LOCATION}
export CLUSTER_1_CTX=gke_${PROJECT_ID}_${CLUSTER_1_LOCATION}_${CLUSTER_1}
Regional clusters
gcloud container clusters get-credentials ${CLUSTER_1} \
--region=${CLUSTER_1_LOCATION}
export CLUSTER_1_CTX=gke_${PROJECT_ID}_${CLUSTER_1_LOCATION}_${CLUSTER_1}
Your clusters must be registered to a fleet . This step can be done separately prior to the installation or as part of the installation by passing the --fleet-id and one of the --enable-all or --enable-registration flags.
Your project must have the Service Mesh Feature enabled. You could enable
it as part of the installation by passing one of the --enable-all or --enable-registration flags, or by
running the following command prior to the installation:
gcloud container hub mesh enable --project= FLEET_PROJECT_ID
where FLEET_PROJECT_ID is the project-id of the fleet host project.
Optional step
If the cluster is a private cluster (with master-authorized-networks enabled),
add your $SHELL_IP to the master-authorized-networks allowlist.
If you already have access to your cluster, this step might not be required.
Zonal clusters
export SHELL_IP=$(curl ifconfig.me)
gcloud container clusters update ${CLUSTER_1} \
--zone=${CLUSTER_1_LOCATION} \
--enable-master-authorized-networks \
--master-authorized-networks ${SHELL_IP}/32
Regional clusters
export SHELL_IP=$(curl ifconfig.me)
gcloud container clusters update ${CLUSTER_1} \
--region=${CLUSTER_1_LOCATION} \
--enable-master-authorized-networks \
--master-authorized-networks ${SHELL_IP}/32
Install Cloud Service Mesh
In this section, you deploy Cloud Service Mesh with
the Google-managed control plane of regular channel on the GKE cluster. This control
plane is initially deployed alongside as a second (or canary)
control plane.
Download the latest version of the script that installs Cloud Service Mesh
to the current working directory, and make the script executable:
curl https://storage.googleapis.com/csm-artifacts/asm/asmcli > asmcli
chmod +x asmcli
To configure the GKE cluster, run the installation script
to install Cloud Service Mesh with the Google-managed control plane of regular channel:
./asmcli install \
-p ${ PROJECT_ID } \
-l ${ CLUSTER_1_LOCATION } \
-n ${ CLUSTER_1 } \
--fleet_id ${ FLEET_PROJECT_ID } \
--managed \
--verbose \
--output_dir ${ CLUSTER_1 } \
--enable-all \
--channel regular
This step can take a few minutes to complete.
Verify the Google-managed control plane
Copy istioctl to the WORKDIR folder:
cp ./ ${ CLUSTER_1 } /istioctl ${ WORKDIR } /.
In the next section, you download and run the migrate_addon script to assist
in migrating to Cloud Service Mesh. The istioctl command-line utility
needs to be in the same folder as the migrate_addon script. You use the
WORKDIR folder for both the istioctl command-line utility and the
migrate_addon script.
Migrate configurations to Cloud Service Mesh
In this section, you migrate Istio on GKE configurations to
Cloud Service Mesh. The guided script identifies which configurations can and
cannot be migrated.
Download the migration tool and make it executable:
curl https://raw.githubusercontent.com/GoogleCloudPlatform/anthos-service-mesh-packages/main/scripts/migration/migrate-addon > ${ WORKDIR } /migrate_addon
chmod +x ${ WORKDIR } /migrate_addon
Disable the Galley validation webhook. This step is required to migrate some
of the 1.4 configurations to Cloud Service Mesh. Answer Y to both
questions:
${ WORKDIR } /migrate_addon -d tmpdir --command disable-galley-webhook
The output is similar to the following:
tmpdir directory not present. Create directory? Continue? [Y/n] Y
Disabling the Istio validation webhook... Continue? [Y/n] Y
Running: kubectl get clusterrole istio-galley-istio-system -n istio-system -o yaml
Running: kubectl patch clusterrole -n istio-system istio-galley-istio-system --type=json -p=[{"op": "replace", "path": "/rules/2/verbs/0", "value": "get"}]
clusterrole.rbac.authorization.k8s.io/istio-galley-istio-system patched
Running: kubectl get ValidatingWebhookConfiguration istio-galley --ignore-not-found
Running: kubectl delete ValidatingWebhookConfiguration istio-galley --ignore-not-found
validatingwebhookconfiguration.admissionregistration.k8s.io "istio-galley" deleted
Verify and manually migrate the configuration. This step helps identify
some of the configurations that need to be manually migrated before
migrating workloads to the Google-managed control plane.
${ WORKDIR } /migrate_addon -d tmpdir --command config-check
The output is similar to the following:
Installing the authentication CR migration tool...
OK
Checking for configurations that will need to be explicitly migrated...
No resources found
Migrate custom configurations
You might need to manually migrate custom configurations before you migrate to
Cloud Service Mesh. The preceding script identifies custom configurations and
prints information about what is required. These customizations are as
follows:
Detected custom envoy filters are not supported by Cloud Service Mesh.
Remove these if possible. Envoy filters are currently not supported
in the Google-managed control plane.
Detected custom plugin certificate. The plugin certificates will not be
migrated to Cloud Service Mesh. If
plugin certificates
are used with Istio on GKE, these certificates are not used
after the workloads migrate to the Google-managed control plane. All workloads
use certificates signed by Google Cloud Service Mesh certificate authority. Plugin certificates are
not supported by Cloud Service Mesh certificate authority. This message is informational and no
action is required.
Detected security policies that could not be migrated. <Error reason>.
This usually fails because of alpha AuthZ policies that need to be
manually migrated. For more context and information about how to migrate
policies, see
Migrate pre-Istio 1.4 Alpha security policy to the current APIs .
For more information regarding the error message, see
security-policy-migrate .
Detected possibly incompatible VirtualService config. <Specific
deprecated config>. You need to update the following VirtualService
configurations:
Use of appendHeaders is not supported. Use spec.http.headers instead.
Use of websocketUpgrade is not needed. It is turned on by default.
Replace the field abort.percent with abort.percentage .
Detected custom installation of mixer resources that could not be
migrated. Requires manual migration to telemetryv2. If custom mixer
policies are configured in addition to the default
Istio on GKE installation, you need to manually migrate these
policies to telemetry v2. For more information about how to do this, see
Customizing Istio Metrics .
Deployment <deploymentName> could be a custom gateway. Migrate
this manually. You need to manually migrate all gateway Deployments other
than the istio-ingressgateway (which is installed by default). For
information about how to upgrade gateways for the
Google-managed control plane, see
Configuring the Google-managed control plane .
To migrate configurations, follow these steps:
Manually migrate all custom configurations (except for the last configuration
listed) before proceeding to step 2.
Use the migration tool to migrate the configurations that can be
automatically migrated (or ignored).
${ WORKDIR } /migrate_addon -d tmpdir --command migrate-configs
The output is similar to the following:
Converting authentication CRs...
2021/06/25 20:44:58 found root namespace: istio-system
2021/06/25 20:44:59 SUCCESS converting policy /default
Running: kubectl apply --dry-run=client -f beta-policy.yaml
peerauthentication.security.istio.io/default created (dry run)
Applying converted security policies in tmpdir/beta-policy.yaml... Continue? [Y/n] Y
Running: kubectl apply -f beta-policy.yaml
peerauthentication.security.istio.io/default created
OK
Apply the Cloud Service Mesh certificate authority root trust. This lets you migrate from the
current Citadel CA to Cloud Service Mesh certificate authority without incurring any downtime
to your applications.
${ WORKDIR } /migrate_addon -d tmpdir --command configure-mesh-ca
The output is similar to the following:
Configuring Istio on GKE to trust Anthos Service Mesh... Continue? [Y/n] Y
Running: kubectl get cm -n istio-system istio-asm-managed -oyaml
Running: kubectl -n istio-system apply -f -
secret/meshca-root created
Running: kubectl get cm istio -n istio-system -o yaml
Running: kubectl get cm istio -n istio-system -o yaml
Running: kubectl replace -f -
configmap/istio replaced
Running: kubectl get deploy istio-pilot -n istio-system -o yaml
Running: kubectl patch deploy istio-pilot -n istio-system -p={"spec":{"template":{"spec":{"containers":[{
"name":"discovery",
"image":"gcr.io/gke-release/istio/pilot:1.4.10-gke.12",
"env":[{"name":"PILOT_SKIP_VALIDATE_TRUST_DOMAIN","value":"true"}]
}]}}}}
deployment.apps/istio-pilot patched
Running: kubectl get deploy istio-citadel -n istio-system -o yaml
Running: kubectl patch deploy istio-citadel -n istio-system -p={"spec":{"template":{"spec":{
"containers":[{
"name":"citadel",
"args": ["--append-dns-names=true", "--grpc-port=8060", "--citadel-storage-namespace=istio-system", "--custom-dns-names=istio-pilot-service-account.istio-system:istio-pilot.istio-system", "--monitoring-port=15014", "--self-signed-ca=true", "--workload-cert-ttl=2160h", "--root-cert=/var/run/root-certs/meshca-root.pem"],
"volumeMounts": [{"mountPath": "/var/run/root-certs", "name": "meshca-root", "readOnly": true}]
}],
"volumes": [{"name": "meshca-root", "secret":{"secretName": "meshca-root"}}]
}}}}
deployment.apps/istio-citadel patched
OK
Waiting for root certificate to distribute to all pods. This will take a few minutes...
ASM root certificate not distributed to asm-system, trying again later
ASM root certificate not distributed to asm-system, trying again later
ASM root certificate distributed to namespace asm-system
ASM root certificate distributed to namespace default
ASM root certificate distributed to namespace istio-operator
ASM root certificate not distributed to istio-system, trying again later
ASM root certificate not distributed to istio-system, trying again later
ASM root certificate distributed to namespace istio-system
ASM root certificate distributed to namespace kube-node-lease
ASM root certificate distributed to namespace kube-public
ASM root certificate distributed to namespace kube-system
ASM root certificate distributed to namespace online-boutique
Waiting for proxies to pick up the new root certificate...
OK
Configuring Istio Addon 1.6 to trust Anthos Service Mesh...
Running: kubectl get cm -n istio-system env-asm-managed -ojsonpath={.data.TRUST_DOMAIN} --ignore-not-found
Running: kubectl get cm istio-istio-1611 -n istio-system -o yaml
Running: kubectl replace -f -
configmap/istio-istio-1611 replaced
Running: kubectl patch -n istio-system istiooperators.install.istio.io istio-1-6-11-gke-0 --type=merge
istiooperator.install.istio.io/istio-1-6-11-gke-0 patched
Running: kubectl -n istio-system get secret istio-ca-secret -ojsonpath={.data.ca-cert\.pem}
Running: kubectl -n istio-system patch secret istio-ca-secret
secret/istio-ca-secret patched
Running: kubectl patch deploy istiod-istio-1611 -n istio-system
deployment.apps/istiod-istio-1611 patched
Running: kubectl rollout status -w deployment/istiod-istio-1611 -n istio-system
Waiting for deployment "istiod-istio-1611" rollout to finish: 1 old replicas are pending termination...
deployment "istiod-istio-1611" successfully rolled out
Running: kubectl apply -f - -n istio-system
envoyfilter.networking.istio.io/trigger-root-cert created
Waiting for proxies to pick up the new root certificate...
Running: kubectl delete envoyfilter trigger-root-cert -n istio-system
OK
This step takes a few minutes for the Cloud Service Mesh root certificate
to be distributed to all namespaces. Wait until the script finishes with an
OK message.
The previous step does the following:
Installs the Cloud Service Mesh certificate authority root of trust for all workloads in the
cluster.
Changes the configurations of the control plane Deployments
istio-pilot , istiod , and istio-citadel . The changes include the following:
Upgrading the images to the latest builds.
Disabling trust-domain verification by setting
PILOT_SKIP_VALIDATE_TRUST_DOMAIN=true .
Adding the Cloud Service Mesh certificate authority root of trust to istio-citadel to distribute
the ConfigMap to all namespaces.
Adding the Cloud Service Mesh certificate authority root of trust to istio-ca-secret to distribute the root
certificate.
Stores the older configuration manifests in the tmpdir .
Provides steps for the rollback function (documented later).
Migrate workloads to Cloud Service Mesh
In this section, you migrate workloads running on Istio on GKE to Cloud Service Mesh. After migration, you verify that the correct sidecar
proxies (Cloud Service Mesh) are injected in every Pod and that the application
is working as expected.
If you are performing this procedure on an existing cluster, select a namespace
to be migrated.
Define the namespace as a variable; this namespace is migrated to
Cloud Service Mesh:
export NAMESPACE= NAMESPACE_NAME
To migrate workloads to Cloud Service Mesh, you must relabel the namespace
for Cloud Service Mesh. Labeling the namespace allows Cloud Service Mesh
to automatically inject sidecars to all workloads. To label the namespace,
run the following command, setting the label to asm-managed :
kubectl --context= ${ CLUSTER_1_CTX } label namespace ${ NAMESPACE } istio.io/rev=asm-managed istio-injection- --overwrite
Perform a rolling restart of all Deployments in the namespace:
kubectl --context= ${ CLUSTER_1_CTX } rollout restart deployment -n ${ NAMESPACE }
The output is similar to the following:
deployment.apps/deploymentName1 restarted
deployment.apps/deploymentName2 restarted
...
Ensure that all Pods are restarted and are running with two containers per
Pod:
kubectl --context= ${ CLUSTER_1_CTX } -n ${ NAMESPACE } get pods
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
deploymentName1-PodName 2/2 Running 0 101s
deploymentName2-PodName 2/2 Running 2 100s
...
A good way to verify this step is by looking at the AGE of the Pods. Ensure
that the value is short—for example, a few minutes.
Check the sidecar Envoy proxy version from any one of the Pods from any
Deployment in the namespace to confirm that you now have Cloud Service Mesh Envoy proxies deployed:
export POD_NAME= NAME_OF_ANY_POD_IN_NAMESPACE
kubectl --context=${CLUSTER_1_CTX} get pods ${POD_NAME} -n ${NAMESPACE} -o json | jq '.status.containerStatuses[].image'
The output is similar to the following:
"gcr.io/gke-release/asm/proxyv2:1.11.5-asm.3"
"appContainerImage"
Verify and test your applications after restarting.
kubectl --context=${CLUSTER_1_CTX} -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
(Optional) If you want Google to manage upgrades of the proxies, enable the Google-managed data plane
View migration status
Run the following command to view the status of the migration:
kubectl get cm/asm-addon-migration-state -n istio-system -ojsonpath={.data}
The output indicates whether the migrations is complete, pending, or failed:
{"migrationStatus":"SUCCESS"}
{"migrationStatus":"PENDING"}
{"migrationStatus":"MIGRATION_CONFIG_ERROR"}
{"migrationStatus":"CONTROLPLANE_PROVISION_ERROR"}
If migrationStatus outputs SUCCESS , the control plane has successfully
upgraded to Cloud Service Mesh. To manually update the data plane, complete the steps
in Migrate workloads .
If migrationStatus outputs any other status than SUCCESS , you can choose to
either:
Take no extra action if the migration error does not impact your existing
Istio on GKE workloads. Otherwise rollback if needed.
Update the custom configurations
in the cluster and rerun the migration manually if migrationStatus shows
MIGRATION_CONFIG_ERROR .
You can view the control plane metrics in Metrics Explorer after successful migration, see verify_control_plane_metrics
Access Cloud Service Mesh dashboards
In this section, you go to the Cloud Service Mesh dashboards and make sure
that you are receiving the golden signals for all Services. You should also be
able to see your application topology.
In the Google Cloud console, go to the Cloud Service Mesh page.
Go to Cloud Service Mesh
You should be able to view the metrics and topology for your Services.
To learn more about Cloud Service Mesh dashboards, see
Exploring Cloud Service Mesh in the Google Cloud console .
Note: The topology and table view in the Cloud Service Mesh dashboards might
take a few minutes to represent the correct data.
Complete a successful migration
In this section, you finalize your Istio on GKE to
Cloud Service Mesh migration. Before proceeding with this section, make sure
that you want to proceed with Cloud Service Mesh. This section also helps you
clean up your Istio on GKE artifacts. If you want to roll back to Istio on GKE, proceed to the next section .
Replace the istio-ingressgateway (part of standard
Istio on GKE) with the Google-managed control plane versioned
gateway:
${ WORKDIR } /migrate_addon -d tmpdir --command replace-gateway
The output is similar to the following:
Replacing the ingress gateway with an Anthos Service Mesh gateway... Continue? [Y/n] Y
Running: kubectl label namespace istio-system istio-injection- istio.io/rev- --overwrite
label "istio.io/rev" not found.
namespace/istio-system labeled
Running: kubectl apply -f -
serviceaccount/asm-ingressgateway created
deployment.apps/asm-ingressgateway created
role.rbac.authorization.k8s.io/asm-ingressgateway created
rolebinding.rbac.authorization.k8s.io/asm-ingressgateway created
Running: kubectl wait --for=condition=available --timeout=600s deployment/asm-ingressgateway -n istio-system
deployment.apps/asm-ingressgateway condition met
Scaling the Istio ingress gateway to zero replicas... Continue? [Y/n] Y
Running: kubectl -n istio-system patch hpa istio-ingressgateway --patch {"spec":{"minReplicas":1}}
horizontalpodautoscaler.autoscaling/istio-ingressgateway patched (no change)
Running: kubectl -n istio-system scale deployment istio-ingressgateway --replicas=0
deployment.apps/istio-ingressgateway scaled
OK
Reconfigure the webhook to use the Google-managed control plane; all
workloads start by using the Google-managed control plane:
${ WORKDIR } /migrate_addon -d tmpdir --command replace-webhook
The output is similar to the following:
Configuring sidecar injection to use Anthos Service Mesh by default... Continue? [Y/n] Y
Running: kubectl patch mutatingwebhookconfigurations istio-sidecar-injector --type=json -p=[{"op": "replace", "path": "/webhooks"}]
mutatingwebhookconfiguration.admissionregistration.k8s.io/istio-sidecar-injector patched
Revision tag "default" created, referencing control plane revision "asm-managed". To enable injection using this
revision tag, use 'kubectl label namespace <NAMESPACE> istio.io/rev=default'
OK
Relabel all the namespaces with the Cloud Service Mesh label, and perform a
rolling restart of all workloads to get them on the
Google-managed control plane:
export NAMESPACE= NAMESPACE_NAME \
kubectl --context=${CLUSTER_1_CTX} label namespace ${NAMESPACE}
istio.io/rev=asm-managed istio-injection- --overwrite`
kubectl --context=${CLUSTER_1_CTX} rollout restart deployment -n
${NAMESPACE}
You can ignore the message "istio-injection not found" in the
output. That means that the namespace didn't previously have the
istio-injection label, which you should expect in new
installations of Cloud Service Mesh or new deployments. Because auto-injection
fails if a namespace has both the istio-injection and the
revision label, all kubectl label commands in the
Istio on GKE documentation include removing the
istio-injection label.
Finalize the migration by running the following command:
${ WORKDIR } /migrate_addon -d tmpdir --command write-marker
The output is similar to the following:
Current migration state: SUCCESS
Running: kubectl apply -f -
configmap/asm-addon-migration-state created
OK
Disable Istio on GKE by running the following command:
Zonal clusters
gcloud beta container clusters update ${CLUSTER_1} \
--project=$PROJECT_ID \
--zone=${CLUSTER_1_LOCATION} \
--update-addons=Istio=DISABLED
Regional clusters
gcloud beta container clusters update ${CLUSTER_1} \
--project=$PROJECT_ID \
--region=${CLUSTER_1_LOCATION} \
--update-addons=Istio=DISABLED
Clean up configurations by running the following command:
${ WORKDIR } /migrate_addon -d tmpdir --command cleanup
The output is similar to the following:
Cleaning up old resources...
Running: kubectl get cm -n istio-system asm-addon-migration-state -ojsonpath={.data.migrationStatus}
Will delete IstioOperator/istio-1-6-11-gke-0.istio-system
Will delete ServiceAccount/istio-citadel-service-account.istio-system
...
Will delete DestinationRule/istio-policy.istio-system
Will delete DestinationRule/istio-telemetry.istio-system
Will delete Secret/istio-ca-secret.istio-system
Deleting resources previously listed... Continue? [Y/n] Y
Running: kubectl delete IstioOperator istio-1-6-11-gke-0 -n istio-system --ignore-not-found
istiooperator.install.istio.io "istio-1-6-11-gke-0" deleted
Running: kubectl delete ServiceAccount istio-citadel-service-account -n istio-system --ignore-not-found
serviceaccount "istio-citadel-service-account" deleted-ingressgateway -n istio-system --ignore-not-found
...
Running: kubectl delete Secret istio-ca-secret -n istio-system --ignore-not-found
secret "istio-ca-secret" deleted
Running: kubectl delete -n istio-system jobs -lk8s-app=istio,app=security
job.batch "istio-security-post-install-1.4.10-gke.8" deleted
Ensure that Istio on GKE Deployments and Services have been
successfully removed from the cluster:
kubectl --context= ${ CLUSTER_1_CTX } -n istio-system get deployments,services
The output is similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
deployment.apps/asm-ingressgateway 1/1 1 1 10m
NAME TYPE CLUSTER-IP EXTERNAL-IP AGE PORT(S)
service/istio-ingressgateway LoadBalancer 10.64.5.208 34.139.100.237 95m 15020:31959/TCP,80:30971/TCP,443:31688/TCP,31400:31664/TCP,15029:32493/TCP,15030:31722/TCP,15031:30198/TCP,15032:31910/TCP,15443:31222/TCP
You only see the Cloud Service Mesh ingress gateway Service and Deployment.
Congratulations. You have successfully migrated from Istio on GKE
to Cloud Service Mesh with the Google-managed control plane and
Cloud Service Mesh certificate authority without any downtime to your applications.
Roll back changes
In this section, if you do not want to proceed with Cloud Service Mesh, you can
roll back your Cloud Service Mesh changes. After completing this section, your
workloads move back to Istio on GKE.
Rollback the mutating webhook changes:
${WORKDIR}/migrate_addon -d tmpdir --command rollback-mutatingwebhook
Relabel the namespaces to use Istio on GKE sidecar injection
instead of Cloud Service Mesh by running the following command:
for namespaces with version 1.4 workloads:
export NAMESPACE= NAMESPACE_NAME
kubectl --context=${CLUSTER_1_CTX} label namespace ${NAMESPACE} istio.io/rev- istio-injection=enabled --overwrite
for namespaces with version 1.6 workloads:
export NAMESPACE= NAMESPACE_NAME
kubectl --context=${CLUSTER_1_CTX} label namespace ${NAMESPACE} istio.io/rev=istio-1611 --overwrite
Perform a rolling restart of all Deployments in the namespace:
kubectl --context= ${ CLUSTER_1_CTX } rollout restart deployment -n ${ NAMESPACE }
Wait a few minutes and ensure that all Pods are running:
kubectl --context= ${ CLUSTER_1_CTX } -n ${ NAMESPACE } get pods
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
deploymentName1-PodName 2/2 Running 0 101s
deploymentName2-PodName 2/2 Running 2 100s
...
Verify the sidecar Envoy proxy version from any one of the Pods to confirm
that you have Istio on GKE v1.4 Envoy proxies deployed:
export POD_NAME= NAME_OF_ANY_POD_IN_NAMESPACE
kubectl --context=${CLUSTER_1_CTX} get pods ${POD_NAME} -n ${NAMESPACE} -o json | jq '.status.containerStatuses[].image'
The output is similar to the following:
"gke.gcr.io/istio/proxyv2:1.4.10-gke.8"
"appContainerImage"
or
"gke.gcr.io/istio/proxyv2:1.6.14-gke.4"
"appContainerImage"
Verify and test your applications after restarting.
Roll back the Cloud Service Mesh certificate authority changes:
${ WORKDIR } /migrate_addon -d tmpdir --command rollback-mesh-ca
Re-enable the Istio Galley webhook:
${ WORKDIR } /migrate_addon -d tmpdir --command enable-galley-webhook
You have successfully rolled back your changes to Istio on GKE.
Deploy Online Boutique
In this section, you deploy a sample microservices-based application called
Online Boutique to the GKE cluster. Online Boutique is deployed
in an Istio-enabled namespace. You verify that the application is working and
that Istio on GKE is injecting the sidecar proxies to every Pod.
If you already have existing clusters with applications, you can skip creating a
new namespace and deploying Online Boutique. You can follow the same process for
all namespaces in the
Migrate workloads to Cloud Service Mesh section.
Deploy Online Boutique to the GKE cluster:
kpt pkg get \
https://github.com/GoogleCloudPlatform/microservices-demo.git/release \
online-boutique
kubectl --context= ${ CLUSTER_1_CTX } create namespace online-boutique
kubectl --context= ${ CLUSTER_1_CTX } label namespace online-boutique istio-injection=enabled
kubectl --context= ${ CLUSTER_1_CTX } -n online-boutique apply -f online-boutique
Wait until all Deployments are ready:
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment adservice
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment checkoutservice
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment currencyservice
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment emailservice
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment frontend
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment paymentservice
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment productcatalogservice
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment shippingservice
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment cartservice
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment loadgenerator
kubectl -- context =$ { CLUSTER_1_CTX } - n online - boutique wait -- for = condition = available -- timeout = 5 m deployment recommendationservice
Ensure that there are two containers per Pod—the application container
and the Istio sidecar proxy that Istio on GKE automatically
injects into the Pod:
kubectl --context= ${ CLUSTER_1_CTX } -n online-boutique get pods
The output is similar to the following:
NAME READY STATUS RESTARTS AGE
adservice-7cbc9bd9-t92k4 2/2 Running 0 3m21s
cartservice-d7db78c66-5qfmt 2/2 Running 1 3m23s
checkoutservice-784bfc794f-j8rl5 2/2 Running 0 3m26s
currencyservice-5898885559-lkwg4 2/2 Running 0 3m23s
emailservice-6bd8b47657-llvgv 2/2 Running 0 3m27s
frontend-764c5c755f-9wf97 2/2 Running 0 3m25s
loadgenerator-84cbcd768c-5pdbr 2/2 Running 3 3m23s
paymentservice-6c676df669-s779c 2/2 Running 0 3m25s
productcatalogservice-7fcf4f8cc-hvf5x 2/2 Running 0 3m24s
recommendationservice-79f5f4bbf5-6st24 2/2 Running 0 3m26s
redis-cart-74594bd569-pfhkz 2/2 Running 0 3m22s
shippingservice-b5879cdbf-5z7m5 2/2 Running 0 3m22s
You can also check the sidecar Envoy proxy version from any one of the
Pods to confirm that you have Istio on GKE v1.4 Envoy proxies
deployed:
export FRONTEND_POD =$ ( kubectl get pod - n online - boutique - l app = frontend -- context =$ { CLUSTER_1_CTX } - o jsonpath = '{.items[0].metadata.name}' )
kubectl -- context =$ { CLUSTER_1_CTX } get pods $ { FRONTEND_POD } - n online - boutique - o json | jq '.status.containerStatuses[].image'
The output is similar to the following:
"gke.gcr.io/istio/proxyv2:1.4.10-gke.8"
"gcr.io/google-samples/microservices-demo/frontend:v0.3.4"
Access the application by navigating to the IP address of the
istio-ingressgateway Service IP address:
kubectl -- context =$ { CLUSTER_1_CTX } - n istio - system get service istio - ingressgateway - o jsonpath = '{.status.loadBalancer.ingress[0].ip}'
Frequently asked questions
This section describes frequently asked questions and related answers about
migrating from Istio on GKE to Cloud Service Mesh.
Why am I being migrated from Istio on GKE to Cloud Service Mesh?
Istio on Google Kubernetes Engine is a beta feature that deploys Google-managed Istio on a
Google Kubernetes Engine (GKE) cluster. Istio on GKE deploys an
unsupported version (Istio version 1.4). To provide you with the latest service
mesh features and a supported service mesh implementation, we are upgrading all
Istio on GKE users to Cloud Service Mesh.
Cloud Service Mesh is Google's managed and supported service mesh product
powered by Istio APIs. Cloud Service Mesh is to Istio what GKE
is to Kubernetes. Because Cloud Service Mesh is based on Istio APIs, you can
continue to use your Istio configurations when you migrate to
Cloud Service Mesh. In addition, there is no proprietary vendor lock-in.
Cloud Service Mesh provides the following benefits:
A Google-managed and Google-supported service mesh.
Istio APIs with no vendor lock-in.
Out-of-the-box telemetry dashboards and SLO management without
a requirement to manage additional third-party solutions.
Google-hosted certificate authority options.
Integration with Google Cloud networking and Identity-Aware Proxy (IAP).
Hybrid and multi-cloud platform support.
To learn more about Cloud Service Mesh features and capabilities, see
Google-managed control plane supported features .
Is there any downtime associated with this migration?
The migration script is designed to avoid downtime. The script installs
Cloud Service Mesh as a
canary control plane
alongside your existing Istio control plane. The istio-ingressgateway is
upgraded in place. You then relabel the Istio-enabled namespaces to start
using Cloud Service Mesh with Cloud Service Mesh certificate authority.
Ensure that you have
PodDisruptionBudgets
properly configured for your applications so that you do not experience
any application downtime. Even though you can avoid downtime, if you are
performing this migration yourself, we recommend that you perform this migration
during a scheduled maintenance window. Google-driven migrations are
performed during a
GKE maintenance window .
Ensure that your GKE clusters have maintenance windows configured.
Is there any cost associated with using Cloud Service Mesh?
There are two ways to use Cloud Service Mesh on GKE:
If you are an GKE Enterprise subscriber, Cloud Service Mesh is included as
part of your GKE Enterprise subscription .
If you are not an GKE Enterprise subscriber, you can use
Cloud Service Mesh as a standalone product on GKE (on
Google Cloud). For more information, see
Cloud Service Mesh pricing details .
Are there any features or configurations that are not supported in the latest version of Cloud Service Mesh?
The script checks all Istio configurations and migrates them to the latest
Cloud Service Mesh version. There are certain configurations that might require
additional steps to be migrated from Istio version 1.4 to Cloud Service Mesh
version 1.10. The script performs a configuration check and informs you if any
configurations require additional steps.
Does migrating change my current Istio configurations?
No, your Istio configurations work on Cloud Service Mesh without requiring any
changes.
After I migrate to Cloud Service Mesh, can I migrate back to Istio?
Yes, there is no commitment to use Cloud Service Mesh. You can
uninstall Cloud Service Mesh
and reinstall Istio at any time.
If the migration fails, is it possible to roll back?
Yes, the script lets you roll back to your previous Istio on GKE
version.
Which version of Istio can I migrate by using this script?
The script assists you in migrating from Istio on GKE version 1.4
to Cloud Service Mesh version 1.10. The script validates your Istio version
during the pre-migration stage, and informs you whether your Istio version can
be migrated.
How can I get additional help with this migration?
Our Support team is glad to help. You can open a
support case
from the Google Cloud console. To learn more, see
Managing support cases .
What happens if I don't migrate to Cloud Service Mesh?
Your Istio components continue to work, but Google no longer manages your Istio
installation. You no longer receive automatic updates, and the installation is
not guaranteed to work as the Kubernetes cluster version updates.
For more information, see
Istio support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
