---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.811Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Playbook permissions for API key roles"
feature_slug: "playbook-permissions-for-api-key-roles"
latest_feature_date: "2025-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
keywords:
  - "playbook"
  - "permissions"
  - "for"
  - "api"
  - "key"
  - "roles"
  - "now"
  - "extend"
---

# Playbook permissions for API key roles

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Playbook permissions now extend to SOC roles associated with API keys as well as user SOC roles.

## Extended Definition

Playbook permissions now extend to SOC roles associated with API keys as well as user SOC roles.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Specify the endpoint URL In Amazon Data Firehose, specify the HTTPS endpoint and access key, as follows: Append the API key to the feed endpoint URL and specify this URL as the HTTP endpoint URL in the following format: ENDPOINT URL ?key= API KEY Replace the following: ENDPOINT URL : the feed endpoint URL.
- Enable authentication by specifying the API key and secret key as part of the custom header in the following format: X-goog-api-key = API KEY X-Webhook-Access-Key = SECRET We recommend that you specify the API key as a header instead of specifying it in the URL.
- If your webhook client doesn't support custom headers, you can specify the API key and secret key by using query parameters in the following format: ENDPOINT URL ?key= API KEY &secret= SECRET Replace the following: ENDPOINT URL : the feed endpoint URL.

### "Migrate from CrowdStrike Detects API to Alerts API \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api](https://docs.cloud.google.com/chronicle/docs/detection/migrate-detects-api-to-alerts-api)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Option 1: Update permissions for your existing CrowdStrike API client (Recommended) Option 2: Create and use a new CrowdStrike API client Option 1: Update permissions for your existing CrowdStrike API client (Recommended) This approach requires configuration changes only in your CrowdStrike Falcon console and has the lowest impact on existing detection rules that reference the CS DETECTS log type.
- To set up and use the dashboard, perform the following steps: Navigate to the CrowdStrike support article and download the YAML file, titled, PlannedDecommissionofthedetectsAPI(September30,2025) , attached at the bottom of the page.
- By creating a new client with the correct permissions, you can ensure that the connector uses the modern Alerts API.
- For each API client ID identified in the previous step, grant the read permission for alerts as shown in the image.

### "Map users in the Google SecOps platform \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- Source ID: `site-iam-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Your company has three different personas: Security analysts (containing group members Sasha and Tal) SOC engineers (containing group members Quinn and Noam) NOC engineers (containing group members Kim and Kai) Security analysts and SOC Engineers have the same Google SecOps Permission Groups (Analyst) and SOC Roles (Tier 1), but while the Security Analysts have permissions for the London environment, the SOC Engineers have permissions for the Manchester environment.
- This is a mandatory step to provide the identity with the necessary access to SOC Roles , and Environments required to perform automated tasks or API operations.
- The following example is the workforce pool creation command for the app configuration described in Configure Workforce Identity Federation : gcloud iam workforce-pools providers create-saml WORKFORCE PROVIDER ID \ --workforce-pool = WORKFORCE POOL ID \ --location = "global" \ --display-name = WORKFORCE PROVIDER DISPLAY NAME \ --description = WORKFORCE PROVIDER DESCRIPTION \ --idp-metadata-path = PATH TO METADATA XML \ --attribute-mapping = "google.subject=assertion.subject,attribute.first name=assertion.attributes.first name[0],attribute.last name=assertion.attributes.last name[0],attribute.user email=assertion.attributes.user email[0],google.groups=assertion.attributes.groups" Control user access There are multiple ways to manage user access to different aspects of the platform: Permissions groups : Set user access levels by assigning them to specific permission groups.
- This scenario is illustrated in the following table: Persona Permission Group SOC Role Environment Security analysts Analyst Tier 1 London SOC engineers Analyst Tier 1 Manchester NOC engineers Basic Tier 2 London For this example, assume that you already set up the necessary permission groups, SOC roles, and environments in Google SecOps.

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For more information, refer to Migrate endpoints to Chronicle API Migrate Remote Agents You can migrate the Remote Agents to Google Cloud by doing the following: Create a Service Account instead of an API key for the remote agent.
- After the migration of the permissions, the following happens SOAR Settings > Organization > Permissions page is still available until September 30, 2026 (for backwards compatibility with Appkeys).
- For SOAR standalone customers, see Collect SOAR logs Further changes post migration: License type The license type is now determined by the user's assigned permissions in IAM.
- Make sure you have added the Admin IdP group with Admin permissions for permission groups, SOC Roles and select All Environments.

