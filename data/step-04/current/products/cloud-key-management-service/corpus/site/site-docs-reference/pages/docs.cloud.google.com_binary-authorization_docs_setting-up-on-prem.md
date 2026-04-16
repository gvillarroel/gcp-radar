---
title: "Set up for on-premises clusters \_|\_ Binary Authorization \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/setting-up-on-prem
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/setting-up-on-prem
  title: "Set up for on-premises clusters \_|\_ Binary Authorization \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
Set up for on-premises clusters
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are using Google Distributed Cloud (software only) on bare metal, this document is only for users of version 1.15 or earlier.
For version 1.16 or later, Binary Authorization can be
configured during the cluster creation or update .
Note:
This document or section includes references to one or more terms that Google
considers disrespectful or offensive. The terms are used because they are
keywords in the software that's described in the document.
The terms: whitelist
Note: This document is only for users of Google Distributed Cloud for bare
metal 1.15 or earlier. For users of Google Distributed Cloud for bare metal
1.16 or later, Binary Authorization can be configured during the cluster creation or update .
This document shows you how to set up Binary Authorization for
on-premises clusters created as part of Google Distributed Cloud. It then shows you how
to configure a sample Binary Authorization policy.
Before you begin
Ensure your clusters have a supported Google Distributed Cloud version. Binary Authorization supports the following environments.
Bare metal
Google Distributed Cloud 1.14 or 1.15. For version 1.16 or later, Binary Authorization can be
configured during cluster creation or update .
VMware
Distributed Cloud for VMware (Google Distributed Cloud) 1.4 or later.
The Binary Authorization service uses a external IP address, accessible
through a regular internet connection. Configure your
firewall rules
for HTTPS to let the user cluster access the endpoint
binaryauthorization.googleapis.com .
Bare metal
Configure Google Distributed Cloud firewall rules .
VMware
Configure Google Distributed Cloud firewall rules .
If you want to use centralized Cloud Audit Logs to
view audit log entries, including those from Binary Authorization for
clusters outside Google Cloud, you must configure Cloud Audit Logs
in your cluster configuration.
Bare metal
Configure Cloud Audit Logs in Google Distributed Cloud .
VMware
Configure Cloud Audit Logs in Google Distributed Cloud .
You must enable the Binary Authorization API as follows:
Go to Google Cloud console.
Enable APIs
In the project drop-down list, select your fleet host project.
You can find this in the
gkeConnect section
of your user cluster configuration file. This is the Google Cloud project
that connects your user cluster to Google Cloud.
Set up Binary Authorization
In this section, you set up Binary Authorization
in your on-premises cluster.
Specify installation environment variables
To specify the environment variables, do the following:
Using Workload Identity
Specify your fleet host project:
export PROJECT_ID = PROJECT_ID
Set the fleet membership ID to your cluster ID:
The membership ID is listed in the NAME column when you run
gcloud container fleet memberships list command.
export MEMBERSHIP_ID = CLUSTER_NAME
Using service account key
Specify your fleet host project:
export PROJECT_ID = PROJECT_ID
Replace PROJECT_ID with the Google Cloud project in the
gkeConnect section
of your user cluster configuration file.
Specify the path of the user cluster's kubeconfig file:
export KUBECONFIG = PATH
Replace PATH with the path of your user cluster kubeconfig file.
Choose a name for the Binary Authorization API access service account:
export SA_NAME = SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with the service account name
of your choice. The Binary Authorization Module uses this service
account to access the Binary Authorization API.
Specify the path to the service account key file you download
later in this guide:
export SA_JSON_PATH = SA_KEY_FILE_PATH
Replace SA_KEY_FILE_PATH with the path of the JSON key file for
the service account.
Install the Binary Authorization module in your user cluster
To install the Binary Authorization module, do the following:
Using Workload Identity
Fleet Workload Identity lets the workloads in your cluster authenticate to Google without requiring you to download, manually rotate, and generally manage Google Cloud service account keys. You can find out more about how fleet Workload Identity works and the advantages of using it in
Use fleet Workload Identity .
Grant the binaryauthorization.policyEvaluator role to
the Kubernetes service account on your fleet host project:
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ PROJECT_ID } .svc.id.goog[binauthz-system/binauthz-admin]" \
--role = "roles/binaryauthorization.policyEvaluator"
Create a working directory:
Make a directory called binauthz .
Change to the directory.
Download the manifest-wi-0.2.6.yaml.tmpl file, which you use to install the
Binary Authorization Module in your user
cluster:
Bare metal
gcloud storage cp gs://anthos-baremetal-release/binauthz/manifest-wi-0.2.6.yaml.tmpl .
VMware
gcloud storage cp gs://gke-on-prem-release/binauthz/manifest-wi-0.2.6.yaml.tmpl .
Substitute the environment variables in the template:
envsubst < manifest-wi-0.2.6.yaml.tmpl > manifest-0.2.6.yaml
Install the Binary Authorization Module in your user cluster:
kubectl apply -f manifest-0.2.6.yaml
Verify the Deployment was created:
kubectl get pod --namespace binauthz-system
You see the Pod binauthz-module-deployment-* listed with Status of
Running and 1/1 Pods ready, similar to this output:
NAME READY STATUS RESTARTS AGE
binauthz-module-deployment-5fddf9594f-qjprz 1/1 Running 0 11s
Using service account key
Set the default project for the Google Cloud CLI:
gcloud config set project ${ PROJECT_ID }
Create a Binary Authorization API access service account:
gcloud iam service-accounts create ${ SA_NAME }
Grant the binaryauthorization.policyEvaluator role to
the Binary Authorization API access service account on your fleet host project:
gcloud projects add-iam-policy-binding ${ PROJECT_ID } \
--member = "serviceAccount: ${ SA_NAME } @ ${ PROJECT_ID } .iam.gserviceaccount.com" \
--role = "roles/binaryauthorization.policyEvaluator"
Create a working directory:
Make a directory called binauthz .
Change to the directory.
Download the manifest-0.2.6.yaml file, which you use to install the
Binary Authorization Module in your user
cluster:
Bare metal
gcloud storage cp gs://anthos-baremetal-release/binauthz/manifest-0.2.6.yaml .
VMware
gcloud storage cp gs://gke-on-prem-release/binauthz/manifest-0.2.6.yaml .
Create a YAML file for the binauthz-system namespace.
Copy the following to a file called namespace.yaml :
apiVersion : v1
kind : Namespace
metadata :
labels :
control-plane : binauthz-controller
name : binauthz-system
Create the namespace in your user cluster:
kubectl apply -f namespace.yaml
You see output similar to the following:
namespace/binauthz-system created
Download a JSON key file for your service account:
gcloud iam service-accounts keys create ${ SA_JSON_PATH } --iam-account ${ SA_NAME } @ ${ PROJECT_ID } .iam.gserviceaccount.com
Save the service account key as a Kubernetes Secret in your user cluster:
kubectl --namespace binauthz-system create secret generic binauthz-sa --from-file = key.json = ${ SA_JSON_PATH }
Install the Binary Authorization Module in your user cluster:
kubectl apply -f manifest-0.2.6.yaml
Verify the Deployment was created:
kubectl get pod --namespace binauthz-system
You see the Pod binauthz-module-deployment-* listed with Status of
Running and 1/1 Pods ready, similar to this output:
NAME READY STATUS RESTARTS AGE
binauthz-module-deployment-5fddf9594f-qjprz 1/1 Running 0 11s
Set up and use Binary Authorization policies
This section shows you how to set up and use Binary Authorization policies
for on-premises clusters.
In each example, you configure the policy and then test it by attempting to
deploy a container image in your cluster.
Allow all
This section demonstrates a success case. You configure the
Binary Authorization policy so that a container image satisfies the policy
and is deployed.
Caution: This policy allows all container images to deploy.
In Google Cloud, do the following:
Console
In the Google Cloud console, go to the Binary Authorization page.
Go to Binary Authorization
Make sure to select your fleet host project ID.
Click Edit Policy .
Under Project default rule , select Allow all images .
Click Save Policy .
gcloud
Set the PROJECT_ID for your fleet host
project. You can find this project ID in the gkeConnect field in your
user cluster configuration file.
export PROJECT_ID = PROJECT_ID
Set the default Google Cloud project.
gcloud config set project ${ PROJECT_ID }
Export the policy YAML file to your local system:
gcloud container binauthz policy export > policy.yaml
Your YAML file looks like the following:
defaultAdmissionRule :
enforcementMode : ENFORCED_BLOCK_AND_AUDIT_LOG
evaluationMode : ALWAYS_ALLOW
globalPolicyEvaluationMode : ENABLE
name : projects/<var>PROJECT_ID</var>/policy
Edit policy.yaml .
Set evaluationMode to ALWAYS_ALLOW .
If you have a requireAttestationsBy block in the file,
delete this block.
Save the file.
Import policy.yaml as follows:
gcloud container binauthz policy import policy.yaml
To add an exempt image to the allowlist, add the
following to the policy file:
admissionWhitelistPatterns :
- namePattern : EXEMPT_IMAGE_PATH
Replace EXEMPT_IMAGE_PATH with the path to am image to exempt. To exempt additional images, add additional - namePattern entries. Learn more about admissionWhitelistPatterns .
On your admin workstation, do the following:
Create a manifest file for a Pod.
Save the following to a file called pod.yaml :
apiVersion : v1
kind : Pod
metadata :
name : test-pod
spec :
containers :
- name : test-container
image : us-docker.pkg.dev/google-samples/containers/gke/hello-app@sha256:c62ead5b8c15c231f9e786250b07909daf6c266d0fcddd93fea882eb722c3be4
Create the Pod:
kubectl apply -f pod.yaml
You see that the Pod was successfully deployed.
Delete the Pod:
kubectl delete -f pod.yaml
Disallow all
This section demonstrates a failure case. In this section, you configure the
default policy to disallow your container image from being deployed.
Caution: This policy disallows all container images from deploying.
In Google Cloud do the following:
Console
In the Google Cloud console, go to the Binary Authorization page.
Go to Binary Authorization
Make sure your fleet host project is selected.
Click Edit Policy .
Under Project default rule , select Disallow all images .
Click Save policy .
gcloud
Set the PROJECT_ID to your
fleet host project ID.
export PROJECT_ID = PROJECT_ID
Set the default Google Cloud project.
gcloud config set project ${ PROJECT_ID }
Export the policy YAML file:
gcloud container binauthz policy export > policy.yaml
Edit policy.yaml .
Set evaluationMode to ALWAYS_DENY .
If you have a requireAttestationsBy block in the file,
delete this block.
Save the file.
Import policy.yaml as follows:
gcloud container binauthz policy import policy.yaml
Note: It can take a few minutes for the policy to take effect.
On your admin workstation, do the following:
Create a manifest file for a Pod.
Save the following to a file called pod.yaml :
apiVersion : v1
kind : Pod
metadata :
name : test-pod
spec :
containers :
- name : test-container
image : us-docker.pkg.dev/google-samples/containers/gke/hello-app@sha256:c62ead5b8c15c231f9e786250b07909daf6c266d0fcddd93fea882eb722c3be4
Create the Pod:
kubectl apply -f pod.yaml
You see that the Pod was was blocked from being deployed. The output
looks like the following:
Error from server (VIOLATES_POLICY): error when creating "pod.yaml": admission webhook "binaryauthorization.googleapis.com" denied the request: Denied by default admission rule. Overridden by evaluation mode
Get the user cluster resource ID
This section shows you how to compose the cluster resource ID for your user
cluster. In your Binary Authorization policy, you can create cluster-specific
rules. You associate these rules with a cluster-specific resource ID, which is
based on your cluster ID.
You get the resource ID as follows:
Console
In the Google Cloud console , go to the GKE Clusters
page.
Go to Clusters
Select the fleet host project ID for your clusters.
You can find this project ID in the
gkeConnect section
of your user cluster configuration file.
In the cluster list, find your cluster ID under the Name
column.
To create the resource ID, add the prefix global. to the cluster ID so
that the resource ID has the following format:
global. CLUSTER_ID .
gcloud
Use SSH to connect to your admin workstation.
On the admin workstation, run the following command:
kubectl get membership -o yaml
Get the cluster ID from spec.owner.id field of the output. Example output
follows:
apiVersion : v1
items :
- apiVersion : hub.gke.io/v1
kind : Membership
...
spec :
owner :
id : //gkehub.googleapis.com/projects/PROJECT_NUMBER/locations/global/memberships/ my-cluster-id
In the example output, the cluster ID is my-cluster-id .
To create the resource ID, add the prefix global. to the cluster ID. In
the example, the resource ID is global.my-cluster-id .
You use this resource ID when you define cluster-specific rules. Learn how to
set cluster-specific rules by using the Google Cloud console or the gcloud CLI .
Update the failure policy
The Binary Authorization Module webhook can be configured to fail open or
fail close .
Fail close
To update the failure policy to fail close, do the following:
Edit the manifest-0.2.6.yaml file and set failurePolicy to Fail
Re-enable the webhook:
kubectl apply -f manifest-0.2.6.yaml
You see output similar to the following:
serviceaccount / binauthz - admin unchanged
role . rbac . authorization . k8s . io / binauthz - role configured
clusterrole . rbac . authorization . k8s . io / binauthz - role configured
rolebinding . rbac . authorization . k8s . io / binauthz - rolebinding unchanged
clusterrolebinding . rbac . authorization . k8s . io / binauthz - rolebinding unchanged
secret / binauthz - tls unchanged
service / binauthz unchanged
deployment . apps / binauthz - module - deployment unchanged
validatingwebhookconfiguration . admissionregistration . k8s . io / binauthz - validating - webhook - configuration configured
Fail open
To update the failure policy to fail open, do the following:
Edit the manifest-0.2.6.yaml file and set failurePolicy to Ignore
Re-enable the webhook:
kubectl apply -f manifest-0.2.6.yaml
You see output similar to the following:
serviceaccount / binauthz - admin unchanged
role . rbac . authorization . k8s . io / binauthz - role configured
clusterrole . rbac . authorization . k8s . io / binauthz - role configured
rolebinding . rbac . authorization . k8s . io / binauthz - rolebinding unchanged
clusterrolebinding . rbac . authorization . k8s . io / binauthz - rolebinding unchanged
secret / binauthz - tls unchanged
service / binauthz unchanged
deployment . apps / binauthz - module - deployment unchanged
validatingwebhookconfiguration . admissionregistration . k8s . io / binauthz - validating - webhook - configuration configured
To learn more, see webhook failure policy .
Clean up
The following code sample shows how to disable the webhook:
kubectl delete ValidatingWebhookConfiguration/binauthz-validating-webhook-configuration
The following code sample shows how to re-enable the webhook:
kubectl apply -f manifest-0.2.6.yaml
The following code sample shows how to delete all of the resources related
to Binary Authorization:
kubectl delete -f manifest-0.2.6.yaml
kubectl delete namespace binauthz-system
What's next
To check policy compliance at Pod creation time without actually blocking
the Pod from being created, see Enable dry run .
To force a Pod to be created that the Binary Authorization enforcer
would otherwise block, see Use breakglass .
Use the built-by-cloud-build attestor to deploy only images built by Cloud Build .
To implement an attestor-based Binary Authorization policy, see the following:
Configure a policy using the Google Cloud console
or the command-line tool . Set the default or
cluster-specific rule to require attestations.
Create an attestor using the Google Cloud console
or the command-line tool .
Create an attestation .
To see log events related to Binary Authorization for Distributed Cloud, see
View Cloud Audit Logs events .
Monitor metrics .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
