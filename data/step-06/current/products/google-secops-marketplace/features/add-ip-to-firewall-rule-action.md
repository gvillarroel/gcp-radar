---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.686Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Add IP To Firewall Rule action"
feature_slug: "add-ip-to-firewall-rule-action"
latest_feature_date: "2024-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance"
keywords:
  - "add"
  - "ip"
  - "to"
  - "firewall"
  - "rule"
  - "action"
  - "adds"
  - "an"
---

# Add IP To Firewall Rule action

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that adds an IP address to a firewall rule.

## Extended Definition

Adds an action that adds an IP address to a firewall rule.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- For Azure Storage To update the IP access restrictions in your Azure Storage blobstore: If you restrict access to your Azure resources using an Azure Storage firewall, you must add the IP ranges used by STS workers to your list of allowed IPs.
- To add these ranges as allowed IPs, follow these instructions: Configure Azure Storage firewalls and virtual networks .
- To grant read permission to multiple files , grant access at the bucket level as follows: For "feedSourceType": "GOOGLE CLOUD STORAGE" : Add the Google SecOps service account as a principal to your storage bucket and grant it the IAM Storage Object Viewer ( roles/storage.objectViewer ) role.

### "Integrate LevelBlue USM Anywhere with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-anywhere)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "rep device fqdn" : "192.0.2.30" , "sorce name" : "192.0.2.30" , "tag" : "pdate-esp-kernelmodle.sh" , "timestamp occred" : "1596541223000" , "destination address" : "198.51.100.130" , "rep dev canonical" : "192.0.2.30" , "destination name" : "198.51.100.130" , "received from" : "Centos7-001" , "timestamp occred iso8601" : "2020-08-04T11:40:23.000Z" , "id" : "f52dd545-ff14-5576-3b70-47f10f528f53" , "needs enrichment" : True , "rep device asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received" : "1596541223152" , "sorce canonical" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "destination fqdn" : "198.51.100.130" , " links" : { "self" : { "href" : " URL " } }, "has alarm" : False , "rep device address" : "192.0.2.30" , "event name" : "pdate-esp-kernelmodle.sh event" , "sed hint" : False , "transient" : False , "packet type" : "log" , "was fzzied" : True , "sppressed" : False , "log" : "<13>Ag 4 14:40:23 Centos7-001 pdate-esp-kernelmodle.sh: McAfeeESPFileAccess installed in this system is - 198.51.100.130" , "sorce asset id" : "256fa9b1-a066-c9eb-561a-c2110035978a" , "timestamp received iso8601" : "2020-08-04T11:40:23.152Z" , "destination canonical" : "198.51.100.130" , "time offset" : "Z" } Case wall Result type Description Type Output message In case of general error: "Action didn't complete due to error: {error}", result value should be set to false and the action should fail.
- Error is {}. action should fail." Action pass successfully: "Successfully returned AlienVault Anywhere alarm {} details" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Columns: ID Priority Occurred Time Received Time Source Source Organization Source Country Destination Rule Attack ID Rule Strategy Rule ID Rule Attack Tactic Rule Attack Technique Rule Intent General List Events Search for AlienVault events.
- Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message In case of error: "Failed to get details about AlienVault Anywhere alarm!
- If the action is completed successfully: "Successfully returned {len(events)} AlienVault Anywhere events" If the action failed to run: "Failed to list Endgame AlienVault Anywhere events!" When Product version parameter is set to V1: "Action should fail with clear message that is supported in V2." General CSV Table Table Title: Events Table Columns: ID Name Occurred Time Received Time Suppressed Severity Category Sub Category Access Control Outcome Destination Destination Port Source Source Port Values: id= uuid name = event name Occurred Time=timestamp occurred iso8601 Received Time=timestamp received iso8601 Suppressed =suppressed Severity = event severity Category = event category Sub Category = event subcategory Access Control Outcome = access control outcome Destination = destination name Destination Port = destination port Source = source name Source Port= source port General Ping Test connectivity.

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Copy the following content into that file. #!/bin/bash #Declare the variables: uid= SCRIPTING USER UID gid= SCRIPTING USER GID arcsight ip= ARCSIGHT IP #Install nfs-utils yum install nfs-utils -y #Create the directory that will be shared mkdir /opt/Correlations #Change the permissions chmod -R 755 /opt/Correlations/ chown -R scripting:scripting /opt/Correlations/ #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #Edit the exports file as follows echo "/opt/Correlations/ $arcsight ip(rw,sync,all squash,anonuid=$uid,anongid=$gid)">>/etc/exports #Restart the NFS service and export the path systemctl restart nfs-server exportfs -a #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload setsebool -P nfs export all rw 1 Declare the uid , gid , and arcisght ip variables according to your environment.
- Copy the following content into that file. #!/bin/bash #Declare the variables: siemplify ip= SIEMPLIFY IP #Install nfs-utils yum install nfs-utils -y #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload #Create the NFS directory mount point mkdir -p /mnt/nfs/var/SiemShare #Add the values: echo "$siemplify ip:/opt/Correlations /mnt/nfs/var/SiemShare nfs defaults 0 0">>/etc/fstab mount -a Declare the siemplify ip variable according to your environment.
- Actions Add Entries to Active List Description Provides a mechanism to get information from trends outside of, and in addition to, reports.
- Action results Script result Script result name Value options Example success True or False success:False JSON result [ { "score" : 1.2440307 , "uuid" : " UUID " , "uri" : "/All Fields/ArcSight Foundation/Variables Library/IPv6/Attacker IPv6 Address" , "name" : "Attacker IPv6 Address" }, { "score" : 1.2440307 , "uuid" : " UUID " , "uri" : "/All Fields/ArcSight Foundation/Variables Library/IPv6/Attacker IPv6 Address" , "name" : "Attacker IPv6 Address" } ] Connectors For detailed instructions on how to configure a connector in Google SecOps, see Configuring the connector .

