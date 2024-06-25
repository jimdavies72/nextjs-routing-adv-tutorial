
type LayoutProps = {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
};

const DashboardLayout = ({
  children,
  notifications,
  users,
  revenue,
  login,
}: LayoutProps) => {

  const isLoggedIn = true;

  return isLoggedIn ? (
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
  ): (
    login
  );
}

export default DashboardLayout;
