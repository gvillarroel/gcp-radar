---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.286Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Entity Types pagination settings"
feature_slug: "entity-types-pagination-settings"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportEntityTypesResponse"
keywords:
  - "entity"
  - "types"
  - "pagination"
  - "settings"
  - "console"
  - "now"
  - "lets"
  - "you"
---

# Entity Types pagination settings

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The Entity Types console now lets you set page size for entity entries and excluded phrases.

## Extended Definition

The Entity Types console now lets you set page size for entity entries and excluded phrases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging](https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportEntityTypesResponse](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportEntityTypesResponse)

## Supporting Pages

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Conversational Agents console agent settings To access agent settings: Console Open the Conversational Agents console .
- To edit other flow-specific settings, navigate to the flow in the console and edit the settings there.
- Vertex AI Agent Builder console settings This section describes the settings available for agent apps.
- Dialogflow CX console agent settings To access agent settings: Console Open the console.

### ExportEntityTypesResponse \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportEntityTypesResponse](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rest/v3/ExportEntityTypesResponse)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { // Union field exported entity types can be only one of the following: "entityTypesUri" : string , "entityTypesContent" : { object ( InlineDestination ) } // End of list of possible types for union field exported entity types . } Fields Union field exported entity types .
- Exported entity types can be either in cloud storage or local download. exported entity types can be only one of the following: entityTypesUri string The URI to a file containing the exported entity types.
- Home Documentation AI and ML Dialogflow Dialogflow CX Reference Send feedback ExportEntityTypesResponse Stay organized with collections Save and categorize content based on your preferences.
- This field is populated only if entityTypesUri is specified in ExportEntityTypesRequest . entityTypesContent object ( InlineDestination ) Uncompressed byte content for entity types.

### Dialogflow CX audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging](https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in Dialogflow CX: Audit logs category Dialogflow CX operations Admin activity logs CreateAgent UpdateAgent DeleteAgent ImportAgent RestoreAgent ValidateAgent CreateSecuritySettings DeleteSecuritySettings UpdateSecuritySettings Data Access logs (ADMIN READ) ListAgents GetAgent ListSecuritySettings GetSecuritySettings Data Access logs (DATA READ) MatchIntent FulfillIntent ListSessionEntityTypes GetSessionEntityType ListEntityTypes GetEntityType ListEnvironments GetEnvironment LookupEnvironmentHistory ListExperiments GetExperiment ListFlows GetFlow ListIntents GetIntent ListPages GetPage ListTransitionRouteGroups GetTransitionRouteGroup ListWebhooks GetWebhook ListVersions GetVersion Data Access logs (DATA WRITE) DetectIntent StreamingDetectIntent CreateSessionEntityType DeleteSessionEntityType UpdateSessionEntityType CreateEntityType DeleteEntityType UpdateEntityType CreateEnvironment DeleteEnvironment UpdateEnvironment CreateExperiment DeleteExperiment UpdateExperiment CreateFlow DeleteFlow UpdateFlow CreateIntent DeleteIntent UpdateIntent CreatePage DeletePage UpdatePage CreateTransitionRouteGroup DeleteTransitionRouteGroup UpdateTransitionRouteGroup CreateWebhook DeleteWebhook UpdateWebhook CreateVersion DeleteVersion UpdateVersion LoadVersion Audit log format Audit log entries include the following objects: The log entry itself, which is an object of type LogEntry .
- Log name Cloud Audit Logs log names include resource identifiers indicating the Google Cloud project or other Google Cloud entity that owns the audit logs, and whether the log contains Admin Activity, Data Access, Policy Denied, or System Event audit logging data.
- Console In the Google Cloud console, you can use the Logs Explorer to retrieve your audit log entries for your Google Cloud project, folder, or organization: Note: You can't view audit logs for Cloud Billing accounts in the Google Cloud console.
- Available audit logs The following types of audit logs are available for Dialogflow CX: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.

