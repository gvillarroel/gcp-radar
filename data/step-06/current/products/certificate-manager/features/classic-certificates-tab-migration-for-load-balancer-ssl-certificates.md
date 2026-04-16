---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.941Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Classic Certificates tab migration for load-balancer SSL certificates"
feature_slug: "classic-certificates-tab-migration-for-load-balancer-ssl-certificates"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/certificates"
keywords:
  - "legacy SSL certificates tab"
  - "SSL certificates in Classic Certificates"
  - "classic certificates migration"
  - "load-balancing SSL certificates"
  - "Classic Certificates tab"
  - "Certificate Manager classic certificates"
  - "Classic Certificates"
---

# Classic Certificates tab migration for load-balancer SSL certificates

Product: Certificate Manager
Coverage: MEDIUM

## Step 02 Summary

Load Balancing SSL certificates are now available in the Certificate Manager page under the Classic Certificates tab.

## Extended Definition

In Certificate Manager, Google Cloud now provides a **Classic Certificates** tab that lists certificates provisioned through Cloud Load Balancing, allowing users to view configured classic certificates for the selected project. The documented behavior is that these classic certificates are displayed in this tab but are not managed by Certificate Manager itself.

## Evidence Summary

The cited Certificate Manager certificates page documents the Classic Certificates tab location and scope, and explicitly states that classic certificates shown there are not managed by Certificate Manager.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)

## Supporting Pages

### "Deploy a global Google-managed certificate with load balancer authorization\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

### Manage certificates \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: WEAK
- Re-rank rationale: The page explains creating Google-managed certificates and references a Certificates tab, but it does not describe a migration of load-balancer SSL certificates or a Classic Certificates tab specifically.

Evidence snippets:
- To see certificates provisioned through Cloud Load Balancing: In the Google Cloud console, go to the Classic Certificates tab on the Certificate Manager page.
- Go to Certificate Manager On the Classic Certificates tab, you can view a list of all the configured classic certificates in the selected project.
- Classic certificates aren't managed by Certificate Manager.

### "Module pagers (1.12.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers)
- Source ID: `site-python-reference`
- Final score: 54
- Re-rank relevance: N/A

