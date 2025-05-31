type StartButtonType = {
  buttonName: string;
  action: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function StartButton({ buttonName, action }: StartButtonType) {
  return (
    <button
      onClick={action}
      className=" bg-black py-2 rounded-full text-white hover:bg-black/85 cursor-pointer"
    >
      {buttonName}
    </button>
  );
}
