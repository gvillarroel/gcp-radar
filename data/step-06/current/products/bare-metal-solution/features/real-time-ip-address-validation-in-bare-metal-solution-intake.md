---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.438Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Real-time IP address validation in Bare Metal Solution intake"
feature_slug: "real-time-ip-address-validation-in-bare-metal-solution-intake"
latest_feature_date: "2022-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide"
keywords:
  - "validation"
  - "address"
  - "real"
  - "time"
---

# Real-time IP address validation in Bare Metal Solution intake

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds real-time validation to prevent conflicting IP addresses in Bare Metal Solution networks.

## Extended Definition

Adds real-time validation to prevent conflicting IP addresses in Bare Metal Solution networks.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)

## Supporting Pages

### Best practices for Oracle on Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-best-practices)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Follow these steps: Install dnsmasq . yum makecache yum install dnsmasq Open the /etc/dnsmasq.conf file in edit mode. vi /etc/dnsmasq.conf In the /etc/dnsmasq.conf file, add the following lines: port=53 domain-needed bogus-priv strict-order expand-hosts domain=localdomain address=/.localdomain/127.0.0.1 address=//127.0.0.1 listen-address=127.0.0.1 resolv-file=/etc/dnsmasq-resolv.conf Edit the /etc/dnsmasq-resolv.conf file and the /etc/resolv.conf file to contain only the following line: nameserver 127.0.0.1 Start the dnsmasq service: systemctl restart dnsmasq systemctl status dnsmasq On both nodes, run the nslookup command. nslookup at-2811641-svr001 Server: 127.0.0.1 Address: 127.0.0.1#53 Name: at-2811641-svr001 Address: 192.168.1.10 nslookup at-2811641-svr002 Server: 127.0.0.1 Address: 127.0.0.1#53 Name: at-2811641-svr002 Address: 192.168.1.11 Install NTP When you install NTP, ensure that all the RAC nodes sync with the time of your jump host or your internal NTP server.
- 3600 a0980383143524f2b50476d59554e dm - 7 NETAPP , LUN C - Mode size = xxxG features = ' 4 queue if no path pg init retries 50 retain attached hw handle ' hwhandler = ' 1 alua ' wp = rw -+- policy = ' service - time 0 ' prio = 50 status = active - 14 : 0 : 3 : 2 sdf 8 : 80 active read y run ning - 16 : 0 : 5 : 2 sdv 65 : 80 active read y run ning -+- policy = ' service - time 0 ' prio = 10 status = enabled - 14 : 0 : 2 : 2 sdc 8 : 32 active read y run ning ` - 16 : 0 : 3 : 2 sdq 65 : 0 active read y run ning Use jumbo frames To prevent fragmentation of packets as they travel from one server to another in a RAC environment, Oracle recommends configuring your server interfaces with jumbo frames.
- 8980 bytes from svr001 ( 172 .16.1.10 ) : icmp seq = 1 ttl = 64 time = 0 .153 ms 8980 bytes from svr001 ( 172 .16.1.10 ) : icmp seq = 2 ttl = 64 time = 0 .151 ms --- svr001 ping statistics --- 2 packets transmitted, 2 received, 0 % packet loss, time 1001ms rtt min/avg/max/mdev = 0 .151/0.152/0.153/0.001 ms Oracle RMAN backups and latency impact If the Oracle RMAN backup process is not limited by the RATE parameter, it can push storage throughput or IOPS to the performance limit for a storage volume.
- The following examples show the output from these commands for a server that synchronizes successfully: timedatectl show -p NTPSynchronized NTPSynchronized=yes synchronised to NTP server (216.239.35.8) at stratum 3 time correct to within 49 ms polling server every 1024 s View Oracle VM CPU count and memory details To view information about an Oracle VM (OVM) host, including CPU and memory details, use the xm info command.

### SAP HANA planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- For details about how to deploy SAP HANA on Google Cloud, see: For single-host scale-up and multi-host scale-out deployments, see: Terraform: SAP HANA scale-up deployment guide For scale-out system with host auto-failover deployments, see: Terraform: SAP HANA scale-out system with host auto-failover deployment guide For scale-up high-availability cluster configurations, see: Terraform: SAP HANA scale-up high-availability cluster configuration guide Manual HA scale-up cluster configuration on RHEL Manual HA scale-up cluster configuration on SLES For scale-out high-availability cluster configurations, see: Terraform: SAP HANA scale-out high-availability cluster configuration guide Manual HA scale-out cluster configuration on SLES About SAP HANA on Google Cloud SAP HANA is an in-memory, column-oriented, relational database that provides high-performance analytics and real-time data processing.
- To apply all of the recommended SAP HANA settings, including both of the preceding kernel parameters, specify the following saptune command: saptune solution apply HANA For more information about configuring SLES for SAP HANA, see: SAP note 2205917 - SAP HANA DB: Recommended OS settings for SLES 12 / SLES for SAP Applications 12 SAP note 2684254 - SAP HANA DB: Recommended OS settings for SLES 15 / SLES for SAP Applications 15 Memory-error recovery with Fast Restart on Compute Engine instances Enabling SAP HANA Fast Restart on compute instances in the M2, M3, and M4 families of Compute Engine memory-optimized machine types reduces the time it takes SAP HANA to recover from uncorrectable memory errors.
- Evaluate your SAP workload using Workload Manager - a rule-based validation service that lets you scan your workloads and detect deviations from standards, rules, and best practices prescribed by SAP, Google Cloud, and OS vendors.
- To connect resources from multiple projects to a common VPC network, you can use Shared VPC , so that the resources can communicate with each other securely and efficiently by using internal IP addresses from that network.

### "SAP HANA high-availability planning guide \_|\_ SAP on Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- Typical non-cloud deployments use a gratuitous Address Resolution Protocol (ARP) request to announce the movement and reallocation of a VIP to a new MAC address.
- As a starting point, the following list shows some HA cluster resources and the associated permissions that they require: Fencing compute.instances.list compute.instances.get compute.instances.reset compute.instances.stop compute.instances.start logging.logEntries.create compute.zones.list VIP implemented by using an alias IP compute.instances.list compute.instances.get compute.zones.list logging.logEntries.create compute.instances.updateNetworkInterface compute.zoneOperations.get logging.logEntries.create VIP implemented by using static routes compute.instances.list compute.instances.get compute.zones.list logging.logEntries.create compute.routes.get compute.routes.create compute.routes.delete compute.routes.update compute.routes.list compute.networks.updatePolicy compute.networks.get compute.globalOperations.get logging.logEntries.create VIP implemented by using an internal load balancer No specific permissions required - the load balancer operates on health check statuses that does not require the cluster to interact with or change resources in Google Cloud Virtual IP implementation on Google Cloud A high-availability cluster uses a floating or virtual IP address (VIP) to move its workload from one cluster node to another in the event of an unexpected failure or for scheduled maintenance.
- For example: primitive rsc SAPHanaTopology HA1 HDB00 ocf:suse:SAPHanaTopology \ operations \$id="rsc sap2 HA1 HDB00-operations" \ op monitor interval="10" timeout="600" \ op start interval="0" timeout="600" \ op stop interval="0" timeout="300" \ params SID="HA1" InstanceNumber="00" clone cln SAPHanaTopology HA1 HDB00 rsc SAPHanaTopology HA1 HDB00 \ meta is-managed="true" clone-node-max="1" target-role="Started" interleave="true" The timeout values affect each of the resource operations differently, as explained in the following table.
- To change the account that is used by the storage manager for SAP HANA, perform the following steps: Make sure that the service account is available on each of the hosts in the scale-out SAP HANA system: gcloud auth list In the global.ini file, update the [storage] section with the service account: [storage] ha provider = gceStorageClient ... partition gcloudAccount = SERVICE ACCOUNT Replace SERVICE ACCOUNT with the name of the service account, in email address format, that is used by the storage manager for SAP HANA.

