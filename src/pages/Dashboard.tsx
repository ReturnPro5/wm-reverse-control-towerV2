export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Dashboard
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <Card title="Inbound Units" value="12,483" />
        <Card title="Units Processing" value="3,219" />
        <Card title="Units Ready to Ship" value="1,087" />
      </div>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-5">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold text-[#0071DC]">
        {value}
      </div>
    </div>
  );
}
