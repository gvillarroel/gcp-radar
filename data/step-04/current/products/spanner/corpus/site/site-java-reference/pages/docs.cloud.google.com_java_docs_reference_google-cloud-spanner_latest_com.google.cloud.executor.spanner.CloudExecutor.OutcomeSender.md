---
title: "Class CloudExecutor.OutcomeSender (6.111.1) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.OutcomeSender
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.CloudExecutor.OutcomeSender
  title: "Class CloudExecutor.OutcomeSender (6.111.1) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class CloudExecutor.OutcomeSender (6.111.1)
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
public class CloudExecutor . OutcomeSender
OutcomeSender is a utility class used for sending action outcomes back to the client. For read
actions, it buffers rows and sends partial read results in batches.
Inheritance
java.lang.Object >
CloudExecutor.OutcomeSender
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
OutcomeSender(int actionId, CloudClientExecutor.ExecutionFlowContext context)
public OutcomeSender ( int actionId , CloudClientExecutor . ExecutionFlowContext context )
Parameters
Name
Description
actionId
int
context
com.google.cloud.executor.spanner.CloudClientExecutor.ExecutionFlowContext
Methods
appendChangeStreamRecord(ChangeStreamRecord record)
public Status appendChangeStreamRecord ( ChangeStreamRecord record )
Append change stream record to result.
Parameter
Name
Description
record
ChangeStreamRecord
Returns
Type
Description
io.grpc.Status
appendRow(ValueList row)
public Status appendRow ( ValueList row )
Add another row to buffer. If buffer hits its size limit, buffered rows will be sent back.
Parameter
Name
Description
row
ValueList
Returns
Type
Description
io.grpc.Status
appendRowsModifiedInDml(Long rowsModified)
public void appendRowsModifiedInDml ( Long rowsModified )
Add rows modified in DML to result.
Parameter
Name
Description
rowsModified
Long
finishWithError(Status err)
public Status finishWithError ( Status err )
Send the last outcome with given error status.
Parameter
Name
Description
err
io.grpc.Status
Returns
Type
Description
io.grpc.Status
finishWithOK()
public Status finishWithOK ()
Send the last outcome with OK status.
Returns
Type
Description
io.grpc.Status
finishWithTransactionRestarted()
public Status finishWithTransactionRestarted ()
Send the last outcome with aborted error, this will set the transactionRestarted to true.
Returns
Type
Description
io.grpc.Status
getChangeStreamHeartbeatMilliSeconds()
public long getChangeStreamHeartbeatMilliSeconds ()
Returns
Type
Description
long
getChangeStreamRecordReceivedTimestamp()
public long getChangeStreamRecordReceivedTimestamp ()
Returns
Type
Description
long
getIsPartitionedChangeStreamQuery()
public boolean getIsPartitionedChangeStreamQuery ()
Returns
Type
Description
boolean
initForBatchRead(String table, String index)
public void initForBatchRead ( String table , String index )
Init the sender for batch read action, then set the table and index if there exists.
Parameters
Name
Description
table
String
index
String
initForChangeStreamQuery(long changeStreamHeartbeatMilliseconds, String changeStreamName, String partitionToken)
public void initForChangeStreamQuery ( long changeStreamHeartbeatMilliseconds , String changeStreamName , String partitionToken )
Init the sender for change stream query action.
Parameters
Name
Description
changeStreamHeartbeatMilliseconds
long
changeStreamName
String
partitionToken
String
initForQuery()
public void initForQuery ()
Init the sender for query action.
initForRead(String table, String index)
public void initForRead ( String table , String index )
Init the sender for read action, then set the table and index if there exists.
Parameters
Name
Description
table
String
index
String
sendOutcome(SpannerActionOutcome outcome)
public Status sendOutcome ( SpannerActionOutcome outcome )
Send the given SpannerActionOutcome.
Parameter
Name
Description
outcome
SpannerActionOutcome
Returns
Type
Description
io.grpc.Status
setRowType(StructType rowType)
public void setRowType ( StructType rowType )
Set the rowType for appending row.
Parameter
Name
Description
rowType
StructType
setTimestamp(Timestamp timestamp)
public void setTimestamp ( Timestamp timestamp )
Set the timestamp for commit.
Parameter
Name
Description
timestamp
Timestamp
updateChangeStreamRecordReceivedTimestamp(long changeStreamRecordReceivedTimestamp)
public void updateChangeStreamRecordReceivedTimestamp ( long changeStreamRecordReceivedTimestamp )
Update change stream record timestamp.
Parameter
Name
Description
changeStreamRecordReceivedTimestamp
long
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
