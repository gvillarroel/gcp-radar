---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.914Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Run Source Viewer role"
feature_slug: "cloud-run-source-viewer-role"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/reference/iam/roles"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub"
keywords:
  - "run"
  - "source"
  - "viewer"
  - "role"
  - "the"
  - "iam"
  - "grants"
  - "permissions"
---

# Cloud Run Source Viewer role

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

The Cloud Run Source Viewer IAM role grants permissions to view a Cloud Run service or job that is deployed from source.

## Extended Definition

The Cloud Run Source Viewer IAM role grants permissions to view a Cloud Run service or job that is deployed from source.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)

## Supporting Pages

### Cloud Run IAM roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/iam/roles](https://docs.cloud.google.com/run/docs/reference/iam/roles)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Warning: Do not grant service agent roles to any principals except service agents . artifactregistry. attachments. get artifactregistry. attachments. list artifactregistry. dockerimages. artifactregistry. dockerimages. get artifactregistry. dockerimages. list artifactregistry. files. download artifactregistry.files.get artifactregistry.files.list artifactregistry.locations. artifactregistry.locations.get artifactregistry. locations. list artifactregistry. mavenartifacts. artifactregistry. mavenartifacts. get artifactregistry. mavenartifacts. list artifactregistry.npmpackages. artifactregistry. npmpackages. get artifactregistry. npmpackages. list artifactregistry.packages.get artifactregistry.packages.list artifactregistry. projectsettings. get artifactregistry. pythonpackages. artifactregistry. pythonpackages. get artifactregistry. pythonpackages. list artifactregistry. repositories. downloadArtifacts artifactregistry. repositories. exportArtifacts artifactregistry. repositories. get artifactregistry. repositories. list artifactregistry. repositories. listEffectiveTags artifactregistry. repositories. listTagBindings artifactregistry. repositories. readViaVirtualRepository artifactregistry. repositories. uploadArtifacts artifactregistry.rules.get artifactregistry.rules.list artifactregistry.tags.get artifactregistry.tags.list artifactregistry.versions.get artifactregistry.versions.list binaryauthorization. platformPolicies. evaluatePolicy binaryauthorization. policy. evaluatePolicy clientauthconfig.clients.list cloudbuild.builds.create cloudbuild.builds.get compute.addresses.create compute. addresses. createInternal compute.addresses.delete compute. addresses. deleteInternal compute.addresses.get compute.addresses.list compute.globalOperations.get compute.networks.access compute.networks.get compute.regionOperations.get compute.subnetworks.get compute.subnetworks.use compute.zoneOperations.get iam.serviceAccounts.actAs iam. serviceAccounts. getAccessToken iam. serviceAccounts. getOpenIdToken iam.serviceAccounts.signBlob networkservices.meshes.get resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list run.routes.invoke serviceusage.services.get serviceusage.services.use storage.buckets.create storage.buckets.get storage.buckets.update storage.folders.get storage.folders.list storage.managedFolders.get storage.managedFolders.list storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.update vpcaccess.connectors.get vpcaccess.connectors.use For a reference describing the IAM permissions contained in each IAM role, refer to Cloud Run IAM Permissions .
- Click to view the required roles for executing jobs To get the permissions that you need to execute jobs, you or your administrator must grant IAM roles to the deployer account on the following resources: To create or update a job: Cloud Run Developer ( roles/run.developer ) on the Cloud Run job To execute jobs or cancel job executions: Cloud Run Invoker ( roles/run.invoker ) on the Cloud Run job Artifact Registry Reader ( roles/artifactregistry.reader ) on the Artifact Registry repository of the container images of the job Service Account User ( roles/iam.serviceAccountUser ) on the Cloud Run service identity The following permissions are required to execute jobs: run.jobs.create to create jobs and run.jobs.update to update jobs run.jobs.run to execute jobs run.jobs.get and run.operations.get to read the status of the job artifactregistry.repositories.downloadArtifacts on the repository container the container images of the job iam.serviceAccounts.actAs on the service identity You might also be able to get these permissions with custom roles or other predefined roles .
- Click to view the required roles for deploying services or revisions To get the permissions that you need to deploy services or revisions, you or your administrator must grant IAM roles to the deployer account on the following resources: Cloud Run Developer ( roles/run.developer ) on the Cloud Run service Artifact Registry Reader ( roles/artifactregistry.reader ) on the Artifact Registry repository of the container images of the service Service Account User ( roles/iam.serviceAccountUser ) on the Cloud Run service identity The following permissions are required to deploy services or revisions: run.services.create to create services and run.services.update to update services run.services.get and run.operations.get to read the status of the service artifactregistry.repositories.downloadArtifacts on the repository container the container images of the service iam.serviceAccounts.actAs on the service identity You might also be able to get these permissions with custom roles or other predefined roles .
- Lowest-level resources where you can grant this role: Cloud Run service Cloud Run job run.jobs.run run.routes.invoke Cloud Run Viewer ( roles/ run.viewer ) Can view the state of all Cloud Run resources, including IAM policies.

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Deploy a Cloud Run worker pool Deploy a worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --image us-docker.pkg.dev/cloudrun/container/worker-pool:latest \ --instances 0 \ --region $REGION \ --memory 4G \ --cpu 4 \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" Deploy the autoscaler CREMA service Deploy the CREMA service to autoscale your worker pool based on Prometheus metrics.
- Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Parameter Manager Admin ( roles/parametermanager.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create custom service accounts This tutorial requires the following two service accounts with minimum permissions required to use the provisioned resources: Consumer service account: identity for the worker pool that runs a background workload.
- Note: IAM basic roles might also contain permissions to complete the tutorial.

### "Autoscale worker pools based on the Pub/Sub queue volume \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Grant your CREMA service account permission to view Pub/Sub messages: gcloud pubsub subscriptions add-iam-policy-binding $SUBSCRIPTION ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/pubsub.viewer" Grant your consumer service account permission to pull messages from the subscription: gcloud pubsub subscriptions add-iam-policy-binding $SUBSCRIPTION ID \ --member = "serviceAccount: $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/pubsub.subscriber" Deploy a Cloud Run worker pool To deploy a worker pool that consumes messages from Pub/Sub subscriptions, follow these steps: Create a folder named consumer and change the directory into it: mkdir consumer cd consumer Create a file named worker.py and add the following code: import os import time from google.cloud import pubsub v1 from concurrent.futures import TimeoutError Configuration PROJECT ID = os . environ . get ( 'PROJECT ID' ) SUBSCRIPTION ID = os . environ . get ( 'SUBSCRIPTION ID' ) subscription path = f "projects/ { PROJECT ID } /subscriptions/ { SUBSCRIPTION ID } " print ( f "Worker Pool instance starting.
- Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Pub/Sub Admin ( roles/pubsub.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Parameter Manager Admin ( roles/parametermanager.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- CMD [ "python" , "-u" , "worker.py" ] Deploy the consumer worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --source . \ --region $REGION \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --instances = 0 \ --set-env-vars PROJECT ID = $PROJECT ID ,SUBSCRIPTION ID = $SUBSCRIPTION ID Deploy the autoscaler CREMA service Once you deploy the worker pool to consume messages from Pub/Sub, configure the CREMA autoscaler to provision worker instances based on the volume of messages.
- Note: IAM basic roles might also contain permissions to complete the tutorial.

