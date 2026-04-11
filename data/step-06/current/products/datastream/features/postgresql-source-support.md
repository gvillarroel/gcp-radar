---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.754Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "PostgreSQL source support"
feature_slug: "postgresql-source-support"
latest_feature_date: "2023-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient"
  - "https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql"
keywords:
  - "postgresql"
  - "source"
  - "datastream"
  - "can"
  - "use"
  - "as"
  - "for"
  - "streaming"
---

# PostgreSQL source support

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream can use PostgreSQL as a source for streaming data; Datastream can use PostgreSQL as a source for streaming data.

## Extended Definition

Datastream can use PostgreSQL as a source for streaming data; Datastream can use PostgreSQL as a source for streaming data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- [https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql](https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 288
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Route The route resource is the child of the private connection resource, used for defining a route for a private connection. get stream get stream ( request : typing .
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. get route get route ( request : typing .

### "Class DatastreamClient (1.18.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamClient)
- Source ID: `site-python-reference`
- Final score: 264
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.Route The route resource is the child of the private connection resource, used for defining a route for a private connection. get stream get stream ( request : typing .
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.ConnectionProfile A set of reusable connection configurations to be used as a source or destination for a stream. get location get location ( request : typing .
- Returns Type Description google.cloud.datastream v1.types.PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. get route get route ( request : typing .

### "Configure an AlloyDB for PostgreSQL database for CDC \_|\_ Datastream \_\

- URL: [https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql](https://docs.cloud.google.com/datastream/docs/configure-alloydb-psql)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that this approach increases the load on both the source database and Datastream: CREATE PUBLICATION PUBLICATION NAME FOR ALL TABLES; For PostgreSQL 15 and later, you can create a publication for all tables in a schema.
- Run the following script to create the TCP proxy and disable bridge networking to avoid connectivity issues: gcloud compute instances create-with-container \ --zone = REGION ID VM NAME \ --container-image gcr.io/dms-images/tcp-proxy \ --tags = dms-tcp-proxy \ --container-env = SOURCE CONFIG = ALLOYDB IP : ALLOYDB PORT \ --can-ip-forward \ --network = SOURCE AND DEST VPC \ --machine-type = VM TIER \ --metadata = startup-script = '#! /bin/bash mkdir -p /etc/docker cat <<EOF > /etc/docker/daemon.json {"bridge":"none"} EOF systemctl restart docker' Replace the following: REGION ID : The region in which you want to create the TCP proxy.
- An example command with updated parameters: gcloud compute instances create-with-container \ --zone = us-central1-c ds-tcp-proxy \ --container-image gcr.io/dms-images/tcp-proxy \ --tags = ds-tcp-proxy \ --container-env = SOURCE CONFIG = 10 .16.0.5:5432 \ --can-ip-forward \ --network = default \ --machine-type = e2-micro --metadata = startup-script = '#! /bin/bash mkdir -p /etc/docker cat <<EOF > /etc/docker/daemon.json {"bridge":"none"} EOF systemctl restart docker' You may receive a prompt to authorize Cloud Shell.
- Use this IP address in the Datastream connection profile configuration. (Optional) Create a firewall rule to limit ingress traffic to the TCP proxy: gcloud compute firewall-rules create FIREWALL RULE NAME \ --direction = INGRESS \ --priority = 1000 \ --target-tags = dms-tcp-proxy \ --network = SOURCE VPC \ --action = ALLOW \ --rules = tcp: ALLOYDB PORT \ --source-ranges = IP RANGE Replace the following: FIREWALL RULE NAME : The name of your firewall rule.

