---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:06.002Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Deployment Manager v2 API"
feature_slug: "deployment-manager-v2-api"
latest_feature_date: "2015-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/apis"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules"
  - "https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy"
keywords:
  - "deployment"
  - "manager"
  - "v2"
  - "introduced"
  - "generally"
  - "available"
  - "version"
---

# Deployment Manager v2 API

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager introduced the v2 API as its generally available API version.

## Extended Definition

Deployment Manager introduced the v2 API as its generally available API version.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)

## Supporting Pages

### Deployment Manager APIs and Reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/apis](https://docs.cloud.google.com/deployment-manager/docs/apis)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployment Manager APIs and Reference Stay organized with collections Save and categorize content based on your preferences.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
- Deployment Manager Supported Resource Types Supported Resource Types A list of supported resource types for Deployment Manager.
- Deployment Manager gcloud Reference gcloud Reference The gcloud command-line reference for Deployment Manager.

### "Deployments: setIamPolicy \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy)
- Source ID: `site-api-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ resource /setIamPolicy Parameters Parameter name Value Description Path parameters project string Project ID for this request. resource string Name or id of the resource for this request.
- Home Documentation Infrastructure as code Cloud Deployment Manager Reference Send feedback Deployments: setIamPolicy Stay organized with collections Save and categorize content based on your preferences.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
- For more information on the deprecation and shutdown, see Deployment Manager deprecation .

### "Using Template Modules \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules](https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-template-modules)
- Source ID: `site-docs-root-2`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. imports : - path : helpers/common.jinja - path : vm-instance-example.jinja resources : - name : my-vm type : vm-instance-example.jinja The Deployment Manager service will expand the configuration and the final configuration looks like this: resources: - name: myfrontend-prod type: compute.v1.instance properties: zone: us-central1-f machineType: https://www.googleapis.com/compute/v1/projects/myproject/zones/us-central1-f/machineTypes/f1-micro disks: - deviceName: boot type: PERSISTENT boot: true autoDelete: true initializeParams: sourceImage: https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/family/debian-9 networkInterfaces: - network: https://www.googleapis.com/compute/v1/projects/myproject/global/networks/default accessConfigs: - name: External NAT type: ONE TO ONE NAT Python In Python, the helper template (in this example, named helpers/common.py) would look like this: Copyright 2016 Google Inc.
- Home Documentation Infrastructure as code Cloud Deployment Manager Guides Send feedback Using Template Modules Stay organized with collections Save and categorize content based on your preferences.
- If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
- For more information on the deprecation and shutdown, see Deployment Manager deprecation .

