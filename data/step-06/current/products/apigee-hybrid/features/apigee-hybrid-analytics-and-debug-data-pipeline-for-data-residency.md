---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:54:52.838Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "Apigee Hybrid analytics and debug data pipeline for data residency"
feature_slug: "apigee-hybrid-analytics-and-debug-data-pipeline-for-data-residency"
latest_feature_date: "2024-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
keywords:
  - "requires"
  - "analytics"
  - "residency"
  - "pipeline"
  - "debug"
  - "enabled"
---

# Apigee Hybrid analytics and debug data pipeline for data residency

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Requires data residency-enabled hybrid organizations on v1.13.x to use the new control-plane analytics and debug data pipeline and enables it through control plane access and overrides configuration.

## Extended Definition

Requires data residency-enabled hybrid organizations on v1.13.x to use the new control-plane analytics and debug data pipeline and enables it through control plane access and overrides configuration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid)
- [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms)
- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)

## Supporting Pages

### Using data residency with Apigee hybrid | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid](https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/using-data-residency-with-apigee-hybrid)
- Source ID: `feature-recovery-direct-http`
- Final score: 315
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: instanceID: "my_hybrid_example" namespace: apigee gcp: projectID: hybrid-example region: us-central1 k8sCluster: name: apigee-hybrid region: us-central1 org: hybrid-example contractProvider: https://us-apigee.googleapis.com newDataPipeline: debugSession: true analytics: true See Step 6: Create the overrides When calling the Apigee APIs When you make curl calls to Apigee APIs to perform tasks in your hybrid installation, you will need to call APIs from within the control plane location: curl -H "Authorization: Bearer $TOKEN" \ "https:// CONTROL_PLANE_LOCATION -apigee.googleapis.com/v1/organizations/ ORG_NAME /envgroups" For example: curl -H "Authorization: Bearer $TOKEN" \ "https:// us -apigee.googleapis.com/v1/organizations/my-hybrid-org/envgroups" URL allowlisting If you are using forward proxies with data residency, you must additionally allowlist in the forward proxy: CONTROL_PLANE_LOCATION -apigee.googleapis.com ANALYTICS_REGION -pubsub.googleapis.com URLs required by Apigee hybrid, see Google Cloud URLs to allow for Hybrid .
- Enable analytics and debug data collection with data residency To enable analytics and debug data collection, follow the instructions in Configure hybrid to use the new data pipeline .
- Logging Logging overview View logs Access logs Cassandra logs MART logs Runtime logs Synchronizer logs UDCA logs Metrics collection Metrics collection overview Configure metrics collection View metrics Other data collection Runtime Services Runtime service configuration overview Manage runtime plane components Cassandra Configure Cassandra for production StorageClass configuration Backup and recovery TLS configuration Scale down Environments About environments Managing environments Create environments Delete environments Base path routing Generate self-signed TLS certificates MART MART configuration Add the MART IP to an org Synchronizer Service accounts About service accounts Service account validation Obtain TLS credentials: An example Cluster Management Cluster requirements Overview GKE non-production GKE production Anthos GKE non-production Anthos GKE production Configure ports and set up firewalls Secure the runtime installation Data encryption Multi-region deployments on GKE and GKE on-prem Multi-region deployments on AKS Configure static IP addresses Scale and autoscale services Configure dedicated node pools Download signed runtime images Apigee deployment services Rolling updates Upgrading Apigee hybrid Configuration property reference Release notes LOGGING Audit logging Audit logging for Apigee Connect Logging Apigee access logs TEST Customer security testing requests Performance testing TROUBLESHOOT Troubleshooting the Apigee installation Logging Apigee access logs AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development Apigee Guides Send feedback Using data residency with Apigee hybrid Stay organized with collections Save and categorize content based on your preferences.
- Using data residency with Apigee hybrid | Google Cloud Documentation orgs_path.developers.apps.keys.create API % endsetvar % --> orgs_path.environments.analytics.reports.dailysupp API % endsetvar % --> orgs_path.environments_analytics_reports_dailysummary_d1_results API % endsetvar % --> Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Apigee Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console DISCOVER What is Apigee?

