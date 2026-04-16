---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.973Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "runtime-config gcloud command group"
feature_slug: "runtime-config-gcloud-command-group"
latest_feature_date: "2017-02-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file"
keywords:
  - "runtime"
  - "config"
  - "gcloud"
  - "command"
  - "group"
  - "configurator"
  - "commands"
  - "grouped"
---

# runtime-config gcloud command group

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Runtime Configurator gcloud commands are grouped under the runtime-config command namespace.

## Extended Definition

Runtime Configurator gcloud commands are grouped under the runtime-config command namespace.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file)

## Supporting Pages

### Quickstart: Manage Google Cloud resources as a deployment | Cloud Deployment Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment](https://docs.cloud.google.com/deployment-manager/docs/manage-cloud-resources-deployment)
- Source ID: `feature-recovery-direct-http`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quickstart: Manage Google Cloud resources as a deployment | Cloud Deployment Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Deployment Manager Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console Cloud Deployment Manager Product overview Getting started Deprecation Cloud Deployment Manager deprecation Composite types deprecation How-to guides All how-to guides Walkthrough: explore best practices Overview Installation and setup Understanding configurations Deploying your resources Understanding references Understanding reusable templates Using multiple templates Understanding template properties and using environment variables Exploring helper scripts Updating deployments Building a configuration Configurations overview Creating a basic configuration Previewing a configuration Setting access control in a configuration Creating reusable templates Creating a basic template Defining template properties Using deployment-specific environment variables Creating helper scripts Importing Python libraries Adding a template as a composite type Describing, listing, and deleting types Defining schemas for templates Storing templates on an external host Migrating templates to Python 3 Using references Exposing information using outputs Creating explicit dependencies Creating deployments Creating a deployment using gcloud or the API Creating deployments with Google Cloud Marketplace Updating a deployment Adding labels to a deployment Deleting a deployment Viewing a manifest Sharing resources across projects Using images from other projects Sharing types across projects (Advanced) Adding a new API as a type provider One-page guide to integrating with deployment manager API requirements for integrating an API Adding an API as a type provider Setting advanced API options Using a type provider in a configuration Best practices for adding a type provider Storing and retrieving data at runtime Creating and deleting runtimeconfig resources Setting and getting data Deleting a variable Watching a variable for changes Creating a waiter Migration guides Replacing usage of Actions Replacing the setIamPolicy Action with a supported resource type Creating custom type providers with custom backends Converting composite types to supported templates Using DM Convert to transition to Terraform or KRM Using DM Convert to transition to Terraform or Kubernetes Resource Model (KRM) Converting your Deployment Manager configurations with DM Convert Troubleshooting DM Convert Best practices for using DM Convert Concepts All concepts Deployment Manager fundamentals Deployment Manager audit logging Access control with IAM Best practices for using Deployment Manager Overview of Runtime Configurator Runtime Configurator fundamentals Access control options for Runtime Configurator Tutorials All tutorials Create a network load-balanced logbook application (Python) Create a HTTP load-balanced logbook application Create a container-optimized deployment Structure Deployment Manager for use at scale Deploy an SAP HANA cluster using Deployment Manager Solutions that use Deployment Manager AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Cloud Deployment Manager will reach end of support on March 31, 2026 .
- In the following command, replace [MY_PROJECT] with your project ID: gcloud config set project [MY_PROJECT] Define your resources You describe your resources in a configuration file, which is written in the YAML syntax.
- Check on your new deployment To check the status of the deployment, run the following command: gcloud deployment-manager deployments describe quickstart-deployment You see a description of the deployment, including its start and end time, the resources created, and any warnings or errors: fingerprint: xmVVeTtPq-5rr8F-vWFlrg == id: '54660732508021769' insertTime: '2016-03-09T04:45:26.032-08:00' manifest: https://www.googleapis.com/deploymentmanager/v2/projects/myproject/global/deployments/my-first-deployment/manifests/manifest-1457527526037 name: quickstart-deployment operation: endTime: '2016-03-09T04:46:19.480-08:00' id: '8993923014899639305' kind: deploymentmanager#operation name: operation-1457527525951-52d9d126f4618-f1ca6e72-3404bd3b operationType: insert progress: 100 startTime: '2016-03-09T04:45:27.275-08:00' status: DONE ... resources: NAME TYPE STATE ERRORS quickstart-deployment-vm compute.v1.instance COMPLETED - Review your resources After you have created the deployment, you can review your resources in Google Cloud console.
- Deploy the resources To deploy your resources, use the Google Cloud CLI to create a new deployment, using your configuration file: gcloud deployment-manager deployments create quickstart-deployment --config vm.yaml If the deployment is successful, you receive a message similar to the following example: Create operation operation-1432319707382-516afeb5d00f1-b864f0e7-b7103978 completed successfully.