### "Integrate LevelBlue USM Appliance with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/alienvault-usm-appliance)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply model Returns if it exists in JSON result descr Returns if it exists in JSON result hostname Returns if it exists in JSON result asset type Returns if it exists in JSON result fqdn Returns if it exists in JSON result devices Returns if it exists in JSON result asset value Returns if it exists in JSON result ips Returns if it exists in JSON result id Returns if it exists in JSON result sensors Returns if it exists in JSON result os Returns if it exists in JSON result networks Returns if it exists in JSON result icon Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : { "model" : null , "descr" : " " , "hostname" : "Hostname" , "asset type" : "Internal" , "fqdn" : " " , "devices" : [], "asset value" : "2" , "ips" : { "3.3.3.3" : { "ip" : "192.0.2.1" , "mac" : "01:23:45:AB:CD:EF" }}, "id" : "123D37D595B800734550B9D9D6A958C6" , "sensors" : { "C221234962EA11E697DE0AF71A09DF3B" : { "ip" : "192.0.2.1" , "ctxs" : { "C228355962EA11E697DE0AF71A09DF3B" : "AlienVault" }, "name" : "DA" }}, "os" : "Linux" , "networks" : { "7E4B12EEFD06A21F898345C2AB46EB10" : { "ips" : "192.0.2.1/24" , "ctx" : "C228355962EA11E697DE0AF71A09DF3B" , "name" : "Pvt 000" }}, "icon" : " " }, "Entity" : "example.com" } ] Enrich Vulnerabilities Retrieve vulnerability information from the LevelBlue USM Appliance.
- Parameters N/A Run on This action runs on the following entities: IP Address Hostname Action results Entity enrichment Enrichment field name Logic - When to apply AlientVault Severity Returns if it exists in JSON result AlientVault Service Returns if it exists in JSON result AlientVault Vulnerability Returns if it exists in JSON result AlientVault Scan Time Returns if it exists in JSON result AlientVault Asset Returns if it exists in JSON result AlientVault Id Returns if it exists in JSON result Script result Script result name Value options Example success True or False success:False JSON result [ { "EntityResult" : [{ "Severity" : "High" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP Sequence Number Approximation Reset Denial of Service Vulnerability" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123456" }, { "Severity" : "High" , "Service" : "https (443/tcp)" , "Vulnerability" : "robot(s).txt exists on the Web Server" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123457" }, { "Severity" : "Medium" , "Service" : "general (0/tcp))" , "Vulnerability" : "TCP timestamps" , "Scan Time" : "2014-02-26 02:08:59" , "Asset" : "Hostname (192.0.2.1)" , "Id" : "123458" }], "Entity" : "test" } ] Fetch Last PCAP Files Fetch last PCAP files from AlienVault.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result [ { "creation time" : "2014-02-26 02:08:59" , "download link" : "https://www.alienvault.com/ossim/vulnmeter/lr rescsv.php?treport=latest&ipl=192.0.2.1&ctx=C22835597DE0AF71A09DF3B&scantype=M" , "Address" : "Hostname (192.0.2.1)" }, { "creation time" : "2014-02-26 02:08:59" , "download link" : "https://www.alienvault.com/ossim/vulnmeter/lr rescsv.php?treport=latest&ipl=192.0.2.1&ctx=C228351E697DE071A09DF3B&scantype=M" , "Address" : "Hostname (192.0.2.1)" }, { "creation time" : "2014-02-26 02:08:59" , "download link" : "https://www.alienvault.com/ossim/vulnmeter/lr rescsv.php?treport=latest&ipl=192.0.2.1&ctx=C22835597DE0AF71A09DF3B&scantype=M" , "Address" : "Hostname (192.0.2.1)" } ] Ping Test the connectivity.
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result [ { "scan name" : "pcap file 1545041396 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" }, { "scan name" : "pcap file 1545041397 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" }, { "scan name" : "pcap file 1545041398 10 192.0.2.1.pcap" , "creation time" : "2018-12-17 10:09:56" , "user" : null , "download link" : "https://www.alienvault.com/ossim/pcap/download.php?scan name=0000000 10 192.0.2.1.pcap&sensor ip=192.0.2.1" , "sensor ip" : "192.0.2.1" , "duration" : "10" } ] Get PCAP Files for Events Get PCAP files for events in an alert.

