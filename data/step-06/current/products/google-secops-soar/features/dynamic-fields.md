---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.807Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Dynamic Fields"
feature_slug: "dynamic-fields"
latest_feature_date: "2025-09-07"
deprecation_date: "2025-09-07"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab"
keywords:
  - "dynamic"
  - "fields"
  - "is"
  - "replaced"
  - "by"
  - "custom"
  - "in"
  - "the"
---

# Dynamic Fields

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Dynamic Fields is replaced by custom fields in the Close Case dialog; deprecated on 2025-09-07.

## Extended Definition

Dynamic Fields is replaced by custom fields in the Close Case dialog; deprecated on 2025-09-07.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are building any custom logic for Dynamic List , make sure that it's provided in the description of the connector.
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.
- In general, the structure of the name should be like this: {integration display name} - {data that is being ingested} Connector For example: Crowdstrike - Pull Alerts Connector Description The Description of the connector should highlight to the user what will be ingested by the connector; for example, Pull alerts from Crowdstrike .
- All submitted integrations undergo a vetting process by the official Google SecOps team, with a focus on the highlighted requirements within this document.

### "Map users in the Google SecOps platform \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- Source ID: `site-iam-reference`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example is the workforce pool creation command for the app configuration described in Configure Workforce Identity Federation : gcloud iam workforce-pools providers create-saml WORKFORCE PROVIDER ID \ --workforce-pool = WORKFORCE POOL ID \ --location = "global" \ --display-name = WORKFORCE PROVIDER DISPLAY NAME \ --description = WORKFORCE PROVIDER DESCRIPTION \ --idp-metadata-path = PATH TO METADATA XML \ --attribute-mapping = "google.subject=assertion.subject,attribute.first name=assertion.attributes.first name[0],attribute.last name=assertion.attributes.last name[0],attribute.user email=assertion.attributes.user email[0],google.groups=assertion.attributes.groups" Control user access There are multiple ways to manage user access to different aspects of the platform: Permissions groups : Set user access levels by assigning them to specific permission groups.
- Enter the following details in the dialog: IdP Group: Security analysts Permission Group: Analyst SOC Role: Tier 1 Environment: leave blank Enter the following details in the next dialog: IdP Group: SOC engineers Permission Group: Analyst SOC Role: Tier 1 Environment: leave blank Enter the following details in the next dialog: IdP Group: NOC engineers Permission Group: Basic SOC Role: Tier 2 Environment: leave blank Enter the following details in the next dialog: IdP Group: London Permission Group: leave blank SOC Role: leave blank Environment: London Enter the following details in the next dialog: IdP Group: Manchester Permission Group: leave blank SOC Role: leave blank Environment: Manchester For customers using the Case Federation feature, see Set up federated case access for Google SecOps .
- This approach is beneficial for customers who want to onboard and provision user groups based on specific customizations, rather than adhering to the standardization of the Google SecOps SOAR platform.
- Use Case: Assign unique permission fields to each IdP group The following example illustrates how to use this feature to help onboard and provision users according to your company's needs.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- Enable authentication by specifying the API key and secret key as part of the custom header in the following format: X-goog-api-key = API KEY X-Webhook-Access-Key = SECRET We recommend that you specify the API key as a header instead of specifying it in the URL.
- If your webhook client doesn't support custom headers, you can specify the API key and secret key by using query parameters in the following format: ENDPOINT URL ?key= API KEY &secret= SECRET Replace the following: ENDPOINT URL : the feed endpoint URL.
- For Azure Storage To update the IP access restrictions in your Azure Storage blobstore: If you restrict access to your Azure resources using an Azure Storage firewall, you must add the IP ranges used by STS workers to your list of allowed IPs.

### "Explore the alert overview tab \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The display you see in the Alert Overview tab depends on a variety of factors: If no playbook is attached to the alert, the default display is defined by the administrator in SOAR Settings .
- For composite alerts (generated by chained rules ), the widget displays the contributing detections and alerts, along with their detailed Unified Data Model (UDM) events.
- If a playbook is present, but the customized views don't include your role, your default display appears.
- Custom fields form : Enter the relevant information in the custom fields defined here.

