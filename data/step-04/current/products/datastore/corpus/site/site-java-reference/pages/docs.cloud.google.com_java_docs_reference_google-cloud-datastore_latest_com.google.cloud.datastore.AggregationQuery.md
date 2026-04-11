---
title: "Class AggregationQuery (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.AggregationQuery
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.AggregationQuery
  title: "Class AggregationQuery (2.37.0) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Class AggregationQuery (2.37.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.37.0 (latest)
2.36.0
2.34.0
2.33.3
2.32.3
2.31.4
2.30.0
2.29.1
2.28.2
2.27.1
2.26.4
2.25.2
2.24.3
2.23.0
2.22.0
2.21.3
2.20.2
2.19.2
2.18.5
2.17.6
public class AggregationQuery extends Query<AggregationResults>
An implementation of a Google Cloud Datastore Query that returns AggregationResults , It
can be constructed by providing a nested query ( StructuredQuery or GqlQuery ) to
run the aggregations on and a set of Aggregation .
StructuredQuery example:
EntityQuery selectAllQuery = Query . newEntityQueryBuilder ()
. setKind ( "Task" )
. build ();
AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder ()
. addAggregation ( count (). as ( "total_count" ))
. over ( selectAllQuery )
. build ();
AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery );
for ( AggregationResult aggregationResult : aggregationResults ) {
System . out . println ( aggregationResult . get ( "total_count" ));
}
GqlQuery example:
GqlQuery selectAllGqlQuery = Query . newGqlQueryBuilder (
"AGGREGATE COUNT(*) AS total_count, COUNT_UP_TO(100) AS count_upto_100 OVER(SELECT * FROM Task)"
)
. setAllowLiteral ( true )
. build ();
AggregationQuery aggregationQuery = Query . newAggregationQueryBuilder ()
. over ( selectAllGqlQuery )
. build ();
AggregationResults aggregationResults = datastore . runAggregation ( aggregationQuery );
for ( AggregationResult aggregationResult : aggregationResults ) {
System . out . println ( aggregationResult . get ( "total_count" ));
System . out . println ( aggregationResult . get ( "count_upto_100" ));
}
See Also: Datastore queries
Inheritance
java.lang.Object >
Query >
AggregationQuery
Inherited Members
Query.<V>newGqlQueryBuilder(Query.ResultType<V>,String)
Query.getNamespace()
Query.newAggregationQueryBuilder()
Query.newEntityQueryBuilder()
Query.newGqlQueryBuilder(String)
Query.newKeyQueryBuilder()
Query.newProjectionEntityQueryBuilder()
Object.clone()
Object.equals(Object)
Object.finalize()
Object.getClass()
Object.hashCode()
Object.notify()
Object.notifyAll()
Object.toString()
Object.wait()
Object.wait(long)
Object.wait(long,int)
Methods
getAggregations()
public Set<Aggregation> getAggregations ()
Returns the Aggregation (s) for this Query.
Returns
Type
Description
Set < Aggregation >
getMode()
public AggregationQuery . Mode getMode ()
Returns the Mode for this query.
Returns
Type
Description
AggregationQuery.Mode
getNestedGqlQuery()
public GqlQuery < ? > getNestedGqlQuery ()
Returns the underlying for this Query . Returns null if created with StructuredQuery
Returns
Type
Description
GqlQuery < ? >
getNestedStructuredQuery()
public StructuredQuery < ? > getNestedStructuredQuery ()
Returns the underlying for this Query . Returns null if created with
GqlQuery
Returns
Type
Description
StructuredQuery < ? >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
