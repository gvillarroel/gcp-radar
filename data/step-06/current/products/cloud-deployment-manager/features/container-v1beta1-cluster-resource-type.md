---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.042Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "container.v1beta1.cluster resource type"
feature_slug: "container-v1beta1-cluster-resource-type"
latest_feature_date: "2015-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types"
keywords:
  - "container"
  - "v1beta1"
  - "cluster"
  - "resource"
  - "type"
  - "deployment"
  - "manager"
  - "supports"
---

# container.v1beta1.cluster resource type

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager supports the container.v1beta1.cluster resource type for declaring and deploying Google Container Engine clusters.

## Extended Definition

Deployment Manager supports the container.v1beta1.cluster resource type for declaring and deploying Google Container Engine clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)

## Supporting Pages

### "Supported resource types \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a full list of supported resource types, including resources that are in alpha, run the types list command in gcloud : gcloud deployment - manager types list Resource Type Reference appengine.v1.version Documentation bigquery.v2.dataset Documentation bigquery.v2.table Documentation bigtableadmin.v2.instance Documentation bigtableadmin.v2.instance.table Documentation cloudresourcemanager.v1.project Documentation compute.beta.address Documentation compute.beta.autoscaler Documentation compute.beta.backendBucket Documentation compute.beta.backendService Documentation compute.beta.disk Documentation compute.beta.firewall Documentation compute.beta.forwardingRule Documentation compute.beta.globalAddress Documentation compute.beta.globalForwardingRule Documentation compute.beta.healthCheck Documentation compute.beta.httpHealthCheck Documentation compute.beta.httpsHealthCheck Documentation compute.beta.image Documentation compute.beta.instance Documentation compute.beta.instanceGroup Documentation compute.beta.instanceGroupManager Documentation compute.beta.instanceTemplate Documentation compute.beta.network Documentation compute.beta.regionAutoscaler Documentation compute.beta.regionBackendService Documentation compute.beta.regionInstanceGroup Documentation compute.beta.regionInstanceGroupManager Documentation compute.beta.route Documentation compute.beta.router Documentation compute.beta.sslCertificate Documentation compute.beta.subnetwork Documentation compute.beta.targetHttpProxy Documentation compute.beta.targetHttpsProxy Documentation compute.beta.targetInstance Documentation compute.beta.targetPool Documentation compute.beta.targetSslProxy Documentation compute.beta.targetVpnGateway Documentation compute.beta.urlMap Documentation compute.beta.vpnTunnel Documentation compute.beta.xpnHost Documentation compute.beta.xpnResource Documentation compute.v1.address Documentation compute.v1.autoscaler Documentation compute.v1.backendService Documentation compute.v1.disk Documentation compute.v1.firewall Documentation compute.v1.forwardingRule Documentation compute.v1.globalAddress Documentation compute.v1.globalForwardingRule Documentation compute.v1.healthCheck Documentation compute.v1.httpHealthCheck Documentation compute.v1.httpsHealthCheck Documentation compute.v1.image Documentation compute.v1.instance Documentation compute.v1.instanceGroup Documentation compute.v1.instanceGroupManager Documentation compute.v1.instanceTemplate Documentation compute.v1.network Documentation compute.v1.regionAutoscaler Documentation compute.v1.regionBackendService Documentation compute.v1.regionInstanceGroup Documentation compute.v1.regionInstanceGroupManager Documentation compute.v1.route Documentation compute.v1.router Documentation compute.v1.sslCertificate Documentation compute.v1.subnetwork Documentation compute.v1.targetHttpProxy Documentation compute.v1.targetHttpsProxy Documentation compute.v1.targetInstance Documentation compute.v1.targetPool Documentation compute.v1.targetSslProxy Documentation compute.v1.targetVpnGateway Documentation compute.v1.urlMap Documentation compute.v1.vpnTunnel Documentation container.v1.cluster Documentation container.v1.nodePool Documentation dataproc.v1.cluster Documentation dns.v1.managedZone Documentation iam.v1.serviceAccount Documentation iam.v1.serviceAccounts.key Documentation logging.v2.metric Documentation logging.v2.sink Documentation pubsub.v1.subscription Documentation pubsub.v1.topic Documentation runtimeconfig.v1beta1.config Documentation runtimeconfig.v1beta1.variable Documentation runtimeconfig.v1beta1.waiter Documentation spanner.v1.instance Documentation sqladmin.v1beta4.database Documentation sqladmin.v1beta4.instance Documentation sqladmin.v1beta4.user Documentation storage.v1.bucket Documentation storage.v1.bucketAccessControl Documentation storage.v1.defaultObjectAccessControl Documentation storage.v1.object Documentation storage.v1.objectAccessControl Documentation What's next Create a configuration .
- Resources for project creation If you are creating projects using Deployment Manager, you can use the following virtual resource types to enable APIs in your project, or change the billing information for your project.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Supported resource types Stay organized with collections Save and categorize content based on your preferences.
- Resource Type Description Example Reference deploymentmanager.v2.virtual.enableService Enable a service API.

