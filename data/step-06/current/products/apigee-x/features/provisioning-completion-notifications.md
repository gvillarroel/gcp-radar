---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.183Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Provisioning completion notifications"
feature_slug: "provisioning-completion-notifications"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/locations"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
keywords:
  - "notifications"
  - "completion"
  - "sends"
  - "when"
  - "provisioning"
  - "console"
---

# Provisioning completion notifications

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee sends Google Cloud console notifications when Pay-as-you-go provisioning completes.

## Extended Definition

Apigee sends Google Cloud console notifications when Pay-as-you-go provisioning completes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)

## Supporting Pages

### Apigee locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following resources outline the steps required to select a control plane hosting jurisdiction, based on your organization type: Organization type Provisioning method Documentation Subscription organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering science Pay-as-you-go organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering science Available Apigee API control plane hosting jurisdictions The Apigee control plane directly binds to the API host name. apigee.googleapis.com has a global control plane; if you want to use a regionalized control plane, the API host name is CONTROL PLANE LOCATION -apigee.googleapis.com .
- The following resources outline the steps required to select a runtime hosting region, based on your organization type: Organization type Provisioning method Documentation Evaluation organization Apigee UI in Cloud console Command line interface Provisioning an eval org Provision an eval org with VPC peering Provision an eval org without VPC peering Subscription organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Pay-as-you-go organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Available Apigee runtime regions The following table lists available regions for the Apigee runtime.
- The following resources outline the steps required to select an Apigee API Analytics region, based on your organization type: Organization type Provisioning method Documentation Evaluation Apigee UI in Cloud console Command line interface Provisioning an eval org Provision an eval org with VPC peering Provision an eval org without VPC peering Subscription Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Pay-as-you-go Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering Available Apigee API Analytics regions The following table lists available regions for Apigee API Analytics.
- You can select the control plane hosting jurisdiction when you provision using the Apigee UI in Google Cloud console, or using the API.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- When you click Deploy , Apigee begins deploying the proxy and provisioning downstream components.
- OpenAPI Specification The value of the servers.url field of the OpenAPI specification must be an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed. https://cymbal.products.com If the servers.url host name does not match the hostname of the environment group corresponding to the Apigee environment where the MCP Discovery Proxy is deployed, you will get an error when deploying the proxy.
- When the operation completes, you will be taken to the Proxy summary detail page, where you can see your MCP Discovery Proxy on the Proxy summary detail page.
- You can check the status of runtime project attachment on the Project associations tab of the Settings page in the Google Cloud console.

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- If you have a Google Cloud organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ), the constraint will apply to the following Apigee resources that are created when Apigee is provisioned: Control plane Consumer data Runtime Endpoints attachment Analytics If you are provisioning a new Apigee organization within a Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is compatible with the control plane location specified for your Apigee organization: If you provision an Apigee organization without data residency, the resource location constraint in your Google Cloud organization policy must be set to global .
- If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization, the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO): The regionalized Apigee organization's control plane, runtime plane, and analytics .
- When provisioning an org: Without data residency: Specify the region with ANALYTICS REGION .
- When specifying the region (for example, us ), you must also specify a single region (for example, us-west1 ) for other services that can run only in a single region, such as Analytics reports.

