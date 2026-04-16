---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.307Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "K8sBlockLoadBalancer constraint template"
feature_slug: "k8sblockloadbalancer-constraint-template"
latest_feature_date: "2022-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/resource-types-with-policies"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart"
keywords:
  - "k8sblockloadbalancer"
  - "constraint"
  - "template"
  - "blocks"
  - "use"
  - "loadbalancer"
  - "type"
  - "resources"
---

# K8sBlockLoadBalancer constraint template

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

This constraint template blocks use of LoadBalancer-type services or resources.

## Extended Definition

This constraint template blocks use of LoadBalancer-type services or resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)

## Supporting Pages

### "Resource types that accept allow policies \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/resource-types-with-policies](https://docs.cloud.google.com/iam/docs/resource-types-with-policies)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Select a service to see which of its resource types support allow policies: All services BigQuery Identity-Aware Proxy Access Context Manager Vertex AI BigQuery sharing API Gateway Apigee Apigee Registry App Hub Artifact Registry AutoML Backup and Disaster Recovery Chrome Enterprise Premium BigLake BigQuery Connection API BigQuery Data Policy BigQuery Reservation API Cloud Bigtable Admin API Binary Authorization Cloud Billing Cloud Build Cloud Deploy Cloud Run functions Cloud Key Management Service Resource Manager Cloud Tasks Compute Engine Cloud Config Manager API Customer Experience Insights Artifact Analysis Data Catalog Dataform Cloud Data Fusion Database Migration Service Dataplex Universal Catalog Managed Service for Apache Spark Cloud Deployment Manager Discovery Engine Cloud DNS Cloud Domains Eventarc Backup for GKE GKE Hub Google Distributed Cloud Cloud Healthcare API Identity and Access Management Cloud Logging Managed Service for Microsoft Active Directory Dataproc Metastore AI Platform Network Connectivity Center Network Management API Network Security Network Services Notebooks Certificate Authority Service Pub/Sub Cloud Run Secret Manager Secure Source Manager Security Command Center Service Directory Service Management Spanner Cloud Storage Google Cloud VMware Engine Cloud Workstations Service Resources that accept allow policies BigQuery Datasets Routines Tables Identity-Aware Proxy All web services Individual web services Tunnel Tunnel instances Tunnel zones Web service types Web service versions Access Context Manager Access policies Vertex AI Datasets Entity types Feature groups Feature online stores Feature views Featurestores Models Notebook runtime templates Reasoning engines BigQuery sharing Data exchanges Listings Subscriptions API Gateway APIs Configs Gateways Apigee Deployments Environments Spaces Apigee Registry APIs Artifacts Deployments Documents Instances Runtime Specs Versions App Hub Applications Artifact Registry Repositories AutoML Datasets Locations Models Backup and Disaster Recovery Management servers Chrome Enterprise Premium App connections App connectors App gateways Applications Security gateways BigLake Catalogs Namespaces Tables BigQuery Connection API Connections BigQuery Data Policy Data policies BigQuery Reservation API Assignments Reservations Cloud Bigtable Admin API Authorized views Backups Instances Logical views Materialized views Schema bundles Tables Binary Authorization Attestors Policy Cloud Billing Billing accounts Cloud Build Connections Cloud Deploy Custom target types Delivery pipelines Deploy policies Targets Cloud Run functions Functions Cloud Key Management Service Crypto keys EKM config EKM connections Import jobs Key rings Resource Manager Folders Organizations Projects Tag keys Tag values Cloud Tasks Queues Compute Engine Backend buckets Backend services Disks Firewall policies Images Instance templates Instances Instant snapshot groups Instant snapshots Interconnect attachment groups Interconnect groups Licenses Machine images Network attachments Network firewall policies Node groups Node templates Region backend buckets Region backend services Region disks Region instant snapshot groups Region instant snapshots Region network firewall policies Region snapshots Reservation blocks Reservation sub-blocks Reservations Resource policies Service attachments Snapshots Storage pools Subnetworks Cloud Config Manager API Deployments Customer Experience Insights Authorized views Artifact Analysis Notes Occurrences Data Catalog Entry groups Policy tags Tag templates Taxonomies Dataform Folders Repositories Team folders Workspaces Cloud Data Fusion Instances Database Migration Service Connection profiles Conversion workspaces Migration jobs Objects Private connections Dataplex Universal Catalog Aspect types Assets Attributes Categories Change requests Data attribute bindings Data domains Data products Data scans Data taxonomies Encryption configs Entry groups Entry link types Entry types Glossaries Governance rules Lakes Policy intents Tasks Terms Zones Managed Service for Apache Spark Autoscaling policies Clusters Jobs Operations Workflow templates Cloud Deployment Manager Deployments Discovery Engine Engines Cloud DNS Managed zones Cloud Domains Registrations Eventarc Channel connections Channels Enrollments Google API sources Message buses Pipelines Triggers Backup for GKE Backup plans Backups Restore plans Restores Volume backups Volume restores GKE Hub Features Memberships Scopes Google Distributed Cloud Bare metal admin clusters Bare metal clusters Bare metal node pools VMware admin clusters VMware clusters VMware node pools Cloud Healthcare API Consent stores Data mapper workspaces Datasets DICOM stores FHIR stores HL7v2 stores Identity and Access Management Service accounts Workforce identity pools Workload identity pools Cloud Logging Views Managed Service for Microsoft Active Directory Backups Domains Peerings Dataproc Metastore Backups Databases Federations Services Tables AI Platform Jobs Models Network Connectivity Center Groups Hubs Internal ranges Policy-based routes Spokes Network Management API Connectivity tests Network Security Address groups Authorization policies Authz policies Client TLS policies Server TLS policies Network Services Edge cache keysets Edge cache origins Edge cache services Notebooks Instances Runtimes Certificate Authority Service CA pools Certificate revocation lists Certificate templates Pub/Sub Schemas Snapshots Subscriptions Topics Cloud Run Jobs Services Worker pools Secret Manager Secrets Secure Source Manager Instances Repositories Security Command Center Sources Service Directory Namespaces Services Service Management Consumers Services Spanner Backup schedules Backups Databases Instances Cloud Storage Buckets Managed folders Google Cloud VMware Engine Clusters HCX activation keys Private clouds Cloud Workstations Workstation configs Workstations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security IAM Reference Send feedback Resource types that accept allow policies Stay organized with collections Save and categorize content based on your preferences.
- This page lists the resource types on which you can set allow policies .

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- It only sets a namespace for resources that contain namespace: {{ .Release.Namespace }} in their templates.
- It only sets a namespace for resources that contain namespace: {{ .Release.Namespace }} in their templates.
- It only sets a namespace for resources that contain namespace: {{ .Release.Namespace }} in their templates.
- It only sets a namespace for resources that contain namespace: {{ .Release.Namespace }} in their templates.

