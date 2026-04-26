# Step 08 Data

Step 08 stores product-level cards built from Step 06 extended feature
definitions, Step 07 quality gates, Step 04 supporting evidence, and Step 05
IAM role metadata when available.

Canonical output layout:

- `current/index.json`: machine-readable product-card index
- `current/index.md`: human-readable product-card index
- `current/products/<product-slug>/card.json`: full product card and compact feature inventory, when emitted by the current card builder
- `current/products/<product-slug>/card.md`: human-readable product card summary
- `current/products/<product-slug>/features-1.md`: paginated feature inventory, when emitted by markdown-only card runs
- optional `features-2.md` and higher for large products

The card is not yet the final published radar report. It is the first durable
per-product card layer that can later feed validated artifacts and final
reports.
