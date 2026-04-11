---
title: "Class AggregateQuery (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuery
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuery
  title: "Class AggregateQuery (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class AggregateQuery (3.38.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.38.0 (latest)
3.37.0
3.36.0
3.35.1
3.33.4
3.32.2
3.31.9
3.30.11
3.28.0
3.27.2
3.26.5
3.25.1
3.24.3
3.22.0
3.21.4
3.20.0
3.17.0
3.16.3
3.15.7
3.14.4
3.13.2
3.12.1
3.11.0
3.10.0
3.9.6
3.8.2
3.7.10
3.6.0
3.5.0
3.4.2
3.3.0
3.2.0
3.1.0
3.0.21
public class AggregateQuery
A query that calculates aggregations over an underlying query.
Inheritance
Object >
AggregateQuery
Inherited Members
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
Static Methods
fromProto(Firestore firestore, RunAggregationQueryRequest proto)
public static AggregateQuery fromProto ( Firestore firestore , RunAggregationQueryRequest proto )
Returns an AggregateQuery instance that can be used to execute the provided RunAggregationQueryRequest .
Only RunAggregationQueryRequests that pertain to the same project as the Firestore instance
can be deserialized.
Parameters
Name
Description
firestore
Firestore a Firestore instance to apply the query to.
proto
RunAggregationQueryRequest the serialized RunAggregationQueryRequest.
Returns
Type
Description
AggregateQuery
a AggregateQuery instance that can be used to execute the RunAggregationQueryRequest.
Methods
equals(Object object)
public boolean equals ( Object object )
Compares this object with the given object for equality.
This object is considered "equal" to the other object if and only if all of the following
conditions are satisfied:
object is a non-null instance of AggregateQuery .
object performs the same aggregations as this AggregateQuery .
The underlying Query of object compares equal to that of this object.
Parameter
Name
Description
object
Object The object to compare to this object for equality.
Returns
Type
Description
boolean
true if this object is "equal" to the given object, as defined above, or
false otherwise.
Overrides
Object.equals(Object)
explain(ExplainOptions options)
public ApiFuture<ExplainResults<AggregateQuerySnapshot> > explain ( ExplainOptions options )
Plans and optionally executes this query. Returns an ApiFuture that will be resolved with the
planner information, statistics from the query execution (if any), and the query results (if
any).
Parameter
Name
Description
options
ExplainOptions
Returns
Type
Description
ApiFuture < ExplainResults < AggregateQuerySnapshot >>
An ApiFuture that will be resolved with the planner information, statistics from the
query execution (if any), and the query results (if any).
get()
public ApiFuture<AggregateQuerySnapshot> get ()
Executes this query.
Returns
Type
Description
ApiFuture < AggregateQuerySnapshot >
An ApiFuture that will be resolved with the results of the query.
getQuery()
public Query getQuery ()
Returns the query whose aggregations will be calculated by this object.
Returns
Type
Description
Query
hashCode()
public int hashCode ()
Calculates and returns the hash code for this object.
Returns
Type
Description
int
the hash code for this object.
Overrides
Object.hashCode()
toProto()
public RunAggregationQueryRequest toProto ()
Returns the RunAggregationQueryRequest that this AggregateQuery instance represents.
The request contain the serialized form of all aggregations and Query constraints.
Returns
Type
Description
RunAggregationQueryRequest
the serialized RunAggregationQueryRequest
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
