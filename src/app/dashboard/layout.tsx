import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="dashboard-layout h-screen w-full">
      <DashboardHeader nome="Eric" funcao="Aluno" />
      <DashboardSidebar />
      {children}
    </main>
  );
}
