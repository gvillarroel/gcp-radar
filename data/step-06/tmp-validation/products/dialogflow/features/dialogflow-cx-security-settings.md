---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.777Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX security settings"
feature_slug: "dialogflow-cx-security-settings"
latest_feature_date: "2020-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient"
keywords:
  - "retention"
  - "redaction"
  - "security"
  - "control"
  - "settings"
---

# Dialogflow CX security settings

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX security settings control data redaction and data retention.

## Extended Definition

Dialogflow CX security settings control data redaction and data retention.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Security See Security settings and Access control .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging , by default the session parameter is true .
- Enable consent-based end-user input redaction If this setting is enabled, it lets you use a special session parameter to control whether end-user input and parameters are redacted from conversation history and Cloud logging .
- When enabled, you can provide the following options: Prompt security settings : You can select either Default for default security settings or Customize to clarify what user queries should be considered safe or unsafe.

### Compliance and security controls \_|\_ Dialogflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls)
- Source ID: `site-docs-root-2`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Certifications Dialogflow CX is compliant with the following: Compliance Certification Dialogflow CX (including generative features ) Dialogflow ES HIPAA ✔ ✔ ISO 27001 , ISO 27017 , ISO 27018 , and ISO 27701 ✔ ✔ SOC 1 , SOC 2 , SOC 3 ✔ ✔ Security controls Dialogflow CX provides the following security controls: Security controls compliance Dialogflow CX (including generative features ) Dialogflow ES Data Residency Regionalization and location settings Regionalization and data residency Customer-managed encryption keys (CMEK) Customer-managed encryption keys (CMEK) - VPC Service Controls (VPC-SC) Using VPC Service Controls Using VPC Service Controls Access Transparency Access Transparency - Government authorizations Dialogflow CX has received the following authorizations: Authorization Dialogflow CX (including generative features ) Dialogflow ES FedRAMP High Authorization - Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Dialogflow Resources Send feedback Compliance and security controls Stay organized with collections Save and categorize content based on your preferences.
- This page provides information on compliance certifications and security controls that are supported by Dialogflow CX.
- Any certifications, security controls, and government authorizations cover Dialogflow in its entirety.

### "Class ConversationProfilesAsyncClient (2.47.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_profiles.ConversationProfilesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.dialogflow v2.types.ConversationProfile Defines the services to connect to incoming Dialogflow conversations. cx security settings path cx security settings path ( project : str , location : str , security settings : str ) - > str Returns a fully-qualified cx security settings string. delete conversation profile delete conversation profile ( request : typing .
- Dict [ str , str ] Parses a conversation profile path into its component segments. parse cx security settings path parse cx security settings path ( path : str ) - > typing .
- Dict [ str , str ] Parses a cx security settings path into its component segments. parse document path parse document path ( path : str ) - > typing .
- The mask to control which fields to update.

