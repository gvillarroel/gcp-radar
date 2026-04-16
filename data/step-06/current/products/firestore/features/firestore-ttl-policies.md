---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.889Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Firestore TTL policies"
feature_slug: "firestore-ttl-policies"
latest_feature_date: "2022-10-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/key-visualizer"
  - "https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview"
keywords:
  - "firestore"
  - "ttl"
  - "policies"
  - "supports"
  - "time"
  - "live"
  - "automatic"
  - "document"
---

# Firestore TTL policies

Product: Firestore
Coverage: LOW

## Step 02 Summary

Firestore supports time-to-live (TTL) policies for automatic document expiration; Firestore supports time-to-live (TTL) policies for automatic document expiration.

## Extended Definition

Firestore supports time-to-live (TTL) policies for automatic document expiration; Firestore supports time-to-live (TTL) policies for automatic document expiration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview)

## Supporting Pages

### "Enterprise edition index overview \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview](https://docs.cloud.google.com/firestore/native/docs/enterprise-index-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Enterprise edition index overview Preview — Firestore in Native mode (with Pipeline Operations) for Enterprise Edition This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- For example, with this index: Collection Fields indexed Query scope cities name (ascending) Collection If you add the document {"abbreviation": "LA"} to the collection, the unique index creates an entry with name set to null .
- Sparse indexes A sparse index indexes only the documents in the collection that contain a value (including null) for at least one of the indexed fields.

### "google-cloud-firestore overview (3.38.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/overview)
- Source ID: `site-java-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 3.38.0 (latest) 3.37.0 3.36.0 3.35.1 3.33.4 3.32.2 3.31.9 3.30.11 3.28.0 3.27.2 3.26.5 3.25.1 3.24.3 3.22.0 3.21.4 3.20.0 3.17.0 3.16.3 3.15.7 3.14.4 3.13.2 3.12.1 3.11.0 3.10.0 3.9.6 3.8.2 3.7.10 3.6.0 3.5.0 3.4.2 3.3.0 3.2.0 3.1.0 3.0.21 Key Reference Links Cloud Firestore Description: Is a fully-managed NoSQL document database for mobile, web, and server development from Firebase and Google Cloud Platform.
- Home Documentation Developer tools Java Client libraries Send feedback google-cloud-firestore overview (3.38.0) Stay organized with collections Save and categorize content based on your preferences.
- The example below demonstrates how you would import the BOM and include the google-cloud-firestore artifact. <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.78.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-firestore</artifactId> </dependency> </dependencies> Gradle BOMs are supported by default in Gradle 5.x or later.
- Cloud Firestore Product Reference GitHub Repository Maven artifact Getting Started In order to use this library, you first need to go through the following steps: Install a JDK (Java Development Kit) Select or create a Cloud Platform project Enable billing for your project Enable the API Set up authentication Use the Cloud Firestore for Java To ensure that your project uses compatible versions of the libraries and their component artifacts, import com.google.cloud:libraries-bom and use the BOM to specify dependency versions.

### "Overview of Key Visualizer \_|\_ Firestore in Native mode \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/firestore/docs/key-visualizer](https://docs.cloud.google.com/firestore/docs/key-visualizer)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These can be single-field indexes or composite indexes.For example, the following indexes are some examples of index keys as seen on the Key Visualizer tool: COLLECTION: projects/PROJECT ID/databases/default/documents/Users PROPERTIES: (timestamp: ASC) VALUES: (1686162996397845) DOCUMENT: projects/PROJECT ID/databases/default/documents/Users/QstCrsaGuq9ybj81dNse COLLECTION: projects/PROJECT ID/databases/default/documents/Users PROPERTIES: (Timestamp: ASC, Name: ASC,Country: ARRAY) VALUES: (16500000000000001L, 'Alice', 'USA') DOCUMENT: (projects/PROJECT ID/databases/default/documents/Users/5000000000000001) Scan eligibility Each Key Visualizer scan covers a two hour period.
- For a document keys heatmap, the x-axis of the heatmap represents time, and the y-axis represents document keys, while for an index keys heatmap, the x-axis of the heatmap represents time, and the y-axis represents index keys.
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Each scan includes a heatmap that shows access patterns or performance metrics for a group of document keys or index keys over time.

