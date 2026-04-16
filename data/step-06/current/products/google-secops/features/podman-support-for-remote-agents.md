---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.745Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Podman support for Remote Agents"
feature_slug: "podman-support-for-remote-agents"
latest_feature_date: "2025-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "podman"
  - "remote"
  - "agents"
  - "deployment"
  - "option"
  - "lets"
  - "you"
  - "install"
---

# Podman support for Remote Agents

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

A new deployment option that lets you install a Remote Agent using Podman.

## Extended Definition

A new deployment option that lets you install a Remote Agent using Podman.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Integrate ArcSight with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/arcsight)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Once checked, the option appears to select the remote user (agent).
- Copy the following content into that file. #!/bin/bash #Declare the variables: uid= SCRIPTING USER UID gid= SCRIPTING USER GID arcsight ip= ARCSIGHT IP #Install nfs-utils yum install nfs-utils -y #Create the directory that will be shared mkdir /opt/Correlations #Change the permissions chmod -R 755 /opt/Correlations/ chown -R scripting:scripting /opt/Correlations/ #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #Edit the exports file as follows echo "/opt/Correlations/ $arcsight ip(rw,sync,all squash,anonuid=$uid,anongid=$gid)">>/etc/exports #Restart the NFS service and export the path systemctl restart nfs-server exportfs -a #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload setsebool -P nfs export all rw 1 Declare the uid , gid , and arcisght ip variables according to your environment.
- Copy the following content into that file. #!/bin/bash #Declare the variables: siemplify ip= SIEMPLIFY IP #Install nfs-utils yum install nfs-utils -y #Start the services and enable them to be started at boot time systemctl enable rpcbind systemctl enable nfs-server systemctl enable nfs-lock systemctl enable nfs-idmap systemctl start rpcbind systemctl start nfs-server systemctl start nfs-lock systemctl start nfs-idmap #If FirewallD is running add the next rules: firewall-cmd --permanent --zone=public --add-service=nfs firewall-cmd --permanent --zone=public --add-service=mountd firewall-cmd --permanent --zone=public --add-service=rpc-bind firewall-cmd --reload #Create the NFS directory mount point mkdir -p /mnt/nfs/var/SiemShare #Add the values: echo "$siemplify ip:/opt/Correlations /mnt/nfs/var/SiemShare nfs defaults 0 0">>/etc/fstab mount -a Declare the siemplify ip variable according to your environment.
- Action results Script result Script result name Value options Example success True or False success:False JSON result [ { "score" : 1.2440307 , "uuid" : " UUID " , "uri" : "/All Fields/ArcSight Foundation/Variables Library/IPv6/Attacker IPv6 Address" , "name" : "Attacker IPv6 Address" }, { "score" : 1.2440307 , "uuid" : " UUID " , "uri" : "/All Fields/ArcSight Foundation/Variables Library/IPv6/Attacker IPv6 Address" , "name" : "Attacker IPv6 Address" } ] Connectors For detailed instructions on how to configure a connector in Google SecOps, see Configuring the connector .

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- What's Next SOAR migration pre-validation guide Migrate a SOAR standalone instance of an MSSP Migrate SOAR endpoints to the Chronicle API Migrate remote agents Migrate SOAR permissions to Google Cloud IAM Frequently asked questions Need more help?
- Migrate Remote Agents You can migrate the Remote Agents to Google Cloud by doing the following: Create a Service Account instead of an API key for the remote agent.
- Existing Remote Agents will be available until September 30, 2026, after which they will no longer function.
- For detailed instructions, see Migrate Remote Agents to Google Cloud .

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Model Armor offers flexible deployment options, including a REST API for broad coverage and in-line integration with Vertex AI and other Google Cloud enforcement points for reduced latency and no app changes.
- We offer customized solutions and deployment options designed to align with your unique requirements and business objectives.
- Getting Started with Google Chrome and Google SecOps Configure the Chrome Enterprise Premium Reporting Connector to send data to Google SecOps Connect Chrome Enterprise Premium to Google SecOps Enable Chrome Enterprise Threats Curated Detections Examples Investigating Malicious Browser Extensions A user downloads and installs a malicious browser extension from outside the Chrome Web Store, that once installed, reads their session cookies and posts them to a server on a suspicious domain that was registered within the last week.
- See activate enterprise tier Validate Security Command Center Detection Services are enabled: See How to configure Security Command Center Connect Security Command Center to AWS to get configuration and resource data that flows through to the Entity Graph: See Connect Security Command Center to AWS Preview - Connect Security Command Center to Azure to get configuration and resource data that flows through to the Entity Graph. (Optional) Integrate Security Command Center with ticketing systems.

