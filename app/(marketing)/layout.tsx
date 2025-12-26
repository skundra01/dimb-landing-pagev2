import type { Metadata } from 'next'

import { MarketingLayout } from '#components/layout'

export const metadata: Metadata = {
  title: 'DimB - Product Intelligence for Sales',
  description:
    'Unlock the full value of your offering for every customer. Product intelligence at your reps fingertips.',
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
