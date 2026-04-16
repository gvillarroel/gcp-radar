---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.818Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Case merge when requester is not assignee"
feature_slug: "case-merge-when-requester-is-not-assignee"
latest_feature_date: "2024-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "case"
  - "merge"
  - "when"
  - "requester"
  - "is"
  - "not"
  - "assignee"
  - "cases"
---

# Case merge when requester is not assignee

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Cases can now be merged even when the requester is not the assignee, both in the platform and through the MergeCases API endpoint.

## Extended Definition

Cases can now be merged even when the requester is not the assignee, both in the platform and through the MergeCases API endpoint.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- When you open this tab, you can view case-related information such as tasks, user comments, pinned chat messages, manual and system actions, and file attachments (up to 50 MB per file).
- The case queue—automatically refreshed every minute—lists all active cases and lets you manually refresh, sort, filter, add, or close cases as needed.
- They collect enrichment data, analyst comments, and historical context, letting analysts track entity behavior over time and across cases.
- Analysts can also: Automatically group additional alerts into existing cases based on shared entities and configurable rules.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Enrich detections with context from raw events This use case involves linking a high-level alert from one system with event logs from another system.
- Rule logic that attempts to filter or exclude cases based on status (for example, $edetection.feedback summary.status != "CLOSED" ) isn't supported.
- Note : If you have both SIEM and SOAR, you can also view the results in the Cases tab.
- Common use cases This section lists some common use cases for composite detections.

### Case manipulation \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation](https://docs.cloud.google.com/chronicle/docs/soar/reference/case-manipulation)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods Name Siemplify SiemplifyAction Description add tag N/A add tag Adds a new tag to the current case change case stage N/A change case stage Sets the current case's stage to a specific stage change case priority change case priority change case priority Sets the current case's priority to a specific value mark case as important mark case as important mark case as important Marks the current case with the 'importance triangle' sign Data retrieval Name Siemplify SiemplifyAction Description get case comments get case comments get case comments Retrieve comments on the case get alerts ticket ids from cases closed since timestamp N/A get alerts ticket ids from cases closed since timestamp get similar cases N/A get similar cases Retrieve similar cases in the system Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Name Siemplify SiemplifyAction Description close case N/A close case Closes the current case with the selected close reason and given comment add comment add comment add comment Adds a comment to the current case's case wall close alert N/A close alert Closes the current alert with the selected close reason and given comment raise incident raise incident raise incident Changes the current case into an incident assign case assign case assign case Assigns the current case to the selected analyst or group add entity to case add entity to case add entity to case Creates a new entity in the case add attachment add attachment add attachment Adds attachment to the case.
- Case metadata This section focuses on SDK functions that manipulate case index and help maintain the system.
- Case manipulation This section focuses on SDK functions that help manipulate a case's state and data.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Note: When you configure the SOURCE DELETION OPTION field, if you select an option to delete source objects, you must enable the required deletion permissions for that feed type.
- Note: When you disable a feed, it prevents new data from being added to the ingestion queue.
- Sample ingress rule - ingressFrom: identities: - serviceAccount:8911409095528497-0-account@partnercontent.gserviceaccount.com sources: - accessLevel: " " ingressTo: operations: - serviceName: storage.googleapis.com methodSelectors: - method: google.storage.objects.list - method: google.storage.objects.get - method: google.storage.objects.delete resources: - projects/PROJECT ID Egress rules The following egress rules must be allowed for feeds using GOOGLE CLOUD STORAGE V2 , GOOGLE CLOUD STORAGE EVENT DRIVEN , AMAZON S3 V2 , AMAZON SQS V2 , and AZURE BLOBSTORE V2 to operate when VPCSC is enabled.

