---
title: "Class AggregationResults (2.37.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.AggregationResults
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.AggregationResults
  title: "Class AggregationResults (2.37.0) \_|\_ Java client libraries \_|\_ Google\
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
Class AggregationResults (2.37.0)
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
public class AggregationResults implements Iterable<AggregationResult>
The result of an AggregationQuery query submission. Contains a List< AggregationResult > and readTime Timestamp in it.
This can be used to iterate over an underlying List< AggregationResult > directly.
Inheritance
Object >
AggregationResults
Implements
Iterable<AggregationResult>
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
Constructors
AggregationResults(List<AggregationResult> aggregationResults, Timestamp readTime)
public AggregationResults ( List<AggregationResult> aggregationResults , Timestamp readTime )
Parameters
Name
Description
aggregationResults
List < AggregationResult >
readTime
com.google.cloud.Timestamp
AggregationResults(List<AggregationResult> aggregationResults, Timestamp readTime, ExplainMetrics explainMetrics)
public AggregationResults ( List<AggregationResult> aggregationResults , Timestamp readTime , ExplainMetrics explainMetrics )
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Parameters
Name
Description
aggregationResults
List < AggregationResult >
readTime
com.google.cloud.Timestamp
explainMetrics
ExplainMetrics
Methods
equals(Object o)
public boolean equals ( Object o )
Parameter
Name
Description
o
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
get(int index)
public AggregationResult get ( int index )
Internal Only : This feature is not stable for application use.
Parameter
Name
Description
index
int
Returns
Type
Description
AggregationResult
getExplainMetrics()
public Optional<ExplainMetrics> getExplainMetrics ()
Beta
This feature is covered by the Pre-GA Offerings Terms of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.
Returns ExplainMetrics if ExplainOptions were enabled. Otherwise, returns null.
Returns
Type
Description
Optional < ExplainMetrics >
getReadTime()
public Timestamp getReadTime ()
Returns read timestamp this result batch was returned from.
Returns
Type
Description
com.google.cloud.Timestamp
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
iterator()
public Iterator<AggregationResult> iterator ()
Returns Iterator for underlying List< AggregationResult >.
Returns
Type
Description
Iterator < AggregationResult >
size()
public int size ()
Returns
Type
Description
int
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
