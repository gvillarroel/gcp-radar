---
title: "Class Blob (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Blob
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.Blob
  title: "Class Blob (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Blob (2.37.0)
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
public final class Blob implements Serializable
A Google Cloud Datastore Blob. This class is immutable.
See Also: Google Cloud Datastore Entities, Properties, and Keys
Inheritance
Object >
Blob
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
Static Methods
copyFrom(byte[] bytes)
public static Blob copyFrom ( byte [] bytes )
Parameter
Name
Description
bytes
byte []
Returns
Type
Description
Blob
copyFrom(InputStream input)
public static Blob copyFrom ( InputStream input )
Parameter
Name
Description
input
InputStream
Returns
Type
Description
Blob
Exceptions
Type
Description
IOException
copyFrom(ByteBuffer bytes)
public static Blob copyFrom ( ByteBuffer bytes )
Parameter
Name
Description
bytes
ByteBuffer
Returns
Type
Description
Blob
Methods
asInputStream()
public InputStream asInputStream ()
Returns an InputStream for this blob content.
Returns
Type
Description
InputStream
asReadOnlyByteBuffer()
public ByteBuffer asReadOnlyByteBuffer ()
Returns a read-only ByteBuffer for this blob content.
Returns
Type
Description
ByteBuffer
copyTo(byte[] target)
public void copyTo ( byte [] target )
Copies bytes into a buffer.
Parameter
Name
Description
target
byte []
copyTo(ByteBuffer target)
public void copyTo ( ByteBuffer target )
Copies bytes into a ByteBuffer.
Parameter
Name
Description
target
ByteBuffer
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
getLength()
public int getLength ()
Returns the size of this blob.
Returns
Type
Description
int
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
toByteArray()
public byte [] toByteArray ()
Returns a copy as byte array.
Returns
Type
Description
byte []
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
