---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.444Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Unauthenticated URLs for public Analytics Hub listings"
feature_slug: "unauthenticated-urls-for-public-analytics-hub-listings"
latest_feature_date: "2024-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
  - "https://docs.cloud.google.com/bigquery/docs/visualize-jupyter"
keywords:
  - "unauthenticated"
  - "urls"
  - "public"
  - "analytics"
  - "hub"
  - "listings"
  - "can"
  - "generate"
---

# Unauthenticated URLs for public Analytics Hub listings

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub can generate unauthenticated URLs for public listings.

## Extended Definition

Analytics Hub can generate unauthenticated URLs for public listings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)

## Supporting Pages

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Click Copy public link to generate an unauthenticated listing URL.
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.subscriber role to group:subscribers@example.com , add the following binding to the policy: { "members": [ "group:subscribers@example.com" ], "role":"roles/analyticshub.subscriber" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.
- Note: After you grant licenses to users to access non-Cloud Marketplace-integrated commercial listings, you can either create a private listing for those users, or grant those users the Analytics Hub Subscriber ( roles/analyticshub.subscriber ) role for your commercial listing.

### "Visualize geospatial analytics data using a Colab notebook \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- This code uses the %%bigquery magic function to run the query and return the results in a DataFrame: Query the neighborhood name and geometry from the San Francisco neighborhoods dataset. %% bigquery gdf sanfrancisco neighborhoods -- project { GCP PROJECT ID } -- use geodataframe geometry SELECT neighborhood , neighborhood geom AS geometry FROM bigquery - public - data . san francisco neighborhoods . boundaries Click play circle filled Run cell .
- You use the public datasets to create the following visualizations: A scatter plot of all bike share stations from the Ford GoBike Share dataset Polygons in the San Francisco Neighborhoods dataset A choropleth map of the number of bike share stations by neighborhood A heatmap of incidents from the San Francisco Police Department Reports dataset Objectives Set up authentication with Google Cloud and, optionally, Google Maps.
- You then import the h3 and pydeck libraries and the following Python geospatial libraries: geopandas to extend the data types used by pandas to allow spatial operations on geometric types. shapely for manipulation and analysis of individual planar geometric objects. branca to generate HTML and JavaScript colormaps. geemap.deck for visualization with pydeck and earthengine-api .
- They are decomposed components of the geometry. %% bigquery gdf sf bikestations -- project { GCP PROJECT ID } -- use geodataframe station geom SELECT station id , name , short name , station geom FROM bigquery - public - data . san francisco bikeshare . bikeshare station info Click play circle filled Run cell .

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Discover listings To discover public and private listings, follow these steps: In the Google Cloud console, go to the Sharing (Analytics Hub) page.
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.
- POST https://analyticshub.googleapis.com/v1/projects/ PROJECT ID /location/ LOCATION /dataExchanges/ DATAEXCHANGE ID /listings/ LISTING ID :subscribe Replace the following: PROJECT ID : the project ID of the listing that you want to subscribe to.
- In the Filters section, you can filter listings based on the following fields: Listings : select whether you want to view private listings, public listings, or listings within your organization.

