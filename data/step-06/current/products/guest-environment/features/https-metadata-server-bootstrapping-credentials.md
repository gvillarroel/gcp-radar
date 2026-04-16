---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:24.228Z"
product_name: "Guest Environment"
product_slug: "guest-environment"
feature_name: "HTTPS metadata server bootstrapping credentials"
feature_slug: "https-metadata-server-bootstrapping-credentials"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes"
  - "https://docs.cloud.google.com/compute/docs/images/guest-agent"
  - "https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering"
  - "https://docs.cloud.google.com/compute/docs/images/guest-environment"
keywords:
  - "https"
  - "metadata"
  - "server"
  - "bootstrapping"
  - "credentials"
  - "the"
  - "guest"
  - "agent"
---

# HTTPS metadata server bootstrapping credentials

Product: Guest Environment
Coverage: MEDIUM

## Step 02 Summary

The guest agent supports bootstrapping credentials for the metadata server's HTTPS endpoint by default.

## Extended Definition

The guest agent supports bootstrapping credentials for the metadata server's HTTPS endpoint by default.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes)
- [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)

## Supporting Pages

### "Setting and querying guest attributes \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can retrieve all of the values for the VM as follows: gcloud compute instances get-guest-attributes VM NAME \ --zone= ZONE To retrieve all of the values under a specific namespace, include the --query-path flag and the namespace that you defined: gcloud compute instances get-guest-attributes VM NAME \ --query-path= NAMESPACE \ --zone= ZONE To retrieve all of the values under a specific namespace, include the --query-path flag, the namespace, and the key for the value that you defined: gcloud compute instances get-guest-attributes VM NAME \ --query-path= NAMESPACE / KEY \ --zone= ZONE Replace the following: VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored ZONE : the zone where the VM is located REST Use the compute.instances.getguestattributes method : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE / KEY Replace the following: PROJECT ID : your project ID ZONE : the zone where your VM is located VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored To retrieve all of the keys for a NAMESPACE , omit the KEY : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE To retrieve all of the keys in each namespace on the VM, omit the NAMESPACE : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= Alternatively, if you have an OAuth token, you can use curl : curl -H "Authorization: Bearer OAUTH TOKEN " https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE / KEY Replace the following: OAUTH TOKEN : your OAuth token PROJECT ID : your project ID ZONE : the zone where your VM is located VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored Deleting guest attributes Use the following instructions to remove guest attributes from within a VM.
- Query the metadata server Use the following instructions to query guest attributes from within a VM.
- Replace NAMESPACE with the namespace for the guest-attributes key that you want to query. curl http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / -H "Metadata-Flavor: Google" Windows VMs For example, you might use an Invoke-RestMethod request from within your VM to read a value from the guest-attributes metadata path: PS C:\> $value = (Invoke-RestMethod -Headers @{'Metadata-Flavor' = 'Google'} -Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY ") $value Replace the following: NAMESPACE : the namespace for the guest-attributes key that you want to query.
- For example, use Invoke-RestMethod to delete a specific key: PS C:\> $value = (Invoke-RestMethod -Method DELETE -Headers @{'Metadata-Flavor' = 'Google'} -Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY ") $value Replace the following: NAMESPACE : the namespace for the guest-attributes key that you want to delete KEY : the path within guest-attributes where the value is stored Disabling guest attributes on your organization or folder If you don't want any of the VMs in your organization or folder to enable guest attributes, you can override and disable the feature completely.

### About the guest agent \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monolithic architecture : guest agents earlier than 20250901.00 feature a single, unified process centered around the metadata server's description of instances.
- The guest agent long polls the metadata server and takes action based on state changes.
- Plugin-based agent binaries This table lists the file paths for the plugin-based guest agent binaries on Linux and Windows instances: Component Path on Linux Path on Windows Guest agent manager /usr/bin/google guest agent manager C:\ProgramData\Google\Compute Engine\agent\GCEWindowsAgentManager.exe Core plugin binary /usr/lib/google/guest agent/core plugin C:\Program Files\Google\Compute Engine\agent\CorePlugin.exe Metadata script runner /usr/bin/gce metadata script runner C:\Program Files\Google\Compute Engine\agent\GCEMetadataScriptRunner.exe Monolithic agent binaries The following table lists the file paths for the monolithic guest agent binaries on Linux and Windows instances: Component Path on Linux Path on Windows Guest agent /usr/bin/google guest agent C:\Program Files\Google\Compute Engine\agent\GCEWindowsAgent.exe Metadata script runner /usr/bin/google metadata script runner C:\Program Files\Google\Compute Engine\metadata scripts\GCEMetadataScripts.exe Authorized keys Not applicable C:\Program Files\Google\Compute Engine\agent\GCEAuthorizedKeys.exe Guest agent daemon services The following tables list the guest agent daemon services installed on Linux and Windows instances.
- Component Path on Linux Path on Windows Guest agent compatibility manager /usr/bin/google guest compat manager C:\Program Files\Google\Compute Engine\agent\GCEWindowsCompatManager.exe Metadata script runner compatibility manager /usr/bin/metadata script runner compat C:\Program Files\Google\Compute Engine\metadata scripts\GCECompatMetadataScripts.exe Authorized keys compatibility manager Not applicable C:\Program Files\Google\Compute Engine\agent\GCEWindowsAuthorizedKeysCompat.exe What's next For more information about core plugin functions, see Guest agent functionality Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Running Windows Server Failover Clustering \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command, replacing [YOUR ZONE 1] with the name of your first zone: gcloud compute instances create wsfc - 1 --zone [YOUR ZONE 1] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.4 --network wsfcnet --subnet wsfcnetsub1 --metadata enable-wsfc=true Create the second cluster-node server For the second server, follow the same steps, except: Set the instance name to: wsfc-2 .
- Replace [YOUR ZONE 2] with the name of your second zone: gcloud compute instances create wsfc - 2 --zone [YOUR ZONE 2] --machine-type n1-standard-2 --image-project windows-cloud --image-family windows-2016 --scopes https://www.googleapis.com/auth/compute --can-ip-forward --private-network-ip 10.0.0.5 --network wsfcnet --subnet wsfcnetsub1 --metadata enable-wsfc=true Create the third server for Active Directory For the domain controller, follow the same steps, except: Set the instance name to: wsfc-dc .
- View your firewall rules: gcloud compute firewall-rules list You should see output similar to the following: NAME NETWORK DIRECTION PRIORITY ALLOW DENY DISABLED allow-all-subnet wsfcnet INGRESS 1000 all False allow-rdp wsfcnet INGRESS 1000 tcp:3389 False Enabling failover clustering in Compute Engine To enable failover clustering in the Compute Engine agent, you need to add the flag enable-wsfc=true to your VM definitions either by specifying it as custom metadata for the VM or by creating a configuration file on each VM, as described in the Compute Engine documentation .
- Tip: You can use the gcloud CLI to check which instance is healthy, where [REGION] is your region: gcloud compute backend-services get-health wsfc-lb --region=[REGION] The output looks like the following: backend: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-a/instanceGroups/wsfc-group-1 status: healthStatus: - healthState: HEALTHY instance: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-a/instances/wsfc-1 ipAddress: 10.0.0.4 port: 80 kind: compute#backendServiceGroupHealth --- backend: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-b/instanceGroups/wsfc-group-2 status: healthStatus: - healthState: UNHEALTHY instance: https://compute.googleapis.com/compute/v1/projects/exampleproject/zones/us-central1-b/instances/wsfc-2 ipAddress: 10.0.0.5 port: 80 kind: compute#backendServiceGroupHealth Installing your application Now that you have a cluster, you can set up your application on each node and configure it for running in a clustered environment.

### Guest environment \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Reads data from and writes data to the VM metadata Sends logs to the Windows Application Event Log, serial port, and Cloud Logging guest-agent google-compute-engine-sysprep Contains scripts for generalizing a Windows instance in preparation for creating an OS image.
- Reads data from and writes data to the VM metadata Sends logs to the serial port and optionally Cloud Logging guest-agent google-compute-engine Contains the scripts and files required for system initialization and configuration.
- The guest environment communicates with the metadata server, which is a per-instance HTTP server that runs alongside every Compute Engine instance.
- To install this package, use the following command: googet -noconfirm install google-compute-engine-auto-updater Reads data from VM metadata Calls the GooGet agent to send logs to the Windows Application Event Log and console auto updater google-compute-engine-diagnostics Contains a binary that collects diagnostic information from the instance and saves the information to a Cloud Storage bucket.

