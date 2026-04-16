---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.421Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution advanced networking"
feature_slug: "bare-metal-solution-advanced-networking"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-deploy"
keywords:
  - "attaching"
  - "advanced"
  - "networking"
  - "supports"
---

# Bare Metal Solution advanced networking

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Bare Metal Solution now supports attaching a server to multiple networks and viewing advanced networking information in the console.

## Extended Definition

Bare Metal Solution now supports attaching a server to multiple networks and viewing advanced networking information in the console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Manage networks You can manage the networks in your Bare Metal Solution environment in the following ways: View networks Organize networks by using labels Rename a network Create a network Attach a network to a server Detach a network from a server Delete a network View advanced networking information for a Bare Metal Solution environment Implement IP address management in a Bare Metal Solution environment View networks Monitoring your network resources in the Bare Metal Solution environment lets you know how your servers connect to other resources.
- In the Networks section, you can view the following information: Network name Network type IP address Default gateway Interface name gcloud Run the gcloud bms instances describe command to view advanced networking settings for your server. gcloud bms instances describe SERVER NAME --project= PROJECT ID --region= REGION API To view advanced networking settings for your server, enter your project ID, region, and server name, then issue the following curl command.
- View advanced networking information for a Bare Metal Solution environment If you selected the advanced networking option for complex deployments in your Bare Metal Solution environment, you can view this information by using the following server commands.
- See Choose standard networking or explore advanced networking options and Use the Google Cloud console intake form to enter your selections .

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- When your order an advanced networking configuration, the following options become available for more complex network deployments: Multiple VLANs Multiple VLAN attachments Multiple VPC connections Maximum transmission unit Network templates Multiple VLANs Instead of a single client network and single private network for each bonded interface, you can add multiple client networks and private networks on server bond interfaces.
- Choose standard networking or explore advanced networking options The standard networking configuration for Bare Metal Solution offers a basic network topology that is appropriate for most small-scale deployments.
- Note: When you implement an advanced networking topology, network status might not appear correctly in the Google Cloud console or in the output of gcloud bms networks and networking API commands.
- If you already have a Bare Metal Solution environment and would like to migrate to an advanced networking configuration, contact Customer Care .

### Deploy your Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Select networks (checkbox) Click the checkbox to view and select networks from other projects in your organization Checkbox marked If you did not enable the advanced networking option in Step 4 , configure the following fields: Client network Select a client subnet from the menu.
- If you're unsure about which pod to select, contact Google Cloud Sales . (Optional) To configure multiple networks on your server, click the Enable advanced networking toggle.
- 192.168.2.5 If you enabled the advanced networking option in Step 4 , configure the following fields: Network template Select a network template from the menu.
- The Bare Metal Solution environment includes the following components: Networking —There are three important subnets that you can specify for your Bare Metal Solution environment: Client subnet —This mandatory subnet provides access to Google Cloud and your VPC.

