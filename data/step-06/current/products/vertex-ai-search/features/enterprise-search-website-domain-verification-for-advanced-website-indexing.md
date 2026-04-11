---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.967Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search website domain verification for advanced website indexing"
feature_slug: "enterprise-search-website-domain-verification-for-advanced-website-indexing"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
keywords:
  - "enterprise"
  - "search"
  - "website"
  - "domain"
  - "verification"
  - "for"
  - "advanced"
  - "indexing"
---

# Enterprise Search website domain verification for advanced website indexing

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Enterprise Search requires users to verify ownership of website domains when those sites are indexed in data stores with advanced website indexing enabled.

## Extended Definition

Enterprise Search requires users to verify ownership of website domains when those sites are indexed in data stores with advanced website indexing enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)

## Supporting Pages

### "Use structured data for advanced website indexing \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata](https://docs.cloud.google.com/generative-ai-app-builder/docs/add-website-metadata)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Such tags can be used with advanced indexing when you add custom structured data attributes to the data store schema . <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Your web page title</title> <!-- Robots instructions for crawlers and for Vertex AI Search. --> <meta name="robots" content="index,follow"> <!-- Vertex AI Search can use custom datetime fields to filter, boost, and order. --> <meta name="lastModified" content="2024-09-06"> <!-- Vertex AI Search can filter by category or tags. --> <meta name="category" content="archived"> <meta name="tags" content="legacy,interesting,faq"> <!-- Vertex AI Search can index these common HTML tags. --> <meta name="description" content="A description of your web page's content."> <meta name="author" content="Your name or organization"> <meta name="keywords" content="relevant,keywords,separated,by,commas"> <link rel="canonical" href="https://www.yourwebsite.com/this-page"> <meta property="og:title" content="Your Webpage Title"> <meta property="og:description" content="A description of your webpage's content."> <meta property="og:image" content="https://www.yourwebsite.com/image.jpg"> <meta property="og:url" content="https://www.yourwebsite.com/this-page"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary large image"> <meta name="twitter:title" content="Your customized Webpage Title"> <meta name="twitter:description" content="A description of your webpage's content."> <meta name="twitter:image" content="https://www.yourwebsite.com/image.jpg"> </head> <body> ... </body> </html> Example use case for PageMaps Suppose you have several web pages that contain food recipes.
- Home Documentation AI and ML Vertex AI Search Send feedback Use structured data for advanced website indexing Stay organized with collections Save and categorize content based on your preferences.
- If advanced website indexing is enabled in your data store, you can use the following types of structured data to enrich your indexing: Predefined, Google-inferred page dates Custom structured data attributes Metadata using meta tags PageMaps Schema.org data This page introduces both these types of structured data for your web pages and describes how to add custom structured attributes to your data store schema.
- Before you begin Before you update the data store schema, do the following: Turn on advanced website indexing for the data store.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Advanced website indexing incurs additional cost, and requires that you verify domain ownership for any website that you index.
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- If you are using advanced website indexing and the Document usage for the data store is much lower than you expect, then review the URL patterns that you specified for indexing and make sure that the URL patterns specified cover the pages that you want to index and expand them if needed.
- If the data store is not configured as site search (GENERIC vertical and PUBLIC WEBSITE content config), this flag will be ignored. / // const createAdvancedSiteSearch = true / A boolean flag indicating whether to skip the default schema creation for the data store.

### About advanced features \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-advanced-features)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Here are the advanced features that are available: Enterprise edition features Generative responses Advanced website indexing Overview The following table shows Vertex AI Search features and indicates the advanced settings that are required for each feature: Feature Requires Website search (basic website search and advanced website indexing) Enterprise edition CMEK (customer-managed encryption keys) Enterprise edition Snippets for unstructured search No requirements Extractive answers for unstructured search Enterprise edition Extractive segments for unstructured search Enterprise edition Core generative answer features Enterprise edition Advanced generative answer features † Advanced LLM features Search summarization without advanced generative answer features † Enterprise edition Search summarization with advanced generative answer features † Advanced LLM features Search tuning for unstructured data stores Enterprise edition Core generative answer features include all answer generation features except for advanced generative answer features, such as related questions, query simplification, multi-step queries, multi-turn queries, and multimodal answers that return images and charts. † Advanced generative answer features include all answer generation features including related questions, query simplification, multi-step queries, multi-turn queries, and multimodal answers that return images and charts.
- That is, Enterprise edition features are required for any Vertex AI Search app that uses website data (basic website search and advanced website indexing).
- Enterprise edition features are required for any Vertex AI Search app that uses website data for basic website search or advanced website indexing.
- Feature Requires Search summarization using the answer or the search method Advanced LLM features and advanced website indexing Search with follow-ups using the answer or the converse method Advanced LLM features and advanced website indexing Extractive segments and answers Advanced website indexing Search for an image using an image query Advanced website indexing Sitemap-based index and refresh Advanced website indexing Automatic index refresh Advanced website indexing Manual web page refresh Advanced website indexing Add structured data to data store schema Advanced website indexing Lower search latency than basic website search Advanced website indexing Blended search (multiple data stores in a single app) Advanced website indexing Search tuning Advanced website indexing You have the option to turn on advanced website indexing when you create your data store and when you upgrade your data store.

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- Data stores with structured and unstructured data, website data with advanced website indexing, and blended search apps: For these data stores, you need to attach the promote control to the serving config.
- To understand how to write filter expressions, see Filter custom search for structured or unstructured data and Syntax for advanced website indexing .
- To understand how to write filter expressions, see Filter custom search for structured or unstructured data and Syntax for advanced website indexing .

