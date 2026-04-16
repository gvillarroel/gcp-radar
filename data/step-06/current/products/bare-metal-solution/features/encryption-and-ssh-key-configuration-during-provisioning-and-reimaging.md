---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.414Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Encryption and SSH key configuration during provisioning and reimaging"
feature_slug: "encryption-and-ssh-key-configuration-during-provisioning-and-reimaging"
latest_feature_date: "2023-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-deploy"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys"
keywords:
  - "encryption"
  - "reimaging"
  - "configuration"
  - "provisioning"
  - "during"
---

# Encryption and SSH key configuration during provisioning and reimaging

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

You can now configure encryption keys and SSH keys when provisioning or reimaging a Bare Metal Solution server.

## Extended Definition

You can now configure encryption keys and SSH keys when provisioning or reimaging a Bare Metal Solution server.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- [https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys](https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- It is assigned automatically during the provisioning from your services IP address range.
- Example: nmcli connection modify bond0.114 +ipv4.routes "192.168.122.0/24 172.16.80.254" nmcli connection up bond0.114 (Optional) If you created a Client network and set it as the default gateway in Step 7 (Default gateway) of this procedure, follow these steps to update your OS configuration: Complete the previous step, that is, Step 9.c .
- If you have an automated environment or need to work on other tasks during the restart operation, add the --async option to run this command in asynchronous mode. gcloud bms instances reset SERVER NAME --project= PROJECT ID --region= REGION The output displays the status of your server restart request.
- If you have an automated environment or need to work on other tasks during the start operation, add the --async option to run this command in asynchronous mode. gcloud bms instances start SERVER NAME --project= PROJECT ID --region= REGION The output displays the status of your server restart request.

### Deploy your Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-deploy](https://docs.cloud.google.com/bare-metal/docs/bms-deploy)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- PROVISIONING —The resources in the configuration request are being provisioned.
- Field Description Example Name Create a name for your server. server-1 Type Type of server found in Server configurations that specifies CPU cores, sockets, and RAM o2-standard-32-metal Enable hyperthreading (checkbox) Hyperthreading uses virtualization to provide additional threading capacity above the normal processing capabilities of a physical server.
- Leave the checkbox empty to disable hyperthreading OS image Operating system for the server Red Hat Enterprise Linux 7.7 Encryption key for the server's password (Optional) Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- SSH keys to be used in provisioning (Optional) Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Set up encryption keys for a server \_|\_ Bare Metal Solution \_|\_ Google\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys](https://docs.cloud.google.com/bare-metal/docs/bms-encryption-keys)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set up encryption keys while provisioning a server You can set up an encryption key for a new Bare Metal Solution server while provisioning it through the Google Cloud console intake form .
- Set up encryption keys while reimaging a server To set up encryption keys while reimaging a server, see Change the OS for a server .
- To set up an encryption key while provisioning a server, see Use the Google Cloud console intake form to enter your selections .
- You can set them while provisioning a new server or while reimaging an existing one.

