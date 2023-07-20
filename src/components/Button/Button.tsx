interface buttonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: buttonProps) {
  return (
    <button onClick={onClick} className="bg-blue-500 rounded-lg">
      {label}
    </button>
  );
}
