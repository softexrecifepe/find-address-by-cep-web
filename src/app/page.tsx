import React from "react";

/* eslint-disable @next/next/no-img-element */
type AvatarProps = {
  size: number;
};

function Avatar({ size }: AvatarProps) {
  console.log(size);

  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={size}
      height={size}
    />
  );
}

type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  console.log(children);
  return <div className="p-3 border border-black rounded-lg">{children}</div>;
}

export default function Home() {
  return (
    <div>
      <h1>Página Home</h1>
      <Card>
        <Avatar size={75} />
      </Card>

      <Card>
        <span>teste</span>
        <span>teste</span>
      </Card>
    </div>
  );
}
