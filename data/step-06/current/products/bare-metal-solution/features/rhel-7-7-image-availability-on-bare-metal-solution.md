---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:24.017Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "RHEL 7.7 image availability on Bare Metal Solution"
feature_slug: "rhel-7-7-image-availability-on-bare-metal-solution"
latest_feature_date: "2021-08-30"
deprecation_date: "2021-08-30"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
keywords:
  - "deprecates"
  - "availability"
  - "image"
  - "rhel"
  - "solution"
  - "metal"
  - "bare"
  - "on"
---

# RHEL 7.7 image availability on Bare Metal Solution

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Deprecates the RHEL 7.7 image for Bare Metal Solution servers, with availability restricted to certain SAP-subscription cases; deprecated on 2021-08-30.

## Extended Definition

Deprecates the RHEL 7.7 image for Bare Metal Solution servers, with availability restricted to certain SAP-subscription cases; deprecated on 2021-08-30.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the launch stage descriptions . gcloud alpha bms instances update SERVER NAME --region REGION --os-image= OS IMAGE --kms-crypto-key-version= KMS CRYPTO KEY VERSION --ssh-keys= KEY 1 , KEY 2 Example: gcloud alpha bms instances update server1 --region europe-west3 --os-image= OS IMAGE --kms-crypto-key-version=projects/bmaas-testing/locations/global/keyRings/e2e-test/cryptoKeys/e2e-test-key/cryptoKeyVersions/1 --ssh-keys=e2e-test-key-1,e2e-test-key-2 API To update an OS image on your Bare Metal Solution server, enter your project ID, region, server name, and OS image, then issue the following curl command.
- Example: gcloud bms os-images describe OEL8x --project=test-project Following is a sample output: applicableInstanceTypes: - o2-highmem-224-metal - o2-standard-112-metal - o2-standard-16-metal - o2-standard-32-metal - o2-standard-48-metal code: OEL8x description: Oracle Linux 8.8 [5.4.17-2136.324.5.3.el8uek.x86 64] name: projects/bmaas-testing/locations/global/osImages/OEL8x supportedNetworkTemplates: - s200-bondaa-bondaa - s400-bondaa-bondaa Change the OS for a server You can reimage a Bare Metal Solution server with a different OS image.
- For the OS image code, see Operating systems . curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-Goog-User-Project: PROJECT ID " \ -H "Content-Type: application/json" \ "https://baremetalsolution.googleapis.com/v2/projects/ PROJECT ID /locations/ REGION /instances/ SERVER NAME ?updateMask=os image" -d "{ 'osImage' : ' OS IMAGE ' }" Because this change takes awhile to complete, you can check the status by following the steps in View the status of a long-running operation .
- For a Bare Metal Solution network, we recommend that you create VLAN attachments in pairs for high availability.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model.
- If you use an NFS or dNFS-based backup disk, then egress from the Linux host (Agent) in Bare Metal Solution to the backup/recovery appliance in the Compute Engine VPC on the following ports: TCP/UDP-111 (rpcbind) TCP/UDP-756 (status) TCP/UDP-2049 (nfs) TCP/UDP-4001 (mountd) TCP/UDP-4045 (nlockmgr) Configure Google Cloud DNS to resolve Bare Metal Solution hostnames and domains, to ensure name resolution is consistent across Bare Metal Solution servers, VMs, and Compute Engine-based resources such as the Backup and DR Service.
- Understand the factors that impact performance for the network and your backup servers The following items affect network I/O between Oracle on Bare Metal Solution and your backup servers in Google Cloud: Flash storage Similar to Google Cloud Persistent Disk, the flash storage arrays that provide the storage for Bare Metal Solution systems increase I/O capabilities based on how much storage you assign to the host.
- Figure 1 : Components for using Backup and DR with Oracle databases in a Bare Metal Solution environment As you can see in the diagram, this solution requires the following components: Bare Metal Solution regional extension– Allows you to run Oracle databases in a third-party data center adjacent to a Google Cloud data center, and use your existing on-premises software licenses.

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- OS version OS image code Machine series Machine type Lifecycle stage EOL and image deprecation date RHEL 7.7 for SAP LAMBRHEL77SAP o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers End of Life August 2023 RHEL 7.9 RHEL7x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2024 RHEL 8.4 (Minor version locked) RHEL84 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life May 2023 RHEL 8 (Latest minor release) RHEL8x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA May 2029 RHEL 8.0 for SAP RHEL80SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life December 2020 RHEL 8.1 for SAP RHEL81SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life November 2023 RHEL 9.4 (Minor version locked) RHEL94 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life May 2023 RHEL 9 (Latest minor release) RHEL9x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA May 2032 OEL 7.9 OEL7x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA July 2024 OEL 8 (Latest minor release) OEL8x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA July 2029 OEL 8.8 (Minor version locked) OEL88 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2025 OEL 9 OEL9x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2032 SLES 15 SP1 SLES15SPx o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life January 2024 SLES 12 SP4 for SAP SLES12SP4SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Life June 2023 SLES 12 SP5 for SAP SLES12SP5SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Support October 2027 SLES 15 for SAP SLES15SAP o2-standard-48-metal o2-standard-32-metal o2-standard-112-metal o2-standard-16-metal o2-highmem-224-metal General-purpose End of Life December 2022 SLES 15 SP1 for SAP SLES15SPxSAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Support January 2024 SLES 15 SP2 for SAP LAMBSLES15SP2SAP o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA December 2024 Bring Your Own Image (BYOI) The Bare Metal Solution servers are certified to run only the OS images of the following distributions: Red Hat Enterprise Linux (RHEL) Oracle Linux (OL) SUSE Linux Enterprise Server (SLES) Any other OS hasn't been tested or certified to run on the Bare Metal Solution servers.
- Regional availability Bare Metal Solution is available in the following Google Cloud regions : Region Location asia-northeast1 Tokyo, Japan, APAC asia-northeast3 Seoul, South Korea, APAC asia-southeast1 Jurong West, Singapore, APAC europe-west2 London, England, Europe europe-west3 Frankfurt, Germany, Europe europe-west4 Eemshaven, Netherlands, Europe northamerica-northeast1 Montréal, Québec, Canada, North America northamerica-northeast2 Toronto, Ontario, Canada, North America southamerica-east1 Osasco, São Paulo, Brazil, South America us-central1 Council Bluffs, Iowa, USA, North America us-east4 Ashburn, Virginia, USA, North America us-west2 Los Angeles, California, USA, North America If you don't see the region that you need in the preceding table, then contact Google Cloud Sales .
- Installing BYOI OS image To install your BYOI OS image on Bare Metal Solution, do the following: Ensure that your OS image meets all the OS image technical specifications .
- Consequently, the OS image you previously used may differ from the one available when reimaging or provisioning a new Bare Metal Solution server.

