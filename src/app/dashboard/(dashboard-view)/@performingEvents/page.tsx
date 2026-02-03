import { mockPerformingEvents } from "@/components-data/demo-data";
import TopPerformingEventsSlotPW from "@/components/page-wrappers/TopPerformingEventsSlotPW";

const getData = async () => {
  let data: { eventsData: TopPerformingEvent[] } = {
    eventsData: [],
  };

  await new Promise((resolve) => {
    setTimeout(() => {
      data.eventsData = mockPerformingEvents;      
      resolve(true); 
    }, 8000) // 5 second delay
  });

  return data;
}


export default async function PerformingEventsSlot(){

    const data = await getData()

    return (
      <section>
        <TopPerformingEventsSlotPW eventsData={data.eventsData} />
      </section>
    )
}