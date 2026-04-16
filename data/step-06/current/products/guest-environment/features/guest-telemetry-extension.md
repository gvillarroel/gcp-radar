---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:24.226Z"
product_name: "Guest Environment"
product_slug: "guest-environment"
feature_name: "Guest telemetry extension"
feature_slug: "guest-telemetry-extension"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/images/guest-agent"
  - "https://docs.cloud.google.com/compute/docs/images/guest-environment"
  - "https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes"
  - "https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering"
keywords:
  - "guest"
  - "telemetry"
  - "extension"
  - "the"
  - "agent"
  - "adds"
  - "local"
  - "that"
---

# Guest telemetry extension

Product: Guest Environment
Coverage: MEDIUM

## Step 02 Summary

The guest agent adds a local extension that collects telemetry data about ISVs running on a compute instance.

## Extended Definition

The guest agent adds a local extension that collects telemetry data about ISVs running on a compute instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes)
- [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)

## Supporting Pages

### About the guest agent \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lifecycle management for extensions includes the following: Installation and updates: the guest agent manager installs, starts, stops, and configures extensions based on instructions from VM Extension Manager.
- The components that support this compatibility include the following: Guest agent compatibility manager: this package manages the switch between the plugin-based agent and the monolithic agent.
- Health monitoring: the guest agent manager monitors the health and status of extensions, including their CPU and memory usage, and reports this information back to VM Extension Manager.
- Reduced overhead for extensions : the guest agent manager automatically handles the installation and updates of extensions, reducing the manual effort required to keep them up-to-date.

### Guest environment \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Windows guest agent contains the scripts that run on the guest OS to support Compute Engine features.
- The Linux guest agent contains the scripts that run on the guest OS to support Compute Engine features.
- Reads data from the Google Cloud repositories located at packages.cloud.google.com GooGet google-compute-engine-vss Installs the Compute Engine VSS agent and provider that takes persistent disk snapshots using Microsoft's Volume Shadow Copy Service (VSS) Communicates with the Google Cloud snapshot service vss google-osconfig-agent Contains the OS Config agent, which VM Manager uses to manage OS inventory, patches, and policies.
- To install this package, use the following command: googet -noconfirm install google-compute-engine-auto-updater Reads data from VM metadata Calls the GooGet agent to send logs to the Windows Application Event Log and console auto updater google-compute-engine-diagnostics Contains a binary that collects diagnostic information from the instance and saves the information to a Cloud Storage bucket.

### "Setting and querying guest attributes \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inventory management agents that can publish list of packages installed in the VM instance to guest attributes.
- For example, you can retrieve all of the values for the VM as follows: gcloud compute instances get-guest-attributes VM NAME \ --zone= ZONE To retrieve all of the values under a specific namespace, include the --query-path flag and the namespace that you defined: gcloud compute instances get-guest-attributes VM NAME \ --query-path= NAMESPACE \ --zone= ZONE To retrieve all of the values under a specific namespace, include the --query-path flag, the namespace, and the key for the value that you defined: gcloud compute instances get-guest-attributes VM NAME \ --query-path= NAMESPACE / KEY \ --zone= ZONE Replace the following: VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored ZONE : the zone where the VM is located REST Use the compute.instances.getguestattributes method : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE / KEY Replace the following: PROJECT ID : your project ID ZONE : the zone where your VM is located VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored To retrieve all of the keys for a NAMESPACE , omit the KEY : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE To retrieve all of the keys in each namespace on the VM, omit the NAMESPACE : GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= Alternatively, if you have an OAuth token, you can use curl : curl -H "Authorization: Bearer OAUTH TOKEN " https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /zones/ ZONE /instances/ VM NAME /getGuestAttributes?queryPath= NAMESPACE / KEY Replace the following: OAUTH TOKEN : your OAuth token PROJECT ID : your project ID ZONE : the zone where your VM is located VM NAME : the name of the VM from which you want to read the guest attribute metadata value NAMESPACE : the namespace for the guest-attributes key that you want to query KEY : the path within guest-attributes metadata where the value is stored Deleting guest attributes Use the following instructions to remove guest attributes from within a VM.
- Replace NAMESPACE with the namespace for the guest-attributes key that you want to query. curl http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / -H "Metadata-Flavor: Google" Windows VMs For example, you might use an Invoke-RestMethod request from within your VM to read a value from the guest-attributes metadata path: PS C:\> $value = (Invoke-RestMethod -Headers @{'Metadata-Flavor' = 'Google'} -Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY ") $value Replace the following: NAMESPACE : the namespace for the guest-attributes key that you want to query.
- For example, use Invoke-RestMethod to delete a specific key: PS C:\> $value = (Invoke-RestMethod -Method DELETE -Headers @{'Metadata-Flavor' = 'Google'} -Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY ") $value Replace the following: NAMESPACE : the namespace for the guest-attributes key that you want to delete KEY : the path within guest-attributes where the value is stored Disabling guest attributes on your organization or folder If you don't want any of the VMs in your organization or folder to enable guest attributes, you can override and disable the feature completely.

### "Running Windows Server Failover Clustering \_|\_ Compute Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Putting it together Now that you've reviewed some of the concepts, here are some details to notice about the architecture diagram: The Compute Engine agent for the VM named wsfc-2 is responding to the health check with the value 1, indicating it is the active cluster node.
- Here's how internal load balancing detects the correct node: Each VM instance runs a Compute Engine agent instance that provides support for Windows failover clustering.
- In the properties section for the local server, verify that the Ethernet setting reflects the local server IP address ( 10.0.0.4 , 10.0.0.5 , or 10.0.0.6 ).
- The health check pings the Compute Engine cluster host agent that is running on the active cluster node.

