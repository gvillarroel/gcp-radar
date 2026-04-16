---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.079Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval support for Cloud External Key Manager support"
feature_slug: "access-approval-support-for-cloud-external-key-manager-support"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services"
keywords:
  - "access"
  - "approval"
  - "external"
  - "key"
  - "manager"
---

# Access Approval support for Cloud External Key Manager support

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Cloud External Key Manager support is supported by Access Approval.

## Extended Definition

Cloud External Key Manager support is supported by Access Approval.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications](https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)

## Supporting Pages

### Supported services \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services](https://docs.cloud.google.com/assured-workloads/access-approval/docs/supported-services)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Asset Inventory GA None Cloud Billing Preview None Cloud Build GA None Cloud Composer GA None Cloud Data Fusion GA None Cloud Deploy GA None Cloud DNS GA None Cloud Domains GA None Cloud External Key Manager (Cloud EKM) GA None Cloud Run functions GA None Cloud Healthcare API GA None Cloud Interconnect GA None Cloud Key Management Service (Cloud KMS) GA None Cloud Logging GA None Cloud NAT GA None Cloud OS Login API GA None Cloud Run GA None Cloud Scheduler GA None Cloud SQL GA None Cloud Service Mesh GA None Cloud Storage GA None Cloud Tasks GA None Cloud TPU GA None Cloud Trace GA None Cloud VPN GA None Cloud Workstations GA None Compute Engine GA None Connect Agent GA None Dialogflow CX GA None Database Center GA None Dataflow GA None Dataform GA None Knowledge Catalog GA None Managed Service for Apache Spark GA None Google Distributed Cloud GA None Document AI GA None Eventarc GA None External passthrough Network Load Balancer GA None Filestore GA None Firebase Data Connect GA None Firebase Security Rules GA None Firestore GA None Flow Analyzer GA None Gemini Enterprise GA None GKE Connect GA None GKE Hub GA None GKE Hub API GA None GKE Identity Service GA None Google Cloud Armor GA Access Approval is available for regional Google Cloud Armor security policies.
- Identity-Aware Proxy GA None Image streaming GA None Infrastructure Manager GA None Integration Connectors GA None Internal passthrough Network Load Balancer GA None Google Kubernetes Engine GA None Looker (Google Cloud core) GA None Looker Studio GA None Memorystore for Redis GA None Memorystore for Redis Cluster GA None Memorystore for Valkey GA None Model Armor GA None Cloud Monitoring GA None NCC Gateway GA None Network Connectivity Center GA None Org Lifecycle API GA None Organization Policy Service GA None Parameter Manager GA None Persistent Disk GA None Pub/Sub GA None regional external Application Load Balancer GA None regional external proxy Network Load Balancer GA None regional internal Application Load Balancer GA None regional internal proxy Network Load Balancer GA None Resource Manager GA None Secret Manager GA None Secure Source Manager GA None Secure Web Proxy GA None Security Command Center GA Access Approval supports the Security Command Center Premium tier.
- Supported Google Cloud services Access Approval supports the following Google Cloud services: Supported service Launch stage Notes Access Context Manager GA None Access Transparency GA None AlloyDB for PostgreSQL GA None Apigee GA The following Apigee features are not supported by Access Approval: Apigee portal Features in the Preview launch stage Additionally, Apigee Hybrid customers must upgrade to the latest version to get full Access Approval support.
- Bigtable GA None Certificate Authority Service GA None Certificate Manager GA None Chrome Enterprise Premium GA Access Approval supports Chrome Enterprise Premium secure gateway .

### "Introduction to Key Access Justifications \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications](https://docs.cloud.google.com/assured-workloads/access-approval/docs/key-access-justifications)
- Source ID: `site-docs-root-2`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using Key Access Justifications with Cloud External Key Manager provides visibility into requests for encryption keys that allows data to change state from at-rest to in-use.
- Introduction to Key Access Justifications Key Access Justifications provides a justification for every request to access keys stored in an external key manager.
- Home Documentation Security Cloud provider access management Access Approval Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To learn about the core principles upon which controls that prevent unauthorized administrative access are based, see Overview of administrative access controls .

### "Review and approve access requests using the Google-managed signing key\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to set up Access Approval and approve access requests, ask your administrator to grant you the following IAM roles on your project: View and update Access Approval configuration and approve access requests: Access Approval Config Editor ( roles/accessapproval.configEditor ) View Access Approval configuration and approve access requests: Access Approval Approver ( roles/accessapproval.approver ) View Access Approval configuration and access requests and download log reports: Access Approval Viewer ( roles/accessapproval.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add yourself as an approver for Access Approval requests and configure notifications To add yourself as an approver so you can review and approve access requests, do the following: Go to the Access Approval page in the Google Cloud console.
- After you approve the request, Google personnel with characteristics matching the approval, such as the same justification, location, or desk location, can access the specified resource and its child resources within the approved timeframe.
- Example Defaults: Disabled: product.googleapis.com/project/12345/ Enabled: product.googleapis.com/project/12345/instances/abcde Approval Request Default Expiration Days : Set the default expiration for Access Approval requests.

