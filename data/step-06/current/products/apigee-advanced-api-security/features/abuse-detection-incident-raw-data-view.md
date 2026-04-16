---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.414Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Abuse Detection incident raw data view"
feature_slug: "abuse-detection-incident-raw-data-view"
latest_feature_date: "2025-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
keywords:
  - "reports"
  - "provide"
  - "view"
  - "incident"
  - "detection"
  - "abuse"
---

# Abuse Detection incident raw data view

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Abuse Detection incident reports now provide raw underlying data, including fields such as client IP, API proxy, and developer app, for deeper investigation.

## Extended Definition

Abuse Detection incident reports now provide raw underlying data, including fields such as client IP, API proxy, and developer app, for deeper investigation.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)

## Supporting Pages

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Main Abuse detection page At the top of the page, you can select one of the following recent time periods in which to view incidents: the past 1 day , 1 week , or 2 weeks .
- Exclude traffic using the abuse detection incident details page To exclude one or multiple IP addresses : View the details for an incident.
- Advanced API Security's abuse detection lets you view security incidents involving your APIs.
- When Advanced API Security detects a security incident, it reports the following: The risk level and duration of the incident The proxies affected by the incident The IP addresses of the incident events The detection rules that were triggered by the incident The countries of origin of the incident and other related information about the incident.

### Security actions overview and UI | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `feature-recovery-direct-http`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- One way to identify which requests to take action on is to use the Abuse detection Detected traffic or Incident views, which show IP addresses and API keys that are sources of abuse.
- The information displayed in the Attributes page is similar the Attributes view for the Abuse detection Incident details attributes .
- Managing API products Managing client applications Organizing client app ownership Controlling developer access to your apps App access overview Registering app developers Importing existing consumer keys and secrets Developer portal solutions API design overview Building your integrated portal Introduction How portal users interact with your portal Getting started Tutorial: Building your first portal Overview Step 1: Create a portal Step 2: Customize the color palette Step 3: Customize the logo Step 4: Edit page content Step 5: Set up navigation Step 6: Publish an API Quick tips for customizing the sample portal Best practices for building your portal Building and publishing your portal Steps to build your portal Managing your portals Managing the pages in your portal Developing portal content Customizing your theme Setting up navigation Publishing your APIs Managing access to your APIs using API keys Managing the default visibility Managing your assets Customizing your domain Configuring email Configure a content security policy Configuring analytics tracking Adding custom scripts Publishing your portal content Viewing your live portal Creating a custom search page Managing user account creation and sign-in experience Configuring the user account creation and sign-in experience Configuring identity providers Managing user accounts Managing developer teams Managing audiences Reference Cookies Markdown syntax Building your portal using Drupal Introduction Drupal-based developer portal in Cloud Marketplace Overview Get started Customize your portal Support resources Choosing a hosting provider Support process for Apigee Drupal modules MONETIZE Overview of Apigee monetization Steps to use Apigee monetization Enabling Apigee monetization Enforcing monetization limits in API proxies Enforcing monetization quotas in API products Managing prepaid account balances Managing rate plans for API products Integrating monetization in Drupal portal Purchasing API product subscriptions using API Debugging monetization using the Debug tool Capturing monetization data Generating monetization reports ADMINISTER Users, roles, and access Users and roles Apigee roles Managing users, roles, and permissions using APIs Managing users in the UI Managing access in Google Cloud Access Apigee using Workforce Identity Federation Adding IAM Conditions to policies Apigee Spaces Apigee Spaces overview Apigee Spaces roles and permissions Create and manage Apigee Spaces Manage API resources with Apigee Spaces Move API resources in Apigee Spaces IAM permission hierarchy in Apigee Spaces Network Configuration Peering ranges Using multiple regions Managing instances Changing instance IPs Recreating an Apigee instance with zero downtime Using shared VPC networks Southbound networking patterns Northbound networking with Private Service Connect Migrate northbound routing to Private Service Connect Configure active health check for regional failover with Private Service Connect Client IP resolution Security administration TLS Options for configuring TLS Accessing TLS connection information in an API proxy Working with references SAML Using VPC Service Controls About the encryption keys Provisioning NAT IPs Performance considerations for Apigee Cloud NAT Calculating static NAT IP requirements Preventing DoS attacks Integrate Apigee with your SIEM solution Integrate Apigee with Google SecOps Managing data collectors Backups Switching between organizations Manage maintenance updates Overview Manage instance maintenance windows View maintenance logs ANALYZE Analytics overview Using the analytics dashboards API metrics API proxy performance Error code analysis Latency analysis Cache performance Target performance Developer analysis Developer engagement Traffic composition End user analysis Devices Geomap Custom reports Creating and managing custom reports Analytics metrics, dimensions, and filters reference Operations anomalies Operations anomalies overview View and investigate anomalies Create anomaly alerts Collecting custom data with the DataCapture policy Exporting data from analytics Obfuscate user data for analytics Looker Studio integration Using the API Using the asynchronous custom reports API Using the metrics API Metrics API examples Troubleshooting Troubleshooting with analytics What does an analytics entity named 'not set' mean?

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- To get more information about the abuse, you can use either of the following resources: The Abuse detection page, which displays information about security incidents involving abuse traffic.
- Click Detected Traffic to view the Detected traffic tab in the Abuse detection page.
- Security scores assessment types There are three assessment types that contribute to the overall security score calculated by Advanced API Security: Source assessment: Assesses the detected abuse traffic, using the Advanced API Security detection rules . "Abuse" refers to requests sent to the API for purposes other than what the API is intended for.
- Abuse recommendations If the source score is low, Apigee recommends that you review the IPs for which abuse has been detected.

