---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:04:10.356Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "Monetization DataCapture Variables"
feature_slug: "monetization-datacapture-variables"
latest_feature_date: "2021-11-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
keywords:
  - "variables"
  - "captures"
  - "datacapture"
  - "transaction"
  - "policy"
  - "such"
---

# Monetization DataCapture Variables

Product: Apigee Monetization
Coverage: MEDIUM

## Step 02 Summary

The DataCapture policy now captures monetization transaction data such as revenue, currency, price multiplier, and transaction status.

## Extended Definition

The DataCapture policy now captures monetization transaction data such as revenue, currency, price multiplier, and transaction status.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)

## Supporting Pages

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you have configured the perUnitPriceMultiplier monetization variable in your DataCapture policy, the per-transaction cost specified in any type (Fixed fee per unit or Banded) of consumption-based fees is multiplied by the value of perUnitPriceMultiplier .
- You can get the shared revenue for each monetized transaction by configuring the revShareGrossPrice monetization variable in your DataCapture policy.
- Using rate plans, API product owners can monetize their API products by configuring the following: Billing account model Currency used for billing Frequency at which customers are billed (monthly only) Initial setup fees for using an API product Consumption-based charges for using an API product Any recurring fees not based on consumption, such as monthly fees for access to your API product Time interval during which the rate plan is in effect for an API product (rate plan activation and expiration times) Revenue sharing with developer partners Note: You can associate multiple rate plans with the same API product but only one rate plan can be active at any point of time.
- Select any one of the following options: Fixed fee per unit (flat fee per unit consumed) Banded (a variable fee per unit consumed, determined by consumption ranges) Stairstep (a single flat fee determined by total consumption) --> Fixed fee per unit: A fixed fee is charged for each monetized transaction.

