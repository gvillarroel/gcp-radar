---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.184Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cloud Asset Inventory support"
feature_slug: "cloud-asset-inventory-support"
latest_feature_date: "2023-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "integrates"
  - "inventory"
  - "asset"
---

# Cloud Asset Inventory support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB integrates with Cloud Asset Inventory.

## Extended Definition

AlloyDB integrates with Cloud Asset Inventory.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://alloydb.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /clusters/ CLUSTER ID ?updateMask=dataplexConfig.enabled" Select-Object -Expand Content You receive a JSON response similar to the following: Response { "kind" : "alloydb#operation" , "targetLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/clusters/CLUSTER ID" , "status" : "PENDING" , "user" : "user@example.com" , "insertTime" : "2024-01-16T02:32:12.281Z" , "operationType" : "UPDATE" , "name" : "OPERATION ID" , "targetId" : "CLUSTER ID" , "selfLink" : "https://alloydb.googleapis.com/v1/projects/PROJECT ID/operations/OPERATION ID" , "targetProject" : "PROJECT ID" } Enrich AlloyDB assets with aspects Aspect types are reusable resources that serve as templates for aspects.
- Knowledge Catalog automatically retrieves the following metadata from AlloyDB clusters, instances, databases, tables, columns, and views: Name Location (Region) Labels (for clusters and instances) Dataplex Integration Enabled (for clusters) Database Version Machine CPU Count (for instances) Availability Type (for instances) Charset (for databases) Collation (for databases) Owner Description (for table, views, columns, and foreign keys) Type (for clusters, instances, and machines) Columns Data Type Mode Primary Key Foreign Keys Referenced Table Column Mappings Creation Time Last modification Time Note: Knowledge Catalog refers to resources in AlloyDB and in other Google Cloud services as assets .
- The format of the query string is as follows: type = "projects/dataplex-types/locations/global/entryTypes/ QUERY STRING " Replace the following: QUERY STRING : use the following list to identify a query string based on the type of AlloyDB asset that you want to query: alloydb-database alloydb-cluster alloydb-instance alloydb-table alloydb-schema alloydb-view An example query might look like the following: type="projects/1234567890/locations/global/entryTypes/alloydb-cluster" Search by aspect type Knowledge Catalog includes a few built-in aspect types that help you perform searches.
- Because AlloyDB syncs in near real-time to Knowledge Catalog, the following resources are available: Clusters Columns Databases Instances Tables Views After discovery is complete, search for these assets— customers table and active users —in the Knowledge Catalog page of the Google Cloud console or by using the API.

