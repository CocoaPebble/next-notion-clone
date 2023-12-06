import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    userId: v.string(),
    content: v.optional(v.string()),

    parentDocument: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    icon: v.optional(v.string()),
    
    isArchived: v.optional(v.boolean()),
    isPublished: v.optional(v.boolean()),
  })
    .index("by_userId", ["userId"])
    .index("by_parentDocument", ["userId", "parentDocument"]),
});
