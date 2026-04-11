---
title: Pub/Sub pricing | Google Cloud
url: https://docs.cloud.google.com/pubsub/lite/pricing
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/pricing
  title: Pub/Sub pricing | Google Cloud
  fetched_via: http_bfs
  content_scope: document
  content_type: text/html; charset=utf-8
  status_code: 200
---

Pub/Sub pricing | Google Cloud
Page Contents
Pub/Sub pricing
The cost of Pub/Sub has three components:
Throughput costs for message publishing and delivery
Data transfer costs associated with throughput that crosses a Google Cloud zone or region boundary
Storage costs associated with retaining messages
Pub/Sub service charges are based on usage (the number of published, delivered, or stored bytes).
Pub/Sub Lite throughput and storage charges, by contrast, are based on reserved capacity.
Data transfer charges for both services are based on usage, rather than reserved capacity.
Prerequisites
This document requires that you understand the architecture of Pub/Sub or Pub/Sub Lite and the common terms that are part of each product. For more information, see Pub/Sub architecture .
Pricing examples
The following table compares the monthly cost of Pub/Sub and Pub/Sub Lite systems for sample loads in North America. This example assumes a 24-hour message storage period, a 50% resource utilization for Pub/Sub Lite, and a pull or push subscription type for Pub/Sub. Other types of subscriptions might have additional costs.
Publish throughput in MiBps
Number of subscriptions
Zonal Lite topic (USD)
Regional Lite topic (USD)
Pub/Sub (USD)
10
1
$169
$608
$2,000
10
2
$214
$788
$3,000
100
1
$1,688
$6,075
$19,760
100
2
$2,138
$7,875
$29,640
When you compare the cost of Pub/Sub and Pub/Sub Lite, consider the differences in features between the two products. For more information, see Choosing Pub/Sub or Pub/Sub Lite .
Pub/Sub service pricing
The pricing details in this section apply only to Pub/Sub and not Pub/Sub Lite. This section includes the following topics:
Throughput costs
Storage costs
Single message transforms costs
Data transfer costs
Cross-project Pub/Sub billing
Filtered messages costs
Throughput costs
Throughput is the total number of bytes written (publish throughput) to a Pub/Sub topic or read (subscribe throughput) from a subscription to a topic over an interval of time.
Every calendar month, the first 10 GiB of throughput identified as the Message Delivery Basic SKU for a billing account is free. After that, the price is $40 per TiB in all Google Cloud regions. However, if you are using an import topic or an export subscription, read the next sections.
Throughput costs for BigQuery subscriptions
BigQuery subscriptions cost $50 per TiB in all Google Cloud regions for reading (subscribe throughput) from a subscription and writing to BigQuery. There are no additional BigQuery data ingestion charges. However, other types of BigQuery charges such as storage and data extraction apply. For more information, see BigQuery pricing . The first 10 GiB of BigQuery subscription throughput is not free.
Throughput costs for Cloud Storage subscriptions
Cloud Storage subscriptions cost $50 per TiB in all Google Cloud regions for reading (subscribe throughput) from a subscription and writing to Cloud Storage. When a Cloud Storage subscriptions writes files to a bucket, other types of additional charges might apply. These include charges such as storage, retrieval, and replication. For more information, see Cloud Storage pricing . The first 10 GiB of Cloud Storage subscription throughput is not free.
Throughput costs for import topics
Import topics (for Kinesis Data Streams) cost $50 per TiB in all Google Cloud regions for ingesting data into Pub/Sub (publish throughput).
Import topics (for Cloud Storage, Azure Event Hubs, AWS MSK, or Confluent Cloud) cost $80 per TiB in all Google Cloud regions for ingesting data into Pub/Sub (publish throughput).
When an import topic ingests data into a Pub/Sub topic, other types of source-specific additional charges might apply. These include charges such as egress from AWS for Kinesis Data Streams source, Cloud Storage operation charges for Cloud Storage source. The first 10 GiB of import topics throughput is not free.
Message volume calculation
The data volume of a message is the sum of the sizes of the following message attributes:
The number of bytes in the encoded message body string
For each attribute, the size of the key and its value
20 bytes for the timestamp
The size of the message_id string
The size of additional optional fields, such as those associated with early access and other restricted-access APIs.
A minimum of 1 KB is assessed for each request, independent of the message sizes in the request. Hence, for messages smaller than 1 KB, it is cheaper to batch multiple messages in a single request.
Storage costs
Storage costs of $0.27 per GiB-month are charged for the following:
A topic is configured to retain messages. In this case, message storage fees are charged for storing all messages published to the topic up to the configured message retention duration .
A subscription is configured to retain acknowledged messages. In this case, storage fees are charged for retained acknowledged messages.
A snapshot of a subscription is created. In this case, message storage fees are charged for storing the messages retained by the snapshot. Additionally, if the subscription has an existing backlog of unacknowledged messages when the snapshot is created, a one-time fee equivalent to storing that backlog for seven days is incurred.
A subscription is configured with message retention duration of over 1 day and has backlog that is over 1 day old. In this case, storage fees are charged for unacknowledged messages older than 1 day. No additional charge is incurred for unacknowledged messages that are already retained by the subscription's topic (if the subscription's topic is configured to retain messages).
Consider a topic without message retention enabled and an attached subscription with message retention duration set to the default of 7 days. If subscribers are able to process the messages within 1 day of publishing, subscription owners are not charged storage fees for unacknowledged messages. However, storage fees are incurred for unacknowledged messages retained over 1 day of publishing if subscribers are unable to process the messages within the first 24 hours.
Consider a topic with message retention duration set to 4 days and an attached subscription with message retention duration set to the default of 7 days. Subscription owners are not charged storage fees for unacknowledged messages retained for less than 4 days of publishing, since those messages are already retained by the topic. If subscribers are unable to process the messages after 4 days of publishing, subscription owners are charged for the additional 3 days.
Retaining acknowledged messages in individual subscriptions offers the most flexibility to subscription owners, but is usually the most expensive storage mechanism. The least expensive storage mechanism is topic message retention because messages retained for a topic can be used across all attached subscriptions without additional fees per subscription. Pub/Sub does not charge subscription owners for retained unacknowledged messages if those messages are already retained by the topic. Snapshots can also be an economical option because a single snapshot can be used across multiple subscriptions.
Note that if the topic's message retention settings are changed, charges on unacknowledged messages might change as well. For example, subscription owners might begin to incur storage charges on unacknowledged messages if the topic owner disables message retention.
Single Message Transform Costs
UDFs SMT costs represent the total amount of data processed using a Pub/Sub topic SMT or a Pub/Sub subscription SMT. Data processing charges are based on the larger of the input and output message sizes. For instance, if a UDF SMT transforms a 5MB message into an 8MB message, the data processing costs will be calculated based on 8MB. The price is $40 per TiB in all Google Cloud regions.
AI Inference SMT enriches the original Pub/Sub message with the AI model response and costs represent the total amount of data, including the original message. For instance, if an AI SMT enriches a 5MB message into an 8MB message, the data processing costs will be calculated based on 8MB. The price is $60 per TiB in all Google Cloud regions. For AI Inference SMT, additional charges associated with Vertex AI will apply.
Data transfer costs
The fees for internet data transfer and message delivery between Google Cloud regions are consistent with the VPC network rates, with the following exceptions:
There are no zone data transfer fees for Pub/Sub usage.
Egress to Google products is not exempt from data transfer fees.
You don't pay for data transfer into Pub/Sub. For example, if the publisher is in a different region or zone, you must pay data transfer fees for the originating service, but no inbound data transfer fees is required. Similarly, if the publisher is publishing from Amazon Web Service (AWS) or a private data center, then you don't have to pay data transfer fees to Pub/Sub.
If you use export subscriptions to write data to destinations such as multi-region BigQuery tables, or dual-region or multi-region Cloud Storage buckets, data transfer costs apply only in the following situations:
Publishing outside the regions of a destination resource: If publishers send data to a region outside of the regions covered by the multi-region or dual-region resource, data transfer costs apply to all data.
Optimized routing: If publishers send data to a region within the destination resource's regions, data transfer costs apply only to data that Pub/Sub routes to a different region for optimized delivery. This optimized routing only occurs in exceptional circumstances.
You are charged for data transfer every time a message crosses a region boundary. If you have several subscribers in a region different from the region where messages are stored, you are charged data transfer fees independently for delivery to each subscriber.
Data transfer costs due to message storage policy
A message storage policy can result in additional region data transfer fees if the policy forces the data to exit a Google Cloud region. For example, consider a message with the following events:
Published in region A
Routed to region B for storage
Delivered to a subscriber client in region C
In this case, the billing scenario is explained as follows:
The project that contains the topic is billed for data transfer from region A to region B.
The project that contains the subscription is billed for data transfer from region B to region C.
The project that contains the topic is charged a data transfer fee only if the published message is stored in a region different from the region where the message was published (that is, B is actually a different region from A). The project containing the subscription is charged a data transfer fee only if the published message is stored in a different region from the subscriber client is (C is not the same as B).
Filtered messages costs
Pub/Sub automatically acknowledges the messages that don't match a filter , but you still incur throughput fees for these messages. There are no data transfer fees for filtered messages.
The 1,000-byte minimum doesn't apply to the messages that the Pub/Sub service automatically acknowledges. Message delivery fees are based on the number of bytes in these messages, and is independent of the small size of the messages.
Cross-project Pub/Sub billing
If you use Pub/Sub across projects, Pub/Sub fees are billed to the project that contains the requested resource:
The project that is billed for publishing is the project that contains the topic.
The project that is billed for subscribing is the project that contains the subscription.
For example, if the subscription lives in project A, then project A is billed for data that is pulled from the subscription, even if the subscription is attached to a topic in project B.
If an authorized service account in project A consumes messages from a subscription in project B, then project B is billed for the data that is pulled from the subscription.
Pub/Sub Lite service pricing
✩Note: Pub/Sub Lite is deprecated. Effective March 18, 2026, Pub/Sub Lite will be turned down.
Current customers: Pub/Sub Lite remains functional until March 18, 2026.
If you have not used Pub/Sub Lite within the 90-day period preceding July 15, 2025 (April 15, 2025 - July 15, 2025), you won't be able to access Pub/Sub Lite starting on July 15, 2025.
New customers: Pub/Sub Lite is no longer available for new customers after September 24, 2024.
You can migrate your Pub/Sub Lite service to Google Cloud Managed Service for Apache Kafka or Pub/Sub .
The following pricing details apply only to Pub/Sub Lite, not Pub/Sub. Unless otherwise specified, the details apply to both zonal and regional Lite topics. The following sections are included:
Throughput costs
Storage costs
Data transfer costs
Throughput costs
Throughput is the total number of bytes written (publish throughput) to a Pub/Sub Lite topic or read (subscribe throughput) from a subscription to a topic over an interval of time.
Pub/Sub Lite throughput fees are based on the provisioned or reserved throughput capacity, rather than the actual throughput (MiBps) or the total number of bytes in a billing period (MiB per month). Throughput capacity is provisioned and priced in capacity units . You can provision throughput capacity for one or more topics in the same region by using a Lite reservation.
The following table shows the costs for throughput and storage for a Pub/Sub Lite system.
Iowa (us-central1)
Taiwan (asia-east1)
Hong Kong (asia-east2)
Tokyo (asia-northeast1)
Osaka (asia-northeast2)
Seoul (asia-northeast3)
Mumbai (asia-south1)
Singapore (asia-southeast1)
Jakarta (asia-southeast2)
Sydney (australia-southeast1)
Melbourne (australia-southeast2)
Finland (europe-north1)
Belgium (europe-west1)
London (europe-west2)
Frankfurt (europe-west3)
Netherlands (europe-west4)
Zurich (europe-west6)
Montreal (northamerica-northeast1)
Sao Paulo (southamerica-east1)
Iowa (us-central1)
South Carolina (us-east1)
Northern Virginia (us-east4)
Oregon (us-west1)
Los Angeles (us-west2)
Salt Lake City (us-west3)
Las Vegas (us-west4)
Hourly Hourly
Monthly Monthly
Throughput
Storage, per zone
$0.00625 / 1 mebibyte hour $0.000054795 / 1 gibibyte hour
Throughput with a Lite reservation
Lite reservations are a way to reserve and share throughput capacity among one or multiple topics in a region. Lite reservations are required for regional Pub/Sub Lite topics.
Throughput capacity for Lite reservations is measured in capacity units. You can provision only a whole number of capacity units for a reservation. Throughput of different operations require a different number of capacity units, as described in the following table:
Capacity units required
Zonal Lite topic
Regional Lite topic
1 MiBps of publish throughput
1 capacity unit
4 capacity units
1 MiBps of subscribe throughput
0.5 capacity units
2 capacity units
☆If you are using the Kafka wire protocol to publish messages, you require an additional 1 capacity unit for every 1 MiBps of publish throughput and an additional 0.5 capacity units for every 1 MiBps of subscribe throughput. This throughput consumption is in addition to the consumption of capacity units due to the topic throughput.
The number of partitions across all Lite topics in a reservation must be no greater than the number of capacity units reserved.
Calculate the cost of throughput capacity for a single topic with reservations
The following section helps you to calculate the cost of throughput capacity for a single zonal Lite topic that uses reservations:
Type of topic = Zonal Lite topic
Number of topics = 1
Number of partitions = 5
Peak publish throughput = 5 MiBps
Capacity units required for publish throughput = 5
Peak subscribe throughput = 10 MiBps
Capacity units required for subscribe throughput = 5
Total capacity units required = 5+5 = 10
Cost of 10 capacity units in North America per month = $45
For the same throughput with a regional Lite topic with 5 partitions, you require a reservation with 40 capacity units, 20 for publish throughput and 20 for subscribe throughput.
You can change the number of capacity units in a reservation at any time. However, you are billed for the maximum capacity provisioned in the last 24 hours. For example, if you change the capacity of a reservation from 40 to 10 capacity units at 10:00 AM on Monday, you are billed for 40 capacity units per hour until 10:00 AM on Tuesday and for 10 capacity units per hour afterwards.
Note that the capacity of a reservation can be used for publish and subscribe throughput with any topic in the same region as the reservation. To learn more about reservations, see Create and manage Lite reservations .
Throughput without a Lite reservation
This section applies to zonal Lite topics only.
You can choose to not use reservations and reserve publish and subscribe throughput capacity for a single topic. In this case, you are billed for the currently reserved capacity rather than the maximum over a running 24-hour window.
Note that capacity configured without reservations must be between the following limits:
4 and 16 MiBps (equivalent to 4 and 16 capacity units) for publish for each partition.
4 and 32 MiBps (equivalent to 2 and 16 capacity units) for subscribe for each partition.
Calculate the cost of throughput capacity for a single topic without reservations
The following section helps you to calculate the cost of throughput capacity for a single zonal Lite topic that does not use reservations:
Type of topic = Zonal Lite topic
Number of topics = 1
Number of partitions = 4
Peak publish throughput = 16 MiBps
Capacity units required for publish throughput = 16
Peak subscribe throughput = 16 MiBps
Capacity units required for subscribe throughput = 8
Total capacity units required = 16+8 = 24
Cost of 24 capacity units in North America per month = $108
✩Note: Typically, we recommend a 40% to 60% utilization of the total allocated throughput capacity.
Storage costs
As with Lite throughput, you pay for the storage capacity of a topic. Pub/Sub Lite charges for the maximum amount of storage that you provision in a month. Each partition must have at least 30 GiB of storage capacity.
A regional Lite topic stores data in two zones in a region, whereas a zonal LLite topic stores data only in one zone in a region. Regional Lite topics use two bytes of storage for every byte of messages published. Therefore, the storage cost per byte published to a regional Lite topic is double the cost for a zonal one.
To estimate storage capacity for a Pub/Sub Lite system, refer to the following list:
Determine the length of time you require to store messages.
To estimate the total storage required, multiply your average expected throughput for each partition by the length of time needed to store your messages. For example, to publish 40 MiB of messages per second across 10 partitions in a zonal Lite topic and to retain messages for one day, provision 3375 GiB of storage (equivalent to 40 MiBps * 3600 secs per hour * 24 hrs per day * 1 GiB/1024 MiB). The storage costs you $135 in North America (equivalent to 3375 GiB * 24 hours per day * 30 days per month * $0.04 / GiB-month-zone). For a regional Lite topic, since the data is stored in two zones, the storage cost is doubled to $270.
Consider uneven key distribution.
All partitions are allocated the same storage capacity. If you expect some partitions to have a larger volume than others, provision all partitions to have the storage required for the largest partition.
Message volume calculation
When computing the size of messages for throughput and storage, each message uses a minimum of 256 bytes. If the message is larger than 256 bytes, then the size of the message is the sum of the following message attributes:
The number of bytes in the encoded message body string
The number of bytes in the key and value of each attribute
The number of bytes in the ordering key
12 bytes for the event timestamp
Data transfer costs
Pub/Sub Lite data transfer fees apply only if your subscribers are in a different zone or region from the location of the topic. The fees for internet data transfer out and message delivery between Google Cloud regions are consistent with the VPC network rates , with the following exceptions:
For regional Lite topics with subscribers in the same region as the topic, there are no zone data transfer fees.
Data transfer to Google products is not exempt from data transfer fees.
Paying in currency other than USD
If you pay in a currency other than USD, the prices listed in your currency on Google Cloud SKUS apply. The rate listed is per TiB (2^40 bytes, or approximately 1.1 trillion bytes).
What's next
Check out Pub/Sub quotas and limits or Pub/Sub Lite quotas and limits .
Calculate your Pub/Sub costs using the pricing calculator .
Refer to the Pub/Sub SKU groups .
Request a custom quote
With Google Cloud's pay-as-you-go pricing, you only pay for the services you use. Connect with our sales team to get a custom quote for your organization.
Contact sales
menu
Overview Solutions Products Pricing Resources Docs Support Contact us

