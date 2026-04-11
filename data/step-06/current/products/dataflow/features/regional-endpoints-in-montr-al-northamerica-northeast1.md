---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.844Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional endpoints in Montréal (northamerica-northeast1)"
feature_slug: "regional-endpoints-in-montr-al-northamerica-northeast1"
latest_feature_date: "2020-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder"
keywords:
  - "regional"
  - "endpoints"
  - "in"
  - "montr"
  - "al"
  - "northamerica"
  - "northeast1"
  - "this"
---

# Regional endpoints in Montréal (northamerica-northeast1)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature provides Dataflow regional endpoints in Montréal northamerica-northeast1.

## Extended Definition

This feature provides Dataflow regional endpoints in Montréal northamerica-northeast1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- July 27, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: northamerica-northeast1 (Montréal) asia-southeast1 (Singapore) australia-southeast1 (Sydney) June 08, 2020 Feature Dataflow is now able to use workers in zones in the asia-southeast2 region (Jakarta).
- August 03, 2021 Feature Dataflow is now able to use workers, Dataflow Shuffle, Streaming Engine, FlexRS, and regional endpoints in zones in Toronto (northamerica-northeast2).
- February 21, 2018 Feature Cloud Dataflow now supports the following regional endpoints in GA : us-central1 , us-east1 , europe-west1 , asia-east1 , and asia-northeast1 .
- January 10, 2018 Feature Cloud Dataflow is now able to use workers in zones in the northamerica-northeast1 region (Montréal).

### "Enum AutoscalingEvent.AutoscalingEventType (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use #forNumber(int) instead. valueOf(String name) values() Methods Name Description getDescriptorForType() getNumber() getValueDescriptor() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Protobuf enum google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description ACTUATION FAILURE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.
- 0.92.0 (latest) 0.91.0 0.89.0 0.87.0 0.86.0 0.85.0 0.84.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.74.0 0.72.0 0.71.0 0.68.0 0.67.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.5.0 public enum AutoscalingEvent .
- ACTUATION FAILURE = 3; ACTUATION FAILURE VALUE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.

### "Class AutoscalingSettings.Builder (0.92.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Builder clearMaxNumWorkers () The maximum number of workers to cap scaling at. int32 max num workers = 2; Returns Type Description AutoscalingSettings.Builder This builder for chaining. getAlgorithm() public AutoscalingAlgorithm getAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingAlgorithm The algorithm. getAlgorithmValue() public int getAlgorithmValue () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description int The enum numeric value on the wire for algorithm. getDefaultInstanceForType() public AutoscalingSettings getDefaultInstanceForType () Returns Type Description AutoscalingSettings getDescriptorForType() public Descriptors .
- Builder clearAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingSettings.Builder This builder for chaining. clearMaxNumWorkers() public AutoscalingSettings .
- Returns Type Description AutoscalingSettings.Builder This builder for chaining. setAlgorithmValue(int value) public AutoscalingSettings .
- Returns Type Description AutoscalingSettings.Builder This builder for chaining. setMaxNumWorkers(int value) public AutoscalingSettings .

### "Interface AutoscalingSettingsOrBuilder (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder)
- Source ID: `site-java-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 0.92.0 (latest) 0.91.0 0.89.0 0.87.0 0.86.0 0.85.0 0.84.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.74.0 0.72.0 0.71.0 0.68.0 0.67.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.5.0 public interface AutoscalingSettingsOrBuilder extends MessageOrBuilder Implements MessageOrBuilder Methods getAlgorithm() public abstract AutoscalingAlgorithm getAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingAlgorithm The algorithm. getAlgorithmValue() public abstract int getAlgorithmValue () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description int The enum numeric value on the wire for algorithm. getMaxNumWorkers() public abstract int getMaxNumWorkers () The maximum number of workers to cap scaling at. int32 max num workers = 2; Returns Type Description int The maxNumWorkers.
- Home Documentation Developer tools Java Client libraries Send feedback Interface AutoscalingSettingsOrBuilder (0.92.0) Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

