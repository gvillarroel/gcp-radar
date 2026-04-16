---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.014Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Automatic API enablement on management projects"
feature_slug: "automatic-api-enablement-on-management-projects"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/enabled-apis"
  - "https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
keywords:
  - "recommended"
  - "enablement"
  - "projects"
  - "apis"
  - "automatic"
  - "required"
  - "core"
  - "management"
---

# Automatic API enablement on management projects

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

Core and recommended APIs required for App Hub functionality are automatically enabled on the management project.

## Extended Definition

Core and recommended APIs required for App Hub functionality are automatically enabled on the management project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)

## Supporting Pages

### Enable APIs on the management project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/enabled-apis](https://docs.cloud.google.com/app-hub/docs/enabled-apis)
- Source ID: `site-docs-root-2`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Required or recommended More information App Hub API ( apphub.googleapis.com ) Organize existing resources into applications Required App Hub pricing VPC Service Controls App Design Center API ( designcenter.googleapis.com ) Design, deploy, and update applications Required App Design Center pricing Cloud Asset API ( cloudasset.googleapis.com ) Manage the global metadata inventory of Google Cloud resources and other assets Required Cloud Asset Inventory pricing VPC Service Controls Cloud Resource Manager API ( cloudresourcemanager.googleapis.com ) Manage container resources such as organizations, folders, and projects Required Cloud Resource Manager API pricing VPC Service Controls Infrastructure Manager API ( config.googleapis.com ) Automate deployment and management of Google Cloud infrastructure resources Required Infra Manager pricing VPC Service Controls Cloud Build API ( cloudbuild.googleapis.com ) Run builds for Infra Manager deployments Required Cloud Build pricing VPC Service Controls Cloud Storage API ( storage.googleapis.com ) Store data for Google Cloud services, including App Design Center and Cloud Logging Required Cloud Storage pricing VPC Service Controls Google Cloud Observability APIs The following APIs provide capabilities for observability features.
- API Required or recommended More information App Optimize API ( appoptimize.googleapis.com ) Optimize costs in Cost Explorer and Cloud Hub Required Retrieve data from Cloud Billing and Cloud Monitoring Recommender API ( recommender.googleapis.com ) Generate recommendations and insights to help you optimize your Google Cloud resources Required Recommender pricing VPC Service Controls Service Health API ( servicehealth.googleapis.com ) Identify Google Cloud service disruptions relevant to your applications Required Personalized Service Health pricing VPC Service Controls Security and compliance APIs Security Command Center is a risk management solution that helps security professionals to prevent, detect, and respond to security issues.
- API Required or recommended More information Gemini for Google Cloud API ( cloudaicompanion.googleapis.com ) Recommended Gemini Cloud Assist pricing VPC Service Controls Enable recommended APIs To enable recommended APIs after application management setup, follow these steps: To get the permissions that you need to enable APIs, ask your administrator to grant you the Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) role on the management project.
- API Required or recommended More information Security Command Center API ( securitycenter.googleapis.com ) Recommended Security Command Center pricing VPC Service Controls Developer tooling APIs Developer Connect connects your application management workflows with your development lifecycle.

### Set up a single project \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project](https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-single-project)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Confirm the attachment status: gcloud apphub boundary describe \ --project = PROJECT ID \ --location = global You obtain an output similar to the following example: name: projects/ PROJECT ID /locations/ LOCATION /boundary crmNode: projects/ PROJECT ID createTime: 2025 -08-28T19:04:47Z updateTime: 2025 -08-28T19:04:47Z type: AUTOMATIC When you finish configuring the management project, the required APIs for application management are enabled, and you can start using App Hub to group services and workloads in applications.
- Enable the App Hub API: gcloud services enable apphub.googleapis.com \ --project PROJECT ID Attach the project to itself to create an application management boundary: gcloud apphub boundary update \ --crm-node = projects/ PROJECT ID \ --project = PROJECT ID \ --location = global This command configures the project as its own management project, letting App Hub automatically discover all supported resources within it.
- Required roles To get the permissions that you need to configure a single project for application management, ask your administrator to grant you the following IAM roles on the project that you want to configure as the standalone management project: Manage resources, permissions, and billing on the project: Project Owner ( roles/owner ) Manage all application components on the project: App Hub Admin ( roles/apphub.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Enable application management on a project This action configures the project as a standalone management project and enables the required APIs for application metadata and configurations.

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List the registered services in your application: gcloud apphub applications services list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered service: ID DISPLAY NAME SERVICE REFERENCE CREATE TIME SERVICE NAME SERVICE DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08 Register workloads List the available workloads that you can register to an application: gcloud apphub discovered-workloads list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- Optional: FILTER EXPRESSION : the filter expression for the --filter flag to only display services from a specified project within the application management boundary or with a specific property, for example: service properties.gcp project=projects/ PROJECT ID service properties.gcp project=projects/ PROJECT ID AND service reference.uri "forwardingRules" The output is similar to the following example: ID SERVICE REFERENCE SERVICE PROPERTIES SERVICE ID { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } { 'gcpProject' : 'projects/ PROJECT ID ' , 'location' : ' REGION ' } Copy the service ID, SERVICE ID , from the output.
- Commands are slightly different for services and workloads: Register services List the available services that you can register to an application: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.

