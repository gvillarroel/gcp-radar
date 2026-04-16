---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.837Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Network tags parameter"
feature_slug: "network-tags-parameter"
latest_feature_date: "2020-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall"
  - "https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "network"
  - "tags"
  - "parameter"
  - "lets"
  - "you"
  - "apply"
  - "all"
  - "worker"
---

# Network tags parameter

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The network tags parameter lets you apply network tags to all worker VMs for a Dataflow job.

## Extended Definition

The network tags parameter lets you apply network tags to all worker VMs for a Dataflow job.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall)
- [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### "Configure internet access and firewall rules \_|\_ Cloud Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall)
- Source ID: `site-docs-reference-2`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Depending on your choice, replace one of the following: NETWORK-NAME : the name of your Compute Engine network SUBNETWORK-NAME : the name of your Compute Engine subnetwork Use tags to secure worker VM networking Tags let you apply network firewall rules to specific VM instances.
- A project owner, editor, or security administrator can use the following gcloud command to create an egress allow rule that permits traffic from TCP ports 12345 and 12346 on VMs with the network tag dataflow to other VMs with the same tag: gcloud compute firewall-rules create FIREWALL RULE NAME EGRESS \ --network = NETWORK \ --action = allow \ --direction = egress \ --target-tags = CUSTOM TAG \ --source-tags = CUSTOM TAG \ --destination-ranges = DESTINATION-RANGES \ --priority = PRIORITY NUM \ --rules tcp:12345-12346 Replace the following: FIREWALL RULE NAME EGRESS : a name for the firewall rule NETWORK : the name of the network that your worker VMs use CUSTOM TAG : a comma-delimited list of network tags The following is a list of guidelines for using network tags: If you omit --target-tags , the rule applies to all VMs in the VPC network.
- A project owner, editor, or security admin can use the following gcloud command to create an ingress allow rule that permits traffic on TCP ports 12345 and 12346 from VMs with the network tag dataflow to other VMs with the same tag: gcloud compute firewall-rules create FIREWALL RULE NAME INGRESS \ --action = allow \ --direction = ingress \ --network = NETWORK \ --target-tags = CUSTOM TAG \ --source-tags = CUSTOM TAG \ --priority = PRIORITY NUM \ --rules tcp:12345-12346 Replace the following: FIREWALL RULE NAME INGRESS : a name for the firewall rule NETWORK : the name of the network that your worker VMs use CUSTOM TAG : a comma-delimited list of network tags The following is a list of guidelines for using network tags: If you omit --target-tags , the rule applies to all VMs in the VPC network.
- To apply network tags to a Dataflow job, use the use network tags experiment , as follows: Java --dataflowServiceOptions=use network tags= TAG NAME Python --dataflow service options=use network tags= TAG NAME Go --dataflow service options=use network tags= TAG NAME gcloud Use the gcloud dataflow jobs run command with the additional-experiments option.

### "Specify a network and subnetwork \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks](https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST h tt ps : //dataflow.googleapis.com/v1b3/projects/[YOUR PROJECT ID]/templates:launch?gcsPath=gs://dataflow-templates/wordcount/template file { "jobName" : " JOB NAME " , "parameters" : { "inputFile" : " INPUT PATH " , "output" : "gs:// STORAGE BUCKET /output" }, "environment" : { "tempLocation" : "gs:// STORAGE BUCKET /temp" , "network" : " NETWORK NAME " , "zone" : "us-central1-f" } } Replace the following: JOB NAME : the name of your Dataflow job (API only) INPUT PATH : the path to your source HOST PROJECT ID : the host project ID REGION : a Dataflow region , like us-central1 STORAGE BUCKET : the storage bucket NETWORK NAME : the name of your Compute Engine network Run your pipeline with the subnetwork specified If you are a Service Project Admin who only has permission to use specific subnetworks in a Shared VPC network, you must specify the subnetwork parameter with a subnetwork that you have permission to use.
- POST https : // dataflow . googleapis . com / v1b3 / projects /[ YOUR PROJECT ID ]/ templates : launch ? gcsPath = gs : // dataflow - templates / wordcount / template file { "jobName" : " JOB NAME " , "parameters" : { "inputFile" : " INPUT PATH " , "output" : "gs:// STORAGE BUCKET /output" } , "environment" : { "tempLocation" : "gs:// STORAGE BUCKET /temp" , "subnetwork" : "https://www.googleapis.com/compute/v1/projects/ HOST PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK NAME " , "zone" : "us-central1-f" } } Replace the following: JOB NAME : the name of your Dataflow job (API only) INPUT PATH : the path to your source HOST PROJECT ID : the host project ID REGION : a Dataflow region , like us-central1 STORAGE BUCKET : the storage bucket SUBNETWORK NAME : the name of your Compute Engine subnetwork Turn off an external IP address To turn off an external IP address, see Configure internet access and firewall rules .
- Guidelines for specifying a subnetwork parameter for Shared VPC When specifying the subnetwork URL for Shared VPC, ensure that HOST PROJECT ID is the project in which the VPC is hosted.
- You can only use the network parameter to select a Shared VPC network if both of the following conditions are true: The Shared VPC network that you select is an auto mode VPC network.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- The following example demonstrates the Google Cloud CLI command: gcloud compute firewall-rules create FIREWALL RULE NAME \ --network NETWORK \ --action allow \ --direction IN \ --target-tags dataflow \ --source-tags dataflow \ --priority 0 \ --rules tcp:12345-12346 Replace the following: FIREWALL RULE NAME : the name of your firewall rule NETWORK : the name of your network Your job is shuffle-bound .
- Rpc to WORKER HARNESS :12345 completed with error UNAVAILABLE: failed to connect to all addresses Server unresponsive (ping error: Deadline Exceeded, UNKNOWN: Deadline Exceeded...) To resolve this issue, use the gcloud compute firewall-rules create rules flag to allow network traffic to ports 12345 and 12346 .
- This issue happens in the following scenarios: The custom SDK container image URL is incorrect The worker lacks credential or network access to the remote image To resolve this issue: If you're using a custom container image with your job, verify that your image URL is correct and has a valid tag or digest.