### "Quickstart: Deploy Kubernetes resources across a fleet \_|\_ Config Sync\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/fleet-package-quickstart)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- In your Cloud Shell, create a file named fleet-package.yaml with the following content: resourceBundleSelector : cloudBuildRepository : name : projects/ PROJECT ID /locations/us-central1/connections/fleet-package-quickstart-connection/repositories/ REPOSITORY NAME tag : v1.0.0 serviceAccount : projects/ PROJECT ID /serviceAccounts/quickstart-service-account@ PROJECT ID . iam.gserviceaccount.com path : Match all files (including deployment.yaml) to generate variants variantsPattern : " .yaml" target : fleet : project : projects/ PROJECT ID rolloutStrategy : rolling : maxConcurrent : 1 variantSelector : Explicitly match the variant generated from "deployment.yaml" variantNameTemplate : "deployment" Replace REPOSITORY NAME with the repository name from Cloud Build.
- Set up a service account for Cloud Build To create the service account and grant the required permissions to Cloud Build, complete the following steps: Create the service account: gcloud iam service-accounts create "quickstart-service-account" Grant the service account permission to fetch resources from your Git repository by adding an IAM policy binding for the Resource Bundle Publisher role: gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:quickstart-service-account@ PROJECT ID .iam.gserviceaccount.com" \ --role = 'roles/configdelivery.resourceBundlePublisher' If prompted, select None as the condition for the policy.
- Name your file deployment.yaml and paste the following contents into it: apiVersion : apps/v1 kind : Deployment metadata : name : nginx-deployment spec : replicas : 3 selector : matchLabels : app : nginx template : metadata : labels : app : nginx spec : containers : - image : nginx:1.14.2 name : nginx ports : - containerPort : 80 Click Commit changes...
- In this tutorial, you complete the following tasks: Connect a Git repository to Cloud Build Create and register clusters to a fleet Install Config Sync as a fleet default Deploy resources from your repository to your fleet of clusters Before you begin Sign in to your Google Cloud account.

