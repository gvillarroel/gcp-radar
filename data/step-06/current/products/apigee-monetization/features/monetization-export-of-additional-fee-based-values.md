---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:04:10.354Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "Monetization Export of Additional Fee-Based Values"
feature_slug: "monetization-export-of-additional-fee-based-values"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "additional"
  - "export"
  - "values"
  - "based"
  - "supports"
---

# Monetization Export of Additional Fee-Based Values

Product: Apigee Monetization
Coverage: MEDIUM

## Step 02 Summary

Monetization now supports exporting additional fee-based values for organizations in report output.

## Extended Definition

Monetization now supports exporting additional fee-based values for organizations in report output.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Managing rate plans for API products | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `feature-recovery-direct-http`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Managing API products Managing client applications Organizing client app ownership Controlling developer access to your apps App access overview Registering app developers Importing existing consumer keys and secrets Developer portal solutions API design overview Building your integrated portal Introduction How portal users interact with your portal Getting started Tutorial: Building your first portal Overview Step 1: Create a portal Step 2: Customize the color palette Step 3: Customize the logo Step 4: Edit page content Step 5: Set up navigation Step 6: Publish an API Quick tips for customizing the sample portal Best practices for building your portal Building and publishing your portal Steps to build your portal Managing your portals Managing the pages in your portal Developing portal content Customizing your theme Setting up navigation Publishing your APIs Managing access to your APIs using API keys Managing the default visibility Managing your assets Customizing your domain Configuring email Configure a content security policy Configuring analytics tracking Adding custom scripts Publishing your portal content Viewing your live portal Creating a custom search page Managing user account creation and sign-in experience Configuring the user account creation and sign-in experience Configuring identity providers Managing user accounts Managing developer teams Managing audiences Reference Cookies Markdown syntax Building your portal using Drupal Introduction Drupal-based developer portal in Cloud Marketplace Overview Get started Customize your portal Support resources Choosing a hosting provider Support process for Apigee Drupal modules MONETIZE Overview of Apigee monetization Steps to use Apigee monetization Enabling Apigee monetization Enforcing monetization limits in API proxies Enforcing monetization quotas in API products Managing prepaid account balances Managing rate plans for API products Integrating monetization in Drupal portal Purchasing API product subscriptions using API Debugging monetization using the Debug tool Capturing monetization data Generating monetization reports ADMINISTER Users, roles, and access Users and roles Apigee roles Managing users, roles, and permissions using APIs Managing users in the UI Managing access in Google Cloud Access Apigee using Workforce Identity Federation Adding IAM Conditions to policies Apigee Spaces Apigee Spaces overview Apigee Spaces roles and permissions Create and manage Apigee Spaces Manage API resources with Apigee Spaces Move API resources in Apigee Spaces IAM permission hierarchy in Apigee Spaces Network Configuration Peering ranges Using multiple regions Managing instances Changing instance IPs Recreating an Apigee instance with zero downtime Using shared VPC networks Southbound networking patterns Northbound networking with Private Service Connect Migrate northbound routing to Private Service Connect Configure active health check for regional failover with Private Service Connect Client IP resolution Security administration TLS Options for configuring TLS Accessing TLS connection information in an API proxy Working with references SAML Using VPC Service Controls About the encryption keys Provisioning NAT IPs Performance considerations for Apigee Cloud NAT Calculating static NAT IP requirements Preventing DoS attacks Integrate Apigee with your SIEM solution Integrate Apigee with Google SecOps Managing data collectors Backups Switching between organizations Manage maintenance updates Overview Manage instance maintenance windows View maintenance logs ANALYZE Analytics overview Using the analytics dashboards API metrics API proxy performance Error code analysis Latency analysis Cache performance Target performance Developer analysis Developer engagement Traffic composition End user analysis Devices Geomap Custom reports Creating and managing custom reports Analytics metrics, dimensions, and filters reference Operations anomalies Operations anomalies overview View and investigate anomalies Create anomaly alerts Collecting custom data with the DataCapture policy Exporting data from analytics Obfuscate user data for analytics Data Studio integration Using the API Using the asynchronous custom reports API Using the metrics API Metrics API examples Troubleshooting Troubleshooting with analytics What does an analytics entity named 'not set' mean?
- Logging Logging overview View logs Access logs Cassandra logs MART logs Runtime logs Synchronizer logs UDCA logs Metrics collection Metrics collection overview Configure metrics collection View metrics Other data collection Runtime Services Runtime service configuration overview Manage runtime plane components Cassandra Configure Cassandra for production StorageClass configuration Backup and recovery TLS configuration Scale down Environments About environments Managing environments Create environments Delete environments Base path routing Generate self-signed TLS certificates MART MART configuration Add the MART IP to an org Synchronizer Service accounts About service accounts Service account validation Obtain TLS credentials: An example Cluster Management Cluster requirements Overview GKE non-production GKE production Anthos GKE non-production Anthos GKE production Configure ports and set up firewalls Secure the runtime installation Data encryption Multi-region deployments on GKE and GKE on-prem Multi-region deployments on AKS Configure static IP addresses Scale and autoscale services Configure dedicated node pools Download signed runtime images Apigee deployment services Rolling updates Upgrading Apigee hybrid Configuration property reference Release notes LOGGING Audit logging Audit logging for Apigee Connect Logging Apigee access logs TEST Customer security testing requests Performance testing TROUBLESHOOT Troubleshooting the Apigee installation Logging Apigee access logs AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development Apigee Guides Send feedback Managing rate plans for API products Stay organized with collections Save and categorize content based on your preferences.
- Using rate plans, API product owners can monetize their API products by configuring the following: Billing account model Currency used for billing Frequency at which customers are billed (monthly only) Initial setup fees for using an API product Consumption-based charges for using an API product Any recurring fees not based on consumption, such as monthly fees for access to your API product Time interval during which the rate plan is in effect for an API product (rate plan activation and expiration times) Revenue sharing with developer partners Note: You can associate multiple rate plans with the same API product but only one rate plan can be active at any point of time.
- See also: Publishing rate plans Setting the activation and expiration times for a rate plan Cloning rate plans Clone rate plans to create duplicate rate plans based on existing rate plans.