### "Supported Google Cloud type providers \_|\_ Cloud Deployment Manager \_\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-gcp-types)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource snippets Cloud Key Management Service gcp-types/cloudkms-v1 Resource snippets Resource Manager (v1) gcp-types/cloudresourcemanager-v1 Resource snippets Resource Manager (v2) gcp-types/cloudresourcemanager-v2 Resource snippets Compute Engine (Alpha) gcp-types/compute-alpha Resource snippets Compute Engine (Beta) gcp-types/compute-beta Resource snippets Compute Engine gcp-types/compute-v1 Resource snippets Google Kubernetes Engine gcp-types/container-v1 Note : If you want to create and manage private GKE clusters with Deployment Manager, see the best practices for setting up options for private clusters .
- Resource snippets Google Kubernetes Engine (v1 Beta 1) gcp-types/container-v1beta1 Resource snippets Managed Service for Apache Spark gcp-types/dataproc-v1 Resource snippets Cloud DNS gcp-types/dns-v1 Resource snippets Filestore gcp-types/file-v1beta1 Resource snippets Identity and Access Management gcp-types/iam-v1 Resource snippets Cloud Logging gcp-types/logging-v2 Resource snippets Cloud Monitoring gcp-types/monitoring-v3 Resource snippets Pub/Sub gcp-types/pubsub-v1 Resource snippets Memorystore gcp-types/redis-v1 Resource snippets Memorystore (v1 Beta 1) gcp-types/redis-v1beta1 Resource snippets Cloud Runtime Configuration API gcp-types/runtimeconfig-v1beta1 Resource snippets Service Management gcp-types/servicemanagement-v1 Resource snippets Spanner gcp-types/spanner-v1 Resource snippets Cloud SQL (v1 Beta 4) gcp-types/sqladmin-v1beta4 Resource snippets Cloud Storage gcp-types/storage-v1 Resource snippets Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For a full list of resource types, including resources that are in alpha, run the following command: gcloud beta deployment - manager types list -- project gcp - types You can also create your own type providers, such as for third-party APIs.
- Service Type provider App Engine gcp-types/appengine-v1 Resource snippets Access Context Manager gcp-types/accesscontextmanager-v1beta Resource snippets BigQuery gcp-types/bigquery-v2 Resource snippets Bigtable gcp-types/bigtableadmin-v2 Resource snippets Cloud Run functions gcp-types/cloudfunctions-v1 Note : As of November 1, 2019, new Functions are private by default, and require appropriate IAM permissions to invoke.

### Quickstart: Manage Google Cloud resources as a deployment | Cloud Deployment Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment)
- Source ID: `feature-recovery-direct-http`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quickstart: Manage Google Cloud resources as a deployment | Cloud Deployment Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Deployment Manager Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console Cloud Deployment Manager Product overview Getting started Deprecation Cloud Deployment Manager deprecation Composite types deprecation How-to guides All how-to guides Walkthrough: explore best practices Overview Installation and setup Understanding configurations Deploying your resources Understanding references Understanding reusable templates Using multiple templates Understanding template properties and using environment variables Exploring helper scripts Updating deployments Building a configuration Configurations overview Creating a basic configuration Previewing a configuration Setting access control in a configuration Creating reusable templates Creating a basic template Defining template properties Using deployment-specific environment variables Creating helper scripts Importing Python libraries Adding a template as a composite type Describing, listing, and deleting types Defining schemas for templates Storing templates on an external host Migrating templates to Python 3 Using references Exposing information using outputs Creating explicit dependencies Creating deployments Creating a deployment using gcloud or the API Creating deployments with Google Cloud Marketplace Updating a deployment Adding labels to a deployment Deleting a deployment Viewing a manifest Sharing resources across projects Using images from other projects Sharing types across projects (Advanced) Adding a new API as a type provider One-page guide to integrating with deployment manager API requirements for integrating an API Adding an API as a type provider Setting advanced API options Using a type provider in a configuration Best practices for adding a type provider Storing and retrieving data at runtime Creating and deleting runtimeconfig resources Setting and getting data Deleting a variable Watching a variable for changes Creating a waiter Migration guides Replacing usage of Actions Replacing the setIamPolicy Action with a supported resource type Creating custom type providers with custom backends Converting composite types to supported templates Using DM Convert to transition to Terraform or KRM Using DM Convert to transition to Terraform or Kubernetes Resource Model (KRM) Converting your Deployment Manager configurations with DM Convert Troubleshooting DM Convert Best practices for using DM Convert Concepts All concepts Deployment Manager fundamentals Deployment Manager audit logging Access control with IAM Best practices for using Deployment Manager Overview of Runtime Configurator Runtime Configurator fundamentals Access control options for Runtime Configurator Tutorials All tutorials Create a network load-balanced logbook application (Python) Create a HTTP load-balanced logbook application Create a container-optimized deployment Structure Deployment Manager for use at scale Deploy an SAP HANA cluster using Deployment Manager Solutions that use Deployment Manager AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Cloud Deployment Manager will reach end of support on March 31, 2026 .
- Check on your new deployment To check the status of the deployment, run the following command: gcloud deployment-manager deployments describe quickstart-deployment You see a description of the deployment, including its start and end time, the resources created, and any warnings or errors: fingerprint: xmVVeTtPq-5rr8F-vWFlrg == id: '54660732508021769' insertTime: '2016-03-09T04:45:26.032-08:00' manifest: https://www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/my-first-deployment/manifests/manifest-1457527526037 name: quickstart-deployment operation: endTime: '2016-03-09T04:46:19.480-08:00' id: '8993923014899639305' kind: deploymentmanager#operation name: operation-1457527525951-52d9d126f4618-f1ca6e72-3404bd3b operationType: insert progress: 100 startTime: '2016-03-09T04:45:27.275-08:00' status: DONE ... resources: NAME TYPE STATE ERRORS quickstart-deployment-vm compute.v1.instance COMPLETED - Review your resources After you have created the deployment, you can review your resources in Google Cloud console.
- In this example, for VM instances, you add # the machine type, a boot disk, network information, and so on. # # For a list of supported resources, # see https://cloud.google.com/deployment-manager/docs/configuration/supported-resource-types. resources : - type : compute.v1.instance name : quickstart-deployment-vm properties : # The properties of the resource depend on the type of resource.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps. gcloud deployment-manager deployments delete quickstart-deployment Type y at the prompt: The following deployments will be deleted: - quickstart-deployment Do you want to continue (y/N)?

