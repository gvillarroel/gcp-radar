---
title: "Pub/Sub release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/release-notes
  title: "Pub/Sub release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Resources
Send feedback
Pub/Sub release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains production updates and feature announcements for the
Pub/Sub service. For language-specific
updates about Pub/Sub
Client Library releases,
use the following links:
C# ,
Go ,
Java ,
Node.js ,
PHP ,
Python ,
and
Ruby .
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 06, 2026
Feature
Pub/Sub now offers the AI Inference Single Method Transform (SMT). This SMT lets
you get inferences on Pub/Sub messages from Vertex AI models. The model's
inferences are added to each message, making them available for downstream
processing along with the original message data.
The change is being rolled out in a phased manner over the rest of the week. For
more information, see AI Inference SMT .
This feature is
generally available .
March 13, 2026
Feature
You can now use the Pub/Sub remote MCP server to
manage Pub/Sub resources. You can create, list, get, update, and delete Pub/Sub
topics, subscriptions, and snapshots, as well as publish messages to topics.
This feature is in
Preview .
January 20, 2026
Feature
Pub/Sub is now available in the Bangkok region ( asia-southeast3 ). For more
information, see Cloud locations .
December 29, 2025
Libraries
Java
1.144.1 (2025-12-22)
Bug Fixes
Lower the Subscriber protocol version to disable the streaming pull keepalive feature ( #2652 ) ( ca99c2a )
December 22, 2025
Libraries
Python
2.34.0 (2025-12-16)
Features
support mTLS certificates when available (#1566) ( 24761a2f )
Java
1.145.0-rc1 (2025-12-16)
Features
[java] allow passing libraries_bom_version from env ( #1967 ) ( #2033 ) ( 825c5f8 )
Add IngestionFailureEvent to the external proto ( 6c67798 )
Add Kafka-based sources to IngestionDataSourceSettings proto and IngestionFailureEvent proto ( 2947169 )
add keepalive feature to tear down streams in their absence ( #2605 ) ( 99aca4f )
Add MessageTransformationFailureReason to IngestionFailureEvent ( 8271399 )
Add OpenTelemetry tracing to the Publisher and Subscriber ( #2086 ) ( db522b6 )
Add SchemaViolationReason to IngestionFailureEvent ( 21cc376 )
add service_account_email for export subscriptions ( #2054 ) ( 670db3e )
add support for message transforms to Topic and Subscription ( 3889a05 )
add use_topic_schema for Cloud Storage Subscriptions ( #2082 ) ( 11d67d4 )
Annotate some resource fields with their corresponding API types ( ab60afa )
deprecate enabled field for message transforms and add disabled field ( 76b2a3d )
enable hermetic library generation ( #2048 ) ( 283a5e8 )
generate renamed go pubsub admin clients ( 4472d7b )
Implement SubscriberShutdownSettings ( #2569 ) ( 8195f6f )
introduce java.time variables and methods ( #2271 ) ( 7edfd9c )
next release from main branch is 1.138.0 ( #2361 ) ( b6ba56c )
next release from main branch is 1.141.0 ( #2481 ) ( bd9f385 )
support the protocol version in StreamingPullRequest ( af40810 )
track batch size using serialized size of PublishRequest ( #2113 ) ( be78e64 )
update with latest from main ( #2644 ) ( 96513b2 )
Upgrade protobuf gen code to 4.33 ( #2645 ) ( db3c75f )
Bug Fixes
Add retries for ack and modack operations that don't return with a metadata map ( #2385 ) ( 00070b7 )
Deflake WaiterTest ( #2600 ) ( 298c8db )
deps: update the Java code generator (gapic-generator-java) to 2.47.0 ( ccd23af )
deps: update the Java code generator (gapic-generator-java) to 2.49.0 ( 77546e0 )
deps: update the Java code generator (gapic-generator-java) to 2.50.0 ( 3f21af3 )
deps: update the Java code generator (gapic-generator-java) to 2.51.0 ( 0b0d52c )
deps: update the Java code generator (gapic-generator-java) to 2.51.1 ( 9c166f7 )
deps: update the Java code generator (gapic-generator-java) to 2.52.0 ( 0d8c8bf )
deps: update the Java code generator (gapic-generator-java) to 2.53.0 ( b952e58 )
deps: update the Java code generator (gapic-generator-java) to 2.54.0 ( ccf670f )
deps: update the Java code generator (gapic-generator-java) to 2.55.1 ( 76b2a3d )
deps: update the Java code generator (gapic-generator-java) to 2.56.2 ( 4472d7b )
deps: update the Java code generator (gapic-generator-java) to 2.56.3 ( 2b928a8 )
deps: update the Java code generator (gapic-generator-java) to 2.57.0 ( 017eb0f )
deps: update the Java code generator (gapic-generator-java) to 2.58.0 ( 3713edb )
deps: update the Java code generator (gapic-generator-java) to 2.59.0 ( 0eece50 )
deps: update the Java code generator (gapic-generator-java) to 2.60.1 ( c9ef2cd )
deps: update the Java code generator (gapic-generator-java) to 2.60.2 ( 7afae21 )
deps: update the Java code generator (gapic-generator-java) to 2.61.0 ( 42eb599 )
deps: update the Java code generator (gapic-generator-java) to 2.62.0 ( 65e324e )
deps: update the Java code generator (gapic-generator-java) to 2.62.1 ( ac08d5f )
deps: update the Java code generator (gapic-generator-java) to 2.62.2 ( c02d304 )
deps: update the Java code generator (gapic-generator-java) to 2.62.3 ( af40810 )
deps: update the Java code generator (gapic-generator-java) to 2.63.0 ( ab60afa )
deps: update the Java code generator (gapic-generator-java) to 2.64.1 ( b210251 )
next release candidate ( cf06e2d )
Prevent excessive string parsing when publishing and receiving messages to improve performance ( #2317 ) ( 07b1350 )
Remove element_count_limit and request_byte_limit from pubsub_gapic.yaml ( 7afae21 )
Update .OwlBot-hermetic.yaml to preserve SubscriberShutdownSettings files ( #2583 ) ( f3cf5e7 )
Use a separate cached thread pool for handling ack and modack response callback for EOD-enabled subscriptions ( #2505 ) ( 224c269 )
Use the system executor instead of a separate thread pool for EOD ack/modack callbacks ( #2526 ) ( ffeb017 )
Dependencies
Change scope of grpc-inprocess dependency from runtime to test ( #2038 ) ( 1ab45c9 )
Remove OpenTelemetry semconv dependency ( #2611 ) ( 240fc37 )
update actions/checkout action to v5 ( #2520 ) ( 409398a )
update actions/checkout action to v5 ( #2531 ) ( f687f11 )
update actions/checkout action to v5 ( #2539 ) ( 83144e6 )
update actions/checkout action to v5 ( #2562 ) ( b7fa499 )
update actions/checkout action to v5 ( #2573 ) ( 4153dba )
update actions/checkout action to v5 ( #2576 ) ( 1375f6d )
update actions/checkout action to v5 ( #2584 ) ( 25059ce )
update actions/checkout action to v5 ( #2592 ) ( 6ca466d )
update actions/checkout action to v5 ( #2613 ) ( a69ffdd )
update actions/github-script action to v8 ( #2542 ) ( 0e6f0da )
update actions/setup-java action to v5 ( #2535 ) ( 2ed87d2 )
update dependency com.google.cloud:google-cloud-bigquery to v2.40.1 ( #2021 ) ( 0873594 )
update dependency com.google.cloud:google-cloud-bigquery to v2.40.2 ( #2046 ) ( f81c5e1 )
update dependency com.google.cloud:google-cloud-bigquery to v2.40.3 ( #2071 ) ( 0844bfb )
update dependency com.google.cloud:google-cloud-bigquery to v2.41.0 ( #2093 ) ( 217b8a3 )
update dependency com.google.cloud:google-cloud-bigquery to v2.42.0 ( #2124 ) ( 24ebe24 )
update dependency com.google.cloud:google-cloud-bigquery to v2.42.1 ( #2152 ) ( 1457489 )
update dependency com.google.cloud:google-cloud-bigquery to v2.42.2 ( #2157 ) ( d671347 )
update dependency com.google.cloud:google-cloud-bigquery to v2.42.3 ( #2173 ) ( 294d039 )
update dependency com.google.cloud:google-cloud-bigquery to v2.43.1 ( #2202 ) ( acaf5f2 )
update dependency com.google.cloud:google-cloud-bigquery to v2.43.3 ( #2256 ) ( f7fbc6c )
update dependency com.google.cloud:google-cloud-bigquery to v2.44.0 ( #2270 ) ( a5f70a9 )
update dependency com.google.cloud:google-cloud-bigquery to v2.45.0 ( #2292 ) ( 79a8982 )
update dependency com.google.cloud:google-cloud-bigquery to v2.46.0 ( #2309 ) ( 97bd44e )
update dependency com.google.cloud:google-cloud-bigquery to v2.47.0 ( #2331 ) ( 216feef )
update dependency com.google.cloud:google-cloud-bigquery to v2.48.0 ( #2343 ) ( 3bbd7e1 )
update dependency com.google.cloud:google-cloud-bigquery to v2.48.1 ( #2356 ) ( 7d3d2e4 )
update dependency com.google.cloud:google-cloud-bigquery to v2.49.0 ( #2380 ) ( 405e485 )
update dependency com.google.cloud:google-cloud-bigquery to v2.49.2 ( #2399 ) ( ff48708 )
update dependency com.google.cloud:google-cloud-bigquery to v2.50.0 ( #2422 ) ( 993b2d0 )
update dependency com.google.cloud:google-cloud-bigquery to v2.50.1 ( #2435 ) ( b37c557 )
update dependency com.google.cloud:google-cloud-bigquery to v2.51.0 ( #2457 ) ( d74215a )
update dependency com.google.cloud:google-cloud-bigquery to v2.52.0 ( #2467 ) ( fe08a6f )
update dependency com.google.cloud:google-cloud-bigquery to v2.53.0 ( #2489 ) ( 5a454b9 )
update dependency com.google.cloud:google-cloud-bigquery to v2.54.0 ( #2506 ) ( 6bf8e62 )
update dependency com.google.cloud:google-cloud-bigquery to v2.54.1 ( #2523 ) ( 0678a74 )
update dependency com.google.cloud:google-cloud-bigquery to v2.54.2 ( #2538 ) ( 10a8283 )
update dependency com.google.cloud:google-cloud-bigquery to v2.55.0 ( #2553 ) ( 15b9e66 )
update dependency com.google.cloud:google-cloud-bigquery to v2.55.1 ( #2566 ) ( 66c9ec4 )
update dependency com.google.cloud:google-cloud-bigquery to v2.55.2 ( #2582 ) ( d0f9673 )
update dependency com.google.cloud:google-cloud-bigquery to v2.55.3 ( #2602 ) ( d14106c )
update dependency com.google.cloud:google-cloud-core to v2.38.1 ( #2027 ) ( 535edf6 )
update dependency com.google.cloud:google-cloud-core to v2.39.0 ( #2057 ) ( 43446d2 )
update dependency com.google.cloud:google-cloud-core to v2.40.0 ( #2087 ) ( 26b01c9 )
update dependency com.google.cloud:google-cloud-core to v2.41.0 ( #2120 ) ( 1f6428a )
update dependency com.google.cloud:google-cloud-core to v2.42.0 ( #2140 ) ( 80dca35 )
update dependency com.google.cloud:google-cloud-core to v2.43.0 ( #2161 ) ( 05a37b7 )
update dependency com.google.cloud:google-cloud-core to v2.44.0 ( #2184 ) ( faecb3b )
update dependency com.google.cloud:google-cloud-core to v2.44.1 ( #2190 ) ( 9ea45dc )
update dependency com.google.cloud:google-cloud-core to v2.45.0 ( #2213 ) ( 5ee969b )
update dependency com.google.cloud:google-cloud-core to v2.46.0 ( #2238 ) ( dc06d54 )
update dependency com.google.cloud:google-cloud-core to v2.47.0 ( #2249 ) ( 3df5729 )
update dependency com.google.cloud:google-cloud-core to v2.48.0 ( #2263 ) ( d7e5588 )
update dependency com.google.cloud:google-cloud-core to v2.49.0 ( #2285 ) ( cd94a19 )
update dependency com.google.cloud:google-cloud-core to v2.49.1 ( #2300 ) ( cf2822b )
update dependency com.google.cloud:google-cloud-core to v2.50.0 ( #2321 ) ( 5c40bcd )
update dependency com.google.cloud:google-cloud-core to v2.51.0 ( #2338 ) ( ac2403e )
update dependency com.google.cloud:google-cloud-core to v2.52.0 ( #2348 ) ( f0977b4 )
update dependency com.google.cloud:google-cloud-core to v2.53.1 ( #2365 ) ( 748058f )
update dependency com.google.cloud:google-cloud-core to v2.54.3 ( #2393 ) ( 0ffa26a )
update dependency com.google.cloud:google-cloud-core to v2.55.0 ( #2413 ) ( 3e181e7 )
update dependency com.google.cloud:google-cloud-core to v2.56.0 ( #2427 ) ( b2a3e35 )
update dependency com.google.cloud:google-cloud-core to v2.58.0 ( #2443 ) ( d4599d9 )
update dependency com.google.cloud:google-cloud-core to v2.58.1 ( #2476 ) ( 96a2354 )
update dependency com.google.cloud:google-cloud-core to v2.58.2 ( #2493 ) ( 9a1c17e )
update dependency com.google.cloud:google-cloud-core to v2.59.0 ( #2507 ) ( 070cf07 )
update dependency com.google.cloud:google-cloud-core to v2.60.0 ( #2527 ) ( 0166e21 )
update dependency com.google.cloud:google-cloud-core to v2.60.1 ( #2543 ) ( fbb45ce )
update dependency com.google.cloud:google-cloud-core to v2.60.2 ( #2557 ) ( 460bcd9 )
update dependency com.google.cloud:google-cloud-core to v2.60.3 ( #2571 ) ( ac2c85a )
update dependency com.google.cloud:google-cloud-core to v2.61.0 ( #2588 ) ( 244cf75 )
update dependency com.google.cloud:google-cloud-core to v2.62.1 ( #2608 ) ( fee0500 )
update dependency com.google.cloud:google-cloud-storage to v2.39.0 ( #2040 ) ( eb6bd9c )
update dependency com.google.cloud:google-cloud-storage to v2.40.0 ( #2066 ) ( dfcaeb5 )
update dependency com.google.cloud:google-cloud-storage to v2.40.1 ( #2095 ) ( 0d64d6c )
update dependency com.google.cloud:google-cloud-storage to v2.41.0 ( #2129 ) ( 2348d20 )
update dependency com.google.cloud:google-cloud-storage to v2.42.0 ( #2145 ) ( 77c3e78 )
update dependency com.google.cloud:google-cloud-storage to v2.43.0 ( #2174 ) ( ae800d7 )
update dependency com.google.cloud:google-cloud-storage to v2.43.1 ( #2194 ) ( 979e420 )
update dependency com.google.cloud:google-cloud-storage to v2.43.2 ( #2226 ) ( eb87c04 )
update dependency com.google.cloud:google-cloud-storage to v2.44.1 ( #2240 ) ( f8dae4d )
update dependency com.google.cloud:google-cloud-storage to v2.45.0 ( #2268 ) ( 80a09e6 )
update dependency com.google.cloud:google-cloud-storage to v2.46.0 ( #2291 ) ( 7b60884 )
update dependency com.google.cloud:google-cloud-storage to v2.47.0 ( #2303 ) ( 707f842 )
update dependency com.google.cloud:google-cloud-storage to v2.48.0 ( #2322 ) ( 93b9419 )
update dependency com.google.cloud:google-cloud-storage to v2.48.1 ( #2332 ) ( 23fd7a8 )
update dependency com.google.cloud:google-cloud-storage to v2.48.2 ( #2341 ) ( eeb99a9 )
update dependency com.google.cloud:google-cloud-storage to v2.49.0 ( #2358 ) ( 81d3435 )
update dependency com.google.cloud:google-cloud-storage to v2.50.0 ( #2372 ) ( b81164a )
update dependency com.google.cloud:google-cloud-storage to v2.52.1 ( #2396 ) ( 283a6e1 )
update dependency com.google.cloud:google-cloud-storage to v2.52.2 ( #2421 ) ( 1224ee5 )
update dependency com.google.cloud:google-cloud-storage to v2.52.3 ( #2436 ) ( 4f309d1 )
update dependency com.google.cloud:google-cloud-storage to v2.53.1 ( #2452 ) ( b4af237 )
update dependency com.google.cloud:google-cloud-storage to v2.53.2 ( #2469 ) ( fa51a01 )
update dependency com.google.cloud:google-cloud-storage to v2.53.3 ( #2486 ) ( 9416cc9 )
update dependency com.google.cloud:google-cloud-storage to v2.54.0 ( #2510 ) ( 0fd589e )
update dependency com.google.cloud:google-cloud-storage to v2.55.0 ( #2517 ) ( b67acf1 )
update dependency com.google.cloud:google-cloud-storage to v2.56.0 ( #2536 ) ( 80d9ca1 )
update dependency com.google.cloud:google-cloud-storage to v2.57.0 ( #2547 ) ( 133f8c7 )
update dependency com.google.cloud:google-cloud-storage to v2.58.0 ( #2561 ) ( 0189388 )
update dependency com.google.cloud:google-cloud-storage to v2.58.1 ( #2580 ) ( d156cdb )
update dependency com.google.cloud:google-cloud-storage to v2.59.0 ( #2603 ) ( d9d05bf )
update dependency com.google.cloud:google-cloud-storage to v2.60.0 ( #2610 ) ( 1cae247 )
update dependency com.google.cloud:sdk-platform-java-config to v3.30.1 ( #2028 ) ( aedcffd )
update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #2058 ) ( a998ef5 )
update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #2088 ) ( aebc3ed )
update dependency com.google.cloud:sdk-platform-java-config to v3.33.0 ( #2121 ) ( 7fbea6d )
update dependency com.google.cloud:sdk-platform-java-config to v3.34.0 ( #2141 ) ( 273fbf3 )
update dependency com.google.cloud:sdk-platform-java-config to v3.35.0 ( #2162 ) ( 27eaffd )
update dependency com.google.cloud:sdk-platform-java-config to v3.36.0 ( #2185 ) ( 5ca2c7c )
update dependency com.google.cloud:sdk-platform-java-config to v3.36.1 ( #2191 ) ( 555216e )
update dependency com.google.cloud:sdk-platform-java-config to v3.37.0 ( #2214 ) ( d938709 )
update dependency com.google.cloud:sdk-platform-java-config to v3.39.0 ( #2251 ) ( 083cc7c )
update dependency com.google.cloud:sdk-platform-java-config to v3.41.0 ( #2286 ) ( 0c0a1b9 )
update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #2301 ) ( 53c1a8a )
update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #2324 ) ( 84e8562 )
update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #2336 ) ( 996f4eb )
update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #2349 ) ( 90ed10b )
update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #2366 ) ( 15899d1 )
update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #2394 ) ( 17f7fd7 )
update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #2406 ) ( 8963ed0 )
update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #2414 ) ( d78823f )
update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #2418 ) ( 5f87661 )
update dependency com.google.cloud:sdk-platform-java-config to v3.48.0 ( #2428 ) ( cfa91fa )
update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #2444 ) ( a59135c )
update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #2446 ) ( 6434be1 )
update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #2448 ) ( d89a14d )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #2461 ) ( 715916a )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #2477 ) ( e1657cb )
update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #2494 ) ( 9f73ef0 )
update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #2508 ) ( a7be2a7 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #2528 ) ( e424d11 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #2544 ) ( 9fe7550 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #2558 ) ( 0623ac5 )
update dependency com.google.cloud:sdk-platform-java-config to v3.52.3 ( #2572 ) ( 0785ee4 )
update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #2589 ) ( ce7cb09 )
update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #2609 ) ( c99373f )
update dependency com.google.cloud.opentelemetry:exporter-trace to v0.32.0 ( #2205 ) ( 76f17e4 )
update dependency com.google.cloud.opentelemetry:exporter-trace to v0.33.0 ( #2225 ) ( cc1b072 )
update dependency com.google.cloud.opentelemetry:exporter-trace to v0.34.0 ( #2376 ) ( 06768cd )
update dependency com.google.cloud.opentelemetry:exporter-trace to v0.36.0 ( #2440 ) ( 50a3eb9 )
update dependency com.google.protobuf:protobuf-java-util to v4.27.0 ( #2044 ) ( 37e94ce )
update dependency com.google.protobuf:protobuf-java-util to v4.27.1 ( #2065 ) ( 6baf69a )
update dependency com.google.protobuf:protobuf-java-util to v4.27.2 ( #2091 ) ( 9859f11 )
update dependency com.google.protobuf:protobuf-java-util to v4.27.3 ( #2127 ) ( 8523b4f )
update dependency com.google.protobuf:protobuf-java-util to v4.27.4 ( #2153 ) ( 32c78b3 )
update dependency com.google.protobuf:protobuf-java-util to v4.28.0 ( #2155 ) ( 5f61fe1 )
update dependency com.google.protobuf:protobuf-java-util to v4.28.1 ( #2167 ) ( bb8ea71 )
update dependency com.google.protobuf:protobuf-java-util to v4.28.2 ( #2179 ) ( c9bbd2c )
update dependency com.google.protobuf:protobuf-java-util to v4.28.3 ( #2237 ) ( 75abe83 )
update dependency com.google.protobuf:protobuf-java-util to v4.29.0 ( #2276 ) ( 54ef88d )
update dependency com.google.protobuf:protobuf-java-util to v4.29.1 ( #2279 ) ( de3c9e1 )
update dependency com.google.protobuf:protobuf-java-util to v4.29.2 ( #2294 ) ( 48d4ac1 )
update dependency com.google.protobuf:protobuf-java-util to v4.29.3 ( #2302 ) ( 9e90e2c )
update dependency com.google.protobuf:protobuf-java-util to v4.30.1 ( #2364 ) ( 05eb9c0 )
update dependency com.google.protobuf:protobuf-java-util to v4.30.2 ( #2383 ) ( 4119cc0 )
update dependency com.google.protobuf:protobuf-java-util to v4.31.0 ( #2430 ) ( 232fac1 )
update dependency com.google.protobuf:protobuf-java-util to v4.31.1 ( #2442 ) ( a0be1bb )
update dependency com.google.protobuf:protobuf-java-util to v4.32.0 ( #2524 ) ( 44ff087 )
update dependency com.google.protobuf:protobuf-java-util to v4.32.1 ( #2551 ) ( 49722cb )
update dependency com.google.protobuf:protobuf-java-util to v4.33.0 ( #2587 ) ( 33724ce )
update dependency com.google.protobuf:protobuf-java-util to v4.33.1 ( #2612 ) ( e92debc )
update dependency org.apache.avro:avro to v1.11.4 security ( 31f276b )
update dependency org.assertj:assertj-core to v3.26.3 ( #2204 ) ( 71c2e76 )
update dependency org.assertj:assertj-core to v3.27.2 ( #2296 ) ( e5b68a5 )
update dependency org.assertj:assertj-core to v3.27.3 ( #2313 ) ( 5e80b57 )
update dependency org.assertj:assertj-core to v3.27.4 ( #2518 ) ( 67695bc )
update dependency org.assertj:assertj-core to v3.27.6 ( #2560 ) ( c82766a )
update dependency org.easymock:easymock to v5.6.0 ( #2069 ) ( 5f144a4 )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.2 ( #2035 ) ( 40fdd7a )
update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2096 ) ( 42f12ed )
update dependency org.xerial.snappy:snappy-java to v1.1.10.6 ( #2135 ) ( 102ff84 )
update dependency org.xerial.snappy:snappy-java to v1.1.10.7 ( #2165 ) ( e7fb60e )
update dependency org.xerial.snappy:snappy-java to v1.1.10.8 ( #2492 ) ( a55e214 )
update dependency ubuntu to v24 ( #2193 ) ( f295b01 )
update googleapis/sdk-platform-java action to v2.47.0 ( #2212 ) ( 6a9723d )
update googleapis/sdk-platform-java action to v2.49.0 ( #2250 ) ( af0f194 )
update googleapis/sdk-platform-java action to v2.50.0 ( #2261 ) ( d0aab7d )
update googleapis/sdk-platform-java action to v2.51.0 ( #2284 ) ( 0be820e )
update googleapis/sdk-platform-java action to v2.51.1 ( #2298 ) ( 16e0144 )
update googleapis/sdk-platform-java action to v2.52.0 ( #2320 ) ( 01dd3de )
update googleapis/sdk-platform-java action to v2.54.0 ( #2347 ) ( ac8db2d )
update googleapis/sdk-platform-java action to v2.55.1 ( #2367 ) ( de6f84a )
update googleapis/sdk-platform-java action to v2.57.0 ( #2415 ) ( 1ddf9b8 )
update googleapis/sdk-platform-java action to v2.59.0 ( #2445 ) ( 12d4cfb )
update googleapis/sdk-platform-java action to v2.60.0 ( #2462 ) ( ee8e5c7 )
update googleapis/sdk-platform-java action to v2.60.0 ( #2464 ) ( 7a0af37 )
update googleapis/sdk-platform-java action to v2.60.0 ( #2471 ) ( 2b0e8e0 )
update googleapis/sdk-platform-java action to v2.60.1 ( #2475 ) ( e7c0b5d )
update googleapis/sdk-platform-java action to v2.61.0 ( #2509 ) ( 32df6b6 )
update googleapis/sdk-platform-java action to v2.62.1 ( #2545 ) ( 17f28ef )
update googleapis/sdk-platform-java action to v2.62.2 ( #2559 ) ( 3f1d901 )
update sdk platform java dependencies ( #2239 ) ( 8f4f855 )
update sdk platform java dependencies ( #2262 ) ( b689fe2 )
update sdk-platform-java-config to 3.55.0-rc1 ( #2642 ) ( ed86f36 )
Documentation
A comment for field code in message .google.pubsub.v1.JavaScriptUDF is changed ( 3889a05 )
Add ingestion from GCS sample ( #2211 ) ( ddb7391 )
Add OpenTelemetry samples ( #2208 ) ( c447fe5 )
Add samples and tests for ingestion from Kafka sources ( #2315 ) ( eea603b )
Fix repository URL in samples README ( #2280 ) ( 8aeff1a )
sample: Add samples for topic and subscription SMTs ( #2388 ) ( f35de28 )
samples: Optimistic subscribe sample ( #2063 ) ( 53a4844 )
sample: Update the subscribe with error listener and subscribe with exactly-once samples ( #2437 ) ( 17c142b )
update documentation for JavaScriptUDF to indicate that the message_id metadata field is optional instead of required ( f904786 )
Update emulator sample to create a topic and publish to it ( #2039 ) ( 21d5cfc )
December 15, 2025
Libraries
Java
1.144.0 (2025-12-11)
Features
Add keepalive feature to tear down streams in their absence ( #2605 ) ( 99aca4f )
Make v1 the default protocolVersion ( #2623 ) ( 12f014d )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.64.2 ( b4b7f83 )
Dependencies
Update actions/checkout action to v5 ( #2613 ) ( a69ffdd )
Update actions/checkout action to v6 ( #2619 ) ( 6cd2bb6 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.56.0 ( #2617 ) ( 13d5e3d )
Update dependency com.google.cloud:google-cloud-core to v2.62.1 ( #2608 ) ( fee0500 )
Update dependency com.google.cloud:google-cloud-core to v2.62.2 ( #2632 ) ( 2d567d1 )
Update dependency com.google.cloud:google-cloud-storage to v2.60.0 ( #2610 ) ( 1cae247 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.2 ( #2633 ) ( 5081aac )
Update dependency com.google.protobuf:protobuf-java-util to v4.33.1 ( #2612 ) ( e92debc )
Update dependency com.google.protobuf:protobuf-java-util to v4.33.2 ( #2625 ) ( 900783f )
Documentation
Add the IDENTIFIER field behavior annotation to fields of Cloud Pub/Sub methods that represent a specific identity and need to be sourced with additional care ( b4b7f83 )
November 17, 2025
Libraries
Java
1.143.1 (2025-11-13)
Bug Fixes
Deflake WaiterTest ( #2600 ) ( 298c8db )
deps: Update the Java code generator (gapic-generator-java) to 2.64.1 ( b210251 )
Dependencies
Remove OpenTelemetry semconv dependency ( #2611 ) ( 240fc37 )
Update actions/checkout action to v5 ( #2592 ) ( 6ca466d )
Update dependency com.google.cloud:google-cloud-bigquery to v2.55.3 ( #2602 ) ( d14106c )
Update dependency com.google.cloud:google-cloud-core to v2.61.0 ( #2588 ) ( 244cf75 )
Update dependency com.google.cloud:google-cloud-storage to v2.59.0 ( #2603 ) ( d9d05bf )
Update dependency com.google.cloud:sdk-platform-java-config to v3.54.1 ( #2609 ) ( c99373f )
Update dependency com.google.protobuf:protobuf-java-util to v4.33.0 ( #2587 ) ( 33724ce )
November 03, 2025
Libraries
Python
2.32.0 (2025-10-28)
Features
Adds Python 3.14 support ( #1512 ) ( 95a2690 )
Debug logs ( #1460 ) ( b5d4a45 )
Support the protocol version in StreamingPullRequest ( #1455 ) ( e6294a1 )
Bug Fixes
Ignore future warnings on python versions ( #1546 ) ( 8e28dea )
Python
2.33.0 (2025-10-30)
Features
Add AwsKinesisFailureReason.ApiViolationReason ( ac68093 )
Add tags to Subscription, Topic, and CreateSnapshotRequest messages for use in CreateSubscription, CreateTopic, and CreateSnapshot requests respectively ( ac68093 )
Annotate some resource fields with their corresponding API types ( ac68093 )
Bug Fixes
Deprecate credentials_file argument ( ac68093 )
Documentation
A comment for field received_messages in message .google.pubsub.v1.StreamingPullResponse is changed ( ac68093 )
October 27, 2025
Libraries
Java
1.143.0 (2025-10-20)
Features
Annotate some resource fields with their corresponding API types ( ab60afa )
Implement SubscriberShutdownSettings ( #2569 ) ( 8195f6f )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.63.0 ( ab60afa )
Update .OwlBot-hermetic.yaml to preserve SubscriberShutdownSettings files ( #2583 ) ( f3cf5e7 )
Dependencies
Update actions/checkout action to v5 ( #2576 ) ( 1375f6d )
Update actions/checkout action to v5 ( #2584 ) ( 25059ce )
Update dependency com.google.cloud:google-cloud-bigquery to v2.55.2 ( #2582 ) ( d0f9673 )
Update dependency com.google.cloud:google-cloud-storage to v2.58.1 ( #2580 ) ( d156cdb )
Update dependency com.google.cloud:sdk-platform-java-config to v3.53.0 ( #2589 ) ( ce7cb09 )
Go
2.3.0 (2025-10-22)
Features
Annotate some resource fields with their corresponding API types (PiperOrigin-RevId: 820071518) ( 0241a9ca )
Add tags to Subscription, Topic, and CreateSnapshotRequest messages for use in CreateSubscription, CreateTopic, and CreateSnapshot requests respectively (PiperOrigin-RevId: 820071518) ( 0241a9ca )
Add AwsKinesisFailureReason.ApiViolationReason (PiperOrigin-RevId: 820071518) ( 0241a9ca )
Documentation
A comment for field received_messages in message .google.pubsub.v1.StreamingPullResponse is changed (PiperOrigin-RevId: 820071518) ( 0241a9ca )
October 20, 2025
Libraries
Go
2.2.1 (2025-10-14)
Bug Fixes
pubsub/v2: Avoid Receive hang on context cancellation ( #13114 ) ( e7e169d )
pubsub/v2: Upgrade gRPC service registration func ( 8fffca2 )
October 13, 2025
Libraries
Java
1.142.0 (2025-10-07)
Features
Support the protocol version in StreamingPullRequest ( af40810 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.3 ( af40810 )
Dependencies
Update actions/checkout action to v5 ( #2562 ) ( b7fa499 )
Update actions/checkout action to v5 ( #2573 ) ( 4153dba )
Update dependency com.google.cloud:google-cloud-bigquery to v2.55.1 ( #2566 ) ( 66c9ec4 )
Update dependency com.google.cloud:google-cloud-core to v2.60.2 ( #2557 ) ( 460bcd9 )
Update dependency com.google.cloud:google-cloud-core to v2.60.3 ( #2571 ) ( ac2c85a )
Update dependency com.google.cloud:google-cloud-storage to v2.58.0 ( #2561 ) ( 0189388 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.3 ( #2572 ) ( 0785ee4 )
Update dependency org.assertj:assertj-core to v3.27.6 ( #2560 ) ( c82766a )
October 06, 2025
Libraries
Go
2.2.0 (2025-10-03)
Features
pubsub/v2: Support the protocol version in StreamingPullRequest ( #12985 ) ( 4e8c9d5 )
Bug Fixes
pubsub/v2: Respect ShutdownBehavior when handling timeout ( #13021 ) ( 0135d93 )
September 29, 2025
Libraries
Java
1.141.5 (2025-09-24)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.2 ( c02d304 )
Dependencies
Update actions/checkout action to v5 ( #2539 ) ( 83144e6 )
Update actions/github-script action to v8 ( #2542 ) ( 0e6f0da )
Update dependency com.google.cloud:google-cloud-bigquery to v2.55.0 ( #2553 ) ( 15b9e66 )
Update dependency com.google.cloud:google-cloud-core to v2.60.1 ( #2543 ) ( fbb45ce )
Update dependency com.google.cloud:google-cloud-storage to v2.57.0 ( #2547 ) ( 133f8c7 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.2 ( #2558 ) ( 0623ac5 )
Update dependency com.google.protobuf:protobuf-java-util to v4.32.1 ( #2551 ) ( 49722cb )
Update googleapis/sdk-platform-java action to v2.62.2 ( #2559 ) ( 3f1d901 )
Go
2.1.0 (2025-09-25)
Features
pubsub/v2: Add subscriber shutdown options ( #12829 ) ( 14c3887 )
September 15, 2025
Libraries
Java
1.141.4 (2025-09-11)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.62.1 ( ac08d5f )
Dependencies
Update actions/checkout action to v5 ( #2531 ) ( f687f11 )
Update actions/setup-java action to v5 ( #2535 ) ( 2ed87d2 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.54.2 ( #2538 ) ( 10a8283 )
Update dependency com.google.cloud:google-cloud-storage to v2.56.0 ( #2536 ) ( 80d9ca1 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #2544 ) ( 9fe7550 )
Update googleapis/sdk-platform-java action to v2.62.1 ( #2545 ) ( 17f28ef )
September 08, 2025
Libraries
Go
2.0.1 (2025-09-03)
Bug Fixes
pubsub/v2: Update flowcontrol metrics even when disabled ( #12590 ) ( c153495 )
Documentation
pubsub/v2: Move wiki to package doc ( #12605 ) ( 3de795e )
Go
1.50.1 (2025-09-04)
Bug Fixes
pubsub/v2: Update flowcontrol metrics even when disabled ( #12590 ) ( c153495 )
Documentation
pubsub: Update migration docs with seek ( #12642 ) ( 40538c3 )
August 25, 2025
Libraries
Java
1.141.3 (2025-08-19)
Bug Fixes
Use the system executor instead of a separate thread pool for EOD ack/modack callbacks ( #2526 ) ( ffeb017 )
Dependencies
Update actions/checkout action to v5 ( #2520 ) ( 409398a )
Update dependency com.google.cloud:google-cloud-bigquery to v2.54.1 ( #2523 ) ( 0678a74 )
Update dependency com.google.cloud:google-cloud-core to v2.60.0 ( #2527 ) ( 0166e21 )
Update dependency com.google.cloud:google-cloud-storage to v2.55.0 ( #2517 ) ( b67acf1 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.52.0 ( #2528 ) ( e424d11 )
Update dependency com.google.protobuf:protobuf-java-util to v4.32.0 ( #2524 ) ( 44ff087 )
Update dependency org.assertj:assertj-core to v3.27.4 ( #2518 ) ( 67695bc )
August 11, 2025
Libraries
Java
1.141.2 (2025-08-05)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.61.0 ( 42eb599 )
Use a separate cached thread pool for handling ack and modack response callback for EOD-enabled subscriptions ( #2505 ) ( 224c269 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.54.0 ( #2506 ) ( 6bf8e62 )
Update dependency com.google.cloud:google-cloud-core to v2.59.0 ( #2507 ) ( 070cf07 )
Update dependency com.google.cloud:google-cloud-storage to v2.54.0 ( #2510 ) ( 0fd589e )
Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #2508 ) ( a7be2a7 )
Update googleapis/sdk-platform-java action to v2.61.0 ( #2509 ) ( 32df6b6 )
August 04, 2025
Libraries
Java
1.141.1 (2025-07-28)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.2 ( 7afae21 )
Remove element_count_limit and request_byte_limit from pubsub_gapic.yaml ( 7afae21 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.53.0 ( #2489 ) ( 5a454b9 )
Update dependency com.google.cloud:google-cloud-core to v2.58.2 ( #2493 ) ( 9a1c17e )
Update dependency com.google.cloud:google-cloud-storage to v2.53.3 ( #2486 ) ( 9416cc9 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #2494 ) ( 9f73ef0 )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.8 ( #2492 ) ( a55e214 )
Go
1.50.0 (2025-07-28)
Features
pubsub/v2: Add new v2 library ( #12218 ) ( c798f62 )
Bug Fixes
pubsub: Update google.golang.org/api to 0.229.0 ( 3319672 )
Documentation
pubsub: Add docs comment to MaxOutstandingBytes ( #12601 ) ( 76ddb34 )
Python
2.31.1 (2025-07-28)
Bug Fixes
Change Log Severities for Terminated Streams ( #1433 ) ( 3a3aa79 )
Propagate Otel Context to Subscriber Callback if Provided ( #1429 ) ( b0f6f49 )
July 31, 2025
Deprecated
Deprecated: The v2 Pub/Sub Ruby client library, google-cloud-pubsub/v2.x , is now deprecated. Effective July 31st, 2026, this version will no longer receive security or bug fixes. To receive new features, migrate to the newest version, google-cloud-pubsub/v3.x .
July 21, 2025
Libraries
Java
1.141.0 (2025-07-11)
Features
Add MessageTransformationFailureReason to IngestionFailureEvent ( 8271399 )
Next release from main branch is 1.141.0 ( #2481 ) ( bd9f385 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.60.1 ( c9ef2cd )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.52.0 ( #2467 ) ( fe08a6f )
Update dependency com.google.cloud:google-cloud-core to v2.58.1 ( #2476 ) ( 96a2354 )
Update dependency com.google.cloud:google-cloud-storage to v2.53.2 ( #2469 ) ( fa51a01 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.1 ( #2477 ) ( e1657cb )
Update googleapis/sdk-platform-java action to v2.60.0 ( #2471 ) ( 2b0e8e0 )
Update googleapis/sdk-platform-java action to v2.60.1 ( #2475 ) ( e7c0b5d )
Go
2.0.0 (2025-07-16)
To migrate from the v1 cloud.google.com/go/pubsub, please follow the migration guide
Features
pubsub/v2: Add MessageTransformationFailureReason to IngestionFailureEvent ( 208745b )
pubsub/v2: Add new v2 library ( #12218 ) ( c798f62 )
pubsub/v2: Add SchemaViolationReason to IngestionFailureEvent ( d8ae687 )
pubsub/v2: Generate renamed go pubsub admin clients ( a95a0bf )
pubsub/v2: Release 2.0.0 ( #12568 ) ( 704efce )
Documentation
pubsub/v2: Document that the acknowledge_confirmation and modify_ack_deadline_confirmation fields in message .google.pubsub.v1.StreamingPullResponse are not guaranteed to be populated ( 208745b )
pubsub/v2: Standardize spelling of "acknowledgment" in Pub/Sub protos ( d8ae687 )
pubsub/v2: Update v2 package docs with migration guide ( #12564 ) ( 5ef6068 )
July 15, 2025
Deprecated
Deprecated: The v1 Pub/Sub Go client library, cloud.google.com/go/pubsub , is now deprecated. Effective July 31st, 2026, this library will no longer receive security or bug fixes. To receive new features, migrate to the newest version, cloud.google.com/go/pubsub/v2 .
July 14, 2025
Libraries
Python
2.31.0 (2025-06-26)
Features
Add MessageTransformationFailureReason to IngestionFailureEvent ( #1427 ) ( 8ab13e1 )
Bug Fixes
Surface Fatal Stream Errors to Future; Adjust Retryable Error Codes ( #1422 ) ( e081beb )
June 30, 2025
Libraries
Java
1.140.2 (2025-06-25)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.51.0 ( #2457 ) ( d74215a )
Update dependency com.google.cloud:google-cloud-core to v2.58.0 ( #2443 ) ( d4599d9 )
Update dependency com.google.cloud:google-cloud-storage to v2.53.1 ( #2452 ) ( b4af237 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #2461 ) ( 715916a )
Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.36.0 ( #2440 ) ( 50a3eb9 )
Update dependency com.google.protobuf:protobuf-java-util to v4.31.1 ( #2442 ) ( a0be1bb )
Update dependency org.easymock:easymock to v5.6.0 ( #2069 ) ( 5f144a4 )
Update googleapis/sdk-platform-java action to v2.60.0 ( #2462 ) ( ee8e5c7 )
Update googleapis/sdk-platform-java action to v2.60.0 ( #2464 ) ( 7a0af37 )
June 16, 2025
Libraries
Python
2.30.0 (2025-06-07)
Features
Add SchemaViolationReason to IngestionFailureEvent ( #1411 ) ( c046ca2 )
June 09, 2025
Libraries
Java
1.140.0 (2025-06-03)
Features
Add SchemaViolationReason to IngestionFailureEvent ( 21cc376 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.50.1 ( #2435 ) ( b37c557 )
Update dependency com.google.cloud:google-cloud-storage to v2.52.3 ( #2436 ) ( 4f309d1 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #2444 ) ( a59135c )
Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #2446 ) ( 6434be1 )
Update dependency com.google.protobuf:protobuf-java-util to v4.31.0 ( #2430 ) ( 232fac1 )
Update googleapis/sdk-platform-java action to v2.59.0 ( #2445 ) ( 12d4cfb )
Documentation
sample: Update the subscribe with error listener and subscribe with exactly-once samples ( #2437 ) ( 17c142b )
Java
1.140.1 (2025-06-05)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 0eece50 )
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #2448 ) ( d89a14d )
Go
June 02, 2025
Libraries
Python
2.29.1 (2025-05-23)
Bug Fixes
Remove setup.cfg configuration for creating universal wheels ( #1376 ) ( 60639c4 )
Documentation
sample: Add samples for topic and subscription SMTs ( #1386 ) ( 4d072e0 )
Update documentation for JavaScriptUDF to indicate that the message_id metadata field is optional instead of required ( #1380 ) ( be90054 )
Update readme links ( #1409 ) ( 77ba05d )
Feature
General availability: Pub/Sub now offers Single Message Transforms (SMTs) that enable lightweight modifications to message data and attributes directly within Pub/Sub. SMTs can be set as properties of topics or subscriptions. The change is being rolled out in a phased manner over the rest of the week. For more information about SMTs, see Single Message Transforms (SMTs) overview .
May 26, 2025
Libraries
Go
{: track-name='go'}
This is an alpha release for the Pub/Sub v2 library and should not be used for production.
May 19, 2025
Libraries
Java
1.139.4 (2025-05-15)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.57.0 ( 017eb0f )
deps: Update the Java code generator (gapic-generator-java) to 2.58.0 ( 3713edb )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.50.0 ( #2422 ) ( 993b2d0 )
Update dependency com.google.cloud:google-cloud-core to v2.55.0 ( #2413 ) ( 3e181e7 )
Update dependency com.google.cloud:google-cloud-core to v2.56.0 ( #2427 ) ( b2a3e35 )
Update dependency com.google.cloud:google-cloud-storage to v2.52.2 ( #2421 ) ( 1224ee5 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #2418 ) ( 5f87661 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.48.0 ( #2428 ) ( cfa91fa )
Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.34.0 ( #2376 ) ( 06768cd )
Documentation
sample: Add samples for topic and subscription SMTs ( #2388 ) ( f35de28 )
May 12, 2025
Libraries
Java
1.139.2 (2025-05-05)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.56.3 ( 2b928a8 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.49.2 ( #2399 ) ( ff48708 )
Update dependency com.google.cloud:google-cloud-core to v2.54.3 ( #2393 ) ( 0ffa26a )
Update dependency com.google.cloud:google-cloud-storage to v2.52.1 ( #2396 ) ( 283a6e1 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.46.3 ( #2406 ) ( 8963ed0 )
Java
1.139.3 (2025-05-06)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.47.0 ( #2414 ) ( d78823f )
Update googleapis/sdk-platform-java action to v2.57.0 ( #2415 ) ( 1ddf9b8 )
April 28, 2025
Libraries
Java
1.139.0 (2025-04-25)
Features
Generate renamed go pubsub admin clients ( 4472d7b )
Bug Fixes
Add retries for ack and modack operations that don't return with a metadata map ( #2385 ) ( 00070b7 )
deps: Update the Java code generator (gapic-generator-java) to 2.56.2 ( 4472d7b )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.49.0 ( #2380 ) ( 405e485 )
Update dependency com.google.cloud:google-cloud-core to v2.53.1 ( #2365 ) ( 748058f )
Update dependency com.google.cloud:google-cloud-storage to v2.50.0 ( #2372 ) ( b81164a )
Update dependency com.google.protobuf:protobuf-java-util to v4.30.1 ( #2364 ) ( 05eb9c0 )
Update dependency com.google.protobuf:protobuf-java-util to v4.30.2 ( #2383 ) ( 4119cc0 )
Documentation
Update documentation for JavaScriptUDF to indicate that the message_id metadata field is optional instead of required ( f904786 )
Java
1.139.1 (2025-04-25)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.46.2 ( #2394 ) ( 17f7fd7 )
April 14, 2025
Libraries
Go
1.49.0 (2025-04-07)
Features
pubsub: Support message transforms ( #11957 ) ( 84bf25b )
April 07, 2025
Libraries
Go
1.48.1 (2025-04-01)
Bug Fixes
pubsub/pstest: Message ordering issue ( #11603 ) ( 1d6ffc0 )
pubsub: Update golang.org/x/net to 0.37.0 ( 1144978 )
Documentation
pubsub: Update documentation for JavaScriptUDF to indicate that the message_id metadata field is optional instead of required ( f437f08 )
March 24, 2025
Libraries
Python
2.29.0 (2025-03-19)
Features
Add REST Interceptors which support reading metadata ( 4363179 )
Add support for opt-in debug logging ( 4363179 )
Deprecate enabled field for message transforms and add disabled field ( 4363179 )
Bug Fixes
Allow logs to propagate upstream for caplog testing ( #1374 ) ( fa39b0e )
Allow Protobuf 6.x ( #1369 ) ( c95b7a5 )
Fix typing issue with gRPC metadata when key ends in -bin ( 4363179 )
Documentation
A comment for field code in message .google.pubsub.v1.JavaScriptUDF is changed ( 4363179 )
Add samples and test for ingestion from Kafka sources ( #1354 ) ( 820f986 )
Deprecate enabled field for message transforms and add disabled field ( 4363179 )
samples: Increase example max_bytes setting for cloud storage subscriptions to encourage more performant subscribe ( #1324 ) ( cb760a7 )
March 17, 2025
Libraries
Go
1.48.0 (2025-03-12)
Features
pubsub/pstest: Support listening on custom address ( #11606 ) ( 63865a2 )
pubsub: Add support for message transforms to Topic and Subscription ( 59fe58a )
pubsub: Deprecate enabled field for message transforms and add disabled field ( dd0d1d7 )
Documentation
pubsub: A comment for field code in message .google.pubsub.v1.JavaScriptUDF is changed ( #11553 ) ( 678944b )
pubsub: Deprecate enabled field for message transforms and add disabled field ( dd0d1d7 )
pubsub: Fix link for AnalyticsHubSubscriptionInfo ( 59fe58a )
Java
1.138.0 (2025-03-14)
Features
Deprecate enabled field for message transforms and add disabled field ( 76b2a3d )
Next release from main branch is 1.138.0 ( #2361 ) ( b6ba56c )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.55.1 ( 76b2a3d )
Prevent excessive string parsing when publishing and receiving messages to improve performance ( #2317 ) ( 07b1350 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.48.1 ( #2356 ) ( 7d3d2e4 )
Update dependency com.google.cloud:google-cloud-storage to v2.49.0 ( #2358 ) ( 81d3435 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #2366 ) ( 15899d1 )
Update googleapis/sdk-platform-java action to v2.55.1 ( #2367 ) ( de6f84a )
March 04, 2025
Feature
Pub/Sub is now available in the europe-north2 region (Stockholm, Sweden, Europe). For more information, see Cloud locations .
March 03, 2025
Feature
You can now ingest streaming data into Pub/Sub by using an import topic, from the following external sources:
Azure Event Hubs
Amazon Managed Streaming for Apache Kafka (MSK)
Confluent Cloud
Libraries
Java
1.137.1 (2025-02-26)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( ccf670f )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.48.0 ( #2343 ) ( 3bbd7e1 )
Update dependency com.google.cloud:google-cloud-core to v2.52.0 ( #2348 ) ( f0977b4 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #2349 ) ( 90ed10b )
Update googleapis/sdk-platform-java action to v2.54.0 ( #2347 ) ( ac8db2d )
February 17, 2025
Libraries
Java
1.137.0 (2025-02-12)
Features
Add support for message transforms to Topic and Subscription ( 3889a05 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.53.0 ( b952e58 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.47.0 ( #2331 ) ( 216feef )
Update dependency com.google.cloud:google-cloud-core to v2.51.0 ( #2338 ) ( ac2403e )
Update dependency com.google.cloud:google-cloud-storage to v2.48.1 ( #2332 ) ( 23fd7a8 )
Update dependency com.google.cloud:google-cloud-storage to v2.48.2 ( #2341 ) ( eeb99a9 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.43.0 ( #2336 ) ( 996f4eb )
Documentation
A comment for field code in message .google.pubsub.v1.JavaScriptUDF is changed ( 3889a05 )
February 03, 2025
Libraries
Java
1.136.1 (2025-01-28)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.52.0 ( 0d8c8bf )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.46.0 ( #2309 ) ( 97bd44e )
Update dependency com.google.cloud:google-cloud-core to v2.49.1 ( #2300 ) ( cf2822b )
Update dependency com.google.cloud:google-cloud-core to v2.50.0 ( #2321 ) ( 5c40bcd )
Update dependency com.google.cloud:google-cloud-storage to v2.47.0 ( #2303 ) ( 707f842 )
Update dependency com.google.cloud:google-cloud-storage to v2.48.0 ( #2322 ) ( 93b9419 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.42.0 ( #2324 ) ( 84e8562 )
Update dependency com.google.protobuf:protobuf-java-util to v4.29.3 ( #2302 ) ( 9e90e2c )
Update dependency org.assertj:assertj-core to v3.27.3 ( #2313 ) ( 5e80b57 )
Update googleapis/sdk-platform-java action to v2.52.0 ( #2320 ) ( 01dd3de )
Documentation
Add samples and tests for ingestion from Kafka sources ( #2315 ) ( eea603b )
Go
1.46.0 (2025-01-24)
Features
pubsub: Add Kafka-based sources to IngestionDataSourceSettings proto and IngestionFailureEvent proto ( e4e1a49 )
Bug Fixes
pubsub: Fix defer call in for loop ( #11175 ) ( 7aec711 )
pubsub: Update golang.org/x/net to v0.33.0 ( e9b0b69 )
Python
2.28.0 (2025-01-30)
Features
Add support for message transforms to Topic and Subscription ( #1274 ) ( e5e2f3f )
Bug Fixes
Get channel target for a gRPC request ( #1339 ) ( 16ea766 )
Set creds only if transport not provided ( #1348 ) ( 59965a4 )
Go
1.47.0 (2025-01-31)
Features
pubsub: Support new forms of topic ingestion ( #11537 ) ( 46d6ed4 )
January 27, 2025
Libraries
Python
2.27.3 (2025-01-24)
Bug Fixes
Stop using api_core default timeouts in publish since they are broken ( #1326 ) ( ba2c2ee )
January 13, 2025
Libraries
Python
2.27.2 (2025-01-06)
Bug Fixes
Handle TransportError Exceptions thrown from gapic_publish ( #1318 ) ( 0e058c7 )
Java
1.136.0 (2025-01-10)
Features
Add Kafka-based sources to IngestionDataSourceSettings proto and IngestionFailureEvent proto ( 2947169 )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.1 ( 9c166f7 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.45.0 ( #2292 ) ( 79a8982 )
Update dependency com.google.cloud:google-cloud-storage to v2.46.0 ( #2291 ) ( 7b60884 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.41.1 ( #2301 ) ( 53c1a8a )
Update dependency com.google.protobuf:protobuf-java-util to v4.29.2 ( #2294 ) ( 48d4ac1 )
Update dependency org.assertj:assertj-core to v3.27.2 ( #2296 ) ( e5b68a5 )
Update googleapis/sdk-platform-java action to v2.51.1 ( #2298 ) ( 16e0144 )
December 20, 2024
Announcement
Documentation is now available to help you troubleshoot Pub/Sub issues by using audit logs. You can use audit logs to troubleshoot issues related to identifying who created, deleted, or modified Pub/Sub resources, tracking configuration changes to topics or subscriptions, and verifying the existence and status of topics and subscriptions. For more information, see Troubleshoot Pub/Sub issues with audit logs and General troubleshooting .
December 19, 2024
Announcement
Documentation is now available to help you choose between Pub/Sub and Google Cloud Managed Service for Apache Kafka. The comparison is based on factors such as operational ease, portability, existing Kafka setup, and integration with other Google Cloud products. A detailed feature comparison table is also included. For more information, see Choose Pub/Sub or Cloud Managed Service for Apache Kafka .
December 16, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.135.0 (2024-12-12)
Features
Introduce java.time variables and methods ( #2271 ) ( 7edfd9c )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.51.0 ( 0b0d52c )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.44.0 ( #2270 ) ( a5f70a9 )
Update dependency com.google.cloud:google-cloud-core to v2.48.0 ( #2263 ) ( d7e5588 )
Update dependency com.google.cloud:google-cloud-core to v2.49.0 ( #2285 ) ( cd94a19 )
Update dependency com.google.cloud:google-cloud-storage to v2.45.0 ( #2268 ) ( 80a09e6 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.41.0 ( #2286 ) ( 0c0a1b9 )
Update dependency com.google.protobuf:protobuf-java-util to v4.29.0 ( #2276 ) ( 54ef88d )
Update dependency com.google.protobuf:protobuf-java-util to v4.29.1 ( #2279 ) ( de3c9e1 )
Update googleapis/sdk-platform-java action to v2.51.0 ( #2284 ) ( 0be820e )
Documentation
Fix repository URL in samples README ( #2280 ) ( 8aeff1a )
December 09, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.45.3 (2024-12-04)
Bug Fixes
pubsub: Convert stream ack deadline seconds from duration ( #11214 ) ( b2b05e4 )
1.45.2 (2024-12-03)
Bug Fixes
pubsub/pstest: Make invalid filter return error instead of panic ( #11087 ) ( 45e1ce7 )
pubsub: Only init batch span if trace enabled ( #11193 ) ( f843d50 )
pubsub: Use official semconv variable whenever possible ( #10904 ) ( 1ce4b6d )
Documentation
pubsub: MinExtensionPeriod defaults to 60 seconds ( #10791 ) ( cc88fe1 )
November 25, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.134.2 (2024-11-18)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.49.0 ( 77546e0 )
deps: Update the Java code generator (gapic-generator-java) to 2.50.0 ( 3f21af3 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.43.3 ( #2256 ) ( f7fbc6c )
Update dependency com.google.cloud:google-cloud-core to v2.47.0 ( #2249 ) ( 3df5729 )
Update dependency com.google.cloud:google-cloud-storage to v2.44.1 ( #2240 ) ( f8dae4d )
Update googleapis/sdk-platform-java action to v2.50.0 ( #2261 ) ( d0aab7d )
Update sdk platform java dependencies ( #2262 ) ( b689fe2 )
November 18, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.9.0 (2024-11-12)
Features
Add IngestionFailureEvent to the external proto ( #1984 ) ( 7075430 )
Bug Fixes
KiB, not MiB for ack size limits ( #1999 ) ( 798270d )
Feature
Pub/Sub is now available in the northamerica-south1 region (Querétaro, Mexico, North America). For more information, see Cloud locations .
November 11, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.27.1 (2024-11-08)
Bug Fixes
Add support for Python3.13 ( #1302 ) ( ab22e27 )
November 06, 2024
Feature
General availability: You can now create Cloud Storage import topics in Pub/Sub that lets you ingest data from Cloud Storage into Pub/Sub. The change is being rolled out in a phased manner over the rest of the week. For more information about Cloud Storage import topics, see Create a Cloud Storage import topic .
Feature
General availability: You can now enable Google Cloud platform logs to help you troubleshoot issues when you are using Cloud Storage import topics to ingest data. For more information, see Use platform logs to troubleshoot Cloud Storage import topics .
November 04, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.134.1 (2024-10-26)
Dependencies
Update dependency com.google.cloud:sdk-platform-java-config to v3.39.0 ( #2251 ) ( 083cc7c )
Update googleapis/sdk-platform-java action to v2.49.0 ( #2250 ) ( af0f194 )
Python
Changes for google-cloud-pubsub
2.27.0 (2024-11-02)
Features
Add support for Python 3.13 ( #1281 ) ( 0b46a33 )
Bug Fixes
Mark test_streaming_pull_max_messages flaky ( #1288 ) ( d6635a0 )
October 28, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.45.1 (2024-10-24)
Bug Fixes
pubsub: Update google.golang.org/api to v0.203.0 ( 8bb87d5 )
pubsub: WARNING: On approximately Dec 1, 2024, an update to Protobuf will change service registration function signatures to use an interface instead of a concrete type in generated .pb.go files. This change is expected to affect very few if any users of this client library. For more information, see https://togithub.com/googleapis/google-cloud-go/issues/11020. ( 8bb87d5 )
Documentation
pubsub: Add doc links to top level package doc ( #11029 ) ( fe2ec56 )
1.45.0 (2024-10-22)
Features
pubsub: Add IngestionFailureEvent to the external proto ( f0b05e2 )
pubsub: Add support for ingestion platform logging settings ( #10969 ) ( c60241f )
Java
Changes for google-cloud-pubsub
1.134.0 (2024-10-23)
Features
Add IngestionFailureEvent to the external proto ( 6c67798 )
Track batch size using serialized size of PublishRequest ( #2113 ) ( be78e64 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.43.1 ( #2202 ) ( acaf5f2 )
Update dependency com.google.cloud:google-cloud-core to v2.46.0 ( #2238 ) ( dc06d54 )
Update dependency com.google.cloud:google-cloud-storage to v2.43.2 ( #2226 ) ( eb87c04 )
Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.33.0 ( #2225 ) ( cc1b072 )
Update dependency com.google.protobuf:protobuf-java-util to v4.28.3 ( #2237 ) ( 75abe83 )
Update dependency org.apache.avro:avro to v1.11.4 security ( 31f276b )
Update sdk platform java dependencies ( #2239 ) ( 8f4f855 )
Documentation
Add OpenTelemetry samples ( #2208 ) ( c447fe5 )
October 21, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.8.0 (2024-10-15)
Features
Add ingestion Cloud Storage fields and Platform Logging fields to Topic ( #1974 ) ( afec9a1 )
Return listing information for subscriptions created via Analytics Hub ( afec9a1 )
Python
Changes for google-cloud-pubsub
2.26.1 (2024-10-10)
Documentation
Add ingestion from GCS sample ( #1273 ) ( b59cc8d )
October 14, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.44.0 (2024-10-08)
Features
pubsub: Add ingestion Cloud Storage fields and Platform Logging fields to Topic ( 7250d71 )
pubsub: Add support for cloud storage ingestion topics ( #10959 ) ( 1a11675 )
pubsub: Return listing information for subscriptions created via Analytics Hub ( fdb4ea9 )
Documentation
pubsub: Update documentation for 31 day subscription message retention ( #10845 ) ( 9b4b2fa )
Java
Changes for google-cloud-pubsub
1.133.1 (2024-10-07)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.47.0 ( ccd23af )
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.45.0 ( #2213 ) ( 5ee969b )
Update dependency com.google.cloud:sdk-platform-java-config to v3.37.0 ( #2214 ) ( d938709 )
Update googleapis/sdk-platform-java action to v2.47.0 ( #2212 ) ( 6a9723d )
Documentation
Add ingestion from GCS sample ( #2211 ) ( ddb7391 )
Update emulator sample to create a topic and publish to it ( #2039 ) ( 21d5cfc )
Python
Changes for google-cloud-pubsub
2.26.0 (2024-10-09)
Features
Add ingestion Cloud Storage fields and Platform Logging fields to Topic ( #1248 ) ( a7a4caa )
October 07, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.133.0 (2024-10-01)
Features
Add OpenTelemetry tracing to the Publisher and Subscriber ( #2086 ) ( db522b6 )
Dependencies
Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.32.0 ( #2205 ) ( 76f17e4 )
Update dependency org.assertj:assertj-core to v3.26.3 ( #2204 ) ( 71c2e76 )
1.132.4 (2024-09-30)
Dependencies
Update dependency com.google.cloud:google-cloud-storage to v2.43.1 ( #2194 ) ( 979e420 )
Update dependency ubuntu to v24 ( #2193 ) ( f295b01 )
Python
Changes for google-cloud-pubsub
2.25.2 (2024-09-30)
Documentation
Add command line args for OpenTelemetry Subscribe sample ( #1265 ) ( 0ff7f2a )
October 01, 2024
Feature
Pub/Sub adds support for OpenTelemetry tracing . OpenTelemetry tracing lets you identify and trace the latency of various Pub/Sub client library operations.
September 30, 2024
Feature
The message retention duration option for a subscription specifies how long Pub/Sub retains messages after publication. The maximum value for this property is now increased to 31 days. For more information, see Message retention duration .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.132.3 (2024-09-26)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.42.3 ( #2173 ) ( 294d039 )
Update dependency com.google.cloud:google-cloud-core to v2.44.0 ( #2184 ) ( faecb3b )
Update dependency com.google.cloud:google-cloud-core to v2.44.1 ( #2190 ) ( 9ea45dc )
Update dependency com.google.cloud:google-cloud-storage to v2.43.0 ( #2174 ) ( ae800d7 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.36.0 ( #2185 ) ( 5ca2c7c )
Update dependency com.google.cloud:sdk-platform-java-config to v3.36.1 ( #2191 ) ( 555216e )
Update dependency com.google.protobuf:protobuf-java-util to v4.28.2 ( #2179 ) ( c9bbd2c )
Python
Changes for google-cloud-pubsub
2.25.0 (2024-09-28)
Features
Add OpenTelemetry publish sample ( #1258 ) ( bc13ff0 )
2.24.0 (2024-09-24)
Features
Add OpenTelemetry support for Subscribe Side ( #1252 ) ( 1b6f3d2 )
Open Telemetry Publish Side Support ( #1241 ) ( bb5f3d1 )
Bug Fixes
Fix flaky test ( #1254 ) ( 1ae49de )
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.25.1 (2024-09-29)
Bug Fixes
Update the requirements.txt for samples directory ( #1263 ) ( 5cce8b1 )
September 16, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.7.2 (2024-09-13)
Bug Fixes
Set MaxBytes for AckQueue ( #1963 ) ( 5945563 )
Go
Changes for pubsub/apiv1
1.43.0 (2024-09-09)
Features
pubsub: Add support for Go 1.23 iterators ( 84461c0 )
pubsub: Allow trace extraction from protobuf message ( #10827 ) ( caa826c )
Bug Fixes
pubsub: Add attributes before startSpan ( #10800 ) ( 48addbf )
pubsub: Bump dependencies ( 2ddeb15 )
pubsub: Close grpc streams on retry ( #10624 ) ( 79a0e11 )
Java
Changes for google-cloud-pubsub
1.132.2 (2024-09-11)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.42.1 ( #2152 ) ( 1457489 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.42.2 ( #2157 ) ( d671347 )
Update dependency com.google.cloud:google-cloud-core to v2.43.0 ( #2161 ) ( 05a37b7 )
Update dependency com.google.cloud:google-cloud-storage to v2.42.0 ( #2145 ) ( 77c3e78 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.35.0 ( #2162 ) ( 27eaffd )
Update dependency com.google.protobuf:protobuf-java-util to v4.27.4 ( #2153 ) ( 32c78b3 )
Update dependency com.google.protobuf:protobuf-java-util to v4.28.0 ( #2155 ) ( 5f61fe1 )
Update dependency com.google.protobuf:protobuf-java-util to v4.28.1 ( #2167 ) ( bb8ea71 )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.7 ( #2165 ) ( e7fb60e )
Python
Changes for google-cloud-pubsub
2.23.1 (2024-09-09)
Bug Fixes
Replace asserts with None checks for graceful shutdown ( #1244 ) ( ced4f52 )
September 09, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.7.1 (2024-08-26)
Bug Fixes
deps: Update dependency @opentelemetry/semantic-conventions to ~1.26.0 ( #1945 ) ( f082869 )
deps: Update dependency protobufjs to ~7.4.0 ( #1959 ) ( 25946e0 )
Propagate set options to LeaseManager (from https://github.com/googleapis/nodejs-pubsub/pull/1880) ( #1954 ) ( cdb0916 )
September 02, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.7.0 (2024-08-24)
Features
Add support for OTel context propagation and harmonized spans ( #1833 ) ( 4b5c90d )
August 26, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.6.0 (2024-07-12)
Features
Add max messages batching for Cloud Storage subscriptions ( #1956 ) ( 90546f6 )
Add use_topic_schema for Cloud Storage Subscriptions ( #1948 ) ( 120fa1b )
Bug Fixes
docs samples: Update missing argv in sample metadata for push subscription ( #1946 ) ( 34b8c03 )
Go
Changes for pubsub/apiv1
1.42.0 (2024-08-19)
Features
pubsub: Add opentelemetry tracing support ( #10709 ) ( bbd3366 )
Bug Fixes
pubsub: Update google.golang.org/api to v0.191.0 ( 5b32644 )
Java
Changes for google-cloud-pubsub
1.132.1 (2024-08-20)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.42.0 ( #2140 ) ( 80dca35 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.34.0 ( #2141 ) ( 273fbf3 )
Update dependency com.google.protobuf:protobuf-java-util to v4.27.3 ( #2127 ) ( 8523b4f )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.6 ( #2135 ) ( 102ff84 )
August 20, 2024
Feature
BigQuery subscriptions with use table schema enabled now support type conversions for DATE , TIME , DATETIME , TIMESTAMP , NUMERIC , and BIGNUMERIC data types. For more information about these conversions, see the Use table schema documentation .
Feature
Pub/Sub has increased the limit on schema definition size to 300 KB. For more information, see Resource limits .
Feature
Cloud Storage subscriptions now support using the schema of the Pub/Sub topic to which the subscription is attached when writing Avro files. For more information, see the file format documentation .
August 05, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
Beta release for the pubsub opentelemetry tracing feature
OpenTelemetry tracing standards are in active development, and thus attributes, links, and span names are EXPERIMENTAL and subject to change or removal without notice.
1.41.0 (2024-08-01)
Features
pubsub/pstest: Add Message.Topic field and populate on publish ( #10510 ) ( 01bf051 )
pubsub: Add max messages batching for Cloud Storage subscriptions ( 1bb4c84 )
Bug Fixes
pubsub: Bump google.golang.org/api@v0.187.0 ( 8fa9e39 )
pubsub: Bump google.golang.org/grpc@v1.64.1 ( 8ecc4e9 )
pubsub: Update dependencies ( 257c40b )
Java
Changes for google-cloud-pubsub
1.132.0 (2024-08-01)
Features
Enable hermetic library generation ( #2048 ) ( 283a5e8 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.41.0 ( #2093 ) ( 217b8a3 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.42.0 ( #2124 ) ( 24ebe24 )
Update dependency com.google.cloud:google-cloud-core to v2.41.0 ( #2120 ) ( 1f6428a )
Update dependency com.google.cloud:google-cloud-storage to v2.40.1 ( #2095 ) ( 0d64d6c )
Update dependency com.google.cloud:google-cloud-storage to v2.41.0 ( #2129 ) ( 2348d20 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.33.0 ( #2121 ) ( 7fbea6d )
Update dependency com.google.protobuf:protobuf-java-util to v4.27.2 ( #2091 ) ( 9859f11 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.3 ( #2096 ) ( 42f12ed )
Documentation
samples: Optimistic subscribe sample ( #2063 ) ( 53a4844 )
Python
Changes for google-cloud-pubsub
2.23.0 (2024-07-29)
Features
Add max messages batching for Cloud Storage subscriptions ( #1224 ) ( 91c89d3 )
July 22, 2024
Change
If you retain unacknowledged messages in a subscription for more
than 24 hours, you incur additional charges. For more information, see Storage costs .
July 08, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.22.0 (2024-07-06)
Features
Add service_account_email for export subscriptions ( ec0cc34 )
Add use_topic_schema for Cloud Storage Subscriptions ( ec0cc34 )
July 01, 2024
Feature
Public preview: Data publishers can now share Pub/Sub topics and manage subscriptions in Analytics Hub.
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.40.0 (2024-06-26)
Features
pubsub: Add client ID to initial streaming pull request ( #10436 ) ( a3d70ed )
pubsub: Add use_topic_schema for Cloud Storage Subscriptions ( d6c543c )
Java
Changes for google-cloud-pubsub
1.131.0 (2024-06-25)
Features
Add use_topic_schema for Cloud Storage Subscriptions ( #2082 ) ( 11d67d4 )
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.40.0 ( #2087 ) ( 26b01c9 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.32.0 ( #2088 ) ( aebc3ed )
June 24, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.39.0 (2024-06-18)
Features
pubsub/pstest: Add support to register other servers into grpc.Server ( #9722 ) ( db8216e )
pubsub: Add service_account_email for export subscriptions ( 92dc381 )
pubsub: Batch receipt modacks ( #10234 ) ( 4c2cd10 )
pubsub: Make lease management RPCs concurrent ( #10238 ) ( 426a8c2 )
Bug Fixes
pubsub: Closes #10094 - memory leak in pubsub receive ( #10153 ) ( 66581c4 )
Python
Changes for google-cloud-pubsub
2.21.5 (2024-06-20)
Bug Fixes
Allow Protobuf 5.x ( a369f04 )
2.21.4 (2024-06-18)
Documentation
samples: Add code sample for optimistic subscribe ( #1182 ) ( d8e8aa5 )
June 17, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.5.0 (2024-06-11)
Features
Add service_account_email for export subscriptions ( #1927 ) ( c532854 )
Java
Changes for google-cloud-pubsub
1.130.1 (2024-06-13)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.40.3 ( #2071 ) ( 0844bfb )
Update dependency com.google.cloud:google-cloud-storage to v2.40.0 ( #2066 ) ( dfcaeb5 )
Update dependency com.google.protobuf:protobuf-java-util to v4.27.1 ( #2065 ) ( 6baf69a )
Python
Changes for google-cloud-pubsub
2.21.3 (2024-06-10)
Bug Fixes
Race condition where future callbacks invoked before client is in paused state ( #1145 ) ( d12bac6 )
Suppress warnings caused during pytest runs ( #1189 ) ( cd51149 )
Typecheck errors in samples/snippets/subscriber.py ( #1186 ) ( 3698450 )
June 10, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.130.0 (2024-06-03)
Features
[java] allow passing libraries_bom_version from env ( #1967 ) ( #2033 ) ( 825c5f8 )
Add service_account_email for export subscriptions ( #2054 ) ( 670db3e )
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.39.0 ( #2057 ) ( 43446d2 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.31.0 ( #2058 ) ( a998ef5 )
June 03, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.4.1 (2024-05-30)
Bug Fixes
An existing message UpdateVehicleLocationRequest is removed ( 5451d15 )
An existing method SearchFuzzedVehicles is removed from service VehicleService ( 5451d15 )
An existing method UpdateVehicleLocation is removed from service VehicleService ( 5451d15 )
deps: Update dependency protobufjs to ~7.3.0 ( #1921 ) ( c5afd34 )
Pull in new gax for protobufjs vuln fix ( #1925 ) ( 8024c6d )
Java
Changes for google-cloud-pubsub
1.129.7 (2024-05-29)
Dependencies
Change scope of grpc-inprocess dependency from runtime to test ( #2038 ) ( 1ab45c9 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.40.2 ( #2046 ) ( f81c5e1 )
Update dependency com.google.protobuf:protobuf-java-util to v4.27.0 ( #2044 ) ( 37e94ce )
Python
Changes for google-cloud-pubsub
2.21.2 (2024-05-30)
Bug Fixes
Test failures due to grpcio changes ( #1178 ) ( 086dd46 )
May 27, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.129.6 (2024-05-23)
Dependencies
Update dependency com.google.cloud:google-cloud-storage to v2.39.0 ( #2040 ) ( eb6bd9c )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.2 ( #2035 ) ( 40fdd7a )
May 20, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.129.5 (2024-05-16)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.38.1 ( #2027 ) ( 535edf6 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.30.1 ( #2028 ) ( aedcffd )
May 13, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.4.0 (2024-05-03)
Features
Add several fields to manage state of database encryption update ( #1904 ) ( aba9aee )
Bug Fixes
deps: Update dependency @types/long to v5 ( #1901 ) ( d13d395 )
Go
Changes for pubsub/apiv1
1.38.0 (2024-05-06)
Features
pubsub: Add custom datetime format for Cloud Storage subscriptions ( 4834425 )
pubsub: Support publisher compression ( #9711 ) ( 4940c3c )
pubsub: Use Streaming Pull response for ordering check ( #9682 ) ( 7bf4904 )
Bug Fixes
pubsub: Bump x/net to v0.24.0 ( ba31ed5 )
pubsub: Respect gRPC dial option when PUBSUB_EMULATOR_HOST is set ( #10040 ) ( 95bf6b2 )
pubsub: Update protobuf dep to v1.33.0 ( 30b038d )
Java
Changes for google-cloud-pubsub
1.129.4 (2024-05-10)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.40.0 ( #2016 ) ( beee523 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.40.1 ( #2021 ) ( 0873594 )
Update dependency com.google.cloud:google-cloud-storage to v2.38.0 ( #2019 ) ( ba3dffc )
1.129.3 (2024-05-06)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.38.0 ( #2011 ) ( 4a547d0 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.30.0 ( #2012 ) ( 811d0e6 )
May 06, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.129.2 (2024-04-30)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.39.1 ( #2006 ) ( a7f4afb )
April 29, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.129.1 (2024-04-25)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.39.0 ( #2000 ) ( 09ee49a )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.39.0 ( #2002 ) ( 88517fe )
Update dependency com.google.cloud:google-cloud-core to v2.37.0 ( #1997 ) ( b4573ae )
Update dependency com.google.cloud:google-cloud-storage to v2.37.0 ( #1999 ) ( cff6d6a )
Update dependency com.google.cloud:sdk-platform-java-config to v3.29.0 ( #1998 ) ( bb80924 )
April 22, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.129.0 (2024-04-17)
Features
Add libraries_bom_version in metadata ( #1956 ) ( #1990 ) ( 18cfa73 )
Dependencies
Update actions/setup-java action to v4 ( #1978 ) ( 64a0df3 )
Fixed
Resolved an issue where Pub/Sub pull RPCs incorrectly return a "cancelled" status when the configured deadline is reached in the absence of a backlog. This fix ensures deadlines are honored.
April 15, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
This is the second preview release of the Pub/Sub client that includes OpenTelemetry Tracing.
CHANGES
Fix leak of ackIDs in activeSpans map
Allow passing of context into user callback
Align attributes for batch operation spans (publish, ack, nack, modack) with that of the main message spans
Java
Changes for google-cloud-pubsub
1.128.1 (2024-04-10)
Dependencies
Update actions/checkout action to v4 ( #1975 ) ( 618abdd )
Update actions/github-script action to v7 ( #1976 ) ( c836172 )
April 11, 2024
Feature
If you use Pub/Sub metrics as a signal to autoscale your pipeline, refer to Best practices for using Pub/Sub metrics as a scaling signal .
April 08, 2024
Feature
You can now ingest streaming data from Amazon Kinesis Data Streams into Pub/Sub by using an import topic. For more information about import topics, including required roles and permissions and how to create an import topic, see Create an import topic . The change is being rolled out in a phased manner over the rest of the week.
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.128.0 (2024-04-03)
Features
Add custom datetime format for Cloud Storage subscriptions ( #1970 ) ( 7113f06 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.38.2 ( #1965 ) ( ec3b386 )
Update dependency com.google.cloud:google-cloud-storage to v2.36.1 ( #1968 ) ( 524109c )
Update dependency com.google.protobuf:protobuf-java-util to v4.26.1 ( #1972 ) ( 53c1120 )
Documentation
Add Kinesis ingestion samples ( #1947 ) ( 5b5c14b )
Python
Changes for google-cloud-pubsub
2.21.1 (2024-04-04)
Bug Fixes
Set timeout to infinite for publishing with ordering keys enabled ( #1134 ) ( 67daf3c )
April 01, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.21.0 (2024-03-26)
Features
Add custom datetime format for Cloud Storage subscriptions ( #1131 ) ( 4da6744 )
March 25, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.127.3 (2024-03-20)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.36.0 ( #1955 ) ( d25d14a )
Update dependency com.google.cloud:google-cloud-core to v2.36.1 ( #1962 ) ( 96c1c97 )
Update dependency com.google.cloud:google-cloud-storage to v2.36.0 ( #1957 ) ( 0d8c182 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.28.0 ( #1956 ) ( 183df2c )
Update dependency com.google.cloud:sdk-platform-java-config to v3.28.1 ( #1960 ) ( faa45a4 )
Update dependency com.google.protobuf:protobuf-java-util to v4 ( #1951 ) ( 243ec9a )
Python
Changes for google-cloud-pubsub
2.20.3 (2024-03-21)
Documentation
samples: Update Region Tags ( #1128 ) ( e3bc89e )
March 18, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
This is a beta release of the Pub/Sub client that includes OpenTelemetry Tracing.
Python
Changes for google-cloud-pubsub
2.20.2 (2024-03-15)
Documentation
samples: Add Create Topic with Kinesis IngestionDataSourceSettings Sample ( #1120 ) ( 83dc9ff )
samples: Update Topic with Kinesis Ingestion Settings ( #1123 ) ( e0e2d83 )
March 11, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.3.3 (2024-03-03)
Bug Fixes
Add client library version to headers ( #1891 ) ( 6b59195 )
Go
Changes for pubsub/apiv1
1.37.0 (2024-03-07)
Features
pubsub: Support kinesis ingestion admin ( #9458 ) ( 9bba269 )
Documentation
pubsub: Check for nil responses for receive examples ( #9516 ) ( 6deb969 )
Java
Changes for google-cloud-pubsub
1.127.1 (2024-03-04)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.38.0 ( #1931 ) ( 357c901 )
Update dependency com.google.cloud:google-cloud-core to v2.35.0 ( #1936 ) ( 785e6d1 )
Update dependency com.google.cloud:sdk-platform-java-config to v3.27.0 ( #1937 ) ( 75e7e5e )
Python
Changes for google-cloud-pubsub
2.20.1 (2024-03-06)
Bug Fixes
Catch and surface BaseException() ( #1108 ) ( 07e427f )
2.20.0 (2024-03-05)
Features
Add include_recaptcha_script for as a new action in firewall policies ( #1109 ) ( 54041a5 )
Documentation
samples: Correct type and description of timeout parameter in subscriber quickstart ( #1051 ) ( 141a473 )
2.19.8 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #1102 ) ( 165c983 )
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.127.2 (2024-03-10)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.37.0 ( #1938 ) ( 1435c4e )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.38.1 ( #1944 ) ( 76317e1 )
Update dependency com.google.cloud:google-cloud-storage to v2.35.0 ( #1942 ) ( 989f7ba )
Update dependency com.google.cloud:google-cloud-storage to v2.35.0 ( #1946 ) ( b94989d )
March 04, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.36.2 (2024-02-28)
Bug Fixes
pubsub: Fix out of order issue when exactly once is enabled ( #9472 ) ( e89fd6c )
Documentation
pubsub: Small fix in Pub/Sub ingestion comments ( a86aa8e )
Java
Changes for google-cloud-pubsub
1.127.0 (2024-02-28)
Features
Add an API method for reordering firewall policies ( #1868 ) ( 2039f7e )
Add universe domain support for Java ( #1904 ) ( 1e316d3 )
Next release from main branch is 1.126.0 ( #1933 ) ( 255d8bc )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.37.2 ( #1918 ) ( b8846f9 )
Update dependency com.google.cloud:google-cloud-storage to v2.34.0 ( #1917 ) ( 4a7d6b9 )
Update dependency com.google.protobuf:protobuf-java-util to v3.25.3 ( #1919 ) ( 4bf13bb )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.1 ( #1923 ) ( cd704bd )
Python
Changes for google-cloud-pubsub
2.19.7 (2024-02-24)
Bug Fixes
deps: Require google-api-core&gt;=1.34.1 ( #1080 ) ( 1a5a134 )
February 26, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.19.6 (2024-02-23)
Bug Fixes
Remove LOGGER.exception() line ( #1087 ) ( a395d26 )
2.19.5 (2024-02-22)
Bug Fixes
Update system_test_python_versions ( #1096 ) ( c659ac7 )
February 22, 2024
Feature
If you have filtering enabled, the backlog metrics only include data from messages that match the filter. To learn more, see How filters affect backlog metrics .
February 19, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.3.2 (2024-02-13)
Bug Fixes
Update minimum google-gax versions for auth fixes ( #1888 ) ( 08acade )
Java
Changes for google-cloud-pubsub
1.126.6 (2024-02-14)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.33.0 ( #1912 ) ( 9691c6f )
Update dependency com.google.cloud:sdk-platform-java-config to v3.25.0 ( #1913 ) ( 9636c55 )
1.126.5 (2024-02-12)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.37.1 ( #1898 ) ( fc0dc96 )
Update dependency com.google.cloud:google-cloud-storage to v2.33.0 ( #1900 ) ( 0efceb4 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.10.0 ( #1887 ) ( 2bfa5cc )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.10.0 ( #1888 ) ( 5017789 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.2 ( #1891 ) ( 231ba51 )
February 12, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.3.1 (2024-02-08)
Bug Fixes
Add option to disable emulator auth handling (temp fix) ( #1861 ) ( 761cdc8 )
4.3.0 (2024-02-05)
Features
Trusted Private Cloud support, use the universeDomain parameter ( #1878 ) ( d89fd1d )
Bug Fixes
Updated google-gax required for TPC ( #1882 ) ( 1445856 )
Java
Changes for google-cloud-pubsub
1.126.4 (2024-02-09)
Bug Fixes
Message ordering fix for #1889 ( #1903 ) ( 22a87c6 )
1.126.3 (2024-02-08)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.32.0 ( #1885 ) ( a2063cf )
Python
Changes for google-cloud-pubsub
2.19.4 (2024-02-09)
Bug Fixes
diregapic: S/bazel/bazelisk/ in DIREGAPIC build GitHub action ( #1064 ) ( d56ad12 )
2.19.3 (2024-02-08)
Bug Fixes
Add google-auth as a direct dependency ( #1076 ) ( 5ce7301 )
2.19.2 (2024-02-08)
Bug Fixes
Unit test failures in https://github.com/googleapis/python-pubsu… ( #1074 ) ( 3c6d128 )
February 05, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.2.0 (2024-02-01)
Features
Add enforce_in_transit fields and optional annotations ( #1873 ) ( 09fc424 )
Add schema revision samples ( #1870 ) ( 044e149 )
Bug Fixes
deps: Update dependency @opentelemetry/semantic-conventions to ~1.20.0 ( #1871 ) ( 2ee0dba )
deps: Update dependency @opentelemetry/semantic-conventions to ~1.21.0 ( #1876 ) ( 0fe61a9 )
Go
Changes for pubsub/apiv1
1.36.1 (2024-01-30)
Bug Fixes
pubsub: Enable universe domain resolution options ( fd1d569 )
Python
Changes for google-cloud-pubsub
2.19.1 (2024-02-02)
Documentation
samples: Swap writer and reader schema to correct places ( 265f410 )
January 31, 2024
Feature
Pub/Sub is available in Johannesburg, South Africa (africa-south1).
January 29, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.36.0 (2024-01-26)
Features
pubsub: Add ingestion_data_source_settings field to Topic ( 97d62c7 )
pubsub: Add enforce_in_transit fields and optional annotations ( 97d62c7 )
Bug Fixes
pubsub: Move flow control release to callback completion ( #9311 ) ( 2b6b0da )
1.35.0 (2024-01-25)
Features
pubsub: Support message filtering in pstest ( #9015 ) ( 49231bf )
Java
Changes for google-cloud-pubsub
1.126.2 (2024-01-26)
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.32.0 ( #1875 ) ( 0aac3e4 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.37.0 ( #1878 ) ( 16dee8b )
1.126.1 (2024-01-25)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.36.0 ( #1840 ) ( 8c5117d )
Update dependency com.google.cloud:google-cloud-core to v2.30.0 ( #1853 ) ( db36def )
Update dependency com.google.cloud:google-cloud-core to v2.31.0 ( #1872 ) ( 06db9a0 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.22.0 ( #1865 ) ( f4c6f51 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.23.0 ( #1873 ) ( 0d445f1 )
Update dependency com.google.cloud:google-cloud-storage to v2.32.0 ( #1857 ) ( d673e55 )
Update dependency com.google.cloud:google-cloud-storage to v2.32.1 ( #1874 ) ( adae8a4 )
Update dependency com.google.protobuf:protobuf-java-util to v3.25.2 ( #1858 ) ( 8fa6354 )
January 22, 2024
Feature
BigQuery subscriptions now support the ability to parse JSON messages by using the schema of a BigQuery table. For more information, see use table schema . The change is being rolled out in a phased manner over the rest of the week.
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.34.0 (2024-01-19)
Features
pubsub/pstest: Update max topic retention duration to 31 days ( #8605 ) ( d4f90ec )
pubsub: Add use_table_schema field to BigQueryConfig ( 5132d0f )
Bug Fixes
pubsub: Add veneer header to sub client ( #8608 ) ( 04c380d )
pubsub: Bump google.golang.org/api to v0.149.0 ( 8d2ab9f )
pubsub: Make retry policy back off more aggressively for RPCs that retry RESOURCE_EXHAUSTD ( #8438 ) ( 81a33c0 )
pubsub: Set x-goog-request-params for streaming pull request ( #8753 ) ( 21ec815 )
pubsub: Update golang.org/x/net to v0.17.0 ( 174da47 )
pubsub: Update grpc-go to v1.56.3 ( 343cea8 )
pubsub: Update grpc-go to v1.59.0 ( 81a97b0 )
Documentation
pubsub: Clarified where ordering_key will be written if write_metadata is set ( 327e101 )
pubsub: Modified some descriptions ( e864fbc )
pubsub: Update allowed message retention duration by server ( #8559 ) ( 78c178b )
Java
Changes for google-cloud-pubsub
1.126.0 (2024-01-13)
Features
Add use_table_schema field to BigQueryConfig ( #1838 ) ( 8653f4f )
Bug Fixes
deps: Update the Java code generator (gapic-generator-java) to 2.31.0 ( #1855 ) ( 7e733d2 )
Swap writer and reader schema to correct places in sample ( #1849 ) ( 1c79ad7 )
Temporarily remove publisher tests causing timeouts ( #1860 ) ( a8fa24d )
Use message ordering enabled property that comes with streaming pull responses ( #1851 ) ( d816138 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.21.0 ( #1854 ) ( b36825b )
Update dependency com.google.cloud:google-cloud-storage to v2.30.1 ( #1841 ) ( d6f1352 )
January 15, 2024
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.1.1 (2024-01-05)
Bug Fixes
Correct long audio synthesis HTTP binding ( #1867 ) ( 65940a4 )
deps: Update dependency @opentelemetry/semantic-conventions to ~1.19.0 ( #1862 ) ( 92259f5 )
December 18, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.1.0 (2023-12-04)
Features
Add use_table_schema field to BigQueryConfig ( #1858 ) ( 2875d83 )
Python
Changes for google-cloud-pubsub
2.19.0 (2023-12-10)
Features
Add use_table_schema field to BigQueryConfig ( #1035 ) ( ac6d912 )
Add support for Python 3.12 ( #1025 ) ( 660b8ea )
Introduce compatibility with native namespace packages ( #1024 ) ( 0432420 )
Bug Fixes
Use retry_async instead of retry in async client ( #1030 ) ( 05dd571 )
December 04, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.125.13 (2023-11-30)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.28.0 ( #1830 ) ( 8990b7c )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.20.0 ( #1831 ) ( d188af8 )
Update dependency com.google.protobuf:protobuf-java-util to v3.25.1 ( #1816 ) ( e4f2b26 )
November 27, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.125.12 (2023-11-21)
Bug Fixes
Concurrent modification of processing receievd messages ( #1807 ) ( d162126 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.34.2 ( #1821 ) ( c21ba1a )
Update dependency com.google.cloud:google-cloud-storage to v2.29.1 ( #1817 ) ( e179b94 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.1 ( #1819 ) ( af84aa3 )
November 13, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.0.7 (2023-11-09)
Bug Fixes
deps: Update dependency @opentelemetry/semantic-conventions to ~1.18.0 ( #1852 ) ( d9a0432 )
Set x-goog-request-params for streaming pull request ( #1849 ) ( 7b82ff0 )
November 06, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.125.11 (2023-11-01)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.27.0 ( #1810 ) ( edd89f3 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.19.0 ( #1811 ) ( d671bcb )
1.125.10 (2023-10-31)
Dependencies
Update dependency com.google.cloud:google-cloud-storage to v2.29.0 ( #1800 ) ( 8c43cc2 )
Documentation
Adding a GCS subscription example ( #1762 ) ( 3ce824c )
Renaming the CreateUnwrappedPushSubscription File ( #1794 ) ( 3264290 )
October 30, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.125.9 (2023-10-27)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.34.0 ( #1795 ) ( 670daf1 )
1.125.8 (2023-10-23)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.26.0 ( #1780 ) ( 2d38175 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.18.0 ( #1781 ) ( 5b6cb15 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.28 ( #1782 ) ( c9be478 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.28 ( #1783 ) ( 5e39b79 )
Documentation
Modified some descriptions ( #1773 ) ( 17bd055 )
October 23, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.125.7 (2023-10-17)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.33.2 ( #1770 ) ( db73af7 )
October 16, 2023
Feature
Public preview: Pub/Sub BigQuery subscriptions now support BigQuery change data capture.
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.125.6 (2023-10-10)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.33.1 ( #1756 ) ( 239f474 )
Update dependency com.google.cloud:google-cloud-core to v2.25.0 ( #1764 ) ( 72404ea )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.17.0 ( #1765 ) ( a447292 )
Update dependency com.google.protobuf:protobuf-java-util to v3.24.4 ( #1760 ) ( 10a64c6 )
October 02, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.125.5 (2023-09-28)
Dependencies
Update gapic-generator-java to 2.26.0 ( 935849c )
1.125.4 (2023-09-28)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.33.0 ( #1750 ) ( bcbfcd0 )
1.125.3 (2023-09-27)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.24.1 ( #1737 ) ( 48a4432 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.16.1 ( #1738 ) ( e2cf7c1 )
Update dependency org.apache.avro:avro to v1.11.3 ( #1740 ) ( 971b35f )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.4 security ( 70ba500 )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.5 ( #1746 ) ( a4b1994 )
September 25, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.7.5 (2023-09-20)
Bug Fixes
Bump to activate release-please ( #1819 ) ( 83f3813 )
Java
Changes for google-cloud-pubsub
1.125.2 (2023-09-18)
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.27 ( #1730 ) ( 687a855 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.27 ( #1731 ) ( 403b7e7 )
September 19, 2023
Feature
Pub/Sub is now available in Dammam, Saudi Arabia ( me-central2 ).
Feature
Messages written to a dead letter topic configured for a BigQuery subscription contain an attribute with the reason the message could not be written to BigQuery. For more information, see Handle message failures .
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.0.6 (2023-09-15)
Bug Fixes
Bump the minimum gax up to 4.0.4 to get grpc-js fixes ( #1829 ) ( cc86e2b )
deps: Update dependency @opentelemetry/semantic-conventions to ~1.17.0 ( #1824 ) ( 679c6b8 )
3.7.4 (2023-09-08)
Bug Fixes
Always fill the topic and sub names when creating from a PubSub object ( #1816 ) ( ddf8b8a )
Make retry policy back off more aggressively for RPCs that retry RESOURCE_EXHAUSTD ( #1806 ) ( bfcf523 )
Set grpc keepalive time|outs by default ( #1814 ) ( dedfdea )
Simplify logic for HTTP/1.1 REST fallback option ( #1809 ) ( ee09b69 )
Java
Changes for google-cloud-pubsub
1.125.1 (2023-09-14)
Dependencies
Update actions/checkout action to v4 - abandoned ( #1719 ) ( b82f15a )
Update dependency com.google.cloud:google-cloud-bigquery to v2.32.0 ( #1725 ) ( f40f09a )
1.125.0 (2023-09-12)
Features
Receipt modack ( #1540 ) ( 74d8da9 )
Bug Fixes
Make retry policy back off more aggressively for RPCs that retry RESOURCE_EXHAUSTD ( #1704 ) ( f61e7e0 )
Dependencies
Update actions/checkout action to v4 ( #1712 ) ( 404c492 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.31.2 ( #1713 ) ( 32cb43c )
Update dependency com.google.cloud:google-cloud-core to v2.23.0 ( #1717 ) ( 929f778 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.15.0 ( #1718 ) ( 0eeaa19 )
Update dependency com.google.protobuf:protobuf-java-util to v3.24.3 ( #1698 ) ( 1157fbf )
Update dependency org.easymock:easymock to v5.2.0 ( #1711 ) ( 313f6dd )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.25 ( #1709 ) ( 1cc8a53 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.26 ( #1715 ) ( f2cc75f )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.25 ( #1710 ) ( 9764c3f )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.26 ( #1716 ) ( 6c9e949 )
September 11, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.0.5 (2023-09-07)
Bug Fixes
Always fill the topic and sub names when creating from a PubSub object ( #1816 ) ( be8ed53 )
4.0.4 (2023-09-05)
Bug Fixes
Set grpc keepalive time|outs by default ( #1814 ) ( 13d89a2 )
4.0.3 (2023-08-31)
Bug Fixes
Simplify logic for HTTP/1.1 REST fallback option ( #1809 ) ( f26008d )
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.18.4 (2023-09-09)
Documentation
Minor formatting ( #988 ) ( 4eea8c5 )
August 28, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.124.2 (2023-08-15)
Bug Fixes
Update Publish retry backoff settings ( #1686 ) ( 63a74d9 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.31.1 ( #1697 ) ( 9e90790 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.24 ( #1695 ) ( ec64036 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.24 ( #1696 ) ( cc9ae19 )
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.0.2 (2023-08-24)
Bug Fixes
Make retry policy back off more aggressively for RPCs that retry RESOURCE_EXHAUSTD ( #1806 ) ( e9969ba )
August 22, 2023
Feature
Pub/Sub is now available in europe-west10 (Berlin, Germany).
August 21, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.0.1 (2023-08-11)
Bug Fixes
deps: Update dependency @google-cloud/paginator to v5 ( #1799 ) ( 3195d21 )
deps: Update dependency @google-cloud/precise-date to v4 ( #1803 ) ( 2c22d67 )
deps: Update dependency @google-cloud/projectify to v4 ( #1800 ) ( 5787d56 )
deps: Update dependency @google-cloud/promisify to v4 ( #1798 ) ( 093c46b )
Python
Changes for google-cloud-pubsub
2.18.3 (2023-08-18)
Bug Fixes
Make retry policy back off more aggressively for RPCs that retry RESOURCE_EXHAUSTD ( #979 ) ( 4073b3d )
August 14, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.18.2 (2023-08-07)
Bug Fixes
Change retry multiplier from 1.3 to 4, for requests that retry Resour… ( #971 ) ( e4364d2 )
August 07, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
4.0.0 (2023-08-03)
⚠ BREAKING CHANGES
node 12 eos ( #1774 ) (#1784)
Features
Node 12 eos ( #1774 ) ( #1784 ) ( 47b83c1 )
Bug Fixes
Fix typings for IAM methods ( #1785 ) ( 9a6bdbc )
Java
Changes for google-cloud-pubsub
1.124.1 (2023-08-03)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.22.0 ( #1687 ) ( 220f318 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.14.0 ( #1688 ) ( 0ded9f1 )
July 31, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.7.3 (2023-07-26)
Bug Fixes
Update masks for topic should be snake case ( #1778 ) ( ba72638 )
3.7.2 (2023-07-24)
Bug Fixes
Update to gax 3.6.1 for vuln fix ( #1775 ) ( 98460db )
Go
Changes for pubsub/apiv1
1.33.0 (2023-07-24)
Features
pubsub: Support payload wrapping for push subs ( #8292 ) ( fd49db5 )
Bug Fixes
pubsub/pstest: Update maxMessageRetentionDuration to be 31 days ( #8199 ) ( 1fa4bb8 )
Java
Changes for google-cloud-pubsub
1.124.0 (2023-07-27)
Features
Setup 1.123.x lts branch ( #1676 ) ( a60b887 )
Documentation
Clarified where ordering_key will be written if write_metadata is set ( #1675 ) ( 462746c )
1.123.20 (2023-07-25)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.31.0 ( #1671 ) ( c51d396 )
1.123.19 (2023-07-25)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.30.1 ( #1656 ) ( 4fe4bc4 )
Update dependency com.google.cloud:google-cloud-core to v2.21.1 ( #1662 ) ( e10292c )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.1 ( #1663 ) ( 50f4ff1 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.10.0 ( #1666 ) ( d8712a3 )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.3 ( #1665 ) ( ad1c515 )
Python
Changes for google-cloud-pubsub
2.18.1 (2023-07-26)
Documentation
Clarified where ordering_key will be written if write_metadata is set ( #965 ) ( 3d95034 )
July 28, 2023
Feature
General availability: You can now create Cloud Storage subscriptions in Pub/Sub to write messages directly to an existing Cloud Storage bucket. The change is being rolled out in a phased manner over the rest of the week.
July 24, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.18 (2023-07-17)
Documentation
Tightened requirements on cloud storage subscription filename suffixes ( #1639 ) ( 34a182a )
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.21.0 ( #1650 ) ( 69879d4 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.13.0 ( #1651 ) ( 83fdbe2 )
Update dependency com.google.protobuf:protobuf-java-util to v3.23.4 ( #1649 ) ( 9f9c5ca )
Update dependency org.apache.avro:avro to v1.11.2 ( #1646 ) ( 5859fe4 )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.2 ( #1654 ) ( 05445f0 )
July 18, 2023
Feature
Payload unwrapping for push subscriptions is now available. Payload unwrapping lets you deliver Pub/Sub messages stripped of all message metadata, except for the message data. With payload unwrapping enabled, message data is delivered directly as the HTTP body.
July 17, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.18.0 (2023-07-12)
Features
Add push config wrapper fields ( #925 ) ( 8e803cf )
Bug Fixes
Add async context manager return types ( #944 ) ( a3b2061 )
Documentation
Tightened requirements on cloud storage subscription filename suffixes ( #938 ) ( f54dcd0 )
Update Community section in README.rst ( #945 ) ( dea258c )
July 03, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.32.0 (2023-06-27)
Features
pubsub: Add push config wrapper fields ( ca94e27 )
pubsub: Add support for cloud storage subscriptions ( #7977 ) ( 54218e9 )
pubsub: Enable project autodetection and detect empty project ( #8168 ) ( c7e05d8 )
pubsub: Update all direct dependencies ( b340d03 )
Bug Fixes
pubsub/pstest: Align fake handling of bqconfig subscription to server behavior ( #8066 ) ( 57914ec )
pubsub/pstest: Fix failing bq config test ( #8060 ) ( fb9db66 )
pubsub: Fix issue preventing clearing BQ subscription ( #8040 ) ( 0366bf3 )
pubsub: REST query UpdateMask bug ( df52820 )
pubsub: Use fieldmask directly instead of field_mask genproto alias ( #8030 ) ( 087a5fc )
Documentation
pubsub: Tightened requirements on cloud storage subscription filename suffixes ( 1da334c )
Java
Changes for google-cloud-pubsub
1.123.17 (2023-06-26)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.29.0 ( #1633 ) ( 20096e7 )
1.123.16 (2023-06-26)
Dependencies
Update dependency com.google.protobuf:protobuf-java-util to v3.23.3 ( #1634 ) ( 2481c4b )
June 26, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.15 (2023-06-22)
Bug Fixes
Fixing the shutdown logic for streaming subscriber connection ( #1613 ) ( 09aff9c )
Documentation
Adding pubsub emulator example ( #1602 ) ( 8ded110 )
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.27.0 ( #1599 ) ( 3b4b7d0 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.27.1 ( #1614 ) ( a974e08 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.28.0 ( #1626 ) ( a4a02b4 )
Update dependency com.google.cloud:google-cloud-core to v2.20.0 ( #1629 ) ( 5f88f4f )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.12.0 ( #1630 ) ( b444a9d )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.23 ( #1623 ) ( b5f8e49 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.23 ( #1624 ) ( 68ada24 )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.1 - abandoned ( #1616 ) ( 48ec282 )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.1 security ( a1cb267 )
June 19, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.14 (2023-06-12)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.19.0 ( #1604 ) ( 7ac609e )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.11.0 ( #1605 ) ( 077ac04 )
June 12, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.7.1 (2023-06-08)
Bug Fixes
Don't crash if an already-drained/removed queue gets flushed again ( #1747 ) ( 52ea441 )
June 05, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.13 (2023-05-30)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.26.0 ( #1582 ) ( a7c09b7 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.26.1 ( #1585 ) ( e2c37bf )
Update dependency com.google.cloud:google-cloud-core to v2.18.1 ( #1591 ) ( 1637f0d )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.10.0 ( #1592 ) ( a6be7b7 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.10.1 ( #1594 ) ( 52263ce )
Update dependency org.xerial.snappy:snappy-java to v1.1.10.0 ( #1590 ) ( 338f31f )
May 29, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.7.0 (2023-05-26)
Features
Go
Changes for pubsub/apiv1
1.31.0 (2023-05-24)
Features
pubsub: Expose common errors for easier handling ( #7940 ) ( 983105d )
Bug Fixes
pubsub: Allow clearing of topic schema ( #7980 ) ( 46fc060 )
pubsub: Update grpc to v1.55.0 ( 1147ce0 )
Python
Changes for google-cloud-pubsub
2.17.1 (2023-05-23)
Documentation
Add attributes to pubsub_v1.types ( #921 ) ( 4607dca )
May 22, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.12 (2023-05-12)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.25.0 ( #1566 ) ( 7e63280 )
Update dependency com.google.cloud:google-cloud-core to v2.17.0 ( #1574 ) ( 9c80f14 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.9.0 ( #1576 ) ( 03a027f )
Update dependency org.easymock:easymock to v5.1.0 ( #1448 ) ( 5ad86fe )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.22 ( #1570 ) ( bbe9a8b )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.22 ( #1571 ) ( e7b62d3 )
Update dependency org.xerial.snappy:snappy-java to v1.1.9.0 - abandoned ( #1471 ) ( 1620e00 )
Update dependency org.xerial.snappy:snappy-java to v1.1.9.1 ( #1572 ) ( 1ec2fec )
May 15, 2023
Feature
BigQuery subscriptions now support the NUMERIC and BIGNUMERIC data types. For more information, see Schema compatibility .
May 08, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.30.1 (2023-05-03)
Bug Fixes
pubsub/pstest: Clear Subscription when calling ClearMessages . ( 6de8eda )
pubsub/pstest: Start DeliveryAttempt at 1 ( 2bf6e14 )
Documentation
pubsub: Clarify NumGoroutines configures number of streams ( #7874 ) ( 8ac4432 )
Python
Changes for google-cloud-pubsub
2.16.1 (2023-05-05)
Bug Fixes
Allow dropping cleaned-up keys ( #911 ) ( 4b3157c )
Documentation
Add comment to setup.py ( #905 ) ( 9825109 )
May 01, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.5.2 (2023-04-26)
Bug Fixes
Avoid zalgo when calling down to publish messages ( #1710 ) ( dedae1e )
3.5.1 (2023-04-20)
Bug Fixes
Handle receipt modAck and lease extensions with exactly-once delivery correctly ( #1709 ) ( d786d22 )
Java
Changes for google-cloud-pubsub
1.123.11 (2023-04-27)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.15.0 ( #1558 ) ( acf0a4f )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.8.0 ( #1561 ) ( 13bfd09 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.9.3 ( #1563 ) ( c2329d2 )
April 24, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.5.0 (2023-04-16)
Features
Rework low level message stream retries, add debugging ( #1713 ) ( c1cc6e0 )
Java
Changes for google-cloud-pubsub
1.123.10 (2023-04-17)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.24.5 ( #1555 ) ( 7d81b06 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.7.0 ( #1551 ) ( bccf566 )
April 17, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.9 (2023-04-13)
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.21 ( #1547 ) ( e78f210 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.21 ( #1548 ) ( 42957f8 )
April 10, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.8 (2023-04-04)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.6.0 ( #1541 ) ( 828db7c )
Python
Changes for google-cloud-pubsub
2.16.0 (2023-04-06)
Features
Enable "rest" transport in Python for services supporting numeric enums ( #863 ) ( a80c1d1 )
Documentation
Fix formatting of request arg in docstring ( #894 ) ( ee2ea73 )
March 27, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.30.0 (2023-03-22)
Features
pubsub: Update iam and longrunning deps ( 91a1f78 )
Bug Fixes
pubsub: Check response of receipt modacks for exactly once delivery ( #7568 ) ( 94d0408 )
Java
Changes for google-cloud-pubsub
1.123.7 (2023-03-21)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.5.0 ( #1532 ) ( d63fba7 )
Python
Changes for google-cloud-pubsub
2.15.2 (2023-03-20)
Documentation
Update missing docstrings ( #890 ) ( 5849e04 )
March 21, 2023
Feature
Generally available: In projects protected by a service perimeter, and if using Eventarc to route events to Workflows destinations, you can create a new push subscription through Eventarc where the endpoint is set to a Workflows execution. To know more, see Set up a service perimeter using VPC Service Controls .
Feature
Pub/Sub is now available in Turin, Italy ( europe-west12 ).
March 20, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.29.0 (2023-03-13)
Features
pubsub: Add google.api.method.signature to update methods ( aeb6fec )
pubsub: Add REST client ( 06a54a1 )
pubsub: Add schema evolution methods and fields ( ee41485 )
pubsub: Add support for schema revisions ( #7295 ) ( 369b16f )
pubsub: Add temporary_failed_ack_ids to ModifyAckDeadlineConfirmation ( aeb6fec )
pubsub: Make INTERNAL a retryable error for Pull ( aeb6fec )
Bug Fixes
pubsub/pstest: Fix panic on undelivered message ( #7377 ) ( 98dd29d )
pubsub: Allow updating topic schema fields individually ( #7362 ) ( f09e059 )
pubsub: Dont compare revision fields in schema config test ( #7317 ) ( e364f7a )
pubsub: Fix bug with AckWithResult with exactly once disabled ( #7319 ) ( c88fbdf )
pubsub: Pipe revision ID in name in DeleteSchemaRevision ( #7519 ) ( e211635 )
Documentation
pubsub: Add x-ref for ordering messages docs: Clarify subscription expiration policy ( aeb6fec )
pubsub: Clarify BigQueryConfig PERMISSION_DENIED state ( aeb6fec )
pubsub: Clarify subscription description ( aeb6fec )
pubsub: Mark revision_id in CommitSchemaRevisionRequest deprecated ( 2fef56f )
pubsub: Replacing HTML code with Markdown docs: Fix PullResponse description docs: Fix Pull description ( aeb6fec )
pubsub: Update Pub/Sub topic retention limit from 7 days to 31 days ( aeb6fec )
Java
Changes for google-cloud-pubsub
1.123.6 (2023-03-14)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.23.2 ( #1512 ) ( 60e889e )
Python
Changes for google-cloud-pubsub
2.15.1 (2023-03-14)
Bug Fixes
Set x-goog-request-params for streaming pull request ( #884 ) ( 0d247e6 )
March 13, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.4.1 (2023-03-08)
Bug Fixes
Update minimum google-gax to avoid taffydb vulnerabilities ( #1695 ) ( 11372e6 )
3.4.0 (2023-03-06)
Features
Add google.api.method.signature to update methods ( 1e28405 )
Add temporary_failed_ack_ids to ModifyAckDeadlineConfirmation ( 1e28405 )
Make INTERNAL a retryable error for Pull ( #1681 ) ( 1e28405 )
Bug Fixes
Don't do multiple drains per publish() in message queues unless requested ( #1691 ) ( d9b3a63 )
Feature
General availability: You can now update the schemas that you create in Pub/Sub. Before you do so, read the guidelines . The change is being rolled out in a phased manner over the rest of the week.
March 06, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.5 (2023-03-03)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.12.0 ( #1509 ) ( 6f70d8a )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.4.0 ( #1510 ) ( 0d0ece7 )
February 27, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.4 (2023-02-22)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.23.0 ( #1496 ) ( 713d727 )
1.123.3 (2023-02-22)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.21.0 ( #1470 ) ( 105c293 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.22.0 ( #1489 ) ( 665436c )
Update dependency com.google.cloud:google-cloud-core to v2.10.0 ( #1464 ) ( 8cab4e2 )
Update dependency com.google.cloud:google-cloud-core to v2.11.0 ( #1490 ) ( c42474a )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.3.0 ( #1491 ) ( e5e3227 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.20 ( #1484 ) ( 8206d12 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.20 ( #1485 ) ( d0e9b2a )
Python
Changes for google-cloud-pubsub
2.15.0 (2023-02-22)
Features
Add google.api.method.signature to update methods ( 3dd43d6 )
Add temporary_failed_ack_ids to ModifyAckDeadlineConfirmation ( 3dd43d6 )
Bug Fixes
Add service_yaml_parameters to py_gapic_library BUILD.bazel targets ( 3dd43d6 )
Move global import in publisher sample ( #866 ) ( 271a46d )
Port proto changes ( #871 ) ( 3dd43d6 )
Documentation
Clarify BigQueryConfig PERMISSION_DENIED state ( 3dd43d6 )
Clarify subscription description ( 3dd43d6 )
Fix Pull description ( 3dd43d6 )
Fix PullResponse description ( 3dd43d6 )
Replacing HTML code with Markdown ( 3dd43d6 )
Update Pub/Sub topic retention limit from 7 days to 31 days ( 3dd43d6 )
February 13, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.2 (2023-02-06)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.2.0 ( #1474 ) ( 5fccae4 )
Python
Changes for google-cloud-pubsub
2.14.1 (2023-02-08)
Bug Fixes
Add context manager return types ( 4f690b9 )
Documentation
Add documentation for enums ( 4f690b9 )
Mark revision_id in CommitSchemaRevisionRequest as deprecated ( #861 ) ( 09b846d )
January 30, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.3.0 (2023-01-23)
Features
Add schema evolution methods and fields ( #1672 ) ( 7a5bc29 )
Bug Fixes
Remove redundant .then() ( #1671 ) ( 108edc3 )
January 23, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.1 (2023-01-20)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.20.2 ( #1441 ) ( a675556 )
Update dependency com.google.cloud:google-cloud-core to v2.9.2 ( #1449 ) ( e68c9e0 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.2 ( #1463 ) ( e9e6649 )
Update dependency com.google.protobuf:protobuf-java-util to v3.21.12 ( #1437 ) ( 88f7a99 )
Update dependency org.junit.vintage:junit-vintage-engine to v5.9.2 ( #1451 ) ( 054572a )
Python
Changes for google-cloud-pubsub
2.14.0 (2023-01-18)
Features
Add schema evolution methods and fields ( 9479356 )
Add support for python 3.11 ( 9479356 )
January 16, 2023
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.123.0 (2023-01-10)
Features
Add schema evolution methods and fields ( #1384 ) ( 746a6e0 )
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.1 ( #1450 ) ( 2dcbcad )
Python
Changes for google-cloud-pubsub
2.13.12 (2023-01-06)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 060f00b )
Drop usage of pkg_resources ( 060f00b )
Fix timeout default values ( 060f00b )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( 060f00b )
December 19, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.122.2 (2022-12-15)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.9.0 ( #1435 ) ( 786c493 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.1.0 ( #1436 ) ( a40337b )
December 14, 2022
Announcement
The Pull subscription guide is now updated with improved conceptual information regarding the following topics:
StreamingPull and the Pull API
Asynchronous and synchronous pull mode
Pub/Sub client libraries
December 12, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.28.0 (2022-12-05)
Features
pubsub: rewrite signatures and type in terms of new location ( 620e6d8 )
December 05, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.27.1 (2022-12-02)
Bug Fixes
pubsub: downgrade some dependencies ( 7540152 )
1.27.0 (2022-11-29)
Features
pubsub: start generating proto stubs ( cf89415 )
Java
Changes for google-cloud-pubsub
1.122.1 (2022-12-02)
Dependencies
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.19 ( #1428 ) ( bfa9c3d )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.19 ( #1429 ) ( d3c44e7 )
1.122.0 (2022-12-01)
Features
Next release from main branch is 1.122.0 ( #1409 ) ( dad2c82 )
Dependencies
Update dependency com.google.protobuf:protobuf-java-util to v3.21.10 ( #1425 ) ( 39c22cb )
December 01, 2022
Announcement
Exactly once delivery is now GA.
November 28, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.121.1 (2022-11-21)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.18.0 ( #1375 ) ( b6ada4e )
Update dependency com.google.cloud:google-cloud-bigquery to v2.19.1 ( #1416 ) ( e140a49 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.18 ( #1413 ) ( b3fb828 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.18 ( #1414 ) ( 74d2dc3 )
November 21, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.121.0 (2022-11-16)
Features
Next release from main branch is 1.121.0 ( #1406 ) ( 1b25b0e )
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.8.28 ( #1399 ) ( ec1cae8 )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.6 ( #1395 ) ( a3c32ea )
November 18, 2022
Feature
The Kafka Connector library for Pub/Sub and Pub/Sub Lite is now generally available.
November 15, 2022
Feature
BigQuery subscriptions now support the JSON type for all string fields, including data and attributes . For more information about JSON type compatibility, see Properties of a BigQuery subscription .
November 14, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.120.25 (2022-11-09)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.8.27 ( #1391 ) ( dd9f1c3 )
Update dependency com.google.protobuf:protobuf-java-util to v3.21.9 ( #1370 ) ( 8b753a4 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.17 ( #1389 ) ( 6def6bb )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.17 ( #1388 ) ( 0924923 )
Python
Changes for google-cloud-pubsub
2.13.11 (2022-11-11)
Bug Fixes
Remove suboptimal logic in leasing behavior ( #816 ) ( f067af3 )
November 07, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.2.1 (2022-11-04)
Bug Fixes
deps: Use google-gax v3.5.2 ( #1652 ) ( ee308b5 )
Java
Changes for google-cloud-pubsub
1.111.0-sp.3 (2022-11-03)
Dependencies
Regenerating with new Protobuf (1.111.0-sp) ( #1382 ) ( 58d55aa )
November 01, 2022
Feature
BigQuery subscriptions now support the Avro logical types timestamp-micros, date, and time-micros. For more information about schema compatibility between a Pub/Sub topic and a BigQuery table, see Schema compatibility .
October 31, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.26.0 (2022-10-24)
Features
pubsub: Add support for snapshot labels ( #6835 ) ( c17851b )
Bug Fixes
pubsub: Remove unused AckResult map ( #6656 ) ( 5f69002 )
Documentation
pubsub: Fix comments on message for exactly once delivery ( #6878 ) ( a8109e2 ), refs #6877
pubsub: Update streams section ( #6682 ) ( 7b4e2b4 )
pubsub: Update subscription retry policy defaults ( #6909 ) ( c5c2f8f ), refs #6903
Java
Changes for google-cloud-pubsub
1.120.24 (2022-10-28)
Bug Fixes
Adding an explicit check to prevent empty publishes ( #1376 ) ( 689d7da )
1.120.23 (2022-10-27)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.8.22 ( #1361 ) ( 0355868 )
Update dependency com.google.cloud:google-cloud-core to v2.8.24 ( #1368 ) ( 9776aad )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.5 ( #1362 ) ( d32c591 )
Update dependency com.google.protobuf:protobuf-java-util to v3.21.8 ( #1356 ) ( dc1e0ca )
Update dependency org.easymock:easymock to v5.0.1 ( #1365 ) ( 2a807a5 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.16 ( #1358 ) ( 226e105 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.16 ( #1359 ) ( 3f10227 )
October 24, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.120.22 (2022-10-18)
Dependencies
Update dependency org.easymock:easymock to v5 ( #1350 ) ( 1e88543 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.15 ( #1351 ) ( 2af7579 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.15 ( #1352 ) ( 379e39b )
October 17, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.120.21 (2022-10-14)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.17.0 ( #1334 ) ( d2edb44 )
Update dependency com.google.cloud:google-cloud-bigquery to v2.17.1 ( #1340 ) ( 2b9c2e8 )
Update dependency com.google.cloud:google-cloud-core to v2.8.21 ( #1341 ) ( d219a56 )
Update dependency org.graalvm.buildtools:junit-platform-native to v0.9.14 ( #1296 ) ( 00f61aa )
1.117.1 (2022-10-13)
Dependencies
Regenerating with new Protobuf (1.117.x) ( #1342 ) ( c0945b8 )
Miscellaneous Chores
fixing sp.1 version in 1.117.x branch ( 4399010 )
Python
Changes for google-cloud-pubsub
2.13.9 (2022-10-10)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #801 ) ( fa23503 )
2.13.9 (2022-10-10)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #801 ) ( fa23503 )
2.13.10 (2022-10-14)
Bug Fixes
Batch at most 1,000 ack ids per request ( #802 ) ( 4361e67 )
deps: Allow protobuf 3.19.5 ( #801 ) ( fa23503 )
Silence invalid_ack_id warnings for receipt modacks ( #798 ) ( 17feea5 )
Miscellaneous Chores
release as 2.13.10 ( 34f022b )
October 10, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.120.20 (2022-10-05)
Bug Fixes
update protobuf to v3.21.7 ( 7c3ea60 )
1.120.19 (2022-10-03)
Dependencies
Update dependency cachetools to v5 ( #1324 ) ( 72b6d5f )
Update dependency certifi to v2022.9.24 ( #1303 ) ( dc05237 )
Update dependency charset-normalizer to v2.1.1 ( #1308 ) ( fedf2e1 )
Update dependency click to v8.1.3 ( #1309 ) ( 0ddcb5b )
Update dependency com.google.cloud:google-cloud-core to v2.8.15 ( #1299 ) ( 11f220c )
Update dependency com.google.cloud:google-cloud-core to v2.8.16 ( #1301 ) ( 186c794 )
Update dependency com.google.cloud:google-cloud-core to v2.8.17 ( #1326 ) ( 361a2f2 )
Update dependency com.google.cloud:google-cloud-core to v2.8.18 ( #1328 ) ( ae23532 )
Update dependency com.google.cloud:google-cloud-core to v2.8.20 ( #1329 ) ( c37b88e )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.4 ( #1330 ) ( 0f6cc6c )
Update dependency com.google.protobuf:protobuf-java-util to v3.21.7 ( #1327 ) ( 6355eb0 )
Update dependency gcp-releasetool to v1.8.8 ( #1304 ) ( 1c7c6eb )
Update dependency google-api-core to v2.10.1 ( #1310 ) ( 14725f2 )
Update dependency google-auth to v2.11.1 ( #1305 ) ( a6954d1 )
Update dependency google-auth to v2.12.0 ( #1313 ) ( ffcebe4 )
Update dependency google-cloud-core to v2.3.2 ( #1306 ) ( fbb4460 )
Update dependency importlib-metadata to v4.12.0 ( #1314 ) ( e319df0 )
Update dependency jeepney to v0.8.0 ( #1315 ) ( 5ed336e )
Update dependency jinja2 to v3.1.2 ( #1316 ) ( 14ecdc6 )
Update dependency keyring to v23.9.3 ( #1317 ) ( 3e783d4 )
Update dependency markupsafe to v2.1.1 ( #1318 ) ( ecd9c76 )
Update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.14 ( #1297 ) ( 7e7ce60 )
Update dependency protobuf to v3.20.2 ( #1319 ) ( f5123fa )
Update dependency pyjwt to v2.5.0 ( #1320 ) ( a568462 )
Update dependency requests to v2.28.1 ( #1321 ) ( 41b105a )
Update dependency typing-extensions to v4.3.0 ( #1322 ) ( 288cd7e )
Update dependency zipp to v3.8.1 ( #1323 ) ( e78a284 )
Python
Changes for google-cloud-pubsub
2.13.8 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #792 ) ( 1a54f7c )
September 29, 2022
Feature
The Kafka Connector library for Pub/Sub and Pub/Sub Lite is now in preview.
September 26, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.2.0 (2022-09-22)
Features
Add support for exactly once subscriptions ( #1572 ) ( 998de35 )
Bug Fixes
Preserve default values in x-goog-request-params header ( #1622 ) ( 76c0ab5 )
Wait for 'drain' as well ( #1636 ) ( d72db50 )
Java
Changes for google-cloud-pubsub
1.120.18 (2022-09-21)
Dependencies
Update dependency com.google.cloud:google-cloud-core to v2.8.13 ( #1288 ) ( 708a1df )
Update dependency com.google.cloud:google-cloud-core to v2.8.14 ( #1291 ) ( 1c479de )
Update dependency org.junit.vintage:junit-vintage-engine to v5.9.1 ( #1289 ) ( 216ba7d )
1.120.17 (2022-09-20)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.16.1 ( #1281 ) ( aca8ee9 )
Update dependency com.google.cloud:google-cloud-core to v2.8.12 ( #1278 ) ( 4ae1156 )
Update dependency com.google.protobuf:protobuf-java-util to v3.21.6 ( #1277 ) ( a5aa281 )
Python
Changes for google-cloud-pubsub
2.13.7 (2022-09-22)
Bug Fixes
Remove expired ack_ids ( #787 ) ( b4b809d )
September 20, 2022
Feature
Pub/Sub introduces new monitoring dashboards for topics and subscriptions which you can access from the Topics and Subscriptions console pages. See Monitor topics and Monitor subscriptions .
September 19, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.120.16 (2022-09-15)
Dependencies
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.3 ( #1279 ) ( 654ea40 )
1.120.15 (2022-09-13)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.16.0 ( #1271 ) ( 439215a )
September 14, 2022
Feature
BigQuery subscriptions support writing string fields in a Pub/Sub message to TIMESTAMP , DATETIME , DATE , or TIME columns in a BigQuery table. For more information about schema compatibility between a Pub/Sub topic and a BigQuery table, see Schema compatibility .
September 13, 2022
Feature
Pub/Sub is now available in me-west1 (Tel Aviv, Israel).
September 12, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Node.js
Changes for @google-cloud/pubsub
3.1.1 (2022-09-01)
Bug Fixes
Add hashes to requirements.txt ( #1544 ) ( #1614 ) ( 359d098 )
Allow passing gax instance to client constructor ( #1617 ) ( 8eabe38 )
Better support for fallback mode ( #1610 ) ( d9e7311 )
Change import long to require ( #1611 ) ( 5553af2 )
deps: Update dependency protobufjs to v7 ( #1602 ) ( 6e0ec60 )
Do not import the whole google-gax from proto JS ( #1553 ) ( #1616 ) ( 31c7fa2 )
Java
Changes for google-cloud-pubsub
1.120.14 (2022-09-10)
Dependencies
Update dependency com.google.cloud:google-cloud-bigquery to v2.15.0 ( #1259 ) ( 257cb8f )
Update dependency com.google.cloud:google-cloud-core to v2.8.10 ( #1258 ) ( 37e0034 )
Update dependency com.google.cloud:google-cloud-core to v2.8.11 ( #1264 ) ( a19bc7a )
Update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.2 ( #1265 ) ( 52da9da )
August 29, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Go
Changes for pubsub/apiv1
1.25.1 (2022-08-24)
Bug Fixes
pubsub: up version of cloud.google.com/go ( #6558 ) ( be9dcfb ), refs #6555
1.25.0 (2022-08-23)
Features
pubsub: support exactly once delivery ( #6506 ) ( 74da335 )
Documentation
pubsub: typo ( #6453 ) ( 34d839e )
Java
Changes for google-cloud-pubsub
1.120.13 (2022-08-24)
Dependencies
update dependency com.google.cloud:google-cloud-bigquery to v2.14.7 ( #1254 ) ( 775c993 )
August 22, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.120.12 (2022-08-18)
Dependencies
update dependency com.google.cloud:google-cloud-bigquery to v2.14.4 ( #1242 ) ( 08cfe80 )
update dependency com.google.cloud:google-cloud-bigquery to v2.14.6 ( #1245 ) ( 7f933ee )
update dependency com.google.cloud:google-cloud-core to v2.8.9 ( #1250 ) ( 7c8fd41 )
update dependency com.google.protobuf:protobuf-java-util to v3.21.5 ( #1243 ) ( 37eaff8 )
August 15, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Python
Changes for google-cloud-pubsub
2.13.6 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #762 ) ( 260bd18 )
deps: require proto-plus >= 1.22.0 ( 260bd18 )
set stream_ack_deadline to max_duration_per_lease_extension or 60 s, set ack_deadline to min_duration_per_lease_extension or 10 s ( #760 ) ( 4444129 )
Update stream_ack_deadline with ack_deadline ( #763 ) ( e600ad8 )
2.13.5 (2022-08-10)
Documentation
reorganize sphinx structure ( #751 ) ( b6de574 )
August 08, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.120.9 (2022-08-03)
Dependencies
update dependency com.google.cloud:google-cloud-core to v2.8.7 ( #1227 ) ( e967b2c )
update dependency com.google.cloud:google-cloud-shared-dependencies to v3.0.1 ( #1226 ) ( 8fab566 )
1.120.8 (2022-08-02)
Dependencies
update dependency com.google.cloud:google-cloud-core to v2.8.6 ( #1222 ) ( 55eebf5 )
1.120.7 (2022-08-01)
Bug Fixes
Updated log level from WARNING -> INFO for EOD failures ( #1218 ) ( 8782533 )
1.120.6 (2022-08-01)
Dependencies
update dependency com.google.cloud:google-cloud-bigquery to v2.14.1 ( #1215 ) ( 5667492 )
update dependency com.google.cloud:google-cloud-core to v2.8.5 ( #1213 ) ( 5db0c2c )
update dependency com.google.protobuf:protobuf-java-util to v3.21.4 ( #1214 ) ( bfc53d9 )
update dependency org.apache.avro:avro to v1.11.1 ( #1210 ) ( fafcded )
1.120.11 (2022-08-06)
Bug Fixes
fix dependency declaration to properly include runtime scope ( #1238 ) ( e9a4ce5 )
Dependencies
update dependency com.google.cloud:google-cloud-bigquery to v2.14.2 ( #1235 ) ( e2af6c3 )
update dependency com.google.cloud:google-cloud-bigquery to v2.14.3 ( #1236 ) ( 399e8d7 )
1.120.10 (2022-08-04)
Dependencies
update dependency com.google.cloud:google-cloud-core to v2.8.8 ( #1231 ) ( 9d13dd8 )
August 01, 2022
Libraries
A weekly digest of client library updates from across the Cloud SDK .
Java
Changes for google-cloud-pubsub
1.120.5 (2022-07-30)
Dependencies
update dependency com.google.cloud:google-cloud-shared-dependencies to v3 ( #1207 ) ( d355509 )
1.120.4 (2022-07-29)
Bug Fixes
updating return types of ack/nack futures to be consistent with publish ( #1204 ) ( 6e73ab9 )
1.120.3 (2022-07-27)
Dependencies
update dependency org.junit.vintage:junit-vintage-engine to v5.9.0 ( #1201 ) ( f18e562 )
1.120.2 (2022-07-25)
Bug Fixes
enable longpaths support for windows test (#1485) ( #1191 ) ( c4b8d90 )
PubSubMessage leak on MessageDispatcher ( #1197 ) ( 1b8c440 )
Dependencies
update dependency org.graalvm.buildtools:junit-platform-native to v0.9.13 ( #1189 ) ( 0d96f8e )
update dependency org.graalvm.buildtools:native-maven-plugin to v0.9.13 ( #1190 ) ( c604080 )
July 25, 2022
Feature
You can now create BigQuery subscriptions in Pub/Sub to write messages directly to an existing BigQuery table. The change is being rolled out in a phased manner over the rest of the week.
June 07, 2022
Feature
Pub/Sub is now available in us-south1 (Dallas, Texas).
Deprecated
The following Pub/Sub metrics are deprecated and will be discontinued in 12 months.
subscription/streaming_pull_message_operation_count
subscription/streaming_pull_ack_message_operation_count
subscription/streaming_pull_mod_ack_deadline_message_operation_count
subscription/pull_message_operation_count
subscription/pull_ack_message_operation_count
subscription/mod_ack_deadline_message_operation_count
topic/send_message_operation_count
May 31, 2022
Feature
The Pub/Sub Java client library now supports gRPC compression to save networking costs before your publisher client sends out the publish request.
May 24, 2022
Feature
Pub/Sub is now available in us-east5 (Columbus, Ohio).
May 10, 2022
Feature
Pub/Sub is now available in europe-southwest1 (Madrid) .
May 03, 2022
Feature
Pub/Sub is now available in europe-west9 (Paris).
April 20, 2022
Feature
Pub/Sub is now available in europe-west8 (Milan).
March 07, 2022
Feature
Exactly once delivery gives you the ability to receive any successfully published message exactly once.
For more information, see Exactly once delivery .
December 08, 2021
Feature
Extended topic retention allows you to retain published messages for a maximum of 31 days.
For more information, see Topic message retention .
November 16, 2021
Feature
Pub/Sub is now available in southamerica-west1 (Santiago).
August 03, 2021
Feature
Pub/Sub Lite is now available in northamerica-northeast2 (Toronto).
July 27, 2021
Feature
Pub/Sub push subscriptions created with Cloud Run service endpoints and protected by VPC Service Controls is now available in the GA launch stage.
July 19, 2021
Feature
The Pub/Sub Lite Python client library is now GA.
July 08, 2021
Feature
The Pub/Sub Lite Go client library is now GA.
June 30, 2021
Feature
Pub/Sub message schemas are now GA.
May 04, 2021
Feature
Pub/Sub Lite is now available in the following regions:
Hong Kong ( asia-east2 )
Tokyo ( asia-northeast1 )
Osaka ( asia-northeast2 )
Seoul ( asia-northeast3 )
Mumbai ( asia-south1 )
Jakarta ( asia-southeast2 )
Warsaw ( europe-central2 )
Montreal ( northamerica-northeast1 )
Sao Paulo ( southamerica-east1 )
Northern Virginia ( us-east4 )
Salt Lake City ( us-west3 )
Las Vegas ( us-west4 )
For the full list of available regions, see Pub/Sub Lite locations .
March 24, 2021
Feature
Pub/Sub is now available in the europe-central2 region (Warsaw).
March 22, 2021
Feature
Pub/Sub Lite now supports increasing the number of partitions in a topic .
March 10, 2021
Feature
Pub/Sub push subscriptions can now be created with Cloud Run service endpoints protected by VPC Service Controls . This feature is available in the Preview launch stage .
March 01, 2021
Feature
Pub/Sub message schemas are now available in the Preview launch stage .
February 24, 2021
Feature
An Apache Spark connector is now available for Pub/Sub Lite, allowing you to read messages from Pub/Sub Lite in your Spark clusters.
November 19, 2020
Feature
The Pub/Sub Lite Python client library is now in Beta.
November 18, 2020
Feature
Pub/Sub message filtering is now available in GA.
October 30, 2020
Feature
A Kafka Shim Java client library is now available for Pub/Sub Lite, allowing you to use the Kafka API while using Pub/Sub Lite as a backend.
October 19, 2020
Feature
Pub/Sub message ordering is now available in GA.
October 09, 2020
Feature
Pub/Sub Lite is now available in GA.
August 28, 2020
Feature
Pub/Sub subscription detachment is now generally available.
August 05, 2020
Feature
Pub/Sub message ordering is now available at the beta launch stage .
June 16, 2020
Feature
Retry policies for Pub/Sub subscriptions are now available at the GA launch stage.
June 08, 2020
Feature
Pub/Sub is now available in the asia-southeast2 region (Jakarta).
Feature
Pub/Sub message filtering is now available at the beta launch stage .
May 26, 2020
Feature
Pub/Sub Lite is now available at the beta launch stage .
May 18, 2020
Feature
The Pub/Sub Lite Java client library is now in Beta.
April 20, 2020
Feature
Pub/Sub is now available in the us-west4 region (Las Vegas).
Feature
Dead-letter topics for Pub/Sub are now available at the General Availability release level .
February 24, 2020
Feature
Cloud Pub/Sub is now available in the us-west3 region (Salt Lake City).
January 24, 2020
Feature
Cloud Pub/Sub is now available in the asia-northeast3 region (Seoul).
December 12, 2019
Change
Push subscriptions can now send HTTP POST requests to webhook URLs without proof of domain ownership.
September 23, 2019
Feature
Resource location restrictions are available for Cloud Pub/Sub at the General Availability release level . This feature allows you to manage the location in which your topics' messages are stored.
September 05, 2019
Feature
Custom-managed encryption keys (CMEK) are available at the General Availability release level .
August 29, 2019
Feature
The Cloud Pub/Sub Python client library is available at the General Availability release level .
July 17, 2019
Feature
Authentication for push subscriptions is available at the General Availability release level .
Feature
Resource location restrictions are available for Cloud Pub/Sub at the beta release level . This feature allows you to manage the location in which your topics' messages are stored.
June 26, 2019
Feature
Custom-managed encryption keys (CMEK) are in the process of being rolled out at the beta release level . This feature will be fully available to Cloud Pub/Sub users as of June 28, 2019.
May 16, 2019
Feature
The ability to modify subscription expiration policies is now available at the General Availability release level .
April 15, 2019
Feature
Cloud Pub/Sub is now available in the asia-northeast2 region (Osaka, Japan).
April 09, 2019
Feature
Authentication for push subscriptions is available at the beta release level .
March 20, 2019
Feature
New pricing has been announced. The announcement includes a lower base price for in-region users and new region egress fees.
March 11, 2019
Feature
Cloud Pub/Sub is now available in the europe-west6 region (Zürich, Switzerland).
February 05, 2019
Feature
Seek for Cloud Pub/Sub is available at the General Availability release level and is recommended for production loads. The Seek feature extends subscriber functionality by allowing you to to alter the acknowledgement state of messages in bulk. For example, you can replay previously acknowledged messages or discard obsolete messages.
October 29, 2018
Feature
Seek for Cloud Pub/Sub is available at the beta release level .
October 22, 2018
Feature
Cloud Pub/Sub is now available in the asia-east2 region (Hong Kong).
September 19, 2018
Feature
Labels for Cloud Pub/Sub are available at the General Availability release level and are recommended for production loads.
July 31, 2018
Feature
Labels for Cloud Pub/Sub are available at the beta release level .
July 10, 2018
Feature
Cloud Pub/Sub is now available in the us-west2 region (Los Angeles).
June 11, 2018
Feature
Cloud Pub/Sub is now available in the europe-north1 region (Finland).
May 31, 2018
Feature
The C#, GO, and Java client libraries are now at the General Availability release level and are recommended for production loads.
May 23, 2018
Feature
Audit Logging for Cloud Pub/Sub is now at the General Availability release level and is recommended for production loads.
April 20, 2018
Feature
The gRPC service APIs, including StreamingPull, are now available at the General Availability release level and are recommended for production loads. Note that the Cloud Client Libraries for Cloud Pub/Sub already use these APIs.
February 20, 2018
Feature
Added support for generating Google Cloud Audit logs that enable you to track usage and access.
January 24, 2018
Feature
The Cloud Pub/Sub gcloud commands are now at the General Availability release level . The beta label is no longer required.
January 10, 2018
Feature
Cloud Pub/Sub is now available in the europe-west4 region (Netherlands).
Feature
Cloud Pub/Sub is now available in the northamerica-northeast1 region (Montréal).
August 30, 2017
Feature
The StreamingPull API is now in Beta. Users of client libraries should see improvements in end-to-end message latency and CPU utilization without any changes in code after updating to the most recent version of the client library.
August 01, 2017
Feature
Cloud Pub/Sub is now available in the europe-west3 region (Frankfurt).
June 20, 2017
Feature
Cloud Pub/Sub is now available in the australia-southeast1 region (Sydney).
June 06, 2017
Feature
Cloud Pub/Sub is now available in the europe-west2 region (London).
April 19, 2017
Feature
Announced beta availability of gRPC .
January 20, 2017
Change
Published changes to the Cloud Pub/Sub pricing model .
December 01, 2015
Feature
Support added for quota metrics per topic and subscription ( pubsub.googleapis.com/topic/byte_cost and pubsub.googleapis.com/subscription/byte_cost , respectively).
November 01, 2015
Feature
Added publish timestamp field on pulled messages.
June 01, 2015
Feature
Stable API suitable for production development - v1 released.
February 01, 2015
Feature
Beta release - v1beta2 released.
November 01, 2014
Feature
Batch request support added - Support added for batch Publish and Pull requests.
June 01, 2014
Feature
Initial release - v1beta1 released.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