### Overview of Apigee monetization | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview)
- Source ID: `feature-recovery-direct-http`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Managing API products Managing client applications Organizing client app ownership Controlling developer access to your apps App access overview Registering app developers Importing existing consumer keys and secrets Developer portal solutions API design overview Building your integrated portal Introduction How portal users interact with your portal Getting started Tutorial: Building your first portal Overview Step 1: Create a portal Step 2: Customize the color palette Step 3: Customize the logo Step 4: Edit page content Step 5: Set up navigation Step 6: Publish an API Quick tips for customizing the sample portal Best practices for building your portal Building and publishing your portal Steps to build your portal Managing your portals Managing the pages in your portal Developing portal content Customizing your theme Setting up navigation Publishing your APIs Managing access to your APIs using API keys Managing the default visibility Managing your assets Customizing your domain Configuring email Configure a content security policy Configuring analytics tracking Adding custom scripts Publishing your portal content Viewing your live portal Creating a custom search page Managing user account creation and sign-in experience Configuring the user account creation and sign-in experience Configuring identity providers Managing user accounts Managing developer teams Managing audiences Reference Cookies Markdown syntax Building your portal using Drupal Introduction Drupal-based developer portal in Cloud Marketplace Overview Get started Customize your portal Support resources Choosing a hosting provider Support process for Apigee Drupal modules MONETIZE Overview of Apigee monetization Steps to use Apigee monetization Enabling Apigee monetization Enforcing monetization limits in API proxies Enforcing monetization quotas in API products Managing prepaid account balances Managing rate plans for API products Integrating monetization in Drupal portal Purchasing API product subscriptions using API Debugging monetization using the Debug tool Capturing monetization data Generating monetization reports ADMINISTER Users, roles, and access Users and roles Apigee roles Managing users, roles, and permissions using APIs Managing users in the UI Managing access in Google Cloud Access Apigee using Workforce Identity Federation Adding IAM Conditions to policies Apigee Spaces Apigee Spaces overview Apigee Spaces roles and permissions Create and manage Apigee Spaces Manage API resources with Apigee Spaces Move API resources in Apigee Spaces IAM permission hierarchy in Apigee Spaces Network Configuration Peering ranges Using multiple regions Managing instances Changing instance IPs Recreating an Apigee instance with zero downtime Using shared VPC networks Southbound networking patterns Northbound networking with Private Service Connect Migrate northbound routing to Private Service Connect Configure active health check for regional failover with Private Service Connect Client IP resolution Security administration TLS Options for configuring TLS Accessing TLS connection information in an API proxy Working with references SAML Using VPC Service Controls About the encryption keys Provisioning NAT IPs Performance considerations for Apigee Cloud NAT Calculating static NAT IP requirements Preventing DoS attacks Integrate Apigee with your SIEM solution Integrate Apigee with Google SecOps Managing data collectors Backups Switching between organizations Manage maintenance updates Overview Manage instance maintenance windows View maintenance logs ANALYZE Analytics overview Using the analytics dashboards API metrics API proxy performance Error code analysis Latency analysis Cache performance Target performance Developer analysis Developer engagement Traffic composition End user analysis Devices Geomap Custom reports Creating and managing custom reports Analytics metrics, dimensions, and filters reference Operations anomalies Operations anomalies overview View and investigate anomalies Create anomaly alerts Collecting custom data with the DataCapture policy Exporting data from analytics Obfuscate user data for analytics Data Studio integration Using the API Using the asynchronous custom reports API Using the metrics API Metrics API examples Troubleshooting Troubleshooting with analytics What does an analytics entity named 'not set' mean?
- Apigee technical feature overview Apigee terminology API development lifecycle Key points of API proxy development Apigee architecture overview Apigee locations GET STARTED Introduction to provisioning Compare eval and paid organizations Provisioning options Prerequisites About Apigee provisioning permissions Networking options Introduction to data residency Introduction to CMEK Best practices for Apigee CMEK Using organization policy constraints Understand Apigee observability Provision paid orgs Before you begin Subscription Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Pay-as-you-go Cloud console Select your project Provision Apigee with one click Configure and customize Step 1: Enable required APIs Step 2: Set up networking Step 3: Configure hosting and encryption Step 4: Customize access routing Recommended next steps Command line With VPC peering Without VPC peering Provision eval orgs Before you begin Wizard Command line With VPC peering Without VPC peering Next steps Calling a proxy with internal-only access Accessing Apigee Using the UI Using the API Get information about calls to your APIs Using gcloud Troubleshooting DEVELOP Tutorial: Building your first API proxy Overview Step 1: Create an API proxy Step 2: Deploy an API proxy Step 3: Call an API proxy Step 4: Change the target endpoint Step 5: Add a policy Next steps: Go deeper Tutorial: Creating an API proxy from an OpenAPI Specification Building API proxies Understanding APIs and API proxies Programmable proxy basics Introduction to API proxy building Creating an API proxy Editing an API proxy (create a revision) Downloading and uploading an API proxy configuration bundle Deleting an API proxy Environments and organizations Understanding organizations Overview of environments and environment groups Working with environments Working with environment groups Best practices Routes and flows Understanding routes Controlling API proxies with flows Conditional flows Flow variables Flow variable overview Request and response flow variables Message flow variable Conditions with flow variables Shared flows and flow hooks Creating reusable shared flows Attaching a shared flow using flow hooks Chaining API proxies together Handling faults Adding features to a programmable API proxy Using policies Tutorial: Adding the SpikeArrest policy What's a policy?
- DataCapture policy to override monetization-related usage data.
- Attaching and configuring policies in the UI Attaching and configuring policies in XML files Attaching a policy to a ProxyEndpoint or TargetEndpoint flow Managing resources About policy errors Securing an API proxy Security overview IAM IAM-based API authentication OAuth2 Tutorial: Securing an API proxy with OAuth Getting started with OAuth2 Introduction to OAuth 2.0 Videos Client credentials grant type Auth code grant type Password grant type Using JWT access tokens Configuring a new API proxy Registering client apps Obtaining client credentials Understanding OAuth endpoints Requesting tokens and codes Customizing tokens and codes Revoking and approving tokens Revoking tokens by end user ID and app ID Revoking and approving consumer keys Sending an access token Verifying access token Working with OAuth2 scopes Using third-party OAuth tokens Hashing tokens for extra security Advanced OAuth2 topics API keys Tutorial: Securing an API proxy with API keys API keys Setting up API key validation Using Google authentication Using SAML policies in an API proxy Content-based security Masking and hiding data Last-mile security Using AI policies Get started with LLM token policies Get started with Model Armor Get started with semantic caching Limit request traffic Rate-limiting Comparing rate-limiting policies Caching and persistence Overview General purpose caching Response caching Using key value maps Using property sets Support for HTTP response headers Cache internals Videos Shaping, accessing, and converting messages Accessing configuration data Incorporating procedural code Adding CORS support Enabling distributed tracing Using GraphQL Streaming requests and responses Streaming server-sent events Using WebSockets Creating Java callouts How to create Java Callout How to handle JavaCallout policy errors How to use properties in the JavaCallout Adding a custom Java callout security policy Integrating with Contact Center AI Deploying API proxies Deployment overview Deploying an API proxy Undeploying an API proxy Load balancing across backend servers Deploying archives Debugging programmable proxies Tutorial: View message data with the Debug view Debug overview Using Debug Using Offline Debug Using performance metrics Use Terraform with Apigee Performing health checks MCP in Apigee MCP in Apigee overview Get started with Apigee and MCP Monitor and analyze MCP traffic Troubleshoot MCP deployments DEVELOP (LOCAL) Overview of local development with Apigee Get started Set up Apigee in Cloud Code Use Apigee in Cloud Code Tutorial: Build and deploy your first API proxy Overview Step 1: Create an Apigee workspace Step 2: Create an API proxy Step 3: Configure and deploy an environment Step 4: Test your API Step 5: Change your target endpoint Step 6: Attach a policy Step 7: Deploy to an Apigee environment Step 8: Promote an archive to production Develop using Apigee in Cloud Code Manage the Apigee workspace Design and edit APIs Develop API proxies Develop shared flows Add features using policies Manage resources Build and export test resources Configure and deploy environments Test APIs Deploy an archive to an Apigee environment Manage the Apigee Emulator Apigee Command Palette Reference DEVELOP (Kubernetes) Apigee APIM Operator for Kubernetes Overview Before you begin Install the Apigee APIM Operator Install the Apigee APIM Operator for Apigee hybrid Use APIM policies with the Apigee APIM Operator Create an ApigeeBackendService Create an APIMExtensionPolicy Enable security and quota enforcement Add policies to the GKE gateway Update Apigee policies with the Apigee APIM Operator Uninstall the Apigee APIM Operator Troubleshoot the Apigee APIM Operator Apigee APIM Operator resource reference Licenses in Apigee APIM Operator DEVELOP (Service Extensions) Apigee Extension Processor overview Get started with the Apigee Extension Processor PUBLISH Publishing overview Managing API products What is an API product?

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- In the Transaction map pane, this displays a flow diagram including a SpikeArrest policy with an error icon.
- In the dialog: Select the Environment in which you want to run the debug session. (Optional) From the Filter list, select a filter to apply to all transactions in the debug session you are creating.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.

