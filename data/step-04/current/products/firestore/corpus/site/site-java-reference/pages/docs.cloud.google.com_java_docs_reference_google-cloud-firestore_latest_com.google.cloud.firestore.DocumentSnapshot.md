---
title: "Class DocumentSnapshot (3.38.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.DocumentSnapshot
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.DocumentSnapshot
  title: "Class DocumentSnapshot (3.38.0) \_|\_ Java client libraries \_|\_ Google\
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
Class DocumentSnapshot (3.38.0)
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
public class DocumentSnapshot
A DocumentSnapshot contains data read from a document in a Firestore database. The data can be
extracted with the #getData() or #get(String) methods.
If the DocumentSnapshot points to a non-existing document, getData() and its corresponding
methods will return null. You can always explicitly check for a document's existence by calling
#exists() .
Subclassing Note : Firestore classes are not meant to be subclassed except for use in
test mocks. Subclassing is not supported in production code and new SDK releases may break code
that does so.
Inheritance
Object >
DocumentSnapshot
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
<T>get(FieldPath fieldPath, Class<T> valueType)
public T < T>get ( FieldPath fieldPath , Class<T> valueType )
Returns the value at the field, converted to a POJO, or null if the field or document doesn't
exist.
Parameters
Name
Description
fieldPath
FieldPath The path to the field
valueType
Class < T > The Java class to convert the field value to.
Returns
Type
Description
T
The value at the given field or null.
<T>get(String field, Class<T> valueType)
public T < T>get ( String field , Class<T> valueType )
Returns the value at the field, converted to a POJO, or null if the field or document doesn't
exist.
Parameters
Name
Description
field
String The path to the field
valueType
Class < T > The Java class to convert the field value to.
Returns
Type
Description
T
The value at the given field or null.
<T>toObject(Class<T> valueType)
public T < T>toObject ( Class<T> valueType )
Returns the contents of the document converted to a POJO or null if the document doesn't exist.
Parameter
Name
Description
valueType
Class < T > The Java class to create
Returns
Type
Description
T
The contents of the document in an object of type T or null if the document doesn't
exist.
contains(FieldPath fieldPath)
public boolean contains ( FieldPath fieldPath )
Returns whether or not the field exists in the document. Returns false if the document does not
exist.
Parameter
Name
Description
fieldPath
FieldPath the path to the field.
Returns
Type
Description
boolean
true iff the field exists.
contains(String field)
public boolean contains ( String field )
Returns whether or not the field exists in the document. Returns false if the document does not
exist.
Parameter
Name
Description
field
String the path to the field.
Returns
Type
Description
boolean
true iff the field exists.
equals(Object obj)
public boolean equals ( Object obj )
Returns true if the document's data and path in this DocumentSnapshot equals the provided
snapshot.
Parameter
Name
Description
obj
Object The object to compare against.
Returns
Type
Description
boolean
Whether this DocumentSnapshot is equal to the provided object.
Overrides
Object.equals(Object)
exists()
public boolean exists ()
Returns whether or not the field exists in the document. Returns false if the document does not
exist.
Returns
Type
Description
boolean
whether the document existed in this snapshot.
get(FieldPath fieldPath)
public Object get ( FieldPath fieldPath )
Returns the value at the field or null if the field doesn't exist.
Parameter
Name
Description
fieldPath
FieldPath The path to the field.
Returns
Type
Description
Object
The value at the given field or null.
get(String field)
public Object get ( String field )
Returns the value at the field or null if the field doesn't exist.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
Object
The value at the given field or null.
getBlob(String field)
public Blob getBlob ( String field )
Returns the value of the field as a Blob.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
Blob
The value of the field.
getBoolean(String field)
public Boolean getBoolean ( String field )
Returns the value of the field as a boolean.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
Boolean
The value of the field.
getCreateTime()
public Timestamp getCreateTime ()
Returns the time at which this document was created. Returns null for non-existing documents.
Returns
Type
Description
com.google.cloud.Timestamp
The last time the document in the snapshot was created. Null if the document doesn't
exist.
getData()
public Map<String , Object > getData ()
Returns the fields of the document as a Map or null if the document doesn't exist. Field values
will be converted to their native Java representation.
Returns
Type
Description
Map < String , Object >
The fields of the document as a Map or null if the document doesn't exist.
getDate(String field)
public Date getDate ( String field )
Returns the value of the field as a Date.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
Date
The value of the field.
getDouble(String field)
public Double getDouble ( String field )
Returns the value of the field as a double.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
Double
The value of the field.
getGeoPoint(String field)
public GeoPoint getGeoPoint ( String field )
Returns the value of the field as a GeoPoint.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
GeoPoint
The value of the field.
getId()
public String getId ()
Returns the ID of the document contained in this snapshot.
Returns
Type
Description
String
The id of the document.
getLong(String field)
public Long getLong ( String field )
Returns the value of the field as a long.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
Long
The value of the field.
getReadTime()
public Timestamp getReadTime ()
Returns the time at which this snapshot was read.
Returns
Type
Description
com.google.cloud.Timestamp
The read time of this snapshot.
getReference()
public DocumentReference getReference ()
Gets the reference to the document.
Returns
Type
Description
DocumentReference
The reference to the document.
getString(String field)
public String getString ( String field )
Returns the value of the field as a String.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
String
The value of the field.
getTimestamp(String field)
public Timestamp getTimestamp ( String field )
Returns the value of the field as a Timestamp .
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
com.google.cloud.Timestamp
The value of the field.
getUpdateTime()
public Timestamp getUpdateTime ()
Returns the time at which this document was last updated. Returns null for non-existing
documents.
Returns
Type
Description
com.google.cloud.Timestamp
The last time the document in the snapshot was updated. Null if the document doesn't
exist.
getVectorValue(String field)
public VectorValue getVectorValue ( String field )
Returns the value of the field as a VectorValue.
Parameter
Name
Description
field
String The path to the field.
Returns
Type
Description
VectorValue
The value of the field.
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
