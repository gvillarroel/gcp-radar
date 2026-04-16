---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.509Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "IDE editor line wrapping"
feature_slug: "ide-editor-line-wrapping"
latest_feature_date: "2024-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/advanced-visualization-editor"
  - "https://docs.cloud.google.com/looker/docs/chart-config-editor"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "ide"
  - "editor"
  - "line"
  - "wrapping"
  - "looker"
  - "supports"
  - "text"
  - "wrap"
---

# IDE editor line wrapping

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker IDE editor supports text line wrapping, with wrap mode enabled by default and configurable in IDE settings.

## Extended Definition

The Looker IDE editor supports text line wrapping, with wrap mode enabled by default and configurable in IDE settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/advanced-visualization-editor](https://docs.cloud.google.com/looker/docs/advanced-visualization-editor)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- String-based date formats like MM/DD/YYYY and DD-MM-YY are not supported in the to and from HighCharts attributes. { caption : { text : 'This chart uses the HighCharts plotBands attribute to display a band around the Black Friday Cyber Monday sale period.' }, xAxis : { plotBands : [{ to : 1669680000000 , from : 1669248000000 , label : { text : 'BFCM Sale Period' } }] }, } Add dotted and dashed lines To change solid lines to dotted or dashed lines, use the series.dashStyle attribute.
- Home Documentation Data analytics Looker Guides Send feedback Customizing visualizations using the Chart Config Editor Stay organized with collections Save and categorize content based on your preferences.
- If Gemini in Looker features are enabled, you can use the Visualization Assistant to generate JSON formatting options from text-based prompts to accelerate the customization of Looker visualizations.

### "Customizing visualizations using the Chart Config Editor \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/chart-config-editor](https://docs.cloud.google.com/looker/docs/chart-config-editor)
- Source ID: `site-docs-reference-required-4`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- The following HighCharts JSON changes the dashStyle attribute of the Customers series to a dashed line, and the dashStyle attribute of the Sales series to a dotted line. { series : [{ name : 'Customers' , dashStyle : 'Dash' }, { name : 'Sales' , dashStyle : 'Dot' }] } Color the maximum, minimum, and percentile values See the Getting the most out of Looker visualizations cookbook: Conditional formatting customization in Cartesian charts page for an in-depth example about coloring the maximum, minimum, and percentile values of a Cartesian visualization.
- String-based date formats like MM/DD/YYYY and DD-MM-YY are not supported in the to and from HighCharts attributes. { caption : { text : 'This chart uses the HighCharts plotBands attribute to display a band around the Black Friday Cyber Monday sale period.' }, xAxis : { plotBands : [{ to : 1669680000000 , from : 1669248000000 , label : { text : 'BFCM Sale Period' } }] }, } Add dotted and dashed lines To change solid lines to dotted or dashed lines, use the series.dashStyle attribute.
- Home Documentation Data analytics Looker Guides Send feedback Customizing visualizations using the Chart Config Editor Stay organized with collections Save and categorize content based on your preferences.
- If Gemini in Looker features are enabled, you can use the Visualization Assistant to generate JSON formatting options from text-based prompts to accelerate the customization of Looker visualizations.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Enter a valid GoogleSQL query in the Query editor text area.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableCompressed () { // Exports my dataset:my table to gcs://my-bucket/my-file as a compressed file. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , gzip : true , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); const bigquery = new BigQuery (); const storage = new Storage (); async function extractTableToGCS () { // Exports my dataset:my table to gcs://my-bucket/my-file as raw CSV. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const bucketName = "my-bucket"; // const filename = "file.csv"; // Location must match that of the source table. const options = { location : 'US' , }; // Export data from the table into a Google Cloud Storage file const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . extract ( storage . bucket ( bucketName ). file ( filename ), options ); console . log ( Job ${ job . id } created. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- In the PromQL query editor, enter the following query: ( sum by (project id, quota metric, location) (increase({"serviceruntime.googleapis.com/quota/rate/net usage", monitored resource="consumer quota", service="bigquery.googleapis.com"}[1m])) / max by (project id, quota metric, location) ({"serviceruntime.googleapis.com/quota/limit", monitored resource="consumer quota", service="bigquery.googleapis.com", limit name="ExtractBytesPerDay"}) ) > 0.01 If Auto-run isn't enabled, then click Run Query .

