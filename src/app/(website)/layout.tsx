import Header from "@/components/layout/Header";

export default async function WebsiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}
