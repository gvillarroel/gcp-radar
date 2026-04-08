---
title: "BigQuery API Client Libraries | Google Cloud Documentation"
url: "https://docs.cloud.google.com/bigquery/docs/reference/libraries"
knowledge_key: "corpus"
source_id: "site-docs-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# BigQuery API Client Libraries | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/bigquery/docs/reference/libraries

// Import the Google Cloud client library using default credentials const {BigQuery} = require(&#x27;@google-cloud/bigquery&#x27;); const bigquery = new BigQuery(); async function query() { // Queries the U.S. given names dataset for the state of Texas. const query = `SELECT name FROM \`bigquery-public-data.usa_names.usa_1910_2013\` WHERE state = &#x27;TX&#x27; LIMIT 100`; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query: query, // Location must match that of the dataset(s) referenced in the query.
