interface DashboardPageTitleProps {
  label: string;
}

export default function DashboardPageTitle({ label }: DashboardPageTitleProps) {
  return (
    <div className="p-8">
      <span className="font-semibold text-4xl">{label}</span>
    </div>
  );
}
