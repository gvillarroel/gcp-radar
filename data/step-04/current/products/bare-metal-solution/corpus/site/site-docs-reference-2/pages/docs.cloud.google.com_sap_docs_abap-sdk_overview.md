---
title: "Overview of the ABAP SDK for Google Cloud \_|\_ SAP on Google Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/abap-sdk/overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/abap-sdk/overview
  title: "Overview of the ABAP SDK for Google Cloud \_|\_ SAP on Google Cloud \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
SAP on Google Cloud
Guides
Send feedback
Overview of the ABAP SDK for Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
The ABAP SDK for Google Cloud lets you bring the extensive capabilities of Google Cloud
directly into your SAP development, by using your preferred programming language, ABAP .
You can access the full range of Google Cloud APIs through the
comprehensive set of ABAP client libraries that the SDK provides.
Beyond basic connectivity, the SDK offers solutions and accelerators that
let you use Google Cloud's advanced AI and machine learning capabilities.
Out of the box, the SDK does the heavy lifting of implementing connectivity,
security, data serialization, and error handling,
enabling ABAP developers to focus on building the business logic. The SDK
also comes with a code wizard to quickly get started using boilerplate code.
This greatly reduces the amount of code that developers need to write,
and shortens the time to business value.
Use cases
With the ABAP SDK for Google Cloud, you can build meaningful business
applications by using Google Cloud's advanced AI and machine learning
capabilities. The following are some common use cases:
ABAP-based AI agents
By integrating with Vertex AI through the
Vertex AI SDK for ABAP , you can create ABAP-based AI agents that operate directly within your SAP systems.
These agents can automate complex processes, make proactive decisions, and
learn from data, leading to significant efficiency gains across various SAP
modules like finance, supply chain, HR, and sales.
Data ingestion to BigQuery
By using the BigQuery Toolkit for SAP , you can establish a data
ingestion mechanism for your SAP data into BigQuery . This enables
efficient transfer of large datasets, empowering powerful analytics and
reporting directly from your SAP environment.
Real-time business decisions with BigQuery AI and ML
By using the ABAP SDK for Google Cloud, you can use the AI and ML capabilities of BigQuery directly from SAP. You can load data from SAP
into BigQuery, create and train ML models, and then serve
predictions and insights back into your SAP applications in real-time.
This enables data-driven decision-making within SAP processes.
AI-infused content management
By using Cloud Storage as a scalable content repository for SAP ,
the ABAP SDK for Google Cloud provides AI-infused content management for documents attached to business objects and archived business data. Here's what you can do:
Manage and analyze documents : Store and manage documents attached to business objects in Cloud Storage. Then, use the
BigQuery AI and ML SDK for ABAP with Gemini
to analyze this data, generate embeddings, and perform vector searches to intelligently categorize and retrieve information.
Archive and gain insights from business data : Archive business data to Cloud Storage. Then, use the BigQuery AI and ML SDK for ABAP with Gemini to analyze patterns, identify trends, and derive insights from this vast dataset for deeper data-driven decision-making.
Business process automation by using Document AI
By integrating Document AI
with SAP through the ABAP SDK for Google Cloud,
you can automate tasks like invoice processing, purchase order handling,
and other document-heavy workflows. Document AI
extracts, classifies, and processes unstructured data from documents, significantly
reducing manual effort and errors.
Real-time event driven system integrations
By using the
Business Eventing Toolkit for SAP ,
you can facilitate real-time integration between SAP and Google Cloud services
like Pub/Sub . This key capability enables event-driven architectures,
which lets your SAP systems react instantly to business events, exchange data
in real-time, and trigger automated actions, making your business landscapes agile and responsive.
Secure SAP system and applications
You can integrate with Secret Manager and Cloud Key Management Service to securely store,
retrieve, and transmit sensitive SAP data, ensuring robust security and compliance.
These are just a few examples of typical business use cases.
With support for all Google Cloud APIs, the
ABAP SDK for Google Cloud brings the full power of the Google Cloud
to the ABAP platform creating endless opportunities
for you to transform your business.
ABAP SDK for Google Cloud editions
ABAP SDK for Google Cloud offers two editions providing
developers options to use the SDK across on-premises, on Google Cloud,
on any other cloud,
S/4HANA Cloud Private Edition, S/4HANA Cloud Public Edition,
and other cloud ABAP apps.
SAP BTP edition : To use in S/4HANA Cloud Private Edition, S/4HANA Cloud Public Edition, and other cloud ABAP apps. The SAP BTP edition of the SDK provides integration with over 70 Google Cloud APIs.
On-premises or any cloud edition : To use in S/4HANA, ECC, and S/4HANA Cloud Private Edition.
The on-premises or any cloud edition of the SDK
provides integration with over 294 Google Cloud APIs.
The following diagram shows the two editions of ABAP SDK for Google Cloud
and where each can be installed.
You can choose the SDK edition that suits your ABAP runtime environment.
SAP BTP edition
You install the SAP BTP edition of ABAP SDK for Google Cloud in the SAP BTP, ABAP environment .
This edition lets you build extensions and integrations using SAP's side-by-side extension recommendation.
From version 1.1, the SAP BTP edition of ABAP SDK for Google Cloud offers
a dedicated tool, Vertex AI SDK for ABAP, for seamless interaction
with Google Cloud's Vertex AI platform.
For information about Vertex AI SDK for ABAP, see
Overview of the Vertex AI SDK for ABAP .
For additions and enhancements to the
SAP BTP edition of ABAP SDK for Google Cloud, see What's new with the SAP BTP edition of ABAP SDK for Google Cloud .
On-premises or any cloud edition
You install the on-premises or any cloud edition of ABAP SDK for Google Cloud on your SAP host system on
Compute Engine, any cloud virtual machines,
RISE with S/4HANA Cloud Private edition, or on-premise instances.
This edition lets you build in-app extensions and integrations directly
in your SAP application.
For additions and enhancements to the
on-premises or any cloud edition of ABAP SDK for Google Cloud, see What's new with the on-premises or any cloud edition of ABAP SDK for Google Cloud .
Solutions and accelerators
The on-premises or any cloud edition of ABAP SDK for Google Cloud offers the following solutions and accelerators:
Vertex AI SDK for ABAP : Lets you interact with
with Google Cloud's Vertex AI platform. For information about
Vertex AI SDK for ABAP, see Overview of the Vertex AI SDK for ABAP .
BigQuery AI and ML SDK for ABAP : Lets you use the AI and ML capabilities of BigQuery in your ABAP applications and ABAP-based AI agents.
The SDK offers the following capabilities from your ABAP environment:
Use Gemini to analyze your enterprise data in BigQuery.
Generate and manage embeddings for enterprise data in BigQuery
to make BigQuery as your low-cost vector database.
Perform vector search on your enterprise data in
BigQuery for similarity search or to RAG your model.
For more information, see BigQuery AI and ML SDK for ABAP overview .
BigQuery Toolkit for SAP : Lets you programmatically replicate data from your SAP tables to
BigQuery , without SAP Landscape Transformation Replication Server . For more information,
see Overview of the BigQuery Toolkit for SAP .
Business Eventing Toolkit for SAP : Lets you integrate SAP with Google Cloud
and other business systems through its event-driven architecture, requiring minimal
configuration. To ensure event
standardization, the toolkit provides built-in modules that let you
encode your SAP events into the industry-standard CloudEvents specification .
You can then publish these standardized events to prebuilt targets for
Google Cloud services such as Pub/Sub, Cloud Run functions,
Firebase Cloud Messaging (FCM), and Integration Connectors. For more information, see Business Eventing Toolkit for SAP .
Cloud Storage as a content repository for SAP : Lets you implement Cloud Storage
as a content repository for SAP. Cloud Storage can handle your
SAP-related data storage needs for storing various file types such as PDFs and images,
and for archiving business data. For more information,
see Implement Cloud Storage as a content repository for SAP .
Reference architectures
Explore the ABAP SDK for Google Cloud with the help of the reference architectures
and discover how the SDK can bring innovation to your SAP application landscape.
You can use the SDK to integrate with Vertex AI for advanced AI and
machine learning capabilities, and other Google Cloud
services such as BigQuery ,
Pub/Sub , Cloud Storage
and many more. For more information, see Reference architectures for the ABAP SDK for Google Cloud .
Google Cloud community
You can discuss ABAP SDK for Google Cloud with the community
on
Cloud Forums .
Community resources
To help you get the most out of the ABAP SDK for Google Cloud, you can explore
the following community resources:
OpenAPI Generator for ABAP SDK for Google Cloud : Lets you integrate
your custom or private APIs that are hosted on Google Cloud into your
SAP applications, by generating the ABAP classes that are compatible with
ABAP SDK for Google Cloud.
For more information, see OpenAPI Generator for ABAP SDK for Google Cloud .
What's next
For information about the SAP BTP edition of ABAP SDK for Google Cloud,
see SAP BTP edition of ABAP SDK for Google Cloud guides .
For information about the on-premises or any cloud edition of ABAP SDK for Google Cloud, see On-premises or any cloud edition of ABAP SDK for Google Cloud guides .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
