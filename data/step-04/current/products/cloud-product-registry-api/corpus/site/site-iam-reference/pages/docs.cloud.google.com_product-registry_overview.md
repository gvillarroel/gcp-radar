---
title: "Cloud Product Registry overview \_|\_ Cloud Product Registry API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/product-registry/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/product-registry/overview
source_metadata:
  url: https://docs.cloud.google.com/product-registry/overview
  title: "Cloud Product Registry overview \_|\_ Cloud Product Registry API \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Product Registry API
Guides
Send feedback
Cloud Product Registry overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The Cloud Product Registry API serves as the authoritative source of truth for
first-party Google Cloud products. You can use this API to
programmatically access the official hierarchy of Google Cloud tools,
ensuring your internal catalogs and governance policies rely on accurate,
real-time data.
Data model
The registry organizes resources into a three-tier hierarchy: Product
Suites , Logical Products , and Logical Product Variants . This structure
helps you navigate the relationship between high-level brands and specific,
functional tools.
Product Suite
A Product Suite is a high-level organizational entity, representing a unified
grouping of products that share a common brand and market positioning. It acts
as the umbrella brand that houses related tools, creating a unified family of
solutions. For example, Google Cloud, Google Workspace, and Google Maps.
Distinct marketing presence : The suite features a top-level marketing
page and acts as the primary entry point for discovering related apps and
products. For example, Google Workspace or Google Cloud.
Cohesive grouping : The suite appears publicly as a unified family to
highlight the relationship between products in a shared domain.
External identity : The market identifies the suite as a single group
rather than a loose collection of tools.
Non-purchasable entity : You cannot buy a "Suite" directly. Instead, you
purchase or enable the individual Logical Products housed within it.
Logical Product
A Logical Product is a premier, standalone offering within a Product Suite.
These products are designed to be recognized, purchased, and used as distinct
solutions with clear boundaries.
Customer-centric : The market recognizes this as a separate offering. It
carries a unique brand and aligns with customer expectations.
Fully functional : It includes unique APIs, user interfaces, or clients
that provide distinct, end-to-end functionality. Examples include
Compute Engine, Cloud SQL, and Persistent Disk.
Independent utility : You can purchase the product independently or use
it functionally without forced dependencies on other products.
Expertly managed : A designated product team manages the entire
lifecycle, from launch to sunset.
Supported : It often includes dedicated support options provided directly
by Google.
Logical Product Variant
A Logical Product Variant is a specialized version of a primary product. It
retains the core power and functionality of the main product but is tuned for a
specific technology, use case, or market segment.
Built on a proven core : The variant evolves directly from a primary
product and shares the same underlying architecture.
Purpose-built : The variant is tailored to meet specific customer needs.
For example, Cloud SQL is the product; Cloud SQL for MySQL and
Cloud SQL for PostgreSQL are the variants.
Note: A variant inherits all standard traits of a Logical Product, meaning it is
purchasable, managed, and supported, but adds a layer of specialization.
Capabilities and scope
For this release, the API provides essential metadata for Logical
Products and Logical Product Variants, including:
Name : Resource name of the entity.
Title : Official name of the entity.
Lifecycle Status : The current release stage of the entity.
Exclusions
The API contains only core Google Cloud products. It excludes Google Maps
and Google Workspace products.
Benefits of the Cloud Product Registry
The Cloud Product Registry provides a standardized interface for product
discovery, simplifying how you integrate with the Google Cloud catalog.
Single source of truth : You can eliminate guesswork by accessing the
official record for all Google Cloud product titles, IDs, and
descriptions.
Clear, structured data : The API lets you navigate the relationships
between high-level Product Suites, individual Logical Products, and their
specific Variants.
Access and authentication
Since Cloud Product Registry API exposes public Google data, no additional
IAM permissions are required at project level for accessing this
API.
Quotas and limits
To help ensure fair access and service stability, the API applies project-based
rate limiting. The system tracks your request usage against your
Google Cloud Project ID and enforces standard Queries Per Second (QPS)
limits.
Lifecycle management
Google manages the lifecycle of products through defined processes for
deprecation and restructuring. Understanding these events helps you maintain
stable integrations and anticipate changes to the catalog.
Deprecation
When a Logical Product or Variant is deprecated, the system immediately
restricts it from new sales or registrations. To support legacy customers, the
entity remains visible in the API. The system permanently removes it only after
all associated contracts expire.
Restructuring
Restructuring occurs when an entity's classification changes due to business
expansion. This commonly happens when a standalone Logical Product is
reclassified as a Logical Product Variant or the other way around.
Resource Name: Resource name of the entity changes, due to type change.
API Behavior: All Get & List APIs include additional metadata fields to
convey if an entity is replaced with a different type:
Replaced: Field is set to true if it's restructured.
Replacement: Field contains new resource name of this entity, due to
a type change.
Note: While possible, converting a Variant back into a standalone Logical
Product is extremely rare.
What's next
Explore the following resources to learn more about using the Cloud Product Registry:
Learn how to List and Get Product Suites
Explore how to lookup entities using resource names
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
