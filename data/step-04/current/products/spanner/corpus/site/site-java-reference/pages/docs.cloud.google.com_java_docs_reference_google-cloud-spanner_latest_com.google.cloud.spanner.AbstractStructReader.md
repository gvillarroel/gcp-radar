---
title: "Class AbstractStructReader (6.111.1) \_|\_ Java client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AbstractStructReader
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AbstractStructReader
  title: "Class AbstractStructReader (6.111.1) \_|\_ Java client libraries \_|\_ Google\
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
Class AbstractStructReader (6.111.1)
Stay organized with collections
Save and categorize content based on your preferences.
6.111.1 (latest)
6.111.0
6.108.0
6.107.0
6.103.0
6.102.1
6.101.1
6.100.0
6.99.0
6.98.1
6.97.1
6.96.1
6.95.1
6.94.0
6.93.0
6.89.0
6.88.0
6.87.0
6.86.0
6.85.0
6.83.0
6.82.0
6.80.1
6.79.0
6.77.0
6.74.1
6.72.0
6.71.0
6.69.0
6.68.0
6.66.0
6.65.1
6.62.0
6.60.0
6.58.0
6.57.0
6.56.0
6.55.0
6.54.0
6.53.0
6.52.1
6.51.0
6.50.1
6.49.0
6.25.1
6.24.0
6.23.4
6.22.0
6.21.2
6.20.0
6.19.1
6.18.0
6.17.4
6.14.1
public abstract class AbstractStructReader implements StructReader
Base class for assisting StructReader implementations.
This class implements the majority of the StructReader interface, leaving subclasses
to implement core data access via the getTypeNameInternal() methods.
AbstractStructReader guarantees that these will only be called for non- NULL columns of a
type appropriate for the method.
Inheritance
Object >
AbstractStructReader
Implements
StructReader
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
AbstractStructReader()
public AbstractStructReader ()
Methods
<T>getProtoEnum(int columnIndex, Function<Integer,ProtocolMessageEnum> method)
public T < T>getProtoEnum ( int columnIndex , Function<Integer , ProtocolMessageEnum > method )
To get the proto enum of type T from Struct.
Parameters
Name
Description
columnIndex
int
method
Function < Integer , ProtocolMessageEnum >
Returns
Type
Description
T
<T>getProtoEnum(String columnName, Function<Integer,ProtocolMessageEnum> method)
public T < T>getProtoEnum ( String columnName , Function<Integer , ProtocolMessageEnum > method )
To get the proto enum of type T from Struct.
Parameters
Name
Description
columnName
String
method
Function < Integer , ProtocolMessageEnum >
Returns
Type
Description
T
<T>getProtoEnumInternal(int columnIndex, Function<Integer,ProtocolMessageEnum> method)
protected T < T>getProtoEnumInternal ( int columnIndex , Function<Integer , ProtocolMessageEnum > method )
Parameters
Name
Description
columnIndex
int
method
Function < Integer , ProtocolMessageEnum >
Returns
Type
Description
T
<T>getProtoEnumList(int columnIndex, Function<Integer,ProtocolMessageEnum> method)
public List<T> < T>getProtoEnumList ( int columnIndex , Function<Integer , ProtocolMessageEnum > method )
To get the proto enum of type T from Struct.
Parameters
Name
Description
columnIndex
int
method
Function < Integer , ProtocolMessageEnum >
Returns
Type
Description
List < T >
<T>getProtoEnumList(String columnName, Function<Integer,ProtocolMessageEnum> method)
public List<T> < T>getProtoEnumList ( String columnName , Function<Integer , ProtocolMessageEnum > method )
To get the proto enum list of type T from Struct.
Parameters
Name
Description
columnName
String
method
Function < Integer , ProtocolMessageEnum >
Returns
Type
Description
List < T >
<T>getProtoEnumListInternal(int columnIndex, Function<Integer,ProtocolMessageEnum> method)
protected List<T> < T>getProtoEnumListInternal ( int columnIndex , Function<Integer , ProtocolMessageEnum > method )
Parameters
Name
Description
columnIndex
int
method
Function < Integer , ProtocolMessageEnum >
Returns
Type
Description
List < T >
<T>getProtoMessage(int columnIndex, T message)
public T < T>getProtoMessage ( int columnIndex , T message )
To get the proto message of generic type T from Struct.
Parameters
Name
Description
columnIndex
int
message
T
Returns
Type
Description
T
<T>getProtoMessage(String columnName, T message)
public T < T>getProtoMessage ( String columnName , T message )
To get the proto message of type T from Struct.
Parameters
Name
Description
columnName
String
message
T
Returns
Type
Description
T
<T>getProtoMessageInternal(int columnIndex, T message)
protected T < T>getProtoMessageInternal ( int columnIndex , T message )
Parameters
Name
Description
columnIndex
int
message
T
Returns
Type
Description
T
<T>getProtoMessageList(int columnIndex, T message)
public List<T> < T>getProtoMessageList ( int columnIndex , T message )
To get the proto message of generic type T from Struct.
Parameters
Name
Description
columnIndex
int
message
T
Returns
Type
Description
List < T >
<T>getProtoMessageList(String columnName, T message)
public List<T> < T>getProtoMessageList ( String columnName , T message )
To get the proto message of type T from Struct.
Parameters
Name
Description
columnName
String
message
T
Returns
Type
Description
List < T >
<T>getProtoMessageListInternal(int columnIndex, T message)
protected List<T> < T>getProtoMessageListInternal ( int columnIndex , T message )
Parameters
Name
Description
columnIndex
int
message
T
Returns
Type
Description
List < T >
checkNonNull(int columnIndex, Object columnNameForError)
protected void checkNonNull ( int columnIndex , Object columnNameForError )
Parameters
Name
Description
columnIndex
int
columnNameForError
Object
getBigDecimal(int columnIndex)
public BigDecimal getBigDecimal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
BigDecimal
getBigDecimal(String columnName)
public BigDecimal getBigDecimal ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
BigDecimal
getBigDecimalInternal(int columnIndex)
protected abstract BigDecimal getBigDecimalInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
BigDecimal
getBigDecimalList(int columnIndex)
public List<BigDecimal> getBigDecimalList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < BigDecimal >
getBigDecimalList(String columnName)
public List<BigDecimal> getBigDecimalList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < BigDecimal >
getBigDecimalListInternal(int columnIndex)
protected abstract List<BigDecimal> getBigDecimalListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < BigDecimal >
getBoolean(int columnIndex)
public boolean getBoolean ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
boolean
getBoolean(String columnName)
public boolean getBoolean ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
boolean
getBooleanArray(int columnIndex)
public boolean [] getBooleanArray ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
boolean []
getBooleanArray(String columnName)
public boolean [] getBooleanArray ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
boolean []
getBooleanArrayInternal(int columnIndex)
protected abstract boolean [] getBooleanArrayInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
boolean []
getBooleanInternal(int columnIndex)
protected abstract boolean getBooleanInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
boolean
getBooleanList(int columnIndex)
public List<Boolean> getBooleanList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Boolean >
getBooleanList(String columnName)
public List<Boolean> getBooleanList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < Boolean >
getBooleanListInternal(int columnIndex)
protected abstract List<Boolean> getBooleanListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Boolean >
getBytes(int columnIndex)
public ByteArray getBytes ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
com.google.cloud.ByteArray
getBytes(String columnName)
public ByteArray getBytes ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
com.google.cloud.ByteArray
getBytesInternal(int columnIndex)
protected abstract ByteArray getBytesInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
com.google.cloud.ByteArray
getBytesList(int columnIndex)
public List<ByteArray> getBytesList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < com.google.cloud.ByteArray >
getBytesList(String columnName)
public List<ByteArray> getBytesList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < com.google.cloud.ByteArray >
getBytesListInternal(int columnIndex)
protected abstract List<ByteArray> getBytesListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < com.google.cloud.ByteArray >
getColumnCount()
public int getColumnCount ()
Returns
Type
Description
int
getColumnIndex(String columnName)
public int getColumnIndex ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
int
getColumnType(int columnIndex)
public Type getColumnType ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
Type
getColumnType(String columnName)
public Type getColumnType ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
Type
getDate(int columnIndex)
public Date getDate ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
com.google.cloud.Date
getDate(String columnName)
public Date getDate ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
com.google.cloud.Date
getDateInternal(int columnIndex)
protected abstract Date getDateInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
com.google.cloud.Date
getDateList(int columnIndex)
public List<Date> getDateList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < com.google.cloud.Date >
getDateList(String columnName)
public List<Date> getDateList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < com.google.cloud.Date >
getDateListInternal(int columnIndex)
protected abstract List<Date> getDateListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < com.google.cloud.Date >
getDouble(int columnIndex)
public double getDouble ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
double
getDouble(String columnName)
public double getDouble ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
double
getDoubleArray(int columnIndex)
public double [] getDoubleArray ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
double []
getDoubleArray(String columnName)
public double [] getDoubleArray ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
double []
getDoubleArrayInternal(int columnIndex)
protected abstract double [] getDoubleArrayInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
double []
getDoubleInternal(int columnIndex)
protected abstract double getDoubleInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
double
getDoubleList(int columnIndex)
public List<Double> getDoubleList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Double >
getDoubleList(String columnName)
public List<Double> getDoubleList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < Double >
getDoubleListInternal(int columnIndex)
protected abstract List<Double> getDoubleListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Double >
getFloat(int columnIndex)
public float getFloat ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
float
getFloat(String columnName)
public float getFloat ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
float
getFloatArray(int columnIndex)
public float [] getFloatArray ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
float []
getFloatArray(String columnName)
public float [] getFloatArray ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
float []
getFloatArrayInternal(int columnIndex)
protected float [] getFloatArrayInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
float []
getFloatInternal(int columnIndex)
protected float getFloatInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
float
getFloatList(int columnIndex)
public List<Float> getFloatList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Float >
getFloatList(String columnName)
public List<Float> getFloatList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < Float >
getFloatListInternal(int columnIndex)
protected List<Float> getFloatListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Float >
getInterval(int columnIndex)
public Interval getInterval ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
Interval
getInterval(String columnName)
public Interval getInterval ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
Interval
getIntervalInternal(int columnIndex)
protected Interval getIntervalInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
Interval
getIntervalList(int columnIndex)
public List<Interval> getIntervalList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Interval >
getIntervalList(String columnName)
public List<Interval> getIntervalList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < Interval >
getIntervalListInternal(int columnIndex)
protected List<Interval> getIntervalListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Interval >
getJson(int columnIndex)
public String getJson ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
String
getJson(String columnName)
public String getJson ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
String
getJsonInternal(int columnIndex)
protected String getJsonInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
String
getJsonList(int columnIndex)
public List<String> getJsonList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < String >
getJsonList(String columnName)
public List<String> getJsonList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < String >
getJsonListInternal(int columnIndex)
protected List<String> getJsonListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < String >
getLong(int columnIndex)
public long getLong ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
long
getLong(String columnName)
public long getLong ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
long
getLongArray(int columnIndex)
public long [] getLongArray ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
long []
getLongArray(String columnName)
public long [] getLongArray ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
long []
getLongArrayInternal(int columnIndex)
protected abstract long [] getLongArrayInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
long []
getLongInternal(int columnIndex)
protected abstract long getLongInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
long
getLongList(int columnIndex)
public List<Long> getLongList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Long >
getLongList(String columnName)
public List<Long> getLongList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < Long >
getLongListInternal(int columnIndex)
protected abstract List<Long> getLongListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Long >
getPgJsonb(int columnIndex)
public String getPgJsonb ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
String
getPgJsonb(String columnName)
public String getPgJsonb ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
String
getPgJsonbInternal(int columnIndex)
protected String getPgJsonbInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
String
getPgJsonbList(int columnIndex)
public List<String> getPgJsonbList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < String >
getPgJsonbList(String columnName)
public List<String> getPgJsonbList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < String >
getPgJsonbListInternal(int columnIndex)
protected List<String> getPgJsonbListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < String >
getString(int columnIndex)
public String getString ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
String
getString(String columnName)
public String getString ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
String
getStringInternal(int columnIndex)
protected abstract String getStringInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
String
getStringList(int columnIndex)
public List<String> getStringList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < String >
getStringList(String columnName)
public List<String> getStringList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < String >
getStringListInternal(int columnIndex)
protected abstract List<String> getStringListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < String >
getStructList(int columnIndex)
public List<Struct> getStructList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Struct >
getStructList(String columnName)
public List<Struct> getStructList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < Struct >
getStructListInternal(int columnIndex)
protected abstract List<Struct> getStructListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < Struct >
getTimestamp(int columnIndex)
public Timestamp getTimestamp ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
com.google.cloud.Timestamp
getTimestamp(String columnName)
public Timestamp getTimestamp ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
com.google.cloud.Timestamp
getTimestampInternal(int columnIndex)
protected abstract Timestamp getTimestampInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
com.google.cloud.Timestamp
getTimestampList(int columnIndex)
public List<Timestamp> getTimestampList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < com.google.cloud.Timestamp >
getTimestampList(String columnName)
public List<Timestamp> getTimestampList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < com.google.cloud.Timestamp >
getTimestampListInternal(int columnIndex)
protected abstract List<Timestamp> getTimestampListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < com.google.cloud.Timestamp >
getUuid(int columnIndex)
public UUID getUuid ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
UUID
getUuid(String columnName)
public UUID getUuid ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
UUID
getUuidInternal(int columnIndex)
protected UUID getUuidInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
UUID
getUuidList(int columnIndex)
public List<UUID> getUuidList ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < UUID >
getUuidList(String columnName)
public List<UUID> getUuidList ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
List < UUID >
getUuidListInternal(int columnIndex)
protected List<UUID> getUuidListInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
List < UUID >
getValue(int columnIndex)
public Value getValue ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
Value
getValue(String columnName)
public Value getValue ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
Value
getValueInternal(int columnIndex)
protected Value getValueInternal ( int columnIndex )
Parameter
Name
Description
columnIndex
int
Returns
Type
Description
Value
isNull(String columnName)
public boolean isNull ( String columnName )
Parameter
Name
Description
columnName
String
Returns
Type
Description
boolean
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
