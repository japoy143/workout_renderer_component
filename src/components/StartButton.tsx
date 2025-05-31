type StartButtonType = {
  buttonName: string;
};

export default function StartButton({ buttonName }: StartButtonType) {
  return (
    <button className=" bg-black py-2 rounded-full text-white hover:bg-black/85 cursor-pointer">
      {buttonName}
    </button>
  );
}
