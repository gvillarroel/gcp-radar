---
title: "Class BlobId (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobId
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage.BlobId
  title: "Class BlobId (2.64.0) \_|\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Class BlobId (2.64.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.64.0 (latest)
2.63.0
2.62.1
2.60.0
2.59.0
2.58.1
2.57.0
2.56.0
2.55.0
2.54.0
2.53.3
2.52.3
2.50.0
2.49.0
2.48.2
2.47.0
2.46.0
2.45.0
2.44.1
2.43.2
2.42.0
2.41.0
2.40.1
2.39.0
2.38.0
2.37.0
2.36.1
2.34.0
2.33.0
2.32.1
2.30.1
2.29.1
2.28.0
2.27.1
2.24.0
2.23.0
2.22.6
2.21.0
2.20.2
2.19.0
2.18.0
2.17.2
2.16.0
2.15.1
2.14.0
2.13.1
2.12.0
2.11.3
2.10.0
2.9.3
2.8.1
2.7.1
2.6.1
2.5.1
2.4.5
2.3.0
2.2.3
2.1.10
public final class BlobId implements Serializable
Google Storage Object identifier. A BlobId object includes the name of the containing
bucket, the blob's name and possibly the blob's generation. If #getGeneration() is
null the identifier refers to the latest blob's generation.
Inheritance
Object >
BlobId
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
fromGsUtilUri(String gsUtilUri)
public static BlobId fromGsUtilUri ( String gsUtilUri )
Creates a BlobId object.
Parameter
Name
Description
gsUtilUri
String the Storage url to create the blob from
Returns
Type
Description
BlobId
of(String bucket, String name)
public static BlobId of ( String bucket , String name )
Creates a blob identifier. Generation is set to null .
Parameters
Name
Description
bucket
String the name of the bucket that contains the blob
name
String the name of the blob
Returns
Type
Description
BlobId
of(String bucket, String name, Long generation)
public static BlobId of ( String bucket , String name , Long generation )
Creates a BlobId object.
Parameters
Name
Description
bucket
String name of the containing bucket
name
String blob's name
generation
Long blob's data generation, used for versioning. If null the identifier
refers to the latest blob's generation
Returns
Type
Description
BlobId
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
getBucket()
public String getBucket ()
Returns the name of the bucket containing the blob.
Returns
Type
Description
String
getGeneration()
public Long getGeneration ()
Returns blob's data generation. Used for versioning.
Returns
Type
Description
Long
getName()
public String getName ()
Returns the name of the blob.
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
toGsUtilUri()
public String toGsUtilUri ()
Returns this blob's Storage url which can be used with gsutil. If #generation is
non-null it will not be included in the uri.
Returns
Type
Description
String
toGsUtilUriWithGeneration()
public String toGsUtilUriWithGeneration ()
Returns this blob's Storage url which can be used with gsutil. If #generation is
non-null it will be included in the uri
Returns
Type
Description
String
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
