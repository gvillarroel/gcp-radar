---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:59.661Z"
product_name: "Filestore"
product_slug: "filestore"
feature_name: "High Scale tier snapshots"
feature_slug: "high-scale-tier-snapshots"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/filestore/docs/mounting-fileshares"
  - "https://docs.cloud.google.com/filestore/docs/creating-instances"
  - "https://docs.cloud.google.com/filestore/docs/overview"
  - "https://docs.cloud.google.com/filestore/docs/monitoring-instances"
keywords:
  - "high"
  - "scale"
  - "tier"
  - "snapshots"
  - "are"
  - "available"
  - "for"
  - "filestore"
---

# High Scale tier snapshots

Product: Filestore
Coverage: MEDIUM

## Step 02 Summary

High Scale tier snapshots are available for Filestore instances.

## Extended Definition

High Scale tier snapshots are available for Filestore instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)

## Supporting Pages

### "Mounting file shares on Compute Engine clients \_|\_ Filestore \_|\_ Google\

- URL: [https://docs.cloud.google.com/filestore/docs/mounting-fileshares](https://docs.cloud.google.com/filestore/docs/mounting-fileshares)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect . ip-address is the IP address for the Filestore instance. file-share is the name of the file share on the instance.
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect .
- For specific service tiers, we recommend specifying the following number of connections between the client and server: Tier Capacity Number of connections Regional, zonal 1-9.75 TiB nconnect=2 Regional, zonal 10-100 TiB nconnect=7 Enterprise - nconnect=2 High scale SSD - nconnect=7 In general, the larger the file share capacity and the fewer the connecting client VMs, the more performance you gain by specifying additional connections with nconnect .
- Details (Click to expand) If you want to mount the file share through a secondary network, namely an interface other than nic0 , you must modify the client VM's routing policy: In /etc/default/instance configs.cfg , set the setup flag for NetworkInterfaces to false : [NetworkInterfaces] dhclient script = /sbin/google-dhclient-script dhcp command = ip forwarding = true setup = false In /etc/network/interfaces , add the following lines: auto eth1 iface eth1 inet dhcp up ip route add filestore-reserved-address-range via default-gateway-of-nic-to-filestore where: filestore-reserved-address-range is the reserved address range for use by the Filestore instance. default-gateway-of-nic-to-filestore is the default gateway IP address of the NIC connected to the VPC network that is shared with the Filestore instance.

### Create an instance \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/creating-instances](https://docs.cloud.google.com/filestore/docs/creating-instances)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively, Filestore multishares for GKE , available for enterprise-tier instances only, offers access to multiple shares on a single instance.
- A justification for the deletion protection setting is provided. gcloud filestore instances create render1 \ --project=myproject \ --region=us-central1 \ --tier=REGIONAL \ --performance=max-iops-per-tb=17000 \ --network=name="default",reserved-ip-range="10.0.7.0/29" \ --flags-file=nfs-export-options.json \ --deletion-protection \ --deletion-protection-reason="All genomics data must adhere to current organization policies." nfs-export-options.json file contents: { "--file-share": { "capacity": "2048", "name": "my vol", "nfs-export-options": [ { "access-mode": "READ WRITE", "ip-ranges": [ "10.0.0.0/29", "10.2.0.0/29" ], "squash-mode": "ROOT SQUASH", "anon uid": 1003, "anon gid": 1003 }, { "access-mode": "READ ONLY", "ip-ranges": [ "192.168.0.0/26" ], "squash-mode": "NO ROOT SQUASH" } ] } } REST API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- The following table summarizes capabilities available by service tier: Capabilities of Filestore service tiers Capability Basic HDD and Basic SSD Zonal Regional Enterprise Capacity 1 TiB to 63.9 TiB 1 TiB to 100 TiB 100 GiB or 1 TiB to 100 TiB 1 TiB to 10 TiB Scalability Basic HDD (1 TiB to 63.9 TiB) : Scales up in increments of 1 GiB Basic SSD (2.5 TiB to 63.9 TiB) : Scales up only in increments of 1 GiB Zonal (1 TiB to 9.75 TiB) : Scales up or down in increments of 256 GiB Zonal (10 TiB to 100 TiB) : Scales up or down in increments of 2.5 TiB Regional Depending on the access to the small instances feature , you can use one of the following options: Users with access to small instances feature: 100 GiB to 10,239 GiB .
- Use cURL to call the Filestore API : curl --request POST \ 'https://file.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /instances?instanceId= NAME ' \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --data '{ "tier":" TIER ", "networks":[ { "network":" NETWORK " } ], "performanceConfig": {" PERFORMANCE "} "fileShares":[ {"capacityGb": CAPACITY ,"name":" SHARE NAME "} ], "deletionProtectionEnabled": true, "deletionProtectionReason": " PROTECTION REASON "}' \ --compressed Where: PROJECT is the name of the project where your instance will reside.

### Filestore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/overview](https://docs.cloud.google.com/filestore/docs/overview)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- This means you can optimize your Filestore instances for your workload requirements and scale your file shares to meet the demands of your applications without resizing the capacity.
- Networking For information related to Filestore networking requirements, see the following resources: Filestore networking and IP resource requirements Configure NFS ports on client VMs Configure firewall rules Create an instance on a Shared VPC network in service projects Supported file system protocols Performance Custom performance lets you define the performance settings for your Filestore instances independently of the specified capacity.
- Filestore instances are fully managed file servers on Google Cloud that can be connected to a number of client types: Compute Engine VMs Google Kubernetes Engine (GKE) clusters External datastores such as Google Cloud VMware Engine On-premises machines Cloud Run services Once provisioned, you can scale the capacity of your instances according to need without any downtime.
- Some examples of capabilities supported by Filestore and not Cloud Storage FUSE include the following: POSIX compliance Hard links and file locking Concurrency control for multiple writes on the same object For more information, see the following resources: Compare the relative advantages of block, file, and object storage .

### Monitoring instances and quota \_|\_ Filestore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/filestore/docs/monitoring-instances](https://docs.cloud.google.com/filestore/docs/monitoring-instances)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- If the Filestore instance caches the data, some write operations are not reflected as disk writes. ✓ ✓ Metadata operations count Number of disk metadata operations. ✓ Free bytes Number of free disk bytes. ✓ ✓ Free disk space percent Percentage of free disk bytes. ✓ ✓ Free raw capacity percent Free raw capacity as a percentage of total space. ✓ Procedure call count Returns the same information as the nfsstat -s command. ✓ Snapshots used bytes The amount of space used for storing snapshots, measured in bytes. ✓ Time (in milliseconds) spent on read operations Time spent on disk reads. ✓ Time (in milliseconds) spent on write operations Time spent on disk writes. ✓ Used bytes Number of used disk bytes. ✓ ✓ Used space percent Percentage of used disk bytes. ✓ ✓ Memory-cached operations only occur in basic tier instances.
- Low backups quota If you are scheduling or automating backups creation for your Filestore instances, you should set up alerts for when you're running low on backups quota.
- Select an available metric to view: Metric Description Basic tiers Regional, zonal, and enterprise tiers Average read latency The average time a read operation takes (in milliseconds). ✓ Average write latency The average time a write operation takes (in milliseconds). ✓ Bytes written Number of bytes written. ✓ ✓ Bytes read Number of bytes read from persistent storage.
- Add a Filestore metric chart to a Cloud Monitoring dashboard To see Filestore performance metrics in a Cloud Monitoring dashboard, follow these steps: In the Google Cloud console, go to the leaderboard Metrics explorer page: Go to Metrics explorer If you use the search bar to find this page, then select the result whose subheading is Monitoring .

