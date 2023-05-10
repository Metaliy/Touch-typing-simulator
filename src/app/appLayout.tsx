import { Layout } from '@/shared/ui'
import { LayoutHeader } from '@/widgets/LayoutHeader'
import { LayoutProfileCard } from '@/widgets/LayoutProfileCard'
import { Logo } from '@/widgets/Logo'

export const appLayout = (
  <Layout
    headerSlot={
      <LayoutHeader
        rightContentSlot={<LayoutProfileCard />}
        logotypeSlot={<Logo />}
      />
    }
  />
)
