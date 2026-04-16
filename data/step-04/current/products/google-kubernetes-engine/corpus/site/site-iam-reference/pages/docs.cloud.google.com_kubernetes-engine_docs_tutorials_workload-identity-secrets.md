---
title: "Access secrets stored outside GKE clusters using client libraries \_|\_ Kubernetes\
  \ Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/workload-identity-secrets
  title: "Access secrets stored outside GKE clusters using client libraries \_|\_\
    \ Kubernetes Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Access secrets stored outside GKE clusters using client libraries
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This tutorial shows you how to store the sensitive data that's used by your
Google Kubernetes Engine (GKE) clusters in Secret Manager. You learn how to
more securely access the data from your Pods by using Workload Identity Federation for GKE and the
Google Cloud client libraries.
Storing your sensitive data outside your cluster storage reduces the risk of
unauthorized access to the data if an attack occurs. Using Workload Identity Federation for GKE
to access the data lets you avoid the risks associated with managing long-lived
service account keys, and lets you control access to your secrets using
Identity and Access Management (IAM) instead of in-cluster RBAC rules. You can use any
external secret store provider, such as Secret Manager or
HashiCorp Vault.
This page is for Security specialists who want to move sensitive data
out of in-cluster storage. To learn more about
common roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
This tutorial uses a GKE Autopilot cluster. To perform
the steps using GKE Standard, you must
enable Workload Identity Federation for GKE manually .
You can use Workload Identity Federation for GKE to access any Google Cloud APIs from
GKE workloads without having to use less secure approaches like
static service account key files. This tutorial uses Secret Manager
as an example, but you can use the same steps to access other Google Cloud
APIs. To learn more, see
Workload Identity Federation for GKE .
Objectives
Create a secret in Google Cloud Secret Manager.
Create a GKE Autopilot cluster, Kubernetes
namespaces, and Kubernetes service accounts.
Create IAM allow policies to grant access to your Kubernetes
service accounts on the secret.
Use test applications to verify service account access.
Run a sample app that accesses the secret using the
Secret Manager API.
Costs
In this document, you use the following billable components of Google Cloud:
GKE Autopilot
Secret Manager
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Kubernetes Engine and Secret Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com secretmanager.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Kubernetes Engine and Secret Manager APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable container.googleapis.com secretmanager.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/secretmanager.admin, roles/container.clusterAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Prepare the environment
Clone the GitHub repository that contains the sample files for this
tutorial:
git clone https://github.com/GoogleCloudPlatform/kubernetes-engine-samples
cd ~/kubernetes-engine-samples/security/wi-secrets
Create a secret in Secret Manager
The following example shows the data you'll use to create a secret:
key=my-api-key
Create a secret to store the sample data:
gcloud secrets create bq-readonly-key \
--data-file = manifests/bq-readonly-key \
--ttl = 3600s
This command does the following:
Creates a new Secret Manager secret with the sample key
in the us-central1 Google Cloud region.
Sets the secret to expire one hour after you run the command.
Create the cluster and Kubernetes resources
Create a GKE cluster, Kubernetes namespaces, and Kubernetes
service accounts. You create two namespaces, one for read-only access and one for
read-write access to the secret. You also create a Kubernetes service account in
each namespace to use with Workload Identity Federation for GKE.
Create a GKE Autopilot cluster:
gcloud container clusters create-auto secret-cluster \
--location = us-central1
The cluster might take about five minutes to deploy. Autopilot
clusters always have Workload Identity Federation for GKE enabled. If you want to use a
GKE Standard cluster instead, you must manually
enable Workload Identity Federation for GKE before you continue.
Create a readonly-ns namespace and an admin-ns namespace:
kubectl create namespace readonly-ns
kubectl create namespace admin-ns
Create a readonly-sa Kubernetes service account and an admin-sa
Kubernetes service account:
kubectl create serviceaccount readonly-sa --namespace = readonly-ns
kubectl create serviceaccount admin-sa --namespace = admin-ns
Create IAM allow policies
Grant the readonly-sa service account read-only access to the secret:
gcloud secrets add-iam-policy-binding bq-readonly-key \
--member = principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ PROJECT_ID .svc.id.goog/subject/ns/readonly-ns/sa/readonly-sa \
--role = 'roles/secretmanager.secretAccessor' \
--condition = None
Replace the following:
PROJECT_NUMBER : your numerical Google Cloud
project number.
PROJECT_ID : your Google Cloud project ID.
Grant the admin-sa service account read-write access to the secret:
gcloud secrets add-iam-policy-binding bq-readonly-key \
--member = principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ PROJECT_ID .svc.id.goog/subject/ns/admin-ns/sa/admin-sa \
--role = 'roles/secretmanager.secretAccessor' \
--condition = None
gcloud secrets add-iam-policy-binding bq-readonly-key \
--member = principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ PROJECT_ID .svc.id.goog/subject/ns/admin-ns/sa/admin-sa \
--role = 'roles/secretmanager.secretVersionAdder' \
--condition = None
Verify secret access
Deploy test Pods in each namespace to verify the read-only and read-write
access.
Review the read-only Pod manifest:
# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : v1
kind : Pod
metadata :
name : readonly-test
namespace : readonly-ns
spec :
containers :
- image : google/cloud-sdk:slim
name : workload-identity-test
command : [ "sleep" , "infinity" ]
resources :
requests :
cpu : "150m"
memory : "150Mi"
serviceAccountName : readonly-sa
This Pod uses the readonly-sa service account in the readonly-ns
namespace.
Review the read-write Pod manifest:
# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : v1
kind : Pod
metadata :
name : admin-test
namespace : admin-ns
spec :
containers :
- image : google/cloud-sdk:slim
name : workload-identity-test
command : [ "sleep" , "infinity" ]
resources :
requests :
cpu : "150m"
memory : "150Mi"
serviceAccountName : admin-sa
This Pod uses the admin-sa service account in the admin-ns
namespace.
Deploy the test Pods:
kubectl apply -f manifests/admin-pod.yaml
kubectl apply -f manifests/readonly-pod.yaml
The Pods might take a few minutes to start running. To monitor progress, run
the following command:
watch kubectl get pods -n readonly-ns
When the Pod status changes to RUNNING , press Ctrl+C to return to the
command-line.
Test read-only access
Open a shell in the readonly-test Pod:
kubectl exec -it readonly-test --namespace = readonly-ns -- /bin/bash
Try to read the secret:
gcloud secrets versions access 1 --secret = bq-readonly-key
The output is key=my-api-key .
Try to write new data to the secret:
printf "my-second-api-key" | gcloud secrets versions add bq-readonly-key --data-file = -
The output is similar to the following:
ERROR: (gcloud.secrets.versions.add) PERMISSION_DENIED: Permission 'secretmanager.versions.add' denied for resource 'projects/PROJECT_ID/secrets/bq-readonly-key' (or it may not exist).
The Pod using the read-only service account can only read the secret,
and can't write new data.
Exit the Pod:
exit
Test read-write access
Open a shell in the admin-test Pod:
kubectl exec -it admin-test --namespace = admin-ns -- /bin/bash
Try to read the secret:
gcloud secrets versions access 1 --secret = bq-readonly-key
The output is key=my-api-key .
Try to write new data to the secret:
printf "my-second-api-key" | gcloud secrets versions add bq-readonly-key --data-file = -
The output is similar to the following:
Created version [2] of the secret [bq-readonly-key].
Read the new secret version:
gcloud secrets versions access 2 --secret = bq-readonly-key
The output is my-second-api-key .
Exit the Pod:
exit
The Pods only get the level of access you granted to the Kubernetes
service account used in the Pod manifest. Any Pods that use the admin-sa
Kubernetes account in the admin-ns namespace can write new versions of the
secret, but any Pods in the readonly-ns namespace that use the readonly-sa
Kubernetes service account can only read the secret.
Access secrets from your code
In this section, you do the following:
Deploy a sample application that reads your secret in
Secret Manager using client libraries.
Check that the application can access your secret.
You should access Secret Manager secrets from your application
code whenever possible, using the Secret Manager API.
Review the sample application source code:
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
package main
import (
"context"
"fmt"
"log"
"os"
secretmanager "cloud.google.com/go/secretmanager/apiv1"
secretmanagerpb "google.golang.org/genproto/googleapis/cloud/secretmanager/v1"
)
func main () {
// Get environment variables from Pod spec.
projectID := os . Getenv ( "PROJECT_ID" )
secretId := os . Getenv ( "SECRET_ID" )
secretVersion := os . Getenv ( "SECRET_VERSION" )
// Create the Secret Manager client.
ctx := context . Background ()
client , err := secretmanager . NewClient ( ctx )
if err != nil {
log . Fatalf ( "failed to setup client: %v" , err )
}
defer client . Close ()
// Create the request to access the secret.
accessSecretReq := & secretmanagerpb . AccessSecretVersionRequest {
Name : fmt . Sprintf ( "projects/%s/secrets/%s/versions/%s" , projectID , secretId , secretVersion ),
}
secret , err := client . AccessSecretVersion ( ctx , accessSecretReq )
if err != nil {
log . Fatalf ( "failed to access secret: %v" , err )
}
// Print the secret payload.
//
// WARNING: Do not print the secret in a production environment - this
// snippet is showing how to access the secret material.
log . Printf ( "Welcome to the key store, here's your key:\nKey: %s" , secret . Payload . Data )
}
This application calls the Secret Manager API to try and read the
secret.
Review the sample application Pod manifest:
# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : v1
kind : Pod
metadata :
name : readonly-secret-test
namespace : readonly-ns
spec :
containers :
- image : us-docker.pkg.dev/google-samples/containers/gke/wi-secret-store:latest
name : secret-app
env :
- name : PROJECT_ID
value : "YOUR_PROJECT_ID"
- name : SECRET_ID
value : "bq-readonly-key"
- name : SECRET_VERSION
value : "latest"
resources :
requests :
cpu : "125m"
memory : "64Mi"
serviceAccountName : readonly-sa
This manifest does the following:
Creates a Pod in the readonly-ns namespace that uses the readonly-sa
service account.
Pulls a sample application from a Google image registry. This
application calls the Secret Manager API using the
Google Cloud client libraries. You can view the application code
in /main.go in the repository.
Sets environment variables for the sample application to use.
Replace environment variables in the sample application:
sed -i "s/YOUR_PROJECT_ID/ PROJECT_ID /g" "manifests/secret-app.yaml"
Deploy the sample app:
kubectl apply -f manifests/secret-app.yaml
The Pod might take a few minutes to start working. If the Pod needs a new
node in your cluster, you might notice CrashLoopBackOff type events while
GKE provisions the node. The crashes stop when the node
provisions successfully.
Verify the secret access:
kubectl logs readonly-secret-test -n readonly-ns
The output is my-second-api-key . If the output is blank, the Pod might not
be running yet. Wait a few minutes and try again.
Alternative approaches
If you need to mount
your sensitive data to your Pods, use the Secret Manager
add-on for GKE. This add-on
deploys and manages the Google Cloud Secret Manager
provider for the Kubernetes Secret Store CSI driver in your GKE
clusters. For instructions, see
Use Secret Manager add-on with GKE .
Providing secrets as mounted volumes has the following risks:
Mounted volumes are susceptible to directory traversal attacks.
Environment variables can be compromised due to misconfigurations such as
opening a debug endpoint.
Whenever possible, we recommend that you programmatically access secrets through
the Secret Manager API. For instructions, use the sample application in
this tutorial or refer to
Secret Manager client libraries .
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete individual resources
Delete the cluster:
gcloud container clusters delete secret-cluster \
--location = us-central1
Optional: Delete the secret in Secret Manager:
gcloud secrets delete bq-readonly-key
If you don't do this step, the secret automatically expires because you set
the --ttl flag during creation.
Delete the project
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
What's next
Learn how to authenticate to Google Cloud APIs from GKE workloads .
Learn how to encrypt secrets at the application layer .
Learn more about Workload Identity Federation for GKE .
Learn how to install kubectl and configure cluster access .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
