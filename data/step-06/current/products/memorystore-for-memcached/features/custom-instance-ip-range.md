---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.244Z"
product_name: "Memorystore for Memcached"
product_slug: "memorystore-for-memcached"
feature_name: "Custom instance IP range"
feature_slug: "custom-instance-ip-range"
latest_feature_date: "2023-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/memcached/create-manage-instances"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/connect-memcached-instance"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console"
keywords:
  - "custom"
  - "instance"
  - "ip"
  - "range"
  - "you"
  - "can"
  - "create"
  - "memcached"
---

# Custom instance IP range

Product: Memorystore for Memcached
Coverage: MEDIUM

## Step 02 Summary

You can create a Memcached instance that uses a specific IP address range.

## Extended Definition

You can create a Memcached instance that uses a specific IP address range.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/memcached/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/memcached/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/memcached/connect-memcached-instance](https://docs.cloud.google.com/memorystore/docs/memcached/connect-memcached-instance)
- [https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud](https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud)
- [https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console](https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console)

## Supporting Pages

### "Create and manage Memcached instances \_|\_ Memorystore for Memcached \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/memcached/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: gcloud memcache instances create myinstance --node-count=3 --node-cpu=2 --node-memory=2GB --region=us-central1 --zones=us-central1-a,us-central1-b,us-central1-c --memcached-version=1.6.15 Creating a Memcached instance that uses a specific IP address range Console Follow the instructions at Creating Memcached instances until you reach the Select IP ranges (optional) section.
- For instructions on creating and listing IP range allocations for private services access, see Create an IP allocation and List allocated IP address ranges . gcloud Create a Memcached instance: gcloud memcache instances create instance-id --node-count= number-of-nodes --node-cpu= number-of-cpus --node-memory= memory-per-node --region= region --zones= zone(s) --authorized-network= network --reserved-ip-range-id= range-name(s) Replace the following: instance-id is the ID assigned to the instance.
- For example: gcloud memcache instances create myinstance --node-count=3 --node-cpu=2 --node-memory=2GB --region=us-central1 --zones=us-central1-a,us-central1-b,us-central1-c --authorized-network=projects/my-project-335118/global/networks/default --reserved-ip-range-id=myrange1,myrange2 Viewing instance information To view an instance's information: Console Go to the Memorystore for Memcached page in the Google Cloud console.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.

### "Connect to a Memcached instance \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/connect-memcached-instance](https://docs.cloud.google.com/memorystore/docs/memcached/connect-memcached-instance)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run these three commands, replacing reserved-ip-range with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" reserved-ip-range " ./install.sh Note: If you don't know the reserved IP range of your instance, you can find out by running the following command: gcloud memcache instances describe instance-id --region= region For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- If you used a Debian based image to create your VM instance as described in the quickstart, install telnet using apt-get : sudo apt-get install telnet From the terminal, telnet to the IP address of one of the Memcached nodes, replacing variables with appropriate values. telnet node-ip-address 11211 If it works correctly, you should see the following output with the [bracketed-variables] replaced by your project's variables: Trying [node-ip-address] Connected to [node-ip-address] In the telnet session, enter some Memcached commands: Enter: get greeting Result: END Enter: set greeting 1 0 11 hello world Result: STORED Enter: get greeting Result: VALUE greeting 1 11 hello world END Memorystore for Memcached supports standard open source Memcached libraries.
- Connecting to a Memcached instance from a Google Kubernetes Engine cluster Note: You cannot connect to a Memorystore for Memcached instance from a Google Kubernetes Engine cluster without VPC-native/IP aliasing enabled.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.

### "Quickstart: Create a Memorystore for Memcached instance by using the gcloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud](https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-gcloud)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the project you'd like to create your instance in as the default project in gcloud by entering the following command: gcloud config set core/project project-id Enter the following command to create a Memcached instance with 3 nodes (each node with 4 cores and 10GB memory) in the us-central1 region: gcloud memcache instances create myinstance --node-count=3 --node-cpu=4 \ --node-memory=10GB --region=us-central1 --memcached-version=1.6.15 After you create the instance, run the following describe command, and write down the IP address of one of your nodes. gcloud memcache instances describe myinstance --region=us-central1 Connecting to your instance from a Compute Engine VM Note: The connecting client must be located in the same region as the Memcached instance.
- If you used a Debian based image to create your VM instance as described in the quickstart, install telnet using apt-get : sudo apt-get install telnet From the terminal, telnet to the IP address of one of the Memcached nodes, replacing variables with appropriate values. telnet node-ip-address 11211 If it works correctly, you should see the following output with the [bracketed-variables] replaced by your project's variables: Trying [node-ip-address]… Connected to [node-ip-address] In the telnet session, enter some Memcached commands: Enter: get greeting Result: END Enter: set greeting 1 0 11 hello world Result: STORED Enter: get greeting Result: VALUE greeting 1 11 hello world END Memorystore for Memcached supports standard open source Memcached libraries.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.
- Caution: You cannot create a Memorystore for Memcached instance without first having a private services access connection established.

### "Quickstart: Create a Memorystore for Memcached instance by using the Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console](https://docs.cloud.google.com/memorystore/docs/memcached/create-instance-console)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you used a Debian based image to create your VM instance as described in the quickstart, install telnet using apt-get : sudo apt-get install telnet From the terminal, telnet to the IP address of one of the Memcached nodes.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.
- Caution: You cannot create a Memorystore for Memcached instance without first having a private services access connection established.
- Create a Memorystore for Memcached instance by using the Google Cloud console This quickstart walks you through the steps to create a Memorystore for Memcached instance, connect to the instance, set a value, retrieve a value, and delete the instance.

