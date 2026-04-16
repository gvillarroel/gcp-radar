---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.991Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search media recommendations data quality check"
feature_slug: "vertex-ai-search-media-recommendations-data-quality-check"
latest_feature_date: "2024-06-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "media"
  - "recommendations"
  - "quality"
  - "check"
  - "adds"
---

# Vertex AI Search media recommendations data quality check

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Adds a requirements check capability that validates the quality of ingested data for media recommendations and surfaces warnings when key model and objective thresholds are not met.

## Extended Definition

Adds a requirements check capability that validates the quality of ingested data for media recommendations and surfaces warnings when key model and objective thresholds are not met.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)

## Supporting Pages

### "Check data quality for media recommendations \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Check data quality for media recommendations Stay organized with collections Save and categorize content based on your preferences.
- About checking media data quality Because recent user events are so important for media recommendations, you must regularly check the quality of your ingested data and user events.
- Check data quality Console To check the quality of your media recommendations data, follow these steps: In the Google Cloud console, go to the AI Applications page.
- Use the requirements:checkRequirement method to check the quality of your media recommendations data, as shown.

### "Introduction to media search and recommendations \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data (documents and user events) are provided for the tutorials so all you need is a Google Cloud project and a billing account to create your first app: Get started with media recommendations Get started with media search Checklists There is a lot of commonality between working with media apps and working with custom apps, but some features apply only to custom apps and other features only to media apps.
- Use the following checklists to guide you through typical workflows specific to media: Media search checklist Media recommendations checklist Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Vertex AI Search Send feedback Introduction to media search and recommendations Stay organized with collections Save and categorize content based on your preferences.
- The page also provides links to more information, tutorials and checklists, to get you started with Vertex AI Search for media.

### "About media app recommendations types \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback About media app recommendations types Stay organized with collections Save and categorize content based on your preferences.
- Default optimization objective: click-through rate Default serving config: N/A Available customizations: Business objective Supported pages for app deployment: Detail page Home page (requires a context item) User event requirements: view-item or media-play for click-through rate objective ( media-play or view-item ) and media-complete for conversion rate objective and watch duration per session objective Most Popular The Most Popular recommendations type recommends media that has been most popular among all users in recent days.
- User event requirements: view-item or media-play for click-through rate objective media-complete and either media-play or view-item for conversion rate objective and watch duration per session objective Recommended for You The Recommended for You recommendations type predicts the next document that a user is most likely to engage with based on the engagement history of that user.
- Recommendations types The following recommendations types are available with media recommendations apps: Others You May Like Recommended for You More Like This Most Popular Others You May Like The Others You May Like recommendations type recommends the next document that a user is most likely to engage with.

