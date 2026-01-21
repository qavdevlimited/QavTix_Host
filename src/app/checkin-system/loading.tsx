import MetricsContainerLoader from "@/components/loaders/MetricsContainerLoader";
import TableLoader from "@/components/loaders/TableLoader";

export default function LoadingSystemCheckInPage() {
    return (
        <div>
            <MetricsContainerLoader />
            <TableLoader />
        </div>
    )
}