---
title: "Class AggregateField (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField
  title: "Class AggregateField (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class AggregateField (3.38.0)
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
public abstract class AggregateField
Represents an aggregation that can be performed by Firestore.
Inheritance
Object >
AggregateField
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
average(FieldPath fieldPath)
public static AggregateField . AverageAggregateField average ( FieldPath fieldPath )
Create an AverageAggregateField object that can be used to compute the average of a
specified field over a range of documents in the result set of a query.
The result of an average operation will always be a double or NaN.
Averaging over zero documents or fields will result in a double value representing NaN.
Averaging over NaN will result in a double value representing NaN.
Parameter
Name
Description
fieldPath
FieldPath Specifies the field to average across the result set.
Returns
Type
Description
AggregateField.AverageAggregateField
The AverageAggregateField object that can be used to compute the average of a
specified field over a range of documents in the result set of a query.
average(String field)
public static AggregateField . AverageAggregateField average ( String field )
Create an AverageAggregateField object that can be used to compute the average of a
specified field over a range of documents in the result set of a query.
The result of an average operation will always be a double or NaN.
Averaging over zero documents or fields will result in a double value representing NaN.
Averaging over NaN will result in a double value representing NaN.
Parameter
Name
Description
field
String Specifies the field to average across the result set.
Returns
Type
Description
AggregateField.AverageAggregateField
The AverageAggregateField object that can be used to compute the average of a
specified field over a range of documents in the result set of a query.
count()
public static AggregateField . CountAggregateField count ()
Create a CountAggregateField object that can be used to compute the count of documents
in the result set of a query.
The result of a count operation will always be a 64-bit integer value.
Returns
Type
Description
AggregateField.CountAggregateField
The CountAggregateField object that can be used to compute the count of documents in
the result set of a query.
sum(FieldPath fieldPath)
public static AggregateField . SumAggregateField sum ( FieldPath fieldPath )
Create a SumAggregateField object that can be used to compute the sum of a specified
field over a range of documents in the result set of a query.
The result of a sum operation will always be a 64-bit integer value, a double, or NaN.
Summing over zero documents or fields will result in 0L.
Summing over NaN will result in a double value representing NaN.
A sum that overflows the maximum representable 64-bit integer value will result in a
double return value. This may result in lost precision of the result.
A sum that overflows the maximum representable double value will result in a double
return value representing infinity.
Parameter
Name
Description
fieldPath
FieldPath Specifies the field to sum across the result set.
Returns
Type
Description
AggregateField.SumAggregateField
The SumAggregateField object that can be used to compute the sum of a specified field
over a range of documents in the result set of a query.
sum(String field)
public static AggregateField . SumAggregateField sum ( String field )
Create a SumAggregateField object that can be used to compute the sum of a specified
field over a range of documents in the result set of a query.
The result of a sum operation will always be a 64-bit integer value, a double, or NaN.
Summing over zero documents or fields will result in 0L.
Summing over NaN will result in a double value representing NaN.
A sum that overflows the maximum representable 64-bit integer value will result in a
double return value. This may result in lost precision of the result.
A sum that overflows the maximum representable double value will result in a double
return value representing infinity.
Parameter
Name
Description
field
String Specifies the field to sum across the result set.
Returns
Type
Description
AggregateField.SumAggregateField
The SumAggregateField object that can be used to compute the sum of a specified field
over a range of documents in the result set of a query.
Constructors
AggregateField()
public AggregateField ()
Methods
equals(Object other)
public boolean equals ( Object other )
Returns true if the given object is equal to this object. Two AggregateField objects are
considered equal if they have the same operator and operate on the same field.
Parameter
Name
Description
other
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
hashCode()
public int hashCode ()
Calculates and returns the hash code for this object.
Returns
Type
Description
int
Overrides
Object.hashCode()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
