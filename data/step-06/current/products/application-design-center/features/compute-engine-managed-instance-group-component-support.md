---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:09:51.618Z"
product_name: "Application Design Center"
product_slug: "application-design-center"
feature_name: "Compute Engine managed instance group component support"
feature_slug: "compute-engine-managed-instance-group-component-support"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance"
  - "https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig"
  - "https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql"
keywords:
  - "managed"
  - "group"
  - "instance"
  - "compute"
  - "engine"
  - "application"
  - "component"
  - "design"
---

# Compute Engine managed instance group component support

Product: Application Design Center
Coverage: LOW

## Step 02 Summary

Application Design Center supports the Compute Engine managed instance group component on the design canvas.

## Extended Definition

Application Design Center supports the Compute Engine managed instance group component on the design canvas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance](https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance)
- [https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig](https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig)
- [https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql](https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql)

## Supporting Pages

### "Configure a Compute Engine instance template \_|\_ Application Design Center\

- URL: [https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance](https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-instance)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Basic scenarios for creating managed instance groups (MIGs) Required configuration parameters If your template includes a Compute Engine instance template component, you must configure the following parameters before you deploy.
- Home Documentation Application development Application Design Center Guides Send feedback Configure a Compute Engine instance template Stay organized with collections Save and categorize content based on your preferences.
- Component connections The following table includes the components that you can connect to a Compute Engine instance template, and the resulting updates to your application and its generated Terraform code.
- Connected component Application updates Background information Service Account The Compute Engine instance template uses the connected service account instead of creating a new service account.

### "Configure a Compute Engine MIG \_|\_ Application Design Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig](https://docs.cloud.google.com/application-design-center/docs/configure-compute-engine-mig)
- Source ID: `site-iam-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see the following: Compute Engine overview Managed instance groups (MIGs) This document describes the connections and parameters you can configure when using App Design Center to create a Compute Engine MIG.
- Basic scenarios for creating managed instance groups (MIGs) Required configuration parameters If your template includes a Compute Engine MIG component, you must configure the following parameters before you deploy.
- Set up a regional external Application Load Balancer with VM instance group backends Compute Engine instance template The Compute Engine instance template is used to create instances in the managed instance group.
- Set up a classic Application Load Balancer with a managed instance group backend Regional Cloud Load Balancing backend The load balancer can distribute incoming traffic to the Compute Engine MIG.

### "Configure a Cloud SQL (MySQL) instance \_|\_ Application Design Center \_\

- URL: [https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql](https://docs.cloud.google.com/application-design-center/docs/configure-cloud-sql-mysql)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Connected component Application updates Background information Compute Engine instance template The Compute Engine instances can connect and read and write data to the Cloud SQL (MySQL) instance.
- SqlDatabaseVersion Master Instance Name masterInstanceName Create read replicas Instance Type instanceType SqlInstanceType Secondary Zone The preferred zone for the replica instance. secondaryZone Follow GAE Application The App Engine application to follow.
- Home Documentation Application development Application Design Center Guides Send feedback Configure a Cloud SQL (MySQL) instance Stay organized with collections Save and categorize content based on your preferences.
- Component connections The following table includes the components that you can connect to a Cloud SQL (MySQL) instance, and the resulting updates to your application and its generated Terraform code.

