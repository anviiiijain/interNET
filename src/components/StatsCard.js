import { Card } from "./shared/Card";

export function StatsCard(props) {
  const { title, number } = props;
  return (
    <Card className="p-4 rounded-card" shadow="shadow-2xl">
      <div className="flex items-center justify-evenly">
        <div className="text-3xl w-1/2">{title}</div>
        <div className="bg-yellow-200 w-40 h-40 rounded-full flex items-center justify-center">
          <div className="bg-white w-34 h-34 rounded-full p-2 flex items-center justify-center">
            <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center text-3xl font-medium shadow-lg">
              {number}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
