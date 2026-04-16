---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.433Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Monitor long-running operations in Bare Metal Solution via gcloud and API"
feature_slug: "monitor-long-running-operations-in-bare-metal-solution-via-gcloud-and-api"
latest_feature_date: "2022-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
  - "https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide"
  - "https://docs.cloud.google.com/sap/docs/netweaver-planning-guide"
keywords:
  - "operations"
  - "long"
  - "monitor"
  - "running"
---

# Monitor long-running operations in Bare Metal Solution via gcloud and API

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

Adds visibility of long-running operations via gcloud and API commands.

## Extended Definition

Adds visibility of long-running operations via gcloud and API commands.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)
- [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)

## Supporting Pages

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitor job progress and success You can monitor the running job by going to the Monitor > Jobs page. https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#jobs The page shows the status and job type.
- The following output example shows that the Backup and DR agent service is running correctly: [root@test2 ]# service udsagent status Redirecting to /bin/systemctl status udsagent.service udsagent.service - Google Cloud Backup and DR service Loaded: loaded (/usr/lib/systemd/system/udsagent.service; enabled; vendor preset: disabled) Active: active (running) since Wed 2022-12-28 05:05:45 UTC; 2 days ago Process: 46753 ExecStop=/act/initscripts/udsagent.init stop (code=exited, status=0/SUCCESS) Process: 46770 ExecStart=/act/initscripts/udsagent.init start (code=exited, status=0/SUCCESS) Main PID: 46789 (udsagent) Tasks: 8 (limit: 48851) Memory: 74.0M CGroup: /system.slice/udsagent.service ├─46789 /opt/act/bin/udsagent start └─60570 /opt/act/bin/udsagent start Dec 30 05:11:30 test2 su[150713]: pam unix(su:session): session closed for user oracle Dec 30 05:11:30 test2 su[150778]: (to oracle) root on none Log messages from your backups can help you diagnose issues.
- Please use b010502a8f383cae5a076d4ac9e868777657cebd0000000063abee83 (valid for 2 hrs) to register this host. -- A new secret key can be generated later by running: '/opt/act/bin/udsagent secret --reset --restart If you use the iptables command, open the ports for the backup agent firewall (TCP 5106) and Oracle services (TCP 1521): sudo iptables -A INPUT -p tcp --dport 5106 -j ACCEPT sudo iptables -A INPUT -p tcp --dport 1521 -j ACCEPT sudo firewall-cmd --permanent --add-port=5106/tcp sudo firewall-cmd --permanent --add-port=1521/tcp sudo firewall-cmd --reload Add hosts to Backup and DR In the Backup and DR management console, go to Manage > Hosts . https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#hosts Click +Add Host .
- Go to the Monitor > Jobs menu to monitor the progress of the job being unmounted and confirm that the job completes. https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#jobs If you accidentally delete the Oracle database manually, or shutdown the database before you run the Unmount and Delete job, perform the Unmount and Delete job again and select the Force Unmount option on the confirmation screen.

### "SAP HANA high-availability planning guide \_|\_ SAP on Google Cloud \_|\_\

- URL: [https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide](https://docs.cloud.google.com/sap/docs/sap-hana-ha-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: primitive rsc SAPHanaTopology HA1 HDB00 ocf:suse:SAPHanaTopology \ operations \$id="rsc sap2 HA1 HDB00-operations" \ op monitor interval="10" timeout="600" \ op start interval="0" timeout="600" \ op stop interval="0" timeout="300" \ params SID="HA1" InstanceNumber="00" clone cln SAPHanaTopology HA1 HDB00 rsc SAPHanaTopology HA1 HDB00 \ meta is-managed="true" clone-node-max="1" target-role="Started" interleave="true" The timeout values affect each of the resource operations differently, as explained in the following table.
- As a starting point, the following list shows some HA cluster resources and the associated permissions that they require: Fencing compute.instances.list compute.instances.get compute.instances.reset compute.instances.stop compute.instances.start logging.logEntries.create compute.zones.list VIP implemented by using an alias IP compute.instances.list compute.instances.get compute.zones.list logging.logEntries.create compute.instances.updateNetworkInterface compute.zoneOperations.get logging.logEntries.create VIP implemented by using static routes compute.instances.list compute.instances.get compute.zones.list logging.logEntries.create compute.routes.get compute.routes.create compute.routes.delete compute.routes.update compute.routes.list compute.networks.updatePolicy compute.networks.get compute.globalOperations.get logging.logEntries.create VIP implemented by using an internal load balancer No specific permissions required - the load balancer operates on health check statuses that does not require the cluster to interact with or change resources in Google Cloud Virtual IP implementation on Google Cloud A high-availability cluster uses a floating or virtual IP address (VIP) to move its workload from one cluster node to another in the event of an unexpected failure or for scheduled maintenance.
- Parameter Recommended value Impact of changing the value secauth off Disables authentication and encryption of all totem messages. join 60 (ms) Increases how long the node waits for join messages in the membership protocol. max messages 20 Increases the maximum number of messages that might be sent by the node after receiving the token. token 20000 (ms) Increases how long the node waits for a totem protocol token before the node declares a token loss, assumes a node failure, and starts taking action.
- The service account that a fence agent uses must be granted a role that includes the following permissions: compute.instances.get compute.instances.list compute.instances.reset compute.instances.start compute.instances.stop compute.zoneOperations.get logging.logEntries.create compute.zoneOperations.list The predefined Compute Instance Admin role contains all of the required permissions.

### "SAP NetWeaver planning guide \_|\_ SAP on Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sap/docs/netweaver-planning-guide](https://docs.cloud.google.com/sap/docs/netweaver-planning-guide)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Related security documents Refer to the following additional security resources for your SAP environment on Google Cloud: Securely Connecting to VM Instances Security Center Compliance in the Google Cloud Google Cloud security whitepaper Google Infrastructure security design Monitoring For support and monitoring, Google Cloud provides the Agent for SAP , for SAP workloads running on Compute Engine instances and Bare Metal Solution servers.
- For more details on administration of VMs and monitoring, see the SAP NetWeaver on Google Cloud Operations Guide .
- For general guidance about how to plan for disaster recovery using Google Cloud, see: How to Design a Disaster Recovery Plan Disaster Recovery Cookbook For information about SAP HANA backup and recovery, see the SAP HANA on Google Cloud Operations Guide .
- The following diagram provides a high-level overview of SAP NetWeaver running on Google Cloud: Here are some important things to notice in the diagram: The system uses some number of Compute Engine instances and persistent disks.

