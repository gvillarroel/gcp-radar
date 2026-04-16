---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:28.104Z"
product_name: "Access Transparency"
product_slug: "access-transparency"
feature_name: "Unified Maintenance"
feature_slug: "unified-maintenance"
latest_feature_date: "2026-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/supported-services"
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs"
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs"
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable"
keywords:
  - "Unified Maintenance capability"
  - "Access Transparency Unified Maintenance"
  - "Google Cloud Unified Maintenance"
  - "Unified Maintenance service"
  - "Unified Maintenance"
  - "UM"
---

# Unified Maintenance

Product: Access Transparency
Coverage: MEDIUM

## Step 02 Summary

Unified Maintenance entered general availability in Access Transparency.

## Extended Definition

Unified Maintenance entered general availability in Access Transparency.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/supported-services)
- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs)
- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs)
- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable)

## Supporting Pages

### Supported services \_|\_ Access Transparency \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Interconnect GA None Cloud Key Management Service (Cloud KMS) GA None Cloud Logging GA None Cloud NAT GA None Cloud OS Login API GA None Cloud Router GA None Cloud Run GA None Cloud Scheduler GA None Cloud SQL GA None Cloud Service Mesh GA None Cloud Storage GA None Cloud Tasks GA None Cloud TPU GA None Cloud Trace GA None Cloud VPN GA None Cloud Vision API GA None Cloud Workstations GA None Colab Enterprise GA None Compute Engine GA None Container Registry Preview None Customer Experience Insights GA None Database Center GA None Dataflow GA None Dataform GA None Knowledge Catalog GA None Managed Service for Apache Spark GA None Dialogflow CX GA None Google Distributed Cloud GA None Document AI GA None Eventarc GA None External passthrough Network Load Balancer GA None Filestore GA None Firebase Data Connect GA None Firebase Security Rules GA None Firestore GA None Flow Analyzer GA None GKE Connect GA None GKE Hub GA None GKE Identity Service GA None Google Cloud Armor GA Access Transparency logs are generated for regional Google Cloud Armor security policies.
- Identity-Aware Proxy GA None Image streaming GA None Infrastructure Manager GA None Integration Connectors GA None Internal passthrough Network Load Balancer GA None Jurisdictional Google Cloud console GA None Looker (Google Cloud core) GA None Looker Studio GA None Memorystore for Redis GA None Memorystore for Redis Cluster GA None Memorystore for Valkey GA None Model Armor GA None Cloud Monitoring GA None NCC Gateway GA None Network Connectivity Center GA None Org Lifecycle API GA None Organization Policy Service GA None Parameter Manager GA None Persistent Disk GA None Pub/Sub GA None regional external Application Load Balancer GA None regional external proxy Network Load Balancer GA None regional internal Application Load Balancer GA None regional internal proxy Network Load Balancer GA None Resource Manager GA None Secret Manager GA None Secure Source Manager GA None Secure Web Proxy GA None Security Command Center GA Access Transparency supports the Security Command Center Premium tier.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Sensitive Data Protection GA None Serverless VPC Access GA None Spanner GA None Speaker ID GA None Speech-to-Text GA None Storage Intelligence GA None Storage Transfer Service GA None Text-to-Speech GA Unified Maintenance GA None Vertex AI GA Access to your data in Vertex AI by Google personnel isn't always logged.

### Access Transparency documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Overview of Access Transparency Privileged access at Google Cloud Supported services Enable Access Transparency Understand and use Access Transparency logs View Access Transparency logs for Google Workspace info Resources Getting support Release notes Pricing Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Last updated 2026-04-10 UTC. [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Security Cloud provider access management Access Transparency Access Transparency documentation Read product documentation Access Transparency is a part of Google's long-term commitment to transparency and user trust.
- For more information, see Access Approval documentation .

### Understanding and using Access Transparency logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/reading-logs)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Sample Access Transparency log entry The following is an example of an Access Transparency log entry: { insertId : "abcdefg12345" jsonPayload : { @ type : "type.googleapis.com/google.cloud.audit.TransparencyLog" location : { principalOfficeCountry : "US" principalEmployingEntity : "Google LLC" principalPhysicalLocationCountry : "CA" } principalJobTitle : "Engineering" product : [ 0 : "Cloud Storage" ] reason : [ detail : "Case number: bar123" type : "CUSTOMER INITIATED SUPPORT" ] permissionDetails :[ 0 : { permissionType : "DATA READ" logAccessed : true } 1 : { permissionType : "ADMIN READ" } ] eventId : "asdfg12345asdfg12345asdfg12345" accesses : [ 0 : { methodName : "GoogleInternal.Read" resourceName : "//googleapis.com/storage/buckets/ BUCKET NAME /objects/foo123" } ] accessApprovals : [ 0 : "projects/123/approvalRequests/abcdef12345" ] } logName : "projects/ PROJECT ID /logs/cloudaudit.googleapis.com %2F access transparency" operation : { id : "12345xyz" } receiveTimestamp : "2017-12-18T16:06:37.400577736Z" resource : { labels : { project id : "1234567890" } type : "project" } severity : "NOTICE" timestamp : "2017-12-18T16:06:24.660001Z" } Log field descriptions Field Description insertId Unique identifier for the log. @type Access Transparency log identifier. principalOfficeCountry ISO 3166-1 alpha-2 country code of country in which the accessor has a permanent desk, ?? if location not available, or 3-character continent identifier where Google personnel are in a low-population country. principalEmployingEntity The entity that employs the Google personnel making the access (for example, Google LLC ). principalPhysicalLocationCountry ISO 3166-1 alpha-2 country code of country from which access was made, ?? if location not available, or 3-character continent identifier where Google personnel are in a low-population country. principalJobTitle The job family of the Google personnel making the access. product Customer's Google Cloud product that was accessed. reason:detail Details of the reason, for example, a support ticket ID. reason:type Access reason type (for example, CUSTOMER INITIATED SUPPORT) . permissionDetails Details about permissions linked to an access.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For example, you can create a logs-based metric that captures Google personnel accesses of your content and then create an alerting policy in Monitoring that lets you know if the number of accesses in a given period exceeds a specified threshold.
- Permission types indicate the maximum permission present, even if an access would have been possible with a lesser permission type. logAccessed : This field indicates if an administrator or data read access permission is limited to log accesses.

### Enabling Access Transparency \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/enable)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Security Cloud provider access management Access Transparency Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Verify that you have the IAM role Access Transparency Admin ( roles/axt.admin ) listed in the Role column for your Principal listing under the organization.
- To learn more about granting these permissions, see the IAM documentation on custom roles .

