---
title: "Audit log example \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/audit-log-example
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/audit-log-example
  title: "Audit log example \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Audit log example
This page shows an example of a Data Access audit log entry that is generated
when you send a write request to Bigtable. For more
details about audit log entries, see Understanding audit logs . For a list of Bigtable fields that are
logged, see Audit log fields .
For brevity, some parts of the log entry are omitted, and some fields are
highlighted for emphasis.
{
pro t oPayload : {
@ t ype : "type.googleapis.com/google.cloud.audit.AuditLog" ,
s tatus : {},
au t he nt ica t io n I nf o : {
pri n cipalEmail : "user@example.com" ,
serviceAccou nt Delega t io n I nf o : [
{
f irs t Par t yPri n cipal : {
pri n cipalEmail : "service-123@compute-system.iam.gserviceaccount.com"
}
}
],
pri n cipalSubjec t ": " serviceAccou nt : 123- compu te @ developer.gserviceaccount.com "
},
requestMetadata: {
callerIp: " 12.586.9.1 ",
callerSuppliedUserAgent: " big ta ble -1.4.0 , jdk -1.8 , hbase -1.4.7 grpc - java - nett y/ 1.10.1 , gzip(g fe ) ",
requestAttributes: {
time: " 2020-12-10 T 03 : 22 : 59.373508362 Z ",
auth: {}
},
destinationAttributes: {}
},
serviceName: " big ta ble.googleapis.com " ,
methodName: " google.big ta ble.v 2. Big ta ble.Mu tate Row " ,
authorizationInfo: [
{
resource: " projec ts / test - projec t /i nstan ces/ test - i nstan ce/ ta bles/ test - ta ble ",
permission: " big ta ble. ta bles.mu tate Rows ",
granted: true,
resourceAttributes: {}
}
],
resourceName: " projec ts / test - projec t /i nstan ces/ test - i nstan ce/ ta bles/ test - ta ble ",
request: {
mutations: [
{
setCell: {
familyName: " c f 1 ",
}
}
],
tableName: " projec ts / test - projec t /i nstan ces/ test - i nstan ce/ ta bles/ test - ta ble ",
@type: " t ype.googleapis.com/google.big ta ble.v 2. Mu tate RowReques t ",
rowKey: " cm 93 LW tle Q== "
} ,
},
insertId: " 1 w t 6 rd na 0 ",
resource: {
type: " audi te d_resource ",
labels: {
service: " big ta ble.googleapis.com ",
project_id: " test - projec t ",
method: " google.big ta ble.v 2. Big ta ble.Mu tate Row "
}
},
timestamp: " 2019-05-27 T 16 : 24 : 56.135 Z ",
severity: " NOTICE ",
logName: " projec ts / test - projec t /logs/cloudaudi t .googleapis.com% 2 Fda ta _access " ,
receiveTimestamp: " 2020-05-27 T 04 : 56 : 47.427539594 Z"
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
