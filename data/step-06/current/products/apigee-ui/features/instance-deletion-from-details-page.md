---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.168Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Instance deletion from details page"
feature_slug: "instance-deletion-from-details-page"
latest_feature_date: "2022-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub"
keywords:
  - "instance"
  - "deletion"
  - "details"
  - "page"
  - "management"
  - "ui"
  - "supports"
  - "deleting"
---

# Instance deletion from details page

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The instance management UI supports deleting an instance directly from the Instance details page using a DELETE button.

## Extended Definition

The instance management UI supports deleting an instance directly from the Instance details page using a DELETE button.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table provides details about each element to help you understand how the curation logic works: Component Configuration Description API trigger API Trigger ID: api trigger/test-custom-curation API 1 Receives data from the API hub plugin instance to invoke the integration for custom curation.
- To edit the curation settings of the existing Apigee and hybrid plugin instance, do the following: In the Google Cloud console, go to the API hub page.
- Click add box Create New and provide the following details in the Create Connection page: Location: select a desired location and click Next .
- Click add box Create integration and provide the following details in the Create Integration page: Integration name: enter test-curation .

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go to the Instances page in the Google Cloud console to select an instance and view its details: Go to Instances You can use Extension Processor with a Subscription or Pay-as-you-go Apigee organization.
- View instance versions in the Instance details page of the Apigee UI in Google Cloud console.
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a developer App and App credentials To create a developer App and App credentials for the newly created API product: Go to the Apigee API management page in the Google Cloud console: Apigee API management Create a developer: Select Distribution > Developers .

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Call REST Endpoint taskId: 6 Retrieves a list of Azure APIM service instances from the Azure Management API.
- Make sure that you have the following role or roles on the project: API hub Admin ( roles/apihub.admin ) Application Integration Admin ( roles/integrations.admin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Check for the roles In the Google Cloud console, go to the IAM page.
- Replace the following: <GCP PROJECT ID> : the ID of your Google Cloud project. <GCP REGION> : the region where API hub is provisioned. <AZURE SUBSCRIPTION ID> : your Azure subscription ID. <AZURE TENANT ID> : your Azure tenant ID. <AZURE RESOURCE GROUP> : the name of the Azure resource group that contains your Azure APIM instance. <AZURE APP NAME> : apihub-integration .
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

