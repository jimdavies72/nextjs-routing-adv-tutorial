
type LayoutProps = {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
};

const DashboardLayout = ({
  children,
  notifications,
  users,
  revenue,
}: LayoutProps) => {
  return (
    <main>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </main>
  );
}

export default DashboardLayout;
