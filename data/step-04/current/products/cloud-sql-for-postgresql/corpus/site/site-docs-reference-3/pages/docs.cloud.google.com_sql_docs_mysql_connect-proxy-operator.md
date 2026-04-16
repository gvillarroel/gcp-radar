---
title: "Connect using the Cloud SQL Proxy Operator \_|\_ Cloud SQL for MySQL \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/connect-proxy-operator
  title: "Connect using the Cloud SQL Proxy Operator \_|\_ Cloud SQL for MySQL \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Guides
Send feedback
Connect using the Cloud SQL Proxy Operator
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to connect to your Cloud SQL instance using the
Cloud SQL Proxy Operator. For more information about how the Cloud SQL Proxy Operator works, see
About the Cloud SQL Proxy Operator .
Overview
The Cloud SQL Proxy Operator configures applications deployed on Google Kubernetes Engine
(GKE) to connect to Cloud SQL database instances
using the Cloud SQL Auth Proxy. Using the
Cloud SQL Auth Proxy is the recommended
method for connecting to a Cloud SQL instance. To learn more about
the Cloud SQL Auth Proxy, see About the Cloud SQL Auth Proxy .
Applications running in
GKE can connect using the Cloud SQL Auth Proxy .
Before you begin
Before you can connect to a Cloud SQL instance, do the following:
For a user or service account, make sure the account has the
Cloud SQL Client role. This role contains the
cloudsql.instances.connect permission,
which authorizes a principal to connect to all Cloud SQL instances
in a project.
Go to the IAM page
You can optionally include an
IAM condition
in the IAM policy binding that grants the account permission
to connect only to one specific Cloud SQL instance.
Enable the Cloud SQL Admin API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install and initialize the gcloud CLI .
Install the Cloud SQL Proxy Operator
Use the following steps to install the Cloud SQL Proxy Operator.
Confirm that kubectl can connect to your GKE cluster.
kubectl cluster-info
For more information about connecting Google Kubernetes Engine to Cloud SQL, see
Connect from Google Kubernetes Engine .
Install cert-manager using helm. You will need to use the version
and cli arguments specified here to use cert-manager on your
GKE cluster.
helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install \
cert-manager jetstack/cert-manager \
--namespace cert-manager \
--version "v1.9.1" \
--create-namespace \
--set global.leaderElection.namespace = cert-manager \
--set installCRDs = true
Install the Cloud SQL Proxy Operator to your kubernetes cluster:
kubectl apply -f https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy-operator/v1.7.6/cloud-sql-proxy-operator.yaml
Wait for the Cloud SQL Proxy Operator to start.
kubectl rollout status deployment -n cloud-sql-proxy-operator-system cloud-sql-proxy-operator-controller-manager --timeout = 90s
Confirm that the Cloud SQL Proxy Operator is installed and running:
kubectl get pods -n cloud-sql-proxy-operator-system
What's next
Learn more about the Cloud SQL Auth Proxy .
Learn more about Identity and Access Management (IAM) .
Learn more about Service Accounts .
Learn about the
two levels of access control
for Cloud SQL instances.
Create users
and databases .
Learn about
connecting to your instance from your application .
Learn about
MySQL Client .
Learn about options for support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
