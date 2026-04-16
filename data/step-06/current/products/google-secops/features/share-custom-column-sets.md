---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.700Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Share custom column sets"
feature_slug: "share-custom-column-sets"
latest_feature_date: "2026-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
keywords:
  - "share"
  - "custom"
  - "column"
  - "sets"
  - "users"
  - "can"
  - "events"
  - "table"
---

# Share custom column sets

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Users can share custom column sets in the Events table for consistent team analysis.

## Extended Definition

Users can share custom column sets in the Events table for consistent team analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Create and share custom column sets To use a consistent view when analyzing event data, you can create, save, and share custom column sets.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- It then matches those events against the hostnames column and the ip column in the badApps data table. events: $e.metadata.event type = "NETWORK CONNECTION" $e.security result.action = "ALLOW" $e.target.asset.asset id = $assetid // Event hostname matches at least one value in table column hostname. $e.target.hostname in %badApps.hostname // Event IP matches at least one value in table column ip. $e.target.ip in %badApps.ip For more information, see Use data tables .

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The table is followed by graphs of all Google Cloud services with their associated data that show their ingestion trend over the following time intervals: Last 24 hours Last 30 days Last six months Context Aware Detections - Risk dashboard The Context Aware Detections - Risk dashboard provides insight into the current threat status of assets and users in your enterprise.
- Ingestion - Events by Log Type : displays events based on log type—sortable by column: Log Type , Ingested Throughput , Ingested Logs , Normalized Events , Parsing Errors , Validation Errors , Indexing Errors .
- Ingestion - Events by Status : displays a table with events based on their status—sortable by column: Date , Ingested Logs , Normalized Events , Parsing Errors , Validation Errors , Indexing Errors .
- You can view the following visualizations in the Cloud Detection and Response Overview dashboard: CDIR Rulesets Enabled : displays the percentage of Google Security Operations SIEM rule sets enabled for your cloud environment from the total rule sets provided by GCTI for Google Security Operations SIEM users.

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Copy the following content into that file. #!/bin/bash #Declare the variables: uid= SCRIPTING USER UID gid= SCRIPTING USER GID arcsight ip= ARCSIGHT IP #Install nfs-utils yum install nfs-utils -y #Create the directory that will be shared mkdir /opt/Correlations #Change the permissions chmod -R 755 /opt/Correlations/ chown -R scripting:scripting /opt/Correlations/ #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #Edit the exports file as follows echo "/opt/Correlations/ $arcsight ip(rw,sync,all squash,anonuid=$uid,anongid=$gid)">>/etc/exports #Restart the NFS service and export the path systemctl restart nfs-server exportfs -a #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload setsebool -P nfs export all rw 1 Declare the uid , gid , and arcisght ip variables according to your environment.
- Cases Folder Path String I:\SiemShare\CorrelationSource Yes The location of the case files, such as I:\SiemShare\CorrelationSource Note: The Cases Folder Path parameter can be changed from one customer to another.
- Copy the following content into that file. #!/bin/bash #Declare the variables: siemplify ip= SIEMPLIFY IP #Install nfs-utils yum install nfs-utils -y #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload #Create the NFS directory mount point mkdir -p /mnt/nfs/var/SiemShare #Add the values: echo "$siemplify ip:/opt/Correlations /mnt/nfs/var/SiemShare nfs defaults 0 0">>/etc/fstab mount -a Declare the siemplify ip variable according to your environment.
- Connector severity prioritization The connector assigns severity with the following prioritization values: 1 and 2 - very low 3 and 4 - low 5 and 6 - medium 7 and 8 - high 9 and 10 - critical Connector inputs Use the following parameters to configure the connector: Parameter name Type Default value Is mandatory Description Environment DDL N/A Yes Select the required environment, for example, Customer One .

