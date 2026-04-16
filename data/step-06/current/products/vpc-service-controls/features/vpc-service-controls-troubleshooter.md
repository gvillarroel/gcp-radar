---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:13.561Z"
product_name: "VPC Service Controls"
product_slug: "vpc-service-controls"
feature_name: "VPC Service Controls Troubleshooter"
feature_slug: "vpc-service-controls-troubleshooter"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/supported-products"
  - "https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services"
keywords:
  - "vpc"
  - "controls"
  - "troubleshooter"
  - "the"
  - "uses"
  - "identifiers"
  - "from"
  - "access"
---

# VPC Service Controls Troubleshooter

Product: VPC Service Controls
Coverage: MEDIUM

## Step 02 Summary

The VPC Service Controls Troubleshooter uses identifiers from access errors to help diagnose and resolve common perimeter denials.

## Extended Definition

The VPC Service Controls Troubleshooter uses identifiers from access errors to help diagnose and resolve common perimeter denials.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter)
- [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard)
- [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)

## Supporting Pages

### "Diagnose an access denial and view the classic report \_|\_ VPC Service\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter](https://docs.cloud.google.com/vpc-service-controls/docs/troubleshooter)
- Source ID: `site-docs-reference-2`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin To troubleshoot a VPC Service Controls violation, make sure that you have the VPC Service Controls Troubleshooter Viewer IAM role ( roles/accesscontextmanager.vpcScTroubleshooterViewer ) at the organization level.
- Use the VPC Service Controls page To access the violation analyzer from the VPC Service Controls page, do the following: In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .
- Home Documentation Networking VPC Service Controls Guides Send feedback Diagnose an access denial and view the classic report Stay organized with collections Save and categorize content based on your preferences.
- Use the Logs Explorer By using the Logs Explorer , you can move directly from a log entry for a VPC Service Controls denial to the violation analyzer.

### "Set up and view the violation dashboard \_|\_ VPC Service Controls \_|\_\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard](https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard)
- Source ID: `site-docs-reference-2`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to view the violation dashboard, ask your administrator to grant you the following IAM roles on the project in which you configure a log bucket during the violation dashboard setup: Logs View Accessor ( roles/logging.viewAccessor ) VPC Service Controls Troubleshooter Viewer ( roles/accesscontextmanager.vpcScTroubleshooterViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- A service perimeter denied access to the log bucket If VPC Service Controls doesn't route your audit logs to the configured log bucket, you might have to create an ingress rule that allows the Log Router sink's service account to access the Cloud Logging API in your service perimeter: In the Google Cloud console, go to the Log Router page.
- Diagnose an access denial and view the classic report Troubleshoot common VPC Service Controls issues with Google Cloud services Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Limitations VPC Service Controls doesn't backfill the audit logs from other project-level buckets: If you create a new log bucket while setting up the violation dashboard, VPC Service Controls doesn't backfill the existing logs from other projects within your organization into the newly created log bucket.

### "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/supported-products](https://docs.cloud.google.com/vpc-service-controls/docs/supported-products)
- Source ID: `site-docs-reference-2`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Limitations Because VPC Service Controls enforces boundaries at the project level, Cloud Quotas requests that originate from clients within the perimeter can only access organization resources if the organization sets up an egress rule .
- Limitations If you remove the internet default route from the service producer project using the command gcloud services vpc-peerings enable-vpc-service-controls , then you may not be able to access or deploy the management console.
- Even if you protect the discoveryengine.googleapis.com service inside a VPC Service Controls perimeter, a widget with public access can still be reached from outside that perimeter.
- Service name compute.googleapis.com Details VPC Service Controls support for Compute Engine offers the following security benefits: Restricts access to sensitive API operations Restricts persistent disk snapshots and custom images to a perimeter Restricts access to instance metadata VPC Service Controls support for Compute Engine also enables you to utilize Virtual Private Cloud networks and Google Kubernetes Engine private clusters inside service perimeters.

### VPC accessible services \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services](https://docs.cloud.google.com/vpc-service-controls/docs/vpc-accessible-services)
- Source ID: `site-docs-reference-2`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You have already configured your VPC network to use the restricted VIP, which limits access from your VPC network only to APIs that are supported by VPC Service Controls.
- Unlike service perimeters, the VPC accessible services feature does not apply to the communication from one Google API to another, or the networks of tenancy units , which are used to implement certain Google Cloud services.
- Unfortunately, that doesn't prevent your VPC network from accessing supported services, such as the Bigtable resources in my-authorized-gcs-project .
- The VPC accessible services feature limits the set of services that are accessible from network endpoints inside your service perimeter.

