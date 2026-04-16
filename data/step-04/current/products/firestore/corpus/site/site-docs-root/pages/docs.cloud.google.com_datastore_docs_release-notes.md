---
title: "Datastore release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/release-notes
  title: "Datastore release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Resources
Send feedback
Datastore release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Datastore. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 23, 2026
Feature
Regional and Multi-Regional endpoints for the Datastore API
are now Generally Available ( GA ).
You can use a Regional or a Multi-Regional endpoint to ensure that your
application's requests are transmitted, stored and processed in the same region
or multi-region as your database's location.
To learn more, see the
Datastore regional endpoints
guide.
You can also use
Private Service Connect regional endpoints
and Private Service Connect backends
to connect to the regional and the multi-regional endpoints of the
Datastore API.
February 02, 2026
Feature
The Firestore databases page in the Google Cloud console now includes
a status column. Possible statuses include:
Ready
Cloning is in progress
Restoring from backup is in progress
Deleted
Failed
For the cloning and restore statuses, the status column updates upon completion.
December 22, 2025
Libraries
Python
2.22.0 (2025-12-12)
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#601) ( df729015 )
Python
2.23.0 (2025-12-16)
Features
support mTLS certificates when available (#658) ( 85c02328 )
Java
2.34.0-rc1 (2025-12-16)
Features
Add FindNearest API to the stable branch ( 3512ba2 )
Add firestoreInDatastoreMode for datastore emulator ( #1698 ) ( 50f106d )
add getNumber to AggregationResult (https://github.com/googleapis/java-datastore/issues/1851) ( #1861 ) ( b9c2c3f )
Add sample code for connection pooling ( #1947 ) ( 57981db )
add sample code for multiple inequalities indexing consideration query ( #1579 ) ( 1286792 )
enable flag for report generation ( #1991 ) ( 767a558 )
enable grpc configurator for client-side tracing ( #1886 ) ( 97004c8 )
enable hermetic library generation ( #1462 ) ( d142d9c )
implement query profile ( #1365 ) ( 2515ed6 )
introduce java.time methods and variables ( #1671 ) ( 5a78a80 )
Introducing Tracing with OpenTelemetry API #1537 ( #1576 ) ( 5440c22 )
Java datastore gapic upgrade ( #1824 ) ( a296d43 )
New PropertyMask field which allows partial commits, lookups, and query results ( #1455 ) ( ff5e397 )
next release from main branch is 2.27.0 ( #1781 ) ( d29f47c )
next release from main branch is 2.31.0 ( #1912 ) ( a74c46b )
remove @BetaApi annotations from get/setDatabaseId methods ( #1272 ) ( 2bd9a51 )
Support for field update operators in the Datastore API and resolution strategies when there is a conflict at write time ( b299266 )
update with latest from main ( #2018 ) ( 3a0daed )
Upgrade protobuf gen code to 4.33 ( #2019 ) ( c783809 )
Bug Fixes
checksum format ( #1178 ) ( 410b939 )
deprecate databaseId on datastore-v1-proto-client DatastoreOptions ( #1190 ) ( 12a3d27 )
deps: Update the Java code generator (gapic-generator-java) to 2.31.0 ( #1278 ) ( 01cced6 )
deps: Update the Java code generator (gapic-generator-java) to 2.32.0 ( #1293 ) ( f4ee0cb )
deps: Update the Java code generator (gapic-generator-java) to 2.37.0 ( #1355 ) ( bcc5668 )
deps: Update the Java code generator (gapic-generator-java) to 2.39.0 ( #1406 ) ( b265fb3 )
deps: update the Java code generator (gapic-generator-java) to 2.46.1 ( 678eee2 )
deps: update the Java code generator (gapic-generator-java) to 2.47.0 ( b299266 )
deps: update the Java code generator (gapic-generator-java) to 2.51.0 ( 106ee4d )
deps: update the Java code generator (gapic-generator-java) to 2.51.1 ( 90d8b30 )
deps: update the Java code generator (gapic-generator-java) to 2.52.0 ( 9594024 )
deps: update the Java code generator (gapic-generator-java) to 2.53.0 ( be0d0cd )
deps: update the Java code generator (gapic-generator-java) to 2.53.0 ( 93e45ed )
deps: update the Java code generator (gapic-generator-java) to 2.54.0 ( b9b302b )
deps: update the Java code generator (gapic-generator-java) to 2.55.1 ( ba1ad98 )
deps: update the Java code generator (gapic-generator-java) to 2.56.2 ( 1210f32 )
deps: update the Java code generator (gapic-generator-java) to 2.59.0 ( 910a6c2 )
deps: update the Java code generator (gapic-generator-java) to 2.60.2 ( 06372cd )
deps: update the Java code generator (gapic-generator-java) to 2.61.0 ( c7bd68d )
deps: update the Java code generator (gapic-generator-java) to 2.62.0 ( 90f5526 )
deps: update the Java code generator (gapic-generator-java) to 2.63.0 ( b9b95cb )
deps: update the Java code generator (gapic-generator-java) to 2.64.1 ( 216e771 )
doc: Add discriptions for TransactionCallable interface ( #1644 ) ( 173a883 )
doc: Fix return types for batch interface ( #1645 ) ( 1189211 )
Fix emulator command arg data-dir ( #1695 ) ( 9d53195 )
Migrate off TextPrinter's deprecated methods ( #1452 ) ( c3c1317 )
next release candidate ( 4824f2b )
remove 500 char path name limit ( #1865 ) ( 1097175 )
remove deprecated databaseId field in DatastoreOptions ( #1237 ) ( 05e25e5 )
remove QueryMode field from RunAggregationQueryRequest ( c1e7c62 )
remove QueryMode field from RunQueryRequest ( c1e7c62 )
remove ResultSetStats field from RunAggregationQueryResponse ( c1e7c62 )
remove ResultSetStats field from RunQueryResponse ( c1e7c62 )
remove types QueryMode, QueryPlan, ResultSetStats ( #1304 ) ( c1e7c62 )
sample: change update entity sample to use transaction ( #1633 ) ( c44f17a )
set the correct database id on the key parent when calling Key#getParent ( #1457 ) ( 992815d )
Update opentelemetry-sdk dependency to be test-only ( #1595 ) ( 9d719e8 )
Update opentelemetry.version to 1.42.1 to match the BOM version ( #1598 ) ( 23c5c26 )
Dependencies
autogen: set packed = false on field_behavior extension ( #1320 ) ( 9cfa1c3 )
Manage Opentelemetry version from Shared-Deps ( #1995 ) ( 5f6c500 )
update actions/checkout action to v4 ( #1390 ) ( 80dbca1 )
update dependency com.google.cloud:gapic-libraries-bom to v1.43.0 ( #1584 ) ( fae3b74 )
update dependency com.google.cloud:gapic-libraries-bom to v1.48.0 ( #1605 ) ( 5c6a678 )
update dependency com.google.cloud:gapic-libraries-bom to v1.49.0 ( #1693 ) ( 8160c28 )
update dependency com.google.cloud:gapic-libraries-bom to v1.50.0 ( #1708 ) ( b78660f )
update dependency com.google.cloud:gapic-libraries-bom to v1.51.0 ( #1726 ) ( 89f31a8 )
update dependency com.google.cloud:gapic-libraries-bom to v1.52.0 ( #1747 ) ( 592072b )
update dependency com.google.cloud:gapic-libraries-bom to v1.53.0 ( #1779 ) ( 8369118 )
update dependency com.google.cloud:gapic-libraries-bom to v1.60.0 ( #1799 ) ( bf2a33c )
update dependency com.google.cloud:gapic-libraries-bom to v1.61.0 ( #1901 ) ( beeb125 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.16.0 ( #1195 ) ( 6f0cad7 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.16.1 ( #1198 ) ( 8062be9 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.17.0 ( #1206 ) ( 2ad068b )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.18.0 ( #1215 ) ( aa82f01 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.19.0 ( #1226 ) ( 970ac96 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.20.0 ( #1247 ) ( c4e3533 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.21.0 ( #1280 ) ( ac253dc )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.22.0 ( #1291 ) ( 5a5c78e )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.23.0 ( #1301 ) ( ac947a5 )
update dependency com.google.cloud:sdk-platform-java-config to v3.24.0 ( #1310 ) ( 26e5f98 )
update dependency com.google.cloud:sdk-platform-java-config to v3.25.0 ( #1333 ) ( 0e64a7d )
update dependency com.google.cloud:sdk-platform-java-config to v3.27.0 ( #1352 ) ( 124d7ca )
update dependency com.google.cloud:sdk-platform-java-config to v3.28.0 ( #1372 ) ( 09db2a7 )
update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #1373 ) ( c6e63e5 )
update dependency com.google.cloud:sdk-platform-java-config to v3.29.0 ( #1403 ) ( d23dc4c )
update dependency com.google.cloud:sdk-platform-java-config to v3.30.0 ( #1426 ) ( ac3a1c1 )
update dependency com.google.cloud:sdk-platform-java-config to v3.30.1 ( #1443 ) ( 79f6c46 )
update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #1471 ) ( 42c643d )
update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #1492 ) ( d940c93 )
update dependency com.google.cloud:sdk-platform-java-config to v3.33.0 ( #1531 ) ( 9e52395 )
update dependency com.google.cloud:sdk-platform-java-config to v3.34.0 ( #1547 ) ( 8c5f595 )
update dependency com.google.cloud:sdk-platform-java-config to v3.35.0 ( #1561 ) ( 5a79fd8 )
update dependency com.google.cloud:sdk-platform-java-config to v3.36.0 ( #1590 ) ( 2db9e43 )
update dependency com.google.cloud:sdk-platform-java-config to v3.36.1 ( #1602 ) ( e1b7d4b )
update dependency com.google.cloud:sdk-platform-java-config to v3.38.0 ( #1632 ) ( 6453f1e )
update dependency com.google.cloud:sdk-platform-java-config to v3.39.0 ( #1640 ) ( fe61f66 )
update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1703 ) ( bf9537f )
update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #1725 ) ( 1cbaf22 )
update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1737 ) ( 7272a41 )
update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #1769 ) ( 7a86509 )
update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #1791 ) ( ab5ac8e )
update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #1823 ) ( 4d2026c )
update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #1841 ) ( ac393e6 )
update dependency com.google.cloud:sdk-platform-java-config to v3.48.0 ( #1847 ) ( 7ed3232 )
update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #1860 ) ( 0eff028 )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #1897 ) ( a8d99cd )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #1908 ) ( b10e0f0 )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1926 ) ( 1ecdf37 )
update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1936 ) ( a25433f )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #1944 ) ( 30a6e28 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #1963 ) ( 833a34a )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #1969 ) ( 2243471 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.3 ( #1973 ) ( 141ec94 )
update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #1980 ) ( 1520b7c )
update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #1994 ) ( 11265fd )
update dependency com.google.errorprone:error_prone_core to v2.22.0 ( #1194 ) ( b8f108a )
update dependency com.google.errorprone:error_prone_core to v2.23.0 ( #1213 ) ( c57db43 )
update dependency com.google.errorprone:error_prone_core to v2.24.1 ( #1274 ) ( 86cd785 )
update dependency com.google.errorprone:error_prone_core to v2.25.0 ( #1339 ) ( 0c6702e )
update dependency com.google.errorprone:error_prone_core to v2.26.0 ( #1361 ) ( 9442766 )
update dependency com.google.errorprone:error_prone_core to v2.26.1 ( #1363 ) ( 05fe5bc )
update dependency com.google.errorprone:error_prone_core to v2.27.0 ( #1411 ) ( a3f5a2c )
update dependency com.google.errorprone:error_prone_core to v2.27.1 ( #1421 ) ( 48d7daf )
update dependency com.google.errorprone:error_prone_core to v2.28.0 ( #1469 ) ( e3fac2b )
update dependency com.google.errorprone:error_prone_core to v2.31.0 ( #1523 ) ( 8d3af32 )
update dependency com.google.guava:guava-testlib to v33.1.0-jre ( #1368 ) ( 0195345 )
update dependency com.google.guava:guava-testlib to v33.2.0-jre ( #1422 ) ( 5a5dfdf )
update dependency com.google.guava:guava-testlib to v33.2.1-jre ( #1470 ) ( 614e930 )
update dependency com.google.guava:guava-testlib to v33.3.0-jre ( #1548 ) ( 18ba37f )
update dependency com.google.guava:guava-testlib to v33.3.1-jre ( #1592 ) ( 5d078a4 )
update dependency com.google.guava:guava-testlib to v33.4.0-jre ( #1694 ) ( b91a2af )
update dependency com.google.testparameterinjector:test-parameter-injector to v1.17 ( #1585 ) ( 8f74a49 )
update dependency org.easymock:easymock to v5.4.0 ( #1482 ) ( ee788a1 )
update dependency org.easymock:easymock to v5.5.0 ( #1666 ) ( 0333b07 )
update dependency org.easymock:easymock to v5.6.0 ( #1858 ) ( acc1513 )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.26 ( #1176 ) ( 76e3a71 )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.27 ( #1192 ) ( aa3bca1 )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.28 ( #1216 ) ( ce4eff2 )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.26 ( #1177 ) ( 7733004 )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.27 ( #1193 ) ( a628255 )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.28 ( #1217 ) ( 7d56b3c )
update dependency org.junit.vintage:junit-vintage-engine to v5.10.1 ( #1230 ) ( 05c7fc6 )
Update gapic-generator-java to 2.26.0 ( #1197 ) ( 2540282 )
update googleapis/sdk-platform-java action to v2.48.0 ( #1628 ) ( d3bce79 )
update googleapis/sdk-platform-java action to v2.49.0 ( #1638 ) ( 57598d7 )
update googleapis/sdk-platform-java action to v2.53.0 ( #1738 ) ( b8a7a5d )
update googleapis/sdk-platform-java action to v2.57.0 ( #1842 ) ( 0745906 )
update googleapis/sdk-platform-java action to v2.58.0 ( #1853 ) ( eef820d )
update googleapis/sdk-platform-java action to v2.59.1 ( #1880 ) ( 4fb9929 )
update googleapis/sdk-platform-java action to v2.60.0 ( #1898 ) ( 0921f86 )
Update protobuf to 25.2 in WORKSPACE ( #1311 ) ( 3f4ae83 )
update sdk platform java dependencies ( #1617 ) ( 6eaff23 )
update sdk platform java dependencies ( #1662 ) ( b4d3ab9 )
update sdk platform java dependencies ( #1685 ) ( 4372350 )
update sdk-platform-java-config to 3.55.0-rc1 ( #2017 ) ( a67694b )
Documentation
Update gapic upgrade installation instructions ( #1677 ) ( b3fbfcc )
December 15, 2025
Libraries
Java
2.33.1 (2025-12-11)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.2 ( b5f1285 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.2 ( #2011 ) ( c2062e7 )
Update googleapis/sdk-platform-java action to v2.64.2 ( #2012 ) ( 3ad3168 )
November 17, 2025
Libraries
Java
2.33.0 (2025-11-13)
Features
Enable flag for report generation ( #1991 ) ( 767a558 )
gRPC is supported for datastore.
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( 216e771 )
Dependencies
Manage Opentelemetry version from Shared-Deps ( #1995 ) ( 5f6c500 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #1994 ) ( 11265fd )
October 27, 2025
Feature
The database clone feature is now
supported at the General Availability ( GA ) level.
Libraries
Go
1.21.0 (2025-10-20)
Features
datastore: Support field transforms ( #12400 ) ( 7defdd0 )
Bug Fixes
datastore: Resolve data race on transaction state ( #12912 ) ( 011b148 ), refs #11038
datastore: Upgrade gRPC service registration func ( 8fffca2 )
Java
2.32.3 (2025-10-20)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.63.0 ( b9b95cb )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #1980 ) ( 1520b7c )
October 06, 2025
Libraries
Java
2.32.1 (2025-09-26)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #1969 ) ( 2243471 )
Java
2.32.2 (2025-10-04)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.3 ( #1973 ) ( 141ec94 )
September 15, 2025
Libraries
Java
2.32.0 (2025-09-12)
Features
Add sample code for connection pooling ( #1947 ) ( 57981db )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #1963 ) ( 833a34a )
September 02, 2025
Feature
Use Query insights to view query performance metrics for your database. This feature is now generally available ( GA ).
August 25, 2025
Libraries
Java
2.31.3 (2025-08-20)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #1944 ) ( 30a6e28 )
Java
2.31.4 (2025-08-22)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.0 ( 90f5526 )
August 18, 2025
Libraries
Java
2.31.2 (2025-08-08)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( c7bd68d )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1936 ) ( a25433f )
August 04, 2025
Libraries
Java
2.31.1 (2025-07-28)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 06372cd )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1926 ) ( 1ecdf37 )
August 01, 2025
Feature
You can clone an existing database at a selected timestamp into a new database. This feature is available in Preview .
July 21, 2025
Libraries
Java
2.31.0 (2025-07-14)
Features
Next release from main branch is 2.31.0 ( #1912 ) ( a74c46b )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.61.0 ( #1901 ) ( beeb125 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #1908 ) ( b10e0f0 )
June 30, 2025
Libraries
Java
2.30.0 (2025-06-26)
Features
Enable grpc configurator for client-side tracing ( #1886 ) ( 97004c8 )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.60.0 ( #1799 ) ( bf2a33c )
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #1897 ) ( a8d99cd )
Update googleapis/sdk-platform-java action to v2.59.1 ( #1880 ) ( 4fb9929 )
Update googleapis/sdk-platform-java action to v2.60.0 ( #1898 ) ( 0921f86 )
June 16, 2025
Libraries
Java
2.29.2 (2025-06-13)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 910a6c2 )
June 09, 2025
Libraries
Java
2.29.0 (2025-06-06)
Features
Add getNumber to AggregationResult (https://github.com/googleapis/java-datastore/issues/1851) ( #1861 ) ( b9c2c3f )
Bug Fixes
Remove 500 char path name limit ( #1865 ) ( 1097175 )
Dependencies
Update dependency org.easymock:easymock to v5.6.0 ( #1858 ) ( acc1513 )
Java
2.29.1 (2025-06-07)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #1860 ) ( 0eff028 )
May 26, 2025
Libraries
Java
2.28.2 (2025-05-16)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.48.0 ( #1847 ) ( 7ed3232 )
Update googleapis/sdk-platform-java action to v2.58.0 ( #1853 ) ( eef820d )
May 12, 2025
Libraries
Java
2.28.1 (2025-05-06)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #1841 ) ( ac393e6 )
Update googleapis/sdk-platform-java action to v2.57.0 ( #1842 ) ( 0745906 )
May 05, 2025
Libraries
Java
2.28.0 (2025-04-29)
Features
Java datastore gapic upgrade ( #1824 ) ( a296d43 )
April 28, 2025
Libraries
Java
2.27.2 (2025-04-25)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 1210f32 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #1823 ) ( 4d2026c )
April 22, 2025
Feature
Committed use discounts are now generally available (GA) for Firestore in Datastore mode in exchange for a commitment to continuously spend a certain amount on read/write/delete operations for one year or three years. For details, see Committed use discounts .
April 21, 2025
Libraries
Python
2.21.0 (2025-04-10)
Features
Add REST Interceptors which support reading metadata ( 7be9c4c )
Add support for opt-in debug logging ( 7be9c4c )
Bug Fixes
Allow protobuf 6.x ( #598 ) ( 7c1171b )
Backwards-compatibility for previous meaning format ( #603 ) ( ed92e8e )
Fix typing issue with gRPC metadata when key ends in -bin ( 7be9c4c )
April 09, 2025
Feature
You can now use Query insights to view query performance metrics for your database . This feature is in Preview .
March 24, 2025
Feature
Firestore in Datastore mode now supports multi-region nam7 United States (Central and East), which consists of regions us-central1 (Iowa) and us-east4 (Northern Virginia).
For a full list of supported locations, see Locations .
Libraries
Java
2.27.1 (2025-03-18)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( ba1ad98 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #1791 ) ( ab5ac8e )
March 10, 2025
Libraries
Java
2.27.0 (2025-03-05)
Features
Next release from main branch is 2.27.0 ( #1781 ) ( d29f47c )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( b9b302b )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.53.0 ( #1779 ) ( 8369118 )
March 04, 2025
Feature
Firestore in Datastore mode now supports the europe-north2 Stockholm region.
For a full list of supported locations, see Locations .
March 03, 2025
Libraries
Java
2.26.4 (2025-02-26)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #1769 ) ( 7a86509 )
February 24, 2025
Libraries
Java
2.26.3 (2025-02-21)
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.52.0 ( #1747 ) ( 592072b )
February 17, 2025
Libraries
Java
2.26.2 (2025-02-12)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( be0d0cd )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1737 ) ( 7272a41 )
Update googleapis/sdk-platform-java action to v2.53.0 ( #1738 ) ( b8a7a5d )
February 10, 2025
Libraries
Java
2.26.1 (2025-02-05)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 9594024 )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.51.0 ( #1726 ) ( 89f31a8 )
February 03, 2025
Libraries
Java
2.26.0 (2025-01-29)
Features
Add firestoreInDatastoreMode for datastore emulator ( #1698 ) ( 50f106d )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #1725 ) ( 1cbaf22 )
January 27, 2025
Libraries
Java
2.25.4 (2025-01-22)
Dependencies
Update dependency org.easymock:easymock to v5.5.0 ( #1666 ) ( 0333b07 )
January 20, 2025
Libraries
Java
2.25.3 (2025-01-15)
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.50.0 ( #1708 ) ( b78660f )
January 13, 2025
Libraries
Java
2.25.2 (2025-01-09)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 90d8b30 )
Fix emulator command arg data-dir ( #1695 ) ( 9d53195 )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.49.0 ( #1693 ) ( 8160c28 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1703 ) ( bf9537f )
Update dependency com.google.guava:guava-testlib to v33.4.0-jre ( #1694 ) ( b91a2af )
December 16, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.20.2 (2024-12-12)
Bug Fixes
Preserve list meanings ( #575 ) ( 266243b )
Java
Changes for google-cloud-datastore
2.25.1 (2024-12-13)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.0 ( 106ee4d )
Dependencies
Update sdk platform java dependencies ( #1685 ) ( 4372350 )
2.25.0 (2024-12-11)
Features
Introduce java.time methods and variables ( #1671 ) ( 5a78a80 )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.48.0 ( #1605 ) ( 5c6a678 )
Documentation
Update gapic upgrade installation instructions ( #1677 ) ( b3fbfcc )
November 25, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.24.3 (2024-11-18)
Dependencies
Update sdk platform java dependencies ( #1662 ) ( b4d3ab9 )
November 22, 2024
Feature
You can now use Active Assist to provide recommendations
and insights that improve the reliability of your databases. This feature is generally available (GA).
For more information, see Reliability recommender .
November 18, 2024
Feature
Firestore in Datastore mode now supports the northamerica-south1 Queretaro region.
For a full list of supported locations, see Locations .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.24.2 (2024-11-06)
Bug Fixes
doc: Add discriptions for TransactionCallable interface ( #1644 ) ( 173a883 )
doc: Fix return types for batch interface ( #1645 ) ( 1189211 )
November 11, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
9.2.1 (2024-11-06)
Bug Fixes
Address edge cases for excluding large properties when using save ( #1356 ) ( ceaff7e )
Create a release ( #1353 ) ( 536873e )
November 06, 2024
Feature
You can now use the managed bulk delete service to delete entities in bulk. This feature is in Preview .
For more information, see Bulk delete data .
November 04, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
9.2.0 (2024-10-30)
Features
Add FindNearest API to the stable branch ( #1333 ) ( 1d56433 )
Update Go Datastore import path ( #1261 ) ( bf3dafd )
Bug Fixes
Add excludeFromIndexes in the proper places for large properties of nested fields ( #1266 ) ( 9c7730a )
Query object description ( #1340 ) ( ad2c6c0 )
Go
Changes for datastore/admin/apiv1
1.20.0 (2024-10-29)
Features
datastore: Add FindNearest API to the stable branch ( #10980 ) ( f0b05e2 )
datastore: Support for field update operators in the Datastore API and resolution strategies when there is a conflict at write time ( 78d8513 )
Bug Fixes
datastore: Bump dependencies ( 2ddeb15 )
datastore: Do not delay on final transaction attempt ( #10824 ) ( 0d732cc )
datastore: Remove namespace from Key.String() ( 40229e6 )
datastore: Remove namespace from Key.String() ( #10684 ) ( #10823 ) ( 40229e6 )
datastore: Update google.golang.org/api to v0.203.0 ( 8bb87d5 )
datastore: Use local retryer in transactions ( #11050 ) ( 3ef61a2 )
datastore: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files. This change is expected to affect very few if any users of this client library. For more information, see https://togithub.com/googleapis/google-cloud-go/issues/11020. ( 8bb87d5 )
Java
Changes for google-cloud-datastore
2.24.1 (2024-10-28)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.39.0 ( #1640 ) ( fe61f66 )
Update googleapis/sdk-platform-java action to v2.49.0 ( #1638 ) ( 57598d7 )
October 28, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.24.0 (2024-10-24)
Features
Add FindNearest API to the stable branch ( 3512ba2 )
Bug Fixes
sample: Change update entity sample to use transaction ( #1633 ) ( c44f17a )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.38.0 ( #1632 ) ( 6453f1e )
Update googleapis/sdk-platform-java action to v2.48.0 ( #1628 ) ( d3bce79 )
October 21, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.23.0 (2024-10-14)
Features
Support for field update operators in the Datastore API and resolution strategies when there is a conflict at write time ( b299266 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.46.1 ( 678eee2 )
deps: Update the Java code generator (gapic-generator-java) to 2.47.0 ( b299266 )
Dependencies
Update sdk platform java dependencies ( #1617 ) ( 6eaff23 )
October 07, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.22.0 (2024-09-26)
Features
Add sample code for multiple inequalities indexing consideration query ( #1579 ) ( 1286792 )
Introducing Tracing with OpenTelemetry API #1537 ( #1576 ) ( 5440c22 )
Bug Fixes
Update opentelemetry-sdk dependency to be test-only ( #1595 ) ( 9d719e8 )
Update opentelemetry.version to 1.42.1 to match the BOM version ( #1598 ) ( 23c5c26 )
Dependencies
Update dependency com.google.cloud:gapic-libraries-bom to v1.43.0 ( #1584 ) ( fae3b74 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.36.0 ( #1590 ) ( 2db9e43 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.36.1 ( #1602 ) ( e1b7d4b )
Update dependency com.google.guava:guava-testlib to v33.3.1-jre ( #1592 ) ( 5d078a4 )
Update dependency com.google.testparameterinjector:test-parameter-injector to v1.17 ( #1585 ) ( 8f74a49 )
October 02, 2024
Feature
You can now use property transforms like increment in the REST API. This feature is in Preview .
October 01, 2024
Feature
You can now use customer-managed encryption keys (CMEK) in Datastore to protect your data. This feature is generally available (GA) behind an allow-list.
For more information, see Customer-managed encryption keys (CMEK) .
Feature
The Java client library for Firestore in Datastore mode now supports client-side tracing . This feature is in Preview .
September 16, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.21.3 (2024-09-11)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.35.0 ( #1561 ) ( 5a79fd8 )
Update dependency com.google.errorprone:error_prone_core to v2.31.0 ( #1523 ) ( 8d3af32 )
Update dependency com.google.guava:guava-testlib to v33.3.0-jre ( #1548 ) ( 18ba37f )
Update dependency org.easymock:easymock to v5.4.0 ( #1482 ) ( ee788a1 )
September 09, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-ndb
2.3.2 (2024-07-15)
Bug Fixes
Allow Protobuf 5.x ( #991 ) ( 5812a3c )
August 26, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.19.0 (2024-08-22)
Features
datastore: Reference new protos ( #10724 ) ( d8887df )
1.18.0 (2024-08-21)
Features
datastore: Add support for Go 1.23 iterators ( 84461c0 )
datastore: Start generating datastorepb protos ( 946a5fc )
Bug Fixes
datastore: Bump google.golang.org/api@v0.187.0 ( 8fa9e39 )
datastore: Bump google.golang.org/grpc@v1.64.1 ( 8ecc4e9 )
datastore: Ignore field mismatch errors ( #8694 ) ( 6625d12 )
datastore: Update dependencies ( 257c40b )
datastore: Update google.golang.org/api to v0.191.0 ( 5b32644 )
Java
Changes for google-cloud-datastore
2.21.2 (2024-08-22)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.34.0 ( #1547 ) ( 8c5f595 )
August 19, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.20.1 (2024-08-14)
Bug Fixes
Allow protobuf 5.x; require protobuf >=3.20.2 ( #560 ) ( ad50e36 )
August 12, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.20.0 (2024-08-07)
Features
Add new types ExplainOptions, ExplainMetrics, PlanSummary, ExecutionStats ( #521 ) ( dfbee2d )
Add new_transaction support ( #499 ) ( 43855dd )
Implement query profiling ( #542 ) ( 1500f70 )
New PropertyMask field which allows partial commits, lookups, and query results ( 7fd218b )
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( #555 ) ( 5e773cb )
Using end_cursor instead of skipped_cursor in Iterator to fix rare bug. ( #552 ) ( 4982f9a )
Java
Changes for google-cloud-datastore
2.21.1 (2024-08-06)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.33.0 ( #1531 ) ( 9e52395 )
2.21.0 (2024-07-31)
Features
Enable hermetic library generation ( #1462 ) ( d142d9c )
July 29, 2024
Feature
You can now apply range and inequality filters to multiple fields in a query. This feature is generally available (GA).
For more information, see Query with range and inequality filters on multiple fields overview .
July 01, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
9.1.0 (2024-06-24)
Features
New transaction feature ( #1239 ) ( cdd2ee9 )
Bug Fixes
deps: Update dependency sinon to v18 ( #1250 ) ( b7ff5c8 )
Java
Changes for google-cloud-datastore
2.20.2 (2024-06-28)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #1492 ) ( d940c93 )
June 28, 2024
Feature
Scheduled backups are now available in GA.
June 17, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.17.1 (2024-06-10)
Bug Fixes
datastore: Regenerate protos in new namespace ( #10158 ) ( 8875511 ), refs #10155
datastore: Update retry transaction logic to be inline with Spanner ( #10349 ) ( 5929a6e )
June 10, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.20.1 (2024-06-04)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #1471 ) ( 42c643d )
Update dependency com.google.errorprone:error_prone_core to v2.28.0 ( #1469 ) ( e3fac2b )
Update dependency com.google.guava:guava-testlib to v33.2.1-jre ( #1470 ) ( 614e930 )
June 03, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
9.0.0 (2024-05-09)
⚠ BREAKING CHANGES
An existing method UpdateVehicleLocation is removed from service VehicleService ( #1248 )
Features
Query profiling feature ( #1221 ) ( 414dec4 )
Bug Fixes
An existing method UpdateVehicleLocation is removed from service VehicleService ( #1248 ) ( ba79118 )
Read time should be used for transaction reads ( #1171 ) ( 73a0a39 )
Java
Changes for google-cloud-datastore
2.20.0 (2024-05-27)
Features
New PropertyMask field which allows partial commits, lookups, and query results ( #1455 ) ( ff5e397 )
Bug Fixes
Migrate off TextPrinter's deprecated methods ( #1452 ) ( c3c1317 )
Set the correct database id on the key parent when calling Key#getParent ( #1457 ) ( 992815d )
May 20, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.19.3 (2024-05-16)
Dependencies
Update actions/checkout action to v4 ( #1390 ) ( 80dbca1 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.30.1 ( #1443 ) ( 79f6c46 )
May 13, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.17.0 (2024-05-08)
Features
datastore: Add query profiling ( #9200 ) ( b0235bb )
Java
Changes for google-cloud-datastore
2.19.2 (2024-05-03)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.39.0 ( #1406 ) ( b265fb3 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.30.0 ( #1426 ) ( ac3a1c1 )
Update dependency com.google.errorprone:error_prone_core to v2.27.0 ( #1411 ) ( a3f5a2c )
Update dependency com.google.errorprone:error_prone_core to v2.27.1 ( #1421 ) ( 48d7daf )
Update dependency com.google.guava:guava-testlib to v33.2.0-jre ( #1422 ) ( 5a5dfdf )
May 06, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.16.0 (2024-04-29)
Features
datastore: Adding BeginLater and transaction state ( #8984 ) ( 5f8e21f )
datastore: Adding BeginLater transaction option ( #8972 ) ( 4067f4e )
datastore: Adding reserve IDs support ( #9027 ) ( 2d66de0 )
datastore: Configure both mTLS and TLS endpoints for Datastore client ( #9653 ) ( 38bd793 )
datastore: Respect DATASTORE_EMULATOR_HOST setting ( #9789 ) ( 7259373 )
Bug Fixes
datastore: Add explicit sleep before read time use ( #9080 ) ( 0538be4 )
datastore: Adding tracing to run method ( #9602 ) ( a5e197c )
datastore: Bump x/net to v0.24.0 ( ba31ed5 )
datastore: Enable universe domain resolution options ( fd1d569 )
datastore: Prevent panic on GetMulti failure ( #9656 ) ( 55845ad )
datastore: Update protobuf dep to v1.33.0 ( 30b038d )
April 29, 2024
Feature
Firestore in Datastore mode now supports the us-south1 Dallas region.
For a full list of supported locations, see Locations .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.19.1 (2024-04-19)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.29.0 ( #1403 ) ( d23dc4c )
April 08, 2024
Feature
Firestore in Datastore mode now supports the following additional locations:
africa-south1 Johannesburg
europe-north1 Finland
europe-southwest1 Madrid
europe-west10 Berlin
europe-west12 Turin
europe-west8 Milan
southamerica-west1 Santiago
us-central1 Iowa
us-east5 Columbus
For a full list of supported locations, see Locations .
April 05, 2024
Feature
Support for Customer-managed encryption keys (CMEK) . This feature is in Preview .
April 01, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
8.6.0 (2024-03-25)
Features
Add new types ExplainOptions, ExplainMetrics, PlanSummary, ExecutionStats ( #1241 ) ( 6c409d5 )
Nodejs transaction redesign feature branch ( #1235 ) ( 1585d4a )
Bug Fixes
deps: Update dependency async-mutex to ^0.5.0 ( #1240 ) ( 0ba1281 )
Java
Changes for google-cloud-datastore
2.19.0 (2024-03-25)
Features
Implement query profile ( #1365 ) ( 2515ed6 )
March 27, 2024
Feature
Datastore now supports using range and inequality filters on multiple fields in a single query. This feature is in Preview .
Feature
Support for Query Explain . This feature is in Preview .
Query Explain lets you submit queries and receive detailed query plan, billing and performance statistics on query execution in return. It helps you understand how your queries are executed, showing you inefficiencies.
It functions like the EXPLAIN [ANALYZE] operation in many relational database systems.
For more information, see the guide for Query Explain .
March 25, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-ndb
2.3.1 (2024-03-16)
Bug Fixes
grpc: Fix large payload handling when using the emulator. ( #975 ) ( d9162ae )
Remove uses of six. #913 ( #958 ) ( e17129a )
Show a non-None error for core_exception.Unknown errors. ( #968 ) ( 66e61cc )
Documentation
Document how to run system tests against the emulator. ( #963 ) ( 47db5b9 )
Note to use functools.wrap instead of utils.wrapping. ( #966 ) ( 5e9f3d6 )
Tell users of utils.wrapping to use functools.wraps ( #967 ) ( 042645b )
Java
Changes for google-cloud-datastore
2.18.6 (2024-03-18)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.37.0 ( #1355 ) ( bcc5668 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.28.0 ( #1372 ) ( 09db2a7 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #1373 ) ( c6e63e5 )
Update dependency com.google.errorprone:error_prone_core to v2.26.0 ( #1361 ) ( 9442766 )
Update dependency com.google.errorprone:error_prone_core to v2.26.1 ( #1363 ) ( 05fe5bc )
Update dependency com.google.guava:guava-testlib to v33.1.0-jre ( #1368 ) ( 0195345 )
March 05, 2024
Feature
You can now use the Firestore emulator to test Firestore in Datastore mode behavior. Use gcloud emulators firestore start with --database-mode=datastore-mode .
March 04, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-ndb
2.3.0 (2024-03-01)
Features
Add field information when raising validation errors. ( #956 ) ( 17caf0b )
Add Python 3.12 ( #949 ) ( b5c8477 )
Add support for google.cloud.ndb. version ( #929 ) ( 42b3f01 )
Add support for server side NOT_IN filter. ( #957 ) ( f0b0724 )
Allow queries using server side IN. ( #954 ) ( 2646cef )
Introduce compatibility with native namespace packages ( #933 ) ( ccae387 )
Use server side != for queries. ( #950 ) ( 106772f )
Bug Fixes
Compressed repeated to uncompressed property ( #772 ) ( dab9edf )
Repeated structured property containing blob property with legacy_data ( #817 ) ( #946 ) ( 455f860 )
Documentation
init : Note that Firestore in Datastore Mode is supported ( #919 ) ( 0fa75e7 )
Correct read_consistency docs. ( #948 ) ( 7e8481d )
Fix a mistaken ID description ( #943 ) ( 5103813 )
Show how to use named databases ( #932 ) ( 182fe4e )
January 29, 2024
Feature
Eventarc events and Firestore events for Cloud Functions (2nd gen) are now supported at the General Availability ( GA ) level.
January 15, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.18.0 (2024-01-08)
Features
Remove @BetaApi annotations from get/setDatabaseId methods ( #1272 ) ( 2bd9a51 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.21.0 ( #1280 ) ( ac253dc )
Update dependency com.google.errorprone:error_prone_core to v2.24.1 ( #1274 ) ( 86cd785 )
January 10, 2024
Feature
The ability to create multiple databases per project is now supported at the General Availability level .
January 02, 2024
Feature
Support for the europe-west1 (Belgium) and me-central2 (Dammam) locations .
December 20, 2023
Feature
Index scans in Key Visualizer are now supported at the General Availability ( GA ) level.
December 18, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
8.3.0 (2023-12-11)
Features
Allow the user to set fallback to rest ( #1203 ) ( 8a1fa54 )
Bug Fixes
Change tests to use new filter and use gax warn for warning just once ( #1185 ) ( 532711b )
deps: Update dependency sinon to v17 ( #1183 ) ( 52adb5e )
Python
Changes for google-cloud-datastore
2.19.0 (2023-12-10)
Features
Add support for Python 3.12 ( #498 ) ( d1d60fa )
Introduce compatibility with native namespace packages ( #497 ) ( 87b3392 )
Bug Fixes
Use retry_async instead of retry in async client ( 4e15ce6 )
Documentation
Minor formatting ( #476 ) ( b13b15c )
December 15, 2023
Feature
You can now create and delete non-default databases in the Google Cloud console.
December 04, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.17.6 (2023-11-30)
Bug Fixes
Remove deprecated databaseId field in DatastoreOptions ( #1237 ) ( 05e25e5 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.20.0 ( #1247 ) ( c4e3533 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.1 ( #1230 ) ( 05c7fc6 )
November 10, 2023
Feature
Support for Firestore in Datastore mode point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now generally available (GA) .
November 06, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.17.5 (2023-11-02)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.19.0 ( #1226 ) ( 970ac96 )
October 30, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.17.4 (2023-10-23)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.18.0 ( #1215 ) ( aa82f01 )
Update dependency com.google.errorprone:error_prone_core to v2.23.0 ( #1213 ) ( c57db43 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.28 ( #1216 ) ( ce4eff2 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.28 ( #1217 ) ( 7d56b3c )
October 16, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.17.3 (2023-10-10)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.17.0 ( #1206 ) ( 2ad068b )
October 09, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
8.2.1 (2023-10-03)
Bug Fixes
Make aggregation query requests run properly inside a transaction ( #1166 ) ( 263804b )
8.2.0 (2023-10-02)
Features
Support for using multiple databases in datastore ( #1090 ) ( 10ce563 )
Bug Fixes
Allow users to set environment variable to connect to emulator running on docker ( #1164 ) ( a41741b )
Check property existence for exclude from indexes with wildcard ( #1114 ) ( e6b8ef7 )
deps: Update dependency sinon to v16 ( #1150 ) ( 0d8b715 )
Go
Changes for datastore/admin/apiv1
1.15.0 (2023-10-06)
Features
datastore: Adding dynamic routing header ( #8364 ) ( d235a42 )
Bug Fixes
datastore: Allow saving nested byte slice ( #8540 ) ( 8e53787 )
datastore: Handle loading nil values ( #8544 ) ( 25dbb9c )
October 02, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.17.2 (2023-09-26)
Bug Fixes
Checksum format ( #1178 ) ( 410b939 )
Deprecate databaseId on datastore-v1-proto-client DatastoreOptions ( #1190 ) ( 12a3d27 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.16.0 ( #1195 ) ( 6f0cad7 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.16.1 ( #1198 ) ( 8062be9 )
Update dependency com.google.errorprone:error_prone_core to v2.22.0 ( #1194 ) ( b8f108a )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.26 ( #1176 ) ( 76e3a71 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.27 ( #1192 ) ( aa3bca1 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.26 ( #1177 ) ( 7733004 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.27 ( #1193 ) ( a628255 )
Update gapic-generator-java to 2.26.0 ( #1197 ) ( 2540282 )
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-ndb
2.2.2 (2023-09-19)
Documentation
query: Document deprecation of Query.default_options ( #915 ) ( a656719 ), closes #880
Change
Raised the maximum number of composite indexes from 200 to 500 for projects with billing enabled. The limit is 200 for projects without billing enabled.
For more information about limits, see Limits .
September 25, 2023
Feature
Support for europe-west9 (Paris), me-central1 (Doha), and me-west1 (Tel Aviv) .
September 18, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
8.1.0 (2023-09-07)
Features
Sum and average aggregation queries ( #1097 ) ( 44ba6f8 )
Bug Fixes
Simplify logic for HTTP/1.1 REST fallback option ( #1138 ) ( 4cefaea )
Python
Changes for google-cloud-ndb
2.2.1 (2023-09-15)
Bug Fixes
deps: Add missing six dependency ( #912 ) ( 3b1ffb7 )
Documentation
Mark database argument for get_by_id and its async counterpart as ignored ( #905 ) ( b0f4310 )
Java
Changes for google-cloud-datastore
2.17.1 (2023-09-11)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.15.0 ( #1184 ) ( 6cbb795 )
Update dependency org.easymock:easymock to v5.2.0 ( #1180 ) ( 3e62380 )
Documentation
Marking AggregationResult#get as Obsolete ( #1185 ) ( 252f854 )
September 11, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.18.0 (2023-09-05)
Features
Add support for Sum and Avg aggregation query ( #437 ) ( e99120d )
Documentation
Update property requirement specifications ( #470 ) ( 795ce81 )
August 28, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.14.0 (2023-08-22)
Features
datastore: SUM and AVG aggregations ( #8307 ) ( a9fff18 )
datastore: Support aggregation query in transaction ( #8439 ) ( 37681ff )
Bug Fixes
datastore: Correcting string representation of Key ( #8363 ) ( 4cb1211 )
datastore: Fix NoIndex for array property ( #7674 ) ( 01951e6 )
Documentation
datastore/admin: Specify limit for properties in Index message in Datastore Admin API ( b890425 )
Java
Changes for google-cloud-datastore
2.17.0 (2023-08-22)
Features
Publish proto definitions for SUM/AVG in Datastore ( #1157 ) ( 954320a )
Sum and Avg aggregation feature ( #1067 ) ( 56d1001 )
Dependencies
Update dependency com.google.errorprone:error_prone_core to v2.21.1 ( #1163 ) ( 83158b6 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.24 ( #1165 ) ( 4094c70 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.24 ( #1166 ) ( 70cc371 )
Documentation
Update property requirement specifications ( #1169 ) ( c908837 )
Feature
The sum() and avg() aggregation functions are now available for Firestore in Datastore mode.
August 25, 2023
Feature
You can now view and list multiple databases using the Google Cloud console. This feature is in Preview .
Feature
Scheduled backups now available in Preview .
August 14, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
8.0.0 (2023-08-09)
⚠ BREAKING CHANGES
upgrade to Node 14
Miscellaneous Chores
Upgrade to Node 14 ( b7904f1 )
Python
Changes for google-cloud-datastore
2.17.0 (2023-08-09)
Documentation
Minor formatting in Datastore Admin API ( cfcd0c2 )
Specify limit for properties in Index message in Datastore Admin API ( cfcd0c2 )
August 07, 2023
Feature
You can now visualize heatmap pattern for entity keys and make better workload pattern predictions. To learn more, see Key Visualizer . This feature is in Preview .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.16.3 (2023-08-02)
Documentation
Specify limit for properties in Index message in Datastore Admin API ( #1149 ) ( 00a696d )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.14.0 ( #1159 ) ( fcf07d4 )
Update dependency com.google.errorprone:error_prone_core to v2.21.0 ( #1158 ) ( 08dbb3a )
July 31, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.15.1 (2023-07-28)
Dependencies
Shared-dependencies 3.13.0 ( #1146 ) ( 542c628 )
Documentation
Fix javadoc errors ( #1126 ) ( #1153 ) ( 00c68b0 )
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.13.0 (2023-07-26)
Features
datastore: Multi DB support ( #8276 ) ( e4d07a0 )
Python
Changes for google-cloud-ndb
2.2.0 (2023-07-26)
Features
Named db support ( #882 ) ( f5713b0 )
Documentation
query: Fix Py2-style print statements ( #878 ) ( a3a181a )
Java
Changes for google-cloud-datastore
2.16.2 (2023-07-25)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.1 ( #1136 ) ( f4d66af )
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.0 ( #1139 ) ( a170611 )
July 17, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.16.1 (2023-07-10)
Documentation
Fix javadoc errors ( #1126 ) ( d4b11bb )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1130 ) ( 2181847 )
July 14, 2023
Feature
Support for Firestore in Datastore mode point-in-time recovery (PITR) feature that provides protection against accidental deletion or writes is now available in Preview .
July 11, 2023
Feature
Support for the northamerica-northeast2 (Toronto) region.
July 10, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.12.1 (2023-07-07)
Bug Fixes
datastore: Return error from RunAggregationQuery ( #8222 ) ( a9b67cf )
Python
Changes for google-cloud-datastore
2.16.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #452 ) ( 05f20dc )
July 07, 2023
Feature
Multiple databases now available in Preview .
July 03, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.12.0 (2023-06-27)
Features
datastore: Update all direct dependencies ( b340d03 )
Bug Fixes
datastore: Change aggregation result to return generic value ( #8167 ) ( 9d3d17b )
datastore: Handling nil slices in save and query ( #8043 ) ( 36f01e9 )
datastore: PKG:datastore TYPE:datastoreClient FUNC:RunAggregationQuery ( #7803 ) ( 1f050ea )
datastore: REST query UpdateMask bug ( df52820 )
datastore: Update grpc to v1.55.0 ( 1147ce0 )
June 27, 2023
Feature
Eventarc events and Firestore in Datastore mode events for Cloud Functions (2nd gen) now available in Preview .
June 26, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.16.0 (2023-06-21)
Features
Named database support ( #439 ) ( abf0060 )
Java
Changes for google-cloud-datastore
2.16.0 (2023-06-22)
Features
Remove BetaApi annotation from OR query API ( #1118 ) ( b08dc9a )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.12.0 ( #1121 ) ( 65dd46d )
Update dependency com.google.errorprone:error_prone_core to v2.20.0 ( #1115 ) ( 381d76e )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.23 ( #1114 ) ( 7f58868 )
June 20, 2023
Announcement
OR queries are now supported at the General Availability level .
June 19, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.15.0 (2023-06-09)
Features
Multiple dbs support ( #1102 ) ( 7887f32 )
Bug Fixes
Add some missing annotations and fix equals/hashcode for DatastoreOptions ( #1106 ) ( c4a79ef )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.11.0 ( #1104 ) ( fc9b091 )
May 23, 2023
Feature
Support for the asia-south2 (Delhi) region.
May 01, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.14.5 (2023-04-27)
Bug Fixes
Using namespace from DatastoreOptions if aggregation query is not configured with one. ( #1055 ) ( ac21ef6 ), closes #1054
2.14.4 (2023-04-26)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.8.0 ( #1052 ) ( 412be61 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.9.3 ( #1056 ) ( 2a871e2 )
Documentation
Remove @BetaApi annotations for count aggregations ( #1051 ) ( b8bdaa2 )
April 24, 2023
Feature
count() queries are now supported at the General Availability level .
April 17, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
7.5.1 (2023-04-11)
Bug Fixes
Allow user to set custom endpoints ( #1101 ) ( e79fa49 )
Java
Changes for google-cloud-datastore
2.14.3 (2023-04-13)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.7.0 ( #1044 ) ( 3ecd20a )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.21 ( #1045 ) ( d18ff7c )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.21 ( #1046 ) ( 0d3f78e )
April 14, 2023
Feature
The Firestore in Datastore mode documentation has been updated to include guidance on using regional endpoints. For details, see Regional endpoints .
April 03, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.15.1 (2023-03-24)
Documentation
Fix formatting of request arg in docstring ( #428 ) ( da86a02 )
Improve query API documentation ( #430 ) ( 915daf5 )
Java
Changes for google-cloud-datastore
2.14.2 (2023-03-29)
Documentation
Adds OR filter sample ( #1032 ) ( e319efa )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.6.0 ( #1035 ) ( b2f4cb3 )
Update gapic-generator-java to 2.16.0 ( 8c96c55 )
March 29, 2023
Change
Firestore in Datastore mode no longer limits the number of entities that can be passed to a Commit operation. Previously, the limit was 500. The limit for request size still applies.
March 24, 2023
Feature
OR queries now available in Preview .
March 20, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-ndb
2.1.1 (2023-02-28)
Bug Fixes
Query options were not respecting use_cache ( #873 ) ( 802d88d ), closes #752
Documentation
Note that we support Python 3.11 in CONTRIBUTING file ( #872 ) ( 982ee5f )
Use cached versions of Cloud objects.inv files ( #863 ) ( 4471e2f ), closes #862
March 13, 2023
Feature
Support for the europe-west4 (Netherlands) region.
March 06, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.14.0 (2023-02-28)
Features
Enable "rest" transport in Python for services supporting numeric enums ( 6785908 )
Documentation
Minor documentation formatting and cleanup ( 6785908 )
Java
Changes for google-cloud-datastore
2.13.6 (2023-03-02)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.4.0 ( #1001 ) ( a230e03 )
February 27, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
7.3.2 (2023-02-17)
Bug Fixes
Allow filtering null values ( #1067 ) ( b89fa21 )
Java
Changes for google-cloud-datastore
2.13.5 (2023-02-17)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.3.0 ( #994 ) ( ce8df48 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.20 ( #989 ) ( f71ccd9 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.20 ( #990 ) ( 5e984c8 )
February 20, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
7.3.1 (2023-02-17)
Bug Fixes
deps: Roll back dependency @google-cloud/datastore to ^7.2.0 ( #1069 ) ( 1677c53 )
7.3.0 (2023-02-16)
February 13, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
7.2.0 (2023-02-09)
Features
Add dynamic routing header annotation to DatastoreV1 ( b023ab4 )
Added Snooze API support ( b023ab4 )
Added SuggestConversationSummary RPC ( b023ab4 )
New transaction options for datastoreV1 ( b023ab4 )
Bug Fixes
deps: Update dependency sinon to v15 ( #1020 ) ( a61258c )
Java
Changes for google-cloud-datastore
2.13.4 (2023-02-06)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.2.0 ( #975 ) ( f94bd37 )
January 30, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.13.2 (2023-01-23)
Bug Fixes
Fix system test using utc timezone ( #406 ) ( 93537ef )
2.13.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 9cec031 )
Documentation
Add documentation for enums ( 9cec031 )
Java
Changes for google-cloud-datastore
2.13.3 (2023-01-23)
Bug Fixes
java: Skip fixing poms for special modules ( #1744 ) ( #964 ) ( c89b27a )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.2 ( #966 ) ( 78e9e8e )
January 23, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/datastore
7.1.0 (2023-01-18)
Features
Add datastore aggregation query APIs ( #1008 ) ( d5c2cb1 )
Add the count aggregate function ( #972 ) ( 76adfc6 )
Snapshot reads ( #963 ) ( 0ecca86 )
Support regapic LRO ( #957 ) ( 99778fb )
Bug Fixes
Allow passing gax instance to client constructor ( #974 ) ( 386b9c7 )
Better support for fallback mode ( #967 ) ( 0447d87 )
Bring back LRO mixin ( #1009 ) ( 1d8de5f )
Change import long to require ( #968 ) ( 5e710f2 )
deps: Update dependency @google-cloud/promisify to v3 ( #942 ) ( 7b35856 )
deps: Use google-gax v3.5.2 ( #1013 ) ( 1753eae )
Do not import the whole google-gax from proto JS ( #1553 ) ( #973 ) ( 9550bbc )
Preserve default values in x-goog-request-params header ( #979 ) ( 2b80e1e )
Regenerated protos JS and TS definitions ( #1016 ) ( d0ae656 )
Remove pip install statements ( #1546 ) ( #970 ) ( 2225fc7 )
Use google-gax v3.3.0 ( 9550bbc )
Python
Changes for google-cloud-datastore
2.13.0 (2023-01-14)
Features
Add dynamic routing header annotation to DatastoreV1 ( #400 ) ( 1043ba3 )
New transaction options for datastoreV1 ( #402 ) ( 906d026 )
January 16, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.12.0 (2023-01-10)
Features
Add support for python 3.11 ( #396 ) ( 19aca56 )
Java
Changes for google-cloud-datastore
2.13.2 (2023-01-10)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.1 ( #953 ) ( fdffe1e )
Update dependency com.google.errorprone:error_prone_core to v2.18.0 ( #951 ) ( ac5c83e )
Update dependency org.junit.vintage:junit-vintage-engine to v5.9.2 ( #954 ) ( b0b72bb )
January 09, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.11.1 (2022-12-09)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 6f6bb63 )
Drop usage of pkg_resources ( 6f6bb63 )
Fix timeout default values ( 6f6bb63 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( 6f6bb63 )
Java
Changes for google-cloud-datastore
2.13.1 (2023-01-03)
Dependencies
Update dependency com.google.errorprone:error_prone_core to v2.17.0 ( #944 ) ( b0fd082 )
Update dependency org.easymock:easymock to v5.1.0 ( #945 ) ( 7774aac )
December 19, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-ndb
2.1.0 (2022-12-15)
Features
Support client_options for clients ( #815 ) ( 6f94f40 )
Bug Fixes
zlib: Accomodate different Zlib compression levels ( #852 ) ( c1ab83b )
Feature
Support for the australia-southeast2 (Melbourne) region.
December 12, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-ndb
2.0.0 (2022-12-06)
⚠ BREAKING CHANGES
dependencies: Upgrade to google-cloud-datastore >= 2.7.2
Features
dependencies: Upgrade to google-cloud-datastore >= 2.7.2 ( 12bbcb5 )
Bug Fixes
Correct access to SerializeToString, CopyFrom, and MergeFromString ( 12bbcb5 )
Fix enum namespaces ( 12bbcb5 )
Update API capitalization/casing ( 12bbcb5 )
Update datastore stub creation ( 12bbcb5 )
Update module imports ( 12bbcb5 )
Java
Changes for google-cloud-datastore
2.13.0 (2022-12-06)
Features
Next release from main branch is 2.13.0 ( #917 ) ( 1f12435 )
Bug Fixes
#355 Explicitly passing --project argument when starting emulator ( #923 ) ( ef4065d )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.0 ( #932 ) ( 1dbcea7 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.18 ( #924 ) ( 625e896 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.19 ( #930 ) ( 77285be )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.18 ( #925 ) ( 0c7539d )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.19 ( #931 ) ( 40b4011 )
December 07, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.10.0 (2022-11-29)
Features
datastore: start generating proto stubs ( eed371e )
Python
Changes for google-cloud-ndb
1.12.0 (2022-11-29)
Bug Fixes
Drop Python 2 support ( 90efd77 )
Drop Python 3.6 support ( #829 ) ( b110199 )
model: Ensure repeated props have same kind when converting from ds ( #824 ) ( 29f5a85 )
Documentation
Add note in Django middleware documentation that it is unimplemented ( #805 ) ( aa7621d )
Add note that ProtoRPC message classes are unimplemented ( #819 ) ( ae813e9 )
context: Note that several methods are no longer implemented. ( #821 ) ( 34c2c38 )
CONTRIBUTING: Note the need for Redis/Memcached env vars in tests ( #838 ) ( 19f8415 ), closes #836
Fix bad import path in migration guide ( #827 ) ( 7b44961 )
Fix typo in begin_transaction docstring ( #822 ) ( 7fd3ed3 )
README: Syncronize supported version text with python-datastore ( #837 ) ( 316f959 )
tasklets: Fix Py2-style print statement ( #840 ) ( 0ebfaed )
Changes for google-cloud-datastore
2.11.0 (2022-11-30)
Features
Support "limit" in count query. ( #384 ) ( a4b666a )
November 21, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-ndb
1.12.0rc1 (2022-11-17)
Bug Fixes
Drop Python 2 support ( 90efd77 )
Drop Python 3.6 support ( #829 ) ( b110199 )
model: Ensure repeated props have same kind when converting from ds ( #824 ) ( 29f5a85 )
Documentation
Add note in Django middleware documentation that it is unimplemented ( #805 ) ( aa7621d )
Add note that ProtoRPC message classes are unimplemented ( #819 ) ( ae813e9 )
context: Note that several methods are no longer implemented. ( #821 ) ( 34c2c38 )
CONTRIBUTING: Note the need for Redis/Memcached env vars in tests ( #838 ) ( 19f8415 ), closes #836
Fix bad import path in migration guide ( #827 ) ( 7b44961 )
Fix typo in begin_transaction docstring ( #822 ) ( 7fd3ed3 )
README: Syncronize supported version text with python-datastore ( #837 ) ( 316f959 )
1.11.2 (2022-06-03)
Documentation
fix changelog header to consistent size ( #773 ) ( 7bb4e5a )
November 07, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for datastore/admin/apiv1
1.9.0 (2022-10-26)
Features
datastore: Adds COUNT aggregation query ( #6714 ) ( 27363ca )
datastore: Adds snapshot reads ( #6755 ) ( 9240741 )
Documentation
datastore: Adds emulator instructions ( #6928 ) ( 553456a )
Python
Changes for google-cloud-datastore
2.10.0 (2022-11-01)
Features
Support the Count aggregation query ( #368 ) ( b400a9a )
October 31, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.12.3 (2022-10-24)
Dependencies
Update dependency org.easymock:easymock to v5.0.1 ( #896 ) ( 0382c3d )
October 24, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.9.0 (2022-10-18)
Features
Add datastore aggregation query APIs ( #306 ) ( 96d98e5 )
Bug Fixes
deps: Allow protobuf 3.19.5 ( #372 ) ( 9305154 )
Java
Changes for google-cloud-datastore
2.2.11 (2022-10-17)
Dependencies
Regenerating with new Protobuf (2.2.x) ( #873 ) ( 9b3d60b )
2.12.2 (2022-10-21)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.5 ( #891 ) ( 1f32176 )
2.12.1 (2022-10-19)
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.16 ( #885 ) ( c8b7559 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.16 ( #886 ) ( 76df7ea )
2.12.0 (2022-10-17)
Features
Count API ( #823 ) ( 8c22e61 )
Dependencies
Update dependency com.google.errorprone:error_prone_core to v2.16 ( #872 ) ( b2a72ca )
Update dependency org.easymock:easymock to v5 ( #877 ) ( ed816e2 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.15 ( #878 ) ( 831a92b )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.15 ( #879 ) ( 76a187a )
October 21, 2022
Feature
count() queries are now available in Preview .
October 17, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-datastore
2.8.3 (2022-10-10)
Bug Fixes
Deps: Allow protobuf 3.19.5 ( #372 ) ( 9305154 )
2.8.3 (2022-10-10)
Bug Fixes
Deps: Allow protobuf 3.19.5 ( #372 ) ( 9305154 )
October 11, 2022
Feature
Time-to-live (TTL) policies are now supported at the General Availability level .
September 30, 2022
Feature
Note: This feature has been disabled and moved to a future release.
In the Google Cloud console, updated the pages for editing an entity. See Edit an entity in the console .
August 15, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-datastore
2.11.0 (2022-08-04)
Features
add database_id field ( #802 ) ( 6ed09dd )
Documentation
sample: Add a top-level Datastore samples README ( #790 ) ( d3884dc )
Dependencies
update dependency com.google.cloud:google-cloud-shared-dependencies to v3 ( #805 ) ( ad467ef )
update dependency com.google.errorprone:error_prone_core to v2.15.0 ( #810 ) ( fc8cd15 )
update dependency org.junit.vintage:junit-vintage-engine to v5.9.0 ( #804 ) ( 6caafd8 )
July 19, 2022
Feature
Time-to-live (TTL) policies now available in Preview .
June 29, 2022
Feature
Not-equal (!=), IN, and NOT_IN query filters now available in all client libraries:
Java
Python
PHP
Node.js
C#
Go
Ruby
Note: This feature is available for Firestore in Datastore mode. It is not available in Legacy Cloud Datastore.
June 17, 2022
Feature
Datastore now supports the not-equal ( != ), IN and NOT_IN query filters.
The filters are now available in the Google Cloud console and the following client libraries:
Java
Python
PHP
Node.js
Note: This feature is available for Firestore in Datastore mode. It is not available in Legacy Cloud Datastore.
June 01, 2022
Feature
Support for VPC Service Controls is now available in General Availability .
April 28, 2022
Feature
The datastore.databases.getMetadata permission now supports custom Identity and Access Management roles. You can use custom roles with this permission to unlink your database from App Engine .
January 12, 2022
Feature
Support for VPC Service Controls is now available in Preview .
December 15, 2021
Feature
Key Visualizer for Datastore is now generally available ( GA ).
November 04, 2021
Feature
DATA_READ and DATA_WRITE Data Access audit logs are now supported at the General Availability release level . See Datastore audit logging information .
September 02, 2021
Feature
Added DATA_READ and DATA_WRITE Data Access audit logs. See Firestore in Datastore mode audit logging information . This feature is available in Preview .
July 22, 2021
Change
This feature was released on September 2, 2021 .
The DATA_READ and DATA_WRITE Data Access audit logs feature has been moved to a future release. It is not currently available.
July 16, 2021
Feature
This feature release was moved to September 2, 2021 .
Added DATA_READ and DATA_WRITE Data Access audit logs. See Firestore in Datastore mode audit logging information . This feature is available in Preview .
June 15, 2021
Feature
Support for Identity and Access Management custom roles .
June 14, 2021
Feature
Support for the following additional locations:
asia-southeast1 Singapore
us-west1 Oregeon
asia-east1 Taiwan
See the full list of locations .
May 13, 2021
Feature
You can now view recent import and export operations from the Google Cloud Console .
April 13, 2021
Feature
Support for the europe-central2 (Warsaw) region.
September 16, 2020
Feature
You can now use the goog-firestoremanaged billing report label to view costs related to export and import operations.
September 14, 2020
Breaking
The gcloud datastore index create and gcloud datastore index cleanup commands now require gcloud version 279.0.0 or greater. To update the gcloud CLI, use the gcloud components update command.
June 08, 2020
Feature
Support for the asia-southeast2 (Jakarta) region.
April 20, 2020
Feature
Support for us-west4 region (Las Vegas) .
March 11, 2020
Feature
Support for us-west3 (Salt Lake City) and asia-northeast3 (Seoul) .
February 13, 2020
Feature
You can now configure indexes with the REST API .
November 18, 2019
Feature
You can now start managed export and import operations from the Google Cloud Console .
April 18, 2019
Feature
Support for asia-northeast2 region (Osaka) .
April 15, 2019
Feature
Support for europe-west6 region (Zürich) .
January 31, 2019
Feature
Cloud Firestore is now Generally Available. Cloud Firestore is the new version of Cloud Datastore and includes a backwards-compatible Datastore mode .
If you intend to use the Cloud Datastore API in a new project, use Cloud Firestore in Datastore mode. Existing Cloud Datastore databases will be automatically upgraded to Cloud Firestore in Datastore mode .
Except where noted, the Cloud Datastore documentation now describes behavior for Cloud Firestore in Datastore mode.
October 22, 2018
Change
Cloud Datastore will soon enforce IAM requirements for all App Engine apps, see Cloud Datastore permissions for App Engine . Previously, App Engine apps could always access Cloud Datastore instances in the same project.
Cloud Datastore IAM requirements for App Engine will apply to projects created after 09/03/2018 and will gradually rollout to existing projects. At a future date, all projects will enforce Cloud Datastore IAM requirements for App Engine.
Feature
Support for asia-east2 region (Hong Kong) .
October 08, 2018
Feature
You can now create a Cloud Firestore database in Datastore mode . Datastore mode allows you to use Cloud Datastore client libraries with an improved Cloud Firestore storage layer, removing eventual consistency limitations.
If you have an existing Cloud Datastore project, see this page on the automatic upgrade to Cloud Firestore .
July 10, 2018
Feature
Support for us-west2 region (Los Angeles) .
February 28, 2018
Feature
General Availability release of the Cloud Datastore Administration API v1 , previously in Beta. To learn more about using this service, see:
Exporting and Importing Entities
Scheduling an Export
Deprecated
The Cloud Datastore Admin backup feature is being phased out in favor of the managed export and import for Cloud Datastore. Please migrate to the managed export and import functionality at your earliest convenience. To help you make the transition, the Datastore Admin backup feature will continue to be available until February 28, 2019.
Deprecated
The Cloud Datastore Administration API v1beta1 is now deprecated.
January 30, 2018
Feature
When you begin a read-write transaction with the Cloud Datastore Data API, you can now specify a previousTransaction that you are retrying.
Change
Message BeginTransactionRequest adds field transactionOptions as part of the Data API.
Feature
When you begin a transaction with the Cloud Datastore Data API, you can now use a TransactionOptions object to specify whether the transaction is read-only or read-write.
January 10, 2018
Feature
Support for northamerica-northeast1 region (Montréal) .
October 31, 2017
Feature
Support for asia-south1 region (Mumbai) .
September 05, 2017
Feature
Support for southamerica-east1 region (São Paulo) .
August 30, 2017
Feature
Initial Beta release of the Cloud Datastore Administration API v1.
Additions to the API definition:
Methods for exporting and importing entities.
export
import
Methods for managing long-running operations.
cancel
delete
get
list
Additions to the gcloud command-line tool effective in version 169.0.0 :
gcloud beta datastore export has been added to support exporting entities
gcloud beta datastore import has been added to support importing entities
gcloud beta datastore operations cancel has been added to support canceling long-running operations
gcloud beta datastore operations delete has been added to support deleting long-running operations
gcloud beta datastore operations describe has been added to support describing a completed long-running operation
gcloud beta datastore operations list has been added to support listing active long-running operations
August 01, 2017
Feature
Support for europe-west3 region (Frankfurt) .
July 18, 2017
Feature
Support for australia-southeast1 region (Sydney) .
June 06, 2017
Feature
Support for europe-west2 region (London) .
August 16, 2016
Deprecated
Because Cloud Datastore API v1 is released, Cloud Datastore API v1beta3 is now deprecated.
Change
Error handling in Cloud Datastore API v1:
Attempting to insert an entity that already exists will return error code ALREADY_EXISTS . In v1beta3, it returned INVALID_ARGUMENT .
Attempting to update an entity that does not exist will return error code NOT_FOUND . In v1beta3, it returned INVALID_ARGUMENT .
Feature
Initial release of Cloud Datastore API v1.
Change
Message EntityResult adds field version as part of API v1 and API v1beta3.
April 01, 2016
Change
Initial release of Cloud Datastore API v1beta3.
Changes to the API definition:
The API is now defined in three proto files: entity.proto , query.proto , and datastore.proto .
The proto files now use proto3 syntax:
Maps are used for several fields (see below for details).
All enums add a value with suffix _UNSPECIFIED that is equal to 0.
oneof is used to prevent setting mutually-exclusive fields:
Fields id and name in message PathElement .
The value fields in message Value .
Fields composite_filter and property_filter in type Filter .
Fields value and cursor in message GqlQueryParameter .
Fields upsert , update , upsert , and delete in message Mutation .
All request messages add a top-level field project_id . This field is populated automatically for requests made over HTTP.
Several repeated fields now have plural names:
In message CompositeFilter , filter is now filters .
In message QueryResultBatch , entity_result is now entity_results .
In message LookupRequest , key is now keys .
In message AllocateIdsRequest , key is now keys .
In message AllocateIdsResponse , key is now keys .
The proto package name now includes the API version.
In message PartitionId :
Field dataset_id is now project_id . project_id never includes the app/project ID "prefix" (e.g. "s~"). This fixes https://github.com/GoogleCloudPlatform/google-cloud-datastore/issues/59 .
Field namespace is now namespace_id .
In message Key , field path_element is now path .
In message Value :
Null values are represented by explicitly setting field null_value with type com.protobuf.NullValue . This fixes https://github.com/GoogleCloudPlatform/google-cloud-datastore/issues/41 .
Field timestamp_microseconds_value is now timestamp_value with type google.protobuf.Timestamp . In JSON, the field dateTimeValue is now timestampValue . This field is still limited to microsecond precision.
Field blob_key_value is removed. Values that previously populated that field in the v1beta1 or v1beta2 APIs will instead populate field string_value in the v1beta3 API.
Field geo_point_value of type google.type.LatLng is added.
Repeated field list_value is replaced with array_value of type ArrayValue .
Field indexed , which defaulted to true, is now exclude_from_indexes , which defaults to false.
Message Property is removed. In message Entity , repeated field property is now field properties which is a map from string to Value .
Message PropertyExpression is now Projection .
Message EntityResult adds a field cursor of type bytes .
In message Query :
Field group_by is now distinct_on .
Field limit is now of type google.protobuf.Int32Value .
In message PropertyExpression , enum AggregationFunction and field aggregation_function are removed.
In messages CompositeFilter and PropertyFilter , field operator is now op .
In message GqlQuery :
Field allow_literal is now allow_literals .
Repeated field name_arg is now map field named_bindings .
Field number_arg is now positional_bindings .
Message GqlQueryArg is now GqlQueryParameter . Field name is removed.
Enum MoreResultsType adds a new value MORE_RESULTS_AFTER_CURSOR .
Message QueryResultBatch adds field skipped_cursor .
In message Mutation :
A Mutation now describes one change to one single entity. Its fields are no longer repeated.
Field insert_auto_id is removed. insert and update mutations now support auto ID allocation.
Field force is removed.
In message MutationResult :
Field index_updates is moved to message CommitResponse .
Repeated field insert_auto_id_key is now key and is no longer repeated.
Message RunQueryResponse adds field query . When a RunQueryRequest message sets field gql_query , the RunQueryResponse message sets field query to the parsed form of the GqlQuery message from the request.
In message BeginTransactionRequest , enum IsolationLevel and field isolation_level are removed. All transactions are now serializable.
In message CommitRequest , field mutation is now repeated field mutations .
In message CommitResponse , field mutation_result is now repeated field mutation_results .
Changes to the JSON API:
Null values are now supported. This fixes https://github.com/GoogleCloudPlatform/google-cloud-datastore/issues/41 .
Fields set to their default values are not included in responses, for example:
Fields found , missing , and deferred in message to LookupResponse are not included when they are empty.
Field entity_result in message QueryResultBatch is not included when it is empty.
Field skipped_results in message QueryResultBatch is not included when it is 0.
The API endpoint format has changed. For example, in v1beta2, a RunQuery is sent to: https://www.googleapis.com/datastore/v1beta2/datasets/<dataset-id>/runQuery
In v1beta3, it is sent to:
https://datastore.googleapis.com/v1beta3/projects/<project-id>:runQuery
Account domain restrictions no longer apply when accessing the API. This fixes https://github.com/GoogleCloudPlatform/google-cloud-datastore/issues/19 .
Errors:
JSON errors add a status field and remove the errors list.
Errors resulting from requests with a content type of application/x-protobuf are now a serialized google.rpc.Status message.
Changes to GQL:
In synthetic literal KEY , DATASET is now PROJECT .
The BLOBKEY synthetic literal is removed.
The FIRST aggregator is removed.
The GROUP BY clause is replaced with DISTINCT ON .
Fully-qualified property names are now supported.
Query filters on timestamps prior to the epoch are now supported.
Empty array values are now supported.
Indexing and querying properties inside of entity values is now supported. Values inside entity values are indexed by default.
Key normalization:
In Key objects in RunQueryRequest s, key normalization will never set partition_id.namespace_id , as it previously did under some circumstances. If a key should reference that partition its partition_id.namespace_id must be explicitly set.
Key objects with empty path and empty or unset partition_id are no longer normalized.
Writes of foreign partition IDs may now fail if the foreign project is not in an active state. For this reason, use of foreign partition IDs is discouraged.
In a non-transactional Commit requests, no two mutations may affect the same entity.
In transactional Commit requests, mutations affecting the same entity are applied in the order in which they appear in the request. Certain sequences of mutations affecting the same entity are not permitted.
Field more_results in message QueryResultBatch is accurate in more cases. This fixes https://github.com/GoogleCloudPlatform/google-cloud-datastore/issues/48 .
The typical number of results returned by a call to RunQuery is smaller due to a change in server-side batching. As before, clients should not rely on the batch size and instead use cursors to continue queries.
Scope https://www.googleapis.com/auth/userinfo.email is no longer required.
The API works for projects that have an App Engine domain restriction. This fixes https://github.com/GoogleCloudPlatform/google-cloud-datastore/issues/19 .
gcd tool:
Options -d , --dataset_id , and --dataset_id_override are now -p , --project_id , and --project_id_override , respectively.
Option --auth_mode is removed. The updateindexes and vacuumindexes commands always use OAuth 2.0.
Option --auto_generate_indexes is now --store_index_configuration_on_disk .
Index configuration for new projects is now stored in a YAML file: <directory>/WEB-INF/index.yaml . Index configuration for projects that previously used XML will continue to do so.
September 01, 2013
Change
Initial release of Cloud Datastore API v1beta2.
Changes to the API:
BlindWrite method merged into Commit .
Added list_value to Value and changed value to a non-repeated field in Property .
In the JSON API, string constants are now uppercase and underscore-separated instead of camel-cased (e.g. LESS_THAN_OR_EQUAL instead of lessThanOrEqual ).
Changes to GQL:
New synthetic literals: BLOB , BLOBKEY , DATETIME , KEY .
Support for IS NULL .
Fixed partition ID handling for binding arguments.
Fixed partition ID handling for query requests that include an explicit partition ID.
Fixed scopes in discovery document. This fixes https://github.com/GoogleCloudPlatform/google-cloud-datastore/issues/9 .
July 01, 2013
Change
GQL support.
Metadata query support.
gcd tool:
Microsoft Windows support ( gcd.cmd ).
Added testing mode option --testing , which doesn't store data or index configuration on disk and supports fully-consistent non-ancestor queries. This option is useful for unit and integration tests.
More intuitive update_indexes command (renamed to updateindexes ).
New create command and simplified start command.
Improved integration with existing App Engine applications.
May 01, 2013
Change
Initial public beta release (v1beta1) of the Cloud Datastore API.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
