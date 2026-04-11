---
title: "Class AggregateQuerySnapshot (3.38.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuerySnapshot
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateQuerySnapshot
  title: "Class AggregateQuerySnapshot (3.38.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class AggregateQuerySnapshot (3.38.0)
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
public class AggregateQuerySnapshot
The results of executing an AggregateQuery .
Inheritance
Object >
AggregateQuerySnapshot
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
Methods
equals(Object object)
public boolean equals ( Object object )
Compares this object with the given object for equality.
This object is considered "equal" to the other object if and only if all of the following
conditions are satisfied:
object is a non-null instance of AggregateQuerySnapshot .
The AggregateQuery of object compares equal to that of this object.
object has the same results as this object.
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
get(AggregateField aggregateField)
public Object get ( AggregateField aggregateField )
Returns the result of the given aggregation from the server without coercion of data types.
Throws java.lang.RuntimeException if the aggregateField was not requested when calling
query.aggregate(...) .
Parameter
Name
Description
aggregateField
AggregateField The aggregation for which the value is requested.
Returns
Type
Description
Object
The result of the given aggregation.
get(AggregateField.AverageAggregateField averageAggregateField)
public Double get ( AggregateField . AverageAggregateField averageAggregateField )
Returns the result of the given average aggregation. Since the result of an average aggregation
performed by the server is always a double, this convenience overload can be used in lieu of
the above get method. Throws java.lang.RuntimeException if the aggregateField was not
requested when calling query.aggregate(...) .
Parameter
Name
Description
averageAggregateField
AggregateField.AverageAggregateField The average aggregation for which the value is requested.
Returns
Type
Description
Double
The result of the given average aggregation.
get(AggregateField.CountAggregateField unused)
public long get ( AggregateField . CountAggregateField unused )
Returns the number of documents in the result set of the underlying query.
Parameter
Name
Description
unused
AggregateField.CountAggregateField
Returns
Type
Description
long
getCount()
public long getCount ()
Returns the number of documents in the result set of the underlying query.
Returns
Type
Description
long
getDouble(AggregateField aggregateField)
public Double getDouble ( AggregateField aggregateField )
Returns the result of the given aggregation as a double. Coerces all numeric values and throws
a RuntimeException if the result of the aggregate is non-numeric. In the case of coercion of
long to double, uses java.lang.Long.doubleValue to perform the conversion, and may result in a
loss of precision.
Parameter
Name
Description
aggregateField
AggregateField The aggregation for which the value is requested.
Returns
Type
Description
Double
The result of the given average aggregation as a double.
getLong(AggregateField aggregateField)
public Long getLong ( AggregateField aggregateField )
Returns the result of the given aggregation as a long. Coerces all numeric values and throws a
RuntimeException if the result of the aggregate is non-numeric. In case of coercion of double
to long, uses java.lang.Double.longValue to perform the conversion.
Parameter
Name
Description
aggregateField
AggregateField The aggregation for which the value is requested.
Returns
Type
Description
Long
The result of the given average aggregation as a long.
getQuery()
public AggregateQuery getQuery ()
Returns the query that was executed to produce this result.
Returns
Type
Description
AggregateQuery
getReadTime()
public Timestamp getReadTime ()
Returns the time at which this snapshot was read.
Returns
Type
Description
com.google.cloud.Timestamp
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
