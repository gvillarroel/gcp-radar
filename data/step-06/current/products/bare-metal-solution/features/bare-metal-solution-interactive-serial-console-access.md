---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.419Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution interactive serial console access"
feature_slug: "bare-metal-solution-interactive-serial-console-access"
latest_feature_date: "2023-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/configure-serial-console"
  - "https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
keywords:
  - "interactive"
  - "serial"
  - "access"
  - "console"
  - "servers"
---

# Bare Metal Solution interactive serial console access

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Bare Metal Solution servers can now be accessed through an interactive serial console.

## Extended Definition

Bare Metal Solution servers can now be accessed through an interactive serial console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- [https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)

## Supporting Pages

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure the interactive serial console Bare Metal Solution provides an interactive serial console to access your Bare Metal Solution servers.
- This document describes how to enable and disable interactive serial console access on your servers.
- API To enable access to the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :enableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- API To disable the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :disableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/troubleshooting/configure-serial-console)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure the interactive serial console Bare Metal Solution provides an interactive serial console to access your Bare Metal Solution servers.
- This document describes how to enable and disable interactive serial console access on your servers.
- API To enable access to the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :enableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.
- API To disable the interactive serial console, enter your project ID, region, and server name, and issue the following curl command. curl -v \ -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :disableInteractiveSerialConsole" Replace the following: PROJECT ID : Your project ID.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- We recommend that, before updating the OS configuration, you configure and test the interactive serial console access to your Bare Metal Solution server.
- We recommend that, before updating the OS configuration, you configure and test the interactive serial console access to your Bare Metal Solution server.
- We recommend that, before updating the OS configuration, you configure and test the interactive serial console access to your Bare Metal Solution server.
- ProjectsClient () bms client = BareMetalSolutionClient () output = [] errors = [] try : for project in get projects ( parent , folders client , projects client ): volumes list request = ListVolumesRequest ( parent = "projects/" + project + "/locations/global" , filter = filter , ) try : for volume in bms client . list volumes ( request = volumes list request ): output . append ( f " - { volume . name } " ) This could happen because BMS API is not enabled in a certain project. except PermissionDenied as e : errors . append ( f "Unable to list bms resources for project { project } : { e } " ) except PermissionDenied as e : errors . append ( f "Unable to access folder or project: { e } " ) return " \n " . join ( output ), " \n " . join ( errors ) def main ( : Sequence [ str ]): if ORGANIZATION ID . value is not None and FOLDER ID . value is not None : raise Exception ( "Only one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is None and FOLDER ID . value is None : raise Exception ( "Either one of organization ID or folder ID must be provided" ) elif ORGANIZATION ID . value is not None : parent = f "organizations/ { ORGANIZATION ID . value } " else : parent = f "folders/ { FOLDER ID . value } " volumes , errors = get volumes list ( parent , filter = FILTER . value ) print ( "=================== Flat list of volumes in the folder or organization" " ===================" ) print ( volumes ) print ( "=================== List of folders or projects with errors" " ===================" ) print ( errors ) if name == " main " : app . run ( main ) Manage servers You can manage the servers in your Bare Metal Solution environment in the following ways: View servers Organize servers by using labels Rename a server Retrieve the initial password for a server View OS details Change the OS for a server Enable hyperthreading on a server View servers To view the details of your Bare Metal Solution servers, follow these steps: Console Go to the Servers page.

