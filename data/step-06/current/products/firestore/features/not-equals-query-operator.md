---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.899Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "not-equals (!=) query operator"
feature_slug: "not-equals-query-operator"
latest_feature_date: "2020-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuery"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance"
keywords:
  - "not"
  - "equals"
  - "query"
  - "operator"
  - "firestore"
  - "supports"
---

# not-equals (!=) query operator

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports the not-equals (!=) query operator.

## Extended Definition

Firestore supports the not-equals (!=) query operator.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuery](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuery)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)

## Supporting Pages

### "Optimize query performance \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)
- Source ID: `site-docs-reference-required-4`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use forceIndex with Query Explain You can use Query Explain , especially with the analyze option, to observe the effects of forceIndex : Verify that Firestore in Native Mode used the specified index in forceIndex by checking the leaf nodes of the execution tree for the index ID.
- Optimize query performance Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can use the forceIndex option on any input stage in Pipeline operations to override Firestore in Native Mode's default query plan and specify an index to use, or to force a table scan.
- Best practices for forceIndex While forceIndex provides more control over query execution, Firestore in Native Mode's query optimizer is generally efficient for most use cases.

### "Class AggregateField (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField)
- Source ID: `site-java-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 3.38.0 (latest) 3.37.0 3.36.0 3.35.1 3.33.4 3.32.2 3.31.9 3.30.11 3.28.0 3.27.2 3.26.5 3.25.1 3.24.3 3.22.0 3.21.4 3.20.0 3.17.0 3.16.3 3.15.7 3.14.4 3.13.2 3.12.1 3.11.0 3.10.0 3.9.6 3.8.2 3.7.10 3.6.0 3.5.0 3.4.2 3.3.0 3.2.0 3.1.0 3.0.21 public abstract class AggregateField Represents an aggregation that can be performed by Firestore.
- Inheritance Object > AggregateField Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods average(FieldPath fieldPath) public static AggregateField .
- Returns Type Description AggregateField.AverageAggregateField The AverageAggregateField object that can be used to compute the average of a specified field over a range of documents in the result set of a query. average(String field) public static AggregateField .
- Returns Type Description AggregateField.AverageAggregateField The AverageAggregateField object that can be used to compute the average of a specified field over a range of documents in the result set of a query. count() public static AggregateField .

### "Class AggregateQuery (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuery](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuery)
- Source ID: `site-java-reference`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inheritance Object > AggregateQuery Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods fromProto(Firestore firestore, RunAggregationQueryRequest proto) public static AggregateQuery fromProto ( Firestore firestore , RunAggregationQueryRequest proto ) Returns an AggregateQuery instance that can be used to execute the provided RunAggregationQueryRequest .
- Overrides Object.equals(Object) explain(ExplainOptions options) public ApiFuture<ExplainResults<AggregateQuerySnapshot> > explain ( ExplainOptions options ) Plans and optionally executes this query.
- Parameters Name Description firestore Firestore a Firestore instance to apply the query to. proto RunAggregationQueryRequest the serialized RunAggregationQueryRequest.
- Only RunAggregationQueryRequests that pertain to the same project as the Firestore instance can be deserialized.

