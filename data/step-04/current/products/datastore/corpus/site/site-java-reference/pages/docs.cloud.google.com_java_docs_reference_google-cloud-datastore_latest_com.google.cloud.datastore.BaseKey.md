---
title: "Class BaseKey (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseKey
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseKey
  title: "Class BaseKey (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class BaseKey (2.37.0)
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
public abstract class BaseKey implements Serializable
Base class for keys.
Inheritance
Object >
BaseKey
Implements
Serializable
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
equals(Object obj)
public boolean equals ( Object obj )
Parameter
Name
Description
obj
Object
Returns
Type
Description
boolean
Overrides
Object.equals(Object)
getAncestors()
public List<PathElement> getAncestors ()
Returns an immutable list with the key's ancestors.
Returns
Type
Description
List < PathElement >
getDatabaseId()
public String getDatabaseId ()
Returns
Type
Description
String
getKind()
public String getKind ()
Returns the key's kind.
Returns
Type
Description
String
getNamespace()
public String getNamespace ()
Returns the key's namespace or null if not provided.
Returns
Type
Description
String
getProjectId()
public String getProjectId ()
Returns the key's projectId.
Returns
Type
Description
String
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
toString()
public String toString ()
Returns
Type
Description
String
Overrides
Object.toString()
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
