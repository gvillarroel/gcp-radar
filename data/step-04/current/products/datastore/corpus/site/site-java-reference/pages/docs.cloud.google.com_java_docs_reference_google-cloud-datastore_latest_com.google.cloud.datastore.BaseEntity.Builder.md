---
title: "Class BaseEntity.Builder<K,B> (2.37.0) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseEntity.Builder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-datastore/latest/com.google.cloud.datastore.BaseEntity.Builder
  title: "Class BaseEntity.Builder<K,B> (2.37.0) \_|\_ Java client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class BaseEntity.Builder<K,B> (2.37.0)
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
public abstract static class BaseEntity . Builder<K , B >
Inheritance
java.lang.Object >
BaseEntity.Builder<K,B>
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
Type Parameters
Name
Description
K
B
Methods
build()
public abstract BaseEntity<K> build ()
Returns
Type
Description
BaseEntity < K >
clear()
public B clear ()
Clears all the properties.
Returns
Type
Description
B
key()
protected K key ()
Returns
Type
Description
K
remove(String name)
public B remove ( String name )
Removes a property with the given name .
Parameter
Name
Description
name
String
Returns
Type
Description
B
set(String name, boolean value)
public B set ( String name , boolean value )
Sets a property of type BooleanValue .
Parameters
Name
Description
name
String name of the property
value
boolean value associated with the property
Returns
Type
Description
B
set(String name, boolean first, boolean second, boolean[] others)
public B set ( String name , boolean first , boolean second , boolean [] others )
Sets a list property containing elements of type BooleanValue .
Parameters
Name
Description
name
String name of the property
first
boolean the first boolean in the list
second
boolean the second boolean in the list
others
boolean [] other booleans in the list
Returns
Type
Description
B
set(String name, Timestamp value)
public B set ( String name , Timestamp value )
Sets a property of type TimestampValue .
Parameters
Name
Description
name
String name of the property
value
com.google.cloud.Timestamp value associated with the property
Returns
Type
Description
B
set(String name, Timestamp first, Timestamp second, Timestamp[] others)
public B set ( String name , Timestamp first , Timestamp second , Timestamp [] others )
Sets a list property containing elements of type TimestampValue .
Parameters
Name
Description
name
String name of the property
first
com.google.cloud.Timestamp the first Timestamp in the list
second
com.google.cloud.Timestamp the second Timestamp in the list
others
com.google.cloud.Timestamp [] other Timestamp s in the list
Returns
Type
Description
B
set(String name, Blob value)
public B set ( String name , Blob value )
Sets a property of type BlobValue .
Parameters
Name
Description
name
String name of the property
value
Blob value associated with the property
Returns
Type
Description
B
set(String name, Blob first, Blob second, Blob[] others)
public B set ( String name , Blob first , Blob second , Blob [] others )
Sets a list property containing elements of type BlobValue .
Parameters
Name
Description
name
String name of the property
first
Blob the first Blob in the list
second
Blob the second Blob in the list
others
Blob [] other Blob s in the list
Returns
Type
Description
B
set(String name, FullEntity<?> value)
public B set ( String name , FullEntity < ? > value )
Sets a property of type EntityValue .
Parameters
Name
Description
name
String name of the property
value
FullEntity < ? > value associated with the property
Returns
Type
Description
B
set(String name, FullEntity<?> first, FullEntity<?> second, FullEntity<?>[] others)
public B set ( String name , FullEntity < ? > first , FullEntity < ? > second , FullEntity < ?>[] others )
Sets a list property containing elements of type EntityValue .
Parameters
Name
Description
name
String name of the property
first
FullEntity < ? > the first FullEntity in the list
second
FullEntity < ? > the second FullEntity in the list
others
FullEntity < ? >[] other entities in the list
Returns
Type
Description
B
set(String name, Key value)
public B set ( String name , Key value )
Sets a property of type KeyValue .
Parameters
Name
Description
name
String name of the property
value
Key value associated with the property
Returns
Type
Description
B
set(String name, Key first, Key second, Key[] others)
public B set ( String name , Key first , Key second , Key [] others )
Sets a list property containing elements of type KeyValue .
Parameters
Name
Description
name
String name of the property
first
Key the first Key in the list
second
Key the second Key in the list
others
Key [] other Key s in the list
Returns
Type
Description
B
set(String name, LatLng value)
public B set ( String name , LatLng value )
Sets a property of type LatLng .
Parameters
Name
Description
name
String name of the property
value
LatLng value associated with the property
Returns
Type
Description
B
set(String name, LatLng first, LatLng second, LatLng[] others)
public B set ( String name , LatLng first , LatLng second , LatLng [] others )
Sets a list property containing elements of type LatLng .
Parameters
Name
Description
name
String name of the property
first
LatLng the first LatLng in the list
second
LatLng the second LatLng in the list
others
LatLng [] other LatLng s in the list
Returns
Type
Description
B
set(String name, Value<?> value)
public B set ( String name , Value < ? > value )
Sets a property.
Parameters
Name
Description
name
String name of the property
value
Value < ? > value associated with the property
Returns
Type
Description
B
set(String name, Value<?> first, Value<?> second, Value<?>[] others)
public B set ( String name , Value < ? > first , Value < ? > second , Value < ?>[] others )
Sets a property of type ListValue .
Parameters
Name
Description
name
String name of the property
first
Value < ? > the first value in the list
second
Value < ? > the second value in the list
others
Value < ? >[] other values in the list
Returns
Type
Description
B
set(String name, double value)
public B set ( String name , double value )
Sets a property of type DoubleValue .
Parameters
Name
Description
name
String name of the property
value
double value associated with the property
Returns
Type
Description
B
set(String name, double first, double second, double[] others)
public B set ( String name , double first , double second , double [] others )
Sets a list property containing elements of type DoubleValue .
Parameters
Name
Description
name
String name of the property
first
double the first double in the list
second
double the second double in the list
others
double [] other doubles in the list
Returns
Type
Description
B
set(String name, String value)
public B set ( String name , String value )
Sets a property of type StringValue .
Parameters
Name
Description
name
String name of the property
value
String value associated with the property
Returns
Type
Description
B
set(String name, String first, String second, String[] others)
public B set ( String name , String first , String second , String [] others )
Sets a list property containing elements of type StringValue .
Parameters
Name
Description
name
String name of the property
first
String the first string in the list
second
String the second string in the list
others
String [] other strings in the list
Returns
Type
Description
B
set(String name, List<? extends Value<?>> values)
public B set ( String name , List < ? extends Value < ? >> values )
Sets a property of type ListValue .
Parameters
Name
Description
name
String name of the property
values
List < ? extends com.google.cloud.datastore.Value < ? >> list of values associated with the property
Returns
Type
Description
B
set(String name, long value)
public B set ( String name , long value )
Sets a property of type LongValue .
Parameters
Name
Description
name
String name of the property
value
long value associated with the property
Returns
Type
Description
B
set(String name, long first, long second, long[] others)
public B set ( String name , long first , long second , long [] others )
Sets a list property containing elements of type LongValue .
Parameters
Name
Description
name
String name of the property
first
long the first long in the list
second
long the second long in the list
others
long [] other longs in the list
Returns
Type
Description
B
setKey(K key)
public B setKey ( K key )
Sets the key for the entity.
Parameter
Name
Description
key
K
Returns
Type
Description
B
setNull(String name)
public B setNull ( String name )
Sets a property of type NullValue .
Parameter
Name
Description
name
String name of the property
Returns
Type
Description
B
setProperties()
protected Map<String , Value < ? >> setProperties ()
Returns
Type
Description
Map < String , Value < ? >>
setProperties(Map<String,Value<?>> properties)
protected B setProperties ( Map<String , Value < ? >> properties )
Parameter
Name
Description
properties
Map < String , Value < ? >>
Returns
Type
Description
B
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
