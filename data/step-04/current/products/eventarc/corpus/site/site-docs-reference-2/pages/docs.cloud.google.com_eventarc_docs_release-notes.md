---
title: "Eventarc Release Notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/release-notes
  title: "Eventarc Release Notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Resources
Send feedback
Eventarc Release Notes
Stay organized with collections
Save and categorize content based on your preferences.
Advanced
Standard
This page documents production updates to Eventarc. You can
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
February 02, 2026
Change
Eventarc Standard is available in the asia-southeast3 (Bangkok, Thailand)
region .
November 11, 2025
Feature
Eventarc Advanced support for
using access policies to control access
when publishing event messages to an Eventarc Advanced bus is available in
Preview .
September 24, 2025
Feature
Eventarc Advanced support for publishing events from multiple projects is available in Preview .
August 01, 2025
Change
There is a limit of one MessageBus resource per project per region, and a limit of one GoogleApiSource resource per project per region. For more information, see Quotas and limits .
Announcement
Eventarc Advanced is generally available ( GA ).
Change
Eventarc Advanced is available in the asia-south1 (Mumbai, India), europe-north1 (Hamina, Finland), and us-east4 (Ashburn, Virginia, North America) regions .
May 15, 2025
Feature
Support for creating custom organization policy constraints in Eventarc Advanced and in Eventarc Standard is generally available for some Eventarc resources.
April 11, 2025
Fixed
For applicable events, if a context attribute value size limit is exceeded, you are notified through a publishing error (Eventarc Advanced), or attribute names for truncated values are listed in an extension attribute (Eventarc Standard). For more information, see Quotas and limits .
March 17, 2025
Change
Eventarc Standard is available in the europe-north2 (Stockholm, Sweden) region .
January 29, 2025
Feature
To help ensure CMEK usage across an organization, Eventarc Advanced and Eventarc Standard are integrated with two organization policy constraints.
November 08, 2024
Change
Eventarc Standard is available in the northamerica-south1 (Mexico, North America) region .
October 31, 2024
Feature
Eventarc is available in Preview in a new edition: Eventarc Advanced lets you receive, filter, transform, route, and deliver messages between different services, apps, and systems.
Eventarc Standard continues to deliver events from provider to destination by letting you define triggers that filter events.
August 15, 2024
Feature
Eventarc support for creating triggers for direct events from Apigee API hub is generally available ( GA ).
May 01, 2024
Feature
Eventarc support for creating triggers for direct events from Cloud Speech-to-Text is generally available ( GA ).
April 02, 2024
Feature
Eventarc support for creating triggers for direct events from Cloud Deploy is generally available ( GA ).
March 19, 2024
Feature
Eventarc support for creating triggers for direct events from Network Services is generally available ( GA ).
March 06, 2024
Feature
Eventarc support for creating triggers for direct events from Batch is generally available ( GA ).
February 26, 2024
Change
Eventarc is available in the us-west8 (Phoenix, Arizona, North America) region .
January 31, 2024
Change
Eventarc is available in the africa-south1 (Johannesburg, South Africa) region .
January 29, 2024
Feature
Eventarc support for creating triggers for direct events from Cloud Firestore is generally available ( GA ).
January 25, 2024
Feature
Eventarc support for creating triggers for direct events from Cloud Firestore with authentication context , is available in Preview .
December 21, 2023
Change
Eventarc is available in the europe-west10 (Berlin, Germany) region .
December 13, 2023
Change
Trigger updates are applied to events generated after the update. If the trigger is updated before a generated event is delivered, the event is routed according to the original filtering, and delivered within three days of the event generation.
November 15, 2023
Change
Eventarc is available in the me-central2 (Dammam, Kingdom of Saudi Arabia) region .
October 20, 2023
Feature
Eventarc support for internal HTTP endpoints as event destinations is available in Preview . For more information, see the guide and the tutorial .
August 31, 2023
Feature
Eventarc support for creating triggers for direct events from the following sources is generally available ( GA ):
AlloyDB for PostgreSQL
API Gateway
Apigee Registry
Backup for GKE
BeyondCorp
Certificate Manager
Cloud Data Fusion
Cloud Dataplex
Cloud Functions
Cloud Memorystore for Memcached
Database Migration
Dataflow
Dataproc Metastore
Datastream
Firebase Alerts
Firebase Remote Config
Firebase Test Lab
GKE Hub
Google Cloud Memorystore for Redis
Network Connectivity
Network Management
Transcoder
User-managed notebooks (Notebooks)
Vision AI
VM Migration
Workflows
August 16, 2023
Deprecated
Eventarc support for direct events from Cloud IoT is retired from August 16, 2023.
June 23, 2023
Feature
Eventarc support for creating triggers for direct events from the following sources is available in Preview :
AlloyDB for PostgreSQL
Backup for GKE
Cloud Dataplex
Dataproc Metastore
GKE Hub
Google Cloud Memorystore for Redis
Network Connectivity
Network Management
User-managed notebooks (Notebooks)
Vision AI
VM Migration
June 02, 2023
Feature
Eventarc support for creating triggers for direct Transcoder API events is available in Preview .
May 10, 2023
Change
Eventarc is available in the europe-west12 (Turin, Italy) and me-central1 (Doha, Qatar) regions .
April 17, 2023
Feature
Support for creating triggers for direct events from Cloud Firestore is available in Preview .
April 03, 2023
Feature
Support for specifying the encoding of the event payload data as either application/json or application/protobuf through an eventDataContentType field is available.
March 28, 2023
Feature
Eventarc support for creating triggers for direct events from Cloud Dataflow is available in Preview .
March 21, 2023
Feature
Support for triggering a workflow within a service perimeter using VPC Service Controls is generally available ( GA ).
February 13, 2023
Change
Eventarc is available in the me-west1 (Tel Aviv, Israel) region .
February 09, 2023
Change
You can filter and search for instructions to create an Eventarc trigger based on the event provider, event destination, and event type .
December 15, 2022
Feature
Eventarc support for creating triggers
for direct events from the following
sources is available in Preview :
API Gateway
Apigee Registry
BeyondCorp
Certificate Manager
Cloud Data Fusion
Cloud Functions
Cloud Memorystore for Memcached
Database Migration
Datastream
Eventarc
Workflows
December 02, 2022
Feature
Eventarc support for customer-managed encryption keys (CMEK) is generally available ( GA ).
October 17, 2022
Feature
Eventarc triggers for Workflows is generally available ( GA ).
September 14, 2022
Feature
Eventarc support for direct events from Cloud IoT is available in Preview .
August 02, 2022
Feature
Support for the delivery of third-party events from third-party SaaS providers to interested subscribers is available in Preview .
July 25, 2022
Change
Eventarc is available in the following regions :
us-east5 (Columbus, Ohio, North America)
us-south1 (Dallas, Texas, North America)
July 14, 2022
Feature
Eventarc support for Customer-Managed Encryption Keys (CMEK) using the Cloud Console is available in Preview .
June 30, 2022
Feature
Eventarc support for Customer-Managed Encryption Keys (CMEK) using the Google Cloud CLI is available in Preview .
June 28, 2022
Change
Eventarc is available in this region : europe-southwest1 (Madrid, Spain).
June 27, 2022
Feature
Support for Firebase Realtime Database is in Preview .
May 30, 2022
Feature
A dedicated user interface is generally available ( GA ).
May 16, 2022
Change
Eventarc is available in the following regions :
europe-west8 (Milan, Italy)
europe-west9 (Paris, France)
May 12, 2022
Feature
Eventarc for Google Kubernetes Engine (GKE) is available in Preview .
April 11, 2022
Change
Eventarc is available in the following regions :
australia-southeast2 (Melbourne, Australia)
northamerica-northeast2 (Toronto, Ontario, North America)
southamerica-west1 (Santiago, Chile, South America)
April 04, 2022
Change
Eventarc is available in the asia-south2 (Delhi, India) region.
March 31, 2022
Feature
Support for creating an Eventarc trigger for a Workflows destination on the Eventarc page in the Cloud Console is available in Preview .
March 21, 2022
Feature
Support for Firebase Alerts triggers is in Preview .
March 07, 2022
Feature
Support for Firebase Remote Config and Firebase Test Lab triggers is in Preview .
February 28, 2022
Feature
Eventarc triggers for Workflows is available in Preview .
February 24, 2022
Announcement
Eventarc is HIPAA , SOC 1 , SOC 2 , and SOC 3 -compliant.
February 22, 2022
Feature
Support for applying a path pattern when filtering is available in Preview .
February 11, 2022
Announcement
Eventarc is Payment Card Industry Data Security Standard (PCI DSS)-compliant .
December 22, 2021
Feature
Support for Cloud Storage triggers is generally available ( GA ).
December 16, 2021
Feature
Eventarc for Cloud Run for Anthos is available in Preview .
December 13, 2021
Feature
A dedicated user interface is available in Preview .
October 28, 2021
Feature
Support for VPC Service Controls is generally available ( GA ).
September 13, 2021
Feature
Eventarc can be configured for data location and is supported as a resource location .
September 01, 2021
Feature
Support for Cloud Storage triggers is available in Preview .
August 17, 2021
Change
Support for 17 regions. See Eventarc locations .
July 23, 2021
Feature
Support for VPC Service Controls is in Preview .
July 22, 2021
Feature
Eventarc is a Cloud Asset Inventory supported resource type .
April 09, 2021
Feature
The Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ) is granted to the Pub/Sub service account by default.
January 26, 2021
Announcement
Eventarc is generally available ( GA ).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
