import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <h4>Archived Notifications</h4>
      <div>
        <Link href="/complex-dashboard/">Default</Link>
      </div>
    </Card>
  );
};

export default ArchivedNotifications;