### Overview of Apigee monetization | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- Source ID: `feature-recovery-direct-http`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Managing API products Managing client applications Organizing client app ownership Controlling developer access to your apps App access overview Registering app developers Importing existing consumer keys and secrets Developer portal solutions API design overview Building your integrated portal Introduction How portal users interact with your portal Getting started Tutorial: Building your first portal Overview Step 1: Create a portal Step 2: Customize the color palette Step 3: Customize the logo Step 4: Edit page content Step 5: Set up navigation Step 6: Publish an API Quick tips for customizing the sample portal Best practices for building your portal Building and publishing your portal Steps to build your portal Managing your portals Managing the pages in your portal Developing portal content Customizing your theme Setting up navigation Publishing your APIs Managing access to your APIs using API keys Managing the default visibility Managing your assets Customizing your domain Configuring email Configure a content security policy Configuring analytics tracking Adding custom scripts Publishing your portal content Viewing your live portal Creating a custom search page Managing user account creation and sign-in experience Configuring the user account creation and sign-in experience Configuring identity providers Managing user accounts Managing developer teams Managing audiences Reference Cookies Markdown syntax Building your portal using Drupal Introduction Drupal-based developer portal in Cloud Marketplace Overview Get started Customize your portal Support resources Choosing a hosting provider Support process for Apigee Drupal modules MONETIZE Overview of Apigee monetization Steps to use Apigee monetization Enabling Apigee monetization Enforcing monetization limits in API proxies Enforcing monetization quotas in API products Managing prepaid account balances Managing rate plans for API products Integrating monetization in Drupal portal Purchasing API product subscriptions using API Debugging monetization using the Debug tool Capturing monetization data Generating monetization reports ADMINISTER Users, roles, and access Users and roles Apigee roles Managing users, roles, and permissions using APIs Managing users in the UI Managing access in Google Cloud Access Apigee using Workforce Identity Federation Adding IAM Conditions to policies Apigee Spaces Apigee Spaces overview Apigee Spaces roles and permissions Create and manage Apigee Spaces Manage API resources with Apigee Spaces Move API resources in Apigee Spaces IAM permission hierarchy in Apigee Spaces Network Configuration Peering ranges Using multiple regions Managing instances Changing instance IPs Recreating an Apigee instance with zero downtime Using shared VPC networks Southbound networking patterns Northbound networking with Private Service Connect Migrate northbound routing to Private Service Connect Configure active health check for regional failover with Private Service Connect Client IP resolution Security administration TLS Options for configuring TLS Accessing TLS connection information in an API proxy Working with references SAML Using VPC Service Controls About the encryption keys Provisioning NAT IPs Performance considerations for Apigee Cloud NAT Calculating static NAT IP requirements Preventing DoS attacks Integrate Apigee with your SIEM solution Integrate Apigee with Google SecOps Managing data collectors Backups Switching between organizations Manage maintenance updates Overview Manage instance maintenance windows View maintenance logs ANALYZE Analytics overview Using the analytics dashboards API metrics API proxy performance Error code analysis Latency analysis Cache performance Target performance Developer analysis Developer engagement Traffic composition End user analysis Devices Geomap Custom reports Creating and managing custom reports Analytics metrics, dimensions, and filters reference Operations anomalies Operations anomalies overview View and investigate anomalies Create anomaly alerts Collecting custom data with the DataCapture policy Exporting data from analytics Obfuscate user data for analytics Data Studio integration Using the API Using the asynchronous custom reports API Using the metrics API Metrics API examples Troubleshooting Troubleshooting with analytics What does an analytics entity named 'not set' mean?
- An API product can have multiple rate plans associated with it but only one rate plan can be active at any point of time.
- AppGroups in monetization support the following features: AppGroups subscribed to API products with rate plans.
- For more information, see Managing rate plans for API products .

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before creating the API proxy, set the following environment variable: export PUBLIC DOMAIN NAME = $( gcloud ai index-endpoints describe $INDEX ENDPOINT ID --region = $REGION --project = $PROJECT ID grep "publicEndpointDomainName" awk '{print $2}' ) To create a proxy for use with semantic caching: Go to the API proxies page in the Google Cloud console.
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export REGION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.
- For this tutorial, set this URL to the following: PUBLIC DOMAIN NAME /v1/projects/ PROJECT ID /locations/ REGION /indexEndpoints/ INDEX ENDPOINT ID :findNeighbors The PUBLIC DOMAIN NAME and INDEX ENDPOINT ID values were set in an earlier step.
- Home Documentation Application development Apigee Guides Send feedback Get started with semantic caching policies Stay organized with collections Save and categorize content based on your preferences.

