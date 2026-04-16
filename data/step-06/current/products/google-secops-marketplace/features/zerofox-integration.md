---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.682Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Zerofox integration"
feature_slug: "zerofox-integration"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai"
keywords:
  - "zerofox"
  - "integration"
  - "adds"
  - "new"
  - "with"
---

# Zerofox integration

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds a new integration with Zerofox.

## Extended Definition

Adds a new integration with Zerofox.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- Response integration metadata Name The Name should correspond to the product name with which the integration is going to be integrated and shouldn't contain any special characters.
- All submitted integrations undergo a vetting process by the official Google SecOps team, with a focus on the highlighted requirements within this document.
- Description The Description should provide a high-level overview of the product with which the integration is created and shouldn't exceed 500 characters.

### "Integrate Amazon EC2 with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/aws-elastic-compute-cloud-ec2)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin, ensure the integration is installed from the Content Hub within your Google SecOps instance.
- Authorize Security Group Egress Adds the specified egress rule to a security group for use with a VPC.
- When you specify an existing tag key, the value is overwritten with the new value.
- Action Results Script Result Script result name Value options Example is success True/False is success:False Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: if successful: "Successfully connected to the Amazon EC2 with the provided connection parameters!" The action should fail and stop a playbook execution: if not successful: "Failed to connect to the Amazon EC2 server!

### "Integrate Active Directory with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/active-directory)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- To configure the integration with a CA certificate, complete the following steps: To obtain the CA certificate, enter the cat mycert.crt command: bash-3.2# cat mycert.crt -----BEGIN CERTIFICATE----- CERTIFICATE STRING -----END CERTIFICATE----- bash-3.2# To encode the root CA certificate file to the base64 format with the -----BEGIN CERTIFICATE----- and -----END CERTIFICATE----- strings, enter the cat mycert.crt base64 command: bash-3.2# cat mycert.crt base64 BASE64 ENCODED CERTIFICATE STRING bash-3.2# Copy the BASE64 ENCODED CERTIFICATE STRING value and enter it in the CA Certificate File - parsed into Base64 String parameter value field in Google SecOps Active Directory integration configuration .
- Action outputs The Enable Computer action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Not available Script result Available Script result The following table lists the value for the script result output when using the Enable Computer action: Script result name Value is success True or False Enrich Entities Use the Enrich Entities action to enrich the Hostname or Username entities with Active Directory properties.
- Use cases The Active Directory integration can help you solve the following use cases: Activate and deactivate users: use Google SecOps capabilities to deactivate a potentially compromised user account and prevent further unauthorized access.
- If you have the DNS resolution configured with your DNS setup and your Active Directory domain is resolved by the fully qualified DNS name, you don't need to configure the /etc/hosts file.

### "Integrate Akamai with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/akamai)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action outputs The Get Network Lists action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Get Network Lists action: [ { "networkListType" : "networkListResponse" , "accessControlGroup" : "KSD\nwith ION 3-13H1234" , "name" : "General List" , "elementCount" : 3011 , "readOnly" : false , "shared" : false , "syncPoint" : 22 , "type" : "IP" , "uniqueId" : "25614 GENERALLIST" , "links" : { "activateInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/activate" , "method" : "POST" }, "activateInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/activate" , "method" : "POST" }, "appendItems" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "POST" }, "retrieve" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "update" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" } }, "Activation STAGING" : { "activationId" : 12345 , "activationComments" : "Allow IPs of new employees who joined this week" , "activationStatus" : "PENDING ACTIVATION" , "syncPoint" : 5 , "uniqueId" : "25614 GENERALLIST" , "fast" : false , "dispatchCount" : 1 , "links" : { "appendItems" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/append" , "method" : "POST" }, "retrieve" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "syncPointHistory" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/sync-points/5/history" }, "update" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" }, "activationDetails" : { "href" : "/network-list/v2/network-lists/activations/12345/" } } }, "Activation PRODUCTION" : { "activationId" : 12345 , "activationComments" : "Allow IPs of new employees who joined this week" , "activationStatus" : "PENDING ACTIVATION" , "syncPoint" : 5 , "uniqueId" : "25614 GENERALLIST" , "fast" : false , "dispatchCount" : 1 , "links" : { "appendItems" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/append" , "method" : "POST" }, "retrieve" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "syncPointHistory" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/sync-points/5/history" }, "update" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" }, "activationDetails" : { "href" : "/network-list/v2/network-lists/activations/12345/" } } } } ] Output messages The Get Network Lists action provides the following output messages: Output message Message description Successfully returned network lists from Akamai.
- Action outputs The Remove Items From Network List action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Remove Items From Network Lists action: { "networkListType" : "networkListResponse" , "accessControlGroup" : "KSD\nwith ION 3-13H1234" , "name" : "General List" , "elementCount" : 3011 , "readOnly" : false , "shared" : false , "syncPoint" : 22 , "type" : "IP" , "uniqueId" : "25614 GENERALLIST" , "links" : { "activateInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/activate" , "method" : "POST" }, "activateInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/activate" , "method" : "POST" }, "appendItems" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "POST" }, "retrieve" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "update" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" } } } Output messages The Remove Items From Network List action provides the following output messages: Output message Message description Successfully updated network list in Akamai.
- Action outputs The Add Items To Network List action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Add Items To Network Lists action: { "networkListType" : "networkListResponse" , "accessControlGroup" : "KSD\nwith ION 3-13H1234" , "name" : "General List" , "elementCount" : 3011 , "readOnly" : false , "shared" : false , "syncPoint" : 22 , "type" : "IP" , "uniqueId" : "25614 GENERALLIST" , "links" : { "activateInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/activate" , "method" : "POST" }, "activateInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/activate" , "method" : "POST" }, "appendItems" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "POST" }, "retrieve" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "update" : { "href" : "/network-list/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" } } } Output messages The Add Items To Network List action provides the following output messages: Output message Message description Successfully updated network list in Akamai.
- Action outputs The Activate Network List action provides the following outputs: Action output type Availability Case wall attachment Not available Case wall link Not available Case wall table Not available Enrichment table Not available JSON result Available Script result Available JSON result The following example describes the JSON result output received when using the Activate Network Lists action: { "activationId" : 12345 , "activationComments" : "Allow IPs of new employees who joined this week" , "activationStatus" : "PENDING ACTIVATION" , "syncPoint" : 5 , "uniqueId" : "25614 GENERALLIST" , "fast" : false , "dispatchCount" : 1 , "links" : { "appendItems" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/append" , "method" : "POST" }, "retrieve" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" }, "statusInProduction" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/PRODUCTION/status" }, "statusInStaging" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/environments/STAGING/status" }, "syncPointHistory" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST/sync-points/5/history" }, "update" : { "href" : "/networklist-api/rest/v2/network-lists/25614 GENERALLIST" , "method" : "PUT" }, "activationDetails" : { "href" : "/network-list/v2/network-lists/activations/12345/" } } } Output messages The Activate Network List action provides the following output messages: Output message Message description Successfully activated the network list in Akamai.

