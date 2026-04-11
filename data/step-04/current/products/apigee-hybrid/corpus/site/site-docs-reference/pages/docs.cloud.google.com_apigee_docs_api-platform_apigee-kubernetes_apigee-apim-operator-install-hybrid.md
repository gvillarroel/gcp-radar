---
title: "Install the Apigee Operator for Kubernetes for Apigee hybrid \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/apigee-kubernetes/apigee-apim-operator-install-hybrid
  title: "Install the Apigee Operator for Kubernetes for Apigee hybrid \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Install the Apigee Operator for Kubernetes for Apigee hybrid
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Preview
— Apigee Operator for Kubernetes for Apigee hybrid
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes the steps required to install and configure the
Apigee Operator for Kubernetes for Apigee hybrid.
To learn more about the benefits of using the Apigee Operator for Kubernetes,
see
Apigee Operator for Kubernetes overview .
If you are not using Apigee hybrid, see Install the Apigee Operator for Kubernetes to install the Apigee Operator for Kubernetes for Apigee.
Before you begin
Before you begin, make sure that you have the following:
Required roles
For the permissions that you need to set up the resources required to install and use the Apigee Operator for Kubernetes, ask your administrator to grant you the following IAM roles on the organization:
Create and manage service accounts : Service Account Admin ( roles/iam.serviceAccountAdmin )
Create and manage Apigee resources : Apigee Admin ( roles/apigee.admin )
For more information about granting roles, see
Manage access to projects, folders, and
organizations .
You might also be able to get the required permissions through custom roles or other predefined roles.
Required set up tasks
Before you install the Apigee Operator for Kubernetes, make sure to complete the following tasks to set up the resources you need to use the feature:
Install Apigee hybrid using version 1.15.0 or later. see The big picture for instructions to install Apigee hybrid.
Create a Kubernetes cluster in a cloud provider that supports Istio Gateway, such as Google Cloud, Azure, or Amazon.
Note: The instructions in these procedures are intended to work with installations on any provider that supports Istio Gateway. The steps using gcloud are for communication with the Google Cloud project that contains your Apigee hybrid instance.
Install Istio Gateway into your K8s cluster:
For clusters on GKE:
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.1.0/standard-install.yaml
curl -L https://istio.io/downloadIstio | sh -
cd 1.6.11-asm.1
export PATH=$PWD/bin:$PATH
istioctl install --set profile=minimal --set values.global.platform=gke -y
For clusters on other providers:
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.1.0/standard-install.yaml
curl -L https://istio.io/downloadIstio | sh -
cd 1.6.11-asm.1
export PATH=$PWD/bin:$PATH
istioctl install --set profile=minimal -y
Deploy Istio Gateway into your Kubernetes cluster.
Create a file named gateway.yaml with the following contents to deploy the Istio Gateway with the following contents:
#gateway.yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
name: istio-gateway
namespace: default
annotations:
service.beta.kubernetes.io/port_80_health-probe_protocol: tcp
spec:
gatewayClassName: istio
listeners:
- name: default
hostname: "*.httpbin.com"
port: 80
protocol: HTTP
allowedRoutes:
namespaces:
from: All
Note: The annotation in the metadata is only needed for clusters on AKS due to istio open issue 46769 . You may omit the metadata for other Kubernetes clusters.
Apply the file to your cluster with the following command:
kubectl apply -f gateway.yaml
Verify the Istio Gateway setup (optional)
For the purposes of this guide, we recommend that you deploy a sample httpbin application in the default namespace to test the gateway you deployed.
Deploy a backend application to your Kubernetes cluster to test the gateway.
Create a new file named target.yaml with the following content into the new file
kubectl apply -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
name: httpbin
---
apiVersion: v1
kind: Service
metadata:
name: httpbin
labels:
app: httpbin
service: httpbin
spec:
ports:
- name: http
port: 8000
targetPort: 8080
selector:
app: httpbin
---
apiVersion: apps/v1
kind: Deployment
metadata:
name: httpbin
spec:
replicas: 1
selector:
matchLabels:
app: httpbin
version: v1
template:
metadata:
labels:
app: httpbin
version: v1
spec:
serviceAccountName: httpbin
containers:
- image: docker.io/mccutchen/go-httpbin:v2.15.0
imagePullPolicy: IfNotPresent
name: httpbin
ports:
- containerPort: 8080
EOF
Tip: You can also save the lines between the <<EOF and EOF tags as a file named target.yaml . Then, Apply the configuration to your cluster with the following command:
kubectl apply -f target.yaml
Deploy the HTTPRoute resource to your cluster to map traffic from the Gateway to your backend service.
For the purposes of this guide, we recommend that you deploy an external Gateway and HTTPRoute, following the steps in Create an HTTPRoute .
For more information on the HTTPRoute resource, see Deploy the HTTPRoute (for internal Gateways) or Create an HTTPRoute (for external Gateways).
Create an HTTPRoute following the instructions in create the HTTPRoute using the following yaml configuration:
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
name: http-bin-route
namespace: default
spec:
parentRefs:
- name: istio-gateway
namespace: default
hostnames: ["example.httpbin.com"]
rules:
- matches:
- path:
type: PathPrefix
value: /get
backendRefs:
- name: httpbin
port: 8000
Apply the file to your cluster:
kubectl apply -f httproute.yaml
Verify the GKE Gateway setup to confirm that it is working as expected.
Note: It may take up to five minutes for the applied changes to propagate. If you do not see the expected output for the steps in this section, wait a few minutes and try again.
Get the Gateway details using the following command
kubectl get gateway global-ext-lb1
The output should appear similar to the following:
NAME CLASS ADDRESS PROGRAMMED AGE
istio-gateway istio 34.54.193.72 True 11d
Confirm that an IP address is assigned to the Gateway and that the value of PROGRAMMED is True .
Describe the Gateway to confirm the route is attached:
kubectl describe gateway istio-gateway
The output should look similar to the following:
...
Listeners:
Attached Routes: 1
Conditions:
Last Transition Time: 2024-10-03T03:10:17Z
...
Confirm that the value of Attached Routes is 1, indicating that the route is attached.
Send a request to the Gateway
curl http:// GATEWAY_IP_ADDRESS /get \
-H "Host: example.httpbin.com"
Where: GATEWAY_IP_ADDRESS is the IP address of the Gateway. You can retrieve the Gateway IP address using the following command, where GATEWAY_NAME is the name of the Gateway:
kubectl get gateways.gateway.networking.k8s.io GATEWAY_NAME -o=jsonpath="{.status.addresses.value}"
For example:
curl http://34.54.193.72/get -H "Host: example.httpbin.com"
The response should appear similar to the following:
{
"args": {},
"headers": {
"Accept": "*/*",
"Host": "http://example.httpbin.com",
"User-Agent": "curl/8.7.1",
"X-Cloud-Trace-Context": "2bb8a80e29e80662ff9cb89971c447d9/13083106619927322701"
},
"origin": "67.164.1.10,34.54.193.72",
"url": "http://example.httpbin.com/get"
}
Install the Apigee Operator for Kubernetes
This procedure describes the steps required to install and configure the Apigee Operator for Kubernetes.
Install and configure the Apigee Operator for Kubernetes
The following sections describe the steps required to install and configure the Apigee Operator for Kubernetes:
Set environment variables .
Create and configure the APIM service account .
Install the Apigee Operator for Kubernetes.
Create an Apigee Hybrid environment.
Install the Apigee Hybrid Environment using helm.
Set environment variables
In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables:
export PROJECT_ID= PROJECT_ID
export APIGEE_ORG= APIGEE_ORG
Where:
PROJECT_ID is the ID of the project with your Apigee Hybrid instance.
APIGEE_ORG is the Organization name of your Apigee Hybrid instance.
Confirm that the environment variables are set correctly with the following command:
echo $PROJECT_ID $APIGEE_ORG
Create and configure the APIM service account
Create a service account to connect to the Apigee Hybrid config plane.
Create the apigee-apim-gsa service account to connect to Google Cloud services
gcloud iam service-accounts create apigee-apim-gsa
Grant the Apigee Admin role to the service account you created using the following command. This role is required to create and manage Apigee resources
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member "serviceAccount:apigee-apim-gsa@$PROJECT_ID.iam.gserviceaccount.com" \
--role "roles/apigee.admin"
Download the corresponding json key file for the service account.
Create and download the $PROJECT_ID -apigee-apim-gsa.json key file with the following command:
gcloud iam service-accounts keys create $PROJECT_ID-apigee-apim-gsa.json \
--iam-account=apigee-apim-gsa@$PROJECT_ID.iam.gserviceaccount.com
--project=$PROJECT_ID
Verify that the file downloaded correctly:
ls $PROJECT_ID-apigee-apim-gsa.json
Install the Apigee Operator for Kubernetes
Install the Kubernetes custom resources definitions (CRDs) and Apigee Operator for Kubernetes:
Create a namespace for the Apigee Operator for Kubernetes
kubectl create namespace apim
Install the Apigee Operator for Kubernetes custom resource definitions (CRDs):
helm install apigee-apim-crds -n apim \
oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-crds \
--version 1.1.0 \
--atomic
Install the Apigee Operator for Kubernetes:
helm install apigee-apim-operator -n apim \
oci://us-docker.pkg.dev/apigee-release/apigee-k8s-tooling-helm-charts/apigee-apim-operator-helm \
--version 1.1.0 \
--set serviceAccount=apigee-apim-gsa@$PROJECT_ID.iam.gserviceaccount.com \
--set apigeeOrg=$APIGEE_ORG \
--set apigeeEnv= ENV_NAME \
--set-file serviceAccountKeyFileContent=$PROJECT_ID-apigee-apim-gsa-key.json \
--atomic
Where ENV_NAME is the name of the Apigee Hybrid environment in which you want to install the Apigee Operator for Kubernetes.
Confirm that the installation completed successfully:
helm list -n apim
The output should look similar to the following:
NAME NAMESPACE REVISION UPDATED STATUS CHART APP VERSION
apigee-apim-crds apim 1 2025-09-01 00:17:03.399810627 +0000 UTC deployed apigee-apim-operator-crds-1.1.0 1.1.0
apigee-apim-operator apim 1 2025-09-01 00:15:00.362829981 +0000 UTC deployed apigee-apim-operator-helm-1.1.0 1.1.0
Confirm that the Kubernetes service account (KSA) was created with the required annotation:
kubectl describe serviceaccounts apim-ksa -n apim
The output should look similar to the following:
Name: apim-ksa
Namespace: apim
...
Annotations: iam.gke.io/gcp-service-account: apigee-apim-gsa@my-project-id.iam.gserviceaccount.com
Confirm that the Apigee Operator for Kubernetes is up and running in the cluster's pods:
kubectl get pods -n apim
The output should look similar to the following:
NAME READY STATUS RESTARTS AGE
apigee-apim-operator-8559d4994b-h55fl 1/1 Running 0 8m34s
If the STATUS is not Running, or READY does not display 1/1, see Troubleshoot the Apigee Operator for Kubernetes to troubleshoot the installation.
Create an Apigee hybrid environment
To use the Apigee Operator for Kubernetes in Apigee Hybrid, you must create an environment with a special flag for service extension.
Get a token to authenticate to the Apigee API.
On the command line, get your gcloud authentication credentials, as the following example shows:
TOKEN=$(gcloud auth print-access-token)
To check that your token was populated, use echo , as the following example shows:
echo $TOKEN
This should display your token as an encoded string.
For more information, see
gcloud command-line tool overview .
Create the environment using one of the following commands:
For Subscription 2021 organizations:
curl -X POST "https://apigee.googleapis.com/v1/organizations/$APIGEE_ORG/environments" -H \
"Authorization: Bearer $TOKEN" -H "content-type:application/json" \
-d '{
"name": " ENV_NAME ",
"displayName": " ENV_DISPLAY_NAME ",
"state": "ACTIVE",
"deploymentType": "PROXY",
"apiProxyType": "PROGRAMMABLE",
"properties": {
"property": [
{
"name": "apigee-service-extension-enabled",
"value": "true"
}
]
}
}'
Where ENV_NAME is the name of the environment you want to create.
For Subscription 2024 and Pay-as-you-go orgs:
curl -i -X POST -H "Authorization: Bearer $TOKEN" "https://apigee.googleapis.com/v1/organizations/$APIGEE_ORG/environments" -H "Content-Type:application/json" -d '{
"name": " ENV_NAME ",
"displayName": " ENV_NAME ",
"state": "ACTIVE",
"deploymentType": "PROXY",
"apiProxyType": "PROGRAMMABLE",
"type" : " ENV_TYPE ",
"properties": {
"property": [
{
"name": "apigee-service-extension-enabled",
"value": "true"
}
]
}
}'
Where:
ENV_NAME is the name of the environment you want to create.
ENV_TYPE is the type of the environment you want to create. For example, INTERMEDIATE or COMPREHENSIVE .
Check that the environment was created successfully:
curl -i -H "Authorization: Bearer $TOKEN" \
"https://apigee.googleapis.com/v1/organizations/$APIGEE_ORG/environments"
See Create an environment in the Apigee hybrid installation instructions for more information.
Create an Environment Group with the following command:
curl -i -X POST -H "Authorization: Bearer $TOKEN" "https://apigee.googleapis.com/v1/organizations/$APIGEE_ORG/envgroups" -H "Content-Type:application/json" -d '{
"name": "'" $ENV_GROUP "'",
"hostnames":["'" $DOMAIN "'"]
}'
Where:
ENV_GROUP (Required) The environment name can contain lowercase letters, dashes, and numbers and must start with a lowercase letter. This name will be used as the identifier and cannot be changed after creation.
DOMAIN (Required) This is the hostname that all proxies deployed to environments within this group will use. This should be a domain you manage. The address can be the domain itself, like example.com or it can include a subdomain like my-proxies.example.com. If you don't have a managed domain, you can enter a placeholder for now. You can change the domain address later.
See Create an environment group in the Apigee hybrid installation instructions for more information.
Attach the Environment to the Environment Group you just created with the following command:
curl -i -X POST -H "Authorization: Bearer $TOKEN" "https://apigee.googleapis.com/v1/organizations/$APIGEE_ORG/envgroups/ $ENV_GROUP /attachments" -H "Content-Type:application/json" -d '{
"environment": "'" $ENV_NAME "'",
}'
Install the Apigee Hybrid Environment using helm
The procedure to install the new environment in the Apigee Hybrid cluster is similar to how you installed other environments in your cluster. This is needed to add new environment and environment group details to our Kubernetes cluster in which Apigee Hybrid was installed.
Generate the TLS certificate for the Environment Group domain with the following command:
openssl req -nodes -new -x509 -keyout $APIGEE_HELM_CHARTS_HOME/apigee-virtualhost/certs/keystore_$ENV_GROUP.key -out $APIGEE_HELM_CHARTS_HOME/apigee-virtualhost/certs/keystore_$ENV_GROUP.pem -subj "/CN=$DOMAIN" -addext "subjectAltName = DNS:$DOMAIN" -days 3650
Where:
APIGEE_HELM_CHARTS_HOME (Required) Directory where you downloaded the Apigee Helm Charts during the Apigee Hybrid Installation.
Base64 encode the TLS public certificate with the following command:
cat $APIGEE_HELM_CHARTS_HOME/apigee-virtualhost/certs/keystore_$ENV_GROUP.pem | base64 -w0 > $APIGEE_HELM_CHARTS_HOME/apigee-virtualhost/certs/keystore_$ENV_GROUP.pem.base64
Update the overrides.yaml file with the following entry under envs
- name: ENV_NAME
serviceAccountPaths:
# Provide the path relative to the apigee-env chart directory.
synchronizer: SYNCHRONIZER_SERVICE_ACCOUNT_FILEPATH
# For example: " PROJECT_ID -apigee-synchronizer.json "
runtime: RUNTIME_SERVICE_ACCOUNT_FILEPATH
# For example: " PROJECT_ID -apigee-runtime.json "
udca: UDCA_SERVICE_ACCOUNT_FILEPATH
# For example: " PROJECT_ID -apigee-udca.json "
Where * _SERVICE_ACCOUNT_FILEPATH (Required) is the json key file of the service account you used during the Apigee Hybrid installation, see Create the overrides in the Apigee hybrid installation instructions for more information.
Add following entry in the overrides.yaml file under virtualhosts
- name:
selector:
app: apigee-ingressgateway
ingress_name: INGRESS_NAME
sslCertPath: certs/keystore_$ENV_GROUP.pem
sslKeyPath: certs/keystore_$ENV_GROUP.key
Where INGRESS_NAME (Required) is the name of the Apigee ingress gateway for your deployment, see here for more information.
Install the environment and environment group
Install the environment.
You must install one environment at a time. Specify the environment with
--set env= ENV_NAME . If you have set the
$ENV_NAME environment variable in your shell, you can use that in the
following commands:
Dry run:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
--set env= $ENV_NAME \
-f overrides .yaml \
--dry-run=server
ENV_RELEASE_NAME is a name used to keep track of installation and upgrades of the
apigee-env chart. This name must be unique from the other Helm release names in your installation.
Usually this is the same as ENV_NAME . However, if your environment has the same name
as your environment group, you must use different release names for the environment and environment group,
for example dev-env-release and dev-envgroup-release . For more information on releases
in Helm, see Three big concepts in the
Helm documentation.
Install the chart:
helm upgrade ENV_RELEASE_NAME apigee-env/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
--set env= $ENV_NAME \
-f overrides .yaml
Verify it is up and running by checking the state of the respective env:
kubectl -n APIGEE_NAMESPACE get apigeeenv
NAME STATE AGE GATEWAYTYPE
apigee-org1-dev-1 running 2d
Install the environment groups ( virtualhosts ).
You must install one environment group (virtualhost) at a time. Specify the environment
group with --set envgroup= ENV_GROUP . If you have set the
$ENV_GROUP environment variable in your shell, you can use that in the
following commands. Repeat the following
commands for each env group mentioned in your overrides.yaml file:
Dry run:
helm upgrade ENV_GROUP_RELEASE_NAME apigee-virtualhost/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
--set envgroup= $ENV_GROUP \
-f overrides .yaml \
--dry-run=server
ENV_GROUP_RELEASE_NAME is a name used to keep track of installation and upgrades of the
apigee-virtualhosts chart. This name must be unique from the other Helm release names in your
installation. Usually this is the same as ENV_GROUP . However, if your environment group
has the same name as an environment in your installation, you must use different release names for the
environment group and environment, for example dev-envgroup-release and dev-env-release .
For more information on releases in Helm, see
Three big concepts in the Helm documentation.
Install the chart:
helm upgrade $ENV_GROUP_RELEASE_NAME apigee-virtualhost/ \
--install \
--namespace APIGEE_NAMESPACE \
--atomic \
--set envgroup= $ENV_GROUP \
-f overrides .yaml
Note: ENV_GROUP must be unique within the
apigee namespace. For example, if you have a prod env and
envgroup, you should set this name to prod-envgroup . The later env group
name should still be prod .
Your Apigee Hybrid org is now ready with the new environment to test service extension.
Continue with the procedures in Create an APIMExtensionPolicy to create an extension policy.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
