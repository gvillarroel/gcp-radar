---
title: "Class BaseKey.Builder<B> (2.37.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseKey.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseKey.Builder
  title: "Class BaseKey.Builder<B> (2.37.0) \_|\_ Java client libraries \_|\_ Google\
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
Class BaseKey.Builder<B> (2.37.0)
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
public abstract static class BaseKey . Builder<B>
Base class for key builders.
Inheritance
java.lang.Object >
BaseKey.Builder<B>
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
Type Parameter
Name
Description
B
Methods
addAncestor(PathElement ancestor)
public B addAncestor ( PathElement ancestor )
Adds an ancestor for this key.
Parameter
Name
Description
ancestor
PathElement
Returns
Type
Description
B
addAncestors(PathElement ancestor, PathElement[] other)
public B addAncestors ( PathElement ancestor , PathElement [] other )
Adds the provided ancestors to the key.
Parameters
Name
Description
ancestor
PathElement
other
PathElement []
Returns
Type
Description
B
addAncestors(Iterable<PathElement> ancestors)
public B addAncestors ( Iterable<PathElement> ancestors )
Adds the provided ancestors to the key.
Parameter
Name
Description
ancestors
Iterable < PathElement >
Returns
Type
Description
B
build()
protected abstract BaseKey build ()
Returns
Type
Description
BaseKey
setDatabaseId(String databaseId)
public B setDatabaseId ( String databaseId )
Sets the database id of the key.
Parameter
Name
Description
databaseId
String
Returns
Type
Description
B
setKind(String kind)
public B setKind ( String kind )
Sets the kind of the key.
Parameter
Name
Description
kind
String
Returns
Type
Description
B
setNamespace(String namespace)
public B setNamespace ( String namespace )
Sets the namespace of the key.
Parameter
Name
Description
namespace
String
Returns
Type
Description
B
setProjectId(String projectId)
public B setProjectId ( String projectId )
Sets the project ID of the key.
Parameter
Name
Description
projectId
String
Returns
Type
Description
B
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
