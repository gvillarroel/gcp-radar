---
title: "Quickstart: Manage resources with Config Controller \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/manage-resources
  title: "Quickstart: Manage resources with Config Controller \_|\_ Google Cloud Documentation"
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
Quickstart: Manage resources with Config Controller
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to create a Config Controller instance that comes pre-installed
with Config Connector, Policy Controller, and Config Sync. Next, learn how to
use your instance by completing the following tasks:
Use Config Connector to create and manage a Google Cloud resource.
Create a Policy Controller constraint to enforce a policy and detect a
policy violation before it's deployed.
Set up GitOps by configuring Config Sync to sync from a sample
repository that contains a Google Cloud resource.
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
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the KRM, GKE, Resource Manager, and Service Usage APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable krmapihosting.googleapis.com container.googleapis.com cloudresourcemanager.googleapis.com serviceusage.googleapis.com
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
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the KRM, GKE, Resource Manager, and Service Usage APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable krmapihosting.googleapis.com container.googleapis.com cloudresourcemanager.googleapis.com serviceusage.googleapis.com
Required roles
To get the permissions that
you need to manage the example resources with Config Controller used in this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Kubernetes Engine Cluster Viewer ( roles/container.clusterViewer )
Compute Network Admin ( roles/compute.networkAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a Config Controller instance
In the terminal, create an Autopilot Config Controller
instance:
gcloud anthos config controller create cc-example \
--location = us-central1 \
--full-management
This operation can take up to 15 minutes to complete.
The output is the following:
Created instance [cc-example].
Fetching cluster endpoint and auth data.
kubeconfig entry generated for krmapihost-cc-example.
Verify that your instance was created by viewing the list of
Config Controller instances:
gcloud anthos config controller list --location = us-central1
The output is the following:
NAME LOCATION STATE
cc-example us-central1 RUNNING
Success: You now have a Config Controller instance that you can use to
take advantage of Config Sync, Policy Controller and Config Controller components and simplify the management of
your clusters.
Grant Config Controller required permission
In this section you give Config Controller permission to manage Google Cloud
resources:
Set an environment variable for your service account email:
export SA_EMAIL = " $( kubectl get ConfigConnectorContext -n config-control \
-o jsonpath = '{.items[0].spec.googleServiceAccount}' 2 > /dev/null ) "
Create the policy binding:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "serviceAccount: ${ SA_EMAIL } " \
--role "roles/owner" \
--project PROJECT_ID
Replace PROJECT_ID with your project ID.
The output is similar to the following:
Updated IAM policy for project [ PROJECT_ID ].
auditConfigs:
- auditLogConfigs:
- logType: ADMIN_READ
- logType: DATA_READ
- logType: DATA_WRITE
service: gkehub.googleapis.com
# Remainder of output omitted
Use your Config Controller instance
The following sections introduce you to the ways that you can use your
Config Controller instance.
Create a Google Cloud resource with Config Connector
With your Config Controller instance, you can take advantage of Config Connector to
manage many Google Cloud services and resources using Kubernetes tooling and
APIs. In this section, you use Config Controller to create a
PubSubTopic resource .
To create a Pub/Sub topic using Config Connector, complete the
following steps:
Use Config Connector to enable the Pub/Sub API:
Using your preferred text editor, create a file named enable-pubsub.yaml
and copy the following YAML into it:
# enable-pubsub.yaml
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : Service
metadata :
name : pubsub.googleapis.com
namespace : config-control
spec :
projectRef :
external : projects/ PROJECT_ID
Replace PROJECT_ID with your project ID.
To enable the Pub/Sub API, apply the manifest to your cluster:
kubectl apply -f enable-pubsub.yaml
Enabling this API might take several minutes.
Use Config Connector to create a Pub/Sub topic:
Create a file named pubsub-topic.yaml and copy the following YAML into
it:
# pubsub-topic.yaml
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
annotations :
cnrm.cloud.google.com/project-id : PROJECT_ID
labels :
label-one : "value-one"
name : example-topic
namespace : config-control
Create the Pub/Sub topic:
kubectl apply -f pubsub-topic.yaml
Verify that Config Controller has created your resource in Google Cloud
by viewing the list of Pub/Sub topics:
gcloud pubsub topics list
The output is similar to the following:
---
name: projects/ PROJECT_ID /topics/start-instance-event
---
labels:
label-one: value-one
managed-by-cnrm: 'true'
name: projects/ PROJECT_ID /topics/example-topic
Success: You've now created a Pub/Sub topic with Config Controller.
By using the same process, you can create multiple different types of
Google Cloud resources. For a full list, see Config Connector
resources .
Enforce a policy with Policy Controller
Your Config Controller instance lets you use Policy Controller and
Policy Controller constraints. As part of the Policy Controller installation,
Config Controller automatically installs the
constraint template library .
You can use the templates in this library to enforce a variety of common
security and compliance controls on your Config Controller instances.
In this section, you create a constraint by using the
GCPStorageLocationConstraintV1
constraint template. This template lets you restrict the location you can create
Cloud Storage buckets in. The constraint you create using this template
restricts the location to us-central1 . You might want to use this constraint
to ensure your buckets are being created in a region that offers the best price
and performance.
To create the constraint:
Create a file named bucket-constraint.yaml and copy the following YAML
into it:
# bucket-constraint.yaml
apiVersion : constraints.gatekeeper.sh/v1beta1
kind : GCPStorageLocationConstraintV1
metadata :
name : storage-only-in-us-central1
spec :
match :
kinds :
- apiGroups :
- storage.cnrm.cloud.google.com
kinds :
- StorageBucket
parameters :
locations :
- us-central1
Create the constraint:
kubectl apply -f bucket-constraint.yaml
The output is the following:
gcpstoragelocationconstraintv1.constraints.gatekeeper.sh/storage-only-in-us-central1 created`
Demonstrate that the constraint is working by trying to use Config Connector to
create a StorageBucket
resource
in asia-southeast1 :
Create a file named asia-storage-bucket.yaml and copy the following
YAML into it:
# asia-storage-bucket.yaml
apiVersion : storage.cnrm.cloud.google.com/v1beta1
kind : StorageBucket
metadata :
name : bucket-in-disallowed-location
namespace : config-control
spec :
location : asia-southeast1
Try to create the Cloud Storage bucket:
kubectl apply -f asia-storage-bucket.yaml
The output is the following:
Error from server (Forbidden): error when creating "STDIN": admission webhook "validation.gatekeeper.sh" denied the request: [storage-only-in-us-central1] Cloud Storage bucket <bucket-in-disallowed-location> uses a disallowed location <asia-southeast1>, allowed locations are ["us-central1"]
Success: Policy Controller is enforcing the constraint. You can now only create
Cloud Storage buckets in the us-central1 . To learn more about using
constraints, see
Use the constraint template library .
Set up GitOps with Config Sync
Config Sync is a GitOps service that
lets you sync your Config Controller instance to configs, policies, and
Google Cloud resources stored in a Git repository, OCI image, or Helm
repository. Because Config Sync continuously reconciles the state of
Config Controller with the configs in your source, you can help to ensure
that your instances have consistent configuration.
In this section, you sync your Config Controller instance to a
public GitHub repository . This repository contains
another PubSubTopic resource. By syncing your instance from this repository,
the resource is automatically created and applied to your instance. You might
choose to create your resources using Config Sync (instead of
applying the resource directly ) if you want
to use a GitOps workflow.
Note: In a production environment, you would use a secure private repository.
To sync from GitHub, set up Cloud NAT. You need to do this because your
Config Controller instance is backed by a private GKE
cluster and private cluster nodes don't have outbound internet access:
Create a Cloud NAT router. You need this router to set up your
NAT gateway.
gcloud compute routers create cc-nat-router \
--network default \
--region us-central1
The output is similar to the following:
Creating router [cc-nat-router]...done.
NAME REGION NETWORK
cc-nat-router us-central1 default
Set up a NAT gateway on the router that you created in the previous
step:
gcloud compute routers nats create cc-nat-config \
--router-region us-central1 \
--router cc-nat-router \
--nat-all-subnet-ip-ranges \
--auto-allocate-nat-external-ips
The output is the following:
Creating NAT [cc-nat-config] in router [cc-nat-router]...done.
To configure your Config Controller instance to sync from a sample
repository, create a file named cc-rootsync.yaml and copy the following
YAML into it:
# cc-rootsync.yaml
apiVersion : configsync.gke.io/v1beta1
kind : RootSync
metadata :
name : root-sync
namespace : config-management-system
spec :
sourceFormat : unstructured
git :
repo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples
branch : main
dir : config-controller-quickstart
auth : none
Apply the configuration:
kubectl apply -f cc-rootsync.yaml
After your instance is syncing from the repository, Config Sync creates
the Pub/Sub topic and applies it to your Config Controller
instance.
Verify that Config Sync is syncing the Git repository to your
Config Controller instance:
nomos status --contexts gke_ PROJECT_ID _us-central1_krmapihost-cc-example
The output is similar to the following:
*gke_ PROJECT_ID _us-central1_krmapihost-cc-example
--------------------
<root>:root-sync https://github.com/GoogleCloudPlatform/anthos-config-management-samples/config-controller-quickstart@main
SYNCED @ 2023-01-10 18:31:02 +0000 UTC 715b4295d3eac07b057cce2543275c1ee104cad8
Managed resources:
NAMESPACE NAME STATUS SOURCEHASH
config-control pubsubtopic.pubsub.cnrm.cloud.google.com/pubsub-topic-sample-sync Current 715b429
config-control service.serviceusage.cnrm.cloud.google.com/pubsub.googleapis.com Current 715b429
If you don't see this output, wait a couple of minutes and try again.
Verify that Config Controller has created your resource:
gcloud pubsub topics list
The output is similar to the following:
name: projects/ PROJECT_ID /topics/start-instance-event
---
labels:
managed-by-cnrm: 'true'
name: projects/ PROJECT_ID /topics/sample-topic
---
labels:
managed-by-cnrm: 'true'
name: projects/ PROJECT_ID /topics/pubsub-topic-sample-sync
---
labels:
label-one: value-one
managed-by-cnrm: 'true'
name: projects/ PROJECT_ID /topics/example-topic
In this output, you can see the Pub/Sub you created in the
Create a Config Controller instance section and the
one you created by syncing your instance to a GitHub repository.
Success: You're now using Config Sync to deploy your resources.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used
in this tutorial, either delete the project that contains the resources, or keep
the project and delete the individual resources.
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
Delete the individual resources
Delete the Config Connector PubSubTopic resource:
kubectl delete -f pubsub-topic.yaml
Delete the Policy Controller constraint:
kubectl delete -f bucket-constraint.yaml
Delete the NAT router:
gcloud compute routers delete cc-nat-router \
--project = PROJECT_ID \
--region = us-central1
Press y when prompted.
Delete the Pub/Sub resource created by Config Sync:
kubectl delete PubSubTopic pubsub-topic-sample-sync -n config-control
Delete the RootSync resource:
kubectl delete rootsync root-sync -n config-management-system
Using your preferred text editor, delete all of the YAML files that you
created:
enable-pubsub.yaml
pubsub-topic.yaml
bucket-constraint.yaml
asia-storage-bucket.yaml
cc-rootsync.yaml
Delete the Config Controller instance:
gcloud anthos config controller delete --location = us-central1 cc-example
Press y when prompted.
What's next
Learn how to set up
Config Controller .
Learn more about
Config Controller .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