search send
Docs Support
Console Sign in
Start free
Start free
Contact us
close Accelerate your digital transformation
Whether your business is early in its journey or well on its way to digital transformation, Google Cloud can help solve your toughest challenges.
Learn more
Key benefits
Why Google Cloud
Top reasons businesses choose us.
AI and ML
Get enterprise-ready AI.
Multicloud
Run your apps wherever you need them.
Global infrastructure
Build on the same infrastructure as Google.
Data Cloud
Make smarter decisions with unified data.
Modern Infrastructure Cloud
Next generation of cloud infrastructure.
Security
Protect your users, data, and apps.
Productivity and collaboration
Connect your teams with AI-powered apps.
Reports and insights
Executive insights
Curated C-suite perspectives.
Analyst reports
Read what industry analysts say about us.
Whitepapers
Browse and download popular whitepapers.
Customer stories
Explore case studies and videos.
close Industry Solutions
Application Modernization
Artificial Intelligence
APIs and Applications
Data Analytics
Databases
Infrastructure Modernization
Productivity and Collaboration
Security
Startups and SMB
See all solutions
Industry Solutions
Reduce cost, increase operational agility, and capture new market opportunities.
Retail
Analytics and collaboration tools for the retail value chain.
Consumer Packaged Goods
Solutions for CPG digital transformation and brand growth.
Financial Services
Computing, data management, and analytics tools for financial services.
Healthcare and Life Sciences
Advance research at scale and empower healthcare innovation.
Media and Entertainment
Solutions for content production and distribution operations.
Telecommunications
Hybrid and multi-cloud services to deploy and monetize 5G.
Games
AI-driven solutions to build and scale games faster.
Manufacturing
Migration and AI tools to optimize the manufacturing value chain.
Supply Chain and Logistics
Enable sustainable, efficient, and resilient data-driven operations across supply chain and logistics operations.
Government
Data storage, AI, and analytics solutions for government agencies.
Education
Teaching tools to provide more engaging learning experiences.
Not seeing what you're looking for?
See all industry solutions
Application Modernization
Assess, plan, implement, and measure software practices and capabilities to modernize and simplify your organization’s business application portfolios.
CAMP
Program that uses DORA to improve your software delivery capabilities.
Modernize Traditional Applications
Analyze, categorize, and get started with cloud migration on traditional workloads.
Migrate from PaaS: Cloud Foundry, Openshift
Tools for moving your existing containers into Google's managed container services.
Migrate from Mainframe
Automated tools and prescriptive guidance for moving your mainframe apps to the cloud.
Modernize Software Delivery
Software supply chain best practices - innerloop productivity, CI/CD and S3C.
DevOps Best Practices
Processes and resources for implementing DevOps in your org.
SRE Principles
Tools and resources for adopting SRE in your org.
Platform Engineering
Comprehensive suite of managed services and Golden Paths to build, manage, and scale IDPs.
Run Applications at the Edge
Guidance for localized and low latency apps on Google’s hardware agnostic edge solution.
Architect for Multicloud
Manage workloads across multiple clouds with a consistent platform.
Go Serverless
Fully managed environment for developing, deploying and scaling apps.
Artificial Intelligence
Add intelligence and efficiency to your business with AI and machine learning.
Customer Engagement Suite with Google AI
End-to-end application that combines our most advanced conversational AI.
Document AI
Document processing and data capture automated at scale.
Vertex AI Search for commerce
Google-quality search and product recommendations for retailers.
Google Cloud with Gemini
AI assistants for application development, coding, and more.
Generative AI on Google Cloud
Transform content creation and discovery, research, customer service, and developer efficiency with the power of generative AI.
APIs and Applications
Speed up the pace of innovation without coding, using APIs, apps, and automation.
New Business Channels Using APIs
Attract and empower an ecosystem of developers and partners.
Unlocking Legacy Applications Using APIs
Cloud services for extending and modernizing legacy apps.
Open Banking APIx
Simplify and accelerate secure delivery of open banking compliant APIs.
Data Analytics
Generate instant insights from data at any scale with a serverless, fully managed analytics platform that significantly simplifies analytics.
Data Migration
Migrate and modernize your data warehouse and data lakes with AI-powered migration services.
Data Lakehouse
Unify and govern your multimodal data with a high-performance and open data lakehouse.
Real-time Analytics
Insights from ingesting, processing, and analyzing event streams.
Marketing Analytics
Solutions for collecting, analyzing, and activating customer data.
Datasets
Data from Google, public, and commercial providers to enrich your analytics and AI initiatives.
Business Intelligence
Solutions for modernizing your BI stack and creating rich data experiences.
AI for Data Analytics
Write SQL, build predictive models, and visualize data with AI for data analytics.
Geospatial Analytics
A comprehensive platform to solve for geospatial use cases at scale.
Databases
Migrate and manage enterprise data with security, reliability, high availability, and fully managed data services.
Database Migration
Guides and tools to simplify your database migration life cycle.
Database Modernization
Upgrades to modernize your operational database infrastructure.
Databases for Games
Build global, live games with Google Cloud databases.
Google Cloud Databases
Database services to migrate, manage, and modernize data.
Migrate Oracle workloads to Google Cloud
Rehost, replatform, rewrite your Oracle workloads.
Open Source Databases
Fully managed open source databases with enterprise-grade support.
SQL Server on Google Cloud
Options for running SQL Server virtual machines on Google Cloud.
Gemini for Databases
Supercharge database development and management with AI.
Infrastructure Modernization
Migrate quickly with solutions for SAP, VMware, Windows, Oracle, and other workloads.
Application Migration
Discovery and analysis tools for moving to the cloud.
SAP on Google Cloud
Certifications for running SAP applications and SAP HANA.
High Performance Computing
Compute, storage, and networking options to support any workload.
Windows on Google Cloud
Tools and partners for running Windows workloads.
Data Center Migration
Migration solutions for VMs, apps, databases, and more.
Active Assist
Automatic cloud resource optimization and increased security.
Virtual Desktops
Remote work solutions for desktops and applications (VDI & DaaS).
Rapid Migration and Modernization Program
End-to-end migration program to simplify your path to the cloud.
Backup and Disaster Recovery
Ensure your business continuity needs are met.
Red Hat on Google Cloud
Google and Red Hat provide an enterprise-grade platform for traditional on-prem and custom applications.
Cross-Cloud Network
Simplify hybrid and multicloud networking, and secure your workloads, data, and users.
Observability
Monitor, troubleshoot, and improve app performance with end-to-end visibility.
Productivity and Collaboration
Change the way teams work with solutions designed for humans and built for impact.
Google Workspace
Collaboration and productivity tools for enterprises.
Google Workspace Essentials
Secure video meetings and modern collaboration for teams.
Cloud Identity
Unified platform for IT admins to manage user devices and apps.
Chrome Enterprise
ChromeOS, Chrome Browser, and Chrome devices built for business.
Security
Detect, investigate, and respond to online threats to help protect your business.
Agentic SOC
Delivering better security outcomes with AI agents.
Web App and API Protection
Threat and fraud protection for your web applications and APIs.
Security and Resilience Framework
Solutions for each phase of the security and resilience life cycle.
Risk and compliance as code (RCaC)
Solution to modernize your governance, risk, and compliance function with automation.
Software Supply Chain Security
Solution for improving end-to-end software supply chain security.
Security Foundation
Recommended products to help achieve a strong security posture.
Google Cloud Cybershield™
Strengthen nationwide cyber defense.
Startups and SMB
Accelerate startup and SMB growth with tailored solutions and programs.
Startup Program
Get financial, business, and technical support to take your startup to the next level.
Small and Medium Business
Explore solutions for web hosting, app development, AI, and analytics.
Software as a Service
Build better SaaS products, scale efficiently, and grow your business.
close Featured Products
AI and Machine Learning
Business Intelligence
Compute
Containers
Data Analytics
Databases
Developer Tools
Distributed Cloud
Hybrid and Multicloud
Industry Specific
Integration Services
Management Tools
Maps and Geospatial
Media Services
Migration
Mixed Reality
Networking
Operations
Productivity and Collaboration
Security and Identity
Serverless
Storage
Web3
See all products (100+)
Featured Products
Compute Engine
Virtual machines running in Google’s data center.
Cloud Storage
Object storage that’s secure, durable, and scalable.
BigQuery
Autonomous data to AI platform for analytics and data science.
Cloud Run
Fully managed environment for running containerized apps.
Google Kubernetes Engine
Managed environment for running containerized apps.
Vertex AI
Unified platform for ML models and generative AI.
Looker
Platform for BI, data applications, and embedded analytics.
Apigee API Management
Manage the full life cycle of APIs anywhere with visibility and control.
Cloud SQL
Relational database services for MySQL, PostgreSQL and SQL Server.
Gemini Enterprise
Secure platform to discover, create, run, and govern AI agents.
Cloud CDN
Content delivery network for delivering web and video.
Not seeing what you're looking for?
See all products (100+)
AI and Machine Learning
Vertex AI Platform
Unified platform for ML models and generative AI.
Vertex AI Studio
Build, tune, and deploy foundation models on Vertex AI.
Vertex AI Agent Builder
Build and deploy gen AI experiences.
Conversational Agents
Build conversational AI with both deterministic and gen AI functionality.
Vertex AI Search
Build Google-quality search for your enterprise apps and experiences.
Speech-to-Text
Speech recognition and transcription across 125 languages.
Text-to-Speech
Speech synthesis in 220+ voices and 40+ languages.
Translation AI
Language detection, translation, and glossary support.
Gemini Enterprise
Secure platform to discover, create, run, and govern AI agents.
Vision AI
Custom and pre-trained models to detect emotion, text, and more.
Contact Center as a Service
Omnichannel contact center solution that is native to the cloud.
Not seeing what you're looking for?
See all AI and machine learning products
Business Intelligence
Looker
Platform for BI, data applications, and embedded analytics.
Looker Studio
Interactive data suite for dashboarding, reporting, and analytics.
Compute
Compute Engine
Virtual machines running in Google’s data center.
App Engine
Serverless application platform for apps and back ends.
Cloud GPUs
GPUs for ML, scientific computing, and 3D visualization.
Migrate to Virtual Machines
Server and virtual machine migration to Compute Engine.
Spot VMs
Compute instances for batch jobs and fault-tolerant workloads.
Batch
Fully managed service for scheduling batch jobs.
Sole-Tenant Nodes
Dedicated hardware for compliance, licensing, and management.
Bare Metal
Infrastructure to run specialized workloads on Google Cloud.
Recommender
Usage recommendations for Google Cloud products and services.
VMware Engine
Fully managed, native VMware Cloud Foundation software stack.
Cloud Run
Fully managed environment for running containerized apps.
Not seeing what you're looking for?
See all compute products
Containers
Google Kubernetes Engine
Managed environment for running containerized apps.
Cloud Run
Fully managed environment for running containerized apps.
Cloud Build
Solution for running build steps in a Docker container.
Artifact Registry
Package manager for build artifacts and dependencies.
Cloud Code
IDE support to write, run, and debug Kubernetes applications.
Cloud Deploy
Fully managed continuous delivery to GKE and Cloud Run.
Migrate to Containers
Components for migrating VMs into system containers on GKE.
Deep Learning Containers
Containers with data science frameworks, libraries, and tools.
Knative
Components to create Kubernetes-native cloud-based software.
Data Analytics
BigQuery
Autonomous data to AI platform for analytics and data science.
Looker
Platform for BI, data applications, and embedded analytics.
Dataflow
Real-time analytics for stream and batch processing.
Pub/Sub
Messaging service for event ingestion and delivery.
Dataproc
Managed service for running Apache Spark and Apache Hadoop clusters.
Google Cloud Serverless for Apache Spark
Quick VM startup and dynamic autoscaling for Spark workloads.
Cloud Composer
Workflow orchestration service built on Apache Airflow.
BigLake
Storage engine for building data lakehouses with Apache Iceberg.
Dataplex Universal Catalog
A unified data-to-AI governance fabric for all Google Cloud services.
BigQuery Migration Services
Free-to-use, cloud-native and AI-powered data migration services.
Managed Service for Apache Kafka
Managed Kafka service to operate highly available Apache Kafka clusters.
Not seeing what you're looking for?
See all data analytics products
Databases
AlloyDB for PostgreSQL
Fully managed, PostgreSQL-compatible database for enterprise workloads.
Cloud SQL
Fully managed database for MySQL, PostgreSQL, and SQL Server.
Firestore
Highly scalable and serverless NoSQL document database, with MongoDB compatibility.
Spanner
Cloud-native relational database with unlimited scale and 99.999% availability.
Bigtable
Cloud-native wide-column database for large-scale, low-latency workloads.
Datastream
Serverless change data capture and replication service.
Database Migration Service
Serverless, minimal downtime migrations to Cloud SQL.
Bare Metal Solution
Fully managed infrastructure for your Oracle workloads.
Memorystore
Fully managed Redis and Memcached for sub-millisecond data access.
Developer Tools
Artifact Registry
Universal package manager for build artifacts and dependencies.
Cloud Code
IDE support to write, run, and debug Kubernetes applications.
Cloud Build
Continuous integration and continuous delivery platform.
Cloud Deploy
Fully managed continuous delivery to GKE and Cloud Run.
Cloud Deployment Manager
Service for creating and managing Google Cloud resources.
Cloud SDK
Command-line tools and libraries for Google Cloud.
Cloud Scheduler
Cron job scheduler for task automation and management.
Cloud Source Repositories
Private Git repository to store, manage, and track code.
Infrastructure Manager
Automate infrastructure management with Terraform.
Cloud Workstations
Managed and secure development environments in the cloud.
Gemini Code Assist
AI-powered assistant available across Google Cloud and your IDE.
Not seeing what you're looking for?
See all developer tools
Distributed Cloud
Google Distributed Cloud Connected
Distributed cloud services for edge workloads.
Google Distributed Cloud Air-gapped
Distributed cloud for air-gapped workloads.
Hybrid and Multicloud
Google Kubernetes Engine
Managed environment for running containerized apps.
Apigee API Management
API management, development, and security platform.
Migrate to Containers
Tool to move workloads and existing applications to GKE.
Cloud Build
Service for executing builds on Google Cloud infrastructure.
Observability
Monitoring, logging, and application performance suite.
Cloud Service Mesh
Fully managed service mesh based on Envoy and Istio.
Google Distributed Cloud
Fully managed solutions for the edge and data centers.
Industry Specific
Anti Money Laundering AI
Detect suspicious, potential money laundering activity with AI.
Cloud Healthcare API
Solution for bridging existing care systems and apps on Google Cloud.
Device Connect for Fitbit
Gain a 360-degree patient view with connected Fitbit data on Google Cloud.
Telecom Network Automation
Ready to use cloud-native automation for telecom networks.
Telecom Data Fabric
Telecom data management and analytics with an automated approach.
Telecom Subscriber Insights
Ingests data to improve subscriber acquisition and retention.
Spectrum Access System (SAS)
Controls fundamental access to the Citizens Broadband Radio Service (CBRS).
Integration Services
Application Integration
Connect to 3rd party apps and enable data consistency without code.
Workflows
Workflow orchestration for serverless products and API services.
Apigee API Management
Manage the full life cycle of APIs anywhere with visibility and control.
Cloud Tasks
Task management service for asynchronous task execution.
Cloud Scheduler
Cron job scheduler for task automation and management.
Dataproc
Service for running Apache Spark and Apache Hadoop clusters.
Cloud Data Fusion
Data integration for building and managing data pipelines.
Cloud Composer
Workflow orchestration service built on Apache Airflow.
Pub/Sub
Messaging service for event ingestion and delivery.
Eventarc
Build an event-driven architecture that can connect any service.
Management Tools
Cloud Shell
Interactive shell environment with a built-in command line.
Cloud console
Web-based interface for managing and monitoring cloud apps.
Cloud Endpoints
Deployment and development management for APIs on Google Cloud.
Cloud IAM
Permissions management system for Google Cloud resources.
Cloud APIs
Programmatic interfaces for Google Cloud services.
Service Catalog
Service catalog for admins managing internal enterprise solutions.
Cost Management
Tools for monitoring, controlling, and optimizing your costs.
Observability
Monitoring, logging, and application performance suite.
Carbon Footprint
Dashboard to view and export Google Cloud carbon emissions reports.
Config Connector
Kubernetes add-on for managing Google Cloud resources.
Active Assist
Tools for easily managing performance, security, and cost.
Not seeing what you're looking for?
See all management tools
Maps and Geospatial
Earth Engine
Geospatial platform for Earth observation data and analysis.
Google Maps Platform
Create immersive location experiences and improve business operations.
Media Services
Cloud CDN
Content delivery network for serving web and video content.
Live Stream API
Service to convert live video and package for streaming.
OpenCue
Open source render manager for visual effects and animation.
Transcoder API
Convert video files and package them for optimized delivery.
Video Stitcher API
Service for dynamic or server side ad insertion.
Migration
Migration Center
Unified platform for migrating and modernizing with Google Cloud.
Application Migration
App migration to the cloud for low-cost refresh cycles.
Migrate to Virtual Machines
Components for migrating VMs and physical servers to Compute Engine.
Cloud Foundation Toolkit
Reference templates for Deployment Manager and Terraform.
Database Migration Service
Serverless, minimal downtime migrations to Cloud SQL.
Migrate to Containers
Components for migrating VMs into system containers on GKE.
BigQuery Migration Services
Streamlined data warehouse and data lake migration tooling and incentives.
Rapid Migration and Modernization Program
End-to-end migration program to simplify your path to the cloud.
Transfer Appliance
Storage server for moving large volumes of data to Google Cloud.
Storage Transfer Service
Data transfers from online and on-premises sources to Cloud Storage.
VMware Engine
Migrate and run your VMware workloads natively on Google Cloud.
Mixed Reality
Immersive Stream for XR
Hosts, renders, and streams 3D and XR experiences.
Networking
Cloud Armor
Security policies and defense against web and DDoS attacks.
Cloud CDN and Media CDN
Content delivery network for serving web and video content.
Cloud DNS
Domain name system for reliable and low-latency name lookups.
Cloud Load Balancing
Service for distributing traffic across applications and regions.
Cloud NAT
NAT service for giving private instances internet access.
Cloud Connectivity
Connectivity options for VPN, peering, and enterprise needs.
Network Connectivity Center
Connectivity management to help simplify and scale networks.
Network Intelligence Center
Network monitoring, verification, and optimization platform.
Network Service Tiers
Cloud network options based on performance, availability, and cost.
Virtual Private Cloud
Single VPC for an entire organization, isolated within projects.
Private Service Connect
Secure connection between your VPC and services.
Not seeing what you're looking for?
See all networking products
Operations
Cloud Logging
Google Cloud audit, platform, and application logs management.
Cloud Monitoring
Infrastructure and application health with rich metrics.
Error Reporting
Application error identification and analysis.
Managed Service for Prometheus
Fully-managed Prometheus on Google Cloud.
Cloud Trace
Tracing system collecting latency data from applications.
Cloud Profiler
CPU and heap profiler for analyzing application performance.
Cloud Quotas
Manage quotas for all Google Cloud services.
Productivity and Collaboration
AppSheet
No-code development platform to build and extend applications.
Gemini Enterprise
Secure platform to discover, create, run, and govern AI agents.
Google Workspace
Collaboration and productivity tools for individuals and organizations.
Google Workspace Essentials
Secure video meetings and modern collaboration for teams.
Cloud Identity
Unified platform for IT admins to manage user devices and apps.
Chrome Enterprise
ChromeOS, Chrome browser, and Chrome devices built for business.
Security and Identity
Cloud IAM
Permissions management system for Google Cloud resources.
Sensitive Data Protection
Discover, classify, and protect your valuable data assets.
Mandiant Managed Defense
Find and eliminate threats with confidence 24x7.
Google Threat Intelligence
Know who’s targeting you.
Security Command Center
Platform for defending against threats to your Google Cloud assets.
Cloud Key Management
Manage encryption keys on Google Cloud.
Mandiant Incident Response
Minimize the impact of a breach.
Chrome Enterprise Premium
Get secure enterprise browsing with extensive endpoint visibility.
Assured Workloads
Compliance and security controls for sensitive workloads.
Google Security Operations
Detect, investigate, and respond to cyber threats.
Mandiant Consulting
Get expert guidance before, during, and after an incident.
Not seeing what you're looking for?
See all security and identity products
Serverless
Cloud Run
Fully managed environment for running containerized apps.
Cloud Functions
Platform for creating functions that respond to cloud events.
App Engine
Serverless application platform for apps and back ends.
Workflows
Workflow orchestration for serverless products and API services.
API Gateway
Develop, deploy, secure, and manage APIs with a fully managed gateway.
Storage
Cloud Storage
Object storage that’s secure, durable, and scalable.
Block Storage
High-performance storage for AI, analytics, databases, and enterprise applications.
Filestore
File storage that is highly scalable and secure.
Persistent Disk
Block storage for virtual machine instances running on Google Cloud.
Cloud Storage for Firebase
Object storage for storing and serving user-generated content.
Local SSD
Block storage that is locally attached for high-performance needs.
Storage Transfer Service
Data transfers from online and on-premises sources to Cloud Storage.
Google Cloud Managed Lustre
High performance managed parallel file service.
Google Cloud NetApp Volumes
File storage service for NFS, SMB, and multi-protocol environments.
Backup and DR Service
Service for centralized, application-consistent data protection.
Web3
Blockchain Node Engine
Fully managed node hosting for developing on the blockchain.
Blockchain RPC
Enterprise-grade RPC for building on the blockchain.
close Save money with our transparent approach to pricing
Google Cloud's pay-as-you-go pricing offers automatic savings based on monthly usage and discounted rates for prepaid resources. Contact us today to get a quote.
Request a quote
Pricing overview and tools
Google Cloud pricing
Pay only for what you use with no lock-in.
Pricing calculator
Calculate your cloud savings.
Google Cloud free tier
Explore products with free monthly usage.
Cost optimization framework
Get best practices to optimize workload costs.
Cost management tools
Tools to monitor and control your costs.
Product-specific Pricing
Compute Engine
Cloud SQL
Google Kubernetes Engine
Cloud Storage
BigQuery
See full price list with 100+ products
close Learn & build
Google Cloud Free Program
$300 in free credits and 20+ free products.
Solution Generator
Get AI generated solution recommendations.
Quickstarts
Get tutorials and walkthroughs.
Blog
Read our latest product news and stories.
Learning Hub
Grow your career with role-based training.
Google Cloud certification
Prepare and register for certifications.
Cloud computing basics
Learn more about cloud computing basics.
Cloud Architecture Center
Get reference architectures and best practices.
Connect
Innovators
Join Google Cloud's developer program.
Developer Center
Stay in the know and stay connected.
Events and webinars
Browse upcoming and on demand events.
Google Cloud Community
Ask questions, find answers, and connect.
Consulting and Partners
Google Cloud Consulting
Work with our experts on cloud projects.
Google Cloud Marketplace
Deploy ready-to-go solutions in a few clicks.
Find a partner
Explore the benefits of working with a partner.
Google Cloud partners
Learn about the ecosystem and resources.
close
Overview arrow_forward
Solutions arrow_forward
Products arrow_forward
Pricing arrow_forward
Resources arrow_forward
Docs
Support
Console
Accelerate your digital transformation
Learn more
Key benefits
Why Google Cloud
AI and ML
Multicloud
Global infrastructure
Data Cloud
Modern Infrastructure Cloud
Security
Productivity and collaboration
Reports and insights
Executive insights
Analyst reports
Whitepapers
Customer stories
Industry Solutions
Retail
Consumer Packaged Goods
Financial Services
Healthcare and Life Sciences
Media and Entertainment
Telecommunications
Games
Manufacturing
Supply Chain and Logistics
Government
Education
See all industry solutions
See all solutions
Application Modernization
CAMP
Modernize Traditional Applications
Migrate from PaaS: Cloud Foundry, Openshift
Migrate from Mainframe
Modernize Software Delivery
DevOps Best Practices
SRE Principles
Platform Engineering
Run Applications at the Edge
Architect for Multicloud
Go Serverless
Artificial Intelligence
Customer Engagement Suite with Google AI
Document AI
Vertex AI Search for commerce
Google Cloud with Gemini
Generative AI on Google Cloud
APIs and Applications
New Business Channels Using APIs
Unlocking Legacy Applications Using APIs
Open Banking APIx
Data Analytics
Data Migration
Data Lakehouse
Real-time Analytics
Marketing Analytics
Datasets
Business Intelligence
AI for Data Analytics
Geospatial Analytics
Databases
Database Migration
Database Modernization
Databases for Games
Google Cloud Databases
Migrate Oracle workloads to Google Cloud
Open Source Databases
SQL Server on Google Cloud
Gemini for Databases
Infrastructure Modernization
Application Migration
SAP on Google Cloud
High Performance Computing
Windows on Google Cloud
Data Center Migration
Active Assist
Virtual Desktops
Rapid Migration and Modernization Program
Backup and Disaster Recovery
Red Hat on Google Cloud
Cross-Cloud Network
Observability
Productivity and Collaboration
Google Workspace
Google Workspace Essentials
Cloud Identity
Chrome Enterprise
Security
Agentic SOC
Web App and API Protection
Security and Resilience Framework
Risk and compliance as code (RCaC)
Software Supply Chain Security
Security Foundation
Google Cloud Cybershield™
Startups and SMB
Startup Program
Small and Medium Business
Software as a Service
Featured Products
Compute Engine
Cloud Storage
BigQuery
Cloud Run
Google Kubernetes Engine
Vertex AI
Looker
Apigee API Management
Cloud SQL
Gemini Enterprise
Cloud CDN
See all products (100+)
AI and Machine Learning
Vertex AI Platform
Vertex AI Studio
Vertex AI Agent Builder
Conversational Agents
Vertex AI Search
Speech-to-Text
Text-to-Speech
Translation AI
Gemini Enterprise
Vision AI
Contact Center as a Service
See all AI and machine learning products
Business Intelligence
Looker
Looker Studio
Compute
Compute Engine
App Engine
Cloud GPUs
Migrate to Virtual Machines
Spot VMs
Batch
Sole-Tenant Nodes
Bare Metal
Recommender
VMware Engine
Cloud Run
See all compute products
Containers
Google Kubernetes Engine
Cloud Run
Cloud Build
Artifact Registry
Cloud Code
Cloud Deploy
Migrate to Containers
Deep Learning Containers
Knative
Data Analytics
BigQuery
Looker
Dataflow
Pub/Sub
Dataproc
Google Cloud Serverless for Apache Spark
Cloud Composer
BigLake
Dataplex Universal Catalog
BigQuery Migration Services
Managed Service for Apache Kafka
See all data analytics products
Databases
AlloyDB for PostgreSQL
Cloud SQL
Firestore
Spanner
Bigtable
Datastream
Database Migration Service
Bare Metal Solution
Memorystore
Developer Tools
Artifact Registry
Cloud Code
Cloud Build
Cloud Deploy
Cloud Deployment Manager
Cloud SDK
Cloud Scheduler
Cloud Source Repositories
Infrastructure Manager
Cloud Workstations
Gemini Code Assist
See all developer tools
Distributed Cloud
Google Distributed Cloud Connected
Google Distributed Cloud Air-gapped
Hybrid and Multicloud
Google Kubernetes Engine
Apigee API Management
Migrate to Containers
Cloud Build
Observability
Cloud Service Mesh
Google Distributed Cloud
Industry Specific
Anti Money Laundering AI
Cloud Healthcare API
Device Connect for Fitbit
Telecom Network Automation
Telecom Data Fabric
Telecom Subscriber Insights
Spectrum Access System (SAS)
Integration Services
Application Integration
Workflows
Apigee API Management
Cloud Tasks
Cloud Scheduler
Dataproc
Cloud Data Fusion
Cloud Composer
Pub/Sub
Eventarc
Management Tools
Cloud Shell
Cloud console
Cloud Endpoints
Cloud IAM
Cloud APIs
Service Catalog
Cost Management
Observability
Carbon Footprint
Config Connector
Active Assist
See all management tools
Maps and Geospatial
Earth Engine
Google Maps Platform
Media Services
Cloud CDN
Live Stream API
OpenCue
Transcoder API
Video Stitcher API
Migration
Migration Center
Application Migration
Migrate to Virtual Machines
Cloud Foundation Toolkit
Database Migration Service
Migrate to Containers
BigQuery Migration Services
Rapid Migration and Modernization Program
Transfer Appliance
Storage Transfer Service
VMware Engine
Mixed Reality
Immersive Stream for XR
Networking
Cloud Armor
Cloud CDN and Media CDN
Cloud DNS
Cloud Load Balancing
Cloud NAT
Cloud Connectivity
Network Connectivity Center
Network Intelligence Center
Network Service Tiers
Virtual Private Cloud
Private Service Connect
See all networking products
Operations
Cloud Logging
Cloud Monitoring
Error Reporting
Managed Service for Prometheus
Cloud Trace
Cloud Profiler
Cloud Quotas
Productivity and Collaboration
AppSheet
Gemini Enterprise
Google Workspace
Google Workspace Essentials
Cloud Identity
Chrome Enterprise
Security and Identity
Cloud IAM
Sensitive Data Protection
Mandiant Managed Defense
Google Threat Intelligence
Security Command Center
Cloud Key Management
Mandiant Incident Response
Chrome Enterprise Premium
Assured Workloads
Google Security Operations
Mandiant Consulting
See all security and identity products
Serverless
Cloud Run
Cloud Functions
App Engine
Workflows
API Gateway
Storage
Cloud Storage
Block Storage
Filestore
Persistent Disk
Cloud Storage for Firebase
Local SSD
Storage Transfer Service
Google Cloud Managed Lustre
Google Cloud NetApp Volumes
Backup and DR Service
Web3
Blockchain Node Engine
Blockchain RPC
Save money with our transparent approach to pricing
Request a quote
Pricing overview and tools
Google Cloud pricing
Pricing calculator
Google Cloud free tier
Cost optimization framework
Cost management tools
Product-specific Pricing
Compute Engine
Cloud SQL
Google Kubernetes Engine
Cloud Storage
BigQuery
See full price list with 100+ products
Learn & build
Google Cloud Free Program
Solution Generator
Quickstarts
Blog
Learning Hub
Google Cloud certification
Cloud computing basics
Cloud Architecture Center
Connect
Innovators
Developer Center
Events and webinars
Google Cloud Community
Consulting and Partners
Google Cloud Consulting
Google Cloud Marketplace
Find a partner
Google Cloud partners
Why Google
Choosing Google Cloud
Trust and security
Modern Infrastructure Cloud
Multicloud
Global infrastructure
Locations
Customers and case studies
Analyst reports
Whitepapers
Blog
Products and pricing
Google Cloud pricing
Google Workspace pricing
See all products
Solutions
Infrastructure modernization
Databases
Application modernization
Smart analytics
Artificial Intelligence
Security
Productivity & work transformation
Industry solutions
DevOps solutions
Small business solutions
See all solutions
Resources
Google Cloud Affiliate Program
Google Cloud documentation
Google Cloud quickstarts
Google Cloud Marketplace
Learn about cloud computing
Support
Code samples
Cloud Architecture Center
Training
Certifications
Google for Developers
Google Cloud for Startups
System status
Release Notes
Engage
Contact sales
Find a Partner
Become a Partner
Events
Podcasts
Developer Center
Press Corner
Google Cloud on YouTube
Google Cloud Tech on YouTube
Follow on X
Join User Research
We're hiring. Join Google Cloud!
Community forums
About Google
Privacy
Site terms
Google Cloud terms
Cookies management controls
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter Subscribe
language ‪English‬
‪English‬
‪Deutsch‬
‪Español‬
‪Español (Latinoamérica)‬
‪Français‬
‪Indonesia‬
‪Italiano‬
‪Português (Brasil)‬
‪简体中文‬
‪繁體中文‬
‪日本語‬
‪한국어‬
