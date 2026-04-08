---
title: "Node.js client libraries | Google Cloud Documentation"
url: "https://docs.cloud.google.com/nodejs/docs/reference/assured-workloads/latest"
knowledge_key: "corpus"
source_id: "site-docs-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Node.js client libraries | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/nodejs/docs/reference/assured-workloads/latest

Enable the Assured Workloads for Government API. Set up authentication with a service account so you can access the API from your local workstation. ... /** * TODO(developer): Uncomment these variables before running the sample. */ // const projectId = &#x27;my-project&#x27;; // Imports the Google Cloud Some API library const { AssuredWorkloadsServiceClient, } = require(&#x27;@google-cloud/assured-workloads&#x27;); const client = new AssuredWorkloadsServiceClient(); async function listWorkloads() { const [workloads] = await client.listWorkloads({ parent: `organizations/${projectId}`, }); for (const workload of workloads) { console.info(workload); } } listWorkloads();
