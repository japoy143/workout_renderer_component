export default function Progressbar({ count }: { count: number }) {
  return (
    <div className="px-8">
      <div className="p-1 h-4 w-full border-black/40 rounded-full border-solid border-2 overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-300 rounded-full"
          style={{ width: `${count}%` }}
        ></div>
      </div>
    </div>
  );
}
