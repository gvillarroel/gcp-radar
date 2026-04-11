---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.989Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution interactive serial console access"
feature_slug: "bare-metal-solution-interactive-serial-console-access"
latest_feature_date: "2023-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/configure-serial-console"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "interactive"
  - "serial"
  - "access"
  - "console"
  - "servers"
  - "solution"
  - "metal"
  - "bare"
---

# Bare Metal Solution interactive serial console access

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Bare Metal Solution servers can now be accessed through an interactive serial console.

## Extended Definition

Bare Metal Solution servers can now be accessed through an interactive serial console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- Source ID: `site-docs-root-2`
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure the interactive serial console Bare Metal Solution provides an interactive serial console to access your Bare Metal Solution servers.
- API To enable access to the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :enableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- API To disable the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :disableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- If your Bare Metal Solution server was provisioned before June 2022, the kernel boot parameters might lack the required configuration for the interactive serial console.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- We recommend that, before updating the OS configuration, you configure and test the interactive serial console access to your Bare Metal Solution server.
- We recommend that, before updating the OS configuration, you configure and test the interactive serial console access to your Bare Metal Solution server.
- We recommend that, before updating the OS configuration, you configure and test the interactive serial console access to your Bare Metal Solution server.
- ProjectsClient () bms client = BareMetalSolutionClient () output = [] errors = [] try : for project in get projects ( parent , folders client , projects client ): volumes list request = ListVolumesRequest ( parent = "projects/" + project + "/locations/global" , filter = filter , ) try : for volume in bms client . list volumes ( request = volumes list request ): output . append ( f " - { volume . name } " ) This could happen because BMS API is not enabled in a certain project. except PermissionDenied as e : errors . append ( f "Unable to list bms resources for project { project } : { e } " ) except PermissionDenied as e : errors . append ( f "Unable to access folder or project: { e } " ) return " \n " . join ( output ), " \n " . join ( errors ) def main ( : Sequence [ str ]): if ORGANIZATION ID . value is not None and FOLDER ID . value is not None : raise Exception ( "Only one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is None and FOLDER ID . value is None : raise Exception ( "Either one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is not None : parent = f "organizations/ { ORGANIZATION ID . value } " else : parent = f "folders/ { FOLDER ID . value } " volumes , errors = get volumes list ( parent , filter = FILTER . value ) print ( "=================== Flat list of volumes in the folder or organization" " ===================" ) print ( volumes ) print ( "=================== List of folders or projects with errors" " ===================" ) print ( errors ) if name == " main " : app . run ( main ) Manage servers You can manage the servers in your Bare Metal Solution environment in the following ways: View servers Organize servers by using labels Rename a server Retrieve the initial password for a server View OS details Change the OS for a server Enable hyperthreading on a server View servers To view the details of your Bare Metal Solution servers, follow these steps: Console Go to the Servers page.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: N/A

Evidence snippets:
- Interactive serial console Bare Metal Solution provides an interactive serial console to access your servers.
- General information Firmware version Machine series Machine type Lifecycle stage EOL and firmware deprecation date BIOS PUR043.45.00.002 (TS54) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA To be determined BIOS PUR043.37.14.021 (TS24.02) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 BIOS PUR043.37.16.023 (TS24.05) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 3.50.58 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA March 2024 3.80.24 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA To be determined Features Firmware version Features BIOS PUR043.45.00.002 (TS54) Support for interactive serial console.
- JumpVM A Virtual Machine for providing secure remote access to Bare Metal Solution servers from the public internet If you have a Cloud Interconnect (Partner or Dedicated interconnect) or a Cloud VPN connecting your on-premises network directly to Google Cloud project, you can connect from on-premises network to BMS directly without jumpVMs.
- With NFS, you mount a shared storage directory on one or more Bare Metal Solution servers and access the directory like any other file system.

