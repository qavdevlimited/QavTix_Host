import { activities, notifications } from "@/components-data/demo-data";
import ActivitySectionPW from "@/components/page-wrappers/ActivitySectionPW";

const getData = async () => {
  let data: { activities: ActivityItem[]; notifications: NotificationItem[] } = {
    activities: [],
    notifications: [],
  };

  await new Promise((resolve) => {
    setTimeout(() => {
      data.activities = activities;
      data.notifications = notifications;
      
      resolve(true); 
    }, 10000); // 5 second delay
  });

  return data;
};


export default async function ActivitySection(){
    
  const data = await getData()

  return (
    <div className="w-full">
      <ActivitySectionPW
        activities={data.activities}
        notifications={data.notifications}
      />
    </div>
  )
}