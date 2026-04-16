---
title: "App Hub release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/release-notes
  title: "App Hub release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Resources
Send feedback
App Hub release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to App Hub.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
December 22, 2025
Feature
App Hub now lets you view extended metadata schemas. This feature helps you visualize rich, structured, and schema-driven information about your resources. For more details, see View extended metadata schemas .
December 19, 2025
Feature
App Hub now offers a setup model for application management in single projects ( Preview ). App Hub discovers supported resources within a single project by configuring it as a standalone management project and attaching it to an application management boundary. For more information, see Set up a single-project boundary .
December 18, 2025
Feature
App Hub now lets you register multiple resources at once in the Google Cloud console to simplify and accelerate the application creation process.
The following are key features of this update:
Combined application creation and registration : The application creation and resource registration workflows are now merged into a single process. You can register up to 10 services and workloads to an application at a time.
Streamlined resource registration : You can now register multiple services and workloads to an application in a single operation, directly from the application creation page. This update reduces the time and effort required to set up your applications.
Copied attribute and owner information : You now have the option to copy attributes and owner information from an application to all the resources you're registering. This feature does not apply to shared services.
For more information, see Register existing resources to an application .
December 16, 2025
Feature
App Hub is now available in the europe-north2 (Stockholm) region, letting you create applications and register resources from an expanded list of locations.
To learn more about the differences between global and regional applications, see Global and regional applications .
For a complete list of all available App Hub locations, see App Hub locations .
November 17, 2025
Feature
App Hub now supports new metadata properties to provide deeper context and governance for your services and workloads:
Functional type: Services and workloads now include the FunctionalType property, which is an output-only field that identifies the known function of a resource. The initial supported value is AGENT , which indicates that a workload is an AI agent.
Extended metadata: Services and workloads now include the ExtendedMetadata property to provide rich, structured, and schema-driven information about the resource, such as the apphub.googleapis.com/AgentProperties schema for AI agents.
Registration type: Services now have the RegistrationType property. This output-only field indicates whether a service is exclusive (can be registered to only one application) or shared (can be registered to multiple applications). To view the registration type of your services, see View details of services and workloads .
Identity: Services and workloads now include the Identity property, which is an output-only field that contains the service account or managed workload identity name for a service or workload.
November 14, 2025
Feature
App Hub has expanded its support for Google Cloud resources. You can now register services and workloads from a wide range of products to your applications, including new resources from Access Approval, Certificate Authority Service, Cloud Run, Firebase, Gemini for Google Cloud, GKE Multi-Cloud, and more. Many of these supported resources are available in Preview. For a complete list, see App Hub supported resources .
Feature
Management projects are now Generally Available (GA) to enable application management in folders. This setup model is recommended for all new App Hub implementations and provides a centralized and scalable way to organize, deploy, and govern your applications.
Key features of this release include:
App-enabled folders : You can now enable application management on a standard Google Cloud folder, which then becomes an app-enabled folder. This folder acts as the application management boundary for your App Hub applications.
Management projects : A dedicated management project is automatically created within your app-enabled folder to store application metadata and configurations, and to centralize operations.
Simplified API management : Required APIs for core App Hub features are automatically enabled on the management project. You can also enable recommended APIs to access the full application lifecycle experience.
Flexible billing : Linking a billing account is now optional. You can use App Hub's core features for organizing and observing your applications at no cost. A billing account is required only for other application-centric features.
For more information on how to get started, see Set up App Hub with app-enabled folders .
August 25, 2025
Feature
App Hub supports resources from the following sources in Preview :
Vertex AI
Pipeline job
Custom job
Hyperparameter tuning job
Index
Index endpoint
NAS job
Model deployment monitoring job
Compute Engine
Autoscaler
Commitment
Disk
Regional disk
Instance template
Regional instance template
License
Node group
Image
Resource policy
Reservation
Node template
Router
Snapshot
Route
Subnetwork
Global public delegated prefix
Public delegated prefix
Dataflow
Job
Datastream
Stream
Cloud DNS
Managed zone
Policy
July 30, 2025
Feature
The following Vertex AI supported resources are now generally available ( GA ):
Dataset items
Featurestore containers
MetadataStore instances
Model resources
July 08, 2025
Feature
Dataproc Metastore services are now generally available ( GA ).
June 25, 2025
Feature
App Hub supports resources from the following sources in Preview :
Dataproc Metastore Service
Vertex AI Dataset
Vertex AI Featurestore
Vertex AI MetadataStore
Vertex AI Model
May 01, 2025
Feature
App Hub supported resources are now generally available ( GA ).
April 09, 2025
Feature
You can create and manage your App Hub applications using app-enabled folders , now available in Preview .
Feature
Gemini Cloud Assist in App Hub is supported in Preview . You can use the chat panel to retrieve information about your application in your app-enabled folder with Gemini assistance.
March 14, 2025
Feature
App Hub supports resources from the following sources in Preview :
AlloyDB for PostgreSQL
Cloud Data Fusion
Cloud Deploy
Cloud Logging
Cloud Run jobs
Firestore
Google Kubernetes Engine (GKE) workloads
GKE single cluster Gateway
Managed Service for Microsoft Active Directory
Secret Manager
Vertex AI
February 24, 2025
Feature
App Hub supports resources from the following sources in Preview :
Bigtable
Cloud SQL
Cloud Storage
Memorystore for Redis
Pub/Sub
Spanner
February 19, 2025
Announcement
App Hub supports regional and global infrastructure resources with global applications in ( GA ).
January 24, 2025
Change
App Hub support is available in the europe-southwest1 (Madrid, Spain)
region .
January 23, 2025
Feature
App Hub supports resources from Google Kubernetes Engine (GKE) services and workloads in Preview .
December 16, 2024
Feature
App Hub supports resources from Cloud Run services in Preview .
November 18, 2024
Feature
App Hub supports regional infrastructure resources with global applications in Preview .
October 17, 2024
Feature
App Hub supports global infrastructure resources with global applications in Preview .
October 09, 2024
Feature
You can now view system metrics for your App Hub applications on App Hub and using the Metrics Explorer . You can also create charts to monitor specific metrics using App Hub metadata labels . These features are now available in Preview .
June 26, 2024
Change
App Hub support is available in the asia-east2 (Hong Kong) and europe-west3 (Frankfurt, Germany)
regions .
March 19, 2024
Announcement
App Hub is generally available ( GA ).
December 14, 2023
Feature
You can set up App Hub using the Google Cloud console , now available in Preview .
December 08, 2023
Change
App Hub is now available in the following regions :
us-central1
us-west1
us-south1
asia-east1
europe-north1
europe-west1
europe-west4
November 17, 2023
Announcement
App Hub is available in Preview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
