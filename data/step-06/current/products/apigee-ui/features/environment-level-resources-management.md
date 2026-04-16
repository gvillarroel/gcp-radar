---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.157Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Environment-level resources management"
feature_slug: "environment-level-resources-management"
latest_feature_date: "2026-01-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "environment"
  - "level"
  - "resources"
  - "management"
  - "apigee"
  - "ui"
  - "supports"
  - "managing"
---

# Environment-level resources management

Product: Apigee UI
Coverage: LOW

## Step 02 Summary

The Apigee UI supports managing environment-level resources directly from the interface.

## Extended Definition

The Apigee UI supports managing environment-level resources directly from the interface.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-reference-required-14`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Using the Apigee UI, you can: Build an API proxy Deploy and undeploy API proxies to your cluster Create, edit, and delete environments and environment groups Assign environment-level access control to users Work with target servers , KVMs , and shared flows Use the Apigee UI To open the Apigee UI, go to the Apigee API management page.
- The following table maps each Apigee UI feature page to its current location in the Apigee UI: Feature Apigee UI Proxies Proxy development > API proxies Go to API proxies Sharedflows Proxy development > Sharedflows Go to Sharedflows Offline debug Proxy development > Offline debug Go to Offline debug API products Distribution > API products Go to API products Portals Distribution > Portals Go to Portals Monetization Distribution > Monetization Go to Monetization Developers Distribution > Developers Go to Developers Apps Distribution > Apps Go to Apps API monitoring Proxy development > API monitoring Go to API monitoring API metrics Analytics > API metrics Go to API metrics Developer Engagement Analytics > Developer analysis Go to Developer analysis Traffic Composition Analytics > Developer analysis Go to Developer analysis Devices Analytics > End user analysis Go to End user analysis Geomap Analytics > End user analysis Go to End user analysis Custom reports Analytics > Custom reports Go to Custom reports Instances Management > Instances Go to Instances Data collectors Management > Data collectors Go to Data collectors Environments Management > Environments Go to Environments Endpoint attachments Management > Endpoint attachments Go to Endpoint attachments Roles Identity and Access Management (IAM) > Roles Go to Roles Users IAM Go to IAM Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Whether you are a Pay-as-you-go or Subscription customer, this view provides you with a snapshot of key resource usage, as well as shortcuts to other monitoring and identity management resources for your organization, including: Cloud Monitoring Cloud Billing Identity and Access Management Explore Apigee API management features From the main navigation menu, you can explore the range of Apigee API management features available for your organization, as described in the table below: Main navigation menu Purpose Proxy development Develop and deploy API proxies .
- Apigee API management From the Overview page, you can: Get started as a new Apigee user Test your Apigee runtime View key resource usage metrics Explore Apigee API management features Get started as a new Apigee user If you just are new to Apigee, you can begin your API management journey with quickstart learning options launched from the Overview page: Begin by deploying your first proxy : Watch a video tutorial that walks you through the steps required to create and deploy an API proxy.

### Manage users in the Apigee UI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/manage-users)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: Before you can add a new user (and specify environment-specific access for that new user) in the Apigee UI, you must grant that user access to the Google Cloud project, as described in Managing access in Google Cloud .
- Note: Roles assigned to specific environments, as explained in this topic, only affect resources that are under the resource hierarchy that includes Apigee Environment resources.
- You can identify which resources are in the Environment resource hierarchy by examining the Apigee API documentation .
- To remove a user from an environment: In the Google Cloud console, go to the Apigee > Management > Environments page.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Create an Apigee environment Note: Before creating a new environment and environment group, or using existing resources for the step, review the limitations on environments, environment groups, and API proxies in the Extension Processor configuration.
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export ORG NAME = $PROJECT ID export REGION = REGION export INSTANCE = INSTANCE export VPC NETWORK NAME = VPC NETWORK NAME export SUBNET = SUBNET Where: PROJECT ID is the ID of the project with your Apigee instance.