### Supported resource types | Cloud Deployment Manager | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types](https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a full list of supported resource types, including resources that are in alpha, run the types list command in gcloud : gcloud deployment - manager types list Resource Type Reference appengine.v1.version Documentation bigquery.v2.dataset Documentation bigquery.v2.table Documentation bigtableadmin.v2.instance Documentation bigtableadmin.v2.instance.table Documentation cloudresourcemanager.v1.project Documentation compute.beta.address Documentation compute.beta.autoscaler Documentation compute.beta.backendBucket Documentation compute.beta.backendService Documentation compute.beta.disk Documentation compute.beta.firewall Documentation compute.beta.forwardingRule Documentation compute.beta.globalAddress Documentation compute.beta.globalForwardingRule Documentation compute.beta.healthCheck Documentation compute.beta.httpHealthCheck Documentation compute.beta.httpsHealthCheck Documentation compute.beta.image Documentation compute.beta.instance Documentation compute.beta.instanceGroup Documentation compute.beta.instanceGroupManager Documentation compute.beta.instanceTemplate Documentation compute.beta.network Documentation compute.beta.regionAutoscaler Documentation compute.beta.regionBackendService Documentation compute.beta.regionInstanceGroup Documentation compute.beta.regionInstanceGroupManager Documentation compute.beta.route Documentation compute.beta.router Documentation compute.beta.sslCertificate Documentation compute.beta.subnetwork Documentation compute.beta.targetHttpProxy Documentation compute.beta.targetHttpsProxy Documentation compute.beta.targetInstance Documentation compute.beta.targetPool Documentation compute.beta.targetSslProxy Documentation compute.beta.targetVpnGateway Documentation compute.beta.urlMap Documentation compute.beta.vpnTunnel Documentation compute.beta.xpnHost Documentation compute.beta.xpnResource Documentation compute.v1.address Documentation compute.v1.autoscaler Documentation compute.v1.backendService Documentation compute.v1.disk Documentation compute.v1.firewall Documentation compute.v1.forwardingRule Documentation compute.v1.globalAddress Documentation compute.v1.globalForwardingRule Documentation compute.v1.healthCheck Documentation compute.v1.httpHealthCheck Documentation compute.v1.httpsHealthCheck Documentation compute.v1.image Documentation compute.v1.instance Documentation compute.v1.instanceGroup Documentation compute.v1.instanceGroupManager Documentation compute.v1.instanceTemplate Documentation compute.v1.network Documentation compute.v1.regionAutoscaler Documentation compute.v1.regionBackendService Documentation compute.v1.regionInstanceGroup Documentation compute.v1.regionInstanceGroupManager Documentation compute.v1.route Documentation compute.v1.router Documentation compute.v1.sslCertificate Documentation compute.v1.subnetwork Documentation compute.v1.targetHttpProxy Documentation compute.v1.targetHttpsProxy Documentation compute.v1.targetInstance Documentation compute.v1.targetPool Documentation compute.v1.targetSslProxy Documentation compute.v1.targetVpnGateway Documentation compute.v1.urlMap Documentation compute.v1.vpnTunnel Documentation container.v1.cluster Documentation container.v1.nodePool Documentation dataproc.v1.cluster Documentation dns.v1.managedZone Documentation iam.v1.serviceAccount Documentation iam.v1.serviceAccounts.key Documentation logging.v2.metric Documentation logging.v2.sink Documentation pubsub.v1.subscription Documentation pubsub.v1.topic Documentation runtimeconfig.v1beta1.config Documentation runtimeconfig.v1beta1.variable Documentation runtimeconfig.v1beta1.waiter Documentation spanner.v1.instance Documentation sqladmin.v1beta4.database Documentation sqladmin.v1beta4.instance Documentation sqladmin.v1beta4.user Documentation storage.v1.bucket Documentation storage.v1.bucketAccessControl Documentation storage.v1.defaultObjectAccessControl Documentation storage.v1.object Documentation storage.v1.objectAccessControl Documentation What's next Create a configuration .
- Supported resource types | Cloud Deployment Manager | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Deployment Manager Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console Cloud Deployment Manager All APIs & references Syntax reference Configurations and templates Supported resource types Resource snippets for Google Cloud type providers Example resource templates gcloud reference Managing long-running operations with the API v2 API Overview Deployments Overview cancelPreview delete get getIamPolicy insert list patch setIamPolicy stop testIamPermissions update Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list v2beta API Overview CompositeTypes Overview delete get insert list patch update Deployments Overview cancelPreview delete get getIamPolicy insert list patch setIamPolicy stop testIamPermissions update Manifests Overview get list Operations Overview get list Resources Overview get list TypeProviders Overview delete get getType insert list listTypes patch update Types Overview list Runtime Configurator API v1beta1 Overview REST Resources projects.configs Overview create delete get getIamPolicy list setIamPolicy testIamPermissions update projects.configs.operations Overview get testIamPermissions projects.configs.variables Overview create delete get list testIamPermissions update watch projects.configs.waiters Overview create delete get list testIamPermissions Types Policy TestIamPermissionsResponse REST Resources operations Overview cancel delete list Types Operation WaitOperationRequest Deprecated APIs v2beta2 Overview Deployments Overview delete get insert list patch update Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list v2beta1 Overview Deployments Overview delete get insert list Manifests Overview get list Operations Overview get list Resources Overview get list Types Overview list Templates Authorization Standard query parameters Improve performance Batch requests Libraries AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Cloud Deployment Manager will reach end of support on March 31, 2026 .
- For steps to use an API's resource representation to create your configuration, see Declaring resource properties .

