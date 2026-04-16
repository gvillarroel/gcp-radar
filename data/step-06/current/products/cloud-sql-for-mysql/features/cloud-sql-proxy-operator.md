---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.942Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Proxy Operator"
feature_slug: "cloud-sql-proxy-operator"
latest_feature_date: "2023-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
keywords:
  - "sql"
  - "proxy"
  - "operator"
  - "became"
  - "generally"
  - "available"
  - "public"
  - "preview"
---

# Cloud SQL Proxy Operator

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

The Cloud SQL Proxy Operator became generally available; The Cloud SQL Proxy Operator became available in public preview as a Kubernetes operator for connecting GKE workloads to Cloud SQL databases.

## Extended Definition

The Cloud SQL Proxy Operator became generally available; The Cloud SQL Proxy Operator became available in public preview as a Kubernetes operator for connecting GKE workloads to Cloud SQL databases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)

## Supporting Pages

### "Connect using the Cloud SQL Proxy Operator \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator](https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator)
- Source ID: `site-docs-reference-3`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You will need to use the version and cli arguments specified here to use cert-manager on your GKE cluster. helm repo add jetstack https://charts.jetstack.io helm repo update helm install \ cert-manager jetstack/cert-manager \ --namespace cert-manager \ --version "v1.9.1" \ --create-namespace \ --set global.leaderElection.namespace = cert-manager \ --set installCRDs = true Install the Cloud SQL Proxy Operator to your kubernetes cluster: kubectl apply -f https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy-operator/v1.7.6/cloud-sql-proxy-operator.yaml Wait for the Cloud SQL Proxy Operator to start. kubectl rollout status deployment -n cloud-sql-proxy-operator-system cloud-sql-proxy-operator-controller-manager --timeout = 90s Confirm that the Cloud SQL Proxy Operator is installed and running: kubectl get pods -n cloud-sql-proxy-operator-system What's next Learn more about the Cloud SQL Auth Proxy .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Connect using the Cloud SQL Proxy Operator Stay organized with collections Save and categorize content based on your preferences.
- Overview The Cloud SQL Proxy Operator configures applications deployed on Google Kubernetes Engine (GKE) to connect to Cloud SQL database instances using the Cloud SQL Auth Proxy.
- MySQL PostgreSQL SQL Server This page describes how to connect to your Cloud SQL instance using the Cloud SQL Proxy Operator.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.
- This flag isn't available for MySQL 8.0.34 and earlier versions. gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --enable-auto-upgrade-minor-version For detailed information, see the documentation on creating an instance by using gcloud .
- Available only for the beta command ( gcloud beta sql instances create ). --no-assign-ip : Instance will only have a private IP address. --allocated-ip-range-name : If specified, sets a range name for which an IP range is allocated.

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display the current tcp keepalive time value. cat /proc/sys/net/ipv4/tcp keepalive time Set tcp keepalive time to 60 seconds and make it permanent across reboots. echo 'net.ipv4.tcp keepalive time = 60' sudo tee -a /etc/sysctl.conf Apply the change. sudo /sbin/sysctl --load = /etc/sysctl.conf Display the tcp keepalive time value to verify the change was applied. cat /proc/sys/net/ipv4/tcp keepalive time Connect with IPv6 If you get either of the error messages Can't connect to MySQL server on '2001:1234::4321' (10051) Can't connect to MySQL server on '2001:1234::4321' (101) when you connect it is likely that you are attempting to connect to the IPv6 address of your instance but do not have IPv6 available on your workstation.
- Determine the IP address for your application To determine the IP address of a computer running your application so you can authorize access to your Cloud SQL instance from that address, use one of the following options: If the computer is not behind a proxy or firewall, log in to the computer and use the What is my IP? site to determine its IP address.
- For example: gcloud compute networks peerings update cloudsql-mysql-googleapis-com --network = NETWORK --export-subnet-routes-with-public-ip --project = PROJECT ID VPN troubleshooting See the Cloud VPN troubleshooting page.
- For example: gcloud compute networks peerings update cloudsql-mysql-googleapis-com \ --network = NETWORK \ --export-subnet-routes-with-public-ip \ --project = PROJECT ID Here's your current IP address .

