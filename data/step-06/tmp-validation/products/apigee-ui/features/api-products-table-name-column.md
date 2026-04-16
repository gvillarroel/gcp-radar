---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.425Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "API Products table name column"
feature_slug: "api-products-table-name-column"
latest_feature_date: "2025-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee"
keywords:
  - "products"
  - "sorting"
  - "link"
  - "filtering"
  - "name"
  - "column"
  - "table"
  - "includes"
---

# API Products table name column

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The API Products table includes a Name column with sorting, filtering, and the link to the product detail page.

## Extended Definition

The API Products table includes a Name column with sorting, filtering, and the link to the product detail page.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee)

## Supporting Pages

### Secure an API with OAuth 2.0 | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `feature-recovery-direct-http`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the API product: In the Google Cloud console, go to the Apigee > Distribution > API products page.
- Managing API products Managing client applications Organizing client app ownership Controlling developer access to your apps App access overview Registering app developers Importing existing consumer keys and secrets Developer portal solutions API design overview Building your integrated portal Introduction How portal users interact with your portal Getting started Tutorial: Building your first portal Overview Step 1: Create a portal Step 2: Customize the color palette Step 3: Customize the logo Step 4: Edit page content Step 5: Set up navigation Step 6: Publish an API Quick tips for customizing the sample portal Best practices for building your portal Building and publishing your portal Steps to build your portal Managing your portals Managing the pages in your portal Developing portal content Customizing your theme Setting up navigation Publishing your APIs Managing access to your APIs using API keys Managing the default visibility Managing your assets Customizing your domain Configuring email Configure a content security policy Configuring analytics tracking Adding custom scripts Publishing your portal content Viewing your live portal Creating a custom search page Managing user account creation and sign-in experience Configuring the user account creation and sign-in experience Configuring identity providers Managing user accounts Managing developer teams Managing audiences Reference Cookies Markdown syntax Building your portal using Drupal Introduction Drupal-based developer portal in Cloud Marketplace Overview Get started Customize your portal Support resources Choosing a hosting provider Support process for Apigee Drupal modules MONETIZE Overview of Apigee monetization Steps to use Apigee monetization Enabling Apigee monetization Enforcing monetization limits in API proxies Enforcing monetization quotas in API products Managing prepaid account balances Managing rate plans for API products Integrating monetization in Drupal portal Purchasing API product subscriptions using API Debugging monetization using the Debug tool Capturing monetization data Generating monetization reports ADMINISTER Users, roles, and access Users and roles Apigee roles Managing users, roles, and permissions using APIs Managing users in the UI Managing access in Google Cloud Access Apigee using Workforce Identity Federation Adding IAM Conditions to policies Apigee Spaces Apigee Spaces overview Apigee Spaces roles and permissions Create and manage Apigee Spaces Manage API resources with Apigee Spaces Move API resources in Apigee Spaces IAM permission hierarchy in Apigee Spaces Network Configuration Peering ranges Using multiple regions Managing instances Changing instance IPs Recreating an Apigee instance with zero downtime Using shared VPC networks Southbound networking patterns Northbound networking with Private Service Connect Migrate northbound routing to Private Service Connect Configure active health check for regional failover with Private Service Connect Client IP resolution Security administration TLS Options for configuring TLS Accessing TLS connection information in an API proxy Working with references SAML Using VPC Service Controls About the encryption keys Provisioning NAT IPs Performance considerations for Apigee Cloud NAT Calculating static NAT IP requirements Preventing DoS attacks Integrate Apigee with your SIEM solution Integrate Apigee with Google SecOps Managing data collectors Backups Switching between organizations Manage maintenance updates Overview Manage instance maintenance windows View maintenance logs ANALYZE Analytics overview Using the analytics dashboards API metrics API proxy performance Error code analysis Latency analysis Cache performance Target performance Developer analysis Developer engagement Traffic composition End user analysis Devices Geomap Custom reports Creating and managing custom reports Analytics metrics, dimensions, and filters reference Operations anomalies Operations anomalies overview View and investigate anomalies Create anomaly alerts Collecting custom data with the DataCapture policy Exporting data from analytics Obfuscate user data for analytics Looker Studio integration Using the API Using the asynchronous custom reports API Using the metrics API Metrics API examples Troubleshooting Troubleshooting with analytics What does an analytics entity named 'not set' mean?
- Before you begin To complete this tutorial, you must have access to an Apigee organization where you have permission to: Create and deploy API proxies Create API products Create developer apps You must also have a properly configured environment group hostname with which you can make Apigee API proxy calls.
- Attaching and configuring policies in the UI Attaching and configuring policies in XML files Attaching a policy to a ProxyEndpoint or TargetEndpoint flow Managing resources About policy errors Securing an API proxy Security overview IAM IAM-based API authentication OAuth2 Tutorial: Securing an API proxy with OAuth Getting started with OAuth2 Introduction to OAuth 2.0 Videos Client credentials grant type Auth code grant type Password grant type Using JWT access tokens Configuring a new API proxy Registering client apps Obtaining client credentials Understanding OAuth endpoints Requesting tokens and codes Customizing tokens and codes Revoking and approving tokens Revoking tokens by end user ID and app ID Revoking and approving consumer keys Sending an access token Verifying access token Working with OAuth2 scopes Using third-party OAuth tokens Hashing tokens for extra security Advanced OAuth2 topics API keys Tutorial: Securing an API proxy with API keys API keys Setting up API key validation Using Google authentication Using SAML policies in an API proxy Content-based security Masking and hiding data Last-mile security Using AI policies Get started with LLM token policies Get started with Model Armor Get started with semantic caching Limit request traffic Rate-limiting Comparing rate-limiting policies Caching and persistence Overview General purpose caching Response caching Using key value maps Using property sets Support for HTTP response headers Cache internals Videos Shaping, accessing, and converting messages Accessing configuration data Incorporating procedural code Adding CORS support Enabling distributed tracing Using GraphQL Streaming requests and responses Streaming server-sent events Using WebSockets Creating Java callouts How to create Java Callout How to handle JavaCallout policy errors How to use properties in the JavaCallout Adding a custom Java callout security policy Integrating with Contact Center AI Deploying API proxies Deployment overview Deploying an API proxy Undeploying an API proxy Load balancing across backend servers Deploying archives Debugging programmable proxies Tutorial: View message data with the Debug view Debug overview Using Debug Using Offline Debug Using performance metrics Use Terraform with Apigee Performing health checks MCP in Apigee MCP in Apigee overview Get started with Apigee and MCP Monitor and analyze MCP traffic Troubleshoot MCP deployments DEVELOP (LOCAL) Overview of local development with Apigee Get started Set up Apigee in Cloud Code Use Apigee in Cloud Code Tutorial: Build and deploy your first API proxy Overview Step 1: Create an Apigee workspace Step 2: Create an API proxy Step 3: Configure and deploy an environment Step 4: Test your API Step 5: Change your target endpoint Step 6: Attach a policy Step 7: Deploy to an Apigee environment Step 8: Promote an archive to production Develop using Apigee in Cloud Code Manage the Apigee workspace Design and edit APIs Develop API proxies Develop shared flows Add features using policies Manage resources Build and export test resources Configure and deploy environments Test APIs Deploy an archive to an Apigee environment Manage the Apigee Emulator Apigee Command Palette Reference DEVELOP (Kubernetes) Apigee APIM Operator for Kubernetes Overview Before you begin Install the Apigee APIM Operator Install the Apigee APIM Operator for Apigee hybrid Use APIM policies with the Apigee APIM Operator Create an ApigeeBackendService Create an APIMExtensionPolicy Enable security and quota enforcement Add policies to the GKE gateway Update Apigee policies with the Apigee APIM Operator Uninstall the Apigee APIM Operator Troubleshoot the Apigee APIM Operator Apigee APIM Operator resource reference Licenses in Apigee APIM Operator DEVELOP (Service Extensions) Apigee Extension Processor overview Get started with the Apigee Extension Processor PUBLISH Publishing overview Managing API products What is an API product?

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the API product: In the Google Cloud console, go to the Apigee > Distribution > API products page.
- Before you begin To complete this tutorial, you must have access to an Apigee organization where you have permission to: Create and deploy API proxies Create API products Create developer apps You must also have a properly configured environment group hostname with which you can make Apigee API proxy calls.
- Go to API products Click + Create .
- In the Google Cloud console, go to the Apigee > Distribution > Developers page.

### Step 7: Deploy to an Apigee environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an API product using the Apigee UI: Go to the API products page: In the Google Cloud console, go to the Distribution > API products page.
- Go to API products Click + Create .
- Create a developer in your organization: In the Google Cloud console, go to the Distribution > Developers page.
- In the Google Cloud console, go to the Distribution > Apps page.

