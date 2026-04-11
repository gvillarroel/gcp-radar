---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.756Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery BI Engine SQL interface"
feature_slug: "bigquery-bi-engine-sql-interface"
latest_feature_date: "2021-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineReason"
keywords:
  - "in-memory BI Engine"
  - "BI Engine query acceleration"
  - "BIE"
  - "BI Engine SQL interface"
  - "BI Engine cache"
  - "BigQuery BI Engine"
  - "BI Engine"
---

# BigQuery BI Engine SQL interface

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery BI Engine provides a SQL interface for querying and interacting with in-memory acceleration capabilities.

## Extended Definition

BigQuery BI Engine provides a SQL interface for querying and interacting with in-memory acceleration capabilities.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineReason](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineReason)

## Supporting Pages

### "Class BiEngineStats (2.62.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats)
- Source ID: `site-java-reference`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: This Java client class page shows BI Engine acceleration status metadata for queries, but it does not document any SQL interface behavior.

Evidence snippets:
- 2.62.0 (latest) 2.61.0 2.60.0 2.59.0 2.58.0 2.57.2 2.56.0 2.55.3 2.54.2 2.53.0 2.52.0 2.51.0 2.50.1 2.49.0 2.48.1 2.47.0 2.46.0 2.45.0 2.44.0 2.43.3 2.42.3 2.41.0 2.40.3 2.39.1 2.38.2 2.37.2 2.36.0 2.35.0 2.34.2 2.33.2 public abstract class BiEngineStats implements Serializable BIEngineStatistics contains query statistics specific to the use of BI Engine.
- Returns Type Description String value or null for none getBiEngineReasons() public abstract List<BiEngineReason> getBiEngineReasons () In case of DISABLED or PARTIAL bi engine mode, these contain the explanatory reasons as to why BI Engine could not accelerate.
- Builder newBuilder () Returns Type Description BiEngineStats.Builder Constructors BiEngineStats() public BiEngineStats () Methods getBiEngineMode() public abstract String getBiEngineMode () Specifies which mode of BI Engine acceleration was performed (if any).
- Inheritance java.lang.Object > BiEngineStats Implements Serializable Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods newBuilder() public static BiEngineStats .

### "Class BiEngineStats.Builder (2.62.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineStats.Builder)
- Source ID: `site-java-reference`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: The page only defines a Java client builder for BI Engine query statistics and does not describe the SQL interface itself, but it does reference BI Engine acceleration behavior.

Evidence snippets:
- Builder setBiEngineReasons ( List<BiEngineReason> biEngineReasons ) In case of DISABLED or PARTIAL bi engine mode, these contain the explanatory reasons as to why BI Engine could not accelerate.
- Builder setBiEngineMode ( String biEngineMode ) Specifies which mode of BI Engine acceleration was performed (if any).
- Builder Inheritance java.lang.Object > BiEngineStats.Builder Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Constructors Builder() public Builder () Methods build() public abstract BiEngineStats build () Creates a @code BiEngineStats} object.
- Parameter Name Description biEngineReasons List < BiEngineReason > biEngineReasons or null for none Returns Type Description BiEngineStats.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class BiEngineReason (2.62.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineReason](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BiEngineReason)
- Source ID: `site-java-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Builder newBuilder () Returns Type Description BiEngineReason.Builder Constructors BiEngineReason() public BiEngineReason () Methods getCode() public abstract String getCode () High-level BI Engine reason for partial or disabled acceleration.
- 2.62.0 (latest) 2.61.0 2.60.0 2.59.0 2.58.0 2.57.2 2.56.0 2.55.3 2.54.2 2.53.0 2.52.0 2.51.0 2.50.1 2.49.0 2.48.1 2.47.0 2.46.0 2.45.0 2.44.0 2.43.3 2.42.3 2.41.0 2.40.3 2.39.1 2.38.2 2.37.2 2.36.0 2.35.0 2.34.2 2.33.2 public abstract class BiEngineReason implements Serializable Inheritance java.lang.Object > BiEngineReason Implements Serializable Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods newBuilder() public static BiEngineReason .
- Builder toBuilder () Returns Type Description BiEngineReason.Builder Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Developer tools Java Client libraries Send feedback Class BiEngineReason (2.62.0) Stay organized with collections Save and categorize content based on your preferences.

