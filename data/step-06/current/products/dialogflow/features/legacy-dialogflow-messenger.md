---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.393Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Legacy Dialogflow Messenger"
feature_slug: "legacy-dialogflow-messenger"
latest_feature_date: "2023-08-31"
deprecation_date: "2023-08-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion"
keywords:
  - "legacy"
  - "dialogflow"
  - "messenger"
  - "older"
  - "version"
  - "cx"
  - "integration"
  - "deprecated"
---

# Legacy Dialogflow Messenger

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Legacy Dialogflow Messenger is the older version of the Dialogflow CX Messenger integration; deprecated on 2023-08-31.

## Extended Definition

Legacy Dialogflow Messenger is the older version of the Dialogflow CX Messenger integration; deprecated on 2023-08-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder)
- [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion)

## Supporting Pages

### "Class Agent.Builder (4.94.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.Builder)
- Source ID: `site-java-reference`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Determines how intents are detected from user queries. .google.cloud.dialogflow.v2.Agent.MatchMode match mode = 9 [deprecated = true, (.google.api.field behavior) = OPTIONAL]; Returns Type Description Agent.MatchMode The matchMode. getMatchModeValue() (deprecated) public int getMatchModeValue () Deprecated. google.cloud.dialogflow.v2.Agent.match mode is deprecated.
- However, bots connectors and webhook calls will follow the specified API version. .google.cloud.dialogflow.v2.Agent.ApiVersion api version = 14 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description int The enum numeric value on the wire for apiVersion. getAvatarUri() public String getAvatarUri () Optional.
- However, bots connectors and webhook calls will follow the specified API version. .google.cloud.dialogflow.v2.Agent.ApiVersion api version = 14 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description Agent.ApiVersion The apiVersion. getApiVersionValue() public int getApiVersionValue () Optional.
- Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration. string avatar uri = 7 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description ByteString The bytes for avatarUri. getClassificationThreshold() public float getClassificationThreshold () Optional.

### Host your agent \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host](https://docs.cloud.google.com/dialogflow/cx/docs/tutorials/deploy/host)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To launch your browser and view your web service, you can open the target URL from the previous step, or run the following command: gcloud app browse Setup Dialogflow Messenger Note: Make sure billing is enabled on your project before testing the integration.
- The Dialogflow Messenger integration is used for an agent user interface.
- To set up unauthenticated access to your Dialogflow CX Messenger agent: Go to the Dialogflow CX console .
- Click Connect on Dialogflow CX Messenger .

### "Enum Agent.ApiVersion (4.94.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Agent.ApiVersion)
- Source ID: `site-java-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Protobuf enum google.cloud.dialogflow.v2.Agent.ApiVersion Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description API VERSION UNSPECIFIED Not specified.
- API VERSION V2 = 2; UNRECOGNIZED Static Methods Name Description forNumber(int value) getDescriptor() internalGetValueMap() valueOf(Descriptors.EnumValueDescriptor desc) valueOf(int value) Deprecated.
- API VERSION UNSPECIFIED = 0; API VERSION V1 Legacy V1 API.
- API VERSION V1 = 1; API VERSION V1 VALUE Legacy V1 API.

