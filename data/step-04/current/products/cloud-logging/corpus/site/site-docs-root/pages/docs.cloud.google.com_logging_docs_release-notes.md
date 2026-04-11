---
title: "Logging release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/release-notes
  title: "Logging release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Resources
Send feedback
Logging release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Logging. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
For a combined list of all release notes for the products in Google Cloud Observability, see Consolidated release notes .
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 07, 2026
Feature
You can now ingest OTLP-formatted logs into Cloud Logging by using an
OpenTelemetry Collector, an OTLP exporter, and the Telemetry API. For more
information, see
OTLP log ingestion overview .
The Telemetry API for log ingestion is in Preview .
April 06, 2026
Libraries
Go
{: track-name='go'}
#### v1.14.0 (2026-04-02)
April 03, 2026
Announcement
Cloud Logging adds support for the ca multi-region. For a complete list
of supported regions, see Supported regions .
April 02, 2026
Feature
The filter capabilities for log views have been extended to include support for
disjunctive clauses, negation statements, and labels. To learn more, see
Filters for log views .
March 30, 2026
Change
For any new project that is created on or after March 30, 2026, if the
project enables the
Cloud Logging API,
then Google Cloud Observability also enables the
Telemetry API .
March 12, 2026
Issue
The automatic backfill operation performed on a log bucket that has been
upgraded to use Log Analytics has been temporarily paused. To manually
initiate the backfill operation, contact
Cloud Customer Care .
February 12, 2026
Feature
You no longer need to configure BigQuery reservation assignments
to create SQL-based alerting policies or run Log Analytics queries on
BigQuery slots. These queries now use on-demand slots by default
if no BigQuery reservation assignment exists.
For more information, see the following documents:
Query a linked BigQuery dataset
Monitor your SQL query results with an alerting policy
February 09, 2026
Feature
You can use the Cloud Logging API MCP server
to let agents and AI applications interact with your log entries.
This feature is in Preview .
February 02, 2026
Libraries
Java
3.24.0 (2026-01-26)
Features
Bump minor version ( #1923 ) ( ad7958c )
January 29, 2026
Feature
You can now export your Crashlytics data and (optionally) Firebase sessions
data to Cloud Logging. Once the data is exported, it's also available to
Cloud Monitoring, so you can filter your logs, build custom dashboards, set
up custom alerts, and even export the data to other services.
For information about how to export your Crashlytics data, see
Export Crashlytics data to
Cloud Logging ,
and for information about how
you can use this data, see What can you do with Crashlytics data in
Cloud Logging .
January 26, 2026
Change
To support correlation between log and trace data, the following changes have
been made:
The required format for the LogEntry.trace field has been relaxed. The
preferred format for this field is the trace ID. However, you can continue
to provide the full resource name. For more information, see
LogEntry .
If you open the Trace Details flyout page by using options provided in a
log entry, then the resources listed in the default trace scope are searched
for the trace data.
If you open the Logs Explorer page by using options on span data, then
the resources listed in the default log scope are searched for log data.
To learn more about default scopes, see
Configure observability scopes for multi-project queries .
Feature
You can now install and manage the Ops Agent on virtual machines across zones in
your Google Cloud project by using global VM Extension Manager extension
policies. Global and zonal extension policies can keep the installed version
of the agent current, keep a specified version of the agent installed, and
other tasks. For more information, see
Install and manage the Ops Agent by using
VM Extension Manager policies .
January 20, 2026
Announcement
Cloud Logging adds support for the asia-southeast3 region. For a complete
list of supported regions, see
Supported regions .
January 19, 2026
Libraries
Java
3.23.10 (2026-01-15)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.65.1 ( e0ca81e )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.55.1 ( #1911 ) ( 93eadba )
Update googleapis/sdk-platform-java action to v2.65.1 ( #1910 ) ( 3853159 )
December 22, 2025
Libraries
Python
3.13.0 (2025-12-15)
Features
Add support for python 3.14 (#1065) ( 6be3df6a )
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#981) ( 70f612c3 )
Java
3.24.0-rc1 (2025-12-16)
Features
[java] allow passing libraries_bom_version from env ( #1967 ) ( #1615 ) ( dc00cd0 )
Add an API method for reordering firewall policies ( #1538 ) ( 9cd6b96 )
Add Cloud Run Jobs support ( #1574 ) ( 1dd64d0 )
enable hermetic library generation ( #1620 ) ( 034b9c4 )
introduce java.time methods ( #1729 ) ( 323eb33 )
Log Analytics features of the Cloud Logging API ( #1335 ) ( 7d43b80 )
logging: OpenTelemetry trace/span ID integration for Java logging library ( #1596 ) ( 67db829 )
next release from main branch is 3.22.0 ( #1776 ) ( 7736073 )
next release from main branch is 3.23.0 ( #1826 ) ( f0ef15f )
update with latest from main ( #1904 ) ( d613362 )
Upgrade protobuf gen code to 4.33 ( #1905 ) ( e25b532 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.31.0 ( #1502 ) ( c7a20de )
deps: Update the Java code generator (gapic-generator-java) to 2.32.0 ( #1511 ) ( e2f574c )
deps: Update the Java code generator (gapic-generator-java) to 2.37.0 ( #1553 ) ( 15b05fc )
deps: Update the Java code generator (gapic-generator-java) to 2.39.0 ( #1587 ) ( 848418b )
deps: update the Java code generator (gapic-generator-java) to 2.47.0 ( 90b88ee )
deps: update the Java code generator (gapic-generator-java) to 2.49.0 ( a1ec68d )
deps: update the Java code generator (gapic-generator-java) to 2.50.0 ( afcf63c )
deps: update the Java code generator (gapic-generator-java) to 2.51.0 ( 04d8868 )
deps: update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 )
deps: update the Java code generator (gapic-generator-java) to 2.52.0 ( 888a885 )
deps: update the Java code generator (gapic-generator-java) to 2.54.0 ( 67fa9fb )
deps: update the Java code generator (gapic-generator-java) to 2.55.1 ( dd25992 )
deps: update the Java code generator (gapic-generator-java) to 2.56.2 ( 7cce5b5 )
deps: update the Java code generator (gapic-generator-java) to 2.56.3 ( 844f4fa )
deps: update the Java code generator (gapic-generator-java) to 2.58.0 ( 45b4878 )
deps: update the Java code generator (gapic-generator-java) to 2.59.0 ( f2362fb )
deps: update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 )
deps: update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 )
deps: update the Java code generator (gapic-generator-java) to 2.62.1 ( 1438bff )
deps: update the Java code generator (gapic-generator-java) to 2.62.2 ( eeca440 )
deps: update the Java code generator (gapic-generator-java) to 2.62.3 ( 5d5d8a7 )
deps: update the Java code generator (gapic-generator-java) to 2.63.0 ( 385a1dc )
deps: update the Java code generator (gapic-generator-java) to 2.64.1 ( 9187dcd )
enable v2.LogEntry Protobufs converter functions ( #1509 ) ( 9ef4d90 )
Fixed outdated link to X-Cloud-Trace-Context header description ( #1713 ) ( d474313 )
java: handle empty modules ( 09eeff0 )
java: skip fixing poms for special modules ( #1744 ) ( #1256 ) ( 09eeff0 )
next release candidate ( 31ee5a3 )
regenerate gapic yaml and service yaml for logging by augmentation configs ( 9023895 )
Remove org.jspecify dependency ( #1364 ) ( 8138f46 )
Replace internal Structs class with google-cloud-core version ( #1501 ) ( 21e1929 )
Dependencies
update actions/checkout action to v4 ( #1570 ) ( ea0db35 )
update actions/github-script action to v7 ( #1571 ) ( 16d6192 )
update actions/setup-java action to v4 ( #1572 ) ( 9eb8834 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.1 ( #1243 ) ( fdf6b7a )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.2 ( #1258 ) ( d4bc663 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.10.1 ( #1354 ) ( b2f1111 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.11.0 ( #1367 ) ( 8cd2a53 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.12.0 ( #1382 ) ( 8241302 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1388 ) ( 03179b0 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.1 ( #1395 ) ( 1a29b9d )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.14.0 ( #1409 ) ( f9af381 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.15.0 ( #1424 ) ( 4f82f33 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.16.1 ( #1434 ) ( e9e9835 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.17.0 ( #1444 ) ( 748e8a2 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.18.0 ( #1454 ) ( dc25a87 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.19.0 ( #1468 ) ( 5835a7d )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.2.0 ( #1269 ) ( e196a80 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.20.0 ( #1484 ) ( f3227db )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.21.0 ( #1500 ) ( 6cce3c9 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.22.0 ( #1510 ) ( b40e846 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.23.0 ( #1518 ) ( 30ba9ed )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.3.0 ( #1282 ) ( 58ac608 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.4.0 ( #1290 ) ( 84d42ae )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.5.0 ( #1301 ) ( 9fa6f05 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.6.0 ( #1308 ) ( febcf49 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.7.0 ( #1318 ) ( 973d260 )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.8.0 ( #1326 ) ( 5a56f1b )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.9.0 ( #1342 ) ( 8b14ae1 )
update dependency com.google.cloud:sdk-platform-java-config to v3.24.0 ( #1526 ) ( 235f1aa )
update dependency com.google.cloud:sdk-platform-java-config to v3.25.0 ( #1535 ) ( 7fde779 )
update dependency com.google.cloud:sdk-platform-java-config to v3.27.0 ( #1552 ) ( 6c5464d )
update dependency com.google.cloud:sdk-platform-java-config to v3.28.0 ( #1560 ) ( d52e623 )
update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #1563 ) ( 81aa3e6 )
update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #1569 ) ( 8eb0781 )
update dependency com.google.cloud:sdk-platform-java-config to v3.29.0 ( #1586 ) ( edcaf8d )
update dependency com.google.cloud:sdk-platform-java-config to v3.30.0 ( #1603 ) ( 16967e5 )
update dependency com.google.cloud:sdk-platform-java-config to v3.30.1 ( #1611 ) ( e7a0904 )
update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #1625 ) ( 9db8f3b )
update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #1649 ) ( cb428d1 )
update dependency com.google.cloud:sdk-platform-java-config to v3.33.0 ( #1664 ) ( cb6de76 )
update dependency com.google.cloud:sdk-platform-java-config to v3.34.0 ( #1677 ) ( dbd050c )
update dependency com.google.cloud:sdk-platform-java-config to v3.35.0 ( #1683 ) ( 31ec2b9 )
update dependency com.google.cloud:sdk-platform-java-config to v3.36.1 ( #1698 ) ( 9491512 )
update dependency com.google.cloud:sdk-platform-java-config to v3.37.0 ( #1702 ) ( 1f7da17 )
update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d )
update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #1755 ) ( d404381 )
update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1763 ) ( e0f9f27 )
update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #1768 ) ( a69e699 )
update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #1779 ) ( a643ab0 )
update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #1796 ) ( 1f88271 )
update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #1801 ) ( d7aa7bc )
update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #1803 ) ( 5967ffe )
update dependency com.google.cloud:sdk-platform-java-config to v3.48.0 ( #1808 ) ( 6327c51 )
update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #1813 ) ( c15da84 )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #1821 ) ( af4edc5 )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #1828 ) ( 44c3094 )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e )
update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #1848 ) ( 162ef56 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #1853 ) ( c21a635 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #1858 ) ( 0252352 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.3 ( #1869 ) ( 94405fa )
update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #1875 ) ( b79fd2b )
update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #1883 ) ( acc56db )
update dependency io.opentelemetry:opentelemetry-bom to v1.45.0 ( #1638 ) ( 7e007d4 )
update dependency io.opentelemetry:opentelemetry-bom to v1.46.0 ( #1747 ) ( 5ef2853 )
update dependency org.apache.maven.plugins:maven-deploy-plugin to v3.1.3 ( 2b6ea70 )
update dependency org.easymock:easymock to v5.2.0 ( #1421 ) ( f931544 )
update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 )
update dependency org.graalvm.buildtools:junit-platform-native to v0.10.0 ( #1528 ) ( b3e4f9b )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.20 ( #1279 ) ( 296cce1 )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.21 ( #1319 ) ( 5aef8d6 )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.22 ( #1340 ) ( b3b9d5f )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.23 ( #1374 ) ( dce3c4c )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.24 ( #1411 ) ( 0487cdf )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.26 ( #1420 ) ( ff581a6 )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.27 ( #1430 ) ( 9e750a3 )
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.28 ( #1455 ) ( 3080cec )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.0 ( #1456 ) ( f27713e )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.1 ( #1542 ) ( af784bc )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.20 ( #1280 ) ( 6363196 )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.21 ( #1320 ) ( fc2d065 )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.22 ( #1341 ) ( cfc0106 )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.23 ( #1375 ) ( a15c73c )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.26 ( #1412 ) ( bd9be4e )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.27 ( #1431 ) ( 7c2aa2c )
update dependency org.junit.vintage:junit-vintage-engine to v5.10.0 ( #1397 ) ( f15d246 )
update dependency org.junit.vintage:junit-vintage-engine to v5.10.1 ( #1471 ) ( debc77f )
update dependency org.junit.vintage:junit-vintage-engine to v5.10.2 ( #1530 ) ( 20981dc )
update dependency org.junit.vintage:junit-vintage-engine to v5.9.2 ( #1245 ) ( e73a704 )
update dependency org.junit.vintage:junit-vintage-engine to v5.9.3 ( #1329 ) ( dfb98f4 )
update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 )
update googleapis/sdk-platform-java action to v2.52.0 ( #1753 ) ( 3dcf86a )
update googleapis/sdk-platform-java action to v2.54.0 ( #1762 ) ( d50a8d2 )
update googleapis/sdk-platform-java action to v2.55.1 ( #1780 ) ( 505557e )
update googleapis/sdk-platform-java action to v2.57.0 ( #1804 ) ( e9a27ec )
update googleapis/sdk-platform-java action to v2.58.0 ( #1806 ) ( b94da77 )
update googleapis/sdk-platform-java action to v2.60.0 ( #1822 ) ( 0a96dd5 )
update googleapis/sdk-platform-java action to v2.62.1 ( #1855 ) ( b6ce498 )
update googleapis/sdk-platform-java action to v2.62.3 ( #1868 ) ( cac5cd9 )
update googleapis/sdk-platform-java action to v2.64.1 ( #1882 ) ( abdd374 )
update sdk platform java dependencies ( #1707 ) ( 2359040 )
update sdk platform java dependencies ( #1717 ) ( ee9ef91 )
update sdk platform java dependencies ( #1725 ) ( 531f8c5 )
update sdk platform java dependencies ( #1736 ) ( 88b4cdf )
update sdk-platform-java-config to 3.55.0-rc1 ( #1903 ) ( 750a9d7 )
Documentation
Documentation update for OpenTelemetry and tracing ( #1657 ) ( e3c6670 )
Fix typo in code comments ( #1520 ) ( 0440fc6 )
Python
3.13.0 (2025-12-15)
Features
Add support for python 3.14 (#1065) ( 6be3df6a )
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#981) ( 70f612c3 )
Python
3.13.0 (2025-12-15)
Features
Add support for python 3.14 (#1065) ( 6be3df6a )
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#981) ( 70f612c3 )
Python
3.13.0 (2025-12-15)
Features
Add support for python 3.14 (#1065) ( 6be3df6a )
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#981) ( 70f612c3 )
Python
3.13.0 (2025-12-15)
Features
Add support for python 3.14 (#1065) ( 6be3df6a )
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#981) ( 70f612c3 )
Python
3.13.0 (2025-12-15)
Features
Add support for python 3.14 (#1065) ( 6be3df6a )
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#981) ( 70f612c3 )
Python
3.13.0 (2025-12-15)
Features
Add support for python 3.14 (#1065) ( 6be3df6a )
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#981) ( 70f612c3 )
Python
3.13.0 (2025-12-15)
Features
Add support for python 3.14 (#1065) ( 6be3df6a )
Bug Fixes
remove setup.cfg configuration for creating universal wheels (#981) ( 70f612c3 )
December 15, 2025
Libraries
Java
3.23.9 (2025-12-11)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.2 ( fcb7ec1 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.2 ( #1897 ) ( ab9862f )
Update googleapis/sdk-platform-java action to v2.64.2 ( #1898 ) ( 5860f51 )
December 12, 2025
Change
The default setting for the time-range selector for the
Logs Explorer is now five minutes. The previous default was one hour.
December 08, 2025
Feature
You can now install and manage the Ops Agent on virtual machines in
a specified zone by using VM Extension Manager extension policies.
You can use extension policies to keep the installed version of the agent
current, keep a specified version of the agent installed, and other tasks.
For more information, see Install and manage the Ops Agent by using
VM Extension Manager policies .
November 17, 2025
Libraries
Java
3.23.8 (2025-11-13)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( 9187dcd )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #1883 ) ( acc56db )
Update googleapis/sdk-platform-java action to v2.64.1 ( #1882 ) ( abdd374 )
Java
3.23.8 (2025-11-13)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( 9187dcd )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #1883 ) ( acc56db )
Update googleapis/sdk-platform-java action to v2.64.1 ( #1882 ) ( abdd374 )
November 03, 2025
Libraries
Go
1.13.1 (2025-10-28)
Bug Fixes
logging: Upgrade gRPC service registration func ( 486bd40 )
logging: Upgrade gRPC service registration func ( #13139 ) ( 39af2f9 )
Go
1.13.1 (2025-10-28)
Bug Fixes
logging: Upgrade gRPC service registration func ( 486bd40 )
logging: Upgrade gRPC service registration func ( #13139 ) ( 39af2f9 )
Go
1.13.1 (2025-10-28)
Bug Fixes
logging: Upgrade gRPC service registration func ( 486bd40 )
logging: Upgrade gRPC service registration func ( #13139 ) ( 39af2f9 )
October 27, 2025
Libraries
Java
3.23.7 (2025-10-20)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.63.0 ( 385a1dc )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #1875 ) ( b79fd2b )
Java
3.23.7 (2025-10-20)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.63.0 ( 385a1dc )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #1875 ) ( b79fd2b )
Java
3.23.7 (2025-10-20)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.63.0 ( 385a1dc )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #1875 ) ( b79fd2b )
October 13, 2025
Libraries
Java
3.23.6 (2025-10-08)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.3 ( 5d5d8a7 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.3 ( #1869 ) ( 94405fa )
Update googleapis/sdk-platform-java action to v2.62.3 ( #1868 ) ( cac5cd9 )
October 09, 2025
Feature
The query builder in the Log Analytics page is
generally available (GA). For more
information, see Build, edit, and run a query .
September 29, 2025
Libraries
Java
3.23.5 (2025-09-24)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.2 ( eeca440 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #1858 ) ( 0252352 )
September 22, 2025
Announcement
Cloud Logging has removed the quota for write requests per minute, which has been replaced by volume-based regional quotas. We've also removed the references to August dates for the removal of the old quota from the public documentation. For more information, see Logging API quotas and limits .
September 15, 2025
Libraries
Java
3.23.4 (2025-09-11)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.1 ( 1438bff )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #1853 ) ( c21a635 )
Update googleapis/sdk-platform-java action to v2.62.1 ( #1855 ) ( b6ce498 )
September 08, 2025
Libraries
Node.js
11.2.1 (2025-09-03)
Bug Fixes
logging: Specifying resourceNames should fetch logs only from those resources ( #1597 ) ( ff7899f )
August 25, 2025
Libraries
Java
3.23.3 (2025-08-20)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #1848 ) ( 162ef56 )
August 11, 2025
Libraries
Java
3.23.2 (2025-08-05)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae )
Java
3.23.2 (2025-08-05)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae )
Java
3.23.2 (2025-08-05)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 0a21b83 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #1843 ) ( 975d8ae )
August 04, 2025
Libraries
Java
3.23.1 (2025-07-28)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e )
Java
3.23.1 (2025-07-28)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e )
Java
3.23.1 (2025-07-28)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e )
Java
3.23.1 (2025-07-28)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 6a268f8 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #1834 ) ( 2e46f6e )
Feature
You can now build queries without manually writing SQL in the Log Analytics page by using the query builder. This feature is in Public Preview. For more information, see Build and run a SQL query .
July 14, 2025
Libraries
Java
3.23.0 (2025-07-11)
Features
Next release from main branch is 3.23.0 ( #1826 ) ( f0ef15f )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #1828 ) ( 44c3094 )
Java
3.23.0 (2025-07-11)
Features
Next release from main branch is 3.23.0 ( #1826 ) ( f0ef15f )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #1828 ) ( 44c3094 )
June 30, 2025
Libraries
Java
3.22.6 (2025-06-25)
Bug Fixes
Regenerate gapic yaml and service yaml for logging by augmentation configs ( 9023895 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #1821 ) ( af4edc5 )
Update googleapis/sdk-platform-java action to v2.60.0 ( #1822 ) ( 0a96dd5 )
Java
3.22.6 (2025-06-25)
Bug Fixes
Regenerate gapic yaml and service yaml for logging by augmentation configs ( 9023895 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #1821 ) ( af4edc5 )
Update googleapis/sdk-platform-java action to v2.60.0 ( #1822 ) ( 0a96dd5 )
June 09, 2025
Libraries
Java
3.22.5 (2025-06-05)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( f2362fb )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #1813 ) ( c15da84 )
June 06, 2025
Announcement
Cloud Logging begins enforcement of the new volume-based regional quotas. For more information, see Logging API quotas and limits .
June 04, 2025
Feature
You can now cancel a running query in the Logs Explorer by clicking the Stop query button.
May 29, 2025
Feature
You can now configure the observability scope or set the default log scope by using the Google Cloud CLI. You must use version 254.0 or higher. For more information, see Configure observability scopes and Set the default log scope .
May 26, 2025
Libraries
Java
3.22.4 (2025-05-20)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.58.0 ( 45b4878 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.48.0 ( #1808 ) ( 6327c51 )
Update googleapis/sdk-platform-java action to v2.58.0 ( #1806 ) ( b94da77 )
May 12, 2025
Libraries
Java
3.22.3 (2025-05-06)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.3 ( 844f4fa )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #1801 ) ( d7aa7bc )
Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #1803 ) ( 5967ffe )
Update googleapis/sdk-platform-java action to v2.57.0 ( #1804 ) ( e9a27ec )
Java
3.22.3 (2025-05-06)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.3 ( 844f4fa )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #1801 ) ( d7aa7bc )
Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #1803 ) ( 5967ffe )
Update googleapis/sdk-platform-java action to v2.57.0 ( #1804 ) ( e9a27ec )
May 08, 2025
Feature
Log Analytics can now automatically infer fields of a column when the data type is
JSON. You can also view how often these inferred fields appear in your data.
April 28, 2025
Libraries
Java
3.22.1 (2025-04-25)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 7cce5b5 )
Libraries
Java
3.22.2 (2025-04-25)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #1796 ) ( 1f88271 )
Libraries
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
Java
3.22.2 (2025-04-25)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #1796 ) ( 1f88271 )
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
Java
3.22.1 (2025-04-25)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 7cce5b5 )
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
Python
3.12.1 (2025-04-21)
Bug Fixes
Make logging handler close conditional to having the transport opened ( #990 ) ( 66c6b91 )
April 21, 2025
Libraries
Python
3.12.0 (2025-04-10)
Features
Add REST Interceptors which support reading metadata ( 681bcc5 )
Add support for opt-in debug logging ( 681bcc5 )
Added flushes/close functionality to logging handlers ( #917 ) ( d179304 )
Bug Fixes
Allow protobuf 6.x ( #977 ) ( 6757890 )
deps: Require google-cloud-audit-log >= 0.3.1 ( #979 ) ( 1cc00ec )
Fix typing issue with gRPC metadata when key ends in -bin ( 681bcc5 )
Documentation
Added documentation on log_level and excluded_loggers params in setup_logging ( #971 ) ( 70d9d25 )
Update README to break infinite redirect loop ( #972 ) ( 52cd907 )
Python
3.12.0 (2025-04-10)
Features
Add REST Interceptors which support reading metadata ( 681bcc5 )
Add support for opt-in debug logging ( 681bcc5 )
Added flushes/close functionality to logging handlers ( #917 ) ( d179304 )
Bug Fixes
Allow protobuf 6.x ( #977 ) ( 6757890 )
deps: Require google-cloud-audit-log >= 0.3.1 ( #979 ) ( 1cc00ec )
Fix typing issue with gRPC metadata when key ends in -bin ( 681bcc5 )
Documentation
Added documentation on log_level and excluded_loggers params in setup_logging ( #971 ) ( 70d9d25 )
Update README to break infinite redirect loop ( #972 ) ( 52cd907 )
Announcement
Cloud Logging adds support for the europe-north2 region. For a complete
list of supported regions, see
Supported regions .
April 17, 2025
Feature
In the Logs Explorer, you can now view the most frequently occurring fields and values in the JSON payload of your logs. For more information, see the Fields pane documentation.
April 04, 2025
Feature
You can include pipe syntax in the SQL queries you run on the Log Analytics page.
Pipe syntax supports a linear query structure designed to make your queries easier to read, write, and maintain. The pipe syntax feature is generally available (GA).
March 24, 2025
Libraries
Java
3.22.0 (2025-03-18)
Features
Next release from main branch is 3.22.0 ( #1776 ) ( 7736073 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( dd25992 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #1779 ) ( a643ab0 )
Update googleapis/sdk-platform-java action to v2.55.1 ( #1780 ) ( 505557e )
Java
3.22.0 (2025-03-18)
Features
Next release from main branch is 3.22.0 ( #1776 ) ( 7736073 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( dd25992 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #1779 ) ( a643ab0 )
Update googleapis/sdk-platform-java action to v2.55.1 ( #1780 ) ( 505557e )
March 13, 2025
Feature
App Hub application labels are now attached to your log entries. The Log Fields pane of the Logs Explorer now includes facets for application, service, and workload labels. For more information, see Log Fields pane .
March 12, 2025
Feature
You can now use the Observability API to set the default log scope. This feature is in Public Preview. For more information, see the following documents:
Create and manage log scopes
Observability scopes overview
Observability API reference
March 11, 2025
Change
The API to create and manage Log Scopes is now Generally Available (GA). You can create and manage log scopes by using the Cloud Console, the Google Cloud CLI, and Terraform. For more information, see
Create and manage log scopes .
March 03, 2025
Libraries
Java
3.21.4 (2025-02-26)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 67fa9fb )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #1768 ) ( a69e699 )
Update googleapis/sdk-platform-java action to v2.54.0 ( #1762 ) ( d50a8d2 )
Java
3.21.4 (2025-02-26)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 67fa9fb )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #1768 ) ( a69e699 )
Update googleapis/sdk-platform-java action to v2.54.0 ( #1762 ) ( d50a8d2 )
February 18, 2025
Feature
You can now use custom constraints with Organization Policy to provide more granular control over your Cloud Logging resources. For more information, see Use custom organization policies .
February 17, 2025
Libraries
Java
3.21.3 (2025-02-12)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 888a885 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1763 ) ( e0f9f27 )
Java
3.21.3 (2025-02-12)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 888a885 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1763 ) ( e0f9f27 )
Java
3.21.3 (2025-02-12)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 888a885 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #1763 ) ( e0f9f27 )
February 06, 2025
Feature
You can now create and manage your log views by using the Google Cloud console. For more information, see
Configure log views on a log bucket .
February 03, 2025
Libraries
Python
3.11.4 (2025-01-22)
Bug Fixes
Made write_entries raise ValueError on ParseError s ( #958 ) ( 5309478 )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc )
Python
3.11.4 (2025-01-22)
Bug Fixes
Made write_entries raise ValueError on ParseError s ( #958 ) ( 5309478 )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc )
Python
3.11.4 (2025-01-22)
Bug Fixes
Made write_entries raise ValueError on ParseError s ( #958 ) ( 5309478 )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc )
Python
3.11.4 (2025-01-22)
Bug Fixes
Made write_entries raise ValueError on ParseError s ( #958 ) ( 5309478 )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc )
Python
3.11.4 (2025-01-22)
Bug Fixes
Made write_entries raise ValueError on ParseError s ( #958 ) ( 5309478 )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc )
Python
3.11.4 (2025-01-22)
Bug Fixes
Made write_entries raise ValueError on ParseError s ( #958 ) ( 5309478 )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc )
Python
3.11.4 (2025-01-22)
Bug Fixes
Made write_entries raise ValueError on ParseError s ( #958 ) ( 5309478 )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 7baed8e )
Require proto-plus >= 1.25 for Python 3.13 ( #955 ) ( 002b1fc )
Libraries
Java
3.21.2 (2025-01-29)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #1755 ) ( d404381 )
Update dependency io.opentelemetry:opentelemetry-bom to v1.46.0 ( #1747 ) ( 5ef2853 )
Update googleapis/sdk-platform-java action to v2.52.0 ( #1753 ) ( 3dcf86a )
January 21, 2025
Announcement
On April 22, 2025, Cloud Logging will replace the single, global quota for the number of calls to write log entries with a set of volume-based regional quotas. For more information, see Logging API quotas and limits .
January 20, 2025
Libraries
Java
3.21.1 (2025-01-13)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d )
Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 )
Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 )
Java
3.21.1 (2025-01-13)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d )
Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 )
Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 )
Java
3.21.1 (2025-01-13)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 705dba2 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #1745 ) ( 6a7280d )
Update dependency org.easymock:easymock to v5.5.0 ( #1639 ) ( f559d89 )
Update googleapis/sdk-platform-java action to v2.51.1 ( #1742 ) ( 3c7a2c7 )
January 13, 2025
Feature
You can now create analytics views, which let you transform your log data into a custom format. You can then use SQL to query your analytics views. This feature is in Public Preview. For more information, see the following documents:
About analytics views
Create, query, and manage analytics views
January 06, 2025
Libraries
Go
1.13.0 (2025-01-02)
Features
logging: Change go gapic transport to grpc+rest in logging ( #11289 ) ( a5f250b )
Bug Fixes
logging: Update golang.org/x/net to v0.33.0 ( e9b0b69 )
logging: Update google.golang.org/api to v0.203.0 ( 8bb87d5 )
logging: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files. This change is expected to affect very few if any users of this client library. For more information, see https://togithub.com/googleapis/google-cloud-go/issues/11020. ( 8bb87d5 )
Go
1.13.0 (2025-01-02)
Features
logging: Change go gapic transport to grpc+rest in logging ( #11289 ) ( a5f250b )
Bug Fixes
logging: Update golang.org/x/net to v0.33.0 ( e9b0b69 )
logging: Update google.golang.org/api to v0.203.0 ( 8bb87d5 )
logging: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files. This change is expected to affect very few if any users of this client library. For more information, see https://togithub.com/googleapis/google-cloud-go/issues/11020. ( 8bb87d5 )
December 18, 2024
Feature
You can now create custom roles that let you create and manage Log Scopes. Log Scopes are in Public Preview. For more information, see
Create and manage log scopes: Before you begin .
Announcement
Cloud Logging adds support for the northamerica-south1 region. For a
complete list of supported regions, see
Supported regions .
December 13, 2024
Feature
Reporting of the "pending" status of the Ops Agent on the Cloud Monitoring VM Instances dashboard has been refined to include additional states. For more information, see Use VM Instances dashboard .
December 06, 2024
Feature
Editing Log Analytics charts that are saved to a dashboard directly in the Dashboards page is now generally available (GA).
November 08, 2024
Change
Audit Logging now populates the status.details field in the audit log with the google.rpc.ErrorInfo and google.rpc.Help proto payload types in cases where an API returns an error status and that status includes one of those types in the details field.
October 29, 2024
Feature
You can now create and manage log scopes by using the Google Cloud CLI, in addition to using the Cloud Console and Terraform. Log scopes are in Public Preview. For more information, see
Create and manage log scopes
gcloud logging scopes
October 28, 2024
Feature
You can now use tags to annotate your log buckets and use the tags to manage access to the log buckets. For more information, see Manage log buckets by using tags .
October 24, 2024
Feature
You can now create alerting policies that monitor the results of your SQL queries. For more information about SQL-based alerting policies, see the following documents:
Monitor your SQL query results with an alerting policy
Manage incidents for SQL-based alerting policies
October 09, 2024
Change
Ops Agent release 2.51.0 adds support for Compute Engine Arm VMs that are running Rocky Linux 8.
October 07, 2024
Feature
You can now include pipe syntax in the SQL queries you run on the Log Analytics page. For more information, see the BigQuery documentation about pipe syntax .
October 02, 2024
Feature
You can now use Terraform commands to a create or update a log scope. For more information, see
Create a log scope .
September 30, 2024
Change
The layout of the Logs Explorer page has been changed. For more information, see View logs by using the Logs Explorer .
Change
The pricing for vended network logs has changed. For more information see the following:
Cloud Logging pricing summary
Cloud Logging pricing
Network telemetry log pricing
September 19, 2024
Feature
You can now query your log data from the Log Analytics page by using reserved BigQuery slots. For more information, see Query and view logs in Log Analytics .
September 16, 2024
Feature
There is a new Cloud Observability Overview page in the Google Cloud console. The new page, which you can customize, introduces the Cloud Observability products, and provides information about your logs, dashboards, incidents, and more. This page can help you detect issues in your resources, view relevant events, and view signals that matter to you.
Feature
You can now create and manage your log scopes by using the Logging API in addition to using the Cloud Console. This feature is in public preview. For more information, see Create and manage log scopes .
August 13, 2024
Feature
Introducing log scopes. Log scopes are persistent, project-level resources that list a set of resources to be searched for log entries. For example, you might configure a log scope to contain multiple projects and several log views. If you select your log scope when using the Logs Explorer, it displays the log entries that originate in the specified projects and those in the specified log views.
You can create, edit, and delete log scopes. You can also set one log scope as the default log scope, which determines the resources that the Logs Explorer searches for log entries.
For more information, see Create and manage log scopes .
July 19, 2024
Feature
The permissions required to use saved and recent queries have changed. You can also define a location in your default resource settings where saved and recent queries are saved. This location must align with your organization policy.
July 08, 2024
Change
Log buckets in all regions supported by Cloud Logging can now be upgraded to use Log Analytics. For more information, see Supported regions .
July 03, 2024
Change
Agent-installation policies for the Ops Agent are now GA. For more information, see Overview of agent policies for the Ops Agent .
Feature
You can now view the estimated number of byte processed along with the validation status of your SQL query when running queries in Log Analytics. You can use this information to understand the relative volume of data that your SQL query will scan.
June 26, 2024
Feature
You can now analyze your billable log volume when using Log Analytics. This feature is in Public Preview. For more information, see Analyze log volume with Log Analytics .
June 25, 2024
Feature
Ops Agent version 2.48.0 introduces support for Compute Engine VMs that are running Deep Learning VM Images based on Debian 11 (Bullseye). For more information, see Operating systems .
June 24, 2024
Feature
Gauges and scorecards are now available to visualize the results of your SQL queries. For more information, see Chart query results with Log Analytics .
June 13, 2024
Feature
You can now use Terraform commands to attach an IAM role binding to a log view that grants a principal access to the log view. For more information about log views and about controlling access to log views, see
Configure log views on a log bucket .
May 29, 2024
Change
Ops Agent version 2.47.0 introduces support for Compute Engine VMs that are running Ubuntu 24.04 LTS (Noble Numbat). For more information, see Operating systems .
May 15, 2024
Change
You can now attach an IAM role binding to a log view that grants a principal access to the log view. For more information about log views and about controlling access to log views, see
Configure log views on a log bucket .
April 03, 2024
Feature
The Logging query language now supports the cast and regexp_extract functions. For more information, see the Logging query language documentation.
March 28, 2024
Feature
Pie charts are now available for visualizing data in the Log Analytics page. For more information, see Change chart type .
March 26, 2024
Feature
You can now configure your aggregated sink to be intercepting, which prevents logs from being passed through the Log Router of child resources. For more information, see Collate and route organization-level logs to supported destinations .
Change
Duet AI in Google Cloud is now Gemini for Google Cloud. See our blog post for more information.
March 11, 2024
Change
You can now use SQL JOIN and UNION operators on the Log Analytics page to combine tables in multiple Google Cloud projects.
March 07, 2024
Change
Log buckets in the africa-south1 region can now be upgraded to use Log Analytics. For more information, see Supported regions .
February 20, 2024
Feature
You can now configure and save a Log Analytics chart directly in Monitoring. For more information, see Add charts generated from a Log Analytics query .
Change
For information and recommendations about how to instrument your applications to collect metrics, logs, and traces, see the following documents:
Instrumentation and observability overview
Choose an instrumentation approach
Go instrumentation example
Java instrumentation example
February 13, 2024
Feature
Copying log entries is now generally available (GA).
February 12, 2024
Feature
You can now display Log Analytics query results as a table in your Monitoring dashboards by selecting Table as the widget type.
February 08, 2024
Change
You can now create log buckets in the africa-south1 region. For a complete list of supported regions, see
Supported regions .
February 07, 2024
Change
Log buckets in the following regions can now be upgraded to use Log Analytics:
europe-west10
For more information, see Supported regions .
January 31, 2024
Fixed
Fixed a bug that caused the audit log associated with an API that performs both Data Access and Admin Activity operations to be classified as a Data Access log. These logs are now always classified as Admin Activity audit logs.
January 16, 2024
Feature
You can now edit Log Analytics charts that are saved to a dashboard directly in the Dashboards page. For more information, see Edit a chart saved to a custom dashboard .
Change
Announcing a common navigation pane in the Cloud console for Logging, Monitoring, Trace, and Error Reporting. When you are troubleshooting an issue, the new navigation pane simplifies accessing the pages you need to explore different types of telemetry:
The Explore section list the pages to view and analyze telemetry data.
The Detect section lists the pages you use to ensure that you are notified when errors occur.
The Configure section lists configuration and management pages.
You can continue to use the search bar to locate pages in the Cloud console and to find documentation.
January 08, 2024
Feature
You can now go to the Log Analytics page from the Logs Explorer page by clicking the Analyze results button, which automatically translates the Logging query language query into a SQL query. For more information, see Analyze results .
December 13, 2023
Feature
Charting in the Log Analytics page is now generally available (GA). In addition to features available in the preview, the GA release includes the ability to select none as an aggregation function on a chart.
December 05, 2023
Feature
You can now query for a specific error group in the Logs Explorer and Log Analytics pages by using the error group ID. For more information, see Find error group details for a log entry .
December 01, 2023
Feature
Ops Agent version 2.44.0 introduces the following features:
Support for Compute Engine VMs that are running Ubuntu 23.10 (Mantic Minotaur). For more information, see Operating systems .
Support for Compute Engine Arm VMs that are running Debian 12 (Bookworm). For more information, see Support for Compute Engine Arm VMs .
An option to prevent the agent from collecting self logs and sending them to Cloud Logging. For more information, see
Collection of self logs .
November 29, 2023
Feature
You can now specify an inclusion filter or exclusion filter that is applied to the _Default sinks of new resources. For more information, see Configure default filter of _Default sinks .
November 10, 2023
Feature
You can now load saved queries in the Log Analytics page by using the Load button. The Load button lets you edit the query in the Query pane before running the query.
November 06, 2023
Change
Log buckets in the following regions can now be upgraded to use Log Analytics:
me-central2
For more information, see Supported regions .
November 02, 2023
Feature
You can now set a custom time interval for charts in the Log Analytics page. The custom time interval can be specified in minutes, hours, or days.
November 01, 2023
Feature
Summarizing log entries with Duet AI assistance is now generally available .
October 24, 2023
Feature
Ops Agent version 2.43.0 introduces support for Compute Engine Arm VMs that are running SLES 15 and OpenSUSE Leap 15. For more information, see Support for Compute Engine Arm VMs .
October 16, 2023
Change
You can now create log buckets in the us-west8 region. For a complete list of supported regions, see
Supported regions .
October 12, 2023
Change
You can now configure the format of the timestamp in your query results in the Logs Explorer . For more information, see Logs Explorer overview: Configure the Time column .
October 09, 2023
Change
When you install the Ops Agent on a Compute Engine VM by using the Cloud Monitoring VM Instances dashboard or the Observability tab on a Compute Engine VM details page, the agent is now installed with an Ops Agent OS policy. This installation method replaces the prior set of manual steps. For more information, see Installing the agent by using the Google Cloud console .
September 29, 2023
Issue
Ops Agent versions 2.39.0 and 2.40.0 crash if you use them on Compute Engine VMs with attached GPUs. Use Ops Agent version 2.38.0, or versions 2.41.0 and newer, on VMs with attached GPUs.
September 18, 2023
Feature
You can now save charts generated from a Log Analytics SQL query to a custom dashboard. For more information, see Save a chart to a custom dashboard .
Change
You can now customize the Logs Dashboard page by using custom dashboards. For more information, see Visualize log severity and error metrics .
Change
You can now use the Log fields pane of the Logs Explorer to filter your Kubernetes Container logs by their service name. The service name is extracted from the value of the pod_name label. For more information, see
Logs fields pane .
September 12, 2023
Change
Log buckets in the following regions can now be upgraded to use Log Analytics:
us-east5
us-south1
me-central1
europe-west12
For more information, see Supported regions .
August 29, 2023
Feature
Summarizing log entries with Duet AI assistance is now available in Preview .
August 21, 2023
Feature
You can now view your query results as a chart in the Log Analytics page. For more information, see Chart query results with Log Analytics .
Feature
Identity and Access Management (IAM) deny policies can now include Cloud Logging permissions. For a list of Cloud Logging permissions that are supported by deny policies, see Permissions supported in deny policies .
August 16, 2023
Change
The behavior of simple text searches as changed. To improve the performance, the Search function is automatically invoked when you don't wrap the search terms in double quotes.
August 14, 2023
Feature
Version 2.37.0 of the Ops Agent introduces runtime health checks for errors in the configuration of logging pipelines and in parsing logs. These errors are reported to Cloud Logging. For more information, see Agent health checks .
August 07, 2023
Change
Cloud Logging now supports the following regions:
europe-west10
europe-west12
me-central2
For more information, see Supported regions .
August 01, 2023
Feature
Ops Agent version 2.36.0 introduces support for Compute Engine Arm VMs that are running Debian 11 (Bullseye). For more information, see Support for Compute Engine Arm VMs .
July 26, 2023
Change
Starting with version 2.35.0, the Ops Agent health-check log is renamed ops-agent-health ; earlier versions of the Ops Agent that support health checks use the name ops-agent-health-checks .
July 21, 2023
Feature
You can now view logs that are stored in log buckets in different projects by using the Refine scope button in the Logs Explorer . For more information, see Refine scope .
Change
The Cloud Logging agent for Windows version 1-21 is now available. This version has no user-visible changes but upgrades the grpc gem and others to fix vulnerabilities. This also includes the switch to Ruby 3, from version 1-20 of the Logging agent.
July 20, 2023
Change
Support for routing your logs through the Log Router of another Google Cloud project is now Generally Available (GA). For more information, see Route logs to supported destinations .
July 19, 2023
Change
The pricing language for Cloud Logging has changed; however, the free allotments and the rates haven't changed. For more information, see Cloud Logging pricing summary .
July 18, 2023
Change
You can now upgrade log buckets in most regions to use Log Analytics. To determine if the region of a log bucket is supported, see Supported regions .
July 10, 2023
Feature
Time ranges are now synchronized between select Logging and Monitoring pages.
July 06, 2023
Feature
The Google Cloud console can now automatically install the Ops Agent for you when you create a VM instance. During the installation process, the Compute Engine VM Manager creates an Ops Agent OS policy that installs the agent and reinstalls it when necessary. For more information, see Install the Ops Agent during VM creation .
June 20, 2023
Change
Log buckets in the following regions can now be upgraded to use Log Analytics:
asia-east1
europe-north1
northamerica-northeast2
us-east4
For more information, see Supported regions .
June 12, 2023
Feature
You can now create log sinks with user-defined service accounts. For more information, see Configure log sinks with user-managed service accounts .
June 05, 2023
Feature
You can now configure CMEK and a default storage location for individual folders, in addition to organizations. For more information, see Configure default settings for organizations and folders and Configure CMEK for Cloud Logging .
May 31, 2023
Change
Cloud Logging no longer creates a dedicated service account for each log sink. Instead, Logging reuses an existing service account when one is available for the resource type. Logging creates a service account when none are available. For more information, see Set destination permissions .
May 22, 2023
Feature
You can now use SQL JOIN and UNION operators in queries on the Log Analytics page. For more information, see Combine data from multiple sources .
May 19, 2023
Change
Log buckets with Log Analytics enabled now support the use of Customer Managed Encryption Keys (CMEK). For information about enabling Log Analytics on log buckets, see Create a bucket or Upgrade a bucket to use Log Analytics .
May 15, 2023
Feature
You can now customize the time range of your queries in the Log Analytics page by using the time-range selector. There are several time range options, such as preset times, custom start and end times, and relative time ranges. For more information, see Filter by time .
April 26, 2023
Feature
Version 2.31.0 of the Ops Agent introduces built-in support for log rotation. For more information, see Configure log rotation in the Ops Agent .
April 18, 2023
Feature
You can now configure Log Analytics on Cloud Logging buckets and BigQuery linked datasets by using the following Terraform modules:
google_logging_project_bucket_config
google_logging_linked_dataset
April 11, 2023
Change
The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data. The SEARCH function is now GA. For more information, see SEARCH function .
March 31, 2023
Change
Effective 1 April 2023, storage costs apply to logs data retained longer than 30 days. For pricing details, see
Cloud Logging pricing summary .
Prior to 1 April 2023, there are no charges for retaining logs longer than 30 days. To review the billable storage for your
log buckets, go to the Logs Storage page of the Google Cloud console.
March 29, 2023
Change
When you create a log view and use the source() function in your filter, the argument to the function is now validated to ensure that it is a single string representing a project, folder, billing account or organization.
March 27, 2023
Feature
The Cloud Logging API now supports the following region:
Doha: me-central1
March 22, 2023
Change
Log buckets in the following regions can now be upgraded to use Log Analytics:
asia-northeast1
australia-southeast1
europe-west1
europe-west2
northamerica-northeast1
us-east1
us-west2
For more information, see Supported regions .
March 14, 2023
Feature
The Logging Query Language now supports a built-in SEARCH function that you can use to find strings in your log data. The SEARCH function is in preview. For more information, see SEARCH function .
March 10, 2023
Feature
Starting with version 2.28.0, the Ops Agent limits the amount of disk space it can use to store buffer chunks. The Ops Agent creates buffer chunks when logging data can't be sent to the Logging API. Without a limit, these chunks might consume all available space, interrupting other services on the VM. When a network outage causes buffer chunks to be written to disk, the Ops Agent now uses a platform-specific amount of disk space to store the chunks.
Feature
Log-based metrics on log buckets are now generally available (GA). In addition to features available in the preview, the GA release includes the ability to create bucket-level log-based metrics in the Google Cloud console.
March 09, 2023
Feature
You can now route logs through the Log Router of another Google Cloud project. The logs can then be managed by the other Google Cloud project, which includes log-based metrics, log-based alerts, and other log sinks. For more information, see Route logs to supported destinations .
March 01, 2023
Change
Log buckets in the following regions can now be upgraded to use Log Analytics:
us-central1
us-west1
asia-south1
For more information, see Supported regions .
Change
You can now use the gcloud CLI to do the following:
Create a log bucket and upgrade that bucket to use Log Analytics.
Upgrade an existing log bucket to use Log Analytics.
Create a linked dataset in BigQuery.
For more information, see Configure log buckets .
February 23, 2023
Feature
The time-range selector in the Logs Explorer has been updated to support a larger set of time range options, such as preset times, custom start and end times, and relative time ranges. For more information, see Use the time-range selector .
February 17, 2023
Feature
You can create log buckets that use Log Analytics and upgrade existing log buckets to use Log Analytics by using the Logging API. For more information, see
Create a bucket .
February 16, 2023
Feature
Version 2.25.1 of the Ops Agent introduces health checks. When the Ops Agent starts, it performs a series of checks for conditions that prevent the agent from running correctly. If the agent detects one of the conditions, it writes a message to its health-check log and exits. For more information, see Find Ops Agent troubleshooting information .
February 01, 2023
Change
To help you manage your costs, the Logs Storage page now displays the billable storage for the current month for each log bucket. For reference, this page also displays each log bucket's ingested bytes for the current and previous months.
January 17, 2023
Change
You can now save your SQL queries, and you can set custom retention periods on log buckets upgraded to use Log Analytics. For more information, see Save a query .
Change
Log Analytics is now GA. For more information, see Configure log buckets .
December 19, 2022
Feature
Cloud Logging now supports the following regions:
US
EU
For more information, see Data regionality for Cloud Logging .
November 07, 2022
Feature
You can now dynamically include your log content in your alert notifications for easier troubleshooting. For more information about extracting log content into labels, see Create a log-based alert (Monitoring API) .
November 04, 2022
Feature
The Logs tab available for each cluster on the Kubernetes Engine > Clusters page now includes suggested queries for your logs. For more information about using your GKE logs, see Viewing your GKE logs .
November 03, 2022
Change
You can now collect Aerospike logs from the Ops Agent, starting with version 2.22.0. For more information, see Monitoring third-party applications: Aerospike .
October 24, 2022
Feature
You can now instrument gRPC applications to use Microservices observability .
Pricing for Microservices observability is the same as Cloud Operations Pricing . There are no separate charges for using Cloud Trace, Cloud Monitoring, or Cloud Logging Microservices observability plugins.
October 21, 2022
Feature
To show or hide log entries similar to a log entry displayed in the Logs Explorer , expand the log entry and use the Similar entries menu.
October 04, 2022
Feature
You can now collect Oracle Database logs and metrics from the Ops Agent, starting with version 2.22.0. For more information, see Monitoring third-party applications: Oracle Database .
September 27, 2022
Feature
Using Log Analytics, you can run SQL queries that analyze your log data to generate useful insights. Log Analytics also let you use BigQuery to query your log data. For more information, see Log Analytics .
September 20, 2022
Feature
The Cloud Logging API now supports the following region:
Israel: me-west1 .
September 15, 2022
Change
Support for adding custom indexed LogEntry fields to your Cloud Logging buckets is now Generally Available. These indexes make querying your logs data faster.
September 08, 2022
Change
Cloud Audit Logging no longer redacts the principal email associated with service accounts in audit logs. For more information, see Caller identities in audit logs .
August 15, 2022
Feature
Bucket-level log-based metrics are now available in Preview . You can now create log-based metrics that are computed from the logs routed to a specific log bucket. For more information, see Log-based metrics on log buckets .
August 04, 2022
Feature
The Logs Explorer query results now show an icon for log entries that are part of error groups. You can click the icon to view details about the error group, exclude or show only log entries from the error group in the query results, or view related documentation. For more information, see Find log entries with error groups .
July 26, 2022
Feature
You can now collect Couchbase logs and metrics from the Ops Agent, starting with version 2.18.2. For more information, see Monitoring third-party applications: Couchbase .
July 18, 2022
Feature
You can now search your correlated log entries in the Logs Explorer. For more information, see Correlate log entries .
July 15, 2022
Feature
You can now collect SAP HANA logs and metrics from the Ops Agent, starting with version 2.18.1. For more information, see Monitoring third-party applications: SAP HANA .
Feature
You can now collect Vault logs from the Ops Agent, starting with version 2.18.1. For more information, see Monitoring third-party applications: Vault .
July 14, 2022
Change
Log-based alerting is now generally available ( GA ). Log-based alerts match on the content of your logs. When triggered, a log-based alert notifies you that a match has appeared in your logs and opens an incident in Cloud Monitoring. The minimum autoclose duration for incidents is now 30 minutes. For more information, see Monitor your logs and Use log-based alerts .
June 29, 2022
Feature
You can now collect Apache Flink logs from the Ops Agent, starting with version 2.17.0. For more information, see Monitoring third-party applications: Flink .
June 27, 2022
Change
The Cloud Logging agent version 1-18 for Windows is now available. This version updates the location of the position files so they are retained across upgrades. For installation information, see Installing the Cloud Logging agent .
May 30, 2022
Announcement
The Logs Explorer has now replaced the Legacy Log Viewer.
The Logs Explorer is the updated version of the Logging interface, and lets you quickly and efficiently retrieve, view, and analyze logs from your queries. For a detailed tour of the Logs Explorer's features, see Using the Logs Explorer .
May 27, 2022
Change
Support has been removed for two previously deprecated system metrics: logging.googleapis.com/excluded_log_entry_count and logging.googleapis.com/excluded_byte_count .
May 26, 2022
Feature
You can now collect IIS logs and additional metrics from the Ops Agent, starting with versions 2.14.0 (logs) and 2.15.0 (additional metrics). For more information, see Monitoring third-party applications: IIS .
Feature
You can now collect Jetty logs from the Ops Agent, starting with version 2.16.0. For more information, see Monitoring third-party applications: Jetty .
Feature
You can now collect Active Directory Domain Services logs and metrics from the Ops Agent, starting with version 2.15.0. For more information, see Monitoring third-party applications: Active Directory Domain Services .
Feature
You can now collect Varnish logs and metrics from the Ops Agent, starting with versions 2.16.0 (logs) and 2.15.0 (metrics). For more information, see Monitoring third-party applications: Varnish .
May 20, 2022
Feature
You can now see more log entries in the Logs Explorer as a result of several style changes.
May 05, 2022
Feature
You can now hide large amounts of similar log entries from your query results in the Logs Explorer. To learn more, see Hide similar logs .
April 28, 2022
Feature
You can now comment within your Logging queries. For more information, see Logging query language: comments .
April 26, 2022
Feature
You can now do the following in the improved Logs Explorer:
Use the new plain-text search field and filter menus to construct queries without using the query language
Customize your date and time format preferences for building queries and to display dates and times in the UI.
Toggle on and off the default summary fields to see a raw-text view of your logs.
Feature
When querying your logs data in the Logs Explorer, you can now select queries from a library , making it easier to explore your data and find logs during time-critical troubleshooting sessions.
April 25, 2022
Feature
The Cloud Logging API now supports the following regions:
Europe:
europe-southwest1
europe-west6
europe-west8
europe-west9
South America:
southamerica-west1
For more information, see Data Regionality for Cloud Logging .
April 14, 2022
Feature
In the Logs Explorer, pinning log entries has been improved and new options to view pinned log entries in different resource contexts have been added. To learn more, see Pin log entries .
April 04, 2022
Change
You can now add indexed LogEntry fields to your Cloud Logging buckets to make querying your logs data faster.
March 25, 2022
Feature
Cloud Logging now supports organization policies that can enforce CMEK protection. For information, see CMEK organization policies .
March 21, 2022
Change
Customer-managed encryption keys (CMEK) for Logs Storage are now Generally Available (GA). CMEK lets you create, control, and manage encryption keys to meet your data compliance needs. For details, see Manage the keys that protect Logging storage data .
March 11, 2022
Feature
You can now collect RabbitMQ logs from the Ops Agent, starting with version 2.12.0. For more information, see Monitoring third-party applications: RabbitMQ .
February 22, 2022
Feature
You can now collect Apache CouchDB logs from the Ops Agent, starting with version 2.11.0. For more information, see Monitoring third-party applications: CouchDB .
Feature
You can now collect Apache HBase logs and metrics from the Ops Agent, starting with version 2.11.0. For more information, see Monitoring third-party applications: HBase .
Feature
You can now collect Apache Hadoop logs and metrics from the Ops Agent, starting with version 2.11.0. For more information, see Monitoring third-party applications: Hadoop .
Feature
You can now collect Apache ZooKeeper logs from the Ops Agent, starting with version 2.11.0. For more information, see Monitoring third-party applications: ZooKeeper .
Feature
You can now collect WildFly logs from the Ops Agent, starting with version 2.11.0. For more information, see Monitoring third-party applications: WildFly .
February 14, 2022
Feature
You can now configure default storage regions and disabled _Default sinks for your Google Cloud organizations and all of their new projects and folders. For details, see Configure default resource settings for Logging .
Feature
You can now collect Apache Kafka metrics and logs from the Ops Agent, starting with version 2.10.0. For more information, see Monitoring third-party applications: Kafka .
Feature
You can now collect MongoDB logs from the Ops Agent, starting with version 2.10.0. For more information, see Collect logs from third-party applications: MongoDB .
Feature
You can now collect Apache Solr metrics and logs from the Ops Agent, starting with version 2.10.0. For more information, see Monitoring third-party applications: Solr .
February 10, 2022
Feature
Your regional preferences, including date and time formatting, are now supported in the Logs Explorer .
February 09, 2022
Feature
Compute Engine resource names, alongside their corresponding resource IDs, are now supported in the Logs Explorer. For details, see View Compute Engine logs .
January 26, 2022
Feature
You can now collect Apache Tomcat metrics and logs from the Ops Agent, starting with version 2.9.0. For more information, see Monitoring third-party applications: Apache Tomcat .
Feature
You can now collect PostgreSQL metrics and logs from the Ops Agent, starting with version 2.9.0. For more information, see Monitoring third-party applications: PostgreSQL .
Feature
Starting with Ops Agent version 2.9.0, you can use the exclude_logs logging processor to prevent the Ops Agent from ingesting specific logs. For more information, see Logging processors .
Feature
You can now collect Elasticsearch logs from the Ops Agent, starting with version 2.9.0. For more information, see Monitoring third-party applications: Elasticsearch .
January 07, 2022
Feature
You can now collect MariaDB metrics and logs from the Ops Agent, starting with version 2.8.0. For more information, see Monitoring third-party applications: MariaDB .
November 22, 2021
Deprecated
On or after March 1, 2022, the Legacy Logs Viewer will be shut down and all users will be redirected to use the Logs Explorer .
October 20, 2021
Feature
You can now collect Redis logs from the Ops Agent, starting with version 2.5.0. For more information, see Collecting logs from third-party applications: Redis .
Feature
You can now collect MySQL logs from the Ops Agent, starting with version 2.5.0. For more information, see Collecting logs from third-party applications: MySQL .
Feature
You can now collect Cassandra logs from the Ops Agent, starting with version 2.5.0. For more information, see Collecting logs from third-party applications: Cassandra .
October 11, 2021
Change
Cloud Logging now supports the asia-south2, asia-southeast2, australia-southeast2, northamerica-northeast2, and us-west4 regions. For a full list or regions, see Regionalization .
October 06, 2021
Feature
The Ops Agent now supports collecting logs from the systemd-journald service, starting with Ops Agent version 2.4.0. For information on configuring the systemd_journald receiver, see Configuring the Ops Agent: Logging receivers .
Feature
You can now collect Apache httpd logs from the Ops Agent, starting with version 2.4.0. For more information, see Collecting logs from third-party applications: Apache httpd .
August 31, 2021
Feature
You can now collect nginx metrics and logs from the Ops Agent, starting with version 2.1.0. For more information, see Monitoring third-party applications: nginx .
August 18, 2021
Feature
You can now use Chef to install and manage the Google Cloud operations suite agents across your fleet of Linux and Windows VMs. For more information, refer to the Chef Integration documentation.
August 02, 2021
Feature
You can now use Puppet to install and manage the Google Cloud operations suite agents across your fleet of Linux and Windows VMs. For more information, refer to the Puppet Integration documentation.
July 30, 2021
Feature
Cloud Logging now lets you control access to individual log entry fields using field-level access control. To learn more, see Field-level access control .
July 29, 2021
Change
Cloud Logging now supports the asia-east2 and europe-central2 regions. For a full list or regions, see Regionalization .
July 26, 2021
Change
Log entries that are exported to BigQuery that result in a schema mismatch are now being written to an error table. For more information, see Mismatches in schema .
July 23, 2021
Feature
You can now use Cloud External Key Manager keys for organization-level Log Router CMEK. For more information, see Enabling customer-managed encryption keys for Log Router .
July 15, 2021
Change
You can now view Monitoring data and link to the resources in the Cloud Console for Compute Engine logs in the Logs Explorer. For more information, see Viewing Monitoring data .
July 13, 2021
Change
Starting on October 12, 2021, your Dataflow logs that are ingested and stored in Cloud Logging will be charged at the standard Cloud Logging prices . It's recommended that you review the volume of Dataflow logs ingested into Cloud Logging through Metrics Explorer in Cloud Monitoring . For information on optimizing the log volume for your Dataflow jobs, see Controlling log volume .
Change
The Cloud Console now supports creating Logging sinks at the organization or folder level. For information on creating sinks, see Exporting logs with the Google Cloud console .
July 12, 2021
Feature
You can now install the Logging and Monitoring agents on multiple VMs from the Inventory tab on the Cloud Monitoring VM Instances page. You can select multiple VMs in your fleet for agent installation. The page generates the necessary installation command and provides a link to Cloud Shell, where you can run the command.
July 07, 2021
Feature
The Share link feature for queries in the Logs Explorer now lets you choose whether to include an absolute time range or a relative time range. With an absolute time range, the query includes static time values for the results, so the query always returns the same results. With a relative time range, you can set a value like "last 1 hour", and the results change as time passes.
Feature
Preview : Cloud Logging now supports alerts based on matching the content of your logs. When triggered, a log-based alert notifies you that a match has appeared in your logs and opens an incident in Cloud Monitoring. You can create log-based alerts by using the Logs Explorer or the Monitoring API. For more information, see Monitoring your logs and Using log-based alerts .
June 30, 2021
Feature
Cloud Logging lets you copy logs from a Cloud Logging bucket to a Cloud Storage bucket. To learn more, see Copying log entries .
Change
The Ops Agent is now Generally Available as version 2.0.0. This agent combines logging and metrics into a single agent. The Ops Agent is targeted toward specialized logging workloads that require higher throughput and improved resource efficiency.
For installation information, see Installing the Ops Agent . For information about migrating from an earlier version, see the transition guide .
The GA version of the Ops Agent can be configured to collect specific sets of metrics, as described in Configuring the Ops Agent . There is a small number of metrics that the GA version of the Ops Agent handles differently from the Preview versions of the Ops Agent and the Monitoring agent; see Differences in metric collection .
June 25, 2021
Change
Log entries viewed in JSON format in the Cloud Console are now displayed with the field names in alphabetical order.
June 15, 2021
Change
You can now view Monitoring data and link to the resources in the Cloud Console for certain logs, such as Google Kubernetes Engine logs, in the Logs Explorer. For more information, see Viewing Monitoring data .
May 06, 2021
Feature
The Logs Explorer Histogram offers new time controls, including zooming and scrolling, to give you more in-depth analysis of your logs data. For details, see Analyzing logs using time controls .
May 03, 2021
Feature
You can now add custom fields in the Logs Explorer to better analyze logs and refine your queries. For more information, see Adding fields to Log fields pane .
April 27, 2021
Feature
You can now install the Cloud Logging agent , Cloud Monitoring agent , and Ops Agent on VMs running OpenSUSE Leap versions 15, 15.1, and 15.2.
April 21, 2021
Feature
You can now provision and manage the Cloud Logging agent on Windows using Ansible. For more information, refer to the Ansible Role for Cloud Ops documentation.
April 12, 2021
Feature
Shared queries are now generally available (GA). To learn more, see Shared queries .
April 08, 2021
Feature
The Google Cloud Ops Agent is now available in Preview. This agent combines logging and metrics into a single agent that is targeted toward specialized logging workloads that require higher throughput and improved resource efficiency. It supports both Linux and Windows Compute Engine VMs.
Feature
Cloud Operations now offers the ability to install the Google Cloud Ops Agent via Ansible on Linux and Windows Compute Engine VMs.
Feature
Cloud Operations now offers the ability to provision the Google Cloud Ops Agent via Terraform on Linux and Windows Compute Engine VMs.
April 06, 2021
Change
Cloud Logging now supports 22 regions in which you can create a log bucket so that you can meet compliance and audit requirements when storing your logs.
March 29, 2021
Change
Logs Views are now Generally Available (GA). Using Logs Views, you can control who has access to the logs within your Logs Buckets. For more information on this feature, refer to the Managing Logs Views guide.
March 18, 2021
Feature
Cloud Logging now shows the breakdown of log severity levels in the Histogram pane. To learn more, see the Histogram section on the Logs Explorer page.
March 12, 2021
Change
Suggested queries is now generally available (GA). To learn more, go to Suggested queries .
March 04, 2021
Feature
Compute Engine's VM Instances dashboard now provides an Operations menu. The "View metrics" menu option brings you to the Infrastructure summary dashboard in Monitoring. The "View logs" menu option brings you to the Logs Explorer page in Logging.
Feature
Kubernetes Engine's Clusters and Workloads dashboards now provide an Operations menu. The "View metrics" menu option brings you to the GKE Dashboard in Monitoring. The "View logs" menu option brings you to the Logs Explorer page in Logging.
February 18, 2021
Change
Cloud Logging agent for Windows version 1-14 is now available. This version changes the default Windows configuration from using gRPC to REST for sending logs to the Cloud Logging API. For more information, refer to the release information on GitHub .
February 08, 2021
Change
Logging truncates oversized LogEntry label keys and values. For details, see Quotas and limits .
January 29, 2021
Change
Cloud Logging has increased the number of entries.write API calls from 60,000 to 120,000 per minute. For more information on quotas and limits, see Quotas and limits .
January 26, 2021
Feature
The gcloud commands for managing Agent Policies are now available in beta. For more information, refer to the gcloud documentation for Agent Policies .
January 22, 2021
Change
The Logs Explorer now provides a higher degree of contrast that improves readability.
January 14, 2021
Change
Cloud Logging now lets you share your saved queries with other users of a project. To learn more, go to the Shared queries section on the Building queries page .
December 16, 2020
Announcement
Logs regionalization is now generally available. You can set the region in which you want to store your logs data. For information about this feature, refer to the Regionalization documentation.
December 08, 2020
Fixed
Cloud Logging calculates the system logs-based metrics byte_count and log_entry_count on stored logs only, unlike user-defined logs-based metrics which are calculated on both stored and excluded logs. For more information, see System logs-based metrics .
This change is currently rolling out and affects all users after December 11, 2020.
December 07, 2020
Feature
In the Logs Explorer, you can now stream your log entries in real time as Cloud Logging ingests them. To learn more, see Streaming logs .
November 13, 2020
Feature
You can now use the Share link button in the Logs Explorer to create and share a shortened URL of your current query. For more information, see Using the Logs Explorer .
November 06, 2020
Feature
By using the new gcloud command and API for live tailing, you can now stream your logs in real time as your applications write them to the Cloud Logging API. To learn more, see Live tailing log entries .
November 05, 2020
Announcement
Beta release: You can set the region in which you want to store your logs data. For information about this feature, refer to the Regionalization documentation.
October 28, 2020
Feature
You can now create sinks from within the Logs Explorer and Logs Router pages. To learn more, see Exporting logs with the Google Cloud console .
Announcement
To help you understand your logs volume and usage within the context of your Logs Buckets, the Resource Usage page has been moved to the Logs Storage page, which now contains your resource usage information. To learn more, see Tracking logs usage .
October 22, 2020
Change
Cloud Logging now calculates logs-based metrics from both ingested and excluded logs. In other words, you can now calculate logs-based metrics from logs without ingesting them into a Logs Bucket.
This change started rolling out October 18, 2020 and will finish rolling out October, 30 2020 .
For more information, see Overview of logs-based metrics .
Announcement
Logs Views are now available in Preview. Using Logs Views, you can control who has access to the logs within your Logs Buckets. For more information on this feature, refer to the Managing Logs Views guide.
October 20, 2020
Change
Recent queries is now generally available (GA). To learn more, go to Recent queries .
October 19, 2020
Feature
In the Logs Explorer you can now download your logs in JSON and CSV to your computer, Google Drive, or view them in a new tab. To learn more, see Downloading logs .
October 15, 2020
Feature
The Ops Agent is now available in Preview. Ops Agent provides a single agent to collect logs and metrics on Compute Engine instances.
Note that the Ops Agent uses new configuration files that are not compatible with the standalone Cloud Monitoring and Cloud Logging agents.
October 13, 2020
Announcement
We've renamed the Logs Viewer (Preview) to the Logs Explorer. The Logs Explorer offers a robust set of tools for analyzing your logs data and is now the default viewer for Cloud Logging. To learn more, see Using the Logs Explorer .
The Logs Viewer (Classic) is now called the Legacy Logs Viewer. It will continue to be available and maintained until March 2021, but won't be actively developed further.
October 12, 2020
Change
Cloud Logging has deprecated the following two logs-based metrics related to exclusions:
logging.googleapis.com/excluded_log_entry_count
logging.googleapis.com/excluded_byte_count
Cloud Logging will stop populating these metrics on October 1, 2021.
September 22, 2020
Feature
The histogram panel in the Logs Viewer (Preview) now contains a viewport to help you quickly understand the time range of the log entries you're viewing within the Query results pane. To learn more, go to the Histogram panel .
September 21, 2020
Change
Logs Buckets are now generally available. For information about this feature, refer to the Managing logs buckets guide.
September 17, 2020
Feature
In the Logs Viewer (Preview), you can now pin log entries within the Query results and Histogram panes. To learn more, go to Pinning logs .
Feature
In the Logs Viewer (Preview), you can now view a log entry in its resource context. To learn more, go to Viewing a pinned log entry in its resource context .
Feature
You can now copy a link to a log entry in the Logs Viewer (Preview). To learn more, go to Copy a link to a log entry .
September 14, 2020
Feature
Cloud Logging now offers the ability to view a history of your ran queries through the Recent queries tab. To learn more, go to the Recent queries section on the Building queries page .
September 01, 2020
Change
Cloud Logging updated IAM custom role permissions. Users with custom roles should verify their permissions are correct. For a list of the permissions and roles, go to the Permissions and Roles section on the Access control page .
August 24, 2020
Feature
You can now view Cloud Trace information from within the Logs Viewer. To learn more, go to the Trace data section on the Using Logs Viewer (Preview) page .
August 17, 2020
Feature
To help you explore your logs more efficiently, Cloud Logging now provides suggested queries based on the context of your Google Cloud project. For more information, go to Suggested queries .
August 11, 2020
Feature
Beta release: You can now use Logs Buckets to centralize or divide your logs based on your needs. For information about this feature, refer to the Managing logs buckets guide.
Change
Users now manage logs exclusions through logs sinks. As a result, custom roles that have the logging.sinks.* permissions can now control the volume of logs ingested into Cloud Logging through logs sinks.
We recommend that you review any custom roles with the logging.sinks.* permissions so that you can make adjustments as needed.
August 03, 2020
Feature
Alpha release: You can now use Logs Buckets to centralize or divide your logs based on your needs. For information about this feature, refer to the Managing logs buckets guide. To participate in the alpha or to get notified when Logs Buckets goes beta, fill out the sign up form .
July 30, 2020
Change
The Logs field explorer panel is now generally available (GA). To learn more, see the Logs field explorer section on Logs Viewer (Preview) interface page .
June 30, 2020
Feature
Cloud Logging now contains a Logs Dashboard page that provides a high-level overview into the health of your systems running within a project. To learn more, see Logs Dashboard .
June 05, 2020
Change
Custom retention is now generally available (GA). In order to have time to explore this feature, you won't be charged for extended retention of logs until March 31, 2021. To learn more, see the Logging pricing section on the Pricing for Google Cloud's operations suite page .
June 03, 2020
Feature
In the Logs Viewer (Preview), you can now save your queries, which can then be viewed and run from the Saved queries tab. For more information, see the Saved queries section on the Building queries page .
May 18, 2020
Feature
Logs Viewer now contains the Logs field explorer panel, which lets you view aggregation-based results for your project's log fields and makes it more efficient to refine queries. To learn more, go to the Logs Viewer (Preview) page .
May 11, 2020
Feature
You can now use regular expressions to query your logs data and create filters. For more information, go to Using regular expressions .
April 27, 2020
Change
The Logs Viewer (Preview) is now GA. To learn more, go to the Logs Viewer (Preview) Overview page .
March 17, 2020
Change
Incoming log entries must have timestamps that don't exceed the
logs retention periods in the past, and that don't exceed 24 hours in the future. Log entries outside those time boundaries aren't ingested by Cloud Logging.
March 12, 2020
Change
Cloud Logging Agent for Windows version 1-11 is now available. This version upgrades fluentd from 1.4.2 to 1.7.4. Go to Installing the Cloud Logging agent for information on installing this version of the agent.
March 10, 2020
Feature
Logs Viewer (Preview) now contains a histogram panel. The histogram panel lets you visualize your logs data to more easily spot patterns and troubleshoot issues. For more information, see Using Logs Viewer (Preview) .
February 24, 2020
Feature
Beta release: You can now use the new Logs Viewer (Preview) to view, parse and analyze log data, and refine your query parameters. Go to Logs Viewer interface (Preview) for more information.
February 17, 2020
Change
BETA: You can now configure the retention periods of your logs data. For more information, go to Storing logs .
January 17, 2020
Feature
Customer-managed encryption keys (CMEK) for the Logs Router are now Generally Available (GA). CMEK lets you create, control, and manage encryption keys to meet your data compliance needs. For details, go to Enabling customer-managed encryption keys for Logs Router .
December 16, 2019
Feature
GA release: You can now use partitioned tables for logs exports to BigQuery. For details, go to Partitioned tables .
December 13, 2019
Change
Google Kubernetes Engine (GKE) version 1.15, which is now generally available, drops support for GKE versions 1.12 and earlier. As a result, the beta version of Stackdriver Kubernetes Engine Monitoring is no longer supported. If your GKE clusters are running version 1.12 or earlier, then you must upgrade them as soon as possible.
December 11, 2019
Deprecated
Legacy Stackdriver support for Google Kubernetes Engine (GKE) is deprecated. If you're using Legacy Stackdriver, then you must migrate to Stackdriver Kubernetes Engine Monitoring before Legacy Stackdriver is decommissioned. For more information, see Legacy Stackdriver support for GKE deprecation .
November 18, 2019
Feature
Customer-managed encryption keys (CMEK) for the Logs Router are now available in Beta. CMEK lets you create, control, and manage encryption keys to meet your data compliance needs. For details, go to Enabling customer-managed encryption keys for Logs Router .
September 20, 2019
Feature
Beta release: Stackdriver Logging now offers partitioned tables for exports to
BigQuery. For details, go to
Partitioned tables .
September 10, 2019
Feature
Stackdriver Logging now lets you save your advanced log queries to a Saved Searches library, where they can be managed and shared. Go to
Saved searches for details.
Change
When creating a new Google Kubernetes Engine (GKE) cluster, Stackdriver Kubernetes Engine Monitoring is now the default Stackdriver support option. This is a change from prior versions where Stackdriver Logging and Stackdriver Monitoring were the default Stackdriver support option. For more information, see Overview of Stackdriver support for GKE .
May 21, 2019
Feature
Stackdriver Kubernetes Engine Monitoring is now generally available. Users of the legacy Stackdriver support for monitoring and logging for Google Kubernetes Engine are encouraged to migrate to Stackdriver Kubernetes Engine Monitoring as soon as possible.
April 23, 2019
Change
The maximum size of a log entry has been increased to 256 KB from 100 KB. For
details on logging usage limits, go to Quotas and limits .
April 15, 2019
Feature
A new Windows version (v1-9) of the Stackdriver Logging agent is now
available. The new version saves the agent service logs on disk for easier
troubleshooting and supports the config.d configuration extension directory.
March 15, 2019
Change
Stackdriver agents are subject to an updated deprecation
policy . As part of this transition, the
next major version of the Stackdriver Monitoring and Stackdriver Logging agents will
stop supporting operating systems that are at the end of their lifecycle, as
well as some third-party agent plugins .
February 22, 2019
Change
You now have two choices for the access control model when creating a
Cloud Storage bucket: bucket-only (new) and object-level.
Select Set object-level and bucket-level permissions
as the access control model during bucket creation if you intend to use
the bucket as a sink destination.
See Errors exporting to Cloud Storage for details.
January 22, 2019
Change
In the Stackdriver Logging API, log sinks, metrics, and exclusions have two new
output-only fields: create time and last update time. See
LogSink for an example. If this
information isn't available for older resources, these fields aren't present.
December 03, 2018
Feature
The Logs Viewer has a new option to display a log entry in its resource
context. It can also pin a log entry while allowing you to change the
display context.
See Viewing Logs for details.
November 01, 2018
Feature
You can now view error and success metrics for your log sinks using
export system metrics .
October 19, 2018
Feature
You can now link from certain App Engine request logs to a detailed trace
that explains the request's latency.
You can also filter log entries according to their latencies, and if they
contain detailed trace data viewable by Stackdriver Trace.
See Viewing latency in Trace for details.
October 01, 2018
Feature
The Logs Viewer can now download up to 300 log entries in JSON or CSV format.
See Viewing Logs for details.
September 14, 2018
Feature
The format of service account names for older log
sinks is being changed so that
all log sinks will have consistent service account names. This naming format
has already been applied to project-level sinks on BigQuery, Cloud Pub/Sub,
and Cloud Storage permission pages. In the coming weeks,
this naming format will be applied to organization-level sinks and
folder-level sinks, and to sinks listed on the Logs Exports page in the
Logs Viewer. There are no associated changes to functionality or granted
permissions.
September 05, 2018
Feature
Access Transparency logging is now Generally Available.
See Overview of Access
Transparency for details.
July 25, 2018
Change
Audit logs exports to BigQuery now feature a compact format. On
March 1, 2019, the older extended format will be removed.
June 29, 2018
Change
On July 1, 2018 at 00:00 PDT, Stackdriver switches to consumption-based
pricing. For more information, see
Stackdriver Pricing .
June 26, 2018
Feature
You can now immediately disable all logs ingestion. For instructions, see
Stopping all logs ingestion .
June 19, 2018
Feature
Google Cloud Storage logs streaming time has been reduced from 12 hours
to 3 hours. For details, see
Using Exported Logs .
June 18, 2018
Change
Between June 18, 2018 at 06:00 PDT and July 1, 2018 at 00:00 PDT,
your use of Stackdriver is free . The service tiers have been removed, and you
can experience all features without incurring costs. Thereafter, Stackdriver
switches to consumption-based pricing. For more information,
see Upcoming Pricing .
June 12, 2018
Feature
You can now enable and configure your Data Access audit logs using the Google Cloud
console. For details, see
Configuring Data Access logs .
May 17, 2018
Feature
You can now see your Logging usage and estimate your bill according to the
new Stackdriver pricing and in advance of billing enforcement.
See Estimating your bills for details.
May 08, 2018
Feature
You can now specify custom fields in your Logs Viewer log-entry summary lines.
See Add custom fields for details.
May 02, 2018
Feature
Stackdriver Kubernetes Monitoring is released
in Beta for Kubernetes 1.10 clusters running in Kubernetes
Engine . The previous Stackdriver support is still
available for those who do not opt into this Beta release. This release
affects Logging by introducing new monitored resource
types and new Kubernetes
metrics .
April 10, 2018
Feature
You can now specify that the Stackdriver Logging agent converts your payloads
to JSON format for certain log inputs. For details on enabling this feature, see
Structured Logging .
March 12, 2018
Change
Beginning on June 30, 2018, Stackdriver is switching to consumption-based
pricing, including revised quotas. For more
information, see Stackdriver Upcoming Pricing .
Feature
Logging data retention has been increased to 30 days for all projects.
February 01, 2018
Feature
The Logging agent now supports partial success for logs ingestion. Any invalid
log entries in a full set will be dropped, and the valid log entries
now will be successfully ingested into the Stackdriver Logging API; previously,
the full set would have been dropped if it contained any invalid log entries.
To enable partial success, upgrade your Logging agent to
google-fluentd v1.5.27 .
December 13, 2017
Feature
Filtering logs by time range is now available in the Logs Viewer. For more
information, see Scroll to a time .
December 04, 2017
Change
Logging agent recommendation : VM instances should have at least 1 GB of
memory to run the Logging agent.
Feature
Google Cloud Platform HTTP(S) load balancing logging now includes logs for
rejected requests , such as those due to invalid or expired URL
signatures, and aligns httpRequest.requestSize with metrics from the
Stackdriver Monitoring API . For
more information, see HTTP(S) Load Balancing Logging .
November 29, 2017
Feature
Logs-based metrics are now Generally Available. For more information, see
Overview of Logs-based Metrics .
Change
Logging agent installation instructions : The checksum validation step for
the installation script has been removed. You can see the new instructions on
the logging agent installation page.
Fixed
Logs Viewer update: Fixes a problem related to the daylight saving time
transition in the U.K. If you see your logs displaying in the wrong time zone,
you can set your default time zone by using the Jump to date drop-down menu
to select a different time zone. For more information, see
Logs Viewer user interfaces .
November 01, 2017
Change
Pricing changes : Billing for logs overages will begin March 31, 2018 .
This date extends the one that was previously communicated to give Stackdriver
customers more time to apply the exclusion filters
feature to control which logs are stored in Logging. Billing
for custom and user-defined logs-based metrics is still postponed. For more
information, see Stackdriver Pricing .
October 30, 2017
Feature
Exclusion filters are now Generally Available. For more information, see
Excluding Logs , and the Resource Usage page in
the Logs Viewer.
October 24, 2017
Change
The gcloud logging command group is now generally available. gcloud beta
logging will be removed at the end of December 2017. For more information,
see gcloud logging .
September 12, 2017
Feature
Admin Activity audit logs retention has been extended to 400 days for both
the Stackdriver Basic and Premium service tiers. For more information, see
Audit log retention .
Feature
Logging agent update to 1.5.18-1. Allows enabling JSON detection via
configuration, fixes a problem with string-valued
timestamps, and allows setting the following LogEntry fields:
trace , sourceLocation , and operation .
August 31, 2017
Feature
Logs-based metrics now support extracting values from log entries to create
distribution metrics and to populate user-defined metric labels. This lets
you create multiple time series in a single logs-based metric. Also, the latency
of logs-based metrics has dropped from approximately 5 minutes to 1 minute, so
you can respond more quickly to the metrics. For more information,
see Overview of Logs-based metrics .
Feature
Exclusion filters let you control which logs are kept in Stackdriver
Logging. The Resource Usage page in the Logs Viewer breaks down log volume
by resource type. For more information,
see Excluding Logs .
Change
Logging agent : The Stackdriver Logging agent package has been updated to
version 1.5.17. The agent will now send smaller requests, improving log delivery
latency and increasing queries per second, which may affect users with high log
volumes. Also, the package's bundled Ruby has been updated to version 2.2.7. If
you have configuration snippets or extra gems that depend on older Ruby
features, you may have to update them.
Change
Pricing changes : The free per-project allotment of logs is being increased
from 5 GB to 50 GB. Beginning December 1, 2017, we will enforce the new
limits and begin charging for logs kept in Stackdriver Logging above the limits.
For more information, see Stackdriver Pricing .
August 23, 2017
Feature
Aggregated Exports : Organizations and folders can now export selected log
entries from all of their projects with a single sink created in the
organization or folder. For more information, see
Aggregated Exports .
Change
Timestamp handling . The following changes to log entry timestamps have been
made or are planned.
1. Logging does not modify the user-provided
timestamp field, except to set it to the current time if it is omitted. A
second field, receivedTimestamp , is set to the time Logging
receives the entry.
2. The timestamp field is used to compute the age of log entries and to
enforce the log retention period . Prior to the change, the
receivedTimestamp field is used for that purpose.
3. Logging discards log entries whose
timestamps are more than 24 hours in the future or
are further in the past than the log entry's retention period.
Prior to the change, future timestamps
and very old timestamps are handled in an unpredictable fashion.
For more information, see
LogEntry
and entries.write .
July 10, 2017
Change
API Migration . Information about the deprecated
v1 API is being removed from general documentation. Note: Obsolete link to
migration information removed on December 13, 2017. For updated information, see
APIs & Reference .
Feature
IAM support for Logging now includes custom roles. For more
information, see
Logging Access Control .
June 05, 2017
Issue
Exported audit logs in BigQuery : The BigQuery schema for exported audit log
entries changed on June 5, 2017. The following audit log components now have
shortened field names when they are exported to
BigQuery: protoPayload , protoPayload.serviceData ,
protoPayload.request , and protoPayload.response . This
is a breaking change for queries involving these fields. For more information
see Audit log field changes .
Feature
Apps Script : You can access your Apps Script logs in Logging.
Feature
Logs Viewer : You can more easily expand all fields in a log entry.
May 01, 2017
Feature
Data access logs are now available and are user-configurable. See Configuring Data Access Logs .
Feature
Aggregated exports of logs : You can now create log sinks in organizations, billing accounts, and folders. Those sinks can export log entries from all included projects. See Aggregated Exports .
Deprecated
v1 API turndown: writeLogEntries : As a final step in the v1 API turndown,
the v1 WriteLogEntries method will be shut down on October 1, 2017.
You must migrate any applications that write log entries using the v1 API. You
must also upgrade any manually-installed Logging agents in your
VM instances. Note: Obsolete link to migration information removed on December
13, 2017. For updated information, see APIs &
Reference .
Deprecated
v1 API turndown: sinks and logs-based metrics : Migrate your remaining v1
export sinks and v1 logs-based metrics. If you do not, Logging
will migrate them by mid-July, 2017. Note: Obsolete link to migration
information removed on December 13, 2017. For updated information, see
APIs & Reference .
April 01, 2017
Feature
Resource types : Several new resource types are added, including types for Cloud Bigtable, Cloud Dataflow, and Cloud Container Engine.
March 31, 2017
Change
V1 API turndown : The date of the v1 API turndown has changed. See the release note for May 2017.
Change
Logging agent for Windows : If you install the Logging agent on VM instances
running Microsoft Windows, be aware that there are restrictions
on the folders used for the installer and the installed agent. For details,
Installing on Linux and Windows .
February 06, 2017
Feature
App Engine Flexible Environment : For App Engine Flexible Environment, the Logs Viewer can
now display application log entries ("log lines") inside the log entry for the associated
service request. This is similar to the functionality in the App Engine Standard Environment.
Feature
Resuming log streaming : The Logs Viewer now automatically resumes streaming logs when
its browser window or tab is selected. You no longer have to restart streaming when returning to the page.
Feature
Exporting logs from organizations, folders, and billing accounts : The
gcloud logging
command-line tool now supports creating log sinks to export audit logs from organizations,
folders, and billing accounts. This feature also supported in the API.
Feature
Viewing multiple logs : Previously in the Logs Viewer, you could view a single log or "all
logs" from a single resource type. Now you can select any number of
logs within a resource type to view, using the log name dropdown
menu.
For example, when viewing App Engine applications, the default is now to display log
entries from any of these logs: ngnix.request , stdout , request log , and stderr .
Change
Remove daily API quotas : The Logging API no longer includes daily API quotas. The API still
enforces short-term (per 100s) quotas on API calls, as displayed in the Stackdriver Logging API dashboard.
Change
Deleting logs-based metrics in alerting policies : Attempting to delete a
logs-based metric
that is used in one or more Stackdriver Monitoring alerting policies now fails with the
status FAILED_PRECONDITION . You must remove the metric from the alerting policies or
delete the alerting policies prior to deleting the logs-based metric.
Issue
Logs retention and source restriction : With the implementation of the Basic and Premium
service tiers in December 2016, Stackdriver Logging began enforcing retention and log source
restrictions for projects that are in the Stackdriver Basic tier or are not associated with
a Stackdriver account. In the Basic tier, log entries are visible for 7 days after they are
received, and logs from non-Google Cloud sources, including Amazon Web Services, are rejected.
December 12, 2016
Change
Logs Viewer v2 : The Logs Viewer has been migrated to the Stackdriver Logging API v2.
For the full documentation, Viewing Logs (v2) . Note: Obsolete link to migration information removed on December 13, 2017. For updated
information, see APIs & Reference .
Feature
New LogEntry fields : Fields trace and sourceLocation were added to
LogEntry .
Feature
List logs : the Stackdriver Logging API now has "list logs" methods:
organizations.logs.list and
projects.logs.list .
November 21, 2016
Feature
Sinks : The Stackdriver Logging API now allows both projects and organizations to own sinks.
In addition, sinks can now export log entries to destinations in other projects. See
LogSink .
Feature
Organizations : The Stackdriver Logging API now allows both projects and organizations to
own logs. A log belonging to an organization is named
"organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" . See
organizations.logs.delete .
October 20, 2016
Feature
Logging is generally available to Google Cloud Platform customers. Individual features that
are in Alpha or Beta release are marked as such in the documentation.
Change
Pricing : Stackdriver is now available in Basic and Premium service tiers. All existing and
new Stackdriver accounts are entered into a 30-day free trial of the Premium Tier. At the end
of the trial period, you could lose some functionality you had during the Beta release unless
you upgrade to the Premium Tier. For more details, see
Pricing .
Feature
API v2 : The Stackdriver Logging API v2 is generally available, providing a simplified log
format. During a transition period, you can use the same API at either of these two endpoints:
https://logging.googleapis.com/v2beta1/... or https://logging.googleapis.com/v2/... .
Deprecated
API v1 : The Stackdriver Logging API v1 (v1beta3) is deprecated. Users of this API should
migrate to the v2 API. The v1 API will be removed from service on March 30, 2017.
Note: Obsolete link to migration information removed on December 13, 2017. For updated
information, see
APIs & Reference .
September 09, 2016
Change
The Google Cloud Logging API is now known as the Stackdriver Logging API. This change does not affect any code.
June 15, 2016
Change
A change to the v2beta1 API might affect some existing code. In the following methods,
the parameter projectName has been changed to parent : sinks.create , sinks.list ,
metrics.list , metrics.create .
Change
The Google Logging API v2beta1 reference documentation now includes code snippets for each
method. For example, see
entries.list .
April 27, 2016
Change
The user documentation has been reorganized. The documentation landing page
and the left-side navigation entries have changed. Existing URLs to individual documentation pages will be redirected if necessary.
March 23, 2016
Change
Google Cloud Logging is now Stackdriver Logging , part of the
Google Stackdriver
suite of products. You can now manage logs from Amazon EC2 virtual machine instances alongside
your Google Cloud projects. See Logging agent
for more details.
February 18, 2016
Change
The logging agent authorization
instructions now recommend storing private-key credentials as
/etc/google/auth/application_default_credentials.json . You do not have to move your existing
file at /root/.config/gcloud/application_default_credentials.json .
January 29, 2016
Change
The Logs Viewer now lets you
view the structure
of log entries. You can also show or hide
log entries with similar field values.
December 10, 2015
Change
Version 2 of the Cloud Logging API is now
available. Among other changes, the V2 API lets you retrieve log entries
from Logging using the
entries.list method.
October 22, 2015
Change
The Logs Viewer now has cascading menus
for selecting log entries from Google App Engine and Google Compute Engine.
October 13, 2015
Change
See logs-based-metrics to learn how to
create Google Cloud Monitoring metrics using logs filters.
Change
The list of log types has been expanded.
September 15, 2015
Change
Added Java examples of Logging API usage. Simplified the
authorization code for Java and Python, and
the same code now runs on App Engine, Compute Engine, and your development workstation.
September 09, 2015
Change
The command-line interface
in the Google Cloud SDK is now named gcloud beta logging .
August 12, 2015
Feature
The Cloud Logging API and
command-line interface now support project sinks.
A project sink can export log entries from any combination of logs, based on
advanced logs filters .
August 03, 2015
Feature
Cloud Logging now has advanced logs filters that let you specify arbitrary Boolean expressions that
match on log entries. See
Using advanced logs filters
in the Logs Viewer, and the
Advanced Logs Filters guide .
June 15, 2015
Change
The logging agent has new, simpler installation instructions
You no longer have to edit the agent's configuration file to install
private-key authorization .
Change
The Logging documentation has been reorganized. The
table of contents
now groups all information about the logging agent, viewing logs, and exporting logs in
individual sections.
May 21, 2015
Change
A new Google Cloud console UI panel for the logs export feature
was released. The UI lets you export a subset of your logs from a logs service. For example,
you could export syslog from Google Compute Engine without exporting activity_log .
April 28, 2015
Feature
You can now stream logs from Cloud Logging to Google Cloud Pub/Sub
and from there to your own endpoints. This involves changes to
logs export .
For example, use Cloud Pub/Sub to route logs through
Google Cloud Dataflow
and into tools like Google BigQuery .
March 19, 2015
Feature
The google-fluentd logging agent supports
two dozen third-party logs .
Feature
Cloud Logging is now available in Beta release, allowing you to configure, visualize,
analyze and export your Google Compute Engine and Google App Engine logs.
Feature
The Google Cloud Logging API is now available in Beta release.
The API lets you write logs, create logs, and control the export of logs. Client libraries
make it easy to use the API in your favorite programming language.
Feature
The google-fluentd logging agent runs with
additional operating systems ,
including Debian, Ubuntu, Red Hat, and CentOS. A single script installs the agent on any
supported operating system.
Feature
The glcoud logging command-line interface, which uses
the API, is now available in Beta release. The commands provide an easy way to perform
administrative tasks such configuring logs export.
Change
The Logs Viewer refresh brings more search
options and quicker access to
logs export configurations .
Regex-search has been removed as part of this refresh.
Change
The Cloud Logging documentation has been improved with more set-up options,
simpler procedures and
more examples .
January 15, 2015
Feature
Beta release: App Engine logs can be exported to Cloud Storage and BigQuery.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
