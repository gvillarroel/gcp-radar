---
title: "Class DocumentChange (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.DocumentChange
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.DocumentChange
  title: "Class DocumentChange (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class DocumentChange (3.38.0)
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
public class DocumentChange
A DocumentChange represents a change to the documents matching a query. It contains the document
affected and a the type of change that occurred (added, modifed, or removed).
Inheritance
Object >
DocumentChange
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
Returns true if this DocumentChange is equal to the provided object.
Parameter
Name
Description
obj
Object The object to compare against.
Returns
Type
Description
boolean
Whether this DocumentChange is equal to the provided object.
Overrides
Object.equals(Object)
getDocument()
public QueryDocumentSnapshot getDocument ()
Returns the newly added or modified document if this DocumentChange is for an updated document.
Returns the deleted document if this document change represents a removal.
Returns
Type
Description
QueryDocumentSnapshot
A snapshot of the new data (for Type.ADDED or Type.MODIFIED) or the removed data (for
Type.REMOVED).
getNewIndex()
public int getNewIndex ()
The index of the changed document in the result set immediately after this DocumentChange
(specifically, supposing that all prior DocumentChange objects and the current DocumentChange
object have been applied). Returns -1 for 'removed' events.
Returns
Type
Description
int
getOldIndex()
public int getOldIndex ()
The index of the changed document in the result set immediately prior to this DocumentChange
(specifically, supposing that all prior DocumentChange objects have been applied). Returns -1
for 'added' events.
Returns
Type
Description
int
getType()
public DocumentChange . Type getType ()
Returns
Type
Description
DocumentChange.Type
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
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