### "Previewing a configuration \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file](https://docs.cloud.google.com/deployment-manager/docs/configuration/preview-configuration-file)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Previewing a new configuration Preview a configuration by using the Google Cloud CLI or by making a direct request to the API. gcloud If you're using the Google Cloud CLI, use the create sub-command with the --preview flag: gcloud deployment-manager deployments create example-config --config configuration-file.yaml \ --preview The server returns a list of resources whose state is IN PREVIEW for you to review: The fingerprint of the deployment is ulPDrJON8E5ySHKC5fcukw== Waiting for create [operation-1492785372594-54dae2ddbff50-58d45d53-12d483cf]...done.
- Performing multiple previews If you want to change your configuration and perform another preview, use the update command with the --preview flag: gcloud deployment-manager deployments update example-config \ --config new-config.yaml --preview In the API, make a PUT() request with an existing deployment and provide the preview=true query parameter.
- You can move forward with the deployment by running the following command: gcloud deployment-manager deployments update example-config Deployment Manager uses the last previewed configuration to create a deployment.
- Alternatively, if you don't want to move forward with the configuration, you can cancel the preview, and then delete the deployment: gcloud deployment-manager deployments cancel-preview example-config Note: If you perform many previews without canceling or moving forward with any of them, you will end up with many empty deployments.

