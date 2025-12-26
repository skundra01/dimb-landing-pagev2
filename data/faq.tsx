import * as React from 'react'

const faq = {
  title: 'Common questions',
  // description: '',
  items: [
    {
      q: 'What kinds of product relationships can DimB handle?',
      a: (
        <>
          Cross-references (your SKU vs. competitor SKU), supersessions (old part → new part), compatibility (this filter fits these respirators), substitutes (use this when that's out of stock), and accessories or complements (products commonly sold together). You can also define custom relationship types specific to your business.
        </>
      ),
    },
    {
      q: 'How long does implementation take?',
      a: "Most distributors are up and running in 2-4 weeks. You don't need clean data or a perfect taxonomy to start — DimB is designed to work with messy, real-world product catalogs.",
    },
    {
      q: 'Does DimB replace our ERP or PIM?',
      a: "No. DimB sits alongside your existing systems. It reads product data from your ERP or PIM and provides relationship intelligence back to your team through integrations or a standalone interface. Think of it as a layer on top of what you already have.",
    },
    {
      q: 'What if our product data is messy or incomplete?',
      a: "That's normal, and DimB is built for it. We help you start with the highest-value relationships and expand over time. You don't need to boil the ocean to get value.",
    },
    {
      q: 'How is this different from sales enablement tools?',
      a: "Sales enablement tools help reps learn how to pitch. DimB solves a different problem: knowing what products go together. It's product intelligence, not sales training. The output is \"recommend this SKU,\" not \"here's a talk track.\"",
    },
    {
      q: 'Who owns the data? Can DimB make changes without approval?',
      a: "Your product experts own the data. DimB can suggest relationships based on patterns, but every suggestion goes through your team for review before it's visible to reps. Nothing goes live without human approval.",
    },
  ],
}

export default faq
