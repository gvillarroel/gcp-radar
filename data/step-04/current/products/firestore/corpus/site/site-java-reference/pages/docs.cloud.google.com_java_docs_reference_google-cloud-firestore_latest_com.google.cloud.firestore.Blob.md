---
title: "Class Blob (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Blob
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.Blob
  title: "Class Blob (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class Blob (3.38.0)
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
public final class Blob implements Serializable
Immutable class representing an array of bytes in Firestore.
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
fromByteString(ByteString byteString)
public static Blob fromByteString ( ByteString byteString )
Creates a new Blob instance from the provided ByteString.
Parameter
Name
Description
byteString
ByteString The byteString to use for this Blob instance.
Returns
Type
Description
Blob
The new Blob instance
fromBytes(byte[] bytes)
public static Blob fromBytes ( byte [] bytes )
Creates a new Blob instance from the provided bytes. Makes a copy of the bytes passed in.
Parameter
Name
Description
bytes
byte [] The bytes to use for this Blob instance.
Returns
Type
Description
Blob
The new Blob instance
Methods
equals(Object obj)
public boolean equals ( Object obj )
Returns true if this Blob is equal to the provided object.
Parameter
Name
Description
obj
Object The object to compare against.
Returns
Type
Description
boolean
Whether this Blob is equal to the provided object.
Overrides
Object.equals(Object)
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
toByteString()
public ByteString toByteString ()
Returns the backing data as a ByteString.
Returns
Type
Description
ByteString
The bytes of this blob as a byteString
toBytes()
public byte [] toBytes ()
Returns a copy of the underlying bytes as a byte[] array.
Returns
Type
Description
byte []
The bytes of this blob as a byte[] array.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
