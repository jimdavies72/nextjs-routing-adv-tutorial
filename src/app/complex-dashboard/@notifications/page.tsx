import Card from "@/components/card"
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <h4>Notifications</h4>
      <div>
        <Link href='/complex-dashboard/archived'>Archived</Link>
      </div>
    </Card>
  );
};

export default Notifications;
