---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.761Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Service account support for Apigee Emulator testing"
feature_slug: "service-account-support-for-apigee-emulator-testing"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test"
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-create-event-triggers"
keywords:
  - "account"
  - "emulator"
  - "testing"
  - "local"
  - "supports"
  - "based"
---

# Service account support for Apigee Emulator testing

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee local emulator now supports service-account-based authentication for testing API proxies that depend on service accounts.

## Extended Definition

Apigee local emulator now supports service-account-based authentication for testing API proxies that depend on service accounts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test)
- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-create-event-triggers](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-create-event-triggers)

## Supporting Pages

### PCI Configuration Guide for Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PCI Requirement Section Requirement 3: Protect stored account data Data masking Requirement 3: Protect stored account data Data storage Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks TLS configuration Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks Data encryption Requirement 7: Restrict access to system components and cardholder data by business need to know Use/Authorizations Requirement 8: Identify users and authenticate access to system components Complex password requirements or SAML Requirement 10: Log and monitor all access to system components and cardholder data Audit trail Requirement 11: Test security of systems and networks regularly Endpoint scanning To obtain a PCI Data Security Standard Attestation of Compliance (AOC), please visit Google Compliance Report Manager or contact your Apigee sales team.
- Testing of shared resources, such as the management portal UI, is not approved for individual customers (a third party report covering testing of the shared services is available to customers under a non-disclosure agreement and upon request).
- Home Documentation Application development Apigee Resources Send feedback PCI Configuration Guide for Apigee Stay organized with collections Save and categorize content based on your preferences.
- Customer testing should cover the actual API proxy services hosted on Apigee where API traffic is sent into Apigee prior to being processed and then delivered to the customer datacenter.

### Step 4: Test your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The developerapps.json file is opened in the editor with the new app configured: [ { "attributes": [ { "name": "sample attribute 0", "value": "sample attribute value 0" } ], "developerEmail": "ahamilton@example.com", "name": "myapp", "displayName": "myapp", "callbackUrl": "", "apiProducts": [ "myproduct" ], "expiryType": "never" } ] Export the test resources to the Apigee Emulator.
- To test the deployed helloworld API, click the Terminal tab in Apigee in Cloud Code and enter the following curl call: curl 0:8998/helloworld The following error message is displayed: Because you enabled API key-based authentication when creating the API proxy, you need to pass an API key using the apikey query parameter when calling the API.
- If you get an error when using 0 , substitute localhost for the 0 : curl localhost:8998/helloworld Build and Export test resources Create a test bundle: Position your cursor over the test data folder and click .
- Home Documentation Application development Apigee Guides Send feedback Step 4: Test your API Stay organized with collections Save and categorize content based on your preferences.

### Create an Eventarc trigger \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-create-event-triggers](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-create-event-triggers)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- If prompted, grant the following: iam.serviceAccountTokenCreator role to Pub/Sub service account pubsub.publisher role to Cloud Storage service account Use the Default compute service account as the service account that invokes your service.
- Home Documentation Application development Apigee Guides Send feedback Create an Eventarc trigger Stay organized with collections Save and categorize content based on your preferences.
- By using this feature, you can trigger executions based on the events occurring in API hub.
- API hub supports Eventarc triggers .

