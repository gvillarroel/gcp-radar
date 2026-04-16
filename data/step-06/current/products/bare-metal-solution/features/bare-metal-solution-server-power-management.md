---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.423Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution server power management"
feature_slug: "bare-metal-solution-server-power-management"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/netweaver-planning-guide"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-security"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
keywords:
  - "power"
  - "management"
  - "server"
  - "users"
---

# Bare Metal Solution server power management

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Users can power on, power off, restart, and check the status of Bare Metal Solution servers.

## Extended Definition

Users can power on, power off, restart, and check the status of Bare Metal Solution servers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
- [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)

## Supporting Pages

### "SAP NetWeaver planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- After a user with administrative privileges has connected to an instance through SSH or RDP, they can add other system users with standard Linux commands or Windows user-account management.
- For more information about the different types of block storage offered by Compute Engine, their performance characteristics, and how to work with them, see the Compute Engine documentation: Storage options About Google Cloud Hyperdisk performance Persistent Disk performance Other factors that affect performance Adding or resizing zonal persistent disks Creating persistent disk snapshots Persistent disks deployed by the deployment templates If you deploy the host VM by using the Terraform configuration files that Google Cloud provides for SAP NetWeaver, then the deployment automation scripts attach two or three Persistent Disk or Hyperdisk volumes for the required SAP NetWeaver volumes or drives, depending on whether you are using Windows Server or Linux.
- The following guides provide generally useful information about how to deploy VMs: Creating and Starting an Instance Creating Windows Server Instances Creating SQL Server Instances For detailed information and instructions about deploying your SAP NetWeaver system on Compute Engine VMs, see the following: Overview of Linux deployment for SAP NetWeaver Overview of Windows deployment for SAP NetWeaver Automation for SAP NetWeaver deployments Google Cloud provides Terraform configuration files that you can use to automate the deployment of Google Cloud infrastructure for SAP NetWeaver with Linux.
- Machine types Google Cloud offers SAP-certified machines in the following machine-type families: Compute-optimized machine types: C2 or C2D General-purpose machine types: N1, N2, N2D, T2D, C3, C3D, C4, or C4D Memory-optimized machine types: M1, M2, M3, M4, or X4 Bare Metal Solution server types: O2 Custom configurations of the machine types: N1, N2, or N2D For more information about each Compute Engine machine-type family that is certified for SAP applications, see Certified machine types .

### "Provide security for enterprise workloads in a Bare Metal Solution environment\

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-security](https://docs.cloud.google.com/bare-metal/docs/bms-security)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With CMU, you can leverage your existing Active Directory infrastructure to centralize the management of database users and authorization across multiple Oracle databases.
- The vendor manages the regional extension and its facilities, such as power, cooling, racking and stacking, and storage management.
- Fortunately, Google Cloud provides and manages the following components for Bare Metal Solution: Core infrastructure, including secure, controlled-environment facilities and power Physical security Network infrastructure and security Hardware monitoring capabilities Access to Google Cloud services Provisioning and maintenance of sole-tenancy hardware Local storage area network (SAN) Smart hands support: Onsite support for activities like hardware replacements In a Bare Metal Solution environment, security is a shared responsibility.
- Figure 1: Bare Metal Solution - Regional Extension connected to Google Cloud Because of this architecture, you need to consider ways to secure both your Bare Metal Solution servers and the Google Cloud components included in your design.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- In the networks section of the output, you can view the network template, logical interfaces, bonded interfaces, and network type assigned to each interface. curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME " Implement IP Address Management in a Bare Metal Solution environment Being able to manage your network topology inside your Bare Metal Solution environment is important.
- To turn the power off for your server, enter your project ID, region, and server name and issue the following curl command. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :stop" Because starting, stopping, and restarting a server takes a while to complete, you can check the status by following the steps in View the status of a long-running operation .
- Manage networks You can manage the networks in your Bare Metal Solution environment in the following ways: View networks Organize networks by using labels Rename a network Create a network Attach a network to a server Detach a network from a server Delete a network View advanced networking information for a Bare Metal Solution environment Implement IP address management in a Bare Metal Solution environment View networks Monitoring your network resources in the Bare Metal Solution environment lets you know how your servers connect to other resources.
- To turn the power on for your server, enter your project ID, region, and server name, then issue the following curl command. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME :start" In most cases, the power for your server stays on.

