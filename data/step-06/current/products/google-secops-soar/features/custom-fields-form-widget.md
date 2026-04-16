---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.808Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Custom Fields Form widget"
feature_slug: "custom-fields-form-widget"
latest_feature_date: "2025-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
keywords:
  - "custom"
  - "fields"
  - "form"
  - "widget"
  - "the"
  - "is"
  - "now"
  - "supported"
---

# Custom Fields Form widget

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

The Custom Fields Form widget is now supported in Playbook View.

## Extended Definition

The Custom Fields Form widget is now supported in Playbook View.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Ways to set up feeds There are two ways for Google SecOps customers to set up this feed in the platform.
- Note: This step is not relevant for customers who use the Google SecOps SIEM standalone platform.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Specify the endpoint URL In Amazon Data Firehose, specify the HTTPS endpoint and access key, as follows: Append the API key to the feed endpoint URL and specify this URL as the HTTP endpoint URL in the following format: ENDPOINT URL ?key= API KEY Replace the following: ENDPOINT URL : the feed endpoint URL.

### "Explore the alert overview tab \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-alerts/whats-on-the-alert-overview-tab)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alert Overview widgets The Alert Overview tab displays important information about the alert using specific widgets.
- Custom fields form : Enter the relevant information in the custom fields defined here.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Explore the alert overview tab Supported in: Google secops SOAR This document serves as a reference for the Alert Overview tab, the central interface for triaging alerts within a case.

### "Map users in the Google SecOps platform \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/user-secops/map-users-in-the-secops-platform)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map users in the Google SecOps platform Supported in: Google secops Note: For customers who've already migrated to Google Cloud, the Permission Groups column doesn't appear on this page.
- This approach is beneficial for customers who want to onboard and provision user groups based on specific customizations, rather than adhering to the standardization of the Google SecOps SOAR platform.
- The following example is the workforce pool creation command for the app configuration described in Configure Workforce Identity Federation : gcloud iam workforce-pools providers create-saml WORKFORCE PROVIDER ID \ --workforce-pool = WORKFORCE POOL ID \ --location = "global" \ --display-name = WORKFORCE PROVIDER DISPLAY NAME \ --description = WORKFORCE PROVIDER DESCRIPTION \ --idp-metadata-path = PATH TO METADATA XML \ --attribute-mapping = "google.subject=assertion.subject,attribute.first name=assertion.attributes.first name[0],attribute.last name=assertion.attributes.last name[0],attribute.user email=assertion.attributes.user email[0],google.groups=assertion.attributes.groups" Control user access There are multiple ways to manage user access to different aspects of the platform: Permissions groups : Set user access levels by assigning them to specific permission groups.
- Enter the following details in the dialog: IdP Group: Security analysts Permission Group: Analyst SOC Role: Tier 1 Environment: leave blank Enter the following details in the next dialog: IdP Group: SOC engineers Permission Group: Analyst SOC Role: Tier 1 Environment: leave blank Enter the following details in the next dialog: IdP Group: NOC engineers Permission Group: Basic SOC Role: Tier 2 Environment: leave blank Enter the following details in the next dialog: IdP Group: London Permission Group: leave blank SOC Role: leave blank Environment: London Enter the following details in the next dialog: IdP Group: Manchester Permission Group: leave blank SOC Role: leave blank Environment: Manchester For customers using the Case Federation feature, see Set up federated case access for Google SecOps .

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-root-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.
- In the list of detections, check that the following rules were triggered: tst azure activity tst azure defender for cloud alerts Execute a GET API request in Microsoft Graph Explorer to trigger the test rules Perform the following steps to verify that generating sample security alerts in Azure triggers the test rules.

