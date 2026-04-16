---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.780Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Share Case Queue Filters"
feature_slug: "share-case-queue-filters"
latest_feature_date: "2025-07-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
keywords:
  - "share"
  - "case"
  - "queue"
  - "filters"
  - "users"
  - "can"
  - "save"
  - "them"
---

# Share Case Queue Filters

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Users can save case queue filters and share them with individual users, SOC roles, or all users in the organization.

## Extended Definition

Users can save case queue filters and share them with individual users, SOC roles, or all users in the organization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- To share column sets, you must have the following permissions: chronicle.googleapis.com/savedColumnSets.create chronicle.googleapis.com/savedColumnSets.delete chronicle.googleapis.com/savedColumnSets.update chronicle.googleapis.com/savedColumnSets.list chronicle.googleapis.com/savedColumnSets.get In the Column Manager, add or remove the columns to create your customized view.
- Filter events field The Filter events field displays the filters you've created, and lets you apply them to the Search field, or remove them as needed.
- Create and share custom column sets To use a consistent view when analyzing event data, you can create, save, and share custom column sets.
- Click Share to make the column set available to all other users in your Google SecOps tenant.

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Case top bar The Case Top Bar displays case-level context and available actions, as follows: The case queue header displays the case title, ID, priority, stage , timestamp, change environment, and tags .
- The case queue—automatically refreshed every minute—lists all active cases and lets you manually refresh, sort, filter, add, or close cases as needed.
- Analysts can also: Automatically group additional alerts into existing cases based on shared entities and configurable rules.
- Case queue header and views All active cases from various connectors appear in the case queue.

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Copy the following content into that file. #!/bin/bash #Declare the variables: uid= SCRIPTING USER UID gid= SCRIPTING USER GID arcsight ip= ARCSIGHT IP #Install nfs-utils yum install nfs-utils -y #Create the directory that will be shared mkdir /opt/Correlations #Change the permissions chmod -R 755 /opt/Correlations/ chown -R scripting:scripting /opt/Correlations/ #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #Edit the exports file as follows echo "/opt/Correlations/ $arcsight ip(rw,sync,all squash,anonuid=$uid,anongid=$gid)">>/etc/exports #Restart the NFS service and export the path systemctl restart nfs-server exportfs -a #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload setsebool -P nfs export all rw 1 Declare the uid , gid , and arcisght ip variables according to your environment.
- Copy the following content into that file. #!/bin/bash #Declare the variables: siemplify ip= SIEMPLIFY IP #Install nfs-utils yum install nfs-utils -y #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload #Create the NFS directory mount point mkdir -p /mnt/nfs/var/SiemShare #Add the values: echo "$siemplify ip:/opt/Correlations /mnt/nfs/var/SiemShare nfs defaults 0 0">>/etc/fstab mount -a Declare the siemplify ip variable according to your environment.
- Cases Folder Path String I:\SiemShare\CorrelationSource Yes The location of the case files, such as I:\SiemShare\CorrelationSource Note: The Cases Folder Path parameter can be changed from one customer to another.
- This feature allows Google SecOps to retrieve any triggered rules within ArcSight ESM in near real-time and forward them to be translated and contextualized as alerts for cases.