### "Perform a vector search \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search](https://docs.cloud.google.com/alloydb/docs/ai/perform-vector-search)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE product inventory ( id INT PRIMARY KEY , product id INT REFERENCES product ( id ), inventory INT , price DECIMAL ( 10 , 2 ) ); Run the following query to insert product data into the product table: INSERT INTO product ( id , name , description , category , color ) VALUES ( 1 , 'Stuffed Elephant' , 'Soft plush elephant with floppy ears.' , 'Plush Toys' , 'Gray' ), ( 2 , 'Remote Control Airplane' , 'Easy-to-fly remote control airplane.' , 'Vehicles' , 'Red' ), ( 3 , 'Wooden Train Set' , 'Classic wooden train set with tracks and trains.' , 'Vehicles' , 'Multicolor' ), ( 4 , 'Kids Tool Set' , 'Toy tool set with realistic tools.' , 'Pretend Play' , 'Multicolor' ), ( 5 , 'Play Food Set' , 'Set of realistic play food items.' , 'Pretend Play' , 'Multicolor' ), ( 6 , 'Magnetic Tiles' , 'Set of colorful magnetic tiles for building.' , 'Construction Toys' , 'Multicolor' ), ( 7 , 'Kids Microscope' , 'Microscope for kids with different magnification levels.' , 'Educational Toys' , 'White' ), ( 8 , 'Telescope for Kids' , 'Telescope designed for kids to explore the night sky.' , 'Educational Toys' , 'Blue' ), ( 9 , 'Coding Robot' , 'Robot that teaches kids basic coding concepts.' , 'Educational Toys' , 'White' ), ( 10 , 'Kids Camera' , 'Durable camera for kids to take pictures and videos.' , 'Electronics' , 'Pink' ), ( 11 , 'Walkie Talkies' , 'Set of walkie talkies for kids to communicate.' , 'Electronics' , 'Blue' ), ( 12 , 'Karaoke Machine' , 'Karaoke machine with built-in microphone and speaker.' , 'Electronics' , 'Black' ), ( 13 , 'Kids Drum Set' , 'Drum set designed for kids with adjustable height.' , 'Musical Instruments' , 'Blue' ), ( 14 , 'Kids Guitar' , 'Acoustic guitar for kids with nylon strings.' , 'Musical Instruments' , 'Brown' ), ( 15 , 'Kids Keyboard' , 'Electronic keyboard with different instrument sounds.' , 'Musical Instruments' , 'Black' ), ( 16 , 'Art Easel' , 'Double-sided art easel with chalkboard and whiteboard.' , 'Arts & Crafts' , 'White' ), ( 17 , 'Finger Paints' , 'Set of non-toxic finger paints for kids.' , 'Arts & Crafts' , 'Multicolor' ), ( 18 , 'Modeling Clay' , 'Set of colorful modeling clay.' , 'Arts & Crafts' , 'Multicolor' ), ( 19 , 'Watercolor Paint Set' , 'Watercolor paint set with brushes and palette.' , 'Arts & Crafts' , 'Multicolor' ), ( 20 , 'Beading Kit' , 'Kit for making bracelets and necklaces with beads.' , 'Arts & Crafts' , 'Multicolor' ), ( 21 , '3D Puzzle' , '3D puzzle of a famous landmark.' , 'Puzzles' , 'Multicolor' ), ( 22 , 'Race Car Track Set' , 'Race car track set with cars and accessories.' , 'Vehicles' , 'Multicolor' ), ( 23 , 'RC Monster Truck' , 'Remote control monster truck with oversized tires.' , 'Vehicles' , 'Green' ), ( 24 , 'Train Track Expansion Set' , 'Expansion set for wooden train tracks.' , 'Vehicles' , 'Multicolor' ); Optional: Run the following query to verify that the data is inserted in the product table: SELECT FROM product ; Run the following query to insert inventory data into the product inventory table: INSERT INTO product inventory ( id , product id , inventory , price ) VALUES ( 1 , 1 , 9 , 13 .
- Install required extensions Run the following query to install the vector and alloydb scann extensions: CREATE EXTENSION IF NOT EXISTS vector ; CREATE EXTENSION IF NOT EXISTS alloydb scann ; Insert product and product inventory data and perform a basic vector search Run the following statement to create a product table that does the following: Stores basic product information.
- Run the following complex vector search query, which returns relevant results that satisfy the query conditions, even with filters: SET LOCAL scann . num leaves to search = 2 ; SELECT FROM product p JOIN product inventory pi ON p . id = pi . product id WHERE pi . price < 80 .
- Before you begin Note: If you already performed the steps in this section, proceed directly to Insert product and product inventory data and perform a basic vector search and continue the tutorial.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Dashboards & Data Viz for Google AlloyDB Mode integration with AlloyDB Partner Advantage page Direct link PuppyGraph Solution PuppyGraph Category Graph Query Engine Description PuppyGraph is a comprehensive graph analytics engine that integrates seamlessly with your existing lakehouse, such as Apache Iceberg, Apache Hudi, and Delta Lake.
- Partner references AlloyDB integration with Denodo Denodo for Google Cloud Platform Partner Advantage page Direct link Estuary Solution Estuary Flow Category Data Integration / Migration Description Estuary builds a DataOps platform called Estuary Flow that integrates all of the systems you use to produce, process, and consume data.
- Through its "Trusted Adapter" for AlloyDB, dbt Cloud integrates directly with AlloyDB, enabling users to efficiently build, test, and deploy data models inside their AlloyDB instance.
- Data virtualization is a logical data layer that integrates all enterprise information across the disparate systems.

