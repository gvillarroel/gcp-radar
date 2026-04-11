---
title: "Class BaseEntity<K> (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseEntity
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseEntity
  title: "Class BaseEntity<K> (2.37.0) \_|\_ Java client libraries \_|\_ Google Cloud\
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
Class BaseEntity<K> (2.37.0)
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
public abstract class BaseEntity<K> implements Serializable
A base class for entities (key and properties). An entity is a Google Cloud Datastore persistent
data object. An entity holds one or more properties, represented by a name (as String )
and a value (as com.google.cloud.datastore.Value ), and may be associated with a key. For
a list of possible values see ValueType .
See Also: Google Cloud Datastore Entities, Properties, and Keys
Inheritance
Object >
BaseEntity<K>
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
Type Parameter
Name
Description
K
Methods
<K>getEntity(String name)
public FullEntity<K> < K>getEntity ( String name )
Returns the property value as an entity.
Parameter
Name
Description
name
String
Returns
Type
Description
FullEntity < K >
<T>getList(String name)
public List<T> < T>getList ( String name )
Returns the property value as a list of values.
Parameter
Name
Description
name
String
Returns
Type
Description
List < T >
<V>getValue(String name)
public V < V>getValue ( String name )
Returns the Value for the given property name .
Parameter
Name
Description
name
String
Returns
Type
Description
V
contains(String name)
public boolean contains ( String name )
Returns true if the entity contains a property with the given name .
Parameter
Name
Description
name
String
Returns
Type
Description
boolean
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
getBlob(String name)
public Blob getBlob ( String name )
Returns the property value as a blob.
Parameter
Name
Description
name
String
Returns
Type
Description
Blob
getBoolean(String name)
public boolean getBoolean ( String name )
Returns the property value as a boolean.
Parameter
Name
Description
name
String
Returns
Type
Description
boolean
getDouble(String name)
public double getDouble ( String name )
Returns the property value as a double.
Parameter
Name
Description
name
String
Returns
Type
Description
double
getKey()
public K getKey ()
Returns the associated key or null if it does not have one.
Returns
Type
Description
K
getKey(String name)
public Key getKey ( String name )
Returns the property value as a Key.
Parameter
Name
Description
name
String
Returns
Type
Description
Key
getLatLng(String name)
public LatLng getLatLng ( String name )
Returns the property value as a LatLng.
Parameter
Name
Description
name
String
Returns
Type
Description
LatLng
getLong(String name)
public long getLong ( String name )
Returns the property value as long.
Parameter
Name
Description
name
String
Returns
Type
Description
long
getNames()
public Set<String> getNames ()
Returns the properties name.
Returns
Type
Description
Set < String >
getProperties()
public Map<String , Value < ? >> getProperties ()
Returns the properties.
Returns
Type
Description
Map < String , Value < ? >>
getString(String name)
public String getString ( String name )
Returns the property value as a string.
Parameter
Name
Description
name
String
Returns
Type
Description
String
getTimestamp(String name)
public Timestamp getTimestamp ( String name )
Returns the property value as a Timestamp.
Parameter
Name
Description
name
String
Returns
Type
Description
com.google.cloud.Timestamp
hasKey()
public boolean hasKey ()
Returns true if entity has a non-null key.
Returns
Type
Description
boolean
hashCode()
public int hashCode ()
Returns
Type
Description
int
Overrides
Object.hashCode()
isNull(String name)
public boolean isNull ( String name )
Returns true if property is an instance of NullValue.
Parameter
Name
Description
name
String
Returns
Type
Description
boolean
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
