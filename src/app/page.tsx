type TitleProps = {
  text: string;
  name?: string;
};

function Title({ text, name }: TitleProps) {
  return <h1 className="text-2xl font-bold">{name}</h1>;
}

export default function Home() {
  return <h1>Página Home</h1>;
}