### Apigee hybrid supported platforms and versions | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms](https://docs.cloud.google.com/apigee/docs/hybrid/supported-platforms)
- Source ID: `feature-recovery-direct-http`
- Final score: 291
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Logging Logging overview View logs Access logs Cassandra logs MART logs Runtime logs Synchronizer logs UDCA logs Metrics collection Metrics collection overview Configure metrics collection View metrics Other data collection Runtime Services Runtime service configuration overview Manage runtime plane components Cassandra Configure Cassandra for production StorageClass configuration Backup and recovery TLS configuration Scale down Environments About environments Managing environments Create environments Delete environments Base path routing Generate self-signed TLS certificates MART MART configuration Add the MART IP to an org Synchronizer Service accounts About service accounts Service account validation Obtain TLS credentials: An example Cluster Management Cluster requirements Overview GKE non-production GKE production Anthos GKE non-production Anthos GKE production Configure ports and set up firewalls Secure the runtime installation Data encryption Multi-region deployments on GKE and GKE on-prem Multi-region deployments on AKS Configure static IP addresses Scale and autoscale services Configure dedicated node pools Download signed runtime images Apigee deployment services Rolling updates Upgrading Apigee hybrid Configuration property reference Release notes LOGGING Audit logging Audit logging for Apigee Connect Logging Apigee access logs TEST Customer security testing requests Performance testing TROUBLESHOOT Troubleshooting the Apigee installation Logging Apigee access logs AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development Apigee Guides Send feedback Apigee hybrid supported platforms and versions Stay organized with collections Save and categorize content based on your preferences.
- Apigee hybrid supported platforms and versions | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Apigee Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console DISCOVER What is Apigee?
- Apigee technical feature overview Apigee terminology API development lifecycle Key points of API proxy development Apigee architecture overview Apigee locations GET STARTED Introduction to provisioning Compare eval and paid organizations Provisioning options Prerequisites About Apigee provisioning permissions Networking options Introduction to data residency Introduction to CMEK Best practices for Apigee CMEK Using organization policy constraints Understand Apigee observability Provision paid orgs Before you begin Subscription Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Pay-as-you-go Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Provision eval orgs Before you begin Wizard Command line With VPC peering Without VPC peering Next steps Calling a proxy with internal-only access Accessing Apigee Using the UI Using the API Get information about calls to your APIs Using gcloud Troubleshooting DEVELOP Tutorial: Building your first API proxy Overview Step 1: Create an API proxy Step 2: Deploy an API proxy Step 3: Call an API proxy Step 4: Change the target endpoint Step 5: Add a policy Next steps: Go deeper Tutorial: Creating an API proxy from an OpenAPI Specification Building API proxies Understanding APIs and API proxies Programmable proxy basics Introduction to API proxy building Creating an API proxy Editing an API proxy (create a revision) Downloading and uploading an API proxy configuration bundle Deleting an API proxy Environments and organizations Understanding organizations Overview of environments and environment groups Working with environments Working with environment groups Best practices Routes and flows Understanding routes Controlling API proxies with flows Conditional flows Flow variables Flow variable overview Request and response flow variables Message flow variable Conditions with flow variables Shared flows and flow hooks Creating reusable shared flows Attaching a shared flow using flow hooks Chaining API proxies together Handling faults Adding features to a programmable API proxy Using policies Tutorial: Adding the SpikeArrest policy What's a policy?
- Install Big picture Prerequisites Permissions and roles to install and manage Apigee hybrid Plan and prepare Minimal cluster configurations Configuring dedicated node pools Configuring Cassandra for production Configuring stateless components for production Configuring authentication for Cassandra StorageClass configuration Service account authentication methods in Apigee hybrid Configuring ports and setting up firewalls Using data residency with Apigee hybrid GCP URLs to allow for hybrid Part 1: Project and org setup Overview Step 1: Enable APIs Step 2: Create an organization Step 3: Create an environment group Part 2: Hybrid runtime setup Before you begin Step 1: Create a cluster Step 2: Download the Helm charts Step 3: Create the apigee namespace Step 4: Set up service accounts Step 5: Set up service account authentication Step 6: Create TLS certificates Step 7: Create the overrides Step 8: Enable Control Plane access Step 9: Install cert-manager Step 10: Install the CRDs Step 11: Install Apigee hybrid using Helm Part 3: Expose ingress and deploy proxy Step 1: Expose Apigee ingress Step 2: Deploy an API proxy Uninstall hybrid runtime Administer Administration overview Troubleshooting Automated issue surfacing Diagnosing issues with guardrails Data collection Data collection overview Where is your data stored?

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apigee hybrid version 1.14.0 and later with data residency enabled supports Advanced API Security , Apigee API analytics , the Debug tool , and Monetization .
- If you have a Google Cloud organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ), the constraint will apply to the following Apigee resources that are created when Apigee is provisioned: Control plane Consumer data Runtime Endpoints attachment Analytics If you are provisioning a new Apigee organization within a Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is compatible with the control plane location specified for your Apigee organization: If you provision an Apigee organization without data residency, the resource location constraint in your Google Cloud organization policy must be set to global .
- If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization, the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO): The regionalized Apigee organization's control plane, runtime plane, and analytics .
- Key points If data residency is enabled for your Apigee installation, note the following key points: Data residency must be enabled at the time Apigee is provisioned .

