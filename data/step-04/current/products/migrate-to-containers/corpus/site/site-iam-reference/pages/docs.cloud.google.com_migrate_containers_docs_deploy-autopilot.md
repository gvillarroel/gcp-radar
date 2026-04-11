---
title: "Migrate and deploy applications to GKE Autopilot clusters \_|\_ Migrate to\
  \ Containers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/mcdc-aws-collection-tutorial
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/deploy-autopilot
  title: "Migrate and deploy applications to GKE Autopilot clusters \_|\_ Migrate\
    \ to Containers \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrate and deploy applications to GKE Autopilot clusters
To deploy your migrated container workloads to GKE Autopilot clusters,
you use the same procedure to migrate your workloads as you use for the existing architecture.
The only changes are that:
You have to set v2kServiceManager to true in the migration plan
before you generate the container artifacts.
You have to review the new services-config.yaml file and make any edits to the
initialization services. See Using services-config.yaml .
To perform a migration:
Install Migrate to Containers version 1.15.0 .
Add a migration source and create a migration
as you do today with the existing runtime.
Customize your migration plan as necessary.
Note: Prior to Migrate to Containers 1.10, use of the enhanced Linux
service manager was disabled by default. If you are using
Migrate to Containers 1.9 or older, you should have v2kServiceManager
set to true in your migration plan ( my-migration.yaml ). If the
enhanced Linux service manager is disabled for you, check your services.yaml
file for comments about services that may not work with your new runtime. If
you would like to include any of the disabled services, contact your support
channel.
Download the migration plan. The migration plan is represented by
AppXGenerateArtifactsFlow .
For example, for a migration named "my-migration":
migctl migration get my-migration
Open the downloaded migration plan, my-migration.yaml , in a text editor.
Verify the enhanced Linux service manager. The v2kServiceManager flag is
set to true by default. However, if Migrate to Containers
detects a system service that is not supported by the service
manager, you will be alerted and the v2kServiceManager flag will be set to false .
When the flag is false the migration will use a legacy runtime which supports your
service.
The following alert is provided alongside the unsupported service:
Service is not supported by v2k service manager, therefore legacy runtime
will be used instead of v2k service manager, and migrated workload would
not fit running on Autopilot clusters of Cloudrun.
When an unsupported service is found, you can also choose to manually set the flag to true .
In this instance, you can either choose to keep the unsupported service on the generated image
where it may not run or you can exclude the service by removing it from the migration plan.
To enable the new service manager, reset the flag to true :
v2kServiceManager : true
Perform any other customizations necessary for your migration as described
in Customize the migration plan .
When your edits are complete, save the edited file.
Upload the edited migration plan:
migctl migration update my-migration --main-config my-migration.yaml
Generate and review the migration artifacts
as you do today with the existing runtime.
Edit the new services-config.yaml file to configure the initialization properties
of the container. Save the file and rebuild your container image to apply the changes.
See Using services-config.yaml for more.
Deploy the container to a GKE Autopilot cluster
using kubectl :
kubectl apply -f deployment_spec.yaml
Example: Deploying the Quickstart container on an Autopilot cluster
Use the current Quickstart guide to migrate a container containing
a simple web server and then deploy it on an Autopilot cluster. The only changes
that you have to make to the Quickstart process are:
In Step 3 of Migrating the VM , where you review
the migration plan, set v2kServiceManager to true in the migration plan
and then save the plan:
v2kServiceManager : true
In the Deploying the migrated workload section,
create and connect to a GKE Autopilot cluster before you deploy the container:
Create a GKE Autopilot cluster:
gcloud container clusters create-auto " CLUSTER_NAME "
--project " PROJECT_NAME " --region " REGION " --release-channel "regular"
--subnetwork "projects/ PROJECT_NAME /regions/ us-central1 /subnetworks/default"
Connect to the cluster:
gcloud container clusters get-credentials CLUSTER_NAME
--zone REGION --project PROJECT_NAME
Deploy the container as described in the
Deploying the migrated workload section.
Changes to the AppXGenerateArtifactsFlow CRD
If you are using CRD files to control your migration, edit the AppXGenerateArtifactsFlow CRD
to set v2kServiceManager to true . See Customizing a migration plan
for more on using CRD files to control migration.
What's next
Learn how to deploy containers to Cloud Run .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
