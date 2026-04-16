---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.721Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Legacy Dialogflow Messenger"
feature_slug: "legacy-dialogflow-messenger"
latest_feature_date: "2023-08-31"
deprecation_date: "2023-08-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging"
keywords:
  - "older"
  - "legacy"
  - "messenger"
  - "integration"
  - "deprecated"
  - "version"
---

# Legacy Dialogflow Messenger

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Legacy Dialogflow Messenger is the older version of the Dialogflow CX Messenger integration; deprecated on 2023-08-31.

## Extended Definition

Legacy Dialogflow Messenger is the older version of the Dialogflow CX Messenger integration; deprecated on 2023-08-31.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging](https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging)

## Supporting Pages

### "Enum Agent.ApiVersion (4.94.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion)
- Source ID: `site-java-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- API VERSION V2 = 2; UNRECOGNIZED Static Methods Name Description forNumber(int value) getDescriptor() internalGetValueMap() valueOf(Descriptors.EnumValueDescriptor desc) valueOf(int value) Deprecated.
- API VERSION UNSPECIFIED = 0; API VERSION V1 Legacy V1 API.
- API VERSION V1 = 1; API VERSION V1 VALUE Legacy V1 API.
- Protobuf enum google.cloud.dialogflow.v2.Agent.ApiVersion Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description API VERSION UNSPECIFIED Not specified.

### "Class Agent.Builder (4.94.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder)
- Source ID: `site-java-reference`
- Final score: 72
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Determines how intents are detected from user queries. .google.cloud.dialogflow.v2.Agent.MatchMode match mode = 9 [deprecated = true, (.google.api.field behavior) = OPTIONAL]; Returns Type Description Agent.MatchMode The matchMode. getMatchModeValue() (deprecated) public int getMatchModeValue () Deprecated. google.cloud.dialogflow.v2.Agent.match mode is deprecated.
- However, bots connectors and webhook calls will follow the specified API version. .google.cloud.dialogflow.v2.Agent.ApiVersion api version = 14 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description int The enum numeric value on the wire for apiVersion. getAvatarUri() public String getAvatarUri () Optional.
- However, bots connectors and webhook calls will follow the specified API version. .google.cloud.dialogflow.v2.Agent.ApiVersion api version = 14 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description Agent.ApiVersion The apiVersion. getApiVersionValue() public int getApiVersionValue () Optional.
- Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration. string avatar uri = 7 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description ByteString The bytes for avatarUri. getClassificationThreshold() public float getClassificationThreshold () Optional.

### Dialogflow CX audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging](https://docs.cloud.google.com/dialogflow/cx/docs/concept/audit-logging)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in Dialogflow CX: Audit logs category Dialogflow CX operations Admin activity logs CreateAgent UpdateAgent DeleteAgent ImportAgent RestoreAgent ValidateAgent CreateSecuritySettings DeleteSecuritySettings UpdateSecuritySettings Data Access logs (ADMIN READ) ListAgents GetAgent ListSecuritySettings GetSecuritySettings Data Access logs (DATA READ) MatchIntent FulfillIntent ListSessionEntityTypes GetSessionEntityType ListEntityTypes GetEntityType ListEnvironments GetEnvironment LookupEnvironmentHistory ListExperiments GetExperiment ListFlows GetFlow ListIntents GetIntent ListPages GetPage ListTransitionRouteGroups GetTransitionRouteGroup ListWebhooks GetWebhook ListVersions GetVersion Data Access logs (DATA WRITE) DetectIntent StreamingDetectIntent CreateSessionEntityType DeleteSessionEntityType UpdateSessionEntityType CreateEntityType DeleteEntityType UpdateEntityType CreateEnvironment DeleteEnvironment UpdateEnvironment CreateExperiment DeleteExperiment UpdateExperiment CreateFlow DeleteFlow UpdateFlow CreateIntent DeleteIntent UpdateIntent CreatePage DeletePage UpdatePage CreateTransitionRouteGroup DeleteTransitionRouteGroup UpdateTransitionRouteGroup CreateWebhook DeleteWebhook UpdateWebhook CreateVersion DeleteVersion UpdateVersion LoadVersion Audit log format Audit log entries include the following objects: The log entry itself, which is an object of type LogEntry .
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Console In the Google Cloud console, you can use the Logs Explorer to retrieve your audit log entries for your Google Cloud project, folder, or organization: Note: You can't view audit logs for Cloud Billing accounts in the Google Cloud console.

